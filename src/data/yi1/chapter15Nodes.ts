import type { DialogueNode } from '@/stores/gameStore';

export const chapter15Nodes: DialogueNode[] = [
  // 開場：重回弧度林
  {
    id: 'chapter15-1',
    speaker: 'narrator',
    text: '弧度林。那棵扭曲的命樹還在那裡。',
    bgImage: 'ugly_tree',
    nextNodeId: 'chapter15-2',
  },
  {
    id: 'chapter15-2',
    speaker: 'narrator',
    text: '她走向樹根的黑洞。這一次，她沒有發抖。她覺得自己像個聖母，帶著慈悲來拯救這個可憐的影子。',
    nextNodeId: 'chapter15-3',
  },
  {
    id: 'chapter15-3',
    speaker: 'protagonist',
    text: '伊，出來吧。我來接你了。',
    nextNodeId: 'chapter15-4',
  },

  // 一、對峙
  {
    id: 'chapter15-4',
    speaker: 'narrator',
    text: '黑暗中走出來一個人。和她長得一模一樣，但眼神完全不同。那是野性的、狂放的、不加修飾的眼神。',
    bgImage: 'yi_confrontation', // 伊的立繪
    effect: 'glitch',
    nextNodeId: 'chapter15-5',
  },
  {
    id: 'chapter15-5',
    speaker: 'yi',
    speakerName: '伊',
    text: '接我？妳是來消滅我的吧。',
    nextNodeId: 'chapter15-6',
  },
  {
    id: 'chapter15-6',
    speaker: 'protagonist',
    text: '不，我是來和解的。我原諒妳了。原諒妳過去帶給我的痛苦。',
    nextNodeId: 'chapter15-7',
  },
  {
    id: 'chapter15-7',
    speaker: 'yi',
    text: '哈！原諒我？妳聽聽妳的口氣。高高在上，自以為是。妳以為妳學了幾句名言錦句，就比我高級了嗎？',
    effect: 'shake',
    nextNodeId: 'chapter15-8',
  },

  // 二、伊的真相
  {
    id: 'chapter15-8',
    speaker: 'yi',
    text: '妳以為我是誰？我是垃圾桶？是妳不要的廢棄物？',
    nextNodeId: 'chapter15-9',
  },
  {
    id: 'chapter15-9',
    speaker: 'yi',
    text: '錯了。我是妳的生命力。',
    effect: 'glow',
    nextNodeId: 'chapter15-10',
  },
  {
    id: 'chapter15-10',
    speaker: 'yi',
    text: '當妳為了討好別人而微笑時，是誰在心裡替妳生氣？是我。',
    nextNodeId: 'chapter15-11',
  },
  {
    id: 'chapter15-11',
    speaker: 'yi',
    text: '當妳被世界擊倒想死的時候，是誰在心裡大喊「我不甘心」？是我。',
    nextNodeId: 'chapter15-12',
  },
  {
    id: 'chapter15-12',
    speaker: 'yi',
    text: '妳切掉的不是壞東西，妳切掉的是妳的刺，妳的火，妳的根。沒有我，妳就是一個漂亮的空殼。',
    nextNodeId: 'chapter15-13',
  },

  // 三、崩潰與擁抱
  {
    id: 'chapter15-13',
    speaker: 'narrator',
    text: '主角愣住了。她一直以為伊是病，自己是醫生。現在她才發現，她才是那個虛弱的人，而伊一直在黑暗中替她活著。',
    nextNodeId: 'chapter15-14',
  },
  {
    id: 'chapter15-14',
    speaker: 'protagonist',
    text: '對不起……我以為我是來救妳的。其實，是妳一直在救我。',
    nextNodeId: 'chapter15-15',
  },
  {
    id: 'chapter15-15',
    speaker: 'narrator',
    text: '她不再高高在上。她跪了下來，向著那個黑暗中的自己張開雙臂。不是施捨的擁抱，是求救的擁抱。',
    nextNodeId: 'chapter15-16',
  },
  {
    id: 'chapter15-16',
    speaker: 'protagonist',
    text: '回來吧。不是作為我的陰影，是作為我的力量。',
    nextNodeId: 'chapter15-17',
  },

  // 四、合一
  {
    id: 'chapter15-17',
    speaker: 'narrator',
    text: '伊笑了。這次不是嘲笑，是一種釋然。她走向主角，兩個人重疊在一起。',
    bgImage: 'final_merge', // 合一畫面
    effect: 'flash',
    nextNodeId: 'chapter15-18',
  },
  {
    id: 'chapter15-18',
    speaker: 'narrator',
    text: '轟——！',
    effect: 'shake',
    nextNodeId: 'chapter15-19',
  },
  {
    id: 'chapter15-19',
    speaker: 'narrator',
    text: '光芒炸裂。弧度林消失了，元壹境消失了。所有的顏色融合成一道白光。',
    bgImage: 'white_screen',
    nextNodeId: 'epilogue-1', // 🔗 連接到尾聲
  },
];
