// 第一部「弧度歸零：壹」章節定義
import type { Chapter, DialogueNode } from '@/stores/gameStore';

export interface ChapterMeta {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  character?: string;
  suggestedImages: number;
  imageDescriptions: string[];
}

// 完整 18 章架構
export const yi1ChaptersMeta: ChapterMeta[] = [
  {
    id: 'preface',
    title: '作者序',
    subtitle: '致那個等待被擁抱的你',
    theme: '開場哲理',
    suggestedImages: 1,
    imageDescriptions: [
      '一個人站在圓弧光環前，半身被光照亮、半身在暗影中，象徵明暗合一'
    ]
  },
  {
    id: 'prologue',
    title: '序章',
    subtitle: '訓練場',
    theme: '元壹境介紹、問心登場',
    suggestedImages: 2,
    imageDescriptions: [
      '虛空中的宇宙教室，星雲環繞，中央有一個發光的座位',
      '問心初登場——白衣飄逸的引導者，站在琉璃色光芒中'
    ]
  },
  {
    id: 'chapter-1',
    title: '第一章',
    subtitle: '刪除',
    theme: '現代場景、主角困境',
    suggestedImages: 3,
    imageDescriptions: [
      '凌晨的城市窗景，孤獨的螢幕光映照疲憊的臉',
      '電腦螢幕上的「刪除」對話框，帶有異常的文字',
      '白光從螢幕湧出，主角被吸入的瞬間'
    ]
  },
  {
    id: 'chapter-2',
    title: '第二章',
    subtitle: '渡口',
    theme: '問渡、問心引導',
    suggestedImages: 2,
    imageDescriptions: [
      '金色河流與唐式碼頭，琉璃燈籠漂浮',
      '問渡（擺渡人）撐船而來，滄桑的臉龐帶著智慧'
    ]
  },
  {
    id: 'chapter-3',
    title: '第三章',
    subtitle: '真相',
    theme: '王陽明（心即理）',
    character: '王陽明',
    suggestedImages: 2,
    imageDescriptions: [
      '竹林深處的書院，陽光透過竹葉灑落',
      '王陽明在月下獨坐，周圍是飄動的書卷'
    ]
  },
  {
    id: 'chapter-4',
    title: '第四章',
    subtitle: '命樹',
    theme: '蘇軾、命樹概念',
    character: '蘇軾',
    suggestedImages: 3,
    imageDescriptions: [
      '蘇軾坐在巨大的老樹下，手持書卷，神情自若',
      '命樹的全貌——每個枝幹代表不同的人生選擇',
      '樹幹上的結節特寫，癒合的疤痕發出微光'
    ]
  },
  {
    id: 'chapter-5',
    title: '第五章',
    subtitle: '弧度林',
    theme: '主角的命樹',
    suggestedImages: 2,
    imageDescriptions: [
      '弧度林全景，無數命樹形成一片發光的森林',
      '主角扭曲的海棠命樹，枝幹糾結，根部有黑暗的洞穴'
    ]
  },
  {
    id: 'chapter-6',
    title: '第六章',
    subtitle: '書匣',
    theme: '司馬遷（隱暗面）',
    character: '司馬遷',
    suggestedImages: 2,
    imageDescriptions: [
      '司馬遷在燭光下奮筆疾書，背影堅毅',
      '一個古老的書匣，裡面藏著被封印的記憶'
    ]
  },
  {
    id: 'chapter-7',
    title: '第七章',
    subtitle: '誰定的規矩',
    theme: '武則天（打破規則）',
    character: '武則天',
    suggestedImages: 3,
    imageDescriptions: [
      '長廊上的女子畫像——彈琴、讀書、騎馬、揮劍',
      '武則天坐在書案後，眼神銳利如刀',
      '朱紅大門上的鳳凰刻紋'
    ]
  },
  {
    id: 'chapter-8',
    title: '第八章',
    subtitle: '醉與醒',
    theme: '李白（真實自我）',
    character: '李白',
    suggestedImages: 2,
    imageDescriptions: [
      '李白月下獨酌，酒杯映照明月',
      '飛瀑之下，白衣飄飄的身影舞劍'
    ]
  },
  {
    id: 'chapter-9',
    title: '第九章',
    subtitle: '困獸與自由',
    theme: '曼德拉（自由與寬恕）',
    character: '曼德拉',
    suggestedImages: 3,
    imageDescriptions: [
      '獄中的小窗，陽光透入照亮一本翻開的書',
      '曼德拉高舉雙拳的剪影，背景是升起的太陽',
      '斷裂的鐵鏈，化作飛翔的鳥群'
    ]
  },
  {
    id: 'chapter-10',
    title: '第十章',
    subtitle: '權力與愛',
    theme: '凱薩 & 克麗奧佩特拉',
    character: '凱薩、克麗奧佩特拉',
    suggestedImages: 3,
    imageDescriptions: [
      '歐式花園中的噴泉，兩張躺椅',
      '凱薩的側臉，統帥的威嚴',
      '克麗奧佩特拉的眼神，蛇形金鐲閃爍'
    ]
  },
  {
    id: 'chapter-11',
    title: '第十一章',
    subtitle: '選擇',
    theme: '主角整合所學',
    suggestedImages: 2,
    imageDescriptions: [
      '主角站在分岔路口，十條道路發出不同顏色的光',
      '十種顏色的衣袍片段，正在編織成完整的袍子'
    ]
  },
  {
    id: 'chapter-12',
    title: '第十二章',
    subtitle: '失敗老師',
    theme: '林肯（失敗學）',
    character: '林肯',
    suggestedImages: 3,
    imageDescriptions: [
      '簡陋的木屋前，高大的身影正在劈柴',
      '林肯的臉部特寫，深邃的眼神看過太多',
      '一張摺疊的紙，上面是失敗的清單'
    ]
  },
  {
    id: 'chapter-13',
    title: '第十三章',
    subtitle: '最後一課',
    theme: '賈伯斯（死亡與回歸）',
    character: '賈伯斯',
    suggestedImages: 3,
    imageDescriptions: [
      '賈伯斯穿著黑色高領毛衣，站在一片白色空間中',
      '一顆被咬了一口的蘋果，折射出彩虹光芒',
      '史丹佛大學的講台，年輕的畢業生們仰望'
    ]
  },
  {
    id: 'chapter-14',
    title: '第十四章',
    subtitle: '歸零',
    theme: '十色衣袍完成',
    suggestedImages: 2,
    imageDescriptions: [
      '十色衣袍的完整樣貌，光芒四射',
      '弧度儀歸零的瞬間，圓滿的弧度形成完整的圓'
    ]
  },
  {
    id: 'chapter-15',
    title: '第十五章',
    subtitle: '伊',
    theme: '見到陰影自我「伊」',
    character: '伊',
    suggestedImages: 4,
    imageDescriptions: [
      '弧度林中安靜等待的命樹們',
      '洞穴深處，琉璃色的光照亮前路',
      '伊的全貌——濃烈的妝容，破碎華服，銳利眼神',
      '兩個「自己」面對面，一明一暗'
    ]
  },
  {
    id: 'epilogue',
    title: '終章',
    subtitle: '弧度歸零',
    theme: '整合、重生',
    suggestedImages: 3,
    imageDescriptions: [
      '明與暗的擁抱，兩個身影融合',
      '完整的圓，弧度歸零',
      '新的黎明，主角睜開眼睛，眼中倒映著圓滿的光'
    ]
  }
];

// 計算總圖片數量
export const totalSuggestedImages = yi1ChaptersMeta.reduce(
  (sum, ch) => sum + ch.suggestedImages,
  0
);

export { Chapter, DialogueNode };
