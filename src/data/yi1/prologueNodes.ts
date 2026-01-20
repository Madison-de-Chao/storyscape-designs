// 序章｜訓練場
// 精簡版：68節點 → 35節點（含互動選項）
import type { DialogueNode } from '@/stores/gameStore';

export const yi1PrologueNodes: DialogueNode[] = [
  // === 第一部分：訓練場概念 ===
  {
    id: 'prologue-1',
    speaker: 'narrator',
    text: '在無盡的虛空中，有一個地方。那裡不是天堂，也不是地獄。',
    nextNodeId: 'prologue-2',
  },
  {
    id: 'prologue-2',
    speaker: 'narrator',
    text: '那裡是教室。而你正坐在裡面。',
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
    text: '你以為人生的意義是攀登——爬得越高，離終點越近。',
    nextNodeId: 'prologue-choice-1',
  },
  {
    id: 'prologue-choice-1',
    speaker: 'narrator',
    text: '你一直以來追求的是什麼？',
    choices: [
      { id: 'prologue-c1-a', text: '成功與認可', nextNodeId: 'prologue-6a', arcChange: -5, shadowChange: 5 },
      { id: 'prologue-c1-b', text: '內心的平靜', nextNodeId: 'prologue-6b', arcChange: 5, shadowChange: 0 },
      { id: 'prologue-c1-c', text: '我不太確定', nextNodeId: 'prologue-6c', arcChange: 0, shadowChange: 0 },
    ],
  },
  {
    id: 'prologue-6a',
    speaker: 'narrator',
    text: '很多人都是這樣。但你即將發現，真正的終點不在山頂。',
    nextNodeId: 'prologue-7',
  },
  {
    id: 'prologue-6b',
    speaker: 'narrator',
    text: '你的心，早已知道答案。讓我們繼續往下走。',
    nextNodeId: 'prologue-7',
  },
  {
    id: 'prologue-6c',
    speaker: 'narrator',
    text: '沒關係。這個故事會幫助你找到方向。',
    nextNodeId: 'prologue-7',
  },
  {
    id: 'prologue-7',
    speaker: 'narrator',
    text: '這裡不是競技場。這裡是訓練場。而訓練的目的，是讓你學會不再和自己打仗。',
    nextNodeId: 'prologue-8',
    effect: 'glow',
  },

  // === 第二部分：二元與對立 ===
  {
    id: 'prologue-8',
    speaker: 'narrator',
    text: '地球是宇宙中最特殊的地方之一。因為這裡有——對立。',
    nextNodeId: 'prologue-9',
    effect: 'glow',
  },
  {
    id: 'prologue-9',
    speaker: 'narrator',
    text: '光與暗、生與死、愛與恨、得與失、對與錯、好與壞。',
    nextNodeId: 'prologue-10',
  },
  {
    id: 'prologue-10',
    speaker: 'narrator',
    text: '在地球，這些對立被拉到極致。這是設計好的。',
    nextNodeId: 'prologue-11',
  },
  {
    id: 'prologue-11',
    speaker: 'narrator',
    text: '因為只有在最極端的二元環境裡，靈魂才能學會那最重要的一課：',
    nextNodeId: 'prologue-12',
  },
  {
    id: 'prologue-12',
    speaker: 'narrator',
    text: '看見對立的背後，其實是同一個「壹」。',
    nextNodeId: 'prologue-13',
    effect: 'glow',
  },

  // === 第三部分：歸者與迷失者 ===
  {
    id: 'prologue-13',
    speaker: 'narrator',
    text: '有些人很快就學會了。他們在生命的某個時刻，突然明白——',
    nextNodeId: 'prologue-14',
  },
  {
    id: 'prologue-14',
    speaker: 'narrator',
    text: '「原來，我不需要變成另一個人。我只需要成為完整的自己。」',
    nextNodeId: 'prologue-15',
    effect: 'glow',
  },
  {
    id: 'prologue-15',
    speaker: 'narrator',
    text: '這些人，在死後會回到「元壹境」。他們被稱為——歸者。',
    nextNodeId: 'prologue-16',
    effect: 'glow',
  },
  {
    id: 'prologue-16',
    speaker: 'narrator',
    text: '但更多的人，一輩子都在掙扎。他們被「好與壞」撕裂，不斷把自己切成兩半。',
    nextNodeId: 'prologue-17',
  },
  {
    id: 'prologue-17',
    speaker: 'narrator',
    text: '他們不知道的是——那些被丟掉的部分，不會消失。它們變成了另一個「自己」。',
    nextNodeId: 'prologue-18',
  },

  // === 第四部分：伊的登場 ===
  {
    id: 'prologue-18',
    speaker: 'narrator',
    text: '一個被遺忘的、被否認的、被鎖在黑暗裡的自己。',
    nextNodeId: 'prologue-19',
  },
  {
    id: 'prologue-19',
    speaker: 'narrator',
    text: '這個「另一個自己」，有一個名字——',
    nextNodeId: 'prologue-20',
  },
  {
    id: 'prologue-20',
    speaker: 'yi',
    speakerName: '???',
    text: '伊。',
    nextNodeId: 'prologue-choice-2',
    effect: 'glitch',
  },
  {
    id: 'prologue-choice-2',
    speaker: 'narrator',
    text: '聽到這個名字，你的第一反應是？',
    choices: [
      { id: 'prologue-c2-a', text: '感到一陣莫名的恐懼', nextNodeId: 'prologue-21a', arcChange: 0, shadowChange: 5 },
      { id: 'prologue-c2-b', text: '似乎...有些熟悉', nextNodeId: 'prologue-21b', arcChange: 5, shadowChange: 0 },
      { id: 'prologue-c2-c', text: '想知道更多', nextNodeId: 'prologue-21c', arcChange: 3, shadowChange: 0 },
    ],
  },
  {
    id: 'prologue-21a',
    speaker: 'narrator',
    text: '恐懼是正常的。我們總是害怕面對被自己否認的部分。',
    nextNodeId: 'prologue-22',
  },
  {
    id: 'prologue-21b',
    speaker: 'narrator',
    text: '是的，在你心裡的某個角落，伊一直都在等待。',
    nextNodeId: 'prologue-22',
  },
  {
    id: 'prologue-21c',
    speaker: 'narrator',
    text: '好奇心，是通往真相的第一步。',
    nextNodeId: 'prologue-22',
  },
  {
    id: 'prologue-22',
    speaker: 'narrator',
    text: '伊不是惡魔，不是敵人。伊是你——是你不敢承認的那個你。',
    nextNodeId: 'prologue-23',
    effect: 'glow',
  },
  {
    id: 'prologue-23',
    speaker: 'narrator',
    text: '伊在等你。等你有一天願意轉身，對它說——「對不起。歡迎回家。」',
    nextNodeId: 'prologue-24',
    effect: 'glow',
  },

  // === 第五部分：故事開始 ===
  {
    id: 'prologue-24',
    speaker: 'narrator',
    text: '這就是你來到這裡的原因。不是為了成功，不是為了完美，是為了完整。',
    nextNodeId: 'prologue-25',
    effect: 'glow',
  },
  {
    id: 'prologue-25',
    speaker: 'narrator',
    text: '現在，讓我告訴你一個故事。一個關於「弧度歸零」的故事。',
    nextNodeId: 'prologue-26',
  },
  {
    id: 'prologue-26',
    speaker: 'narrator',
    text: '在某個平凡的夜晚，有一個女人坐在電腦前。螢幕的光映在她疲憊的臉上。',
    nextNodeId: 'prologue-27',
  },
  {
    id: 'prologue-27',
    speaker: 'narrator',
    text: '她的手指懸在鍵盤上方，游標停在一個按鈕前面。那個按鈕上寫著——「刪除」。',
    nextNodeId: 'prologue-28',
    effect: 'glow',
  },
  {
    id: 'prologue-28',
    speaker: 'narrator',
    text: '她即將做出一個改變命運的選擇。一個會讓她見到「伊」的選擇。',
    nextNodeId: 'prologue-end',
  },
  {
    id: 'prologue-end',
    speaker: 'narrator',
    text: '故事，從這裡開始。\n\n【序章完】',
    nextNodeId: 'chapter-1-1',
    effect: 'glow',
  },
];
