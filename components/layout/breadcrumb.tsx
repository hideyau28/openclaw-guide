import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/schema";

type BreadcrumbItem = { name: string; href: string };

export function Breadcrumb({ items }: { readonly items: readonly BreadcrumbItem[] }) {
  const allItems: BreadcrumbItem[] = [{ name: "首頁", href: "/" }, ...items];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(allItems)),
        }}
      />
      <nav aria-label="breadcrumb" className="mb-4 text-sm text-gray-500">
        <ol className="flex flex-wrap gap-1">
          {allItems.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && <span>/</span>}
              {i < allItems.length - 1 ? (
                <Link href={item.href} className="hover:text-gray-700">
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-700">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
