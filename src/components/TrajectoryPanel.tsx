// 日期轨迹采样表面板：逐点列出采样 UTC、J2000 坐标、
// 该采样时刻在所选台站的地平高度，以及是否位于当前 J2000 视场内。
// 状态只针对离散采样点本身，不对采样点之间做插值推断。

import type { TrajectoryViewModel } from '../lib/trajectory';
import { azCompass, formatDec, formatRA } from '../lib/geoMath';

interface TrajectoryPanelProps {
  view: TrajectoryViewModel;
  onCenterStart: () => void;
}

function fullUtc(iso: string): string {
  return iso.replace('.000Z', 'Z').replace('T', ' ');
}

export default function TrajectoryPanel({ view, onCenterStart }: TrajectoryPanelProps) {
  const visibleCount = view.samples.filter((s) => s.inFov).length;
  const aboveCount = view.samples.filter((s) => s.aboveHorizonAtSample).length;

  return (
    <section className="trajectory-panel">
      <div className="trajectory-head">
        <div>
          <h2 className="view-label">
            {view.model.targetName}日期轨迹 · {view.model.stepHours} h 固定 UTC 步长 · {view.samples.length} 个离散采样点
          </h2>
          <p className="trajectory-summary">
            {fullUtc(view.model.startUtcIso)} 至 {fullUtc(view.model.endUtcIso)} UTC ·
            当前视场内 {visibleCount} 点 · 采样时刻地平以上 {aboveCount} 点
          </p>
        </div>
        <button className="btn" onClick={onCenterStart}>定位到首个采样点</button>
      </div>

      <p className="trajectory-note">
        橙色短弧仅连接相邻采样点，帮助展示几天内相对恒星背景的移动；不是连续精密星历。
        各点的地平高度按该点自己的 UTC 和当前台站计算，切换台站只会改变地平状态，不改变同一 UTC 的 J2000 天球位置。
      </p>

      <div className="trajectory-table-wrap">
        <table className="trajectory-table">
          <thead>
            <tr>
              <th>#</th>
              <th>采样 UTC</th>
              <th>RA J2000</th>
              <th>Dec J2000</th>
              <th>高度（采样时刻）</th>
              <th>方位</th>
              <th>视场</th>
            </tr>
          </thead>
          <tbody>
            {view.samples.map((s) => (
              <tr key={s.timeUtcIso} className={s.inFov ? 'in-fov' : ''}>
                <td>{s.index + 1}</td>
                <td className="utc-cell">{fullUtc(s.timeUtcIso)}</td>
                <td title={`${s.ra.toFixed(4)}°`}>{formatRA(s.ra)}</td>
                <td title={`${s.dec.toFixed(4)}°`}>{formatDec(s.dec)}</td>
                <td className={s.aboveHorizonAtSample ? 'up' : 'down'}>
                  {s.altAtSample.toFixed(1)}°（{s.aboveHorizonAtSample ? '地平上' : '地平下'}）
                </td>
                <td>{s.azAtSample.toFixed(1)}° {azCompass(s.azAtSample)}</td>
                <td>
                  {s.inFov ? (
                    <span className="badge badge-in">视场内 · {s.sepFromCenter.toFixed(1)}°</span>
                  ) : (
                    <span className="badge badge-out">视场外 · {s.sepFromCenter.toFixed(1)}°</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
