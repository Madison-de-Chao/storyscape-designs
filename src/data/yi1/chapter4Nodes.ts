// 第四章｜命樹
import type { DialogueNode } from '@/stores/gameStore';

export const chapter4Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-chapter-4-intro-1',
    speaker: 'narrator',
    text: '「每一個靈魂都有一棵樹。」',
    nextNodeId: 'yi1-chapter-4-intro-2',
  },
  {
    id: 'yi1-chapter-4-intro-2',
    speaker: 'narrator',
    text: '「那棵樹記錄著你所有的選擇——包括那些你不願意承認的。」',
    nextNodeId: 'yi1-chapter-4-1',
  },

  // 一、蘇軾的故事
  {
    id: 'yi1-chapter-4-1',
    speaker: 'narrator',
    text: '蘇軾的故事，她聽了整整一個時辰。',
    nextNodeId: 'yi1-chapter-4-2',
  },
  {
    id: 'yi1-chapter-4-2',
    speaker: 'narrator',
    text: '不是書本上的歷史敘述，而是他親口說的、帶著溫度的人生經歷。',
    nextNodeId: 'yi1-chapter-4-3',
  },
  {
    id: 'yi1-chapter-4-3',
    speaker: 'narrator',
    text: '他說起烏臺詩案，說起被關在牢裡的一百多天。說起黃州、惠州、儋州——一貶再貶。',
    nextNodeId: 'yi1-chapter-4-4',
  },
  {
    id: 'yi1-chapter-4-4',
    speaker: 'sushi',
    text: '貶到最後，我都不知道還有哪裡可以貶了。',
    nextNodeId: 'yi1-chapter-4-5',
  },
  {
    id: 'yi1-chapter-4-5',
    speaker: 'protagonist',
    text: '你不生氣嗎？',
    nextNodeId: 'yi1-chapter-4-6',
  },
  {
    id: 'yi1-chapter-4-6',
    speaker: 'sushi',
    text: '一開始當然生氣。我覺得自己沒有做錯什麼，為什麼要受這種罪？',
    nextNodeId: 'yi1-chapter-4-7',
  },
  {
    id: 'yi1-chapter-4-7',
    speaker: 'sushi',
    text: '後來我發現，生氣沒有用。我生氣，他們不會受傷。我生氣，唯一受傷的人——是我自己。',
    nextNodeId: 'yi1-chapter-4-8',
  },
  {
    id: 'yi1-chapter-4-8',
    speaker: 'protagonist',
    text: '那你怎麼做到不生氣的？',
    nextNodeId: 'yi1-chapter-4-9',
  },
  {
    id: 'yi1-chapter-4-9',
    speaker: 'sushi',
    text: '誰說我不生氣了？**我只是不再被生氣控制。**',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-4-10',
  },
  {
    id: 'yi1-chapter-4-10',
    speaker: 'sushi',
    text: '生氣是我的一部分，我不會把它丟掉。但我也不會讓它吞噬我。區別在於——我承認它的存在。',
    nextNodeId: 'yi1-chapter-4-11',
  },

  // 二、命樹介紹
  {
    id: 'yi1-chapter-4-11',
    speaker: 'narrator',
    text: '蘇軾站起身，走到那棵老樹下。',
    nextNodeId: 'yi1-chapter-4-12',
  },
  {
    id: 'yi1-chapter-4-12',
    speaker: 'sushi',
    text: '你知道這是什麼樹嗎？這是我的命樹。在元壹境，每一個靈魂都有一棵命樹。',
    nextNodeId: 'yi1-chapter-4-13',
  },
  {
    id: 'yi1-chapter-4-13',
    speaker: 'sushi',
    text: '記錄你一生所有選擇的樹。每一個選擇都會在樹上留下痕跡。好的選擇，會讓樹長得更茂盛。壞的選擇……',
    nextNodeId: 'yi1-chapter-4-14',
  },
  {
    id: 'yi1-chapter-4-14',
    speaker: 'protagonist',
    text: '會讓樹枯萎？',
    nextNodeId: 'yi1-chapter-4-15',
  },
  {
    id: 'yi1-chapter-4-15',
    speaker: 'sushi',
    text: '不，不是枯萎。**是扭曲。**',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-4-16',
  },
  {
    id: 'yi1-chapter-4-16',
    speaker: 'sushi',
    text: '當你做了一個選擇，然後否認它、逃避它、假裝它不存在——那個選擇就會在樹上形成一個扭曲的結節。',
    nextNodeId: 'yi1-chapter-4-17',
  },
  {
    id: 'yi1-chapter-4-17',
    speaker: 'narrator',
    text: '他指向樹幹上的一個地方。那裡有一個小小的疤痕，像是曾經受過傷，又癒合了。',
    nextNodeId: 'yi1-chapter-4-18',
  },
  {
    id: 'yi1-chapter-4-18',
    speaker: 'sushi',
    text: '這是我年輕時的一個選擇。我曾經為了自保，說了一些違心的話。事後我很後悔，但我沒有承認。',
    nextNodeId: 'yi1-chapter-4-19',
  },
  {
    id: 'yi1-chapter-4-19',
    speaker: 'sushi',
    text: '後來在黃州，有一天夜裡我突然想起那件事，一個人坐在江邊，哭了很久。',
    nextNodeId: 'yi1-chapter-4-20',
  },
  {
    id: 'yi1-chapter-4-20',
    speaker: 'sushi',
    text: '那一夜，我承認了。我對自己說：我做過那件事。那是我的選擇。我不喜歡它，但它是我的一部分。',
    nextNodeId: 'yi1-chapter-4-21',
  },
  {
    id: 'yi1-chapter-4-21',
    speaker: 'sushi',
    text: '然後這個結節就開始癒合了。它不會消失，但它不再是傷口。**它變成了——我的一部分。**',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-4-22',
  },

  // 三、前往弧度林
  {
    id: 'yi1-chapter-4-22',
    speaker: 'wenxin',
    text: '時候差不多了。該帶她去看她自己的命樹了。',
    nextNodeId: 'yi1-chapter-4-23',
  },
  {
    id: 'yi1-chapter-4-23',
    speaker: 'sushi',
    text: '去吧。記住我說的話——**外境可以否定你的位置，但不能否定你的價值。**',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-4-24',
  },
  {
    id: 'yi1-chapter-4-24',
    speaker: 'sushi',
    text: '還有，不要害怕你的樹。無論它長成什麼樣子，那都是你。',
    nextNodeId: 'yi1-chapter-4-25',
  },

  // 四、弧度林
  {
    id: 'yi1-chapter-4-25',
    speaker: 'narrator',
    text: '她們走出竹林，眼前豁然開朗。一片森林出現在她面前。',
    nextNodeId: 'yi1-chapter-4-26',
  },
  {
    id: 'yi1-chapter-4-26',
    speaker: 'narrator',
    text: '每一棵樹都不一樣——形狀、顏色、大小各異。有的高聳茂盛；有的矮小扭曲；有的開滿了花，有的只剩枝幹。',
    nextNodeId: 'yi1-chapter-4-27',
  },
  {
    id: 'yi1-chapter-4-27',
    speaker: 'wenxin',
    text: '這就是弧度林。每一棵樹，都是一個靈魂的命樹。從古至今，所有在地球上生活過的靈魂，都有一棵樹在這裡。',
    nextNodeId: 'yi1-chapter-4-28',
  },
  {
    id: 'yi1-chapter-4-28',
    speaker: 'protagonist',
    text: '那些扭曲枯萎的樹是……？',
    nextNodeId: 'yi1-chapter-4-29',
  },
  {
    id: 'yi1-chapter-4-29',
    speaker: 'wenxin',
    text: '那些是還沒有完整的靈魂。他們還在地球上，或者在輪迴中。那些茂盛的，是歸者的樹——他們已經完整了。',
    nextNodeId: 'yi1-chapter-4-30',
  },

  // 五、主角的命樹
  {
    id: 'yi1-chapter-4-30',
    speaker: 'narrator',
    text: '她們在一棵樹前停下。她看見了那棵樹。然後她的心，沉了下去。',
    nextNodeId: 'yi1-chapter-4-31',
  },
  {
    id: 'yi1-chapter-4-31',
    speaker: 'narrator',
    text: '那是一棵海棠樹，枝頭有幾朵淡粉色的花。但樹幹是扭曲的，呈現出不自然的螺旋形狀。',
    nextNodeId: 'yi1-chapter-4-32',
  },
  {
    id: 'yi1-chapter-4-32',
    speaker: 'narrator',
    text: '樹枝彎彎曲曲，樹皮佈滿結節和疤痕。最讓她心驚的是——樹根處有一個黑色的、深不見底的洞。',
    nextNodeId: 'yi1-chapter-4-33',
  },
  {
    id: 'yi1-chapter-4-33',
    speaker: 'wenxin',
    text: '這是你的命樹。',
    nextNodeId: 'yi1-chapter-4-34',
  },
  {
    id: 'yi1-chapter-4-34',
    speaker: 'narrator',
    text: '她盯著那些扭曲的枝幹、醜陋的結節。這就是她。這就是她三十年人生的樣子。',
    nextNodeId: 'yi1-chapter-4-35',
  },

  // 六、觸摸命樹
  {
    id: 'yi1-chapter-4-35',
    speaker: 'protagonist',
    text: '那些結節是什麼？',
    nextNodeId: 'yi1-chapter-4-36',
  },
  {
    id: 'yi1-chapter-4-36',
    speaker: 'wenxin',
    text: '每一個結節，都是一個你否認過的選擇，或者一個你壓抑過的情緒，或者一個你切割過的部分。',
    nextNodeId: 'yi1-chapter-4-37',
  },
  {
    id: 'yi1-chapter-4-37',
    speaker: 'narrator',
    text: '她走近那棵樹，伸手觸摸。手指碰到樹皮的那一刻，一陣刺痛傳來——不是身體的痛，是心裡的痛。',
    nextNodeId: 'yi1-chapter-4-38',
  },
  {
    id: 'yi1-chapter-4-38',
    speaker: 'narrator',
    text: '她看見了片段的畫面——六歲被罵哭卻咬著嘴唇；十二歲被嘲笑卻假裝沒關係；十八歲喜歡一個人卻從未說出口……',
    effect: 'glitch',
    nextNodeId: 'yi1-chapter-4-39',
  },
  {
    id: 'yi1-chapter-4-39',
    speaker: 'narrator',
    text: '二十五歲想追夢卻放棄；三十歲坐在電腦前，準備刪除那些寫了三年的故事……每一個畫面，都對應著樹上的一個結節。',
    effect: 'glitch',
    nextNodeId: 'yi1-chapter-4-40',
  },

  // 七、選擇：面對命樹
  {
    id: 'yi1-chapter-4-40',
    speaker: 'narrator',
    text: '她的手從樹上縮回來，蹲下身，抱住自己的頭。',
    nextNodeId: 'yi1-chapter-4-41',
  },
  {
    id: 'yi1-chapter-4-41',
    speaker: 'protagonist',
    text: '我不知道……我不知道有這麼多……',
    nextNodeId: 'yi1-chapter-4-42',
  },
  {
    id: 'yi1-chapter-4-42',
    speaker: 'wenxin',
    text: '這不是要讓你愧疚。這是讓你看見——看見你對自己做了什麼。',
    nextNodeId: 'yi1-chapter-4-43',
  },
  {
    id: 'yi1-chapter-4-43',
    speaker: 'protagonist',
    text: '我以為我在保護自己。我以為壓抑那些情緒、否認那些想法，是在保護自己。',
    nextNodeId: 'yi1-chapter-4-44',
  },
  {
    id: 'yi1-chapter-4-44',
    speaker: 'wenxin',
    text: '你確實在保護自己。但你保護的方式是——切割。你把自己切成兩半，「好的」留下，「壞的」丟掉。但問題是——你丟不掉。',
    nextNodeId: 'yi1-chapter-4-choice-1',
  },
  {
    id: 'yi1-chapter-4-choice-1',
    speaker: 'narrator',
    text: '她的目光移向樹根處的那個黑洞。深不見底。她知道裡面是什麼。',
    choices: [
      {
        id: 'ch4-choice-ask',
        text: '伊在裡面，對不對？',
        nextNodeId: 'yi1-chapter-4-45',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch4-choice-avoid',
        text: '我不想知道裡面是什麼……',
        nextNodeId: 'yi1-chapter-4-avoid-1',
        arcChange: 0,
        shadowChange: 3,
      },
    ],
  },

  // 直面路線
  {
    id: 'yi1-chapter-4-45',
    speaker: 'protagonist',
    text: '伊在裡面，對不對？',
    nextNodeId: 'yi1-chapter-4-46',
  },
  {
    id: 'yi1-chapter-4-46',
    speaker: 'wenxin',
    text: '是的。那些你切割掉的部分，都在那裡。它們聚集在一起，形成了伊。',
    nextNodeId: 'yi1-chapter-4-merge-1',
  },

  // 逃避路線
  {
    id: 'yi1-chapter-4-avoid-1',
    speaker: 'protagonist',
    text: '我不想知道……那個洞太可怕了……',
    nextNodeId: 'yi1-chapter-4-avoid-2',
  },
  {
    id: 'yi1-chapter-4-avoid-2',
    speaker: 'wenxin',
    text: '不想知道，不代表它不存在。你的影子，你的另一半，你不敢面對的自己——就在那裡面。等著你。',
    nextNodeId: 'yi1-chapter-4-merge-1',
  },

  // 合併路線
  {
    id: 'yi1-chapter-4-merge-1',
    speaker: 'protagonist',
    text: '我現在要進去嗎？',
    nextNodeId: 'yi1-chapter-4-merge-2',
  },
  {
    id: 'yi1-chapter-4-merge-2',
    speaker: 'wenxin',
    text: '不。你還沒準備好。',
    nextNodeId: 'yi1-chapter-4-merge-3',
  },
  {
    id: 'yi1-chapter-4-merge-3',
    speaker: 'protagonist',
    text: '怎樣才算準備好？',
    nextNodeId: 'yi1-chapter-4-merge-4',
  },
  {
    id: 'yi1-chapter-4-merge-4',
    speaker: 'wenxin',
    text: '當你不再害怕的時候。當你願意擁抱而不是消滅的時候。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-4-merge-5',
  },
  {
    id: 'yi1-chapter-4-merge-5',
    speaker: 'protagonist',
    text: '我需要做什麼？',
    nextNodeId: 'yi1-chapter-4-merge-6',
  },
  {
    id: 'yi1-chapter-4-merge-6',
    speaker: 'wenxin',
    text: '繼續見歸者，聽他們的故事。每一個歸者，都會教你一件事。當你學會了足夠多的事，你就準備好了。',
    nextNodeId: 'yi1-chapter-4-merge-7',
  },
  {
    id: 'yi1-chapter-4-merge-7',
    speaker: 'wenxin',
    text: '然後你回到這裡，走進去，見伊。你可以繼續和她對抗——那樣你會永遠停留在這裡。',
    nextNodeId: 'yi1-chapter-4-merge-8',
  },
  {
    id: 'yi1-chapter-4-merge-8',
    speaker: 'wenxin',
    text: '或者你可以擁抱她，讓她回到你體內。讓那些被切割的部分，重新成為你的一部分。',
    nextNodeId: 'yi1-chapter-4-choice-2',
  },

  // 選擇：對命樹的態度
  {
    id: 'yi1-chapter-4-choice-2',
    speaker: 'narrator',
    text: '她再次看向那棵樹——她的樹，她的人生，她的所有選擇與傷痕。',
    choices: [
      {
        id: 'ch4-choice-promise',
        text: '我會回來的。等我準備好了。',
        nextNodeId: 'yi1-chapter-4-end-1',
        arcChange: 5,
        shadowChange: 0,
      },
      {
        id: 'ch4-choice-doubt',
        text: '我不確定我能做到……',
        nextNodeId: 'yi1-chapter-4-doubt-1',
        arcChange: 0,
        shadowChange: 2,
      },
    ],
  },

  // 承諾路線
  {
    id: 'yi1-chapter-4-end-1',
    speaker: 'protagonist',
    text: '我會回來的。等我準備好了，我會回來的。',
    nextNodeId: 'yi1-chapter-4-end-2',
  },
  {
    id: 'yi1-chapter-4-end-2',
    speaker: 'narrator',
    text: '樹沒有回應。但她覺得，有什麼東西在樹根深處動了一下。像是有人聽見了。像是有人在等待。',
    nextNodeId: 'yi1-chapter-4-end-final',
  },

  // 懷疑路線
  {
    id: 'yi1-chapter-4-doubt-1',
    speaker: 'protagonist',
    text: '我不確定……看到這棵樹的樣子，我不確定我能做到……',
    nextNodeId: 'yi1-chapter-4-doubt-2',
  },
  {
    id: 'yi1-chapter-4-doubt-2',
    speaker: 'wenxin',
    text: '懷疑也沒關係。路是一步一步走的。你已經願意來看，這就是開始。',
    nextNodeId: 'yi1-chapter-4-end-final',
  },

  // 結尾
  {
    id: 'yi1-chapter-4-end-final',
    speaker: 'wenxin',
    text: '走吧。下一位歸者在等你。一個在絕境中找到答案的人——吾性自足，不假外求。',
    nextNodeId: 'yi1-chapter-5-intro-1',
  },
];
