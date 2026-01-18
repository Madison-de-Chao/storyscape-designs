import type { Chapter, DialogueNode } from '@/stores/gameStore';

export type { DialogueNode };

// 第二部「伊」的序章節點
export const yiPart2PrologueNodes: DialogueNode[] = [
  {
    id: 'yi-prologue-1',
    speaker: 'narrator',
    text: '你曾經是一個很努力想當「好人」的人。',
    nextNodeId: 'yi-prologue-2',
  },
  {
    id: 'yi-prologue-2',
    speaker: 'narrator',
    text: '努力壓抑憤怒，因為「我不應該生氣」。努力隱藏悲傷，因為「我不應該軟弱」。',
    nextNodeId: 'yi-prologue-3',
  },
  {
    id: 'yi-prologue-3',
    speaker: 'narrator',
    text: '你把所有「不應該」的部分，一塊一塊地切下來，藏到心裡最深的角落。',
    nextNodeId: 'yi-prologue-4',
  },
  {
    id: 'yi-prologue-4',
    speaker: 'narrator',
    text: '然後告訴自己：這樣，我就會變得更好。',
    nextNodeId: 'yi-prologue-5',
  },
  {
    id: 'yi-prologue-5',
    speaker: 'protagonist',
    text: '我錯了。',
    nextNodeId: 'yi-prologue-6',
    effect: 'glow',
  },
  {
    id: 'yi-prologue-6',
    speaker: 'narrator',
    text: '每切掉一塊，你就少一塊。你以為自己在追求完美，其實是在製造殘缺。',
    nextNodeId: 'yi-prologue-7',
  },
  {
    id: 'yi-prologue-7',
    speaker: 'narrator',
    text: '這個世界教會我們的第一件事，就是分辨。',
    nextNodeId: 'yi-prologue-8',
  },
  {
    id: 'yi-prologue-8',
    speaker: 'narrator',
    text: '分辨對與錯、好與壞、成功與失敗、光明與黑暗。',
    nextNodeId: 'yi-prologue-9',
  },
  {
    id: 'yi-prologue-9',
    speaker: 'narrator',
    text: '「你要當好人，不要當壞人。」「你要成功，不要失敗。」「你要正向，不要負面。」',
    nextNodeId: 'yi-prologue-10',
  },
  {
    id: 'yi-prologue-10',
    speaker: 'narrator',
    text: '於是我們學會了一件事：有些東西是該留下的，有些東西是該丟掉的。',
    nextNodeId: 'yi-prologue-11',
  },
  {
    id: 'yi-prologue-11',
    speaker: 'narrator',
    text: '但從來沒有人告訴過我們——',
    nextNodeId: 'yi-prologue-12',
    effect: 'glow',
  },
  {
    id: 'yi-prologue-12',
    speaker: 'narrator',
    text: '那些被我們丟掉的，從來沒有消失。',
    nextNodeId: 'yi-prologue-13',
    effect: 'glow',
  },
  {
    id: 'yi-prologue-13',
    speaker: 'narrator',
    text: '它們只是被推到了另一個地方，變成了另一個我們。',
    nextNodeId: 'yi-prologue-14',
  },
  {
    id: 'yi-prologue-14',
    speaker: 'yi',
    speakerName: '???',
    text: '我把這個「另一個我們」，稱為——',
    nextNodeId: 'yi-prologue-15',
    effect: 'glitch',
  },
  {
    id: 'yi-prologue-15',
    speaker: 'yi',
    speakerName: '伊',
    text: '伊。',
    nextNodeId: 'yi-prologue-16',
    effect: 'glitch',
  },
  {
    id: 'yi-prologue-16',
    speaker: 'narrator',
    text: '伊不是惡魔。伊不是敵人。',
    nextNodeId: 'yi-prologue-17',
  },
  {
    id: 'yi-prologue-17',
    speaker: 'narrator',
    text: '伊是你。是你不敢承認的那個你。是你拼命想切掉的那個你。',
    nextNodeId: 'yi-prologue-18',
  },
  {
    id: 'yi-prologue-18',
    speaker: 'yi',
    speakerName: '伊',
    text: '我在等你。等你有一天願意轉身，走進那個黑暗的角落。',
    nextNodeId: 'yi-prologue-19',
    effect: 'glow',
  },
  {
    id: 'yi-prologue-19',
    speaker: 'narrator',
    text: '現在，讓我告訴你一個故事。',
    nextNodeId: 'yi-prologue-20',
  },
  {
    id: 'yi-prologue-20',
    speaker: 'narrator',
    text: '一個關於「伊」的故事。一個關於「回家」的故事。',
    nextNodeId: 'yi-prologue-21',
  },
  {
    id: 'yi-prologue-21',
    speaker: 'narrator',
    text: '一個關於——弧度歸零的故事。',
    nextNodeId: 'yi-prologue-choice-1',
    effect: 'glow',
  },
  {
    id: 'yi-prologue-choice-1',
    speaker: 'yi',
    speakerName: '伊',
    text: '你願意聽嗎？',
    choices: [
      {
        id: 'yi-choice-listen',
        text: '我願意。',
        arcChange: -10,
        shadowChange: 10,
        nextNodeId: 'yi-prologue-listen-1',
      },
      {
        id: 'yi-choice-hesitate',
        text: '我......不確定。',
        arcChange: 0,
        shadowChange: 0,
        nextNodeId: 'yi-prologue-hesitate-1',
      },
    ],
  },
  // 願意聆聽路線
  {
    id: 'yi-prologue-listen-1',
    speaker: 'yi',
    speakerName: '伊',
    text: '謝謝你。謝謝你願意聽。',
    nextNodeId: 'yi-prologue-listen-2',
    effect: 'glow',
  },
  {
    id: 'yi-prologue-listen-2',
    speaker: 'narrator',
    text: '在那一刻，你感覺到心裡有什麼東西，輕輕地鬆開了。',
    nextNodeId: 'yi-prologue-merge-1',
  },
  // 猶豫路線
  {
    id: 'yi-prologue-hesitate-1',
    speaker: 'yi',
    speakerName: '伊',
    text: '沒關係。不確定也是一種開始。',
    nextNodeId: 'yi-prologue-hesitate-2',
  },
  {
    id: 'yi-prologue-hesitate-2',
    speaker: 'yi',
    speakerName: '伊',
    text: '至少，你沒有轉身離開。',
    nextNodeId: 'yi-prologue-merge-1',
    effect: 'glow',
  },
  // 合流
  {
    id: 'yi-prologue-merge-1',
    speaker: 'narrator',
    text: '黑暗不是光明的敵人。黑暗是光明能夠被看見的原因。',
    nextNodeId: 'yi-prologue-merge-2',
  },
  {
    id: 'yi-prologue-merge-2',
    speaker: 'narrator',
    text: '明暗相成，非為相照。',
    nextNodeId: 'yi-prologue-merge-3',
    effect: 'glow',
  },
  {
    id: 'yi-prologue-merge-3',
    speaker: 'narrator',
    text: '完整不是沒有缺口。完整是——不再害怕缺口。',
    nextNodeId: 'yi-prologue-merge-4',
    effect: 'glow',
  },
  {
    id: 'yi-prologue-merge-4',
    speaker: 'yi',
    speakerName: '伊',
    text: '讓我們開始吧。',
    nextNodeId: 'yi-prologue-end',
  },
  {
    id: 'yi-prologue-end',
    speaker: 'narrator',
    text: '【序章完】',
    nextNodeId: 'yi-chapter-1-start',
  },
  {
    id: 'yi-chapter-1-start',
    speaker: 'narrator',
    text: '第一章即將開始......',
  },
];

export const yiPart2PrologueChapter: Chapter = {
  id: 'yi-prologue',
  title: '序章',
  subtitle: '另一個我們',
  theme: '覺醒',
  color: '#C75050',
  nodes: yiPart2PrologueNodes,
};

export const getYiPart2NodeById = (nodeId: string): DialogueNode | undefined => {
  return yiPart2PrologueNodes.find(node => node.id === nodeId);
};
