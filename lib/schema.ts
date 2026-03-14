import { SITE_NAME, SITE_URL } from "./constants";
import type { ArticleMeta } from "./mdx";

export function generateArticleSchema(meta: ArticleMeta) {
  return {
    "@context": "https://schema.org",
    "@type": meta.schemaType === "Article" ? "TechArticle" : meta.schemaType,
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.lastVerified,
    inLanguage: "zh-HK",
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: `${SITE_URL}/${meta.category}/${meta.slug}`,
  };
}

export function generateHowToSchema(
  title: string,
  description: string,
  steps: readonly { name: string; text: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: title,
    description,
    inLanguage: "zh-HK",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function generateFAQSchema(
  faqs: readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "zh-HK",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: readonly { name: string; href: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "OpenClaw 安全部署服務",
    provider: { "@type": "Organization", name: SITE_NAME },
    areaServed: "HK",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "部署方案",
      itemListElement: [
        {
          "@type": "Offer",
          name: "基礎方案",
          price: "99",
          priceCurrency: "HKD",
          description: "基本安全檢查 + 設定指引",
        },
        {
          "@type": "Offer",
          name: "專業方案",
          price: "399",
          priceCurrency: "HKD",
          description: "完整安全部署 + 30 日支援",
        },
        {
          "@type": "Offer",
          name: "企業方案",
          price: "799",
          priceCurrency: "HKD",
          description: "企業級部署 + 持續監控 + 優先支援",
        },
      ],
    },
  };
}
