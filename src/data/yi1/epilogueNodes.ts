// 終章｜名字
import type { DialogueNode } from '@/stores/gameStore';

export const epilogueNodes: DialogueNode[] = [
  // 一、三個月後
  {
    id: 'epilogue-1',
    speaker: 'narrator',
    text: '三個月後。',
    nextNodeId: 'epilogue-2',
  },
  {
    id: 'epilogue-2',
    speaker: 'narrator',
    text: '她看著螢幕上那份檔案。「新故事_第一章_v47.docx」。第四十七版。她已經記不清這是第幾次從頭來過了。',
    nextNodeId: 'epilogue-3',
  },
  {
    id: 'epilogue-3',
    speaker: 'narrator',
    text: '那個凌晨四點半開始寫的故事——「在無盡的虛空中，有一個地方」——她改了又改，刪了又刪，從一萬字改到三萬字，又從三萬字砍回八千字。',
    nextNodeId: 'epilogue-4',
  },
  {
    id: 'epilogue-4',
    speaker: 'narrator',
    text: '她換過十七種開頭。她重寫過九次結局。她甚至換過三次主角的設定。但每一次，她都覺得——還不夠好。一定有更好的版本。一定有更完美的寫法。',
    nextNodeId: 'epilogue-5',
  },
  {
    id: 'epilogue-5',
    speaker: 'narrator',
    text: '她把游標移到那份檔案上面。右鍵。刪除。「你確定要將這個項目移到資源回收桶嗎？」',
    nextNodeId: 'epilogue-6',
  },
  {
    id: 'epilogue-6',
    speaker: 'narrator',
    text: '她按下「是」。然後她打開資源回收桶，選取所有四十七個版本，永久刪除。',
    nextNodeId: 'epilogue-7',
  },
  {
    id: 'epilogue-7',
    speaker: 'narrator',
    text: '螢幕閃了一下。三個月的心血，十二萬字的各種版本，全部消失了。',
    nextNodeId: 'epilogue-8',
  },
  {
    id: 'epilogue-8',
    speaker: 'narrator',
    text: '她靠在椅背上，長長吐了一口氣。奇怪的是，她沒有覺得心痛。她覺得——鬆了一口氣。',
    nextNodeId: 'epilogue-9',
  },

  // 二、重新發現
  {
    id: 'epilogue-9',
    speaker: 'narrator',
    text: '她打開另一個資料夾。那個藏在電腦最深處、標題是一串亂碼的資料夾。十二個檔案，整整齊齊排列著。',
    nextNodeId: 'epilogue-10',
  },
  {
    id: 'epilogue-10',
    speaker: 'narrator',
    text: '「第一章_覺醒.docx」、「第二章_啟程.docx」、「第三章_相遇.docx」……「第十二章_未完成.docx」。',
    nextNodeId: 'epilogue-11',
  },
  {
    id: 'epilogue-11',
    speaker: 'narrator',
    text: '她盯著那個檔案名稱。「未完成」。',
    nextNodeId: 'epilogue-12',
  },
  {
    id: 'epilogue-12',
    speaker: 'narrator',
    text: '三年前，她寫完第十二章的最後一個字，然後存檔。她覺得哪裡不對。結局太——平淡了。主角沒有打敗最終魔王。主角沒有拯救世界。主角只是——回家了。',
    nextNodeId: 'epilogue-13',
  },
  {
    id: 'epilogue-13',
    speaker: 'narrator',
    text: '她想像讀者看完會是什麼反應。「這什麼爛結局？」「前面鋪陳那麼多，結果就這樣？」她越想越覺得不行。一定有更好的結局。於是她把檔案名稱改成「第十二章_未完成.docx」。',
    nextNodeId: 'epilogue-14',
  },
  {
    id: 'epilogue-14',
    speaker: 'narrator',
    text: '那一等，就是三年。',
    nextNodeId: 'epilogue-15',
  },

  // 三、頓悟
  {
    id: 'epilogue-15',
    speaker: 'narrator',
    text: '她雙擊打開「第十二章_未完成.docx」。三年沒看的文字，出現在螢幕上。她從頭開始讀。',
    nextNodeId: 'epilogue-16',
  },
  {
    id: 'epilogue-16',
    speaker: 'narrator',
    text: '讀著讀著，她發現一件奇怪的事。這個結局……其實沒有她記憶中那麼糟。',
    nextNodeId: 'epilogue-17',
  },
  {
    id: 'epilogue-17',
    speaker: 'narrator',
    text: '主角在故事的最後，選擇放下執念，回到自己原本的生活。沒有打敗魔王，因為根本沒有魔王。沒有拯救世界，因為世界不需要被拯救。主角只是——學會了和自己和解。然後回家了。',
    nextNodeId: 'epilogue-18',
  },
  {
    id: 'epilogue-18',
    speaker: 'narrator',
    text: '她讀完最後一行，愣了很久。她突然明白了。',
    nextNodeId: 'epilogue-19',
  },
  {
    id: 'epilogue-19',
    speaker: 'narrator',
    text: '**這個故事從來不是「未完成」。它在三年前就完成了。她只是——不敢承認它完成了。**',
    effect: 'glow',
    emotionSFX: 'gentle_laugh',
    nextNodeId: 'epilogue-20',
  },
  {
    id: 'epilogue-20',
    speaker: 'narrator',
    text: '因為她假設了讀者會不喜歡。因為她想像了各種沒有發生的可能。因為她相信一定有「更好的版本」，而這個版本「還不夠好」。',
    nextNodeId: 'epilogue-21',
  },
  {
    id: 'epilogue-21',
    speaker: 'narrator',
    text: '但那些「更好的版本」——從來不存在。它們只存在於她的恐懼裡。',
    nextNodeId: 'epilogue-22',
  },
  {
    id: 'epilogue-22',
    speaker: 'narrator',
    text: '她想起問心使者說過的話。「**完整不是沒有缺口。完整是——不再害怕缺口。**」',
    effect: 'glow',
    nextNodeId: 'epilogue-23',
  },
  {
    id: 'epilogue-23',
    speaker: 'narrator',
    text: '她一直以為這句話是在說「接受不完美」。但她現在才懂——這句話是在說：「完整」本來就不是人定義的。',
    nextNodeId: 'epilogue-24',
  },
  {
    id: 'epilogue-24',
    speaker: 'narrator',
    text: '一棵樹，從種子發芽的那一刻起，就是完整的。不是因為它長成了大樹才完整。不是因為它開了花結了果才完整。它在每一個瞬間，都是它那個瞬間的完整。',
    nextNodeId: 'epilogue-25',
  },
  {
    id: 'epilogue-25',
    speaker: 'narrator',
    text: '「未完成」——是人加上去的判斷，不是事物本身的狀態。',
    nextNodeId: 'epilogue-26',
  },

  // 四、投稿
  {
    id: 'epilogue-26',
    speaker: 'narrator',
    text: '她把檔案名稱從「第十二章_未完成.docx」改回「第十二章_歸途.docx」。',
    nextNodeId: 'epilogue-27',
  },
  {
    id: 'epilogue-27',
    speaker: 'narrator',
    text: '然後她打開瀏覽器，搜尋「文學出版社 投稿」。她花了一個小時，把十二個檔案整理成一份完整的稿件。沒有修改任何一個字。三年前寫的東西，三年後原封不動地寄出去。',
    nextNodeId: 'epilogue-28',
  },
  {
    id: 'epilogue-28',
    speaker: 'narrator',
    text: '按下「送出」的時候，她的手有點抖。不是因為害怕被拒絕。是因為——她終於不再害怕了。',
    nextNodeId: 'epilogue-29',
  },
  {
    id: 'epilogue-29',
    speaker: 'narrator',
    text: '兩週後，她收到一封信。來自一家她從沒聽過的小出版社。',
    nextNodeId: 'epilogue-30',
  },
  {
    id: 'epilogue-30',
    speaker: 'narrator',
    text: '「親愛的作者您好，我們對您的稿件非常有興趣，希望能與您約時間詳談。」',
    nextNodeId: 'epilogue-31',
  },
  {
    id: 'epilogue-31',
    speaker: 'narrator',
    text: '她盯著那封信看了很久，確認自己沒有看錯。然後她笑了。不是狂喜的那種笑，是一種很奇怪的笑——像是終於確認了什麼似的。',
    nextNodeId: 'epilogue-32',
  },

  // 五、責編
  {
    id: 'epilogue-32',
    speaker: 'narrator',
    text: '出版社在一條小巷子裡，招牌舊舊的，辦公室只有三個人。責任編輯是一個四十多歲的女人，戴著一副老花眼鏡，桌上堆滿了稿件。',
    nextNodeId: 'epilogue-33',
  },
  {
    id: 'epilogue-33',
    speaker: 'narrator',
    text: '「我很喜歡妳的故事。」責編開門見山地說。',
    nextNodeId: 'epilogue-34',
  },
  {
    id: 'epilogue-34',
    speaker: 'protagonist',
    text: '真的嗎？可是……結局會不會太平淡了？',
    nextNodeId: 'epilogue-35',
  },
  {
    id: 'epilogue-35',
    speaker: 'narrator',
    text: '「妳知道我最喜歡哪裡嗎？結局。主角沒有變成英雄，沒有拯救世界，只是回家了。我覺得很真實。」',
    nextNodeId: 'epilogue-36',
  },
  {
    id: 'epilogue-36',
    speaker: 'narrator',
    text: '她愣住了。',
    nextNodeId: 'epilogue-37',
  },
  {
    id: 'epilogue-37',
    speaker: 'narrator',
    text: '「我看過太多故事了。每個人都想寫一個驚天動地的結局。但妳沒有。妳讓主角回家了。這需要勇氣。」',
    nextNodeId: 'epilogue-38',
  },
  {
    id: 'epilogue-38',
    speaker: 'narrator',
    text: '她不知道該說什麼。三年前她以為是「缺陷」的東西，原來是別人眼中的「勇氣」。',
    nextNodeId: 'epilogue-39',
  },
  {
    id: 'epilogue-39',
    speaker: 'narrator',
    text: '責編從桌上抽出一份文件。「這是出版合約，妳可以帶回去看看。」她接過合約，翻到最後一頁，看到一個空格。',
    nextNodeId: 'epilogue-40',
  },
  {
    id: 'epilogue-40',
    speaker: 'narrator',
    text: '那是一個需要填寫的欄位，上面印著一行字：「**請問您要用來發表的名字是？＿＿＿＿＿＿＿＿**」',
    effect: 'glow',
    nextNodeId: 'epilogue-41',
  },

  // 六、命名
  {
    id: 'epilogue-41',
    speaker: 'narrator',
    text: '她盯著那個空格。想起問心使者說過的話。',
    nextNodeId: 'epilogue-42',
  },
  {
    id: 'epilogue-42',
    speaker: 'narrator',
    text: '「在元壹境，名字是你完整之後，自己給自己的。」「那個世界的名字是別人給你的。這裡的名字是你給自己的。」「當你知道你是誰的時候，你就會知道你的名字。」',
    nextNodeId: 'epilogue-43',
  },
  {
    id: 'epilogue-43',
    speaker: 'narrator',
    text: '她看著那個空格，突然笑了。不是苦笑，不是傻笑。是一種很輕很輕的笑。像是終於找到答案的那種笑。',
    nextNodeId: 'epilogue-44',
  },
  {
    id: 'epilogue-44',
    speaker: 'narrator',
    text: '原來如此。她一直以為「命名」是一件很隆重的事。要在某個特別的時刻，經歷某種神聖的儀式，然後鄭重其事地宣告：「從今以後，我叫這個名字。」',
    nextNodeId: 'epilogue-45',
  },
  {
    id: 'epilogue-45',
    speaker: 'narrator',
    text: '但其實不是這樣的。命名，就是這樣。就是一個平凡的下午，在一間舊舊的辦公室裡，一份合約的最後一頁，一個需要填寫的空格。',
    nextNodeId: 'epilogue-46',
  },
  {
    id: 'epilogue-46',
    speaker: 'narrator',
    text: '沒有光芒，沒有音樂，沒有任何戲劇性的時刻。只有一支筆，和一個問題：「你要用什麼名字？」',
    nextNodeId: 'epilogue-47',
  },
  {
    id: 'epilogue-47',
    speaker: 'narrator',
    text: '她拿起筆。責編在旁邊喝茶，沒有催她。窗外有風吹過，帶來春天的味道。',
    nextNodeId: 'epilogue-48',
  },
  {
    id: 'epilogue-48',
    speaker: 'narrator',
    text: '她在那個空格裡，寫下一個名字。那是她給自己的名字。不是父母給的，不是別人叫的。是她，在這一刻，決定成為的那個人。',
    nextNodeId: 'epilogue-49',
  },

  // 七、完整
  {
    id: 'epilogue-49',
    speaker: 'narrator',
    text: '寫完之後，她放下筆。沒有閃電劈下，沒有天降異象。責編還在喝茶，窗外還在吹風，世界還是原來的樣子。',
    nextNodeId: 'epilogue-50',
  },
  {
    id: 'epilogue-50',
    speaker: 'narrator',
    text: '但她知道，有什麼不一樣了。',
    nextNodeId: 'epilogue-51',
  },
  {
    id: 'epilogue-51',
    speaker: 'narrator',
    text: '她終於明白——**所有的事物，在它被創造出來的那一刻，就已經是完整的。**',
    effect: 'glow',
    emotionSFX: 'mysterious_whisper',
    nextNodeId: 'epilogue-52',
  },
  {
    id: 'epilogue-52',
    speaker: 'narrator',
    text: '一個故事，在它被寫下的那一刻，就已經是完整的。一個人，在她出生的那一刻，就已經是完整的。',
    nextNodeId: 'epilogue-53',
  },
  {
    id: 'epilogue-53',
    speaker: 'narrator',
    text: '「完整」不是終點。「完整」是起點。「未完成」——從來都只是人給它的定義，不是它本身的狀態。',
    nextNodeId: 'epilogue-54',
  },
  {
    id: 'epilogue-54',
    speaker: 'narrator',
    text: '她站起來，和責編握手。「期待和妳合作。」「我也是。」',
    nextNodeId: 'epilogue-55',
  },

  // 尾聲
  {
    id: 'epilogue-55',
    speaker: 'narrator',
    text: '走出出版社的時候，陽光很亮。她眯著眼睛，看著街道上來來往往的人。每一個人都在趕路。每一個人看起來都很忙。',
    nextNodeId: 'epilogue-56',
  },
  {
    id: 'epilogue-56',
    speaker: 'narrator',
    text: '她忽然想——他們知道嗎？他們知道自己已經完整了嗎？還是他們還在追逐一個「更好的版本」，以為自己「還沒完成」？',
    nextNodeId: 'epilogue-57',
  },
  {
    id: 'epilogue-57',
    speaker: 'narrator',
    text: '她笑了笑，把這個念頭收起來。然後她轉身，走進人群裡。像是每一個平凡的下午。像是每一個完整的人。',
    nextNodeId: 'epilogue-58',
  },

  // 半年後
  {
    id: 'epilogue-58',
    speaker: 'narrator',
    text: '半年後。她在書店裡看到自己的書。放在一個不起眼的角落，新書區的最下層。封面上印著她給自己的名字。',
    nextNodeId: 'epilogue-59',
  },
  {
    id: 'epilogue-59',
    speaker: 'narrator',
    text: '她沒有告訴任何人。她只是站在那裡，看著那本書，看了很久。有一個路人經過，瞄了一眼那本書，然後走開了。有一個店員經過，把那本書往前推了推，然後走開了。沒有人停下來。沒有人翻開它。',
    nextNodeId: 'epilogue-60',
  },
  {
    id: 'epilogue-60',
    speaker: 'narrator',
    text: '她想，這樣也好。它不需要被所有人看見。它只需要被它該遇見的人看見。就像她。就像每一個完整的事物。',
    nextNodeId: 'epilogue-61',
  },
  {
    id: 'epilogue-61',
    speaker: 'narrator',
    text: '她轉身離開書店。外面開始下雨了。她沒有帶傘。但她沒有躲。',
    nextNodeId: 'epilogue-62',
  },
  {
    id: 'epilogue-62',
    speaker: 'narrator',
    text: '她就這樣走進雨裡，讓雨水落在頭上、肩上、手心。涼涼的，有點癢。',
    nextNodeId: 'epilogue-63',
  },
  {
    id: 'epilogue-63',
    speaker: 'narrator',
    text: '她想起很多年前，有人問過她一個問題：「妳是誰？」那時候她不知道怎麼回答。',
    nextNodeId: 'epilogue-64',
  },
  {
    id: 'epilogue-64',
    speaker: 'narrator',
    text: '現在她知道了。',
    nextNodeId: 'epilogue-65',
  },
  {
    id: 'epilogue-65',
    speaker: 'narrator',
    text: '**她是她自己。不多，不少。剛剛好。**',
    effect: 'glow',
    emotionSFX: 'gentle_laugh',
    nextNodeId: 'epilogue-66',
  },

  // 成就律結語
  {
    id: 'epilogue-66',
    speaker: 'narrator',
    text: '**壹即全，全即壹。伊即壹，壹即伊。**',
    effect: 'glow',
    emotionSFX: 'mysterious_whisper',
    nextNodeId: 'epilogue-end',
  },

  // 結束節點
  {
    id: 'epilogue-end',
    speaker: 'narrator',
    text: '【弧度歸零：壹 完】',
    nextNodeId: null,
  },
];
