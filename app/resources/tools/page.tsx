import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "推薦工具同服務 | OpenClaw 繁中教學站",
  description:
    "我自己用緊同推薦嘅工具，包括硬件、VPS、API Provider 同開發工具。部分連結係 affiliate link。",
};

const sections = [
  {
    title: "🖥️ 硬件",
    items: [
      {
        name: "Mac Mini（M4）",
        desc: "24 小時跑 OpenClaw 嘅最佳選擇——Apple Silicon 跑本地模型快、靜、慳電",
        href: "https://www.apple.com/shop/buy-mac/mac-mini",
      },
      {
        name: "舊 MacBook / Mac Mini",
        desc: "有閒置嘅舊 Mac？做 dedicated OpenClaw server 一流，比買新機更省",
        href: "#",
      },
    ],
  },
  {
    title: "☁️ 雲端 / VPS",
    items: [
      {
        name: "DigitalOcean",
        desc: "一鍵部署 OpenClaw，新用戶獲 $200 免費 credit，5 分鐘上線",
        href: "https://www.digitalocean.com/?refcode=PLACEHOLDER&utm_campaign=Referral_Invite&utm_medium=Referral_Program",
        badge: "$200 免費 credit",
      },
      {
        name: "Contabo",
        desc: "歐洲 VPS，性價比極高，適合長期跑 OpenClaw 嘅用戶",
        href: "https://contabo.com/",
      },
    ],
  },
  {
    title: "🔑 API Provider",
    items: [
      {
        name: "OpenRouter",
        desc: "一個 API Key 用所有模型（GPT、Claude、DeepSeek），唔使分別開帳號",
        href: "https://openrouter.ai/",
      },
      {
        name: "OpenAI",
        desc: "最多人用，GPT-5.4 係目前最好嘅通用模型，Codex OAuth 有免費額度",
        href: "https://platform.openai.com/",
      },
      {
        name: "DeepSeek",
        desc: "最平嘅選擇，DeepSeek V3 性價比極高，適合高頻自動化任務",
        href: "https://platform.deepseek.com/",
      },
    ],
  },
  {
    title: "🛠️ 工具",
    items: [
      {
        name: "Telegram",
        desc: "OpenClaw 最推薦嘅 channel，Bot API 穩定，香港用戶普及率高",
        href: "https://telegram.org/",
      },
      {
        name: "Obsidian",
        desc: "知識管理神器，同 OpenClaw 結合可以建立 AI 輔助知識庫",
        href: "https://obsidian.md/",
      },
      {
        name: "n8n",
        desc: "Workflow 自動化工具，同 OpenClaw 配合可建立確定性 + AI 判斷嘅混合流程",
        href: "https://n8n.io/",
      },
    ],
  },
];

export default function ResourcesToolsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">推薦工具同服務</h1>
      <p className="mb-10 text-gray-500">
        我自己用緊同推薦嘅工具。部分連結係 affiliate link，你使用唔會多付任何費用。
      </p>

      <div className="space-y-12">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="mb-4 text-xl font-semibold">{section.title}</h2>
            <div className="divide-y divide-gray-100 rounded-lg border border-gray-200">
              {section.items.map((item) => (
                <div key={item.name} className="flex items-start gap-4 p-4">
                  <div className="flex-1">
                    <div className="mb-0.5 flex items-center gap-2">
                      <span className="font-medium">{item.name}</span>
                      {"badge" in item && item.badge && (
                        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer nofollow"
                        : undefined
                    }
                    className="shrink-0 rounded-lg border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50"
                  >
                    查看 →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-gray-50 p-6 text-center text-sm text-gray-500">
        以上部分連結係 affiliate link。你透過呢啲連結購買唔會多付任何費用，但我會收到少量佣金，用嚟支持呢個網站嘅持續更新。
      </div>
    </div>
  );
}
