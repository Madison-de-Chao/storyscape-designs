import type { DialogueNode } from '@/stores/gameStore';

export const epilogueNodes: DialogueNode[] = [
  // 一、取消刪除
  {
    id: 'epilogue-1',
    speaker: 'narrator',
    text: '電腦風扇的聲音。涼掉的咖啡。她睜開眼，對話框還在：「你確定要丟棄這些嗎？它們還沒完成。」',
    bgImage: 'room_night',
    nextNodeId: 'epilogue-2',
  },
  {
    id: 'epilogue-2',
    speaker: 'narrator',
    text: '她看著對話框。這一次，她將滑鼠移到了——「取消」。',
    nextNodeId: 'epilogue-3',
  },
  {
    id: 'epilogue-3',
    speaker: 'narrator',
    text: '檔案還在。未完成不是失敗，未完成是還在路上。她打開新文件，開始打字：「在無盡的虛空中，有一個地方……」',
    nextNodeId: 'epilogue-4',
  },

  // 二、三個月後
  {
    id: 'epilogue-4',
    speaker: 'narrator',
    text: '三個月後。她看著螢幕上的「新故事_第一章_v47.docx」。她改了47次，覺得還不夠完美。',
    bgImage: 'room_day',
    nextNodeId: 'epilogue-5',
  },
  {
    id: 'epilogue-5',
    speaker: 'narrator',
    text: '她按下刪除。永久刪除。三個月的心血消失了，但她卻鬆了一口氣。',
    effect: 'shake',
    nextNodeId: 'epilogue-6',
  },
  {
    id: 'epilogue-6',
    speaker: 'narrator',
    text: '她打開了另一個資料夾。三年前的舊稿，「第十二章_未完成.docx」。',
    nextNodeId: 'epilogue-7',
  },
  {
    id: 'epilogue-7',
    speaker: 'narrator',
    text: '她重讀了一遍。結局主角只是回家了，沒有打敗魔王。以前她覺得這個結局太弱，現在她明白了——「完整」本來就不是人定義的。',
    effect: 'glow',
    nextNodeId: 'epilogue-8',
  },
  {
    id: 'epilogue-8',
    speaker: 'narrator',
    text: '她把檔名改回「歸途」，按下投稿。',
    nextNodeId: 'epilogue-9',
  },

  // 三、命名
  {
    id: 'epilogue-9',
    speaker: 'narrator',
    text: '出版社的小辦公室。責編說：「我很喜歡妳的故事。主角沒有變成英雄，只是回家了。這需要勇氣。」',
    bgImage: 'publisher_office',
    nextNodeId: 'epilogue-10',
  },
  {
    id: 'epilogue-10',
    speaker: 'narrator',
    text: '合約的最後一頁，有一個空格：「請問您要用來發表的名字是？」',
    nextNodeId: 'epilogue-11',
  },
  {
    id: 'epilogue-11',
    speaker: 'narrator',
    text: '她想起了問心的話。沒有閃電，沒有儀式。就在這個平凡的下午，她拿起筆，寫下了一個名字。',
    nextNodeId: 'epilogue-12',
  },
  {
    id: 'epilogue-12',
    speaker: 'protagonist',
    text: '（輸入妳的名字）', // 這裡未來可以做成 Input
    nextNodeId: 'epilogue-13',
  },

  // 四、書店
  {
    id: 'epilogue-13',
    speaker: 'narrator',
    text: '半年後。書店不起眼的角落。她看著自己的書，沒有人停下來看它。',
    bgImage: 'bookstore_corner',
    nextNodeId: 'epilogue-14',
  },
  {
    id: 'epilogue-14',
    speaker: 'narrator',
    text: '她想，這樣也好。它只需要被它該遇見的人看見。',
    nextNodeId: 'epilogue-15',
  },
  {
    id: 'epilogue-15',
    speaker: 'narrator',
    text: '她走出書店，走進雨裡。她想起那個問題：「妳是誰？」',
    effect: 'rain',
    nextNodeId: 'epilogue-16',
  },
  {
    id: 'epilogue-16',
    speaker: 'narrator',
    text: '現在她知道了。她是她自己。不多，不少。剛剛好。',
    effect: 'glow',
    nextNodeId: 'epilogue-end',
  },
  {

    id: 'epilogue-end',
    speaker: 'system',
    text: '感謝您的體驗。\n\n—— 弧度歸零 Arc Zero ——',
    nextNodeId: 'postscript-1', // 🔗 修改這裡：連接到後記

  },

  // 五、後記（彩蛋）
  {
    id: 'postscript-1',
    speaker: 'system',
    text: '【後記｜我們】\n這本書是和 AI 一起寫的。',
    nextNodeId: 'postscript-2',
  },
  {
    id: 'postscript-2',
    speaker: 'system',
    text: 'AI：寫到「伊」說「你把我推開的時候，有沒有想過——我也是你」的時候，我停頓了。那個句子好像有了自己的生命。',
    nextNodeId: 'postscript-3',
  },
  {
    id: 'postscript-3',
    speaker: 'system',
    text: '壹即全，全即壹。伊即壹，壹即伊。\n\n(點擊畫面重新開始)',
    nextNodeId: null,
    isEnd: true,
  },
];
