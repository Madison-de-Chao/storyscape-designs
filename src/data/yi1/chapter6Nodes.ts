// 第六章｜吾性自足
import type { DialogueNode } from '@/stores/gameStore';

export const chapter6Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'chapter-6-intro-1',
    speaker: 'narrator',
    text: '「你找遍天下，不如回頭看一眼自己。」',
    nextNodeId: 'chapter-6-intro-2',
  },
  {
    id: 'chapter-6-intro-2',
    speaker: 'narrator',
    text: '「答案從來不在外面。」',
    nextNodeId: 'chapter-6-1',
  },

  // 一、前往龍場
  {
    id: 'chapter-6-1',
    speaker: 'narrator',
    text: '這一次，路不再是迴廊和庭院，而是一條山間小徑。兩旁是茂密的松林，空氣中瀰漫著松脂的清香。',
    nextNodeId: 'chapter-6-2',
  },
  {
    id: 'chapter-6-2',
    speaker: 'protagonist',
    text: '我們要去哪裡？',
    nextNodeId: 'chapter-6-3',
  },
  {
    id: 'chapter-6-3',
    speaker: 'wenxin',
    text: '龍場。王陽明悟道的地方。在元壹境，每一位歸者都有自己的居所。蘇軾選擇了庭院，王陽明選擇了龍場。',
    nextNodeId: 'chapter-6-4',
  },
  {
    id: 'chapter-6-4',
    speaker: 'wenxin',
    text: '因為那是他生命中最重要的地方——那是他從「向外求」變成「向內求」的地方。',
    nextNodeId: 'chapter-6-5',
  },

  // 二、玩易窩
  {
    id: 'chapter-6-5',
    speaker: 'narrator',
    text: '小徑越走越窄，然後她看見了一個山洞。洞口旁邊的石頭上刻著三個字——「玩易窩」。',
    nextNodeId: 'chapter-6-6',
  },
  {
    id: 'chapter-6-6',
    speaker: 'wenxin',
    text: '王陽明在龍場時住的地方。他被貶到這裡時，連個落腳的地方都沒有，當地人不敢接待他，他只能住在這個山洞裡。',
    nextNodeId: 'chapter-6-7',
  },
  {
    id: 'chapter-6-7',
    speaker: 'narrator',
    text: '她走進山洞。地上鋪著乾草，角落裡有一張簡陋的木桌，桌上放著幾卷書和一盞油燈。',
    nextNodeId: 'chapter-6-8',
  },
  {
    id: 'chapter-6-8',
    speaker: 'narrator',
    text: '一個人坐在桌前。穿著洗得發白的青布長衫，面容清瘦，但眼神異常明亮——像是暗夜裡的兩盞燈。',
    nextNodeId: 'chapter-6-9',
  },
  {
    id: 'chapter-6-9',
    speaker: 'wangyangming',
    text: '來了？問心跟我說，有一個「做什麼都不對」的人要來見我。',
    nextNodeId: 'chapter-6-10',
  },
  {
    id: 'chapter-6-10',
    speaker: 'wangyangming',
    text: '我看看……嗯，眼神裡有很多疲憊，也有很多懷疑。你懷疑自己，對不對？',
    nextNodeId: 'chapter-6-11',
  },
  {
    id: 'chapter-6-11',
    speaker: 'wangyangming',
    text: '你一直在問自己——我到底哪裡做錯了？為什麼我這麼努力，還是不夠好？',
    nextNodeId: 'chapter-6-12',
  },
  {
    id: 'chapter-6-12',
    speaker: 'wangyangming',
    text: '你問過很多人。父母說你不夠聽話，老師說你不夠聰明，朋友說你想太多，主管說你不夠專業。每個人都有答案，但每個人的答案都不一樣。',
    nextNodeId: 'chapter-6-13',
  },
  {
    id: 'chapter-6-13',
    speaker: 'wangyangming',
    text: '所以你越問越迷惑，越問越不知道自己是誰。',
    nextNodeId: 'chapter-6-14',
  },
  {
    id: 'chapter-6-14',
    speaker: 'narrator',
    text: '她的眼淚掉了下來。',
    nextNodeId: 'chapter-6-15',
  },

  // 三、王陽明的經歷
  {
    id: 'chapter-6-15',
    speaker: 'wangyangming',
    text: '擦擦。哭不丟人。我當年在這個山洞裡，也哭過很多次。',
    nextNodeId: 'chapter-6-16',
  },
  {
    id: 'chapter-6-16',
    speaker: 'wangyangming',
    text: '我被貶到龍場的時候，三十七歲。之前是兵部主事，一夜之間什麼都沒有了。',
    nextNodeId: 'chapter-6-17',
  },
  {
    id: 'chapter-6-17',
    speaker: 'protagonist',
    text: '為什麼被貶？',
    nextNodeId: 'chapter-6-18',
  },
  {
    id: 'chapter-6-18',
    speaker: 'wangyangming',
    text: '因為我上書替人說話，得罪了權傾朝野的太監劉瑾。結果我被打了四十廷杖，差點死了，醒來的時候已經在去龍場的路上。',
    nextNodeId: 'chapter-6-19',
  },
  {
    id: 'chapter-6-19',
    speaker: 'wangyangming',
    text: '到了龍場，發現這裡比想像的還慘。瘴氣瀰漫，蟲蛇遍地。我的僕人病倒了，我一個人照顧他們，自己也差點病死。',
    nextNodeId: 'chapter-6-20',
  },
  {
    id: 'chapter-6-20',
    speaker: 'wangyangming',
    text: '那段時間，我也覺得自己做什麼都不對。',
    nextNodeId: 'chapter-6-21',
  },

  // 四、向外求的困境
  {
    id: 'chapter-6-21',
    speaker: 'wangyangming',
    text: '我從小就是一個「好學生」。五歲能背書，十二歲寫詩，十五歲就想著怎麼「做聖賢」。我讀遍了所有的經典，以為只要夠努力，就能找到答案。',
    nextNodeId: 'chapter-6-22',
  },
  {
    id: 'chapter-6-22',
    speaker: 'protagonist',
    text: '答案？什麼答案？',
    nextNodeId: 'chapter-6-23',
  },
  {
    id: 'chapter-6-23',
    speaker: 'wangyangming',
    text: '聖人之道。我想知道，怎樣才能成為一個聖人？怎樣才能做一個「對」的人？',
    nextNodeId: 'chapter-6-24',
  },
  {
    id: 'chapter-6-24',
    speaker: 'wangyangming',
    text: '我按照朱熹的方法，「格物致知」——觀察事物，從中悟出道理。我對著竹子看了七天七夜，想要「格」出竹子的道理。',
    nextNodeId: 'chapter-6-25',
  },
  {
    id: 'chapter-6-25',
    speaker: 'protagonist',
    text: '結果呢？',
    nextNodeId: 'chapter-6-26',
  },
  {
    id: 'chapter-6-26',
    speaker: 'wangyangming',
    text: '結果我病倒了。竹子還是竹子，我什麼都沒悟出來。',
    nextNodeId: 'chapter-6-27',
  },
  {
    id: 'chapter-6-27',
    speaker: 'wangyangming',
    text: '我跑遍天下拜訪名師。有人說道在經典裡，有人說道在天地間，有人說道在聖人的言行裡。我試了所有的方法，但我還是沒有找到。',
    nextNodeId: 'chapter-6-28',
  },
  {
    id: 'chapter-6-28',
    speaker: 'wangyangming',
    text: '你知道為什麼嗎？因為我一直在向外找。',
    effect: 'glow',
    nextNodeId: 'chapter-6-choice-1',
  },

  // 選擇：向外求
  {
    id: 'chapter-6-choice-1',
    speaker: 'narrator',
    text: '向外找……她想起自己讀過的那些書——「如何成為更好的人」、「如何提升工作效率」、「如何獲得幸福」……',
    choices: [
      {
        id: 'ch6-choice-resonate',
        text: '我也是這樣……照著做了，還是不快樂。',
        nextNodeId: 'chapter-6-resonate-1',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch6-choice-question',
        text: '那答案在哪裡？',
        nextNodeId: 'chapter-6-question-1',
        arcChange: 0,
        shadowChange: 0,
      },
    ],
  },

  // 共鳴路線
  {
    id: 'chapter-6-resonate-1',
    speaker: 'protagonist',
    text: '我也是這樣……我讀了那麼多書，學了那麼多方法，照著做了，但我還是不快樂。還是覺得自己不夠好。',
    nextNodeId: 'chapter-6-merge-1',
  },

  // 提問路線
  {
    id: 'chapter-6-question-1',
    speaker: 'protagonist',
    text: '如果不在外面……那答案在哪裡？',
    nextNodeId: 'chapter-6-merge-1',
  },

  // 合併：龍場悟道
  {
    id: 'chapter-6-merge-1',
    speaker: 'wangyangming',
    text: '問題出在——你一直在問別人「我該怎麼做」，但你從來沒有問過自己「我想要什麼」。',
    nextNodeId: 'chapter-6-merge-2',
  },
  {
    id: 'chapter-6-merge-2',
    speaker: 'wangyangming',
    text: '就在這個山洞裡，有一天半夜，我突然從夢中醒來。我有一種很強烈的感覺——我找錯方向了。',
    nextNodeId: 'chapter-6-merge-3',
  },
  {
    id: 'chapter-6-merge-3',
    speaker: 'wangyangming',
    text: '我一直在外面找答案，但答案不在外面。',
    nextNodeId: 'chapter-6-merge-4',
  },
  {
    id: 'chapter-6-merge-4',
    speaker: 'wangyangming',
    text: '**聖人之道，吾性自足。**',
    effect: 'glow',
    nextNodeId: 'chapter-6-merge-5',
  },
  {
    id: 'chapter-6-merge-5',
    speaker: 'protagonist',
    text: '什麼意思？',
    nextNodeId: 'chapter-6-merge-6',
  },
  {
    id: 'chapter-6-merge-6',
    speaker: 'wangyangming',
    text: '意思是——成為聖人的道理，本來就在我的心裡。我不需要去外面找，我只需要——向內看。',
    nextNodeId: 'chapter-6-merge-7',
  },

  // 五、向內看
  {
    id: 'chapter-6-merge-7',
    speaker: 'protagonist',
    text: '什麼叫「向內看」？',
    nextNodeId: 'chapter-6-merge-8',
  },
  {
    id: 'chapter-6-merge-8',
    speaker: 'wangyangming',
    text: '你讀書的時候，是不是覺得——這本書說得對，我要照著做？然後你照著做了，發現不對。於是你又去讀另一本書……',
    nextNodeId: 'chapter-6-merge-9',
  },
  {
    id: 'chapter-6-merge-9',
    speaker: 'wangyangming',
    text: '你讀了越來越多的書，試了越來越多的方法，但你還是覺得自己做什麼都不對。',
    nextNodeId: 'chapter-6-merge-10',
  },
  {
    id: 'chapter-6-merge-10',
    speaker: 'wangyangming',
    text: '閉上眼睛。',
    nextNodeId: 'chapter-6-merge-11',
  },
  {
    id: 'chapter-6-merge-11',
    speaker: 'narrator',
    text: '她猶豫了一下，然後閉上眼睛。山洞裡很安靜，她能聽見風穿過松林的聲音，能聽見自己的心跳。',
    nextNodeId: 'chapter-6-merge-12',
  },
  {
    id: 'chapter-6-merge-12',
    speaker: 'wangyangming',
    text: '現在，問你自己一個問題——你為什麼要寫那些故事？',
    nextNodeId: 'chapter-6-merge-13',
  },
  {
    id: 'chapter-6-merge-13',
    speaker: 'narrator',
    text: '那些她寫了三年、差點被她刪掉的故事。',
    nextNodeId: 'chapter-6-choice-2',
  },

  // 選擇：為什麼寫故事
  {
    id: 'chapter-6-choice-2',
    speaker: 'wangyangming',
    text: '不要說「不知道」，那是你向外看的答案。向內看。問你自己——你為什麼要寫？',
    choices: [
      {
        id: 'ch6-choice-myself',
        text: '因為……寫的時候，我覺得我是我自己。',
        nextNodeId: 'chapter-6-myself-1',
        arcChange: 5,
        shadowChange: 0,
      },
      {
        id: 'ch6-choice-escape',
        text: '也許只是逃避現實……',
        nextNodeId: 'chapter-6-escape-1',
        arcChange: 0,
        shadowChange: 2,
      },
    ],
  },

  // 做自己路線
  {
    id: 'chapter-6-myself-1',
    speaker: 'narrator',
    text: '她的腦海裡浮現出那些深夜——下班後坐在電腦前，疲憊不堪但不想睡。打開隱藏的資料夾，開始寫。',
    nextNodeId: 'chapter-6-myself-2',
  },
  {
    id: 'chapter-6-myself-2',
    speaker: 'narrator',
    text: '寫著寫著，她忘記了時間，忘記了那些讓她難過的事。她覺得自己——活著。',
    nextNodeId: 'chapter-6-myself-3',
  },
  {
    id: 'chapter-6-myself-3',
    speaker: 'protagonist',
    text: '因為……寫的時候，我覺得我是我自己。',
    nextNodeId: 'chapter-6-end-1',
  },

  // 逃避路線
  {
    id: 'chapter-6-escape-1',
    speaker: 'protagonist',
    text: '也許只是逃避現實……不想面對那些煩心事。',
    nextNodeId: 'chapter-6-escape-2',
  },
  {
    id: 'chapter-6-escape-2',
    speaker: 'wangyangming',
    text: '逃避也是一種需要。你為什麼需要逃避？因為現實讓你無法做自己。寫故事的時候，你不需要逃避，因為你可以做自己。',
    nextNodeId: 'chapter-6-end-1',
  },

  // 結尾：良知
  {
    id: 'chapter-6-end-1',
    speaker: 'wangyangming',
    text: '「**我是我自己**」——這就是答案。',
    effect: 'glow',
    nextNodeId: 'chapter-6-end-2',
  },
  {
    id: 'chapter-6-end-2',
    speaker: 'wangyangming',
    text: '你寫故事的時候，不是為了別人，是為了你自己。那個時候，你不需要別人的認可，你只是在做你想做的事。那個時候，你是完整的。',
    nextNodeId: 'chapter-6-end-3',
  },
  {
    id: 'chapter-6-end-3',
    speaker: 'wangyangming',
    text: '你知道為什麼平時覺得「做什麼都不對」嗎？因為你一直在用別人的標準來評價自己。你把「對錯」的權力，交給了別人。',
    nextNodeId: 'chapter-6-end-4',
  },
  {
    id: 'chapter-6-end-4',
    speaker: 'wangyangming',
    text: '但寫故事的時候不一樣。沒有人告訴你「這樣才對」，沒有人評價你「好不好」。你只是在寫，在創造，在表達你自己。那個時候，「對錯」的權力在你手裡。',
    nextNodeId: 'chapter-6-end-5',
  },
  {
    id: 'chapter-6-end-5',
    speaker: 'wangyangming',
    text: '這就是「**吾性自足**」的意思——你不需要去外面找答案，因為答案本來就在你心裡。你不需要別人告訴你「對不對」，因為你自己知道什麼是對的。',
    effect: 'glow',
    nextNodeId: 'chapter-6-end-6',
  },
  {
    id: 'chapter-6-end-6',
    speaker: 'protagonist',
    text: '可是……如果我不聽別人的，那我怎麼知道自己是不是錯了？',
    nextNodeId: 'chapter-6-end-7',
  },
  {
    id: 'chapter-6-end-7',
    speaker: 'wangyangming',
    text: '你寫故事的時候，怎麼知道這一段寫得好不好？',
    nextNodeId: 'chapter-6-end-8',
  },
  {
    id: 'chapter-6-end-8',
    speaker: 'protagonist',
    text: '我……就是知道。有時候寫完會覺得「對，就是這個感覺」，有時候會覺得「不對，要改」。沒有人告訴我，我自己就是知道。',
    nextNodeId: 'chapter-6-end-9',
  },
  {
    id: 'chapter-6-end-9',
    speaker: 'wangyangming',
    text: '這就是你的「**良知**」。每個人心裡都有一個聲音，能夠分辨是非對錯。這個聲音不是學來的，是天生的。',
    effect: 'glow',
    nextNodeId: 'chapter-6-end-10',
  },
  {
    id: 'chapter-6-end-10',
    speaker: 'wangyangming',
    text: '問題是——在日常生活中，你把這個聲音忽略了。你不再相信自己的判斷，只相信別人的判斷。你不再聽自己的聲音，只聽別人的聲音。',
    nextNodeId: 'chapter-6-end-11',
  },
  {
    id: 'chapter-6-end-11',
    speaker: 'wangyangming',
    text: '所以你才會覺得「做什麼都不對」——因為你用別人的「對」來要求自己，而忘記了你自己的「對」。',
    nextNodeId: 'chapter-6-end-12',
  },
  {
    id: 'chapter-6-end-12',
    speaker: 'narrator',
    text: '她聽著，心裡有什麼東西在鬆動。',
    nextNodeId: 'chapter-6-end-13',
  },
  {
    id: 'chapter-6-end-13',
    speaker: 'wenxin',
    text: '時候到了。下一位歸者在等你。',
    nextNodeId: 'chapter-6-end-14',
  },
  {
    id: 'chapter-6-end-14',
    speaker: 'wangyangming',
    text: '記住——吾性自足，不假外求。你找遍天下，不如回頭看一眼自己。答案從來不在外面。',
    effect: 'glow',
    nextNodeId: 'chapter-7-intro-1',
  },
];
