import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "小红书视频下载器 - 免费下载无水印视频 | XHS Downloader",
  description: "免费在线下载小红书视频，无水印高清画质。支持所有小红书视频链接，一键下载到本地。Free Xiaohongshu video downloader.",
  keywords: "小红书下载,小红书视频下载,XHS下载器,小红书无水印,xiaohongshu downloader,红书视频保存,小红书视频提取,xiaohongshu video downloader",
  authors: [{ name: "XHS Downloader" }],
  creator: "XHS Downloader",
  publisher: "XHS Downloader",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  
  // 地理位置和多语言支持
  alternates: {
    languages: {
      "zh-CN": "https://xhsvideodownloader.com/",
      "zh-TW": "https://xhsvideodownloader.com/",
      "en": "https://xhsvideodownloader.com/",
      "x-default": "https://xhsvideodownloader.com/",
    },
    canonical: "https://xhsvideodownloader.com/",
  },

  openGraph: {
    title: "小红书视频下载器 - 免费下载无水印视频",
    description: "免费在线下载小红书视频，无水印高清画质。支持所有小红书视频链接，一键下载到本地。",
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["zh_TW", "en_US"],
    url: "https://xhsvideodownloader.com/",
    siteName: "XHS Downloader",
    images: [
      {
        url: "https://xhsvideodownloader.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "XHS Downloader - 小红书视频下载器",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "小红书视频下载器 - 免费下载无水印视频",
    description: "免费在线下载小红书视频，无水印高清画质。",
    images: ["https://xhsvideodownloader.com/og-image.png"],
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD 結構化數據
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "XHS Downloader",
    "description": "免费在线下载小红书视频，无水印高清画质",
    "url": "https://xhsvideodownloader.com",
    "applicationCategory": "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1000"
    },
    "author": {
      "@type": "Organization",
      "name": "XHS Downloader",
      "url": "https://xhsvideodownloader.com"
    },
    "inLanguage": ["zh-CN", "zh-TW", "en"],
    "areaServed": ["CN", "TW", "HK", "SG", "US", "GB", "AU", "CA"],
  };

  return (
    <html lang="zh-CN">
      <head>
        {/* 地理位置和語言元標籤 */}
        <meta name="geo.placename" content="Global" />
        <meta name="geo.region" content="CN" />
        <meta name="ICBM" content="39.9042,116.4074" />
        
        {/* 地理位置特定的 hreflang 標籤 */}
        <link rel="alternate" hrefLang="zh-CN" href="https://xhsvideodownloader.com/" />
        <link rel="alternate" hrefLang="zh-TW" href="https://xhsvideodownloader.com/" />
        <link rel="alternate" hrefLang="en" href="https://xhsvideodownloader.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://xhsvideodownloader.com/" />

        {/* Sitemap 和 Robots */}
        <link rel="sitemap" href="https://xhsvideodownloader.com/sitemap.xml" />

        {/* Google AdSense Account */}
        <meta name="google-adsense-account" content="ca-pub-7935038704820292" />
        {/* Google AdSense Script */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7935038704820292" crossOrigin="anonymous" />

        {/* JSON-LD 結構化數據 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* 搜索引擎驗證 */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
