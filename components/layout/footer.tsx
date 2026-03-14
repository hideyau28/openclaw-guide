"use client";

import Link from "next/link";
import { SITE_NAME, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Newsletter placeholder */}
        <div className="mb-8 rounded-lg bg-blue-50 p-6 text-center">
          <h3 className="mb-2 text-lg font-semibold">訂閱每週更新</h3>
          <p className="mb-4 text-sm text-gray-600">
            第一時間收到最新教學文章同安全提示。
          </p>
          <form
            className="mx-auto flex max-w-md gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              訂閱
            </button>
          </form>
        </div>

        {/* Nav links — same as header */}
        <nav className="mb-8 flex flex-wrap justify-center gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} {SITE_NAME} | Made in Hong Kong
        </p>
      </div>
    </footer>
  );
}
