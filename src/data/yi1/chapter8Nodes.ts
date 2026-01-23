import type { DialogueNode } from '@/stores/gameStore';

export const chapter8Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-chapter-8-intro-1',
    speaker: 'narrator',
    text: '「人固有一死，或重于泰山，或輕于鴻毛。」',
    effect: 'vertical',
    nextNodeId: 'yi1-chapter-8-intro-2',
  },
  {
    id: 'yi1-chapter-8-intro-2',
    speaker: 'narrator',
    text: '——司馬遷',
    nextNodeId: 'yi1-chapter-8-1',
  },

  // 開場：迷路
  {
    id: 'yi1-chapter-8-1',
    speaker: 'narrator',
    text: '她迷路了。問心不見了。走廊牆上多了一扇半開的門，透出昏黃燭光。',
    bgImage: 'dark_corridor', // 昏暗走廊
    nextNodeId: 'yi1-chapter-8-2',
  },
  {
    id: 'yi1-chapter-8-2',
    speaker: 'simaqian',
    speakerName: '？？？',
    text: '進來吧。在外面喊也沒用，問心聽不見。',
    nextNodeId: 'yi1-chapter-8-choice-1',
  },

  // === 選項1：如何回應陌生聲音 ===
  {
    id: 'yi1-chapter-8-choice-1',
    speaker: 'narrator',
    text: '她猶豫了一下。門後的聲音聽起來疲憊而溫和……',
    choices: [
      { id: 'ch8-enter', text: '推門進去', nextNodeId: 'yi1-chapter-8-enter-1', arcChange: 3, shadowChange: 0 },
      { id: 'ch8-hesitate', text: '在門口問：你是誰？', nextNodeId: 'yi1-chapter-8-hesitate-1', arcChange: 0, shadowChange: 0 },
    ],
  },

  // 分支A：直接進入
  {
    id: 'yi1-chapter-8-enter-1',
    speaker: 'narrator',
    text: '她深吸一口氣，推開了門。',
    nextNodeId: 'yi1-chapter-8-3',
  },
  // 分支B：猶豫
  {
    id: 'yi1-chapter-8-hesitate-1',
    speaker: 'simaqian',
    text: '一個寫書的。你想知道更多，就進來。',
    nextNodeId: 'yi1-chapter-8-3',
  },

  // 一、亂糟糟的書房（匯合，切換場景）
  {
    id: 'yi1-chapter-8-3',
    speaker: 'narrator',
    text: '房間裡滿牆竹簡，地上堆滿了寫壞的絹帛。書桌後坐著一個穿灰袍的男人，正在刻字。',
    bgImage: 'sima_study', // 司馬遷書房
    nextNodeId: 'yi1-chapter-8-4',
  },
  {
    id: 'yi1-chapter-8-4',
    speaker: 'protagonist',
    text: '你是……司馬遷？',
    nextNodeId: 'yi1-chapter-8-5',
  },
  {
    id: 'yi1-chapter-8-5',
    speaker: 'simaqian',
    speakerName: '司馬遷',
    text: '現在的人還知道我？《史記》早就寫完了，但我還在修。寫字這種事，永遠改不完。',
    nextNodeId: 'yi1-chapter-8-6',
  },

  // 二、心死與宮刑
  {
    id: 'yi1-chapter-8-6',
    speaker: 'simaqian',
    text: '問心說你有「習得性無助」？我們那時候叫「心死」。',
    nextNodeId: 'yi1-chapter-8-7',
  },
  {
    id: 'yi1-chapter-8-7',
    speaker: 'simaqian',
    text: '你知道我經歷過什麼嗎？我被閹了。',
    nextNodeId: 'yi1-chapter-8-8',
  },
  {
    id: 'yi1-chapter-8-8',
    speaker: 'narrator',
    text: '他說得平淡，像在說別人的事。',
    nextNodeId: 'yi1-chapter-8-9',
  },
  {
    id: 'yi1-chapter-8-9',
    speaker: 'simaqian',
    text: '因為我替李陵說了句公道話，皇帝判我死刑。但我沒有錢贖罪，所以我選了宮刑。',
    nextNodeId: 'yi1-chapter-8-10',
  },
  {
    id: 'yi1-chapter-8-10',
    speaker: 'simaqian',
    text: '我想過死。但我父親交給我的《史記》還沒寫完。我不甘心帶著一本沒寫完的書去死。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-8-choice-2',
  },

  // === 選項2：對司馬遷遭遇的反應 ===
  {
    id: 'yi1-chapter-8-choice-2',
    speaker: 'narrator',
    text: '聽到這些，她心中湧起複雜的情緒……',
    choices: [
      { id: 'ch8-admire', text: '你怎麼能撐過來的？', nextNodeId: 'yi1-chapter-8-admire-1', arcChange: 3, shadowChange: 0 },
      { id: 'ch8-compare', text: '相比之下，我的痛苦好像很渺小……', nextNodeId: 'yi1-chapter-8-compare-1', arcChange: 0, shadowChange: 3 },
      { id: 'ch8-question', text: '值得嗎？為了一本書受這種苦？', nextNodeId: 'yi1-chapter-8-question-1', arcChange: 2, shadowChange: 0 },
    ],
  },

  // 分支A：佩服
  {
    id: 'yi1-chapter-8-admire-1',
    speaker: 'simaqian',
    text: '因為我找到了比活著更重要的東西。那就是——完成。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-8-11',
  },
  // 分支B：自貶
  {
    id: 'yi1-chapter-8-compare-1',
    speaker: 'simaqian',
    text: '痛苦沒有大小之分。你心裡的苦，對你來說就是最大的。',
    nextNodeId: 'yi1-chapter-8-11',
  },
  // 分支C：質疑
  {
    id: 'yi1-chapter-8-question-1',
    speaker: 'simaqian',
    text: '值不值得，只有我自己知道。但我可以告訴你——我不後悔。',
    nextNodeId: 'yi1-chapter-8-11',
  },

  // 三、把自己活完（匯合）
  {
    id: 'yi1-chapter-8-11',
    speaker: 'simaqian',
    text: '受刑後，我成了廢人。不能當官，不能交友，不能回家。我就躲在家裡寫書，整整十四年。',
    bgImage: 'sima_writing', // 司馬遷伏案書寫
    nextNodeId: 'yi1-chapter-8-12',
  },
  {
    id: 'yi1-chapter-8-12',
    speaker: 'simaqian',
    text: '我問你，你覺得我是一個「殘缺」的人嗎？',
    nextNodeId: 'yi1-chapter-8-13',
  },
  {
    id: 'yi1-chapter-8-13',
    speaker: 'protagonist',
    text: '身體上可能是，但你寫出了《史記》。從這個角度說，你比大多數人都完整。',
    nextNodeId: 'yi1-chapter-8-14',
  },
  {
    id: 'yi1-chapter-8-14',
    speaker: 'simaqian',
    text: '對。我們叫這「成」。所有的「成」，最後都指向同一個東西——把自己活完。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-8-15',
  },
  {
    id: 'yi1-chapter-8-15',
    speaker: 'simaqian',
    text: '老天爺給我的身體被毀了，但我還有腦袋、雙手和一支筆。我就用剩下的材料，把自己完成。',
    nextNodeId: 'yi1-chapter-8-16',
  },

  // 四、使命與為自己活
  {
    id: 'yi1-chapter-8-16',
    speaker: 'simaqian',
    text: '你說你不知道使命是什麼？問自己一個問題：如果你死了，你最不甘心的是什麼？',
    bgImage: 'sima_study', // 切回書房全景
    nextNodeId: 'yi1-chapter-8-choice-3',
  },

  // === 選項3：面對「最不甘心」的問題 ===
  {
    id: 'yi1-chapter-8-choice-3',
    speaker: 'narrator',
    text: '這個問題像一把刀，直直插進她心裡最軟的地方……',
    choices: [
      { id: 'ch8-self', text: '我從來沒有為自己活過', nextNodeId: 'yi1-chapter-8-self-1', arcChange: 8, shadowChange: 0 },
      { id: 'ch8-story', text: '我沒有把故事寫完', nextNodeId: 'yi1-chapter-8-story-1', arcChange: 5, shadowChange: 0 },
      { id: 'ch8-nothing', text: '我不知道……好像什麼都無所謂', nextNodeId: 'yi1-chapter-8-nothing-1', arcChange: 0, shadowChange: 5 },
    ],
  },

  // 分支A：為自己活
  {
    id: 'yi1-chapter-8-self-1',
    speaker: 'simaqian',
    text: '那就是你的使命。為自己活一次。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-8-17',
  },
  // 分支B：故事
  {
    id: 'yi1-chapter-8-story-1',
    speaker: 'simaqian',
    text: '那就去寫完它。無論別人怎麼說。那是屬於你的「完成」。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-8-17',
  },
  // 分支C：無所謂
  {
    id: 'yi1-chapter-8-nothing-1',
    speaker: 'simaqian',
    text: '「無所謂」是心死的另一種說法。但你來到這裡，說明你心裡還有一點火沒熄。',
    nextNodeId: 'yi1-chapter-8-17',
  },

  // 匯合
  {
    id: 'yi1-chapter-8-17',
    speaker: 'simaqian',
    text: '一個沒有活過自己的人，給不了別人什麼。他只能給別人空洞的義務。',
    nextNodeId: 'yi1-chapter-8-18',
  },

  // 五、筆比命長
  {
    id: 'yi1-chapter-8-18',
    speaker: 'narrator',
    text: '問心的聲音從遠處傳來，帶著一絲微笑。',
    nextNodeId: 'yi1-chapter-8-19',
  },
  {
    id: 'yi1-chapter-8-19',
    speaker: 'protagonist',
    text: '子長，你說「筆比命長」是什麼意思？',
    nextNodeId: 'yi1-chapter-8-20',
  },
  {
    id: 'yi1-chapter-8-20',
    speaker: 'simaqian',
    text: '他們以為閹了我，就閹了我的筆。他們錯了。我的命只有幾十年，但我的筆可以活幾千年。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '把自己活完',
      subtitle: '——司馬遷',
      theme: 'dawn',
      duration: 4000,
    },
    nextNodeId: 'yi1-chapter-8-21',
  },
  {
    id: 'yi1-chapter-8-21',
    speaker: 'simaqian',
    text: '他們可以毀掉我的身體，但毀不掉我的字。',
    nextNodeId: 'yi1-chapter-8-end',
  },
  {
    id: 'yi1-chapter-8-end',
    speaker: 'wenxin',
    text: '下一個是李白。他會教你——什麼是真正的自由。',
    nextNodeId: 'yi1-chapter-9-intro-1',
    effect: 'fade-out',
  },
];
