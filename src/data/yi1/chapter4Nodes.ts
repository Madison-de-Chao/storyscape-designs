import type { DialogueNode } from '@/stores/gameStore';

export const chapter4Nodes: DialogueNode[] = [
  {
    id: 'yi1-chapter-4-1',
    speaker: 'narrator',
    text: '場景轉換。這裡是一片幽暗的竹林，空氣潮濕，彷彿剛下過雨。',
    bgImage: 'bamboo_forest_dark',
    emotionSFX: 'rain_light',
    nextNodeId: 'yi1-chapter-4-2',
  },
  {
    id: 'yi1-chapter-4-2',
    speaker: 'sushi',
    speakerName: '蘇軾',
    text: '這雨下得真久啊。來，過來看看妳的樹。',
    nextNodeId: 'yi1-chapter-4-3',
  },
  {
    id: 'yi1-chapter-4-3',
    speaker: 'narrator',
    text: '妳眼前出現了一棵巨大的枯樹。樹幹上布滿了黑色的樹瘤，有些樹枝甚至扭曲斷裂。',
    bgImage: 'ugly_tree', // 命樹的視覺圖
    effect: 'shake',
    nextNodeId: 'yi1-chapter-4-4',
  },
  {
    id: 'yi1-chapter-4-4',
    speaker: 'protagonist',
    text: '這……這是我的命樹？好醜……怎麼會這麼醜？',
    nextNodeId: 'yi1-chapter-4-5',
  },
  {
    id: 'yi1-chapter-4-5',
    speaker: 'sushi',
    text: '那些黑色的結節，是妳過去受過的傷，還有妳否認過的自己——「伊」。',
    nextNodeId: 'yi1-chapter-4-6',
  },
  {
    id: 'yi1-chapter-4-6',
    speaker: 'yi',
    speakerName: '伊',
    text: '嘻嘻……終於看到我了嗎？妳想假裝我不在嗎？',
    emotionSFX: 'evil_giggle',
    effect: 'glitch', // 故障特效
    nextNodeId: 'yi1-chapter-4-choice',
  },
  {
    id: 'yi1-chapter-4-choice',
    speaker: 'narrator',
    text: '恐懼佔據了妳的全身。',
    choices: [
      { id: 'ch4-deny', text: '我不承認這是我的！', nextNodeId: 'yi1-chapter-4-end' },
      { id: 'ch4-run', text: '讓我離開這裡！', nextNodeId: 'yi1-chapter-4-end' },
    ],
  },
  {
    id: 'yi1-chapter-4-end',
    speaker: 'protagonist',
    text: '夠了！我不想看！把這些東西拿走！！',
    effect: 'glitch',        // ⚠️ 強烈崩壞感
    emotionSFX: 'ear_ringing', // 耳鳴聲
    bgImage: 'void_chaos',   // 混亂背景
    nextNodeId: 'yi1-chapter-5-1', // 🔗 連接到第五章（黑屏開場）
  },
];
