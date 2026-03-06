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
import protagonistOffice from '@/assets/yi2/sprites/protagonist-office.png';

// ── 伊的立繪 ──
import yiCold from '@/assets/yi2/sprites/yi-cold.png';
import yiMockery from '@/assets/yi2/sprites/yi-mockery.png';
import yiPower from '@/assets/yi2/sprites/yi-power.png';
import yiCasual from '@/assets/yi2/sprites/yi-casual.png';
import yiAngry from '@/assets/yi2/sprites/yi-angry.png';
import yiSurprised from '@/assets/yi2/sprites/yi-surprised.png';
import yiQipaoRealistic from '@/assets/yi2/sprites/yi-qipao-realistic.png';

// ── 小陳立繪 ──
import xiaochenKv from '@/assets/yi2/sprites/xiaochen-kv.png';
import xiaochenKvV2 from '@/assets/yi2/sprites/xiaochen-kv-v2.png';

// ── 小滿立繪 ──
import xiaomanKv from '@/assets/yi2/sprites/xiaoman-kv.png';
import xiaomanFull from '@/assets/yi2/sprites/xiaoman-full.png';
import xiaomanFullV2 from '@/assets/yi2/sprites/xiaoman-full-v2.png';

// ── 林壹立繪 ──
import linyiFull from '@/assets/yi2/sprites/linyi-full.png';
import linyiHalf from '@/assets/yi2/sprites/linyi-half.png';
import linyiHalfV2 from '@/assets/yi2/sprites/linyi-half-v2.png';

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
