import type { DialogueNode } from '@/stores/gameStore';

export const chapter8Nodes: DialogueNode[] = [
  {
    id: 'yi1-chapter-8-1',
    speaker: 'narrator',
    text: '金碧輝煌的宮殿消失了。取而代之的，是一間陰暗、潮濕的牢房。',
    bgImage: 'prison_cell',
    emotionSFX: 'chain_rattle', // 鐵鍊聲
    nextNodeId: 'yi1-chapter-8-2',
  },
  {
    id: 'yi1-chapter-8-2',
    speaker: 'narrator',
    text: '一個身影佝僂著背，在微弱的油燈下書寫。每一筆，都像是刻在骨頭上。',
    nextNodeId: 'yi1-chapter-8-3',
  },
  {
    id: 'yi1-chapter-8-3',
    speaker: 'simagui',
    speakerName: '司馬遷',
    text: '身體殘缺了，心還能完整嗎？',
    nextNodeId: 'yi1-chapter-8-4',
  },
  {
    id: 'yi1-chapter-8-4',
    speaker: 'protagonist',
    text: '您是太史公……您在這種地方，還寫得下去？',
    nextNodeId: 'yi1-chapter-8-5',
  },
  {
    id: 'yi1-chapter-8-5',
    speaker: 'simagui',
    text: '正因為在這裡，才寫得出來。當你失去了一切外在的尊嚴，你只剩下唯一的東西——你的「道」。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-8-6',
  },
  {
    id: 'yi1-chapter-8-6',
    speaker: 'simagui',
    text: '人固有一死，或重于泰山，或輕于鴻毛。妳所經歷的痛苦，是要把妳壓垮，還是成為妳筆下的墨水？',
    choices: [
      { id: 'ch8-ink', text: '我要把它變成墨水', nextNodeId: 'yi1-chapter-8-7', arcChange: 10 },
      { id: 'ch8-crush', text: '我覺得好沉重...', nextNodeId: 'yi1-chapter-8-7' },
    ],
  },
  {
    id: 'yi1-chapter-8-7',
    speaker: 'simagui',
    text: '忍辱，是為了負重。妳的故事，才剛剛開始。',
    nextNodeId: 'yi1-chapter-8-end',
  },
  {
    id: 'yi1-chapter-8-end',
    speaker: 'simagui',
    text: '去吧。離開這幽暗之地。去見見那位曾在月下獨酌的狂人，他會告訴妳什麼是真正的「自由」。',
    nextNodeId: 'yi1-chapter-9-1', // 🔗 連接到第九章 (李白)
    effect: 'ink-transition', // 水墨轉場
  },
];
