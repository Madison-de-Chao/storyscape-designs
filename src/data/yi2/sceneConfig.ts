/**
 * 第二部「弧度歸零：伊」場景配置引擎
 * 將節點 ID 映射到背景 + 人物立繪配置
 */
import type { BackgroundConfig, CharacterSprite } from '@/components/game/CharacterScene';
import type { DialogueNode } from '@/stores/gameStore';
import { getCharacterSprite } from './spriteRegistry';
export interface Yi2SceneConfig {
  background: BackgroundConfig;
  characters?: CharacterSprite[];
}

// ── 預設背景 ──

const defaultBg = (hue: number, sat: number = 30): BackgroundConfig => ({
  type: 'gradient',
  value: `linear-gradient(180deg, hsl(${hue} ${sat}% 8%) 0%, hsl(${hue} ${sat}% 14%) 50%, hsl(${hue} ${sat}% 6%) 100%)`,
  animation: 'breathe',
  overlay: 'noise',
});

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
 * 根據節點獲取場景配置（含自動立繪生成）
 */
export function getYi2SceneConfig(nodeId: string, node?: DialogueNode): Yi2SceneConfig {
  const chapterMatch = nodeId.match(/^(yi2-(?:preface|ch\d+))/);
  const chapterKey = chapterMatch ? chapterMatch[1] : 'yi2-preface';

  const base = chapterDefaults[chapterKey] || { background: defaultBg(210) };

  // 自動為有立繪的角色生成 sprite
  if (node?.speaker && ['protagonist', 'yi'].includes(node.speaker)) {
    const spriteSrc = getCharacterSprite(node.speaker, node.expression);
    if (spriteSrc) {
      return {
        ...base,
        characters: [
          ...(base.characters || []),
          {
            id: node.speaker,
            src: spriteSrc,
            position: node.speaker === 'yi' ? 'right' : 'center',
            entrance: node.speaker === 'yi' ? 'glitch' : 'fade',
            isSpeaking: true,
            scale: 0.9,
          },
        ],
      };
    }
  }

  return base;
}

/**
 * 獲取章節 key（從節點 ID）
 */
export function getYi2ChapterKey(nodeId: string): string {
  const match = nodeId.match(/^(yi2-(?:preface|ch\d+))/);
  return match ? match[1] : 'yi2-preface';
}
