import type { DialogueNode } from '@/stores/gameStore';

export const chapter3Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-chapter-3-intro-1',
    speaker: 'narrator',
    text: '「你心裡的真相，才是唯一的真相。」',
    nextNodeId: 'yi1-chapter-3-intro-2',
  },
  {
    id: 'yi1-chapter-3-intro-2',
    speaker: 'narrator',
    text: '——王陽明',
    nextNodeId: 'yi1-chapter-3-1',
    effect: 'glow',
  },

  // 一、庭院掃地
  {
    id: 'yi1-chapter-3-1',
    speaker: 'narrator',
    text: '船靠岸了。這是一座安靜的庭院。',
    bgImage: 'wang_courtyard',
    nextNodeId: 'yi1-chapter-3-2',
  },
  {
    id: 'yi1-chapter-3-2',
    speaker: 'narrator',
    text: '一個長者正在掃地。他的動作很慢，但每一掃帚下去，地上的落葉就乖乖地聚在一起。',
    nextNodeId: 'yi1-chapter-3-3',
  },
  {
    id: 'yi1-chapter-3-3',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '妳來了。地很髒，就像人心裡的雜念一樣。',
    nextNodeId: 'yi1-chapter-3-4',
  },
  {
    id: 'yi1-chapter-3-4',
    speaker: 'protagonist',
    text: '您是……王陽明先生？',
    nextNodeId: 'yi1-chapter-3-5',
  },
  {
    id: 'yi1-chapter-3-5',
    speaker: 'wangyangming',
    text: '名字只是個代號。重要的是，妳帶著什麼問題來。',
    nextNodeId: 'yi1-chapter-3-6',
  },

  // 二、什麼是對錯
  {
    id: 'yi1-chapter-3-6',
    speaker: 'protagonist',
    text: '我想知道……我到底做錯了什麼？',
    nextNodeId: 'yi1-chapter-3-7',
  },
  {
    id: 'yi1-chapter-3-7',
    speaker: 'protagonist',
    text: '我努力讀書，努力工作，努力當個好人。但我還是覺得自己很失敗。大家都說我不夠好。',
    nextNodeId: 'yi1-chapter-3-choice-1',
  },
  // 🎯 選項1：對「大家」的定義
  {
    id: 'yi1-chapter-3-choice-1',
    speaker: 'wangyangming',
    text: '大家？「大家」是誰？',
    choices: [
      {
        id: 'choice-3-1a',
        text: '「父母、老師、社會……所有人。」',
        arcChange: 0,
        shadowChange: 3,
        nextNodeId: 'yi1-chapter-3-8a',
      },
      {
        id: 'choice-3-1b',
        text: '「……我也不知道。好像是一種感覺。」',
        arcChange: 5,
        shadowChange: 0,
        nextNodeId: 'yi1-chapter-3-8b',
      },
    ],
  },
  {
    id: 'yi1-chapter-3-8a',
    speaker: 'wangyangming',
    text: '所有人？那妳自己呢？妳的聲音在哪裡？',
    nextNodeId: 'yi1-chapter-3-9',
  },
  {
    id: 'yi1-chapter-3-8b',
    speaker: 'wangyangming',
    text: '（點頭）能察覺這是一種「感覺」而非事實，這很重要。',
    nextNodeId: 'yi1-chapter-3-9',
  },
  {
    id: 'yi1-chapter-3-9',
    speaker: 'wangyangming',
    text: '妳一直在向外找答案。問父母、問老師、問社會標準。但妳忘了問那個最重要的人。',
    bgImage: 'wang_lantern_path',
    nextNodeId: 'yi1-chapter-3-10',
  },
  {
    id: 'yi1-chapter-3-10',
    speaker: 'wangyangming',
    text: '聖人之道，吾性自足。心即理。真理不在外面，就在妳心裡。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '心即理',
      subtitle: '——王陽明',
      theme: 'golden',
    },
    nextNodeId: 'yi1-chapter-3-11',
  },

  // 三、指向命樹
  {
    id: 'yi1-chapter-3-11',
    speaker: 'protagonist',
    text: '可是我的心很亂……我甚至不敢看我心裡有什麼。我覺得裡面充滿了錯誤。',
    nextNodeId: 'yi1-chapter-3-choice-2',
  },
  // 🎯 選項2：面對內心的態度
  {
    id: 'yi1-chapter-3-choice-2',
    speaker: 'narrator',
    text: '王陽明靜靜地看著她，眼中沒有責備，只有理解。',
    choices: [
      {
        id: 'choice-3-2a',
        text: '「我害怕看到真正的自己。」',
        arcChange: 3,
        shadowChange: 2,
        nextNodeId: 'yi1-chapter-3-12a',
      },
      {
        id: 'choice-3-2b',
        text: '「也許……我應該試著看看。」',
        arcChange: 8,
        shadowChange: -3,
        nextNodeId: 'yi1-chapter-3-12b',
      },
    ],
  },
  {
    id: 'yi1-chapter-3-12a',
    speaker: 'wangyangming',
    text: '害怕是正常的。但記住——沒有所謂的錯誤，只有未被接納的真實。',
    nextNodeId: 'yi1-chapter-3-13',
  },
  {
    id: 'yi1-chapter-3-12b',
    speaker: 'wangyangming',
    text: '（微笑）勇氣不是沒有恐懼，而是帶著恐懼前行。',
    nextNodeId: 'yi1-chapter-3-13',
  },
  {
    id: 'yi1-chapter-3-13',
    speaker: 'wangyangming',
    text: '去吧。我的朋友蘇東坡在等妳。他會帶妳去面對妳最害怕的東西——妳的「命樹」。',
    bgImage: 'bamboo_rain_path',
    nextNodeId: 'yi1-chapter-3-end',
  },
  {
    id: 'yi1-chapter-3-end',
    speaker: 'wangyangming',
    text: '只有看清了它的樣子，妳才能明白什麼是「吾性自足」。',
    nextNodeId: 'yi1-chapter-4-intro-1',
    effect: 'fade-out',
  },
];
