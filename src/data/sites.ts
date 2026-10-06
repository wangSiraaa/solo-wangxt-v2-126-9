// 观测位置预设。astronomy-engine 的 Observer 经度采用"格林威治以东为正"，
// 与通常地图经度约定一致，直接使用。

export interface Site {
  id: string;
  name: string;
  latitude: number; // 度，北正南负
  longitude: number; // 度，东正西负
  height: number; // 米
}

export const OBSERVING_SITES: Site[] = [
  { id: 'beijing', name: '北京（古观象台附近）', latitude: 39.9042, longitude: 116.4074, height: 50 },
  { id: 'shanghai', name: '上海（佘山天文台）', latitude: 31.0989, longitude: 121.1958, height: 100 },
  { id: 'lhasa', name: '拉萨', latitude: 29.6520, longitude: 91.1721, height: 3650 },
  { id: 'sanya', name: '三亚', latitude: 18.2528, longitude: 109.5120, height: 10 },
  { id: 'mohe', name: '漠河', latitude: 53.4722, longitude: 122.3464, height: 400 },
  { id: 'london', name: '伦敦（格林威治）', latitude: 51.4769, longitude: -0.0005, height: 50 },
  { id: 'sidingspring', name: '赛丁泉天文台（澳大利亚）', latitude: -31.2733, longitude: 149.0644, height: 1165 },
  { id: 'custom', name: '自定义位置', latitude: 0, longitude: 0, height: 0 }
];
