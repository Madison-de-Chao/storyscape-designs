// 第十一章｜毒藥 - 曼德拉
import type { DialogueNode } from '@/stores/gameStore';

export const chapter11Nodes: DialogueNode[] = [
  // 開場：花園
  {
    id: 'chapter11-1',
    speaker: 'narrator',
    text: '她聞到了泥土的味道。不是那種潮濕發霉的泥土，是那種被陽光曬過的、乾淨的、帶著草木香氣的泥土。',
    nextNodeId: 'chapter11-2',
  },
  {
    id: 'chapter11-2',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '這裡是曼德拉的花園。他大部分時間都在這裡。',
    nextNodeId: 'chapter11-3',
  },
  {
    id: 'chapter11-3',
    speaker: 'narrator',
    text: '這確實是一座花園，但和凱薩那座精緻的歐式花園完全不同。這裡沒有修剪整齊的灌木，只有野花——紅的、黃的、紫的、白的，亂糟糟地長在一起，卻有一種蓬勃的生命力。',
    nextNodeId: 'chapter11-4',
  },
  {
    id: 'chapter11-4',
    speaker: 'narrator',
    text: '花園的中央，有一個人蹲在地上。他穿著一件舊襯衫，袖子捲到手肘，褲腳沾滿泥巴，正在用一把小鏟子挖土。他的頭髮全白了，臉上佈滿皺紋，但動作很穩，很有力。',
    nextNodeId: 'chapter11-5',
  },
  {
    id: 'chapter11-5',
    speaker: 'protagonist',
    text: '曼德拉先生？',
    nextNodeId: 'chapter11-6',
  },
  {
    id: 'chapter11-6',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '來了？等你很久了。不過沒關係，番茄不會等人，我先忙它們。',
    nextNodeId: 'chapter11-7',
  },
  {
    id: 'chapter11-7',
    speaker: 'narrator',
    text: '他露出一個溫暖的笑容，像是非洲大草原上的陽光。這是她見過最不像「歸者」的歸者——看起來就像一個在自家後院種菜的老爺爺。',
    nextNodeId: 'chapter11-8',
  },
  {
    id: 'chapter11-8',
    speaker: 'protagonist',
    text: '你在種什麼？',
    nextNodeId: 'chapter11-9',
  },
  {
    id: 'chapter11-9',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '番茄。我在監獄裡種了很多年番茄。那時候沒有別的事可做。種番茄，看書，想事情。二十七年，我就做這三件事。',
    nextNodeId: 'chapter11-10',
  },
  {
    id: 'chapter11-10',
    speaker: 'protagonist',
    text: '二十七年……你好像不太在意？',
    nextNodeId: 'chapter11-11',
  },
  {
    id: 'chapter11-11',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '孩子，我已經死了，都到元壹境了，還在意那些幹嘛？——開玩笑的。我當然在意過。不在意才奇怪。但在意和被困住是兩回事。',
    nextNodeId: 'chapter11-12',
  },

  // 曼德拉效應
  {
    id: 'chapter11-12',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '對了，你知道「曼德拉效應」嗎？',
    nextNodeId: 'chapter11-13',
  },
  {
    id: 'chapter11-13',
    speaker: 'protagonist',
    text: '好像聽過……是一種集體記憶錯誤？',
    nextNodeId: 'chapter11-14',
  },
  {
    id: 'chapter11-14',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '對。很多人都記得我在監獄裡死掉了。但我沒有死，我活著出來了，還當了總統，還拿了諾貝爾和平獎。他們用我的名字，來紀念全世界集體記錯我死掉這件事。你說，這算不算一種黑色幽默？',
    nextNodeId: 'chapter11-15',
  },
  {
    id: 'chapter11-15',
    speaker: 'protagonist',
    text: '所以你是被全世界「殺死」過一次的人？',
    nextNodeId: 'chapter11-16',
  },
  {
    id: 'chapter11-16',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '不只一次。出獄之後，也有人說我已經「死了」——他們說真正的曼德拉會報復、會憤怒。但我沒有。所以在他們眼裡，「真正的曼德拉」已經死了。但我不在意。別人怎麼記得我，那是他們的事。我唯一能控制的，是我怎麼記得自己。',
    nextNodeId: 'chapter11-17',
  },

  // 習得性無助
  {
    id: 'chapter11-17',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '來，坐下聊。問心說你有「習得性無助」。這個詞我懂。在我那個年代，我們叫它 broken spirit——靈魂被打碎了。',
    nextNodeId: 'chapter11-18',
  },
  {
    id: 'chapter11-18',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '在南非，種族隔離的目的不只是把黑人和白人分開。真正的目的是讓黑人相信——你們天生就是低等的，反抗是沒有用的，認命吧。當你相信了這些，你就不需要被關起來了。因為你已經把自己關起來了。',
    nextNodeId: 'chapter11-19',
  },
  {
    id: 'chapter11-19',
    speaker: 'protagonist',
    text: '所以——習得性無助是一種自己給自己建的監獄？',
    nextNodeId: 'chapter11-20',
  },
  {
    id: 'chapter11-20',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '你很聰明。但傷害確實是別人造成的，這個不能否認。只是你怎麼回應那個傷害——是被打趴之後躺平，還是爬起來繼續走——這是你的選擇。',
    nextNodeId: 'chapter11-21',
  },
  {
    id: 'chapter11-21',
    speaker: 'protagonist',
    text: '問題是，有時候爬起來，又會被打趴。',
    nextNodeId: 'chapter11-22',
  },
  {
    id: 'chapter11-22',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '對。所以你需要學會一件事——分辨哪些是你能控制的，哪些是你不能控制的。我被關進監獄，這是我不能控制的。但我在監獄裡怎麼過日子，這是我能控制的。',
    nextNodeId: 'chapter11-23',
  },

  // 關於仇恨
  {
    id: 'chapter11-23',
    speaker: 'protagonist',
    text: '聽起來很勵志，但實際上做得到嗎？',
    nextNodeId: 'chapter11-24',
  },
  {
    id: 'chapter11-24',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '很好，你應該質疑。說實話，我也不是一開始就做得到。我恨過。恨了很多年。',
    nextNodeId: 'chapter11-25',
  },
  {
    id: 'chapter11-25',
    speaker: 'protagonist',
    text: '我以為你是那種天生就會寬恕的人……',
    nextNodeId: 'chapter11-26',
  },
  {
    id: 'chapter11-26',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '天生就會寬恕？孩子，我年輕的時候脾氣很差。我在監獄裡躺在床上，想像過一千種報復的方法。把那些關我的人也關起來、讓他們的家人也嚐嚐分離的滋味。我想過讓這個國家燒起來。',
    nextNodeId: 'chapter11-27',
  },
  {
    id: 'chapter11-27',
    speaker: 'protagonist',
    text: '但後來呢？',
    nextNodeId: 'chapter11-28',
  },
  {
    id: 'chapter11-28',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '後來我發現，我的恨沒有傷害到任何人——除了我自己。',
    nextNodeId: 'chapter11-29',
  },

  // 仇恨是毒藥
  {
    id: 'chapter11-29',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '你知道恨一個人是什麼感覺嗎？恨一個人，就是讓那個人住在你的腦子裡。免費的，不付房租的，還要你供吃供喝供水電。',
    nextNodeId: 'chapter11-30',
  },
  {
    id: 'chapter11-30',
    speaker: 'narrator',
    text: '她愣了一下，然後笑了出來。',
    nextNodeId: 'chapter11-31',
  },
  {
    id: 'chapter11-31',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '這個比喻很現代對不對？我在元壹境學的。跟一個叫賈伯斯的人聊過，他教了我很多新詞。他說現代人把這種狀況叫「精神內耗」。',
    nextNodeId: 'chapter11-32',
  },
  {
    id: 'chapter11-32',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '總之，當你恨一個人的時候，你會一直想著他。想著他對你做過的事，想著你要怎麼報復他。他佔據了你的腦子、你的時間、你的精力。但他知道嗎？他知道你在恨他嗎？',
    nextNodeId: 'chapter11-33',
  },
  {
    id: 'chapter11-33',
    speaker: 'protagonist',
    text: '大多數時候——不知道吧。',
    nextNodeId: 'chapter11-34',
  },
  {
    id: 'chapter11-34',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '對。你在這裡恨得死去活來，人家在那邊吃飯睡覺談戀愛，過得好好的。你的恨，沒有傷到他一根汗毛。它只是在傷害——你自己。',
    nextNodeId: 'chapter11-35',
  },
  {
    id: 'chapter11-35',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '所以，仇恨是一杯毒藥，你以為是給敵人喝的，其實是給自己喝的。你端著那杯毒藥，等著有一天可以潑到敵人臉上。但在那一天到來之前，你的手已經被毒藥腐蝕了。',
    nextNodeId: 'chapter11-36',
  },

  // 第一個選擇
  {
    id: 'chapter11-36',
    speaker: 'narrator',
    text: '她沉默了一會兒。',
    choices: [
      {
        id: 'chapter11-choice-1a',
        text: '承認自己恨過某些人',
        arcChange: 4,
        shadowChange: -3,
        nextNodeId: 'chapter11-37a',
      },
      {
        id: 'chapter11-choice-1b',
        text: '問如何練習不恨',
        arcChange: 3,
        shadowChange: -1,
        nextNodeId: 'chapter11-37b',
      },
    ],
  },
  {
    id: 'chapter11-37a',
    speaker: 'protagonist',
    text: '我恨過我媽媽……她總是否定我。無論我做什麼，她都說不夠好。',
    nextNodeId: 'chapter11-38',
  },
  {
    id: 'chapter11-37b',
    speaker: 'protagonist',
    text: '這個道理我懂，但懂和做到是兩回事。怎麼練習不恨？',
    nextNodeId: 'chapter11-42',
  },

  // 關於媽媽
  {
    id: 'chapter11-38',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '你恨她什麼？',
    nextNodeId: 'chapter11-39',
  },
  {
    id: 'chapter11-39',
    speaker: 'protagonist',
    text: '她從小到大，無論我做什麼，她都說不夠好。考試考了九十分，她說為什麼不是一百分。找到工作，她說為什麼不是更好的工作。我知道她可能是為我好，但她為我好的方式——讓我覺得我永遠不夠好，讓我覺得我不值得被愛。',
    nextNodeId: 'chapter11-40',
  },
  {
    id: 'chapter11-40',
    speaker: 'narrator',
    text: '她的眼淚流了下來。',
    nextNodeId: 'chapter11-41',
  },
  {
    id: 'chapter11-41',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '不用道歉。眼淚是身體在排毒。你媽媽為什麼會那樣對你？她否定你，是因為她恨你嗎？',
    nextNodeId: 'chapter11-42',
  },

  // 理解不等於原諒
  {
    id: 'chapter11-42',
    speaker: 'protagonist',
    text: '……不是。她可能覺得那是為我好。她自己可能也是這樣被對待的。我外婆對她也很嚴格。她從小就被要求要完美。她可能不知道還有別的方式。',
    nextNodeId: 'chapter11-43',
  },
  {
    id: 'chapter11-43',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '你看，你媽媽不是因為恨你才那樣做的。她是因為她自己的侷限。她自己也是受害者。這是一個循環。',
    nextNodeId: 'chapter11-44',
  },
  {
    id: 'chapter11-44',
    speaker: 'protagonist',
    text: '可是——就算我理解她為什麼那樣做，傷害還是存在啊。',
    nextNodeId: 'chapter11-45',
  },
  {
    id: 'chapter11-45',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '對。所以理解不等於原諒。放下恨也不等於原諒。放下恨是——不讓那個傷害繼續佔據你的人生。是你對自己說：是的，她傷害了我，但我不要讓這個傷害定義我。是你把那個免費住在你腦子裡的房客趕出去——不是為了她，是為了你自己。',
    nextNodeId: 'chapter11-46',
  },

  // 第二個選擇
  {
    id: 'chapter11-46',
    speaker: 'narrator',
    text: '她開始把之前歸者們說的話連結起來。',
    choices: [
      {
        id: 'chapter11-choice-2a',
        text: '表達自己對歸者教導的理解',
        arcChange: 6,
        shadowChange: -4,
        nextNodeId: 'chapter11-47a',
      },
      {
        id: 'chapter11-choice-2b',
        text: '問如果對方沒受到懲罰怎麼辦',
        arcChange: 3,
        shadowChange: -1,
        nextNodeId: 'chapter11-47b',
      },
    ],
  },
  {
    id: 'chapter11-47a',
    speaker: 'protagonist',
    text: '蘇軾說外境不能定義你的價值，王陽明說答案在你心裡，武則天說不要讓別人定義你的資格，司馬遷說殘缺可以成為力量，李白說分清「應該」和「想要」……然後你說，放下恨是為了自己。這些話——好像都是同一件事？',
    nextNodeId: 'chapter11-48',
  },
  {
    id: 'chapter11-47b',
    speaker: 'protagonist',
    text: '但如果對方沒有受到任何懲罰呢？我媽媽否定了我一輩子，但她不會受到任何懲罰。我就這樣——算了？',
    nextNodeId: 'chapter11-50',
  },
  {
    id: 'chapter11-48',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '你比我以為的聰明多了。不，不只是聰明——你在思考。你在連結不同歸者的教導。',
    nextNodeId: 'chapter11-49',
  },
  {
    id: 'chapter11-49',
    speaker: 'narrator',
    text: '曼德拉認真地看著她，眼睛裡有一絲驚訝。',
    nextNodeId: 'chapter11-50',
  },

  // 設立界線
  {
    id: 'chapter11-50',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '放下恨不等於什麼都不做。你可以設立界線。告訴她哪些話你不想聽，告訴她你需要什麼樣的對待。如果她不改變，你可以減少和她的接觸。這不是懲罰她，這是保護你自己。',
    nextNodeId: 'chapter11-51',
  },
  {
    id: 'chapter11-51',
    speaker: 'protagonist',
    text: '可是——這樣做，她會說我不孝。',
    nextNodeId: 'chapter11-52',
  },
  {
    id: 'chapter11-52',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '那是她的反應，不是你的責任。你只能控制你自己的行為，你不能控制別人怎麼評價你。記得我說的嗎？別人怎麼記得我，那是他們的事。我唯一能控制的，是我怎麼記得自己。',
    nextNodeId: 'chapter11-53',
  },

  // 恨自己
  {
    id: 'chapter11-53',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '還有一件事。有時候，我們恨一個人，是因為我們不想承認——我們也有問題。',
    nextNodeId: 'chapter11-54',
  },
  {
    id: 'chapter11-54',
    speaker: 'protagonist',
    text: '什麼意思？',
    nextNodeId: 'chapter11-55',
  },
  {
    id: 'chapter11-55',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '你恨你媽媽否定你。但你有沒有想過——你為什麼這麼在意她的否定？你在意她的否定，是因為——你內心深處，也在否定你自己。',
    nextNodeId: 'chapter11-56',
  },
  {
    id: 'chapter11-56',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '如果你真的相信自己是有價值的，她的否定就傷不了你。她說你不夠好，你可以說「那是你的看法，我覺得我很好」。但你做不到。因為你自己也覺得你不夠好。她的否定，只是戳中了你本來就有的傷口。',
    nextNodeId: 'chapter11-57',
  },
  {
    id: 'chapter11-57',
    speaker: 'narrator',
    text: '她的眼淚又流了下來。因為曼德拉說得太對了。',
    nextNodeId: 'chapter11-58',
  },
  {
    id: 'chapter11-58',
    speaker: 'protagonist',
    text: '所以——你是說，我真正恨的人——是我自己？',
    nextNodeId: 'chapter11-59',
  },
  {
    id: 'chapter11-59',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '我沒有這樣說。我只是說，你對媽媽的恨——和你對自己的恨——可能是連在一起的。如果你想放下對她的恨，你可能也需要放下對自己的恨。',
    nextNodeId: 'chapter11-60',
  },

  // 種番茄
  {
    id: 'chapter11-60',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '來，幫我種番茄。一邊種，一邊聊。',
    nextNodeId: 'chapter11-61',
  },
  {
    id: 'chapter11-61',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '你知道為什麼我喜歡種東西嗎？因為種東西需要耐心。你今天種下去，不會明天就結果。你需要等，澆水，施肥，等待。放下仇恨也是一樣。你不能指望今天決定「我要放下」，明天就真的放下了。這是一個過程，一個很長很長的過程。',
    nextNodeId: 'chapter11-62',
  },
  {
    id: 'chapter11-62',
    speaker: 'protagonist',
    text: '二十七年那麼長？',
    nextNodeId: 'chapter11-63',
  },
  {
    id: 'chapter11-63',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '不一定。每個人不一樣。重點不是多長時間，重點是——你有沒有在走這個過程。如果你想起那個人的時候，還是會很生氣，但比以前沒那麼生氣了——你在走了。如果你可以談論那件事，而不是完全迴避——你在走了。如果你開始能夠理解對方為什麼會那樣做，即使你不原諒——你在走了。',
    nextNodeId: 'chapter11-64',
  },

  // 告別
  {
    id: 'chapter11-64',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '差不多了。',
    nextNodeId: 'chapter11-65',
  },
  {
    id: 'chapter11-65',
    speaker: 'protagonist',
    text: '謝謝你，曼德拉先生。',
    nextNodeId: 'chapter11-66',
  },
  {
    id: 'chapter11-66',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '叫我馬迪巴。這是我的族名，朋友都這麼叫我。記住我說的話——仇恨是毒藥，放下它不是為了別人，是為了你自己。還有——學會愛你自己。這是一切的基礎。如果你不愛你自己，你就會一直恨你自己。如果你一直恨你自己，你就沒有力氣去愛任何人。',
    nextNodeId: 'chapter11-67',
  },
  {
    id: 'chapter11-67',
    speaker: 'narrator',
    text: '曼德拉笑了，那個笑容像非洲的陽光。',
    nextNodeId: 'chapter11-68',
  },
  {
    id: 'chapter11-68',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '去吧。下一個歸者在等你——一個輸了很多次才學會怎麼贏的人。他會告訴你，失敗不是終點。',
    nextNodeId: 'chapter11-69',
  },
  {
    id: 'chapter11-69',
    speaker: 'protagonist',
    text: '林肯？',
    nextNodeId: 'chapter11-70',
  },
  {
    id: 'chapter11-70',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '對。你知道他在當總統之前失敗了多少次嗎？多到他自己都數不清。但他沒有放棄。他會告訴你——那些失敗是怎麼把他變成林肯的。',
    nextNodeId: 'chapter11-71',
  },
  {
    id: 'chapter11-71',
    speaker: 'narrator',
    text: '她跟著問心離開花園。回頭看見曼德拉又蹲下去，繼續種他的番茄。陽光照在他身上，照在那些野花上。那些野花之所以長得那麼好，不是因為有人精心照顧，而是因為——沒有人限制它們。它們想長在哪裡就長在哪裡，想開什麼顏色就開什麼顏色。它們是自由的。',
    nextNodeId: 'chapter11-72',
  },
  {
    id: 'chapter11-72',
    speaker: 'narrator',
    text: '而曼德拉教她的，也是關於自由——從仇恨中解放自己的自由。',
    nextNodeId: null,
  },
];
