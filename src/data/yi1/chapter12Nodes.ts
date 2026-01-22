import type { DialogueNode } from '@/stores/gameStore';

export const chapter12Nodes: DialogueNode[] = [
  // 開場引言 (新增)
  {
    id: 'chapter12-intro-1',
    speaker: 'narrator',
    text: '「我輸過太多次了。」',
    nextNodeId: 'chapter12-intro-2',
  },
  {
    id: 'chapter12-intro-2',
    speaker: 'narrator',
    text: '「才知道怎麼贏。」',
    effect: 'vertical', // 適合林肯的堅毅感
    nextNodeId: 'chapter12-1', // 接回原本的開頭
  },

  // 原本的開頭：劈柴聲
  {
    id: 'chapter12-1',
    speaker: 'narrator',
    text: '砰。砰。砰。有節奏的劈柴聲傳來。',
    // ... (以下保持不變)
  
  // 開場：劈柴聲
  {
    id: 'chapter12-1',
    speaker: 'narrator',
    text: '砰。砰。砰。有節奏的劈柴聲傳來。',
    emotionSFX: 'wood_chop',
    bgImage: 'lincoln_cabin', // 林肯木屋
    nextNodeId: 'chapter12-2',
  },
  {
    id: 'chapter12-2',
    speaker: 'narrator',
    text: '一間簡陋的木屋前，一個非常高瘦的人正在劈柴。他的臉長得有些奇特，顴骨很高，眼窩很深。',
    nextNodeId: 'chapter12-3',
  },
  {
    id: 'chapter12-3',
    speaker: 'lincoln',
    speakerName: '林肯',
    text: '這塊木頭真硬。就像那些頑固的參議員一樣。',
    nextNodeId: 'chapter12-4',
  },

  // 一、失敗的清單
  {
    id: 'chapter12-4',
    speaker: 'lincoln',
    text: '你是來聽成功學的嗎？那我可能教不了你。我這輩子大部分時間都在失敗。',
    nextNodeId: 'chapter12-5',
  },
  {
    id: 'chapter12-5',
    speaker: 'lincoln',
    text: '做生意破產兩次，未婚妻死了，精神崩潰過，競選議員輸了八次。',
    nextNodeId: 'chapter12-6',
  },
  {
    id: 'chapter12-6',
    speaker: 'protagonist',
    text: '可是您最後當上了總統，還解放了黑奴。',
    nextNodeId: 'chapter12-7',
  },
  {
    id: 'chapter12-7',
    speaker: 'lincoln',
    text: '那是結果。但在那之前，我只是個一直跌倒的瘦高個。',
    nextNodeId: 'chapter12-8',
  },

  // 二、走路慢，但不後退
  {
    id: 'chapter12-8',
    speaker: 'lincoln',
    text: '很多人以為失敗是成功的反面。錯了。失敗是成功的一部分。',
    nextNodeId: 'chapter12-9',
  },
  {
    id: 'chapter12-9',
    speaker: 'lincoln',
    text: '你現在覺得自己很糟糕，是因為你把「當下」當成了「結局」。',
    effect: 'glow',
    nextNodeId: 'chapter12-10',
  },
  {
    id: 'chapter12-10',
    speaker: 'lincoln',
    text: '只要故事還沒結束，現在的失敗就只是一個章節。',
    nextNodeId: 'chapter12-11',
  },
  {
    id: 'chapter12-11',
    speaker: 'lincoln',
    text: '我有一句話送給你：我走得很慢，但我從不後退。',
    effect: 'glow',
    nextNodeId: 'chapter12-12',
  },

  // 三、信念
  {
    id: 'chapter12-12',
    speaker: 'protagonist',
    text: '如果走到底還是失敗呢？',
    nextNodeId: 'chapter12-13',
  },
  {
    id: 'chapter12-13',
    speaker: 'lincoln',
    text: '那就失敗吧。至少你走了。重點不是你贏了沒有，而是你為了什麼而戰。',
    nextNodeId: 'chapter12-14',
  },
  {
    id: 'chapter12-14',
    speaker: 'lincoln',
    text: '如果你為了你相信的東西而戰，輸了也是光榮的。',
    nextNodeId: 'chapter12-15',
  },

  // 四、告別
  {
    id: 'chapter12-15',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '下一位在等你。他會教你怎麼把「爛東西」變成藝術品。',
    nextNodeId: 'chapter13-intro-1', // 🔗 連接到賈伯斯
    effect: 'fade-out',
  },
];
