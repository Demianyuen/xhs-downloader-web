export const metadata = {
  title: "服務條款 | XHS Downloader",
  description: "XHS Downloader 服務條款 - 使用本服務前請閱讀",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">服務條款</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 接受條款</h2>
              <p>
                通過訪問和使用 XHS Downloader（以下簡稱「本服務」），您同意受本服務條款的約束。如果您不同意這些條款，請不要使用本服務。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 服務描述</h2>
              <p>
                XHS Downloader 是一個在線工具，允許用戶從小紅書（Xiaohongshu）平台下載視頻內容。本服務僅供個人、非商業用途使用。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 使用限制</h2>
              <p>您同意不會：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>使用本服務進行任何非法活動</li>
                <li>侵犯他人的知識產權或版權</li>
                <li>上傳或傳播惡意軟件或有害代碼</li>
                <li>嘗試破壞或干擾本服務的正常運行</li>
                <li>進行任何形式的騷擾或濫用</li>
                <li>將下載的內容用於商業目的</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 版權和知識產權</h2>
              <p>
                本服務允許您下載視頻內容僅供個人學習和存檔之用。您必須尊重原始內容創作者的版權。我們不對您使用下載內容而產生的任何版權侵犯行為負責。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 免責聲明</h2>
              <p>
                本服務按「現狀」提供，不提供任何明示或暗示的保證。我們不保證：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>服務將不間斷或無錯誤</li>
                <li>下載功能始終可用</li>
                <li>下載的內容質量或完整性</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 責任限制</h2>
              <p>
                在任何情況下，XHS Downloader 及其所有者、員工或代理人均不對任何直接、間接、附帶、特殊或後果性損害負責，包括但不限於數據丟失、業務中斷或利潤損失。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 第三方內容</h2>
              <p>
                本服務允許您訪問第三方內容（如小紅書上的視頻）。我們不對第三方內容的準確性、合法性或適當性負責。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 服務修改</h2>
              <p>
                我們保留隨時修改或終止本服務的權利，恕不另行通知。我們不對因服務修改或終止而造成的任何損失負責。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. 用戶行為</h2>
              <p>
                您對您通過本服務進行的所有活動負全部責任。您同意不會使用本服務進行任何可能違反適用法律或侵犯他人權利的活動。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. 終止</h2>
              <p>
                我們可以隨時以任何理由終止您對本服務的訪問，恕不另行通知。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. 準據法</h2>
              <p>
                本服務條款受適用法律管轄。任何爭議應通過友好協商解決。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. 聯繫我們</h2>
              <p>
                如果您對本服務條款有任何疑問，請聯繫我們：
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
