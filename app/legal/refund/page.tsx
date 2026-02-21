'use client';

export default function RefundPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">退款政策 / Refund Policy</h1>
      <p className="text-gray-500 mb-8">生效日期：2026年2月21日</p>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
        <p className="text-green-800 font-medium">✅ 我們的承諾</p>
        <p className="text-green-700 mt-2">
          我們相信產品品質。30天內如對服務不滿意，可申請全額退款。
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <h2 className="text-xl font-semibold mt-8 mb-4">退款資格</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          你符合退款條件，如果：
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>購買後 <strong>30 天內</strong>申請</li>
          <li>服務出現技術問題且無法解決</li>
          <li>移除了 by mistake（僅限首次購買）</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">不符合退款的情況</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>購買超過 30 天</li>
          <li>濫用服務（如使用腳本大量下載）</li>
          <li>因違反服務條款被停權</li>
          <li>改變主意但已大量使用服務</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">退款流程</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-600">
          <li>發送郵件至 <a href="mailto:refund@xhsvideodownloader.com" className="text-pink-600 hover:underline">refund@xhsvideodownloader.com</a></li>
          <li>附上 Stripe 付款截圖或訂單號</li>
          <li>說明退款原因</li>
          <li>我們於 3-5 工作天內處理</li>
        </ol>

        <h2 className="text-xl font-semibold mt-8 mb-4">退款方式</h2>
        <p className="text-gray-600 leading-relaxed">
          款項退回到原付款方式（信用卡/銀行卡）。Stripe 處理需時 5-10 工作天顯示在你的帳單上。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">訂閱取消 vs 退款</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li><strong>取消訂閱：</strong>下個周期停止扣款，當期已付費仍可繼續使用</li>
          <li><strong>退款：</strong>退回已付款項，服務立即終止</li>
        </ul>

        <div className="bg-gray-100 rounded-lg p-4 mt-8">
          <p className="text-gray-700 text-sm">
            <strong>終身方案特別條款：</strong>終身方案購買後 30 天內可退款。由於是數碼產品，30 天後不支持退款，但享有終身使用權。
          </p>
        </div>

        <div className="border-t pt-8 mt-12 text-gray-400 text-sm">
          <p>© 2026 XHS Downloader. 保留所有權利。</p>
        </div>
      </div>
    </div>
  );
}