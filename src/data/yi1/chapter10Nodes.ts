import type { DialogueNode } from '@/stores/gameStore';

export const chapter10Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-ch10-intro',
    speaker: 'narrator',
    text: '「每一步棋，都是我自己下的。即使輸了，也是我選的。」',
    effect: 'glow',
    nextNodeId: 'yi1-ch10-1',
  },

  // 一、歐式花園
  {
    id: 'yi1-ch10-1',
    speaker: 'narrator',
    text: '這道拱門和之前的完全不同——不是中國式的月洞門，而是歐式的石砌拱門，上面刻著拉丁文：「認識你自己」。',
    bgImage: 'ch10_roman_garden',
    nextNodeId: 'yi1-ch10-2',
  },
  {
    id: 'yi1-ch10-2',
    speaker: 'narrator',
    text: '眼前是一座歐洲宮廷式的花園——幾何形狀的花圃、修剪整齊的灌木、白色大理石的雕像、中央一座噴泉。噴泉旁有兩張躺椅，各坐著一個人。',
    nextNodeId: 'yi1-ch10-3',
  },
  {
    id: 'yi1-ch10-3',
    speaker: 'narrator',
    text: '左邊的男人五十多歲，身材高大，臉上有一道淺疤，有一種統帥感。右邊的女人三十多歲，五官深邃，蜜色皮膚，那種美不是柔弱的美——是讓人不敢直視的美。',
    bgImage: 'ch10_caesar_cleopatra',
    nextNodeId: 'yi1-ch10-4',
  },
  {
    id: 'yi1-ch10-4',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '他們來了。凱薩，你看看，東方來的小女孩。',
    nextNodeId: 'yi1-ch10-5',
  },
  {
    id: 'yi1-ch10-5',
    speaker: 'caesar',
    speakerName: '凱薩',
    text: '過來坐，別站著。你就是那個「習得性無助」的？',
    nextNodeId: 'yi1-ch10-6',
  },
  {
    id: 'yi1-ch10-6',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '在我們那個年代，我們叫這個——Acedia，希臘文，意思是「靈魂的癱瘓」。',
    nextNodeId: 'yi1-ch10-choice-1',
  },

  // 🎯 選項1：自我評估
  {
    id: 'yi1-ch10-choice-1',
    speaker: 'caesar',
    speakerName: '凱薩',
    text: '你的靈魂癱瘓了嗎？',
    choices: [
      {
        id: 'ch10-c1a',
        text: '「之前是，現在好像好一點了。」',
        nextNodeId: 'yi1-ch10-7a',
        arcChange: 5,
        shadowChange: 0,
      },
      {
        id: 'ch10-c1b',
        text: '「我不確定……可能吧。」',
        nextNodeId: 'yi1-ch10-7b',
        arcChange: 0,
        shadowChange: 2,
      },
    ],
  },
  {
    id: 'yi1-ch10-7a',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '好一點是多少？從零到六十？還有四十分要補，看來我們有得聊了。',
    nextNodeId: 'yi1-ch10-8',
  },
  {
    id: 'yi1-ch10-7b',
    speaker: 'caesar',
    speakerName: '凱薩',
    text: '不確定也正常。來這裡的人，大多數一開始都不確定。',
    nextNodeId: 'yi1-ch10-8',
  },

  // 二、關係中的完整性
  {
    id: 'yi1-ch10-8',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '之前那些人教你的，都是關於你自己的。但人不是石頭，不能一個人活著。你需要關係——朋友、家人、愛人。',
    nextNodeId: 'yi1-ch10-9',
  },
  {
    id: 'yi1-ch10-9',
    speaker: 'caesar',
    speakerName: '凱薩',
    text: '但關係是危險的。因為在關係中，你很容易——失去自己。為了讓別人喜歡你，你會改變自己。慢慢的，你就不知道自己是誰了。',
    nextNodeId: 'yi1-ch10-10',
  },
  {
    id: 'yi1-ch10-10',
    speaker: 'narrator',
    text: '她想起自己在每一段關係中的樣子——在父母面前是「聽話的女兒」，在老闆面前是「服從的員工」，在前男友面前是「不會給你添麻煩的女朋友」。',
    nextNodeId: 'yi1-ch10-11',
  },
  {
    id: 'yi1-ch10-11',
    speaker: 'protagonist',
    text: '我好像一直在演別人想看的樣子。',
    nextNodeId: 'yi1-ch10-12',
  },

  // 三、克麗奧佩特拉的故事
  {
    id: 'yi1-ch10-12',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '我年輕的時候也這樣。你知道我怎麼認識他的嗎？我把自己裹在地毯裡，讓人抬進凱薩的營帳。但那不是為了「吸引」——我是去談判的。',
    bgImage: 'ch10_cleopatra_story',
    nextNodeId: 'yi1-ch10-13',
  },
  {
    id: 'yi1-ch10-13',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '我被弟弟趕出亞歷山大港，流亡在外，需要羅馬的支持。我見到他之後，跟他談了一整晚——不是談情說愛，是談政治。推銷的不是我的美貌，是我的價值。',
    nextNodeId: 'yi1-ch10-14',
  },
  {
    id: 'yi1-ch10-14',
    speaker: 'caesar',
    speakerName: '凱薩',
    text: '她確實很有價值。大多數人見到我，都會緊張、討好。但她不會。她告訴我她要什麼，問我想要什麼，然後提出一個對雙方都有利的方案——就像一個平等的合作夥伴。',
    nextNodeId: 'yi1-ch10-15',
  },
  {
    id: 'yi1-ch10-15',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '這就是我想教你的第一件事——在任何關係中，不要把自己放在低位。',
    effect: 'glow',
    nextNodeId: 'yi1-ch10-choice-2',
  },

  // 🎯 選項2：對教導的反應
  {
    id: 'yi1-ch10-choice-2',
    speaker: 'narrator',
    text: '她想了想。',
    choices: [
      {
        id: 'ch10-c2a',
        text: '「但如果我真的比對方弱呢？比如對方是我的老闆？」',
        nextNodeId: 'yi1-ch10-16a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch10-c2b',
        text: '「妥協和投降有什麼區別？」',
        nextNodeId: 'yi1-ch10-16b',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch10-16a',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '我當時的處境比你糟糕一萬倍。他是羅馬的獨裁者，我是被趕出國的女王。但我從來沒有覺得我比他低一等。因為地位是外在的，價值是內在的。',
    nextNodeId: 'yi1-ch10-17',
  },
  {
    id: 'yi1-ch10-16b',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '妥協是——我知道我要什麼，我也知道你要什麼，我們找一個雙方都能接受的方案。投降是——我不管我要什麼，你說什麼我都答應。妥協之後，我還是我。投降之後，我就不是我了。',
    nextNodeId: 'yi1-ch10-17',
  },

  // 四、凱薩談背叛
  {
    id: 'yi1-ch10-17',
    speaker: 'caesar',
    speakerName: '凱薩',
    text: '現在輪到我了。我教你關於背叛。你知道我是怎麼死的嗎？被我最信任的人——布魯圖斯——在元老院裡捅了二十三刀。',
    bgImage: 'ch10_caesar_story',
    nextNodeId: 'yi1-ch10-18',
  },
  {
    id: 'yi1-ch10-18',
    speaker: 'protagonist',
    text: '你恨他嗎？',
    nextNodeId: 'yi1-ch10-19',
  },
  {
    id: 'yi1-ch10-19',
    speaker: 'caesar',
    speakerName: '凱薩',
    text: '一開始恨。後來我想通了——他的背叛是他的選擇，我的回應是我的選擇。我不能為他的選擇負責。每個人都要為自己的選擇負責。',
    nextNodeId: 'yi1-ch10-20',
  },
  {
    id: 'yi1-ch10-20',
    speaker: 'caesar',
    speakerName: '凱薩',
    text: '所以你不能把你的安全感，建立在別人的忠誠上。你能控制的，只有你自己。相信別人，但不要依賴別人。相信是健康的，依賴是危險的。',
    effect: 'glow',
    nextNodeId: 'yi1-ch10-21',
  },

  // 五、學會說「我想要」
  {
    id: 'yi1-ch10-21',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '現在說說你。你在關係中，有什麼問題？',
    nextNodeId: 'yi1-ch10-22',
  },
  {
    id: 'yi1-ch10-22',
    speaker: 'protagonist',
    text: '我好像總是在配合別人。和朋友吃飯，我從來不說我想吃什麼。和前男友在一起，他喜歡什麼我就跟著喜歡。我怕有主見會讓別人不高興。',
    nextNodeId: 'yi1-ch10-23',
  },
  {
    id: 'yi1-ch10-23',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '如果一個人喜歡的是「配合他的你」，而不是「真實的你」——那他喜歡的是誰？他喜歡的是那個角色，不是你。那這種喜歡，有意義嗎？',
    nextNodeId: 'yi1-ch10-24',
  },
  {
    id: 'yi1-ch10-24',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '首先，學會說「我想要」。其次，學會接受「不被所有人喜歡」。你不可能讓所有人都高興。與其費盡心思讓所有人高興——不如先讓你自己高興。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '先讓你自己高興',
      subtitle: '——克麗奧佩特拉',
      theme: 'gold',
    },
    nextNodeId: 'yi1-ch10-25',
  },
  {
    id: 'yi1-ch10-25',
    speaker: 'caesar',
    speakerName: '凱薩',
    text: '說出自己想要什麼叫自私？那把自己的需求藏起來，讓別人猜，最後埋怨別人不懂你——這叫更自私。而且是一種懦弱的自私。',
    nextNodeId: 'yi1-ch10-choice-3',
  },

  // 🎯 選項3：克麗奧佩特拉的結局
  {
    id: 'yi1-ch10-choice-3',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '我再告訴你一件事，關於我的結局。你知道我是怎麼死的嗎？',
    choices: [
      {
        id: 'ch10-c3a',
        text: '「被蛇咬死？」',
        nextNodeId: 'yi1-ch10-26a',
        arcChange: 0,
        shadowChange: 0,
      },
      {
        id: 'ch10-c3b',
        text: '「你選擇了自己的結局？」',
        nextNodeId: 'yi1-ch10-26b',
        arcChange: 8,
        shadowChange: -3,
      },
    ],
  },
  {
    id: 'yi1-ch10-26a',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '那是羅馬人編的故事。真相是——我自殺的。因為我不想被羅馬人抓去遊街示眾。我可以投降、求饒、活下去。但那樣的活著——不是我要的。',
    nextNodeId: 'yi1-ch10-27',
  },
  {
    id: 'yi1-ch10-26b',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '你很敏銳。是的，我自殺的。我可以投降，但我選擇——自己決定自己的結局。',
    nextNodeId: 'yi1-ch10-27',
  },
  {
    id: 'yi1-ch10-27',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '我這一生，做過很多選擇。有些是對的，有些是錯的。但每一個選擇，都是我自己做的。包括最後那一個。每一步棋，都是我自己下的。即使輸了，也是我選的。',
    effect: 'glow',
    nextNodeId: 'yi1-ch10-28',
  },

  // 六、告別與預告
  {
    id: 'yi1-ch10-28',
    speaker: 'narrator',
    text: '問心的聲音傳來：「差不多了。」',
    nextNodeId: 'yi1-ch10-29',
  },
  {
    id: 'yi1-ch10-29',
    speaker: 'protagonist',
    text: '在關係中保持完整，不是不要關係，而是——在關係中，還是做自己。表達自己的需求，接受不被所有人喜歡，睜著眼睛信任，妥協但不投降。無論發生什麼，都是自己做的選擇。',
    nextNodeId: 'yi1-ch10-30',
  },
  {
    id: 'yi1-ch10-30',
    speaker: 'caesar',
    speakerName: '凱薩',
    text: '不錯，你總結得比我們好。',
    bgImage: 'ch10_farewell',
    nextNodeId: 'yi1-ch10-31',
  },
  {
    id: 'yi1-ch10-31',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '下一位是曼德拉。他會教你——如何放下仇恨。',
    nextNodeId: 'yi1-ch10-32',
  },
  {
    id: 'yi1-ch10-32',
    speaker: 'protagonist',
    text: '放下仇恨？我心裡有恨過誰嗎？',
    nextNodeId: 'yi1-ch10-end',
  },
  {
    id: 'yi1-ch10-end',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '去見曼德拉，他會告訴你答案。',
    effect: 'fade-out',
    nextNodeId: 'yi1-ch11-intro',
  },
];
