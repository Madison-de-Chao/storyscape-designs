import { useEffect, useRef } from 'react';
import { useGameStore } from '@/stores/gameStore';
import { getSceneImage } from '@/data/yi1/sceneImages';
import { getYi1NodeById } from '@/data/yi1';

/**
 * 智慧預載下一場景的圖片
 * 在玩家閱讀當前場景時，預先載入可能的下一張場景圖片
 */
export const usePreloadNextScene = (currentNodeId: string) => {
  const { currentPart } = useGameStore();
  const preloadedUrls = useRef<Set<string>>(new Set());
  
  useEffect(() => {
    if (!currentNodeId) return;
    
    // 獲取當前節點
    const currentNode = getYi1NodeById(currentNodeId);
    
    if (!currentNode) return;
    
    const urlsToPreload: string[] = [];
    
    // 收集可能的下一個節點 ID
    const nextNodeIds: string[] = [];
    
    // 如果有 nextNodeId，加入預載列表
    if (currentNode.nextNodeId) {
      nextNodeIds.push(currentNode.nextNodeId);
    }
    
    // 如果有選項，預載所有選項指向的節點圖片
    if (currentNode.choices) {
      currentNode.choices.forEach(choice => {
        if (choice.nextNodeId && !nextNodeIds.includes(choice.nextNodeId)) {
          nextNodeIds.push(choice.nextNodeId);
        }
      });
    }
    
    // 獲取每個下一節點的場景圖片
    nextNodeIds.forEach(nextNodeId => {
      const sceneImage = getSceneImage(nextNodeId);
      if (sceneImage && !preloadedUrls.current.has(sceneImage.image)) {
        urlsToPreload.push(sceneImage.image);
      }
    });
    
    // 預載圖片（使用低優先級）
    urlsToPreload.forEach(url => {
      if (preloadedUrls.current.has(url)) return;
      
      const img = new Image();
      // 使用 low priority 避免影響當前場景載入
      img.loading = 'lazy';
      img.decoding = 'async';
      img.src = url;
      
      img.onload = () => {
        preloadedUrls.current.add(url);
      };
      
      // 標記為正在預載，避免重複
      preloadedUrls.current.add(url);
    });
    
  }, [currentNodeId, currentPart]);
  
  return preloadedUrls.current;
};
