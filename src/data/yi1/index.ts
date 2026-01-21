// 第一部「弧度歸零：壹」主入口
import type { Chapter, DialogueNode } from '@/stores/gameStore';
import { yi1ChaptersMeta, totalSuggestedImages } from './chapters';
import { prefaceNodes } from './prefaceNodes';
import { yi1PrologueNodes } from './prologueNodes';
import { chapter1Nodes } from './chapter1Nodes';
import { chapter2Nodes } from './chapter2Nodes';
import { chapter3Nodes } from './chapter3Nodes';
import { chapter4Nodes } from './chapter4Nodes';
import { chapter5Nodes } from './chapter5Nodes';
import { chapter6Nodes } from './chapter6Nodes';
import { chapter7Nodes } from './chapter7Nodes';
import { chapter8Nodes } from './chapter8Nodes';
import { chapter9Nodes } from './chapter9Nodes';
import { chapter10Nodes } from './chapter10Nodes';
import { chapter11Nodes } from './chapter11Nodes';

// 合併所有節點
export const yi1AllNodes: DialogueNode[] = [
  ...prefaceNodes,
  ...yi1PrologueNodes,
  ...chapter1Nodes,
  ...chapter2Nodes,
  ...chapter3Nodes,
  ...chapter4Nodes,
  ...chapter5Nodes,
  ...chapter6Nodes,
  ...chapter7Nodes,
  ...chapter8Nodes,
  ...chapter9Nodes,
  ...chapter10Nodes,
  ...chapter11Nodes,
  // TODO: 後續章節將在此添加
];

// 章節定義
export const yi1Chapter: Chapter = {
  id: 'yi1',
  title: '弧度歸零：壹',
  subtitle: '致那個等待被擁抱的你',
  theme: '完整',
  color: '#D4AF37',
  nodes: yi1AllNodes,
};

// 根據 ID 獲取節點
export const getYi1NodeById = (nodeId: string): DialogueNode | undefined => {
  // 先直接查找
  let node = yi1AllNodes.find(node => node.id === nodeId);
  
  // 如果找不到，嘗試移除 'yi1-' 前綴再找（兼容舊的節點 ID）
  if (!node && nodeId.startsWith('yi1-')) {
    const strippedId = nodeId.replace('yi1-', '');
    node = yi1AllNodes.find(node => node.id === strippedId);
  }
  
  return node;
};

// 導出
export { yi1ChaptersMeta, totalSuggestedImages };
export type { ChapterMeta } from './chapters';
