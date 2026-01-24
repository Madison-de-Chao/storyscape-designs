import type { DialogueNode } from '@/stores/gameStore';

export const chapter16Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-ch16-intro',
    speaker: 'narrator',
    text: '「你可以留下，也可以回去。但不管你選擇什麼，你都已經是完整的了。」',
    effect: 'glow',
    nextNodeId: 'yi1-ch16-1',
  },

  // 一、歸元山
  {
    id: 'yi1-ch16-1',
    speaker: 'narrator',
    text: '圓心閣在歸元山的山頂。那座山是一個完美的半圓形，像是有人用刀把一座山切成了兩半。',
    bgImage: 'ch16_half_mountain',
    nextNodeId: 'yi1-ch16-2',
  },
  {
    id: 'yi1-ch16-2',
    speaker: 'protagonist',
    text: '為什麼是半圓？',
    nextNodeId: 'yi1-ch16-3',
  },
  {
    id: 'yi1-ch16-3',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '因為另一半在你心裡。當你完整的時候，這座山在你眼中就是完整的。',
    nextNodeId: 'yi1-ch16-4',
  },
  {
    id: 'yi1-ch16-4',
    speaker: 'narrator',
    text: '她試著用「完整」的眼光去看——然後她發現，那確實是一座完整的山。有一半是實體的，有一半是虛的，用淡淡的光勾勒出輪廓，完美對稱。',
    nextNodeId: 'yi1-ch16-5',
  },
  {
    id: 'yi1-ch16-5',
    speaker: 'narrator',
    text: '上山的路比她想像的輕鬆。不是因為路好走，而是因為她的心變輕了。那些壓在她身上三十年的東西——恐懼、自我否定、對自己的恨——好像都在見到伊的那一刻卸下了。她還是她，但她不再和自己打仗了。',
    nextNodeId: 'yi1-ch16-6',
  },

  // 二、圓心閣
  {
    id: 'yi1-ch16-6',
    speaker: 'narrator',
    text: '她們到達了山頂。圓心閣不是宏偉的宮殿，而是一座簡單的八角亭子。中間有一張石桌，桌上有一盞熄滅的燈。',
    bgImage: 'ch16_pavilion',
    nextNodeId: 'yi1-ch16-7',
  },
  {
    id: 'yi1-ch16-7',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '這是所有弧度的終點，也是所有弧度的起點。你走過了一段弧線——從你按下「確定」的那一刻到現在。這段弧線即將結束，但結束不是終點，結束是回到起點，然後開始新的弧線。',
    nextNodeId: 'yi1-ch16-8',
  },
  {
    id: 'yi1-ch16-8',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '當你準備好的時候，點亮這盞燈。然後你會面對最後一個選擇——留下，或者回去。',
    nextNodeId: 'yi1-ch16-choice-1',
  },

  // 🎯 選項1：留下還是回去
  {
    id: 'yi1-ch16-choice-1',
    speaker: 'protagonist',
    text: '留下是什麼意思？',
    choices: [
      {
        id: 'ch16-c1a',
        text: '「像蘇軾他們一樣，成為歸者？」',
        nextNodeId: 'yi1-ch16-9a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch16-c1b',
        text: '「不用回到那個讓我痛苦的世界？」',
        nextNodeId: 'yi1-ch16-9b',
        arcChange: 0,
        shadowChange: 3,
      },
    ],
  },
  {
    id: 'yi1-ch16-9a',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '對。你可以留在這裡，幫助其他正在學習的靈魂，分享你的故事。回去，則是回到你按下「確定」之前的那一刻，然後你可以選擇按「取消」，繼續你的人生，但用不同的方式。',
    nextNodeId: 'yi1-ch16-10',
  },
  {
    id: 'yi1-ch16-9b',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '留下意味著不用再面對那個世界。但回去，你可以回到那個夜晚，按「取消」，然後繼續你的人生——用不同的方式。',
    nextNodeId: 'yi1-ch16-10',
  },

  // 三、完整是每天的選擇
  {
    id: 'yi1-ch16-10',
    speaker: 'protagonist',
    text: '如果我回去——我會成功嗎？我會變得完整嗎？在那個世界？',
    nextNodeId: 'yi1-ch16-11',
  },
  {
    id: 'yi1-ch16-11',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '你已經完整了。',
    nextNodeId: 'yi1-ch16-12',
  },
  {
    id: 'yi1-ch16-12',
    speaker: 'protagonist',
    text: '我知道，但那個世界不一樣。那個世界有各種人告訴你「你做錯了」「你不夠好」。我在這裡可以完整，但回到那裡——',
    nextNodeId: 'yi1-ch16-13',
  },
  {
    id: 'yi1-ch16-13',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '你以為完整是一個狀態嗎？完整不是一個你達到了就永遠不會失去的東西。完整是一個你每天都要重新選擇的東西。',
    effect: 'glow',
    specialScene: 'zen',
    zenConfig: {
      text: '完整是每天的選擇',
      subtitle: '——問心',
      theme: 'gold',
    },
    nextNodeId: 'yi1-ch16-14',
  },
  {
    id: 'yi1-ch16-14',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '每一天，你都會遇到讓你想要「切割自己」的情境。每一天，你都會站在那個選擇面前——是聽那些聲音，還是聽自己的聲音。你在這裡學到的，不是「如何變得完整」，而是「如何在不完整的時候，依然選擇完整」。',
    nextNodeId: 'yi1-ch16-15',
  },
  {
    id: 'yi1-ch16-15',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '你不是要達到一個終點，你是要走一條路。一條每天都可能迷路，但每天都可以找回來的路。',
    nextNodeId: 'yi1-ch16-choice-2',
  },

  // 🎯 選項2：我是誰
  {
    id: 'yi1-ch16-choice-2',
    speaker: 'narrator',
    text: '她閉上眼睛。她是誰？',
    choices: [
      {
        id: 'ch16-c2a',
        text: '「我是一個會憤怒、會悲傷、有慾望、有野心的人——但那些不是缺點。」',
        nextNodeId: 'yi1-ch16-16a',
        arcChange: 8,
        shadowChange: -3,
      },
      {
        id: 'ch16-c2b',
        text: '「我是壹。不是完美的壹，但是完整的壹。」',
        nextNodeId: 'yi1-ch16-16b',
        arcChange: 10,
        shadowChange: -5,
      },
    ],
  },
  {
    id: 'yi1-ch16-16a',
    speaker: 'narrator',
    text: '她是一個做過很多錯誤選擇的人，但那些錯誤不是終點，是弧線上的一段。她是一個曾經把自己切割得支離破碎的人，但那些碎片不是廢棄物，是還沒有被整合的材料。',
    nextNodeId: 'yi1-ch16-17',
  },
  {
    id: 'yi1-ch16-16b',
    speaker: 'protagonist',
    text: '我是壹。不是完美的壹，但是完整的壹。',
    effect: 'glow',
    nextNodeId: 'yi1-ch16-17',
  },

  // 四、選擇回去
  {
    id: 'yi1-ch16-17',
    speaker: 'protagonist',
    text: '我選擇回去。',
    nextNodeId: 'yi1-ch16-18',
  },
  {
    id: 'yi1-ch16-18',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '為什麼？',
    nextNodeId: 'yi1-ch16-19',
  },
  {
    id: 'yi1-ch16-19',
    speaker: 'protagonist',
    text: '因為那裡還有人需要聽到這些。很多像我一樣的人——覺得自己做什麼都不對的人，一直和自己打仗的人。我不知道我能不能幫到他們，但至少——我可以試試。',
    nextNodeId: 'yi1-ch16-20',
  },
  {
    id: 'yi1-ch16-20',
    speaker: 'protagonist',
    text: '還有一個原因——那些故事。我刪掉的那些故事。我要把它們找回來。我可以重新寫。寫一個關於——覺得自己做什麼都不對的人，來到一個奇怪的地方，學會了不再和自己打仗的故事。',
    bgImage: 'ch16_decision',
    nextNodeId: 'yi1-ch16-21',
  },
  {
    id: 'yi1-ch16-21',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '你不怕被笑嗎？',
    nextNodeId: 'yi1-ch16-22',
  },
  {
    id: 'yi1-ch16-22',
    speaker: 'protagonist',
    text: '怕。但賈伯斯說，被自己拒絕比被別人拒絕更可怕。我不想再被自己拒絕了。',
    nextNodeId: 'yi1-ch16-23',
  },

  // 五、點燈儀式
  {
    id: 'yi1-ch16-23',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '好。那就點亮這盞燈吧。用你自己。',
    nextNodeId: 'yi1-ch16-24',
  },
  {
    id: 'yi1-ch16-24',
    speaker: 'narrator',
    text: '她伸出手，放在燈座上。一瞬間，她感覺有什麼東西從她的手心流出去——不是血，不是能量，是「我選擇」的意願。燈亮了。不是火焰，是一團柔和的金銀色光芒，像是黎明和黃昏同時存在。',
    bgImage: 'ch16_lamp_lit',
    nextNodeId: 'yi1-ch16-25',
  },

  // 六、歸者的祝福
  {
    id: 'yi1-ch16-25',
    speaker: 'narrator',
    text: '燈亮起來的那一刻，她聽到了聲音。很多聲音，從四面八方傳來。',
    effect: 'glow',
    nextNodeId: 'yi1-ch16-26',
  },
  {
    id: 'yi1-ch16-26',
    speaker: 'narrator',
    text: '「恭喜你。」——蘇軾。「你做到了。」——王陽明。「我就知道你可以。」——武則天。「殘缺也是完整的一部分。」——司馬遷。「記得你真正想要的是什麼。」——李白。',
    nextNodeId: 'yi1-ch16-27',
  },
  {
    id: 'yi1-ch16-27',
    speaker: 'narrator',
    text: '「保持你自己。」——凱薩。「每一步棋都是你自己下的。」——克麗奧佩特拉。「不要喝那杯毒藥。」——曼德拉。「你比你以為的強。」——林肯。「去創造你自己的答案。」——賈伯斯。',
    nextNodeId: 'yi1-ch16-28',
  },
  {
    id: 'yi1-ch16-28',
    speaker: 'protagonist',
    text: '謝謝。謝謝你們。',
    nextNodeId: 'yi1-ch16-choice-3',
  },

  // 🎯 選項3：告別問心
  {
    id: 'yi1-ch16-choice-3',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '還有一件事——你的名字。在元壹境，名字是你完整之後，自己給自己的。你想叫什麼名字？',
    choices: [
      {
        id: 'ch16-c3a',
        text: '「我……還不知道。」',
        nextNodeId: 'yi1-ch16-29a',
        arcChange: 5,
        shadowChange: 0,
      },
      {
        id: 'ch16-c3b',
        text: '「我回去以後再想。」',
        nextNodeId: 'yi1-ch16-29b',
        arcChange: 5,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch16-29a',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '不急。當你知道你是誰的時候，你就會知道你的名字。那是你靈魂的名字——不是別人給你的，是你給自己的。',
    nextNodeId: 'yi1-ch16-30',
  },
  {
    id: 'yi1-ch16-29b',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '好。當你想好了，那個名字就會成為你的一部分。那是你靈魂的名字——你給自己的。',
    nextNodeId: 'yi1-ch16-30',
  },

  // 七、告別
  {
    id: 'yi1-ch16-30',
    speaker: 'protagonist',
    text: '問心，我還會見到你嗎？',
    nextNodeId: 'yi1-ch16-31',
  },
  {
    id: 'yi1-ch16-31',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '我是問心使者。當你需要我的時候——我就在這裡。',
    nextNodeId: 'yi1-ch16-32',
  },
  {
    id: 'yi1-ch16-32',
    speaker: 'protagonist',
    text: '在我心裡？',
    nextNodeId: 'yi1-ch16-33',
  },
  {
    id: 'yi1-ch16-33',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '對。我不是一個「外面」的存在。我是你內心的聲音——那個會問你「你真的想要這樣嗎」的聲音。你在這裡學到的，是你本來就知道、但不敢承認的東西。你只是需要一個地方，讓你願意面對它們。',
    effect: 'glow',
    nextNodeId: 'yi1-ch16-34',
  },
  {
    id: 'yi1-ch16-34',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '去吧。回到那個夜晚，回到那個房間，回到那台電腦前面。然後——做你該做的事。',
    bgImage: 'ch16_farewell',
    nextNodeId: 'yi1-ch16-35',
  },
  {
    id: 'yi1-ch16-35',
    speaker: 'narrator',
    text: '問心伸出手，輕輕碰了碰那盞燈。燈的光芒開始擴散，像水波一樣向外擴散，把整個圓心閣都包裹住了。然後，她感覺自己在移動——被抽離。她看見問心的身影越來越遠，看見圓心閣、歸元山、弧度林、渡口——整個元壹境都在她眼前縮小，變成一個光點。然後——黑暗。',
    effect: 'fade-out',
    nextNodeId: 'yi1-ch16-36',
  },

  // 八、回到現實
  {
    id: 'yi1-ch16-36',
    speaker: 'narrator',
    text: '她聽見電腦風扇的聲音。她聞到涼掉的咖啡。她感覺到自己坐在那張坐了十四個小時的椅子上。她睜開眼睛——螢幕的光映在她的臉上。',
    bgImage: 'ch16_return_reality',
    nextNodeId: 'yi1-ch16-37',
  },
  {
    id: 'yi1-ch16-37',
    speaker: 'narrator',
    text: '那個對話框還在。「你確定要丟棄這些嗎？它們還沒完成。」兩個按鈕。一個是「確定」。一個是「取消」。',
    nextNodeId: 'yi1-ch16-38',
  },
  {
    id: 'yi1-ch16-38',
    speaker: 'narrator',
    text: '她的手移向滑鼠。她點擊了——「取消」。對話框消失了。那些檔案還在。那些她寫了三年的故事，還在。',
    effect: 'glow',
    nextNodeId: 'yi1-ch16-39',
  },
  {
    id: 'yi1-ch16-39',
    speaker: 'narrator',
    text: '她看著螢幕上那些檔案名稱。「第一章_覺醒.docx」「第二章_啟程.docx」……「第十二章_未完成.docx」——未完成。對，未完成。但那不是問題。未完成不是失敗。未完成是——還在路上。',
    nextNodeId: 'yi1-ch16-40',
  },

  // 九、新的開始
  {
    id: 'yi1-ch16-40',
    speaker: 'narrator',
    text: '她看著窗外。天快亮了。凌晨四點三十七分。她在那裡待了多久？感覺像是好幾天，但在這裡只過了兩個多小時。',
    nextNodeId: 'yi1-ch16-41',
  },
  {
    id: 'yi1-ch16-41',
    speaker: 'narrator',
    text: '她打開一個新的文件。空白的頁面，閃爍的游標。她開始打字。',
    bgImage: 'ch16_new_beginning',
    nextNodeId: 'yi1-ch16-42',
  },
  {
    id: 'yi1-ch16-42',
    speaker: 'narrator',
    text: '「在無盡的虛空中，有一個地方。那裡不是天堂，也不是地獄。那裡是教室。而你正坐在裡面。」',
    effect: 'glow',
    nextNodeId: 'yi1-ch16-43',
  },
  {
    id: 'yi1-ch16-43',
    speaker: 'narrator',
    text: '「你不知道的是，地球是一座學校。每一個靈魂來到這裡，都是為了學習同一堂課——完整。」',
    nextNodeId: 'yi1-ch16-44',
  },
  {
    id: 'yi1-ch16-44',
    speaker: 'narrator',
    text: '她打了很久。天亮了，她還在打。太陽升起來了，她還在打。她不知道這個故事會怎麼樣，不知道有沒有人會看，不知道會不會被笑。',
    nextNodeId: 'yi1-ch16-coda',
  },
  {
    id: 'yi1-ch16-coda',
    speaker: 'narrator',
    text: '但她知道一件事——她在做她想做的事。不是別人要她做的事，不是她「應該」做的事，是她「想要」做的事。這個感覺——很好。',
    effect: 'fade-out',
    bgImage: 'ch16_sunrise',
    nextNodeId: 'yi1-epilogue-intro',
  },
];
