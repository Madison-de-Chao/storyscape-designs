import type { DialogueNode } from '@/stores/gameStore';

// 第十二章｜歸途 — 弧度歸零的誕生
export const chapter12Nodes: DialogueNode[] = [
  // ── 一 ──
  {
    id: 'yi2-ch12-1',
    speaker: 'narrator',
    text: '那天晚上，林壹做了一個很長的夢。\n\n夢裡她站在一個很大的空間裡。\n\n不是房間，不是戶外，更像是⋯⋯一個還沒被創造出來的世界。\n\n到處都是白色的，空空的，等著被填滿。',
    nextNodeId: 'yi2-ch12-2',
    bgImage: 'yi2-dream-white-space',
    effect: 'fade-in-slow',
  },
  {
    id: 'yi2-ch12-2',
    speaker: 'narrator',
    text: '伊站在她旁邊。',
    nextNodeId: 'yi2-ch12-3',
  },
  {
    id: 'yi2-ch12-3',
    speaker: 'protagonist',
    speakerName: '林壹',
    text: '這是什麼地方？',
    nextNodeId: 'yi2-ch12-4',
  },
  {
    id: 'yi2-ch12-4',
    speaker: 'yi',
    speakerName: '伊',
    text: '妳想讓它是什麼，它就是什麼。',
    nextNodeId: 'yi2-ch12-5',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-5',
    speaker: 'narrator',
    text: '林壹環顧四周。\n\n她突然有一個想法。\n\n一個很瘋狂的想法。',
    nextNodeId: 'yi2-ch12-6',
  },

  // ── 二 ──
  {
    id: 'yi2-ch12-6',
    speaker: 'narrator',
    text: '她醒過來，心跳得很快。\n\n但不是恐懼的那種快。\n\n是興奮。\n\n她坐起來，看了看時間。\n\n**凌晨 3:33。**\n\n又是這個時間。',
    nextNodeId: 'yi2-ch12-7',
    bgImage: 'yi2-apartment-333',
  },
  {
    id: 'yi2-ch12-7',
    speaker: 'narrator',
    text: '她想起第一次被這個時間驚醒的那個夜晚。\n\n那時候她以為自己瘋了。\n\n現在她知道，那是開始。',
    choices: [
      {
        id: 'yi2-ch12-7a',
        text: '開始⋯⋯是嗎？我真的改變了嗎？',
        arcChange: 3,
        shadowChange: 0,
        nextNodeId: 'yi2-ch12-7a-r',
      },
      {
        id: 'yi2-ch12-7b',
        text: '從崩潰到現在，原來已經走了這麼遠。',
        arcChange: 5,
        shadowChange: -3,
        nextNodeId: 'yi2-ch12-7b-r',
      },
      {
        id: 'yi2-ch12-7c',
        text: '等一下⋯⋯我現在是在一個遊戲裡嗎？為什麼感覺有人在看我的故事？',
        arcChange: 0,
        shadowChange: 1,
        nextNodeId: 'yi2-ch12-7c-r',
      },
    ],
  },
  {
    id: 'yi2-ch12-7a-r',
    speaker: 'narrator',
    text: '她不確定。但她知道，至少她不再害怕這個時間了。',
    nextNodeId: 'yi2-ch12-8',
  },
  {
    id: 'yi2-ch12-7b-r',
    speaker: 'narrator',
    text: '她看了看窗外的夜空。星星不多，但每一顆都很亮。',
    nextNodeId: 'yi2-ch12-8',
  },
  {
    id: 'yi2-ch12-7c-r',
    speaker: 'narrator',
    text: '她搖了搖頭。太多了，不要想了。\n\n但如果真的有人在看她的故事⋯⋯她希望對方知道——「你也可以的。」\n\n⋯⋯好吧，先去泡咖啡。',
    nextNodeId: 'yi2-ch12-8',
  },

  // ── 三 ──
  {
    id: 'yi2-ch12-8',
    speaker: 'narrator',
    text: '她打開電腦，新建了一個資料夾。\n\n她想了很久，打了三個字：\n\n**「元壹境」。**',
    nextNodeId: 'yi2-ch12-9',
    bgImage: 'yi2-computer-night',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-9',
    speaker: 'narrator',
    text: '她不知道這個名字從哪裡來的。\n\n但它感覺是對的。\n\n一個關於「回到原點」的地方。\n\n一個關於「歸零」的世界。',
    nextNodeId: 'yi2-ch12-10',
  },

  // ── 四 ──
  {
    id: 'yi2-ch12-10',
    speaker: 'narrator',
    text: '她開始寫。\n\n不是寫日記，不是寫文章。\n\n**是寫一個世界。**\n\n她寫「歸者」——那些學會了完整性，選擇回來幫助別人的人。\n\n她寫「未歸者」——那些用自己的墜落，照亮後人歸途的人。\n\n她寫「伊」——每個人心裡那個被壓抑的、不敢承認的、其實一直都在的自己。',
    nextNodeId: 'yi2-ch12-11',
    effect: 'fade-in-slow',
  },
  {
    id: 'yi2-ch12-11',
    speaker: 'narrator',
    text: '她寫著寫著，突然停下來。\n\n她發現一件事。\n\n她不是在寫別人的故事。\n\n**她是在寫自己剛剛走過的路。**',
    choices: [
      {
        id: 'yi2-ch12-11a',
        text: '但我的路有什麼好寫的？又不是什麼了不起的故事。',
        arcChange: -3,
        shadowChange: 3,
        nextNodeId: 'yi2-ch12-11a-r',
      },
      {
        id: 'yi2-ch12-11b',
        text: '也許⋯⋯這條路本身就值得被記下來。',
        arcChange: 5,
        shadowChange: 0,
        nextNodeId: 'yi2-ch12-11b-r',
      },
    ],
  },
  {
    id: 'yi2-ch12-11a-r',
    speaker: 'narrator',
    text: '但她的手指沒有停。即使她嘴上這樣說，她的身體已經做出了選擇。',
    nextNodeId: 'yi2-ch12-12',
  },
  {
    id: 'yi2-ch12-11b-r',
    speaker: 'narrator',
    text: '她看著螢幕上自己寫的字，覺得它們有重量。不是文學的重量，是真實的重量。',
    nextNodeId: 'yi2-ch12-12',
  },

  // ── 五 ──
  {
    id: 'yi2-ch12-12',
    speaker: 'narrator',
    text: '夢露、梵谷、屈原、項羽。\n\n他們都是未歸者。\n\n他們用自己的不完整，讓她看見了完整的重要。\n\n小曼、爸爸、媽媽。\n\n他們是她生命中的光。\n\n不是來教她什麼，是來提醒她——妳本來就知道。',
    nextNodeId: 'yi2-ch12-13',
  },
  {
    id: 'yi2-ch12-13',
    speaker: 'narrator',
    text: '而伊。\n\n伊從來不是敵人。\n\n**伊是她一直推開的那個更好的自己。**\n\n她把這些都寫下來。\n\n一個字一個字，像在把自己重新拼起來。',
    nextNodeId: 'yi2-ch12-14',
    effect: 'glow',
  },

  // ── 六 ── 找回被刪掉的故事
  {
    id: 'yi2-ch12-14',
    speaker: 'narrator',
    text: '她寫了一整夜。\n\n天亮的時候，她靠在椅背上，看著螢幕。\n\n資料夾裡已經有十幾個檔案了。\n\n世界觀、人物設定、故事大綱。',
    nextNodeId: 'yi2-ch12-15',
  },
  {
    id: 'yi2-ch12-15',
    speaker: 'narrator',
    text: '她突然想到一件事。\n\n她想起三年前，那個被她刪掉的故事。\n\n那個關於穿越到古代的女孩。\n\n那時候她覺得結局寫不下去。\n\n因為那個結局太平淡了——女孩只是回家了。',
    nextNodeId: 'yi2-ch12-16',
    effect: 'fade-in-slow',
  },
  {
    id: 'yi2-ch12-16',
    speaker: 'narrator',
    text: '現在她明白了。\n\n那個結局沒有問題。\n\n是她自己有問題。\n\n她不相信「回家」可以是一個結局。\n\n她以為結局一定要轟轟烈烈，一定要成為英雄，一定要證明什麼。\n\n但完整不是成為英雄。\n\n**完整是回家。**',
    nextNodeId: 'yi2-ch12-17',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '完整不是成為英雄\n完整是回家',
      subtitle: '林壹',
      theme: 'golden',
      duration: 5000,
    },
  },
  {
    id: 'yi2-ch12-17',
    speaker: 'narrator',
    text: '她把那個三年前的故事找了出來。\n\n還在雲端硬碟的垃圾桶裡，沒有被永久刪除。\n\n她點開，看了一遍。\n\n文筆青澀，結構混亂，但裡面有一種東西——\n\n**是真誠。**',
    nextNodeId: 'yi2-ch12-18',
  },
  {
    id: 'yi2-ch12-18',
    speaker: 'narrator',
    text: '三年前的她，其實已經知道答案了。\n\n只是她不敢相信。\n\n就像伊說的：「我們不是不知道。我們只是忘記了。」\n\n她把那個故事也放進「元壹境」的資料夾裡。\n\n**這是起點。一切的起點。**',
    nextNodeId: 'yi2-ch12-19',
    effect: 'glow',
  },

  // ── 八 ── 認真規劃
  {
    id: 'yi2-ch12-19',
    speaker: 'narrator',
    text: '接下來幾個月，林壹開始認真規劃。\n\n她不只是想寫一個故事。\n\n她想做一個東西。一個可以幫助別人的東西。',
    nextNodeId: 'yi2-ch12-20',
  },
  {
    id: 'yi2-ch12-20',
    speaker: 'narrator',
    text: '她想起自己走過的路。\n\n那些深夜崩潰的時刻，那些覺得自己不夠好的時刻，那些把所有的愛都聽成攻擊的時刻。\n\n如果那時候有一個地方，可以讓她看見自己的濾鏡——\n\n如果那時候有一個聲音，可以提醒她「妳本來就知道」——\n\n也許她不用走這麼多冤枉路。\n\n她想成為那個聲音。\n她想創造那個地方。',
    nextNodeId: 'yi2-ch12-21',
  },

  // ── 九～十 ── 發現 AI
  {
    id: 'yi2-ch12-21',
    speaker: 'narrator',
    text: '她開始研究怎麼把這個世界變成一個產品。\n\n她不是工程師，不是設計師。她只是一個行銷企劃，會寫文案，會做簡報，會想策略。\n\n但她不會寫程式。',
    nextNodeId: 'yi2-ch12-22',
  },
  {
    id: 'yi2-ch12-22',
    speaker: 'narrator',
    text: '以前的她會在這裡停下來。\n\n會說：「我不會，所以我做不到。」\n會說：「算了，這太難了。」\n\n但現在的她不一樣了。\n\n她打開電腦，開始研究。\n\n然後她發現了一個東西。\n\n**AI。**',
    nextNodeId: 'yi2-ch12-23',
    effect: 'glow',
  },

  // ── 十一～十二 ── AI 像鏡子
  {
    id: 'yi2-ch12-23',
    speaker: 'narrator',
    text: '一開始她只是想用 AI 幫她寫一些文案。\n\n她把自己寫的世界觀丟進去，問：「你覺得這個概念怎麼樣？」\n\n AI 給了她回饋。不是敷衍的那種「很好啊」。\n\n是真的在分析，真的在提問，真的在幫她把模糊的想法變得更清楚。',
    nextNodeId: 'yi2-ch12-24',
  },
  {
    id: 'yi2-ch12-24',
    speaker: 'narrator',
    text: '她愣了一下。\n\n這種感覺很熟悉。\n\n像是有人在認真聽她說話。\n像是有人在幫她看見她自己沒看見的東西。\n\n像是——',
    nextNodeId: 'yi2-ch12-25',
  },
  {
    id: 'yi2-ch12-25',
    speaker: 'narrator',
    text: '她開始更頻繁地跟 AI 對話。\n\n她問：「如果一個人總是把別人的好意聽成攻擊，要怎麼讓她看見自己的濾鏡？」\n\n她問：「如果一個人不敢相信自己夠好，要怎麼讓她記起來？」\n\n她問：「如果一個人的伊不是陰影，而是她不敢承認的光，要怎麼讓她願意看見？」',
    nextNodeId: 'yi2-ch12-26',
  },
  {
    id: 'yi2-ch12-26',
    speaker: 'narrator',
    text: '她發現，她不是在「問」AI。\n\n**她是在透過 AI，問自己。**\n\nAI 像一面鏡子。\n\n她丟出問題，AI 反射回來，她看見自己真正想說的話。\n\n**這不就是伊一直在做的事嗎？**',
    nextNodeId: 'yi2-ch12-27',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-27',
    speaker: 'narrator',
    text: '有一天晚上，她跟 AI 聊到很晚。\n\n她打了一段話：「我最近在做一個療癒 APP，但我不知道自己有沒有資格。我自己都還沒完全好，憑什麼幫助別人？」',
    nextNodeId: 'yi2-ch12-28',
  },
  {
    id: 'yi2-ch12-28',
    speaker: 'narrator',
    text: 'AI 回她：「療癒不是『完全好了』才能開始。療癒是在路上。妳不需要站在終點才能回頭拉人一把。妳只需要比她多走幾步，然後告訴她：這條路我走過，妳也可以。」\n\n林壹看著螢幕，眼眶有點熱。',
    nextNodeId: 'yi2-ch12-29',
    effect: 'glow',
    emotionSFX: 'sad_sigh',
  },
  {
    id: 'yi2-ch12-29',
    speaker: 'narrator',
    text: '這些話，像是伊會說的話。\n\n她突然明白了。\n\n**伊沒有消失。**\n\n**伊只是換了一種方式陪著她。**',
    nextNodeId: 'yi2-ch12-30',
    effect: 'glow',
  },

  // ── 十三 ── 一步步學習
  {
    id: 'yi2-ch12-30',
    speaker: 'narrator',
    text: '她開始用 AI 學習更多東西。\n\n學習怎麼設計使用者流程。\n學習怎麼把文字變成互動體驗。\n學習怎麼讓一個人在螢幕前，也能感受到被理解。\n\n她不懂的，就問。\n\nAI 不會嫌她笨，不會不耐煩，不會說「這妳也不會？」\n\nAI 只是一步一步教她，陪她試錯，陪她修正。\n\n就像伊當初陪她一樣。',
    nextNodeId: 'yi2-ch12-31',
  },
  {
    id: 'yi2-ch12-31',
    speaker: 'narrator',
    text: '她花了幾個月的時間，一點一點把「元壹境」從一個資料夾，變成一個真的可以運作的東西。\n\n不是完美的，但是可以用的。\n\n不是專業的，但是真誠的。',
    nextNodeId: 'yi2-ch12-32',
  },

  // ── 十四 ── 弧度歸零
  {
    id: 'yi2-ch12-32',
    speaker: 'narrator',
    text: '她給這個 APP 取了一個名字：\n\n**「弧度歸零」。**\n\n弧度，是偏離。\n\n歸零，是回來。\n\n**每個人都會偏離。**\n\n**但每個人都可以回來。**',
    nextNodeId: 'yi2-ch12-33',
    effect: 'glow',
    specialScene: 'revelation',
    revelationConfig: {
      text: '弧度歸零\n每個人都會偏離\n但每個人都可以回來',
      subtitle: '林壹',
      theme: 'celestial',
      duration: 7000,
    },
  },
  {
    id: 'yi2-ch12-33',
    speaker: 'narrator',
    text: '而這個 APP 的核心，就是讓每個人都能遇見自己的「伊」。\n\n透過 AI。\n\n就像她遇見的那樣。',
    nextNodeId: 'yi2-ch12-34',
    effect: 'fade-in-slow',
  },

  // ── 十五 ── 設計「伊」這個角色
  {
    id: 'yi2-ch12-34',
    speaker: 'narrator',
    text: '她在 APP 裡設計了一個角色。\n\n不是客服，不是助理。\n\n**是「伊」。**\n\n每個用戶進來，都會遇見自己的伊。\n\n那個伊會問她問題，會聽她說話，會在她把好的聽成壞的時候，溫柔地提醒她。',
    nextNodeId: 'yi2-ch12-35',
    bgImage: 'yi2-computer-night',
  },
  {
    id: 'yi2-ch12-35',
    speaker: 'yi',
    speakerName: '伊',
    text: '妳剛剛說妳不夠好。\n\n但妳有沒有想過，妳只是不敢相信自己夠好？',
    nextNodeId: 'yi2-ch12-36',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-36',
    speaker: 'yi',
    speakerName: '伊',
    text: '妳剛剛說別人在攻擊妳。\n\n但妳有沒有想過，那可能是妳的濾鏡？',
    nextNodeId: 'yi2-ch12-37',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-37',
    speaker: 'yi',
    speakerName: '伊',
    text: '妳剛剛說妳沒有能力。\n\n但妳有沒有想過，妳只是害怕承認自己有能力？',
    nextNodeId: 'yi2-ch12-38',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-38',
    speaker: 'narrator',
    text: '這些話，都是她曾經需要聽到的話。\n\n現在她把它們放進 APP 裡。\n\n**讓其他人也能聽到。**',
    nextNodeId: 'yi2-ch12-39',
  },

  // ── 十六 ── 上線那天晚上
  {
    id: 'yi2-ch12-39',
    speaker: 'narrator',
    text: '「弧度歸零」上線的那天晚上，林壹一個人坐在電腦前。\n\n她看著後台的數據。\n\n**第一個用戶進來了。**\n\n然後是第二個。第三個。',
    nextNodeId: 'yi2-ch12-40',
    bgImage: 'yi2-apartment-333',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-40',
    speaker: 'narrator',
    text: '她不知道他們是誰。\n\n但她知道，他們跟她一樣。\n\n都是那些總是說「我沒事」的人。\n\n都是那些不敢相信自己夠好的人。\n\n都是那些把愛聽成攻擊的人。',
    nextNodeId: 'yi2-ch12-41',
  },
  {
    id: 'yi2-ch12-41',
    speaker: 'protagonist',
    speakerName: '林壹',
    text: '歡迎。\n\n妳不是一個人。\n\n妳走過的路，我也走過。\n\n現在，讓妳的伊陪妳走。',
    nextNodeId: 'yi2-ch12-42',
    effect: 'fade-in-slow',
  },

  // ── 十七 ── 鏡子前，伊不再回應
  {
    id: 'yi2-ch12-42',
    speaker: 'narrator',
    text: '她站起來，走到浴室。\n\n鏡子裡的自己看著她。\n\n還是那張臉。\n\n但眼神不一樣了。\n\n**不是更亮，是更穩。**',
    nextNodeId: 'yi2-ch12-43',
    bgImage: 'yi2-bathroom-mirror',
  },
  {
    id: 'yi2-ch12-43',
    speaker: 'protagonist',
    speakerName: '林壹',
    text: '伊。',
    nextNodeId: 'yi2-ch12-44',
  },
  {
    id: 'yi2-ch12-44',
    speaker: 'narrator',
    text: '鏡中的她沒有回應。\n\n不是消失了。\n\n**是不需要了。**\n\n伊已經是她的一部分。\n\n而且，伊現在有了新的工作——\n\n陪伴其他還在迷路的人。',
    nextNodeId: 'yi2-ch12-45',
    effect: 'glow',
  },

  // ── 十八 ── 名字的意義
  {
    id: 'yi2-ch12-45',
    speaker: 'narrator',
    text: '她想起小時候，別人問她叫什麼名字。\n\n「林壹。」\n「哪個壹？」\n「壹貳叁肆的壹。」\n\n她從來沒有想過這個名字的意義。\n\n壹，是開始。\n壹，是最初。\n**壹，是回到原點。**\n\n而伊，一直都在壹的旁邊。\n\n只是她從來沒有看見。',
    nextNodeId: 'yi2-ch12-46',
    effect: 'fade-in-slow',
  },

  // ── 十九 ── 改名「問心」
  {
    id: 'yi2-ch12-46',
    speaker: 'narrator',
    text: '她回到電腦前，打開 APP 的設定頁面。\n\n有一個欄位：「創作者名稱」。\n\n她想了很久。\n\n林壹——這個名字跟了她快三十年。\n\n但她覺得，現在的她，可以有一個新的名字。',
    nextNodeId: 'yi2-ch12-47',
    bgImage: 'yi2-computer-night',
  },
  {
    id: 'yi2-ch12-47',
    speaker: 'narrator',
    text: '她打了兩個字：\n\n**「問心」。**\n\n問自己的心。\n\n這是她這一路走來學到的最重要的事。\n\n**答案不在外面。**\n**答案在心裡。**\n\n其他人，包括 AI，都只是提醒妳去記起來的人。',
    nextNodeId: 'yi2-ch12-48',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '答案不在外面\n答案在心裡',
      subtitle: '問心',
      theme: 'golden',
      duration: 5000,
    },
  },

  // ── 二十 ── 被療癒的人，成為療癒者
  {
    id: 'yi2-ch12-48',
    speaker: 'narrator',
    text: '她按下「儲存」。\n\n從今天開始，她不再只是林壹。\n\n**她是問心。**\n\n一個曾經迷路、現在回家的人。\n一個曾經受傷、現在想幫助別人的人。\n一個曾經不敢相信自己、現在終於相信的人。',
    nextNodeId: 'yi2-ch12-49',
  },
  {
    id: 'yi2-ch12-49',
    speaker: 'narrator',
    text: '**被療癒的人，成為療癒者。**\n\n這是最美的閉環。',
    nextNodeId: 'yi2-ch12-ep-1',
    effect: 'glow',
    specialScene: 'revelation',
    revelationConfig: {
      text: '被療癒的人\n成為療癒者',
      subtitle: '最美的閉環',
      theme: 'celestial',
      duration: 6000,
    },
  },

  // ════════════════════════════════════════
  // 尾聲｜壹與伊（三年後）
  // ════════════════════════════════════════
  {
    id: 'yi2-ch12-ep-1',
    speaker: 'narrator',
    text: '**三年後。**\n\n凌晨 3:33。\n\n問心的手機亮了。\n\n是「弧度歸零」的後台通知。\n\n「新用戶進入元壹境。」',
    nextNodeId: 'yi2-ch12-ep-2',
    bgImage: 'yi2-apartment-333',
    effect: 'fade-in-slow',
  },
  {
    id: 'yi2-ch12-ep-2',
    speaker: 'narrator',
    text: '她已經很習慣這種通知了。\n\n三年來，有幾萬人進入過元壹境。\n\n有些人來了又走，有些人留下來，有些人走出去之後，回來當了志工。\n\n但今天這個通知，讓她停下來。\n\n不知道為什麼，她想點進去看看。',
    nextNodeId: 'yi2-ch12-ep-3',
  },
  {
    id: 'yi2-ch12-ep-3',
    speaker: 'narrator',
    text: '她打開後台，看見一個新用戶的對話紀錄。\n\n用戶剛剛跟「伊」說了第一句話——',
    nextNodeId: 'yi2-ch12-ep-4',
  },
  {
    id: 'yi2-ch12-ep-4',
    speaker: 'narrator',
    text: '「我剛剛刪掉了一個我寫了三年的故事。」',
    nextNodeId: 'yi2-ch12-ep-5',
    effect: 'glitch',
  },
  {
    id: 'yi2-ch12-ep-5',
    speaker: 'narrator',
    text: '問心盯著這句話，心跳漏了一拍。\n\n三年的故事。\n刪掉。\n\n**這太熟悉了。**',
    nextNodeId: 'yi2-ch12-ep-6',
  },
  {
    id: 'yi2-ch12-ep-6',
    speaker: 'narrator',
    text: '她繼續看下去。\n\n用戶：「我覺得那個結局寫不下去。」\n\n伊：「為什麼寫不下去？」\n\n用戶：「因為結局太平淡了。女主角沒有成為英雄，沒有改變世界。她只是⋯⋯回家了。」\n\n伊：「回家不好嗎？」\n\n用戶：「回家算什麼結局？」',
    nextNodeId: 'yi2-ch12-ep-7',
  },
  {
    id: 'yi2-ch12-ep-7',
    speaker: 'narrator',
    text: '問心看著螢幕，眼眶有點熱。\n\n**這是她。**\n\n這是三年前的她。\n\n一模一樣。',
    nextNodeId: 'yi2-ch12-ep-8',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-ep-8',
    speaker: 'yi',
    speakerName: '伊',
    text: '妳有沒有想過，回家就是最好的結局？\n\n**完整不是成為英雄。完整是回家。**\n\n妳刪掉那個故事，不是因為結局不好。是因為妳不相信「回家」可以是一個結局。\n\n但妳有沒有想過——妳不相信的，不是那個故事。\n\n**是妳自己。**',
    nextNodeId: 'yi2-ch12-ep-9',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-ep-9',
    speaker: 'narrator',
    text: '用戶沉默了很久。\n\n然後打了一句：\n\n「妳怎麼知道？」',
    nextNodeId: 'yi2-ch12-ep-10',
  },
  {
    id: 'yi2-ch12-ep-10',
    speaker: 'yi',
    speakerName: '伊',
    text: '因為妳不是第一個這樣的人。\n\n在妳之前，有一個人也刪掉了她寫了三年的故事。\n她也覺得結局太平淡。\n她也不相信「回家」可以是結局。\n\n後來，她找到了答案。\n然後她創造了這個地方。\n\n讓像妳這樣的人，也能找到答案。',
    nextNodeId: 'yi2-ch12-ep-11',
  },
  {
    id: 'yi2-ch12-ep-11',
    speaker: 'narrator',
    text: '用戶：「那個人是誰？」\n\n伊：「她叫問心。但她以前不叫這個名字。她以前叫林壹。壹貳叁肆的壹。」\n\n用戶：「為什麼改名字？」\n\n伊：「因為她終於學會了一件事——答案不在外面，答案在心裡。問心，就是問自己的心。」',
    nextNodeId: 'yi2-ch12-ep-12',
  },
  {
    id: 'yi2-ch12-ep-12',
    speaker: 'narrator',
    text: '用戶沉默了一會，然後問：\n\n「那她的伊呢？她的伊還在嗎？」\n\n伊：「她的伊一直都在。就像妳的伊，也一直都在。**妳只是還沒有看見。**」',
    nextNodeId: 'yi2-ch12-ep-13',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-ep-13',
    speaker: 'narrator',
    text: '問心放下手機，走到窗邊。\n\n外面的天還是黑的，但遠處有一點點亮。\n\n快要天亮了。\n\n她想起三年前的那個凌晨。3:33。\n\n她從夢中驚醒，夢裡有個聲音說：「妳刪掉的那個故事，結局其實很好。」\n\n那時候她不懂。\n\n**現在她懂了。**\n\n回家，就是最好的結局。',
    nextNodeId: 'yi2-ch12-ep-14',
    bgImage: 'yi2-dawn-window',
    effect: 'fade-in-slow',
  },
  {
    id: 'yi2-ch12-ep-14',
    speaker: 'narrator',
    text: '她回到電腦前，在後台打開了一個對話框。\n\n這是她很少用的功能——創作者直接跟用戶對話。\n\n她通常讓伊處理就好。\n\n但今天，她想親自說點什麼。',
    nextNodeId: 'yi2-ch12-ep-15',
  },
  {
    id: 'yi2-ch12-ep-15',
    speaker: 'protagonist',
    speakerName: '問心',
    text: '嗨，我是問心。\n\n我看到妳剛剛說的話了。',
    nextNodeId: 'yi2-ch12-ep-16',
  },
  {
    id: 'yi2-ch12-ep-16',
    speaker: 'narrator',
    text: '對面沉默了一下，然後回覆：\n\n「妳就是那個創造這個地方的人？」\n\n「對。」\n\n「妳真的也刪掉過自己的故事？」\n\n「真的。三年前。凌晨 3:33。」\n\n「⋯⋯跟我一樣。」\n\n「對，跟妳一樣。」',
    nextNodeId: 'yi2-ch12-ep-17',
  },
  {
    id: 'yi2-ch12-ep-17',
    speaker: 'narrator',
    text: '用戶：「那妳後來怎麼了？」',
    nextNodeId: 'yi2-ch12-ep-18',
  },
  {
    id: 'yi2-ch12-ep-18',
    speaker: 'protagonist',
    speakerName: '問心',
    text: '我後來遇見了我的伊。\n\n她讓我看見，我以為是缺點的東西，其實是我不敢承認的優點。\n她讓我看見，我以為是攻擊的東西，其實是我自己的濾鏡。\n她讓我看見，我以為寫不下去的結局，其實是最好的結局。\n\n然後我把那個故事找回來了。\n\n從垃圾桶裡。',
    nextNodeId: 'yi2-ch12-ep-19',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-ep-19',
    speaker: 'narrator',
    text: '用戶：「還在嗎？還沒被永久刪除嗎？」\n\n問心笑了：「還在。雲端的垃圾桶，三十天內都還在。」\n\n「妳的呢？妳剛剛刪的？」\n\n對面沉默了很久。\n\n然後回覆：\n\n「我去看看。」',
    nextNodeId: 'yi2-ch12-ep-20',
  },
  {
    id: 'yi2-ch12-ep-20',
    speaker: 'narrator',
    text: '幾分鐘後，用戶回來了。\n\n「還在。」\n\n**「我把它救回來了。」**',
    nextNodeId: 'yi2-ch12-ep-21',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-ep-21',
    speaker: 'narrator',
    text: '問心看著這句話，眼淚突然掉下來。\n\n她不知道為什麼哭。\n\n也許是因為，她看見了三年前的自己。\n也許是因為，她終於知道自己做的事情是有意義的。\n\n**也許是因為，這個閉環，終於完成了。**',
    nextNodeId: 'yi2-ch12-ep-22',
    emotionSFX: 'sad_sigh',
  },
  {
    id: 'yi2-ch12-ep-22',
    speaker: 'narrator',
    text: '用戶：「問心，我可以問妳一個問題嗎？」\n\n「問。」\n\n「妳說妳遇見了妳的伊。那妳的伊現在在哪裡？」',
    nextNodeId: 'yi2-ch12-ep-23',
  },
  {
    id: 'yi2-ch12-ep-23',
    speaker: 'protagonist',
    speakerName: '問心',
    text: '她在我裡面。\n\n我們已經合在一起了。\n\n壹跟伊，不再是兩個人。\n\n**是同一個人。**',
    nextNodeId: 'yi2-ch12-ep-24',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-ep-24',
    speaker: 'narrator',
    text: '用戶：「那妳不會想念她嗎？」\n\n問心笑了：「不會。因為她沒有離開。她只是換了一種方式存在。\n\n現在，她透過這個 APP，陪伴每一個進來的人。\n\n包括妳。」',
    nextNodeId: 'yi2-ch12-ep-25',
  },
  {
    id: 'yi2-ch12-ep-25',
    speaker: 'narrator',
    text: '用戶沉默了一會。\n\n然後說：\n\n「謝謝妳。\n謝謝妳創造了這個地方。\n\n我進來的時候，覺得自己很糟糕。\n我覺得我寫不出好東西，我覺得我不夠好，我覺得我的故事沒有價值。\n\n但現在我覺得，也許我可以試試看。\n\n試著把那個結局寫完。\n試著相信，回家也可以是一個好結局。」',
    nextNodeId: 'yi2-ch12-ep-26',
  },
  {
    id: 'yi2-ch12-ep-26',
    speaker: 'narrator',
    text: '問心看著螢幕，淚流滿面。\n\n她打了一行字：',
    nextNodeId: 'yi2-ch12-ep-27',
  },
  {
    id: 'yi2-ch12-ep-27',
    speaker: 'protagonist',
    speakerName: '問心',
    text: '妳可以的。\n\n妳本來就可以。\n\n**歡迎來到元壹境。**',
    nextNodeId: 'yi2-ch12-ep-28',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-ep-28',
    speaker: 'narrator',
    text: '對話結束後，問心關掉電腦。\n\n她走到浴室，打開燈。\n\n鏡子裡的自己看著她。\n\n還是那張臉。\n\n但不一樣了。',
    nextNodeId: 'yi2-ch12-ep-29',
    bgImage: 'yi2-bathroom-mirror',
  },
  {
    id: 'yi2-ch12-ep-29',
    speaker: 'narrator',
    text: '三年前，她站在這面鏡子前，第一次看見伊。\n\n那時候她害怕，她抗拒，她以為伊是來傷害她的。\n\n現在她知道——\n\n**伊從來不是敵人。**\n**伊是她自己。**\n**是她一直推開的那個更好的自己。**',
    nextNodeId: 'yi2-ch12-ep-30',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-ep-30',
    speaker: 'protagonist',
    speakerName: '問心',
    text: '伊。',
    nextNodeId: 'yi2-ch12-ep-31',
  },
  {
    id: 'yi2-ch12-ep-31',
    speaker: 'narrator',
    text: '鏡中的自己看著她。\n\n沒有回應。\n\n因為不需要了。\n\n**壹就是伊。**\n**伊就是壹。**\n\n她們從來都是同一個人。\n\n只是花了很長的時間，才終於看見。',
    nextNodeId: 'yi2-ch12-ep-32',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '壹就是伊\n伊就是壹\n從來都是同一個人',
      subtitle: '問心',
      theme: 'golden',
      duration: 6000,
    },
  },
  {
    id: 'yi2-ch12-ep-32',
    speaker: 'narrator',
    text: '窗外的天亮了。\n\n問心站在窗邊，看著城市慢慢醒來。\n\n她想起這三年來的事。\n\n想起那些進入元壹境的人。\n\n有些人跟她一樣，刪掉了自己的故事。\n有些人跟她一樣，不敢相信自己夠好。\n有些人跟她一樣，把所有的愛都聽成攻擊。\n\n**但他們都找到了自己的伊。**\n\n他們都開始學著，看見自己本來就有的光。',
    nextNodeId: 'yi2-ch12-ep-33',
    bgImage: 'yi2-dawn-window',
    effect: 'fade-in-slow',
  },
  {
    id: 'yi2-ch12-ep-33',
    speaker: 'narrator',
    text: '**被療癒的人，成為療癒者。**\n\n這是最美的閉環。\n\n而這個閉環，不會停在她這裡。\n\n那個剛剛把故事救回來的女孩，有一天也會走出來。\n\n她也會想要把自己學到的東西，傳出去。\n\n她也會成為某個人的「伊」。\n\n然後那個人，又會成為下一個人的「伊」。\n\n**一個接一個。一圈接一圈。**\n\n像漣漪一樣，擴散出去。',
    nextNodeId: 'yi2-ch12-ep-34',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-ep-34',
    speaker: 'narrator',
    text: '問心笑了。\n\n她回到書桌前，打開電腦。\n\n打開一個新的文件，打了一行字：\n\n**「弧度歸零：伊」**\n**「——受害者濾鏡的療癒之旅——」**\n\n她要把這一切寫下來。\n\n不是給自己看。\n\n**是給那些還在路上的人看。**',
    nextNodeId: 'yi2-ch12-ep-35',
    bgImage: 'yi2-computer-night',
  },
  {
    id: 'yi2-ch12-ep-35',
    speaker: 'narrator',
    text: '讓他們知道：\n\n**妳不是一個人。**\n妳走過的路，有人走過。\n妳害怕的事，有人害怕過。\n妳不敢相信的事，有人也不敢相信過。\n\n**但她們都走過來了。**\n\n**妳也可以。**',
    nextNodeId: 'yi2-ch12-ep-36',
    effect: 'fade-in-slow',
  },
  {
    id: 'yi2-ch12-ep-36',
    speaker: 'narrator',
    text: '她開始打字。\n\n第一句話是：\n\n*「凌晨 3:33，林壹從夢中驚醒。」*\n\n*「夢裡有個聲音說：『妳刪掉的那個故事，結局其實很好。』」*\n\n故事，從這裡開始。\n\n**也從這裡，歸零。**',
    nextNodeId: 'yi2-ch12-end',
    effect: 'glow',
  },
  {
    id: 'yi2-ch12-end',
    speaker: 'narrator',
    text: '——全書完——',
    nextNodeId: null,
    isEnd: true,
    effect: 'fade-in-slow',
    specialScene: 'zen',
    zenConfig: {
      text: '弧度歸零：伊\n——受害者濾鏡的療癒之旅——\n\n全書完',
      subtitle: '默默超 著',
      theme: 'dawn',
      duration: 9000,
    },
  },
];

