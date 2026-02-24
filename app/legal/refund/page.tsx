export const metadata = {
  title: "退款政策 | XHS Downloader",
  description: "XHS Downloader 退款政策 - 了解我們的退款流程",
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">退款政策</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">30 天退款保證</h2>
              <p>
                我們對我們的服務充滿信心。如果您在購買後 30 天內對我們的高級服務不滿意，我們將全額退款，無需提出任何問題。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">退款流程</h2>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>
                  <strong>聯繫我們：</strong>發送電子郵件至 support@xhsvideodownloader.com，說明您要求退款。
                </li>
                <li>
                  <strong>提供詳情：</strong>包括您的訂單 ID 和退款原因。
                </li>
                <li>
                  <strong>確認：</strong>我們將驗證您的請求並確認退款。
                </li>
                <li>
                  <strong>處理：</strong>退款將在 5-10 個工作日內處理到您的原始支付方式。
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">退款條件</h2>
              <p>
                以下情況下可能無法獲得退款：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>購買後超過 30 天</li>
                <li>已使用大量服務配額</li>
                <li>違反我們的服務條款</li>
                <li>重複退款請求</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">訂閱取消</h2>
              <p>
                您可以隨時取消訂閱。取消後，您將無法訪問高級功能，但不會被收取進一步的費用。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">技術問題</h2>
              <p>
                如果您因技術問題無法使用服務，請立即聯繫我們。我們將努力解決問題或提供退款。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">聯繫支持</h2>
              <p>
                有任何關於退款的問題？請聯繫我們的支持團隊：
              </p>
              <p className="mt-4">
                <strong>電子郵件：</strong> support@xhsvideodownloader.com
              </p>
            </section>

            <section className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                最後更新：2026 年 2 月 24 日
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
