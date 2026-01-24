import type { DialogueNode } from '@/stores/gameStore';

export const chapter14Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-ch14-intro',
    speaker: 'narrator',
    text: '「那是預留的。給那些正在學習的人。」',
    effect: 'glow',
    nextNodeId: 'yi1-ch14-1',
  },

  // 一、進入未歸者廊
  {
    id: 'yi1-ch14-1',
    speaker: 'narrator',
    text: '未歸者廊是安靜的。不是舒適的安靜，是沉重的、凝固的、讓人想放輕腳步的安靜。像是走進一座很老很老的圖書館。',
    bgImage: 'ch14_corridor_entrance',
    nextNodeId: 'yi1-ch14-2',
  },
  {
    id: 'yi1-ch14-2',
    speaker: 'narrator',
    text: '兩排灰黑色的廊柱之間，每隔一段距離就有一個壁龕。壁龕裡沒有雕像，只有一團淡淡的、朦朧的光，像是被稀釋的月色。',
    bgImage: 'ch14_niches',
    nextNodeId: 'yi1-ch14-3',
  },
  {
    id: 'yi1-ch14-3',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '那是未歸者的記憶。當你靠近的時候，你會看見他們的故事。',
    nextNodeId: 'yi1-ch14-4',
  },

  // 二、項羽
  {
    id: 'yi1-ch14-4',
    speaker: 'narrator',
    text: '第一個壁龕：一個穿著盔甲的年輕男人，眼神裡有不可一世的傲氣。他站在河邊，身後是殘兵敗將，對著江水喃喃：「無顏見江東父老。」然後，劍落。',
    bgImage: 'ch14_xiangyu',
    nextNodeId: 'yi1-ch14-5',
  },
  {
    id: 'yi1-ch14-5',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '項羽。他把自己的價值綁定在「勝利」上面。一旦失敗，他就不知道自己是誰了。他的價值是「霸王」這個稱號給的，當這些被拿走，他就什麼都不剩了。',
    nextNodeId: 'yi1-ch14-6',
  },
  {
    id: 'yi1-ch14-6',
    speaker: 'protagonist',
    text: '這聽起來像蘇軾說的——外境不能定義你的價值。',
    nextNodeId: 'yi1-ch14-7',
  },

  // 三、屈原
  {
    id: 'yi1-ch14-7',
    speaker: 'narrator',
    text: '第二個壁龕：穿著長袍的清瘦男人，懷裡抱著一塊石頭。「舉世皆濁我獨清，眾人皆醉我獨醒。」然後，他走進了江裡。',
    bgImage: 'ch14_quyuan',
    nextNodeId: 'yi1-ch14-8',
  },
  {
    id: 'yi1-ch14-8',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '屈原。他把價值綁在「被認可」上。一生都在等楚王回心轉意。他的才華、理想、抱負——全都需要楚王的認可才有意義。當楚王不認可他，他就覺得活著沒有意義了。',
    nextNodeId: 'yi1-ch14-choice-1',
  },

  // 🎯 選項1：對未歸者的理解
  {
    id: 'yi1-ch14-choice-1',
    speaker: 'protagonist',
    text: '這像王陽明說的——答案不在外面，在心裡。但屈原一輩子都在向外求。',
    choices: [
      {
        id: 'ch14-c1a',
        text: '「他們是不是沒有機會聽到這些道理？」',
        nextNodeId: 'yi1-ch14-9a',
        arcChange: 0,
        shadowChange: 3,
      },
      {
        id: 'ch14-c1b',
        text: '「知道和做到是兩回事吧。」',
        nextNodeId: 'yi1-ch14-9b',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch14-9a',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '他們不是沒有機會聽到。項羽身邊有范增，屈原身邊有漁父，都告訴過他們。他們不是不知道，他們是——做不到。知道和做到是兩回事。',
    nextNodeId: 'yi1-ch14-10',
  },
  {
    id: 'yi1-ch14-9b',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '你說得對。他們不是不知道，他們是做不到。項羽身邊有范增，屈原身邊有漁父，都告訴過他們。但知道和做到是兩回事。',
    nextNodeId: 'yi1-ch14-10',
  },

  // 四、梵谷與夢露
  {
    id: 'yi1-ch14-10',
    speaker: 'narrator',
    text: '第三個壁龕：紅髮的西方人，眼神瘋狂，周圍堆滿了向日葵和星空的畫作。他對著鏡子，手裡拿著一把刀。',
    bgImage: 'ch14_vangogh',
    nextNodeId: 'yi1-ch14-11',
  },
  {
    id: 'yi1-ch14-11',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '梵谷。他不相信自己有價值。無論外面的人怎麼說，他都不相信。因為他的內心已經決定了答案——「我是沒有價值的」。所有相反的證據，都被他過濾掉了。他不是被世界拒絕，是被自己拒絕。',
    nextNodeId: 'yi1-ch14-12',
  },
  {
    id: 'yi1-ch14-12',
    speaker: 'narrator',
    text: '第四個壁龕：金髮的女人，濃妝艷抹。鏡子裡的影像和她不一樣——是更年輕、更完美的版本。「他們愛的不是我，他們愛的是那個她。」',
    bgImage: 'ch14_monroe',
    nextNodeId: 'yi1-ch14-13',
  },
  {
    id: 'yi1-ch14-13',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '瑪麗蓮夢露。她把真正的自己切掉了，為了符合「性感女神」的形象。她壓抑了自己的聰明、脆弱、渴望。到最後，她已經不知道真正的自己是什麼了。自我切割最極端的例子。',
    nextNodeId: 'yi1-ch14-14',
  },

  // 五、更多未歸者
  {
    id: 'yi1-ch14-14',
    speaker: 'narrator',
    text: '她繼續往前走。秦始皇——用絕對的控制對抗內心的恐懼，越控制越恐懼。希特勒——極端的二元切割，把世界分成「我們」和「他們」，這是二元思維走到最黑暗盡頭的樣子。',
    nextNodeId: 'yi1-ch14-15',
  },
  {
    id: 'yi1-ch14-15',
    speaker: 'narrator',
    text: '這些人，都是在某個地方「卡住」了。離完整只差一步，但他們沒有跨過去。',
    nextNodeId: 'yi1-ch14-16',
  },
  {
    id: 'yi1-ch14-16',
    speaker: 'protagonist',
    text: '真可惜。他們其實都很厲害，但就是——想不開。如果他們有機會聽聽蘇軾或王陽明說的話，也許就不一樣了。',
    nextNodeId: 'yi1-ch14-choice-2',
  },

  // 🎯 選項2：空白的位置
  {
    id: 'yi1-ch14-choice-2',
    speaker: 'narrator',
    text: '她走向長廊盡頭，站在那個空的壁龕前面。沒有光，沒有影像，只有一面灰色的牆壁。',
    bgImage: 'ch14_empty_niche',
    choices: [
      {
        id: 'ch14-c2a',
        text: '「這是誰的？」',
        nextNodeId: 'yi1-ch14-17a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch14-c2b',
        text: '「這個位置不會是我的。」',
        nextNodeId: 'yi1-ch14-17b',
        arcChange: 0,
        shadowChange: 5,
      },
    ],
  },
  {
    id: 'yi1-ch14-17a',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '這是預留的，給那些正在學習的人。項羽的位置是他死後才亮起來的，他們生前都是「正在學習的人」。這個空的位置——是給那些「還沒決定結局」的靈魂。',
    nextNodeId: 'yi1-ch14-18',
  },
  {
    id: 'yi1-ch14-17b',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '為什麼這麼確定？',
    nextNodeId: 'yi1-ch14-18',
  },

  // 六、主角的自信（盲點）
  {
    id: 'yi1-ch14-18',
    speaker: 'protagonist',
    text: '第一，我已經懂了這些道理。項羽的問題、屈原的問題、梵谷的問題、夢露的問題——蘇軾、王陽明、賈伯斯都教過我。我知道問題在哪裡，我知道方向是什麼。',
    nextNodeId: 'yi1-ch14-19',
  },
  {
    id: 'yi1-ch14-19',
    speaker: 'protagonist',
    text: '第二，這些都是歷史上留名的大人物。我只是一個普通的上班族，一個什麼成就都沒有的小人物。說實話，我根本不夠格進這裡。就算我最後沒有學會完整——我的故事也不值得被放在這裡。',
    nextNodeId: 'yi1-ch14-20',
  },
  {
    id: 'yi1-ch14-20',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '你覺得只有大人物才會成為未歸者？這裡展示的只是一小部分。未歸者有千千萬萬個，大部分都是普通人——普通的農夫、商人、母親、上班族。被困住不需要你是大人物，被困住只需要你——不願意面對自己。',
    effect: 'glow',
    nextNodeId: 'yi1-ch14-21',
  },
  {
    id: 'yi1-ch14-21',
    speaker: 'protagonist',
    text: '但我願意面對自己啊。我見了十個歸者，聽了十堂課，現在我要去見伊——這不就是在面對自己嗎？',
    nextNodeId: 'yi1-ch14-choice-3',
  },

  // 🎯 選項3：對伊的態度
  {
    id: 'yi1-ch14-choice-3',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '你打算怎麼面對伊？',
    choices: [
      {
        id: 'ch14-c3a',
        text: '「告訴她，我已經變了，我不再需要她了。」',
        nextNodeId: 'yi1-ch14-22a',
        arcChange: -5,
        shadowChange: 8,
      },
      {
        id: 'ch14-c3b',
        text: '「我還不確定……但我想見她。」',
        nextNodeId: 'yi1-ch14-22b',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch14-22a',
    speaker: 'protagonist',
    text: '伊是我切割出去的部分——我的憤怒、悲傷、慾望、野心。但現在我知道了，我不應該切割她。見她，是為了正式跟她告別。我已經超越她了。',
    nextNodeId: 'yi1-ch14-23',
  },
  {
    id: 'yi1-ch14-22b',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '這種不確定——也許是好的。',
    nextNodeId: 'yi1-ch14-23',
  },

  // 七、問心的警告
  {
    id: 'yi1-ch14-23',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '你記得成就律嗎？明暗相成，非為相照。你知道這是什麼意思嗎？',
    nextNodeId: 'yi1-ch14-24',
  },
  {
    id: 'yi1-ch14-24',
    speaker: 'protagonist',
    text: '光明和黑暗是相互成就的，不是相互對比的。',
    nextNodeId: 'yi1-ch14-25',
  },
  {
    id: 'yi1-ch14-25',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '那你為什麼覺得，你可以跟伊「說再見」？伊不是情緒，伊是你。你不能跟自己說再見。',
    effect: 'glow',
    nextNodeId: 'yi1-ch14-26',
  },
  {
    id: 'yi1-ch14-26',
    speaker: 'protagonist',
    text: '我的意思是——跟「那個版本的自己」說再見。現在我要把她整合回來，變成一個完整的我。這不就是這趟旅程的目的嗎？',
    nextNodeId: 'yi1-ch14-27',
  },
  {
    id: 'yi1-ch14-27',
    speaker: 'narrator',
    text: '問心看著她，沉默了很久。然後她說：「去吧。去見她。」空蕩的廊道不知道從哪裡傳來了一聲輕蔑的笑聲。',
    nextNodeId: 'yi1-ch14-28',
  },

  // 八、離開未歸者廊
  {
    id: 'yi1-ch14-28',
    speaker: 'narrator',
    text: '她們離開未歸者廊。她的心情很好，步伐輕快。十個歸者，十堂課，未歸者廊，現在——最後一關。見伊。然後就完整了。',
    bgImage: 'ch14_leaving',
    nextNodeId: 'yi1-ch14-29',
  },
  {
    id: 'yi1-ch14-29',
    speaker: 'protagonist',
    text: '見完伊之後，是不是就可以選擇——回去或留下？',
    nextNodeId: 'yi1-ch14-30',
  },
  {
    id: 'yi1-ch14-30',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '對。你會回到那個夜晚，回到你按下「確定」之前的那一刻。然後你可以按「取消」。',
    nextNodeId: 'yi1-ch14-31',
  },
  {
    id: 'yi1-ch14-31',
    speaker: 'narrator',
    text: '她已經想好了。她要回去，她要按「取消」，她要用不同的方式生活——不是變得「成功」，而是變得「完整」。她覺得自己已經準備好了。',
    nextNodeId: 'yi1-ch14-foreshadow',
  },
  {
    id: 'yi1-ch14-foreshadow',
    speaker: 'narrator',
    text: '問心走在她身邊，一言不發。她沒有注意到，問心的眼神裡，有一種深深的擔憂——那種擔憂不是「她可能會失敗」，而是「她完全沒有意識到自己正在犯的錯誤」。但問心什麼都沒有說。有些事情，說了也沒有用。只有親身經歷，才會明白。',
    effect: 'fade-out',
    nextNodeId: 'yi1-ch15-intro',
  },
];
