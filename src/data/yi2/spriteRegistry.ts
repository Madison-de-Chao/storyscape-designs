/**
 * 第二部人物立繪素材註冊表
 * 管理所有角色的表情立繪映射
 */
import protagonistSad from '@/assets/yi2/sprites/protagonist-sad.png';
import protagonistGentle from '@/assets/yi2/sprites/protagonist-gentle.png';
import protagonistConfident from '@/assets/yi2/sprites/protagonist-confident.png';
import protagonistMysterious from '@/assets/yi2/sprites/protagonist-mysterious.png';
import protagonistSurprised from '@/assets/yi2/sprites/protagonist-surprised.png';
import protagonistAngry from '@/assets/yi2/sprites/protagonist-angry.png';
import protagonistFurious from '@/assets/yi2/sprites/protagonist-furious.png';
import protagonistThoughtful from '@/assets/yi2/sprites/protagonist-thoughtful.png';

// ── 女主角表情映射 ──

export const protagonistSprites: Record<string, string> = {
  sad: protagonistSad,           // 白衣坐姿，憂傷脆弱
  gentle: protagonistGentle,     // 藍裙站姿，溫柔微笑
  confident: protagonistConfident, // 戰甲持扇，自信
  mysterious: protagonistMysterious, // 黑衣金紋，優雅神秘
  surprised: protagonistSurprised,   // 藍裙驚訝
  angry: protagonistAngry,       // 藍裙抱胸，生氣防備
  furious: protagonistFurious,   // 黑衣憤怒，對峙
  thoughtful: protagonistThoughtful, // 黑衣沉思
  default: protagonistGentle,    // 預設
};

// ── 根據表情取得立繪路徑 ──

export function getProtagonistSprite(expression?: string): string {
  return protagonistSprites[expression || 'default'] || protagonistSprites.default;
}

// ── 所有角色的立繪查詢（未來擴充其他角色） ──

export function getCharacterSprite(characterId: string, expression?: string): string | null {
  if (characterId === 'protagonist') {
    return getProtagonistSprite(expression);
  }
  // TODO: 其他角色立繪
  return null;
}
