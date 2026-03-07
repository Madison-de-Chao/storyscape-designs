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
    nextNodeId: 'yi2-ch12-end',
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
    id: 'yi2-ch12-end',
    speaker: 'narrator',
    text: '窗外的天已經亮了。\n\n她看著螢幕上的那三個字。\n\n弧度歸零。\n\n她知道，這不是結束。\n\n這是開始。\n\n一切的開始。',
    nextNodeId: null,
    isEnd: true,
    effect: 'fade-in-slow',
    specialScene: 'zen',
    zenConfig: {
      text: '這不是結束\n這是開始\n一切的開始',
      subtitle: '弧度歸零：伊 ─ 完',
      theme: 'dawn',
      duration: 8000,
    },
  },
];
