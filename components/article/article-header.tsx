import type { ArticleMeta } from "@/lib/mdx";
import { VersionBadge } from "./version-badge";

export function ArticleHeader({ meta }: { readonly meta: ArticleMeta }) {
  return (
    <header className="mb-8 border-b border-neutral-200 pb-6">
      <h1 className="mb-3 text-3xl font-bold leading-tight md:text-4xl">
        {meta.title}
      </h1>
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
        <time dateTime={meta.date}>
          {new Date(meta.date).toLocaleDateString("zh-HK")}
        </time>
        <span>·</span>
        <span>{meta.readingTime}</span>
        <VersionBadge
          version={meta.openclawVersion}
          lastVerified={meta.lastVerified}
        />
      </div>
    </header>
  );
}
