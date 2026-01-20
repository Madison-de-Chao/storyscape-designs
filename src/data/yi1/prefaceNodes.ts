// 作者序｜致那個等待被擁抱的你
// 精簡版：25節點 → 15節點
import type { DialogueNode } from '@/stores/gameStore';

export const prefaceNodes: DialogueNode[] = [
  {
    id: 'preface-1',
    speaker: 'narrator',
    text: '我曾經是一個很努力想當「好人」的人。',
    nextNodeId: 'preface-2',
  },
  {
    id: 'preface-2',
    speaker: 'narrator',
    text: '努力壓抑憤怒，因為「我不應該生氣」。努力隱藏悲傷，因為「我不應該軟弱」。',
    nextNodeId: 'preface-3',
  },
  {
    id: 'preface-3',
    speaker: 'narrator',
    text: '我把所有「不應該」的部分，一塊一塊地切下來，藏到心裡最深的角落。',
    nextNodeId: 'preface-4',
  },
  {
    id: 'preface-4',
    speaker: 'narrator',
    text: '我錯了。每切掉一塊，我就少一塊。',
    nextNodeId: 'preface-choice-1',
    effect: 'glow',
  },
  {
    id: 'preface-choice-1',
    speaker: 'narrator',
    text: '你是否也曾這樣對待自己？',
    choices: [
      { id: 'preface-c1-a', text: '是的，我總是壓抑自己', nextNodeId: 'preface-5a', arcChange: -5, shadowChange: 5 },
      { id: 'preface-c1-b', text: '偶爾會，但我知道不對', nextNodeId: 'preface-5b', arcChange: 5, shadowChange: 0 },
      { id: 'preface-c1-c', text: '我不確定...', nextNodeId: 'preface-5c', arcChange: 0, shadowChange: 0 },
    ],
  },
  {
    id: 'preface-5a',
    speaker: 'narrator',
    text: '我明白。那份壓抑的重量，我也曾承受過。',
    nextNodeId: 'preface-6',
  },
  {
    id: 'preface-5b',
    speaker: 'narrator',
    text: '能意識到這一點，已經是改變的開始。',
    nextNodeId: 'preface-6',
  },
  {
    id: 'preface-5c',
    speaker: 'narrator',
    text: '沒關係。這個故事，會幫助你找到答案。',
    nextNodeId: 'preface-6',
  },
  {
    id: 'preface-6',
    speaker: 'narrator',
    text: '我花了很長時間才明白——二元的存在，從來不是為了讓我們選邊站。',
    nextNodeId: 'preface-7',
    effect: 'glow',
  },
  {
    id: 'preface-7',
    speaker: 'narrator',
    text: '光明與黑暗不是敵人。它們是同一個圓的不同弧段，同一個「你」的不同面向。',
    nextNodeId: 'preface-8',
  },
  {
    id: 'preface-8',
    speaker: 'narrator',
    text: '你的善良，是因為你知道什麼是殘忍。你的勇敢，是因為你知道什麼是恐懼。',
    nextNodeId: 'preface-9',
  },
  {
    id: 'preface-9',
    speaker: 'narrator',
    text: '黑暗不是光明的敵人。黑暗是光明能夠被看見的原因。',
    nextNodeId: 'preface-10',
    effect: 'glow',
  },
  {
    id: 'preface-10',
    speaker: 'narrator',
    text: '這就是我在這本書裡想說的話——明暗相成，非為相照。',
    nextNodeId: 'preface-11',
    effect: 'glow',
  },
  {
    id: 'preface-11',
    speaker: 'narrator',
    text: '我寫這個故事，是寫給所有正在跟自己打仗的人。寫給那些覺得自己不夠好的人。',
    nextNodeId: 'preface-12',
  },
  {
    id: 'preface-12',
    speaker: 'narrator',
    text: '你不需要再切割自己了。你需要的，是讓所有的部分重新相遇。',
    nextNodeId: 'preface-end',
    effect: 'glow',
  },
  {
    id: 'preface-end',
    speaker: 'narrator',
    text: '默默超\n於元壹紀年・弧度歸零之際',
    nextNodeId: 'prologue-1',
  },
];
