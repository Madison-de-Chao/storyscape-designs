import type { DialogueNode } from '@/stores/gameStore';

export const chapter12Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-ch12-intro',
    speaker: 'narrator',
    text: '「我輸過太多次了，才知道怎麼贏。」',
    effect: 'glow',
    nextNodeId: 'yi1-ch12-1',
  },

  // 一、林肯的小屋
  {
    id: 'yi1-ch12-1',
    speaker: 'narrator',
    text: '她聽見了劈柴的聲音。砰。砰。砰。有節奏的，穩定的，像是一種古老的打擊樂。',
    bgImage: 'ch12_log_cabin',
    nextNodeId: 'yi1-ch12-2',
  },
  {
    id: 'yi1-ch12-2',
    speaker: 'narrator',
    text: '小屋前面，有一個非常高的人正在劈柴。他彎著腰，舉起斧頭，動作熟練得像是做過一萬次。那張臉很難形容——顴骨很高，眼窩很深，下巴很長。但那雙眼睛，像是見過太多事情，承受過太多，卻還是選擇繼續站著。',
    bgImage: 'ch12_lincoln_chopping',
    nextNodeId: 'yi1-ch12-3',
  },
  {
    id: 'yi1-ch12-3',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '來了？等一下，讓我把這塊劈完。',
    nextNodeId: 'yi1-ch12-4',
  },
  {
    id: 'yi1-ch12-4',
    speaker: 'protagonist',
    text: '你比我想像的高很多。',
    nextNodeId: 'yi1-ch12-5',
  },
  {
    id: 'yi1-ch12-5',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '六呎四吋，在我那個年代基本上是個異類。有人說我是他見過最醜的人。我說，那你應該多出門走走。',
    nextNodeId: 'yi1-ch12-choice-1',
  },

  // 🎯 選項1：對林肯的反應
  {
    id: 'yi1-ch12-choice-1',
    speaker: 'narrator',
    text: '她愣了一下，然後笑了。',
    choices: [
      {
        id: 'ch12-c1a',
        text: '「你在開自己的玩笑？」',
        nextNodeId: 'yi1-ch12-6a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch12-c1b',
        text: '「你失敗了很多次，為什麼還要繼續？」',
        nextNodeId: 'yi1-ch12-6b',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch12-6a',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '不開自己的玩笑，要開誰的？自嘲是最安全的幽默。當你能夠笑你自己的弱點的時候，那個弱點就傷不了你了。',
    nextNodeId: 'yi1-ch12-7',
  },
  {
    id: 'yi1-ch12-6b',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '因為我沒有別的選擇。我恨奴隸制度，只有從政才能改變法律。如果我放棄了，那些奴隸怎麼辦？他們只有我這種失敗了十幾次還不肯放棄的笨蛋。',
    nextNodeId: 'yi1-ch12-7',
  },

  // 二、失敗履歷
  {
    id: 'yi1-ch12-7',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '我給你看一個東西——我的失敗履歷。',
    nextNodeId: 'yi1-ch12-8',
  },
  {
    id: 'yi1-ch12-8',
    speaker: 'narrator',
    text: '他遞給她一張紙，上面密密麻麻寫著：1831年生意失敗、1832年競選落選、1833年生意再次失敗、1835年未婚妻去世、1836年精神崩潰……一直到1860年——競選總統，當選。',
    bgImage: 'ch12_failure_resume',
    nextNodeId: 'yi1-ch12-9',
  },
  {
    id: 'yi1-ch12-9',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '我花了將近三十年，失敗了十幾次，才終於當上總統。我把這些寫下來，是怕忘記——我是怎麼走過來的。如果我忘了這些，我就會變成另一個人。一個自以為了不起的人。那種人做不好總統。',
    nextNodeId: 'yi1-ch12-10',
  },

  // 三、失敗是老師
  {
    id: 'yi1-ch12-10',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '失敗不是終點，失敗是老師。1832年我第一次競選落選，因為我不會演講。然後我就去學演講。練了四年，1836年再去選，還是落選了。',
    nextNodeId: 'yi1-ch12-11',
  },
  {
    id: 'yi1-ch12-11',
    speaker: 'protagonist',
    text: '練了四年還是落選？',
    nextNodeId: 'yi1-ch12-12',
  },
  {
    id: 'yi1-ch12-12',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '因為我學會了演講，但我不會跟人打交道。所以我又去學。每一次失敗，我都學到一些東西。到最後當上總統的時候，沒有什麼能嚇到我了——因為我之前已經失敗過太多次了。',
    effect: 'glow',
    nextNodeId: 'yi1-ch12-choice-2',
  },

  // 🎯 選項2：關於逃避
  {
    id: 'yi1-ch12-choice-2',
    speaker: 'protagonist',
    text: '但有些失敗好像學不到什麼東西？比如我在公司被老闆罵，我能學到什麼？學到我很爛？',
    choices: [
      {
        id: 'ch12-c2a',
        text: '「我問了也沒用，他可能也說不清楚。」',
        nextNodeId: 'yi1-ch12-13a',
        arcChange: 0,
        shadowChange: 3,
      },
      {
        id: 'ch12-c2b',
        text: '「我應該問他『你要的是什麼』嗎？」',
        nextNodeId: 'yi1-ch12-13b',
        arcChange: 8,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch12-13a',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '你問過他嗎？你連問都沒問，就已經在腦子裡替他回答了。你替他決定了「他一定說不清楚」，然後用這個你自己想出來的答案，來證明「問了也沒用」。這樣你就可以不用問了。',
    nextNodeId: 'yi1-ch12-14',
  },
  {
    id: 'yi1-ch12-13b',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '對。如果他說不清楚，那正好是你的機會。你可以說「老闆，我有一個想法，你要不要聽聽看？」他說不清楚，正好代表這個空間是空的，你可以填進去。',
    nextNodeId: 'yi1-ch12-14',
  },

  // 四、不要逃避
  {
    id: 'yi1-ch12-14',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '你不是不會做，你是不敢做。因為做了可能會失敗，失敗了就要負責。所以你寧願什麼都不做，讓別人做決定，然後失敗了就怪別人。這樣你就永遠不用面對「我錯了」這三個字。',
    bgImage: 'ch12_lincoln_serious',
    nextNodeId: 'yi1-ch12-15',
  },
  {
    id: 'yi1-ch12-15',
    speaker: 'narrator',
    text: '她的眼淚流了下來。因為林肯說得太對了。',
    nextNodeId: 'yi1-ch12-16',
  },
  {
    id: 'yi1-ch12-16',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '你知道代價是什麼嗎？你永遠不會成功。因為成功需要你做決定、負責、承擔「萬一錯了」的風險。如果你不願意承擔這個風險，你就只能永遠待在原地，讓別人決定你的人生。然後一輩子告訴自己——都是別人的錯。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '失敗是老師，不是終點',
      subtitle: '——林肯',
      theme: 'wood',
    },
    nextNodeId: 'yi1-ch12-17',
  },

  // 五、精神崩潰
  {
    id: 'yi1-ch12-17',
    speaker: 'protagonist',
    text: '你的失敗履歷上有一條「1836年——精神崩潰」。你怎麼處理那個的？',
    nextNodeId: 'yi1-ch12-18',
  },
  {
    id: 'yi1-ch12-18',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '1835年，我的未婚妻安妮去世了。那是我這輩子第一次愛上一個人。她死後，我有好幾個月什麼都不能做。我的朋友怕我會傷害自己，把所有刀子和繩子都藏起來了。',
    bgImage: 'ch12_lincoln_grief',
    nextNodeId: 'yi1-ch12-19',
  },
  {
    id: 'yi1-ch12-19',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '那段時間，我真的想過不要活了。然後有一天早上，太陽很大，曬在身上很暖。我突然想——安妮不在了，但太陽還在。如果我死了，我想做的事就沒有人做了。安妮不會希望我死。所以我活下來了。',
    nextNodeId: 'yi1-ch12-20',
  },
  {
    id: 'yi1-ch12-20',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '有些事情，不是有方法的。你只能一天一天過，一步一步走。有一天你回頭看，發現你已經走了很遠了。但你不記得是怎麼走過來的。',
    nextNodeId: 'yi1-ch12-choice-3',
  },

  // 🎯 選項3：關於「伊」
  {
    id: 'yi1-ch12-choice-3',
    speaker: 'protagonist',
    text: '伊不見了。我的陰影，從我進入元壹境開始就越來越少出現。這代表我不需要她了吧？',
    choices: [
      {
        id: 'ch12-c3a',
        text: '「我已經開始接受自己了，所以她不需要存在了。」',
        nextNodeId: 'yi1-ch12-21a',
        arcChange: 0,
        shadowChange: -5,
      },
      {
        id: 'ch12-c3b',
        text: '「你覺得她真的消失了嗎？」',
        nextNodeId: 'yi1-ch12-21b',
        arcChange: 8,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch12-21a',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '也許吧。但我知道一件事——有些東西，你以為它消失了，其實它只是躲起來了。我的憂鬱，有時候會消失幾個月，我以為我好了。然後某一天，它突然回來，比之前更嚴重。',
    nextNodeId: 'yi1-ch12-22',
  },
  {
    id: 'yi1-ch12-21b',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '你很謹慎，這是好事。有些東西不會真的消失。你只能學會跟它共處。我的憂鬱，有時候會消失幾個月，然後突然回來。它沒有消失，它只是在等。',
    nextNodeId: 'yi1-ch12-22',
  },

  // 六、你比你以為的強
  {
    id: 'yi1-ch12-22',
    speaker: 'protagonist',
    text: '所有歸者教我的，好像都是同一件事——不要被外在的東西打倒？',
    nextNodeId: 'yi1-ch12-23',
  },
  {
    id: 'yi1-ch12-23',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '我會換一個說法——這些話都是在說，你比你以為的強。你以為失敗會打倒你，但它只是讓你更強。你以為你是受害者，但你也可以是創造者。問題只是——你相不相信。',
    effect: 'glow',
    nextNodeId: 'yi1-ch12-24',
  },

  // 七、告別與預告
  {
    id: 'yi1-ch12-24',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '記住我說的話——失敗是老師，每一次失敗都是累積。你比你以為的強。不要逃避，不要把責任推給別人。你是你自己人生的主人。',
    bgImage: 'ch12_farewell',
    nextNodeId: 'yi1-ch12-25',
  },
  {
    id: 'yi1-ch12-25',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '還有——學會笑，尤其是笑你自己。當你能夠笑你自己的時候，沒有什麼能傷害你。叫我亞伯，朋友都這麼叫我。',
    nextNodeId: 'yi1-ch12-26',
  },
  {
    id: 'yi1-ch12-26',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '下一位是賈伯斯。一個跟林肯一樣被自己創立的東西趕出去過的人。他會告訴你——被拒絕不是終點，被拒絕是禮物。',
    nextNodeId: 'yi1-ch12-27',
  },
  {
    id: 'yi1-ch12-27',
    speaker: 'narrator',
    text: '她跟著問心離開小屋。林肯又拿起了斧頭，開始劈柴。砰。砰。砰。也許有些事情，不管你走了多遠，都不會忘記。那是你的根。',
    nextNodeId: 'yi1-ch12-28',
  },
  {
    id: 'yi1-ch12-28',
    speaker: 'narrator',
    text: '那件素絹衫上的顏色又多了一種——林肯的原木色。九種顏色了。她低頭看著自己的衣服，突然覺得——這件衣服開始像一件真正的衣服了。它開始有顏色、有故事了。它開始——像她了。',
    effect: 'fade-out',
    nextNodeId: 'yi1-ch13-intro',
  },
];
