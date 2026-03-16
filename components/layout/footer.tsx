"use client";

import Link from "next/link";
import { SITE_NAME, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Newsletter placeholder */}
        <div className="mb-8 rounded-lg bg-neutral-800 p-6 text-center">
          <h3 className="mb-2 text-lg font-semibold">訂閱每週更新</h3>
          <p className="mb-4 text-sm text-neutral-400">
            第一時間收到最新教學文章同安全提示。
          </p>
          <form
            className="mx-auto flex max-w-md gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-lg border border-neutral-600 bg-neutral-900 px-3 py-2 text-sm text-white placeholder:text-neutral-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
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
              className="text-sm text-neutral-400 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resources/tools"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            推薦工具
          </Link>
        </nav>

        <p className="mb-2 text-center text-sm text-neutral-400">
          由香港獨立開發者 Yau 建立 🇭🇰
        </p>
        <p className="text-center text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} {SITE_NAME}
        </p>
      </div>
    </footer>
  );
}
