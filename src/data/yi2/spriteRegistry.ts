/**
 * 第二部人物立繪素材註冊表
 * 管理所有角色的表情立繪映射
 */

// ── 女主角立繪 ──
import protagonistSad from '@/assets/yi2/sprites/protagonist-sad.webp';
import protagonistGentle from '@/assets/yi2/sprites/protagonist-gentle.webp';
import protagonistConfident from '@/assets/yi2/sprites/protagonist-confident.webp';
import protagonistMysterious from '@/assets/yi2/sprites/protagonist-mysterious.webp';
import protagonistSurprised from '@/assets/yi2/sprites/protagonist-surprised.webp';
import protagonistAngry from '@/assets/yi2/sprites/protagonist-angry.webp';
import protagonistFurious from '@/assets/yi2/sprites/protagonist-furious.webp';
import protagonistThoughtful from '@/assets/yi2/sprites/protagonist-thoughtful.webp';
import protagonistOffice from '@/assets/yi2/sprites/protagonist-office.webp';

// ── 伊的立繪 ──
import yiCold from '@/assets/yi2/sprites/yi-cold.webp';
import yiMockery from '@/assets/yi2/sprites/yi-mockery.webp';
import yiPower from '@/assets/yi2/sprites/yi-power.webp';
import yiCasual from '@/assets/yi2/sprites/yi-casual.webp';
import yiAngry from '@/assets/yi2/sprites/yi-angry.webp';
import yiSurprised from '@/assets/yi2/sprites/yi-surprised.webp';
import yiQipaoRealistic from '@/assets/yi2/sprites/yi-qipao-realistic.webp';

// ── 小陳立繪 ──
import xiaochenKv from '@/assets/yi2/sprites/xiaochen-kv.webp';
import xiaochenKvV2 from '@/assets/yi2/sprites/xiaochen-kv-v2.webp';

// ── 小滿立繪 ──
import xiaomanKv from '@/assets/yi2/sprites/xiaoman-kv.webp';
import xiaomanFull from '@/assets/yi2/sprites/xiaoman-full.webp';
import xiaomanFullV2 from '@/assets/yi2/sprites/xiaoman-full-v2.webp';

// ── 林壹立繪 ──
import linyiFull from '@/assets/yi2/sprites/linyi-full.webp';
import linyiHalf from '@/assets/yi2/sprites/linyi-half.webp';
import linyiHalfV2 from '@/assets/yi2/sprites/linyi-half-v2.webp';

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
  office: protagonistOffice,        // 灰西裝現實色調
  default: protagonistGentle,
};

export const yiSprites: Record<string, string> = {
  cold: yiCold,                     // 黑西裝綠光，冷酷數位
  mockery: yiMockery,               // 紅旗袍持扇，嘲諷自信
  power: yiPower,                   // 金甲伸手，施法掌控
  casual: yiCasual,                 // 灰大衣微笑，日常從容
  angry: yiAngry,                   // 紅旗袍抱胸，憤怒威脅
  surprised: yiSurprised,           // 金甲驚訝，震驚
  'qipao-realistic': yiQipaoRealistic, // 紅旗袍現實色調主視覺
  default: yiCold,
};

export const xiaochenSprites: Record<string, string> = {
  kv: xiaochenKv,                   // 原版人物KV
  'kv-v2': xiaochenKvV2,            // 新版人物KV變體2
  default: xiaochenKv,
};

export const xiaomanSprites: Record<string, string> = {
  kv: xiaomanKv,                    // 原版人物KV
  full: xiaomanFull,                // 原版全身立繪
  'full-v2': xiaomanFullV2,         // 原版全身立繪_2
  default: xiaomanKv,
};

export const linyiSprites: Record<string, string> = {
  full: linyiFull,                  // 原版全身立繪
  half: linyiHalf,                  // 原版半身立繪
  'half-v2': linyiHalfV2,           // 原版半身立繪_1
  default: linyiHalfV2,
};

// ── 查詢函式 ──

export function getCharacterSprite(characterId: string, expression?: string): string | null {
  const key = expression || 'default';
  const registries: Record<string, Record<string, string>> = {
    protagonist: protagonistSprites,
    yi: yiSprites,
    xiaochen: xiaochenSprites,
    xiaoman: xiaomanSprites,
    linyi: linyiSprites,
  };
  const sprites = registries[characterId];
  if (!sprites) return null;
  return sprites[key] || sprites.default;
}
