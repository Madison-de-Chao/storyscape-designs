import type { DialogueNode } from '@/stores/gameStore';

export const chapter9Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-chapter-9-intro-1',
    speaker: 'libai',
    text: '君不見\n黃河之水天上來\n奔流到海不復回',
    effect: 'vertical',
    bgImage: 'moon_bg',
    nextNodeId: 'yi1-chapter-9-intro-2',
  },
  {
    id: 'yi1-chapter-9-intro-2',
    speaker: 'narrator',
    text: '——李白',
    nextNodeId: 'yi1-chapter-9-1',
  },
  {
    id: 'yi1-chapter-9-1',
    speaker: 'narrator',
    effect: 'ink', // 使用水墨特效
    text: '還沒看到人，先聞到濃烈的酒味。抬頭一看，一個人坐在屋頂上，抱著酒罈，月光灑在他身上。',
    bgImage: 'libai_roof', // 月下屋頂
    nextNodeId: 'yi1-chapter-9-2',
  },
  {
    id: 'yi1-chapter-9-2',
    speaker: 'libai',
    speakerName: '李白',
    text: '問心！你來得正好！過來喝一杯！',
    nextNodeId: 'yi1-chapter-9-3',
  },
  {
    id: 'yi1-chapter-9-3',
    speaker: 'narrator',
    text: '他輕飄飄地跳下來。眼神亮得像個少年——一種瘋狂的亮。',
    nextNodeId: 'yi1-chapter-9-4',
  },
  {
    id: 'yi1-chapter-9-4',
    speaker: 'libai',
    text: '你是來學「習得性無助」的？這個我懂。我當年也這樣。',
    nextNodeId: 'yi1-chapter-9-5',
  },

  // 一、想當官的詩人
  {
    id: 'yi1-chapter-9-5',
    speaker: 'libai',
    text: '你知道我這輩子最想要什麼嗎？當官。我說自己是大唐未來的宰相。',
    nextNodeId: 'yi1-chapter-9-6',
  },
  {
    id: 'yi1-chapter-9-6',
    speaker: 'libai',
    text: '我求了十幾年的官，寫詩到處求人，但沒人給我正經官做。因為我家世不行，科舉又考不上。',
    nextNodeId: 'yi1-chapter-9-7',
  },
  {
    id: 'yi1-chapter-9-7',
    speaker: 'libai',
    text: '後來終於當了翰林供奉，結果發現工作是「給皇帝寫詩助興」。我就像個「人形點唱機」。',
    nextNodeId: 'yi1-chapter-9-8',
  },
  {
    id: 'yi1-chapter-9-8',
    speaker: 'libai',
    text: '我覺得自己像條狗，所以辭官走了。那時候我覺得自己徹底失敗了。',
    nextNodeId: 'yi1-chapter-9-9',
  },

  // 二、撈月與覺醒
  {
    id: 'yi1-chapter-9-9',
    speaker: 'libai',
    text: '直到有一天晚上，我喝醉了去撈水裡的月亮。掉進水裡後，我突然清醒了。',
    bgImage: 'moon_reflection', // 水中月
    effect: 'flash',
    nextNodeId: 'yi1-chapter-9-10',
  },
  {
    id: 'yi1-chapter-9-10',
    speaker: 'libai',
    text: '我看著月亮想：它不需要任何人的認可，它就掛在天上，做它自己。',
    nextNodeId: 'yi1-chapter-9-11',
  },
  {
    id: 'yi1-chapter-9-11',
    speaker: 'libai',
    text: '我以為我想當官，其實我想要的是「被認可」。但我真正想要的，其實是自由。當官給不了我自由。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-9-12',
  },
  {
    id: 'yi1-chapter-9-12',
    speaker: 'libai',
    text: '我追了十幾年的東西，其實是一個錯誤的方向。那是社會告訴我的夢想，不是我的。',
    nextNodeId: 'yi1-chapter-9-13',
  },

  // 三、天生我材
  {
    id: 'yi1-chapter-9-13',
    speaker: 'libai',
    text: '你做的那些事，是你真正想做的嗎？還是別人告訴你「應該」做的？',
    nextNodeId: 'yi1-chapter-9-14',
  },
  {
    id: 'yi1-chapter-9-14',
    speaker: 'libai',
    text: '做那個月亮。不需要任何人認可。',
    nextNodeId: 'yi1-chapter-9-15',
  },
  {
    id: 'yi1-chapter-9-15',
    speaker: 'libai',
    text: '「天生我材必有用，千金散盡還復來。」身外之物散了還會來，但我永遠是我。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-9-16',
  },
  {
    id: 'yi1-chapter-9-16',
    speaker: 'libai',
    text: '你的價值，不在於你擁有什麼，而在於你是誰。',
    nextNodeId: 'yi1-chapter-9-17',
  },

  // 四、真正的自由
  {
    id: 'yi1-chapter-9-17',
    speaker: 'protagonist',
    text: '那什麼是真正的自由？想幹嘛就幹嘛？',
    nextNodeId: 'yi1-chapter-9-18',
  },
  {
    id: 'yi1-chapter-9-18',
    speaker: 'libai',
    text: '不是。那是任性，是被慾望牽著走。',
    nextNodeId: 'yi1-chapter-9-19',
  },
  {
    id: 'yi1-chapter-9-19',
    speaker: 'libai',
    text: '真正的自由是——知道自己真正想要什麼，然後有能力選擇追不追。是做慾望的主人。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-9-20',
  },
  {
    id: 'yi1-chapter-9-20',
    speaker: 'libai',
    text: '放下「應該」，去找「想要」。找到那個東西，然後去追。追到了，你就自由了。',
    nextNodeId: 'yi1-chapter-9-21',
  },

  // 五、告別
  {
    id: 'yi1-chapter-9-21',
    speaker: 'libai',
    text: '別太認真，人生苦短，開心最重要。對了，見到杜甫替我問聲好！',
    nextNodeId: 'yi1-chapter-9-22',
  },
  {
    id: 'yi1-chapter-9-22',
    speaker: 'narrator',
    text: '李白抱著酒罈消失在月光裡。',
    nextNodeId: 'yi1-chapter-9-23',
  },
  {
    id: 'yi1-chapter-9-23',
    speaker: 'wenxin',
    text: '接下來是西方的歸者。凱薩和克麗奧佩特拉。他們會教你——關係中的完整性。',
    nextNodeId: 'yi1-chapter-10-intro-1',
    effect: 'fade',
  },
];
