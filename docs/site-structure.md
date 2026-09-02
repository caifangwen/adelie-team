# 网站结构说明

## 页面如何组织

Astro 使用文件路由：`src/pages/` 中的一个 `.astro` 或 `.md` 文件就是一个页面。常规页面通过 `PageLayout.astro` 进入统一的外壳；该外壳依次渲染公告、页头、页面主体和页脚。

```text
src/pages/*.astro
  └─ PageLayout.astro
       └─ Layout.astro（HTML、全局样式、字体、SEO、深浅色模式）
            ├─ Announcement.astro
            ├─ Header.astro
            ├─ <main> 页面组合的 widgets </main>
            └─ Footer.astro
```

落地页使用 `LandingLayout.astro`；博客文章和聚合页通过动态路由 `src/pages/[...blog]/` 生成。导航内容不写在组件里，集中在 `src/navigation.ts`。

## 页面与组件

| 路由                           | 文件                               | 页面组件                                                                                    |
| ------------------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------- |
| `/`                            | `src/pages/index.astro`            | Hero、Note、Features、Content、Steps、Features2、BlogLatestPosts、FAQs、Stats、CallToAction |
| `/about`                       | `src/pages/about.astro`            | Hero、Stats、Features2/3、Steps2                                                            |
| `/services`                    | `src/pages/services.astro`         | Hero、Features2、Content、Testimonials、CallToAction                                        |
| `/pricing`                     | `src/pages/pricing.astro`          | HeroText、Pricing、Features3、Steps、FAQs、CallToAction                                     |
| `/contact`                     | `src/pages/contact.astro`          | HeroText、Contact、Features2                                                                |
| `/components`                  | `src/pages/components.astro`       | 基础元素与所有常用 widgets 的展示页                                                         |
| `/homes/*`                     | `src/pages/homes/`                 | SaaS、Startup、Mobile App、Personal 四种首页组合                                            |
| `/landing/*`                   | `src/pages/landing/`               | Lead Generation、Sales、Click-through、Product、Pre-launch、Subscription 六种落地页组合     |
| `/terms`、`/privacy`           | `src/pages/terms.md`、`privacy.md` | MarkdownLayout 渲染的静态文档                                                               |
| `/blog` 及文章、标签、分类分页 | `src/pages/[...blog]/`             | List/Grid、SinglePost、RelatedPosts、Tags、Pagination                                       |
| `/rss.xml`                     | `src/pages/rss.xml.ts`             | RSS 输出                                                                                    |
| 未匹配路径                     | `src/pages/404.astro`              | 404 页面                                                                                    |

## 组件分层

- `src/components/ui/`：最小 UI 单元，如 `Button`、`Form`、`Headline`、`WidgetWrapper`、`Timeline`。
- `src/components/widgets/`：可直接拼装页面区块，如 Hero、Features、Pricing、FAQ、Contact、Footer。
- `src/components/blog/`：博客列表、文章正文、标签、相关推荐和分页。
- `src/components/common/`：图片优化、元数据、主题切换、菜单、统计脚本等跨页面能力。
- `src/layouts/`：页面外壳和 Markdown / Landing 页面布局。
- `src/data/post/`：博客文章内容；字段规则由 `src/content.config.ts` 定义。

## 样式在哪里

| 位置                                | 作用                                                                                                                               |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `src/components/CustomStyles.astro` | 品牌色、文字色、页面底色、字体 CSS 变量；深色模式的同一组变量也在这里。                                                            |
| `src/assets/styles/tailwind.css`    | Tailwind v4 主题映射、全局样式、自定义 utility，以及按钮、菜单、焦点状态。粗线条视觉的网格底纹、直角、粗边和硬阴影规则主要在这里。 |
| 各个 `.astro` 组件                  | Tailwind class 负责局部布局；卡片、图片、表单等组件已改用直角、黑白粗边与偏移阴影。                                                |
| `astro.config.ts`                   | 字体由 Astro Fonts API 配置，在 `Layout.astro` 的 `<Font />` 注入。                                                                |

## 内容和配置入口

- 网站名称、SEO、博客开关、分析等：`src/config.yaml`
- 顶部和底部导航：`src/navigation.ts`
- 页面：`src/pages/`
- 博客：`src/data/post/`
- 图片：`src/assets/images/`；远程图片经 `components/common/Image.astro` 统一处理

## 粗线条视觉规范

- 主色为橙红，强调色为黄，正文为近黑色；深色模式保持同一高对比关系。
- 按钮、卡片、图片和表单使用直角、`2px` 黑色（深色模式白色）边框，以及固定偏移的硬阴影。
- 页面背景保留低对比方格底纹，标题收紧字距；键盘焦点使用清晰的黄色描边。
- 新组件应优先复用 `Button`、`WidgetWrapper` 和已有 widgets。若新增卡片，沿用 `border-2`、`shadow-[6px_6px_0_#18181b]` 的组合，不再加入圆角或柔和投影。
