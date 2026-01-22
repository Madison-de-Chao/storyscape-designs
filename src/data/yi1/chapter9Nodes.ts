import type { DialogueNode } from '@/stores/gameStore';

export const chapter9Nodes: DialogueNode[] = [
  {
    id: 'yi1-chapter-9-1',
    speaker: 'narrator',
    text: '牢房的牆壁化為雲煙。一陣清風吹過，你發現自己站在巍峨的山巔。',
    bgImage: 'mountain_peak_moon',
    emotionSFX: 'wind_blow',
    effect: 'fade-in-slow',
    nextNodeId: 'yi1-chapter-9-2',
  },
  {
    id: 'yi1-chapter-9-2',
    speaker: 'libai',
    speakerName: '李白',
    text: '哈哈哈哈！來得好！來得好！',
    emotionSFX: 'laugh_hearty',
    nextNodeId: 'yi1-chapter-9-3',
  },
  {
    id: 'yi1-chapter-9-3',
    speaker: 'libai',
    text: '看這天地之大，何處不是家？妳剛才在牢裡待久了，眉頭都打結了。',
    bgImage: 'libai_drinking',
    nextNodeId: 'yi1-chapter-9-4',
  },
  {
    id: 'yi1-chapter-9-4',
    speaker: 'protagonist',
    text: '太白先生……您怎麼能這麼快樂？明明您的一生也很坎坷。',
    nextNodeId: 'yi1-chapter-9-5',
  },
  {
    id: 'yi1-chapter-9-5',
    speaker: 'libai',
    text: '坎坷？那是世人的看法。在我眼裡，這都是下酒菜！',
    effect: 'shake', // 豪邁的震動
    nextNodeId: 'yi1-chapter-9-6',
  },
  {
    id: 'yi1-chapter-9-6',
    speaker: 'libai',
    text: '安能摧眉折腰事權貴，使我不得開心顏！妳心裡那點委屈，比起這輪明月，算得了什麼？',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-9-end',
  },
  {
    id: 'yi1-chapter-9-end',
    speaker: 'libai',
    text: '喝下這杯酒（故事），把過去都忘了吧。前面的路，還長著呢！下一站，我們去更遠的地方。',
    nextNodeId: 'yi1-chapter-10-1', // 🔗 連接到第十章
    effect: 'flash', // 亮光轉場
  },
];
