// 第十五章｜伊
import type { DialogueNode } from '@/stores/gameStore';

export const chapter15Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'chapter15-1',
    speaker: 'narrator',
    text: '「我不是你的敵人。」',
    nextNodeId: 'chapter15-2',
  },
  {
    id: 'chapter15-2',
    speaker: 'narrator',
    text: '「**我是你的成全。**」',
    effect: 'glow',
    nextNodeId: 'chapter15-3',
  },

  // 一、進入洞穴
  {
    id: 'chapter15-3',
    speaker: 'narrator',
    text: '弧度林比她記憶中更安靜。上一次來的時候，這裡的樹還在輕輕搖曳，發出細碎的光芒。但現在，所有的樹都靜止了，像是在等待什麼。',
    nextNodeId: 'chapter15-4',
  },
  {
    id: 'chapter15-4',
    speaker: 'narrator',
    text: '她走在林間，尋找那棵屬於她的命樹。很快就找到了。那棵扭曲的海棠樹，在她經歷了這一切之後，看起來沒有那麼猙獰了。',
    nextNodeId: 'chapter15-5',
  },
  {
    id: 'chapter15-5',
    speaker: 'narrator',
    text: '她走向樹根。那個洞穴還在。黑暗的，深不見底。',
    nextNodeId: 'chapter15-6',
  },
  {
    id: 'chapter15-6',
    speaker: 'protagonist',
    text: '我進去了。',
    nextNodeId: 'chapter15-7',
  },
  {
    id: 'chapter15-7',
    speaker: 'wenxin',
    text: '我不能陪你進去。見到伊的時候——好好聽她說。',
    emotionSFX: 'mysterious_whisper',
    nextNodeId: 'chapter15-8',
  },
  {
    id: 'chapter15-8',
    speaker: 'narrator',
    text: '她深吸一口氣，走進了洞穴。',
    nextNodeId: 'chapter15-9',
  },

  // 二、見到伊
  {
    id: 'chapter15-9',
    speaker: 'narrator',
    text: '洞穴裡比她想像的寬敞。一開始是黑暗的，什麼都看不見。但隨著她往前走，兩側的牆壁開始發出微弱的琉璃色光芒。',
    nextNodeId: 'chapter15-10',
  },
  {
    id: 'chapter15-10',
    speaker: 'narrator',
    text: '然後，她看見了盡頭。一個人坐在那裡。背對著她，坐在一塊石頭上。',
    nextNodeId: 'chapter15-11',
  },
  {
    id: 'chapter15-11',
    speaker: 'protagonist',
    text: '伊。我來了。',
    nextNodeId: 'chapter15-12',
  },
  {
    id: 'chapter15-12',
    speaker: 'narrator',
    text: '那個人終於動了。她站起身，慢慢轉過來。她看見了自己的臉。',
    nextNodeId: 'chapter15-13',
  },

  // 三、伊的樣貌
  {
    id: 'chapter15-13',
    speaker: 'narrator',
    text: '伊和她長得一模一樣。同樣的五官，同樣的身高，同樣的體型。但又完全不同。',
    nextNodeId: 'chapter15-14',
  },
  {
    id: 'chapter15-14',
    speaker: 'narrator',
    text: '伊的妝容濃烈，眼線上挑，嘴唇是她從來不敢塗的正紅色。她的頭髮沒有綁起來，散落在肩上，帶著一種她從來不允許自己有的野性。',
    nextNodeId: 'chapter15-15',
  },
  {
    id: 'chapter15-15',
    speaker: 'narrator',
    text: '她的衣服是一件華服——大紅、金黃、墨黑交織，但那華服是破碎的，像是被撕裂過，又被粗糙地縫補起來。',
    nextNodeId: 'chapter15-16',
  },
  {
    id: 'chapter15-16',
    speaker: 'narrator',
    text: '而她的眼神——銳利。冷漠。像是在看一個陌生人。',
    nextNodeId: 'chapter15-17',
  },
  {
    id: 'chapter15-17',
    speaker: 'yi',
    text: '你終於來了。',
    effect: 'glitch',
    emotionSFX: 'evil_giggle',
    nextNodeId: 'chapter15-18',
  },

  // 四、伊的質問
  {
    id: 'chapter15-18',
    speaker: 'yi',
    text: '你是帶著什麼進來的？你是帶著自信進來的。你覺得你已經學會了所有的道理，覺得這趟旅程就是一場考試，而你已經考完了。你來這裡，不是來面對我的。你來這裡，是來「**處理**」我的。',
    effect: 'glitch',
    nextNodeId: 'chapter15-19',
  },
  {
    id: 'chapter15-19',
    speaker: 'yi',
    text: '你剛才說什麼？你說「我已經變了」。你知道這句話聽起來像什麼嗎？像一個出軌被抓的人說「我已經變了，我不會再犯了」。像每一個想要輕鬆過關的人說的話。',
    effect: 'glitch',
    emotionSFX: 'mockery',
    nextNodeId: 'chapter15-20',
  },
  {
    id: 'chapter15-20',
    speaker: 'yi',
    text: '蘇軾說，外境不能定義你的價值。那我問你——你回到地球以後，你的老闆再說一次「這不是我要的」，你會怎麼樣？',
    nextNodeId: 'chapter15-21',
  },
  {
    id: 'chapter15-21',
    speaker: 'yi',
    text: '你會難過。你會覺得自己又做錯了。你會在心裡罵自己「為什麼我連這點小事都做不好」。你以為你學會了什麼？你只是在這裡，在這個安全的地方，聽了一些好聽的話。等你回到那個真實的世界，那些「道理」一秒鐘就會被打回原形。',
    effect: 'glitch',
    nextNodeId: 'chapter15-22',
  },
  {
    id: 'chapter15-22',
    speaker: 'narrator',
    text: '她的眼眶開始發熱。因為伊說的每一句話，都是對的。',
    nextNodeId: 'chapter15-23',
  },

  // 五、伊的等待
  {
    id: 'chapter15-23',
    speaker: 'yi',
    text: '你知道這三十年來，我在做什麼嗎？我在等你。',
    emotionSFX: 'sad_sigh',
    nextNodeId: 'chapter15-24',
  },
  {
    id: 'chapter15-24',
    speaker: 'yi',
    text: '每一次你憤怒，你就把我推開。「我不應該生氣。」每一次你悲傷，你就把我推開。「我不應該軟弱。」每一次你有慾望，你就把我推開。「我不應該這麼貪心。」',
    nextNodeId: 'chapter15-25',
  },
  {
    id: 'chapter15-25',
    speaker: 'yi',
    text: '**你把所有你覺得「不應該」的部分，都丟給了我。然後你假裝你是一個「好人」。**',
    effect: 'glow',
    nextNodeId: 'chapter15-26',
  },
  {
    id: 'chapter15-26',
    speaker: 'narrator',
    text: '她的眼淚開始流下來。',
    nextNodeId: 'chapter15-27',
  },
  {
    id: 'chapter15-27',
    speaker: 'yi',
    text: '你知道被丟掉是什麼感覺嗎？你知道被自己丟掉是什麼感覺嗎？每一次你推開我，我就被丟進這個黑暗的洞穴裡。一個人。沒有光。沒有聲音。',
    emotionSFX: 'fear',
    nextNodeId: 'chapter15-28',
  },
  {
    id: 'chapter15-28',
    speaker: 'yi',
    text: '我覺得我不應該存在。我覺得我是錯的，是壞的，是不應該有的。因為你——我的另一半——不要我了。',
    nextNodeId: 'chapter15-29',
  },

  // 六、理解
  {
    id: 'chapter15-29',
    speaker: 'protagonist',
    text: '對不起……對不起……我不知道……我不知道我傷害了你這麼深……',
    nextNodeId: 'chapter15-30',
  },
  {
    id: 'chapter15-30',
    speaker: 'yi',
    text: '你不是傷害了我，你是傷害了你自己。我就是你。你恨我的時候，你在恨你自己。你推開我的時候，你在推開你自己。',
    nextNodeId: 'chapter15-31',
  },
  {
    id: 'chapter15-31',
    speaker: 'yi',
    text: '沒有我，你的善良只是天真。沒有我，你的勇敢只是魯莽。沒有我，你的溫柔只是討好。你每切掉一塊，你就少一塊。你以為你在追求完美，其實你在製造殘缺。',
    nextNodeId: 'chapter15-32',
  },
  {
    id: 'chapter15-32',
    speaker: 'narrator',
    text: '她蹲下來，再也站不住了。',
    nextNodeId: 'chapter15-33',
  },

  // 七、成就律
  {
    id: 'chapter15-33',
    speaker: 'narrator',
    text: '伊蹲下來，在她面前。那銳利的眼神柔和了。',
    nextNodeId: 'chapter15-34',
  },
  {
    id: 'chapter15-34',
    speaker: 'yi',
    text: '你知道成就律是什麼意思嗎？明暗相成，非為相照。光明和黑暗，不是用來對比的。光明是用來成就黑暗的，黑暗是用來成就光明的。',
    nextNodeId: 'chapter15-35',
  },
  {
    id: 'chapter15-35',
    speaker: 'narrator',
    text: '伊伸出手，輕輕擦掉她臉上的眼淚。',
    nextNodeId: 'chapter15-36',
  },
  {
    id: 'chapter15-36',
    speaker: 'yi',
    text: '**我不是你的敵人，我是你的成全。**',
    effect: 'glow',
    emotionSFX: 'gentle_laugh',
    nextNodeId: 'chapter15-37',
  },
  {
    id: 'chapter15-37',
    speaker: 'protagonist',
    text: '我不是來「處理」你的，我不是來「告別」你的。我是來——接你回家。',
    nextNodeId: 'chapter15-38',
  },
  {
    id: 'chapter15-38',
    speaker: 'yi',
    text: '你知道我等這句話等了多久嗎？',
    nextNodeId: 'chapter15-39',
  },
  {
    id: 'chapter15-39',
    speaker: 'protagonist',
    text: '三十年。對不起，我不該把你推開。歡迎回家。',
    nextNodeId: 'chapter15-40',
  },
  {
    id: 'chapter15-40',
    speaker: 'narrator',
    text: '伊看著她，猶豫了一秒。然後，她撲進了她的懷裡。',
    nextNodeId: 'chapter15-41',
  },

  // 八、融合
  {
    id: 'chapter15-41',
    speaker: 'narrator',
    text: '那一刻，洞穴裡的琉璃光突然變亮。她感覺伊的身體在發光。她感覺自己的身體也在發光。兩道光交織在一起。',
    nextNodeId: 'chapter15-42',
  },
  {
    id: 'chapter15-42',
    speaker: 'narrator',
    text: '不是「融合」——不是兩個東西變成一個東西。而是「**回歸**」——本來就是一個東西，終於不再假裝是兩個。',
    effect: 'glow',
    nextNodeId: 'chapter15-43',
  },
  {
    id: 'chapter15-43',
    speaker: 'narrator',
    text: '她感覺到伊的憤怒流進她的身體——那不是可怕的，那是力量。她感覺到伊的悲傷流進她的身體——那不是軟弱的，那是深度。她感覺到伊的慾望流進她的身體——那不是貪婪的，那是動力。',
    nextNodeId: 'chapter15-44',
  },
  {
    id: 'chapter15-44',
    speaker: 'narrator',
    text: '這些她曾經害怕的、壓抑的、切割的部分——它們不是敵人。它們是她。一直都是。',
    nextNodeId: 'chapter15-45',
  },

  // 九、完整
  {
    id: 'chapter15-45',
    speaker: 'narrator',
    text: '當光芒散去，伊不見了。但她感覺，伊沒有消失。伊在她裡面。而她，也在伊裡面。',
    nextNodeId: 'chapter15-46',
  },
  {
    id: 'chapter15-46',
    speaker: 'narrator',
    text: '**壹即全，全即壹。伊即壹，壹即伊。**',
    effect: 'glow',
    nextNodeId: 'chapter15-47',
  },
  {
    id: 'chapter15-47',
    speaker: 'narrator',
    text: '她低頭看自己。她的衣服變了。不再是那件十種顏色的素絹，而是一件新的衣服——靛藍、月白、淡金交織的華服。還有一抹正紅。那是伊的顏色。現在，也是她的顏色。',
    nextNodeId: 'chapter15-48',
  },
  {
    id: 'chapter15-48',
    speaker: 'narrator',
    text: '她走出洞穴。外面的陽光灑下來，比之前更溫暖。那棵扭曲的海棠樹——她的命樹——正在重新綻放。那些疤痕還在，但從那些疤痕之間，長出了新的枝葉。粉色的花朵一朵一朵地綻放。',
    nextNodeId: 'chapter15-49',
  },
  {
    id: 'chapter15-49',
    speaker: 'wenxin',
    text: '你完整了。',
    nextNodeId: 'chapter15-50',
  },
  {
    id: 'chapter15-50',
    speaker: 'protagonist',
    text: '沒有，我只是——不再害怕不完整了。完整不是沒有缺口，完整是——不再害怕缺口。因為每一個缺口，都在成就其他部分。',
    nextNodeId: 'chapter15-51',
  },
  {
    id: 'chapter15-51',
    speaker: 'wenxin',
    text: '你終於明白了。走吧，最後一關在等你。',
    nextNodeId: 'chapter16-1',
  },
];
