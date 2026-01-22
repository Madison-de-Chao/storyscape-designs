import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type StoryPart = 'yi' | 'yi-part2'; // 壹 = yi, 伊 = yi-part2

export interface Choice {
  id: string;
  text: string;
  arcChange: number;
  shadowChange: number;
  nextNodeId: string;
}

// 情緒音效類型（與 useAudio.ts 中的 EmotionSFXType 保持一致）
export type EmotionSFXKey = 
  | 'gentle_laugh' | 'gentle_laugh_1' | 'gentle_laugh_2'
  | 'frustration' | 'frustration_1'
  | 'seductive' | 'seductive_1'
  | 'fear' | 'fear_1'
  | 'surprise'
  | 'sad_sigh' | 'sad_sigh_1'
  | 'evil_giggle' | 'evil_giggle_1' | 'evil_giggle_2'
  | 'mysterious_whisper' | 'mysterious_whisper_1'
  | 'mockery';

// 特殊場景類型（用於觸發全螢幕視覺效果）
export type SpecialSceneType = 
  | 'intro'      // 直排禪意開場動畫
  | 'collapse'   // 崩潰刪除效果（故障閃爍）
  | 'zen'        // 禪意時刻（全螢幕留白）
  | 'revelation'; // 啟示時刻（光芒綻放）

// 禪意時刻主題
export type ZenTheme = 'golden' | 'moonlight' | 'dawn' | 'ink';

// 啟示時刻主題
export type RevelationTheme = 'golden' | 'silver' | 'aurora' | 'celestial';

export interface DialogueNode {
  id: string;
  speaker: 'narrator' | 'protagonist' | 'yi' | 'mentor' | 'wenxin' | 'wendu' | 'sushi' | 'wangyangming' | 'simaqian' | 'wuzetian' | 'libai' | 'mandela' | 'caesar' | 'cleopatra' | 'lincoln' | 'jobs' | 'vangogh' | 'helenkeller';
  speakerName?: string;
  text: string;
  choices?: Choice[];
  nextNodeId?: string | null;
  effect?: 'glitch' | 'glow' | 'fade';
  arcChange?: number;
  // 明確指定此節點播放的情緒音效（覆蓋說話者預設）
  emotionSFX?: EmotionSFXKey;
  // 特殊場景：觸發全螢幕視覺效果
  specialScene?: SpecialSceneType;
  // 禪意時刻的配置（僅當 specialScene === 'zen' 時使用）
  zenConfig?: {
    text: string;          // 顯示的主文字
    subtitle?: string;     // 副標題（如作者、出處）
    theme?: ZenTheme;      // 視覺主題
    duration?: number;     // 持續時間（毫秒）
  };
  // 啟示時刻的配置（僅當 specialScene === 'revelation' 時使用）
  revelationConfig?: {
    text: string;          // 顯示的主文字
    subtitle?: string;     // 副標題
    theme?: RevelationTheme; // 視覺主題（golden/silver/aurora/celestial）
    duration?: number;     // 持續時間（毫秒）
  };
}

export interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  mentorName?: string;
  theme: string;
  color: string;
  nodes: DialogueNode[];
}

interface PartProgress {
  arcValue: number;
  currentChapter: number;
  currentNodeId: string;
  colorsCollected: string[];
  choicesHistory: Record<string, string>;
  shadowLevel: number;
  hasStarted: boolean;
  // 閱讀進度追蹤：記錄每個章節已讀過的節點
  readNodes: Record<string, string[]>; // { chapterId: [nodeId, nodeId, ...] }
  lastReadAt: number | null; // 上次閱讀時間戳
  // 已解鎖的圖片 URL 列表
  unlockedImages: string[];
}

interface GameState {
  // 當前遊玩的部
  currentPart: StoryPart;
  isPlaying: boolean;
  
  // 第一部「壹」的進度
  yiProgress: PartProgress;
  
  // 第二部「伊」的進度
  yiPart2Progress: PartProgress;
  
  // 動作
  startGame: (part: StoryPart) => void;
  resetGame: () => void;
  resetPart: (part: StoryPart) => void;
  returnToTitle: () => void;
  setCurrentNode: (nodeId: string) => void;
  makeChoice: (choice: Choice) => void;
  advanceToNextNode: (nextNodeId: string) => void;
  setChapter: (chapter: number) => void;
  collectColor: (color: string) => void;
  markNodeAsRead: (nodeId: string) => void;
  getChapterProgress: (chapterId: string) => number;
  unlockImage: (imageUrl: string) => void;
  
  // 獲取當前進度
  getCurrentProgress: () => PartProgress;
}

const defaultProgress: PartProgress = {
  arcValue: 180,
  currentChapter: 0,
  currentNodeId: 'preface-1', // 從作者序開始（與 prefaceNodes 的 ID 對應）
  colorsCollected: [],
  choicesHistory: {},
  shadowLevel: 0,
  hasStarted: false,
  readNodes: {},
  lastReadAt: null,
  unlockedImages: [],
};

const defaultPart2Progress: PartProgress = {
  arcValue: 180,
  currentChapter: 0,
  currentNodeId: 'yi-prologue-1',
  colorsCollected: [],
  choicesHistory: {},
  shadowLevel: 0,
  hasStarted: false,
  readNodes: {},
  lastReadAt: null,
  unlockedImages: [],
};

// 每個章節的總節點數（用於計算閱讀百分比）
const chapterNodeCounts: Record<string, number> = {
  'preface': 25,
  'prologue': 35,
  'chapter-1': 50,
  'chapter-2': 60,
  'chapter-3': 50,
  'chapter-4': 60,
  'chapter-5': 60,
  'chapter-6': 60,
  'chapter-7': 70,
  'chapter-8': 50,
  'chapter-9': 50,
  'chapter-10': 50,
  'chapter-11': 50,
  'chapter-12': 87,
};

// 根據節點 ID 獲取章節 ID
function getChapterIdFromNodeId(nodeId: string): string {
  // 統一移除 yi1- 前綴
  const normalizedId = nodeId.replace(/^yi1-/, '');
  
  if (normalizedId.startsWith('preface')) return 'preface';
  if (normalizedId.startsWith('prologue')) return 'prologue';
  
  // 支援兩種格式：chapter-1- 和 chapter1-
  const matchDash = normalizedId.match(/^chapter-(\d+)/);
  if (matchDash) return `chapter-${matchDash[1]}`;
  
  const matchNoDash = normalizedId.match(/^chapter(\d+)/);
  if (matchNoDash) return `chapter-${matchNoDash[1]}`;
  
  return 'unknown';
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      currentPart: 'yi',
      isPlaying: false,
      yiProgress: { ...defaultProgress },
      yiPart2Progress: { ...defaultPart2Progress },

      startGame: (part: StoryPart) => {
        const state = get();
        if (part === 'yi') {
          set({
            currentPart: 'yi',
            isPlaying: true,
            yiProgress: {
              ...state.yiProgress,
              hasStarted: true,
            },
          });
        } else {
          set({
            currentPart: 'yi-part2',
            isPlaying: true,
            yiPart2Progress: {
              ...state.yiPart2Progress,
              hasStarted: true,
            },
          });
        }
      },

      resetGame: () => set({
        currentPart: 'yi',
        isPlaying: false,
        yiProgress: { ...defaultProgress },
        yiPart2Progress: { ...defaultPart2Progress },
      }),

      resetPart: (part: StoryPart) => {
        if (part === 'yi') {
          set({ yiProgress: { ...defaultProgress } });
        } else {
          set({ yiPart2Progress: { ...defaultPart2Progress } });
        }
      },

      returnToTitle: () => set({ isPlaying: false }),

      setCurrentNode: (nodeId: string) => {
        const state = get();
        if (state.currentPart === 'yi') {
          set({
            yiProgress: { ...state.yiProgress, currentNodeId: nodeId },
          });
        } else {
          set({
            yiPart2Progress: { ...state.yiPart2Progress, currentNodeId: nodeId },
          });
        }
      },

      makeChoice: (choice: Choice) => {
        const state = get();
        const progress = state.getCurrentProgress();
        const newArcValue = Math.max(0, Math.min(180, progress.arcValue + choice.arcChange));
        const newShadowLevel = Math.max(-100, Math.min(100, progress.shadowLevel + choice.shadowChange));
        
        const updatedProgress = {
          ...progress,
          arcValue: newArcValue,
          shadowLevel: newShadowLevel,
          currentNodeId: choice.nextNodeId,
          choicesHistory: {
            ...progress.choicesHistory,
            [choice.id]: choice.text,
          },
        };

        if (state.currentPart === 'yi') {
          set({ yiProgress: updatedProgress });
        } else {
          set({ yiPart2Progress: updatedProgress });
        }
      },

      advanceToNextNode: (nextNodeId: string) => {
        const state = get();
        if (state.currentPart === 'yi') {
          set({
            yiProgress: { ...state.yiProgress, currentNodeId: nextNodeId },
          });
        } else {
          set({
            yiPart2Progress: { ...state.yiPart2Progress, currentNodeId: nextNodeId },
          });
        }
      },

      setChapter: (chapter: number) => {
        const state = get();
        if (state.currentPart === 'yi') {
          set({
            yiProgress: { ...state.yiProgress, currentChapter: chapter },
          });
        } else {
          set({
            yiPart2Progress: { ...state.yiPart2Progress, currentChapter: chapter },
          });
        }
      },

      collectColor: (color: string) => {
        const state = get();
        const progress = state.getCurrentProgress();
        if (!progress.colorsCollected.includes(color)) {
          const updatedProgress = {
            ...progress,
            colorsCollected: [...progress.colorsCollected, color],
          };
          if (state.currentPart === 'yi') {
            set({ yiProgress: updatedProgress });
          } else {
            set({ yiPart2Progress: updatedProgress });
          }
        }
      },

      markNodeAsRead: (nodeId: string) => {
        const state = get();
        const progress = state.getCurrentProgress();
        const chapterId = getChapterIdFromNodeId(nodeId);
        
        // 確保 readNodes 存在（處理舊的持久化狀態）
        const readNodes = progress.readNodes || {};
        const currentReadNodes = readNodes[chapterId] || [];
        
        if (!currentReadNodes.includes(nodeId)) {
          const updatedProgress = {
            ...progress,
            readNodes: {
              ...readNodes,
              [chapterId]: [...currentReadNodes, nodeId],
            },
            lastReadAt: Date.now(),
          };
          
          if (state.currentPart === 'yi') {
            set({ yiProgress: updatedProgress });
          } else {
            set({ yiPart2Progress: updatedProgress });
          }
        }
      },

      getChapterProgress: (chapterId: string) => {
        const state = get();
        const progress = state.getCurrentProgress();
        // 確保 readNodes 存在（處理舊的持久化狀態）
        const readNodes = progress.readNodes || {};
        const chapterReadNodes = readNodes[chapterId] || [];
        const totalNodes = chapterNodeCounts[chapterId] || 1;
        return Math.min(100, Math.round((chapterReadNodes.length / totalNodes) * 100));
      },

      unlockImage: (imageUrl: string) => {
        const state = get();
        const progress = state.getCurrentProgress();
        const unlockedImages = progress.unlockedImages || [];
        
        if (!unlockedImages.includes(imageUrl)) {
          const updatedProgress = {
            ...progress,
            unlockedImages: [...unlockedImages, imageUrl],
          };
          
          if (state.currentPart === 'yi') {
            set({ yiProgress: updatedProgress });
          } else {
            set({ yiPart2Progress: updatedProgress });
          }
        }
      },

      getCurrentProgress: () => {
        const state = get();
        return state.currentPart === 'yi' ? state.yiProgress : state.yiPart2Progress;
      },
    }),
    {
      name: 'arc-zero-game-state',
    }
  )
);
