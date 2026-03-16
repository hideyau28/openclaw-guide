import Link from "next/link";
import { Shield, Smartphone, Wrench } from "lucide-react";
import { CATEGORIES } from "@/lib/constants";
import { getAllArticles } from "@/lib/mdx";
import { DigitalProducts } from "@/components/home/digital-products";

const useCases = [
  {
    icon: Shield,
    emoji: "\uD83D\uDD12",
    title: "安全部署",
    desc: "避開 ClawJacked 漏洞同 800+ 惡意 Skills，安全咁跑你嘅 AI Agent",
  },
  {
    icon: Smartphone,
    emoji: "\uD83D\uDCF1",
    title: "WhatsApp 自動化",
    desc: "香港人最常用嘅平台 — 用 OpenClaw 做 24 小時私人助理",
  },
  {
    icon: Wrench,
    emoji: "\uD83D\uDD27",
    title: "排錯避坑",
    desc: "Gateway、API Key、Token 費用 — 常見問題一站搞掂",
  },
];

export default function HomePage() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-4">
      {/* Hero */}
      <section
        className="py-20 text-center sm:py-28"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(185,28,28,0.08) 0%, transparent 70%)",
        }}
      >
        <span className="mb-4 inline-block rounded-full bg-red-700 px-4 py-1.5 text-sm text-white">
          {"\uD83E\uDD9E"} GitHub 300K+ Stars 嘅開源 AI Agent
        </span>
        <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
          OpenClaw 好用，但裝錯一步可以畀人 hack 晒。
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-lg text-gray-600">
          安全設定 · 排錯避坑 · WhatsApp 自動化 — 香港人嘅繁中實戰教學
        </p>
        <p className="mb-8 text-sm text-gray-400">
          100% 免費教學 · 繁體中文 · 香港人寫 · 每週更新
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/security/essential-guide"
            className="rounded-lg bg-red-700 px-6 py-3 font-medium text-white shadow-sm hover:bg-red-800"
          >
            {"\uD83D\uDD12"} 安全設定指南
          </Link>
          <Link
            href="/install/macos"
            className="rounded-lg border-2 border-neutral-300 px-6 py-3 font-medium transition-colors hover:border-red-700 hover:text-red-700"
          >
            {"\uD83D\uDD27"} 安裝教學
          </Link>
          <Link
            href="/troubleshoot/gateway"
            className="rounded-lg border-2 border-neutral-300 px-6 py-3 font-medium transition-colors hover:border-red-700 hover:text-red-700"
          >
            {"\uD83D\uDD34"} 排錯中心
          </Link>
        </div>
      </section>

      {/* Use case cards */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold">你可以學到</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="rounded-lg border border-gray-200 border-l-4 border-l-red-600 p-6 transition-all hover:border-red-200 hover:shadow-md"
            >
              <span className="mb-3 inline-flex rounded-xl bg-red-50 p-3 text-3xl">
                {uc.emoji}
              </span>
              <h3 className="mb-1 font-semibold">{uc.title}</h3>
              <p className="text-sm text-gray-600">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest articles */}
      {articles.length > 0 && (
        <section className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold">最新文章</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {articles.map((a) => {
              const cat = CATEGORIES.find((c) => c.slug === a.category);
              return (
                <Link
                  key={`${a.category}/${a.slug}`}
                  href={`/${a.category}/${a.slug}`}
                  className="block rounded-lg border border-gray-200 p-5 transition-all hover:border-red-200 hover:shadow-md"
                >
                  <span className="mb-1 inline-block rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                    {cat?.name}
                  </span>
                  <h3 className="mb-1 font-semibold">{a.title}</h3>
                  <p className="text-sm text-gray-600">{a.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Digital Products */}
      <DigitalProducts />

      {/* Service CTA */}
      <section className="mb-16 rounded-lg bg-gradient-to-r from-red-700 to-red-900 p-8 text-center text-white">
        <h2 className="mb-2 text-2xl font-bold">
          唔想 OpenClaw 變成 hacker 後門？
        </h2>
        <p className="mb-6 text-red-100">
          安全部署 · 零信任設定 · 實戰自動化 — 一次過幫你做好
        </p>
        <Link
          href="/services/secure-setup"
          className="inline-block rounded-lg border-2 border-white px-6 py-3 font-medium text-white transition-colors hover:bg-white hover:text-red-700"
        >
          了解服務方案
        </Link>
      </section>
    </div>
  );
}
