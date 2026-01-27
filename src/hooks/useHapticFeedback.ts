/**
 * 觸覺回饋 Hook
 * 在支援的裝置上提供振動反饋，提升互動體驗
 */

import { useCallback } from 'react';

// 觸覺回饋類型
export type HapticType = 
  | 'light'       // 輕微振動（hover, 小操作）
  | 'medium'      // 中等振動（選擇選項）
  | 'heavy'       // 較重振動（重要決策）
  | 'success'     // 成功反饋（完成、解鎖）
  | 'warning'     // 警告反饋
  | 'error'       // 錯誤反饋
  | 'selection';  // 選擇反饋（切換、選中）

// 振動模式定義（毫秒）
const HAPTIC_PATTERNS: Record<HapticType, number | number[]> = {
  light: 10,
  medium: 25,
  heavy: 50,
  success: [30, 50, 30],      // 短-停-短
  warning: [50, 30, 50],      // 長-停-長
  error: [100, 50, 100, 50, 100], // 三次長振動
  selection: 15,
};

// 檢查是否支援振動 API
const isVibrationSupported = (): boolean => {
  return typeof navigator !== 'undefined' && 'vibrate' in navigator;
};

/**
 * 觸覺回饋 Hook
 * 提供跨平台的振動反饋功能
 */
export const useHapticFeedback = () => {
  /**
   * 觸發振動反饋
   * @param type 振動類型
   * @returns 是否成功觸發
   */
  const triggerHaptic = useCallback((type: HapticType = 'medium'): boolean => {
    if (!isVibrationSupported()) {
      return false;
    }

    try {
      const pattern = HAPTIC_PATTERNS[type];
      navigator.vibrate(pattern);
      return true;
    } catch {
      // 某些瀏覽器可能在特定條件下禁止振動
      return false;
    }
  }, []);

  /**
   * 取消當前振動
   */
  const cancelHaptic = useCallback((): void => {
    if (isVibrationSupported()) {
      try {
        navigator.vibrate(0);
      } catch {
        // 忽略錯誤
      }
    }
  }, []);

  /**
   * 自訂振動模式
   * @param pattern 振動模式（單個數字或數字陣列）
   */
  const customHaptic = useCallback((pattern: number | number[]): boolean => {
    if (!isVibrationSupported()) {
      return false;
    }

    try {
      navigator.vibrate(pattern);
      return true;
    } catch {
      return false;
    }
  }, []);

  return {
    triggerHaptic,
    cancelHaptic,
    customHaptic,
    isSupported: isVibrationSupported(),
  };
};

export default useHapticFeedback;
