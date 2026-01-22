import type { DialogueNode } from '@/stores/gameStore';

export const prefaceNodes: DialogueNode[] = [
  {
    id: 'preface-1',
    speaker: 'narrator',
    text: '致 每一位覺得自己「還不夠好」的靈魂。',
    nextNodeId: 'preface-2',
    effect: 'glow', // 文字微光
  },
  {
    id: 'preface-2',
    speaker: 'narrator',
    text: '這個故事不教你如何成功，只教你如何「完整」。',
    nextNodeId: 'preface-3',
  },
  {
    id: 'preface-3',
    speaker: 'narrator',
    text: '這是一場關於心理原型的探索之旅。你準備好了嗎？',
    nextNodeId: 'preface-end',
  },
  {
    id: 'preface-end',
    speaker: 'narrator',
    text: '深呼吸。\n\n故事，開始了。',
    nextNodeId: 'prologue-1', // 🔗 完美連接到序章
    effect: 'fade-out', // 畫面漸黑，製造過場感
  },
];
    nextNodeId: 'preface-6',
    effect: 'glow',
  },
  {
    id: 'preface-6',
    speaker: 'narrator',
    text: '我花了很長時間才明白——**二元的存在**，從來不是為了讓我們選邊站。',
    nextNodeId: 'preface-7',
    effect: 'glow',
  },
  {
    id: 'preface-7',
    speaker: 'narrator',
    text: '**光明與黑暗**不是敵人。它們是同一個圓的不同弧段，同一個「你」的**不同面向**。',
    nextNodeId: 'preface-8',
    effect: 'glow',
  },
  {
    id: 'preface-8',
    speaker: 'narrator',
    text: '你的善良，是因為你知道什麼是殘忍。你的勇敢，是因為你知道什麼是恐懼。',
    nextNodeId: 'preface-9',
  },
  {
    id: 'preface-9',
    speaker: 'narrator',
    text: '**黑暗不是光明的敵人。黑暗是光明能夠被看見的原因。**',
    nextNodeId: 'preface-10',
    effect: 'glow',
  },
  {
    id: 'preface-10',
    speaker: 'narrator',
    text: '這就是我在這本書裡想說的話——**明暗相成，非為相照**。',
    nextNodeId: 'preface-11',
    effect: 'glow',
  },
  {
    id: 'preface-11',
    speaker: 'narrator',
    text: '我寫這個故事，是寫給所有正在**跟自己打仗**的人。寫給那些覺得自己**不夠好**的人。',
    nextNodeId: 'preface-12',
  },
  {
    id: 'preface-12',
    speaker: 'narrator',
    text: '你不需要再切割自己了。你需要的，是讓**所有的部分重新相遇**。',
    nextNodeId: 'preface-end',
    effect: 'glow',
  },
  {
    id: 'preface-end',
    speaker: 'narrator',
    text: '**默默超**\n於元壹紀年・弧度歸零之際',
    nextNodeId: 'prologue-1',
    effect: 'glow',
  },
];
