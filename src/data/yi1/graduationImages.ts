// 畢業圖片資料：每一課的畢業圖片及相關資訊
// 這些圖片會在對應章節結束時以特殊效果顯示

import lesson01Sushi from '@/assets/scenes/graduation/lesson01_sushi_止血.webp';
import lesson02Wang from '@/assets/scenes/graduation/lesson02_wangyangming_內求.webp';
import lesson03Wu from '@/assets/scenes/graduation/lesson03_wuzetian_定義.webp';
import lesson04Sima from '@/assets/scenes/graduation/lesson04_simaqian_使命.webp';
import lesson05Libai from '@/assets/scenes/graduation/lesson05_libai_自由.webp';
import lesson06Caesar from '@/assets/scenes/graduation/lesson06_caesar_關係.webp';
import lesson07Mandela from '@/assets/scenes/graduation/lesson07_mandela_寬恕.webp';
import lesson08Lincoln from '@/assets/scenes/graduation/lesson08_lincoln_幽默.webp';
import lesson09Jobs from '@/assets/scenes/graduation/lesson09_jobs_破框.webp';
import journeyComplete from '@/assets/scenes/graduation/journey_complete_歸零.webp';

export interface GraduationImageData {
  id: string;
  image: string;
  mentor: string;
  theme: string;
  lessonTitle: string;
  quote: string;
}

// 畢業圖片對應資料
export const graduationImagesData: GraduationImageData[] = [
  {
    id: 'lesson-01',
    image: lesson01Sushi,
    mentor: '蘇軾',
    theme: '止血',
    lessonTitle: '第一課：止血',
    quote: '也無風雨也無晴',
  },
  {
    id: 'lesson-02',
    image: lesson02Wang,
    mentor: '王陽明',
    theme: '內求',
    lessonTitle: '第二課：內求',
    quote: '吾性自足',
  },
  {
    id: 'lesson-03',
    image: lesson03Wu,
    mentor: '武則天',
    theme: '定義',
    lessonTitle: '第三課：定義',
    quote: '規矩是前人寫的',
  },
  {
    id: 'lesson-04',
    image: lesson04Sima,
    mentor: '司馬遷',
    theme: '使命',
    lessonTitle: '第四課：使命',
    quote: '把自己活完',
  },
  {
    id: 'lesson-05',
    image: lesson05Libai,
    mentor: '李白',
    theme: '自由',
    lessonTitle: '第五課：自由',
    quote: '天生我材必有用',
  },
  {
    id: 'lesson-06',
    image: lesson06Caesar,
    mentor: '凱薩與克麗奧佩特拉',
    theme: '關係',
    lessonTitle: '第六課：關係',
    quote: '兩個完整的人彼此輝映',
  },
  {
    id: 'lesson-07',
    image: lesson07Mandela,
    mentor: '曼德拉',
    theme: '寬恕',
    lessonTitle: '第七課：寬恕',
    quote: '放下仇恨才能自由',
  },
  {
    id: 'lesson-08',
    image: lesson08Lincoln,
    mentor: '林肯',
    theme: '幽默',
    lessonTitle: '第八課：幽默',
    quote: '我走得很慢，但從不後退',
  },
  {
    id: 'lesson-09',
    image: lesson09Jobs,
    mentor: '賈伯斯',
    theme: '破框',
    lessonTitle: '第九課：破框',
    quote: 'Stay hungry. Stay foolish.',
  },
];

// 旅程完成的最終畢業圖
export const journeyCompleteImage: GraduationImageData = {
  id: 'journey-complete',
  image: journeyComplete,
  mentor: '伊',
  theme: '歸零',
  lessonTitle: '歸途',
  quote: '你不必完美，你只需完整',
};

// 根據 lesson ID 獲取畢業圖資料
export function getGraduationImage(lessonId: string): GraduationImageData | undefined {
  if (lessonId === 'journey-complete') {
    return journeyCompleteImage;
  }
  return graduationImagesData.find(g => g.id === lessonId);
}

// 根據章節節點 ID 獲取對應的畢業圖
// 對應關係（根據 journeyReflections.ts 的課程安排）：
// 使用各章節的最後一個節點或 foreshadow 節點作為觸發點
// - Chapter 5 foreshadow (蘇軾篇完成) → lesson-01 止血
// - Chapter 6 foreshadow (王陽明篇完成) → lesson-02 內求
// - Chapter 7 foreshadow (武則天篇完成) → lesson-03 定義
// - Chapter 8 foreshadow (司馬遷篇完成) → lesson-04 使命
// - Chapter 9 foreshadow (李白篇完成) → lesson-05 自由
// - Chapter 10 foreshadow (凱薩篇完成) → lesson-06 關係
// - Chapter 11 foreshadow (曼德拉篇完成) → lesson-07 寬恕
// - Chapter 12 最後節點 (林肯篇完成) → lesson-08 幽默
// - Chapter 13 foreshadow (賈伯斯篇完成) → lesson-09 破框
// - Chapter 15 coda (伊的整合完成) → journey-complete
export function getGraduationImageForNode(nodeId: string): GraduationImageData | undefined {
  const mapping: Record<string, string> = {
    // 使用各章節實際的結束節點
    'yi1-ch5-foreshadow': 'lesson-01',       // 蘇軾：止血
    'yi1-ch6-foreshadow': 'lesson-02',       // 王陽明：內求
    'yi1-ch7-foreshadow': 'lesson-03',       // 武則天：定義
    'yi1-ch8-foreshadow': 'lesson-04',       // 司馬遷：使命
    'yi1-ch9-foreshadow': 'lesson-05',       // 李白：自由
    'yi1-ch10-foreshadow': 'lesson-06',      // 凱薩：關係
    'yi1-ch11-foreshadow': 'lesson-07',      // 曼德拉：寬恕
    'yi1-ch12-28': 'lesson-08',              // 林肯：幽默（章節最後節點）
    'yi1-ch13-foreshadow': 'lesson-09',      // 賈伯斯：破框
    'yi1-ch15-coda': 'journey-complete',     // 伊：歸零（整合完成）
  };
  
  const lessonId = mapping[nodeId];
  if (!lessonId) return undefined;
  
  return getGraduationImage(lessonId);
}
