import type { DialogueNode } from '@/stores/gameStore';

export const prefaceNodes: DialogueNode[] = [
  {
    id: 'preface-1',
    speaker: 'narrator',
    text: '我曾經是一個很努力想當「好人」的人。',
    nextNodeId: 'preface-2',
    effect: 'glow',
  },
  {
    id: 'preface-2',
    speaker: 'narrator',
    text: '努力壓抑憤怒，因為「我不應該生氣」。努力隱藏悲傷，因為「我不應該軟弱」。努力收斂野心，因為「我不應該這麼高調」。',
    nextNodeId: 'preface-3',
  },
  {
    id: 'preface-3',
    speaker: 'narrator',
    text: '我把所有「不應該」的部分，一塊一塊地切下來，藏到心裡最深的角落，然後告訴自己：這樣，我就會變得更好。',
    nextNodeId: 'preface-4',
  },
  {
    id: 'preface-4',
    speaker: 'narrator',
    text: '我錯了。',
    nextNodeId: 'preface-5',
    effect: 'shake', // 輕微震動，強調轉折
  },
  {
    id: 'preface-5',
    speaker: 'narrator',
    text: '每切掉一塊，我就少一塊。我以為自己在追求完美，其實是在製造殘缺。',
    nextNodeId: 'preface-6',
  },
  {
    id: 'preface-6',
    speaker: 'narrator',
    text: '我花了很長的時間才明白一件事：二元的存在，從來不是為了讓我們選邊站。',
    nextNodeId: 'preface-7',
    effect: 'glow',
  },
  {
    id: 'preface-7',
    speaker: 'narrator',
    text: '光明與黑暗不是敵人。成功與失敗不是對立。對與錯不是非此即彼的選擇題。',
    nextNodeId: 'preface-8',
  },
  {
    id: 'preface-8',
    speaker: 'narrator',
    text: '它們是同一個圓的不同弧段。它們是同一首曲子的不同音符。它們是同一個「你」的不同面向。',
    nextNodeId: 'preface-9',
  },
  {
    id: 'preface-9',
    speaker: 'narrator',
    text: '你的善良，是因為你知道什麼是殘忍。你的勇敢，是因為你知道什麼是恐懼。你的溫柔，是因為你知道什麼是傷害。',
    nextNodeId: 'preface-10',
  },
  {
    id: 'preface-10',
    speaker: 'narrator',
    text: '黑暗不是光明的敵人。黑暗是光明能夠被看見的原因。',
    nextNodeId: 'preface-11',
    effect: 'glow',
  },
  {
    id: 'preface-11',
    speaker: 'narrator',
    text: '這就是我在這本書裡想說的話——明暗相成，非為相照。',
    nextNodeId: 'preface-12',
  },
  {
    id: 'preface-12',
    speaker: 'narrator',
    text: '我寫這個故事，是寫給所有正在跟自己打仗的人。寫給那些覺得「我做什麼都不對」的人。',
    nextNodeId: 'preface-13',
  },
  {
    id: 'preface-13',
    speaker: 'narrator',
    text: '你不需要再切割自己了。你不需要把「壞的部分」丟掉，才能成為「好的人」。',
    nextNodeId: 'preface-14',
  },
  {
    id: 'preface-14',
    speaker: 'narrator',
    text: '你需要的，是讓所有的部分重新相遇，然後發現——它們從來都是一體的。',
    nextNodeId: 'preface-end',
    effect: 'glow',
  },
  {
    id: 'preface-end',
    speaker: 'narrator',
    text: '於元壹紀年・弧度歸零之際。\n\n（深呼吸，故事開始了。）',
    nextNodeId: 'prologue-1', // 🔗 連接到序章
    effect: 'fade-out', // 淡出轉場
  },
];
