// Usage limiter - tracks downloads per day and cooldown
// Storage: localStorage (browser-based, no backend needed)

const STORAGE_KEYS = {
  DAILY_COUNT: 'xhs_daily_downloads',
  LAST_DATE: 'xhs_last_download_date',
  LAST_TIME: 'xhs_last_download_time',
};

const LIMITS = {
  MAX_DAILY_DOWNLOADS: 5,
  COOLDOWN_SECONDS: 15,
};

export interface UsageStatus {
  downloadsRemaining: number;
  cooldownRemaining: number; // seconds
  canDownload: boolean;
  isLimitReached: boolean;
}

function getTodayDate(): string {
  return new Date().toISOString().split('T')[0];
}

function getStorageItem(key: string): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(key);
}

function setStorageItem(key: string, value: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, value);
}

export function getUsageStatus(): UsageStatus {
  const today = getTodayDate();
  const lastDate = getStorageItem(STORAGE_KEYS.LAST_DATE);

  // Reset counter if new day
  let dailyCount = 0;
  if (lastDate === today) {
    dailyCount = parseInt(getStorageItem(STORAGE_KEYS.DAILY_COUNT) || '0', 10);
  }

  // Calculate cooldown
  const lastTime = parseInt(getStorageItem(STORAGE_KEYS.LAST_TIME) || '0', 10);
  const now = Date.now();
  const elapsedSeconds = Math.floor((now - lastTime) / 1000);
  const cooldownRemaining = Math.max(0, LIMITS.COOLDOWN_SECONDS - elapsedSeconds);

  const downloadsRemaining = Math.max(0, LIMITS.MAX_DAILY_DOWNLOADS - dailyCount);
  const isLimitReached = downloadsRemaining === 0;
  const canDownload = downloadsRemaining > 0 && cooldownRemaining === 0;

  return {
    downloadsRemaining,
    cooldownRemaining,
    canDownload,
    isLimitReached,
  };
}

export function recordDownload(): void {
  const today = getTodayDate();
  const lastDate = getStorageItem(STORAGE_KEYS.LAST_DATE);

  // Reset or increment counter
  let dailyCount = 0;
  if (lastDate === today) {
    dailyCount = parseInt(getStorageItem(STORAGE_KEYS.DAILY_COUNT) || '0', 10);
  }

  dailyCount += 1;

  setStorageItem(STORAGE_KEYS.DAILY_COUNT, dailyCount.toString());
  setStorageItem(STORAGE_KEYS.LAST_DATE, today);
  setStorageItem(STORAGE_KEYS.LAST_TIME, Date.now().toString());
}

export function getMaxDailyDownloads(): number {
  return LIMITS.MAX_DAILY_DOWNLOADS;
}

export function getCooldownSeconds(): number {
  return LIMITS.COOLDOWN_SECONDS;
}
