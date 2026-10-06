// astronomy-engine 封装层：本应用所有天文坐标转换都集中在这里，
// 且只调用 astronomy-engine 明确支持的转换，不自行拼凑岁差/章动模型。
//
// 约定（已通过数值校验）：
//   - 星表与投影使用 J2000.0 平赤道/平春分点坐标（赤经度、赤纬度）。
//   - Rotation_EQJ_HOR(time, observer) 把 J2000 平赤道直角坐标转到
//     本地地平直角坐标：x=北、y=西、z=天顶。
//   - HorizonFromVector(vec, null) 返回 lon=方位角(北=0,顺时针向东)、lat=高度角。
//   - 太阳/月球/行星用 GeoVector(body, ..., aberration=true) +
//     EquatorFromVector 取地心 J2000 视位置，避免台站视差使切换地点时 RA/Dec 改变。
//   - 不使用大气折射改正（科普星图保持几何一致）。

import {
  AstroTime,
  Body,
  EquatorFromVector,
  GeoVector,
  HorizonFromVector,
  Illumination,
  Observer,
  Rotation_EQJ_HOR,
  RotationMatrix,
  RotateVector,
  SiderealTime,
  Spherical,
  Vector,
  VectorFromSphere
} from 'astronomy-engine';

export interface SiteGeo {
  latitude: number;
  longitude: number;
  height: number;
}

export interface Horizontal {
  azDeg: number; // 方位角：北=0，向东顺时针
  altDeg: number; // 地平高度：-90..90
  /** 本地地平直角坐标（单位向量）：x 北、y 西、z 天顶 */
  hx: number;
  hy: number;
  hz: number;
}

export interface SolarSystemBodyInfo {
  body: Body;
  name: string;
  /** J2000 平赤经（度） */
  ra: number;
  dec: number;
  mag: number;
  /** 月相照亮比例，仅月球有意义 */
  phaseFraction?: number;
}

export interface BodyJ2000Position {
  /** J2000 平赤经（度，[0,360)） */
  ra: number;
  /** J2000 平赤纬（度，[-90,90]） */
  dec: number;
}

/** 本应用提供日期轨迹的太阳系目标：不含地球、SSB/EMB 与未定义的 Star1..Star8。 */
export const TRACKABLE_BODIES: ReadonlyArray<{ body: Body; name: string }> = [
  { body: Body.Sun, name: '太阳' },
  { body: Body.Moon, name: '月球' },
  { body: Body.Mercury, name: '水星' },
  { body: Body.Venus, name: '金星' },
  { body: Body.Mars, name: '火星' },
  { body: Body.Jupiter, name: '木星' },
  { body: Body.Saturn, name: '土星' }
];

export function isTrackableBody(body: Body): boolean {
  return TRACKABLE_BODIES.some((item) => item.body === body);
}

/** 3x3 矩阵转置（旋转矩阵的逆等于转置） */
function transpose(m: RotationMatrix): RotationMatrix {
  const r = m.rot;
  return new RotationMatrix([
    [r[0][0], r[1][0], r[2][0]],
    [r[0][1], r[1][1], r[2][1]],
    [r[0][2], r[1][2], r[2][2]]
  ]);
}

export class SkyEpoch {
  readonly time: AstroTime;
  readonly observer: Observer;
  private readonly rEqjToHor: RotationMatrix;
  private readonly rHorToEqj: RotationMatrix;

  constructor(date: Date, site: SiteGeo) {
    this.time = new AstroTime(date);
    this.observer = new Observer(site.latitude, site.longitude, site.height);
    this.rEqjToHor = Rotation_EQJ_HOR(this.time, this.observer);
    this.rHorToEqj = transpose(this.rEqjToHor);
  }

  /**
   * 太阳系天体在给定 UTC 的地心 J2000 视位置（含光行差）。
   * 故意不使用台站位置，保证同一 UTC 切换台站时天球 RA/Dec 完全一致；
   * 地平高度再由各台站的 SkyEpoch 分别计算。
   */
  static geocentricBodyJ2000(body: Body, date: Date): BodyJ2000Position {
    if (!isTrackableBody(body)) {
      throw new Error(`不支持的日期轨迹目标：${body}`);
    }
    const v = GeoVector(body, new AstroTime(date), true);
    const eq = EquatorFromVector(v);
    return { ra: ((eq.ra * 15) % 360 + 360) % 360, dec: eq.dec };
  }

  /** 儒略日（力学时 TT）。AstroTime.tt 是自 J2000.0 起算的天数。 */
  julianDay(): number {
    return 2451545.0 + this.time.tt;
  }

  /** 格林威治视恒星时（小时） */
  gmstHours(): number {
    return SiderealTime(this.time);
  }

  /** J2000 赤经赤纬（度）-> 本地地平坐标（含直角向量） */
  equatorialToHorizontal(raDeg: number, decDeg: number): Horizontal {
    const eqjVec = VectorFromSphere(new Spherical(decDeg, raDeg, 1), this.time);
    const hv = RotateVector(this.rEqjToHor, eqjVec);
    // 库实现支持 null（不改正大气折射），但其 d.ts 形参类型为 string
    const sph = HorizonFromVector(hv, null as unknown as string);
    return {
      azDeg: ((sph.lon % 360) + 360) % 360,
      altDeg: sph.lat,
      hx: hv.x,
      hy: hv.y,
      hz: hv.z
    };
  }

  /**
   * 本地平赤道 J2000 坐标表示的视场中心（度）-> 地平直角单位向量。
   */
  centerHorizontalVec(raDeg: number, decDeg: number): [number, number, number] {
    const eqjVec = VectorFromSphere(new Spherical(decDeg, raDeg, 1), this.time);
    const hv = RotateVector(this.rEqjToHor, eqjVec);
    const n = Math.hypot(hv.x, hv.y, hv.z) || 1;
    return [hv.x / n, hv.y / n, hv.z / n];
  }

  /**
   * J2000 经纬网（赤纬圈/赤经线）采样到本地地平直角坐标。
   * 经纬线本身固定在 J2000 天球上，随观测时间在本地坐标系中转动。
   */
  graticuleHorizontal(): { parallels: number[][][]; meridians: number[][][] } {
    const parallels: number[][][] = [];
    const meridians: number[][][] = [];
    const samples = 96;

    const toHor = (raDeg: number, decDeg: number): [number, number, number] => {
      const v = RotateVector(this.rEqjToHor, VectorFromSphere(new Spherical(decDeg, raDeg, 1), this.time));
      const n = Math.hypot(v.x, v.y, v.z) || 1;
      return [v.x / n, v.y / n, v.z / n];
    };

    // 赤纬圈：-60..60 每 30°，另加赤道
    for (const dec of [-60, -30, 0, 30, 60]) {
      const line: number[][][] = [];
      const pts: number[][] = [];
      for (let i = 0; i <= samples; i++) pts.push(toHor((360 * i) / samples, dec));
      line.push(pts);
      parallels.push(...line);
    }
    // 赤经线：每 30°
    for (let ra = 0; ra < 360; ra += 30) {
      const pts: number[][] = [];
      for (let i = 0; i <= samples; i++) pts.push(toHor(ra, -90 + (180 * i) / samples));
      meridians.push(pts);
    }
    return { parallels, meridians };
  }

  /**
   * 天底方向的 J2000 赤经赤纬（度）。地平以下半球 = 以天底为中心、角半径 90° 的球面圆。
   */
  nadirEquatorial(): { ra: number; dec: number } {
    const nad = RotateVector(this.rHorToEqj, new Vector(0, 0, -1, this.time));
    const ra = ((Math.atan2(nad.y, nad.x) * 180) / Math.PI % 360 + 360) % 360;
    const dec = (Math.asin(Math.max(-1, Math.min(1, nad.z))) * 180) / Math.PI;
    return { ra, dec };
  }

  /**
   * 地平圈上一点（方位角 azDeg，高度=0）对应的 J2000 赤经赤纬（度）。
   * 用于在三维球面与二维投影上画出地平圈。
   */
  horizonPointEquatorial(azDeg: number): { ra: number; dec: number } {
    // 地平直角：x=北 y=西 z=上；az 自北顺时针向东
    const az = (azDeg * Math.PI) / 180;
    const hv = new Vector(Math.cos(az), -Math.sin(az), 0, this.time);
    const ev = RotateVector(this.rHorToEqj, hv);
    const n = Math.hypot(ev.x, ev.y, ev.z) || 1;
    const ra = (((Math.atan2(ev.y / n, ev.x / n) * 180) / Math.PI) % 360 + 360) % 360;
    const dec = (Math.asin(Math.max(-1, Math.min(1, ev.z / n))) * 180) / Math.PI;
    return { ra, dec };
  }

  /**
   * 取太阳系天体的 J2000 视赤经赤纬（含光行差）与星等。
   * 这是 astronomy-engine 明确支持的转换；自行发光星表不包含这些天体。
   */
  solarSystemBodies(): SolarSystemBodyInfo[] {
    return TRACKABLE_BODIES.map(({ body, name }) => {
      const pos = SkyEpoch.geocentricBodyJ2000(body, this.time.date);
      const illum = Illumination(body, this.time);
      return {
        body,
        name,
        ra: pos.ra,
        dec: pos.dec,
        mag: illum.mag,
        phaseFraction: body === Body.Moon ? illum.phase_fraction : undefined
      };
    });
  }
}
