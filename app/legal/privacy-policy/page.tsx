'use client';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">隱私政策 / Privacy Policy</h1>
      <p className="text-gray-500 mb-8">最後更新：2026年2月21日</p>
      
      <div className="prose prose-gray max-w-none">
        <h2 className="text-xl font-semibold mt-8 mb-4">1. 我們收集什麼資訊？</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>XHS Downloader</strong> 設計時即考慮隱私保護原則：
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>✅ 我們<strong>不儲存</strong>你下載的影片內容</li>
          <li>✅ 影片僅暫時緩存在伺服器，下載完成後 5 分鐘內自動刪除</li>
          <li>✅ 我們<strong>不追蹤</strong>你的瀏覽歷史或個人資料</li>
          <li>⚠️ 我們<strong>僅記錄</strong>：下載次數（防濫用）、Stripe 付款資訊（授權用戶）</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. 我們如何使用你的資料？</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          收集的資讯僅用於：
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-600">
          <li>提供下載服務（處理你的下載請求）</li>
          <li>限制每日免費次數（防止服務器過載）</li>
          <li>處理付款與訂閱管理（Stripe 安全處理）</li>
          <li>技術支援（當你聯繫客服時）</li>
        </ol>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. 資料分享</h2>
        <p className="text-gray-600 leading-relaxed">
          我們<strong>絕不出售</strong>你的個人資料予第三方。僅在以下情況分享：
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
          <li>法律要求（收到法庭命令）</li>
          <li>服務供應商（Stripe 付款處理、Vercel 伺服器託管）</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Cookie 使用</h2>
        <p className="text-gray-600 leading-relaxed">
          我們使用最小化的 Cookie：僅用於語言設置儲存、登入狀態維持。沒有追蹤廣告。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. 你的權利</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          你有權：要求查閱資料、要求刪除帳戶、撤回同意。請郵件至：<a href="mailto:privacy@xhsvideodownloader.com" className="text-pink-600 hover:underline">privacy@xhsvideodownloader.com</a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. 資料安全</h2>
        <p className="text-gray-600 leading-relaxed">
          我們使用 HTTPS 加密傳輸、Stripe 符合 PCI DSS 標準。但網路無絕對安全，我們持續改進防護。
        </p>

        <div className="border-t pt-8 mt-12 text-gray-400 text-sm">
          <p>© 2026 XHS Downloader. 保留所有權利。</p>
        </div>
      </div>
    </div>
  );
}