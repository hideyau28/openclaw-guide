import { ArticlePage } from "@/components/article/article-page";
import { makeGenerateStaticParams, makeGenerateMetadata } from "@/lib/article-page-helpers";

const CATEGORY = "troubleshoot";

export const generateStaticParams = makeGenerateStaticParams(CATEGORY);
export const generateMetadata = makeGenerateMetadata(CATEGORY);

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ArticlePage category={CATEGORY} slug={slug} />;
}
