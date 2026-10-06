# 本地星图工具（Local Starchart）

面向天文科普编辑的**纯本地**星图工具：对同一片天区同时给出
**球面视图（Three.js）**、**立体投影（D3 geo stereographic）**与
**等距方位投影（D3 geo azimuthal equidistant）**，并在三种视图间
点击联动定位同一目标。无后端、无网络请求，视场与批注存于浏览器 IndexedDB。

## 运行

```bash
npm install
npm run dev        # 开发：http://localhost:5173
npm run build      # 类型检查 + 产物构建（dist/）
npm run preview    # 本地预览构建产物
```

## 功能对照需求

| 需求 | 实现 |
| --- | --- |
| React + TypeScript 管理坐标 | `src/App.tsx` 与 `src/components/*` |
| Three.js 显示天球 | `GlobeView.tsx`：本地地平直角坐标（x 北 / y 西 / z 天顶），相机在球心内向外看 |
| D3 geo 绘制投影 | `ProjectionView.tsx` + `lib/projections.ts`：`geoStereographic` / `geoAzimuthalEquidistant` |
| astronomy-engine 做明确支持的转换 | `lib/astronomy.ts`：`Rotation_EQJ_HOR`（J2000 平赤道→本地地平）、`Equator(..., ofdate=false, aberration=true)` 取日月行星 J2000 视位置、`Illumination` 取星等、`SiderealTime` 取恒星时；**不自行实现岁差章动**，不使用大气折射改正 |
| IndexedDB 存视场与批注 | `lib/db.ts`：`fovs` / `annotations` 两个对象库；批注锚定 J2000 天球坐标而非像素 |
| 赤经跨零点不横贯整图 | 投影统一 `rotate([-ra0,-dec0]) + clipAngle(fovRadius)` 做**球面裁剪**，D3 在对跖子午线自动切断；视场边界由大圆弧逐点采样（`geoMath.fovBoundary`） |
| 角距离按球面计算 | `angularSeparation()` 使用 haversine，经度差归算到 (-180,180]；FOV 判定、信息面板均用真实角距 |
| 像素距离不冒充角距 | 图面附"px/°"读数与边缘放大倍数；等距方位投影仅径向等距，立体投影边缘外放；等角距参考环用 `geoCircle` 球面小圆绘制 |
| 位置与时间可选 | 8 个位置预设（含自定义经纬度、南半球高纬台站）；UTC 日期时间输入（界面明确标注 UTC，并提示北京时间 = UTC+8） |
| 星等筛选与地平线裁切独立 | 两个独立开关；星等只作用于恒星，日月行星始终作为动态参考；地平以下恒星在关闭裁切时半透明显示 |
| 极区 / 跨零 / 近地平星表样例 | "演示场景"三个一键预设；`data/catalog.ts` 星表带 `polar` / `zero-cross` / `bright` 标签 |
| 两视图点击定位同一目标 | 任一视图点击 → 全局选中；三维视图飞行转向，两张投影图同步金色高亮 |
| 导出注明坐标系与时间基准 | SVG / PNG / JSON 三种导出；图注写明 J2000.0 平赤道坐标系、UTC 时间、JD(TT)、GMST、台站经纬度、星等与裁切设置、投影变形说明 |

## 内置演示场景

1. **极区天区**：中心 NCP，半径 35°，检查极区投影（比例尺标定在精确极点也成立）。
2. **赤经跨零点**：中心 RA 358°/Dec +30°，半径 30°，同时覆盖 RA≈346° 的室宿一与 RA≈2° 的壁宿二、仙后座；边界跨过 0h 但不横贯。
3. **地平线附近目标**：北京（39.90°N, 116.41°E）2026-09-30 21:00（=13:00 UTC），
   大角星（α Boo）方位 ≈295°、地平高度 ≈0.2°；切换"地平线裁切"可对比取舍。

> 恒星坐标为 J2000.0 近似值（约 0.01° 量级），仅用于科普制图，不用于精密测量。
> 日月行星的位置由 astronomy-engine 按所选时刻实时计算（J2000 视位置，含光行差）。

## 代码结构

```
src/
  data/catalog.ts      星表样例（J2000，三类标签）
  data/sites.ts        位置预设
  data/scenarios.ts    三个演示场景
  lib/geoMath.ts       球面距离、大圆弧终点、视场边界、坐标格式化
  lib/astronomy.ts     astronomy-engine 唯一封装层（坐标转换/日月行星/恒星时）
  lib/computeSky.ts    合并目标、逐条转换、三条独立筛选
  lib/projections.ts   D3 两种投影构建、球面裁剪与比例尺标定
  lib/exporter.ts      独立 SVG / PNG / JSON 导出（含完整图注）
  lib/db.ts            IndexedDB Promise 封装
  components/          GlobeView / ProjectionView / Controls / InfoPanel
```

## 图例

- 圆形＝恒星，方形＝行星，菱形＝太阳/月球；金色环＝选中，蓝色环＝悬停
- 绿色圆＝视场边界（球面小圆），蓝色虚线环＝等角距参考环
- 红色线＝地平圈，红色半透明区＝地平以下半球；N/E/S/W 为方位基点
