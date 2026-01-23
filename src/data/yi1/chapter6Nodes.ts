import type { DialogueNode } from '@/stores/gameStore';

export const chapter6Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-chapter-6-intro-1',
    speaker: 'narrator',
    text: '「你找遍天下，不如回頭看一眼自己。」',
    nextNodeId: 'yi1-chapter-6-intro-2',
  },
  {
    id: 'yi1-chapter-6-intro-2',
    speaker: 'narrator',
    text: '「答案從來不在外面。」',
    nextNodeId: 'yi1-chapter-6-1',
  },

  // 一、良知
  {
    id: 'yi1-chapter-6-1',
    speaker: 'narrator',
    text: '這次是在山間小徑。空氣中瀰漫著松脂的清香。',
    bgImage: 'wang_mountain_path', // 龍場悟道處
    nextNodeId: 'yi1-chapter-6-2',
  },
  {
    id: 'yi1-chapter-6-2',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '眼神不一樣了。看來妳已經見過「伊」了，也聽進去東坡的話了。',
    nextNodeId: 'yi1-chapter-6-3',
  },
  {
    id: 'yi1-chapter-6-3',
    speaker: 'protagonist',
    text: '是的。雖然還是有點痛，但我不再討厭它了。',
    nextNodeId: 'yi1-chapter-6-4',
  },
  {
    id: 'yi1-chapter-6-4',
    speaker: 'wangyangming',
    text: '很好。但光是「知道」還不夠。知而不行，只是未知。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-6-5',
  },
  {
    id: 'yi1-chapter-6-5',
    speaker: 'wangyangming',
    text: '妳寫故事的時候，怎麼知道這一段寫得好不好？有人教妳嗎？',
    nextNodeId: 'yi1-chapter-6-choice-1',
  },
  // 🎯 選項1：關於判斷力的來源
  {
    id: 'yi1-chapter-6-choice-1',
    speaker: 'narrator',
    text: '她回想起無數個深夜，獨自面對螢幕，斟酌每一個字句。',
    choices: [
      {
        id: 'choice-6-1a',
        text: '「有時候會問別人的意見……」',
        arcChange: -2,
        shadowChange: 3,
        nextNodeId: 'yi1-chapter-6-6a',
      },
      {
        id: 'choice-6-1b',
        text: '「沒有……我就是知道。心裡會有一種感覺。」',
        arcChange: 5,
        shadowChange: 0,
        nextNodeId: 'yi1-chapter-6-6b',
      },
    ],
  },
  {
    id: 'yi1-chapter-6-6a',
    speaker: 'wangyangming',
    text: '別人的意見可以參考，但最終的判斷，還是來自妳自己。',
    nextNodeId: 'yi1-chapter-6-7',
  },
  {
    id: 'yi1-chapter-6-6b',
    speaker: 'wangyangming',
    text: '對，就是那個感覺。那就是妳的「良知」。',
    nextNodeId: 'yi1-chapter-6-7',
  },
  {
    id: 'yi1-chapter-6-7',
    speaker: 'wangyangming',
    text: '每個人心裡都有一個聲音，能夠分辨是非對錯。妳要相信那個聲音。',
    bgImage: 'wang_cave_enlightenment',
    specialScene: 'zen',
    zenConfig: {
      text: '致良知',
      subtitle: '——王陽明',
      theme: 'golden',
    },
    nextNodeId: 'yi1-chapter-6-8',
  },

  // 二、前往下一關
  {
    id: 'yi1-chapter-6-8',
    speaker: 'wangyangming',
    text: '接下來，妳要帶著這份良知，去面對那個充滿規矩與偏見的世界。',
    nextNodeId: 'yi1-chapter-6-choice-2',
  },
  // 🎯 選項2：對規矩的態度
  {
    id: 'yi1-chapter-6-choice-2',
    speaker: 'narrator',
    text: '規矩與偏見——這讓她想起了那些曾經束縛她的標準。',
    choices: [
      {
        id: 'choice-6-2a',
        text: '「規矩不是用來遵守的嗎？」',
        arcChange: 0,
        shadowChange: 2,
        nextNodeId: 'yi1-chapter-6-9a',
      },
      {
        id: 'choice-6-2b',
        text: '「有些規矩，也許本來就該被打破。」',
        arcChange: 5,
        shadowChange: 0,
        nextNodeId: 'yi1-chapter-6-9b',
      },
    ],
  },
  {
    id: 'yi1-chapter-6-9a',
    speaker: 'wangyangming',
    text: '規矩是人定的。人能定，人也能改。重要的是，妳心中的良知怎麼說。',
    nextNodeId: 'yi1-chapter-6-10',
  },
  {
    id: 'yi1-chapter-6-9b',
    speaker: 'wangyangming',
    text: '（笑）這就是妳的良知在說話了。去驗證它吧。',
    nextNodeId: 'yi1-chapter-6-10',
  },
  {
    id: 'yi1-chapter-6-10',
    speaker: 'wangyangming',
    text: '下一位歸者很特別。她一生都在打破規矩。她會教妳什麼是真正的力量。',
    bgImage: 'palace_gate_distant',
    nextNodeId: 'yi1-chapter-6-end',
  },
  {
    id: 'yi1-chapter-6-end',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '準備好了嗎？我們要去見一位女皇。',
    nextNodeId: 'yi1-chapter-7-intro-1',
    effect: 'mist',
  },
];
