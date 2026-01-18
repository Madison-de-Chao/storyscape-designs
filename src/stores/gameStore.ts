import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Choice {
  id: string;
  text: string;
  arcChange: number; // 負數減少弧度（好），正數增加弧度（壞）
  shadowChange: number; // 與伊的關係變化
  nextNodeId: string;
}

export interface DialogueNode {
  id: string;
  speaker: 'narrator' | 'protagonist' | 'yi' | 'mentor';
  speakerName?: string;
  text: string;
  choices?: Choice[];
  nextNodeId?: string;
  effect?: 'glitch' | 'glow' | 'fade';
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

interface GameState {
  // 遊戲狀態
  arcValue: number; // 0-180，初始180
  currentChapter: number;
  currentNodeId: string;
  colorsCollected: string[];
  choicesHistory: Record<string, string>;
  shadowLevel: number; // -100 到 100，負數=壓抑，正數=接納
  isPlaying: boolean;
  hasStarted: boolean;
  
  // 動作
  startGame: () => void;
  resetGame: () => void;
  setCurrentNode: (nodeId: string) => void;
  makeChoice: (choice: Choice) => void;
  advanceToNextNode: (nextNodeId: string) => void;
  setChapter: (chapter: number) => void;
  collectColor: (color: string) => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      arcValue: 180,
      currentChapter: 0,
      currentNodeId: 'prologue-1',
      colorsCollected: [],
      choicesHistory: {},
      shadowLevel: 0,
      isPlaying: false,
      hasStarted: false,

      startGame: () => set({ 
        isPlaying: true, 
        hasStarted: true,
        currentNodeId: 'prologue-1',
        currentChapter: 0,
      }),

      resetGame: () => set({
        arcValue: 180,
        currentChapter: 0,
        currentNodeId: 'prologue-1',
        colorsCollected: [],
        choicesHistory: {},
        shadowLevel: 0,
        isPlaying: false,
        hasStarted: false,
      }),

      setCurrentNode: (nodeId: string) => set({ currentNodeId: nodeId }),

      makeChoice: (choice: Choice) => {
        const state = get();
        const newArcValue = Math.max(0, Math.min(180, state.arcValue + choice.arcChange));
        const newShadowLevel = Math.max(-100, Math.min(100, state.shadowLevel + choice.shadowChange));
        
        set({
          arcValue: newArcValue,
          shadowLevel: newShadowLevel,
          currentNodeId: choice.nextNodeId,
          choicesHistory: {
            ...state.choicesHistory,
            [choice.id]: choice.text,
          },
        });
      },

      advanceToNextNode: (nextNodeId: string) => set({ currentNodeId: nextNodeId }),

      setChapter: (chapter: number) => set({ currentChapter: chapter }),

      collectColor: (color: string) => {
        const state = get();
        if (!state.colorsCollected.includes(color)) {
          set({ colorsCollected: [...state.colorsCollected, color] });
        }
      },
    }),
    {
      name: 'arc-zero-game-state',
    }
  )
);
