import type { DialogueNode } from '@/stores/gameStore';

export const chapter11Nodes: DialogueNode[] = [
 // 開場引言
  {
    id: 'chapter11-intro-1',
    speaker: 'narrator',
    text: '「仇恨是毒藥。」',
    nextNodeId: 'chapter11-intro-2',
  },
  {
    id: 'chapter11-intro-2',
    speaker: 'narrator',
    text: '「你喝下它，卻指望敵人會死。」',
    effect: 'glow',
    nextNodeId: 'chapter11-1', // 接回原本的開頭
  },
  // 接著是原本的 chapter11-1 ...
  // 開場：野花園
  {
    id: 'chapter11-1',
    speaker: 'narrator',
    text: '她聞到了泥土的味道。這裡沒有修剪整齊的灌木，只有亂糟糟卻充滿生命力的野花——紅的、黃的、紫的。',
    bgImage: 'mandela_garden', // 野花園
    nextNodeId: 'chapter11-2',
  },
  {
    id: 'chapter11-2',
    speaker: 'narrator',
    text: '花園中央，一個白髮蒼蒼的老人蹲在地上挖土。他穿著舊襯衫，褲腳沾滿泥巴。',
    nextNodeId: 'chapter11-3',
  },
  {
    id: 'chapter11-3',
    speaker: 'mandela',
    speakerName: '？？？',
    text: '小心腳下，別踩到那株小雛菊。它剛長出來。',
    nextNodeId: 'chapter11-4',
  },
  {
    id: 'chapter11-4',
    speaker: 'protagonist',
    text: '您是……曼德拉先生？',
    nextNodeId: 'chapter11-5',
  },
  {
    id: 'chapter11-5',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '叫我馬迪巴。來，幫我把這個坑填上。',
    nextNodeId: 'chapter11-6',
  },

  // 一、關於仇恨
  {
    id: 'chapter11-6',
    speaker: 'mandela',
    text: '你看起來心裡有火。',
    nextNodeId: 'chapter11-7',
  },
  {
    id: 'chapter11-7',
    speaker: 'protagonist',
    text: '我……我只是覺得不公平。為什麼我要經歷這些？為什麼那些傷害我的人可以過得好好的？',
    nextNodeId: 'chapter11-8',
  },
  {
    id: 'chapter11-8',
    speaker: 'mandela',
    text: '我在牢裡待了二十七年。那些看守我不准我說話，不准我見家人，甚至在我的飯裡撒尿。',
    nextNodeId: 'chapter11-9',
  },
  {
    id: 'chapter11-9',
    speaker: 'mandela',
    text: '剛開始我也恨。我恨不得把他們都撕碎。但我發現一件事。',
    nextNodeId: 'chapter11-10',
  },
  {
    id: 'chapter11-10',
    speaker: 'mandela',
    text: '仇恨就像是你自己喝下一杯毒藥，然後指望這杯毒藥能把你的敵人毒死。',
    effect: 'glow',
    nextNodeId: 'chapter11-11',
  },

  // 二、原諒是為了自己
  {
    id: 'chapter11-11',
    speaker: 'mandela',
    text: '結果呢？敵人活得好好的，死掉的是你自己。',
    nextNodeId: 'chapter11-12',
  },
  {
    id: 'chapter11-12',
    speaker: 'mandela',
    text: '當我走出監獄的那一刻，我知道，如果我不把仇恨和怨恨留在身後，那我就還在監獄裡。',
    nextNodeId: 'chapter11-13',
  },
  {
    id: 'chapter11-13',
    speaker: 'protagonist',
    text: '可是原諒他們，不就代表他們贏了嗎？',
    nextNodeId: 'chapter11-14',
  },
  {
    id: 'chapter11-14',
    speaker: 'mandela',
    text: '不。原諒不是為了他們。原諒是為了讓你自由。',
    effect: 'glow',
    nextNodeId: 'chapter11-15',
  },
  {
    id: 'chapter11-15',
    speaker: 'mandela',
    text: '只要你還恨著一個人，你就還是他的囚犯。你的情緒被他控制，你的快樂取決於他。只有放下了，你才是自由的。',
    nextNodeId: 'chapter11-16',
  },

  // 三、愛自己
  {
    id: 'chapter11-16',
    speaker: 'mandela',
    text: '還有，最重要的一點。你最大的仇人，往往不是別人，是你自己。',
    nextNodeId: 'chapter11-17',
  },
  {
    id: 'chapter11-17',
    speaker: 'mandela',
    text: '你恨那個不夠完美的自己，恨那個當時沒有反擊的自己。',
    nextNodeId: 'chapter11-18',
  },
  {
    id: 'chapter11-18',
    speaker: 'mandela',
    text: '原諒自己吧。那時候的你，已經盡力了。',
    effect: 'glow',
    nextNodeId: 'chapter11-19',
  },

  // 四、告別
  {
    id: 'chapter11-19',
    speaker: 'mandela',
    text: '去吧。下一位歸者在等你。他輸了很多次，才學會怎麼贏。',
    nextNodeId: 'chapter12-intro-1', // 🔗 連接到林肯
    effect: 'fade-out',
  },
];
