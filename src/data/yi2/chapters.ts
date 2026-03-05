// 第二部「弧度歸零：伊」上冊章節定義
import type { ChapterMeta } from '../yi1/chapters';

export const yi2ChaptersMeta: ChapterMeta[] = [
  {
    id: 'yi2-preface',
    title: '作者序',
    subtitle: '給正在打仗的你',
    theme: '開場哲理',
    keyQuote: '也許讀完這個故事，你會發現——這場仗，從一開始就不需要打。',
    suggestedImages: 1,
    imageDescriptions: [
      '一個人站在鏡子前，倒影與本人略有不同，象徵內在衝突',
    ],
  },
  {
    id: 'yi2-ch0',
    title: '第零章',
    subtitle: '日常',
    theme: '受害者心態、習慣性否定',
    keyQuote: '她不是不想動。她只是不知道為什麼要動。',
    character: '林壹',
    suggestedImages: 4,
    imageDescriptions: [
      '凌晨的臥室，鬧鐘亮著，天花板映著微光',
      '捷運車廂，手抓吊環的女子低頭看手機',
      '辦公室隔間，螢幕上一個叫「待辦」的資料夾',
      '深夜的房間，散落著未拆封的書和積灰的顏料盒',
    ],
  },
  {
    id: 'yi2-ch1',
    title: '第一章',
    subtitle: '刪除',
    theme: '伊的首次顯現、刪除創作',
    keyQuote: '你確定要刪除這些檔案嗎？它們還沒完成。',
    character: '伊',
    suggestedImages: 3,
    imageDescriptions: [
      '捷運車窗上的濃妝倒影，與素顏的本人形成對比',
      '咖啡廳的筆電螢幕，檔案被全選準備刪除',
      '落地窗上的倒影在微笑，但本人沒有笑',
    ],
  },
  {
    id: 'yi2-ch2',
    title: '第二章',
    subtitle: '空白',
    theme: '斷片現象、伊的能力展現',
    keyQuote: '妳終於願意看我了。',
    character: '伊',
    suggestedImages: 3,
    imageDescriptions: [
      '會議室裡所有人看著林壹，她卻不記得自己說了什麼',
      '浴室鏡子裡的倒影獨自舉起手指放在嘴唇上',
      '雲端硬碟裡一個名為「伊」的資料夾',
    ],
  },
  {
    id: 'yi2-ch3',
    title: '第三章',
    subtitle: '攻擊',
    theme: '林壹反擊伊、害怕成功',
    keyQuote: '妳打的是妳自己。',
    character: '伊',
    suggestedImages: 3,
    imageDescriptions: [
      '林壹一拳砸向鏡子，但鏡子完好無損',
      '公司樓下的長椅，林壹對著一隻鴿子說話',
      '夢境中的舞台，小女孩在聚光燈下跳舞',
    ],
  },
  {
    id: 'yi2-ch4',
    title: '第四章',
    subtitle: '受害',
    theme: '受害者濾鏡、友情衝突',
    keyQuote: '我們到底要怎麼做，妳才會覺得我們是真的對妳好？',
    character: '小曼',
    suggestedImages: 3,
    imageDescriptions: [
      '火鍋店裡兩個女生對坐，氣氛緊張',
      '小曼起身離去，對面的位子空了，湯底還在滾',
      '林壹獨自坐在床沿，手機亮著雲端通知',
    ],
  },
  {
    id: 'yi2-ch5',
    title: '第五章',
    subtitle: '夢露',
    theme: '瑪麗蓮夢露、受害者濾鏡的覺察',
    keyQuote: '妳們都戴著同一種濾鏡——只看見缺少的，看不見擁有的。',
    character: '夢露',
    suggestedImages: 3,
    imageDescriptions: [
      '電視裡夢露素顏坐在化妝台前的老照片',
      '伊穿著白色洋裝、金色捲髮，化身夢露的模樣',
      '林壹看著鏡中的伊，兩人終於開始對話',
    ],
  },
];

export const yi2TotalSuggestedImages = yi2ChaptersMeta.reduce(
  (sum, ch) => sum + ch.suggestedImages,
  0
);
