import { useCallback, useEffect, useRef, useState } from 'react';
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

export const useAudioSettings = create<AudioSettings>()(
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
  | 'void' 
  | 'ferry' 
  | 'training_ground' 
  | 'cosmos';

// 背景音樂類型
export type BGMType = 
  | 'title' 
  | 'preface' 
  | 'prologue' 
  | 'chapter_calm' 
  | 'chapter_tension' 
  | 'chapter_emotional';

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
  ferry: '/audio/ambient/ferry.mp3',
  training_ground: '/audio/ambient/training_ground.mp3',
  cosmos: '/audio/ambient/cosmos.mp3',
};

const BGM_PATHS: Record<BGMType, string> = {
  title: '/audio/bgm/title.mp3',
  preface: '/audio/bgm/preface.mp3',
  prologue: '/audio/bgm/prologue.mp3',
  chapter_calm: '/audio/bgm/chapter_calm.mp3',
  chapter_tension: '/audio/bgm/chapter_tension.mp3',
  chapter_emotional: '/audio/bgm/chapter_emotional.mp3',
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

// 背景音樂播放 hook
export const useBGM = () => {
  const { masterVolume, bgmVolume, isMuted } = useAudioSettings();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentBGM, setCurrentBGM] = useState<BGMType | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 更新音量
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : masterVolume * bgmVolume;
    }
  }, [masterVolume, bgmVolume, isMuted]);

  const playBGM = useCallback((type: BGMType, fadeIn = true) => {
    const path = BGM_PATHS[type];
    if (!path) return;

    // 如果已經在播放同一首，不重新開始
    if (currentBGM === type && isPlaying) return;

    // 停止當前播放
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(path);
    audio.loop = true;
    audio.volume = fadeIn ? 0 : (isMuted ? 0 : masterVolume * bgmVolume);
    audioRef.current = audio;
    setCurrentBGM(type);

    audio.play().then(() => {
      setIsPlaying(true);
      
      // 淡入效果
      if (fadeIn && !isMuted) {
        const targetVolume = masterVolume * bgmVolume;
        const fadeInterval = setInterval(() => {
          if (audio.volume < targetVolume - 0.05) {
            audio.volume = Math.min(audio.volume + 0.05, targetVolume);
          } else {
            audio.volume = targetVolume;
            clearInterval(fadeInterval);
          }
        }, 100);
      }
    }).catch(() => {
      // 忽略自動播放限制錯誤
    });
  }, [currentBGM, isPlaying, masterVolume, bgmVolume, isMuted]);

  const stopBGM = useCallback((fadeOut = true) => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    if (fadeOut) {
      const fadeInterval = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(audio.volume - 0.05, 0);
        } else {
          audio.pause();
          audioRef.current = null;
          setCurrentBGM(null);
          setIsPlaying(false);
          clearInterval(fadeInterval);
        }
      }, 100);
    } else {
      audio.pause();
      audioRef.current = null;
      setCurrentBGM(null);
      setIsPlaying(false);
    }
  }, []);

  const pauseBGM = useCallback(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const resumeBGM = useCallback(() => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  }, [isPlaying]);

  // 清理
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return { playBGM, stopBGM, pauseBGM, resumeBGM, currentBGM, isPlaying };
};

// 環境音效播放 hook
export const useAmbient = () => {
  const { masterVolume, ambientVolume, isMuted } = useAudioSettings();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentAmbient, setCurrentAmbient] = useState<AmbientType | null>(null);

  // 更新音量
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : masterVolume * ambientVolume;
    }
  }, [masterVolume, ambientVolume, isMuted]);

  const playAmbient = useCallback((type: AmbientType) => {
    const path = AMBIENT_PATHS[type];
    if (!path) return;

    if (currentAmbient === type) return;

    // 停止當前播放
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(path);
    audio.loop = true;
    audio.volume = isMuted ? 0 : masterVolume * ambientVolume;
    audioRef.current = audio;
    setCurrentAmbient(type);

    audio.play().catch(() => {});
  }, [currentAmbient, masterVolume, ambientVolume, isMuted]);

  const stopAmbient = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setCurrentAmbient(null);
    }
  }, []);

  // 清理
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return { playAmbient, stopAmbient, currentAmbient };
};
