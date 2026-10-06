// 控制面板：观测位置/时间、视场中心与角半径、星等与地平线独立筛选、
// 演示场景、视场与批注的 IndexedDB 存取。

import { useState } from 'react';
import { OBSERVING_SITES } from '../data/sites';
import { DEMO_SCENARIOS } from '../data/scenarios';
import { MAX_TRACK_POINTS, MAX_TRACK_SPAN_DAYS, MIN_TRACK_STEP_HOURS, TRACK_TARGETS, type TrackUiState } from '../lib/track';
import type { FovConfig, SavedFov, Annotation, SiteState } from '../types';

interface ControlsProps {
  site: SiteState;
  timeUtcIso: string;
  fov: FovConfig;
  magLimit: number;
  horizonClip: boolean;
  showHorizon: boolean;
  showGraticule: boolean;
  savedFovs: SavedFov[];
  annotations: Annotation[];
  trackUi: TrackUiState;
  /** 当前选中目标名（用于轨迹跟随模式提示），无选中为 null */
  selectedTargetName: string | null;
  selectedTargetIsStar: boolean;
  onChangeTrackUi: (patch: Partial<TrackUiState>) => void;
  onChangeSite: (site: SiteState) => void;
  onChangeTime: (iso: string) => void;
  onChangeFov: (fov: FovConfig) => void;
  onChangeMag: (m: number) => void;
  onToggleHorizonClip: (v: boolean) => void;
  onToggleShowHorizon: (v: boolean) => void;
  onToggleGraticule: (v: boolean) => void;
  onApplyScenario: (id: string) => void;
  onSaveFov: (name: string) => void;
  onLoadFov: (f: SavedFov) => void;
  onDeleteFov: (uuid: string) => void;
  onAddAnnotation: (text: string, color: string) => void;
  onDeleteAnnotation: (uuid: string) => void;
}

export default function Controls(p: ControlsProps) {
  const [fovName, setFovName] = useState('');
  const [noteText, setNoteText] = useState('');
  const [noteColor, setNoteColor] = useState('#ffd54a');

  const setRa = (v: number) => p.onChangeFov({ ...p.fov, centerRa: ((v % 360) + 360) % 360 });
  const setDec = (v: number) => p.onChangeFov({ ...p.fov, centerDec: Math.max(-90, Math.min(90, v)) });
  const setRadius = (v: number) => p.onChangeFov({ ...p.fov, radiusDeg: Math.max(1, Math.min(90, v)) });

  return (
    <div className="controls">
      <section className="ctl-block">
        <h3>演示场景</h3>
        <div className="btn-row">
          {DEMO_SCENARIOS.map((s) => (
            <button key={s.id} className="btn scenario" onClick={() => p.onApplyScenario(s.id)} title={s.description}>
              {s.label}
            </button>
          ))}
        </div>
        <p className="hint" title={DEMO_SCENARIOS.find((s) => s.id === 'horizon')?.description}>
          {DEMO_SCENARIOS.find((s) => s.id === 'horizon')?.description}
        </p>
      </section>

      <section className="ctl-block">
        <h3>观测位置与时间</h3>
        <label>
          位置
          <select
            value={p.site.id}
            onChange={(e) => {
              const found = OBSERVING_SITES.find((s) => s.id === e.target.value)!;
              p.onChangeSite({ ...found });
            }}
          >
            {OBSERVING_SITES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        {p.site.id === 'custom' && (
          <div className="num-row">
            <label>
              纬度°
              <input type="number" value={p.site.latitude} step={0.0001} onChange={(e) => p.onChangeSite({ ...p.site, latitude: Number(e.target.value) })} />
            </label>
            <label>
              经度°
              <input type="number" value={p.site.longitude} step={0.0001} onChange={(e) => p.onChangeSite({ ...p.site, longitude: Number(e.target.value) })} />
            </label>
          </div>
        )}
        <label>
          时间（UTC，非本地时区）
          <input type="datetime-local" step={1} value={p.timeUtcIso.slice(0, 19)} onChange={(e) => p.onChangeTime(e.target.value + 'Z')} />
        </label>
        <p className="hint">北京时间 = UTC + 8 小时。默认 2026-09-30 13:00 UTC（北京 21:00，大角星近地平）。</p>
      </section>

      <section className="ctl-block">
        <h3>视场（J2000 赤道坐标）</h3>
        <div className="num-row">
          <label>
            中心赤经°
            <input type="number" value={round3(p.fov.centerRa)} min={0} max={360} step={0.1} onChange={(e) => setRa(Number(e.target.value))} />
          </label>
          <label>
            中心赤纬°
            <input type="number" value={round3(p.fov.centerDec)} min={-90} max={90} step={0.1} onChange={(e) => setDec(Number(e.target.value))} />
          </label>
          <label>
            角半径°
            <input type="number" value={round3(p.fov.radiusDeg)} min={1} max={90} step={0.5} onChange={(e) => setRadius(Number(e.target.value))} />
          </label>
        </div>
        <p className="hint">视场边界是围绕中心的球面小圆；中心在极点时赤经自动失效。</p>
        <div className="save-row">
          <input placeholder="命名当前视场…" value={fovName} onChange={(e) => setFovName(e.target.value)} />
          <button className="btn" disabled={!fovName.trim()} onClick={() => { p.onSaveFov(fovName.trim()); setFovName(''); }}>
            存视场
          </button>
        </div>
        {p.savedFovs.length > 0 && (
          <ul className="store-list">
            {p.savedFovs.slice(0, 6).map((f) => (
              <li key={f.uuid}>
                <button className="link-btn" title={`RA ${f.fov.centerRa.toFixed(1)}° Dec ${f.fov.centerDec.toFixed(1)}° r ${f.fov.radiusDeg}°`} onClick={() => p.onLoadFov(f)}>
                  {f.name}
                </button>
                <button className="x-btn" onClick={() => p.onDeleteFov(f.uuid)}>×</button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="ctl-block">
        <h3>筛选（两条相互独立）</h3>
        <label className="range-label">
          星等上限（仅恒星）：≤ {p.magLimit.toFixed(1)}
          <input type="range" min={-2} max={6} step={0.1} value={p.magLimit} onChange={(e) => p.onChangeMag(Number(e.target.value))} />
        </label>
        <label className="check">
          <input type="checkbox" checked={p.horizonClip} onChange={(e) => p.onToggleHorizonClip(e.target.checked)} />
          地平线裁切：仅显示地平以上目标
        </label>
        <label className="check">
          <input type="checkbox" checked={p.showHorizon} onChange={(e) => p.onToggleShowHorizon(e.target.checked)} />
          显示地平圈与地平以下区域
        </label>
        <label className="check">
          <input type="checkbox" checked={p.showGraticule} onChange={(e) => p.onToggleGraticule(e.target.checked)} />
          显示 J2000 经纬网
        </label>
      </section>

      <section className="ctl-block">
        <h3>日期轨迹（离散采样）</h3>
        <label className="check">
          <input
            type="checkbox"
            checked={p.trackUi.followSelection}
            onChange={(e) => p.onChangeTrackUi({ followSelection: e.target.checked })}
          />
          跟随当前选中目标
        </label>
        {p.trackUi.followSelection ? (
          <p className="hint">
            {p.selectedTargetName
              ? p.selectedTargetIsStar
                ? `当前选中：${p.selectedTargetName}（恒星，不支持轨迹，将被明确拒绝）`
                : `当前选中：${p.selectedTargetName}`
              : '尚未选中目标：请在任一视图中点击一个太阳系天体。'}
          </p>
        ) : (
          <label>
            目标（仅太阳系天体）
            <select value={p.trackUi.bodyId} onChange={(e) => p.onChangeTrackUi({ bodyId: e.target.value })}>
              {TRACK_TARGETS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </label>
        )}
        <label>
          开始（UTC）
          <input
            type="datetime-local"
            step={1}
            value={p.trackUi.startIso.slice(0, 19)}
            onChange={(e) => p.onChangeTrackUi({ startIso: e.target.value + 'Z' })}
          />
        </label>
        <label>
          结束（UTC）
          <input
            type="datetime-local"
            step={1}
            value={p.trackUi.endIso.slice(0, 19)}
            onChange={(e) => p.onChangeTrackUi({ endIso: e.target.value + 'Z' })}
          />
        </label>
        <label>
          步长（小时，≥{MIN_TRACK_STEP_HOURS}）
          <input
            type="number"
            min={MIN_TRACK_STEP_HOURS}
            step={1}
            value={p.trackUi.stepHours}
            onChange={(e) => p.onChangeTrackUi({ stepHours: Number(e.target.value) })}
          />
        </label>
        <label className="check">
          <input type="checkbox" checked={p.trackUi.show} onChange={(e) => p.onChangeTrackUi({ show: e.target.checked })} />
          在三个视图中显示轨迹与日期标记
        </label>
        <p className="hint">
          上限：跨度 ≤ {MAX_TRACK_SPAN_DAYS} 天、采样 ≤ {MAX_TRACK_POINTS} 点；超限或不支持的目标会被明确拒绝。
          轨迹位置为地心 J2000 视位置，切换台站只改变地平状态。
        </p>
      </section>

      <section className="ctl-block">
        <h3>批注（绑定天球坐标，存 IndexedDB）</h3>
        <div className="save-row">
          <input type="color" value={noteColor} onChange={(e) => setNoteColor(e.target.value)} />
          <input placeholder="批注文字（锚定当前选中目标）" value={noteText} onChange={(e) => setNoteText(e.target.value)} />
          <button className="btn" disabled={!noteText.trim()} onClick={() => { p.onAddAnnotation(noteText.trim(), noteColor); setNoteText(''); }}>
            添加
          </button>
        </div>
        {p.annotations.length > 0 && (
          <ul className="store-list">
            {p.annotations.map((a) => (
              <li key={a.uuid}>
                <span className="dot" style={{ background: a.color }} />
                <button
                  className="link-btn"
                  onClick={() => p.onChangeFov({ centerRa: a.ra, centerDec: a.dec, radiusDeg: Math.max(10, p.fov.radiusDeg) })}
                  title="把视场中心移到批注位置"
                >
                  {a.text}
                </button>
                <button className="x-btn" onClick={() => p.onDeleteAnnotation(a.uuid)}>×</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function round3(v: number): number {
  return Math.round(v * 1000) / 1000;
}
