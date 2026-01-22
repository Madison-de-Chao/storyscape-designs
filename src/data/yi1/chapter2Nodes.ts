import type { DialogueNode } from '@/stores/gameStore';

export const chapter2Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-chapter-2-intro-1',
    speaker: 'narrator',
    text: '「歡迎來到元壹境。」',
    nextNodeId: 'yi1-chapter-2-intro-2',
  },
  {
    id: 'yi1-chapter-2-intro-2',
    speaker: 'narrator',
    text: '「這裡是所有靈魂的起點，也是終點。」',
    nextNodeId: 'yi1-chapter-2-1',
    effect: 'glow',
  },

  // 一、桂花香
  {
    id: 'yi1-chapter-2-1',
    speaker: 'narrator',
    text: '她醒來的時候，聞到一股淡淡的桂花香。',
    bgImage: 'foggy_river', // 迷霧渡口
    effect: 'fade-in-slow',
    nextNodeId: 'yi1-chapter-2-2',
  },
  {
    id: 'yi1-chapter-2-2',
    speaker: 'narrator',
    text: '不是那種人工合成的香精味，是真正的、從樹上飄下來的、帶著露水氣息的桂花香。',
    nextNodeId: 'yi1-chapter-2-3',
  },
  {
    id: 'yi1-chapter-2-3',
    speaker: 'narrator',
    text: '她睜開眼睛。四周是一片白茫茫的霧。腳下不是冰冷的地板，而是溫暖的木板。',
    nextNodeId: 'yi1-chapter-2-4',
  },
  {
    id: 'yi1-chapter-2-4',
    speaker: 'narrator',
    text: '水聲。嘩啦、嘩啦。像是有什麼東西在輕輕拍打著岸邊。',
    nextNodeId: 'yi1-chapter-2-5',
  },

  // 二、擺渡人登場
  {
    id: 'yi1-chapter-2-5',
    speaker: 'wenxin',
    speakerName: '？？？',
    text: '醒了？',
    nextNodeId: 'yi1-chapter-2-6',
  },
  {
    id: 'yi1-chapter-2-6',
    speaker: 'narrator',
    text: '她猛地坐起來。船頭坐著一個人。一個穿著灰色長袍的人，手裡握著一支長篙，正在撐船。看不清臉，只看到一個模糊的輪廓。',
    bgImage: 'ferryman_silhouette',
    nextNodeId: 'yi1-chapter-2-7',
  },
  {
    id: 'yi1-chapter-2-7',
    speaker: 'protagonist',
    text: '你是誰？這裡是哪裡？我……死了嗎？',
    nextNodeId: 'yi1-chapter-2-8',
  },
  {
    id: 'yi1-chapter-2-8',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '這裡是元壹境。妳沒死，只是把自己的世界炸了。',
    nextNodeId: 'yi1-chapter-2-9',
  },
  {
    id: 'yi1-chapter-2-9',
    speaker: 'protagonist',
    text: '炸了？',
    nextNodeId: 'yi1-chapter-2-10',
  },
  {
    id: 'yi1-chapter-2-10',
    speaker: 'wenxin',
    text: '妳按下了那個按鈕，記得嗎？那一刻，妳心中的某個東西崩塌了。我們感覺到了震動，所以把妳接了過來。',
    nextNodeId: 'yi1-chapter-2-11',
  },
  {
    id: 'yi1-chapter-2-11',
    speaker: 'wenxin',
    text: '我是這裡的擺渡人。妳可以叫我——問心。',
    bgImage: 'wenxin_smile', // 問心露臉
    effect: 'glow',
    nextNodeId: 'yi1-chapter-2-12',
  },
  
  // 三、前往第一站
  {
    id: 'yi1-chapter-2-12',
    speaker: 'protagonist',
    text: '那我們要去哪裡？',
    nextNodeId: 'yi1-chapter-2-13',
  },
  {
    id: 'yi1-chapter-2-13',
    speaker: 'wenxin',
    text: '去見第一位導師。他等妳很久了。',
    nextNodeId: 'yi1-chapter-2-14',
  },
  {
    id: 'yi1-chapter-2-14',
    speaker: 'wenxin',
    text: '妳一直在找一個標準答案，想知道什麼是對的，什麼是錯的。這個人，或許能回答妳。',
    nextNodeId: 'yi1-chapter-2-end',
  },
  {
    id: 'yi1-chapter-2-end',
    speaker: 'narrator',
    text: '船穿過迷霧，前方隱約出現了一座古樸的庭院。',
    nextNodeId: 'yi1-chapter-3-intro-1', // 🔗 連接到第三章
    effect: 'mist',
  },
];
