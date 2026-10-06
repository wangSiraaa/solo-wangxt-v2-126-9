// 三维球面视图：Three.js 渲染本地地平坐标系下的天球。
// 固定约定（astronomy-engine 数值校验）：x=北、y=西、z=天顶。
// 恒星/太阳系天体绘制在"单位天球"上；相机位于球心内侧向外看。
//
// 与二维图一致：视场按球面角距圈定（FOV 边界用大圆弧采样），
// 地平圈就是 z=0 的大圆；两者都是真正的大圆/小圆几何，不做平面近似。

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import type { SkyModel, SkyTarget } from '../lib/computeSky';
import type { FovConfig, Annotation } from '../types';
import { DEG } from '../lib/geoMath';

interface GlobeViewProps {
  sky: SkyModel;
  fov: FovConfig;
  horizonClip: boolean;
  showGraticule: boolean;
  annotations: Annotation[];
  selectedId: string | null;
  hoverId: string | null;
  onSelect: (id: string | null) => void;
  onHover: (id: string | null) => void;
  /** 由外部（点击二维图后）驱动相机转向某目标的请求 */
  focusToken: { id: string; nonce: number } | null;
  /** J2000 经纬网在本地地平直角坐标中的采样 */
  graticuleHorizontal?: { parallels: number[][][]; meridians: number[][][] };
}

const SPHERE_R = 1;

function starColor(t: SkyTarget): THREE.Color {
  if (t.kind === 'sun') return new THREE.Color(0xffd27d);
  if (t.kind === 'moon') return new THREE.Color(0xdfe6f2);
  if (t.kind === 'planet') return new THREE.Color(0x9ecbff);
  // 恒星：简单按星等给冷暖（科普示意，不做完整色指数）
  return new THREE.Color(0xffffff);
}

function markerShape(kind: SkyTarget['kind']): 'circle' | 'square' | 'diamond' {
  if (kind === 'sun' || kind === 'moon') return 'diamond';
  if (kind === 'planet') return 'square';
  return 'circle';
}

export default function GlobeView(props: GlobeViewProps) {
  const { sky, fov, horizonClip, showGraticule, annotations, selectedId, hoverId } = props;
  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<GlobeScene | null>(null);
  const [glError, setGlError] = useState<string | null>(null);

  // 场景只创建一次
  useEffect(() => {
    if (!mountRef.current) return;
    try {
      const scene = new GlobeScene(mountRef.current, props);
      stateRef.current = scene;
      return () => {
        scene.dispose();
        stateRef.current = null;
      };
    } catch (e) {
      setGlError('当前环境无法初始化 WebGL，三维球面视图不可用（右侧两种投影不受影响）。');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 数据/选择变化时更新
  useEffect(() => {
    stateRef.current?.update(props);
  });

  // 外部聚焦请求
  useEffect(() => {
    if (!props.focusToken) return;
    const t = sky.targets.find((x) => x.id === props.focusToken!.id);
    if (t) stateRef.current?.flyTo(t.hx, t.hy, t.hz);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.focusToken?.nonce]);

  return (
    <div className="globe-wrap">
      {glError ? (
        <div className="globe-mount globe-error">{glError}</div>
      ) : (
        <div ref={mountRef} className="globe-mount" />
      )}
      <div className="globe-hint">
        拖拽旋转 · 滚轮缩放 · 点击星点定位（与右侧两图联动）
        <br />
        地平坐标系：红圈=地平（N/E/S/W），绿圈=视场（角半径 {fov.radiusDeg.toFixed(1)}°），网格=J2000 赤道坐标
        {horizonClip ? ' · 已开启地平线裁切' : ''}
      </div>
    </div>
  );
}

// ---------------- Three.js 场景封装 ----------------

interface DragState {
  active: boolean;
  x: number;
  y: number;
  moved: number;
}

class GlobeScene {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private raf = 0;
  private mount: HTMLDivElement;
  private resizeObs: ResizeObserver;
  private points!: THREE.Points;
  private pointMaterial!: THREE.ShaderMaterial;
  private fovLine!: THREE.LineLoop;
  private horizonLine!: THREE.LineLoop;
  private groundDisc!: THREE.Line;
  private graticuleGroup = new THREE.Group();
  private equatorLine: THREE.Line | null = null;
  private highlight: THREE.Mesh;
  private labelsGroup = new THREE.Group();
  private annotationsGroup = new THREE.Group();
  private raycaster = new THREE.Raycaster();
  private pickSphere: THREE.Mesh;
  private drag: DragState = { active: false, x: 0, y: 0, moved: 0 };
  private camDir = new THREE.Vector3(0, 0, 1);
  private camTargetDir = new THREE.Vector3(0, 0, 1);
  private props: GlobeViewProps;
  private positionData: Array<{ id: string; vec: THREE.Vector3 }> = [];
  private disposed = false;

  constructor(mount: HTMLDivElement, props: GlobeViewProps) {
    this.mount = mount;
    this.props = props;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x070a14);

    this.camera = new THREE.PerspectiveCamera(60, 1, 0.01, 10);
    this.camera.position.set(0, 0, 0.0001);
    this.camera.up.set(0, 0, 1);
    this.camera.lookAt(this.camDir);

    // 拾取用的不可见天球（相机在内侧，需 BackSide）
    this.pickSphere = new THREE.Mesh(
      new THREE.SphereGeometry(SPHERE_R, 48, 32),
      new THREE.MeshBasicMaterial({ visible: false, side: THREE.BackSide })
    );
    this.scene.add(this.pickSphere);

    // 选中高亮环
    this.highlight = new THREE.Mesh(
      new THREE.RingGeometry(0.022, 0.032, 32),
      new THREE.MeshBasicMaterial({ color: 0xffd54a, side: THREE.DoubleSide, transparent: true, opacity: 0.95 })
    );
    this.highlight.visible = false;
    this.scene.add(this.highlight);

    this.scene.add(this.graticuleGroup);
    this.scene.add(this.labelsGroup);
    this.scene.add(this.annotationsGroup);

    this.initStars();
    this.initStaticFrames();

    this.resize();
    this.resizeObs = new ResizeObserver(() => this.resize());
    this.resizeObs.observe(mount);

    this.bindEvents();
    this.update(props);
    this.animate();
  }

  private initStars() {
    const n = 256;
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(n * 3);
    const sizes = new Float32Array(n);
    const colors = new Float32Array(n * 3);
    const shapes = new Float32Array(n);
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geom.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
    geom.setAttribute('aShape', new THREE.BufferAttribute(shapes, 1));
    geom.setDrawRange(0, 0);

    this.pointMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { uPxRatio: { value: this.renderer.getPixelRatio() } },
      vertexShader: `
        attribute float aSize;
        attribute vec3 aColor;
        attribute float aShape;
        uniform float uPxRatio;
        varying vec3 vColor;
        varying float vShape;
        void main() {
          vColor = aColor;
          vShape = aShape;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uPxRatio * 220.0 / -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying vec3 vColor;
        varying float vShape;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          float alpha = 0.0;
          if (vShape < 0.5) {
            // 圆星点
            alpha = smoothstep(0.5, 0.18, d);
          } else if (vShape < 1.5) {
            // 方形（行星）
            vec2 q = abs(uv);
            alpha = (max(q.x, q.y) < 0.34) ? 1.0 : 0.0;
          } else {
            // 菱形（日月）
            float d2 = abs(uv.x) + abs(uv.y);
            alpha = smoothstep(0.5, 0.3, d2);
          }
          if (alpha <= 0.01) discard;
          gl_FragColor = vec4(vColor, alpha);
        }`
    });

    this.points = new THREE.Points(geom, this.pointMaterial);
    this.points.frustumCulled = false;
    this.scene.add(this.points);
  }

  private makeLine(points: THREE.Vector3[], color: number, opacity = 1): THREE.LineLoop {
    const geom = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({ color, transparent: opacity < 1, opacity });
    return new THREE.LineLoop(geom, mat);
  }

  private initStaticFrames() {
    // 地平圈 z=0
    const hzPts: THREE.Vector3[] = [];
    for (let i = 0; i < 128; i++) {
      const a = (2 * Math.PI * i) / 128;
      hzPts.push(new THREE.Vector3(Math.cos(a), -Math.sin(a), 0));
    }
    this.horizonLine = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(hzPts),
      new THREE.LineBasicMaterial({ color: 0xff5d5d })
    );
    this.scene.add(this.horizonLine);

    // 地面半球提示（地平以下淡红色网格罩）
    const groundPts: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const a = (2 * Math.PI * i) / 128;
      groundPts.push(new THREE.Vector3(Math.cos(a) * SPHERE_R, -Math.sin(a) * SPHERE_R, -0.002));
    }
    this.groundDisc = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([...groundPts, new THREE.Vector3(0, 0, -SPHERE_R * 0.98), groundPts[0]]),
      new THREE.LineBasicMaterial({ color: 0xff5d5d, transparent: true, opacity: 0.25 })
    );
    this.scene.add(this.groundDisc);

    // 方位基点标签
    const cardinals: Array<[string, number, number, number]> = [
      ['N 北', 1, 0, 0],
      ['E 东', 0, -1, 0],
      ['S 南', -1, 0, 0],
      ['W 西', 0, 1, 0]
    ];
    for (const [label, x, y, z] of cardinals) {
      this.labelsGroup.add(this.makeTextSprite(label, new THREE.Vector3(x, y, z), '#ff8a8a'));
    }
    // 天顶/天底
    this.labelsGroup.add(this.makeTextSprite('天顶 Z', new THREE.Vector3(0, 0, 1), '#9fd0ff'));
    this.labelsGroup.add(this.makeTextSprite('天底', new THREE.Vector3(0, 0, -1), '#8a6a6a'));
  }

  private makeTextSprite(text: string, pos: THREE.Vector3, color: string): THREE.Sprite {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    ctx.font = '28px sans-serif';
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 32);
    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false });
    const sp = new THREE.Sprite(mat);
    sp.position.copy(pos.clone().multiplyScalar(SPHERE_R * 1.01));
    sp.scale.set(0.09, 0.0225, 1);
    return sp;
  }

  // J2000 赤道格网点在 update() 中由父组件预算的地平向量构建
  private bindEvents() {
    const el = this.renderer.domElement;
    el.style.cursor = 'grab';

    const down = (e: PointerEvent) => {
      this.drag = { active: true, x: e.clientX, y: e.clientY, moved: 0 };
      el.setPointerCapture(e.pointerId);
      el.style.cursor = 'grabbing';
    };
    const move = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      if (this.drag.active) {
        const dx = e.clientX - this.drag.x;
        const dy = e.clientY - this.drag.y;
        this.drag.moved += Math.abs(dx) + Math.abs(dy);
        this.drag.x = e.clientX;
        this.drag.y = e.clientY;
        this.orbit(dx, dy);
      } else {
        // hover
        const id = this.pick(e.clientX - rect.left, e.clientY - rect.top);
        this.props.onHover(id);
        el.style.cursor = id ? 'pointer' : 'grab';
      }
    };
    const up = (e: PointerEvent) => {
      if (this.drag.active && this.drag.moved < 5) {
        const rect = el.getBoundingClientRect();
        const id = this.pick(e.clientX - rect.left, e.clientY - rect.top);
        this.props.onSelect(id);
      }
      this.drag.active = false;
      el.style.cursor = 'grab';
    };
    const wheel = (e: WheelEvent) => {
      e.preventDefault();
      const fov = THREE.MathUtils.clamp(this.camera.fov + e.deltaY * 0.05, 8, 100);
      this.camera.fov = fov;
      this.camera.updateProjectionMatrix();
    };

    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    el.addEventListener('wheel', wheel, { passive: false });

    this.cleanupEvents = () => {
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      el.removeEventListener('wheel', wheel);
    };
  }

  private cleanupEvents: () => void = () => {};

  /** 绕天顶轴与水平轴旋转相机注视方向 */
  private orbit(dxPx: number, dyPx: number) {
    const speed = 0.25;
    const f = this.camDir;
    const up = new THREE.Vector3(0, 0, 1);
    // 相机在球心内向外看，屏幕右方向 = up × f（而不是 f × up）
    const right = new THREE.Vector3().crossVectors(up, f).normalize();
    const q = new THREE.Quaternion().setFromAxisAngle(up, (-dxPx * speed * Math.PI) / 180);
    const q2 = new THREE.Quaternion().setFromAxisAngle(right, (-dyPx * speed * Math.PI) / 180);
    f.applyQuaternion(q).applyQuaternion(q2).normalize();
    // 防止在天顶/天底处翻转过头
    if (Math.abs(f.z) > 0.999) {
      f.z = Math.sign(f.z) * 0.999;
      f.normalize();
    }
    this.camTargetDir.copy(f);
    this.everMoved = true;
  }

  private pick(xPx: number, yPx: number): string | null {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2((xPx / rect.width) * 2 - 1, -(yPx / rect.height) * 2 + 1);
    this.raycaster.setFromCamera(ndc, this.camera);
    void this.raycaster;
    // 把每个星点投影到屏幕，取 10px 容差内、与视线夹角最小者（真三维拾取）
    let best: { id: string; dot: number } | null = null;
    for (const d of this.positionData) {
      const v = d.vec;
      const dot = v.dot(this.camDir);
      if (dot <= 0) continue;
      const proj = v.clone().project(this.camera);
      const sx = ((proj.x + 1) / 2) * rect.width;
      const sy = ((-proj.y + 1) / 2) * rect.height;
      const px = ((ndc.x + 1) / 2) * rect.width;
      const py = ((-ndc.y + 1) / 2) * rect.height;
      if (Math.hypot(sx - px, sy - py) < 10 && (!best || dot > best.dot)) {
        best = { id: d.id, dot };
      }
    }
    return best?.id ?? null;
  }

  flyTo(x: number, y: number, z: number) {
    this.camTargetDir.set(x, y, z).normalize();
    this.camera.fov = 35;
    this.camera.updateProjectionMatrix();
  }

  private updateStars(sky: SkyModel, horizonClip: boolean) {
    const visible = sky.targets.filter((t) => t.inFov && t.passesMag && (!horizonClip || t.aboveHorizon));
    const max = this.points.geometry.getAttribute('position').count;
    const count = Math.min(visible.length, max);
    const pos = this.points.geometry.getAttribute('position') as THREE.BufferAttribute;
    const sizes = this.points.geometry.getAttribute('aSize') as THREE.BufferAttribute;
    const colors = this.points.geometry.getAttribute('aColor') as THREE.BufferAttribute;
    const shapes = this.points.geometry.getAttribute('aShape') as THREE.BufferAttribute;

    this.positionData = [];
    for (let i = 0; i < count; i++) {
      const t = visible[i];
      const v = new THREE.Vector3(t.hx, t.hy, t.hz).multiplyScalar(SPHERE_R);
      pos.setXYZ(i, v.x, v.y, v.z);
      const isSel = t.id === this.props.selectedId || t.id === this.props.hoverId;
      // 星等 -> 尺寸：亮星更大；太阳系天体放大
      let size = THREE.MathUtils.clamp(2.6 - t.mag * 0.28, 0.5, 3.4) * 0.012;
      if (t.kind !== 'star') size = Math.max(size, 0.04);
      if (isSel) size *= 1.6;
      sizes.setX(i, size);
      const c = starColor(t);
      colors.setXYZ(i, c.r, c.g, c.b);
      shapes.setX(i, markerShape(t.kind) === 'circle' ? 0 : markerShape(t.kind) === 'square' ? 1 : 2);
      this.positionData.push({ id: t.id, vec: new THREE.Vector3(t.hx, t.hy, t.hz) });
    }
    this.points.geometry.setDrawRange(0, count);
    pos.needsUpdate = true;
    sizes.needsUpdate = true;
    colors.needsUpdate = true;
    shapes.needsUpdate = true;
  }

  update(props: GlobeViewProps) {
    this.props = props;
    this.updateStars(props.sky, props.horizonClip);

    // FOV 圆：直接在【地平坐标】里以视场中心地平向量为轴构造小圆
    this.rebuildFovCircle(props);

    // 格网
    this.graticuleGroup.visible = props.showGraticule;
    this.rebuildGraticuleContent(props);

    // 批注
    this.rebuildAnnotations(props);

    // 高亮
    const sel = props.selectedId ? props.sky.targets.find((t) => t.id === props.selectedId) : null;
    if (sel) {
      this.highlight.visible = true;
      this.highlight.position.set(sel.hx, sel.hy, sel.hz);
      this.highlight.lookAt(0, 0, 0);
    } else {
      this.highlight.visible = false;
    }

    // 初始对准视场中心（用户开始拖拽后不再自动改向）
    if (!this.everMoved) {
      const center = this.centerVec(props);
      this.camDir.copy(center);
      this.camTargetDir.copy(center);
    }
  }

  private everMoved = false;

  private centerVec(props: GlobeViewProps): THREE.Vector3 {
    // 由视场中心的任一目标不足；改用中心地平向量（通过 nadir/ring 反推不必要，
    // 直接对 fov 边界任一点不行）。computeSky 未直接给出中心 HOR 向量，
    // 但 centerAz/centerAlt 可用。
    const az = props.sky.centerAz * DEG;
    const alt = props.sky.centerAlt * DEG;
    // x=北 y=西 z=上
    return new THREE.Vector3(
      Math.cos(alt) * Math.cos(az),
      -Math.cos(alt) * Math.sin(az),
      Math.sin(alt)
    ).normalize();
  }

  private rebuildFovCircle(props: GlobeViewProps) {
    if (this.fovLine) {
      this.scene.remove(this.fovLine);
      this.fovLine.geometry.dispose();
    }
    const c = this.centerVec(props);
    const radius = props.fov.radiusDeg * DEG;
    // 构造垂直于 c 的基向量
    const ref = Math.abs(c.z) < 0.9 ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(1, 0, 0);
    const u = new THREE.Vector3().crossVectors(ref, c).normalize();
    const v = new THREE.Vector3().crossVectors(c, u).normalize();
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 128; i++) {
      const a = (2 * Math.PI * i) / 128;
      const p = c
        .clone()
        .multiplyScalar(Math.cos(radius))
        .add(u.clone().multiplyScalar(Math.sin(radius) * Math.cos(a)))
        .add(v.clone().multiplyScalar(Math.sin(radius) * Math.sin(a)))
        .normalize()
        .multiplyScalar(SPHERE_R * 1.002);
      pts.push(p);
    }
    this.fovLine = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({ color: 0x57e389 })
    );
    this.scene.add(this.fovLine);
  }

  private rebuildGraticuleContent(props: GlobeViewProps) {
    // 清空旧格网（保留 cardinal 标签在 labelsGroup）
    [...this.graticuleGroup.children].forEach((c) => {
      const o = c as THREE.Line;
      o.geometry?.dispose?.();
    });
    this.graticuleGroup.clear();
    if (!props.showGraticule) {
      if (this.equatorLine) {
        this.scene.remove(this.equatorLine);
        this.equatorLine = null;
      }
      return;
    }

    // J2000 经纬网点：父组件预先转为地平直角向量
    const grids = props.graticuleHorizontal;
    if (grids) {
      for (const line of [...grids.parallels, ...grids.meridians]) {
        const pts = line.map(([x, y, z]) => new THREE.Vector3(x, y, z));
        const l = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(pts),
          new THREE.LineBasicMaterial({ color: 0x3a4a6b, transparent: true, opacity: 0.7 })
        );
        this.graticuleGroup.add(l);
      }
    }
  }

  private rebuildAnnotations(props: GlobeViewProps) {
    [...this.annotationsGroup.children].forEach((c) => {
      const o = c as THREE.Sprite;
      (o.material as THREE.SpriteMaterial).map?.dispose();
      o.geometry?.dispose?.();
    });
    this.annotationsGroup.clear();
    for (const a of props.annotations) {
      const t = props.sky.targets.find((x) => Math.abs(x.ra - a.ra) < 1e-9 && Math.abs(x.dec - a.dec) < 1e-9);
      if (!t) continue;
      const sp = this.makeTextSprite(`📝 ${a.text}`, new THREE.Vector3(t.hx, t.hy, t.hz), a.color);
      this.annotationsGroup.add(sp);
    }
  }

  private resize() {
    const w = this.mount.clientWidth || 1;
    const h = this.mount.clientHeight || 1;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  private animate = () => {
    if (this.disposed) return;
    this.raf = requestAnimationFrame(this.animate);
    // 相机方向平滑
    this.camDir.lerp(this.camTargetDir, 0.12).normalize();
    this.camera.lookAt(this.camDir.clone().multiplyScalar(SPHERE_R));
    this.camera.up.set(0, 0, 1);
    this.renderer.render(this.scene, this.camera);
  };

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    this.cleanupEvents();
    this.resizeObs.disconnect();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
