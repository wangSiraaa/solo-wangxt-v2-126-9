// 二维方位投影视图（D3 geo 负责投影与球面裁剪，React 负责 SVG 渲染）。
// 同一组件用于立体投影与等距方位投影，仅 projectionKind 不同。
//
// 防错要点：
//  - 星点位置由真实投影计算，视场外不投影；
//  - 赤经跨零点连线安全：经纬网、地平圈等线对象都经 clipAngle 球面裁剪，
//    D3 自动在对跖子午线处切断，不会连成横贯图面的直线；
//  - 图上明确区分"像素半径"与"角距"：等距方位投影的同心环才等角距，
//    立体投影只在中心点附近近似，并给出比例尺倍数读数。

import { useMemo } from 'react';
import type { SkyModel, SkyTarget } from '../lib/computeSky';
import type { FovConfig, Annotation } from '../types';
import {
  belowHorizonObject,
  buildProjection,
  FOV_DISC_PX,
  graticuleObject,
  horizonLineObject,
  projectPoint,
  sphericalCircle,
  VIEW_SIZE,
  type ProjectionKind
} from '../lib/projections';
import { formatDec, formatRA } from '../lib/geoMath';

interface ProjectionViewProps {
  kind: ProjectionKind;
  sky: SkyModel;
  fov: FovConfig;
  horizonClip: boolean;
  showHorizon: boolean;
  annotations: Annotation[];
  selectedId: string | null;
  hoverId: string | null;
  onSelect: (id: string | null) => void;
  onHover: (id: string | null) => void;
}

const C = VIEW_SIZE / 2;

export default function ProjectionView(props: ProjectionViewProps) {
  const { kind, sky, fov, horizonClip, showHorizon } = props;

  const built = useMemo(
    () => buildProjection(kind, fov.centerRa, fov.centerDec, fov.radiusDeg),
    [kind, fov.centerRa, fov.centerDec, fov.radiusDeg]
  );

  // 经纬网 / 视场边界 / 地平圈 / 地平以下区域
  const paths = useMemo(() => {
    const grat = built.path(graticuleObject());
    // 参考角距环：真正等角距的同心球面小圆（投影后变形一目了然）
    const step = fov.radiusDeg <= 20 ? 5 : fov.radiusDeg <= 45 ? 10 : 20;
    const rings: Array<{ d: string; rDeg: number }> = [];
    for (let r = step; r < fov.radiusDeg; r += step) {
      rings.push({ d: built.path(sphericalCircle(fov.centerRa, fov.centerDec, r)), rDeg: r });
    }
    const fovPath = built.path(sphericalCircle(fov.centerRa, fov.centerDec, fov.radiusDeg));
    const horizon = built.path(horizonLineObject(sky.horizon.nadirRa, sky.horizon.nadirDec));
    const below = built.path(belowHorizonObject(sky.horizon.nadirRa, sky.horizon.nadirDec));
    return { grat, rings, fovPath, horizon, below };
  }, [built, fov, sky.horizon.nadirRa, sky.horizon.nadirDec]);

  // 星点
  const markers = useMemo(() => {
    const out: Array<{ t: SkyTarget; x: number; y: number; r: number }> = [];
    for (const t of sky.targets) {
      if (!t.inFov || !t.passesMag) continue;
      if (horizonClip && !t.aboveHorizon) continue;
      const p = projectPoint(built.projection, t.ra, t.dec);
      if (!p) continue;
      const base = Math.max(1.6, Math.min(7, 6.2 - t.mag * 0.9));
      const r = t.kind === 'star' ? base : Math.max(base, 5);
      out.push({ t, x: p[0], y: p[1], r });
    }
    return out;
  }, [built, sky.targets, horizonClip]);

  // 标签（亮星、太阳系天体、选中/悬停目标）
  const labels = useMemo(() => {
    return markers.filter(
      (m) => m.t.id === props.selectedId || m.t.id === props.hoverId || m.t.kind !== 'star' || m.t.mag <= 1.6
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markers, props.selectedId, props.hoverId]);

  // 方位基点（N/E/S/W 在 J2000 天球上的位置随时间旋转；投影裁剪后只显示落在视场内的）
  const cardinalTicks = useMemo(() => {
    const letter = (label: string) => label.trim().split(/\s+/).pop() ?? label;
    const out: Array<{ x: number; y: number; label: string }> = [];
    for (const cp of sky.horizon.cardinalPoints) {
      const p = projectPoint(built.projection, cp.ra, cp.dec);
      if (p) out.push({ x: p[0], y: p[1], label: letter(cp.label) });
    }
    return out;
  }, [built, sky.horizon.cardinalPoints]);

  // 批注
  const annoMarks = useMemo(() => {
    return props.annotations
      .map((a) => {
        const p = projectPoint(built.projection, a.ra, a.dec);
        return p ? { a, x: p[0], y: p[1] } : null;
      })
      .filter((x): x is { a: Annotation; x: number; y: number } => x !== null);
  }, [built, props.annotations]);

  const selected = props.selectedId ? sky.targets.find((t) => t.id === props.selectedId) : null;

  // 边缘比例尺读数（中心每度像素、边缘相对倍数）
  const edgeRatio = built.scaleRatioAt(fov.radiusDeg);

  return (
    <div className="proj-view">
      <div className="proj-title">
        <strong>{built.label}</strong>
        <span className="proj-sub">
          中心 {formatRA(fov.centerRa)} / {formatDec(fov.centerDec)} · 视场角半径 {fov.radiusDeg.toFixed(1)}°
        </span>
      </div>
      <svg
        width={VIEW_SIZE}
        height={VIEW_SIZE}
        viewBox={`0 0 ${VIEW_SIZE} ${VIEW_SIZE}`}
        className="proj-svg"
        onMouseLeave={() => props.onHover(null)}
      >
        <defs>
          <clipPath id={`disc-${kind}`}>
            <circle cx={C} cy={C} r={FOV_DISC_PX} />
          </clipPath>
        </defs>

        {/* 视场圆盘底 */}
        <circle cx={C} cy={C} r={FOV_DISC_PX} fill="#0b1020" stroke="#3b4a6b" strokeWidth={1.5} />

        <g clipPath={`url(#disc-${kind})`}>
          {/* 经纬网 */}
          <path d={paths.grat} fill="none" stroke="#27406a" strokeWidth={0.6} opacity={0.9} />

          {/* 等角距参考环 */}
          {paths.rings.map((ring) => (
            <path key={ring.rDeg} d={ring.d} fill="none" stroke="#3d6ea5" strokeWidth={0.7} strokeDasharray="2 3" />
          ))}

          {/* 地平以下区域 + 地平圈 */}
          {showHorizon && (
            <>
              <path d={paths.below} fill="#5a1f24" opacity={0.35} />
              <path d={paths.horizon} fill="none" stroke="#ff5d5d" strokeWidth={1.6} />
            </>
          )}

          {/* 视场边界（球面小圆投影后的轮廓） */}
          <path d={paths.fovPath} fill="none" stroke="#57e389" strokeWidth={1.4} opacity={0.9} />

          {/* 方位基点 */}
          {showHorizon &&
            cardinalTicks.map((t, i) => (
              <text key={i} x={t.x} y={t.y - 5} fill="#ff9a9a" fontSize={11} textAnchor="middle">
                {t.label}
              </text>
            ))}

          {/* 星点 */}
          {markers.map(({ t, x, y, r }) => {
            const isSel = t.id === props.selectedId;
            const isHover = t.id === props.hoverId;
            const below = !t.aboveHorizon;
            const fill =
              t.kind === 'sun' ? '#ffd27d' : t.kind === 'moon' ? '#dfe6f2' : t.kind === 'planet' ? '#9ecbff' : '#ffffff';
            return (
              <g
                key={t.id}
                transform={`translate(${x},${y})`}
                className="star-marker"
                onMouseEnter={() => props.onHover(t.id)}
                onClick={(e) => {
                  e.stopPropagation();
                  props.onSelect(t.id);
                }}
              >
                {isSel && <circle r={r + 6} fill="none" stroke="#ffd54a" strokeWidth={2} />}
                {isHover && !isSel && <circle r={r + 4} fill="none" stroke="#9fd0ff" strokeWidth={1.2} />}
                {t.kind === 'star' ? (
                  <circle r={r} fill={fill} opacity={below && !horizonClip ? 0.35 : 1} />
                ) : t.kind === 'planet' ? (
                  <rect x={-r} y={-r} width={r * 2} height={r * 2} fill={fill} />
                ) : (
                  <polygon points={`0,${-r} ${r},0 0,${r} ${-r},0`} fill={fill} />
                )}
              </g>
            );
          })}

          {/* 标签 */}
          {labels.map(({ t, x, y }) => (
            <text key={`l-${t.id}`} x={x + 7} y={y + 3} fill="#cfe0ff" fontSize={10.5} className="proj-label">
              {t.name}
            </text>
          ))}

          {/* 批注 */}
          {annoMarks.map(({ a, x, y }) => (
            <g key={a.uuid} transform={`translate(${x},${y})`}>
              <circle r={5} fill="none" stroke={a.color} strokeWidth={1.6} />
              <text x={8} y={4} fill={a.color} fontSize={11}>
                {a.text}
              </text>
            </g>
          ))}

          {/* 中心十字 */}
          <g stroke="#8aa0c8" strokeWidth={1}>
            <line x1={C - 7} y1={C} x2={C + 7} y2={C} />
            <line x1={C} y1={C - 7} x2={C} y2={C + 7} />
          </g>
        </g>
      </svg>

      <div className="proj-foot">
        <span>
          中心比例尺 ≈ {built.pxPerDegreeAtCenter.toFixed(1)} px/°
          {kind === 'stereographic'
            ? `（立体投影边缘径向外放 ×${edgeRatio.toFixed(2)}，图上距离≠角距）`
            : '（等距方位：径向 r 与角距成正比，同心圆为等角距参考环）'}
        </span>
        {selected && (
          <span className="proj-foot-sel">
            {selected.name}：距视场中心 {selected.sepFromCenter.toFixed(2)}°（球面角距）· 高度 {selected.alt.toFixed(1)}°
          </span>
        )}
      </div>
    </div>
  );
}
