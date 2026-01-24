import type { DialogueNode } from '@/stores/gameStore';

export const chapter3Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-ch3-intro',
    speaker: 'narrator',
    text: '「你心裡的真相，才是唯一的真相。」——王陽明',
    effect: 'glow',
    nextNodeId: 'yi1-ch3-1',
  },

  // 一、庭院
  {
    id: 'yi1-ch3-1',
    speaker: 'narrator',
    text: '船靠岸了。這是一座安靜的庭院，竹影搖曳，陽光從葉縫間灑落。',
    bgImage: 'ch3_bamboo_courtyard',
    nextNodeId: 'yi1-ch3-2',
  },
  {
    id: 'yi1-ch3-2',
    speaker: 'narrator',
    text: '一個長者正在掃地。他的動作很慢，但每一掃帚下去，落葉就乖乖聚在一起。',
    nextNodeId: 'yi1-ch3-3',
  },
  {
    id: 'yi1-ch3-3',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '妳來了。地很髒，就像人心裡的雜念一樣。',
    bgImage: 'ch3_wang_sweeping',
    nextNodeId: 'yi1-ch3-choice-1',
  },

  // 🎯 選項1：對王陽明的態度
  {
    id: 'yi1-ch3-choice-1',
    speaker: 'narrator',
    text: '她看著眼前的老人，心裡有些疑惑。',
    choices: [
      {
        id: 'ch3-c1a',
        text: '「您是……王陽明先生？」',
        nextNodeId: 'yi1-ch3-4a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch3-c1b',
        text: '「你怎麼知道我會來？」',
        nextNodeId: 'yi1-ch3-4b',
        arcChange: 0,
        shadowChange: 2,
      },
    ],
  },
  {
    id: 'yi1-ch3-4a',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '名字只是代號。重要的是，妳帶著什麼問題來。',
    nextNodeId: 'yi1-ch3-5',
  },
  {
    id: 'yi1-ch3-4b',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '每個迷路的人，最終都會走到這裡。重要的是，妳帶著什麼問題來。',
    nextNodeId: 'yi1-ch3-5',
  },

  // 二、什麼是對錯
  {
    id: 'yi1-ch3-5',
    speaker: 'protagonist',
    text: '我想知道……我到底做錯了什麼？',
    nextNodeId: 'yi1-ch3-6',
  },
  {
    id: 'yi1-ch3-6',
    speaker: 'protagonist',
    text: '我努力讀書、努力工作、努力當好人。但大家都說我不夠好。',
    nextNodeId: 'yi1-ch3-7',
  },
  {
    id: 'yi1-ch3-7',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '大家？「大家」是誰？',
    nextNodeId: 'yi1-ch3-choice-2',
  },

  // 🎯 選項2：「大家」的定義
  {
    id: 'yi1-ch3-choice-2',
    speaker: 'narrator',
    text: '她張了張嘴，想要回答，卻發現自己說不出具體的名字。',
    choices: [
      {
        id: 'ch3-c2a',
        text: '「父母、老師、社會……所有人。」',
        nextNodeId: 'yi1-ch3-8a',
        arcChange: 0,
        shadowChange: 3,
      },
      {
        id: 'ch3-c2b',
        text: '「……我也不知道。好像是一種感覺。」',
        nextNodeId: 'yi1-ch3-8b',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch3-8a',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '所有人？那妳自己呢？妳的聲音在哪裡？',
    nextNodeId: 'yi1-ch3-9',
  },
  {
    id: 'yi1-ch3-8b',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '能察覺這是「感覺」而非事實，這很重要。',
    nextNodeId: 'yi1-ch3-9',
  },
  {
    id: 'yi1-ch3-9',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '妳一直在向外找答案——問父母、問老師、問社會標準。但妳忘了問那個最重要的人。',
    nextNodeId: 'yi1-ch3-10',
  },
  {
    id: 'yi1-ch3-10',
    speaker: 'protagonist',
    text: '誰？',
    nextNodeId: 'yi1-ch3-11',
  },
  {
    id: 'yi1-ch3-11',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '妳自己。',
    bgImage: 'ch3_wang_lantern',
    nextNodeId: 'yi1-ch3-12',
  },

  // 三、心即理
  {
    id: 'yi1-ch3-12',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '聖人之道，吾性自足。心即理——真理不在外面，就在妳心裡。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '心即理',
      subtitle: '——王陽明',
      theme: 'golden',
    },
    nextNodeId: 'yi1-ch3-13',
  },
  {
    id: 'yi1-ch3-13',
    speaker: 'protagonist',
    text: '可是我的心很亂……我甚至不敢看心裡有什麼。',
    nextNodeId: 'yi1-ch3-choice-3',
  },

  // 🎯 選項3：面對內心
  {
    id: 'yi1-ch3-choice-3',
    speaker: 'narrator',
    text: '王陽明靜靜地看著她，眼中沒有責備，只有理解。',
    choices: [
      {
        id: 'ch3-c3a',
        text: '「我害怕看到真正的自己。」',
        nextNodeId: 'yi1-ch3-14a',
        arcChange: 3,
        shadowChange: 2,
      },
      {
        id: 'ch3-c3b',
        text: '「也許……我應該試著看看。」',
        nextNodeId: 'yi1-ch3-14b',
        arcChange: 8,
        shadowChange: -3,
      },
    ],
  },
  {
    id: 'yi1-ch3-14a',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '害怕是正常的。但記住——沒有所謂的「錯誤」，只有未被接納的真實。',
    nextNodeId: 'yi1-ch3-15',
  },
  {
    id: 'yi1-ch3-14b',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '勇氣不是沒有恐懼，而是帶著恐懼前行。',
    nextNodeId: 'yi1-ch3-15',
  },

  // 四、指向命樹
  {
    id: 'yi1-ch3-15',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '去吧。我的朋友蘇東坡在等妳。他會帶妳去面對妳最害怕的東西——',
    nextNodeId: 'yi1-ch3-16',
  },
  {
    id: 'yi1-ch3-16',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '妳的「命樹」。',
    bgImage: 'ch3_path_to_forest',
    nextNodeId: 'yi1-ch3-17',
  },
  {
    id: 'yi1-ch3-17',
    speaker: 'protagonist',
    text: '命樹？',
    nextNodeId: 'yi1-ch3-end',
  },
  {
    id: 'yi1-ch3-end',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '只有看清了它的樣子，妳才能明白什麼是「吾性自足」。',
    effect: 'fade-out',
    nextNodeId: 'yi1-ch4-intro',
  },
];
