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
    nextNodeId: 'yi1-chapter-2-choice-1',
  },
  // 🎯 選項1：對「炸了」的反應
  {
    id: 'yi1-chapter-2-choice-1',
    speaker: 'narrator',
    text: '「把自己的世界炸了」——這句話像一記重錘，敲在她心上。',
    choices: [
      {
        id: 'choice-2-1a',
        text: '「我只是想結束一切……」',
        arcChange: -5,
        shadowChange: 5,
        nextNodeId: 'yi1-chapter-2-9a',
      },
      {
        id: 'choice-2-1b',
        text: '「那個按鈕……我記得。」',
        arcChange: 5,
        shadowChange: 0,
        nextNodeId: 'yi1-chapter-2-9b',
      },
    ],
  },
  {
    id: 'yi1-chapter-2-9a',
    speaker: 'wenxin',
    text: '結束？不，妳只是按下了暫停鍵。真正的結束，需要妳親自走完這段路。',
    nextNodeId: 'yi1-chapter-2-10',
  },
  {
    id: 'yi1-chapter-2-9b',
    speaker: 'wenxin',
    text: '記得就好。那一刻的感覺，妳需要好好面對。',
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
    bgImage: 'wenxin_smile',
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
    bgImage: 'foggy_river_distant',
    nextNodeId: 'yi1-chapter-2-choice-2',
  },
  // 🎯 選項2：對導師的態度
  {
    id: 'yi1-chapter-2-choice-2',
    speaker: 'narrator',
    text: '導師？她從來不相信什麼導師。人生的路不都是自己走的嗎？',
    choices: [
      {
        id: 'choice-2-2a',
        text: '「我不需要導師。」',
        arcChange: -3,
        shadowChange: 3,
        nextNodeId: 'yi1-chapter-2-14a',
      },
      {
        id: 'choice-2-2b',
        text: '「……好吧，我願意試試。」',
        arcChange: 5,
        shadowChange: -2,
        nextNodeId: 'yi1-chapter-2-14b',
      },
    ],
  },
  {
    id: 'yi1-chapter-2-14a',
    speaker: 'wenxin',
    text: '（輕笑）不需要？那妳為什麼會來到這裡？',
    nextNodeId: 'yi1-chapter-2-15',
  },
  {
    id: 'yi1-chapter-2-14b',
    speaker: 'wenxin',
    text: '（微微點頭）願意嘗試，這就是改變的開始。',
    nextNodeId: 'yi1-chapter-2-15',
  },
  {
    id: 'yi1-chapter-2-15',
    speaker: 'wenxin',
    text: '妳一直在向外找答案，想知道什麼是對的，什麼是錯的。這個人，或許能回答妳。',
    nextNodeId: 'yi1-chapter-2-end',
  },
  {
    id: 'yi1-chapter-2-end',
    speaker: 'narrator',
    text: '船穿過迷霧，前方隱約出現了一座古樸的庭院。',
    bgImage: 'courtyard_distant',
    nextNodeId: 'yi1-chapter-3-intro-1',
    effect: 'mist',
  },
];
