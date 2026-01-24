import type { DialogueNode } from '@/stores/gameStore';

export const chapter15Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-ch15-intro',
    speaker: 'narrator',
    text: '「我不是你的敵人。我是你的成全。」',
    effect: 'glow',
    nextNodeId: 'yi1-ch15-1',
  },

  // 一、進入洞穴
  {
    id: 'yi1-ch15-1',
    speaker: 'narrator',
    text: '弧度林比她記憶中更安靜。所有的樹都靜止了，像是在等待什麼。她走向那棵扭曲的海棠樹——她的命樹。樹根處，那個黑暗的洞穴還在。',
    bgImage: 'ch15_cave_entrance',
    nextNodeId: 'yi1-ch15-2',
  },
  {
    id: 'yi1-ch15-2',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '我不能陪你進去。見到伊的時候——好好聽她說。',
    nextNodeId: 'yi1-ch15-3',
  },
  {
    id: 'yi1-ch15-3',
    speaker: 'narrator',
    text: '她深吸一口氣，走進了洞穴。一開始是黑暗的，但隨著她往前走，兩側的牆壁開始發出微弱的琉璃色光芒。她走了很久，然後看見了盡頭——一個人背對著她，坐在石頭上。',
    bgImage: 'ch15_cave_interior',
    nextNodeId: 'yi1-ch15-4',
  },
  {
    id: 'yi1-ch15-4',
    speaker: 'protagonist',
    text: '伊。我來了。',
    nextNodeId: 'yi1-ch15-5',
  },
  {
    id: 'yi1-ch15-5',
    speaker: 'narrator',
    text: '那個人站起身，慢慢轉過來。她看見了自己的臉。',
    nextNodeId: 'yi1-ch15-6',
  },

  // 二、伊的登場
  {
    id: 'yi1-ch15-6',
    speaker: 'narrator',
    text: '伊和她長得一模一樣，但又完全不同。濃烈的妝容，上挑的眼線，正紅色的嘴唇。頭髮散落在肩上，帶著一種她從來不允許自己有的野性。華服是大紅、金黃、墨黑交織，但是破碎的，像是被撕裂過，又被粗糙地縫補起來。',
    bgImage: 'ch15_yi_reveal',
    nextNodeId: 'yi1-ch15-7',
  },
  {
    id: 'yi1-ch15-7',
    speaker: 'yi',
    speakerName: '伊',
    text: '你終於來了。衣服不錯，十種顏色了。你經歷的每一件事，我都知道。我在這裡等了三十年，看著你把我推開，看著你假裝我不存在，看著你——變成一個連自己都不認識的人。',
    nextNodeId: 'yi1-ch15-choice-1',
  },

  // 🎯 選項1：面對伊的態度
  {
    id: 'yi1-ch15-choice-1',
    speaker: 'narrator',
    text: '她決定按照計劃來。',
    choices: [
      {
        id: 'ch15-c1a',
        text: '「伊，我已經變了。我學會了正確的方向。」',
        nextNodeId: 'yi1-ch15-8a',
        arcChange: -5,
        shadowChange: 5,
      },
      {
        id: 'ch15-c1b',
        text: '「伊，對不起，讓你等了這麼久。」',
        nextNodeId: 'yi1-ch15-8b',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch15-8a',
    speaker: 'protagonist',
    text: '我見了十個歸者，學了他們的道理。我明白外境不能定義價值，明白答案在心裡，明白被拒絕是信號——',
    nextNodeId: 'yi1-ch15-9',
  },
  {
    id: 'yi1-ch15-8b',
    speaker: 'yi',
    speakerName: '伊',
    text: '你知道「對不起」這三個字有多輕嗎？但至少，你沒有一上來就說「我已經變了」。',
    nextNodeId: 'yi1-ch15-9',
  },

  // 三、伊的反駁
  {
    id: 'yi1-ch15-9',
    speaker: 'yi',
    speakerName: '伊',
    text: '夠了。你來這裡，不是來面對我的。你來這裡，是來「處理」我的。你覺得你已經學會了所有的道理，覺得這趟旅程就是一場考試，而你已經考完了。',
    bgImage: 'ch15_yi_confrontation',
    nextNodeId: 'yi1-ch15-10',
  },
  {
    id: 'yi1-ch15-10',
    speaker: 'yi',
    speakerName: '伊',
    text: '你說「我已經變了」——這句話聽起來像什麼？像一個出軌被抓的人說「我不會再犯了」。像每一個想要輕鬆過關的人說的話。',
    nextNodeId: 'yi1-ch15-11',
  },
  {
    id: 'yi1-ch15-11',
    speaker: 'yi',
    speakerName: '伊',
    text: '蘇軾說外境不能定義你的價值。那我問你——你回到地球以後，老闆再說一次「這不是我要的」，你會怎麼樣？',
    nextNodeId: 'yi1-ch15-12',
  },
  {
    id: 'yi1-ch15-12',
    speaker: 'yi',
    speakerName: '伊',
    text: '你會難過。你會在心裡罵自己「為什麼我連這點小事都做不好」。你以為你學會了什麼？你只是在這裡聽了一些好聽的話。等你回到真實世界，那些「道理」一秒鐘就會被打回原形。',
    effect: 'shake',
    nextNodeId: 'yi1-ch15-13',
  },
  {
    id: 'yi1-ch15-13',
    speaker: 'yi',
    speakerName: '伊',
    text: '我比任何人都知道。我是你，記得嗎？你每一次被罵的時候有多難過，我都感受得到。你每一次在廁所裡偷偷哭的時候，我都在。你以為你「學會了」？你只是在嘴巴上學會了。你的心——從來沒有變過。',
    nextNodeId: 'yi1-ch15-choice-2',
  },

  // 🎯 選項2：被擊中
  {
    id: 'yi1-ch15-choice-2',
    speaker: 'yi',
    speakerName: '伊',
    text: '王陽明說答案在心裡。那我問你——你的答案是什麼？你知道你想要什麼嗎？',
    choices: [
      {
        id: 'ch15-c2a',
        text: '「我……我不知道。」',
        nextNodeId: 'yi1-ch15-14a',
        arcChange: 8,
        shadowChange: -3,
      },
      {
        id: 'ch15-c2b',
        text: '「我想要……變得完整？」',
        nextNodeId: 'yi1-ch15-14b',
        arcChange: 3,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch15-14a',
    speaker: 'yi',
    speakerName: '伊',
    text: '你不知道。你刪掉那些故事的時候不知道，來到元壹境的時候不知道，見了十個歸者之後還是不知道。你只知道你「不想要」什麼。但你想要什麼？你從來沒有問過自己這個問題。',
    nextNodeId: 'yi1-ch15-15',
  },
  {
    id: 'yi1-ch15-14b',
    speaker: 'yi',
    speakerName: '伊',
    text: '「變得完整」不是答案，那是口號。你一輩子都在問別人「你想要什麼，我給你」。你從來沒有問過自己「我想要什麼」。',
    nextNodeId: 'yi1-ch15-15',
  },

  // 四、伊的控訴
  {
    id: 'yi1-ch15-15',
    speaker: 'yi',
    speakerName: '伊',
    text: '你知道最可笑的是什麼嗎？你來這裡，說你「不再需要我了」。你知道這三十年來，我在做什麼嗎？',
    nextNodeId: 'yi1-ch15-16',
  },
  {
    id: 'yi1-ch15-16',
    speaker: 'yi',
    speakerName: '伊',
    text: '我在等你。',
    effect: 'glow',
    nextNodeId: 'yi1-ch15-17',
  },
  {
    id: 'yi1-ch15-17',
    speaker: 'yi',
    speakerName: '伊',
    text: '每一次你憤怒，你就把我推開——「我不應該生氣。」每一次你悲傷，你就把我推開——「我不應該軟弱。」每一次你有慾望，你就把我推開——「我不應該這麼貪心。」你把所有你覺得「不應該」的部分，都丟給了我。然後你假裝你是一個「好人」。',
    bgImage: 'ch15_yi_pain',
    nextNodeId: 'yi1-ch15-18',
  },
  {
    id: 'yi1-ch15-18',
    speaker: 'yi',
    speakerName: '伊',
    text: '你知道被丟掉是什麼感覺嗎？你知道被自己丟掉是什麼感覺嗎？每一次你推開我，我就被丟進這個黑暗的洞穴裡。一個人。沒有光。沒有聲音。只有你的聲音，從很遠很遠的地方傳來——「我不應該。我不應該。我不應該。」',
    nextNodeId: 'yi1-ch15-19',
  },
  {
    id: 'yi1-ch15-19',
    speaker: 'yi',
    speakerName: '伊',
    text: '我覺得我不應該存在。我覺得我是錯的，是壞的，是不應該有的。因為你——我的另一半——不要我了。',
    nextNodeId: 'yi1-ch15-20',
  },
  {
    id: 'yi1-ch15-20',
    speaker: 'narrator',
    text: '她的眼淚止不住地流下來。',
    nextNodeId: 'yi1-ch15-21',
  },

  // 五、伊的真相
  {
    id: 'yi1-ch15-21',
    speaker: 'yi',
    speakerName: '伊',
    text: '你說你不再需要我了？你錯了。你比任何時候都需要我。因為沒有我，你的善良只是天真。沒有我，你的勇敢只是魯莽。沒有我，你的溫柔只是討好。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '我不是你的敵人，我是你的成全',
      subtitle: '——伊',
      theme: 'crimson',
    },
    nextNodeId: 'yi1-ch15-22',
  },
  {
    id: 'yi1-ch15-22',
    speaker: 'yi',
    speakerName: '伊',
    text: '你以為你把我切掉，你就會更好？你以為你把我藏起來，你就會更完整？你錯了。你每切掉一塊，你就少一塊。你以為你在追求完美，其實你在製造殘缺。',
    nextNodeId: 'yi1-ch15-23',
  },

  // 六、崩潰與道歉
  {
    id: 'yi1-ch15-23',
    speaker: 'narrator',
    text: '她蹲下來，再也站不住了。眼淚像斷了線的珠子。',
    nextNodeId: 'yi1-ch15-24',
  },
  {
    id: 'yi1-ch15-24',
    speaker: 'protagonist',
    text: '對不起……對不起……我不知道我傷害了你這麼深……',
    nextNodeId: 'yi1-ch15-25',
  },
  {
    id: 'yi1-ch15-25',
    speaker: 'yi',
    speakerName: '伊',
    text: '你不是傷害了我，你是傷害了你自己。我就是你。你恨我的時候，你在恨你自己。你推開我的時候，你在推開你自己。',
    nextNodeId: 'yi1-ch15-choice-3',
  },

  // 🎯 選項3：真正的領悟
  {
    id: 'yi1-ch15-choice-3',
    speaker: 'protagonist',
    text: '我以為我來這裡，是來「處理」你的。我以為我學會了道理，就可以——',
    choices: [
      {
        id: 'ch15-c3a',
        text: '「就可以不用真的面對你。我錯了。」',
        nextNodeId: 'yi1-ch15-26a',
        arcChange: 10,
        shadowChange: -5,
      },
      {
        id: 'ch15-c3b',
        text: '「就可以輕鬆過關。我錯了。」',
        nextNodeId: 'yi1-ch15-26b',
        arcChange: 8,
        shadowChange: -3,
      },
    ],
  },
  {
    id: 'yi1-ch15-26a',
    speaker: 'yi',
    speakerName: '伊',
    text: '你終於承認了。你知道成就律是什麼意思嗎？明暗相成，非為相照。光明是用來成就黑暗的，黑暗是用來成就光明的。我不是你的敵人，我是你的成全。',
    nextNodeId: 'yi1-ch15-27',
  },
  {
    id: 'yi1-ch15-26b',
    speaker: 'yi',
    speakerName: '伊',
    text: '沒有輕鬆過關這回事。但至少你承認了。你知道成就律是什麼意思嗎？我不是你的敵人，我是你的成全。',
    nextNodeId: 'yi1-ch15-27',
  },

  // 七、真正的理解
  {
    id: 'yi1-ch15-27',
    speaker: 'yi',
    speakerName: '伊',
    text: '你的善良，是因為你知道什麼是殘忍——那個殘忍，是我。你的勇敢，是因為你知道什麼是恐懼——那個恐懼，是我。你的溫柔，是因為你知道什麼是傷害——那個傷害，是我。如果沒有我，你什麼都不是。',
    bgImage: 'ch15_yi_softening',
    nextNodeId: 'yi1-ch15-28',
  },
  {
    id: 'yi1-ch15-28',
    speaker: 'protagonist',
    text: '我以為完整是把你「整合」回來，像是把一塊拼圖放回去。但不是……不是整合。是——承認。',
    nextNodeId: 'yi1-ch15-29',
  },
  {
    id: 'yi1-ch15-29',
    speaker: 'yi',
    speakerName: '伊',
    text: '承認什麼？',
    nextNodeId: 'yi1-ch15-30',
  },
  {
    id: 'yi1-ch15-30',
    speaker: 'protagonist',
    text: '承認你一直都在。承認你從來沒有離開過。承認——我不是在把你「整合」回來，因為你從來沒有離開過我。每一次我壓抑憤怒，那個憤怒沒有消失，它變成了焦慮。每一次我隱藏悲傷，那個悲傷沒有消失，它變成了麻木。你一直都在。我只是不願意承認。',
    effect: 'glow',
    nextNodeId: 'yi1-ch15-31',
  },
  {
    id: 'yi1-ch15-31',
    speaker: 'narrator',
    text: '伊的眼淚流了下來。「你終於懂了。」',
    nextNodeId: 'yi1-ch15-32',
  },

  // 八、回家
  {
    id: 'yi1-ch15-32',
    speaker: 'protagonist',
    text: '我不是來「處理」你的，我不是來「告別」你的。我是來——接你回家。',
    nextNodeId: 'yi1-ch15-33',
  },
  {
    id: 'yi1-ch15-33',
    speaker: 'yi',
    speakerName: '伊',
    text: '你知道我等這句話等了多久嗎？三十年。三十年我在這裡等你，等你願意轉身，等你願意走進這個黑暗的洞穴，等你願意說——',
    nextNodeId: 'yi1-ch15-34',
  },
  {
    id: 'yi1-ch15-34',
    speaker: 'protagonist',
    text: '對不起，我不該把你推開。歡迎回家。',
    nextNodeId: 'yi1-ch15-35',
  },
  {
    id: 'yi1-ch15-35',
    speaker: 'narrator',
    text: '伊看著她，猶豫了一秒。然後，她撲進了她的懷裡。',
    bgImage: 'ch15_embrace',
    nextNodeId: 'yi1-ch15-36',
  },

  // 九、光芒交織
  {
    id: 'yi1-ch15-36',
    speaker: 'narrator',
    text: '那一刻，洞穴裡的琉璃光突然變亮。她感覺伊的身體在發光，自己的身體也在發光。兩道光交織在一起——不是「融合」，而是「回歸」。本來就是一個東西，終於不再假裝是兩個。',
    effect: 'glow',
    bgImage: 'ch15_light_merge',
    nextNodeId: 'yi1-ch15-37',
  },
  {
    id: 'yi1-ch15-37',
    speaker: 'narrator',
    text: '她感覺到伊的憤怒流進她的身體——那不是可怕的，那是力量。伊的悲傷——那不是軟弱的，那是深度。伊的慾望——那不是貪婪的，那是動力。伊的野心——那不是傲慢的，那是方向。這些她曾經害怕的、壓抑的、切割的部分——它們不是敵人。它們是她。一直都是。',
    nextNodeId: 'yi1-ch15-38',
  },

  // 十、走出洞穴
  {
    id: 'yi1-ch15-38',
    speaker: 'narrator',
    text: '當光芒散去，伊不見了。但她感覺，伊沒有消失。伊在她裡面，而她也在伊裡面。壹即全，全即壹。伊即壹，壹即伊。她低頭看自己——衣服變了。不再是十種顏色的素絹，而是靛藍、月白、淡金交織的華服。還有一抹正紅。那是伊的顏色。現在，也是她的顏色。',
    bgImage: 'ch15_new_robe',
    nextNodeId: 'yi1-ch15-39',
  },
  {
    id: 'yi1-ch15-39',
    speaker: 'narrator',
    text: '她走出洞穴。那棵扭曲的海棠樹——她的命樹——正在重新綻放。那些結節和疤痕還在，但從疤痕之間，長出了新的枝葉，粉色的花朵一朵一朵地綻放。',
    bgImage: 'ch15_tree_blooming',
    nextNodeId: 'yi1-ch15-40',
  },
  {
    id: 'yi1-ch15-40',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '你完整了。',
    nextNodeId: 'yi1-ch15-41',
  },
  {
    id: 'yi1-ch15-41',
    speaker: 'protagonist',
    text: '沒有。我只是——不再害怕不完整了。完整不是沒有缺口，完整是不再害怕缺口。因為每一個缺口，都在成就其他部分。我的疤痕不會消失，我的過去不會改變。但它們是我的一部分。我只需要承認它們，然後繼續往前走。',
    effect: 'glow',
    nextNodeId: 'yi1-ch15-42',
  },

  // 十一、真正的領悟
  {
    id: 'yi1-ch15-42',
    speaker: 'protagonist',
    text: '問心，我之前錯得很離譜。我以為我學會了道理就完整了，以為我比那些未歸者厲害。但我和他們沒有什麼不同。我和他們唯一的區別是——我有機會見到伊。他們沒有。所以我不應該覺得自己比他們厲害。我應該覺得——我很幸運。',
    nextNodeId: 'yi1-ch15-43',
  },
  {
    id: 'yi1-ch15-43',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '這是你這趟旅程學到的最重要的東西。那些道理誰都會說。但知道自己和別人沒有不同，知道自己也會犯同樣的錯誤，知道自己只是比較幸運——這個，不是每個人都能學會的。',
    nextNodeId: 'yi1-ch15-44',
  },
  {
    id: 'yi1-ch15-44',
    speaker: 'protagonist',
    text: '那個空的壁龕——我剛才進去見伊之前，那個位置有可能是我的嗎？',
    nextNodeId: 'yi1-ch15-45',
  },
  {
    id: 'yi1-ch15-45',
    speaker: 'narrator',
    text: '問心沒有回答。但那個沉默本身就是答案。',
    nextNodeId: 'yi1-ch15-46',
  },
  {
    id: 'yi1-ch15-46',
    speaker: 'protagonist',
    text: '我知道了。謝謝你沒有告訴我。因為如果你告訴我，我可能會更害怕。但我需要的不是害怕——我需要的是自己去經歷。',
    nextNodeId: 'yi1-ch15-47',
  },
  {
    id: 'yi1-ch15-47',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '你真的變了。',
    nextNodeId: 'yi1-ch15-48',
  },
  {
    id: 'yi1-ch15-48',
    speaker: 'protagonist',
    text: '沒有。我沒有變。我只是——回來了。',
    nextNodeId: 'yi1-ch15-49',
  },

  // 十二、尾聲
  {
    id: 'yi1-ch15-49',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '走吧，最後一關在等你。選擇——去，或留。',
    nextNodeId: 'yi1-ch15-coda',
  },
  {
    id: 'yi1-ch15-coda',
    speaker: 'narrator',
    text: '那一夜，弧度林的所有命樹，都亮了一瞬。像是無數的螢火蟲同時點亮，又同時熄滅。據說，每當有一個靈魂完成整合，就會發生這樣的事。那是壹在慶祝——慶祝它的一個部分，終於回家了。',
    effect: 'fade-out',
    bgImage: 'ch15_forest_glow',
    nextNodeId: 'yi1-ch16-intro',
  },
];
