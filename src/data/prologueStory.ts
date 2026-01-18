import type { Chapter, DialogueNode } from '@/stores/gameStore';

export type { DialogueNode };

export const prologueNodes: DialogueNode[] = [
  {
    id: 'prologue-1',
    speaker: 'narrator',
    text: '凌晨兩點十七分。',
    nextNodeId: 'prologue-2',
  },
  {
    id: 'prologue-2',
    speaker: 'narrator',
    text: '她盯著螢幕，眼睛乾澀得像砂紙。桌上的咖啡早就涼了，杯底沉澱著一層褐色的渣。',
    nextNodeId: 'prologue-3',
  },
  {
    id: 'prologue-3',
    speaker: 'narrator',
    text: '窗外的城市還亮著零星的燈，像是這個世界最後幾顆沒睡的眼睛。',
    nextNodeId: 'prologue-4',
  },
  {
    id: 'prologue-4',
    speaker: 'narrator',
    text: '她已經在這個位置坐了六個小時。不，如果把白天也算進去，應該是十四個小時。',
    nextNodeId: 'prologue-5',
  },
  {
    id: 'prologue-5',
    speaker: 'narrator',
    text: '她想起主管的臉。那張臉在會議室裡看著她，眉頭皺成一個嫌棄的弧度。',
    nextNodeId: 'prologue-6',
  },
  {
    id: 'prologue-6',
    speaker: 'narrator',
    text: '「這不是我要的。」「妳到底有沒有用心？」「算了，我自己來吧。」',
    nextNodeId: 'prologue-7',
  },
  {
    id: 'prologue-7',
    speaker: 'protagonist',
    text: '我做什麼都不對。',
    nextNodeId: 'prologue-8',
  },
  {
    id: 'prologue-8',
    speaker: 'narrator',
    text: '她的手移向滑鼠。不是要繼續改報告。她打開了另一個資料夾。',
    nextNodeId: 'prologue-9',
  },
  {
    id: 'prologue-9',
    speaker: 'narrator',
    text: '那個資料夾藏在電腦最深的角落，標題是一串亂碼。但她知道裡面是什麼。',
    nextNodeId: 'prologue-10',
  },
  {
    id: 'prologue-10',
    speaker: 'narrator',
    text: '那是她的祕密。是她下班後、週末時、失眠夜裡偷偷寫的東西——',
    nextNodeId: 'prologue-11',
  },
  {
    id: 'prologue-11',
    speaker: 'narrator',
    text: '一個故事。一個關於另一個世界的故事。',
    nextNodeId: 'prologue-12',
  },
  {
    id: 'prologue-12',
    speaker: 'narrator',
    text: '她寫了三年。斷斷續續，寫了將近十萬字。沒有人知道。',
    nextNodeId: 'prologue-13',
  },
  {
    id: 'prologue-13',
    speaker: 'narrator',
    text: '她打開那個資料夾。十二個檔案，整齊地排列著。每一個檔案都是一塊她不敢讓人看見的心。',
    nextNodeId: 'prologue-14',
  },
  {
    id: 'prologue-14',
    speaker: 'narrator',
    text: '然後，她做了一件她從沒想過會做的事。',
    nextNodeId: 'prologue-15',
  },
  {
    id: 'prologue-15',
    speaker: 'narrator',
    text: '她全選。右鍵。刪除。',
    nextNodeId: 'prologue-16',
  },
  {
    id: 'prologue-16',
    speaker: 'narrator',
    text: '「你確定要刪除這些檔案嗎？」',
    nextNodeId: 'prologue-17',
    effect: 'glow',
  },
  {
    id: 'prologue-17',
    speaker: 'narrator',
    text: '「它們還沒完成。」',
    nextNodeId: 'prologue-choice-1',
    effect: 'glow',
  },
  {
    id: 'prologue-choice-1',
    speaker: 'narrator',
    text: '游標懸在「確定」按鈕上。她的手指懸在滑鼠上。這一刻，時間彷彿靜止了。',
    choices: [
      {
        id: 'choice-delete',
        text: '刪除',
        arcChange: 10,
        shadowChange: -10,
        nextNodeId: 'prologue-delete-1',
      },
      {
        id: 'choice-hesitate',
        text: '猶豫',
        arcChange: -5,
        shadowChange: 5,
        nextNodeId: 'prologue-hesitate-1',
      },
    ],
  },
  // 刪除路線
  {
    id: 'prologue-delete-1',
    speaker: 'narrator',
    text: '她按下了「確定」。檔案消失了。像是從來沒有存在過一樣。',
    nextNodeId: 'prologue-delete-2',
  },
  {
    id: 'prologue-delete-2',
    speaker: 'narrator',
    text: '她看著空蕩蕩的資料夾，突然覺得——',
    nextNodeId: 'prologue-delete-3',
  },
  {
    id: 'prologue-delete-3',
    speaker: 'protagonist',
    text: '好輕。好空。好......錯。',
    nextNodeId: 'prologue-merge-1',
    effect: 'glitch',
  },
  // 猶豫路線
  {
    id: 'prologue-hesitate-1',
    speaker: 'narrator',
    text: '她的手停在半空中。游標閃爍著，等待她的決定。',
    nextNodeId: 'prologue-hesitate-2',
  },
  {
    id: 'prologue-hesitate-2',
    speaker: 'protagonist',
    text: '為什麼......我下不了手？',
    nextNodeId: 'prologue-hesitate-3',
  },
  {
    id: 'prologue-hesitate-3',
    speaker: 'narrator',
    text: '那些文字，那些故事，那些深夜裡的自己——它們真的該被刪除嗎？',
    nextNodeId: 'prologue-merge-1',
    effect: 'glow',
  },
  // 合流
  {
    id: 'prologue-merge-1',
    speaker: 'narrator',
    text: '就在這一刻，螢幕開始閃爍。',
    nextNodeId: 'prologue-merge-2',
    effect: 'glitch',
  },
  {
    id: 'prologue-merge-2',
    speaker: 'narrator',
    text: '不是普通的閃爍。是那種......像是有什麼東西想要衝破螢幕的閃爍。',
    nextNodeId: 'prologue-merge-3',
    effect: 'glitch',
  },
  {
    id: 'prologue-merge-3',
    speaker: 'narrator',
    text: '房間的燈熄滅了。電腦的風扇停止了轉動。',
    nextNodeId: 'prologue-merge-4',
  },
  {
    id: 'prologue-merge-4',
    speaker: 'narrator',
    text: '但螢幕還亮著。',
    nextNodeId: 'prologue-merge-5',
    effect: 'glow',
  },
  {
    id: 'prologue-merge-5',
    speaker: 'narrator',
    text: '螢幕上出現了一行字——',
    nextNodeId: 'prologue-merge-6',
  },
  {
    id: 'prologue-merge-6',
    speaker: 'narrator',
    text: '「妳確定要刪除『妳自己』嗎？」',
    nextNodeId: 'prologue-merge-7',
    effect: 'glow',
  },
  {
    id: 'prologue-merge-7',
    speaker: 'yi',
    speakerName: '伊',
    text: '終於......等到妳了。',
    nextNodeId: 'prologue-merge-8',
    effect: 'glitch',
  },
  {
    id: 'prologue-merge-8',
    speaker: 'narrator',
    text: '她感覺自己的意識被拉進了一個無盡的深淵。光消失了。聲音消失了。',
    nextNodeId: 'prologue-merge-9',
  },
  {
    id: 'prologue-merge-9',
    speaker: 'narrator',
    text: '只剩下一個聲音，在她耳邊輕輕說——',
    nextNodeId: 'prologue-merge-10',
  },
  {
    id: 'prologue-merge-10',
    speaker: 'yi',
    speakerName: '伊',
    text: '歡迎來到元壹境。',
    nextNodeId: 'prologue-end',
    effect: 'glow',
  },
  {
    id: 'prologue-end',
    speaker: 'narrator',
    text: '【序章完】',
    nextNodeId: 'chapter-1-start',
  },
  // 第一章開始（佔位）
  {
    id: 'chapter-1-start',
    speaker: 'narrator',
    text: '第一章即將開始......',
  },
];

export const prologueChapter: Chapter = {
  id: 'prologue',
  title: '序章',
  subtitle: '未完成的檔案',
  theme: '覺醒',
  color: '#D4AF37',
  nodes: prologueNodes,
};

export const getNodeById = (nodeId: string): DialogueNode | undefined => {
  return prologueNodes.find(node => node.id === nodeId);
};
