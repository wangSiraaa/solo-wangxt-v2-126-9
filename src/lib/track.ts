// 单目标日期轨迹：在有限日期区间内按固定 UTC 步长采样太阳系天体位置，
// 供科普讲座展示行星相对恒星背景的逐日移动。
//
// 设计约定（对应验收要求）：
//  - 轨迹点使用 astronomy-engine 的 GeoVector + EquatorFromVector：
//    地心 J2000 视位置（含光行差），与观测台站无关 —— 切换台站时同一 UTC
//    的天球位置不变，只有地平高度/方位随台站与各自采样时刻改变。
//  - 地平高度由同一地心方向经 Rotation_EQJ_HOR 换算（SkyEpoch），
//    未计站心视差（月球最大约 1°）与大气折射，仅供科普演示。
//  - 轨迹是离散采样点：图上点间以球面短弧相连仅为视觉示意，
//    不把线段之间的路径或可见性解释为精密星历。
//  - 明确拒绝：不支持的目标（恒星等固定 J2000 坐标天体）、无效日期、
//    过大日期范围、过密或过疏的采样。

import { Body, EquatorFromVector, GeoVector } from 'astronomy-engine';
import { SkyEpoch, type SiteGeo } from './astronomy';
import { angularSeparation } from './geoMath';
import type { FovConfig } from '../types';

/** 支持轨迹采样的太阳系天体（星表恒星固定于 J2000 坐标，无轨迹可画） */
export const TRACK_TARGETS: Array<{ id: string; body: Body; name: string }> = [
  { id: 'Sun', body: Body.Sun, name: '太阳' },
  { id: 'Moon', body: Body.Moon, name: '月球' },
  { id: 'Mercury', body: Body.Mercury, name: '水星' },
  { id: 'Venus', body: Body.Venus, name: '金星' },
  { id: 'Mars', body: Body.Mars, name: '火星' },
  { id: 'Jupiter', body: Body.Jupiter, name: '木星' },
  { id: 'Saturn', body: Body.Saturn, name: '土星' }
];

export const MAX_TRACK_SPAN_DAYS = 400;
export const MAX_TRACK_POINTS = 400;
export const MIN_TRACK_STEP_HOURS = 1;

export interface TrackConfig {
  bodyId: string;
  startIso: string;
  endIso: string;
  stepHours: number;
}

/** 控制面板中轨迹设置的 UI 状态 */
export interface TrackUiState {
  /** true 时轨迹跟随当前选中目标（恒星会被明确拒绝） */
  followSelection: boolean;
  bodyId: string;
  startIso: string;
  endIso: string;
  stepHours: number;
  /** 是否在三个视图中叠加显示轨迹（表格不受影响） */
  show: boolean;
}

export interface TrackPoint {
  index: number;
  /** 采样时刻 UTC ISO 字符串 */
  timeIso: string;
  /** MM-DD（UTC），用于图上的日期标记 */
  dateLabel: string;
  /** 地心 J2000 视赤经（度，含光行差，与台站无关） */
  ra: number;
  dec: number;
  /** 采样时刻、当前台站下的地平坐标（度） */
  az: number;
  alt: number;
  aboveHorizon: boolean;
  /** 与当前视场中心的球面角距（度） */
  sepFromCenter: number;
  inFov: boolean;
}

export interface TrackModel {
  bodyId: string;
  targetName: string;
  startIso: string;
  endIso: string;
  stepHours: number;
  points: TrackPoint[];
}

export type TrackResult = { ok: true; track: TrackModel } | { ok: false; error: string };

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

/**
 * 计算单目标日期轨迹。所有校验失败都返回明确的错误文字（由界面展示），
 * 不静默截断或夹取参数。
 */
export function computeTrack(cfg: TrackConfig, site: SiteGeo, fov: FovConfig): TrackResult {
  // —— 目标校验：不支持的目标明确拒绝 ——
  if (cfg.bodyId.startsWith('star:')) {
    return {
      ok: false,
      error: `不支持的目标「${cfg.bodyId.slice(5)}」：星表恒星坐标固定于 J2000，不存在日期轨迹。请选择太阳系天体（太阳、月球、水星、金星、火星、木星、土星）。`
    };
  }
  const target = TRACK_TARGETS.find((t) => t.id === cfg.bodyId);
  if (!target) {
    return { ok: false, error: `不支持的目标「${cfg.bodyId}」：日期轨迹仅支持太阳、月球与五大行星。` };
  }

  // —— 日期区间校验 ——
  const start = new Date(cfg.startIso);
  const end = new Date(cfg.endIso);
  if (Number.isNaN(start.getTime())) return { ok: false, error: '开始时间无效：请输入合法的 UTC 日期时间。' };
  if (Number.isNaN(end.getTime())) return { ok: false, error: '结束时间无效：请输入合法的 UTC 日期时间。' };
  const spanMs = end.getTime() - start.getTime();
  if (spanMs <= 0) return { ok: false, error: '结束时间必须晚于开始时间。' };
  const spanDays = spanMs / 86400000;
  if (spanDays > MAX_TRACK_SPAN_DAYS) {
    return {
      ok: false,
      error: `日期范围过大：${spanDays.toFixed(1)} 天，超过上限 ${MAX_TRACK_SPAN_DAYS} 天。本轨迹为科普用离散采样，请缩小日期区间。`
    };
  }

  // —— 步长与采样数校验 ——
  if (!Number.isFinite(cfg.stepHours) || cfg.stepHours <= 0) {
    return { ok: false, error: '步长无效：请输入正数（小时）。' };
  }
  if (cfg.stepHours < MIN_TRACK_STEP_HOURS) {
    return { ok: false, error: `步长过小：最小 ${MIN_TRACK_STEP_HOURS} 小时，避免把离散采样误当作连续星历。` };
  }
  const stepMs = cfg.stepHours * 3600000;
  const n = Math.floor(spanMs / stepMs + 1e-9) + 1;
  if (n < 2) return { ok: false, error: '采样点不足 2 个：步长大于日期跨度，请减小步长或扩大日期区间。' };
  if (n > MAX_TRACK_POINTS) {
    return { ok: false, error: `采样点过多：${n} 个，超过上限 ${MAX_TRACK_POINTS}。请增大步长或缩小日期范围。` };
  }

  // —— 逐点采样 ——
  const points: TrackPoint[] = [];
  for (let i = 0; i < n; i++) {
    const date = new Date(start.getTime() + i * stepMs);
    const epoch = new SkyEpoch(date, site);
    // 地心 J2000 视位置（含光行差）：同一 UTC 下与台站无关
    const vec = GeoVector(target.body, epoch.time, true);
    const eq = EquatorFromVector(vec);
    const ra = eq.ra * 15; // 小时 -> 度
    const dec = eq.dec;
    // 地平状态：随台站与采样时刻变化
    const hz = epoch.equatorialToHorizontal(ra, dec);
    const sep = angularSeparation(fov.centerRa, fov.centerDec, ra, dec);
    points.push({
      index: i,
      timeIso: date.toISOString(),
      dateLabel: `${pad2(date.getUTCMonth() + 1)}-${pad2(date.getUTCDate())}`,
      ra,
      dec,
      az: hz.azDeg,
      alt: hz.altDeg,
      aboveHorizon: hz.altDeg >= 0,
      sepFromCenter: sep,
      inFov: sep <= fov.radiusDeg
    });
  }

  return {
    ok: true,
    track: {
      bodyId: target.id,
      targetName: target.name,
      startIso: cfg.startIso,
      endIso: cfg.endIso,
      stepHours: cfg.stepHours,
      points
    }
  };
}
