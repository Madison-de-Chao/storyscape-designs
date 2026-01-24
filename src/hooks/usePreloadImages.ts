import { useEffect, useState } from "react";

export const usePreloadImages = (imageUrls: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // NOTE: imageUrls 往往是每次 render 都會新建的陣列（例如 filter / map），
  // 用 join 的 key 來避免無意義的重跑與閃爍。
  const key = imageUrls.join("|");

  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;
    const total = imageUrls.length;
    const imageRefs: HTMLImageElement[] = [];

    if (total === 0) {
      setImagesLoaded(true);
      return;
    }

    // 換圖時先重置狀態，避免外部永遠拿到 true 導致 SceneImage 無法重新觸發顯示。
    setImagesLoaded(false);

    imageUrls.forEach((url) => {
      const img = new Image();
      imageRefs.push(img);
      img.src = url;
      img.onload = () => {
        loadedCount++;
        if (!cancelled && loadedCount === total) setImagesLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (!cancelled && loadedCount === total) setImagesLoaded(true);
      };
    });

    return () => {
      cancelled = true;
      imageRefs.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [key]);

  return imagesLoaded;
};
