import type { DialogueNode } from '@/stores/gameStore';

export const chapter2Nodes: DialogueNode[] = [
  // 開場
  {
    id: 'yi1-ch2-intro',
    speaker: 'narrator',
    text: '「歡迎來到元壹境。這裡是所有靈魂的起點，也是終點。」',
    effect: 'glow',
    bgImage: 'ch2_golden_river',
    nextNodeId: 'yi1-ch2-1',
  },

  // 一、醒來
  {
    id: 'yi1-ch2-1',
    speaker: 'narrator',
    text: '她醒來時，聞到淡淡的桂花香。真正的、帶著露水氣息的桂花香。',
    effect: 'fade-in-slow',
    nextNodeId: 'yi1-ch2-2',
  },
  {
    id: 'yi1-ch2-2',
    speaker: 'narrator',
    text: '天空是一種從未見過的顏色——像黎明與黃昏同時存在。她躺在銀白色的草地上，身後是一條金色的河流。',
    nextNodeId: 'yi1-ch2-3',
  },
  {
    id: 'yi1-ch2-3',
    speaker: 'protagonist',
    text: '我……死了嗎？',
    nextNodeId: 'yi1-ch2-4',
  },

  // 二、問心登場
  {
    id: 'yi1-ch2-4',
    speaker: 'wenxin',
    speakerName: '？？？',
    text: '還沒有呢。',
    nextNodeId: 'yi1-ch2-5',
  },
  {
    id: 'yi1-ch2-5',
    speaker: 'narrator',
    text: '她回頭。一個穿著月白長衫的女子站在那裡，面容溫和，眼神清澈——看起來三十歲，又好像活了很久很久。',
    bgImage: 'ch2_wenxin_appear',
    nextNodeId: 'yi1-ch2-6',
  },
  {
    id: 'yi1-ch2-6',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '我是問心。你正站在懸崖邊上，有人決定在你墜落之前，先把你接過來。',
    nextNodeId: 'yi1-ch2-7',
  },
  {
    id: 'yi1-ch2-7',
    speaker: 'protagonist',
    text: '懸崖？我只是在刪除檔案……',
    nextNodeId: 'yi1-ch2-8',
  },
  {
    id: 'yi1-ch2-8',
    speaker: 'wenxin',
    text: '那是你的夢想。你覺得它沒用？',
    nextNodeId: 'yi1-ch2-choice-1',
  },

  // 🎯 選項1：對夢想的態度
  {
    id: 'yi1-ch2-choice-1',
    speaker: 'narrator',
    text: '夢想？那些幼稚的故事？',
    choices: [
      {
        id: 'ch2-c1a',
        text: '「那不是夢想，是逃避。」',
        nextNodeId: 'yi1-ch2-9a',
        arcChange: -3,
        shadowChange: 5,
      },
      {
        id: 'ch2-c1b',
        text: '「……也許曾經是。」',
        nextNodeId: 'yi1-ch2-9b',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch2-9a',
    speaker: 'wenxin',
    text: '逃避？還是唯一讓你感覺自己還活著的地方？',
    nextNodeId: 'yi1-ch2-10',
  },
  {
    id: 'yi1-ch2-9b',
    speaker: 'wenxin',
    text: '曾經是，現在也是。只是你不敢承認。',
    nextNodeId: 'yi1-ch2-10',
  },

  // 三、渡河
  {
    id: 'yi1-ch2-10',
    speaker: 'wenxin',
    text: '走吧，我帶你去見一些人。',
    nextNodeId: 'yi1-ch2-11',
  },
  {
    id: 'yi1-ch2-11',
    speaker: 'narrator',
    text: '她們登上一艘墨色的小船。河面上漂浮著點點螢光，像星星撒進了水裡。',
    bgImage: 'ch2_boat_memory',
    nextNodeId: 'yi1-ch2-12',
  },
  {
    id: 'yi1-ch2-12',
    speaker: 'wenxin',
    text: '別碰那些光點，那是記憶。每個來到這裡的靈魂，都會把記憶留在這條河裡。',
    nextNodeId: 'yi1-ch2-13',
  },
  {
    id: 'yi1-ch2-13',
    speaker: 'protagonist',
    text: '如果忘記了一切，那還是「我」嗎？',
    nextNodeId: 'yi1-ch2-14',
  },
  {
    id: 'yi1-ch2-14',
    speaker: 'wenxin',
    text: '好問題。這正是你要來這裡學習的原因。',
    nextNodeId: 'yi1-ch2-15',
  },

  // 四、弧度概念
  {
    id: 'yi1-ch2-15',
    speaker: 'narrator',
    text: '船靠岸。眼前是宏偉的建築群，遠處有一座半圓形的山。',
    bgImage: 'ch2_dock_mountain',
    nextNodeId: 'yi1-ch2-16',
  },
  {
    id: 'yi1-ch2-16',
    speaker: 'wenxin',
    text: '那是歸元山。你現在是一條弧線，你的任務是讓自己變成一個圓。',
    nextNodeId: 'yi1-ch2-17',
  },
  {
    id: 'yi1-ch2-17',
    speaker: 'protagonist',
    text: '怎麼變？',
    nextNodeId: 'yi1-ch2-18',
  },
  {
    id: 'yi1-ch2-18',
    speaker: 'wenxin',
    text: '見你該見的人，學你該學的事，面對你該面對的——伊。',
    effect: 'glitch',
    nextNodeId: 'yi1-ch2-choice-2',
  },

  // 🎯 選項2：對「伊」的反應
  {
    id: 'yi1-ch2-choice-2',
    speaker: 'narrator',
    text: '「伊」——那個字像一道閃電劈進她腦海。',
    choices: [
      {
        id: 'ch2-c2a',
        text: '「伊是什麼？」',
        nextNodeId: 'yi1-ch2-19a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch2-c2b',
        text: '「……我不想知道。」',
        nextNodeId: 'yi1-ch2-19b',
        arcChange: -3,
        shadowChange: 5,
      },
    ],
  },
  {
    id: 'yi1-ch2-19a',
    speaker: 'wenxin',
    text: '你很快就會知道。先去見那些已經學會完整的人。',
    nextNodeId: 'yi1-ch2-20',
  },
  {
    id: 'yi1-ch2-19b',
    speaker: 'wenxin',
    text: '不想知道，和不敢知道，是不一樣的。但不急，先去見那些已經學會完整的人。',
    nextNodeId: 'yi1-ch2-20',
  },
  {
    id: 'yi1-ch2-20',
    speaker: 'wenxin',
    text: '他們都曾經和你一樣，以為自己做什麼都不對。但他們學會了不再和自己打仗。',
    nextNodeId: 'yi1-ch2-choice-3',
  },

  // 🎯 選項3：能否學會
  {
    id: 'yi1-ch2-choice-3',
    speaker: 'protagonist',
    text: '我也能學會嗎？',
    choices: [
      {
        id: 'ch2-c3a',
        text: '「我不確定……」',
        nextNodeId: 'yi1-ch2-21a',
        arcChange: 0,
        shadowChange: 3,
      },
      {
        id: 'ch2-c3b',
        text: '「我想試試。」',
        nextNodeId: 'yi1-ch2-21b',
        arcChange: 5,
        shadowChange: -2,
      },
    ],
  },
  {
    id: 'yi1-ch2-21a',
    speaker: 'wenxin',
    text: '這取決於你願不願意面對那個被你推開的自己。',
    nextNodeId: 'yi1-ch2-22',
  },
  {
    id: 'yi1-ch2-21b',
    speaker: 'wenxin',
    text: '想試，就已經是開始了。',
    nextNodeId: 'yi1-ch2-22',
  },

  // 結尾
  {
    id: 'yi1-ch2-22',
    speaker: 'wenxin',
    text: '走吧，第一位歸者在等你。',
    nextNodeId: 'yi1-ch2-23',
  },
  {
    id: 'yi1-ch2-23',
    speaker: 'protagonist',
    text: '是誰？',
    nextNodeId: 'yi1-ch2-end',
  },
  {
    id: 'yi1-ch2-end',
    speaker: 'wenxin',
    text: '一個被貶了一輩子，卻從未貶低過自己的人。',
    bgImage: 'ch2_courtyard_distant',
    effect: 'fade-out',
    nextNodeId: 'yi1-ch3-intro',
  },
];
// 總計：23 主線句 + 3 選項（6 分支句）= 29 節點
