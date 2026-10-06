// 选中目标信息面板：同时给出 J2000 赤道坐标、本地地平坐标、
// 与视场中心的真实球面角距（明确不是图上像素距离）。

import type { SkyTarget } from '../lib/computeSky';
import { azCompass, formatDec, formatRA } from '../lib/geoMath';

interface InfoPanelProps {
  target: SkyTarget | null;
  centerAlt: number;
  centerAz: number;
  gmstHours: number;
  julianDay: number;
}

const KIND_NAME: Record<SkyTarget['kind'], string> = {
  star: '恒星（星表 J2000.0）',
  sun: '太阳（动态视位置）',
  moon: '月球（动态视位置）',
  planet: '行星（动态视位置）'
};

export default function InfoPanel({ target, centerAlt, centerAz, gmstHours, julianDay }: InfoPanelProps) {
  return (
    <div className="info-panel">
      {target ? (
        <>
          <div className="info-head">
            <span className="info-name">{target.name}</span>
            <span className="info-desig">{target.designation}</span>
            <span className="info-kind">{KIND_NAME[target.kind]}</span>
          </div>
          <div className="info-grid">
            <div>
              <label>赤经 RA (J2000)</label>
              <strong>{formatRA(target.ra)}</strong>
              <span className="sub">{target.ra.toFixed(4)}°</span>
            </div>
            <div>
              <label>赤纬 Dec (J2000)</label>
              <strong>{formatDec(target.dec)}</strong>
              <span className="sub">{target.dec.toFixed(4)}°</span>
            </div>
            <div>
              <label>方位角 A（北=0 顺时针）</label>
              <strong>{target.az.toFixed(2)}°</strong>
              <span className="sub">{azCompass(target.az)}方</span>
            </div>
            <div>
              <label>地平高度 h</label>
              <strong className={target.alt >= 0 ? 'up' : 'down'}>{target.alt.toFixed(2)}°</strong>
              <span className="sub">{target.alt >= 0 ? '地平以上' : '地平以下'}</span>
            </div>
            <div>
              <label>视星等</label>
              <strong>{target.mag.toFixed(2)}</strong>
              {target.kind === 'moon' && target.phaseFraction !== undefined && (
                <span className="sub">月相照亮 {(target.phaseFraction * 100).toFixed(0)}%</span>
              )}
            </div>
            <div>
              <label>距视场中心（球面角距）</label>
              <strong>{target.sepFromCenter.toFixed(3)}°</strong>
              <span className="sub">haversine 计算，非图上像素距离</span>
            </div>
          </div>
        </>
      ) : (
        <div className="info-empty">
          点击球面视图或右侧任一投影图中的星点，即可在三种视图中定位同一目标。
          <ul>
            <li>圆形＝恒星，方形＝行星，菱形＝太阳/月球</li>
            <li>绿色圆＝视场边界，红色线＝地平圈，蓝色虚线＝等角距参考环</li>
          </ul>
        </div>
      )}
      <div className="info-meta">
        视场中心：高度 {centerAlt.toFixed(2)}°，方位 {centerAz.toFixed(2)}°（{azCompass(centerAz)}）· GMST {gmstHours.toFixed(4)} h · JD(TT) {julianDay.toFixed(4)}
      </div>
    </div>
  );
}
