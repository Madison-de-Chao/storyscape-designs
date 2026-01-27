import { useState, useEffect, useRef, useCallback } from 'react';

// 全域縮圖快取（base64 data URLs）
const thumbnailCache = new Map<string, string>();
// 正在生成縮圖的 Promise
const pendingThumbnails = new Map<string, Promise<string>>();
// 已完成載入的完整圖片快取
const loadedImagesCache = new Set<string>();

// 縮圖設定
const THUMB_WIDTH = 32;   // 縮圖寬度
const THUMB_QUALITY = 0.3; // 縮圖品質（0-1）

/**
 * 生成低解析度縮圖
 * 使用 canvas 將圖片縮小並轉為 base64
 */
async function generateThumbnail(src: string): Promise<string> {
  // 檢查快取
  if (thumbnailCache.has(src)) {
    return thumbnailCache.get(src)!;
  }

  // 檢查是否正在生成中
  if (pendingThumbnails.has(src)) {
    return pendingThumbnails.get(src)!;
  }

  const promise = new Promise<string>((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      try {
        // 計算縮圖尺寸（保持比例）
        const aspectRatio = img.height / img.width;
        const thumbHeight = Math.round(THUMB_WIDTH * aspectRatio);
        
        // 創建 canvas 繪製縮圖
        const canvas = document.createElement('canvas');
        canvas.width = THUMB_WIDTH;
        canvas.height = thumbHeight;
        
        const ctx = canvas.getContext('2d');
        if (ctx) {
          // 使用較低品質的插值以獲得「模糊」效果
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'low';
          ctx.drawImage(img, 0, 0, THUMB_WIDTH, thumbHeight);
          
          // 轉為 base64
          const dataUrl = canvas.toDataURL('image/webp', THUMB_QUALITY);
          thumbnailCache.set(src, dataUrl);
          resolve(dataUrl);
        } else {
          resolve(src); // fallback 到原圖
        }
      } catch {
        resolve(src); // 失敗時 fallback 到原圖
      }
    };
    
    img.onerror = () => {
      resolve(src); // 失敗時 fallback 到原圖
    };
    
    img.src = src;
  });

  pendingThumbnails.set(src, promise);
  
  promise.finally(() => {
    pendingThumbnails.delete(src);
  });

  return promise;
}

/**
 * 漸進式圖片載入 Hook（Blur-Up 效果）
 * 
 * 載入流程：
 * 1. 立即顯示強烈模糊效果（佔位）
 * 2. 生成/載入低解析度縮圖 → 顯示模糊縮圖
 * 3. 載入完整圖片 → 平滑過渡到清晰
 * 
 * @param src 圖片 URL
 * @returns 載入狀態和模糊程度
 */
export function useProgressiveImage(src: string | undefined) {
  const [loaded, setLoaded] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const abortController = useRef<AbortController | null>(null);
  
  // 計算模糊程度
  const getBlurLevel = useCallback(() => {
    if (loaded) return 0;
    if (thumbLoaded && thumbnailUrl) return 8;
    return 20;
  }, [loaded, thumbLoaded, thumbnailUrl]);

  useEffect(() => {
    if (!src) {
      setLoaded(false);
      setThumbLoaded(false);
      setThumbnailUrl(null);
      return;
    }

    // 取消之前的載入
    if (abortController.current) {
      abortController.current.abort();
    }
    abortController.current = new AbortController();
    const signal = abortController.current.signal;

    // 檢查是否已經載入過完整圖片
    if (loadedImagesCache.has(src)) {
      setLoaded(true);
      setThumbLoaded(true);
      return;
    }

    // 重置狀態
    setLoaded(false);
    setThumbLoaded(false);
    
    // 立即檢查縮圖快取
    if (thumbnailCache.has(src)) {
      setThumbnailUrl(thumbnailCache.get(src)!);
      setThumbLoaded(true);
    } else {
      setThumbnailUrl(null);
    }

    // 並行執行：生成縮圖 + 載入完整圖片
    const loadImage = async () => {
      // 生成縮圖（如果尚未快取）
      if (!thumbnailCache.has(src)) {
        try {
          const thumbUrl = await generateThumbnail(src);
          if (!signal.aborted) {
            setThumbnailUrl(thumbUrl);
            setThumbLoaded(true);
          }
        } catch {
          // 縮圖生成失敗，繼續載入完整圖片
          if (!signal.aborted) {
            setThumbLoaded(true);
          }
        }
      }

      // 載入完整圖片
      const fullImg = new Image();
      fullImg.decoding = 'async';
      
      fullImg.onload = () => {
        if (!signal.aborted) {
          setLoaded(true);
          loadedImagesCache.add(src);
        }
      };
      
      fullImg.onerror = () => {
        if (!signal.aborted) {
          setLoaded(true); // 即使失敗也標記完成
        }
      };
      
      fullImg.src = src;
    };

    loadImage();

    return () => {
      if (abortController.current) {
        abortController.current.abort();
      }
    };
  }, [src]);

  return {
    loaded,
    thumbLoaded,
    thumbnailUrl,
    blurLevel: getBlurLevel(),
    // 是否應該顯示縮圖（縮圖已載入但完整圖片未載入）
    showThumbnail: thumbLoaded && !loaded && !!thumbnailUrl,
  };
}

/**
 * 預熱縮圖快取
 * 在空閒時預先生成指定圖片的縮圖
 */
export function prewarmThumbnailCache(urls: string[]): void {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      urls.forEach(url => {
        if (!thumbnailCache.has(url) && !pendingThumbnails.has(url)) {
          generateThumbnail(url).catch(() => {});
        }
      });
    }, { timeout: 5000 });
  }
}

/**
 * 清理縮圖快取
 * 當快取過大時移除最早的項目
 */
export function cleanupThumbnailCache(maxSize = 100): void {
  if (thumbnailCache.size > maxSize) {
    const keysToRemove = Array.from(thumbnailCache.keys()).slice(0, thumbnailCache.size - maxSize);
    keysToRemove.forEach(key => thumbnailCache.delete(key));
  }
}

/**
 * 檢查圖片是否已完全載入
 */
export function isImageLoaded(src: string): boolean {
  return loadedImagesCache.has(src);
}
