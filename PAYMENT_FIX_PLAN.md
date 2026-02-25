# 🔧 XHS Downloader 支付系統修復計劃

## ✅ 已確認的 Stripe 產品

| 產品名稱 | 定價 | 類型 | 創建日期 | 狀態 |
|---------|------|------|---------|------|
| Lifetime | $199.90 | 一次性 | 2月24日 | ✅ 已創建 |
| Pro 月付 | $29.99/月 | 循環訂閱 | 2月24日 | ✅ 已創建 |

---

## 🎯 下一步行動清單

### 1️⃣ 從 Stripe Dashboard 獲取 Price ID

**操作步驟：**
1. 登入 Stripe Dashboard → Products
2. 找到 "Lifetime" 產品
   - 點擊進去 → 找到 "Pricing" 部分
   - 複製 Price ID（格式：`price_xxxxx`）
3. 找到 "Pro 月付" 產品
   - 點擊進去 → 找到 "Pricing" 部分
   - 複製 Price ID（格式：`price_xxxxx`）

**需要提供給我的信息：**
```
Lifetime Price ID: price_xxxxx
Pro 月付 Price ID: price_xxxxx
```

### 2️⃣ 修復本地代碼

一旦你提供了 Price ID，我會：
- ✅ 更新 `lib/pricing-config.ts` 中的 `stripePriceId`
- ✅ 修復 `/api/checkout` 路由
- ✅ 創建缺失的 `app/payment/checkout` 頁面
- ✅ 確保貨幣統一為 USD

### 3️⃣ 部署和測試

- ✅ 提交代碼到 Git
- ✅ 推送到 GitHub（自動觸發 Vercel 部署）
- ✅ 測試支付流程

---

## 📋 當前問題總結

| 問題 | 狀態 | 優先級 |
|------|------|--------|
| Stripe Price ID 缺失 | 🔴 阻塞 | 🔴 高 |
| payment/ 目錄缺失 | 🔴 阻塞 | 🔴 高 |
| 定價配置不一致 | 🟡 部分 | 🟡 中 |
| Guide 頁面 404 | 🟡 部分 | 🟡 中 |

---

**等待你提供 Stripe Price ID...** 🎯
