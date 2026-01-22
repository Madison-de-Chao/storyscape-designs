import type { DialogueNode } from '@/stores/gameStore';

export const chapter7Nodes: DialogueNode[] = [
  {
    id: 'yi1-chapter-7-1',
    speaker: 'narrator',
    text: '周圍的空氣突然變得沉重，彷彿凝固了一般。原本的竹林書卷氣瞬間消散。',
    effect: 'camera-shake', // 鏡頭微震，製造不安
    bgImage: 'palace_shadow', // 宮殿陰影
    emotionSFX: 'heavy_drum', // 低沉的鼓聲
    nextNodeId: 'yi1-chapter-7-2',
  },
  {
    id: 'yi1-chapter-7-2',
    speaker: 'wuzetian',
    speakerName: '？？？',
    text: '抬起頭來。孤，沒許妳跪著。',
    effect: 'flash', // 閃光霸氣登場
    voice: 'regal_female', 
    nextNodeId: 'yi1-chapter-7-3',
  },
  {
    id: 'yi1-chapter-7-3',
    speaker: 'wuzetian',
    speakerName: '武則天',
    text: '聽說妳學會了接納自己？很好。但這世上的規矩，可不會因為妳接納了自己就放過妳。',
    bgImage: 'wuzetian_throne',
    nextNodeId: 'yi1-chapter-7-4',
  },
  {
    id: 'yi1-chapter-7-4',
    speaker: 'protagonist',
    text: '您是……武皇？',
    nextNodeId: 'yi1-chapter-7-5',
  },
  {
    id: 'yi1-chapter-7-5',
    speaker: 'wuzetian',
    text: '他們叫我女人、篡位者、牝雞司晨。但我只叫我自己——皇帝。',
    nextNodeId: 'yi1-chapter-7-6',
  },
  {
    id: 'yi1-chapter-7-6',
    speaker: 'wuzetian',
    text: '妳在怕什麼？怕別人的眼光？還是怕打破規矩？',
    choices: [
      { id: 'ch7-fear-eyes', text: '我怕別人指指點點...', nextNodeId: 'yi1-chapter-7-7' },
      { id: 'ch7-fear-rule', text: '我怕做錯事...', nextNodeId: 'yi1-chapter-7-7' },
    ],
  },
  {
    id: 'yi1-chapter-7-7',
    speaker: 'wuzetian',
    text: '規矩是強者制定的。妳若不成為強者，就只能被規矩玩弄。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-7-end',
  },
  {
    id: 'yi1-chapter-7-end',
    speaker: 'wuzetian',
    text: '挺起胸膛走出去。權力不是賜予的，是奪取的。下一位歸者，會教妳比權力更永恆的東西——「使命」。',
    nextNodeId: 'yi1-chapter-8-1', // 🔗 連接到司馬遷
    effect: 'fade-out',
  },
];
