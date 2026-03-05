// 第二部「弧度歸零：伊」主入口（上冊＋下冊）
import type { Chapter, DialogueNode } from '@/stores/gameStore';
import { yi2ChaptersMeta, yi2TotalSuggestedImages } from './chapters';
import { yi2PrefaceNodes } from './prefaceNodes';
import { chapter0Nodes } from './chapter0Nodes';
import { chapter1Nodes } from './chapter1Nodes';
import { chapter2Nodes } from './chapter2Nodes';
import { chapter3Nodes } from './chapter3Nodes';
import { chapter4Nodes } from './chapter4Nodes';
import { chapter5Nodes } from './chapter5Nodes';
import { chapter8Nodes } from './chapter8Nodes';
import { chapter9Nodes } from './chapter9Nodes';
import { chapter10Nodes } from './chapter10Nodes';
import { chapter11Nodes } from './chapter11Nodes';
import { chapter12Nodes } from './chapter12Nodes';

// 合併所有節點
export const yi2AllNodes: DialogueNode[] = [
  ...yi2PrefaceNodes,
  ...chapter0Nodes,
  ...chapter1Nodes,
  ...chapter2Nodes,
  ...chapter3Nodes,
  ...chapter4Nodes,
  ...chapter5Nodes,
  // TODO: 第六章、第七章文稿尚未提供，待補充
  ...chapter8Nodes,
  ...chapter9Nodes,
  ...chapter10Nodes,
  ...chapter11Nodes,
  ...chapter12Nodes,
];

// 章節定義
export const yi2Chapter: Chapter = {
  id: 'yi2',
  title: '弧度歸零：伊',
  subtitle: '受害者濾鏡的療癒之旅',
  theme: '受害者濾鏡',
  color: '#C0392B',
  nodes: yi2AllNodes,
};

// 根據 ID 獲取節點
export const getYi2NodeById = (nodeId: string): DialogueNode | undefined => {
  return yi2AllNodes.find(node => node.id === nodeId);
};

// 導出
export { yi2ChaptersMeta, yi2TotalSuggestedImages };
