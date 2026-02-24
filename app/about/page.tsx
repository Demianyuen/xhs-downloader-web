export const metadata = {
  title: "關於我們 | XHS Downloader",
  description: "了解 XHS Downloader - 一個免費的小紅書視頻下載工具",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">關於 XHS Downloader</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">我們的使命</h2>
              <p>
                XHS Downloader 致力於為全球用戶提供一個簡單、快速、安全的方式來下載和存檔小紅書上的視頻內容。我們相信信息應該易於訪問和保存，特別是對於個人學習和研究目的。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">為什麼選擇我們？</h2>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>
                  <strong>100% 免費：</strong>沒有隱藏費用，沒有高級計劃。完全免費使用。
                </li>
                <li>
                  <strong>無需註冊：</strong>立即開始使用，無需創建帳戶或提供個人信息。
                </li>
                <li>
                  <strong>超快速度：</strong>我們的優化服務器確保您在幾秒內下載視頻。
                </li>
                <li>
                  <strong>100% 安全：</strong>我們不收集個人數據，不安裝任何軟件，完全尊重您的隱私。
                </li>
                <li>
                  <strong>多設備支持：</strong>在桌面、平板或手機上無縫工作。
                </li>
                <li>
                  <strong>多種質量選項：</strong>選擇您喜歡的分辨率（1080p、720p、480p、360p）。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">我們的技術</h2>
              <p>
                XHS Downloader 使用最新的 Web 技術構建，包括 Next.js、React 和 TypeScript。我們的基礎設施部署在全球最可靠的雲平台上，確保高可用性和快速性能。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">隱私和安全</h2>
              <p>
                您的隱私是我們的首要優先事項。我們不收集、存儲或共享任何個人信息。所有通信都通過安全的 HTTPS 連接進行。我們遵守國際隱私標準和法規。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">合法使用</h2>
              <p>
                XHS Downloader 旨在用於個人學習、研究和存檔目的。我們尊重內容創作者的版權。用戶有責任確保他們對下載內容的使用符合適用的法律和小紅書的服務條款。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">持續改進</h2>
              <p>
                我們不斷改進和更新 XHS Downloader，以提供最佳的用戶體驗。我們歡迎您的反饋和建議。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">聯繫我們</h2>
              <p>
                有任何問題或建議？我們很樂意聽取您的意見。
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
