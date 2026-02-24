export const metadata = {
  title: "使用指南 | XHS Downloader",
  description: "XHS Downloader 完整使用指南 - 學習如何下載小紅書視頻",
};

export default function Guide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">XHS Downloader 完整使用指南</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">什麼是 XHS Downloader？</h2>
              <p>
                XHS Downloader 是一個免費的在線工具，專門設計用於從小紅書（Xiaohongshu）平台下載視頻內容。無論您是想保存喜歡的創意視頻、教程還是其他內容，XHS Downloader 都能幫助您輕鬆完成。我們的工具完全免費、無需註冊，並且尊重您的隱私。
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">為什麼使用 XHS Downloader？</h2>
              <div className="space-y-4">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">✨ 完全免費</h3>
                  <p>沒有隱藏費用，沒有高級計劃。永遠免費使用。</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">⚡ 超快速度</h3>
                  <p>我們的優化服務器確保您在幾秒內下載視頻。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">🔒 100% 安全</h3>
                  <p>無需安裝軟件，無需註冊，無需提供個人信息。</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">📱 多設備支持</h3>
                  <p>在桌面、平板或手機上無縫工作。</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">分步使用指南</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">第 1 步：找到視頻</h3>
                  <p>
                    打開小紅書應用或網站，找到您想下載的視頻。這可以是任何類型的內容 - 教程、美妝、旅遊、烹飪等。
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">第 2 步：複製視頻鏈接</h3>
                  <p>
                    點擊視頻上的「分享」按鈕，選擇「複製鏈接」。鏈接通常看起來像：
                  </p>
                  <code className="bg-gray-100 p-2 rounded block mt-2 text-sm">
                    https://www.xiaohongshu.com/explore/...
                  </code>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">第 3 步：粘貼鏈接</h3>
                  <p>
                    回到 XHS Downloader，將複製的鏈接粘貼到輸入框中。我們的工具會自動識別並驗證鏈接。
                  </p>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">第 4 步：選擇質量</h3>
                  <p>
                    選擇您喜歡的視頻質量。我們支持多種分辨率：
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>1080p - 最高質量</li>
                    <li>720p - 高質量</li>
                    <li>480p - 中等質量</li>
                    <li>360p - 低質量（最小文件大小）</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">第 5 步：下載</h3>
                  <p>
                    點擊「下載視頻」按鈕。視頻將立即開始下載到您的設備。下載時間取決於視頻大小和您的網絡速度。
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">第 6 步：享受</h3>
                  <p>
                    下載完成後，您可以在任何時間、任何地點觀看視頻，無需網絡連接。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">高級功能</h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-pink-50 to-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">📝 獲取字幕</h3>
                  <p>
                    如果視頻包含字幕，我們可以為您提取字幕文件。這對於學習語言或創建內容非常有用。
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">📊 視頻分析</h3>
                  <p>
                    使用我們的分析工具查看視頻的詳細信息，包括觀看次數、點讚數、評論數等。
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">⚙️ 批量下載</h3>
                  <p>
                    一次下載多個視頻。只需提供多個鏈接，我們會為您處理其餘的工作。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">常見問題解答</h2>
              
              <div className="space-y-4">
                <details className="group border border-gray-200 rounded-lg p-4 hover:border-pink-300 transition">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                    下載失敗怎麼辦？
                    <span className="text-gray-600 group-open:rotate-180 transition">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    如果下載失敗，請嘗試以下步驟：1) 檢查您的網絡連接；2) 確保鏈接正確；3) 清除瀏覽器緩存；4) 嘗試不同的視頻質量；5) 使用不同的瀏覽器。如果問題仍然存在，請聯繫我們的支持團隊。
                  </p>
                </details>

                <details className="group border border-gray-200 rounded-lg p-4 hover:border-pink-300 transition">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                    下載的視頻有水印嗎？
                    <span className="text-gray-600 group-open:rotate-180 transition">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    下載的視頻將保留原始視頻的所有內容，包括原始的水印或標記。我們不修改或移除任何內容。
                  </p>
                </details>

                <details className="group border border-gray-200 rounded-lg p-4 hover:border-pink-300 transition">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                    我可以下載多少個視頻？
                    <span className="text-gray-600 group-open:rotate-180 transition">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    免費用戶每天可以下載最多 10 個視頻。高級用戶可以下載無限數量的視頻。
                  </p>
                </details>

                <details className="group border border-gray-200 rounded-lg p-4 hover:border-pink-300 transition">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                    下載的視頻會被保存多久？
                    <span className="text-gray-600 group-open:rotate-180 transition">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    下載的視頻直接保存到您的設備。我們不在我們的服務器上存儲任何視頻。
                  </p>
                </details>

                <details className="group border border-gray-200 rounded-lg p-4 hover:border-pink-300 transition">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                    這是合法的嗎？
                    <span className="text-gray-600 group-open:rotate-180 transition">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-3">
                    XHS Downloader 是一個合法的工具，用於個人學習和存檔目的。用戶有責任確保他們對下載內容的使用符合適用的法律和小紅書的服務條款。
                  </p>
                </details>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">提示和技巧</h2>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>
                  <strong>使用最高質量：</strong>如果您有足夠的存儲空間和網絡速度，選擇 1080p 以獲得最佳視覺效果。
                </li>
                <li>
                  <strong>批量下載：</strong>如果您想下載多個視頻，使用我們的批量下載功能可以節省時間。
                </li>
                <li>
                  <strong>檢查文件大小：</strong>在下載前檢查視頻的文件大小，確保您有足夠的存儲空間。
                </li>
                <li>
                  <strong>使用穩定的網絡：</strong>使用 WiFi 連接以獲得最快的下載速度。
                </li>
                <li>
                  <strong>尊重版權：</strong>只下載您有權下載的內容，並尊重創作者的版權。
                </li>
              </ul>
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
