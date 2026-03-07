/**
 * 第二部「弧度歸零：伊」場景配置引擎
 * 將節點 ID 映射到背景 + 人物立繪配置
 */
import type { BackgroundConfig, CharacterSprite } from '@/components/game/CharacterScene';
import type { DialogueNode } from '@/stores/gameStore';
import { getCharacterSprite } from './spriteRegistry';
import { getYi2BgImage } from './sceneImages';

// 導入每個章節的預設背景圖
import bgBedroomMorning from '@/assets/yi2/backgrounds/bg-bedroom-morning.jpg';
import bgMrtInterior from '@/assets/yi2/backgrounds/bg-mrt-interior.jpg';
import bgApartmentNight from '@/assets/yi2/backgrounds/bg-apartment-night.jpg';
import bgComputerNight from '@/assets/yi2/backgrounds/bg-computer-night.jpg';
import ch02MeetingRoomKv from '@/assets/yi2/backgrounds/ch02-bg-meeting-room-kv.png';
import ch03BathroomMirror from '@/assets/yi2/backgrounds/ch03-bg-bathroom-mirror-kv.png';
import ch04HotpotWide from '@/assets/yi2/backgrounds/ch04-01-hotpot-wide.png';
import ch05LivingRoomWide from '@/assets/yi2/backgrounds/ch05-01-living-room-wide.png';
import ch06KvCliffTeachers from '@/assets/yi2/backgrounds/ch06-kv-cliff-teachers.png';
import ch07KvMidnightNotes from '@/assets/yi2/backgrounds/ch07-kv-midnight-notes.png';
import ch08KvMirrorFirstSight from '@/assets/yi2/backgrounds/ch08-kv-mirror-first-sight.png';
import ch09OfficeWide from '@/assets/yi2/backgrounds/ch09-01-office-wide.png';
import ch10StageWide from '@/assets/yi2/backgrounds/ch10-01-stage-wide.png';
import ch11PantryDialogueKv from '@/assets/yi2/backgrounds/ch11-key-pantry-dialogue-kv.png';
import ch12KvWhiteWorld from '@/assets/yi2/backgrounds/ch12-kv-white-world.png';
import ch00KvFoggyMirror from '@/assets/yi2/backgrounds/ch00-kv-foggy-mirror.png';

export interface Yi2SceneConfig {
  background: BackgroundConfig;
  characters?: CharacterSprite[];
}

// ── 預設背景（僅作為最終 fallback） ──

const defaultBg = (hue: number, sat: number = 30): BackgroundConfig => ({
  type: 'gradient',
  value: `linear-gradient(180deg, hsl(${hue} ${sat}% 8%) 0%, hsl(${hue} ${sat}% 14%) 50%, hsl(${hue} ${sat}% 6%) 100%)`,
  animation: 'breathe',
  overlay: 'noise',
});

// ── 每章預設背景圖片 ──
const chapterDefaultImages: Record<string, string> = {
  'yi2-preface': ch00KvFoggyMirror,
  'yi2-ch0': bgBedroomMorning,
  'yi2-ch1': bgMrtInterior,
  'yi2-ch2': ch02MeetingRoomKv,
  'yi2-ch3': ch03BathroomMirror,
  'yi2-ch4': ch04HotpotWide,
  'yi2-ch5': ch05LivingRoomWide,
  'yi2-ch6': ch06KvCliffTeachers,
  'yi2-ch7': ch07KvMidnightNotes,
  'yi2-ch8': ch08KvMirrorFirstSight,
  'yi2-ch9': ch09OfficeWide,
  'yi2-ch10': ch10StageWide,
  'yi2-ch11': ch11PantryDialogueKv,
  'yi2-ch12': ch12KvWhiteWorld,
};

// ── 章節預設場景 ──

const chapterDefaults: Record<string, Yi2SceneConfig> = {
  'yi2-preface': {
    background: defaultBg(340, 25),
  },
  'yi2-ch0': {
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, hsl(210 15% 6%) 0%, hsl(210 20% 12%) 50%, hsl(210 10% 8%) 100%)',
      animation: 'static',
      overlay: 'lines',
    },
  },
  'yi2-ch1': {
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, hsl(0 40% 5%) 0%, hsl(0 50% 10%) 50%, hsl(0 30% 4%) 100%)',
      animation: 'pulse',
      overlay: 'noise',
    },
  },
  'yi2-ch2': {
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, hsl(270 25% 6%) 0%, hsl(270 30% 12%) 50%, hsl(270 20% 5%) 100%)',
      animation: 'breathe',
      overlay: 'noise',
    },
  },
  'yi2-ch3': {
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, hsl(15 50% 6%) 0%, hsl(15 55% 12%) 50%, hsl(15 40% 5%) 100%)',
      animation: 'pulse',
      overlay: 'noise',
    },
  },
  'yi2-ch4': {
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, hsl(195 35% 6%) 0%, hsl(195 40% 12%) 50%, hsl(195 30% 5%) 100%)',
      animation: 'breathe',
      overlay: 'lines',
    },
  },
  'yi2-ch5': {
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, hsl(45 50% 5%) 0%, hsl(45 60% 12%) 50%, hsl(45 40% 4%) 100%)',
      animation: 'breathe',
      overlay: 'dots',
    },
  },
  'yi2-ch6': {
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, hsl(220 30% 5%) 0%, hsl(220 35% 12%) 60%, hsl(220 25% 4%) 100%)',
      animation: 'breathe',
      overlay: 'noise',
    },
  },
  'yi2-ch7': {
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, hsl(35 40% 5%) 0%, hsl(35 50% 12%) 50%, hsl(35 35% 4%) 100%)',
      animation: 'breathe',
      overlay: 'lines',
    },
  },
  'yi2-ch8': {
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, hsl(170 30% 5%) 0%, hsl(170 35% 12%) 50%, hsl(170 25% 4%) 100%)',
      animation: 'breathe',
      overlay: 'noise',
    },
  },
  'yi2-ch9': {
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, hsl(330 35% 5%) 0%, hsl(330 40% 12%) 50%, hsl(330 30% 4%) 100%)',
      animation: 'breathe',
      overlay: 'dots',
    },
  },
  'yi2-ch10': {
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, hsl(30 50% 4%) 0%, hsl(30 55% 10%) 50%, hsl(30 40% 3%) 100%)',
      animation: 'pulse',
      overlay: 'noise',
    },
  },
  'yi2-ch11': {
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, hsl(200 35% 5%) 0%, hsl(200 40% 12%) 50%, hsl(200 30% 4%) 100%)',
      animation: 'breathe',
      overlay: 'noise',
    },
  },
  'yi2-ch12': {
    background: {
      type: 'gradient',
      value: 'linear-gradient(180deg, hsl(280 35% 5%) 0%, hsl(280 40% 12%) 50%, hsl(280 30% 4%) 100%)',
      animation: 'breathe',
      overlay: 'noise',
    },
  },
};

/**
 * 根據節點獲取場景配置（含背景圖片解析 + 自動立繪生成）
 */
export function getYi2SceneConfig(nodeId: string, node?: DialogueNode): Yi2SceneConfig {
  const chapterMatch = nodeId.match(/^(yi2-(?:preface|ch\d+))/);
  const chapterKey = chapterMatch ? chapterMatch[1] : 'yi2-preface';

  const base = chapterDefaults[chapterKey] || { background: defaultBg(210) };

  // 若節點有 bgImage，嘗試解析為實際圖片背景
  let result = { ...base };
  if (node?.bgImage) {
    const imageSrc = getYi2BgImage(node.bgImage, chapterKey);
    if (imageSrc) {
      result = {
        ...base,
        background: {
          type: 'image',
          value: imageSrc,
          animation: 'breathe',
          overlay: 'noise',
        },
      };
    }
  }

  // 自動為有立繪的角色生成 sprite
  const spriteCharacters = ['protagonist', 'yi', 'xiaochen', 'xiaoman', 'linyi'];
  if (node?.speaker && spriteCharacters.includes(node.speaker)) {
    const spriteSrc = getCharacterSprite(node.speaker, node.expression);
    if (spriteSrc) {
      const positionMap: Record<string, 'left' | 'center' | 'right'> = {
        protagonist: 'center',
        yi: 'right',
        xiaochen: 'left',
        xiaoman: 'left',
        linyi: 'right',
      };
      const entranceMap: Record<string, 'fade' | 'glitch' | 'slide-left' | 'slide-right'> = {
        protagonist: 'fade',
        yi: 'glitch',
        xiaochen: 'slide-left',
        xiaoman: 'slide-left',
        linyi: 'slide-right',
      };
      return {
        ...result,
        characters: [
          ...(result.characters || []),
          {
            id: node.speaker,
            src: spriteSrc,
            position: positionMap[node.speaker] || 'center',
            entrance: entranceMap[node.speaker] || 'fade',
            isSpeaking: true,
            scale: 0.9,
          },
        ],
      };
    }
  }

  return result;
}

/**
 * 獲取章節 key（從節點 ID）
 */
export function getYi2ChapterKey(nodeId: string): string {
  const match = nodeId.match(/^(yi2-(?:preface|ch\d+))/);
  return match ? match[1] : 'yi2-preface';
}
