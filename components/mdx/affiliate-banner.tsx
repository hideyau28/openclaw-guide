import Link from "next/link";

type Provider = "digitalocean" | "openrouter" | "mac-mini";

const PROVIDERS: Record<
  Provider,
  {
    text: string;
    subtext: string;
    href: string;
    bg: string;
    border: string;
    btnBg: string;
    btnText: string;
  }
> = {
  digitalocean: {
    text: "💧 DigitalOcean 一鍵部署 OpenClaw — 5 分鐘上線，免去安裝煩惱",
    subtext: "用呢條連結註冊可獲 $200 免費 credit",
    href: "https://www.digitalocean.com/?refcode=PLACEHOLDER&utm_campaign=Referral_Invite&utm_medium=Referral_Program",
    bg: "bg-blue-50",
    border: "border-blue-200",
    btnBg: "bg-blue-600 hover:bg-blue-700",
    btnText: "text-white",
  },
  openrouter: {
    text: "🔀 OpenRouter — 一個 API Key 用所有 AI 模型",
    subtext: "唔使每個 provider 都開帳號，GPT、Claude、DeepSeek 一站搞掂",
    href: "https://openrouter.ai/",
    bg: "bg-purple-50",
    border: "border-purple-200",
    btnBg: "bg-purple-600 hover:bg-purple-700",
    btnText: "text-white",
  },
  "mac-mini": {
    text: "🖥️ 推薦用 Mac Mini 做 OpenClaw 24 小時 Server",
    subtext: "Apple Silicon 跑本地模型夠快、夠靜、夠慳電",
    href: "https://www.apple.com/shop/buy-mac/mac-mini",
    bg: "bg-gray-50",
    border: "border-gray-200",
    btnBg: "bg-gray-800 hover:bg-gray-900",
    btnText: "text-white",
  },
};

export function AffiliateBanner({ provider }: { provider: Provider }) {
  const p = PROVIDERS[provider];
  return (
    <div
      className={`relative my-6 rounded-lg border ${p.border} ${p.bg} px-5 py-4`}
    >
      <span className="absolute right-3 top-2 text-xs text-gray-400 opacity-60">
        推薦連結
      </span>
      <p className="mb-0.5 text-sm font-semibold text-gray-800">{p.text}</p>
      <p className="mb-3 text-xs text-gray-500">{p.subtext}</p>
      <Link
        href={p.href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`inline-block rounded-md px-4 py-1.5 text-xs font-medium ${p.btnBg} ${p.btnText}`}
      >
        了解詳情 →
      </Link>
    </div>
  );
}
