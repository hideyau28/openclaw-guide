const products = [
  {
    title: "OpenClaw 安全設定 Checklist PDF",
    description: "10 項必查安全設定，離線都可以跟住做。",
    price: "HK$39",
    cta: "下載 PDF",
    href: "#",
  },
  {
    title: "soul.md 模板包 — 5 個場景",
    description:
      "包含：個人助手、客服、開發者、研究員、內容創作者 5 套 soul.md 模板。",
    price: "HK$79",
    cta: "購買模板",
    href: "#",
  },
  {
    title: "一人公司 OpenClaw 工作流套件",
    description: "5 個完整 workflow config + 設定教學，即插即用。",
    price: "HK$149",
    cta: "購買套件",
    href: "#",
  },
];

export function DigitalProducts() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-center text-2xl font-bold">📦 實用資源</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.title}
            className="flex flex-col rounded-lg border border-gray-200 p-6"
          >
            <h3 className="mb-2 font-semibold leading-snug">{p.title}</h3>
            <p className="mb-4 flex-1 text-sm text-gray-600">{p.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">{p.price}</span>
              <a
                href={p.href}
                className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
              >
                {p.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
