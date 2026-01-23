import type { DialogueNode } from '@/stores/gameStore';

export const chapter7Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-chapter-7-intro-1',
    speaker: 'narrator',
    text: '「他們說我不應該。我說——誰定的規矩？」',
    nextNodeId: 'yi1-chapter-7-1',
  },

  // 一、女子畫廊
  {
    id: 'yi1-chapter-7-1',
    speaker: 'narrator',
    text: '問心帶她穿過一條長長的迴廊。牆上掛著絹帛的畫軸，畫的都是女子——有彈琴的、讀書的、騎馬的、揮劍的。',
    bgImage: 'gallery_women', // 女子畫廊
    nextNodeId: 'yi1-chapter-7-2',
  },
  {
    id: 'yi1-chapter-7-2',
    speaker: 'narrator',
    text: '每一幅畫裡的女子，眼神都很亮。不是那種柔順的亮，是一種——篤定。',
    nextNodeId: 'yi1-chapter-7-3',
  },
  {
    id: 'yi1-chapter-7-3',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '這是她畫的。她想讓後人看看，女子眼中的女子，是什麼樣子。',
    nextNodeId: 'yi1-chapter-7-4',
  },
  {
    id: 'yi1-chapter-7-4',
    speaker: 'narrator',
    text: '她停在一幅畫前。畫中是一個穿著鎧甲的女子，騎在馬上，手裡握著長劍，臉上帶著一種「我知道我在做什麼」的笑。',
    nextNodeId: 'yi1-chapter-7-5',
  },
  {
    id: 'yi1-chapter-7-5',
    speaker: 'wenxin',
    text: '那是花木蘭。因為花木蘭證明了一件事——女子能做的，從來不比男子少。少的只是機會。',
    nextNodeId: 'yi1-chapter-7-choice-1',
  },

  // === 選項1：對畫廊的感受 ===
  {
    id: 'yi1-chapter-7-choice-1',
    speaker: 'narrator',
    text: '看著這些畫，她的心裡湧起了一種複雜的感覺……',
    choices: [
      { id: 'ch7-inspired', text: '我從來不知道女子可以這樣', nextNodeId: 'yi1-chapter-7-inspired-1', arcChange: 5, shadowChange: 0 },
      { id: 'ch7-doubt', text: '但現實不是這樣的', nextNodeId: 'yi1-chapter-7-doubt-1', arcChange: 0, shadowChange: 3 },
      { id: 'ch7-question', text: '為什麼要特別強調「女子」？', nextNodeId: 'yi1-chapter-7-question-1', arcChange: 3, shadowChange: 0 },
    ],
  },

  // 分支A：被啟發
  {
    id: 'yi1-chapter-7-inspired-1',
    speaker: 'wenxin',
    text: '你看見了。這就是改變的開始。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-7-6',
  },
  // 分支B：懷疑
  {
    id: 'yi1-chapter-7-doubt-1',
    speaker: 'wenxin',
    text: '現實是人造的。你以為的「不可能」，只是被說得太多了。',
    nextNodeId: 'yi1-chapter-7-6',
  },
  // 分支C：質疑
  {
    id: 'yi1-chapter-7-question-1',
    speaker: 'wenxin',
    text: '好問題。因為在那個時代，「女子」這個身分本身就是一種枷鎖。打破枷鎖的第一步，是看見它。',
    nextNodeId: 'yi1-chapter-7-6',
  },

  // 二、進入大殿（匯合點）
  {
    id: 'yi1-chapter-7-6',
    speaker: 'narrator',
    text: '迴廊盡頭是一扇朱紅色的大門，刻著展翅欲飛的鳳凰。',
    bgImage: 'phoenix_door', // 朱紅鳳門
    nextNodeId: 'yi1-chapter-7-7',
  },
  {
    id: 'yi1-chapter-7-7',
    speaker: 'wenxin',
    text: '進去之前提醒你：她的脾氣不太好。她最討厭唯唯諾諾、不敢表達自己的人。',
    nextNodeId: 'yi1-chapter-7-8',
  },
  {
    id: 'yi1-chapter-7-8',
    speaker: 'protagonist',
    text: '我……',
    nextNodeId: 'yi1-chapter-7-9',
  },
  {
    id: 'yi1-chapter-7-9',
    speaker: 'narrator',
    text: '她想說「我會盡量」，但突然意識到——她這輩子不就是一個唯唯諾諾的人嗎？',
    nextNodeId: 'yi1-chapter-7-10',
  },
  {
    id: 'yi1-chapter-7-10',
    speaker: 'wenxin',
    text: '沒關係。這就是你來這裡的原因。',
    nextNodeId: 'yi1-chapter-7-11',
  },

  // 三、武則天登場（切換場景）
  {
    id: 'yi1-chapter-7-11',
    speaker: 'narrator',
    text: '推開門，大殿風格沉穩大氣。案後坐著一個五十多歲的女人，穿著深紫色袍子，沒有皇冠，沒有鳳袍。',
    bgImage: 'wuzetian_throne', // 武則天大殿
    nextNodeId: 'yi1-chapter-7-12',
  },
  {
    id: 'yi1-chapter-7-12',
    speaker: 'narrator',
    text: '但她往那裡一坐，整個空氣都變得沉重。那是一種不需要裝飾就能讓人知道「這個人不一樣」的氣場。',
    effect: 'shake',
    nextNodeId: 'yi1-chapter-7-13',
  },
  {
    id: 'yi1-chapter-7-13',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '來了？別愣著，坐。',
    nextNodeId: 'yi1-chapter-7-14',
  },
  {
    id: 'yi1-chapter-7-14',
    speaker: 'wuzetian',
    text: '問心說你有「習得性無助」？覺得自己做什麼都不對？',
    nextNodeId: 'yi1-chapter-7-15',
  },
  {
    id: 'yi1-chapter-7-15',
    speaker: 'protagonist',
    text: '是……無論我怎麼努力，都達不到別人的期望。',
    nextNodeId: 'yi1-chapter-7-16',
  },
  {
    id: 'yi1-chapter-7-16',
    speaker: 'wuzetian',
    text: '別人的期望？誰的別人？',
    nextNodeId: 'yi1-chapter-7-17',
  },
  {
    id: 'yi1-chapter-7-17',
    speaker: 'wuzetian',
    text: '你們從小被教導要做「好孩子」，但從來沒人教過你們——什麼是「好的你自己」。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-7-18',
  },

  // 四、資格論
  {
    id: 'yi1-chapter-7-18',
    speaker: 'wuzetian',
    text: '你知道我這輩子聽過最多的話是什麼嗎？是「你不應該」。',
    nextNodeId: 'yi1-chapter-7-19',
  },
  {
    id: 'yi1-chapter-7-19',
    speaker: 'wuzetian',
    text: '不應該進宮，不應該干預政事，不應該稱帝。他們說我不應該，我就問他們——為什麼？',
    nextNodeId: 'yi1-chapter-7-20',
  },
  {
    id: 'yi1-chapter-7-20',
    speaker: 'wuzetian',
    text: '他們說這是祖宗的規矩。我說，祖宗定規矩的時候，問過我嗎？',
    nextNodeId: 'yi1-chapter-7-21',
  },
  {
    id: 'yi1-chapter-7-21',
    speaker: 'wuzetian',
    text: '你知道「資格」這個詞是怎麼來的嗎？那是別人用來限制你的工具。',
    nextNodeId: 'yi1-chapter-7-choice-2',
  },

  // === 選項2：對「資格」的理解 ===
  {
    id: 'yi1-chapter-7-choice-2',
    speaker: 'narrator',
    text: '她仔細思考著「資格」這個詞……',
    choices: [
      { id: 'ch7-understand', text: '我好像懂了……資格是一種標籤', nextNodeId: 'yi1-chapter-7-understand-1', arcChange: 5, shadowChange: 0 },
      { id: 'ch7-resist', text: '但有些規矩是有道理的吧？', nextNodeId: 'yi1-chapter-7-resist-1', arcChange: 0, shadowChange: 2 },
    ],
  },

  // 分支A：理解
  {
    id: 'yi1-chapter-7-understand-1',
    speaker: 'wuzetian',
    text: '很好。你開始看見枷鎖的形狀了。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-7-22',
  },
  // 分支B：抵抗
  {
    id: 'yi1-chapter-7-resist-1',
    speaker: 'wuzetian',
    text: '有道理的叫「原則」，沒道理的叫「規矩」。分清楚這兩者，是獨立思考的第一步。',
    nextNodeId: 'yi1-chapter-7-22',
  },

  // 匯合
  {
    id: 'yi1-chapter-7-22',
    speaker: 'wuzetian',
    text: '能力是你能不能做這件事。資格是你「配不配」做這件事。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-7-23',
  },
  {
    id: 'yi1-chapter-7-23',
    speaker: 'wuzetian',
    text: '能力可以學，但資格——是別人給你的標籤。',
    nextNodeId: 'yi1-chapter-7-24',
  },

  // 五、花木蘭的例子
  {
    id: 'yi1-chapter-7-24',
    speaker: 'wuzetian',
    text: '就像花木蘭。她的劍術、騎射和男人一樣好。但她必須假扮男人才能從軍。',
    bgImage: 'mulan_painting', // 切回畫廊回憶
    nextNodeId: 'yi1-chapter-7-25',
  },
  {
    id: 'yi1-chapter-7-25',
    speaker: 'wuzetian',
    text: '因為那個時代說，女人「沒有資格」當兵。她的問題從來不是「能不能」，而是「配不配」。',
    nextNodeId: 'yi1-chapter-7-26',
  },
  {
    id: 'yi1-chapter-7-26',
    speaker: 'wuzetian',
    text: '所以她只能假扮。而我——我不想假扮。',
    bgImage: 'wuzetian_throne', // 切回大殿
    nextNodeId: 'yi1-chapter-7-27',
  },

  // 六、無字碑與自我定義
  {
    id: 'yi1-chapter-7-27',
    speaker: 'wuzetian',
    text: '你知道我死後立了一塊無字碑嗎？',
    nextNodeId: 'yi1-chapter-7-28',
  },
  {
    id: 'yi1-chapter-7-28',
    speaker: 'wuzetian',
    text: '因為我不想讓別人定義我。無論他們說我是明君還是暴君，那都是他們的看法。',
    nextNodeId: 'yi1-chapter-7-29',
  },
  {
    id: 'yi1-chapter-7-29',
    speaker: 'wuzetian',
    text: '但我是誰——只有我自己知道。我不需要他們的認可，也不需要向他們解釋。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-7-30',
  },
  {
    id: 'yi1-chapter-7-30',
    speaker: 'wuzetian',
    text: '你也是。你把評價自己的權力，拱手讓給了全世界。這就是你的問題。',
    nextNodeId: 'yi1-chapter-7-choice-3',
  },

  // === 選項3：面對自我評價權力 ===
  {
    id: 'yi1-chapter-7-choice-3',
    speaker: 'narrator',
    text: '她感受到心中某個地方被觸動了……',
    choices: [
      { id: 'ch7-accept', text: '我想把這個權力拿回來', nextNodeId: 'yi1-chapter-7-accept-1', arcChange: 8, shadowChange: 0 },
      { id: 'ch7-fear', text: '但我害怕被孤立……', nextNodeId: 'yi1-chapter-7-fear-1', arcChange: 2, shadowChange: 3 },
    ],
  },

  // 分支A：接受
  {
    id: 'yi1-chapter-7-accept-1',
    speaker: 'wuzetian',
    text: '好。記住這個感覺。這是你第一次為自己做決定。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-7-31',
  },
  // 分支B：恐懼
  {
    id: 'yi1-chapter-7-fear-1',
    speaker: 'wuzetian',
    text: '害怕是正常的。但你要明白——那些真正在乎你的人，不會因為你「做自己」就離開。',
    nextNodeId: 'yi1-chapter-7-31',
  },

  // 七、贈言（匯合）
  {
    id: 'yi1-chapter-7-31',
    speaker: 'wuzetian',
    text: '擦擦眼淚。我送你一句話：',
    nextNodeId: 'yi1-chapter-7-32',
  },
  {
    id: 'yi1-chapter-7-32',
    speaker: 'wuzetian',
    text: '「他們說你不應該，你就問——誰定的規矩？他們說你沒資格，你就問——誰給的標準？」',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '誰定的規矩？',
      subtitle: '——武則天',
      theme: 'golden',
      duration: 4000,
    },
    nextNodeId: 'yi1-chapter-7-33',
  },
  {
    id: 'yi1-chapter-7-33',
    speaker: 'wuzetian',
    text: '位子不會說話，只有人會。而人的話——不是天理。',
    nextNodeId: 'yi1-chapter-7-end',
  },
  {
    id: 'yi1-chapter-7-end',
    speaker: 'wuzetian',
    text: '去吧。下一個歸者會教你，什麼叫「殘缺不等於不完整」。',
    nextNodeId: 'yi1-chapter-8-intro-1',
    effect: 'fade-out',
  },
];
