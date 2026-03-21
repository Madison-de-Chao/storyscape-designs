/**
 * 說話者頭像映射 — 用於對話框中名稱旁的小型頭像
 * 使用立繪素材裁切出頭部作為頭像來源
 */

// Yi2 角色立繪（取預設表情作為頭像來源）
import protagonistGentle from '@/assets/yi2/sprites/protagonist-gentle.png';
import yiCold from '@/assets/yi2/sprites/yi-cold.png';
import xiaochenKv from '@/assets/yi2/sprites/xiaochen-kv.png';
import xiaomanKv from '@/assets/yi2/sprites/xiaoman-kv.png';
import linyiHalfV2 from '@/assets/yi2/sprites/linyi-half-v2.png';

/** 角色 → 頭像圖片路徑（使用立繪的預設表情） */
const speakerAvatarMap: Record<string, string> = {
  protagonist: protagonistGentle,
  yi: yiCold,
  xiaochen: xiaochenKv,
  xiaoman: xiaomanKv,
  linyi: linyiHalfV2,
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
  const resolvedKey = (speakerName && speakerNameToAvatarKey[speakerName]) || speakerAvatarMap[speaker] ? ((speakerName && speakerNameToAvatarKey[speakerName]) || speaker) : speaker;
  return speakerAvatarMap[resolvedKey] || null;
}
