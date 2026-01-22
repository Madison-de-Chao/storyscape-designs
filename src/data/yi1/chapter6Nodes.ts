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
    nextNodeId: 'yi1-chapter-6-6',
  },
  {
    id: 'yi1-chapter-6-6',
    speaker: 'protagonist',
    text: '沒有……我就是知道。心裡會有一種感覺。',
    nextNodeId: 'yi1-chapter-6-7',
  },
  {
    id: 'yi1-chapter-6-7',
    speaker: 'wangyangming',
    text: '這就是妳的「良知」。每個人心裡都有一個聲音，能夠分辨是非對錯。妳要相信那個聲音。',
    nextNodeId: 'yi1-chapter-6-8',
  },

  // 二、前往下一關
  {
    id: 'yi1-chapter-6-8',
    speaker: 'wangyangming',
    text: '接下來，妳要帶著這份良知，去面對那個充滿規矩與偏見的世界。',
    nextNodeId: 'yi1-chapter-6-9',
  },
  {
    id: 'yi1-chapter-6-9',
    speaker: 'wangyangming',
    text: '下一位歸者很特別。她一生都在打破規矩。她會教妳什麼是真正的力量。',
    nextNodeId: 'yi1-chapter-6-end',
  },
  {
    id: 'yi1-chapter-6-end',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '準備好了嗎？我們要去見一位女皇。',
    nextNodeId: 'yi1-chapter-7-intro-1', // 🔗 連接到第七章（武則天）
    effect: 'mist',
  },
];
