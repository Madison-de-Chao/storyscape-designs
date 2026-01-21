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
import IMG32_問心再現 from '@/assets/scenes/IMG32_問心再現_統一版.png';
import IMG33_主角轉變 from '@/assets/scenes/IMG33_主角轉變_統一版.png';
import IMG34_海棠盛開 from '@/assets/scenes/IMG34_海棠盛開_統一版.png';
import IMG35_洞穴入口 from '@/assets/scenes/IMG35_洞穴入口_統一版.png';
import IMG36_記憶洞穴 from '@/assets/scenes/IMG36_記憶洞穴_統一版.png';
import IMG37_童年碎片 from '@/assets/scenes/IMG37_童年碎片_統一版.png';
import IMG38_失敗碎片 from '@/assets/scenes/IMG38_失敗碎片_統一版.png';
import IMG39_觸摸修復 from '@/assets/scenes/IMG39_觸摸修復_統一版.png';
import IMG40_洞穴光明 from '@/assets/scenes/IMG40_洞穴光明_統一版.png';
import IMG41_回到渡口 from '@/assets/scenes/IMG41_回到渡口_統一版.png';
import IMG42_問心告別 from '@/assets/scenes/IMG42_問心告別_統一版.png';
import IMG43_登船 from '@/assets/scenes/IMG43_登船_統一版.png';
import IMG44_星河航行 from '@/assets/scenes/IMG44_星河航行_統一版.png';
import IMG45_光之門 from '@/assets/scenes/IMG45_光之門_統一版.png';
import IMG46_穿越光門 from '@/assets/scenes/IMG46_穿越光門_統一版.png';
import IMG47_回到房間 from '@/assets/scenes/IMG47_回到房間_統一版.png';
import IMG48_按取消 from '@/assets/scenes/IMG48_按取消_統一版.png';
import IMG49_清晨窗景 from '@/assets/scenes/IMG49_清晨窗景_統一版.png';
import IMG50_起身 from '@/assets/scenes/IMG50_起身_統一版.png';
import IMG51_新的開始 from '@/assets/scenes/IMG51_新的開始_統一版.png';

export interface SceneImageConfig {
  image: string;
  alt: string;
  // 節點 ID 前綴或完整 ID 列表
  nodePatterns: string[];
}

// 預設圖片（當沒有匹配時使用）
export const defaultSceneImage: SceneImageConfig = {
  image: IMG02_訓練場,
  alt: '預設場景',
  nodePatterns: [],
};

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

  // === 第二章：渡口（支援 yi1- 前綴）===
  {
    image: IMG07_迷霧渡口,
    alt: '迷霧渡口',
    nodePatterns: ['chapter-2-intro', 'chapter-2-1', 'chapter-2-2', 'chapter-2-3', 'chapter-2-4', 'chapter-2-5', 'chapter-2-6', 'chapter-2-7', 'chapter-2-8', 'chapter-2-9', 'chapter-2-10', 'chapter-2-11', 'chapter-2-12', 'chapter-2-13', 'chapter-2-14', 'chapter-2-15'],
  },
  {
    image: IMG03_問心初登場,
    alt: '問心初登場',
    nodePatterns: ['chapter-2-16', 'chapter-2-17', 'chapter-2-18', 'chapter-2-19', 'chapter-2-20', 'chapter-2-21', 'chapter-2-22', 'chapter-2-23', 'chapter-2-24', 'chapter-2-25', 'chapter-2-26', 'chapter-2-27', 'chapter-2-28', 'chapter-2-29', 'chapter-2-30', 'chapter-2-choice-1', 'chapter-2-31', 'chapter-2-32', 'chapter-2-33', 'chapter-2-34', 'chapter-2-35'],
  },
  {
    image: IMG08_擺渡人,
    alt: '擺渡人',
    nodePatterns: ['chapter-2-36', 'chapter-2-37', 'chapter-2-38', 'chapter-2-39', 'chapter-2-40', 'chapter-2-41', 'chapter-2-42', 'chapter-2-43', 'chapter-2-44', 'chapter-2-45', 'chapter-2-46', 'chapter-2-47', 'chapter-2-48', 'chapter-2-49', 'chapter-2-50', 'chapter-2-51', 'chapter-2-52', 'chapter-2-53', 'chapter-2-54', 'chapter-2-55', 'chapter-2-56', 'chapter-2-57', 'chapter-2-58', 'chapter-2-59', 'chapter-2-60', 'chapter-2-end', 'chapter-2-choice-2'],
  },

  // === 第三章：心即理（王陽明，支援 yi1- 前綴）===
  {
    image: IMG09_王陽明,
    alt: '王陽明',
    nodePatterns: ['chapter-3-intro', 'chapter-3-1', 'chapter-3-2', 'chapter-3-3', 'chapter-3-4', 'chapter-3-5', 'chapter-3-6', 'chapter-3-7', 'chapter-3-8', 'chapter-3-9', 'chapter-3-10', 'chapter-3-11', 'chapter-3-12', 'chapter-3-13', 'chapter-3-14', 'chapter-3-15', 'chapter-3-16', 'chapter-3-17', 'chapter-3-18', 'chapter-3-19', 'chapter-3-20', 'chapter-3-21', 'chapter-3-22', 'chapter-3-23', 'chapter-3-24', 'chapter-3-25', 'chapter-3-26', 'chapter-3-27', 'chapter-3-28', 'chapter-3-29', 'chapter-3-30'],
  },
  {
    image: IMG10_心即理,
    alt: '心即理',
    nodePatterns: ['chapter-3-31', 'chapter-3-32', 'chapter-3-33', 'chapter-3-34', 'chapter-3-35', 'chapter-3-36', 'chapter-3-37', 'chapter-3-38', 'chapter-3-39', 'chapter-3-40', 'chapter-3-41', 'chapter-3-42', 'chapter-3-43', 'chapter-3-44', 'chapter-3-45', 'chapter-3-46', 'chapter-3-47', 'chapter-3-48', 'chapter-3-49', 'chapter-3-50', 'chapter-3-choice-1', 'chapter-3-choice-2', 'chapter-3-end'],
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
    nodePatterns: ['chapter-4-21', 'chapter-4-22', 'chapter-4-23', 'chapter-4-24', 'chapter-4-25', 'chapter-4-26', 'chapter-4-27', 'chapter-4-28', 'chapter-4-29', 'chapter-4-30', 'chapter-4-31', 'chapter-4-32', 'chapter-4-33', 'chapter-4-34', 'chapter-4-35', 'chapter-4-choice-1'],
  },
  {
    image: IMG14_弧度林全景,
    alt: '弧度林全景',
    nodePatterns: ['chapter-4-36', 'chapter-4-37', 'chapter-4-38', 'chapter-4-39', 'chapter-4-40', 'chapter-4-41', 'chapter-4-42', 'chapter-4-43', 'chapter-4-44', 'chapter-4-45', 'chapter-4-46', 'chapter-4-47', 'chapter-4-48', 'chapter-4-49', 'chapter-4-50'],
  },
  {
    image: IMG15_主角海棠命樹,
    alt: '主角海棠命樹',
    nodePatterns: ['chapter-4-51', 'chapter-4-52', 'chapter-4-53', 'chapter-4-54', 'chapter-4-55', 'chapter-4-56', 'chapter-4-57', 'chapter-4-58', 'chapter-4-59', 'chapter-4-60', 'chapter-4-choice-2', 'chapter-4-end'],
  },

  // === 第五章：也無風雨也無晴 ===
  {
    image: IMG11_蘇軾命樹,
    alt: '蘇軾庭院',
    nodePatterns: ['chapter-5-intro', 'chapter-5-1', 'chapter-5-2', 'chapter-5-3', 'chapter-5-4', 'chapter-5-5', 'chapter-5-6', 'chapter-5-7', 'chapter-5-8', 'chapter-5-9', 'chapter-5-10', 'chapter-5-11', 'chapter-5-12', 'chapter-5-13', 'chapter-5-14', 'chapter-5-15', 'chapter-5-16', 'chapter-5-17', 'chapter-5-18', 'chapter-5-19', 'chapter-5-20'],
  },
  {
    image: IMG12_命樹特寫,
    alt: '命樹特寫',
    nodePatterns: ['chapter-5-21', 'chapter-5-22', 'chapter-5-23', 'chapter-5-24', 'chapter-5-25', 'chapter-5-26', 'chapter-5-27', 'chapter-5-28', 'chapter-5-29', 'chapter-5-30', 'chapter-5-31', 'chapter-5-32', 'chapter-5-33', 'chapter-5-34', 'chapter-5-35', 'chapter-5-36', 'chapter-5-37', 'chapter-5-38', 'chapter-5-39', 'chapter-5-40'],
  },
  {
    image: IMG14_弧度林全景,
    alt: '弧度林',
    nodePatterns: ['chapter-5-'],
  },

  // === 第六章：吾性自足（王陽明龍場）===
  {
    image: IMG09_王陽明,
    alt: '王陽明',
    nodePatterns: ['chapter-6-intro', 'chapter-6-1', 'chapter-6-2', 'chapter-6-3', 'chapter-6-4', 'chapter-6-5', 'chapter-6-6', 'chapter-6-7', 'chapter-6-8', 'chapter-6-9', 'chapter-6-10', 'chapter-6-11', 'chapter-6-12', 'chapter-6-13', 'chapter-6-14', 'chapter-6-15', 'chapter-6-16', 'chapter-6-17', 'chapter-6-18', 'chapter-6-19', 'chapter-6-20'],
  },
  {
    image: IMG10_心即理,
    alt: '心即理',
    nodePatterns: ['chapter-6-'],
  },

  // === 第七章：誰定的規矩（武則天）===
  {
    image: IMG18_女子畫廊,
    alt: '女子畫廊',
    nodePatterns: ['chapter7-1', 'chapter7-2', 'chapter7-3', 'chapter7-4', 'chapter7-5', 'chapter7-6', 'chapter7-7', 'chapter7-8', 'chapter7-9', 'chapter7-10', 'chapter-7-1', 'chapter-7-2', 'chapter-7-3', 'chapter-7-4', 'chapter-7-5', 'chapter-7-6', 'chapter-7-7', 'chapter-7-8', 'chapter-7-9', 'chapter-7-10'],
  },
  {
    image: IMG20_朱紅鳳門,
    alt: '朱紅鳳門',
    nodePatterns: ['chapter7-11', 'chapter7-12', 'chapter7-13', 'chapter7-14', 'chapter7-15', 'chapter7-16', 'chapter7-17', 'chapter7-18', 'chapter7-19', 'chapter7-20', 'chapter-7-11', 'chapter-7-12', 'chapter-7-13', 'chapter-7-14', 'chapter-7-15', 'chapter-7-16', 'chapter-7-17', 'chapter-7-18', 'chapter-7-19', 'chapter-7-20'],
  },
  {
    image: IMG19_武則天,
    alt: '武則天',
    nodePatterns: ['chapter7-', 'chapter-7-'],
  },

  // === 第八章：筆比命長（司馬遷）===
  {
    image: IMG16_司馬遷書房,
    alt: '司馬遷書房',
    nodePatterns: ['chapter8-1', 'chapter8-2', 'chapter8-3', 'chapter8-4', 'chapter8-5', 'chapter8-6', 'chapter8-7', 'chapter8-8', 'chapter8-9', 'chapter8-10', 'chapter8-11', 'chapter8-12', 'chapter8-13', 'chapter8-14', 'chapter8-15', 'chapter8-16', 'chapter8-17', 'chapter8-18', 'chapter8-19', 'chapter8-20', 'chapter-8-1', 'chapter-8-2', 'chapter-8-3', 'chapter-8-4', 'chapter-8-5', 'chapter-8-6', 'chapter-8-7', 'chapter-8-8', 'chapter-8-9', 'chapter-8-10', 'chapter-8-11', 'chapter-8-12', 'chapter-8-13', 'chapter-8-14', 'chapter-8-15', 'chapter-8-16', 'chapter-8-17', 'chapter-8-18', 'chapter-8-19', 'chapter-8-20'],
  },
  {
    image: IMG17_書匣打開,
    alt: '書匣打開',
    nodePatterns: ['chapter8-', 'chapter-8-'],
  },

  // === 第九章：天生我材（李白）===
  {
    image: IMG21_李白月下醉臥,
    alt: '李白月下醉臥',
    nodePatterns: ['chapter9-1', 'chapter9-2', 'chapter9-3', 'chapter9-4', 'chapter9-5', 'chapter9-6', 'chapter9-7', 'chapter9-8', 'chapter9-9', 'chapter9-10', 'chapter9-11', 'chapter9-12', 'chapter9-13', 'chapter9-14', 'chapter9-15', 'chapter9-16', 'chapter9-17', 'chapter9-18', 'chapter9-19', 'chapter9-20', 'chapter-9-1', 'chapter-9-2', 'chapter-9-3', 'chapter-9-4', 'chapter-9-5', 'chapter-9-6', 'chapter-9-7', 'chapter-9-8', 'chapter-9-9', 'chapter-9-10', 'chapter-9-11', 'chapter-9-12', 'chapter-9-13', 'chapter-9-14', 'chapter-9-15', 'chapter-9-16', 'chapter-9-17', 'chapter-9-18', 'chapter-9-19', 'chapter-9-20'],
  },
  {
    image: IMG22_詩句化光,
    alt: '詩句化光',
    nodePatterns: ['chapter9-', 'chapter-9-'],
  },

  // === 第十章：海倫凱勒 ===
  {
    image: IMG26_海倫凱勒,
    alt: '海倫凱勒',
    nodePatterns: ['chapter10-1', 'chapter10-2', 'chapter10-3', 'chapter10-4', 'chapter10-5', 'chapter10-6', 'chapter10-7', 'chapter10-8', 'chapter10-9', 'chapter10-10', 'chapter10-11', 'chapter10-12', 'chapter10-13', 'chapter10-14', 'chapter10-15', 'chapter-10-1', 'chapter-10-2', 'chapter-10-3', 'chapter-10-4', 'chapter-10-5', 'chapter-10-6', 'chapter-10-7', 'chapter-10-8', 'chapter-10-9', 'chapter-10-10', 'chapter-10-11', 'chapter-10-12', 'chapter-10-13', 'chapter-10-14', 'chapter-10-15'],
  },
  {
    image: IMG27_觸覺世界,
    alt: '觸覺世界',
    nodePatterns: ['chapter10-16', 'chapter10-17', 'chapter10-18', 'chapter10-19', 'chapter10-20', 'chapter10-21', 'chapter10-22', 'chapter10-23', 'chapter10-24', 'chapter10-25', 'chapter10-26', 'chapter10-27', 'chapter10-28', 'chapter10-29', 'chapter10-30', 'chapter-10-16', 'chapter-10-17', 'chapter-10-18', 'chapter-10-19', 'chapter-10-20', 'chapter-10-21', 'chapter-10-22', 'chapter-10-23', 'chapter-10-24', 'chapter-10-25', 'chapter-10-26', 'chapter-10-27', 'chapter-10-28', 'chapter-10-29', 'chapter-10-30'],
  },
  {
    image: IMG28_心靈之眼,
    alt: '心靈之眼',
    nodePatterns: ['chapter10-', 'chapter-10-'],
  },

  // === 第十一章：毒藥（曼德拉）===
  {
    image: IMG24_牢籠成花園,
    alt: '曼德拉花園',
    nodePatterns: ['chapter11-1', 'chapter11-2', 'chapter11-3', 'chapter11-4', 'chapter11-5', 'chapter11-6', 'chapter11-7', 'chapter11-8', 'chapter11-9', 'chapter11-10', 'chapter11-11', 'chapter11-12', 'chapter11-13', 'chapter11-14', 'chapter11-15', 'chapter-11-1', 'chapter-11-2', 'chapter-11-3', 'chapter-11-4', 'chapter-11-5', 'chapter-11-6', 'chapter-11-7', 'chapter-11-8', 'chapter-11-9', 'chapter-11-10', 'chapter-11-11', 'chapter-11-12', 'chapter-11-13', 'chapter-11-14', 'chapter-11-15'],
  },
  {
    image: IMG23_曼德拉鐵窗,
    alt: '曼德拉鐵窗',
    nodePatterns: ['chapter11-16', 'chapter11-17', 'chapter11-18', 'chapter11-19', 'chapter11-20', 'chapter11-21', 'chapter11-22', 'chapter11-23', 'chapter11-24', 'chapter11-25', 'chapter11-26', 'chapter11-27', 'chapter11-28', 'chapter11-29', 'chapter11-30', 'chapter-11-16', 'chapter-11-17', 'chapter-11-18', 'chapter-11-19', 'chapter-11-20', 'chapter-11-21', 'chapter-11-22', 'chapter-11-23', 'chapter-11-24', 'chapter-11-25', 'chapter-11-26', 'chapter-11-27', 'chapter-11-28', 'chapter-11-29', 'chapter-11-30'],
  },
  {
    image: IMG25_寬恕釋放,
    alt: '寬恕釋放',
    nodePatterns: ['chapter11-', 'chapter-11-'],
  },

  // === 第十二章：星夜（梵谷）===
  {
    image: IMG29_梵谷星夜,
    alt: '梵谷星夜',
    nodePatterns: ['chapter12-1', 'chapter12-2', 'chapter12-3', 'chapter12-4', 'chapter12-5', 'chapter12-6', 'chapter12-7', 'chapter12-8', 'chapter12-9', 'chapter12-10', 'chapter12-11', 'chapter12-12', 'chapter12-13', 'chapter12-14', 'chapter12-15', 'chapter-12-1', 'chapter-12-2', 'chapter-12-3', 'chapter-12-4', 'chapter-12-5', 'chapter-12-6', 'chapter-12-7', 'chapter-12-8', 'chapter-12-9', 'chapter-12-10', 'chapter-12-11', 'chapter-12-12', 'chapter-12-13', 'chapter-12-14', 'chapter-12-15'],
  },
  {
    image: IMG30_畫布流動,
    alt: '畫布流動',
    nodePatterns: ['chapter12-16', 'chapter12-17', 'chapter12-18', 'chapter12-19', 'chapter12-20', 'chapter12-21', 'chapter12-22', 'chapter12-23', 'chapter12-24', 'chapter12-25', 'chapter12-26', 'chapter12-27', 'chapter12-28', 'chapter12-29', 'chapter12-30', 'chapter-12-16', 'chapter-12-17', 'chapter-12-18', 'chapter-12-19', 'chapter-12-20', 'chapter-12-21', 'chapter-12-22', 'chapter-12-23', 'chapter-12-24', 'chapter-12-25', 'chapter-12-26', 'chapter-12-27', 'chapter-12-28', 'chapter-12-29', 'chapter-12-30'],
  },
  {
    image: IMG31_痛苦昇華,
    alt: '痛苦昇華',
    nodePatterns: ['chapter12-', 'chapter-12-'],
  },

  // === 第十三章：解放（林肯）/ 連結點（賈伯斯）===
  {
    image: IMG32_問心再現,
    alt: '問心再現',
    nodePatterns: ['chapter13-1', 'chapter13-2', 'chapter13-3', 'chapter13-4', 'chapter13-5', 'chapter13-6', 'chapter13-7', 'chapter13-8', 'chapter13-9', 'chapter13-10', 'chapter-13-1', 'chapter-13-2', 'chapter-13-3', 'chapter-13-4', 'chapter-13-5', 'chapter-13-6', 'chapter-13-7', 'chapter-13-8', 'chapter-13-9', 'chapter-13-10'],
  },
  {
    image: IMG33_主角轉變,
    alt: '主角轉變',
    nodePatterns: ['chapter13-', 'chapter-13-'],
  },

  // === 第十四章：連結點（賈伯斯）===
  {
    image: IMG34_海棠盛開,
    alt: '海棠盛開',
    nodePatterns: ['chapter14-1', 'chapter14-2', 'chapter14-3', 'chapter14-4', 'chapter14-5', 'chapter14-6', 'chapter14-7', 'chapter14-8', 'chapter14-9', 'chapter14-10', 'chapter-14-1', 'chapter-14-2', 'chapter-14-3', 'chapter-14-4', 'chapter-14-5', 'chapter-14-6', 'chapter-14-7', 'chapter-14-8', 'chapter-14-9', 'chapter-14-10'],
  },
  {
    image: IMG35_洞穴入口,
    alt: '洞穴入口',
    nodePatterns: ['chapter14-11', 'chapter14-12', 'chapter14-13', 'chapter14-14', 'chapter14-15', 'chapter14-16', 'chapter14-17', 'chapter14-18', 'chapter14-19', 'chapter14-20', 'chapter-14-11', 'chapter-14-12', 'chapter-14-13', 'chapter-14-14', 'chapter-14-15', 'chapter-14-16', 'chapter-14-17', 'chapter-14-18', 'chapter-14-19', 'chapter-14-20'],
  },
  {
    image: IMG36_記憶洞穴,
    alt: '記憶洞穴',
    nodePatterns: ['chapter14-', 'chapter-14-'],
  },

  // === 終章：歸零 ===
  {
    image: IMG41_回到渡口,
    alt: '回到渡口',
    nodePatterns: ['chapter15-1', 'chapter15-2', 'chapter15-3', 'chapter15-4', 'chapter15-5', 'chapter15-6', 'chapter15-7', 'chapter15-8', 'chapter15-9', 'chapter15-10', 'chapter-15-1', 'chapter-15-2', 'chapter-15-3', 'chapter-15-4', 'chapter-15-5', 'chapter-15-6', 'chapter-15-7', 'chapter-15-8', 'chapter-15-9', 'chapter-15-10', 'finale-1', 'finale-2', 'finale-3', 'finale-4', 'finale-5', 'finale-6', 'finale-7', 'finale-8', 'finale-9', 'finale-10'],
  },
  {
    image: IMG42_問心告別,
    alt: '問心告別',
    nodePatterns: ['finale-11', 'finale-12', 'finale-13', 'finale-14', 'finale-15', 'finale-16', 'finale-17', 'finale-18', 'finale-19', 'finale-20'],
  },
  {
    image: IMG43_登船,
    alt: '登船',
    nodePatterns: ['finale-21', 'finale-22', 'finale-23', 'finale-24', 'finale-25'],
  },
  {
    image: IMG44_星河航行,
    alt: '星河航行',
    nodePatterns: ['finale-26', 'finale-27', 'finale-28', 'finale-29', 'finale-30'],
  },
  {
    image: IMG45_光之門,
    alt: '光之門',
    nodePatterns: ['finale-31', 'finale-32', 'finale-33', 'finale-34', 'finale-35'],
  },
  {
    image: IMG46_穿越光門,
    alt: '穿越光門',
    nodePatterns: ['finale-36', 'finale-37', 'finale-38', 'finale-39', 'finale-40'],
  },
  {
    image: IMG47_回到房間,
    alt: '回到房間',
    nodePatterns: ['finale-41', 'finale-42', 'finale-43', 'finale-44', 'finale-45'],
  },
  {
    image: IMG48_按取消,
    alt: '按取消',
    nodePatterns: ['finale-46', 'finale-47', 'finale-48', 'finale-49', 'finale-50'],
  },
  {
    image: IMG49_清晨窗景,
    alt: '清晨窗景',
    nodePatterns: ['finale-51', 'finale-52', 'finale-53', 'finale-54', 'finale-55'],
  },
  {
    image: IMG50_起身,
    alt: '起身',
    nodePatterns: ['finale-56', 'finale-57', 'finale-58', 'finale-59', 'finale-60'],
  },
  {
    image: IMG51_新的開始,
    alt: '新的開始',
    nodePatterns: ['finale-', 'chapter15-', 'chapter-15-'],
  },
];

// 根據節點 ID 獲取對應的場景圖片
export function getSceneImage(nodeId: string): SceneImageConfig | null {
  // 統一移除 yi1- 前綴進行匹配
  const normalizedId = nodeId.replace(/^yi1-/, '');
  
  // 優先進行精確匹配
  for (const config of sceneImages) {
    for (const pattern of config.nodePatterns) {
      if (normalizedId === pattern) {
        return config;
      }
    }
  }
  
  // 再進行前綴匹配
  for (const config of sceneImages) {
    for (const pattern of config.nodePatterns) {
      if (pattern.endsWith('-') && normalizedId.startsWith(pattern)) {
        return config;
      }
    }
  }
  
  // 如果沒有匹配，返回預設圖片
  return defaultSceneImage;
}
