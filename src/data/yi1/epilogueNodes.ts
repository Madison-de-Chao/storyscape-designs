import type { DialogueNode } from '@/stores/gameStore';

export const epilogueNodes: DialogueNode[] = [
  // ═══════════════════════════════════════════
  // 第一幕：三個月後——第四十七版
  // ═══════════════════════════════════════════
  {
    id: 'yi1-epilogue-intro',
    speaker: 'narrator',
    text: '三個月後。',
    effect: 'fade-in',
    bgImage: 'epilogue_three_months',
    nextNodeId: 'yi1-epilogue-1',
  },
  {
    id: 'yi1-epilogue-1',
    speaker: 'narrator',
    text: '她看著螢幕上那份檔案。「新故事_第一章_v47.docx」。第四十七版。每一次她都覺得「這次會更好」，每一次她都寫到一半就停下來，覺得「不對，這不是最好的開場」。',
    nextNodeId: 'yi1-epilogue-2',
  },
  {
    id: 'yi1-epilogue-2',
    speaker: 'narrator',
    text: '那個凌晨四點半開始寫的故事——她改了又改，刪了又刪。換過十七種開頭，重寫過九次結局。但每一次，她都覺得——還不夠好。',
    nextNodeId: 'yi1-epilogue-3',
  },
  {
    id: 'yi1-epilogue-3',
    speaker: 'narrator',
    text: '她把游標移到那份檔案上。右鍵，刪除。然後打開資源回收桶，選取所有四十七個版本，永久刪除。三個月的心血，十二萬字，全部消失了。',
    nextNodeId: 'yi1-epilogue-4',
  },
  {
    id: 'yi1-epilogue-4',
    speaker: 'narrator',
    text: '奇怪的是，她沒有覺得心痛。她覺得——鬆了一口氣。',
    nextNodeId: 'yi1-epilogue-5',
  },

  // ═══════════════════════════════════════════
  // 第二幕：三年前的故事
  // ═══════════════════════════════════════════
  {
    id: 'yi1-epilogue-5',
    speaker: 'narrator',
    text: '她打開另一個資料夾。那個藏在電腦最深處的資料夾。十二個檔案整整齊齊排列著。「第一章_覺醒.docx」……「第十二章_未完成.docx」',
    bgImage: 'epilogue_old_files',
    nextNodeId: 'yi1-epilogue-6',
  },
  {
    id: 'yi1-epilogue-6',
    speaker: 'narrator',
    text: '三年前，她寫完第十二章，覺得結局太平淡。主角沒有打敗魔王，沒有拯救世界，只是——回家了。她想像讀者會說「這什麼爛結局」，於是把檔名改成「未完成」。那一等，就是三年。',
    nextNodeId: 'yi1-epilogue-7',
  },
  {
    id: 'yi1-epilogue-7',
    speaker: 'narrator',
    text: '她雙擊打開那個檔案。三年沒看的文字出現在螢幕上。讀著讀著，她發現——這個結局，其實沒有她記憶中那麼糟。主角只是學會了和自己和解，然後回家了。',
    nextNodeId: 'yi1-epilogue-choice-1',
  },

  // 🎯 選項1：領悟
  {
    id: 'yi1-epilogue-choice-1',
    speaker: 'narrator',
    text: '她讀完最後一行，愣了很久。她突然明白了。',
    choices: [
      {
        id: 'epilogue-c1a',
        text: '這個故事從來不是「未完成」。它在三年前就完成了。',
        nextNodeId: 'yi1-epilogue-8',
        arcChange: 10,
        shadowChange: 0,
      },
      {
        id: 'epilogue-c1b',
        text: '她只是不敢承認它完成了。',
        nextNodeId: 'yi1-epilogue-8',
        arcChange: 10,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-epilogue-8',
    speaker: 'narrator',
    text: '她不敢承認它完成了。因為她假設讀者會不喜歡，因為她相信一定有「更好的版本」。但那些「更好的版本」——從來不存在。它們只存在於她的恐懼裡。',
    effect: 'glow',
    nextNodeId: 'yi1-epilogue-9',
  },
  {
    id: 'yi1-epilogue-9',
    speaker: 'narrator',
    text: '她想起問心說過的話：「完整不是沒有缺口。完整是——不再害怕缺口。」她一直以為這句話是在說「接受不完美」。但她現在才懂——「完整」本來就不是人定義的。',
    nextNodeId: 'yi1-epilogue-10',
  },
  {
    id: 'yi1-epilogue-10',
    speaker: 'narrator',
    text: '一棵樹，從種子發芽的那一刻起，就是完整的。它在每一個瞬間，都是它那個瞬間的完整。「未完成」——是人加上去的判斷，不是事物本身的狀態。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '「未完成」是人加上去的判斷',
      subtitle: '不是事物本身的狀態',
      theme: 'dawn',
    },
    nextNodeId: 'yi1-epilogue-11',
  },

  // ═══════════════════════════════════════════
  // 第三幕：寄出稿件
  // ═══════════════════════════════════════════
  {
    id: 'yi1-epilogue-11',
    speaker: 'narrator',
    text: '她把檔案名稱從「第十二章_未完成.docx」改回「第十二章_歸途.docx」。然後搜尋「文學出版社 投稿」，把十二個檔案整理成一份完整的稿件。沒有修改任何一個字。',
    bgImage: 'epilogue_submit',
    nextNodeId: 'yi1-epilogue-12',
  },
  {
    id: 'yi1-epilogue-12',
    speaker: 'narrator',
    text: '按下「送出」的時候，她的手有點抖。不是因為害怕被拒絕——是因為她終於不再害怕了。',
    nextNodeId: 'yi1-epilogue-13',
  },
  {
    id: 'yi1-epilogue-13',
    speaker: 'narrator',
    text: '兩週後，她收到一封信。「親愛的作者您好，我們對您的稿件非常有興趣。」她盯著那封信看了很久，然後笑了——像是終於確認了什麼似的。',
    nextNodeId: 'yi1-epilogue-14',
  },

  // ═══════════════════════════════════════════
  // 第四幕：出版社——命名
  // ═══════════════════════════════════════════
  {
    id: 'yi1-epilogue-14',
    speaker: 'narrator',
    text: '出版社在一條小巷子裡，招牌舊舊的。責任編輯戴著老花眼鏡，開門見山地說：',
    bgImage: 'epilogue_publisher',
    nextNodeId: 'yi1-epilogue-15',
  },
  {
    id: 'yi1-epilogue-15',
    speaker: 'editor',
    speakerName: '責編',
    text: '我很喜歡妳的故事。妳知道我最喜歡哪裡嗎？結局。主角沒有變成英雄，沒有拯救世界，只是回家了。這需要勇氣。',
    nextNodeId: 'yi1-epilogue-16',
  },
  {
    id: 'yi1-epilogue-16',
    speaker: 'narrator',
    text: '三年前她以為是「缺陷」的東西，原來是別人眼中的「勇氣」。責編遞給她一份合約，她翻到最後一頁，看到一個空格：「請問您要用來發表的名字是？＿＿＿＿＿＿」',
    bgImage: 'epilogue_contract',
    nextNodeId: 'yi1-epilogue-17',
  },
  {
    id: 'yi1-epilogue-17',
    speaker: 'narrator',
    text: '她想起問心說過的話：「在元壹境，名字是你完整之後，自己給自己的。當你知道你是誰的時候，你就會知道你的名字。」',
    nextNodeId: 'yi1-epilogue-choice-2',
  },

  // 🎯 選項2：命名
  {
    id: 'yi1-epilogue-choice-2',
    speaker: 'narrator',
    text: '她看著那個空格，突然笑了。很輕很輕的笑，像是終於找到答案。',
    choices: [
      {
        id: 'epilogue-c2a',
        text: '原來命名就是這樣。一個平凡的下午，一份合約的最後一頁。',
        nextNodeId: 'yi1-epilogue-18',
        arcChange: 5,
        shadowChange: 0,
      },
      {
        id: 'epilogue-c2b',
        text: '沒有光芒，沒有音樂。只有一支筆，和一個問題。',
        nextNodeId: 'yi1-epilogue-18',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-epilogue-18',
    speaker: 'narrator',
    text: '她拿起筆。窗外有風吹過，帶來春天的味道。她在那個空格裡，寫下一個名字——她給自己的名字。不是父母給的，不是別人叫的。是她，在這一刻，決定成為的那個人。',
    effect: 'glow',
    nextNodeId: 'yi1-epilogue-19',
  },
  {
    id: 'yi1-epilogue-19',
    speaker: 'narrator',
    text: '寫完之後，沒有閃電劈下，沒有天降異象。但她知道，有什麼不一樣了。',
    nextNodeId: 'yi1-epilogue-20',
  },
  {
    id: 'yi1-epilogue-20',
    speaker: 'narrator',
    text: '她終於明白——所有的事物，在它被創造出來的那一刻，就已經是完整的。「完整」不是終點，「完整」是起點。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '「完整」不是終點',
      subtitle: '「完整」是起點',
      theme: 'gold',
    },
    nextNodeId: 'yi1-epilogue-21',
  },

  // ═══════════════════════════════════════════
  // 第五幕：半年後——書店（原尾聲）
  // ═══════════════════════════════════════════
  {
    id: 'yi1-epilogue-21',
    speaker: 'narrator',
    text: '半年後。',
    effect: 'fade-in',
    bgImage: 'epilogue_bookstore',
    nextNodeId: 'yi1-epilogue-22',
  },
  {
    id: 'yi1-epilogue-22',
    speaker: 'narrator',
    text: '她在書店裡看到自己的書。放在一個不起眼的角落，新書區的最下層。封面上印著她給自己的名字。',
    nextNodeId: 'yi1-epilogue-23',
  },
  {
    id: 'yi1-epilogue-23',
    speaker: 'narrator',
    text: '她沒有告訴任何人。只是站在那裡，看了很久。有路人經過，瞄了一眼，走開了。有店員經過，把書往前推了推，走開了。沒有人停下來，沒有人翻開它。',
    nextNodeId: 'yi1-epilogue-24',
  },
  {
    id: 'yi1-epilogue-24',
    speaker: 'narrator',
    text: '她想，這樣也好。它不需要被所有人看見。它只需要被它該遇見的人看見。就像她。就像每一個完整的事物。',
    nextNodeId: 'yi1-epilogue-25',
  },
  {
    id: 'yi1-epilogue-25',
    speaker: 'narrator',
    text: '她轉身離開書店。外面開始下雨了。她沒有帶傘，但她沒有躲。就這樣走進雨裡，讓雨水落在頭上、肩上、手心。涼涼的，有點癢。',
    bgImage: 'epilogue_rain',
    nextNodeId: 'yi1-epilogue-26',
  },
  {
    id: 'yi1-epilogue-26',
    speaker: 'narrator',
    text: '她想起很多年前，有人問過她一個問題：「妳是誰？」那時候她不知道怎麼回答。',
    nextNodeId: 'yi1-epilogue-27',
  },
  {
    id: 'yi1-epilogue-27',
    speaker: 'narrator',
    text: '現在她知道了。',
    effect: 'glow',
    nextNodeId: 'yi1-epilogue-28',
  },
  {
    id: 'yi1-epilogue-28',
    speaker: 'narrator',
    text: '她是她自己。不多，不少。剛剛好。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '她是她自己',
      subtitle: '不多，不少。剛剛好。',
      theme: 'rain',
    },
    nextNodeId: 'yi1-epilogue-end',
  },
  {
    id: 'yi1-epilogue-end',
    speaker: 'narrator',
    text: '【 第一部 完 】',
    effect: 'fade-out',
    bgImage: 'epilogue_final',
    nextNodeId: 'yi1-postscript-1',
  },
];
