import type { MetadataRoute } from "next";
import { SITE_URL, CATEGORIES } from "@/lib/constants";
import { getAllArticles } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/services/secure-setup`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...CATEGORIES.map((c) => ({
      url: `${SITE_URL}/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/${a.category}/${a.slug}`,
    lastModified: new Date(a.lastVerified),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticPages, ...articlePages];
}
