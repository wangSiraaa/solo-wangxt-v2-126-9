// 日期轨迹面板：列出每个采样点的 J2000 坐标、地平高度与视场内判定，
// 并明确声明轨迹只是离散采样——点间短弧仅作示意，不构成精密星历。

import type { TrackResult } from '../lib/track';
import { formatDec, formatRA } from '../lib/geoMath';

interface TrackPanelProps {
  /** null 表示"跟随选中目标"模式下尚未选中任何目标 */
  result: TrackResult | null;
  onAimTrack: () => void;
}

export default function TrackPanel({ result, onAimTrack }: TrackPanelProps) {
  if (!result) {
    return (
      <div className="track-panel">
        <div className="track-head">
          <strong>日期轨迹</strong>
          <span className="track-sub">跟随选中目标模式：请在任一视图中点击一个太阳系天体（星表恒星无轨迹）。</span>
        </div>
      </div>
    );
  }

  if (!result.ok) {
    return (
      <div className="track-panel">
        <div className="track-head">
          <strong>日期轨迹</strong>
          <span className="track-sub">请求被明确拒绝，请按提示调整。</span>
        </div>
        <div className="track-error">⚠ {result.error}</div>
      </div>
    );
  }

  const { track } = result;
  const inFovCount = track.points.filter((p) => p.inFov).length;
  const upCount = track.points.filter((p) => p.aboveHorizon).length;

  return (
    <div className="track-panel">
      <div className="track-head">
        <strong>日期轨迹 · {track.targetName}</strong>
        <span className="track-sub">
          {track.startIso.slice(0, 10)} → {track.endIso.slice(0, 10)}（UTC）· 步长 {track.stepHours} h ·{' '}
          {track.points.length} 个采样点 · 当前视场内 {inFovCount} · 采样时刻在地平以上 {upCount}
        </span>
        <button className="btn" onClick={onAimTrack} title="把视场中心移到轨迹中段并调整角半径以容纳全部采样点">
          视场对准轨迹
        </button>
      </div>
      <p className="track-note">
        轨迹为固定 UTC 步长的<strong>离散采样</strong>：图上采样点间以球面短弧相连仅作视觉示意，
        线段之间的路径与可见性不能解释为精密星历。采样点位置为地心 J2000 视位置（含光行差，与台站无关）；
        高度/方位按各采样时刻的当前台站换算，未计站心视差与大气折射。
      </p>
      <div className="track-table-wrap">
        <table className="track-table">
          <thead>
            <tr>
              <th>#</th>
              <th>UTC 时间</th>
              <th>赤经 (J2000)</th>
              <th>赤纬 (J2000)</th>
              <th>方位角</th>
              <th>地平高度</th>
              <th>地平以上</th>
              <th>视场内</th>
            </tr>
          </thead>
          <tbody>
            {track.points.map((p) => (
              <tr key={p.index} className={p.inFov ? '' : 'out'}>
                <td>{p.index + 1}</td>
                <td>{p.timeIso.slice(0, 16).replace('T', ' ')}</td>
                <td>{formatRA(p.ra)}</td>
                <td>{formatDec(p.dec)}</td>
                <td>{p.az.toFixed(1)}°</td>
                <td className={p.alt >= 0 ? 'up' : 'down'}>{p.alt.toFixed(1)}°</td>
                <td>{p.aboveHorizon ? '是' : '否'}</td>
                <td>{p.inFov ? `是（距中心 ${p.sepFromCenter.toFixed(1)}°）` : `否（距中心 ${p.sepFromCenter.toFixed(1)}°）`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
