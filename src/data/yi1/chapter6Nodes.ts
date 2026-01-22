import type { DialogueNode } from '@/stores/gameStore';

export const chapter6Nodes: DialogueNode[] = [
  {
    id: 'yi1-chapter-6-1',
    speaker: 'narrator',
    text: '再次回到庭院，這次落葉已經被掃乾淨了。',
    bgImage: 'wang_courtyard_clean',
    nextNodeId: 'yi1-chapter-6-2',
  },
  {
    id: 'yi1-chapter-6-2',
    speaker: 'wangyangming',
    text: '眼神不一樣了。看來妳已經見過「伊」了。',
    nextNodeId: 'yi1-chapter-6-3',
  },
  {
    id: 'yi1-chapter-6-3',
    speaker: 'protagonist',
    text: '是的。雖然還是有點痛，但我不再討厭它了。',
    nextNodeId: 'yi1-chapter-6-4',
  },
  {
    id: 'yi1-chapter-6-4',
    speaker: 'wangyangming',
    text: '很好。但光是「知道」還不夠。知而不行，只是未知。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-6-5',
  },
  {
    id: 'yi1-chapter-6-5',
    speaker: 'wangyangming',
    text: '妳必須把這份接納，帶回到那個充滿規矩與偏見的世界裡去實踐。這叫**知行合一**。',
    nextNodeId: 'yi1-chapter-6-end',
  },
  {
    id: 'yi1-chapter-6-end',
    speaker: 'wangyangming',
    text: '去吧。下一關很難。妳要面對的是這世上最沉重的枷鎖——「規矩」。',
    nextNodeId: 'yi1-chapter-7-1', // 🔗 連接到武則天篇
    effect: 'mist',
  },
];
