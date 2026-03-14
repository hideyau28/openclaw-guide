export const SITE_NAME = "OpenClaw 繁中教學站";
export const SITE_URL = "https://openclaw-guide-mauve.vercel.app";
export const SITE_DESCRIPTION =
  "OpenClaw 開源 AI Agent 繁體中文實戰教學 — 安全設定、部署指南、MCP 開發、自動化工作流";
export const AUTHOR = "OpenClaw 繁中教學站";

export type Category = {
  readonly slug: string;
  readonly name: string;
  readonly description: string;
};

export const CATEGORIES: readonly Category[] = [
  { slug: "start", name: "快速入門", description: "由零開始認識 OpenClaw" },
  { slug: "install", name: "安裝教學", description: "各平台安裝同設定指南" },
  {
    slug: "security",
    name: "安全設定",
    description: "保護你的 AI Agent 免受攻擊",
  },
  { slug: "troubleshoot", name: "排錯中心", description: "常見問題一站搞掂" },
  {
    slug: "use-cases",
    name: "實戰教學",
    description: "真實應用場景同自動化工作流",
  },
  {
    slug: "compare",
    name: "比較評測",
    description: "OpenClaw 同其他工具嘅比較",
  },
  {
    slug: "skills",
    name: "Skills 市集",
    description: "OpenClaw Skills 開發同安全指南",
  },
] as const;

export const NAV_ITEMS = [
  { href: "/", label: "首頁" },
  { href: "/security/essential-guide", label: "安全" },
  { href: "/install/macos", label: "安裝" },
  { href: "/troubleshoot/gateway", label: "排錯" },
  { href: "/use-cases/whatsapp-assistant", label: "實戰" },
  { href: "/services/secure-setup", label: "服務" },
  { href: "/about", label: "About" },
];

export type CtaType = "pdf" | "setup" | "consultation" | "newsletter";

export const CTA_CONFIG: Record<
  CtaType,
  { title: string; description: string; href: string; buttonText: string }
> = {
  pdf: {
    title: "免費下載 PDF 懶人包",
    description: "一次打包所有安全設定步驟，離線也能跟住做。",
    href: "/downloads/openclaw-security-guide.pdf",
    buttonText: "下載 PDF",
  },
  setup: {
    title: "專人安全部署服務",
    description: "唔想自己搞？我哋幫你由零設定到上線。",
    href: "/services/secure-setup",
    buttonText: "了解服務方案",
  },
  consultation: {
    title: "一對一諮詢",
    description: "30 分鐘線上諮詢，解答你所有 OpenClaw 問題。",
    href: "/services/secure-setup#consultation",
    buttonText: "預約諮詢",
  },
  newsletter: {
    title: "訂閱每週更新",
    description: "第一時間收到最新教學文章同安全提示。",
    href: "#newsletter",
    buttonText: "免費訂閱",
  },
};
