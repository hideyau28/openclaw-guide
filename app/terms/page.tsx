import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `服務條款 | ${SITE_NAME}`,
  description: "OpenClaw 繁中教學站服務條款及使用條件。",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">服務條款</h1>

      <div className="prose prose-gray max-w-none">
        <p>
          歡迎使用 {SITE_NAME}。使用本網站及購買任何數碼產品即表示你同意以下條款。
        </p>

        <h2>數碼產品</h2>
        <p>
          本站銷售嘅所有數碼產品（包括但不限於教學指南、模板、工具包），一經下載即視為交付完成，不設退款。詳情請參閱我哋嘅退款政策。
        </p>

        <h2>產品「按現狀」提供</h2>
        <p>
          所有產品均以「按現狀」（as-is）基礎提供。我哋會盡力確保內容準確同最新，但不保證產品適用於所有環境或用途。用戶應自行評估產品是否符合自身需要。
        </p>

        <h2>API 費用</h2>
        <p>
          使用 OpenClaw 或相關 AI 服務可能涉及第三方 API 費用（例如 OpenAI、Anthropic 等）。呢啲費用由用戶自行承擔，與本站無關。我哋嘅教學內容會盡量提供費用預估，但實際費用取決於你嘅使用量。
        </p>

        <h2>免責聲明</h2>
        <p>
          本站提供嘅教學內容僅供參考。用戶因使用本站內容而產生嘅任何損失或損害，本站概不負責。
        </p>

        <h2>適用法律</h2>
        <p>
          本條款受香港特別行政區法律管轄，並按其法律解釋。任何爭議均受香港法院專屬管轄。
        </p>

        <p className="text-sm text-gray-500">最後更新：2025 年 3 月</p>
      </div>
    </div>
  );
}
