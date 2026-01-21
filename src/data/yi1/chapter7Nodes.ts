// 第七章｜誰定的規矩 - 武則天
import type { DialogueNode } from '@/stores/gameStore';

export const chapter7Nodes: DialogueNode[] = [
  // 開場：女子畫廊
  {
    id: 'chapter7-1',
    speaker: 'narrator',
    text: '問心帶她穿過一條長長的迴廊。牆上掛著絹帛的畫軸，畫的都是女子——有彈琴的，有讀書的，有騎馬的，有揮劍的。',
    nextNodeId: 'chapter7-2',
  },
  {
    id: 'chapter7-2',
    speaker: 'narrator',
    text: '每一幅畫裡的女子，眼神都很亮。不是那種柔順的亮，是那種——篤定。',
    nextNodeId: 'chapter7-3',
  },
  {
    id: 'chapter7-3',
    speaker: 'protagonist',
    text: '這些畫是誰畫的？',
    nextNodeId: 'chapter7-4',
  },
  {
    id: 'chapter7-4',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '是她自己畫的。她說，歷史上的女子畫像，都是男人畫的。她想讓後人看看，女子眼中的女子，是什麼樣子。',
    nextNodeId: 'chapter7-5',
  },
  {
    id: 'chapter7-5',
    speaker: 'narrator',
    text: '她停下腳步，仔細看著其中一幅——一個穿著鎧甲的女子，騎在馬上，臉上帶著一種「我知道我在做什麼」的笑。',
    nextNodeId: 'chapter7-6',
  },
  {
    id: 'chapter7-6',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '這是花木蘭。她很喜歡花木蘭的故事。因為花木蘭證明了一件事——女子能做的，從來不比男子少。少的只是機會。',
    nextNodeId: 'chapter7-7',
  },

  // 進入大殿
  {
    id: 'chapter7-7',
    speaker: 'narrator',
    text: '迴廊的盡頭是一扇巨大的朱紅色門，門上刻著一隻展翅欲飛的鳳凰。',
    nextNodeId: 'chapter7-8',
  },
  {
    id: 'chapter7-8',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '進去之前，我要提醒你一件事。她的脾氣……不太好。她最討厭唯唯諾諾、不敢表達自己的人。',
    nextNodeId: 'chapter7-9',
  },
  {
    id: 'chapter7-9',
    speaker: 'narrator',
    text: '她想說「我會盡量」，但話到嘴邊又嚥了回去。因為她突然意識到——她這輩子，不就是一個「唯唯諾諾、不敢表達自己」的人嗎？',
    nextNodeId: 'chapter7-10',
  },
  {
    id: 'chapter7-10',
    speaker: 'narrator',
    text: '門後是一座大殿。黑色的柱子，紅色的地毯。案後坐著一個五十多歲的女人，眼神銳利得像刀。',
    nextNodeId: 'chapter7-11',
  },
  {
    id: 'chapter7-11',
    speaker: 'narrator',
    text: '沒有皇冠，沒有鳳袍，沒有任何「皇帝」應該有的東西。但她往那裡一坐，整個大殿的空氣都變得沉重了。',
    nextNodeId: 'chapter7-12',
  },
  {
    id: 'chapter7-12',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '來了？別愣著，坐。',
    nextNodeId: 'chapter7-13',
  },
  {
    id: 'chapter7-13',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '問心說你有「習得性無助」，什麼症狀？',
    nextNodeId: 'chapter7-14',
  },
  {
    id: 'chapter7-14',
    speaker: 'protagonist',
    text: '我……我覺得自己做什麼都不對。無論我怎麼努力，都達不到別人的期望。',
    nextNodeId: 'chapter7-15',
  },
  {
    id: 'chapter7-15',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '別人想要的樣子？誰的別人？是父母想要的？老闆想要的？還是整個社會想要的？',
    nextNodeId: 'chapter7-16',
  },
  {
    id: 'chapter7-16',
    speaker: 'protagonist',
    text: '都……都有吧。',
    nextNodeId: 'chapter7-17',
  },
  {
    id: 'chapter7-17',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '那你想要的樣子呢？',
    nextNodeId: 'chapter7-18',
  },
  {
    id: 'chapter7-18',
    speaker: 'narrator',
    text: '她張了張嘴，說不出話來。她從來沒有想過這個問題。她這輩子都在想「別人要我變成什麼樣子」，從來沒有想過「我自己想變成什麼樣子」。',
    nextNodeId: 'chapter7-19',
  },
  {
    id: 'chapter7-19',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '說不出來？正常。你們這個時代的人，從小就被教導——要聽話、要乖、要符合期望。但從來沒有人教過你們——什麼是「好的你自己」。',
    nextNodeId: 'chapter7-20',
  },

  // 武則天的故事
  {
    id: 'chapter7-20',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '你知道我這一生，聽過最多的話是什麼嗎？',
    nextNodeId: 'chapter7-21',
  },
  {
    id: 'chapter7-21',
    speaker: 'protagonist',
    text: '什麼？',
    nextNodeId: 'chapter7-22',
  },
  {
    id: 'chapter7-22',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '「**你不應該。**」',
    nextNodeId: 'chapter7-23',
  },
  {
    id: 'chapter7-23',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '你不應該這麼聰明，女子應該溫順。你不應該讀那些書，女子應該學女紅。你不應該有野心，女子應該相夫教子。',
    nextNodeId: 'chapter7-24',
  },
  {
    id: 'chapter7-24',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '你不應該進宮。你不應該受寵。你不應該干預政事。你不應該稱帝。你不應該坐在那個位子上。',
    nextNodeId: 'chapter7-25',
  },
  {
    id: 'chapter7-25',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '你知道我這一生，說過最多的話是什麼嗎？——「**為什麼不應該？**」',
    nextNodeId: 'chapter7-26',
  },

  // 資格論
  {
    id: 'chapter7-26',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '他們說女人不能當皇帝，自古以來都沒有。我說，自古以來沒有，不代表以後也不能有。',
    nextNodeId: 'chapter7-27',
  },
  {
    id: 'chapter7-27',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '他們說這是祖宗的規矩。我說，祖宗定規矩的時候，問過我嗎？規矩是人定的。人定的東西，人就可以改。',
    nextNodeId: 'chapter7-28',
  },
  {
    id: 'chapter7-28',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '你知道「資格」這個詞是怎麼來的嗎？**「資格」是別人用來限制你的工具。**',
    nextNodeId: 'chapter7-29',
  },
  {
    id: 'chapter7-29',
    speaker: 'protagonist',
    text: '但有些事情確實需要資格吧？比如醫生需要執照，律師需要證書……',
    nextNodeId: 'chapter7-30',
  },
  {
    id: 'chapter7-30',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '那是**能力**，不是資格。能力是你能不能做這件事，資格是你「**配不配**」做這件事。能力可以學、可以證明。但資格——是別人給你的標籤。',
    nextNodeId: 'chapter7-31',
  },

  // 第一個選擇
  {
    id: 'chapter7-31',
    speaker: 'narrator',
    text: '武則天的話讓她開始思考：那些限制她的，到底是「能力不足」還是「資格不夠」？',
    choices: [
      {
        id: 'chapter7-choice-1a',
        text: '承認自己常被「資格」困住',
        arcChange: 5,
        shadowChange: -3,
        nextNodeId: 'chapter7-32a',
      },
      {
        id: 'chapter7-choice-1b',
        text: '覺得有些資格確實必要',
        arcChange: 2,
        shadowChange: 0,
        nextNodeId: 'chapter7-32b',
      },
    ],
  },
  {
    id: 'chapter7-32a',
    speaker: 'protagonist',
    text: '我好像一直被「資格」困住……覺得自己不配做這個、不配追求那個。',
    nextNodeId: 'chapter7-33',
  },
  {
    id: 'chapter7-32b',
    speaker: 'protagonist',
    text: '可是有些情況下，資格是必要的吧？不是所有規矩都該打破……',
    nextNodeId: 'chapter7-33',
  },
  {
    id: 'chapter7-33',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '花木蘭從軍十二年，沒有人發現她是女人。因為她必須假扮成男人。她的能力從來沒問題，但那個時代說，女人「沒有資格」當兵。',
    nextNodeId: 'chapter7-34',
  },
  {
    id: 'chapter7-34',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '花木蘭的問題從來不是「能不能」，而是「配不配」。她明明能，但別人說她不配。所以她只能假扮。',
    nextNodeId: 'chapter7-35',
  },
  {
    id: 'chapter7-35',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '而我——我不想假扮。',
    nextNodeId: 'chapter7-36',
  },

  // 關於代價
  {
    id: 'chapter7-36',
    speaker: 'protagonist',
    text: '但是……打破規矩是有代價的吧？你當皇帝，殺了很多人……',
    nextNodeId: 'chapter7-37',
  },
  {
    id: 'chapter7-37',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '你說得對。我殺了反對我的人、威脅我的人，甚至殺了我自己的兒子。',
    nextNodeId: 'chapter7-38',
  },
  {
    id: 'chapter7-38',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '我不後悔，但我也不會說那些是對的。我只是做了我當時認為必須做的事。在那個時代、那個位子上，如果我不殺他們，他們就會殺我。這不是對錯的問題，這是生存的問題。',
    nextNodeId: 'chapter7-39',
  },
  {
    id: 'chapter7-39',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '但這不是我想教你的。我不是要教你殺人，也不是要教你爭權奪利。我想教你——不要讓別人定義你的「資格」。',
    nextNodeId: 'chapter7-40',
  },

  // 無字碑
  {
    id: 'chapter7-40',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '你知道我死後，墓前立了一塊什麼碑嗎？',
    nextNodeId: 'chapter7-41',
  },
  {
    id: 'chapter7-41',
    speaker: 'protagonist',
    text: '無字碑。',
    nextNodeId: 'chapter7-42',
  },
  {
    id: 'chapter7-42',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '對，一塊沒有字的碑。因為我不想讓別人定義我。我活著的時候，他們說我是妖后。我死了以後，他們可能說我是明君，也可能說我是暴君。',
    nextNodeId: 'chapter7-43',
  },
  {
    id: 'chapter7-43',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '無論他們說什麼，都是他們的看法。但我是誰——只有我自己知道。我不需要他們的認可。我也不需要向他們解釋。我只需要——做我自己。',
    nextNodeId: 'chapter7-44',
  },

  // 核心教導
  {
    id: 'chapter7-44',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '回到你的問題。你說你「做什麼都不對」。但你有沒有想過——誰說的「不對」？',
    nextNodeId: 'chapter7-45',
  },
  {
    id: 'chapter7-45',
    speaker: 'protagonist',
    text: '是媽媽說的、老闆說的、前男友說的……都有。',
    nextNodeId: 'chapter7-46',
  },
  {
    id: 'chapter7-46',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '但你自己說了嗎？你有沒有問過自己——我覺得這樣對不對？',
    nextNodeId: 'chapter7-47',
  },
  {
    id: 'chapter7-47',
    speaker: 'protagonist',
    text: '我沒有……因為我覺得我沒有資格。別人比我厲害，他們說我不對，應該就是不對吧。',
    nextNodeId: 'chapter7-48',
  },
  {
    id: 'chapter7-48',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '**你把評價自己的權力，拱手讓給了全世界。**',
    nextNodeId: 'chapter7-49',
  },
  {
    id: 'chapter7-49',
    speaker: 'narrator',
    text: '這句話讓她的眼淚一下子流了下來。',
    nextNodeId: 'chapter7-50',
  },
  {
    id: 'chapter7-50',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '這就是你的問題。你不是「做什麼都不對」。你是「不敢相信自己是對的」。因為別人說不對，你就覺得不對。因為別人不認可，你就覺得自己沒有價值。',
    nextNodeId: 'chapter7-51',
  },

  // 第二個選擇
  {
    id: 'chapter7-51',
    speaker: 'narrator',
    text: '武則天說得太對了。她這輩子，從來不敢相信自己是對的。每次她覺得自己做得不錯的時候，總會有一個聲音跳出來否定她。',
    choices: [
      {
        id: 'chapter7-choice-2a',
        text: '承認那個否定的聲音變成了自己的',
        arcChange: 6,
        shadowChange: -4,
        nextNodeId: 'chapter7-52a',
      },
      {
        id: 'chapter7-choice-2b',
        text: '試著為自己辯護',
        arcChange: 3,
        shadowChange: -1,
        nextNodeId: 'chapter7-52b',
      },
    ],
  },
  {
    id: 'chapter7-52a',
    speaker: 'protagonist',
    text: '那個聲音有時候是媽媽的，有時候是老師的……久而久之，變成了我自己的。我不再需要別人來否定我，我自己就會否定自己。',
    nextNodeId: 'chapter7-53',
  },
  {
    id: 'chapter7-52b',
    speaker: 'protagonist',
    text: '可是……也不是完全沒有相信過自己吧？只是每次相信，就會被打擊……',
    nextNodeId: 'chapter7-53',
  },

  // 分辨批評與偏見
  {
    id: 'chapter7-53',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '我送你一句話，當作見面禮。',
    nextNodeId: 'chapter7-54',
  },
  {
    id: 'chapter7-54',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '他們說你不應該，你就問——誰定的規矩？他們說你沒資格，你就問——誰給的標準？他們說你不對，你就問——憑什麼你說了算？',
    nextNodeId: 'chapter7-55',
  },
  {
    id: 'chapter7-55',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '然後你會發現，那些「規矩」、「標準」、「對錯」，都是人定的。人定的東西，就不是天理。不是天理的東西，就可以質疑。可以質疑的東西，就不需要盲目服從。',
    nextNodeId: 'chapter7-56',
  },
  {
    id: 'chapter7-56',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '但我不是要你變成一個「誰的話都不聽」的人。我要你學會——分辨。分辨哪些話是有道理的，哪些話只是偏見。',
    nextNodeId: 'chapter7-57',
  },
  {
    id: 'chapter7-57',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '有人說「你的報告數據有誤」，這是有道理的，你應該去檢查。但有人說「你不適合做這個，因為你是女生」，這是偏見，你不需要理會。',
    nextNodeId: 'chapter7-58',
  },
  {
    id: 'chapter7-58',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '區別在於——有道理的批評是針對事情的，偏見是針對人的。偏見可以不理會，批評可以用來改進。',
    nextNodeId: 'chapter7-59',
  },

  // 告別
  {
    id: 'chapter7-59',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '時候到了。',
    nextNodeId: 'chapter7-60',
  },
  {
    id: 'chapter7-60',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '去吧。記住我說的話——他們說我不該坐這個位子。我說，位子不會說話，只有人會。而人的話——不是天理。',
    nextNodeId: 'chapter7-61',
  },
  {
    id: 'chapter7-61',
    speaker: 'protagonist',
    text: '謝謝你，陛下。',
    nextNodeId: 'chapter7-62',
  },
  {
    id: 'chapter7-62',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '別叫我陛下。在這裡，我只是一個歸者。和你一樣，曾經迷失過，後來找到了路的人。叫我則天吧——那是我給自己取的名字。',
    nextNodeId: 'chapter7-63',
  },
  {
    id: 'chapter7-63',
    speaker: 'narrator',
    text: '她跟著問心走出大殿，回頭看見武則天還站在那幅花木蘭的畫前，背影挺得筆直。那個背影讓她想起了一個詞——孤獨。',
    nextNodeId: 'chapter7-64',
  },
  {
    id: 'chapter7-64',
    speaker: 'narrator',
    text: '一個打破了所有規矩的人，註定是孤獨的。因為她走的路，沒有人走過。但她還是走下去了。不是因為不孤獨，而是因為——她知道自己是誰。',
    nextNodeId: 'chapter7-65',
  },
  {
    id: 'chapter7-65',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '下一個是一個把恥辱轉化為使命的人。一個被世界認定為「殘缺」，但活出了最完整人生的人——司馬遷。他會教你，「殘缺」不等於「不完整」。',
    nextNodeId: 'chapter8-1',
  },
];
