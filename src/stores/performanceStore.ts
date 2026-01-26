import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 檢測是否為低性能設備
const detectLowPerformanceDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const ua = navigator.userAgent.toLowerCase();
  const isAndroid = ua.includes('android');
  const isMobile = /mobile|tablet|ip(ad|hone|od)|android/i.test(ua);
  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  const hasLowMemory = (navigator as { deviceMemory?: number }).deviceMemory !== undefined && 
                       (navigator as { deviceMemory?: number }).deviceMemory! < 4;
  const hasLowCores = navigator.hardwareConcurrency !== undefined && 
                      navigator.hardwareConcurrency < 4;

  return isAndroid || prefersReducedMotion || hasLowMemory || (isMobile && hasLowCores);
};

interface PerformanceState {
  // 效能模式：'auto' 自動檢測 | 'high' 高效能 | 'low' 低效能
  performanceMode: 'auto' | 'high' | 'low';
  
  // 計算後的實際效能等級
  isLowPerformance: boolean;
  
  // 設定動作
  setPerformanceMode: (mode: 'auto' | 'high' | 'low') => void;
  
  // 獲取當前是否應該簡化動畫
  shouldSimplifyAnimations: () => boolean;
}

export const usePerformanceStore = create<PerformanceState>()(
  persist(
    (set, get) => ({
      performanceMode: 'auto',
      isLowPerformance: detectLowPerformanceDevice(),
      
      setPerformanceMode: (mode) => {
        let isLowPerf = false;
        
        if (mode === 'auto') {
          isLowPerf = detectLowPerformanceDevice();
        } else if (mode === 'low') {
          isLowPerf = true;
        } else {
          isLowPerf = false;
        }
        
        set({ 
          performanceMode: mode,
          isLowPerformance: isLowPerf,
        });
      },
      
      shouldSimplifyAnimations: () => {
        const state = get();
        if (state.performanceMode === 'auto') {
          return state.isLowPerformance;
        }
        return state.performanceMode === 'low';
      },
    }),
    {
      name: 'arctozero-performance',
      partialize: (state) => ({ performanceMode: state.performanceMode }),
    }
  )
);

// 輔助 hook：直接獲取是否應該簡化動畫
export const useShouldSimplifyAnimations = () => {
  const store = usePerformanceStore();
  return store.shouldSimplifyAnimations();
};
