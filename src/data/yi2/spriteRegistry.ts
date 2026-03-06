/**
 * 第二部人物立繪素材註冊表
 * 管理所有角色的表情立繪映射
 */

// ── 女主角立繪 ──
import protagonistSad from '@/assets/yi2/sprites/protagonist-sad.png';
import protagonistGentle from '@/assets/yi2/sprites/protagonist-gentle.png';
import protagonistConfident from '@/assets/yi2/sprites/protagonist-confident.png';
import protagonistMysterious from '@/assets/yi2/sprites/protagonist-mysterious.png';
import protagonistSurprised from '@/assets/yi2/sprites/protagonist-surprised.png';
import protagonistAngry from '@/assets/yi2/sprites/protagonist-angry.png';
import protagonistFurious from '@/assets/yi2/sprites/protagonist-furious.png';
import protagonistThoughtful from '@/assets/yi2/sprites/protagonist-thoughtful.png';

// ── 伊的立繪 ──
import yiCold from '@/assets/yi2/sprites/yi-cold.png';
import yiMockery from '@/assets/yi2/sprites/yi-mockery.png';
import yiPower from '@/assets/yi2/sprites/yi-power.png';
import yiCasual from '@/assets/yi2/sprites/yi-casual.png';
import yiAngry from '@/assets/yi2/sprites/yi-angry.png';
import yiSurprised from '@/assets/yi2/sprites/yi-surprised.png';

// ── 表情映射 ──

export const protagonistSprites: Record<string, string> = {
  sad: protagonistSad,
  gentle: protagonistGentle,
  confident: protagonistConfident,
  mysterious: protagonistMysterious,
  surprised: protagonistSurprised,
  angry: protagonistAngry,
  furious: protagonistFurious,
  thoughtful: protagonistThoughtful,
  default: protagonistGentle,
};

export const yiSprites: Record<string, string> = {
  cold: yiCold,             // 黑西裝綠光，冷酷數位
  mockery: yiMockery,       // 紅旗袍持扇，嘲諷自信
  power: yiPower,           // 金甲伸手，施法掌控
  casual: yiCasual,         // 灰大衣微笑，日常從容
  angry: yiAngry,           // 紅旗袍抱胸，憤怒威脅
  surprised: yiSurprised,   // 金甲驚訝，震驚
  default: yiCold,
};

// ── 查詢函式 ──

export function getCharacterSprite(characterId: string, expression?: string): string | null {
  const key = expression || 'default';
  switch (characterId) {
    case 'protagonist':
      return protagonistSprites[key] || protagonistSprites.default;
    case 'yi':
      return yiSprites[key] || yiSprites.default;
    default:
      // TODO: 其他角色立繪
      return null;
  }
}
