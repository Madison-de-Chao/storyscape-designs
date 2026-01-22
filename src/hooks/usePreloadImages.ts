import { useEffect, useState } from "react";

export const usePreloadImages = (imageUrls: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const total = imageUrls.length;
    const imageRefs: HTMLImageElement[] = [];

    if (total === 0) {
      setImagesLoaded(true);
      return;
    }

    imageUrls.forEach((url) => {
      const img = new Image();
      imageRefs.push(img);
      img.src = url;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === total) setImagesLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === total) setImagesLoaded(true);
      };
    });

    return () => {
      imageRefs.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  return imagesLoaded;
};
