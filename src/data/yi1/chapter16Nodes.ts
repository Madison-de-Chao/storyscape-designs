import type { DialogueNode } from '@/stores/gameStore';

export const chapter16Nodes: DialogueNode[] = [
  // 一、半圓的山
  {
    id: 'chapter16-1',
    speaker: 'narrator',
    text: '圓心閣在歸元山的山頂。那座山是一個完美的半圓形，像是被切了一半。',
    bgImage: 'half_mountain', 
    nextNodeId: 'chapter16-2',
  },
  {
    id: 'chapter16-2',
    speaker: 'wenxin',
    text: '另一半在你心裡。當你完整的時候，這座山在你眼中就是完整的。',
    nextNodeId: 'chapter16-3',
  },
  {
    id: 'chapter16-3',
    speaker: 'narrator',
    text: '她看著那座山，看見虛的那一半發著光，和實體的一半完美對稱。',
    effect: 'glow',
    nextNodeId: 'chapter16-4',
  },

  // 二、最後的選擇
  {
    id: 'chapter16-4',
    speaker: 'narrator',
    text: '山頂有一座簡單的亭子，桌上有一盞熄滅的燈。',
    bgImage: 'mountain_pavilion',
    nextNodeId: 'chapter16-5',
  },
  {
    id: 'chapter16-5',
    speaker: 'wenxin',
    text: '當你點亮這盞燈，你會面對最後一個選擇：留下成為歸者，或者回去。',
    nextNodeId: 'chapter16-6',
  },
  {
    id: 'chapter16-6',
    speaker: 'protagonist',
    text: '如果我回去，我會成功嗎？那個世界依然充滿了否定。',
    nextNodeId: 'chapter16-7',
  },
  {
    id: 'chapter16-7',
    speaker: 'wenxin',
    text: '完整不是一個狀態，而是一個選擇。你不是要達到一個終點，你是要走一條路——一條每天都可能迷路，但每天都可以找回來的路。',
    effect: 'glow',
    nextNodeId: 'chapter16-8',
  },

  // 三、我是壹
  {
    id: 'chapter16-8',
    speaker: 'protagonist',
    text: '我選擇回去。因為那裡還有像我一樣的人，我想試試能不能幫到他們。還有——我要把那些故事寫出來。',
    nextNodeId: 'chapter16-9',
  },
  {
    id: 'chapter16-9',
    speaker: 'wenxin',
    text: '那就點亮這盞燈吧。用你自己。',
    nextNodeId: 'chapter16-10',
  },
{
    id: 'chapter16-10',
    speaker: 'narrator',
    text: '她伸出手。一瞬間，意願化為光芒。燈亮了，金銀交織的光。',
    effect: 'flash', // 👈 全螢幕閃白光
    emotionSFX: 'holy_bell', // 建議搭配一個神聖的鐘聲
    nextNodeId: 'chapter16-11',
  },

  // 四、眾人的祝福
  {
    id: 'chapter16-11',
    speaker: 'narrator',
    text: '燈亮起的那一刻，她聽到了聲音。從四面八方傳來。',
    nextNodeId: 'chapter16-12',
  },
  {
    id: 'chapter16-12',
    speaker: 'sushi',
    text: '恭喜你。',
    nextNodeId: 'chapter16-13',
  },
  {
    id: 'chapter16-13',
    speaker: 'wangyangming',
    text: '你做到了。',
    nextNodeId: 'chapter16-14',
  },
  {
    id: 'chapter16-14',
    speaker: 'wuzetian',
    text: '我就知道你可以。',
    nextNodeId: 'chapter16-15',
  },
  {
    id: 'chapter16-15',
    speaker: 'simaqian',
    text: '殘缺也是完整的一部分。',
    nextNodeId: 'chapter16-16',
  },
  {
    id: 'chapter16-16',
    speaker: 'libai',
    text: '記得你真正想要的是什麼。',
    nextNodeId: 'chapter16-17',
  },
  {
    id: 'chapter16-17',
    speaker: 'narrator',
    text: '凱薩、克麗奧佩特拉、曼德拉、林肯、賈伯斯……所有的聲音像風一樣環繞著她。',
    effect: 'glow',
    nextNodeId: 'chapter16-18',
  },

  // 五、名字與回歸
  {
    id: 'chapter16-18',
    speaker: 'wenxin',
    text: '還有一件事。你的名字。在元壹境，名字是你完整之後，自己給自己的。',
    nextNodeId: 'chapter16-19',
  },
  {
    id: 'chapter16-19',
    speaker: 'protagonist',
    text: '我……不知道。',
    nextNodeId: 'chapter16-20',
  },
  {
    id: 'chapter16-20',
    speaker: 'wenxin',
    text: '不急。當你知道你是誰的時候，你就會知道你的名字。去吧，回到那個按鈕面前。',
    nextNodeId: 'chapter16-21',
  },
  {
    id: 'chapter16-21',
    speaker: 'narrator',
    text: '光芒擴散，世界抽離。她看見問心、圓心閣、元壹境在她眼前縮小成一個光點。',
    effect: 'fade-out-white',
    nextNodeId: 'epilogue-1', // 🔗 指向尾聲
  },
];
