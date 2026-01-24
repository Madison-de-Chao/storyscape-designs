import type { DialogueNode } from '@/stores/gameStore';

export const epilogueNodes: DialogueNode[] = [
  // 開場
  {
    id: 'yi1-epilogue-intro',
    speaker: 'narrator',
    text: '三個月後。',
    effect: 'fade-in',
    bgImage: 'epilogue_three_months',
    nextNodeId: 'yi1-epilogue-1',
  },

  // 一、第四十七版
  {
    id: 'yi1-epilogue-1',
    speaker: 'narrator',
    text: '她看著螢幕上那份檔案。「新故事_第一章_v47.docx」。第四十七版。她已經記不清這是第幾次從頭來過了。每一次她都覺得「這次會更好」，每一次她都寫到一半就停下來，覺得「不對，這不是最好的開場」。',
    nextNodeId: 'yi1-epilogue-2',
  },
  {
    id: 'yi1-epilogue-2',
    speaker: 'narrator',
    text: '那個凌晨四點半開始寫的故事——「在無盡的虛空中，有一個地方」——她改了又改，刪了又刪。她換過十七種開頭，重寫過九次結局，甚至換過三次主角的設定。但每一次，她都覺得——還不夠好。',
    nextNodeId: 'yi1-epilogue-3',
  },
  {
    id: 'yi1-epilogue-3',
    speaker: 'narrator',
    text: '她把游標移到那份檔案上面。右鍵。刪除。「你確定要將這個項目移到資源回收桶嗎？」她按下「是」。然後她打開資源回收桶，選取所有四十七個版本，永久刪除。',
    nextNodeId: 'yi1-epilogue-4',
  },
  {
    id: 'yi1-epilogue-4',
    speaker: 'narrator',
    text: '螢幕閃了一下。三個月的心血，十二萬字的各種版本，全部消失了。她靠在椅背上，長長吐了一口氣。奇怪的是，她沒有覺得心痛。她覺得——鬆了一口氣。',
    nextNodeId: 'yi1-epilogue-5',
  },

  // 二、三年前的故事
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
    text: '她記得自己為什麼把它叫做「未完成」。三年前，她寫完第十二章，覺得結局太平淡了。主角沒有打敗魔王，沒有拯救世界，只是——回家了。她想像讀者會說「這什麼爛結局」，於是把檔名改成「未完成」，告訴自己等想到更好的結局再來完成。那一等，就是三年。',
    nextNodeId: 'yi1-epilogue-7',
  },
  {
    id: 'yi1-epilogue-7',
    speaker: 'narrator',
    text: '她雙擊打開「第十二章_未完成.docx」。三年沒看的文字出現在螢幕上。她從頭開始讀。讀著讀著，她發現——這個結局，其實沒有她記憶中那麼糟。',
    nextNodeId: 'yi1-epilogue-8',
  },
  {
    id: 'yi1-epilogue-8',
    speaker: 'narrator',
    text: '主角在故事的最後，選擇放下執念，回到自己原本的生活。沒有打敗魔王，因為根本沒有魔王。沒有拯救世界，因為世界不需要被拯救。主角只是——學會了和自己和解。然後回家了。',
    nextNodeId: 'yi1-epilogue-choice-1',
  },

  // 🎯 選項1：領悟
  {
    id: 'yi1-epilogue-choice-1',
    speaker: 'narrator',
    text: '她讀完最後一行，愣了很久。',
    choices: [
      {
        id: 'epilogue-c1a',
        text: '這個故事從來不是「未完成」。它在三年前就完成了。',
        nextNodeId: 'yi1-epilogue-9a',
        arcChange: 10,
        shadowChange: 0,
      },
      {
        id: 'epilogue-c1b',
        text: '她只是不敢承認它完成了。',
        nextNodeId: 'yi1-epilogue-9b',
        arcChange: 10,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-epilogue-9a',
    speaker: 'narrator',
    text: '她只是不敢承認它完成了。因為她假設了讀者會不喜歡。因為她想像了各種沒有發生的可能。因為她相信一定有「更好的版本」，而這個版本「還不夠好」。但那些「更好的版本」——從來不存在。它們只存在於她的恐懼裡。',
    effect: 'glow',
    nextNodeId: 'yi1-epilogue-10',
  },
  {
    id: 'yi1-epilogue-9b',
    speaker: 'narrator',
    text: '因為她假設了讀者會不喜歡。因為她相信一定有「更好的版本」。但那些「更好的版本」——從來不存在。它們只存在於她的恐懼裡。',
    effect: 'glow',
    nextNodeId: 'yi1-epilogue-10',
  },

  // 三、完整的領悟
  {
    id: 'yi1-epilogue-10',
    speaker: 'narrator',
    text: '她想起問心使者說過的話：「完整不是沒有缺口。完整是——不再害怕缺口。」',
    nextNodeId: 'yi1-epilogue-11',
  },
  {
    id: 'yi1-epilogue-11',
    speaker: 'narrator',
    text: '她一直以為這句話是在說「接受不完美」。但她現在才懂——這句話是在說：「完整」本來就不是人定義的。',
    nextNodeId: 'yi1-epilogue-12',
  },
  {
    id: 'yi1-epilogue-12',
    speaker: 'narrator',
    text: '一棵樹，從種子發芽的那一刻起，就是完整的。不是因為它長成了大樹才完整，不是因為它開了花結了果才完整。它在每一個瞬間，都是它那個瞬間的完整。「未完成」——是人加上去的判斷，不是事物本身的狀態。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '「未完成」是人加上去的判斷',
      subtitle: '不是事物本身的狀態',
      theme: 'dawn',
    },
    nextNodeId: 'yi1-epilogue-13',
  },

  // 四、寄出稿件
  {
    id: 'yi1-epilogue-13',
    speaker: 'narrator',
    text: '她把檔案名稱從「第十二章_未完成.docx」改回「第十二章_歸途.docx」。然後她打開瀏覽器，搜尋「文學出版社 投稿」。',
    bgImage: 'epilogue_submit',
    nextNodeId: 'yi1-epilogue-14',
  },
  {
    id: 'yi1-epilogue-14',
    speaker: 'narrator',
    text: '她花了一個小時，把十二個檔案整理成一份完整的稿件。沒有修改任何一個字。三年前寫的東西，三年後原封不動地寄出去。按下「送出」的時候，她的手有點抖。不是因為害怕被拒絕——是因為她終於不再害怕了。',
    nextNodeId: 'yi1-epilogue-15',
  },
  {
    id: 'yi1-epilogue-15',
    speaker: 'narrator',
    text: '兩週後，她收到一封信。「親愛的作者您好，我們對您的稿件非常有興趣，希望能與您約時間詳談。」她盯著那封信看了很久，確認自己沒有看錯。然後她笑了——像是終於確認了什麼似的。',
    nextNodeId: 'yi1-epilogue-16',
  },

  // 五、出版社
  {
    id: 'yi1-epilogue-16',
    speaker: 'narrator',
    text: '出版社在一條小巷子裡，招牌舊舊的，辦公室只有三個人。責任編輯是一個四十多歲的女人，戴著老花眼鏡。',
    bgImage: 'epilogue_publisher',
    nextNodeId: 'yi1-epilogue-17',
  },
  {
    id: 'yi1-epilogue-17',
    speaker: 'editor',
    speakerName: '責編',
    text: '我很喜歡妳的故事。妳知道我最喜歡哪裡嗎？結局。主角沒有變成英雄，沒有拯救世界，只是回家了。我覺得很真實。',
    nextNodeId: 'yi1-epilogue-18',
  },
  {
    id: 'yi1-epilogue-18',
    speaker: 'editor',
    speakerName: '責編',
    text: '我看過太多故事了。每個人都想寫一個驚天動地的結局。但妳沒有。妳讓主角回家了。這需要勇氣。',
    nextNodeId: 'yi1-epilogue-19',
  },
  {
    id: 'yi1-epilogue-19',
    speaker: 'narrator',
    text: '她不知道該說什麼。三年前她以為是「缺陷」的東西，原來是別人眼中的「勇氣」。',
    nextNodeId: 'yi1-epilogue-20',
  },

  // 六、名字
  {
    id: 'yi1-epilogue-20',
    speaker: 'narrator',
    text: '責編遞給她一份出版合約。她翻到最後一頁，看到一個空格。上面印著一行字：「請問您要用來發表的名字是？＿＿＿＿＿＿＿＿」',
    bgImage: 'epilogue_contract',
    nextNodeId: 'yi1-epilogue-21',
  },
  {
    id: 'yi1-epilogue-21',
    speaker: 'narrator',
    text: '她盯著那個空格。想起問心使者說過的話：「在元壹境，名字是你完整之後，自己給自己的。當你知道你是誰的時候，你就會知道你的名字。」',
    nextNodeId: 'yi1-epilogue-choice-2',
  },

  // 🎯 選項2：命名
  {
    id: 'yi1-epilogue-choice-2',
    speaker: 'narrator',
    text: '她看著那個空格，突然笑了。不是苦笑，不是傻笑。是一種很輕很輕的笑。像是終於找到答案的那種笑。',
    choices: [
      {
        id: 'epilogue-c2a',
        text: '原來命名就是這樣。一個平凡的下午，一份合約的最後一頁。',
        nextNodeId: 'yi1-epilogue-22',
        arcChange: 5,
        shadowChange: 0,
      },
      {
        id: 'epilogue-c2b',
        text: '沒有光芒，沒有音樂。只有一支筆，和一個問題。',
        nextNodeId: 'yi1-epilogue-22',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-epilogue-22',
    speaker: 'narrator',
    text: '她拿起筆。責編在旁邊喝茶，沒有催她。窗外有風吹過，帶來春天的味道。她在那個空格裡，寫下一個名字。那是她給自己的名字。不是父母給的，不是別人叫的。是她，在這一刻，決定成為的那個人。',
    effect: 'glow',
    nextNodeId: 'yi1-epilogue-23',
  },

  // 七、完整
  {
    id: 'yi1-epilogue-23',
    speaker: 'narrator',
    text: '寫完之後，她放下筆。沒有閃電劈下，沒有天降異象。責編還在喝茶，窗外還在吹風，世界還是原來的樣子。但她知道，有什麼不一樣了。',
    nextNodeId: 'yi1-epilogue-24',
  },
  {
    id: 'yi1-epilogue-24',
    speaker: 'narrator',
    text: '她終於明白——所有的事物，在它被創造出來的那一刻，就已經是完整的。一個故事，在它被寫下的那一刻，就已經是完整的。一個人，在她出生的那一刻，就已經是完整的。',
    effect: 'glow',
    nextNodeId: 'yi1-epilogue-25',
  },
  {
    id: 'yi1-epilogue-25',
    speaker: 'narrator',
    text: '「完整」不是終點。「完整」是起點。「未完成」——從來都只是人給它的定義，不是它本身的狀態。',
    specialScene: 'zen',
    zenConfig: {
      text: '「完整」不是終點',
      subtitle: '「完整」是起點',
      theme: 'gold',
    },
    nextNodeId: 'yi1-epilogue-26',
  },
  {
    id: 'yi1-epilogue-26',
    speaker: 'narrator',
    text: '她站起來，和責編握手。「期待和妳合作。」「我也是。」',
    nextNodeId: 'yi1-epilogue-27',
  },
  {
    id: 'yi1-epilogue-27',
    speaker: 'narrator',
    text: '走出出版社的時候，陽光很亮。她眯著眼睛，看著街道上來來往往的人。她忽然想——他們知道嗎？他們知道自己已經完整了嗎？還是他們還在追逐一個「更好的版本」，以為自己「還沒完成」？',
    bgImage: 'epilogue_street',
    nextNodeId: 'yi1-epilogue-28',
  },
  {
    id: 'yi1-epilogue-28',
    speaker: 'narrator',
    text: '她笑了笑，把這個念頭收起來。然後她轉身，走進人群裡。像是每一個平凡的下午。像是每一個完整的人。',
    effect: 'fade-out',
    nextNodeId: 'yi1-ending',
  },
];
