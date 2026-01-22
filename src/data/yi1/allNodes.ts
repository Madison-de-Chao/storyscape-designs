import type { DialogueNode } from '@/stores/gameStore';

// 引入所有章節 (路徑相對於 src/data/yi1/)
import { prefaceNodes } from './prefaceNodes';
import { prologueNodes } from './prologueNodes'; // 注意：您之前可能命名為 yi1PrologueNodes，請確認檔案內的 export 名稱
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
import { chapter12Nodes } from './chapter12Nodes';
import { chapter13Nodes } from './chapter13Nodes';
import { chapter14Nodes } from './chapter14Nodes';
import { chapter15Nodes } from './chapter15Nodes';
import { chapter16Nodes } from './chapter16Nodes';
import { epilogueNodes } from './epilogueNodes';
import { postscriptNodes } from './postscriptNodes';

// 合併導出
export const allNodes: DialogueNode[] = [
  ...prefaceNodes,
  ...prologueNodes, // 如果匯出名稱不同，請在這裡修改，例如 ...yi1PrologueNodes
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
  ...chapter12Nodes,
  ...chapter13Nodes,
  ...chapter14Nodes,
  ...chapter15Nodes,
  ...chapter16Nodes,
  ...epilogueNodes,
  ...postscriptNodes,
];
