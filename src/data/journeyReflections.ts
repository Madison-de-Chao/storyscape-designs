// 弧度歸零：壹 - 旅程心得數據
// 基於完整旅程回顧整理

// 畢業圖片 imports
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

export interface ChapterReflection {
  id: string;
  chapter: string;
  title: string;
  mentor?: string;
  theme: string;
  lesson: string;
  quote?: string;
  graduationImage?: string; // 畢業圖片路徑
}

export interface JourneyPhase {
  id: string;
  name: string;
  description: string;
  chapters: ChapterReflection[];
}

// 第一部完整心路歷程
export const yi1JourneyPhases: JourneyPhase[] = [
  {
    id: 'phase-1',
    name: '起點：承認破碎',
    description: '故事始於一個想要「刪除」自己的人。我們都曾像主角一樣，以為切掉那些負面的情緒，人生就會變好。殊不知，那是讓靈魂乾枯的開始。',
    chapters: [
      {
        id: 'ch1-2',
        chapter: '第一～二章',
        title: '刪除與渡口',
        theme: '承認破碎',
        lesson: '承認自己的不完美，是旅程的起點。刪除鍵無法刪除真實的自己。',
        quote: '「你按下刪除，以為就能重新開始。但真正的重生，從來不是逃避。」',
      },
    ],
  },
  {
    id: 'phase-2',
    name: '修復自我價值',
    description: '這幾堂課教會我們區分「位置」與「價值」、向內求索、以及奪回定義自己的權力。',
    chapters: [
      {
        id: 'ch3-5',
        chapter: '第三～五章',
        title: '第一課：止血',
        mentor: '蘇軾',
        theme: '止血',
        lesson: '外在的際遇（被貶、失敗）可以很糟，但那不代表我們沒有價值。「也無風雨也無晴」是一劑強心針。',
        quote: '「莫聽穿林打葉聲，何妨吟嘯且徐行。」',
        graduationImage: lesson01Sushi,
      },
      {
        id: 'ch6',
        chapter: '第六章',
        title: '第二課：內求',
        mentor: '王陽明',
        theme: '內求',
        lesson: '當我們習慣向外討愛、討認可時，陽明先生提醒：「吾性自足」。答案不在別人的嘴裡，在自己的良知裡。',
        quote: '「心即理。心外無物，心外無理。」',
        graduationImage: lesson02Wang,
      },
      {
        id: 'ch7',
        chapter: '第七章',
        title: '第三課：定義',
        mentor: '武則天',
        theme: '定義',
        lesson: '誰說女生不能當皇帝？誰說你不行？武則天用霸氣打破了社會的框架，把「定義自己」的權力拿回來。',
        quote: '「規矩是前人寫的，我便是書寫規矩的人。」',
        graduationImage: lesson03Wu,
      },
    ],
  },
  {
    id: 'phase-3',
    name: '重塑生命韌性',
    description: '面對殘缺與束縛，這幾堂課教會我們使命感、真正的自由、以及成熟的關係邊界。',
    chapters: [
      {
        id: 'ch8',
        chapter: '第八章',
        title: '第四課：使命',
        mentor: '司馬遷',
        theme: '使命',
        lesson: '面對身體或命運的殘缺，司馬遷展現了極致的韌性——「把自己活完」。殘缺不是羞恥，活得像個廢墟才是。',
        quote: '「人固有一死，或重於泰山，或輕於鴻毛。」',
        graduationImage: lesson04Sima,
      },
      {
        id: 'ch9',
        chapter: '第九章',
        title: '第五課：自由',
        mentor: '李白',
        theme: '自由',
        lesson: '李白點破了我們被「應該」綁架的人生。真正的自由不是隨心所欲，而是分得清什麼是雜訊，什麼是自己真正「想要」的。',
        quote: '「天生我材必有用，千金散盡還復來。」',
        graduationImage: lesson05Libai,
      },
      {
        id: 'ch10',
        chapter: '第十章',
        title: '第六課：關係',
        mentor: '凱薩、克麗奧佩特拉',
        theme: '關係',
        lesson: '在愛裡不失去自我，在背叛中不否定信任。他們展現了成熟的邊界感：我愛你，但我依然是我。',
        quote: '「真正的愛，不是融化，而是兩個完整的人彼此輝映。」',
        graduationImage: lesson06Caesar,
      },
    ],
  },
  {
    id: 'phase-4',
    name: '面對陰影與釋放',
    description: '寬恕、幽默、破框——這三堂課教會我們如何放過自己、笑對失敗、以及突破框架。',
    chapters: [
      {
        id: 'ch11',
        chapter: '第十一章',
        title: '第七課：寬恕',
        mentor: '曼德拉',
        theme: '寬恕',
        lesson: '不是為了原諒對方，而是為了放過自己。走出心中的監獄，才能真正自由。',
        quote: '「當我走出監獄大門，如果無法放下仇恨，我仍是個囚犯。」',
        graduationImage: lesson07Mandela,
      },
      {
        id: 'ch12',
        chapter: '第十二章',
        title: '第八課：幽默',
        mentor: '林肯',
        theme: '幽默',
        lesson: '面對無數次的失敗與憂鬱，林肯教我們學會自嘲。失敗只是數據，幽默則是最高的防禦。',
        quote: '「我走得很慢，但從不後退。」',
        graduationImage: lesson08Lincoln,
      },
      {
        id: 'ch13',
        chapter: '第十三章',
        title: '第九課：破框',
        mentor: '賈伯斯',
        theme: '破框',
        lesson: '賈伯斯打破了我們對「標準答案」的迷思。被拒絕往往是包裝得很醜的禮物，因為此地不留人，自有留人處。',
        quote: '「Stay hungry. Stay foolish.」',
        graduationImage: lesson09Jobs,
      },
    ],
  },
  {
    id: 'phase-5',
    name: '終局：傲慢與回歸',
    description: '最後兩堂課是對自我的終極考驗——警惕知識的傲慢，以及擁抱那個一直被我們視為怪物的自己。',
    chapters: [
      {
        id: 'ch14',
        chapter: '第十四章',
        title: '未歸者的警示',
        theme: '傲慢',
        lesson: '主角以為學會了所有道理就無敵了，產生了「知識的傲慢」。知道不等於做到，傲慢會讓我們成為下一個未歸者。',
        quote: '「真正的智慧，是知道自己不知道什麼。」',
      },
      {
        id: 'ch15',
        chapter: '第十五章',
        title: '伊的擁抱',
        mentor: '伊',
        theme: '承認',
        lesson: '不是消滅陰影，不是告別過去，而是擁抱那個一直被我們視為怪物的自己。「歡迎回家」，這一句話，讓所有的弧度終於歸零。',
        quote: '「你不必完美，你只需完整。」',
      },
    ],
  },
];

// 總結語
export const journeySummary = {
  title: '這本書告訴我們',
  content: '完整不是沒有缺口，而是不再害怕缺口。',
  epilogue: '第一部的旅程，就是把那些散落在歷史長河裡的智慧撿回來，把我們身上那些被切掉的肉（伊）縫回去。這是一個關於「回家」的故事，而家，就在我們心裡。',
  completeImage: journeyComplete,
};

// 計算總章節數
export const totalChapters = yi1JourneyPhases.reduce(
  (sum, phase) => sum + phase.chapters.length,
  0
);
