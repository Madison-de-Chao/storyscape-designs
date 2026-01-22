import type { DialogueNode } from '@/stores/gameStore';

export const chapter7Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-chapter-7-intro-1',
    speaker: 'narrator',
    text: '「他們說我不應該。我說——誰定的規矩？」',
    nextNodeId: 'chapter7-1',
  },

  // 一、女子畫廊
  {
    id: 'chapter7-1',
    speaker: 'narrator',
    text: '問心帶她穿過一條長長的迴廊。牆上掛著絹帛的畫軸，畫的都是女子——有彈琴的、讀書的、騎馬的、揮劍的。',
    nextNodeId: 'chapter7-2',
  },
  {
    id: 'chapter7-2',
    speaker: 'narrator',
    text: '每一幅畫裡的女子，眼神都很亮。不是那種柔順的亮，是一種——篤定。',
    nextNodeId: 'chapter7-3',
  },
  {
    id: 'chapter7-3',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '這是她畫的。她想讓後人看看，女子眼中的女子，是什麼樣子。',
    nextNodeId: 'chapter7-4',
  },
  {
    id: 'chapter7-4',
    speaker: 'narrator',
    text: '她停在一幅畫前。畫中是一個穿著鎧甲的女子，騎在馬上，手裡握著長劍，臉上帶著一種「我知道我在做什麼」的笑。',
    nextNodeId: 'chapter7-5',
  },
  {
    id: 'chapter7-5',
    speaker: 'wenxin',
    text: '那是花木蘭。因為花木蘭證明了一件事——女子能做的，從來不比男子少。少的只是機會。',
    nextNodeId: 'chapter7-6',
  },

  // 二、進入大殿
  {
    id: 'chapter7-6',
    speaker: 'narrator',
    text: '迴廊盡頭是一扇朱紅色的大門，刻著展翅欲飛的鳳凰。',
    nextNodeId: 'chapter7-7',
  },
  {
    id: 'chapter7-7',
    speaker: 'wenxin',
    text: '進去之前提醒你：她的脾氣不太好。她最討厭唯唯諾諾、不敢表達自己的人。',
    nextNodeId: 'chapter7-8',
  },
  {
    id: 'chapter7-8',
    speaker: 'protagonist',
    text: '我……',
    nextNodeId: 'chapter7-9',
  },
  {
    id: 'chapter7-9',
    speaker: 'narrator',
    text: '她想說「我會盡量」，但突然意識到——她這輩子不就是一個唯唯諾諾的人嗎？',
    nextNodeId: 'chapter7-10',
  },
  {
    id: 'chapter7-10',
    speaker: 'wenxin',
    text: '沒關係。這就是你來這裡的原因。',
    nextNodeId: 'chapter7-11',
  },

  // 三、武則天登場
  {
    id: 'chapter7-11',
    speaker: 'narrator',
    text: '推開門，大殿風格沉穩大氣。案後坐著一個五十多歲的女人，穿著深紫色袍子，沒有皇冠，沒有鳳袍。',
    bgImage: 'wuzetian_throne', // 武則天大殿
    nextNodeId: 'chapter7-12',
  },
  {
    id: 'chapter7-12',
    speaker: 'narrator',
    text: '但她往那裡一坐，整個空氣都變得沉重。那是一種不需要裝飾就能讓人知道「這個人不一樣」的氣場。',
    effect: 'shake', // 氣場震攝
    nextNodeId: 'chapter7-13',
  },
  {
    id: 'chapter7-13',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '來了？別愣著，坐。',
    nextNodeId: 'chapter7-14',
  },
  {
    id: 'chapter7-14',
    speaker: 'wuzetian',
    text: '問心說你有「習得性無助」？覺得自己做什麼都不對？',
    nextNodeId: 'chapter7-15',
  },
  {
    id: 'chapter7-15',
    speaker: 'protagonist',
    text: '是……無論我怎麼努力，都達不到別人的期望。',
    nextNodeId: 'chapter7-16',
  },
  {
    id: 'chapter7-16',
    speaker: 'wuzetian',
    text: '別人的期望？誰的別人？',
    nextNodeId: 'chapter7-17',
  },
  {
    id: 'chapter7-17',
    speaker: 'wuzetian',
    text: '你們從小被教導要做「好孩子」，但從來沒人教過你們——什麼是「好的你自己」。',
    effect: 'glow',
    nextNodeId: 'chapter7-18',
  },

  // 四、資格論
  {
    id: 'chapter7-18',
    speaker: 'wuzetian',
    text: '你知道我這輩子聽過最多的話是什麼嗎？是「你不應該」。',
    nextNodeId: 'chapter7-19',
  },
  {
    id: 'chapter7-19',
    speaker: 'wuzetian',
    text: '不應該進宮，不應該干預政事，不應該稱帝。他們說我不應該，我就問他們——為什麼？',
    nextNodeId: 'chapter7-20',
  },
  {
    id: 'chapter7-20',
    speaker: 'wuzetian',
    text: '他們說這是祖宗的規矩。我說，祖宗定規矩的時候，問過我嗎？',
    nextNodeId: 'chapter7-21',
  },
  {
    id: 'chapter7-21',
    speaker: 'wuzetian',
    text: '你知道「資格」這個詞是怎麼來的嗎？那是別人用來限制你的工具。',
    nextNodeId: 'chapter7-22',
  },
  {
    id: 'chapter7-22',
    speaker: 'wuzetian',
    text: '能力是你能不能做這件事。資格是你「配不配」做這件事。',
    effect: 'glow',
    nextNodeId: 'chapter7-23',
  },
  {
    id: 'chapter7-23',
    speaker: 'wuzetian',
    text: '能力可以學，但資格——是別人給你的標籤。',
    nextNodeId: 'chapter7-24',
  },

  // 五、花木蘭的例子
  {
    id: 'chapter7-24',
    speaker: 'wuzetian',
    text: '就像花木蘭。她的劍術、騎射和男人一樣好。但她必須假扮男人才能從軍。',
    nextNodeId: 'chapter7-25',
  },
  {
    id: 'chapter7-25',
    speaker: 'wuzetian',
    text: '因為那個時代說，女人「沒有資格」當兵。她的問題從來不是「能不能」，而是「配不配」。',
    nextNodeId: 'chapter7-26',
  },
  {
    id: 'chapter7-26',
    speaker: 'wuzetian',
    text: '所以她只能假扮。而我——我不想假扮。',
    nextNodeId: 'chapter7-27',
  },

  // 六、無字碑與自我定義
  {
    id: 'chapter7-27',
    speaker: 'wuzetian',
    text: '你知道我死後立了一塊無字碑嗎？',
    nextNodeId: 'chapter7-28',
  },
  {
    id: 'chapter7-28',
    speaker: 'wuzetian',
    text: '因為我不想讓別人定義我。無論他們說我是明君還是暴君，那都是他們的看法。',
    nextNodeId: 'chapter7-29',
  },
  {
    id: 'chapter7-29',
    speaker: 'wuzetian',
    text: '但我是誰——只有我自己知道。我不需要他們的認可，也不需要向他們解釋。',
    effect: 'glow',
    nextNodeId: 'chapter7-30',
  },
  {
    id: 'chapter7-30',
    speaker: 'wuzetian',
    text: '你也是。你把評價自己的權力，拱手讓給了全世界。這就是你的問題。',
    nextNodeId: 'chapter7-31',
  },

  // 七、贈言
  {
    id: 'chapter7-31',
    speaker: 'wuzetian',
    text: '擦擦眼淚。我送你一句話：',
    nextNodeId: 'chapter7-32',
  },
  {
    id: 'chapter7-32',
    speaker: 'wuzetian',
    text: '「他們說你不應該，你就問——誰定的規矩？他們說你沒資格，你就問——誰給的標準？」'
    effect: 'cinema', // 👈 開啟電影模式,
    effect: 'glow',
    nextNodeId: 'chapter7-33',
  },
  {
    id: 'chapter7-33',
    speaker: 'wuzetian',
    text: '位子不會說話，只有人會。而人的話——不是天理。',
    nextNodeId: 'chapter7-end',
  },
  {
    id: 'chapter7-end',
    speaker: 'wuzetian',
    text: '去吧。下一個歸者會教你，什麼叫「殘缺不等於不完整」。',
    nextNodeId: 'chapter8-intro-1', // 🔗 連接到司馬遷
    effect: 'fade-out',
  },
];
