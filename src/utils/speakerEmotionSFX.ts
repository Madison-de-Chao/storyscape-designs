// 說話者預設情緒音效配置
// 每個角色可設定多個隨機選擇的音效，增加變化性
// 男性角色使用 _male 後綴音效，女性角色使用原版音效

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
  | 'system';

// 說話者情緒音效配置
interface SpeakerEmotionConfig {
  // 預設情緒音效（隨機選擇一個）
  default?: EmotionSFXType[];
  // 基礎機率（0-1，0 表示不播放）
  probability?: number;
  // 特殊情境觸發的音效
  onEffect?: {
    glitch?: EmotionSFXType[];
    glow?: EmotionSFXType[];
    shake?: EmotionSFXType[];
    flash?: EmotionSFXType[];
  };
}

// 特效觸發時的機率加成（更重要的對話更容易播放音效）
const EFFECT_PROBABILITY_BOOST: Record<string, number> = {
  glitch: 0.75,   // glitch 效果：75% 機率播放
  glow: 0.65,     // glow 效果：65% 機率播放
  shake: 0.60,    // shake 效果：60% 機率播放
  flash: 0.55,    // flash 效果：55% 機率播放
  'fade-out': 0.40,
  'fade-in-slow': 0.30,
};

// ============= 音效池定義 =============
// 女聲音效池（用於問心、伊、克麗奧佩脫拉、武則天、海倫凱勒）
const FEMALE_GENTLE_LAUGH: EmotionSFXType[] = ['gentle_laugh', 'gentle_laugh_1', 'gentle_laugh_2'];
const FEMALE_EVIL_GIGGLE: EmotionSFXType[] = ['evil_giggle', 'evil_giggle_1', 'evil_giggle_2'];
const FEMALE_SEDUCTIVE: EmotionSFXType[] = ['seductive', 'seductive_1'];
const FEMALE_MYSTERIOUS_WHISPER: EmotionSFXType[] = ['mysterious_whisper', 'mysterious_whisper_1'];
const FEMALE_SAD_SIGH: EmotionSFXType[] = ['sad_sigh', 'sad_sigh_1'];
const FEMALE_MOCKERY: EmotionSFXType[] = ['mockery'];

// 男聲音效池（用於王陽明、蘇軾、司馬遷、李白、曼德拉、凱撒、林肯、賈伯斯、梵谷）
const MALE_GENTLE_LAUGH: EmotionSFXType[] = ['gentle_laugh_male'];
const MALE_COLD_LAUGH: EmotionSFXType[] = ['cold_laugh_male'];
const MALE_MYSTERIOUS_WHISPER: EmotionSFXType[] = ['mysterious_whisper_male', 'mysterious_whisper_male_1', 'mysterious_whisper_male_2'];
const MALE_FEAR: EmotionSFXType[] = ['fear_male', 'fear_male_1', 'fear_male_2'];
const MALE_FRUSTRATION: EmotionSFXType[] = ['frustration_male'];
const MALE_CONTEMPT: EmotionSFXType[] = ['contempt_male'];
const MALE_EXCITEMENT: EmotionSFXType[] = ['excitement_male'];

// ============= 技術/環境音效池 =============
// 林肯劈柴
const WOOD_CHOP: EmotionSFXType[] = ['wood_chop', 'wood_chop_1'];
// 數位崩潰（刪除場景、系統錯誤）
const DIGITAL_BREAK: EmotionSFXType[] = ['digital_break', 'digital_break_1', 'digital_break_2', 'digital_break_3'];
// 神聖鐘聲（頓悟、啟示時刻）
const HOLY_BELL: EmotionSFXType[] = ['holy_bell', 'holy_bell_1', 'holy_bell_2', 'holy_bell_3'];
// 耳鳴（恐懼、緊張、創傷回憶）
const EAR_RINGING: EmotionSFXType[] = ['ear_ringing', 'ear_ringing_1', 'ear_ringing_2'];
// 鳥鳴（平靜、清晨、自然場景）
const BIRDS_CHIRPING: EmotionSFXType[] = ['birds_chirping', 'birds_chirping_1'];
// 細雨（憂鬱、沉思、回憶場景）
const RAIN_LIGHT: EmotionSFXType[] = ['rain_light', 'rain_light_1', 'rain_light_2'];

// 說話者預設情緒音效映射
export const speakerEmotionSFXConfig: Record<SpeakerType, SpeakerEmotionConfig> = {
  // ============= 女性角色 =============
  
  // 問心 - 神秘、溫柔、有時嘲諷（女聲）
  wenxin: {
    default: FEMALE_GENTLE_LAUGH,
    probability: 0.30, // 提高基礎機率
    onEffect: {
      glow: FEMALE_MYSTERIOUS_WHISPER,
      glitch: [...FEMALE_MOCKERY, ...FEMALE_EVIL_GIGGLE],
      shake: FEMALE_MYSTERIOUS_WHISPER,
    },
  },

  // 伊 - 神秘、邪惡、誘惑（女聲）
  yi: {
    default: [...FEMALE_EVIL_GIGGLE, ...FEMALE_SEDUCTIVE],
    probability: 0.45, // 伊是重要角色，提高機率
    onEffect: {
      glitch: [...FEMALE_EVIL_GIGGLE, ...FEMALE_MOCKERY],
      glow: [...FEMALE_MYSTERIOUS_WHISPER, ...FEMALE_SEDUCTIVE],
      shake: FEMALE_EVIL_GIGGLE,
      flash: FEMALE_MOCKERY,
    },
  },

  // 武則天 - 威嚴、誘惑（女聲）
  wuzetian: {
    default: [...FEMALE_MOCKERY, ...FEMALE_SEDUCTIVE],
    probability: 0.25,
    onEffect: {
      glow: FEMALE_SEDUCTIVE,
      shake: FEMALE_MOCKERY,
    },
  },

  // 克麗奧佩脫拉 - 誘惑、溫柔（女聲）
  cleopatra: {
    default: [...FEMALE_SEDUCTIVE, ...FEMALE_GENTLE_LAUGH],
    probability: 0.20,
    onEffect: {
      glow: FEMALE_SEDUCTIVE,
    },
  },


  // ============= 男性角色 =============
  
  // 王陽明 - 智慧、神秘（男聲）
  wangyangming: {
    default: MALE_GENTLE_LAUGH,
    probability: 0.12,
    onEffect: {
      glow: MALE_MYSTERIOUS_WHISPER,
    },
  },

  // 蘇軾 - 豁達、溫暖（男聲）
  sushi: {
    default: MALE_GENTLE_LAUGH,
    probability: 0.18,
    onEffect: {
      glow: MALE_EXCITEMENT,
    },
  },

  // 司馬遷 - 堅韌、沉穩（男聲）
  simaqian: {
    default: MALE_FRUSTRATION,
    probability: 0.12,
    onEffect: {
      glow: MALE_MYSTERIOUS_WHISPER,
    },
  },

  // 李白 - 豪放、瀟灑（男聲）
  libai: {
    default: [...MALE_GENTLE_LAUGH, ...MALE_EXCITEMENT],
    probability: 0.22,
    onEffect: {
      glow: MALE_EXCITEMENT,
    },
  },

  // 曼德拉 - 寬容、堅定（男聲）
  mandela: {
    default: MALE_GENTLE_LAUGH,
    probability: 0.12,
    onEffect: {
      glow: MALE_MYSTERIOUS_WHISPER,
    },
  },

  // 凱撒 - 權威、嘲諷（男聲）
  caesar: {
    default: [...MALE_COLD_LAUGH, ...MALE_CONTEMPT],
    probability: 0.12,
  },

  // 林肯 - 堅韌、溫暖（男聲）+ 劈柴音效
  lincoln: {
    default: [...MALE_GENTLE_LAUGH, ...WOOD_CHOP],
    probability: 0.15,
    onEffect: {
      glow: HOLY_BELL, // 頓悟時刻播放鐘聲
    },
  },

  // 賈伯斯 - 激情、專注（男聲）
  jobs: {
    default: MALE_EXCITEMENT,
    probability: 0.1,
  },

  // 梵谷 - 哀傷、內斂（男聲）
  vangogh: {
    default: MALE_FRUSTRATION,
    probability: 0.12,
  },

  // 問渡 - 平靜、神秘（男聲）
  wendu: {
    default: MALE_MYSTERIOUS_WHISPER,
    probability: 0.2,
    onEffect: {
      glow: MALE_MYSTERIOUS_WHISPER,
    },
  },

  // 導師（通用）- 溫和（男聲）
  mentor: {
    default: MALE_GENTLE_LAUGH,
    probability: 0.1,
  },

  // ============= 中性/特殊角色 =============
  
  // 主角（女性）- 恐懼、驚訝、哀傷 + 環境音效
  protagonist: {
    default: FEMALE_SAD_SIGH,
    probability: 0.20, // 提高基礎機率
    onEffect: {
      glitch: ['fear', 'fear_1', 'surprise', ...DIGITAL_BREAK, ...EAR_RINGING],
      glow: ['surprise', ...HOLY_BELL],
      shake: ['fear', 'fear_1', ...EAR_RINGING],
      flash: ['surprise', ...HOLY_BELL],
    },
  },

  // 旁白 - 偶爾的神秘氛圍（混合男女神秘低語）+ 環境音效
  narrator: {
    default: [],
    probability: 0.05, // 旁白也有機會觸發
    onEffect: {
      glow: [...FEMALE_MYSTERIOUS_WHISPER, ...MALE_MYSTERIOUS_WHISPER, ...HOLY_BELL],
      glitch: [...MALE_FEAR, 'fear', ...DIGITAL_BREAK, ...EAR_RINGING],
      shake: [...MALE_MYSTERIOUS_WHISPER, ...EAR_RINGING],
      flash: HOLY_BELL, // 閃光時刻播放鐘聲
    },
  },

  // 系統 - 數位崩潰音效
  system: {
    default: DIGITAL_BREAK,
    probability: 0.6, // 系統訊息有較高機率播放數位音效
    onEffect: {
      glitch: DIGITAL_BREAK,
      shake: EAR_RINGING,
    },
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
    const effectKey = effect as keyof typeof config.onEffect;
    const effectSFXList = config.onEffect[effectKey];
    
    if (effectSFXList && effectSFXList.length > 0) {
      // 根據特效類型使用對應的高機率（重要對話更容易觸發）
      const effectProbability = EFFECT_PROBABILITY_BOOST[effect] || 0.5;
      if (Math.random() < effectProbability) {
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
