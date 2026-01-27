import { useEffect, useRef, useCallback } from 'react';
import { useGameStore } from '@/stores/gameStore';
import { getSceneImage } from '@/data/yi1/sceneImages';
import { getYi1NodeById } from '@/data/yi1';
import { prewarmThumbnailCache } from '@/hooks/useProgressiveImage';

// 全域預載快取（跨組件共享）
const globalPreloadedUrls = new Set<string>();
const pendingPreloads = new Map<string, HTMLImageElement>();

/**
 * 智慧預載下一場景的圖片
 * 在玩家閱讀當前場景時，預先載入可能的下一張場景圖片
 * 
 * 優化功能：
 * - 使用 requestIdleCallback 在瀏覽器空閒時預載
 * - 全域快取避免重複載入
 * - 支援取消進行中的預載
 * - 優先級排序（直接下一節點 > 選項節點）
 */
export const usePreloadNextScene = (currentNodeId: string) => {
  const { currentPart } = useGameStore();
  const abortController = useRef<AbortController | null>(null);
  const idleCallbackId = useRef<number | null>(null);
  
  // 預載單張圖片
  const preloadImage = useCallback((url: string, priority: 'high' | 'low' = 'low'): Promise<void> => {
    return new Promise((resolve) => {
      // 已經預載過，直接返回
      if (globalPreloadedUrls.has(url)) {
        resolve();
        return;
      }
      
      // 正在預載中，等待完成
      if (pendingPreloads.has(url)) {
        const existingImg = pendingPreloads.get(url)!;
        existingImg.onload = () => resolve();
        existingImg.onerror = () => resolve();
        return;
      }
      
      const img = new Image();
      pendingPreloads.set(url, img);
      
      // 根據優先級設置載入策略
      if (priority === 'high') {
        img.fetchPriority = 'high';
        img.loading = 'eager';
      } else {
        img.fetchPriority = 'low';
        img.loading = 'lazy';
      }
      img.decoding = 'async';
      
      img.onload = () => {
        globalPreloadedUrls.add(url);
        pendingPreloads.delete(url);
        resolve();
      };
      
      img.onerror = () => {
        pendingPreloads.delete(url);
        resolve(); // 即使失敗也 resolve，避免阻塞其他預載
      };
      
      img.src = url;
    });
  }, []);

  useEffect(() => {
    if (!currentNodeId || currentPart !== 'yi') return;
    
    // 取消之前的預載任務
    if (abortController.current) {
      abortController.current.abort();
    }
    if (idleCallbackId.current && 'cancelIdleCallback' in window) {
      window.cancelIdleCallback(idleCallbackId.current);
    }
    
    abortController.current = new AbortController();
    const signal = abortController.current.signal;
    
    const performPreload = async () => {
      if (signal.aborted) return;
      
      const currentNode = getYi1NodeById(currentNodeId);
      if (!currentNode) return;
      
      // 收集預載任務，按優先級排序
      const preloadTasks: Array<{ url: string; priority: 'high' | 'low' }> = [];
      
      // 直接下一節點（高優先級）
      if (currentNode.nextNodeId) {
        const sceneImage = getSceneImage(currentNode.nextNodeId);
        if (sceneImage && !globalPreloadedUrls.has(sceneImage.image)) {
          preloadTasks.push({ url: sceneImage.image, priority: 'high' });
        }
      }
      
      // 選項節點（低優先級）
      if (currentNode.choices) {
        currentNode.choices.forEach(choice => {
          if (choice.nextNodeId) {
            const sceneImage = getSceneImage(choice.nextNodeId);
            if (sceneImage && !globalPreloadedUrls.has(sceneImage.image)) {
              // 避免重複添加
              if (!preloadTasks.some(t => t.url === sceneImage.image)) {
                preloadTasks.push({ url: sceneImage.image, priority: 'low' });
              }
            }
          }
        });
      }
      
      // 預熱縮圖快取（用於 blur-up 效果）
      const allUrls = preloadTasks.map(t => t.url);
      if (allUrls.length > 0) {
        prewarmThumbnailCache(allUrls);
      }
      
      // 依序預載完整圖片（高優先級先執行）
      for (const task of preloadTasks) {
        if (signal.aborted) break;
        await preloadImage(task.url, task.priority);
      }
    };
    
    // 使用 requestIdleCallback 在瀏覽器空閒時執行預載
    if ('requestIdleCallback' in window) {
      idleCallbackId.current = window.requestIdleCallback(
        () => performPreload(),
        { timeout: 2000 } // 最多延遲 2 秒
      );
    } else {
      // Fallback: 延遲執行
      const timeoutId = setTimeout(performPreload, 100);
      return () => clearTimeout(timeoutId);
    }
    
    return () => {
      if (abortController.current) {
        abortController.current.abort();
      }
      if (idleCallbackId.current && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleCallbackId.current);
      }
    };
  }, [currentNodeId, currentPart, preloadImage]);
  
  return {
    preloadedUrls: globalPreloadedUrls,
    isPreloaded: (url: string) => globalPreloadedUrls.has(url),
  };
};
