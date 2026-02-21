'use client';

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">服務條款 / Terms of Service</h1>
      <p className="text-gray-500 mb-8">生效日期：2026年2月21日</p>
      
      <div className="prose prose-gray max-w-none">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-yellow-800 font-medium">⚠️ 重要提示</p>
          <p className="text-yellow-700 text-sm mt-2">
            使用本服務即表示你同意以下條款。如不同意，請勿使用 XHS Downloader。
          </p>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">1. 服務說明</h2>
        <p className="text-gray-600 leading-relaxed">
          XHS Downloader 提供小紅書（Xiaohongshu）公開影片的下載功能。我們<strong>不鼓勵</strong>下載受版權保護的內容。用戶應自行確認有權下載目標內容。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. 用戶責任</h2>
        <p className="text-gray-600 leading-relaxed mb-4">你同意：</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>僅下載你有權使用或獲得授權的內容</li>
          <li>不下載違法、誹謗、色情或侵犯知識產權的內容</li>
          <li>不濫用服務（如自動化腳本大量下載）</li>
          <li>不逆向工程、破解或干擾本網站運作</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. 帳戶與付款</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>免費帳戶：每日 3 次下載限額</li>
          <li>付費訂閱：無限下載，按月或終身計費</li>
          <li>付款通過 Stripe 安全處理，我們不儲存你的信用卡資訊</li>
          <li>訂閱可隨時取消，已付費週期不設退款</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. 服務變更與終止</h2>
        <p className="text-gray-600 leading-relaxed">
          我們保留隨時修改或終止服務的權利。重大變更會提前通知。如你違反條款，我們有權暫停或終止你的帳戶，不設退款。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. 免責聲明</h2>
        <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded">
          本服務按「現狀」提供，不提供任何明示或暗示擔保。我們不保證服務永不中斷、無錯誤，或下載內容符合你的期望。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">6. 責任限制</h2>
        <p className="text-gray-600 leading-relaxed">
          在法律允許範圍內，我們對任何間接、附帶、特殊或後果性損害不承擔責任，無論是否已被告知可能發生此類損害。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">7. 準據法與管轄</h2>
        <p className="text-gray-600 leading-relaxed">
          本條款受香港特別行政區法律管轄。任何爭議提交香港法院解決。
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">8. 聯繫我們</h2>
        <p className="text-gray-600 leading-relaxed">
          如有問題，請電郵：<a href="mailto:legal@xhsvideodownloader.com" className="text-pink-600 hover:underline">legal@xhsvideodownloader.com</a>
        </p>

        <div className="border-t pt-8 mt-12 text-gray-400 text-sm">
          <p>© 2026 XHS Downloader. 保留所有權利。</p>
        </div>
      </div>
    </div>
  );
}