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
    nextNodeId: 'yi-prologue-choice-suppress',
  },
  // 新增選擇：面對壓抑的方式
  {
    id: 'yi-prologue-choice-suppress',
    speaker: 'narrator',
    text: '回想起那些被你藏起來的情緒......',
    choices: [
      {
        id: 'choice-suppress-anger',
        text: '憤怒，因為我不被允許生氣',
        arcChange: -5,
        shadowChange: 8,
        nextNodeId: 'yi-prologue-anger-1',
      },
      {
        id: 'choice-suppress-sadness',
        text: '悲傷，因為我必須堅強',
        arcChange: -5,
        shadowChange: 8,
        nextNodeId: 'yi-prologue-sadness-1',
      },
      {
        id: 'choice-suppress-fear',
        text: '恐懼，因為我不能示弱',
        arcChange: -5,
        shadowChange: 8,
        nextNodeId: 'yi-prologue-fear-1',
      },
    ],
  },
  // 憤怒路線
  {
    id: 'yi-prologue-anger-1',
    speaker: 'narrator',
    text: '你記得那些被吞下的怒火。它們沒有消失，只是化成了無名的疲憊。',
    nextNodeId: 'yi-prologue-merge-suppress',
    effect: 'glow',
  },
  // 悲傷路線
  {
    id: 'yi-prologue-sadness-1',
    speaker: 'narrator',
    text: '你記得那些強忍的淚水。它們沒有蒸發，只是變成了心底的沉重。',
    nextNodeId: 'yi-prologue-merge-suppress',
    effect: 'glow',
  },
  // 恐懼路線
  {
    id: 'yi-prologue-fear-1',
    speaker: 'narrator',
    text: '你記得那些隱藏的恐懼。它們沒有離開，只是在夜深人靜時悄悄造訪。',
    nextNodeId: 'yi-prologue-merge-suppress',
    effect: 'glow',
  },
  // 合流
  {
    id: 'yi-prologue-merge-suppress',
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
    nextNodeId: 'yi-prologue-choice-realize',
  },
  // 新增選擇：領悟的反應
  {
    id: 'yi-prologue-choice-realize',
    speaker: 'narrator',
    text: '當你意識到這一點時......',
    choices: [
      {
        id: 'choice-realize-regret',
        text: '感到深深的後悔',
        arcChange: -8,
        shadowChange: 5,
        nextNodeId: 'yi-prologue-regret-1',
      },
      {
        id: 'choice-realize-relief',
        text: '反而鬆了一口氣',
        arcChange: -3,
        shadowChange: 10,
        nextNodeId: 'yi-prologue-relief-1',
      },
      {
        id: 'choice-realize-curious',
        text: '想知道還能不能找回來',
        arcChange: -5,
        shadowChange: 12,
        nextNodeId: 'yi-prologue-curious-1',
      },
    ],
  },
  // 後悔路線
  {
    id: 'yi-prologue-regret-1',
    speaker: 'protagonist',
    text: '我浪費了多少時間......在逃避真正的自己？',
    nextNodeId: 'yi-prologue-7',
    effect: 'glow',
  },
  // 釋然路線
  {
    id: 'yi-prologue-relief-1',
    speaker: 'protagonist',
    text: '原來不是我不夠好，是我一直在用錯誤的方式對待自己。',
    nextNodeId: 'yi-prologue-7',
    effect: 'glow',
  },
  // 好奇路線
  {
    id: 'yi-prologue-curious-1',
    speaker: 'protagonist',
    text: '那些被我丟掉的......還在嗎？',
    nextNodeId: 'yi-prologue-7',
    effect: 'glow',
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
    nextNodeId: 'yi-prologue-choice-taught',
  },
  // 新增選擇：對這些教導的看法
  {
    id: 'yi-prologue-choice-taught',
    speaker: 'narrator',
    text: '這些話，你聽過多少遍？',
    choices: [
      {
        id: 'choice-taught-countless',
        text: '數不清了，它們已經刻在骨子裡',
        arcChange: -5,
        shadowChange: 5,
        nextNodeId: 'yi-prologue-taught-1',
      },
      {
        id: 'choice-taught-doubt',
        text: '很多次，但我開始懷疑了',
        arcChange: -8,
        shadowChange: 10,
        nextNodeId: 'yi-prologue-taught-2',
      },
    ],
  },
  {
    id: 'yi-prologue-taught-1',
    speaker: 'narrator',
    text: '是的，它們像是無形的枷鎖，讓你不敢有一絲逾越。',
    nextNodeId: 'yi-prologue-10',
  },
  {
    id: 'yi-prologue-taught-2',
    speaker: 'narrator',
    text: '懷疑是覺醒的開始。你的心開始睜開眼睛了。',
    nextNodeId: 'yi-prologue-10',
    effect: 'glow',
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
    nextNodeId: 'yi-prologue-choice-yi',
  },
  // 新增選擇：對伊的反應
  {
    id: 'yi-prologue-choice-yi',
    speaker: 'narrator',
    text: '面對這個「伊」，你的第一反應是......',
    choices: [
      {
        id: 'choice-yi-fear',
        text: '害怕，想要逃離',
        arcChange: 5,
        shadowChange: -5,
        nextNodeId: 'yi-prologue-yi-fear-1',
      },
      {
        id: 'choice-yi-curious',
        text: '好奇，想要了解',
        arcChange: -10,
        shadowChange: 15,
        nextNodeId: 'yi-prologue-yi-curious-1',
      },
      {
        id: 'choice-yi-recognize',
        text: '似曾相識，彷彿遇見老朋友',
        arcChange: -15,
        shadowChange: 20,
        nextNodeId: 'yi-prologue-yi-recognize-1',
      },
    ],
  },
  // 害怕路線
  {
    id: 'yi-prologue-yi-fear-1',
    speaker: 'yi',
    speakerName: '伊',
    text: '你的恐懼，我理解。因為那也曾是我的恐懼。',
    nextNodeId: 'yi-prologue-yi-fear-2',
    effect: 'glitch',
  },
  {
    id: 'yi-prologue-yi-fear-2',
    speaker: 'yi',
    speakerName: '伊',
    text: '但你逃了這麼久，不累嗎？',
    nextNodeId: 'yi-prologue-18',
    effect: 'glow',
  },
  // 好奇路線
  {
    id: 'yi-prologue-yi-curious-1',
    speaker: 'yi',
    speakerName: '伊',
    text: '好奇心是一把鑰匙。它能打開最深的門。',
    nextNodeId: 'yi-prologue-yi-curious-2',
    effect: 'glow',
  },
  {
    id: 'yi-prologue-yi-curious-2',
    speaker: 'yi',
    speakerName: '伊',
    text: '你願意用這把鑰匙，打開通往自己的門嗎？',
    nextNodeId: 'yi-prologue-18',
    effect: 'glow',
  },
  // 認出路線
  {
    id: 'yi-prologue-yi-recognize-1',
    speaker: 'yi',
    speakerName: '伊',
    text: '你認出我了。',
    nextNodeId: 'yi-prologue-yi-recognize-2',
    effect: 'glow',
  },
  {
    id: 'yi-prologue-yi-recognize-2',
    speaker: 'yi',
    speakerName: '伊',
    text: '我們其實從未分開過。只是你假裝看不見我而已。',
    nextNodeId: 'yi-prologue-18',
    effect: 'glow',
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
      {
        id: 'yi-choice-ready',
        text: '我已經準備好了。',
        arcChange: -15,
        shadowChange: 15,
        nextNodeId: 'yi-prologue-ready-1',
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
  // 準備好路線
  {
    id: 'yi-prologue-ready-1',
    speaker: 'yi',
    speakerName: '伊',
    text: '你的勇氣，讓我感動。',
    nextNodeId: 'yi-prologue-ready-2',
    effect: 'glow',
  },
  {
    id: 'yi-prologue-ready-2',
    speaker: 'narrator',
    text: '在那一刻，你感覺到內心深處有一道光，正在緩緩亮起。',
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
    nextNodeId: 'yi-prologue-final-choice',
    effect: 'glow',
  },
  // 新增最終選擇
  {
    id: 'yi-prologue-final-choice',
    speaker: 'narrator',
    text: '在踏入這個故事之前，你想對自己說什麼？',
    choices: [
      {
        id: 'choice-final-courage',
        text: '我會有勇氣面對一切',
        arcChange: -10,
        shadowChange: 10,
        nextNodeId: 'yi-prologue-final-courage',
      },
      {
        id: 'choice-final-accept',
        text: '我願意接受完整的自己',
        arcChange: -15,
        shadowChange: 15,
        nextNodeId: 'yi-prologue-final-accept',
      },
      {
        id: 'choice-final-journey',
        text: '無論結果如何，這趟旅程本身就有意義',
        arcChange: -12,
        shadowChange: 12,
        nextNodeId: 'yi-prologue-final-journey',
      },
    ],
  },
  {
    id: 'yi-prologue-final-courage',
    speaker: 'protagonist',
    text: '我會有勇氣面對一切。',
    nextNodeId: 'yi-prologue-merge-4',
    effect: 'glow',
  },
  {
    id: 'yi-prologue-final-accept',
    speaker: 'protagonist',
    text: '我願意接受完整的自己，包括那些我曾經想丟掉的部分。',
    nextNodeId: 'yi-prologue-merge-4',
    effect: 'glow',
  },
  {
    id: 'yi-prologue-final-journey',
    speaker: 'protagonist',
    text: '無論結果如何，這趟旅程本身就有意義。',
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
