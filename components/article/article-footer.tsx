import Link from "next/link";
import type { ArticleMeta } from "@/lib/mdx";
import { CTA_CONFIG, type CtaType } from "@/lib/constants";

export function ArticleFooter({
  meta,
}: {
  readonly meta: ArticleMeta;
}) {
  const cta = CTA_CONFIG[meta.ctaType];
  const setupCta = CTA_CONFIG.setup;

  return (
    <footer className="mt-12 space-y-8 border-t border-gray-200 pt-8">
      {/* CTA */}
      <div className="rounded-lg bg-blue-50 p-6">
        <h3 className="mb-2 text-lg font-semibold">{cta.title}</h3>
        <p className="mb-4 text-sm text-gray-600">{cta.description}</p>
        <Link
          href={cta.href}
          className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          {cta.buttonText}
        </Link>
      </div>

      {/* Paid service CTA */}
      {meta.ctaType !== "setup" && (
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="mb-2 text-lg font-semibold">{setupCta.title}</h3>
          <p className="mb-4 text-sm text-gray-600">{setupCta.description}</p>
          <Link
            href={setupCta.href}
            className="inline-block rounded-lg border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
          >
            {setupCta.buttonText}
          </Link>
        </div>
      )}

      {/* Related articles */}
      {meta.relatedArticles.length > 0 && (
        <div>
          <h3 className="mb-3 text-lg font-semibold">相關文章</h3>
          <ul className="space-y-1">
            {meta.relatedArticles.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/${slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {slug}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </footer>
  );
}
