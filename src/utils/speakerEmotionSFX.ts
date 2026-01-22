// 說話者預設情緒音效配置
// 每個角色可設定多個隨機選擇的音效，增加變化性

import type { EmotionSFXType } from '@/hooks/useAudio';

// 說話者類型（與 gameStore 中的 SpeakerType 同步）
export type SpeakerType = 
  | 'narrator' 
  | 'protagonist' 
  | 'yi' 
  | 'mentor' 
  | 'wenxin' 
  | 'wendu'
  | 'wangyangming'
  | 'sushi'
  | 'simaqian'
  | 'wuzetian'
  | 'libai'
  | 'mandela'
  | 'caesar'
  | 'cleopatra'
  | 'lincoln'
  | 'jobs'
  | 'vangogh'
  | 'helenkeller'
  | 'system';

// 說話者情緒音效配置
interface SpeakerEmotionConfig {
  // 預設情緒音效（隨機選擇一個）
  default?: EmotionSFXType[];
  // 機率（0-1，0 表示不播放）
  probability?: number;
  // 特殊情境觸發的音效
  onEffect?: {
    glitch?: EmotionSFXType[];
    glow?: EmotionSFXType[];
  };
}

// 說話者預設情緒音效映射
export const speakerEmotionSFXConfig: Record<SpeakerType, SpeakerEmotionConfig> = {
  // 問心 - 神秘、溫柔、有時嘲諷
  wenxin: {
    default: ['gentle_laugh', 'gentle_laugh_1', 'gentle_laugh_2'],
    probability: 0.25,
    onEffect: {
      glow: ['mysterious_whisper', 'mysterious_whisper_1'],
      glitch: ['mockery', 'evil_giggle'],
    },
  },

  // 伊 - 神秘、邪惡、誘惑
  yi: {
    default: ['evil_giggle', 'evil_giggle_1', 'evil_giggle_2', 'seductive', 'seductive_1'],
    probability: 0.35,
    onEffect: {
      glitch: ['evil_giggle', 'evil_giggle_1', 'mockery'],
      glow: ['mysterious_whisper', 'seductive'],
    },
  },

  // 主角 - 恐懼、驚訝、哀傷
  protagonist: {
    default: ['sad_sigh', 'sad_sigh_1'],
    probability: 0.15,
    onEffect: {
      glitch: ['fear', 'fear_1', 'surprise'],
      glow: ['surprise'],
    },
  },

  // 旁白 - 偶爾的神秘氛圍
  narrator: {
    default: [],
    probability: 0,
    onEffect: {
      glow: ['mysterious_whisper'],
      glitch: ['fear'],
    },
  },

  // 問渡 - 平靜、神秘
  wendu: {
    default: ['mysterious_whisper', 'mysterious_whisper_1'],
    probability: 0.2,
    onEffect: {
      glow: ['mysterious_whisper'],
    },
  },

  // 歷史人物 - 偶爾溫柔笑聲
  mentor: {
    default: ['gentle_laugh', 'gentle_laugh_1'],
    probability: 0.1,
  },

  wangyangming: {
    default: ['gentle_laugh'],
    probability: 0.1,
    onEffect: {
      glow: ['mysterious_whisper'],
    },
  },

  sushi: {
    default: ['gentle_laugh', 'gentle_laugh_1'],
    probability: 0.15,
  },

  simaqian: {
    default: ['sad_sigh'],
    probability: 0.1,
    onEffect: {
      glow: ['mysterious_whisper'],
    },
  },

  wuzetian: {
    default: ['mockery', 'seductive'],
    probability: 0.2,
    onEffect: {
      glow: ['seductive', 'seductive_1'],
    },
  },

  libai: {
    default: ['gentle_laugh', 'gentle_laugh_1', 'gentle_laugh_2'],
    probability: 0.2,
  },

  mandela: {
    default: ['gentle_laugh'],
    probability: 0.1,
    onEffect: {
      glow: ['mysterious_whisper'],
    },
  },

  caesar: {
    default: ['mockery'],
    probability: 0.1,
  },

  cleopatra: {
    default: ['seductive', 'gentle_laugh'],
    probability: 0.15,
    onEffect: {
      glow: ['seductive'],
    },
  },

  lincoln: {
    default: ['gentle_laugh'],
    probability: 0.08,
  },

  jobs: {
    default: ['gentle_laugh'],
    probability: 0.08,
  },

  vangogh: {
    default: ['sad_sigh'],
    probability: 0.1,
  },

  helenkeller: {
    default: ['gentle_laugh'],
    probability: 0.1,
  },

  system: {
    default: [],
    probability: 0,
  },
};

/**
 * 根據說話者和效果類型獲取情緒音效
 * @param speaker 說話者
 * @param effect 可選的節點效果
 * @param explicitSFX 節點明確指定的音效（優先級最高）
 * @returns 情緒音效類型或 null
 */
export function getSpeakerEmotionSFX(
  speaker: SpeakerType,
  effect?: string | null,
  explicitSFX?: EmotionSFXType | null
): EmotionSFXType | null {
  // 優先使用節點明確指定的音效
  if (explicitSFX) {
    return explicitSFX;
  }

  const config = speakerEmotionSFXConfig[speaker];
  if (!config) return null;

  // 檢查是否有效果觸發的特殊音效
  if (effect && config.onEffect) {
    const effectSFXList = config.onEffect[effect as 'glitch' | 'glow'];
    if (effectSFXList && effectSFXList.length > 0) {
      // 效果觸發的音效有更高的播放機率（50%）
      if (Math.random() < 0.5) {
        return effectSFXList[Math.floor(Math.random() * effectSFXList.length)];
      }
    }
  }

  // 預設音效根據機率播放
  const defaultList = config.default || [];
  const probability = config.probability || 0;

  if (defaultList.length > 0 && Math.random() < probability) {
    return defaultList[Math.floor(Math.random() * defaultList.length)];
  }

  return null;
}

/**
 * 檢查是否應該播放情緒音效（避免連續播放）
 */
let lastPlayedTime = 0;
const MIN_INTERVAL_MS = 3000; // 最小間隔 3 秒

export function shouldPlayEmotionSFX(): boolean {
  const now = Date.now();
  if (now - lastPlayedTime < MIN_INTERVAL_MS) {
    return false;
  }
  lastPlayedTime = now;
  return true;
}
