import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { getArticleBySlug } from "@/lib/mdx";
import { generateArticleSchema } from "@/lib/schema";
import { CATEGORIES } from "@/lib/constants";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { ArticleHeader } from "./article-header";
import { ArticleFooter } from "./article-footer";
import { TableOfContents } from "@/components/mdx/toc";
import { mdxComponents } from "@/components/mdx/mdx-components";

export function ArticlePage({
  category,
  slug,
}: {
  readonly category: string;
  readonly slug: string;
}) {
  const { meta, content } = getArticleBySlug(category, slug);
  const categoryInfo = CATEGORIES.find((c) => c.slug === category);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema(meta)),
        }}
      />
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumb
          items={[
            { name: categoryInfo?.name ?? category, href: `/${category}` },
            { name: meta.title, href: `/${category}/${slug}` },
          ]}
        />
        <ArticleHeader meta={meta} />
        <TableOfContents />
        <article className="prose prose-gray max-w-none">
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: "wrap" }],
                  [rehypePrettyCode, { theme: "github-dark" }],
                ],
              },
            }}
          />
        </article>
        <ArticleFooter meta={meta} />
      </div>
    </>
  );
}
