import type { Metadata } from "next";
import { getArticleBySlug, getSlugsForCategory } from "./mdx";
import { SITE_NAME } from "./constants";

export function makeGenerateStaticParams(category: string) {
  return function generateStaticParams() {
    return getSlugsForCategory(category).map((slug) => ({ slug }));
  };
}

export function makeGenerateMetadata(category: string) {
  return function generateMetadata({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }): Promise<Metadata> {
    return params.then(({ slug }) => {
      const { meta } = getArticleBySlug(category, slug);
      return {
        title: `${meta.title} | ${SITE_NAME}`,
        description: meta.description,
        keywords: meta.seoKeywords as unknown as string[],
      };
    });
  };
}
