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
    nextNodeId: 'yi1-chapter-3-8',
  },
  {
    id: 'yi1-chapter-3-8',
    speaker: 'wangyangming',
    text: '大家？「大家」是誰？',
    nextNodeId: 'yi1-chapter-3-9',
  },
  {
    id: 'yi1-chapter-3-9',
    speaker: 'wangyangming',
    text: '妳一直在向外找答案。問父母、問老師、問社會標準。但妳忘了問那個最重要的人。',
    nextNodeId: 'yi1-chapter-3-10',
  },
  {
    id: 'yi1-chapter-3-10',
    speaker: 'wangyangming',
    text: '聖人之道，吾性自足。心即理。真理不在外面，就在妳心裡。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-3-11',
  },

  // 三、指向命樹
  {
    id: 'yi1-chapter-3-11',
    speaker: 'protagonist',
    text: '可是我的心很亂……我甚至不敢看我心裡有什麼。我覺得裡面充滿了錯誤。',
    nextNodeId: 'yi1-chapter-3-12',
  },
  {
    id: 'yi1-chapter-3-12',
    speaker: 'wangyangming',
    text: '沒有所謂的錯誤，只有未被接納的真實。',
    nextNodeId: 'yi1-chapter-3-13',
  },
  {
    id: 'yi1-chapter-3-13',
    speaker: 'wangyangming',
    text: '去吧。我的朋友蘇東坡在等妳。他會帶妳去面對妳最害怕的東西——妳的「命樹」。',
    nextNodeId: 'yi1-chapter-3-end',
  },
  {
    id: 'yi1-chapter-3-end',
    speaker: 'wangyangming',
    text: '只有看清了它的樣子，妳才能明白什麼是「吾性自足」。',
    nextNodeId: 'yi1-chapter-4-intro-1', // 🔗 連接到第四章
    effect: 'fade-out',
  },
];
