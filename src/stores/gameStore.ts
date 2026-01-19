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

export interface DialogueNode {
  id: string;
  speaker: 'narrator' | 'protagonist' | 'yi' | 'mentor' | 'wenxin' | 'wendu' | 'sushi' | 'wangyangming' | 'simaqian' | 'wuzetian' | 'libai' | 'mandela' | 'caesar' | 'cleopatra' | 'lincoln' | 'jobs';
  speakerName?: string;
  text: string;
  choices?: Choice[];
  nextNodeId?: string | null;
  effect?: 'glitch' | 'glow' | 'fade';
  arcChange?: number;
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
  
  // 獲取當前進度
  getCurrentProgress: () => PartProgress;
}

const defaultProgress: PartProgress = {
  arcValue: 180,
  currentChapter: 0,
  currentNodeId: 'yi1-preface-1', // 從作者序開始
  colorsCollected: [],
  choicesHistory: {},
  shadowLevel: 0,
  hasStarted: false,
};

const defaultPart2Progress: PartProgress = {
  arcValue: 180,
  currentChapter: 0,
  currentNodeId: 'yi-prologue-1',
  colorsCollected: [],
  choicesHistory: {},
  shadowLevel: 0,
  hasStarted: false,
};

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
