// SEO 優化配置 - 用於 layout.tsx 的 metadata 部分

import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  const baseUrl = "https://xhsvideodownloader.com";
  
  return {
    // 基礎 SEO
    title: "小红书视频下载器 - 免费下载无水印视频 | XHS Downloader",
    description: "免费在线下载小红书视频，无水印高清画质。支持所有小红书视频链接，一键下载到本地。Free Xiaohongshu video downloader.",
    keywords: "小红书下载,小红书视频下载,XHS下载器,小红书无水印,xiaohongshu downloader,红书视频保存,小红书视频提取",
    
    // 地理位置和语言
    alternates: {
      languages: {
        "zh-CN": `${baseUrl}/`,
        "zh-TW": `${baseUrl}/`,
        "en": `${baseUrl}/`,
      },
      canonical: baseUrl,
    },

    // Open Graph - 社交媒体分享
    openGraph: {
      title: "小红书视频下载器 - 免费下载无水印视频",
      description: "免费在线下载小红书视频，无水印高清画质。支持所有小红书视频链接，一键下载到本地。",
      type: "website",
      locale: "zh_CN",
      alternateLocale: ["zh_TW", "en_US"],
      url: baseUrl,
      siteName: "XHS Downloader",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "XHS Downloader - 小红书视频下载器",
          type: "image/png",
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: "小红书视频下载器 - 免费下载无水印视频",
      description: "免费在线下载小红书视频，无水印高清画质。",
      images: [`${baseUrl}/og-image.png`],
    },

    // 其他 SEO 标签
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    authors: [{ name: "XHS Downloader" }],
    creator: "XHS Downloader",
    publisher: "XHS Downloader",
    
    // 地理位置信息
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: "XHS Downloader",
    },

    // 验证标签
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      me: ["your-email@example.com"],
    },

    // 其他元标签
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },

    // 视口设置
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
    },

    // 颜色方案
    colorScheme: "light dark",
  };
};

// 结构化数据 (Schema.org JSON-LD)
export const structuredData = {
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
  "areaServed": ["CN", "TW", "HK", "SG", "US", "GB"],
};
