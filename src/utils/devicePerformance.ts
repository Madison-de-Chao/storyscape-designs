/**
 * 裝置性能檢測工具
 * 用於在低性能設備上降級動畫效果，避免閃爍
 */

let cachedIsLowPerformance: boolean | null = null;

/**
 * 檢測是否為低性能設備
 * - Android 手機
 * - 觸控設備
 * - 偏好減少動畫的用戶
 */
export const isLowPerformanceDevice = (): boolean => {
  if (cachedIsLowPerformance !== null) {
    return cachedIsLowPerformance;
  }

  if (typeof window === 'undefined') {
    return false;
  }

  const ua = navigator.userAgent.toLowerCase();
  
  // Android 設備
  const isAndroid = ua.includes('android');
  
  // 移動設備
  const isMobile = /mobile|tablet|ip(ad|hone|od)|android/i.test(ua);
  
  // 檢測是否偏好減少動畫
  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  
  // 低端設備檢測：內存 < 4GB 或 CPU 核心數 < 4
  const hasLowMemory = (navigator as { deviceMemory?: number }).deviceMemory !== undefined && 
                       (navigator as { deviceMemory?: number }).deviceMemory! < 4;
  const hasLowCores = navigator.hardwareConcurrency !== undefined && 
                      navigator.hardwareConcurrency < 4;

  cachedIsLowPerformance = isAndroid || prefersReducedMotion || hasLowMemory || (isMobile && hasLowCores);
  
  return cachedIsLowPerformance;
};

/**
 * 獲取適合設備的動畫時長乘數
 * 低性能設備使用更短的動畫
 */
export const getAnimationDurationMultiplier = (): number => {
  return isLowPerformanceDevice() ? 0.5 : 1;
};

/**
 * 獲取適合設備的粒子數量乘數
 */
export const getParticleCountMultiplier = (): number => {
  return isLowPerformanceDevice() ? 0.3 : 1;
};

/**
 * 檢測是否應該禁用複雜動畫
 */
export const shouldDisableComplexAnimations = (): boolean => {
  return isLowPerformanceDevice();
};
