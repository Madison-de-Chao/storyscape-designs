import type { DialogueNode } from '@/stores/gameStore';

export const chapter11Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-ch11-intro',
    speaker: 'narrator',
    text: '「仇恨是一杯毒藥。你以為是給敵人喝的，其實是給自己。」',
    effect: 'glow',
    nextNodeId: 'yi1-ch11-1',
  },

  // 一、曼德拉的花園
  {
    id: 'yi1-ch11-1',
    speaker: 'narrator',
    text: '她聞到了泥土的味道——不是潮濕發霉的泥土，是被陽光曬過的、乾淨的、帶著草木香氣的泥土。',
    bgImage: 'ch11_wild_garden',
    nextNodeId: 'yi1-ch11-2',
  },
  {
    id: 'yi1-ch11-2',
    speaker: 'narrator',
    text: '這座花園沒有修剪整齊的灌木，只有到處亂長的野花——紅的、黃的、紫的、白的，沒有規劃，卻有蓬勃的生命力。花園中央，有一個人蹲在地上挖土。',
    nextNodeId: 'yi1-ch11-3',
  },
  {
    id: 'yi1-ch11-3',
    speaker: 'narrator',
    text: '他穿著舊襯衫，袖子捲到手肘，褲腳沾滿泥巴。頭髮全白了，臉上佈滿皺紋，但動作很穩，很有力。',
    bgImage: 'ch11_mandela_gardening',
    nextNodeId: 'yi1-ch11-4',
  },
  {
    id: 'yi1-ch11-4',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '來了？等你很久了。不過沒關係，番茄不會等人，我先忙它們。',
    nextNodeId: 'yi1-ch11-5',
  },
  {
    id: 'yi1-ch11-5',
    speaker: 'narrator',
    text: '這是她見過最不像「歸者」的歸者。看起來就像一個在自家後院種菜的老爺爺。',
    nextNodeId: 'yi1-ch11-6',
  },
  {
    id: 'yi1-ch11-6',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '我在監獄裡種了很多年番茄。那時候沒有別的事可做。種番茄，看書，想事情。二十七年，我就做這三件事。',
    nextNodeId: 'yi1-ch11-choice-1',
  },

  // 🎯 選項1：對曼德拉的反應
  {
    id: 'yi1-ch11-choice-1',
    speaker: 'narrator',
    text: '他用一種輕描淡寫的語氣，講述二十七年的牢獄生活。',
    choices: [
      {
        id: 'ch11-c1a',
        text: '「你好像不太在意被關了二十七年這件事？」',
        nextNodeId: 'yi1-ch11-7a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch11-c1b',
        text: '「你知道『曼德拉效應』嗎？很多人記得你在監獄裡死了。」',
        nextNodeId: 'yi1-ch11-7b',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch11-7a',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '我當然在意過。不在意才奇怪。但在意和被困住是兩回事。別人怎麼記得我，那是他們的事。我唯一能控制的，是我怎麼記得自己。',
    nextNodeId: 'yi1-ch11-8',
  },
  {
    id: 'yi1-ch11-7b',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '對，用我的名字來紀念全世界集體記錯我死掉這件事。算是一種黑色幽默吧。但我不在意，別人怎麼記得我，那是他們的事。',
    nextNodeId: 'yi1-ch11-8',
  },

  // 二、自己建的監獄
  {
    id: 'yi1-ch11-8',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '在南非，種族隔離的真正目的是讓黑人相信——你們天生就是低等的，反抗是沒有用的。當你相信了這些，你就不需要被關起來了——因為你已經把自己關起來了。',
    nextNodeId: 'yi1-ch11-9',
  },
  {
    id: 'yi1-ch11-9',
    speaker: 'protagonist',
    text: '所以——習得性無助是一種自己給自己建的監獄？',
    nextNodeId: 'yi1-ch11-10',
  },
  {
    id: 'yi1-ch11-10',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '你很聰明。傷害確實是別人造成的，這不能否認。但你怎麼回應那個傷害——是被打趴之後躺平，還是爬起來繼續走——這是你的選擇。',
    nextNodeId: 'yi1-ch11-11',
  },
  {
    id: 'yi1-ch11-11',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '你需要學會分辨——哪些是你能控制的，哪些是你不能控制的。我被關進監獄，這是我不能控制的。但我在監獄裡怎麼過日子，這是我能控制的。',
    effect: 'glow',
    nextNodeId: 'yi1-ch11-12',
  },

  // 三、仇恨是毒藥
  {
    id: 'yi1-ch11-12',
    speaker: 'protagonist',
    text: '我以為你是那種天生就會寬恕的人。',
    nextNodeId: 'yi1-ch11-13',
  },
  {
    id: 'yi1-ch11-13',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '天生就會寬恕？孩子，我年輕的時候脾氣很差。我在監獄裡躺在床上，想像過一千種報復的方法。我想過讓這個國家燒起來。',
    bgImage: 'ch11_mandela_serious',
    nextNodeId: 'yi1-ch11-14',
  },
  {
    id: 'yi1-ch11-14',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '但後來我發現，我的恨沒有傷害到任何人——除了我自己。恨一個人，就是讓那個人免費住在你的腦子裡。你在這裡恨得死去活來，人家在那邊吃飯睡覺過得好好的。',
    nextNodeId: 'yi1-ch11-15',
  },
  {
    id: 'yi1-ch11-15',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '所以，仇恨是一杯毒藥，你以為是給敵人喝的，其實是給自己喝的。你端著那杯毒藥，等著有一天可以潑到敵人臉上。但在那一天到來之前，你的手已經被毒藥腐蝕了。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '仇恨是一杯毒藥',
      subtitle: '——曼德拉',
      theme: 'earth',
    },
    nextNodeId: 'yi1-ch11-choice-2',
  },

  // 🎯 選項2：關於母親
  {
    id: 'yi1-ch11-choice-2',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '你恨過誰嗎？',
    choices: [
      {
        id: 'ch11-c2a',
        text: '「我對我媽媽有點……不滿。」',
        nextNodeId: 'yi1-ch11-16a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch11-c2b',
        text: '「……好吧，我恨她。」',
        nextNodeId: 'yi1-ch11-16b',
        arcChange: 8,
        shadowChange: -3,
      },
    ],
  },
  {
    id: 'yi1-ch11-16a',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '不滿？你一提到她，眉頭就皺成這樣。承認事實吧——你恨她什麼？',
    nextNodeId: 'yi1-ch11-17',
  },
  {
    id: 'yi1-ch11-16b',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '很好，承認是第一步。你恨她什麼？',
    nextNodeId: 'yi1-ch11-17',
  },

  // 四、理解不等於原諒
  {
    id: 'yi1-ch11-17',
    speaker: 'protagonist',
    text: '她總是否定我。從小到大，無論我做什麼，她都說不夠好。無論我怎麼努力，她都不滿意。我這輩子的習得性無助，很大一部分——是她給我的。',
    nextNodeId: 'yi1-ch11-18',
  },
  {
    id: 'yi1-ch11-18',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '你媽媽為什麼會那樣對你？她否定你，是因為她恨你嗎？',
    nextNodeId: 'yi1-ch11-19',
  },
  {
    id: 'yi1-ch11-19',
    speaker: 'protagonist',
    text: '不是……她可能覺得那是為我好。而且她自己也是這樣被對待的。我外婆對她也很嚴格。她可能不知道還有別的方式。',
    nextNodeId: 'yi1-ch11-20',
  },
  {
    id: 'yi1-ch11-20',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '她自己也是受害者，這是一個循環。但理解不等於原諒，放下恨也不等於原諒。放下恨是——不讓那個傷害繼續佔據你的人生。是你把那個免費住在你腦子裡的房客趕出去——不是為了她，是為了你自己。',
    effect: 'glow',
    nextNodeId: 'yi1-ch11-21',
  },

  // 五、恨自己
  {
    id: 'yi1-ch11-21',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '還有一件事。有時候，我們恨一個人，是因為我們不想承認——我們也有問題。',
    bgImage: 'ch11_mandela_insight',
    nextNodeId: 'yi1-ch11-22',
  },
  {
    id: 'yi1-ch11-22',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '你在意她的否定，是因為——你內心深處，也在否定你自己。如果你真的相信自己是有價值的，她的否定就傷不了你。她的否定，只是戳中了你本來就有的傷口。',
    nextNodeId: 'yi1-ch11-23',
  },
  {
    id: 'yi1-ch11-23',
    speaker: 'narrator',
    text: '她的眼淚流了下來。因為曼德拉說得太對了。',
    nextNodeId: 'yi1-ch11-24',
  },
  {
    id: 'yi1-ch11-24',
    speaker: 'protagonist',
    text: '所以……我真正恨的人——是我自己？',
    nextNodeId: 'yi1-ch11-25',
  },
  {
    id: 'yi1-ch11-25',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '你對媽媽的恨，和你對自己的恨，可能是連在一起的。如果你想放下對她的恨，你可能也需要放下對自己的恨。學會愛你自己，這是一切的基礎。',
    effect: 'glow',
    nextNodeId: 'yi1-ch11-choice-3',
  },

  // 🎯 選項3：關於「伊」
  {
    id: 'yi1-ch11-choice-3',
    speaker: 'narrator',
    text: '她突然意識到什麼。',
    choices: [
      {
        id: 'ch11-c3a',
        text: '「伊呢？我的陰影——她不見了！」',
        nextNodeId: 'yi1-ch11-26a',
        arcChange: 5,
        shadowChange: -5,
      },
      {
        id: 'ch11-c3b',
        text: '「放下恨是一個過程，需要多長時間？」',
        nextNodeId: 'yi1-ch11-26b',
        arcChange: 8,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch11-26a',
    speaker: 'narrator',
    text: '她的聲音裡帶著壓抑不住的喜悅。「我承認了我恨自己，所以她不需要用『另一個人』的方式存在了——對吧？」曼德拉沒有回答，只是彎下腰，繼續種番茄。',
    nextNodeId: 'yi1-ch11-27',
  },
  {
    id: 'yi1-ch11-26b',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '每個人不一樣。重點不是多長時間，重點是你有沒有在走這個過程。如果你想起那個人的時候比以前沒那麼生氣了——你在走了。',
    nextNodeId: 'yi1-ch11-27',
  },

  // 六、告別與預告
  {
    id: 'yi1-ch11-27',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '記住我說的話——仇恨是毒藥，放下它不是為了別人，是為了你自己。還有，學會愛你自己。如果你不愛你自己，你就沒有力氣去愛任何人。',
    bgImage: 'ch11_farewell',
    nextNodeId: 'yi1-ch11-28',
  },
  {
    id: 'yi1-ch11-28',
    speaker: 'mandela',
    speakerName: '曼德拉',
    text: '叫我馬迪巴，這是我的族名。朋友都這麼叫我。',
    nextNodeId: 'yi1-ch11-29',
  },
  {
    id: 'yi1-ch11-29',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '下一位是林肯。一個輸了很多次才學會怎麼贏的人。他會告訴你——失敗不是終點。',
    nextNodeId: 'yi1-ch11-30',
  },
  {
    id: 'yi1-ch11-30',
    speaker: 'narrator',
    text: '她跟著問心離開花園。在踏出花園的那一刻，她回頭看了一眼。曼德拉又蹲下去，繼續種他的番茄。陽光照在他身上，照在那些野花上。',
    nextNodeId: 'yi1-ch11-31',
  },
  {
    id: 'yi1-ch11-31',
    speaker: 'narrator',
    text: '那些野花之所以長得那麼好，不是因為有人精心照顧，而是因為沒有人限制它們。它們是自由的。而曼德拉教她的，也是關於自由——從仇恨中解放自己的自由。',
    nextNodeId: 'yi1-ch11-32',
  },
  {
    id: 'yi1-ch11-32',
    speaker: 'narrator',
    text: '她覺得自己快要完整了。她覺得那個「伊」，終於被她甩掉了。',
    nextNodeId: 'yi1-ch11-foreshadow',
  },
  {
    id: 'yi1-ch11-foreshadow',
    speaker: 'narrator',
    text: '她不知道的是——在弧度林深處，那棵扭曲的海棠樹根部，有一個黑暗的洞穴。洞穴很深，很靜。但如果你仔細聽，你會聽見——呼吸聲。',
    effect: 'fade-out',
    bgImage: 'ch11_dark_cave',
    nextNodeId: 'yi1-ch12-intro',
  },
];
