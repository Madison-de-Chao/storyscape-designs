import type { DialogueNode } from '@/stores/gameStore';

export const chapter8Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'chapter8-intro-1',
    speaker: 'narrator',
    text: '「人固有一死，或重于泰山，或輕于鴻毛。」',
    effect: 'vertical', // 直排特效
    nextNodeId: 'chapter8-intro-2',
  },
  {
    id: 'chapter8-intro-2',
    speaker: 'narrator',
    text: '——司馬遷',
    nextNodeId: 'chapter8-1', // 接回原本的開頭
  },
  // 接著是原本的 chapter8-1 ...
  // 開場：迷路
  {
    id: 'chapter8-1',
    speaker: 'narrator',
    text: '她迷路了。問心不見了。走廊牆上多了一扇半開的門，透出昏黃燭光。',
    bgImage: 'sima_study', // 昏暗書房
    nextNodeId: 'chapter8-2',
  },
  {
    id: 'chapter8-2',
    speaker: 'simaqian',
    speakerName: '？？？',
    text: '進來吧。在外面喊也沒用，問心聽不見。',
    nextNodeId: 'chapter8-3',
  },
  
  // 一、亂糟糟的書房
  {
    id: 'chapter8-3',
    speaker: 'narrator',
    text: '房間裡滿牆竹簡，地上堆滿了寫壞的絹帛。書桌後坐著一個穿灰袍的男人，正在刻字。',
    nextNodeId: 'chapter8-4',
  },
  {
    id: 'chapter8-4',
    speaker: 'protagonist',
    text: '你是……司馬遷？',
    nextNodeId: 'chapter8-5',
  },
  {
    id: 'chapter8-5',
    speaker: 'simaqian',
    speakerName: '司馬遷',
    text: '現在的人還知道我？《史記》早就寫完了，但我還在修。寫字這種事，永遠改不完。',
    nextNodeId: 'chapter8-6',
  },

  // 二、心死與宮刑
  {
    id: 'chapter8-6',
    speaker: 'simaqian',
    text: '問心說你有「習得性無助」？我們那時候叫「心死」。',
    nextNodeId: 'chapter8-7',
  },
  {
    id: 'chapter8-7',
    speaker: 'simaqian',
    text: '你知道我經歷過什麼嗎？我被閹了。',
    nextNodeId: 'chapter8-8',
  },
  {
    id: 'chapter8-8',
    speaker: 'narrator',
    text: '他說得平淡，像在說別人的事。',
    nextNodeId: 'chapter8-9',
  },
  {
    id: 'chapter8-9',
    speaker: 'simaqian',
    text: '因為我替李陵說了句公道話，皇帝判我死刑。但我沒有錢贖罪，所以我選了宮刑。',
    nextNodeId: 'chapter8-10',
  },
  {
    id: 'chapter8-10',
    speaker: 'simaqian',
    text: '我想過死。但我父親交給我的《史記》還沒寫完。我不甘心帶著一本沒寫完的書去死。',
    effect: 'glow',
    nextNodeId: 'chapter8-11',
  },

  // 三、把自己活完
  {
    id: 'chapter8-11',
    speaker: 'simaqian',
    text: '受刑後，我成了廢人。不能當官，不能交友，不能回家。我就躲在家裡寫書，整整十四年。',
    nextNodeId: 'chapter8-12',
  },
  {
    id: 'chapter8-12',
    speaker: 'simaqian',
    text: '我問你，你覺得我是一個「殘缺」的人嗎？',
    nextNodeId: 'chapter8-13',
  },
  {
    id: 'chapter8-13',
    speaker: 'protagonist',
    text: '身體上可能是，但你寫出了《史記》。從這個角度說，你比大多數人都完整。',
    nextNodeId: 'chapter8-14',
  },
  {
    id: 'chapter8-14',
    speaker: 'simaqian',
    text: '對。我們叫這「成」。所有的「成」，最後都指向同一個東西——把自己活完。',
    effect: 'glow',
    nextNodeId: 'chapter8-15',
  },
  {
    id: 'chapter8-15',
    speaker: 'simaqian',
    text: '老天爺給我的身體被毀了，但我還有腦袋、雙手和一支筆。我就用剩下的材料，把自己完成。',
    nextNodeId: 'chapter8-16',
  },

  // 四、使命與為自己活
  {
    id: 'chapter8-16',
    speaker: 'simaqian',
    text: '你說你不知道使命是什麼？問自己一個問題：如果你死了，你最不甘心的是什麼？',
    nextNodeId: 'chapter8-17',
  },
  {
    id: 'chapter8-17',
    speaker: 'protagonist',
    text: '我……最不甘心的是，我從來沒有為自己活過。',
    nextNodeId: 'chapter8-18',
  },
  {
    id: 'chapter8-18',
    speaker: 'simaqian',
    text: '那就是你的使命。為自己活一次。',
    effect: 'glow',
    nextNodeId: 'chapter8-19',
  },
  {
    id: 'chapter8-19',
    speaker: 'simaqian',
    text: '一個沒有活過自己的人，給不了別人什麼。他只能給別人空洞的義務。',
    nextNodeId: 'chapter8-20',
  },

  // 五、筆比命長
  {
    id: 'chapter8-20',
    speaker: 'narrator',
    text: '問心出現了。',
    nextNodeId: 'chapter8-21',
  },
  {
    id: 'chapter8-21',
    speaker: 'protagonist',
    text: '子長，你說「筆比命長」是什麼意思？',
    nextNodeId: 'chapter8-22',
  },
  {
    id: 'chapter8-22',
    speaker: 'simaqian',
    text: '他們以為閹了我，就閹了我的筆。他們錯了。我的命只有幾十年，但我的筆可以活幾千年。',
    effect: 'glow',
    nextNodeId: 'chapter8-23',
  },
  {
    id: 'chapter8-23',
    speaker: 'simaqian',
    text: '他們可以毀掉我的身體，但毀不掉我的字。',
    nextNodeId: 'chapter8-end',
  },
  {
    id: 'chapter8-end',
    speaker: 'wenxin',
    text: '下一個是李白。他會教你——什麼是真正的自由。',
    nextNodeId: 'chapter9-intro', // 🔗 連接到李白 (修正: 使用 chapter9-intro)
    effect: 'fade-out',
  },
];
