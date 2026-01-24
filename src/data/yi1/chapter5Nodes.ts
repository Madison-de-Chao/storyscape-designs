import type { DialogueNode } from '@/stores/gameStore';

export const chapter5Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-ch5-intro',
    speaker: 'narrator',
    text: '「我這一生被貶了無數次，但我從未貶低過自己。你知道這兩者的區別嗎？」',
    nextNodeId: 'yi1-ch5-1',
  },

  // 一、雨停了
  {
    id: 'yi1-ch5-1',
    speaker: 'narrator',
    text: '（……一片寂靜……）',
    bgImage: 'ch5_black_screen',
    effect: 'fade-in-slow',
    nextNodeId: 'yi1-ch5-2',
  },
  {
    id: 'yi1-ch5-2',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '醒了嗎？雨停了。',
    bgImage: 'ch5_garden_after_rain',
    emotionSFX: 'birds_chirping',
    nextNodeId: 'yi1-ch5-3',
  },
  {
    id: 'yi1-ch5-3',
    speaker: 'narrator',
    text: '她睜開眼睛。她躺在一座雨後的庭院裡，空氣中有泥土和青草的味道。',
    nextNodeId: 'yi1-ch5-4',
  },
  {
    id: 'yi1-ch5-4',
    speaker: 'protagonist',
    text: '剛才那是……夢嗎？那棵樹、那個聲音……',
    nextNodeId: 'yi1-ch5-5',
  },
  {
    id: 'yi1-ch5-5',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '不是夢。那就是妳的真實樣子。',
    nextNodeId: 'yi1-ch5-6',
  },

  // 二、樹瘤的意義
  {
    id: 'yi1-ch5-6',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '妳覺得那棵樹很醜。但妳知道嗎？樹瘤也是木頭的一部分。燒起來，火特別旺。',
    nextNodeId: 'yi1-ch5-7',
  },
  {
    id: 'yi1-ch5-7',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '妳覺得它醜，是因為妳還在用別人的眼光看它。',
    nextNodeId: 'yi1-ch5-choice-1',
  },

  // 🎯 選項1：對缺陷的看法
  {
    id: 'yi1-ch5-choice-1',
    speaker: 'narrator',
    text: '她低頭看著自己的手，想起那些她一直想隱藏的缺點。',
    choices: [
      {
        id: 'ch5-c1a',
        text: '「可是別人看到的就是醜陋……」',
        nextNodeId: 'yi1-ch5-8a',
        arcChange: -3,
        shadowChange: 5,
      },
      {
        id: 'ch5-c1b',
        text: '「那我要怎麼改變看法？」',
        nextNodeId: 'yi1-ch5-8b',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch5-8a',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '別人的眼光，是別人的事。妳的命樹，是妳自己的。',
    nextNodeId: 'yi1-ch5-9',
  },
  {
    id: 'yi1-ch5-8b',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '不是改變看法，是找回自己的眼睛。',
    nextNodeId: 'yi1-ch5-9',
  },

  // 三、定風波
  {
    id: 'yi1-ch5-9',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '我在黃州的時候，也覺得自己很慘。一場大雨，同行的人都在躲。',
    bgImage: 'ch5_sushi_rain',
    nextNodeId: 'yi1-ch5-10',
  },
  {
    id: 'yi1-ch5-10',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '但我想，這雨會停。一切都會停。到時候回頭看——',
    nextNodeId: 'yi1-ch5-11',
  },
  {
    id: 'yi1-ch5-11',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '回首向來蕭瑟處，歸去，也無風雨也無晴。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '也無風雨也無晴',
      subtitle: '——蘇軾《定風波》',
      theme: 'ink',
    },
    nextNodeId: 'yi1-ch5-12',
  },
  {
    id: 'yi1-ch5-12',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '完整不是沒有缺口，而是不再害怕缺口。接納它，它就會變成妳的力量。',
    nextNodeId: 'yi1-ch5-13',
  },

  // 四、價值的定義
  {
    id: 'yi1-ch5-13',
    speaker: 'protagonist',
    text: '如果我自己都覺得自己沒有價值呢？',
    nextNodeId: 'yi1-ch5-choice-2',
  },

  // 🎯 選項2：價值從何而來
  {
    id: 'yi1-ch5-choice-2',
    speaker: 'narrator',
    text: '蘇軾放下手中的茶碗，認真地看著她。',
    bgImage: 'ch5_tea_moment',
    choices: [
      {
        id: 'ch5-c2a',
        text: '「價值不是別人給的嗎？」',
        nextNodeId: 'yi1-ch5-14a',
        arcChange: 0,
        shadowChange: 3,
      },
      {
        id: 'ch5-c2b',
        text: '「我想找到屬於自己的價值。」',
        nextNodeId: 'yi1-ch5-14b',
        arcChange: 8,
        shadowChange: -2,
      },
    ],
  },
  {
    id: 'yi1-ch5-14a',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '別人給的，別人也能收回。只有自己給的，才真正屬於妳。',
    nextNodeId: 'yi1-ch5-15',
  },
  {
    id: 'yi1-ch5-14b',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '這就對了。妳願意來這裡、願意面對那些痛苦，這本身就是價值。',
    nextNodeId: 'yi1-ch5-15',
  },
  {
    id: 'yi1-ch5-15',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '外境可以否定妳的位置，但否定不了妳的價值。記住這句話。',
    effect: 'glow',
    nextNodeId: 'yi1-ch5-choice-3',
  },

  // 🎯 選項3：是否準備好
  {
    id: 'yi1-ch5-choice-3',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '心定了，就該行動了。陽明兄還有最後一課要教妳——知行合一。準備好了嗎？',
    choices: [
      {
        id: 'ch5-c3a',
        text: '「我不確定……但我想繼續。」',
        nextNodeId: 'yi1-ch5-16a',
        arcChange: 5,
        shadowChange: 0,
      },
      {
        id: 'ch5-c3b',
        text: '「我準備好了。」',
        nextNodeId: 'yi1-ch5-16b',
        arcChange: 8,
        shadowChange: -3,
      },
    ],
  },
  {
    id: 'yi1-ch5-16a',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '不確定也沒關係。走著走著，路就清楚了。',
    nextNodeId: 'yi1-ch5-17',
  },
  {
    id: 'yi1-ch5-16b',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '好。記住今天的感覺，它會在最難的時候幫妳。',
    nextNodeId: 'yi1-ch5-17',
  },
  {
    id: 'yi1-ch5-17',
    speaker: 'narrator',
    text: '遠處的山徑上，一個熟悉的身影正在等待。',
    bgImage: 'ch5_path_to_mountain',
    nextNodeId: 'yi1-ch5-end',
  },
  {
    id: 'yi1-ch5-end',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '去吧。我們會再見的。',
    effect: 'fade-out',
    nextNodeId: 'yi1-ch6-intro',
  },
];  },
  {
    id: 'yi1-chapter-5-11a',
    speaker: 'sushi',
    text: '別人給的，別人也能收回。只有自己給的，才真正屬於妳。',
    nextNodeId: 'yi1-chapter-5-12',
  },
  {
    id: 'yi1-chapter-5-11b',
    speaker: 'sushi',
    text: '（微笑）這就對了。妳願意來這裡，願意面對那些痛苦，這本身就是價值。',
    nextNodeId: 'yi1-chapter-5-12',
  },
  {
    id: 'yi1-chapter-5-12',
    speaker: 'sushi',
    text: '妳願意來這裡，願意面對那些痛苦，這本身就是價值。',
    nextNodeId: 'yi1-chapter-5-end',
  },
  {
    id: 'yi1-chapter-5-end',
    speaker: 'sushi',
    text: '心定了，就該行動了。陽明兄還有最後一課要教妳——知行合一。',
    bgImage: 'path_to_mountain',
    nextNodeId: 'yi1-chapter-6-intro-1',
    effect: 'fade-out',
  },
];
