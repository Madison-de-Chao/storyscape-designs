import type { DialogueNode } from '@/stores/gameStore';

export const prologueNodes: DialogueNode[] = [
  {
    id: 'prologue-1',
    speaker: 'narrator',
    text: '在無盡的虛空中，有一個地方。那裡不是天堂，也不是地獄。那裡是教室。',
    nextNodeId: 'prologue-2',
    bgImage: 'void_classroom', // 建議背景：虛空中的教室
  },
  {
    id: 'prologue-2',
    speaker: 'narrator',
    text: '而你正坐在裡面。',
    nextNodeId: 'prologue-3',
  },
  {
    id: 'prologue-3',
    speaker: 'narrator',
    text: '你不知道的是，地球是一座學校。每一個靈魂來到這裡，都是為了學習同一堂課——',
    nextNodeId: 'prologue-4',
  },
  {
    id: 'prologue-4',
    speaker: 'narrator',
    text: '完整。',
    nextNodeId: 'prologue-5',
    effect: 'glow',
  },
  {
    id: 'prologue-5',
    speaker: 'narrator',
    text: '你以為你來到這個世界，是為了賺錢、結婚、生子、成功、變得更好。你以為人生的意義是攀登。',
    nextNodeId: 'prologue-6',
  },
  {
    id: 'prologue-6',
    speaker: 'narrator',
    text: '你錯了。這裡不是競技場。這裡是訓練場。而訓練的目的，不是讓你戰勝別人，是讓你學會不再和自己打仗。',
    nextNodeId: 'prologue-7',
  },
  {
    id: 'prologue-7',
    speaker: 'narrator',
    text: '地球是特別設計的。因為只有在最極端的二元環境裡（光與暗、對與錯），靈魂才能學會那最重要的一課：看見對立的背後，其實是同一個「壹」。',
    nextNodeId: 'prologue-8',
  },
  {
    id: 'prologue-8',
    speaker: 'narrator',
    text: '學會的人，會回到「元壹境」，被稱為歸者。但更多的人，一輩子都在掙扎。',
    nextNodeId: 'prologue-9',
  },
  {
    id: 'prologue-9',
    speaker: 'narrator',
    text: '他們把「壞的」自己切掉，推到黑暗裡。那個被遺忘的自己，有一個名字——伊。',
    nextNodeId: 'prologue-10',
    effect: 'glitch', // 提到伊時出現雜訊
  },
  {
    id: 'prologue-10',
    speaker: 'narrator',
    text: '伊不是惡魔，伊是你。是你不敢承認的那個你。伊在等你對它說：「歡迎回家。」',
    nextNodeId: 'prologue-11',
  },
  {
    id: 'prologue-11',
    speaker: 'narrator',
    text: '現在，讓我告訴你一個故事。一個關於「伊」的故事。一個關於「弧度歸零」的故事。',
    nextNodeId: 'prologue-12',
  },
  {
    id: 'prologue-12',
    speaker: 'narrator',
    text: '在某個平凡的夜晚，有一個女人坐在電腦前。螢幕的光映在她疲憊的臉上。',
    nextNodeId: 'prologue-end',
  },
  {
    id: 'prologue-end',
    speaker: 'narrator',
    text: '她的手指懸在鍵盤上方，游標停在一個按鈕前面。那個按鈕上寫著——「刪除」。',
    nextNodeId: 'yi1-chapter-1-1', // 🔗 連接到第一章
    effect: 'fade-out',
  },
];
