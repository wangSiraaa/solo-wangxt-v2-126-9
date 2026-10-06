// 球面几何工具：所有角距离一律按球面公式计算，
// 投影图上的像素距离只用于交互容差，不充当实际角距。

export const DEG = Math.PI / 180;
export const RAD = 180 / Math.PI;
export const HOUR2DEG = 15;

/** 夹取到 [-1, 1]，防止浮点误差导致 acos 越界 */
function clamp1(x: number): number {
  return Math.max(-1, Math.min(1, x));
}

/**
 * 两点球心角（haversine 公式），输入/输出均为角度。
 * 适用于任意两点，包括跨赤经零点、近极区。
 */
export function angularSeparation(lon1: number, lat1: number, lon2: number, lat2: number): number {
  const dlat = (lat2 - lat1) * DEG;
  // 经度差先归算到 [-180, 180)，保证跨零点时取最短弧
  let dlon = ((lon2 - lon1 + 540) % 360 - 180) * DEG;
  const s1 = Math.sin(dlat / 2);
  const s2 = Math.sin(dlon / 2);
  const a = s1 * s1 + Math.cos(lat1 * DEG) * Math.cos(lat2 * DEG) * s2 * s2;
  return 2 * Math.asin(clamp1(Math.sqrt(a))) * RAD;
}

/** 余弦定律版本（点积），输入单位向量分量对应的角度 */
export function sepCos(lon1: number, lat1: number, lon2: number, lat2: number): number {
  return Math.sin(lat1 * DEG) * Math.sin(lat2 * DEG) +
    Math.cos(lat1 * DEG) * Math.cos(lat2 * DEG) *
    Math.cos(((lon2 - lon1 + 540) % 360 - 180) * DEG);
}

/**
 * 以 (lon0,lat0) 为中心、按初始方位角 bearing（自北顺时针，度）
 * 沿大圆弧走 distance（度），返回 (lon,lat)。
 */
export function destinationPoint(lon0: number, lat0: number, bearing: number, distance: number): [number, number] {
  const δ = distance * DEG;
  const θ = bearing * DEG;
  const φ1 = lat0 * DEG;
  const λ1 = lon0 * DEG;
  const sinφ2 = Math.sin(φ1) * Math.cos(δ) + Math.cos(φ1) * Math.sin(δ) * Math.cos(θ);
  const φ2 = Math.asin(clamp1(sinφ2));
  const y = Math.sin(θ) * Math.sin(δ) * Math.cos(φ1);
  const x = Math.cos(δ) - Math.sin(φ1) * sinφ2;
  const λ2 = λ1 + Math.atan2(y, x);
  // 归一化到 [0,360)
  const lon = ((λ2 * RAD) % 360 + 360) % 360;
  return [lon, φ2 * RAD];
}

/** 单位球上 (lon,lat) -> 笛卡尔 */
export function lonLatToVec(lon: number, lat: number): [number, number, number] {
  const φ = lat * DEG, λ = lon * DEG;
  return [Math.cos(φ) * Math.cos(λ), Math.cos(φ) * Math.sin(λ), Math.sin(φ)];
}

/** 笛卡尔单位向量 -> (lon,lat) */
export function vecToLonLat(x: number, y: number, z: number): [number, number] {
  const r = Math.hypot(x, y, z) || 1;
  x /= r; y /= r; z /= r;
  return [((Math.atan2(y, x) * RAD) % 360 + 360) % 360, Math.asin(clamp1(z)) * RAD];
}

/**
 * 生成以 (centerLon,centerLat) 为中心、角半径 radiusDeg（度）的视场边界。
 * 沿大圆弧等角采样，跨赤经零点时由投影的球面裁剪（clipAngle）处理，
 * 不会被连成横贯整张图的直线。
 */
export function fovBoundary(centerLon: number, centerLat: number, radiusDeg: number, n = 128): Array<[number, number]> {
  const pts: Array<[number, number]> = [];
  for (let i = 0; i <= n; i++) {
    pts.push(destinationPoint(centerLon, centerLat, (360 * i) / n, radiusDeg));
  }
  return pts;
}

/** 赤经格式化：度 -> HH:MM:SS */
export function formatRA(deg: number): string {
  let d = ((deg % 360) + 360) % 360;
  const h = d / 15;
  const hh = Math.floor(h);
  const mm = Math.floor((h - hh) * 60);
  const ss = Math.round((((h - hh) * 60 - mm) * 60));
  return `${String(hh).padStart(2, '0')}h${String(mm).padStart(2, '0')}m${String(ss % 60).padStart(2, '0')}s`;
}

/** 赤纬格式化：±DD:MM:SS */
export function formatDec(deg: number): string {
  const sign = deg < 0 ? '−' : '+';
  let d = Math.abs(deg);
  const dd = Math.floor(d);
  const mm = Math.floor((d - dd) * 60);
  const ss = Math.round((((d - dd) * 60 - mm) * 60));
  return `${sign}${String(dd).padStart(2, '0')}°${String(mm).padStart(2, '0')}′${String(ss % 60).padStart(2, '0')}″`;
}

/** 方位角转中文方位名 */
export function azCompass(az: number): string {
  const names = ['北', '东北', '东', '东南', '南', '西南', '西', '西北'];
  return names[Math.round((((az % 360) + 360) % 360) / 45) % 8];
}
