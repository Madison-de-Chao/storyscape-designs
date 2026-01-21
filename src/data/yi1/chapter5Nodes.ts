// 第五章｜也無風雨也無晴
import type { DialogueNode } from '@/stores/gameStore';

export const chapter5Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'chapter-5-intro-1',
    speaker: 'narrator',
    text: '「我這一生被貶了無數次，但我從未貶低過自己。」',
    nextNodeId: 'chapter-5-intro-2',
  },
  {
    id: 'chapter-5-intro-2',
    speaker: 'narrator',
    text: '「你知道這兩者的區別嗎？」',
    nextNodeId: 'chapter-5-1',
  },

  // 一、回到蘇軾庭院
  {
    id: 'chapter-5-1',
    speaker: 'narrator',
    text: '問心沒有直接帶她去見王陽明，而是帶她回到了蘇軾的庭院。',
    nextNodeId: 'chapter-5-2',
  },
  {
    id: 'chapter-5-2',
    speaker: 'wenxin',
    text: '在那之前，蘇軾還有話要對你說。關於你剛才看到的，關於你的命樹。',
    nextNodeId: 'chapter-5-3',
  },
  {
    id: 'chapter-5-3',
    speaker: 'narrator',
    text: '她的心沉了一下。那些扭曲的枝幹、醜陋的結節、黑色的洞——每想起一次，她的心就痛一次。',
    nextNodeId: 'chapter-5-4',
  },

  // 二、蘇軾的自我反省
  {
    id: 'chapter-5-4',
    speaker: 'narrator',
    text: '蘇軾還在樹下坐著，這一次他在煮茶。',
    nextNodeId: 'chapter-5-5',
  },
  {
    id: 'chapter-5-5',
    speaker: 'sushi',
    text: '回來了？看見你的樹了？我猜，不太好看？',
    nextNodeId: 'chapter-5-6',
  },
  {
    id: 'chapter-5-6',
    speaker: 'protagonist',
    text: '很醜。',
    nextNodeId: 'chapter-5-7',
  },
  {
    id: 'chapter-5-7',
    speaker: 'sushi',
    text: '第一次看見自己的命樹，都會這樣。我第一次看見我的樹的時候，差點沒認出來那是我的。',
    nextNodeId: 'chapter-5-8',
  },
  {
    id: 'chapter-5-8',
    speaker: 'protagonist',
    text: '為什麼？',
    nextNodeId: 'chapter-5-9',
  },
  {
    id: 'chapter-5-9',
    speaker: 'sushi',
    text: '因為太扭曲了。我以為我這一生活得還算坦蕩，但那棵樹告訴我——我騙了自己很多年。',
    nextNodeId: 'chapter-5-10',
  },

  // 三、蘇軾的「光明與黑暗」
  {
    id: 'chapter-5-10',
    speaker: 'sushi',
    text: '你以為我天生就是那個「也無風雨也無晴」的人嗎？我不是的。我年輕的時候，比你還執著。',
    nextNodeId: 'chapter-5-11',
  },
  {
    id: 'chapter-5-11',
    speaker: 'protagonist',
    text: '執著什麼？',
    nextNodeId: 'chapter-5-12',
  },
  {
    id: 'chapter-5-12',
    speaker: 'sushi',
    text: '執著於「對」。我覺得自己是對的，朝廷是錯的。我覺得自己站在光明這邊，他們站在黑暗那邊。',
    nextNodeId: 'chapter-5-13',
  },
  {
    id: 'chapter-5-13',
    speaker: 'sushi',
    text: '問題在於——我把自己和他們切割了。我覺得我比他們高尚，比他們正確。',
    nextNodeId: 'chapter-5-14',
  },
  {
    id: 'chapter-5-14',
    speaker: 'sushi',
    text: '但後來我發現，我錯了。**我也有「他們」的那一面。**',
    effect: 'glow',
    nextNodeId: 'chapter-5-15',
  },

  // 四、烏臺詩案的反思
  {
    id: 'chapter-5-15',
    speaker: 'sushi',
    text: '你知道我為什麼會被捲入烏臺詩案嗎？表面上是寫詩諷刺朝政，但真正的原因是——我太驕傲了。',
    nextNodeId: 'chapter-5-16',
  },
  {
    id: 'chapter-5-16',
    speaker: 'sushi',
    text: '我覺得自己才華橫溢，看不起那些平庸的官員。我以為我是在堅持正義，但其實我只是在滿足自己的虛榮。',
    nextNodeId: 'chapter-5-17',
  },
  {
    id: 'chapter-5-17',
    speaker: 'sushi',
    text: '我把「正義」和「虛榮」混在一起了。我以為自己是純粹的光明，但其實我的光明裡，藏著黑暗。',
    nextNodeId: 'chapter-5-18',
  },
  {
    id: 'chapter-5-18',
    speaker: 'narrator',
    text: '她聽著，心裡有一種奇怪的感覺。她想起自己批評過的那些人——那些「不夠努力」的同事、「太膚淺」的朋友、「不懂我」的家人……',
    nextNodeId: 'chapter-5-choice-1',
  },

  // 選擇：自我反思
  {
    id: 'chapter-5-choice-1',
    speaker: 'narrator',
    text: '她覺得自己和他們不一樣。但真的不一樣嗎？',
    choices: [
      {
        id: 'ch5-choice-admit',
        text: '也許……我和他們也沒那麼不同。',
        nextNodeId: 'chapter-5-admit-1',
        arcChange: 5,
        shadowChange: 0,
      },
      {
        id: 'ch5-choice-resist',
        text: '但有些事確實是對錯分明的……',
        nextNodeId: 'chapter-5-resist-1',
        arcChange: 0,
        shadowChange: 3,
      },
    ],
  },

  // 承認路線
  {
    id: 'chapter-5-admit-1',
    speaker: 'protagonist',
    text: '也許……我和他們也沒那麼不同。我也有自私的時候，也有虛榮的時候。',
    nextNodeId: 'chapter-5-merge-1',
  },

  // 抗拒路線
  {
    id: 'chapter-5-resist-1',
    speaker: 'protagonist',
    text: '但有些事確實是對錯分明的吧？不是所有事都能模糊的……',
    nextNodeId: 'chapter-5-resist-2',
  },
  {
    id: 'chapter-5-resist-2',
    speaker: 'sushi',
    text: '分辨對錯是需要的。但分辨是為了理解，不是為了切割。理解是說——我知道這是錯的，但我不會因此否認它的存在。',
    nextNodeId: 'chapter-5-merge-1',
  },

  // 合併：明暗相成
  {
    id: 'chapter-5-merge-1',
    speaker: 'sushi',
    text: '這就是「**明暗相成**」的意思。我以為自己是光明，但其實我的光明裡有黑暗。他們看起來是黑暗，但他們的黑暗裡也有光明。',
    effect: 'glow',
    nextNodeId: 'chapter-5-merge-2',
  },

  // 五、主角的崩潰
  {
    id: 'chapter-5-merge-2',
    speaker: 'sushi',
    text: '你這輩子一直在切割。你把「好的」自己留下，把「壞的」自己丟掉。但你有沒有想過——那些「壞的」部分，也是你？',
    nextNodeId: 'chapter-5-merge-3',
  },
  {
    id: 'chapter-5-merge-3',
    speaker: 'protagonist',
    text: '我知道它們是我的一部分。但我不喜歡它們。因為它們讓我變得……不夠好。',
    nextNodeId: 'chapter-5-merge-4',
  },
  {
    id: 'chapter-5-merge-4',
    speaker: 'sushi',
    text: '不夠好？誰說的？',
    nextNodeId: 'chapter-5-merge-5',
  },
  {
    id: 'chapter-5-merge-5',
    speaker: 'protagonist',
    text: '所有人。我媽說我太愛生氣，老師說我太敏感，前男友說我太情緒化，主管說我不夠專業……',
    nextNodeId: 'chapter-5-merge-6',
  },
  {
    id: 'chapter-5-merge-6',
    speaker: 'protagonist',
    text: '所有人都說，我的這些部分是「不好的」。所以我就把它們藏起來，假裝它們不存在。',
    nextNodeId: 'chapter-5-merge-7',
  },
  {
    id: 'chapter-5-merge-7',
    speaker: 'protagonist',
    text: '我以為，只要把那些部分藏起來，我就會變成一個「好人」。我就會被接受，被認可，被喜歡。',
    nextNodeId: 'chapter-5-merge-8',
  },
  {
    id: 'chapter-5-merge-8',
    speaker: 'protagonist',
    text: '然後我發現——沒有用。無論我怎麼藏，怎麼改，他們還是不滿意。我做什麼都不對……',
    nextNodeId: 'chapter-5-merge-9',
  },
  {
    id: 'chapter-5-merge-9',
    speaker: 'narrator',
    text: '她蹲下身，抱住自己的頭，哭了起來。蘇軾沒有說話，只是靜靜地陪著她。',
    nextNodeId: 'chapter-5-merge-10',
  },

  // 六、蘇軾的核心教誨
  {
    id: 'chapter-5-merge-10',
    speaker: 'sushi',
    text: '我這一生被貶了無數次。從朝廷核心，貶到黃州、惠州、儋州。每一次被貶，都有人告訴我——你錯了。',
    nextNodeId: 'chapter-5-merge-11',
  },
  {
    id: 'chapter-5-merge-11',
    speaker: 'sushi',
    text: '他們否定我的位置，否定我的能力，否定我的人格。但我發現了一件事——',
    nextNodeId: 'chapter-5-merge-12',
  },
  {
    id: 'chapter-5-merge-12',
    speaker: 'sushi',
    text: '**他們可以否定我的位置，但他們不能否定我的價值。**',
    effect: 'glow',
    nextNodeId: 'chapter-5-merge-13',
  },
  {
    id: 'chapter-5-merge-13',
    speaker: 'sushi',
    text: '位置是外在的——你在哪裡，做什麼官，有多少錢。這些都是可以被否定的，因為這些都是別人給的。',
    nextNodeId: 'chapter-5-merge-14',
  },
  {
    id: 'chapter-5-merge-14',
    speaker: 'sushi',
    text: '但價值是內在的——你是誰，你相信什麼，你願意為什麼而活。這些是不能被否定的，因為這些是你自己的。',
    nextNodeId: 'chapter-5-merge-15',
  },

  // 七、東坡的由來
  {
    id: 'chapter-5-merge-15',
    speaker: 'sushi',
    text: '我被貶到黃州的時候，什麼都沒有了。官位沒了，俸祿沒了，朋友也不敢來往了。',
    nextNodeId: 'chapter-5-merge-16',
  },
  {
    id: 'chapter-5-merge-16',
    speaker: 'sushi',
    text: '我在城東的一塊坡地上種菜。那塊地叫「東坡」，所以我給自己取了個號——東坡居士。',
    nextNodeId: 'chapter-5-merge-17',
  },
  {
    id: 'chapter-5-merge-17',
    speaker: 'protagonist',
    text: '「東坡」……是這麼來的？',
    nextNodeId: 'chapter-5-merge-18',
  },
  {
    id: 'chapter-5-merge-18',
    speaker: 'sushi',
    text: '是啊。很多人以為是什麼高雅的典故，其實就是一塊種菜的坡地。',
    nextNodeId: 'chapter-5-merge-19',
  },
  {
    id: 'chapter-5-merge-19',
    speaker: 'sushi',
    text: '那段時間，是我一生中最窮、最慘、最孤獨的日子。但也是我最快樂的日子。',
    nextNodeId: 'chapter-5-merge-20',
  },
  {
    id: 'chapter-5-merge-20',
    speaker: 'protagonist',
    text: '為什麼？',
    nextNodeId: 'chapter-5-merge-21',
  },
  {
    id: 'chapter-5-merge-21',
    speaker: 'sushi',
    text: '因為我終於不用再證明什麼了。沒有人在乎我有沒有能力，有沒有才華，是不是對的。我就是一個種菜的老頭。',
    nextNodeId: 'chapter-5-merge-22',
  },
  {
    id: 'chapter-5-merge-22',
    speaker: 'sushi',
    text: '一開始覺得空虛。但後來我發現——**那才是自由**。當你不再需要證明自己的時候，你才能真正做自己。',
    effect: 'glow',
    nextNodeId: 'chapter-5-merge-23',
  },

  // 八、定風波
  {
    id: 'chapter-5-merge-23',
    speaker: 'protagonist',
    text: '那首「定風波」……是在黃州寫的嗎？',
    nextNodeId: 'chapter-5-merge-24',
  },
  {
    id: 'chapter-5-merge-24',
    speaker: 'sushi',
    text: '是啊。有一天和朋友出去走走，半路下了大雨。別人都在跑，都在躲。但我突然覺得——躲什麼呢？雨就是雨，淋就淋了。',
    nextNodeId: 'chapter-5-merge-25',
  },
  {
    id: 'chapter-5-merge-25',
    speaker: 'sushi',
    text: '「莫聽穿林打葉聲，何妨吟嘯且徐行。竹杖芒鞋輕勝馬，**誰怕？一蓑煙雨任平生。**」',
    effect: 'glow',
    nextNodeId: 'chapter-5-merge-26',
  },
  {
    id: 'chapter-5-merge-26',
    speaker: 'sushi',
    text: '「回首向來蕭瑟處，歸去，**也無風雨也無晴**。」',
    effect: 'glow',
    nextNodeId: 'chapter-5-merge-27',
  },
  {
    id: 'chapter-5-merge-27',
    speaker: 'sushi',
    text: '風雨和晴天，不是對立的。風雨來的時候，你不需要害怕。晴天來的時候，你也不需要得意。因為它們都會過去，都是暫時的。',
    nextNodeId: 'chapter-5-merge-28',
  },
  {
    id: 'chapter-5-merge-28',
    speaker: 'sushi',
    text: '**唯一不變的，是你自己。**',
    effect: 'glow',
    nextNodeId: 'chapter-5-choice-2',
  },

  // 選擇：關於自我價值
  {
    id: 'chapter-5-choice-2',
    speaker: 'sushi',
    text: '你覺得，你有價值嗎？',
    choices: [
      {
        id: 'ch5-choice-unsure',
        text: '我不知道……我從來沒問過自己。',
        nextNodeId: 'chapter-5-unsure-1',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch5-choice-no',
        text: '如果我自己都覺得自己沒有價值呢？',
        nextNodeId: 'chapter-5-no-1',
        arcChange: 0,
        shadowChange: 2,
      },
    ],
  },

  // 不確定路線
  {
    id: 'chapter-5-unsure-1',
    speaker: 'protagonist',
    text: '我不知道。我這輩子從來沒問過自己這個問題。我只是不斷地在聽——別人說我有沒有價值。',
    nextNodeId: 'chapter-5-end-1',
  },

  // 否定路線
  {
    id: 'chapter-5-no-1',
    speaker: 'protagonist',
    text: '可是……如果我自己都覺得自己沒有價值呢？',
    nextNodeId: 'chapter-5-no-2',
  },
  {
    id: 'chapter-5-no-2',
    speaker: 'sushi',
    text: '那是因為你把別人的評價，當成了你自己的評價。你有沒有問過自己——我覺得呢？',
    nextNodeId: 'chapter-5-end-1',
  },

  // 結尾
  {
    id: 'chapter-5-end-1',
    speaker: 'sushi',
    text: '沒關係，慢慢想。但我可以告訴你一件事。',
    nextNodeId: 'chapter-5-end-2',
  },
  {
    id: 'chapter-5-end-2',
    speaker: 'sushi',
    text: '你願意來這裡，願意看你的命樹，願意面對那些你不想面對的東西——這本身就是有價值的。',
    nextNodeId: 'chapter-5-end-3',
  },
  {
    id: 'chapter-5-end-3',
    speaker: 'sushi',
    text: '很多人一輩子都不願意面對自己。他們逃避，他們否認，他們假裝一切都很好。但你沒有。這就是你的價值。',
    effect: 'glow',
    nextNodeId: 'chapter-5-end-4',
  },
  {
    id: 'chapter-5-end-4',
    speaker: 'narrator',
    text: '她抬起頭，看著蘇軾。他的眼神裡，有一種真正的、看見她的溫暖。',
    nextNodeId: 'chapter-5-end-5',
  },
  {
    id: 'chapter-5-end-5',
    speaker: 'wenxin',
    text: '時候到了。',
    nextNodeId: 'chapter-5-end-6',
  },
  {
    id: 'chapter-5-end-6',
    speaker: 'sushi',
    text: '去吧。記住——外境可以否定你的位置，但不能否定你的價值。風雨會來，晴天會來，但你永遠是你。也無風雨也無晴。',
    effect: 'glow',
    nextNodeId: 'chapter-5-end-7',
  },
  {
    id: 'chapter-5-end-7',
    speaker: 'sushi',
    text: '下一位歸者，會教你另一件事。我教你的是——外境不能否定你的價值。他會教你的是——你的價值，本來就在你裡面。',
    nextNodeId: 'chapter-5-end-8',
  },
  {
    id: 'chapter-5-end-8',
    speaker: 'sushi',
    text: '吾性自足，不假外求。',
    effect: 'glow',
    nextNodeId: 'chapter-6-intro-1',
  },
];
