import type { DialogueNode } from '@/stores/gameStore';

export const chapter6Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-ch6-intro',
    speaker: 'narrator',
    text: '「你找遍天下，不如回頭看一眼自己。答案從來不在外面。」',
    effect: 'glow',
    nextNodeId: 'yi1-ch6-1',
  },

  // 一、前往龍場
  {
    id: 'yi1-ch6-1',
    speaker: 'narrator',
    text: '這一次，路不再是迴廊和庭院，而是一條山間小徑。松林茂密，空氣中瀰漫著松脂的清香。',
    bgImage: 'ch6_pine_path',
    nextNodeId: 'yi1-ch6-2',
  },
  {
    id: 'yi1-ch6-2',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '我們要去龍場——王陽明悟道的地方。那是他從「向外求」變成「向內求」的地方。',
    nextNodeId: 'yi1-ch6-3',
  },
  {
    id: 'yi1-ch6-3',
    speaker: 'narrator',
    text: '小徑盡頭，是一個山洞。洞口旁的大石上刻著三個字——「玩易窩」。',
    bgImage: 'ch6_cave_entrance',
    nextNodeId: 'yi1-ch6-4',
  },
  {
    id: 'yi1-ch6-4',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '他被貶到龍場時，連個落腳的地方都沒有。當地人不敢接待他，他只能住在這個山洞裡。',
    nextNodeId: 'yi1-ch6-5',
  },

  // 二、見到王陽明
  {
    id: 'yi1-ch6-5',
    speaker: 'narrator',
    text: '洞裡比她想像的寬敞。地上鋪著乾草，角落有一張簡陋的木桌，桌上放著幾卷書和一盞油燈。一個人坐在桌前。',
    bgImage: 'ch6_wang_cave',
    nextNodeId: 'yi1-ch6-6',
  },
  {
    id: 'yi1-ch6-6',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '來了？問心跟我說，有一個「做什麼都不對」的人要來見我。',
    nextNodeId: 'yi1-ch6-choice-1',
  },

  // 🎯 選項1：對王陽明的反應
  {
    id: 'yi1-ch6-choice-1',
    speaker: 'narrator',
    text: '他的眼神異常明亮，像暗夜裡的兩盞燈。',
    choices: [
      {
        id: 'ch6-c1a',
        text: '「您怎麼知道我的事？」',
        nextNodeId: 'yi1-ch6-7a',
        arcChange: 0,
        shadowChange: 2,
      },
      {
        id: 'ch6-c1b',
        text: '點點頭，承認自己的困惑',
        nextNodeId: 'yi1-ch6-7b',
        arcChange: 3,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch6-7a',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '眼神裡有很多疲憊，也有很多懷疑。你懷疑自己，對不對？',
    nextNodeId: 'yi1-ch6-8',
  },
  {
    id: 'yi1-ch6-7b',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '很好，願意承認困惑，是解惑的第一步。',
    nextNodeId: 'yi1-ch6-8',
  },

  // 三、王陽明的故事
  {
    id: 'yi1-ch6-8',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '你問過很多人，對不對？問父母，他們說你不夠聽話。問老師，他們說你不夠聰明。問主管，他們說你不夠專業。',
    nextNodeId: 'yi1-ch6-9',
  },
  {
    id: 'yi1-ch6-9',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '每個人都有答案，但每個人的答案都不一樣。所以你越問越迷惑。',
    nextNodeId: 'yi1-ch6-10',
  },
  {
    id: 'yi1-ch6-10',
    speaker: 'narrator',
    text: '她的眼淚掉了下來。',
    nextNodeId: 'yi1-ch6-11',
  },
  {
    id: 'yi1-ch6-11',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '我當年在這個山洞裡，也哭過很多次。被打了四十廷杖，流放到這裡，差點病死。那段時間，我也覺得自己做什麼都不對。',
    nextNodeId: 'yi1-ch6-12',
  },
  {
    id: 'yi1-ch6-12',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '我從小就想找答案——怎樣才能成為聖人？我讀遍經典，拜遍名師，對著竹子看了七天七夜想「格」出道理。結果我病倒了，什麼都沒悟出來。',
    nextNodeId: 'yi1-ch6-13',
  },
  {
    id: 'yi1-ch6-13',
    speaker: 'protagonist',
    text: '那你後來是怎麼悟道的？',
    nextNodeId: 'yi1-ch6-14',
  },

  // 四、悟道
  {
    id: 'yi1-ch6-14',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '就在這個山洞裡。有一天半夜，我突然醒來，明白了一件事——我找錯方向了。我一直在外面找答案，但答案不在外面。',
    bgImage: 'ch6_enlightenment',
    nextNodeId: 'yi1-ch6-15',
  },
  {
    id: 'yi1-ch6-15',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '聖人之道，吾性自足。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '吾性自足',
      subtitle: '——王陽明《龍場悟道》',
      theme: 'golden',
    },
    nextNodeId: 'yi1-ch6-choice-2',
  },

  // 🎯 選項2：對「吾性自足」的理解
  {
    id: 'yi1-ch6-choice-2',
    speaker: 'protagonist',
    text: '我不太懂……什麼叫「向內看」？',
    choices: [
      {
        id: 'ch6-c2a',
        text: '「不聽別人的，怎麼知道自己是不是錯了？」',
        nextNodeId: 'yi1-ch6-16a',
        arcChange: 0,
        shadowChange: 3,
      },
      {
        id: 'ch6-c2b',
        text: '「是不是說……要相信自己的判斷？」',
        nextNodeId: 'yi1-ch6-16b',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch6-16a',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '讓我問你——你寫故事的時候，怎麼知道這一段寫得好不好？',
    nextNodeId: 'yi1-ch6-17',
  },
  {
    id: 'yi1-ch6-16b',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '沒錯。讓我用你的故事來解釋——你寫的時候，怎麼知道這一段寫得好不好？',
    nextNodeId: 'yi1-ch6-17',
  },
  {
    id: 'yi1-ch6-17',
    speaker: 'protagonist',
    text: '我……就是知道。有時候寫完會覺得「對，就是這個感覺」，有時候會覺得「不對，要改」。沒有人告訴我，我自己就是知道。',
    nextNodeId: 'yi1-ch6-18',
  },
  {
    id: 'yi1-ch6-18',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '這就是你的「良知」。每個人心裡都有一個聲音，能夠分辨是非對錯。這個聲音不是學來的，是天生的。',
    nextNodeId: 'yi1-ch6-19',
  },
  {
    id: 'yi1-ch6-19',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '問題是——在日常生活中，你把這個聲音忽略了。你不再相信自己的判斷，只相信別人的判斷。所以你才會覺得「做什麼都不對」。',
    nextNodeId: 'yi1-ch6-20',
  },

  // 五、致良知
  {
    id: 'yi1-ch6-20',
    speaker: 'protagonist',
    text: '那我該怎麼做？',
    nextNodeId: 'yi1-ch6-21',
  },
  {
    id: 'yi1-ch6-21',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '致良知。每次做決定時，不要先問「別人怎麼看」，先問「我怎麼想」。每次感到迷惑時，先閉上眼睛，問問你自己。',
    nextNodeId: 'yi1-ch6-22',
  },
  {
    id: 'yi1-ch6-22',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '蘇軾教你——外境不能否定你的價值。我要告訴你——你的價值，本來就在你裡面。吾性自足，不假外求。',
    effect: 'glow',
    nextNodeId: 'yi1-ch6-choice-3',
  },

  // 🎯 選項3：準備繼續
  {
    id: 'yi1-ch6-choice-3',
    speaker: 'narrator',
    text: '問心的聲音從洞口傳來：「時候差不多了。」',
    choices: [
      {
        id: 'ch6-c3a',
        text: '「我需要時間消化……」',
        nextNodeId: 'yi1-ch6-23a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch6-c3b',
        text: '「我會記住的。下一位是誰？」',
        nextNodeId: 'yi1-ch6-23b',
        arcChange: 5,
        shadowChange: -2,
      },
    ],
  },
  {
    id: 'yi1-ch6-23a',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '不急。這不是一天兩天能學會的。我在這個山洞裡想了很久，才想明白。你也需要時間。',
    nextNodeId: 'yi1-ch6-24',
  },
  {
    id: 'yi1-ch6-23b',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '好，你有求知的心。下一位會教你另一件事。',
    nextNodeId: 'yi1-ch6-24',
  },

  // 六、預告武則天
  {
    id: 'yi1-ch6-24',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '她會教你——打破那些別人給你的框架。一個讓全天下都說她「不應該」，但她偏偏做到了的人。',
    nextNodeId: 'yi1-ch6-25',
  },
  {
    id: 'yi1-ch6-25',
    speaker: 'protagonist',
    text: '武則天？',
    nextNodeId: 'yi1-ch6-26',
  },
  {
    id: 'yi1-ch6-26',
    speaker: 'wangyangming',
    speakerName: '王陽明',
    text: '去吧。向內看，不要向外找。相信你的良知，它不會錯。',
    bgImage: 'ch6_farewell',
    nextNodeId: 'yi1-ch6-end',
  },
  {
    id: 'yi1-ch6-end',
    speaker: 'narrator',
    text: '她走出山洞，回頭看了一眼。王陽明還坐在那張簡陋的木桌前，借著油燈讀書。一個人，在一個山洞裡，找到了全天下都找不到的答案。',
    effect: 'fade-out',
    nextNodeId: 'yi1-ch7-intro',
  },
];
