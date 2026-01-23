import type { DialogueNode } from '@/stores/gameStore';

export const epilogueNodes: DialogueNode[] = [
  // 一、回到房間
  {
    id: 'yi1-epilogue-1',
    speaker: 'narrator',
    text: '電腦風扇的聲音。涼掉的咖啡。她睜開眼，對話框還在：「你確定要丟棄這些嗎？它們還沒完成。」',
    bgImage: 'room_night',
    nextNodeId: 'yi1-epilogue-2',
  },
  {
    id: 'yi1-epilogue-2',
    speaker: 'narrator',
    text: '她看著對話框。這一次，她將滑鼠移到了——「取消」。',
    nextNodeId: 'yi1-epilogue-3',
  },
  {
    id: 'yi1-epilogue-3',
    speaker: 'narrator',
    text: '檔案還在。未完成不是失敗，未完成是還在路上。她打開新文件，開始打字：「在無盡的虛空中，有一個地方……」',
    nextNodeId: 'yi1-epilogue-4',
  },

  // 二、三個月後
  {
    id: 'yi1-epilogue-4',
    speaker: 'narrator',
    text: '三個月後。她看著螢幕上的「新故事_第一章_v47.docx」。她改了47次，覺得還不夠完美。',
    bgImage: 'room_day',
    nextNodeId: 'yi1-epilogue-5',
  },
  {
    id: 'yi1-epilogue-5',
    speaker: 'narrator',
    text: '她按下刪除。永久刪除。三個月的心血消失了，但她卻鬆了一口氣。',
    effect: 'shake',
    nextNodeId: 'yi1-epilogue-6',
  },
  {
    id: 'yi1-epilogue-6',
    speaker: 'narrator',
    text: '她打開了另一個資料夾。三年前的舊稿，「第十二章_未完成.docx」。',
    nextNodeId: 'yi1-epilogue-7',
  },
  {
    id: 'yi1-epilogue-7',
    speaker: 'narrator',
    text: '她重讀了一遍。結局主角只是回家了，沒有打敗魔王。以前她覺得這個結局太弱，現在她明白了——「完整」本來就不是人定義的。',
    effect: 'glow',
    nextNodeId: 'yi1-epilogue-8',
  },
  {
    id: 'yi1-epilogue-8',
    speaker: 'narrator',
    text: '她把檔名改回「歸途」，按下投稿。',
    nextNodeId: 'yi1-epilogue-9',
  },

  // 三、命名
  {
    id: 'yi1-epilogue-9',
    speaker: 'narrator',
    text: '出版社的小辦公室。責編說：「我很喜歡妳的故事。主角沒有變成英雄，只是回家了。這需要勇氣。」',
    bgImage: 'publisher_office',
    nextNodeId: 'yi1-epilogue-10',
  },
  {
    id: 'yi1-epilogue-10',
    speaker: 'narrator',
    text: '合約的最後一頁，有一個空格：「請問您要用來發表的名字是？」',
    nextNodeId: 'yi1-epilogue-11',
  },
  {
    id: 'yi1-epilogue-11',
    speaker: 'narrator',
    text: '她想起了問心的話。沒有閃電，沒有儀式。就在這個平凡的下午，她拿起筆，寫下了一個名字。',
    nextNodeId: 'yi1-epilogue-12',
  },
  {
    id: 'yi1-epilogue-12',
    speaker: 'protagonist',
    text: '（輸入妳的名字）', // 這裡未來可以做成 Input
    nextNodeId: 'yi1-epilogue-13',
  },

  // 四、書店
  {
    id: 'yi1-epilogue-13',
    speaker: 'narrator',
    text: '半年後。書店不起眼的角落。她看著自己的書，沒有人停下來看它。',
    bgImage: 'bookstore_corner',
    nextNodeId: 'yi1-epilogue-14',
  },
  {
    id: 'yi1-epilogue-14',
    speaker: 'narrator',
    text: '她想，這樣也好。它只需要被它該遇見的人看見。',
    nextNodeId: 'yi1-epilogue-15',
  },
  {
    id: 'yi1-epilogue-15',
    speaker: 'narrator',
    text: '她走出書店，走進雨裡。她想起那個問題：「妳是誰？」',
    effect: 'rain',
    nextNodeId: 'yi1-epilogue-16',
  },
  {
    id: 'yi1-epilogue-16',
    speaker: 'narrator',
    text: '現在她知道了。她是她自己。不多，不少。剛剛好。',
    effect: 'glow',
    nextNodeId: 'yi1-epilogue-end',
  },
  // 尾聲結尾
  {
    id: 'yi1-epilogue-end',
    speaker: 'system',
    text: '感謝您的體驗。\n\n—— 弧度歸零 Arc Zero ——',
    nextNodeId: 'yi1-postscript-1', // 連接到獨立的 postscriptNodes
  },
];
