// 場景圖片映射配置
// 定義每個節點或節點範圍對應的場景圖片

import IMG01_作者序 from '@/assets/scenes/IMG01_作者序_統一版.png';
import IMG02_訓練場 from '@/assets/scenes/IMG02_訓練場_統一版.png';
import IMG03_問心初登場 from '@/assets/scenes/IMG03_問心初登場_統一版.png';
import IMG04_刪除之夜 from '@/assets/scenes/IMG04_刪除之夜_統一版.png';
import IMG05_刪除鍵特寫 from '@/assets/scenes/IMG05_刪除鍵特寫_統一版.png';
import IMG06_靈魂抽離 from '@/assets/scenes/IMG06_靈魂抽離_統一版.png';
import IMG07_迷霧渡口 from '@/assets/scenes/IMG07_迷霧渡口_統一版.png';
import IMG08_擺渡人 from '@/assets/scenes/IMG08_擺渡人_統一版.png';
import IMG09_王陽明 from '@/assets/scenes/IMG09_王陽明_統一版.png';
import IMG10_心即理 from '@/assets/scenes/IMG10_心即理_統一版.png';

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
    // 支援 preface-1, preface-2, ... 格式
    nodePatterns: ['preface-'],
  },
  {
    image: IMG02_訓練場,
    alt: '訓練場',
    // 序章前半（1-30）：訓練場場景
    nodePatterns: ['prologue-1', 'prologue-2', 'prologue-3', 'prologue-4', 'prologue-5', 'prologue-6', 'prologue-7', 'prologue-8', 'prologue-9', 'prologue-10', 'prologue-11', 'prologue-12', 'prologue-13', 'prologue-14', 'prologue-15', 'prologue-16', 'prologue-17', 'prologue-18', 'prologue-19', 'prologue-20', 'prologue-21', 'prologue-22', 'prologue-23', 'prologue-24', 'prologue-25', 'prologue-26', 'prologue-27', 'prologue-28', 'prologue-29', 'prologue-30'],
  },
  {
    image: IMG04_刪除之夜,
    alt: '刪除之夜',
    // 序章後半（31-end）：刪除之夜場景
    nodePatterns: ['prologue-31', 'prologue-32', 'prologue-33', 'prologue-34', 'prologue-35', 'prologue-36', 'prologue-37', 'prologue-38', 'prologue-39', 'prologue-40', 'prologue-41', 'prologue-42', 'prologue-43', 'prologue-44', 'prologue-45', 'prologue-46', 'prologue-47', 'prologue-48', 'prologue-49', 'prologue-50', 'prologue-51', 'prologue-52', 'prologue-53', 'prologue-54', 'prologue-55', 'prologue-56', 'prologue-57', 'prologue-58', 'prologue-59', 'prologue-60', 'prologue-61', 'prologue-62', 'prologue-63', 'prologue-64', 'prologue-65', 'prologue-66', 'prologue-67', 'prologue-68', 'prologue-end'],
  },
  {
    image: IMG04_刪除之夜,
    alt: '刪除之夜',
    // 第一章前半：刪除之夜延續
    nodePatterns: ['chapter-1-intro', 'chapter-1-1', 'chapter-1-2', 'chapter-1-3', 'chapter-1-4', 'chapter-1-5', 'chapter-1-6', 'chapter-1-7', 'chapter-1-8', 'chapter-1-9', 'chapter-1-10', 'chapter-1-11', 'chapter-1-12', 'chapter-1-13', 'chapter-1-14', 'chapter-1-15', 'chapter-1-16', 'chapter-1-17', 'chapter-1-18', 'chapter-1-19', 'chapter-1-20', 'chapter-1-21', 'chapter-1-22', 'chapter-1-23', 'chapter-1-24', 'chapter-1-25', 'chapter-1-26', 'chapter-1-27', 'chapter-1-28', 'chapter-1-29', 'chapter-1-30'],
  },
  {
    image: IMG05_刪除鍵特寫,
    alt: '刪除鍵特寫',
    nodePatterns: ['chapter-1-69', 'chapter-1-70', 'chapter-1-71', 'chapter-1-72', 'chapter-1-73', 'chapter-1-74', 'chapter-1-75', 'chapter-1-76', 'chapter-1-77', 'chapter-1-78', 'chapter-1-79', 'chapter-1-80', 'chapter-1-81', 'chapter-1-82', 'chapter-1-83', 'chapter-1-84', 'chapter-1-85', 'chapter-1-86', 'chapter-1-87', 'chapter-1-88', 'chapter-1-89', 'chapter-1-90', 'chapter-1-91', 'chapter-1-92', 'chapter-1-93', 'chapter-1-94', 'chapter-1-95', 'chapter-1-96', 'chapter-1-97', 'chapter-1-98', 'chapter-1-99', 'chapter-1-100'],
  },
  {
    image: IMG06_靈魂抽離,
    alt: '靈魂抽離',
    nodePatterns: ['chapter-1-101', 'chapter-1-102', 'chapter-1-103', 'chapter-1-104', 'chapter-1-105', 'chapter-1-106', 'chapter-1-107', 'chapter-1-108', 'chapter-1-109', 'chapter-1-110', 'chapter-1-end'],
  },
  {
    image: IMG07_迷霧渡口,
    alt: '迷霧渡口',
    nodePatterns: ['chapter-2-intro', 'chapter-2-1', 'chapter-2-2', 'chapter-2-3', 'chapter-2-4', 'chapter-2-5', 'chapter-2-6', 'chapter-2-7', 'chapter-2-8', 'chapter-2-9', 'chapter-2-10', 'chapter-2-11', 'chapter-2-12', 'chapter-2-13', 'chapter-2-14', 'chapter-2-15'],
  },
  {
    image: IMG03_問心初登場,
    alt: '問心初登場',
    nodePatterns: ['chapter-2-16', 'chapter-2-17', 'chapter-2-18', 'chapter-2-19', 'chapter-2-20', 'chapter-2-21', 'chapter-2-22', 'chapter-2-23', 'chapter-2-24', 'chapter-2-25', 'chapter-2-26', 'chapter-2-27', 'chapter-2-28', 'chapter-2-29', 'chapter-2-30', 'chapter-2-31', 'chapter-2-32', 'chapter-2-33', 'chapter-2-34', 'chapter-2-35', 'chapter-2-36', 'chapter-2-37', 'chapter-2-38', 'chapter-2-39', 'chapter-2-40', 'chapter-2-41', 'chapter-2-42', 'chapter-2-43', 'chapter-2-44', 'chapter-2-45'],
  },
  {
    image: IMG08_擺渡人,
    alt: '擺渡人',
    nodePatterns: ['chapter-2-46', 'chapter-2-47', 'chapter-2-48', 'chapter-2-49', 'chapter-2-50', 'chapter-2-51', 'chapter-2-52', 'chapter-2-53', 'chapter-2-54', 'chapter-2-55', 'chapter-2-56', 'chapter-2-57', 'chapter-2-58', 'chapter-2-59', 'chapter-2-60', 'chapter-2-61', 'chapter-2-62', 'chapter-2-63', 'chapter-2-64', 'chapter-2-65', 'chapter-2-66', 'chapter-2-67', 'chapter-2-68', 'chapter-2-69', 'chapter-2-70', 'chapter-2-71', 'chapter-2-72', 'chapter-2-73', 'chapter-2-74', 'chapter-2-75', 'chapter-2-76', 'chapter-2-77', 'chapter-2-78', 'chapter-2-79', 'chapter-2-80', 'chapter-2-end'],
  },
  {
    image: IMG09_王陽明,
    alt: '王陽明',
    nodePatterns: ['chapter-3-intro', 'chapter-3-1', 'chapter-3-2', 'chapter-3-3', 'chapter-3-4', 'chapter-3-5', 'chapter-3-6', 'chapter-3-7', 'chapter-3-8', 'chapter-3-9', 'chapter-3-10', 'chapter-3-11', 'chapter-3-12', 'chapter-3-13', 'chapter-3-14', 'chapter-3-15', 'chapter-3-16', 'chapter-3-17', 'chapter-3-18', 'chapter-3-19', 'chapter-3-20', 'chapter-3-21', 'chapter-3-22', 'chapter-3-23', 'chapter-3-24', 'chapter-3-25', 'chapter-3-26', 'chapter-3-27', 'chapter-3-28', 'chapter-3-29', 'chapter-3-30', 'chapter-3-31', 'chapter-3-32', 'chapter-3-33', 'chapter-3-34', 'chapter-3-35', 'chapter-3-36', 'chapter-3-37', 'chapter-3-38', 'chapter-3-39', 'chapter-3-40', 'chapter-3-41', 'chapter-3-42', 'chapter-3-43', 'chapter-3-44', 'chapter-3-45', 'chapter-3-46', 'chapter-3-47', 'chapter-3-48', 'chapter-3-49', 'chapter-3-50', 'chapter-3-51', 'chapter-3-52', 'chapter-3-53', 'chapter-3-54', 'chapter-3-55'],
  },
  {
    image: IMG10_心即理,
    alt: '心即理',
    nodePatterns: ['chapter-3-56', 'chapter-3-57', 'chapter-3-58', 'chapter-3-59', 'chapter-3-60', 'chapter-3-61', 'chapter-3-62', 'chapter-3-63', 'chapter-3-64', 'chapter-3-65', 'chapter-3-66', 'chapter-3-67', 'chapter-3-68', 'chapter-3-69', 'chapter-3-70', 'chapter-3-71', 'chapter-3-72', 'chapter-3-73', 'chapter-3-74', 'chapter-3-75', 'chapter-3-76', 'chapter-3-77', 'chapter-3-78', 'chapter-3-79', 'chapter-3-80', 'chapter-3-end'],
  },
];

// 根據節點 ID 獲取對應的場景圖片
export function getSceneImage(nodeId: string): SceneImageConfig | null {
  // 統一移除 yi1- 前綴進行匹配
  const normalizedId = nodeId.replace(/^yi1-/, '');
  
  for (const config of sceneImages) {
    for (const pattern of config.nodePatterns) {
      // 直接比對或前綴匹配
      if (normalizedId === pattern || normalizedId.startsWith(pattern)) {
        return config;
      }
    }
  }
  return null;
}
