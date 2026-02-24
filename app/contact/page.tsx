export const metadata = {
  title: "聯繫我們 | XHS Downloader",
  description: "聯繫 XHS Downloader 支持團隊 - 我們很樂意幫助您",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">聯繫我們</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">我們很樂意聽取您的意見</h2>
              <p>
                無論您有問題、建議還是反饋，我們都想聽取您的意見。請通過以下方式與我們聯繫。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">聯繫方式</h2>
              
              <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">📧 電子郵件</h3>
                <p className="text-lg">
                  <strong>support@xhsvideodownloader.com</strong>
                </p>
                <p className="text-gray-600 mt-2">
                  我們通常在 24 小時內回覆所有電子郵件。
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🐦 社交媒體</h3>
                <p className="text-gray-600">
                  在 Twitter 和 Discord 上關注我們以獲取最新更新和公告。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">常見問題</h2>
              <p>
                在聯繫我們之前，請查看我們的 <a href="/faq" className="text-pink-500 hover:text-pink-600 font-semibold">常見問題</a> 頁面，您可能會找到答案。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">報告問題</h2>
              <p>
                如果您遇到技術問題或發現錯誤，請提供以下信息：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>您使用的瀏覽器和版本</li>
                <li>您的操作系統</li>
                <li>問題的詳細描述</li>
                <li>您嘗試下載的視頻 URL（如果適用）</li>
                <li>錯誤消息（如果有）</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">功能請求</h2>
              <p>
                我們很樂意聽取您對新功能的建議。請告訴我們您想看到什麼功能，我們會考慮將其添加到未來的版本中。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">反饋和建議</h2>
              <p>
                您的反饋幫助我們改進 XHS Downloader。無論是正面還是負面的反饋，我們都很感謝。
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
