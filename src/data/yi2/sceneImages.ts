/**
 * 第二部「弧度歸零：伊」場景背景圖映射
 * 將 bgImage key 映射到實際圖片資源
 */

// ── CH01 背景圖 ──
import ch01DeleteFile from '@/assets/yi2/backgrounds/ch01-key-delete-file.png';
import ch01DeleteFileKv from '@/assets/yi2/backgrounds/ch01-key-delete-file-kv.png';

// ── CH02 背景圖 ──
import ch02MeetingRoomKv from '@/assets/yi2/backgrounds/ch02-bg-meeting-room-kv.png';
import ch02MeetingRoomSimple from '@/assets/yi2/backgrounds/ch02-bg-meeting-room-simple.png';
import ch02MeetingRoomCinematic from '@/assets/yi2/backgrounds/ch02-bg-meeting-room-cinematic.png';
import ch02MeetingWide from '@/assets/yi2/backgrounds/ch02-01-meeting-wide.png';
import ch02ConfusedMeeting from '@/assets/yi2/backgrounds/ch02-02-linyi-confused.png';
import ch02LowAngleMeeting from '@/assets/yi2/backgrounds/ch02-04-low-angle-meeting.png';
import ch02KeyConfused from '@/assets/yi2/backgrounds/ch02-key-meeting-confused.png';

/**
 * bgImage key → 實際圖片路徑映射
 * 節點的 bgImage 欄位值對應到此表
 */
export const yi2BgImageMap: Record<string, string> = {
  // CH01 場景
  'yi2-cafe': ch01DeleteFileKv,               // 咖啡廳刪檔場景（電影級）
  'yi2-cafe-delete': ch01DeleteFile,           // 咖啡廳刪檔（雙人構圖）

  // CH02 場景
  'yi2-meeting-room': ch02MeetingRoomKv,       // 會議室空景（KV 風格）
  'yi2-meeting-room-simple': ch02MeetingRoomSimple, // 會議室空景（單一構圖）
  'yi2-meeting-room-cinematic': ch02MeetingRoomCinematic, // 會議室空景（電影級）
  'yi2-meeting-wide': ch02MeetingWide,         // 會議室廣角
  'yi2-meeting-confused': ch02ConfusedMeeting, // 林壹困惑會議中景
  'yi2-meeting-lowangle': ch02LowAngleMeeting, // 低角度會議動態
  'yi2-meeting-key': ch02KeyConfused,          // 會議困惑關鍵場景
};

/**
 * 章節 + bgImage key 的進階解析
 * 某些通用 key（如 yi2-office）在不同章節可能使用不同圖片
 */
const chapterBgOverrides: Record<string, Record<string, string>> = {
  'yi2-ch2': {
    'yi2-office': ch02MeetingWide, // 第二章的辦公室場景使用會議室廣角
  },
};

/**
 * 根據 bgImage key 和章節 key 取得背景圖片路徑
 * @returns 圖片路徑，或 null（無對應圖片時回退漸層）
 */
export function getYi2BgImage(bgImageKey: string, chapterKey?: string): string | null {
  // 先查章節特定覆蓋
  if (chapterKey && chapterBgOverrides[chapterKey]?.[bgImageKey]) {
    return chapterBgOverrides[chapterKey][bgImageKey];
  }
  // 再查通用映射
  return yi2BgImageMap[bgImageKey] || null;
}
