export type IntroStyle =
  | 'signal-fragment'    // 序章：訊號碎片 + 故障閃爍
  | 'digital-wake'      // 第零章：鬧鐘 + 數位噪訊醒來
  | 'file-delete'       // 第一章：檔案刪除動畫
  | 'memory-gap'        // 第二章：記憶斷片（閃白 + 碎片）
  | 'mirror-crack'      // 第三章：鏡子碎裂
  | 'hotpot-steam'      // 第四章：火鍋蒸氣模糊
  | 'hollywood-curtain' // 第五章：好萊塢金幕拉開
  | 'cliff-dream'       // 第六章：懸崖夢境
  | 'search-screen'     // 第七章：螢幕搜尋滾動
  | 'mirror-dialogue'   // 第八章：鏡中對話
  | 'cherry-filter'     // 第九章：櫻花篩選
  | 'spotlight-stage'   // 第十章：舞台聚光燈
  | 'echo-ripple'       // 第十一章：回聲波紋
  | 'zero-countdown'    // 第十二章：歸零倒數
  | 'default';          // 預設淡入

export interface Yi2ChapterIntroProps {
  chapterKey: string;
  title: string;
  subtitle: string;
  quote?: string;
  style: IntroStyle;
  onComplete: () => void;
}

/** 章節 key → 動畫風格映射 */
export const yi2IntroStyles: Record<string, IntroStyle> = {
  'yi2-prologue': 'signal-fragment',
  'yi2-preface': 'default',
  'yi2-ch0': 'digital-wake',
  'yi2-ch1': 'file-delete',
  'yi2-ch2': 'memory-gap',
  'yi2-ch3': 'mirror-crack',
  'yi2-ch4': 'hotpot-steam',
  'yi2-ch5': 'hollywood-curtain',
  'yi2-ch6': 'cliff-dream',
  'yi2-ch7': 'search-screen',
  'yi2-ch8': 'mirror-dialogue',
  'yi2-ch9': 'cherry-filter',
  'yi2-ch10': 'spotlight-stage',
  'yi2-ch11': 'echo-ripple',
  'yi2-ch12': 'zero-countdown',
};
