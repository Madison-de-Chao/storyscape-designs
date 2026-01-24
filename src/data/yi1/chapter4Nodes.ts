import type { DialogueNode } from '@/stores/gameStore';

export const chapter4Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-ch4-intro',
    speaker: 'narrator',
    text: '「每一個靈魂都有一棵樹。那棵樹記錄著你所有的選擇——包括那些你不願意承認的。」',
    nextNodeId: 'yi1-ch4-1',
  },

  // 一、蘇軾登場
  {
    id: 'yi1-ch4-1',
    speaker: 'narrator',
    text: '穿過竹林，她來到一片開闊的空地。一個中年男子坐在石頭上，手裡握著一壺酒。',
    bgImage: 'ch4_sushi_sitting',
    nextNodeId: 'yi1-ch4-2',
  },
  {
    id: 'yi1-ch4-2',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '來了？坐。陽明說妳問題很多。',
    nextNodeId: 'yi1-ch4-3',
  },
  {
    id: 'yi1-ch4-3',
    speaker: 'protagonist',
    text: '您就是……蘇東坡先生？',
    nextNodeId: 'yi1-ch4-4',
  },
  {
    id: 'yi1-ch4-4',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '東坡、子瞻、蘇軾，都是我。名字不重要，故事才重要。',
    nextNodeId: 'yi1-ch4-5',
  },

  // 二、蘇軾的故事
  {
    id: 'yi1-ch4-5',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '我這輩子被貶了無數次。最遠貶到海南島，那時候連中原人都覺得那是蠻荒之地。',
    nextNodeId: 'yi1-ch4-6',
  },
  {
    id: 'yi1-ch4-6',
    speaker: 'protagonist',
    text: '你不生氣嗎？',
    nextNodeId: 'yi1-ch4-choice-1',
  },

  // 🎯 選項1：對蘇軾故事的反應
  {
    id: 'yi1-ch4-choice-1',
    speaker: 'narrator',
    text: '蘇軾笑了笑，把酒壺遞過來。',
    choices: [
      {
        id: 'ch4-c1a',
        text: '接過酒壺，喝了一口',
        nextNodeId: 'yi1-ch4-7a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch4-c1b',
        text: '搖頭拒絕',
        nextNodeId: 'yi1-ch4-7b',
        arcChange: 0,
        shadowChange: 2,
      },
    ],
  },
  {
    id: 'yi1-ch4-7a',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '好。能喝酒的人，通常也能吞下人生的苦。',
    nextNodeId: 'yi1-ch4-8',
  },
  {
    id: 'yi1-ch4-7b',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '沒關係，酒不是重點。重點是——我一開始當然生氣。',
    nextNodeId: 'yi1-ch4-8',
  },
  {
    id: 'yi1-ch4-8',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '但後來我發現，生氣沒有用。外境可以否定我的位置，但否定不了我的價值。',
    nextNodeId: 'yi1-ch4-9',
  },
  {
    id: 'yi1-ch4-9',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '來吧，光聽我說沒用。帶妳去看看妳的樹。',
    nextNodeId: 'yi1-ch4-10',
  },

  // 三、面對命樹
  {
    id: 'yi1-ch4-10',
    speaker: 'narrator',
    text: '她跟著蘇軾穿過一片林子。然後，她看見了。',
    bgImage: 'ch4_ugly_tree',
    effect: 'shake',
    nextNodeId: 'yi1-ch4-11',
  },
  {
    id: 'yi1-ch4-11',
    speaker: 'narrator',
    text: '空地中央聳立著一棵巨大的樹。樹幹扭曲，佈滿黑色的樹瘤。有些枝條斷了，流出深色的汁液。樹根處有一個巨大的黑洞。',
    nextNodeId: 'yi1-ch4-12',
  },
  {
    id: 'yi1-ch4-12',
    speaker: 'protagonist',
    text: '這……這是我的命樹？',
    nextNodeId: 'yi1-ch4-choice-2',
  },

  // 🎯 選項2：看到命樹的反應
  {
    id: 'yi1-ch4-choice-2',
    speaker: 'narrator',
    text: '她的聲音在發抖。',
    choices: [
      {
        id: 'ch4-c2a',
        text: '「好醜……為什麼會這麼醜？」',
        nextNodeId: 'yi1-ch4-13a',
        arcChange: -3,
        shadowChange: 5,
      },
      {
        id: 'ch4-c2b',
        text: '「那些黑色的東西……是什麼？」',
        nextNodeId: 'yi1-ch4-13b',
        arcChange: 3,
        shadowChange: 2,
      },
    ],
  },
  {
    id: 'yi1-ch4-13a',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '醜？那是妳用別人的眼光在看。',
    nextNodeId: 'yi1-ch4-14',
  },
  {
    id: 'yi1-ch4-13b',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '妳願意問，這就是勇氣的開始。',
    nextNodeId: 'yi1-ch4-14',
  },
  {
    id: 'yi1-ch4-14',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '那些黑色的結節，是妳過去受過的傷。那個黑洞——是妳切掉自己的地方。',
    nextNodeId: 'yi1-ch4-15',
  },

  // 四、伊的出現
  {
    id: 'yi1-ch4-15',
    speaker: 'narrator',
    text: '突然，那個黑洞裡傳來了聲音。',
    emotionSFX: 'evil_giggle',
    nextNodeId: 'yi1-ch4-16',
  },
  {
    id: 'yi1-ch4-16',
    speaker: 'yi',
    speakerName: '伊',
    text: '嘻嘻……終於看到我了嗎？',
    effect: 'glitch',
    bgImage: 'ch4_yi_shadow',
    nextNodeId: 'yi1-ch4-17',
  },
  {
    id: 'yi1-ch4-17',
    speaker: 'yi',
    speakerName: '伊',
    text: '妳以為把我藏起來，我就不存在了？妳以為假裝沒有我，妳就能變成「好人」？',
    nextNodeId: 'yi1-ch4-choice-3',
  },

  // 🎯 選項3：面對伊的反應
  {
    id: 'yi1-ch4-choice-3',
    speaker: 'narrator',
    text: '恐懼像潮水一樣淹沒了她。',
    choices: [
      {
        id: 'ch4-c3a',
        text: '「我不承認這是我的！」',
        nextNodeId: 'yi1-ch4-18a',
        arcChange: -5,
        shadowChange: 10,
      },
      {
        id: 'ch4-c3b',
        text: '「讓我離開這裡……」',
        nextNodeId: 'yi1-ch4-18b',
        arcChange: 0,
        shadowChange: 5,
      },
    ],
  },
  {
    id: 'yi1-ch4-18a',
    speaker: 'yi',
    speakerName: '伊',
    text: '不承認？哈哈哈……妳越否認，我就越強大。',
    nextNodeId: 'yi1-ch4-19',
  },
  {
    id: 'yi1-ch4-18b',
    speaker: 'yi',
    speakerName: '伊',
    text: '逃？妳逃了三十年，逃到哪裡了？',
    nextNodeId: 'yi1-ch4-19',
  },
  {
    id: 'yi1-ch4-19',
    speaker: 'protagonist',
    text: '夠了！我不想看！把這些東西拿走！！',
    effect: 'glitch',
    emotionSFX: 'ear_ringing',
    nextNodeId: 'yi1-ch4-20',
  },
  {
    id: 'yi1-ch4-20',
    speaker: 'narrator',
    text: '世界開始崩塌。顏色扭曲，聲音變形。她感覺自己在墜落——',
    bgImage: 'ch4_void_chaos',
    effect: 'shake',
    nextNodeId: 'yi1-ch4-end',
  },
  {
    id: 'yi1-ch4-end',
    speaker: 'narrator',
    text: '然後，一切歸於黑暗。',
    effect: 'fade-out',
    nextNodeId: 'yi1-ch5-intro',
  },
];
