/**
 * 章節主題色配置
 * 根據每章的情感基調設定專屬色彩
 */

export interface ChapterTheme {
  /** 主色調 HSL 值 */
  hue: number;
  saturation: number;
  lightness: number;
  /** 情感類型描述 */
  mood: 'calm' | 'tension' | 'emotional' | 'revelation' | 'mysterious' | 'inspiring';
}

// 預設主題（琥珀金）
const defaultTheme: ChapterTheme = {
  hue: 38,
  saturation: 80,
  lightness: 55,
  mood: 'calm',
};

// 章節主題映射
const chapterThemes: Record<string, ChapterTheme> = {
  // 作者序 - 平靜金色
  preface: {
    hue: 38,
    saturation: 75,
    lightness: 55,
    mood: 'calm',
  },
  
  // 序章 - 神秘紫藍
  prologue: {
    hue: 260,
    saturation: 50,
    lightness: 50,
    mood: 'mysterious',
  },
  
  // 第一章・刪除 - 緊張深紅
  'chapter-1': {
    hue: 350,
    saturation: 70,
    lightness: 45,
    mood: 'tension',
  },
  
  // 第二章・渡口 - 迷霧青藍
  'chapter-2': {
    hue: 200,
    saturation: 50,
    lightness: 50,
    mood: 'mysterious',
  },
  
  // 第三章・真相 - 啟示金
  'chapter-3': {
    hue: 42,
    saturation: 85,
    lightness: 58,
    mood: 'revelation',
  },
  
  // 第四章・命樹 - 生命綠
  'chapter-4': {
    hue: 140,
    saturation: 50,
    lightness: 45,
    mood: 'calm',
  },
  
  // 第五章・也無風雨 - 蘇軾青灰
  'chapter-5': {
    hue: 190,
    saturation: 35,
    lightness: 55,
    mood: 'calm',
  },
  
  // 第六章・吾性自足 - 王陽明暖金
  'chapter-6': {
    hue: 45,
    saturation: 70,
    lightness: 55,
    mood: 'revelation',
  },
  
  // 第七章・誰定的規矩 - 武則天皇紫
  'chapter-7': {
    hue: 280,
    saturation: 60,
    lightness: 50,
    mood: 'inspiring',
  },
  
  // 第八章・筆比命長 - 司馬遷墨藍
  'chapter-8': {
    hue: 220,
    saturation: 45,
    lightness: 45,
    mood: 'emotional',
  },
  
  // 第九章・天生我材 - 李白月白
  'chapter-9': {
    hue: 50,
    saturation: 60,
    lightness: 70,
    mood: 'inspiring',
  },
  
  // 第十章・海倫凱勒 - 溫暖粉橙
  'chapter-10': {
    hue: 25,
    saturation: 65,
    lightness: 55,
    mood: 'emotional',
  },
  
  // 第十一章・曼德拉 - 解放橙紅
  'chapter-11': {
    hue: 15,
    saturation: 75,
    lightness: 50,
    mood: 'inspiring',
  },
  
  // 第十二章・星夜 - 梵谷星藍
  'chapter-12': {
    hue: 230,
    saturation: 65,
    lightness: 55,
    mood: 'emotional',
  },
  
  // 第十三章・連結點 - 賈伯斯極簡白
  'chapter-13': {
    hue: 0,
    saturation: 0,
    lightness: 85,
    mood: 'inspiring',
  },
  
  // 第十四章・未歸者畫廊 - 幽暗藍紫
  'chapter-14': {
    hue: 270,
    saturation: 45,
    lightness: 35,
    mood: 'emotional',
  },
  
  // 第十五章・伊 - 陰影深紅
  'chapter-15': {
    hue: 350,
    saturation: 65,
    lightness: 40,
    mood: 'tension',
  },
  
  // 第十六章・一歸一 - 融合金紫
  'chapter-16': {
    hue: 45,
    saturation: 70,
    lightness: 60,
    mood: 'revelation',
  },
  
  // 終章・名字 - 圓滿琥珀
  epilogue: {
    hue: 38,
    saturation: 85,
    lightness: 65,
    mood: 'calm',
  },
};

/**
 * 根據章節 ID 獲取主題色
 */
export function getChapterTheme(chapterKey: string): ChapterTheme {
  // 標準化 key（移除 yi1- 前綴）
  const normalized = chapterKey.replace(/^yi1-/, '');
  
  // 精確匹配
  if (chapterThemes[normalized]) {
    return chapterThemes[normalized];
  }
  
  // 嘗試從節點 ID 提取章節
  const matchDash = normalized.match(/chapter-(\d+)/);
  if (matchDash) {
    const key = `chapter-${matchDash[1]}`;
    return chapterThemes[key] || defaultTheme;
  }
  
  const matchNoDash = normalized.match(/chapter(\d+)/);
  if (matchNoDash) {
    const key = `chapter-${matchNoDash[1]}`;
    return chapterThemes[key] || defaultTheme;
  }
  
  return defaultTheme;
}

/**
 * 將主題轉換為 CSS HSL 字串
 */
export function themeToHSL(theme: ChapterTheme, opacity?: number): string {
  if (opacity !== undefined) {
    return `hsl(${theme.hue} ${theme.saturation}% ${theme.lightness}% / ${opacity})`;
  }
  return `hsl(${theme.hue} ${theme.saturation}% ${theme.lightness}%)`;
}

/**
 * 獲取主題的高亮變體
 */
export function themeToGlow(theme: ChapterTheme, opacity = 0.6): string {
  return `hsl(${theme.hue} ${Math.min(theme.saturation + 10, 100)}% ${Math.min(theme.lightness + 15, 85)}% / ${opacity})`;
}
