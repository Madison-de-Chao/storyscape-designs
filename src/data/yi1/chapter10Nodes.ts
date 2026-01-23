import type { DialogueNode } from '@/stores/gameStore';

export const chapter10Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-chapter-10-intro-1',
    speaker: 'narrator',
    text: '「每一步棋，都是我自己下的。」',
    nextNodeId: 'yi1-chapter-10-intro-2',
  },
  {
    id: 'yi1-chapter-10-intro-2',
    speaker: 'narrator',
    text: '「即使輸了，也是我選的。」',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-10-1', // 接回原本的開頭
  },
  // 開場：認識你自己
  {
    id: 'yi1-chapter-10-1',
    speaker: 'narrator',
    text: '問心帶她穿過一道歐式的石砌拱門，上面刻著拉丁文——「認識你自己」。',
    nextNodeId: 'yi1-chapter-10-2',
  },
  {
    id: 'yi1-chapter-10-2',
    speaker: 'narrator',
    text: '眼前豁然開朗。這是一座幾何對稱的歐洲宮廷花園，中央有一座噴泉。噴泉旁躺椅上坐著兩個人。',
    bgImage: 'european_garden', // 歐式花園
    nextNodeId: 'yi1-chapter-10-3',
  },
  {
    id: 'yi1-chapter-10-3',
    speaker: 'narrator',
    text: '左邊的男人穿著白色長袍，有一種與生俱來的統帥感。右邊的女人戴著蛇形金鐲，美得帶刺。',
    nextNodeId: 'yi1-chapter-10-4',
  },
  {
    id: 'yi1-chapter-10-4',
    speaker: 'caesar',
    speakerName: '凱薩',
    text: '來了？這就是那個覺得自己「不夠格」的小傢伙？',
    nextNodeId: 'yi1-chapter-10-5',
  },
  {
    id: 'yi1-chapter-10-5',
    speaker: 'cleopatra',
    speakerName: '克麗奧佩特拉',
    text: '別嚇著人家。凱薩，你總是改不了那種居高臨下的口氣。',
    nextNodeId: 'yi1-chapter-10-6',
  },

  // 一、愛是博弈
  {
    id: 'yi1-chapter-10-6',
    speaker: 'caesar',
    text: '我們在討論「關係」。聽說妳在關係裡總是很卑微？',
    nextNodeId: 'yi1-chapter-10-7',
  },
  {
    id: 'yi1-chapter-10-7',
    speaker: 'protagonist',
    text: '我……我只是不想讓別人不開心。我習慣配合別人。',
    nextNodeId: 'yi1-chapter-10-8',
  },
  {
    id: 'yi1-chapter-10-8',
    speaker: 'cleopatra',
    text: '配合？親愛的，那叫「消失」。當妳在關係裡把自己縮到最小，妳就消失了。',
    nextNodeId: 'yi1-chapter-10-9',
  },
  {
    id: 'yi1-chapter-10-9',
    speaker: 'caesar',
    text: '愛情和戰爭一樣，是對等的博弈。如果你跪著，對方就只能低頭看你，或者——踩過去。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-10-10',
  },

  // 二、完整的人
  {
    id: 'yi1-chapter-10-10',
    speaker: 'cleopatra',
    text: '很多人找另一半，是想找個人來「填補」自己的空缺。覺得自己孤單，所以找人陪；覺得自己軟弱，所以找人靠。',
    nextNodeId: 'yi1-chapter-10-11',
  },
  {
    id: 'yi1-chapter-10-11',
    speaker: 'cleopatra',
    text: '這是錯的。兩個殘缺的半圓拼在一起，不會變成一個圓，只會變成一個有裂縫的畸形。',
    nextNodeId: 'yi1-chapter-10-12',
  },
  {
    id: 'yi1-chapter-10-12',
    speaker: 'caesar',
    text: '真正的關係，是兩個完整的圓站在一起。我有我的世界，妳有妳的世界。我們重疊，但不融合。',
    nextNodeId: 'yi1-chapter-10-13',
  },
  {
    id: 'yi1-chapter-10-13',
    speaker: 'cleopatra',
    text: '我愛凱薩，但我首先是埃及的女王。如果他要我放棄我的國家，我會毫不猶豫地離開他。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-10-14',
  },

  // 三、不敢說出口的需求
  {
    id: 'yi1-chapter-10-14',
    speaker: 'protagonist',
    text: '可是……如果我表達真實的自己，對方離開了怎麼辦？',
    nextNodeId: 'yi1-chapter-10-15',
  },
  {
    id: 'yi1-chapter-10-15',
    speaker: 'caesar',
    text: '那就讓他走。',
    nextNodeId: 'yi1-chapter-10-16',
  },
  {
    id: 'yi1-chapter-10-16',
    speaker: 'caesar',
    text: '如果真實的妳會讓他離開，那這段關係本來就是假的。妳在維護的，只是一個謊言。',
    nextNodeId: 'yi1-chapter-10-17',
  },
  {
    id: 'yi1-chapter-10-17',
    speaker: 'cleopatra',
    text: '敢於失去，妳才擁有選擇權。不敢失去的人，永遠是奴隸。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-10-18',
  },

  // 四、告別
  {
    id: 'yi1-chapter-10-18',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '該走了。下一位歸者在花園的另一頭。',
    nextNodeId: 'yi1-chapter-10-19',
  },
  {
    id: 'yi1-chapter-10-19',
    speaker: 'caesar',
    text: '去吧。記住，每一步棋都是妳自己下的。輸了也是妳選的，這才叫活著。',
    nextNodeId: 'yi1-chapter-11-intro-1', // 🔗 連接到曼德拉
    effect: 'fade-out',
  },
];
