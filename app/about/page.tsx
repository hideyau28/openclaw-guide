import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `關於我們 | ${SITE_NAME}`,
  description: "了解 OpenClaw 繁中教學站嘅背景同使命。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">關於我們</h1>

      <div className="prose prose-gray max-w-none">
        <p>
          我哋係一班香港嘅 AI 技術愛好者，深信開源 AI Agent
          可以幫助每個人提升工作效率。但我哋同時發現，好多人因為缺乏繁體中文資源，
          喺安全設定同部署上遇到困難。
        </p>

        <h2>我哋嘅使命</h2>
        <p>
          {SITE_NAME}
          致力於提供最全面嘅繁體中文 OpenClaw
          教學資源，覆蓋由安全設定到生產部署嘅每一步。
          我哋所有教學內容都經過實際驗證，確保你可以安全咁使用 AI Agent。
        </p>

        <h2>點解選擇我哋</h2>
        <ul>
          <li>所有教學以安全為先，經過實戰驗證</li>
          <li>定期更新，緊跟 OpenClaw 最新版本</li>
          <li>提供專業部署服務，適合唔同規模嘅團隊</li>
          <li>由香港團隊用地道繁體中文撰寫</li>
        </ul>

        <h2>聯絡我哋</h2>
        <p>有任何問題或合作查詢，歡迎透過以下方式聯絡：</p>
        <ul>
          <li>
            WhatsApp：
            <a
              href="https://wa.me/85254323686"
              target="_blank"
              rel="noopener noreferrer"
            >
              +852 5432 3686
            </a>
          </li>
          <li>
            Email：
            <a href="mailto:yau@flowstudiohk.com">yau@flowstudiohk.com</a>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <Link
          href="/services/secure-setup"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          了解安全部署服務
        </Link>
      </div>
    </div>
  );
}
