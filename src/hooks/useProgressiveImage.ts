import { useState, useEffect } from 'react';

/**
 * 漸進式圖片載入 Hook
 * 1. 先顯示極小的低解析度縮圖（blur-up 效果）
 * 2. 同時載入完整圖片
 * 3. 完整圖片載入後平滑過渡
 */
export function useProgressiveImage(src: string | undefined) {
  const [loaded, setLoaded] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);
  
  // 重置狀態當圖片來源改變
  useEffect(() => {
    if (!src) return;
    
    let cancelled = false;
    setLoaded(false);
    setThumbLoaded(false);
    
    // 縮圖快取 key（使用圖片路徑）
    const thumbCacheKey = `thumb_${src}`;
    
    // 檢查是否已有快取的縮圖資料
    const cachedThumb = sessionStorage.getItem(thumbCacheKey);
    if (cachedThumb) {
      setThumbLoaded(true);
    }
    
    // 載入完整圖片
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      if (!cancelled) {
        setLoaded(true);
        // 儲存縮圖標記（表示這張圖已成功載入過）
        try {
          sessionStorage.setItem(thumbCacheKey, '1');
        } catch {
          // sessionStorage 可能已滿，忽略錯誤
        }
      }
    };
    
    img.onerror = () => {
      if (!cancelled) {
        setLoaded(true); // 即使失敗也標記完成避免永久載入
      }
    };
    
    // 短延遲後顯示縮圖效果（給予最小載入感）
    const thumbTimer = setTimeout(() => {
      if (!cancelled) {
        setThumbLoaded(true);
      }
    }, 50);
    
    return () => {
      cancelled = true;
      clearTimeout(thumbTimer);
    };
  }, [src]);
  
  return {
    loaded,
    thumbLoaded,
    // 提供 blur 級別供樣式使用
    blurLevel: loaded ? 0 : thumbLoaded ? 8 : 20,
  };
}

/**
 * 生成低品質縮圖 URL（如果使用 CDN/Image Service）
 * 目前專案使用本地圖片，這個函數預留給未來 WebP/CDN 整合
 */
export function getThumbUrl(src: string, width = 32): string {
  // 如果是 CDN URL，可以加上 transform 參數
  // 例如: return `${src}?w=${width}&q=10&blur=20`;
  
  // 目前返回原圖（靠 CSS blur 實現模糊效果）
  return src;
}

/**
 * 圖片壓縮建議
 * 
 * ## 轉換為 WebP 格式的方法
 * 
 * ### 方法 1: 使用線上工具
 * - Squoosh (https://squoosh.app) - Google 出品，支援批量轉換
 * - CloudConvert (https://cloudconvert.com/png-to-webp)
 * 
 * ### 方法 2: 使用命令列工具 (需安裝 cwebp)
 * ```bash
 * # macOS
 * brew install webp
 * 
 * # 轉換單張圖片
 * cwebp -q 80 input.png -o output.webp
 * 
 * # 批量轉換整個資料夾
 * for file in src/assets/yi1/*.png; do
 *   cwebp -q 80 "$file" -o "${file%.png}.webp"
 * done
 * ```
 * 
 * ### 方法 3: 使用 Node.js 腳本
 * ```javascript
 * // convert-to-webp.js
 * const sharp = require('sharp');
 * const glob = require('glob');
 * 
 * glob('src/assets/yi1/*.png', (err, files) => {
 *   files.forEach(file => {
 *     sharp(file)
 *       .webp({ quality: 80 })
 *       .toFile(file.replace('.png', '.webp'));
 *   });
 * });
 * ```
 * 
 * ## 建議的圖片規格
 * - 格式: WebP
 * - 品質: 80 (平衡品質與檔案大小)
 * - 最大寬度: 1920px (全螢幕場景)
 * - 目標檔案大小: 100-200KB
 */
