import type { DialogueNode } from '@/stores/gameStore';

export const chapter13Nodes: DialogueNode[] = [
  // 開場引言 (新增直排特效)
  {
    id: 'chapter13-intro-1',
    speaker: 'narrator',
    text: '「被拒絕不是世界末日。」\n「被拒絕是世界重新開始。」',
    effect: 'vertical', // 👈 賈伯斯的禪意
    nextNodeId: 'chapter13-intro-2',
  },
  {
    id: 'chapter13-intro-2',
    speaker: 'narrator',
    text: '——賈伯斯',
    nextNodeId: 'chapter13-1', // 接回故事
  },

  // 一、九種顏色 (原本的故事開頭)
  {
    id: 'chapter13-1',
    speaker: 'narrator',
    text: '九種顏色。',
    nextNodeId: 'chapter13-2',
  },
  {
    id: 'chapter13-2',
    speaker: 'narrator',
    text: '她低頭看著自己的衣服，數了又數。蘇軾的竹青、王陽明的月白、武則天的金紅、司馬遷的墨黑、李白的雲藍、凱薩的紫羅蘭、克麗奧佩特拉的金沙、曼德拉的番茄紅、林肯的原木色。',
    nextNodeId: 'chapter13-3',
  },
  {
    id: 'chapter13-3',
    speaker: 'narrator',
    text: '九種了。',
    nextNodeId: 'chapter13-4',
  },
  {
    id: 'chapter13-4',
    speaker: 'narrator',
    text: '她突然有一種奇怪的感覺——像是在收集徽章的遊戲玩家，只差最後一個就能通關了。',
    nextNodeId: 'chapter13-5',
  },
  {
    id: 'chapter13-5',
    speaker: 'jobs',
    speakerName: '？？？',
    text: '很漂亮的調色盤。',
    nextNodeId: 'chapter13-6',
  },
  {
    id: 'chapter13-6',
    speaker: 'narrator',
    text: '一個聲音傳來。乾淨、利落，沒有一點雜質。',
    nextNodeId: 'chapter13-7',
  },
  
  // 賈伯斯登場
  {
    id: 'chapter13-7',
    speaker: 'narrator',
    text: '她轉過身。這是一個純白色的房間。沒有牆壁，沒有天花板，只有無盡的白。而在這片白色中，站著一個人。',
    bgImage: 'white_room', // 極簡空間
    nextNodeId: 'chapter13-8',
  },
  {
    id: 'chapter13-8',
    speaker: 'narrator',
    text: '黑色高領衫，牛仔褲，圓框眼鏡。',
    nextNodeId: 'chapter13-9',
  },
  {
    id: 'chapter13-9',
    speaker: 'protagonist',
    text: '賈伯斯？',
    nextNodeId: 'chapter13-10',
  },
  {
    id: 'chapter13-10',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '叫我史蒂夫。雖然在這裡名字不重要。',
    nextNodeId: 'chapter13-11',
  },
  
  // 連點成線
  {
    id: 'chapter13-11',
    speaker: 'jobs',
    text: '你看起來很困惑。你收集了這麼多顏色，但不知道怎麼把它們拼在一起，對吧？',
    nextNodeId: 'chapter13-12',
  },
  {
    id: 'chapter13-12',
    speaker: 'protagonist',
    text: '對……我覺得自己像個大雜燴。蘇軾教我豁達，武則天教我霸氣，曼德拉教我原諒……這些東西放在一起，不會打架嗎？',
    nextNodeId: 'chapter13-13',
  },
  {
    id: 'chapter13-13',
    speaker: 'jobs',
    text: '不會。因為它們不是為了打架，是為了連線。',
    nextNodeId: 'chapter13-14',
  },
  {
    id: 'chapter13-14',
    speaker: 'jobs',
    text: '你有沒有聽過我在史丹佛說的話？你不可能在向前看的時候把點連起來，你只能在回顧的時候連起來。',
    effect: 'glow',
    nextNodeId: 'chapter13-15',
  },
  {
    id: 'chapter13-15',
    speaker: 'jobs',
    text: '你現在覺得這些是碎片，但在未來，它們會連成一條線。那一條線，就是你自己。',
    nextNodeId: 'chapter13-16',
  },

  // 關於拒絕
  {
    id: 'chapter13-16',
    speaker: 'jobs',
    text: '聽說你被你的世界「刪除」了？',
    nextNodeId: 'chapter13-17',
  },
  {
    id: 'chapter13-17',
    speaker: 'protagonist',
    text: '是我自己刪除的。但感覺像是……我不適合那個世界。',
    nextNodeId: 'chapter13-18',
  },
  {
    id: 'chapter13-18',
    speaker: 'jobs',
    text: '那是好事。不適合，說明你是獨特的。',
    nextNodeId: 'chapter13-19',
  },
  {
    id: 'chapter13-19',
    speaker: 'jobs',
    text: '我被我自己創立的公司開除的時候，覺得天都塌了。但後來發現，那是發生在我身上最好的事。',
    nextNodeId: 'chapter13-20',
  },
  {
    id: 'chapter13-20',
    speaker: 'jobs',
    text: '成功的重擔被「重新開始」的輕鬆取代了。我被釋放了。沒有那次被開除，就不會有後來的皮克斯，也不會有回歸後的蘋果。',
    effect: 'glow',
    nextNodeId: 'chapter13-21',
  },
  
  // 你的畫布
  {
    id: 'chapter13-21',
    speaker: 'jobs',
    text: '你的失敗，是你獨特性的證明。你無法適應那個模具，是因為你原本就不屬於那個形狀。',
    nextNodeId: 'chapter13-22',
  },
  {
    id: 'chapter13-22',
    speaker: 'jobs',
    text: '不要試圖變成別人。你有這九種顏色，不是為了讓你模仿我們。而是為了讓你去畫你自己的畫。',
    nextNodeId: 'chapter13-23',
  },
  {
    id: 'chapter13-23',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '下一站是未歸者廊。去看看那些離完整只差一步的人。',
    nextNodeId: 'chapter14-intro-1', // 🔗 指向下一章的 Intro
    effect: 'fade-out',
  },
];
