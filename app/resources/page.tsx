import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `OpenClaw 推薦工具同服務 | ${SITE_NAME}`,
  description:
    "我自己用緊嘅工具推薦，包括 AI Model API、VPS、安全工具、開發工具同數碼產品平台。部分連結係 affiliate link。",
};

type Tool = {
  readonly name: string;
  readonly desc: string;
  readonly href: string;
  readonly affiliate: boolean;
};

type Section = {
  readonly title: string;
  readonly tools: readonly Tool[];
};

const SECTIONS: readonly Section[] = [
  {
    title: "AI Model API",
    tools: [
      {
        name: "OpenRouter",
        desc: "一個 API Key 用 400+ model，香港直接用唔使 VPN。我自己用嚟做 OpenClaw 嘅主力 model routing。",
        href: "https://openrouter.ai",
        affiliate: false,
      },
      {
        name: "OpenAI",
        desc: "GPT-5.4，Codex OAuth 免費試用。",
        href: "https://platform.openai.com",
        affiliate: false,
      },
      {
        name: "DeepSeek",
        desc: "最平嘅選擇，128k context。",
        href: "https://platform.deepseek.com",
        affiliate: false,
      },
    ],
  },
  {
    title: "VPS 雲端部署",
    tools: [
      {
        name: "DigitalOcean",
        desc: "新用戶送 $200 credit，部署 OpenClaw Gateway 最穩陣。",
        href: "https://m.do.co/c/7692f5f6464a",
        affiliate: true,
      },
      {
        name: "Vultr",
        desc: "全球 32 個機房，HK$5/月起。",
        href: "https://www.vultr.com/?ref=9882956-9J",
        affiliate: true,
      },
    ],
  },
  {
    title: "安全工具",
    tools: [
      {
        name: "NordVPN",
        desc: "香港連接 OpenAI API 需要 VPN 時用，我自己用緊。",
        href: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=143439&url_id=902",
        affiliate: true,
      },
      {
        name: "NordPass",
        desc: "管理 API Key 同密碼，避免 AMOS Stealer 偷密碼。",
        href: "https://go.nordpass.io/aff_c?offer_id=488&aff_id=143439&url_id=9356",
        affiliate: true,
      },
      {
        name: "Tailscale",
        desc: "免費 VPN 隧道，安全遠程連入 OpenClaw Gateway。",
        href: "https://tailscale.com",
        affiliate: false,
      },
    ],
  },
  {
    title: "開發工具",
    tools: [
      {
        name: "Claude Code",
        desc: "我嘅主力開發工具，呢個網站就係用佢建嘅。",
        href: "https://claude.ai",
        affiliate: false,
      },
      {
        name: "Vercel",
        desc: "免費部署 Next.js 網站。",
        href: "https://vercel.com",
        affiliate: false,
      },
      {
        name: "GitHub",
        desc: "代碼託管。",
        href: "https://github.com",
        affiliate: false,
      },
    ],
  },
  {
    title: "賣數碼產品",
    tools: [
      {
        name: "LemonSqueezy",
        desc: "賣 PDF、模板、技能包，5% 手續費，處理全球稅務。",
        href: "https://lemonsqueezy.com",
        affiliate: false,
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-3 text-3xl font-bold">OpenClaw 推薦工具同服務</h1>
      <p className="mb-12 text-gray-600">
        我自己用緊嘅工具，幫你慳時間同避坑。部分連結係 affiliate
        link，你唔會多付錢，但可以支持呢個網站繼續營運。
      </p>

      <div className="space-y-12">
        {SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="mb-5 text-2xl font-bold">{section.title}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {section.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="relative rounded-lg border border-gray-200 p-5 transition-all hover:border-red-200 hover:shadow-md"
                >
                  {tool.affiliate && (
                    <span className="absolute right-3 top-3 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-medium text-red-600">
                      合作推薦
                    </span>
                  )}
                  <h3 className="mb-1 text-lg font-semibold">{tool.name}</h3>
                  <p className="mb-4 text-sm text-gray-600">{tool.desc}</p>
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={
                      tool.affiliate
                        ? "inline-block rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800"
                        : "inline-block rounded-lg border-2 border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:border-red-700 hover:text-red-700"
                    }
                  >
                    前往 →
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-14 rounded-lg bg-gray-50 p-6 text-center text-sm text-gray-500">
        本頁部分連結係 affiliate
        link。當你透過呢啲連結註冊或購買，我會收到少量佣金，但你唔會多付任何費用。我只推薦我自己實際使用同信任嘅工具。
      </div>
    </div>
  );
}
