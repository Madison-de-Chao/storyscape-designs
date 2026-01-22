import type { DialogueNode } from '@/stores/gameStore';

export const chapter5Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-chapter-5-intro-1',
    speaker: 'narrator',
    text: '「我這一生被貶了無數次，但我從未貶低過自己。」',
    nextNodeId: 'yi1-chapter-5-intro-2',
  },
  {
    id: 'yi1-chapter-5-intro-2',
    speaker: 'narrator',
    text: '「你知道這兩者的區別嗎？」',
    nextNodeId: 'yi1-chapter-5-1',
  },

  // 一、雨停了
  {
    id: 'yi1-chapter-5-1',
    speaker: 'narrator',
    text: '（……一片寂靜……）',
    bgImage: 'black_screen',
    effect: 'fade-in-slow',
    nextNodeId: 'yi1-chapter-5-2',
  },
  {
    id: 'yi1-chapter-5-2',
    speaker: 'sushi',
    text: '醒了嗎？雨停了。',
    bgImage: 'garden_after_rain', // 雨後清新的庭院
    emotionSFX: 'birds_chirping',
    nextNodeId: 'yi1-chapter-5-3',
  },
  {
    id: 'yi1-chapter-5-3',
    speaker: 'protagonist',
    text: '剛才那是……夢嗎？那棵樹……',
    nextNodeId: 'yi1-chapter-5-4',
  },
  {
    id: 'yi1-chapter-5-4',
    speaker: 'sushi',
    text: '那不是夢。那就是妳的真實樣子。',
    nextNodeId: 'yi1-chapter-5-5',
  },

  // 二、定風波
  {
    id: 'yi1-chapter-5-5',
    speaker: 'sushi',
    text: '樹瘤也是木頭的一部分。燒起來，火特別旺。妳覺得它醜，是因為妳還在用別人的眼光看它。',
    nextNodeId: 'yi1-chapter-5-6',
  },
  {
    id: 'yi1-chapter-5-6',
    speaker: 'sushi',
    text: '我在黃州的時候，也覺得自己很慘。但後來我寫了那首詞。',
    nextNodeId: 'yi1-chapter-5-7',
  },
  {
    id: 'yi1-chapter-5-7',
    speaker: 'sushi',
    text: '回首向來蕭瑟處，歸去，也無風雨也無晴。',
    effect: 'glow', // 金句特效
    nextNodeId: 'yi1-chapter-5-8',
  },
  {
    id: 'yi1-chapter-5-8',
    speaker: 'sushi',
    text: '完整不是沒有缺口，而是不再害怕缺口。接納它，它就會變成妳的力量。',
    nextNodeId: 'yi1-chapter-5-9',
  },
  
  // 三、價值的定義
  {
    id: 'yi1-chapter-5-9',
    speaker: 'protagonist',
    text: '如果我自己都覺得自己沒有價值呢？',
    nextNodeId: 'yi1-chapter-5-10',
  },
  {
    id: 'yi1-chapter-5-10',
    speaker: 'sushi',
    text: '妳願意來這裡，願意面對那些痛苦，這本身就是價值。',
    nextNodeId: 'yi1-chapter-5-end',
  },
  {
    id: 'yi1-chapter-5-end',
    speaker: 'sushi',
    text: '心定了，就該行動了。陽明兄還有最後一課要教妳——知行合一。',
    nextNodeId: 'yi1-chapter-6-intro-1', // 🔗 連接到第六章
    effect: 'fade-out',
  },
];
