// 場景圖片映射配置
// 定義每個節點或節點範圍對應的場景圖片

import IMG01_作者序 from '@/assets/scenes/IMG01_作者序.png';
import IMG02_訓練場 from '@/assets/scenes/IMG02_訓練場.png';
import IMG03_問心初登場 from '@/assets/scenes/IMG03_問心初登場.png';
import IMG04_刪除之夜 from '@/assets/scenes/IMG04_刪除之夜.png';
import IMG05_刪除鍵特寫 from '@/assets/scenes/IMG05_刪除鍵特寫.png';
import IMG06_靈魂抽離 from '@/assets/scenes/IMG06_靈魂抽離.png';
import IMG07_迷霧渡口 from '@/assets/scenes/IMG07_迷霧渡口.png';
import IMG08_擺渡人 from '@/assets/scenes/IMG08_擺渡人.png';
import IMG09_王陽明 from '@/assets/scenes/IMG09_王陽明.png';
import IMG10_心即理 from '@/assets/scenes/IMG10_心即理_繁中.png';

export interface SceneImageConfig {
  image: string;
  alt: string;
  // 節點 ID 前綴或完整 ID 列表
  nodePatterns: string[];
}

export const sceneImages: SceneImageConfig[] = [
  {
    image: IMG01_作者序,
    alt: '作者序',
    nodePatterns: ['yi1-preface-', 'preface-'],
  },
  {
    image: IMG02_訓練場,
    alt: '訓練場',
    nodePatterns: ['yi1-prologue-1', 'yi1-prologue-2', 'yi1-prologue-3', 'yi1-prologue-4', 'yi1-prologue-5', 'yi1-prologue-6', 'yi1-prologue-7', 'yi1-prologue-8', 'yi1-prologue-9', 'yi1-prologue-10', 'yi1-prologue-11', 'yi1-prologue-12', 'yi1-prologue-13', 'yi1-prologue-14', 'yi1-prologue-15', 'yi1-prologue-16', 'yi1-prologue-17', 'yi1-prologue-18', 'yi1-prologue-19', 'yi1-prologue-20', 'yi1-prologue-21', 'yi1-prologue-22', 'yi1-prologue-23', 'yi1-prologue-24', 'yi1-prologue-25', 'yi1-prologue-26', 'yi1-prologue-27', 'yi1-prologue-28', 'yi1-prologue-29', 'yi1-prologue-30'],
  },
  {
    image: IMG04_刪除之夜,
    alt: '刪除之夜',
    nodePatterns: ['yi1-prologue-31', 'yi1-prologue-32', 'yi1-prologue-33', 'yi1-prologue-34', 'yi1-prologue-35', 'yi1-prologue-36', 'yi1-prologue-37', 'yi1-prologue-38', 'yi1-prologue-39', 'yi1-prologue-40', 'yi1-prologue-41', 'yi1-prologue-42', 'yi1-prologue-43', 'yi1-prologue-44', 'yi1-prologue-45', 'yi1-prologue-46', 'yi1-prologue-47', 'yi1-prologue-48', 'yi1-prologue-49', 'yi1-prologue-50', 'yi1-prologue-51', 'yi1-prologue-52', 'yi1-prologue-53', 'yi1-prologue-54', 'yi1-prologue-55', 'yi1-prologue-56', 'yi1-prologue-57', 'yi1-prologue-58', 'yi1-prologue-59', 'yi1-prologue-60', 'yi1-prologue-61', 'yi1-prologue-62', 'yi1-prologue-63', 'yi1-prologue-64', 'yi1-prologue-65', 'yi1-prologue-66', 'yi1-prologue-67', 'yi1-prologue-68', 'yi1-prologue-end'],
  },
  {
    image: IMG04_刪除之夜,
    alt: '刪除之夜',
    nodePatterns: ['yi1-chapter-1-1', 'yi1-chapter-1-2', 'yi1-chapter-1-3', 'yi1-chapter-1-4', 'yi1-chapter-1-5', 'yi1-chapter-1-6', 'yi1-chapter-1-7', 'yi1-chapter-1-8', 'yi1-chapter-1-9', 'yi1-chapter-1-10', 'yi1-chapter-1-11', 'yi1-chapter-1-12', 'yi1-chapter-1-13', 'yi1-chapter-1-14', 'yi1-chapter-1-15', 'yi1-chapter-1-16', 'yi1-chapter-1-17', 'yi1-chapter-1-18', 'yi1-chapter-1-19', 'yi1-chapter-1-20', 'yi1-chapter-1-21', 'yi1-chapter-1-22', 'yi1-chapter-1-23', 'yi1-chapter-1-24', 'yi1-chapter-1-25', 'yi1-chapter-1-26', 'yi1-chapter-1-27', 'yi1-chapter-1-28', 'yi1-chapter-1-29', 'yi1-chapter-1-30', 'yi1-chapter-1-intro'],
  },
  {
    image: IMG05_刪除鍵特寫,
    alt: '刪除鍵特寫',
    nodePatterns: ['yi1-chapter-1-69', 'yi1-chapter-1-70', 'yi1-chapter-1-71', 'yi1-chapter-1-72', 'yi1-chapter-1-73', 'yi1-chapter-1-74', 'yi1-chapter-1-75', 'yi1-chapter-1-76', 'yi1-chapter-1-77', 'yi1-chapter-1-78', 'yi1-chapter-1-79', 'yi1-chapter-1-80', 'yi1-chapter-1-81', 'yi1-chapter-1-82', 'yi1-chapter-1-83', 'yi1-chapter-1-84', 'yi1-chapter-1-85', 'yi1-chapter-1-86', 'yi1-chapter-1-87', 'yi1-chapter-1-88', 'yi1-chapter-1-89', 'yi1-chapter-1-90', 'yi1-chapter-1-91', 'yi1-chapter-1-92', 'yi1-chapter-1-93', 'yi1-chapter-1-94', 'yi1-chapter-1-95', 'yi1-chapter-1-96', 'yi1-chapter-1-97', 'yi1-chapter-1-98', 'yi1-chapter-1-99', 'yi1-chapter-1-100'],
  },
  {
    image: IMG06_靈魂抽離,
    alt: '靈魂抽離',
    nodePatterns: ['yi1-chapter-1-101', 'yi1-chapter-1-102', 'yi1-chapter-1-103', 'yi1-chapter-1-104', 'yi1-chapter-1-105', 'yi1-chapter-1-106', 'yi1-chapter-1-107', 'yi1-chapter-1-108', 'yi1-chapter-1-109', 'yi1-chapter-1-110', 'yi1-chapter-1-end'],
  },
  {
    image: IMG07_迷霧渡口,
    alt: '迷霧渡口',
    nodePatterns: ['yi1-chapter-2-intro', 'yi1-chapter-2-1', 'yi1-chapter-2-2', 'yi1-chapter-2-3', 'yi1-chapter-2-4', 'yi1-chapter-2-5', 'yi1-chapter-2-6', 'yi1-chapter-2-7', 'yi1-chapter-2-8', 'yi1-chapter-2-9', 'yi1-chapter-2-10', 'yi1-chapter-2-11', 'yi1-chapter-2-12', 'yi1-chapter-2-13', 'yi1-chapter-2-14', 'yi1-chapter-2-15'],
  },
  {
    image: IMG03_問心初登場,
    alt: '問心初登場',
    nodePatterns: ['yi1-chapter-2-16', 'yi1-chapter-2-17', 'yi1-chapter-2-18', 'yi1-chapter-2-19', 'yi1-chapter-2-20', 'yi1-chapter-2-21', 'yi1-chapter-2-22', 'yi1-chapter-2-23', 'yi1-chapter-2-24', 'yi1-chapter-2-25', 'yi1-chapter-2-26', 'yi1-chapter-2-27', 'yi1-chapter-2-28', 'yi1-chapter-2-29', 'yi1-chapter-2-30', 'yi1-chapter-2-31', 'yi1-chapter-2-32', 'yi1-chapter-2-33', 'yi1-chapter-2-34', 'yi1-chapter-2-35', 'yi1-chapter-2-36', 'yi1-chapter-2-37', 'yi1-chapter-2-38', 'yi1-chapter-2-39', 'yi1-chapter-2-40', 'yi1-chapter-2-41', 'yi1-chapter-2-42', 'yi1-chapter-2-43', 'yi1-chapter-2-44', 'yi1-chapter-2-45'],
  },
  {
    image: IMG08_擺渡人,
    alt: '擺渡人',
    nodePatterns: ['yi1-chapter-2-46', 'yi1-chapter-2-47', 'yi1-chapter-2-48', 'yi1-chapter-2-49', 'yi1-chapter-2-50', 'yi1-chapter-2-51', 'yi1-chapter-2-52', 'yi1-chapter-2-53', 'yi1-chapter-2-54', 'yi1-chapter-2-55', 'yi1-chapter-2-56', 'yi1-chapter-2-57', 'yi1-chapter-2-58', 'yi1-chapter-2-59', 'yi1-chapter-2-60', 'yi1-chapter-2-61', 'yi1-chapter-2-62', 'yi1-chapter-2-63', 'yi1-chapter-2-64', 'yi1-chapter-2-65', 'yi1-chapter-2-66', 'yi1-chapter-2-67', 'yi1-chapter-2-68', 'yi1-chapter-2-69', 'yi1-chapter-2-70', 'yi1-chapter-2-71', 'yi1-chapter-2-72', 'yi1-chapter-2-73', 'yi1-chapter-2-74', 'yi1-chapter-2-75', 'yi1-chapter-2-76', 'yi1-chapter-2-77', 'yi1-chapter-2-78', 'yi1-chapter-2-79', 'yi1-chapter-2-80', 'yi1-chapter-2-end'],
  },
  {
    image: IMG09_王陽明,
    alt: '王陽明',
    nodePatterns: ['yi1-chapter-3-intro', 'yi1-chapter-3-1', 'yi1-chapter-3-2', 'yi1-chapter-3-3', 'yi1-chapter-3-4', 'yi1-chapter-3-5', 'yi1-chapter-3-6', 'yi1-chapter-3-7', 'yi1-chapter-3-8', 'yi1-chapter-3-9', 'yi1-chapter-3-10', 'yi1-chapter-3-11', 'yi1-chapter-3-12', 'yi1-chapter-3-13', 'yi1-chapter-3-14', 'yi1-chapter-3-15', 'yi1-chapter-3-16', 'yi1-chapter-3-17', 'yi1-chapter-3-18', 'yi1-chapter-3-19', 'yi1-chapter-3-20', 'yi1-chapter-3-21', 'yi1-chapter-3-22', 'yi1-chapter-3-23', 'yi1-chapter-3-24', 'yi1-chapter-3-25', 'yi1-chapter-3-26', 'yi1-chapter-3-27', 'yi1-chapter-3-28', 'yi1-chapter-3-29', 'yi1-chapter-3-30', 'yi1-chapter-3-31', 'yi1-chapter-3-32', 'yi1-chapter-3-33', 'yi1-chapter-3-34', 'yi1-chapter-3-35', 'yi1-chapter-3-36', 'yi1-chapter-3-37', 'yi1-chapter-3-38', 'yi1-chapter-3-39', 'yi1-chapter-3-40', 'yi1-chapter-3-41', 'yi1-chapter-3-42', 'yi1-chapter-3-43', 'yi1-chapter-3-44', 'yi1-chapter-3-45', 'yi1-chapter-3-46', 'yi1-chapter-3-47', 'yi1-chapter-3-48', 'yi1-chapter-3-49', 'yi1-chapter-3-50', 'yi1-chapter-3-51', 'yi1-chapter-3-52', 'yi1-chapter-3-53', 'yi1-chapter-3-54', 'yi1-chapter-3-55'],
  },
  {
    image: IMG10_心即理,
    alt: '心即理',
    nodePatterns: ['yi1-chapter-3-56', 'yi1-chapter-3-57', 'yi1-chapter-3-58', 'yi1-chapter-3-59', 'yi1-chapter-3-60', 'yi1-chapter-3-61', 'yi1-chapter-3-62', 'yi1-chapter-3-63', 'yi1-chapter-3-64', 'yi1-chapter-3-65', 'yi1-chapter-3-66', 'yi1-chapter-3-67', 'yi1-chapter-3-68', 'yi1-chapter-3-69', 'yi1-chapter-3-70', 'yi1-chapter-3-71', 'yi1-chapter-3-72', 'yi1-chapter-3-73', 'yi1-chapter-3-74', 'yi1-chapter-3-75', 'yi1-chapter-3-76', 'yi1-chapter-3-77', 'yi1-chapter-3-78', 'yi1-chapter-3-79', 'yi1-chapter-3-80', 'yi1-chapter-3-end'],
  },
];

// 根據節點 ID 獲取對應的場景圖片
export function getSceneImage(nodeId: string): SceneImageConfig | null {
  // 嘗試多種匹配方式：原始 ID、加上 yi1- 前綴、移除 yi1- 前綴
  const possibleIds = [
    nodeId,
    `yi1-${nodeId}`,
    nodeId.replace('yi1-', ''),
  ];
  
  for (const config of sceneImages) {
    for (const pattern of config.nodePatterns) {
      for (const id of possibleIds) {
        if (id === pattern || id.startsWith(pattern)) {
          return config;
        }
      }
    }
  }
  return null;
}
