import type { DialogueNode } from '@/stores/gameStore';

export const chapter9Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-ch9-intro',
    speaker: 'narrator',
    text: '「我求了一輩子的東西，其實從來不適合我。放下的那天，我才真正自由。」',
    effect: 'glow',
    nextNodeId: 'yi1-ch9-1',
  },

  // 一、遇見李白
  {
    id: 'yi1-ch9-1',
    speaker: 'narrator',
    text: '她聞到了酒味。還沒看到人，先聞到酒。那味道濃烈、醇厚，越來越近。',
    bgImage: 'ch9_moonlight',
    nextNodeId: 'yi1-ch9-2',
  },
  {
    id: 'yi1-ch9-2',
    speaker: 'narrator',
    text: '她抬頭一看——一個人坐在屋頂上。白衣散髮，手裡抱著一個酒罈。月光灑在他身上，像給他鍍了一層銀邊。',
    nextNodeId: 'yi1-ch9-3',
  },
  {
    id: 'yi1-ch9-3',
    speaker: 'libai',
    speakerName: '李白',
    text: '問心！你來得正好！過來喝一杯！',
    nextNodeId: 'yi1-ch9-4',
  },
  {
    id: 'yi1-ch9-4',
    speaker: 'narrator',
    text: '話還沒說完，他腳下一滑。但他沒有摔下來，輕飄飄地從屋頂跳下，穩穩地落在她面前。',
    bgImage: 'ch9_libai_landing',
    nextNodeId: 'yi1-ch9-5',
  },
  {
    id: 'yi1-ch9-5',
    speaker: 'libai',
    speakerName: '李白',
    text: '嚇到你了？放心，我這輩子就沒摔過。',
    nextNodeId: 'yi1-ch9-choice-1',
  },

  // 🎯 選項1：對李白的反應
  {
    id: 'yi1-ch9-choice-1',
    speaker: 'narrator',
    text: '他看起來四十多歲，但眼神亮得像個少年——一種瘋狂的亮。',
    choices: [
      {
        id: 'ch9-c1a',
        text: '「你這輩子不是已經結束了嗎？」',
        nextNodeId: 'yi1-ch9-6a',
        arcChange: 5,
        shadowChange: 0,
      },
      {
        id: 'ch9-c1b',
        text: '「你就是……李白？那個詩仙？」',
        nextNodeId: 'yi1-ch9-6b',
        arcChange: 0,
        shadowChange: 2,
      },
    ],
  },
  {
    id: 'yi1-ch9-6a',
    speaker: 'libai',
    speakerName: '李白',
    text: '哈哈哈！有意思！這個丫頭有意思！',
    nextNodeId: 'yi1-ch9-7',
  },
  {
    id: 'yi1-ch9-6b',
    speaker: 'libai',
    speakerName: '李白',
    text: '詩仙？那是你們後人給我的標籤。我自己可從來沒說過我是詩人。我說自己是——大唐未來的宰相。',
    nextNodeId: 'yi1-ch9-7',
  },

  // 二、求官的故事
  {
    id: 'yi1-ch9-7',
    speaker: 'libai',
    speakerName: '李白',
    text: '你知道我這輩子最想要什麼嗎？當官。我在長安求了十幾年的官。',
    bgImage: 'ch9_libai_sitting',
    nextNodeId: 'yi1-ch9-8',
  },
  {
    id: 'yi1-ch9-8',
    speaker: 'protagonist',
    text: '有用嗎？',
    nextNodeId: 'yi1-ch9-9',
  },
  {
    id: 'yi1-ch9-9',
    speaker: 'libai',
    speakerName: '李白',
    text: '有個屁用。我把詩寫得天花亂墜，把自己吹得跟神仙一樣。但沒有一個人願意給我一個正經的官。因為我沒有背景，科舉又考不上。',
    nextNodeId: 'yi1-ch9-10',
  },
  {
    id: 'yi1-ch9-10',
    speaker: 'protagonist',
    text: '你考不上？你不是……天才嗎？',
    nextNodeId: 'yi1-ch9-11',
  },
  {
    id: 'yi1-ch9-11',
    speaker: 'libai',
    speakerName: '李白',
    text: '別這麼大聲！傳出去多丟人。天才也有不擅長的東西。我擅長寫詩，不擅長寫八股。後來好不容易當上翰林供奉，結果發現——',
    nextNodeId: 'yi1-ch9-12',
  },
  {
    id: 'yi1-ch9-12',
    speaker: 'libai',
    speakerName: '李白',
    text: '我的工作就是給皇帝寫詩助興。皇帝喝酒我寫詩，皇帝看花我寫詩，皇帝跟貴妃調情我也在旁邊寫詩。我就像一個——人形點唱機。',
    nextNodeId: 'yi1-ch9-13',
  },
  {
    id: 'yi1-ch9-13',
    speaker: 'protagonist',
    text: '所以你後來辭官了？',
    nextNodeId: 'yi1-ch9-14',
  },
  {
    id: 'yi1-ch9-14',
    speaker: 'libai',
    speakerName: '李白',
    text: '對，我覺得自己像條狗。辭官的時候，我覺得這是我人生中最失敗的時刻——我求了十幾年的東西，得到了，發現是假的。',
    nextNodeId: 'yi1-ch9-15',
  },

  // 三、撈月頓悟
  {
    id: 'yi1-ch9-15',
    speaker: 'libai',
    speakerName: '李白',
    text: '那段時間我喝了很多酒。有一天晚上，喝到看見月亮在水裡晃，我就想去撈那個月亮。',
    bgImage: 'ch9_moon_water',
    nextNodeId: 'yi1-ch9-16',
  },
  {
    id: 'yi1-ch9-16',
    speaker: 'libai',
    speakerName: '李白',
    text: '我掉進水裡之後，躺著看天上的月亮，突然想——這月亮多好啊。它不需要任何人的認可，它就這麼掛在天上，照亮整個世界。',
    nextNodeId: 'yi1-ch9-17',
  },
  {
    id: 'yi1-ch9-17',
    speaker: 'libai',
    speakerName: '李白',
    text: '它不需要當官，不需要科舉，不需要討好任何人。它只是——做它自己。',
    effect: 'glow',
    nextNodeId: 'yi1-ch9-choice-2',
  },

  // 🎯 選項2：對頓悟的反應
  {
    id: 'yi1-ch9-choice-2',
    speaker: 'narrator',
    text: '她似乎明白了什麼。',
    choices: [
      {
        id: 'ch9-c2a',
        text: '「你追求的東西，其實不是你真正想要的？」',
        nextNodeId: 'yi1-ch9-18a',
        arcChange: 8,
        shadowChange: 0,
      },
      {
        id: 'ch9-c2b',
        text: '「所以你想要的是自由，不是當官？」',
        nextNodeId: 'yi1-ch9-18b',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch9-18a',
    speaker: 'libai',
    speakerName: '李白',
    text: '對。我以為我想要當官，但其實我想要的是——自由。自由地寫詩，自由地喝酒，自由地做我自己。當官給不了我這些。',
    nextNodeId: 'yi1-ch9-19',
  },
  {
    id: 'yi1-ch9-18b',
    speaker: 'libai',
    speakerName: '李白',
    text: '你很聰明。我被「應該」綁架了。「學而優則仕」，全天下都這麼說，說得多了我就信了。但那是別人的夢想，不是我的。',
    nextNodeId: 'yi1-ch9-19',
  },

  // 四、真正的自由
  {
    id: 'yi1-ch9-19',
    speaker: 'libai',
    speakerName: '李白',
    text: '這就是我想告訴你的——你說你做什麼都不對。但你有沒有想過，你做的那些事，是你真正想做的嗎？還是你「應該」做的？',
    nextNodeId: 'yi1-ch9-20',
  },
  {
    id: 'yi1-ch9-20',
    speaker: 'narrator',
    text: '她說不出話來。她一直在追求「應該」——應該努力、應該成功、應該讓別人滿意。但那些「應該」，有多少是她自己想要的？',
    nextNodeId: 'yi1-ch9-21',
  },
  {
    id: 'yi1-ch9-21',
    speaker: 'libai',
    speakerName: '李白',
    text: '真正的自由不是想幹嘛就幹嘛，那是任性。真正的自由是——知道自己真正想要什麼，然後有能力選擇追不追。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '天生我材必有用',
      subtitle: '——李白《將進酒》',
      theme: 'silver',
    },
    nextNodeId: 'yi1-ch9-22',
  },
  {
    id: 'yi1-ch9-22',
    speaker: 'libai',
    speakerName: '李白',
    text: '「天生我材必有用，千金散盡還復來」——那些身外之物，錢也好，官也好，名聲也好，都是可以失去的。但「我材」——我這個人——這是不會失去的。',
    nextNodeId: 'yi1-ch9-choice-3',
  },

  // 🎯 選項3：告別
  {
    id: 'yi1-ch9-choice-3',
    speaker: 'narrator',
    text: '問心的聲音傳來：「差不多了。」李白站起身，有點搖晃。',
    choices: [
      {
        id: 'ch9-c3a',
        text: '「怎麼分辨哪些是『應該』，哪些是真正想要的？」',
        nextNodeId: 'yi1-ch9-23a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch9-c3b',
        text: '「謝謝你，太白。」',
        nextNodeId: 'yi1-ch9-23b',
        arcChange: 5,
        shadowChange: -2,
      },
    ],
  },
  {
    id: 'yi1-ch9-23a',
    speaker: 'libai',
    speakerName: '李白',
    text: '這個——我也不知道怎麼教。我唯一比別人厲害的地方，就是我願意承認我錯了。追了十幾年發現是錯的，我就承認是錯的，換一條路走。',
    nextNodeId: 'yi1-ch9-24',
  },
  {
    id: 'yi1-ch9-23b',
    speaker: 'libai',
    speakerName: '李白',
    text: '謝什麼。我只是一個運氣比較好的文青。你們後人把我想得太厲害了。',
    nextNodeId: 'yi1-ch9-24',
  },

  // 五、臨別贈言
  {
    id: 'yi1-ch9-24',
    speaker: 'libai',
    speakerName: '李白',
    text: '送你一句話——放下「應該」，去找「想要」。別人說你應該怎樣，不重要。社會說你應該怎樣，不重要。重要的是——你真正想要什麼。',
    bgImage: 'ch9_farewell',
    nextNodeId: 'yi1-ch9-25',
  },
  {
    id: 'yi1-ch9-25',
    speaker: 'libai',
    speakerName: '李白',
    text: '你也有你的「材」。不是別人定義的那個，是你自己的。找到它，用它。不要浪費。',
    nextNodeId: 'yi1-ch9-26',
  },
  {
    id: 'yi1-ch9-26',
    speaker: 'libai',
    speakerName: '李白',
    text: '還有——別太認真，人生苦短，開心最重要。',
    effect: 'glow',
    nextNodeId: 'yi1-ch9-27',
  },
  {
    id: 'yi1-ch9-27',
    speaker: 'narrator',
    text: '他抱起一罈酒，搖搖晃晃地走了。走了幾步，又回頭喊了一句——',
    nextNodeId: 'yi1-ch9-28',
  },
  {
    id: 'yi1-ch9-28',
    speaker: 'libai',
    speakerName: '李白',
    text: '對了，如果你見到杜甫，替我問聲好！悶葫蘆一個。',
    nextNodeId: 'yi1-ch9-29',
  },

  // 六、預告凱薩與克麗奧佩特拉
  {
    id: 'yi1-ch9-29',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '接下來是西方的歸者，兩個人，一起見。',
    nextNodeId: 'yi1-ch9-30',
  },
  {
    id: 'yi1-ch9-30',
    speaker: 'protagonist',
    text: '兩個人？',
    nextNodeId: 'yi1-ch9-31',
  },
  {
    id: 'yi1-ch9-31',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '凱薩和克麗奧佩特拉。他們會教你——關係中的完整性。之前的歸者教你的，都是關於你自己的。但人不是孤島，你還需要學會——如何在關係中保持完整。',
    nextNodeId: 'yi1-ch9-end',
  },
  {
    id: 'yi1-ch9-end',
    speaker: 'narrator',
    text: '這一次，她沒有害怕，也沒有猶豫。她甚至有點——期待。',
    effect: 'fade-out',
    nextNodeId: 'yi1-ch10-intro',
  },
];
