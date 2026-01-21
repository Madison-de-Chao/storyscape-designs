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
import IMG11_蘇軾命樹 from '@/assets/scenes/IMG11_蘇軾命樹_統一版.png';
import IMG12_命樹特寫 from '@/assets/scenes/IMG12_命樹特寫_統一版.png';
import IMG13_江邊回憶 from '@/assets/scenes/IMG13_江邊回憶_統一版.png';
import IMG14_弧度林全景 from '@/assets/scenes/IMG14_弧度林全景_統一版.png';
import IMG15_主角海棠命樹 from '@/assets/scenes/IMG15_主角海棠命樹_統一版.png';
import IMG16_司馬遷書房 from '@/assets/scenes/IMG16_司馬遷書房_統一版.png';
import IMG17_書匣打開 from '@/assets/scenes/IMG17_書匣打開_統一版.png';
import IMG18_女子畫廊 from '@/assets/scenes/IMG18_女子畫廊_統一版.png';
import IMG19_武則天 from '@/assets/scenes/IMG19_武則天_統一版.png';
import IMG20_朱紅鳳門 from '@/assets/scenes/IMG20_朱紅鳳門_統一版.png';
import IMG21_李白月下醉臥 from '@/assets/scenes/IMG21_李白月下醉臥_統一版.png';
import IMG22_詩句化光 from '@/assets/scenes/IMG22_詩句化光_統一版.png';
import IMG23_曼德拉鐵窗 from '@/assets/scenes/IMG23_曼德拉鐵窗_統一版.png';
import IMG24_牢籠成花園 from '@/assets/scenes/IMG24_牢籠成花園_統一版.png';
import IMG25_寬恕釋放 from '@/assets/scenes/IMG25_寬恕釋放_統一版.png';
import IMG26_海倫凱勒 from '@/assets/scenes/IMG26_海倫凱勒_統一版.png';
import IMG27_觸覺世界 from '@/assets/scenes/IMG27_觸覺世界_統一版.png';
import IMG28_心靈之眼 from '@/assets/scenes/IMG28_心靈之眼_統一版.png';
import IMG29_梵谷星夜 from '@/assets/scenes/IMG29_梵谷星夜_統一版.png';
import IMG30_畫布流動 from '@/assets/scenes/IMG30_畫布流動_統一版.png';
import IMG31_痛苦昇華 from '@/assets/scenes/IMG31_痛苦昇華_統一版.png';

export interface SceneImageConfig {
  image: string;
  alt: string;
  // 節點 ID 前綴或完整 ID 列表
  nodePatterns: string[];
}

export const sceneImages: SceneImageConfig[] = [
  // === 作者序 ===
  {
    image: IMG01_作者序,
    alt: '作者序',
    nodePatterns: ['preface-'],
  },

  // === 序章：訓練場 ===
  {
    image: IMG02_訓練場,
    alt: '訓練場',
    nodePatterns: ['prologue-'],
  },

  // === 第一章：刪除 ===
  {
    image: IMG04_刪除之夜,
    alt: '刪除之夜',
    nodePatterns: ['chapter-1-intro', 'chapter-1-1', 'chapter-1-2', 'chapter-1-3', 'chapter-1-4', 'chapter-1-5', 'chapter-1-6', 'chapter-1-7', 'chapter-1-8', 'chapter-1-9', 'chapter-1-10', 'chapter-1-11', 'chapter-1-12', 'chapter-1-13', 'chapter-1-14', 'chapter-1-15', 'chapter-1-16', 'chapter-1-17', 'chapter-1-18', 'chapter-1-19', 'chapter-1-20', 'chapter-1-21', 'chapter-1-22', 'chapter-1-23', 'chapter-1-24', 'chapter-1-25', 'chapter-1-26', 'chapter-1-27', 'chapter-1-28', 'chapter-1-29', 'chapter-1-30'],
  },
  {
    image: IMG05_刪除鍵特寫,
    alt: '刪除鍵特寫',
    nodePatterns: ['chapter-1-31', 'chapter-1-32', 'chapter-1-33', 'chapter-1-34', 'chapter-1-35', 'chapter-1-36', 'chapter-1-37', 'chapter-1-38', 'chapter-1-39', 'chapter-1-40', 'chapter-1-41', 'chapter-1-42', 'chapter-1-43', 'chapter-1-44', 'chapter-1-45', 'chapter-1-choice', 'chapter-1-confirm', 'chapter-1-cancel'],
  },
  {
    image: IMG06_靈魂抽離,
    alt: '靈魂抽離',
    nodePatterns: ['chapter-1-46', 'chapter-1-47', 'chapter-1-48', 'chapter-1-49', 'chapter-1-50', 'chapter-1-end'],
  },

  // === 第二章：渡口 ===
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
    nodePatterns: ['chapter-2-46', 'chapter-2-47', 'chapter-2-48', 'chapter-2-49', 'chapter-2-50', 'chapter-2-51', 'chapter-2-52', 'chapter-2-53', 'chapter-2-54', 'chapter-2-55', 'chapter-2-56', 'chapter-2-57', 'chapter-2-58', 'chapter-2-59', 'chapter-2-60', 'chapter-2-end'],
  },

  // === 第三章：心即理（王陽明）===
  {
    image: IMG09_王陽明,
    alt: '王陽明',
    nodePatterns: ['chapter-3-'],
  },
  {
    image: IMG10_心即理,
    alt: '心即理',
    nodePatterns: ['chapter-3-40', 'chapter-3-41', 'chapter-3-42', 'chapter-3-43', 'chapter-3-44', 'chapter-3-45', 'chapter-3-46', 'chapter-3-47', 'chapter-3-48', 'chapter-3-49', 'chapter-3-50', 'chapter-3-end'],
  },

  // === 第四章：命樹（蘇軾）===
  {
    image: IMG11_蘇軾命樹,
    alt: '蘇軾命樹',
    nodePatterns: ['chapter-4-intro', 'chapter-4-1', 'chapter-4-2', 'chapter-4-3', 'chapter-4-4', 'chapter-4-5', 'chapter-4-6', 'chapter-4-7', 'chapter-4-8', 'chapter-4-9', 'chapter-4-10', 'chapter-4-11', 'chapter-4-12', 'chapter-4-13', 'chapter-4-14', 'chapter-4-15', 'chapter-4-16', 'chapter-4-17', 'chapter-4-18', 'chapter-4-19', 'chapter-4-20'],
  },
  {
    image: IMG13_江邊回憶,
    alt: '江邊回憶',
    nodePatterns: ['chapter-4-21', 'chapter-4-22', 'chapter-4-23', 'chapter-4-24', 'chapter-4-25', 'chapter-4-26', 'chapter-4-27', 'chapter-4-28', 'chapter-4-29', 'chapter-4-30', 'chapter-4-31', 'chapter-4-32', 'chapter-4-33', 'chapter-4-34', 'chapter-4-35'],
  },
  {
    image: IMG14_弧度林全景,
    alt: '弧度林全景',
    nodePatterns: ['chapter-4-36', 'chapter-4-37', 'chapter-4-38', 'chapter-4-39', 'chapter-4-40', 'chapter-4-41', 'chapter-4-42', 'chapter-4-43', 'chapter-4-44', 'chapter-4-45', 'chapter-4-46', 'chapter-4-47', 'chapter-4-48', 'chapter-4-49', 'chapter-4-50'],
  },
  {
    image: IMG15_主角海棠命樹,
    alt: '主角海棠命樹',
    nodePatterns: ['chapter-4-51', 'chapter-4-52', 'chapter-4-53', 'chapter-4-54', 'chapter-4-55', 'chapter-4-56', 'chapter-4-57', 'chapter-4-58', 'chapter-4-59', 'chapter-4-60', 'chapter-4-end'],
  },

  // === 第五章：一性自足 ===
  {
    image: IMG12_命樹特寫,
    alt: '命樹特寫',
    nodePatterns: ['chapter-5-'],
  },

  // === 第六章：龍場悟道 ===
  {
    image: IMG09_王陽明,
    alt: '王陽明龍場',
    nodePatterns: ['chapter-6-'],
  },

  // === 第七章：誰定的規矩（武則天）===
  {
    image: IMG18_女子畫廊,
    alt: '女子畫廊',
    nodePatterns: ['chapter7-1', 'chapter7-2', 'chapter7-3', 'chapter7-4', 'chapter7-5', 'chapter7-6'],
  },
  {
    image: IMG20_朱紅鳳門,
    alt: '朱紅鳳門',
    nodePatterns: ['chapter7-7', 'chapter7-8', 'chapter7-9', 'chapter7-10', 'chapter7-11', 'chapter7-12', 'chapter7-13', 'chapter7-14', 'chapter7-15'],
  },
  {
    image: IMG19_武則天,
    alt: '武則天',
    nodePatterns: ['chapter7-'],
  },

  // === 第八章：筆比命長（司馬遷）===
  {
    image: IMG16_司馬遷書房,
    alt: '司馬遷書房',
    nodePatterns: ['chapter8-1', 'chapter8-2', 'chapter8-3', 'chapter8-4', 'chapter8-5', 'chapter8-6', 'chapter8-7', 'chapter8-8', 'chapter8-9', 'chapter8-10', 'chapter8-11', 'chapter8-12', 'chapter8-13', 'chapter8-14', 'chapter8-15', 'chapter8-16', 'chapter8-17', 'chapter8-18', 'chapter8-19', 'chapter8-20', 'chapter8-21', 'chapter8-22', 'chapter8-23', 'chapter8-24', 'chapter8-25', 'chapter8-26', 'chapter8-27', 'chapter8-28', 'chapter8-29', 'chapter8-30'],
  },
  {
    image: IMG17_書匣打開,
    alt: '書匣打開',
    nodePatterns: ['chapter8-'],
  },

  // === 第九章：天生我材（李白）===
  {
    image: IMG21_李白月下醉臥,
    alt: '李白月下醉臥',
    nodePatterns: ['chapter9-1', 'chapter9-2', 'chapter9-3', 'chapter9-4', 'chapter9-5', 'chapter9-6', 'chapter9-7', 'chapter9-8', 'chapter9-9', 'chapter9-10', 'chapter9-11', 'chapter9-12', 'chapter9-13', 'chapter9-14', 'chapter9-15', 'chapter9-16', 'chapter9-17', 'chapter9-18', 'chapter9-19', 'chapter9-20', 'chapter9-21', 'chapter9-22', 'chapter9-23', 'chapter9-24', 'chapter9-25', 'chapter9-26', 'chapter9-27', 'chapter9-28', 'chapter9-29', 'chapter9-30'],
  },
  {
    image: IMG22_詩句化光,
    alt: '詩句化光',
    nodePatterns: ['chapter9-'],
  },

  // === 第十章：權力與愛（凱薩與克麗奧佩特拉）===
  {
    image: IMG29_梵谷星夜,
    alt: '歐式花園',
    nodePatterns: ['chapter10-1', 'chapter10-2', 'chapter10-3', 'chapter10-4', 'chapter10-5', 'chapter10-6', 'chapter10-7', 'chapter10-8', 'chapter10-9', 'chapter10-10', 'chapter10-11', 'chapter10-12', 'chapter10-13', 'chapter10-14', 'chapter10-15', 'chapter10-16', 'chapter10-17', 'chapter10-18', 'chapter10-19', 'chapter10-20'],
  },
  {
    image: IMG30_畫布流動,
    alt: '權力對話',
    nodePatterns: ['chapter10-'],
  },

  // === 第十一章：毒藥（曼德拉）===
  {
    image: IMG24_牢籠成花園,
    alt: '曼德拉花園',
    nodePatterns: ['chapter11-1', 'chapter11-2', 'chapter11-3', 'chapter11-4', 'chapter11-5', 'chapter11-6', 'chapter11-7', 'chapter11-8', 'chapter11-9', 'chapter11-10', 'chapter11-11', 'chapter11-12', 'chapter11-13', 'chapter11-14', 'chapter11-15', 'chapter11-16', 'chapter11-17', 'chapter11-18', 'chapter11-19', 'chapter11-20'],
  },
  {
    image: IMG23_曼德拉鐵窗,
    alt: '曼德拉鐵窗',
    nodePatterns: ['chapter11-21', 'chapter11-22', 'chapter11-23', 'chapter11-24', 'chapter11-25', 'chapter11-26', 'chapter11-27', 'chapter11-28', 'chapter11-29', 'chapter11-30', 'chapter11-31', 'chapter11-32', 'chapter11-33', 'chapter11-34', 'chapter11-35', 'chapter11-36', 'chapter11-37', 'chapter11-38', 'chapter11-39', 'chapter11-40'],
  },
  {
    image: IMG25_寬恕釋放,
    alt: '寬恕釋放',
    nodePatterns: ['chapter11-'],
  },
];

// 根據節點 ID 獲取對應的場景圖片
export function getSceneImage(nodeId: string): SceneImageConfig | null {
  // 統一移除 yi1- 前綴進行匹配
  const normalizedId = nodeId.replace(/^yi1-/, '');
  
  for (const config of sceneImages) {
    for (const pattern of config.nodePatterns) {
      // 精確匹配優先（用於特定節點範圍）
      if (normalizedId === pattern) {
        return config;
      }
      // 前綴匹配（用於通用範圍，如 'chapter7-'）
      if (pattern.endsWith('-') && normalizedId.startsWith(pattern)) {
        return config;
      }
    }
  }
  return null;
}
