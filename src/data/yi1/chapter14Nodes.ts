import type { DialogueNode } from '@/stores/gameStore';

export const chapter14Nodes: DialogueNode[] = [
  // 開場引言 (新增直排特效)
  {
    id: 'yi1-chapter-14-intro-1',
    speaker: 'narrator',
    text: '「那是預留的。」\n「給那些正在學習的人。」',
    effect: 'vertical', // 直排更有莊嚴感
    nextNodeId: 'yi1-chapter-14-1', // 接回原本的故事
  },

  // 一、進入未歸者廊 (原本的開頭)
  {
    id: 'yi1-chapter-14-1',
    speaker: 'narrator',
    text: '離開白色房間，氣溫驟降。',
    bgImage: 'dark_gallery',
    nextNodeId: 'yi1-chapter-14-2',
  },
  {
    id: 'yi1-chapter-14-2',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '這裡是未歸者廊。這裡的每一個靈魂，都曾經來過元壹境，但沒有走出去。',
    nextNodeId: 'yi1-chapter-14-3',
  },
  {
    id: 'yi1-chapter-14-3',
    speaker: 'narrator',
    text: '她看向第一個壁龕。裡面是一個穿著戰甲的男人，卻在最後一刻自刎了。',
    nextNodeId: 'yi1-chapter-14-4',
  },
  {
    id: 'yi1-chapter-14-4',
    speaker: 'wenxin',
    text: '項羽。他有勇氣面對千萬敵人，卻沒有勇氣面對失敗的自己。他的自尊太強，變成了脆性。',
    nextNodeId: 'yi1-chapter-14-5',
  },
  {
    id: 'yi1-chapter-14-5',
    speaker: 'narrator',
    text: '第二個壁龕。一個披頭散髮在江邊吟詩的人，最後抱著石頭跳進了水裡。',
    nextNodeId: 'yi1-chapter-14-6',
  },
  {
    id: 'yi1-chapter-14-6',
    speaker: 'wenxin',
    text: '屈原。他愛國，但他把自己的價值完全綁定在國家的命運上。國亡了，他也亡了。',
    nextNodeId: 'yi1-chapter-14-7',
  },
  {
    id: 'yi1-chapter-14-7',
    speaker: 'protagonist',
    text: '真可惜。如果他們能聽到蘇軾的話，或者曼德拉的話，也許就不會這樣了。',
    nextNodeId: 'yi1-chapter-14-8',
  },
  {
    id: 'yi1-chapter-14-8',
    speaker: 'narrator',
    text: '她心裡升起一種微妙的感覺。她覺得自己比他們幸運，也比他們「懂」了。她學會了接納，學會了轉念，她覺得自己已經準備好面對伊了。',
    nextNodeId: 'yi1-chapter-14-9',
  },
  {
    id: 'yi1-chapter-14-9',
    speaker: 'protagonist',
    text: '我不會像他們一樣的。我已經知道怎麼處理負面情緒了。我會去見伊，跟她和解，然後——超越她。',
    nextNodeId: 'yi1-chapter-14-10',
  },
  {
    id: 'yi1-chapter-14-10',
    speaker: 'wenxin',
    text: '超越她？',
    nextNodeId: 'yi1-chapter-14-11',
  },
  {
    id: 'yi1-chapter-14-11',
    speaker: 'protagonist',
    text: '對。我已經不需要她了。伊是我過去切割出來的陰影，現在我心裡有光了，陰影自然就不重要了。我要去跟她告別。',
    nextNodeId: 'yi1-chapter-14-12',
  },
  {
    id: 'yi1-chapter-14-12',
    speaker: 'wenxin',
    text: '（沉默良久）走吧。',
    nextNodeId: 'yi1-chapter-14-13',
  },
  {
    id: 'yi1-chapter-14-13',
    speaker: 'narrator',
    text: '就在她們轉身的時候，空蕩的長廊裡，突然傳來了一聲輕笑。',
    emotionSFX: 'evil_giggle',
    nextNodeId: 'yi1-chapter-14-14',
  },
  {
    id: 'yi1-chapter-14-14',
    speaker: 'yi',
    speakerName: '？？？',
    text: '呵。',
    effect: 'glitch',
    nextNodeId: 'yi1-chapter-15-intro-1', // 🔗 注意：這裡要連到 Ch15 的 Intro
  },
];
