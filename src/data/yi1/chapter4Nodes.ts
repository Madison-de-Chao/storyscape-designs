import type { DialogueNode } from '@/stores/gameStore';

export const chapter4Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-chapter-4-intro-1',
    speaker: 'narrator',
    text: '「每一個靈魂都有一棵樹。」',
    nextNodeId: 'yi1-chapter-4-intro-2',
  },
  {
    id: 'yi1-chapter-4-intro-2',
    speaker: 'narrator',
    text: '「那棵樹記錄著你所有的選擇——包括那些你不願意承認的。」',
    nextNodeId: 'yi1-chapter-4-1',
  },

  // 一、蘇軾的故事
  {
    id: 'yi1-chapter-4-1',
    speaker: 'narrator',
    text: '蘇軾的故事，她聽了整整一個時辰。',
    bgImage: 'bamboo_forest_rain', // 雨中竹林
    emotionSFX: 'rain_light',
    nextNodeId: 'yi1-chapter-4-2',
  },
  {
    id: 'yi1-chapter-4-2',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '一貶再貶，貶到最後，我都不知道還有哪裡可以貶了。',
    nextNodeId: 'yi1-chapter-4-3',
  },
  {
    id: 'yi1-chapter-4-3',
    speaker: 'protagonist',
    text: '你不生氣嗎？',
    nextNodeId: 'yi1-chapter-4-4',
  },
  {
    id: 'yi1-chapter-4-4',
    speaker: 'sushi',
    text: '一開始當然生氣。但後來我發現，生氣沒有用。外境可以困住我的身體，但困不住我的心。',
    nextNodeId: 'yi1-chapter-4-5',
  },
  {
    id: 'yi1-chapter-4-5',
    speaker: 'sushi',
    text: '來吧，光聽我說沒用。帶妳去看看妳的樹。',
    nextNodeId: 'yi1-chapter-4-6',
  },

  // 二、面對命樹
  {
    id: 'yi1-chapter-4-6',
    speaker: 'narrator',
    text: '穿過竹林，眼前出現了一片空地。中間聳立著一棵巨大的樹。',
    bgImage: 'ugly_tree', // 命樹視覺圖
    effect: 'shake', // 視覺衝擊
    nextNodeId: 'yi1-chapter-4-7',
  },
  {
    id: 'yi1-chapter-4-7',
    speaker: 'protagonist',
    text: '這……這是我的命樹？',
    nextNodeId: 'yi1-chapter-4-8',
  },
  {
    id: 'yi1-chapter-4-8',
    speaker: 'narrator',
    text: '那棵樹並不美。樹幹扭曲，上面佈滿了黑色的樹瘤。有些枝條斷了，流出深色的汁液。樹根處有一個巨大的黑洞。',
    nextNodeId: 'yi1-chapter-4-9',
  },
  {
    id: 'yi1-chapter-4-9',
    speaker: 'protagonist',
    text: '好醜……為什麼會這麼醜？',
    nextNodeId: 'yi1-chapter-4-10',
  },
  {
    id: 'yi1-chapter-4-10',
    speaker: 'sushi',
    text: '那些黑色的結節，是妳過去受過的傷。那個黑洞，是妳切掉自己的地方。',
    nextNodeId: 'yi1-chapter-4-11',
  },
  
  // 三、伊的出現與崩潰
  {
    id: 'yi1-chapter-4-11',
    speaker: 'narrator',
    text: '突然，那個黑洞裡傳來了聲音。',
    emotionSFX: 'evil_giggle', // 詭異笑聲
    nextNodeId: 'yi1-chapter-4-12',
  },
  {
    id: 'yi1-chapter-4-12',
    speaker: 'yi',
    speakerName: '伊',
    text: '嘻嘻……終於看到我了嗎？妳想假裝我不在嗎？',
    effect: 'glitch', // 👈 伊的專屬特效
    bgImage: 'yi_shadow', 
    nextNodeId: 'yi1-chapter-4-choice',
  },
  {
    id: 'yi1-chapter-4-choice',
    speaker: 'narrator',
    text: '恐懼像潮水一樣淹沒了她。',
    choices: [
      { id: 'ch4-deny', text: '我不承認這是我的！', nextNodeId: 'yi1-chapter-4-end' },
      { id: 'ch4-run', text: '讓我離開這裡！', nextNodeId: 'yi1-chapter-4-end' },
    ],
  },
  {
    id: 'yi1-chapter-4-end',
    speaker: 'protagonist',
    text: '夠了！我不想看！把這些東西拿走！！',
    effect: 'glitch',        // 強烈崩壞感
    emotionSFX: 'ear_ringing', // 耳鳴聲
    bgImage: 'void_chaos',   // 混亂背景
    nextNodeId: 'yi1-chapter-5-intro-1', // 🔗 連接到第五章
  },
];
