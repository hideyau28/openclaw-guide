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
            className="text-sm text-neutral-400 hover:text-white"
          >
            推薦工具
          </Link>
        </nav>

        {/* Social links */}
        <div className="mb-4 flex justify-center gap-5">
          <a
            href="https://www.facebook.com/profile.php?id=61582194345724"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/midlife_ai_hk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.threads.net/@midlife_ai_hk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white"
            aria-label="Threads"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.724 2.107-1.138 3.456-1.165 1.005-.02 1.93.1 2.768.355-.07-.96-.337-1.696-.8-2.197-.554-.6-1.416-.91-2.563-.924l-.005-.002c-.94.009-1.88.29-2.41.626l-1.026-1.77c.864-.498 2.09-.88 3.442-.893h.012c1.637.02 2.907.518 3.778 1.482.753.834 1.188 1.96 1.297 3.35.488.17.95.384 1.378.64 1.187.71 2.09 1.69 2.61 2.835.826 1.82.883 4.542-1.249 6.63-1.776 1.74-4.004 2.503-7.06 2.527Zm-.39-8.14c-.71.013-1.336.15-1.793.397-.51.276-.77.646-.745 1.069.037.67.634 1.305 1.896 1.237 1.078-.058 1.855-.453 2.373-1.204.345-.5.578-1.14.684-1.91a8.3 8.3 0 0 0-2.415-.589Z" />
            </svg>
          </a>
        </div>

        <div className="mb-4 flex justify-center gap-4">
          <Link
            href="/terms"
            className="text-xs text-neutral-500 hover:text-white"
          >
            服務條款
          </Link>
          <Link
            href="/refund"
            className="text-xs text-neutral-500 hover:text-white"
          >
            退款政策
          </Link>
        </div>

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
