import type { DialogueNode } from '@/stores/gameStore';

export const chapter13Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-ch13-intro',
    speaker: 'narrator',
    text: '「被拒絕不是世界末日。被拒絕是世界重新開始。」',
    effect: 'glow',
    nextNodeId: 'yi1-ch13-1',
  },

  // 一、問心的警告
  {
    id: 'yi1-ch13-1',
    speaker: 'narrator',
    text: '她低頭看著自己的衣服，數了又數。九種顏色了。她突然有一種奇怪的感覺——像是在收集徽章的遊戲玩家，眼看著快要集滿全套。',
    nextNodeId: 'yi1-ch13-2',
  },
  {
    id: 'yi1-ch13-2',
    speaker: 'protagonist',
    text: '問心，我好像開始懂了。外境不能定義我的價值、答案在心裡、框架可以打破、殘缺不等於不完整、分清「應該」和「想要」、關係中保持自己、放下恨、失敗是老師——怎麼樣？我總結得不錯吧？',
    nextNodeId: 'yi1-ch13-3',
  },
  {
    id: 'yi1-ch13-3',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '你把九個歸者的教導，變成了九條公式。好像只要背下來，照著做，就能通關。但這些不是標準答案，這些是方向。',
    nextNodeId: 'yi1-ch13-4',
  },
  {
    id: 'yi1-ch13-4',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '蘇軾的方法對蘇軾有用，不代表對你有用。你不是他們，你是你。這是最危險的時刻——不是你覺得自己什麼都做不好的時候，是你覺得自己什麼都懂了的時候。',
    effect: 'glow',
    nextNodeId: 'yi1-ch13-5',
  },

  // 二、賈伯斯登場
  {
    id: 'yi1-ch13-5',
    speaker: 'narrator',
    text: '眼前是一座純白色的方盒子建築，線條簡潔到極致，像是把所有多餘的裝飾都刪掉了。',
    bgImage: 'ch13_white_building',
    nextNodeId: 'yi1-ch13-6',
  },
  {
    id: 'yi1-ch13-6',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '你就是那個新來的？你的衣服不錯，九種顏色了。我這輩子最會做的事情之一，就是看設計。另一件是惹人討厭。進來吧。',
    bgImage: 'ch13_jobs',
    nextNodeId: 'yi1-ch13-7',
  },
  {
    id: 'yi1-ch13-7',
    speaker: 'narrator',
    text: '裡面幾乎沒有傢俱。唯一的裝飾是牆上的幾張海報——一張是彩虹色的蘋果商標寫著「Think Different」，另一張是報紙頭版：「Apple 董事會驅逐創辦人賈伯斯」。',
    nextNodeId: 'yi1-ch13-8',
  },
  {
    id: 'yi1-ch13-8',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '這張不是廣告，是提醒。提醒我，被拒絕的那一天，其實是我這輩子最好的一天。',
    nextNodeId: 'yi1-ch13-choice-1',
  },

  // 🎯 選項1：對被驅逐的反應
  {
    id: 'yi1-ch13-choice-1',
    speaker: 'protagonist',
    text: '被趕出自己創辦的公司，是最好的一天？',
    choices: [
      {
        id: 'ch13-c1a',
        text: '「那你當時不是覺得被背叛了嗎？」',
        nextNodeId: 'yi1-ch13-9a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch13-c1b',
        text: '「後來發生了什麼讓你改變想法？」',
        nextNodeId: 'yi1-ch13-9b',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch13-9a',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '當時我覺得那是最壞的一天。我恨那些人，覺得自己被背叛了、被否定了、被這個世界拋棄了。我花了三到六個月，每天問「為什麼是我」。然後有一天我想通了——我問錯問題了。',
    nextNodeId: 'yi1-ch13-10',
  },
  {
    id: 'yi1-ch13-9b',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '我花了三到六個月問「為什麼是我」——這是受害者的問題，讓你往後看、找人怪罪。該問的是「現在我可以做什麼」——這讓你往前看、尋找可能性。',
    nextNodeId: 'yi1-ch13-10',
  },

  // 三、被拒絕是信號
  {
    id: 'yi1-ch13-10',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '正向思考是騙自己說「壞事其實是好事」。我說的不是這個。壞事就是壞事，痛苦就是痛苦。但痛苦不是終點，痛苦是一個信號——告訴你某個方向可能需要調整。',
    nextNodeId: 'yi1-ch13-11',
  },
  {
    id: 'yi1-ch13-11',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '我被 Apple 趕出去，表面上是他們不要我了。但更深層的意思是——我太執著於控制一切。我覺得只有我是對的，所有不同意我的人都是錯的。這叫不完整——把「對立面」切掉。',
    bgImage: 'ch13_jobs_thinking',
    nextNodeId: 'yi1-ch13-12',
  },
  {
    id: 'yi1-ch13-12',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '我被趕出去以後，買下皮克斯。在那裡我學會了讓別人做他們擅長的事——其他人不是工具，是夥伴。我還創辦了 NeXT，作為電腦公司失敗了，但它的作業系統後來變成了 macOS 的基礎。',
    nextNodeId: 'yi1-ch13-13',
  },
  {
    id: 'yi1-ch13-13',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '十二年後，Apple 要我回去，他們要的是 NeXT 的技術。那十二年的「失敗」，其實是在為我的回歸做準備。如果我沒有被趕出去，iPhone 不會存在。被拒絕是一個禮物——一個被包裝得很醜的禮物。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '被拒絕是信號，不是定義',
      subtitle: '——賈伯斯',
      theme: 'white',
    },
    nextNodeId: 'yi1-ch13-choice-2',
  },

  // 🎯 選項2：關於被拒絕
  {
    id: 'yi1-ch13-choice-2',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '當你被拒絕的時候，你的第一反應是什麼？',
    choices: [
      {
        id: 'ch13-c2a',
        text: '「覺得自己不夠好。」',
        nextNodeId: 'yi1-ch13-14a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch13-c2b',
        text: '「會想是不是我的問題。」',
        nextNodeId: 'yi1-ch13-14b',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch13-14a',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '這是正常的反應，但這個反應是錯的。被拒絕不代表你不夠好，只代表這個特定的人、在這個特定的時間點、不需要這個特定的東西。這和「夠不夠好」沒關係，和「適不適合」有關係。',
    nextNodeId: 'yi1-ch13-15',
  },
  {
    id: 'yi1-ch13-14b',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '這是好的開始，但別只問自己。也要問——拒絕你的人的標準是對的嗎？為什麼你接受了所有人的批評，卻從來沒有質疑過他們的資格？',
    nextNodeId: 'yi1-ch13-15',
  },

  // 四、沒有標準答案
  {
    id: 'yi1-ch13-15',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '我跟你說這些，不是要你照著做。我被 Apple 趕出去，然後問「現在我可以做什麼」——這是我的做法。但你遇到類似情況，可能需要問別的問題。因為你不是我。',
    nextNodeId: 'yi1-ch13-16',
  },
  {
    id: 'yi1-ch13-16',
    speaker: 'protagonist',
    text: '你跟我說這麼多，然後叫我忘掉？',
    nextNodeId: 'yi1-ch13-17',
  },
  {
    id: 'yi1-ch13-17',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '不是忘掉內容，是忘掉形式。核心是「被拒絕不是終點，是信號」——這個你可以記住。但具體問什麼問題、怎麼調整，你要找到你自己的方式。每個人的問題不一樣，所以答案也不一樣。',
    effect: 'glow',
    nextNodeId: 'yi1-ch13-18',
  },
  {
    id: 'yi1-ch13-18',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '有人會賣給你「成功的秘訣」、「人生的答案」、「三步驟讓你變得完整」。那些都是屁話。如果有標準答案，這個世界就不會有這麼多痛苦了。',
    nextNodeId: 'yi1-ch13-choice-3',
  },

  // 🎯 選項3：完整不是完美
  {
    id: 'yi1-ch13-choice-3',
    speaker: 'protagonist',
    text: '你們歸者都是完美的人嗎？',
    choices: [
      {
        id: 'ch13-c3a',
        text: '「你們好像什麼都想通了。」',
        nextNodeId: 'yi1-ch13-19a',
        arcChange: 0,
        shadowChange: 3,
      },
      {
        id: 'ch13-c3b',
        text: '「完整和完美有什麼區別？」',
        nextNodeId: 'yi1-ch13-19b',
        arcChange: 8,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch13-19a',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '錯。歸者只是學會了完整。完整不是完美。完整是——接受自己的不完美，同時繼續前進。我脾氣差、不會照顧人、早年對女兒很糟糕。這些我都知道，但我沒辦法假裝它們不存在。它們是我的一部分。',
    nextNodeId: 'yi1-ch13-20',
  },
  {
    id: 'yi1-ch13-19b',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '完整是接受自己的不完美，同時繼續前進。我有缺點，但我也有優點。我傷害過人，但我也幫助過人。我失敗過，但我也成功過。這些都是我。承認只是開始，接下來你還有很長的路要走。',
    nextNodeId: 'yi1-ch13-20',
  },

  // 五、告別與預告
  {
    id: 'yi1-ch13-20',
    speaker: 'jobs',
    speakerName: '賈伯斯',
    text: '不要把我的話當成聖旨。聽聽就好，然後走你自己的路。去吧，見伊之前，你會先去一個地方——未歸者廊。那裡展示著一些沒有學會完整的靈魂。你會看到，離完整只差一步卻走不過去，是什麼樣子。',
    bgImage: 'ch13_farewell',
    nextNodeId: 'yi1-ch13-21',
  },
  {
    id: 'yi1-ch13-21',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '學到什麼了？',
    nextNodeId: 'yi1-ch13-22',
  },
  {
    id: 'yi1-ch13-22',
    speaker: 'protagonist',
    text: '被拒絕是信號，不是定義。還有——沒有標準答案。別人的方法是參考，不是公式。',
    nextNodeId: 'yi1-ch13-23',
  },
  {
    id: 'yi1-ch13-23',
    speaker: 'narrator',
    text: '問心看著她，眼神裡有一絲複雜的情緒，像是欣慰，又像是擔憂。',
    nextNodeId: 'yi1-ch13-24',
  },
  {
    id: 'yi1-ch13-24',
    speaker: 'narrator',
    text: '她低頭看著自己衣服上的顏色——現在又加上了賈伯斯的純白，十種了。真漂亮。她在心裡默默地想：我見了十個歸者，聽了十堂課。未歸者廊裡的那些人，應該跟我很不一樣吧。',
    nextNodeId: 'yi1-ch13-25',
  },
  {
    id: 'yi1-ch13-25',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '你覺得你和他們很不一樣？',
    nextNodeId: 'yi1-ch13-foreshadow',
  },
  {
    id: 'yi1-ch13-foreshadow',
    speaker: 'narrator',
    text: '問心沉默了很久，然後說：「走吧。去了你就知道了。」她沒有注意到，問心的眼神裡，那絲擔憂變得更深了。',
    effect: 'fade-out',
    nextNodeId: 'yi1-ch14-intro',
  },
];
