/**
 * 第二部「弧度歸零：伊」場景配置引擎
 * 將節點 ID 映射到背景 + 人物立繪配置
 */
import type { BackgroundConfig, CharacterSprite } from '@/components/game/CharacterScene';
import type { DialogueNode } from '@/stores/gameStore';
import { getCharacterSprite } from './spriteRegistry';
import { getYi2BgImage } from './sceneImages';

// ── 共用第一部序章背景圖 ──
import IMG_prologue_深夜_疲憊的臨界 from '@/assets/scenes/prologue_深夜_疲憊的臨界_粉嫩少女耽美版.webp';
import IMG_prologue_虛空_意識的光點 from '@/assets/scenes/prologue_虛空_意識的光點_粉嫩少女耽美版.webp';
import IMG_prologue_拉扯_分裂的痛苦 from '@/assets/scenes/prologue_拉扯_分裂的痛苦_粉嫩少女耽美版.webp';
import IMG_prologue_宇宙聚焦_窗戶的光 from '@/assets/scenes/prologue_宇宙聚焦_窗戶的光_粉嫩少女耽美版.webp';
import IMG_prologue_覺醒_超越的瞬間 from '@/assets/scenes/prologue_覺醒_超越的瞬間_粉嫩少女耽美版.webp';
import IMG_prologue_場景A from '@/assets/scenes/prologue_場景A_粉嫩少女耽美版.webp';
import IMG_prologue_場景B from '@/assets/scenes/prologue_場景B_粉嫩少女耽美版.webp';
import IMG_prologue_合一_治癒的完成 from '@/assets/scenes/prologue_合一_治癒的完成_粉嫩少女耽美版.webp';

// 導入每個章節的預設背景圖
import bgBedroomMorning from '@/assets/yi2/backgrounds/bg-bedroom-morning.jpg';
import bgMrtInterior from '@/assets/yi2/backgrounds/bg-mrt-interior.jpg';
import bgApartmentNight from '@/assets/yi2/backgrounds/bg-apartment-night.jpg';
import bgComputerNight from '@/assets/yi2/backgrounds/bg-computer-night.jpg';
import bgPhoneMorning from '@/assets/yi2/backgrounds/bg-phone-morning.jpg';
import bgTvMonroe from '@/assets/yi2/backgrounds/bg-tv-monroe.jpg';
import ch00KvFoggyMirror from '@/assets/yi2/backgrounds/ch00-kv-foggy-mirror.png';
import ch01DeleteFileKv from '@/assets/yi2/backgrounds/ch01-key-delete-file-kv.png';
import ch02MeetingRoomKv from '@/assets/yi2/backgrounds/ch02-bg-meeting-room-kv.png';
import ch02MeetingWide from '@/assets/yi2/backgrounds/ch02-01-meeting-wide.png';
import ch03BathroomMirror from '@/assets/yi2/backgrounds/ch03-bg-bathroom-mirror-kv.png';
import ch03MirrorSmash from '@/assets/yi2/backgrounds/ch03-mirror-smash-real.png';
import ch04HotpotWide from '@/assets/yi2/backgrounds/ch04-01-hotpot-wide.png';
import ch05LivingRoomWide from '@/assets/yi2/backgrounds/ch05-01-living-room-wide.png';
import ch05LivingRoomMagic from '@/assets/yi2/backgrounds/ch05-04-living-room-mirror-magic.png';
import ch05KvMonroeMirror from '@/assets/yi2/backgrounds/ch05-kv-monroe-mirror.png';
import ch06KvCliffTeachers from '@/assets/yi2/backgrounds/ch06-kv-cliff-teachers.png';
import ch07KvMidnightNotes from '@/assets/yi2/backgrounds/ch07-kv-midnight-notes.png';
import ch07KvBeatenStanding from '@/assets/yi2/backgrounds/ch07-kv-beaten-standing.png';
import ch08KvMirrorFirstSight from '@/assets/yi2/backgrounds/ch08-kv-mirror-first-sight.png';
import ch08KvAllowCrying from '@/assets/yi2/backgrounds/ch08-kv-allow-crying.png';
import ch09OfficeWide from '@/assets/yi2/backgrounds/ch09-01-office-wide.png';
import ch09CorridorEmpty from '@/assets/yi2/backgrounds/ch09-bg-corridor-empty.png';
import ch10StageWide from '@/assets/yi2/backgrounds/ch10-01-stage-wide.png';
import ch10StageMedium from '@/assets/yi2/backgrounds/ch10-02-stage-medium.png';
import ch10StageCloseup from '@/assets/yi2/backgrounds/ch10-03-stage-closeup.png';
import ch10EmbraceKv from '@/assets/yi2/backgrounds/ch10-key-inner-child-embrace-kv.png';
import ch11PantryDialogueKv from '@/assets/yi2/backgrounds/ch11-key-pantry-dialogue-kv.png';
import ch12KvWhiteWorld from '@/assets/yi2/backgrounds/ch12-kv-white-world.png';
import ch12Kv333Metaverse from '@/assets/yi2/backgrounds/ch12-kv-333-metaverse.png';
import kvCosmicPassage from '@/assets/yi2/backgrounds/kv-cosmic-passage.png';

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

/**
 * 節點 ID 範圍 → 背景圖片的細化映射
 * 每個章節內依劇情場景切換不同背景，避免整章只用同一張圖
 * 格式: [minNodeNum, maxNodeNum, imageSrc]
 * 包含回應節點（如 yi2-ch0-8a-r → 解析為 8）
 */
type SceneRange = [number, number, string];

const chapterSceneRanges: Record<string, SceneRange[]> = {
  // Ch0: 臥室(1-10) → 浴室鏡(11-19) → 捷運(20-26) → 辦公室(27-57) → 公寓夜(58+)
  'yi2-ch0': [
    [1, 10, bgBedroomMorning],
    [11, 19, ch03BathroomMirror],
    [20, 26, bgMrtInterior],
    [27, 57, ch09OfficeWide],
    [58, 199, bgApartmentNight],
  ],
  // Ch1: 臥室(1-3) → 捷運(4-7) → 辦公室(8-24) → 刪除檔案/咖啡廳(25-40) → 公寓夜(41+)
  'yi2-ch1': [
    [1, 3, bgBedroomMorning],
    [4, 7, bgMrtInterior],
    [8, 24, ch09OfficeWide],
    [25, 40, ch01DeleteFileKv],
    [41, 199, bgApartmentNight],
  ],
  // Ch2: 茶水間/走廊(1-3) → 會議室(4-15) → 公寓反思(16-29) → 雲端硬碟/鏡子(30+)
  'yi2-ch2': [
    [1, 3, ch09CorridorEmpty],
    [4, 15, ch02MeetingWide],
    [16, 29, bgApartmentNight],
    [30, 199, ch03BathroomMirror],
  ],
  // Ch3: 辦公室(1-9) → 浴室鏡子(10-25) → 砸鏡(26-35) → 公寓夜(36-47) → 夢境舞台(48-65) → 公寓夜(66+)
  'yi2-ch3': [
    [1, 9, ch09OfficeWide],
    [10, 25, ch03BathroomMirror],
    [26, 35, ch03MirrorSmash],
    [36, 47, bgApartmentNight],
    [48, 65, ch10StageWide],
    [66, 199, bgApartmentNight],
  ],
  // Ch4: 臥室(1-8) → 辦公室(9-21) → 火鍋店(22-54) → 公寓夜(55+)
  'yi2-ch4': [
    [1, 8, bgBedroomMorning],
    [9, 21, ch09OfficeWide],
    [22, 54, ch04HotpotWide],
    [55, 199, bgApartmentNight],
  ],
  // Ch5: 公寓沙發(1-4) → 電視夢露(5-9) → 客廳(10-25) → 客廳魔幻鏡(26-35) → 夢露鏡中(36+)
  'yi2-ch5': [
    [1, 4, bgApartmentNight],
    [5, 9, bgTvMonroe],
    [10, 25, ch05LivingRoomWide],
    [26, 35, ch05LivingRoomMagic],
    [36, 199, ch05KvMonroeMirror],
  ],
  // Ch6: 公寓夜(1-8) → 夢境/伊講故事(9-55) → 總結三人(56-90) → 林壹反思+新檔案(91+)
  'yi2-ch6': [
    [1, 8, bgApartmentNight],
    [9, 55, ch06KvCliffTeachers],
    [56, 90, ch06KvCliffTeachers],
    [91, 120, bgComputerNight],
    [121, 199, bgApartmentNight],
  ],
  // Ch7: 公寓夜(1-5) → 電腦搜尋(6-30) → 深夜筆記(31-50) → 被打但站著(51+)
  'yi2-ch7': [
    [1, 5, bgApartmentNight],
    [6, 30, bgComputerNight],
    [31, 50, ch07KvMidnightNotes],
    [51, 199, ch07KvBeatenStanding],
  ],
  // Ch8: 公寓夜(1-2) → 手機早晨(3-5) → 浴室鏡子(6-30) → 鏡中初見(31-50) → 允許哭泣(51+)
  'yi2-ch8': [
    [1, 2, bgApartmentNight],
    [3, 5, bgPhoneMorning],
    [6, 30, ch03BathroomMirror],
    [31, 50, ch08KvMirrorFirstSight],
    [51, 199, ch08KvAllowCrying],
  ],
  // Ch9: 辦公室(1-18) → 餐廳(19-30) → 辦公室走廊(31-42) → 浴室鏡子(43-50) → 公寓夜(51+)
  'yi2-ch9': [
    [1, 18, ch09OfficeWide],
    [19, 30, ch04HotpotWide],
    [31, 42, ch09CorridorEmpty],
    [43, 50, ch03BathroomMirror],
    [51, 199, bgApartmentNight],
  ],
  // Ch10: 夢中舞台(1-4) → 公寓夜(5-9) → 舞台中景(10-20) → 舞台特寫(21-30) → 內在擁抱(31+)
  'yi2-ch10': [
    [1, 4, ch10StageWide],
    [5, 9, bgApartmentNight],
    [10, 20, ch10StageMedium],
    [21, 30, ch10StageCloseup],
    [31, 199, ch10EmbraceKv],
  ],
  // Ch11: 辦公室(1-9) → 手機訊息(10-14) → 浴室鏡子(15-30) → 茶水間(31-40) → 深夜電腦(41+)
  'yi2-ch11': [
    [1, 9, ch09OfficeWide],
    [10, 14, bgPhoneMorning],
    [15, 30, ch03BathroomMirror],
    [31, 40, ch11PantryDialogueKv],
    [41, 199, bgComputerNight],
  ],
  // Ch12: 白色空間(1-5) → 公寓333(6-7) → 深夜電腦(8-15) → 元壹境(16-25) → 宇宙通道(26+)
  'yi2-ch12': [
    [1, 5, ch12KvWhiteWorld],
    [6, 7, bgApartmentNight],
    [8, 15, bgComputerNight],
    [16, 25, ch12Kv333Metaverse],
    [26, 199, kvCosmicPassage],
  ],
};

/**
 * 從節點 ID 解析出數字部分（用於範圍匹配）
 * 例: 'yi2-ch0-8a-r' → 8, 'yi2-ch5-yi-3' → 特殊處理
 */
function parseNodeNumber(nodeId: string, chapterKey: string): number | null {
  // 移除章節前綴
  const suffix = nodeId.replace(chapterKey + '-', '');
  // 嘗試提取第一個數字
  const numMatch = suffix.match(/^(\d+)/);
  if (numMatch) return parseInt(numMatch[1], 10);
  // yi- 前綴的旁白節點（如 yi2-ch0-yi-1），映射到較高範圍
  const yiMatch = suffix.match(/^yi-(\d+)/);
  if (yiMatch) return parseInt(yiMatch[1], 10) + 100; // offset to avoid collision
  return null;
}

/**
 * 根據節點 ID 在章節場景範圍中查找對應背景圖
 */
function getSceneRangeImage(nodeId: string, chapterKey: string): string | null {
  const ranges = chapterSceneRanges[chapterKey];
  if (!ranges) return null;
  const num = parseNodeNumber(nodeId, chapterKey);
  if (num === null) return null;
  for (const [min, max, image] of ranges) {
    if (num >= min && num <= max) return image;
  }
  return null;
}

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

  // 1. 若節點有 bgImage，嘗試解析為實際圖片背景
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
  } else {
    // 2. 沒有 bgImage 時，先嘗試節點範圍映射（細化場景切換）
    const rangeImage = getSceneRangeImage(nodeId, chapterKey);
    if (rangeImage) {
      result = {
        ...base,
        background: {
          type: 'image',
          value: rangeImage,
          animation: 'breathe',
          overlay: 'noise',
        },
      };
    } else {
      // 3. 最後才 fallback 到章節預設背景圖片
      const defaultImage = chapterDefaultImages[chapterKey];
      if (defaultImage) {
        result = {
          ...base,
          background: {
            type: 'image',
            value: defaultImage,
            animation: 'breathe',
            overlay: 'noise',
          },
        };
      }
    }
  }

  // 3. 自動為角色生成 sprite
  const spriteCharacters = ['protagonist', 'yi', 'xiaochen', 'xiaoman', 'linyi'];
  // 決定顯示哪個角色的立繪
  let spriteCharacter: string | null = null;

  if (node?.speaker && spriteCharacters.includes(node.speaker)) {
    // 直接匹配角色發言
    spriteCharacter = node.speaker;
  } else if (node?.speaker === 'narrator') {
    // 旁白節點：根據上下文顯示主角立繪
    // 如果有 speakerName 包含特定角色名，顯示該角色
    if (node.speakerName) {
      const nameMap: Record<string, string> = {
        '林壹': 'protagonist',
        '伊': 'yi',
        '小陳': 'xiaochen',
        '小曼': 'xiaoman',
        '小滿': 'xiaoman',
      };
      spriteCharacter = nameMap[node.speakerName] || null;
    }
    // 否則在大部分旁白場景中也顯示主角立繪（讓畫面不空）
    if (!spriteCharacter) {
      spriteCharacter = 'protagonist';
    }
  }

  if (spriteCharacter) {
    const expression = node?.expression || 'default';
    const spriteSrc = getCharacterSprite(spriteCharacter, expression);
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
            id: spriteCharacter,
            src: spriteSrc,
            position: positionMap[spriteCharacter] || 'center',
            entrance: entranceMap[spriteCharacter] || 'fade',
            isSpeaking: node?.speaker === spriteCharacter,
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
const match = nodeId.match(/^(yi2-(?:preface|prologue|ch\d+))/);
  return match ? match[1] : 'yi2-preface';
}
