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
  const articles = getAllArticles().slice(0, 6);

  return (
    <div className="mx-auto max-w-4xl px-4">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 text-center sm:py-32"
        style={{
          background:
            "radial-gradient(ellipse at 50% -20%, rgba(185,28,28,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(185,28,28,0.06) 0%, transparent 50%)",
        }}
      >
        <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-medium text-red-700">
          <span className="inline-block h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          GitHub 300K+ Stars 嘅開源 AI Agent
        </span>
        <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          OpenClaw 好用，但裝錯一步
          <br className="hidden sm:block" />
          可以畀人 hack 晒。
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-lg text-gray-600 sm:text-xl">
          安全設定 · 排錯避坑 · WhatsApp 自動化 — 香港人嘅繁中實戰教學
        </p>
        <p className="mb-10 text-sm text-gray-400">
          100% 免費教學 · 繁體中文 · 香港人寫 · 每週更新
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <Link
            href="/security/essential-guide"
            className="rounded-lg bg-red-700 px-7 py-3.5 text-center font-medium text-white shadow-md transition-all hover:bg-red-800 hover:shadow-lg hover:-translate-y-0.5"
          >
            {"\uD83D\uDD12"} 安全設定指南
          </Link>
          <Link
            href="/install/macos"
            className="rounded-lg border-2 border-gray-200 bg-white px-7 py-3.5 text-center font-medium text-gray-700 shadow-sm transition-all hover:border-red-300 hover:text-red-700 hover:shadow-md hover:-translate-y-0.5"
          >
            {"\uD83D\uDD27"} 安裝教學
          </Link>
          <Link
            href="/troubleshoot/gateway"
            className="rounded-lg border-2 border-gray-200 bg-white px-7 py-3.5 text-center font-medium text-gray-700 shadow-sm transition-all hover:border-red-300 hover:text-red-700 hover:shadow-md hover:-translate-y-0.5"
          >
            {"\uD83D\uDD34"} 排錯中心
          </Link>
        </div>
      </section>

      {/* Use case cards */}
      <section className="mb-20">
        <h2 className="mb-2 text-center text-3xl font-bold">你可以學到</h2>
        <p className="mb-10 text-center text-gray-500">三大核心主題，由零開始到實戰部署</p>
        <div className="grid gap-6 sm:grid-cols-3">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="mb-4 inline-flex items-center justify-center rounded-xl bg-red-50 p-3 text-red-600 transition-colors group-hover:bg-red-100">
                <uc.icon className="h-6 w-6" />
              </span>
              <h3 className="mb-2 text-lg font-semibold">{uc.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest articles */}
      {articles.length > 0 && (
        <section className="mb-20">
          <h2 className="mb-2 text-center text-3xl font-bold">最新文章</h2>
          <p className="mb-10 text-center text-gray-500">每週更新，實戰教學同安全提示</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {articles.map((a, i) => {
              const cat = CATEGORIES.find((c) => c.slug === a.category);
              return (
                <Link
                  key={`${a.category}/${a.slug}`}
                  href={`/${a.category}/${a.slug}`}
                  className={`group block rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${i === 0 ? "md:col-span-2 md:flex md:items-center md:gap-6 md:p-6" : ""}`}
                >
                  <div className={i === 0 ? "flex-1" : ""}>
                    <span className="mb-2 inline-block rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700">
                      {cat?.name}
                    </span>
                    <h3 className={`mb-1 font-semibold group-hover:text-red-700 transition-colors ${i === 0 ? "text-xl" : ""}`}>{a.title}</h3>
                    <p className="mb-2 text-sm leading-relaxed text-gray-600">{a.description}</p>
                    <p className="text-xs text-gray-400">
                      {a.readingTime} · {a.date}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Digital Products */}
      <DigitalProducts />

      {/* Service CTA */}
      <section className="mb-20 overflow-hidden rounded-2xl bg-gradient-to-br from-red-700 via-red-800 to-red-900 p-10 text-center text-white shadow-xl sm:p-12">
        <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
          唔想 OpenClaw 變成 hacker 後門？
        </h2>
        <p className="mb-8 text-red-200">
          安全部署 · 零信任設定 · 實戰自動化 — 一次過幫你做好
        </p>
        <Link
          href="/services/secure-setup"
          className="inline-block rounded-lg border-2 border-white/90 px-7 py-3.5 font-medium text-white transition-all hover:bg-white hover:text-red-700 hover:shadow-lg"
        >
          了解服務方案
        </Link>
      </section>
    </div>
  );
}
