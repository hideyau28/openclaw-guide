import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `安全部署服務 | ${SITE_NAME}`,
  description: "專人幫你由零設定 OpenClaw 到安全上線，三種方案任你揀。",
};

const tiers = [
  {
    name: "基礎方案",
    price: "HK$99",
    description: "基本安全檢查 + 設定指引",
    features: ["安全設定檢查清單", "基本環境變數配置", "Email 支援（7 日）"],
  },
  {
    name: "專業方案",
    price: "HK$399",
    description: "完整安全部署 + 30 日支援",
    features: [
      "完整安全審計",
      "Docker 容器化部署",
      "MCP Server 配置",
      "30 日 Email + Chat 支援",
      "一次免費版本升級",
    ],
    highlighted: true,
  },
  {
    name: "企業方案",
    price: "HK$799",
    description: "企業級部署 + 持續監控 + 優先支援",
    features: [
      "所有專業方案功能",
      "高可用架構設計",
      "持續安全監控",
      "優先 Slack/Teams 支援",
      "季度安全審計",
      "自定義 MCP 插件開發",
    ],
  },
];

export default function SecureSetupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema()),
        }}
      />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">安全部署服務</h1>
          <p className="mx-auto max-w-xl text-lg text-gray-600">
            唔想自己搞？我哋幫你由零設定 OpenClaw 到安全上線。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-lg border p-6 ${
                tier.highlighted
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-200"
              }`}
            >
              {tier.highlighted && (
                <span className="mb-3 inline-block self-start rounded-full bg-blue-100 px-3 py-0.5 text-xs font-medium text-blue-700">
                  最受歡迎
                </span>
              )}
              <h2 className="mb-1 text-xl font-bold">{tier.name}</h2>
              <p className="mb-4 text-sm text-gray-600">{tier.description}</p>
              <p className="mb-6 text-3xl font-bold">{tier.price}</p>
              <ul className="mb-8 flex-1 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/85254323686?text=你好，我想了解 OpenClaw 安全部署服務"
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-lg py-2.5 text-center text-sm font-medium ${
                  tier.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-gray-300 hover:bg-gray-50"
                }`}
              >
                WhatsApp 聯絡
              </a>
            </div>
          ))}
        </div>

        {/* Consultation */}
        <section id="consultation" className="mt-16 text-center">
          <h2 className="mb-4 text-2xl font-bold">預約免費諮詢</h2>
          <p className="mb-6 text-gray-600">
            唔確定邊個方案適合你？預約 15 分鐘免費諮詢，我哋幫你分析。
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/85254323686?text=你好，我想了解 OpenClaw 安全部署服務"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
            >
              WhatsApp 聯絡
            </a>
            <a
              href="mailto:yau@flowstudiohk.com?subject=OpenClaw 安全部署服務查詢"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
            >
              Email 預約
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
