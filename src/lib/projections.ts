// D3 方位投影构建：立体投影（stereographic）与等距方位投影（azimuthal equidistant）。
//
// 关键防错设计：
//  1) 使用 projection.rotate([-ra0, -dec0]) 把视场中心转到投影切点；
//  2) 使用 clipAngle(fovRadius) 在【球面上】裁剪，赤经跨零点的连线由
//     D3 的球面裁剪+对跖子午线切割处理，不会横贯整张图；
//  3) 比例尺通过标定使"视场边缘圆"恰好落在固定像素半径上，
//     两种投影因此在图上共用同一个视场圆，但内部变形不同；
//  4) 图上径向像素距离不代表角距：立体投影随半径非线性放大，
//     等距方位投影才是 r(像素) ∝ 角距。界面中明确标注。

import {
  geoAzimuthalEquidistant,
  geoCircle,
  geoGraticule10,
  geoPath,
  geoStereographic
} from 'd3-geo';
import type { GeoProjection } from 'd3-geo';
import { destinationPoint } from './geoMath';

export type ProjectionKind = 'stereographic' | 'equidistant';

export interface BuiltProjection {
  projection: GeoProjection;
  path: (o: object) => string;
  /** 投影名称 */
  label: string;
  /** 给定距中心角距 θ（度）对应的径向像素距离 */
  radialPixels: (thetaDeg: number) => number;
  /** 中心附近每度对应的像素数（仅供比例尺读数） */
  pxPerDegreeAtCenter: number;
  /** 距中心 θ 度处的比例尺相对中心的倍数 */
  scaleRatioAt: (thetaDeg: number) => number;
}

// 视场圆在图上的固定像素半径
export const FOV_DISC_PX = 210;
export const VIEW_SIZE = 560;

/**
 * 标定比例尺：找到 scale 使投影边缘（θ=fovRadius）落在 FOV_DISC_PX。
 * 探针点取"从中心沿方位角 90° 走 θ 的大圆弧终点"——而不是简单地
 * 把纬度加 θ；后者在极区会被夹到 ±89° 而失效。
 */
function calibrateScale(projection: GeoProjection, centerRa: number, centerDec: number, thetaDeg: number): number {
  const [probeLon, probeLat] = destinationPoint(centerRa, centerDec, 90, thetaDeg);
  let lo = 10;
  let hi = 100000;
  for (let i = 0; i < 44; i++) {
    const mid = (lo + hi) / 2;
    projection.scale(mid);
    const edge = projection([probeLon, probeLat]);
    const center = projection([centerRa, centerDec]);
    if (!edge || !center) {
      lo = mid;
      continue;
    }
    const r = Math.hypot(edge[0] - center[0], edge[1] - center[1]);
    if (r < FOV_DISC_PX) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

export function buildProjection(kind: ProjectionKind, centerRa: number, centerDec: number, fovRadius: number): BuiltProjection {
  const base = kind === 'stereographic' ? geoStereographic() : geoAzimuthalEquidistant();
  // 球面裁剪角 = 视场半径（rotate 之后生效，即围绕视场中心的小圆圈）
  base.rotate([-centerRa, -centerDec]).clipAngle(fovRadius + 0.02).precision(0.1);
  const scale = calibrateScale(base, centerRa, centerDec, fovRadius);
  base.scale(scale).translate([VIEW_SIZE / 2, VIEW_SIZE / 2]);

  const pathGen = geoPath(base);
  const path = (o: object) => pathGen(o as never) ?? '';

  // 用投影实测径向函数（探针沿大圆弧方位角 90°，极区同样成立）
  const radialPixels = (thetaDeg: number): number => {
    const [probeLon, probeLat] = destinationPoint(centerRa, centerDec, 90, thetaDeg);
    const edge = base([probeLon, probeLat]);
    const center = base([centerRa, centerDec]);
    if (!edge || !center) return 0;
    return Math.hypot(edge[0] - center[0], edge[1] - center[1]);
  };
  const r0 = radialPixels(1);
  const pxPerDegreeAtCenter = r0;

  return {
    projection: base,
    path,
    label: kind === 'stereographic' ? '立体投影（Stereographic）' : '等距方位投影（Azimuthal Equidistant）',
    radialPixels,
    pxPerDegreeAtCenter: r0,
    scaleRatioAt: (thetaDeg) => radialPixels(thetaDeg) / thetaDeg / (r0 || 1)
  };
}

/** 经纬网（D3 内置 10° 间隔），投影会做球面裁剪 */
export function graticuleObject(): object {
  return geoGraticule10();
}

/** 以 (centerLon,centerLat) 为圆心的球面小圆（角半径 radiusDeg），用于参考角距环 */
export function sphericalCircle(centerLon: number, centerLat: number, radiusDeg: number, n = 128): object {
  return geoCircle().center([centerLon, centerLat]).radius(radiusDeg).precision(0.1)();
}

/**
 * 地平以下区域（J2000 赤道坐标）：以天底为中心、90° 为半径的球面圆。
 * 经投影球面裁剪后留下的就是视场内位于地平以下的部分。
 */
export function belowHorizonObject(nadirRa: number, nadirDec: number): object {
  return geoCircle().center([nadirRa, nadirDec]).radius(90 - 1e-4).precision(0.1)();
}

/** 地平圈线对象（90° 球面圆的边界即地平圈） */
export function horizonLineObject(nadirRa: number, nadirDec: number): object {
  return geoCircle().center([nadirRa, nadirDec]).radius(90).precision(0.05)();
}

/** 工具：供标注/标签计算坐标点 */
export function projectPoint(projection: GeoProjection, lon: number, lat: number): [number, number] | null {
  const p = projection([lon, lat]);
  return p ? ([p[0], p[1]] as [number, number]) : null;
}
