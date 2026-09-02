export interface ServicePageData {
  slug: 'wordpress' | 'shopify' | 'seo' | 'sem' | 'growth';
  name: string;
  tagline: string;
  title: string;
  subtitle: string;
  action: string;
  problemsTitle: string;
  problems: Array<{ title: string; description: string; icon: string }>;
  deliverablesTitle: string;
  deliverables: Array<{ title: string; description: string; icon: string }>;
  processTitle: string;
  process: Array<{ title: string; description: string }>;
  outcomes: Array<{ title: string; description: string; icon: string }>;
  faqs: Array<{ title: string; description: string }>;
  cta: { title: string; subtitle: string; action: string };
}

export const services: ServicePageData[] = [
  {
    slug: 'wordpress',
    name: 'WordPress 建站',
    tagline: 'WORDPRESS WEBSITE DEVELOPMENT',
    title: '让企业官网成为持续带来询盘的业务资产。',
    subtitle:
      '从信息架构到 WordPress 开发，我们把复杂的产品、能力与案例整理成海外客户看得懂、搜索得到、愿意联系的内容。',
    action: '获取建站方案',
    problemsTitle: '你可能正遇到这些问题',
    problems: [
      {
        title: '像一份 PDF 的网站',
        description: '客户看完公司介绍，仍不清楚你解决什么问题、服务谁，以及下一步该如何联系。',
        icon: 'tabler:file-text',
      },
      {
        title: '产品多，路径却不清楚',
        description: '产品、应用、行业和案例彼此分散，采购者找不到与自己场景相关的信息。',
        icon: 'tabler:git-branch',
      },
      {
        title: '流量没有承接页',
        description: '搜索或广告带来的访问没有匹配的页面、证据和询盘入口，自然很难形成线索。',
        icon: 'tabler:route-off',
      },
    ],
    deliverablesTitle: '我们交付的不是一套主题，而是一套获客基础',
    deliverables: [
      {
        title: '增长与内容策略',
        description: '梳理目标市场、决策人、核心卖点与关键页面，让网站先回答客户真正关心的问题。',
        icon: 'tabler:target-arrow',
      },
      {
        title: '信息架构与原型',
        description: '规划首页、产品或服务、行业、案例、资源和联系路径；重要信息不再被埋在菜单深处。',
        icon: 'tabler:sitemap',
      },
      {
        title: '视觉与 WordPress 开发',
        description: '完成响应式页面、可编辑模块、表单与基础性能优化，兼顾品牌表达与团队日后维护。',
        icon: 'tabler:device-desktop-code',
      },
      {
        title: 'SEO 与追踪基础',
        description: '配置标题结构、站点地图、重定向策略，以及 GA4/GTM 的关键转化事件。',
        icon: 'tabler:chart-dots-3',
      },
      {
        title: '上线交接',
        description: '在上线前完成检查，并向负责内容的成员说明常用模块的编辑方式。',
        icon: 'tabler:clipboard-check',
      },
    ],
    processTitle: '项目怎么推进',
    process: [
      { title: '01 发现', description: '通过启动会确认受众、竞争对手、业务目标和已有素材，避免在设计阶段反复猜测。' },
      { title: '02 规划', description: '先确认页面结构、优先级和关键文案方向，再进入视觉设计与开发。' },
      { title: '03 设计开发', description: '优先完成首页、核心服务或产品页，再用可复用模块搭建其余页面。' },
      { title: '04 上线迭代', description: '完成测试、追踪配置和编辑培训；上线后可继续衔接 SEO 或广告落地页优化。' },
    ],
    outcomes: [
      {
        title: '清楚的页面地图',
        description: '首页负责建立价值认知，服务与产品页负责解释能力，案例和资源页负责证明与获取需求。',
        icon: 'tabler:map-2',
      },
      {
        title: '一致的询盘路径',
        description: '每个关键页面都有与阅读阶段匹配的下一步，而不是只在页脚放一个联系按钮。',
        icon: 'tabler:arrow-right-circle',
      },
      {
        title: '可继续生长的内容结构',
        description: '新产品、行业页、案例和文章可在既定结构中添加，不必每次重做整站导航。',
        icon: 'tabler:chart-histogram',
      },
    ],
    faqs: [
      {
        title: '建站通常需要多久？',
        description: '取决于内容准备和页面数量。启动后会先明确范围，并给出分阶段的时间表。',
      },
      { title: '你们能负责文案吗？', description: '可以。我们先完成关键信息与页面框架，再与你的团队确认专业细节。' },
      { title: '上线后可以自己编辑吗？', description: '可以。常用内容会做成可视化模块，并在交付时完成编辑培训。' },
    ],
    cta: {
      title: '先让我们看看你的网站。',
      subtitle: '留下网站链接与目标市场，我们会先判断最值得优先解决的问题。',
      action: '申请免费诊断',
    },
  },
  {
    slug: 'shopify',
    name: 'Shopify 独立站',
    tagline: 'SHOPIFY STORE DESIGN & DEVELOPMENT',
    title: '把品牌体验做进每一次点击与结账。',
    subtitle: '我们为 DTC 品牌和跨境卖家打造 Shopify 商店，让产品价值、购物体验和广告落地页共同服务于转化。',
    action: '获取 Shopify 方案',
    problemsTitle: '不只是换一套主题',
    problems: [
      {
        title: '产品价值没有说清楚',
        description: '用户需要反复翻找，才能理解产品利益点、适用场景、规格和购买理由。',
        icon: 'tabler:message-question',
      },
      {
        title: '移动端购买不顺畅',
        description: '浏览、加购、配送说明和结账入口分散，让高意向用户在关键步骤流失。',
        icon: 'tabler:device-mobile',
      },
      {
        title: '商店无法支撑运营',
        description: '市场、支付、物流、数据追踪和必要应用没有被当作一个完整系统配置。',
        icon: 'tabler:settings-2',
      },
    ],
    deliverablesTitle: '商店交付范围',
    deliverables: [
      {
        title: '商店策略',
        description: '明确商品结构、集合页、导航、目标市场与关键转化路径，先确定顾客怎样找到商品。',
        icon: 'tabler:shopping-bag',
      },
      {
        title: '品牌化设计',
        description: '覆盖首页、集合页、商品页、购物车及营销落地页，让每一步都延续同一份品牌承诺。',
        icon: 'tabler:palette',
      },
      {
        title: 'Shopify 配置',
        description: '配置支付、配送、税费、市场、多币种及必要应用，只保留真正服务业务的功能。',
        icon: 'tabler:adjustments',
      },
      {
        title: '转化基础',
        description: '按需配置评价、订阅、捆绑或加购引导，帮助顾客在下单前获得足够答案。',
        icon: 'tabler:shopping-cart-plus',
      },
      {
        title: '数据基础',
        description: '建立 GA4、GTM、Meta 与 Google 等广告转化事件，为后续优化保留可靠依据。',
        icon: 'tabler:chart-line',
      },
    ],
    processTitle: '从策略到上线',
    process: [
      {
        title: '01 梳理商品与市场',
        description: '确认主推产品、价格带、目标市场和竞争位置，先决定哪些商品与受众优先。',
      },
      { title: '02 设计购买路径', description: '确定首页、集合页、商品页与结账前的关键内容，让每个页面有明确角色。' },
      { title: '03 搭建与配置', description: '完成主题开发、后台配置、内容录入和追踪，不让运营配置留到上线之后。' },
      { title: '04 测试与优化', description: '测试设备、支付、物流和事件；在真实数据到来后，再持续优化页面与路径。' },
    ],
    outcomes: [
      {
        title: '首页建立品牌与品类认知',
        description: '让新访客迅速理解品牌主张、爆品、品类入口和信任证明。',
        icon: 'tabler:home',
      },
      {
        title: '商品页回答购买问题',
        description: '按利益点、场景、规格、评价、FAQ、配送和退货组织内容，减少犹豫。',
        icon: 'tabler:box',
      },
      {
        title: '广告页兑现单一承诺',
        description: 'Campaign Landing Page 将广告文案、证据和结账入口放在一条清晰路径上。',
        icon: 'tabler:ad-2',
      },
    ],
    faqs: [
      {
        title: '可以基于现有主题开发吗？',
        description: '可以；会先评估主题质量，避免为了保留旧主题而承担更高维护成本。',
      },
      { title: '可以从其他平台迁移吗？', description: '可以；商品、客户、订单和 URL 的迁移范围需要在启动前确认。' },
      {
        title: '是否包含持续运营？',
        description: '上线后可按需衔接 CRO、SEO 与 Google Ads，先从最影响转化的环节开始。',
      },
    ],
    cta: {
      title: '把你的店铺链接发给我们。',
      subtitle: '先看最值得优化的商品页、购买路径或广告承接环节。',
      action: '申请免费诊断',
    },
  },
  {
    slug: 'seo',
    name: 'SEO 自然流量增长',
    tagline: 'SEO FOR B2B & ECOMMERCE',
    title: '让有需求的客户，更早找到你。',
    subtitle:
      'SEO 不是堆关键词。我们从真实搜索需求出发，修好技术基础，建设能帮助决策的页面和内容，再用数据验证它是否带来业务机会。',
    action: '申请 SEO 初步诊断',
    problemsTitle: '先诊断，再承诺',
    problems: [
      {
        title: '技术健康度',
        description: '检查抓取、索引、速度、重复内容和关键页面可访问性，先排除搜索引擎无法理解网站的障碍。',
        icon: 'tabler:stethoscope',
      },
      {
        title: '关键词机会',
        description: '识别高意向商业词、产品词、行业问题词与现有排名缺口，不把资源浪费在泛流量上。',
        icon: 'tabler:key',
      },
      {
        title: '内容缺口',
        description: '对比竞品，找出客户在评估、选型与采购时尚未得到回答的问题。',
        icon: 'tabler:files',
      },
      {
        title: '转化路径',
        description: '确认自然访问者是否能顺利到达询盘、报价或下单入口，而不是只增加阅读量。',
        icon: 'tabler:git-pull-request',
      },
    ],
    deliverablesTitle: '服务模块',
    deliverables: [
      {
        title: 'SEO 策略与页面地图',
        description: '把关键词分配到服务页、产品页、行业页和文章，避免多个页面互相竞争。',
        icon: 'tabler:map-pin',
      },
      {
        title: '技术 SEO',
        description: '优先处理影响抓取、索引与体验的实际问题，不用无关清单制造工作量。',
        icon: 'tabler:code',
      },
      {
        title: '内容生产',
        description: '围绕买家问题写出可被搜索、也可被销售团队复用的页面与内容。',
        icon: 'tabler:writing',
      },
      { title: '权威度增长', description: '建设相关且可验证的外部提及，而不是购买无关链接。', icon: 'tabler:link' },
      {
        title: '月度复盘',
        description: '汇报排名、流量、线索与下一阶段优先级，把执行量与业务信号放在一起看。',
        icon: 'tabler:calendar-stats',
      },
    ],
    processTitle: '执行节奏',
    process: [
      { title: '第 1 月', description: '完成审计、关键词地图、优先级与第一批修复，明确先做什么与暂不做什么。' },
      { title: '第 2–3 月', description: '上线核心商业页面和首批内容，同时持续解决技术问题。' },
      { title: '第 4 月起', description: '根据排名、流量和转化扩展与优化；周期会因行业、基础和竞争程度而异。' },
    ],
    outcomes: [
      {
        title: '先占住商业意图页面',
        description: '优先把服务、产品、行业和应用页面做成能够回答购买问题的入口。',
        icon: 'tabler:briefcase',
      },
      {
        title: '再建设持续需求内容',
        description: '用资源和文章覆盖选型、比较与问题型搜索，形成可持续的流量来源。',
        icon: 'tabler:article',
      },
      {
        title: '用业务数据校正方向',
        description: '排名和流量只是信号；询盘、报价与线索质量才决定下一步优先级。',
        icon: 'tabler:focus-2',
      },
    ],
    faqs: [
      {
        title: '多久能看到结果？',
        description: '取决于行业、站点基础与竞争程度。我们会明确阶段目标，但不承诺具体排名。',
      },
      {
        title: '内容由谁提供？',
        description: '可共同完成：我们负责策略、框架与初稿方向，团队补充产品和行业专业信息。',
      },
      {
        title: 'SEO 是否需要先改版网站？',
        description: '不一定。审计后会区分可在现站修复的事项与确实需要重构的关键页面。',
      },
    ],
    cta: {
      title: '获得一份聚焦优先级的 SEO 诊断。',
      subtitle: '先识别真正影响抓取、内容与转化的事项，而不是堆砌术语。',
      action: '申请免费诊断',
    },
  },
  {
    slug: 'sem',
    name: 'SEM / Google Ads 投放',
    tagline: 'GOOGLE ADS MANAGEMENT',
    title: '每一笔广告预算，都应该有清晰去向。',
    subtitle: '从账户结构、关键词与创意，到转化追踪和落地页，我们用完整的获客链路判断广告是否真的有效。',
    action: '申请账户诊断',
    problemsTitle: '常见投放症状',
    problems: [
      {
        title: '有点击，没有询盘或订单',
        description: '流量本身不等于机会；搜索意图、广告承诺和落地页可能没有对齐。',
        icon: 'tabler:click',
      },
      {
        title: '追踪不完整',
        description: '无法区分表单、合格线索、电话咨询或低价值动作，就无法判断预算是否被浪费。',
        icon: 'tabler:radar',
      },
      {
        title: '广告与页面脱节',
        description: '用户点击后看不到广告承诺的答案，最终在理解产品前就离开页面。',
        icon: 'tabler:unlink',
      },
      {
        title: '账户没有持续测试',
        description: '长期只消耗预算、不验证新的关键词、素材、受众或页面假设，结果自然停滞。',
        icon: 'tabler:flask-off',
      },
    ],
    deliverablesTitle: '服务范围',
    deliverables: [
      {
        title: '账户与追踪审计',
        description: '检查目标、事件、归因、结构与历史浪费，先确认现有数据能否用于判断。',
        icon: 'tabler:search',
      },
      {
        title: '投放策略',
        description: '明确市场、受众、关键词、广告类型与测试优先级，避免同时改动过多变量。',
        icon: 'tabler:target-arrow',
      },
      {
        title: '广告与落地页协同',
        description: '让搜索意图、广告文案和页面 CTA 对齐，给用户连续而清楚的下一步。',
        icon: 'tabler:arrows-exchange',
      },
      {
        title: '持续优化',
        description: '迭代搜索词、否定词、预算、出价、素材和转化路径，把预算移向有效机会。',
        icon: 'tabler:refresh',
      },
      {
        title: '透明复盘',
        description: '以花费、转化、CPA/ROAS 与线索质量讨论结果，不只汇报点击和展示。',
        icon: 'tabler:report-analytics',
      },
    ],
    processTitle: '优化闭环',
    process: [
      { title: '01 定义有效转化', description: '不是所有表单、点击或订单都价值相同；先统一真正代表业务机会的信号。' },
      { title: '02 搭建可验证测试', description: '一次只验证有限假设，保留可比较的数据，知道哪项改变真正带来影响。' },
      { title: '03 把预算移向有效机会', description: '减少无效查询、地域、受众或素材的消耗，优先保住已验证的机会。' },
      { title: '04 扩大已验证路径', description: '在 CPA 或 ROAS 达标后，再扩大预算与市场，而不是先放大不确定性。' },
    ],
    outcomes: [
      {
        title: '账户始终归客户所有',
        description: '需要相应权限完成诊断和优化，但账户资产与数据始终留在客户名下。',
        icon: 'tabler:lock-open',
      },
      {
        title: '清晰的数据口径',
        description: '广告、网站和销售端尽可能使用一致的转化定义，减少“各看各的数据”。',
        icon: 'tabler:database',
      },
      {
        title: '可解释的优化动作',
        description: '每次调整都有明确假设和观察指标，不用模糊的“已优化”代替结果。',
        icon: 'tabler:bulb',
      },
    ],
    faqs: [
      { title: '需要开放账户权限吗？', description: '需要；这样才能检查结构、追踪和历史数据。账户始终归客户所有。' },
      { title: '最低预算是多少？', description: '会根据市场 CPC、目标和测试周期评估，不用虚设统一门槛。' },
      { title: '能否保证 ROAS？', description: '不能。我们会明确测试目标、数据口径和可控的优化动作。' },
    ],
    cta: {
      title: '先定位账户里最明显的机会。',
      subtitle: '上传账户截图或留下网站链接，我们会先看追踪、搜索词和落地页是否对齐。',
      action: '申请免费诊断',
    },
  },
  {
    slug: 'growth',
    name: '整站增长方案',
    tagline: 'WEBSITE + SEO + GOOGLE ADS',
    title: '让网站、流量和转化说同一种语言。',
    subtitle:
      '当建站、SEO 和广告由不同团队分别推进，常常会得到一个漂亮的网站和一份无法转化的流量报表。我们把它们放进同一份增长计划。',
    action: '规划我的增长方案',
    problemsTitle: '一条完整增长链路',
    problems: [
      {
        title: '找到机会',
        description: '明确市场、买家、产品优势与竞争位置，先判断最值得争取的需求在哪里。',
        icon: 'tabler:compass',
      },
      {
        title: '承接需求',
        description: '用网站、服务页、产品页或落地页把价值说清楚，让用户有理由继续行动。',
        icon: 'tabler:layout',
      },
      {
        title: '获取访问',
        description: '用 SEO 覆盖持续需求，用 Ads 验证和放大高意向需求，两者服务同一套页面策略。',
        icon: 'tabler:traffic-cone',
      },
      {
        title: '转成业务',
        description: '追踪询盘、订单和线索质量，再据此调整页面与投放。',
        icon: 'tabler:chart-arrows-vertical',
      },
    ],
    deliverablesTitle: '适合这些阶段的业务',
    deliverables: [
      {
        title: '新市场启动',
        description: '没有成熟海外网站，需要先建立可信的销售阵地、关键页面和最小可验证的获客路径。',
        icon: 'tabler:rocket',
      },
      {
        title: '网站改版后增长停滞',
        description: '已有访问但难以变成有效线索或订单，需要把内容、页面与转化动作重新接起来。',
        icon: 'tabler:arrow-bar-to-down',
      },
      {
        title: '广告成本持续上升',
        description: '单靠调价难以解决问题，需要同时改进落地页、追踪和自然流量结构。',
        icon: 'tabler:currency-yen',
      },
    ],
    processTitle: '合作机制',
    process: [
      {
        title: '每月一个明确目标',
        description: '例如关键页面上线、首批内容发布或有效线索成本下降，避免工作被零散需求打断。',
      },
      { title: '同一份数据口径', description: '网站、自然流量与广告转化使用一致定义，让团队能够讨论同一个业务结果。' },
      { title: '固定复盘节奏', description: '每月查看结果与下一步优先级，不只汇报发布了多少页面或改了多少广告。' },
      { title: '根据证据扩展', description: '先验证市场、页面和渠道，再把资源投入已证实有效的路径。' },
    ],
    outcomes: [
      {
        title: '一张共同的增长地图',
        description: '市场、买家、页面、关键词、广告和转化事件都围绕同一组优先级安排。',
        icon: 'tabler:map',
      },
      {
        title: '更少的协作断点',
        description: '页面不再脱离投放制作，内容不再脱离销售问题，数据也不再各自解释。',
        icon: 'tabler:link',
      },
      {
        title: '持续而非一次性的改进',
        description: '每轮复盘留下下一步假设，让上线成为增长循环的开始，而不是项目终点。',
        icon: 'tabler:repeat',
      },
    ],
    faqs: [
      {
        title: '是否必须同时做网站、SEO 和 Ads？',
        description: '不必。会先从当前限制增长的关键环节开始，其他部分在需要时再衔接。',
      },
      {
        title: '如何判断优先级？',
        description: '综合业务目标、现有数据、页面缺口与市场机会，优先做影响最大且能验证的事项。',
      },
      {
        title: '如何汇报结果？',
        description: '使用统一的询盘、订单或线索质量口径，固定复盘结果、动作与下一阶段计划。',
      },
    ],
    cta: {
      title: '先把你的增长链路画清楚。',
      subtitle: '告诉我们市场、现有站点和目标，获取一份聚焦优先级的建议。',
      action: '规划我的增长方案',
    },
  },
];
