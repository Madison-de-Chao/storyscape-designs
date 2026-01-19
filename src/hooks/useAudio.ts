import { useCallback, useEffect, useRef } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 音訊設定 store
interface AudioSettings {
  masterVolume: number;
  bgmVolume: number;
  sfxVolume: number;
  ambientVolume: number;
  isMuted: boolean;
  setMasterVolume: (volume: number) => void;
  setBgmVolume: (volume: number) => void;
  setSfxVolume: (volume: number) => void;
  setAmbientVolume: (volume: number) => void;
  toggleMute: () => void;
}

// 確保 store 只創建一次
const createAudioSettingsStore = () => create<AudioSettings>()(
  persist(
    (set) => ({
      masterVolume: 0.7,
      bgmVolume: 0.6,
      sfxVolume: 0.8,
      ambientVolume: 0.5,
      isMuted: false,
      setMasterVolume: (volume) => set({ masterVolume: volume }),
      setBgmVolume: (volume) => set({ bgmVolume: volume }),
      setSfxVolume: (volume) => set({ sfxVolume: volume }),
      setAmbientVolume: (volume) => set({ ambientVolume: volume }),
      toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
    }),
    { name: 'arc-zero-audio-settings' }
  )
);

export const useAudioSettings = createAudioSettingsStore();

// 音效類型
export type SFXType = 
  | 'click' 
  | 'hover' 
  | 'select' 
  | 'transition' 
  | 'choice' 
  | 'dialogue_advance'
  | 'menu_open'
  | 'menu_close'
  | 'unlock';

// 場景音效類型
export type AmbientType = 
  | 'void'           // 虛空（作者序、靈魂抽離）
  | 'ferry'          // 渡口（迷霧渡口場景）
  | 'training_ground'// 訓練場（序章前半）
  | 'cosmos'         // 宇宙（元壹境相關）
  | 'night'          // 夜晚（刪除之夜）
  | 'meditation'     // 冥想（王陽明、心即理）
  | 'water';         // 流水（擺渡人場景）

// 背景音樂類型
export type BGMType = 
  | 'title' 
  | 'preface' 
  | 'prologue' 
  | 'chapter_calm' 
  | 'chapter_tension' 
  | 'chapter_emotional'
  | 'revelation'      // 啟示、頓悟時刻
  | 'mysterious';     // 神秘、超自然

// 劇情氛圍類型
export type MoodType = 'calm' | 'tension' | 'emotional' | 'revelation' | 'mysterious';

// 氛圍與 BGM 映射
export const MOOD_TO_BGM: Record<MoodType, BGMType> = {
  calm: 'chapter_calm',
  tension: 'chapter_tension',
  emotional: 'chapter_emotional',
  revelation: 'revelation',
  mysterious: 'mysterious',
};

// 場景節點的氛圍配置
export interface NodeMoodConfig {
  nodeIdPattern: string | RegExp;  // 節點 ID 匹配模式
  mood: MoodType;
}

// 根據劇情內容定義氛圍映射規則
export const nodeMoodMapping: NodeMoodConfig[] = [
  // 作者序 - 平靜冥想
  { nodeIdPattern: /^yi1-preface/, mood: 'calm' },
  
  // 序章 - 哲學敘述，平靜到神秘
  { nodeIdPattern: /^yi1-prologue-([1-9]|1[0-9]|2[0-5])$/, mood: 'calm' },
  { nodeIdPattern: /^yi1-prologue-(2[6-9]|3[0-7])$/, mood: 'mysterious' },
  { nodeIdPattern: /^yi1-prologue-(38|39|40|41)$/, mood: 'tension' },  // 伊登場
  { nodeIdPattern: /^yi1-prologue-(4[2-9]|5[0-7])$/, mood: 'emotional' },
  { nodeIdPattern: /^yi1-prologue-(58|59|60|61|62)$/, mood: 'mysterious' },
  { nodeIdPattern: /^yi1-prologue-(6[3-8]|end)$/, mood: 'tension' },
  
  // 第一章 刪除 - 壓力、緊張、情緒崩潰
  { nodeIdPattern: /^yi1-chapter-1-([1-9]|1[0-4])$/, mood: 'tension' },       // 凌晨壓力
  { nodeIdPattern: /^yi1-chapter-1-(1[5-9]|[2-3][0-9])$/, mood: 'emotional' }, // 回憶過去
  { nodeIdPattern: /^yi1-chapter-1-(4[0-9]|5[0-9]|6[0-9])$/, mood: 'tension' }, // 問心對話
  { nodeIdPattern: /^yi1-chapter-1-(7[0-9]|8[0-9]|9[0-9])$/, mood: 'emotional' },
  { nodeIdPattern: /^yi1-chapter-1-(1[0-9]{2})$/, mood: 'revelation' },  // 頓悟時刻
  
  // 第二章 渡口 - 神秘、平靜交替
  { nodeIdPattern: /^yi1-chapter-2-([1-9]|[1-2][0-9])$/, mood: 'mysterious' },
  { nodeIdPattern: /^yi1-chapter-2-([3-5][0-9])$/, mood: 'calm' },
  { nodeIdPattern: /^yi1-chapter-2-([6-9][0-9])$/, mood: 'revelation' },
  
  // 第三章 真相 - 揭示、情緒
  { nodeIdPattern: /^yi1-chapter-3-([1-9]|[1-3][0-9])$/, mood: 'tension' },
  { nodeIdPattern: /^yi1-chapter-3-([4-6][0-9])$/, mood: 'revelation' },
  { nodeIdPattern: /^yi1-chapter-3-([7-9][0-9])$/, mood: 'emotional' },
  
  // 第四章 命樹 - 情緒、平靜、啟示
  { nodeIdPattern: /^yi1-chapter-4-([1-9]|[1-3][0-9])$/, mood: 'emotional' },
  { nodeIdPattern: /^yi1-chapter-4-([4-6][0-9])$/, mood: 'calm' },
  { nodeIdPattern: /^yi1-chapter-4-([7-9][0-9]|1[0-9]{2})$/, mood: 'revelation' },
];

// 根據節點 ID 獲取氛圍類型
export function getMoodForNode(nodeId: string): MoodType {
  for (const config of nodeMoodMapping) {
    if (typeof config.nodeIdPattern === 'string') {
      if (nodeId === config.nodeIdPattern) return config.mood;
    } else if (config.nodeIdPattern.test(nodeId)) {
      return config.mood;
    }
  }
  return 'calm'; // 預設為平靜
}

// 根據節點 ID 獲取對應的 BGM
export function getBGMForNode(nodeId: string): BGMType {
  const normalizedId = nodeId.replace(/^yi1-/, '');
  
  // 特殊章節前綴處理
  if (normalizedId.startsWith('preface')) return 'preface';
  if (normalizedId.startsWith('prologue')) return 'prologue';
  
  // 根據氛圍映射
  const mood = getMoodForNode(nodeId);
  return MOOD_TO_BGM[mood];
}

// 音訊路徑映射 - 之後替換為實際音檔路徑
const SFX_PATHS: Record<SFXType, string> = {
  click: '/audio/sfx/click.mp3',
  hover: '/audio/sfx/hover.mp3',
  select: '/audio/sfx/select.mp3',
  transition: '/audio/sfx/transition.mp3',
  choice: '/audio/sfx/choice.mp3',
  dialogue_advance: '/audio/sfx/dialogue_advance.mp3',
  menu_open: '/audio/sfx/menu_open.mp3',
  menu_close: '/audio/sfx/menu_close.mp3',
  unlock: '/audio/sfx/unlock.mp3',
};

const AMBIENT_PATHS: Record<AmbientType, string> = {
  void: '/audio/ambient/void.mp3',
  ferry: '/audio/ambient/ferry.wav',
  training_ground: '/audio/ambient/training_ground.mp3',
  cosmos: '/audio/ambient/cosmos.mp3',
  night: '/audio/ambient/night.mp3',
  meditation: '/audio/ambient/meditation.mp3',
  water: '/audio/ambient/water.wav',
};

// 場景圖片與環境音效的映射
export interface SceneAmbientConfig {
  sceneAlt: string;        // 對應 sceneImages 的 alt
  ambientType: AmbientType;
  fadeInDuration?: number; // 淡入時間（毫秒）
}

export const sceneAmbientMapping: SceneAmbientConfig[] = [
  { sceneAlt: '作者序', ambientType: 'void' },
  { sceneAlt: '訓練場', ambientType: 'training_ground' },
  { sceneAlt: '問心初登場', ambientType: 'ferry' },
  { sceneAlt: '刪除之夜', ambientType: 'night' },
  { sceneAlt: '刪除鍵特寫', ambientType: 'night' },
  { sceneAlt: '靈魂抽離', ambientType: 'void' },
  { sceneAlt: '迷霧渡口', ambientType: 'ferry' },
  { sceneAlt: '擺渡人', ambientType: 'water' },
  { sceneAlt: '王陽明', ambientType: 'meditation' },
  { sceneAlt: '心即理', ambientType: 'meditation' },
];

// 根據場景名稱獲取環境音效類型
export function getAmbientTypeForScene(sceneAlt: string): AmbientType | null {
  const config = sceneAmbientMapping.find(c => c.sceneAlt === sceneAlt);
  return config?.ambientType || null;
}

const BGM_PATHS: Record<BGMType, string> = {
  title: '/audio/bgm/title.mp3',
  preface: '/audio/bgm/preface.mp3',
  prologue: '/audio/bgm/prologue.mp3',
  chapter_calm: '/audio/bgm/calm.wav',
  chapter_tension: '/audio/bgm/chapter_tension.mp3',
  chapter_emotional: '/audio/bgm/emotional.wav',
  revelation: '/audio/bgm/revelation.mp3',
  mysterious: '/audio/bgm/mysterious.mp3',
};

// 音效播放 hook
export const useSFX = () => {
  const { masterVolume, sfxVolume, isMuted } = useAudioSettings();
  const audioCache = useRef<Map<string, HTMLAudioElement>>(new Map());

  const playSFX = useCallback((type: SFXType) => {
    if (isMuted) return;

    const path = SFX_PATHS[type];
    if (!path) return;

    // 從快取取得或建立新的 Audio 實例
    let audio = audioCache.current.get(path);
    if (!audio) {
      audio = new Audio(path);
      audioCache.current.set(path, audio);
    }

    // 重置並播放
    audio.currentTime = 0;
    audio.volume = masterVolume * sfxVolume;
    audio.play().catch(() => {
      // 忽略自動播放限制錯誤
    });
  }, [masterVolume, sfxVolume, isMuted]);

  return { playSFX };
};

// 全域音訊管理器（避免多個實例問題）
class AudioManager {
  private bgmAudio: HTMLAudioElement | null = null;
  private ambientAudio: HTMLAudioElement | null = null;
  private currentBGM: BGMType | null = null;
  private currentAmbient: AmbientType | null = null;

  playBGM(type: BGMType, volume: number, fadeIn = true) {
    const path = BGM_PATHS[type];
    if (!path) return;

    // 如果已經在播放同一首，只更新音量
    if (this.currentBGM === type && this.bgmAudio) {
      this.bgmAudio.volume = volume;
      return;
    }

    // 停止當前播放
    this.stopBGM(false);

    const audio = new Audio(path);
    audio.loop = true;
    audio.volume = fadeIn ? 0 : volume;
    this.bgmAudio = audio;
    this.currentBGM = type;

    audio.play().then(() => {
      if (fadeIn && volume > 0) {
        let currentVol = 0;
        const fadeInterval = setInterval(() => {
          if (!this.bgmAudio || this.bgmAudio !== audio) {
            clearInterval(fadeInterval);
            return;
          }
          currentVol += 0.05;
          if (currentVol < volume) {
            audio.volume = currentVol;
          } else {
            audio.volume = volume;
            clearInterval(fadeInterval);
          }
        }, 100);
      }
    }).catch(() => {});
  }

  stopBGM(fadeOut = true) {
    if (!this.bgmAudio) return;

    const audio = this.bgmAudio;

    if (fadeOut && audio.volume > 0) {
      const fadeInterval = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(audio.volume - 0.05, 0);
        } else {
          audio.pause();
          clearInterval(fadeInterval);
        }
      }, 100);
    } else {
      audio.pause();
    }

    this.bgmAudio = null;
    this.currentBGM = null;
  }

  updateBGMVolume(volume: number) {
    if (this.bgmAudio) {
      this.bgmAudio.volume = volume;
    }
  }

  playAmbient(type: AmbientType, volume: number) {
    const path = AMBIENT_PATHS[type];
    if (!path) return;

    if (this.currentAmbient === type && this.ambientAudio) {
      this.ambientAudio.volume = volume;
      return;
    }

    this.stopAmbient();

    const audio = new Audio(path);
    audio.loop = true;
    audio.volume = volume;
    this.ambientAudio = audio;
    this.currentAmbient = type;

    audio.play().catch(() => {});
  }

  stopAmbient() {
    if (this.ambientAudio) {
      this.ambientAudio.pause();
      this.ambientAudio = null;
      this.currentAmbient = null;
    }
  }

  updateAmbientVolume(volume: number) {
    if (this.ambientAudio) {
      this.ambientAudio.volume = volume;
    }
  }

  getCurrentBGM() {
    return this.currentBGM;
  }

  getCurrentAmbient() {
    return this.currentAmbient;
  }
}

// 單例
const audioManager = new AudioManager();

// 背景音樂播放 hook
export const useBGM = () => {
  const { masterVolume, bgmVolume, isMuted } = useAudioSettings();
  const effectiveVolume = isMuted ? 0 : masterVolume * bgmVolume;

  // 更新音量
  useEffect(() => {
    audioManager.updateBGMVolume(effectiveVolume);
  }, [effectiveVolume]);

  const playBGM = useCallback((type: BGMType, fadeIn = true) => {
    audioManager.playBGM(type, effectiveVolume, fadeIn);
  }, [effectiveVolume]);

  const stopBGM = useCallback((fadeOut = true) => {
    audioManager.stopBGM(fadeOut);
  }, []);

  return { playBGM, stopBGM, currentBGM: audioManager.getCurrentBGM() };
};

// 環境音效播放 hook
export const useAmbient = () => {
  const { masterVolume, ambientVolume, isMuted } = useAudioSettings();
  const effectiveVolume = isMuted ? 0 : masterVolume * ambientVolume;

  // 更新音量
  useEffect(() => {
    audioManager.updateAmbientVolume(effectiveVolume);
  }, [effectiveVolume]);

  const playAmbient = useCallback((type: AmbientType) => {
    audioManager.playAmbient(type, effectiveVolume);
  }, [effectiveVolume]);

  const stopAmbient = useCallback(() => {
    audioManager.stopAmbient();
  }, []);

  return { playAmbient, stopAmbient, currentAmbient: audioManager.getCurrentAmbient() };
};
