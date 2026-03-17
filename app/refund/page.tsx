import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `退款政策 | ${SITE_NAME}`,
  description: "OpenClaw 繁中教學站數碼產品退款政策。",
};

export default function RefundPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">退款政策</h1>

      <div className="prose prose-gray max-w-none">
        <h2>數碼產品不設退款</h2>
        <p>
          由於數碼產品嘅特殊性質，所有產品一經下載即視為交付完成，原則上不設退款。請喺購買前仔細閱讀產品描述，確認產品符合你嘅需要。
        </p>

        <h2>例外情況</h2>
        <p>如果產品存在以下技術問題，你可以喺購買後 7 日內申請退款：</p>
        <ul>
          <li>檔案損壞或無法開啟</li>
          <li>產品內容與描述嚴重不符</li>
          <li>重複購買（同一產品購買咗兩次）</li>
        </ul>

        <h2>申請退款</h2>
        <p>
          如需申請退款，請喺購買後 7 日內發送電郵至{" "}
          <a href="mailto:yau@flowstudiohk.com">yau@flowstudiohk.com</a>
          ，並提供以下資料：
        </p>
        <ul>
          <li>你嘅訂單編號或購買憑證</li>
          <li>購買日期</li>
          <li>退款原因及相關截圖（如適用）</li>
        </ul>
        <p>我哋會喺 3 個工作天內回覆你嘅申請。</p>

        <p className="text-sm text-gray-500">最後更新：2025 年 3 月</p>
      </div>
    </div>
  );
}
