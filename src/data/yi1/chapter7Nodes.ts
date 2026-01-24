import type { DialogueNode } from '@/stores/gameStore';

export const chapter7Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-ch7-intro',
    speaker: 'narrator',
    text: '「他們說我不該坐這個位子。我說，位子不會說話，只有人會。」',
    effect: 'glow',
    nextNodeId: 'yi1-ch7-1',
  },

  // 一、鳳凰迴廊
  {
    id: 'yi1-ch7-1',
    speaker: 'narrator',
    text: '這條迴廊和之前的不一樣。牆上掛著絹帛的畫軸，畫的都是女子——彈琴的、讀書的、騎馬的、揮劍的。每一幅畫裡的女子，眼神都很篤定。',
    bgImage: 'ch7_gallery',
    nextNodeId: 'yi1-ch7-2',
  },
  {
    id: 'yi1-ch7-2',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '是她自己畫的。她說，歷史上的女子畫像都是男人畫的。她想讓後人看看，女子眼中的女子，是什麼樣子。',
    nextNodeId: 'yi1-ch7-3',
  },
  {
    id: 'yi1-ch7-3',
    speaker: 'narrator',
    text: '迴廊盡頭是一扇巨大的朱紅色門，門上刻著一隻展翅欲飛的鳳凰。',
    nextNodeId: 'yi1-ch7-4',
  },
  {
    id: 'yi1-ch7-4',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '進去之前提醒你——她的脾氣不太好。她最討厭唯唯諾諾、不敢表達自己的人。',
    nextNodeId: 'yi1-ch7-5',
  },

  // 二、見到武則天
  {
    id: 'yi1-ch7-5',
    speaker: 'narrator',
    text: '大殿沉穩大氣。黑色的柱子，紅色的地毯，殿中央有一張長案。案後坐著一個五十多歲的女人，眼神銳利得像刀。沒有皇冠，沒有鳳袍，但她往那裡一坐，整個大殿的空氣都變得沉重了。',
    bgImage: 'ch7_wuzetian_throne',
    nextNodeId: 'yi1-ch7-6',
  },
  {
    id: 'yi1-ch7-6',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '來了？坐。問心說你有「習得性無助」，什麼症狀？',
    nextNodeId: 'yi1-ch7-choice-1',
  },

  // 🎯 選項1：如何回應武則天
  {
    id: 'yi1-ch7-choice-1',
    speaker: 'narrator',
    text: '她不知道該怎麼回答這麼直接的問題。',
    choices: [
      {
        id: 'ch7-c1a',
        text: '「我……我覺得自己做什麼都不對。」',
        nextNodeId: 'yi1-ch7-7a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch7-c1b',
        text: '「無論我怎麼努力，都達不到別人的期望。」',
        nextNodeId: 'yi1-ch7-7b',
        arcChange: 0,
        shadowChange: 3,
      },
    ],
  },
  {
    id: 'yi1-ch7-7a',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '什麼叫「做什麼都不對」？誰說的不對？',
    nextNodeId: 'yi1-ch7-8',
  },
  {
    id: 'yi1-ch7-7b',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '別人的期望？誰的別人？是父母？老闆？還是整個社會？',
    nextNodeId: 'yi1-ch7-8',
  },

  // 三、資格的問題
  {
    id: 'yi1-ch7-8',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '那你想要的樣子呢？',
    nextNodeId: 'yi1-ch7-9',
  },
  {
    id: 'yi1-ch7-9',
    speaker: 'narrator',
    text: '她張了張嘴，說不出話來。她這輩子都在想「別人要我變成什麼樣子」，從來沒想過「我自己想變成什麼樣子」。',
    nextNodeId: 'yi1-ch7-10',
  },
  {
    id: 'yi1-ch7-10',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '說不出來？正常。你們從小被教導要聽話、要乖、要符合期望。但從來沒有人教過你們——什麼是「好的你自己」。',
    nextNodeId: 'yi1-ch7-11',
  },

  // 四、武則天的故事
  {
    id: 'yi1-ch7-11',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '你知道我這一生，聽過最多的話是什麼嗎？「你不應該。」',
    bgImage: 'ch7_wuzetian_window',
    nextNodeId: 'yi1-ch7-12',
  },
  {
    id: 'yi1-ch7-12',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '你不應該這麼聰明。你不應該有野心。你不應該干預政事。你不應該稱帝。你不應該坐在那個位子上。',
    nextNodeId: 'yi1-ch7-13',
  },
  {
    id: 'yi1-ch7-13',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '你知道我說過最多的話是什麼嗎？「為什麼不應該？」',
    effect: 'glow',
    nextNodeId: 'yi1-ch7-14',
  },
  {
    id: 'yi1-ch7-14',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '他們說女人不能當皇帝，自古以來都沒有。我說，自古以來沒有，不代表以後也不能有。他們說這是祖宗的規矩。我說，祖宗定規矩的時候，問過我嗎？',
    nextNodeId: 'yi1-ch7-15',
  },
  {
    id: 'yi1-ch7-15',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '規矩是人定的。人定的東西，人就可以改。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '規矩是人定的',
      subtitle: '——武則天',
      theme: 'crimson',
    },
    nextNodeId: 'yi1-ch7-choice-2',
  },

  // 🎯 選項2：對武則天觀點的反應
  {
    id: 'yi1-ch7-choice-2',
    speaker: 'narrator',
    text: '她鼓起勇氣開口。',
    choices: [
      {
        id: 'ch7-c2a',
        text: '「但打破規矩是有代價的吧？你當皇帝，殺了很多人……」',
        nextNodeId: 'yi1-ch7-16a',
        arcChange: 5,
        shadowChange: 0,
      },
      {
        id: 'ch7-c2b',
        text: '「可是……有些事情確實需要資格吧？」',
        nextNodeId: 'yi1-ch7-16b',
        arcChange: 0,
        shadowChange: 2,
      },
    ],
  },
  {
    id: 'yi1-ch7-16a',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '你說得對。我殺了很多人。我不後悔，但我也不會說那些是對的。我只是做了我當時認為必須做的事。但這不是我想教你的。',
    nextNodeId: 'yi1-ch7-17',
  },
  {
    id: 'yi1-ch7-16b',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '那是「能力」，不是「資格」。能力是你能不能做這件事。資格是你「配不配」做這件事——資格是別人給你的標籤。',
    nextNodeId: 'yi1-ch7-17',
  },

  // 五、核心教導
  {
    id: 'yi1-ch7-17',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '我想教你的是——不要讓別人定義你的「資格」。',
    nextNodeId: 'yi1-ch7-18',
  },
  {
    id: 'yi1-ch7-18',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '你不是「做什麼都不對」。你是「不敢相信自己是對的」。因為別人說不對，你就覺得不對。你把「對不對」的定義權，交給了別人。',
    nextNodeId: 'yi1-ch7-19',
  },
  {
    id: 'yi1-ch7-19',
    speaker: 'narrator',
    text: '她的眼淚流了下來。因為武則天說得太對了。她這輩子，從來不敢相信自己是對的。',
    nextNodeId: 'yi1-ch7-20',
  },
  {
    id: 'yi1-ch7-20',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '你把評價自己的權力，拱手讓給了全世界。',
    effect: 'glow',
    nextNodeId: 'yi1-ch7-21',
  },

  // 六、無字碑
  {
    id: 'yi1-ch7-21',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '你知道我死後，墓前立了一塊什麼碑嗎？無字碑。一塊沒有字的碑。',
    bgImage: 'ch7_stele',
    nextNodeId: 'yi1-ch7-22',
  },
  {
    id: 'yi1-ch7-22',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '因為我不想讓別人定義我。我是誰——只有我自己知道。我不需要他們的認可，也不需要向他們解釋。我只需要——做我自己。',
    nextNodeId: 'yi1-ch7-choice-3',
  },

  // 🎯 選項3：接受教導
  {
    id: 'yi1-ch7-choice-3',
    speaker: 'narrator',
    text: '她接過武則天遞來的深紫色手帕，擦了擦眼淚。',
    choices: [
      {
        id: 'ch7-c3a',
        text: '「但如果我自己也不知道自己是什麼樣的人呢？」',
        nextNodeId: 'yi1-ch7-23a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch7-c3b',
        text: '「我會試著問自己『誰定的規矩』。」',
        nextNodeId: 'yi1-ch7-23b',
        arcChange: 8,
        shadowChange: -3,
      },
    ],
  },
  {
    id: 'yi1-ch7-23a',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '那就去找出來。這就是你來元壹境的原因。',
    nextNodeId: 'yi1-ch7-24',
  },
  {
    id: 'yi1-ch7-23b',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '很好。質疑是覺醒的開始。',
    nextNodeId: 'yi1-ch7-24',
  },

  // 七、預告司馬遷
  {
    id: 'yi1-ch7-24',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '記住——他們說你不應該，你就問：誰定的規矩？他們說你沒資格，你就問：誰給的標準？他們說你不對，你就問：憑什麼你說了算？',
    nextNodeId: 'yi1-ch7-25',
  },
  {
    id: 'yi1-ch7-25',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '別叫我陛下。叫我則天吧——「則天大聖皇帝」，我想效法天道，公正無私。我不知道我有沒有做到，但那是我想成為的樣子。',
    bgImage: 'ch7_farewell',
    nextNodeId: 'yi1-ch7-26',
  },
  {
    id: 'yi1-ch7-26',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '下一位是一個把恥辱轉化為使命的人，一個被世界認定為「殘缺」，卻活出了最完整人生的人。',
    nextNodeId: 'yi1-ch7-27',
  },
  {
    id: 'yi1-ch7-27',
    speaker: 'protagonist',
    text: '司馬遷？',
    nextNodeId: 'yi1-ch7-end',
  },
  {
    id: 'yi1-ch7-end',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '他會教你——「殘缺」不等於「不完整」。',
    effect: 'fade-out',
    nextNodeId: 'yi1-ch8-intro',
  },
];
