/**
 * 說話者頭像映射 — 用於對話框中名稱旁的小型頭像
 */

// Yi2 角色頭像
import protagonistGentle from '@/assets/yi2/sprites/protagonist-gentle.webp';
import yiCold from '@/assets/yi2/sprites/yi-cold.webp';
import xiaochenKv from '@/assets/yi2/sprites/xiaochen-kv.webp';
import xiaomanKv from '@/assets/yi2/sprites/xiaoman-kv.webp';
import linyiAvatar from '@/assets/yi2/sprites/linyi-avatar.webp';

/** 角色 → 頭像圖片路徑 */
const speakerAvatarMap: Record<string, string> = {
  protagonist: protagonistGentle,
  yi: yiCold,
  xiaochen: xiaochenKv,
  xiaoman: xiaomanKv,
  linyi: linyiAvatar,
};

const speakerNameToAvatarKey: Record<string, string> = {
  '你': 'protagonist',
  '她': 'protagonist',
  '伊': 'yi',
  '???': 'yi',
  '小陳': 'xiaochen',
  '小滿': 'xiaoman',
  '小曼': 'xiaoman',
  '林壹': 'linyi',
};

/**
 * 取得說話者的頭像圖片路徑
 * 優先使用顯示名稱對應，其次才使用 speaker key
 */
export function getSpeakerAvatar(speaker: string, speakerName?: string): string | null {
  const resolvedKey = (speakerName && speakerNameToAvatarKey[speakerName]) || speaker;
  return speakerAvatarMap[resolvedKey] || null;
}

/** 預載所有頭像圖片，避免延遲顯示 */
export function preloadAvatars(): void {
  Object.values(speakerAvatarMap).forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}
