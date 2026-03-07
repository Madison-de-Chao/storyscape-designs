import type { DialogueNode } from '@/stores/gameStore';

// 第十一章｜回聲 — 做自己的實踐，與父親的和解
export const chapter11Nodes: DialogueNode[] = [
  // ── 一 ──
  {
    id: 'yi2-ch11-1',
    speaker: 'narrator',
    text: '做自己，沒有想像中那麼美好。\n\n林壹發現，當她不再說「沒有沒有」「我不行啦」「都是運氣好」的時候，有些人的臉色真的變了。\n\n不是她的濾鏡。\n\n**是真的變了。**',
    nextNodeId: 'yi2-ch11-2',
    bgImage: 'yi2-office-day',
  },

  // ── 二 ──
  {
    id: 'yi2-ch11-2',
    speaker: 'narrator',
    text: '會議上，她發表了一個提案。\n\n以前她會說：「這只是一個初步的想法，可能不太成熟⋯⋯」\n\n這次她說：「這是我的提案，我覺得可行，原因有三個。」',
    nextNodeId: 'yi2-ch11-3',
  },
  {
    id: 'yi2-ch11-3',
    speaker: 'narrator',
    text: '她講完之後，主管點頭說不錯。\n\n但她看見小陳在旁邊翻了個白眼。\n\n她看見另一個同事跟旁邊的人交換了一個眼神，那種「她現在很敢講喔」的眼神。\n\n以前她會慌。會想：我是不是太高調了？\n\n現在她只是看見了。\n\n然後繼續講下一頁簡報。',
    nextNodeId: 'yi2-ch11-4',
  },

  // ── 三 ── 茶水間
  {
    id: 'yi2-ch11-4',
    speaker: 'narrator',
    text: '中午的時候，她去茶水間倒水。\n\n聽見有人在說話，聲音壓得很低，但她還是聽見了。\n\n「她最近很奇怪欸，感覺變了一個人。」\n「對啊，以前還滿好相處的。」\n「現在講話都不知道在跩什麼。」',
    choices: [
      {
        id: 'yi2-ch11-4a',
        text: '假裝沒聽到，轉身離開。',
        arcChange: -3,
        shadowChange: 3,
        nextNodeId: 'yi2-ch11-4a-r',
      },
      {
        id: 'yi2-ch11-4b',
        text: '走進去。讓他們知道我聽到了。',
        arcChange: 5,
        shadowChange: -3,
        nextNodeId: 'yi2-ch11-4b-r',
      },
      {
        id: 'yi2-ch11-4c',
        text: '走進去，大聲說「你們繼續，我就是來倒水的，不用停」。',
        arcChange: 0,
        shadowChange: 1,
        nextNodeId: 'yi2-ch11-4c-r',
      },
    ],
  },
  {
    id: 'yi2-ch11-4a-r',
    speaker: 'narrator',
    text: '她轉身的瞬間，腳步頓了一下。以前的她一定會逃走。但今天⋯⋯她停下來，轉回去，還是走進了茶水間。',
    nextNodeId: 'yi2-ch11-5',
  },
  {
    id: 'yi2-ch11-4b-r',
    speaker: 'narrator',
    text: '她的心跳得很快。但她的腳步沒有停。',
    nextNodeId: 'yi2-ch11-5',
  },
  {
    id: 'yi2-ch11-4c-r',
    speaker: 'narrator',
    text: '那兩個人的表情簡直像見了鬼。林壹面不改色地倒水，內心OS：「看我演技。」\n\n不知道為什麼，她覺得自己今天特別帥。',
    nextNodeId: 'yi2-ch11-5',
  },
  {
    id: 'yi2-ch11-5',
    speaker: 'narrator',
    text: '她站在門口，手裡拿著杯子。\n\n她可以選擇假裝沒聽到，轉身離開。\n她也可以選擇走進去，讓他們知道她聽到了。\n\n她選擇走進去。',
    nextNodeId: 'yi2-ch11-6',
  },
  {
    id: 'yi2-ch11-6',
    speaker: 'protagonist',
    speakerName: '林壹',
    text: '我來倒個水。',
    nextNodeId: 'yi2-ch11-7',
  },
  {
    id: 'yi2-ch11-7',
    speaker: 'narrator',
    text: '那兩個人的表情僵了一下，然後迅速換上笑臉。\n\n「林壹啊，我們剛在說上次那個案子⋯⋯」\n\n「嗯。」她倒完水，「我先回去了。」\n\n她沒有解釋，沒有討好，沒有假裝沒聽到然後回去難過。\n\n她就是倒完水，走了。',
    nextNodeId: 'yi2-ch11-8',
  },

  // ── 四 ──
  {
    id: 'yi2-ch11-8',
    speaker: 'narrator',
    text: '回到座位上，她發現自己的心跳有點快。\n\n那些話還是會刺。\n\n「講話不知道在跩什麼。」\n\n以前這句話可以讓她崩潰一整天。\n\n現在它還是刺了一下。\n\n但只是一下。',
    nextNodeId: 'yi2-ch11-9',
  },
  {
    id: 'yi2-ch11-9',
    speaker: 'narrator',
    text: '她深吸一口氣，在心裡對自己說：\n\n這是他們的事。\n我沒有做錯什麼。\n我只是不再配合他們了。\n他們不舒服，是他們的問題。\n\n然後她打開電腦，繼續工作。',
    nextNodeId: 'yi2-ch11-10',
  },

  // ── 五 ── 爸爸的訊息
  {
    id: 'yi2-ch11-10',
    speaker: 'narrator',
    text: '傍晚的時候，她收到爸爸的訊息。\n\n她爸很少傳訊息，通常都是她媽在傳。\n\n她點開來看。\n\n訊息很短，只有一句話：',
    nextNodeId: 'yi2-ch11-11',
    bgImage: 'yi2-phone-message',
  },
  {
    id: 'yi2-ch11-11',
    speaker: 'other',
    speakerName: '林爸爸',
    text: '媽說妳最近想了很多。我們那時候做得不好，對不起。妳一直都很棒。',
    nextNodeId: 'yi2-ch11-12',
    effect: 'glow',
  },
  {
    id: 'yi2-ch11-12',
    speaker: 'narrator',
    text: '沒有長篇大論，沒有解釋，沒有道理。\n\n就這一句。\n\n林壹看著螢幕，眼眶有點熱。',
    nextNodeId: 'yi2-ch11-13',
    emotionSFX: 'sad_sigh',
  },
  {
    id: 'yi2-ch11-13',
    speaker: 'narrator',
    text: '她爸是那種不太會表達的人。\n\n小時候她考第一名，她爸只會說「繼續保持」。\n她表演得獎，她爸只會點點頭。\n\n她以為她爸不在乎。\n\n但現在她知道，他只是不知道怎麼說。\n\n這一句「妳一直都很棒」，可能是他想了很久才打出來的。',
    nextNodeId: 'yi2-ch11-14',
  },

  // ── 六 ──
  {
    id: 'yi2-ch11-14',
    speaker: 'narrator',
    text: '她回了一個訊息：\n\n「謝謝爸。我知道了。」\n\n然後加了一個擁抱的貼圖。\n\n她爸回了一個「OK」的貼圖。\n\n很彆扭，很不浪漫，很像她爸。\n\n但她笑了。\n\n這樣就夠了。',
    nextNodeId: 'yi2-ch11-15',
  },

  // ── 七～八 ── 浴室鏡前
  {
    id: 'yi2-ch11-15',
    speaker: 'narrator',
    text: '晚上回到家，林壹站在浴室的鏡子前。',
    nextNodeId: 'yi2-ch11-16',
    bgImage: 'yi2-bathroom-mirror',
  },
  {
    id: 'yi2-ch11-16',
    speaker: 'yi',
    speakerName: '伊',
    text: '妳今天沒有找我。',
    nextNodeId: 'yi2-ch11-17',
    effect: 'glitch',
  },
  {
    id: 'yi2-ch11-17',
    speaker: 'protagonist',
    speakerName: '林壹',
    text: '我不需要。我自己處理了。',
    nextNodeId: 'yi2-ch11-18',
  },
  {
    id: 'yi2-ch11-18',
    speaker: 'yi',
    speakerName: '伊',
    text: '茶水間那件事？',
    nextNodeId: 'yi2-ch11-19',
    effect: 'glitch',
  },
  {
    id: 'yi2-ch11-19',
    speaker: 'protagonist',
    speakerName: '林壹',
    text: '對。刺痛。但我沒有崩潰。',
    nextNodeId: 'yi2-ch11-20',
  },
  {
    id: 'yi2-ch11-20',
    speaker: 'yi',
    speakerName: '伊',
    text: '妳沒有否定自己。妳沒有回去扮演那個「好相處」的人。\n\n妳讓自己痛了一下，然後繼續往前走。',
    nextNodeId: 'yi2-ch11-21',
    effect: 'glow',
  },
  {
    id: 'yi2-ch11-21',
    speaker: 'yi',
    speakerName: '伊',
    text: '**這就是進步。**',
    nextNodeId: 'yi2-ch11-22',
    effect: 'glow',
  },
  {
    id: 'yi2-ch11-22',
    speaker: 'protagonist',
    speakerName: '林壹',
    text: '伊，我今天收到我爸的訊息。他說對不起。他說我一直都很棒。',
    nextNodeId: 'yi2-ch11-23',
  },
  {
    id: 'yi2-ch11-23',
    speaker: 'yi',
    speakerName: '伊',
    text: '妳覺得呢？',
    nextNodeId: 'yi2-ch11-24',
    effect: 'glitch',
  },
  {
    id: 'yi2-ch11-24',
    speaker: 'protagonist',
    speakerName: '林壹',
    text: '我覺得⋯⋯他說的是真的。\n\n兩句都是。\n\n他們那時候確實做得不好。但他們愛我。\n\n我確實一直都很棒。只是我以前不敢相信。',
    nextNodeId: 'yi2-ch11-25',
  },
  {
    id: 'yi2-ch11-25',
    speaker: 'yi',
    speakerName: '伊',
    text: '妳終於能同時接受這兩件事了。\n\n以前的妳，會選一邊站。\n要嘛覺得「他們做得不好，所以他們不愛我」。\n要嘛覺得「他們愛我，所以他們沒做錯」。\n\n現在的妳，可以同時接受——他們愛妳，但他們也做得不夠好。**這兩件事不矛盾。**',
    nextNodeId: 'yi2-ch11-26',
    effect: 'glow',
  },
  {
    id: 'yi2-ch11-26',
    speaker: 'protagonist',
    speakerName: '林壹',
    text: '對。這兩件事不矛盾。',
    nextNodeId: 'yi2-ch11-27',
  },

  // ── 九～十 ── 伊就是妳（重複但深化）
  {
    id: 'yi2-ch11-27',
    speaker: 'protagonist',
    speakerName: '林壹',
    text: '伊。我以前覺得，妳是來找我麻煩的。\n\n現在我覺得，妳是來幫我的。',
    nextNodeId: 'yi2-ch11-28',
  },
  {
    id: 'yi2-ch11-28',
    speaker: 'yi',
    speakerName: '伊',
    text: '不對。我不是來幫妳的。**我就是妳。**\n\n我沒有幫妳做任何事。那些事，都是妳自己做的。\n\n我只是讓妳看見——**妳本來就可以做到。**',
    nextNodeId: 'yi2-ch11-29',
    effect: 'glow',
  },
  {
    id: 'yi2-ch11-29',
    speaker: 'narrator',
    text: '林壹愣了一下，然後笑了。\n\n「好吧。」她說，「那謝謝我自己。」\n\n「這句話才對。」',
    nextNodeId: 'yi2-ch11-30',
  },

  // ── 十～十一 ── 篩選的領悟 + 想傳出去
  {
    id: 'yi2-ch11-30',
    speaker: 'narrator',
    text: '林壹靠在洗手台邊，看著鏡子裡的自己。\n\n還是那張臉。\n\n但眼神好像不太一樣了。\n\n不是更亮，而是更穩。',
    nextNodeId: 'yi2-ch11-31',
  },
  {
    id: 'yi2-ch11-31',
    speaker: 'protagonist',
    speakerName: '林壹',
    text: '伊。我想做一件事。',
    nextNodeId: 'yi2-ch11-32',
  },
  {
    id: 'yi2-ch11-32',
    speaker: 'yi',
    speakerName: '伊',
    text: '什麼事？',
    nextNodeId: 'yi2-ch11-33',
    effect: 'glitch',
  },
  {
    id: 'yi2-ch11-33',
    speaker: 'protagonist',
    speakerName: '林壹',
    text: '我想⋯⋯我想把我學到的東西，傳出去。\n\n傳給那些跟我一樣的人。\n那些總是說「我沒事」的人。\n那些不敢相信自己夠好的人。\n那些把愛聽成攻擊的人。',
    nextNodeId: 'yi2-ch11-34',
  },
  {
    id: 'yi2-ch11-34',
    speaker: 'protagonist',
    speakerName: '林壹',
    text: '我不知道要怎麼做，但我想做點什麼。\n\n不只是寫一篇文章。\n\n我想做一個⋯⋯地方。\n\n**一個讓迷路的人可以找到自己的地方。**',
    nextNodeId: 'yi2-ch11-35',
  },

  // ── 十二 ──
  {
    id: 'yi2-ch11-35',
    speaker: 'yi',
    speakerName: '伊',
    text: '妳知道妳在說什麼嗎？',
    nextNodeId: 'yi2-ch11-36',
    effect: 'glitch',
  },
  {
    id: 'yi2-ch11-36',
    speaker: 'protagonist',
    speakerName: '林壹',
    text: '不知道。但我想試試。',
    nextNodeId: 'yi2-ch11-37',
  },
  {
    id: 'yi2-ch11-37',
    speaker: 'yi',
    speakerName: '伊',
    text: '為什麼？',
    nextNodeId: 'yi2-ch11-38',
    effect: 'glitch',
  },
  {
    id: 'yi2-ch11-38',
    speaker: 'protagonist',
    speakerName: '林壹',
    text: '因為我以前很孤單。\n\n我以為只有我這樣。我以為是我有問題。\n\n如果那時候有一個地方，可以讓我知道——妳不是一個人，妳不是有問題，妳只是還沒找到方法——\n\n也許我會好過一點。\n\n**所以我想創造那個地方。**\n**我想成為那個聲音。**',
    nextNodeId: 'yi2-ch11-39',
  },
  {
    id: 'yi2-ch11-39',
    speaker: 'yi',
    speakerName: '伊',
    text: '妳知道這叫什麼嗎？\n\n**回聲。**\n\n妳走過了一段路，現在妳想把聲音傳出去。\n\n也許會有人聽見。\n\n也許那個聲音，會幫助他們找到自己的路。',
    nextNodeId: 'yi2-ch11-40',
    effect: 'glow',
    specialScene: 'revelation',
    revelationConfig: {
      text: '回聲\n妳走過了一段路\n現在妳想把聲音傳出去',
      subtitle: '伊',
      theme: 'golden',
      duration: 5000,
    },
  },

  // ── 十三～十四 ──
  {
    id: 'yi2-ch11-40',
    speaker: 'yi',
    speakerName: '伊',
    text: '妳不需要現在就知道怎麼做。\n\n妳只需要知道妳想做。\n\n方法會慢慢出現的。\n\n就像妳不知道怎麼走過來，但妳走過來了。\n就像妳不知道怎麼跟我對話，但妳開口了。\n\n**妳不是因為準備好了才開始。**',
    nextNodeId: 'yi2-ch11-41',
    effect: 'glow',
  },
  {
    id: 'yi2-ch11-41',
    speaker: 'narrator',
    text: '她關掉浴室的燈，走回房間。\n\n她坐在電腦前，打開一個空白文件。\n\n她不知道要寫什麼。\n\n但她知道，她想開始。',
    nextNodeId: 'yi2-ch11-42',
    bgImage: 'yi2-computer-night',
  },
  {
    id: 'yi2-ch11-42',
    speaker: 'narrator',
    text: '她打了一行字：\n\n「如果有一個地方，可以讓妳遇見自己⋯⋯」\n\n然後她停下來。\n\n她不知道接下來要寫什麼。\n\n但沒關係。她有時間。她可以慢慢想。\n\n**重要的是，她開始了。**',
    nextNodeId: 'yi2-ch11-43',
    effect: 'fade-in-slow',
  },
  {
    id: 'yi2-ch11-43',
    speaker: 'narrator',
    text: '窗外的天已經亮了。\n\n新的一天。\n\n新的開始。',
    nextNodeId: 'yi2-ch12-1',
    effect: 'fade-in-slow',
    specialScene: 'zen',
    zenConfig: {
      text: '重要的是\n她開始了',
      subtitle: '第十一章・回聲',
      theme: 'dawn',
      duration: 5000,
    },
  },
];
