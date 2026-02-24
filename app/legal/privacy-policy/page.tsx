export const metadata = {
  title: "隱私權政策 | XHS Downloader",
  description: "XHS Downloader 隱私權政策 - 了解我們如何保護您的隱私",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">隱私權政策</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 簡介</h2>
              <p>
                XHS Downloader（以下簡稱「本服務」）致力於保護您的隱私。本隱私權政策說明我們如何收集、使用和保護您的個人信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 我們收集的信息</h2>
              <p>
                <strong>我們不收集個人信息。</strong>本服務是完全匿名的，我們不要求您提供任何個人數據，包括：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>姓名或電子郵件地址</li>
                <li>電話號碼或地址</li>
                <li>支付信息（除非您選擇購買高級功能）</li>
                <li>位置數據或設備標識符</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 自動收集的信息</h2>
              <p>
                當您使用本服務時，我們可能會自動收集以下信息：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>日誌數據：</strong>IP 地址、瀏覽器類型、訪問時間</li>
                <li><strong>Cookie：</strong>用於改進用戶體驗和分析</li>
                <li><strong>分析數據：</strong>通過 Google Analytics 收集的匿名使用統計</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 信息的使用</h2>
              <p>我們收集的信息僅用於以下目的：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>改進服務質量和用戶體驗</li>
                <li>分析使用趨勢和統計</li>
                <li>檢測和防止欺詐或濫用</li>
                <li>遵守法律義務</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 第三方服務</h2>
              <p>
                本服務使用以下第三方服務，這些服務可能收集您的信息：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics：</strong>用於網站分析</li>
                <li><strong>Google AdSense：</strong>用於廣告投放</li>
                <li><strong>Stripe：</strong>用於支付處理（如適用）</li>
              </ul>
              <p className="mt-4">
                請查閱這些服務的隱私政策以了解他們如何處理您的數據。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 數據安全</h2>
              <p>
                我們採取適當的技術和組織措施來保護您的信息免受未經授權的訪問、更改或銷毀。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookie 政策</h2>
              <p>
                本服務使用 Cookie 來增強用戶體驗。您可以通過瀏覽器設置控制 Cookie 的使用。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 兒童隱私</h2>
              <p>
                本服務不針對 13 歲以下的兒童。我們不會故意收集 13 歲以下兒童的個人信息。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. 政策變更</h2>
              <p>
                我們可能會不時更新本隱私權政策。任何重大變更將通過在本頁面上發布新版本來通知您。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. 聯繫我們</h2>
              <p>
                如果您對本隱私權政策有任何疑問，請通過以下方式聯繫我們：
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
