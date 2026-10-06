// 演示场景预设：对应交付要求的三类样例。
// 时间统一存 UTC ISO 字符串，界面上始终注明 UTC。

export interface DemoScenario {
  id: string;
  label: string;
  description: string;
  siteId: string;
  timeUtcIso: string;
  centerRaDeg: number;
  centerDecDeg: number;
  fovRadiusDeg: number;
  magLimit: number;
  horizonClip: boolean;
  suggestSelectId?: string;
}

export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: 'polar',
    label: '极区天区',
    description: '以北天极为中心的视场，检查极区在球面与两种方位投影下的表现；含北极星、小熊座、仙后座。',
    siteId: 'beijing',
    timeUtcIso: '2026-09-30T13:00:00.000Z',
    centerRaDeg: 0,
    centerDecDeg: 90,
    fovRadiusDeg: 35,
    magLimit: 5.0,
    horizonClip: false,
    suggestSelectId: 'polaris'
  },
  {
    id: 'zero',
    label: '赤经跨零点',
    description: '视场中心 RA 358°，边界跨过 0h 线（飞马座四边形 / 仙女座 / 仙后座），不应出现横贯整图的连线。',
    siteId: 'beijing',
    timeUtcIso: '2026-09-30T13:00:00.000Z',
    centerRaDeg: 358,
    centerDecDeg: 30,
    fovRadiusDeg: 30,
    magLimit: 5.0,
    horizonClip: false,
    suggestSelectId: 'alpheratz'
  },
  {
    id: 'horizon',
    label: '地平线附近目标',
    description: '北京 2026-09-30 21:00（UTC+8），大角星位于正西偏北、地平高度约 0.1°；开启地平线裁切可见取舍。',
    siteId: 'beijing',
    timeUtcIso: '2026-09-30T13:00:00.000Z',
    centerRaDeg: 213.9,
    centerDecDeg: 19.2,
    fovRadiusDeg: 30,
    magLimit: 4.5,
    horizonClip: false,
    suggestSelectId: 'arcturus'
  }
];
