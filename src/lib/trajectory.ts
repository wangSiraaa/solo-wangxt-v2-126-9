// 单目标日期轨迹：在有限 UTC 区间按固定步长离散采样太阳系目标。
// 每个采样点的天球位置使用 astronomy-engine 的地心 J2000 视位置；
// 台站只用于计算该采样时刻的地平高度，不参与 RA/Dec 计算。
//
// 注意：相邻点之间的短线仅帮助观看走向，不表示连续精密星历，
// 也不把采样点之间的可见性插值视为真实可见性。

import { Body } from 'astronomy-engine';
import { SkyEpoch, isTrackableBody, type SiteGeo } from './astronomy';
import { angularSeparation, lonLatToVec, vecToLonLat } from './geoMath';
import type { FovConfig } from '../types';

export const TRAJECTORY_STEP_HOURS = [1, 3, 6, 12, 24] as const;
export type TrajectoryStepHours = (typeof TRAJECTORY_STEP_HOURS)[number];

/** 日期轨迹最长允许 31 天，避免科普界面误生成过大的星历表。 */
export const TRAJECTORY_MAX_RANGE_MS = 31 * 24 * 60 * 60 * 1000;
/** 固定步长下的采样点上限（含首尾）。 */
export const TRAJECTORY_MAX_SAMPLES = 121;
/** 三维视图中每个采样间隔的球面短弧细分段数；仅用于显示。 */
export const TRAJECTORY_ARC_SUBDIVISIONS = 16;

export interface TrajectoryRequest {
  body: Body;
  targetName: string;
  startUtcIso: string;
  endUtcIso: string;
  stepHours: TrajectoryStepHours;
}

export interface TrajectorySample {
  index: number;
  timeUtcIso: string;
  /** 简洁日期标记；只有部分采样点需要在图上直接显示 */
  dateLabel: string;
  showDateLabel: boolean;
  /** astronomy-engine 地心 J2000 视赤经（度） */
  ra: number;
  /** astronomy-engine 地心 J2000 视赤纬（度） */
  dec: number;
}

export interface TrajectoryModel {
  body: Body;
  targetName: string;
  startUtcIso: string;
  endUtcIso: string;
  stepHours: TrajectoryStepHours;
  samples: TrajectorySample[];
}

export interface TrajectoryViewSample extends TrajectorySample {
  /** 该采样点在其自身 UTC、所选台站处的方位角/高度 */
  azAtSample: number;
  altAtSample: number;
  aboveHorizonAtSample: boolean;
  /** 用当前视图 epoch 将固定 J2000 位置转到本地地平，供三维球面与星背景对齐 */
  globeHx: number;
  globeHy: number;
  globeHz: number;
  sepFromCenter: number;
  inFov: boolean;
}

export interface TrajectoryViewModel {
  model: TrajectoryModel;
  site: SiteGeo;
  fov: FovConfig;
  samples: TrajectoryViewSample[];
  /**
   * 每个相邻采样点之间的球面短弧，在【当前视图 epoch】下的地平坐标。
   * 短弧经 J2000 大圆弧细分后转换，只作离散采样间的可视化连接。
   */
  globeArcs: Array<Array<[number, number, number]>>;
}

function parseUtc(iso: string, label: string): Date {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) throw new Error(`${label}不是有效的 UTC 日期时间。`);
  return d;
}

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

function compactDateLabel(d: Date): string {
  return `${pad2(d.getUTCMonth() + 1)}-${pad2(d.getUTCDate())} ${pad2(d.getUTCHours())}:${pad2(d.getUTCMinutes())}`;
}

/** 计算并校验离散日期轨迹；所有错误都以中文明确返回给界面。 */
export function computeTrajectory(request: TrajectoryRequest): TrajectoryModel {
  if (!isTrackableBody(request.body)) {
    throw new Error(`不支持的日期轨迹目标：${request.targetName || request.body}。目前仅支持太阳、月球和水星至土星。`);
  }

  const start = parseUtc(request.startUtcIso, '开始日期');
  const end = parseUtc(request.endUtcIso, '结束日期');
  if (end.getTime() < start.getTime()) {
    throw new Error('日期轨迹的结束 UTC 不能早于开始 UTC。');
  }

  const rangeMs = end.getTime() - start.getTime();
  if (rangeMs > TRAJECTORY_MAX_RANGE_MS + 1) {
    throw new Error('日期轨迹范围过大：最多支持 31 天。请缩短区间后再生成。');
  }
  if (!TRAJECTORY_STEP_HOURS.includes(request.stepHours)) {
    throw new Error(`不支持的 UTC 步长：${request.stepHours} 小时。请选择 1、3、6、12 或 24 小时。`);
  }

  const stepMs = request.stepHours * 60 * 60 * 1000;
  const rawCount = Math.round(rangeMs / stepMs);
  if (Math.abs(rawCount * stepMs - rangeMs) > 1000) {
    throw new Error('结束 UTC 必须是开始 UTC 之后的固定步长整数倍，避免区间末尾出现未定义的不足步长。');
  }
  const sampleCount = rawCount + 1;
  if (sampleCount > TRAJECTORY_MAX_SAMPLES) {
    throw new Error(`采样点过多：${sampleCount} 个，上限 ${TRAJECTORY_MAX_SAMPLES} 个。请增大 UTC 步长或缩短日期范围。`);
  }

  const samples: TrajectorySample[] = [];
  for (let i = 0; i < sampleCount; i++) {
    const date = new Date(start.getTime() + i * stepMs);
    const pos = SkyEpoch.geocentricBodyJ2000(request.body, date);
    const isUtcMidnight = date.getUTCHours() === 0 && date.getUTCMinutes() === 0 && date.getUTCSeconds() === 0;
    samples.push({
      index: i,
      timeUtcIso: date.toISOString(),
      dateLabel: compactDateLabel(date),
      showDateLabel: i === 0 || i === sampleCount - 1 || isUtcMidnight,
      ra: pos.ra,
      dec: pos.dec
    });
  }

  return {
    body: request.body,
    targetName: request.targetName,
    startUtcIso: request.startUtcIso,
    endUtcIso: request.endUtcIso,
    stepHours: request.stepHours,
    samples
  };
}

function slerpLonLat(a: TrajectorySample, b: TrajectorySample, t: number): [number, number] {
  const va = lonLatToVec(a.ra, a.dec);
  const vb = lonLatToVec(b.ra, b.dec);
  const omega = Math.acos(Math.max(-1, Math.min(1, va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2])));
  if (omega < 1e-12) return [a.ra, a.dec];

  const sinOmega = Math.sin(omega);
  const wa = Math.sin((1 - t) * omega) / sinOmega;
  const wb = Math.sin(t * omega) / sinOmega;
  const x = wa * va[0] + wb * vb[0];
  const y = wa * va[1] + wb * vb[1];
  const z = wa * va[2] + wb * vb[2];
  const n = Math.hypot(x, y, z) || 1;
  return vecToLonLat(x / n, y / n, z / n);
}

/**
 * 将纯天球轨迹附加台站/视场状态。
 * @param currentEpoch 当前星图时间的 epoch；三维轨迹用它与同一星背景对齐。
 */
export function buildTrajectoryViewModel(
  model: TrajectoryModel,
  site: SiteGeo,
  fov: FovConfig,
  currentEpoch: SkyEpoch
): TrajectoryViewModel {
  const samples = model.samples.map((s) => {
    const sampleEpoch = new SkyEpoch(new Date(s.timeUtcIso), site);
    const hzAtSample = sampleEpoch.equatorialToHorizontal(s.ra, s.dec);
    const globeHz = currentEpoch.equatorialToHorizontal(s.ra, s.dec);
    const sep = angularSeparation(fov.centerRa, fov.centerDec, s.ra, s.dec);
    return {
      ...s,
      azAtSample: hzAtSample.azDeg,
      altAtSample: hzAtSample.altDeg,
      aboveHorizonAtSample: hzAtSample.altDeg >= 0,
      globeHx: globeHz.hx,
      globeHy: globeHz.hy,
      globeHz: globeHz.hz,
      sepFromCenter: sep,
      inFov: sep <= fov.radiusDeg
    };
  });

  const globeArcs: Array<Array<[number, number, number]>> = [];
  for (let i = 0; i < model.samples.length - 1; i++) {
    const a = model.samples[i];
    const b = model.samples[i + 1];
    const arc: Array<[number, number, number]> = [];
    for (let k = 0; k <= TRAJECTORY_ARC_SUBDIVISIONS; k++) {
      const [ra, dec] = slerpLonLat(a, b, k / TRAJECTORY_ARC_SUBDIVISIONS);
      const h = currentEpoch.equatorialToHorizontal(ra, dec);
      arc.push([h.hx, h.hy, h.hz]);
    }
    globeArcs.push(arc);
  }

  return { model, site: { ...site }, fov: { ...fov }, samples, globeArcs };
}
