import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CATEGORIES, type CtaType } from "./constants";

export interface ArticleMeta {
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly slug: string;
  readonly date: string;
  readonly lastVerified: string;
  readonly openclawVersion: string;
  readonly readingTime: string;
  readonly seoKeywords: readonly string[];
  readonly schemaType: "Article" | "HowTo" | "FAQPage";
  readonly relatedArticles: readonly string[];
  readonly ctaType: CtaType;
}

const contentDir = path.join(process.cwd(), "content");

export function getArticleBySlug(
  category: string,
  slug: string,
): { meta: ArticleMeta; content: string } {
  const filePath = path.join(contentDir, category, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    meta: { ...data, category, slug } as ArticleMeta,
    content,
  };
}

export function getAllArticles(): readonly ArticleMeta[] {
  const articles: ArticleMeta[] = [];
  for (const cat of CATEGORIES) {
    const catDir = path.join(contentDir, cat.slug);
    if (!fs.existsSync(catDir)) continue;
    const files = fs.readdirSync(catDir).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
      const slug = file.replace(/\.mdx$/, "");
      const { meta } = getArticleBySlug(cat.slug, slug);
      articles.push(meta);
    }
  }
  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getArticlesByCategory(category: string): readonly ArticleMeta[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getSlugsForCategory(category: string): readonly string[] {
  const catDir = path.join(contentDir, category);
  if (!fs.existsSync(catDir)) return [];
  return fs
    .readdirSync(catDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
