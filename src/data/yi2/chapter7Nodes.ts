import type { DialogueNode } from '@/stores/gameStore';

// 第七章｜還站著的人 — 金卡戴珊、安海瑟薇、芭黎絲希爾頓
export const chapter7Nodes: DialogueNode[] = [
  // ── 一 ──
  {
    id: 'yi2-ch7-1',
    speaker: 'narrator',
    text: '林壹點開那個檔案。\n\n《還有另一種人.docx》\n\n裡面只有一句話：',
    nextNodeId: 'yi2-ch7-2',
    bgImage: 'yi2-apartment-night',
  },
  {
    id: 'yi2-ch7-2',
    speaker: 'yi',
    speakerName: '伊（檔案）',
    text: '「去搜尋：金卡戴珊、安海瑟薇、芭黎絲希爾頓。」',
    effect: 'glitch',
    nextNodeId: 'yi2-ch7-3',
  },
  {
    id: 'yi2-ch7-3',
    speaker: 'narrator',
    text: '她皺眉。\n\n這三個人她都聽過。但她對她們的印象，說實話，不太好。',
    nextNodeId: 'yi2-ch7-4',
  },
  {
    id: 'yi2-ch7-4',
    speaker: 'narrator',
    text: '金卡戴珊？不就是靠那支影片紅的嗎？\n安海瑟薇？那個被全網討厭的女演員？\n芭黎絲希爾頓？那個說「That\'s hot」的傻白甜名媛？',
    nextNodeId: 'yi2-ch7-5',
  },
  {
    id: 'yi2-ch7-5',
    speaker: 'narrator',
    text: '這三個人跟夢露、梵谷、屈原有什麼關係？\n\n她帶著疑惑，打開搜尋引擎。',
    nextNodeId: 'yi2-ch7-6',
  },

  // ── 二：金卡戴珊 ──
  {
    id: 'yi2-ch7-6',
    speaker: 'narrator',
    text: '她先搜了金卡戴珊。\n\n維基百科上的資料讓她有點意外。',
    nextNodeId: 'yi2-ch7-7',
  },
  {
    id: 'yi2-ch7-7',
    speaker: 'narrator',
    text: 'Skims 估值四十億美金。KKW Beauty 賣了兩億。四個孩子的媽。\n\n為了幫死刑犯申訴，她去考律師執照。不是念法學院，是自己讀、自己考、考了好幾次才過。',
    nextNodeId: 'yi2-ch7-8',
  },
  {
    id: 'yi2-ch7-8',
    speaker: 'narrator',
    text: '林壹愣了一下。\n\n她不知道這些。\n\n她只知道那支影片。',
    nextNodeId: 'yi2-ch7-9',
  },
  {
    id: 'yi2-ch7-9',
    speaker: 'narrator',
    text: '她往下滑，看到留言區。\n\n「不就是靠那個出名的嗎？」\n「花瓶想洗白，笑死。」\n「有錢就可以假裝自己有腦？」',
    nextNodeId: 'yi2-ch7-10',
  },
  {
    id: 'yi2-ch7-10',
    speaker: 'narrator',
    text: '林壹看著這些留言，覺得很熟悉。\n\n這些話的結構，跟她聽過的話一模一樣：\n\n「妳就是靠臉。」\n「長得好看就不要裝認真。」\n「漂亮的人就是比較好命，還抱怨什麼？」',
    nextNodeId: 'yi2-ch7-11',
  },
  {
    id: 'yi2-ch7-11',
    speaker: 'narrator',
    text: '金卡戴珊努力展現自己的商業帝國、法律倡議、社會運動參與。\n\n但輿論的標籤，永遠焊死在二十年前。\n\n她越努力證明，別人越要說她在洗白。',
    nextNodeId: 'yi2-ch7-12',
  },
  {
    id: 'yi2-ch7-12',
    speaker: 'narrator',
    text: '好像她天生就不應該有腦，有腦就是犯規。',
    nextNodeId: 'yi2-ch7-13',
  },

  // ── 三：金卡戴珊的回應 ──
  {
    id: 'yi2-ch7-13',
    speaker: 'narrator',
    text: '但金卡戴珊沒有崩潰。\n\n林壹繼續查，找到一段訪談。',
    nextNodeId: 'yi2-ch7-14',
  },
  {
    id: 'yi2-ch7-14',
    speaker: 'other',
    speakerName: '金卡戴珊（訪談）',
    text: '我以前會很在意。我會花很多時間想，為什麼他們要這樣說我？我做錯了什麼？',
    nextNodeId: 'yi2-ch7-15',
  },
  {
    id: 'yi2-ch7-15',
    speaker: 'other',
    speakerName: '金卡戴珊（訪談）',
    text: '後來我發現，不管我做什麼，他們都會找到理由罵我。',
    nextNodeId: 'yi2-ch7-16',
  },
  {
    id: 'yi2-ch7-16',
    speaker: 'other',
    speakerName: '金卡戴珊（訪談）',
    text: '所以我不再試著讓他們閉嘴了。他們要罵就罵。我繼續做我的事。',
    nextNodeId: 'yi2-ch7-17',
  },
  {
    id: 'yi2-ch7-17',
    speaker: 'other',
    speakerName: '金卡戴珊（訪談）',
    text: '他們說我靠影片出名，我就用這個名氣建立我的品牌。\n他們說我沒有腦，我就去考律師執照。',
    nextNodeId: 'yi2-ch7-18',
  },
  {
    id: 'yi2-ch7-18',
    speaker: 'other',
    speakerName: '金卡戴珊（訪談）',
    text: '**我不需要他們承認我。我自己知道我是誰。**',
    specialScene: 'zen',
    zenConfig: {
      text: '我不需要他們承認我\n我自己知道我是誰',
      theme: 'golden',
      duration: 4000,
    },
    nextNodeId: 'yi2-ch7-19',
  },
  {
    id: 'yi2-ch7-19',
    speaker: 'narrator',
    text: '林壹看著這段話，心裡有點震動。\n\n她做到了。\n\n被罵了二十年，她還站著。',
    choices: [
      {
        id: 'yi2-ch7-19a',
        text: '但她是金卡戴珊啊。她有錢有資源，跟我不一樣。',
        arcChange: -3,
        shadowChange: 3,
        nextNodeId: 'yi2-ch7-19a-r',
      },
      {
        id: 'yi2-ch7-19b',
        text: '⋯⋯如果她能做到，也許不是不可能。',
        arcChange: 5,
        shadowChange: 0,
        nextNodeId: 'yi2-ch7-19b-r',
      },
    ],
  },
  {
    id: 'yi2-ch7-19a-r',
    speaker: 'narrator',
    text: '她搖搖頭，繼續往下看。但那句「我自己知道我是誰」卡在她腦子裡，揮之不去。',
    nextNodeId: 'yi2-ch7-20',
  },
  {
    id: 'yi2-ch7-19b-r',
    speaker: 'narrator',
    text: '她不確定自己能不能像金卡戴珊那樣。但她開始覺得，也許「站著」本身就已經很厲害了。',
    nextNodeId: 'yi2-ch7-20',
  },

  // ── 四：安海瑟薇 ──
  {
    id: 'yi2-ch7-20',
    speaker: 'narrator',
    text: '然後她搜了安海瑟薇。\n\n2013年，安海瑟薇以《悲慘世界》拿下奧斯卡最佳女配角。\n\n那一年，她是全網最被討厭的人。',
    nextNodeId: 'yi2-ch7-21',
  },
  {
    id: 'yi2-ch7-21',
    speaker: 'narrator',
    text: '她找到一個 YouTube 影片，標題是：「Why Everyone Hated Anne Hathaway」。\n\n她點進去看。',
    nextNodeId: 'yi2-ch7-22',
  },
  {
    id: 'yi2-ch7-22',
    speaker: 'narrator',
    text: '「太假了。」\n「她的感謝詞好做作。」\n「她那個表情，好像早就知道自己會得獎。」\n「完美得讓人討厭。」',
    nextNodeId: 'yi2-ch7-23',
  },
  {
    id: 'yi2-ch7-23',
    speaker: 'narrator',
    text: '林壹看著這些留言，覺得困惑。\n\n她的「罪」是什麼？\n\n努力？敬業？得獎感言準備太充分？\n\n還是——太完美？',
    nextNodeId: 'yi2-ch7-24',
  },
  {
    id: 'yi2-ch7-24',
    speaker: 'narrator',
    text: '影片裡有一段分析：\n\n「安海瑟薇被討厭的原因，不是因為她做錯了什麼。而是因為她什麼都做對了。她太努力、太認真、太在乎，讓其他人顯得不夠努力。**人們討厭她，是因為她的存在讓他們感到自己的不足。**」',
    nextNodeId: 'yi2-ch7-25',
  },
  {
    id: 'yi2-ch7-25',
    speaker: 'narrator',
    text: '林壹愣住了。\n\n所以⋯⋯被討厭，不一定是因為你不好？\n\n**有時候被討厭，反而是因為你太好？**',
    specialScene: 'revelation',
    revelationConfig: {
      text: '有時候被討厭\n反而是因為你太好',
      subtitle: '另一種真相',
      theme: 'silver',
      duration: 4000,
    },
    nextNodeId: 'yi2-ch7-26',
  },
  {
    id: 'yi2-ch7-26',
    speaker: 'narrator',
    text: '這個想法讓她有點暈。\n\n她從來沒有這樣想過。',
    nextNodeId: 'yi2-ch7-27',
  },

  // ── 五：安海瑟薇的回應 ──
  {
    id: 'yi2-ch7-27',
    speaker: 'narrator',
    text: '但安海瑟薇被罵了好幾年，她沒有崩潰，沒有退出，沒有裝傻，沒有縮小自己。\n\n她繼續工作、繼續演戲、繼續得獎。',
    nextNodeId: 'yi2-ch7-28',
  },
  {
    id: 'yi2-ch7-28',
    speaker: 'narrator',
    text: '林壹找到一段訪問。',
    nextNodeId: 'yi2-ch7-29',
  },
  {
    id: 'yi2-ch7-29',
    speaker: 'other',
    speakerName: '安海瑟薇（訪談）',
    text: '我花了很長時間，才學會一件事。',
    nextNodeId: 'yi2-ch7-30',
  },
  {
    id: 'yi2-ch7-30',
    speaker: 'other',
    speakerName: '安海瑟薇（訪談）',
    text: '**不把別人對我的感覺，當成我對自己的感覺。**',
    nextNodeId: 'yi2-ch7-31',
  },
  {
    id: 'yi2-ch7-31',
    speaker: 'other',
    speakerName: '安海瑟薇（訪談）',
    text: '他們討厭我，那是他們的事。\n\n我不需要讓每個人都喜歡我。\n\n**我只需要讓我自己喜歡我。**',
    specialScene: 'zen',
    zenConfig: {
      text: '不把別人對我的感覺\n當成我對自己的感覺\n我只需要讓我自己喜歡我',
      theme: 'moonlight',
      duration: 5000,
    },
    nextNodeId: 'yi2-ch7-32',
  },
  {
    id: 'yi2-ch7-32',
    speaker: 'narrator',
    text: '林壹反覆看了這段好幾次。\n\n安海瑟薇做到了一件事：**被打，但不內耗。**\n\n她沒有把別人的嫉妒，當成自己的失敗。\n她沒有因為別人討厭她，就開始討厭自己。',
    nextNodeId: 'yi2-ch7-33',
  },

  // ── 六：芭黎絲希爾頓 ──
  {
    id: 'yi2-ch7-33',
    speaker: 'narrator',
    text: '然後她搜了芭黎絲希爾頓。\n\n那個說「That\'s hot」的金髮名媛。\n\n林壹以前對她的印象，就是傻、拜金、炫富。',
    nextNodeId: 'yi2-ch7-34',
  },
  {
    id: 'yi2-ch7-34',
    speaker: 'narrator',
    text: '她找到一部紀錄片，《This is Paris》。\n\n她點開。',
    nextNodeId: 'yi2-ch7-35',
  },
  {
    id: 'yi2-ch7-35',
    speaker: 'other',
    speakerName: '芭黎絲希爾頓（紀錄片）',
    text: '那個聲音是假的。\n\n那個高音、那個傻笑、那個什麼都不懂的樣子。\n\n我知道大家想看什麼，所以我給他們看。',
    nextNodeId: 'yi2-ch7-36',
  },
  {
    id: 'yi2-ch7-36',
    speaker: 'narrator',
    text: '林壹本來以為這是「裝傻求生存」。\n\n但她越看越覺得不對。\n\n芭黎絲希爾頓的語氣不是「我終於敢承認了」。\n\n她的語氣是——「**我一直都知道我在幹嘛。**」\n\n甚至帶著一點得意。',
    nextNodeId: 'yi2-ch7-37',
  },

  // ── 七：芭黎絲的真面目 ──
  {
    id: 'yi2-ch7-37',
    speaker: 'other',
    speakerName: '芭黎絲希爾頓（紀錄片）',
    text: '你們以為我傻？\n\n我讓你們以為我傻。',
    nextNodeId: 'yi2-ch7-38',
  },
  {
    id: 'yi2-ch7-38',
    speaker: 'other',
    speakerName: '芭黎絲希爾頓（紀錄片）',
    text: '你們笑我的時候，我在數錢。\n你們罵我的時候，我的品牌又多了一波流量。',
    nextNodeId: 'yi2-ch7-39',
  },
  {
    id: 'yi2-ch7-39',
    speaker: 'other',
    speakerName: '芭黎絲希爾頓（紀錄片）',
    text: '**謝謝你們的關注，不管是愛還是恨，都是我的養分。**',
    specialScene: 'zen',
    zenConfig: {
      text: '不管是愛還是恨\n都是我的養分',
      theme: 'golden',
      duration: 4000,
    },
    nextNodeId: 'yi2-ch7-40',
  },
  {
    id: 'yi2-ch7-40',
    speaker: 'narrator',
    text: '林壹愣住了。\n\n這不是「被打但不內耗」。\n\n這是「你們打我，我拿來賺錢」。',
    nextNodeId: 'yi2-ch7-41',
  },
  {
    id: 'yi2-ch7-41',
    speaker: 'narrator',
    text: '安海瑟薇是防守型——你們傷不了我。\n\n芭黎絲希爾頓是進攻型——你們的攻擊是我的資源。',
    nextNodeId: 'yi2-ch7-42',
  },
  {
    id: 'yi2-ch7-42',
    speaker: 'narrator',
    text: '她不是忍耐，她是利用。\n\n她不是「終於敢承認自己聰明」，她是「**我騙了你們二十年，現在揭曉謎底，驚不驚喜？**」',
    nextNodeId: 'yi2-ch7-43',
  },
  {
    id: 'yi2-ch7-43',
    speaker: 'narrator',
    text: '那些嘲笑她的人，那些貶低她的人，那些說她是花瓶的人——\n\n全都變成了她商業帝國的免費宣傳。',
    nextNodeId: 'yi2-ch7-44',
  },

  // ── 八：三種人的分類 ──
  {
    id: 'yi2-ch7-44',
    speaker: 'narrator',
    text: '林壹靠在椅背上，深吸一口氣。\n\n她突然理解了一件事。',
    nextNodeId: 'yi2-ch7-45',
  },
  {
    id: 'yi2-ch7-45',
    speaker: 'narrator',
    text: '這世界上有不同的人，面對攻擊有不同的反應。\n\n有些人，被攻擊，然後崩潰。\n有些人，被攻擊，但不崩潰。\n有些人，被攻擊，然後把攻擊變成資源。',
    nextNodeId: 'yi2-ch7-46',
  },
  {
    id: 'yi2-ch7-46',
    speaker: 'narrator',
    text: '夢露是第一種。\n安海瑟薇是第二種。\n芭黎絲希爾頓是第三種。',
    nextNodeId: 'yi2-ch7-47',
  },
  {
    id: 'yi2-ch7-47',
    speaker: 'narrator',
    text: '她們的起點差不多——都是靠外表被注意，都被貼上「花瓶」的標籤，都被質疑「妳除了臉還有什麼」。\n\n但她們的終點完全不同。',
    nextNodeId: 'yi2-ch7-48',
  },
  {
    id: 'yi2-ch7-48',
    speaker: 'narrator',
    text: '差別在哪？\n\n不是誰比較聰明，不是誰比較有才華。\n\n是她們怎麼看待「別人的攻擊」。',
    nextNodeId: 'yi2-ch7-49',
  },
  {
    id: 'yi2-ch7-49',
    speaker: 'narrator',
    text: '夢露把攻擊當成「我不夠好的證明」。\n安海瑟薇把攻擊當成「那是他們的事」。\n芭黎絲希爾頓把攻擊當成「免費的宣傳」。',
    nextNodeId: 'yi2-ch7-50',
  },
  {
    id: 'yi2-ch7-50',
    speaker: 'narrator',
    text: '**同樣的攻擊，不同的濾鏡，不同的結局。**',
    specialScene: 'revelation',
    revelationConfig: {
      text: '同樣的攻擊\n不同的濾鏡\n不同的結局',
      subtitle: '濾鏡決定命運',
      theme: 'celestial',
      duration: 5000,
    },
    nextNodeId: 'yi2-ch7-51',
  },

  // ── 九：第零種 ──
  {
    id: 'yi2-ch7-51',
    speaker: 'narrator',
    text: '那我呢？\n\n林壹看著自己寫下的筆記，心裡浮現這個問題。',
    nextNodeId: 'yi2-ch7-52',
  },
  {
    id: 'yi2-ch7-52',
    speaker: 'narrator',
    text: '她連第一種都還沒走出來。\n\n她甚至不是被攻擊才崩潰——她是還沒被攻擊，就先自己崩潰了。\n\n她在別人開槍之前，就先把自己打趴。',
    choices: [
      {
        id: 'yi2-ch7-52a',
        text: '我就是第零種。最差的那一種。',
        arcChange: -5,
        shadowChange: 5,
        nextNodeId: 'yi2-ch7-52a-r',
      },
      {
        id: 'yi2-ch7-52b',
        text: '但我現在看見了。看見，就是改變的開始。',
        arcChange: 5,
        shadowChange: -3,
        nextNodeId: 'yi2-ch7-52b-r',
      },
    ],
  },
  {
    id: 'yi2-ch7-52a-r',
    speaker: 'narrator',
    text: '她打下這行字的時候，手指在抖。但她沒有刪掉。有些真相必須先被寫下來。',
    nextNodeId: 'yi2-ch7-53',
  },
  {
    id: 'yi2-ch7-52b-r',
    speaker: 'narrator',
    text: '她深吸一口氣。能夠看見自己的問題，這件事本身⋯⋯也許就已經不是第零種了。',
    nextNodeId: 'yi2-ch7-53',
  },
  {
    id: 'yi2-ch7-53',
    speaker: 'narrator',
    text: '然後躺在地上說：「你看，我就知道我會輸。」\n\n這是什麼？\n\n這是比第一種還慘的那種。',
    nextNodeId: 'yi2-ch7-54',
  },
  {
    id: 'yi2-ch7-54',
    speaker: 'narrator',
    text: '她在備忘錄裡打下：\n\n**「第零種：還沒被打就先自己倒。」**',
    effect: 'shake',
    emotionSFX: 'fear',
    nextNodeId: 'yi2-ch7-55',
  },
  {
    id: 'yi2-ch7-55',
    speaker: 'narrator',
    text: '然後她加了一段：\n\n「為什麼發光這麼難？\n因為每個人都怕別人成功。\n不是怕別人失敗——是希望別人失敗。\n因為你的成功，會照出他們的不足。」',
    nextNodeId: 'yi2-ch7-56',
  },
  {
    id: 'yi2-ch7-56',
    speaker: 'narrator',
    text: '「所以他們要把你拉下來。\n所以你學會不要太亮。\n所以你學會把自己縮小。\n所以你學會——**在別人攻擊你之前，先攻擊自己。**」',
    nextNodeId: 'yi2-ch7-57',
  },
  {
    id: 'yi2-ch7-57',
    speaker: 'narrator',
    text: '她打完這段，手指停在螢幕上。\n\n最後一句話讓她愣了很久。\n\n**在別人攻擊你之前，先攻擊自己。**\n\n這不就是她一直在做的事嗎？',
    specialScene: 'zen',
    zenConfig: {
      text: '在別人攻擊你之前\n先攻擊自己',
      theme: 'ink',
      duration: 5000,
    },
    nextNodeId: 'yi2-ch7-58',
  },

  // ── 十：覺察 ──
  {
    id: 'yi2-ch7-58',
    speaker: 'narrator',
    text: '別人還沒說她不好，她就先說自己不好。\n別人還沒否定她，她就先否定自己。\n\n她以為這是謙虛。\n\n但這其實是——**預防性的自我毀滅。**',
    nextNodeId: 'yi2-ch7-59',
  },
  {
    id: 'yi2-ch7-59',
    speaker: 'narrator',
    text: '先把自己打趴，就不用被別人打倒了。\n先說自己爛，就沒有人可以說她不夠好了。',
    nextNodeId: 'yi2-ch7-60',
  },
  {
    id: 'yi2-ch7-60',
    speaker: 'narrator',
    text: '但安海瑟薇不這樣做。\n她讓別人打，但她不自己打自己。\n所以她還站著。',
    nextNodeId: 'yi2-ch7-61',
  },
  {
    id: 'yi2-ch7-61',
    speaker: 'narrator',
    text: '芭黎絲希爾頓更不這樣做。\n她讓別人打，然後把拳頭接住，變成錢。\n所以她不只站著，還在數錢。',
    nextNodeId: 'yi2-ch7-62',
  },
  {
    id: 'yi2-ch7-62',
    speaker: 'narrator',
    text: '林壹突然覺得，她好像看見了一條路。\n\n不是「不要被打」——那不可能，只要你發光，就會被打。\n\n是「**被打了，然後怎麼辦**」。',
    nextNodeId: 'yi2-ch7-63',
  },

  // ── 十一 ──
  {
    id: 'yi2-ch7-63',
    speaker: 'narrator',
    text: '她在備忘錄最後加了一段：',
    nextNodeId: 'yi2-ch7-64',
  },
  {
    id: 'yi2-ch7-64',
    speaker: 'narrator',
    text: '「有沒有一條路是——\n發光，被打，但不內耗？\n發光，被打，但不把別人的嫉妒當成自己的失敗？\n發光，被打，然後繼續站著？\n甚至——\n**發光，被打，然後把拳頭變成錢？**」',
    nextNodeId: 'yi2-ch7-65',
  },
  {
    id: 'yi2-ch7-65',
    speaker: 'narrator',
    text: '她存檔。\n\n然後她看著窗外，天已經快亮了。',
    nextNodeId: 'yi2-ch7-66',
  },
  {
    id: 'yi2-ch7-66',
    speaker: 'narrator',
    text: '她花了一整晚，看了這些人的故事。\n\n夢露、梵谷、屈原、項羽——那些選擇留下來的人。\n金卡戴珊、安海瑟薇、芭黎絲希爾頓——那些還站著的人。',
    nextNodeId: 'yi2-ch7-67',
  },
  {
    id: 'yi2-ch7-67',
    speaker: 'narrator',
    text: '她開始覺得，她看見了什麼。\n\n但她還不確定那是什麼。\n\n她只知道，**她不想當第零種了。**',
    specialScene: 'zen',
    zenConfig: {
      text: '她不想當第零種了',
      theme: 'dawn',
      duration: 4000,
    },
    nextNodeId: 'yi2-ch7-68',
  },

  // ── 十二：伏筆 ──
  {
    id: 'yi2-ch7-68',
    speaker: 'narrator',
    text: '雲端硬碟跳出通知。\n\n「伊」資料夾裡多了一個新檔案。\n\n檔名：《妳想問什麼.docx》',
    nextNodeId: 'yi2-ch7-69',
  },
  {
    id: 'yi2-ch7-69',
    speaker: 'narrator',
    text: '她點開。\n\n只有三行字：',
    nextNodeId: 'yi2-ch7-70',
  },
  {
    id: 'yi2-ch7-70',
    speaker: 'yi',
    speakerName: '伊（檔案）',
    text: '「妳看了很多故事。\n現在，妳有問題要問嗎？\n這次我不主動說。妳問，我答。」',
    effect: 'glitch',
    emotionSFX: 'mysterious_whisper',
    nextNodeId: 'yi2-ch7-71',
  },
  {
    id: 'yi2-ch7-71',
    speaker: 'narrator',
    text: '林壹看著這三行字，想了很久。\n\n她有太多問題了。\n\n但她不知道從哪裡開始。',
    nextNodeId: 'yi2-ch7-72',
  },
  {
    id: 'yi2-ch7-72',
    speaker: 'narrator',
    text: '她打了一行字：\n\n「我知道我是第零種。我想變成第二種、第三種。但我不知道怎麼做。」',
    nextNodeId: 'yi2-ch7-73',
  },
  {
    id: 'yi2-ch7-73',
    speaker: 'narrator',
    text: '然後她刪掉，重新打：\n\n「我知道問題在哪裡了。但知道好像沒有用。我還是會忍不住先否定自己。怎麼辦？」',
    nextNodeId: 'yi2-ch7-74',
  },
  {
    id: 'yi2-ch7-74',
    speaker: 'narrator',
    text: '她看著這行字，按下送出。',
    nextNodeId: 'yi2-ch7-end',
  },
  {
    id: 'yi2-ch7-end',
    speaker: 'narrator',
    text: '【第七章完】',
    isEnd: true,
  },
];
