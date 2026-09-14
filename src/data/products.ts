export interface Product {
  slug: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: '热卖' | '新品' | '特惠';
  image: string;
  colors?: string[];
  sizes?: string[];
  description: string;
  specs: [string, string][];
}

export const categories: { name: string; count: number; icon: string; color: string }[] = [
  { name: '耳机数码', count: 28, icon: 'tabler:headphones', color: 'bg-[#c8ed34]' },
  { name: '腕表配饰', count: 16, icon: 'tabler:watch', color: 'bg-[#49b9ae]' },
  { name: '运动户外', count: 34, icon: 'tabler:run', color: 'bg-[#f7bb4e]' },
  { name: '箱包', count: 21, icon: 'tabler:backpack', color: 'bg-[#d65861]' },
  { name: '家居生活', count: 42, icon: 'tabler:lamp', color: 'bg-[#5da2cf]' },
  { name: '服饰', count: 37, icon: 'tabler:shirt', color: 'bg-[#7632ed]' },
];

export const products: Product[] = [
  {
    slug: 'sonic-one-headphones',
    name: '声湃 Sonic One 降噪耳机',
    category: '耳机数码',
    price: 399,
    originalPrice: 599,
    rating: 4.8,
    reviews: 2683,
    badge: '热卖',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    colors: ['曜石黑', '云岩白', '深海蓝'],
    description:
      '40mm 生物纤维振膜单元，-45dB 主动降噪深度，配合 6 麦克风通话降噪系统，通勤与办公都能安静下来。50 小时超长续航，快充 10 分钟可听 5 小时。',
    specs: [
      ['降噪深度', '-45dB 自适应主动降噪'],
      ['续航时间', '50 小时（开启降噪）'],
      ['蓝牙版本', '蓝牙 5.4，支持双设备连接'],
      ['重量', '约 248g'],
      ['充电接口', 'USB-C 快充'],
    ],
  },
  {
    slug: 'orbit-classic-watch',
    name: '轨迹 Orbit 经典机械腕表',
    category: '腕表配饰',
    price: 1299,
    originalPrice: 1699,
    rating: 4.7,
    reviews: 486,
    badge: '特惠',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    colors: ['银色', '曜黑'],
    description:
      '自动上链机械机芯，316L 精钢表壳搭配蓝宝石玻璃镜面，5ATM 生活防水。经典大三针设计，通勤与正装场合都压得住。',
    specs: [
      ['机芯', '自动机械机芯，动力储存 40 小时'],
      ['表壳', '316L 精钢，直径 40mm'],
      ['镜面', '蓝宝石玻璃'],
      ['防水', '5ATM 生活防水'],
      ['表带', '意大利小牛皮，快拆设计'],
    ],
  },
  {
    slug: 'stride-runner-pro',
    name: '步云 Stride 缓震跑鞋',
    category: '运动户外',
    price: 469,
    originalPrice: 699,
    rating: 4.9,
    reviews: 3120,
    badge: '热卖',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    colors: ['火焰红', '极夜黑', '薄荷绿'],
    sizes: ['39', '40', '41', '42', '43', '44'],
    description:
      '全掌超临界发泡中底，回弹率提升 22%，单只仅 235g。一体织透气鞋面，马拉松训练与日常慢跑都合适。',
    specs: [
      ['中底', '超临界发泡材料，能量回归 78%'],
      ['重量', '约 235g（42 码单只）'],
      ['鞋面', '一体织透气网面'],
      ['落差', '8mm'],
      ['适用场景', '路跑、日常训练'],
    ],
  },
  {
    slug: 'voyager-canvas-backpack',
    name: '旅者 Voyager 帆布双肩包',
    category: '箱包',
    price: 269,
    rating: 4.6,
    reviews: 908,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    colors: ['卡其', '墨绿', '黑色'],
    description:
      '16 盎司加厚帆布配头层牛皮饰边，独立电脑仓可容纳 16 英寸笔记本。防泼水面料，城市通勤与短途旅行两相宜。',
    specs: [
      ['容量', '22L'],
      ['材质', '16oz 帆布 + 头层牛皮'],
      ['电脑仓', '独立防震仓，适配 16 英寸笔记本'],
      ['重量', '约 980g'],
      ['防泼水', '表面防泼水涂层'],
    ],
  },
  {
    slug: 'halo-polarized-sunglasses',
    name: '光环 Halo 偏光太阳镜',
    category: '腕表配饰',
    price: 199,
    originalPrice: 329,
    rating: 4.5,
    reviews: 764,
    badge: '特惠',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
    colors: ['玳瑁棕', '经典黑'],
    description:
      'TAC 偏光镜片，UV400 全波段防紫外线，有效过滤路面与水面眩光。TR90 超轻镜框仅 21g，长时间佩戴无压迫感。',
    specs: [
      ['镜片', 'TAC 偏光镜片，UV400'],
      ['镜框', 'TR90 超轻材质'],
      ['重量', '约 21g'],
      ['配件', '硬质镜盒 + 麂皮镜布'],
    ],
  },
  {
    slug: 'everwarm-thermos',
    name: '恒暖 EverWarm 保温杯',
    category: '家居生活',
    price: 129,
    originalPrice: 169,
    rating: 4.7,
    reviews: 1952,
    badge: '热卖',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
    colors: ['奶白', '雾灰', '豆沙绿'],
    description:
      '316L 不锈钢内胆，双层真空锁温，保温 12 小时、保冷 24 小时。一键开盖直饮口，车载杯架友好尺寸。',
    specs: [
      ['容量', '500ml'],
      ['内胆', '316L 不锈钢'],
      ['保温', '12 小时保温 / 24 小时保冷'],
      ['口径', '直饮口，可拆洗密封圈'],
      ['重量', '约 320g'],
    ],
  },
  {
    slug: 'keycraft-87-keyboard',
    name: '键匠 KeyCraft 87 机械键盘',
    category: '耳机数码',
    price: 349,
    originalPrice: 429,
    rating: 4.8,
    reviews: 1120,
    badge: '新品',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
    colors: ['复古白', '石墨灰'],
    description:
      'Gasket 结构 + 五层填充，全键热插拔支持三脚五脚轴体。三模连接（有线 / 2.4G / 蓝牙），4000mAh 大电池，PBT 二色成型键帽。',
    specs: [
      ['配列', '87 键 TKL'],
      ['结构', 'Gasket 结构，五层声音填充'],
      ['连接', '有线 / 2.4G / 蓝牙 5.1 三模'],
      ['电池', '4000mAh，关灯续航约 200 小时'],
      ['键帽', 'PBT 二色成型'],
    ],
  },
  {
    slug: 'avenue-acetate-sunglasses',
    name: '街区 Avenue 板材太阳镜',
    category: '腕表配饰',
    price: 259,
    rating: 4.4,
    reviews: 356,
    badge: '新品',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
    colors: ['琥珀', '墨黑'],
    description:
      '意大利板材手工打磨镜框，尼龙高清镜片，复古方框廓形。附赠可调节金属鼻托，贴合亚洲人脸型。',
    specs: [
      ['镜框', '意大利醋酸纤维板材'],
      ['镜片', '尼龙高清镜片，UV400'],
      ['重量', '约 28g'],
      ['配件', '皮质眼镜盒 + 清洁套装'],
    ],
  },
  {
    slug: 'lumen-desk-lamp',
    name: '光屿 Lumen 护眼台灯',
    category: '家居生活',
    price: 219,
    originalPrice: 299,
    rating: 4.6,
    reviews: 688,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
    colors: ['白色', '黑色'],
    description:
      '国 AA 级照度，Ra98 高显色灯珠，无频闪无蓝光危害。五档色温六档亮度，45 分钟定时休息提醒，学习办公都护眼。',
    specs: [
      ['照度等级', '国 AA 级'],
      ['显色指数', 'Ra≥98'],
      ['调光', '五档色温 / 六档亮度'],
      ['功能', '45 分钟定时提醒，无极触控调光'],
      ['功率', '12W'],
    ],
  },
  {
    slug: 'northline-windbreaker',
    name: '北线 NorthLine 防风夹克',
    category: '服饰',
    price: 499,
    originalPrice: 799,
    rating: 4.7,
    reviews: 534,
    badge: '特惠',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
    colors: ['军绿', '藏青', '黑色'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      '三层复合防风面料，防泼水透气兼顾。立体剪裁活动自如，YKK 拉链 + 多处收纳口袋，城市与轻户外无缝切换。',
    specs: [
      ['面料', '三层复合防风面料'],
      ['防泼水', 'DWR 防泼水涂层'],
      ['拉链', 'YKK 主拉链'],
      ['口袋', '6 处功能性口袋'],
      ['适用季节', '春秋'],
    ],
  },
];
