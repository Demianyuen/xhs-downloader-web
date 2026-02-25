"use client";

import { useState, useEffect, FormEvent } from "react";
import { I18nProvider, useI18n, LanguageSwitcher } from "./lib/i18n";
import { getUsageStatus, recordDownload, getMaxDailyDownloads, UsageStatus } from "@/lib/usage-limiter";
import { Sparkles, Zap, Shield, Download, Loader2, Check } from "lucide-react";

function HomeContent() {
  const { t } = useI18n();
  const [url, setUrl] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [usage, setUsage] = useState<UsageStatus | null>(null);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    setUsage(getUsageStatus());
  }, []);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => {
        setCooldown((prev) => prev - 1);
        if (cooldown === 1) setUsage(getUsageStatus());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  // 自動從小紅書分享文字中提取 URL
const extractXHUrl = (input: string): string => {
  // 匹配小紅書網址格式
  const xhsRegex = /https?:\/\/[^\s]*xiaohongshu\.com\/(?:explore|discovery\/item)\/[a-zA-Z0-9]+/;
  const match = input.match(xhsRegex);
  return match ? match[0] : input.trim();
};

// 處理輸入變化，自動清理
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const rawInput = e.target.value;
  // 如果包含多行或中文，提取 URL
  if (rawInput.includes('\n') || rawInput.includes(' ')) {
    const extracted = extractXHUrl(rawInput);
    setUrl(extracted);
  } else {
    setUrl(rawInput);
  }
};

const handleDownload = async (e: FormEvent) => {
    e.preventDefault();
    // 最後一次清理確保
    const cleanUrl = extractXHUrl(url);
    if (!cleanUrl) { alert(t.error.emptyUrl); return; }
    
    const currentUsage = getUsageStatus();
    if (!currentUsage.canDownload) {
      alert(currentUsage.isLimitReached ? t.error.limitReached : t.error.waitCooldown.replace('$0', String(currentUsage.cooldownRemaining)));
      return;
    }
    
    // 更新 URL 為清理後的版本
    setUrl(cleanUrl);
    if (!currentUsage.canDownload) {
      alert(currentUsage.isLimitReached ? t.error.limitReached : t.error.waitCooldown.replace('$0', String(currentUsage.cooldownRemaining)));
      return;
    }
    setIsDownloading(true);
    try {
      const response = await fetch('/api/download', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url }) });
      const data = await response.json();
      if (data.success && data.token) {
        recordDownload();
        setUsage(getUsageStatus());
        setCooldown(15);
        const downloadUrl = `/api/download/${data.token}`;
        const filename = `${data.metadata?.title || 'video'}.mp4`;
        const downloadResponse = await fetch(downloadUrl);
        if (!downloadResponse.ok) throw new Error('Download failed');
        const blob = await downloadResponse.blob();
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
        setUrl("");
      } else {
        alert(t.error.downloadFailed + ': ' + (data.error || t.error.unknown));
      }
    } catch (error) {
      console.error('Download error:', error);
      alert(t.error.downloadFailed + ' - ' + t.error.retry);
    } finally {
      setIsDownloading(false);
    }
  };

  const canDownload = usage?.canDownload && !isDownloading && cooldown === 0;

  return (
    <>
      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-4 pt-8 sm:pt-12 pb-16">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>2025 最新版</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 px-2"> {t.title} </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto px-2"> {t.subtitle} </p>
        </div>

        {/* Download Box */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 border border-pink-100 mb-10">
          {usage && (
            <div className="flex items-center justify-center gap-1 sm:gap-2 mb-4 text-xs sm:text-sm text-gray-500 bg-gray-50 rounded-full py-2 px-3">
              <span>{t.dailyLimit}:</span>
              <span className="font-bold text-pink-600 text-base sm:text-lg">{usage.downloadsRemaining}</span>
              <span className="text-gray-400">/ {getMaxDailyDownloads()}</span>
            </div>
          )}

          <form onSubmit={handleDownload} className="space-y-3">
            <input
              type="text"
              value={url}
              onChange={handleInputChange}
              placeholder="粘貼小紅書連結（自動提取）..."
              disabled={isDownloading || cooldown > 0}
              className="w-full px-4 py-4 text-base sm:text-lg border-2 border-gray-200 rounded-xl focus:border-pink-500 transition outline-none disabled:bg-gray-50"
            />

            {cooldown > 0 && (
              <div className="bg-pink-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-pink-600 mb-1"> {cooldown} </div>
                <p className="text-sm text-gray-600">{t.cooldown}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={!canDownload}
              className={`w-full py-4 px-6 rounded-xl font-bold text-base transition min-h-[52px] ${
                canDownload ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white' : 'bg-gray-200 text-gray-400'
              }`}
            >
              {isDownloading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" /> {t.downloading}
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" /> {t.downloadBtn}
                </span>
              )}
            </button>
          </form>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 text-[10px] sm:text-xs text-gray-400">
            <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-green-500" /> SSL 加密</span>
            <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-yellow-500" /> 無限免費</span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {[ 
            { icon: Sparkles, title: t.features.free.title, desc: t.features.free.desc },
            { icon: Zap, title: t.features.fast.title, desc: t.features.fast.desc },
            { icon: Shield, title: t.features.safe.title, desc: t.features.safe.desc },
          ].map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
              <f.icon className="w-6 h-6 text-pink-500 mx-auto mb-2" />
              <h3 className="font-bold text-gray-800 mb-1 text-sm">{f.title}</h3>
              <p className="text-xs text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <HomeContent />
    </I18nProvider>
  );
}
