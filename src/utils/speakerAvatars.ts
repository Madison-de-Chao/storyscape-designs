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

/**
 * 取得說話者的頭像圖片路徑
 * @returns 圖片路徑，若無對應頭像則回傳 null
 */
export function getSpeakerAvatar(speaker: string): string | null {
  return speakerAvatarMap[speaker] || null;
}
