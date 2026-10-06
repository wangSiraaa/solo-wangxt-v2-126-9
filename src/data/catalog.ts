// 内置星表样例：J2000.0 平赤道坐标，角度为近似值（精度约 0.01°，满足科普制图）。
// tags 用于交付要求中的三类样例：
//   polar       —— 极区目标（高赤纬，检验极区投影）
//   zero-cross  —— 位于 0h 赤经两侧，检验赤经跨零点处理
//   bright      —— 全天亮星，用于常规演示与地平线附近目标

export interface CatalogStar {
  id: string;
  name: string;
  designation: string; // 拜耳/佛氏编号
  ra: number; // 赤经，度 [0,360)
  dec: number; // 赤纬，度 [-90,90]
  mag: number; // 视星等
  tags: Array<'polar' | 'zero-cross' | 'bright'>;
}

// 赤经换算：小时 -> 度
const h = (hours: number) => hours * 15;

export const STAR_CATALOG: CatalogStar[] = [
  // ---------- 北极区（J2000） ----------
  { id: 'polaris', name: '勾陈一（北极星）', designation: 'α UMi', ra: h(2 + 31 / 60 + 49.1 / 3600), dec: 89.2641, mag: 1.98, tags: ['polar', 'bright'] },
  { id: 'kochab', name: '帝（北极二）', designation: 'β UMi', ra: h(14 + 50 / 60 + 42.3 / 3600), dec: 74.1555, mag: 2.07, tags: ['polar'] },
  { id: 'pherkad', name: '太子（北极一）', designation: 'γ UMi', ra: h(15 + 20 / 60 + 43.7 / 3600), dec: 71.8344, mag: 3.04, tags: ['polar'] },
  { id: 'zeta-umi', name: '开阳增一', designation: 'ζ UMi', ra: h(16 + 0 / 60), dec: 77.8, mag: 4.32, tags: ['polar'] },
  { id: 'yildun', name: '勾陈二', designation: 'δ UMi', ra: h(17 + 32 / 60 + 13 / 3600), dec: 86.5851, mag: 4.36, tags: ['polar'] },
  { id: 'epsilon-umi', name: '勾陈四', designation: 'ε UMi', ra: h(16 + 45 / 60 + 58 / 3600), dec: 82.0411, mag: 4.21, tags: ['polar'] },
  { id: 'cassiopeia-alpha', name: '王良一', designation: 'α Cas', ra: h(0 + 40 / 60 + 30.4 / 3600), dec: 56.5373, mag: 2.24, tags: ['polar', 'zero-cross', 'bright'] },
  { id: 'cassiopeia-beta', name: '王良四', designation: 'β Cas', ra: h(0 + 9 / 60 + 10.7 / 3600), dec: 59.1498, mag: 2.27, tags: ['polar', 'zero-cross', 'bright'] },
  { id: 'cassiopeia-gamma', name: '策', designation: 'γ Cas', ra: h(0 + 56 / 60 + 42.5 / 3600), dec: 60.7167, mag: 2.47, tags: ['polar', 'zero-cross'] },
  { id: 'cassiopeia-delta', name: '阁道三', designation: 'δ Cas', ra: h(1 + 25 / 60 + 49 / 3600), dec: 60.2353, mag: 2.68, tags: ['polar'] },
  { id: 'cephei-alpha', name: '天钩五', designation: 'α Cep', ra: h(21 + 18 / 60 + 34.6 / 3600), dec: 62.5856, mag: 2.51, tags: ['polar', 'bright'] },
  { id: 'cephei-gamma', name: '少卫增八', designation: 'γ Cep', ra: h(23 + 39 / 60 + 20.9 / 3600), dec: 77.6322, mag: 3.21, tags: ['polar', 'zero-cross'] },
  { id: 'draco-thuban', name: '右枢（古北极星）', designation: 'α Dra', ra: h(14 + 4 / 60 + 23.4 / 3600), dec: 64.3758, mag: 3.65, tags: ['polar'] },
  { id: 'ursa-minor-eta', name: '勾陈增九', designation: 'η UMi', ra: h(16 + 17 / 60 + 30.5 / 3600), dec: 75.7553, mag: 4.95, tags: ['polar'] },

  // ---------- 赤经跨零点（0h 前后，仙女-飞马-双鱼-仙后） ----------
  { id: 'alpheratz', name: '壁宿二', designation: 'α And', ra: h(0 + 8 / 60 + 23.3 / 3600), dec: 29.0904, mag: 2.06, tags: ['zero-cross', 'bright'] },
  { id: 'algenib', name: '壁宿一', designation: 'γ Peg', ra: h(0 + 13 / 60 + 14.2 / 3600), dec: 15.1836, mag: 2.83, tags: ['zero-cross', 'bright'] },
  { id: 'markab', name: '室宿一', designation: 'α Peg', ra: h(23 + 4 / 60 + 46.5 / 3600), dec: 15.2053, mag: 2.49, tags: ['zero-cross', 'bright'] },
  { id: 'scheat', name: '室宿二', designation: 'β Peg', ra: h(23 + 3 / 60 + 46.5 / 3600), dec: 28.0830, mag: 2.42, tags: ['zero-cross', 'bright'] },
  { id: 'alrescha', name: '外屏七', designation: 'α Psc', ra: h(2 + 2 / 60 + 2.8 / 3600), dec: 2.7486, mag: 3.82, tags: ['zero-cross'] },
  { id: 'eta-and', name: '奎宿四（仙女座η）', designation: 'η And', ra: h(0 + 57 / 60 + 12.4 / 3600), dec: 23.4236, mag: 4.40, tags: ['zero-cross'] },
  { id: 'delta-psc', name: '外屏一', designation: 'δ Psc', ra: h(0 + 48 / 60 + 40.9 / 3600), dec: 7.5786, mag: 4.43, tags: ['zero-cross'] },
  { id: 'epsilon-psc', name: '外屏二', designation: 'ε Psc', ra: h(1 + 2 / 60 + 56.6 / 3600), dec: 7.8883, mag: 4.27, tags: ['zero-cross'] },
  { id: 'mirach', name: '奎宿九', designation: 'β And', ra: h(1 + 9 / 60 + 43.9 / 3600), dec: 35.6206, mag: 2.05, tags: ['zero-cross', 'bright'] },
  { id: 'mu-and', name: '天大将军一', designation: 'μ And', ra: h(0 + 56 / 60 + 45.2 / 3600), dec: 38.4995, mag: 3.86, tags: ['zero-cross'] },
  { id: '51-and', name: '车府增廿一', designation: '51 And', ra: h(1 + 37 / 60 + 59.6 / 3600), dec: 48.6333, mag: 3.57, tags: [] },
  { id: 'phoenicis-alpha', name: '火鸟六', designation: 'α Phe', ra: h(0 + 26 / 60 + 17.0 / 3600), dec: -42.3060, mag: 2.39, tags: ['zero-cross', 'bright'] },

  // ---------- 全天亮星（含默认演示中近地平的大角星） ----------
  { id: 'arcturus', name: '大角星', designation: 'α Boo', ra: h(14 + 15 / 60 + 39.7 / 3600), dec: 19.1825, mag: -0.05, tags: ['bright'] },
  { id: 'vega', name: '织女一（织女星）', designation: 'α Lyr', ra: h(18 + 36 / 60 + 56.3 / 3600), dec: 38.7837, mag: 0.03, tags: ['bright'] },
  { id: 'capella', name: '五车二', designation: 'α Aur', ra: h(5 + 16 / 60 + 41.4 / 3600), dec: 45.9980, mag: 0.08, tags: ['bright'] },
  { id: 'rigel', name: '参宿七', designation: 'β Ori', ra: h(5 + 14 / 60 + 32.3 / 3600), dec: -8.2017, mag: 0.13, tags: ['bright'] },
  { id: 'procyon', name: '南河三', designation: 'α CMi', ra: h(7 + 39 / 60 + 18.1 / 3600), dec: 5.2250, mag: 0.34, tags: ['bright'] },
  { id: 'betelgeuse', name: '参宿四', designation: 'α Ori', ra: h(5 + 55 / 60 + 10.3 / 3600), dec: 7.4071, mag: 0.45, tags: ['bright'] },
  { id: 'altair', name: '河鼓二（牛郎星）', designation: 'α Aql', ra: h(19 + 50 / 60 + 47.0 / 3600), dec: 8.8683, mag: 0.77, tags: ['bright'] },
  { id: 'aldebaran', name: '毕宿五', designation: 'α Tau', ra: h(4 + 35 / 60 + 55.2 / 3600), dec: 16.5093, mag: 0.85, tags: ['bright'] },
  { id: 'antares', name: '心宿二（火星之敌）', designation: 'α Sco', ra: h(16 + 29 / 60 + 24.5 / 3600), dec: -26.4320, mag: 1.06, tags: ['bright'] },
  { id: 'spica', name: '角宿一', designation: 'α Vir', ra: h(13 + 25 / 60 + 11.6 / 3600), dec: -11.1614, mag: 0.98, tags: ['bright'] },
  { id: 'pollux', name: '北河三', designation: 'β Gem', ra: h(7 + 45 / 60 + 18.9 / 3600), dec: 28.0262, mag: 1.14, tags: ['bright'] },
  { id: 'deneb', name: '天津四', designation: 'α Cyg', ra: h(20 + 41 / 60 + 25.9 / 3600), dec: 45.2803, mag: 1.25, tags: ['bright'] },
  { id: 'regulus', name: '轩辕十四', designation: 'α Leo', ra: h(10 + 8 / 60 + 22.3 / 3600), dec: 11.9672, mag: 1.35, tags: ['bright'] },
  { id: 'castor', name: '北河二', designation: 'α Gem', ra: h(7 + 34 / 60 + 35.9 / 3600), dec: 31.8884, mag: 1.58, tags: ['bright'] },
  { id: 'bellatrix', name: '参宿五', designation: 'γ Ori', ra: h(5 + 25 / 60 + 7.9 / 3600), dec: 6.3497, mag: 1.64, tags: ['bright'] },
  { id: 'eltanin', name: '天棓四', designation: 'γ Dra', ra: h(17 + 56 / 60 + 36.4 / 3600), dec: 51.4889, mag: 2.24, tags: ['bright'] },
  { id: 'dubhe', name: '天枢', designation: 'α UMa', ra: h(11 + 3 / 60 + 43.7 / 3600), dec: 61.7510, mag: 1.79, tags: ['bright', 'polar'] },
  { id: 'merak', name: '天璇', designation: 'β UMa', ra: h(11 + 1 / 60 + 50.5 / 3600), dec: 56.3824, mag: 2.37, tags: ['bright', 'polar'] },
  { id: 'alioth', name: '玉衡', designation: 'ε UMa', ra: h(12 + 54 / 60 + 1.7 / 3600), dec: 55.9598, mag: 1.77, tags: ['bright', 'polar'] },
  { id: 'mizar', name: '开阳', designation: 'ζ UMa', ra: h(13 + 23 / 60 + 55.5 / 3600), dec: 54.9254, mag: 2.27, tags: ['bright', 'polar'] },
  { id: 'fomalhaut', name: '北落师门', designation: 'α PsA', ra: h(22 + 57 / 60 + 39.0 / 3600), dec: -29.6222, mag: 1.16, tags: ['bright', 'zero-cross'] },
  { id: 'achernar', name: '水委一', designation: 'α Eri', ra: h(1 + 37 / 60 + 42.8 / 3600), dec: -57.2367, mag: 0.46, tags: ['bright'] },
  { id: 'canopus', name: '老人星', designation: 'α Car', ra: h(6 + 23 / 60 + 57.1 / 3600), dec: -52.6957, mag: -0.74, tags: ['bright'] },
  { id: 'sirius', name: '天狼星', designation: 'α CMa', ra: h(6 + 45 / 60 + 9.0 / 3600), dec: -16.7161, mag: -1.46, tags: ['bright'] },
  { id: 'hadar', name: '马腹一', designation: 'β Cen', ra: h(14 + 3 / 60 + 49.4 / 3600), dec: -60.3730, mag: 0.61, tags: ['bright'] },
  { id: 'rigil-kent', name: '南门二', designation: 'α Cen', ra: h(14 + 39 / 60 + 36.5 / 3600), dec: -60.8334, mag: -0.27, tags: ['bright'] },
  { id: 'acrux', name: '十字架二', designation: 'α Cru', ra: h(12 + 26 / 60 + 35.9 / 3600), dec: -63.0991, mag: 0.77, tags: ['bright'] },
  { id: 'mimosa', name: '十字架三', designation: 'β Cru', ra: h(12 + 47 / 60 + 43.3 / 3600), dec: -59.6887, mag: 1.25, tags: ['bright'] },
  { id: 'avior', name: '海石一', designation: 'ε Car', ra: h(8 + 22 / 60 + 30.8 / 3600), dec: -59.5095, mag: 1.86, tags: ['bright'] },
  { id: 'suhail', name: '天记', designation: 'γ Vel', ra: h(8 + 9 / 60 + 32.0 / 3600), dec: -47.3428, mag: 1.78, tags: ['bright'] },
  { id: 'peacock', name: '孔雀十一', designation: 'α Pav', ra: h(20 + 25 / 60 + 38.9 / 3600), dec: -56.7351, mag: 1.94, tags: ['bright'] },
  { id: 'ankaa', name: '火鸟九', designation: 'β Phe', ra: h(23 + 26 / 60), dec: -46.95, mag: 3.31, tags: ['zero-cross'] },
  { id: 'hamal', name: '娄宿三', designation: 'α Ari', ra: h(2 + 7 / 60 + 10.4 / 3600), dec: 23.4624, mag: 2.00, tags: ['bright'] },
  { id: 'denebola', name: '五帝座一', designation: 'β Leo', ra: h(11 + 49 / 60 + 3.6 / 3600), dec: 14.5720, mag: 2.14, tags: ['bright'] },
  { id: 'alphecca', name: '贯索四', designation: 'α CrB', ra: h(15 + 34 / 60 + 41.3 / 3600), dec: 26.7147, mag: 2.23, tags: ['bright'] },
  { id: 'rasalhague', name: '侯（蛇夫座α）', designation: 'α Oph', ra: h(17 + 34 / 60 + 56.1 / 3600), dec: 12.5601, mag: 2.07, tags: ['bright'] },
  { id: 'enif', name: '危宿三', designation: 'ε Peg', ra: h(21 + 44 / 60 + 11.2 / 3600), dec: 9.8750, mag: 2.39, tags: ['bright'] },
  { id: 'algol', name: '大陵五（魔星）', designation: 'β Per', ra: h(3 + 8 / 60 + 10.1 / 3600), dec: 40.9556, mag: 2.12, tags: ['bright'] },
  { id: 'mirfak', name: '天船三', designation: 'α Per', ra: h(3 + 24 / 60 + 19.4 / 3600), dec: 49.8612, mag: 1.79, tags: ['bright', 'polar'] }
];
