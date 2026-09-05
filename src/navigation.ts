import { getAsset, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '服务',
      links: [
        { text: 'WordPress 建站', href: getPermalink('/services/wordpress') },
        { text: 'Shopify 独立站', href: getPermalink('/services/shopify') },
        { text: 'SEO 增长', href: getPermalink('/services/seo') },
        { text: 'Google Ads 投放', href: getPermalink('/services/sem') },
        { text: '整站增长方案', href: getPermalink('/services/growth') },
      ],
    },
    {
      text: '行业方案',
      links: [
        { text: '方案总览', href: getPermalink('/solutions') },
        { text: 'B2B 外贸', href: getPermalink('/solutions/b2b-export') },
        { text: 'DTC 品牌出海', href: getPermalink('/solutions/dtc-brand') },
        { text: '跨境电商', href: getPermalink('/solutions/cross-border-ecommerce') },
        { text: '企业官网获客', href: getPermalink('/solutions/corporate-lead-gen') },
      ],
    },
    {
      text: '案例',
      links: [
        { text: 'WordPress 案例', href: getPermalink('/cases/wordpress') },
        { text: 'Shopify 案例', href: getPermalink('/cases/shopify') },
        { text: 'SEO 案例', href: getPermalink('/cases/seo') },
        { text: 'SEM 案例', href: getPermalink('/cases/sem') },
      ],
    },
    {
      text: '资源',
      links: [
        { text: 'SEO 知识中心', href: getPermalink('/resources/seo') },
        { text: '广告投放洞察', href: getPermalink('/resources/ads') },
        { text: 'Shopify / WordPress 教程', href: getPermalink('/resources/wordpress-shopify') },
        { text: '免费工具', href: getPermalink('/resources/tools') },
      ],
    },
    {
      text: '关于我们',
      links: [
        { text: '关于 Adelie', href: getPermalink('/about') },
        { text: '团队与方法论', href: getPermalink('/about/team') },
        { text: '合作流程', href: getPermalink('/about/process') },
        { text: '资质与伙伴', href: getPermalink('/about/partners') },
      ],
    },
  ],
  actions: [{ text: '免费诊断', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: '服务',
      links: [
        { text: 'WordPress 建站', href: getPermalink('/services/wordpress') },
        { text: 'Shopify 独立站', href: getPermalink('/services/shopify') },
        { text: 'SEO 增长', href: getPermalink('/services/seo') },
        { text: 'Google Ads', href: getPermalink('/services/sem') },
      ],
    },
    {
      title: '行业方案',
      links: [
        { text: '方案总览', href: getPermalink('/solutions') },
        { text: 'B2B 外贸', href: getPermalink('/solutions/b2b-export') },
        { text: 'DTC 品牌出海', href: getPermalink('/solutions/dtc-brand') },
        { text: '跨境电商', href: getPermalink('/solutions/cross-border-ecommerce') },
        { text: '企业官网获客', href: getPermalink('/solutions/corporate-lead-gen') },
      ],
    },
    {
      title: '资源',
      links: [
        { text: 'SEO 知识中心', href: getPermalink('/resources/seo') },
        { text: '广告投放洞察', href: getPermalink('/resources/ads') },
        { text: '免费工具', href: getPermalink('/resources/tools') },
      ],
    },
    {
      title: '关于 Adelie',
      links: [
        { text: '团队与方法论', href: getPermalink('/about/team') },
        { text: '合作流程', href: getPermalink('/about/process') },
        { text: '资质与伙伴', href: getPermalink('/about/partners') },
        { text: '联系我们', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [{ text: '隐私政策', href: getPermalink('/privacy') }],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: '© Adelie. All rights reserved.',
};
