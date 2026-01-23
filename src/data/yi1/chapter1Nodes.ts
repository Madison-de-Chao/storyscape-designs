export const chapter1Nodes: DialogueNode[] = [
  // 一、崩潰
  {
    id: 'yi1-ch1-1',
    speaker: 'narrator',
    text: '凌晨兩點十七分。',
    bgImage: 'ch1_desk_night',
    nextNodeId: 'yi1-ch1-2',
  },
  {
    id: 'yi1-ch1-2',
    speaker: 'narrator',
    text: '她盯著螢幕，眼睛乾澀得像被砂紙磨過。桌上的咖啡早涼了，窗外零星的燈像這世界最後幾顆沒睡的眼睛。',
    nextNodeId: 'yi1-ch1-3',
  },
  {
    id: 'yi1-ch1-3',
    speaker: 'narrator',
    text: '這份報告改了不知道多少次。她只記得主管那張臉：「這不是我要的。算了，我自己來。」',
    nextNodeId: 'yi1-ch1-4',
  },
  {
    id: 'yi1-ch1-4',
    speaker: 'narrator',
    text: '那個「算了」，像一把鈍刀，慢慢割過她的胸口。',
    effect: 'shake',
    nextNodeId: 'yi1-ch1-5',
  },

  // 二、否定的聲音
  {
    id: 'yi1-ch1-5',
    speaker: 'narrator',
    text: '「妳怎麼連這個都做不好？」——母親。\n「妳就是不夠聰明。」——老師。\n「妳太敏感了。」——前男友。',
    nextNodeId: 'yi1-ch1-choice-1',
  },

  // 🎯 選項1：面對否定
  {
    id: 'yi1-ch1-choice-1',
    speaker: 'narrator',
    text: '這些聲音在她腦子裡轉了很多年。',
    choices: [
      {
        id: 'ch1-c1a',
        text: '「也許他們是對的……」',
        nextNodeId: 'yi1-ch1-6a',
        arcChange: -5,
        shadowChange: 5,
      },
      {
        id: 'ch1-c1b',
        text: '「可是我已經很努力了……」',
        nextNodeId: 'yi1-ch1-6b',
        arcChange: 0,
        shadowChange: 3,
      },
    ],
  },
  {
    id: 'yi1-ch1-6a',
    speaker: 'narrator',
    text: '她接受了。我做什麼都不對——這就是結論。',
    effect: 'shake',
    nextNodeId: 'yi1-ch1-7',
  },
  {
    id: 'yi1-ch1-6b',
    speaker: 'narrator',
    text: '但努力有什麼用？結論還是一樣：我做什麼都不對。',
    effect: 'shake',
    nextNodeId: 'yi1-ch1-7',
  },

  // 三、秘密資料夾
  {
    id: 'yi1-ch1-7',
    speaker: 'narrator',
    text: '她打開了另一個隱藏的資料夾。那是她的祕密——一個寫了三年、將近十萬字的故事。',
    bgImage: 'ch1_secret_folder',
    nextNodeId: 'yi1-ch1-8',
  },
  {
    id: 'yi1-ch1-8',
    speaker: 'narrator',
    text: '故事裡的女孩會魔法、會飛、做什麼都是對的。和她完全相反。',
    nextNodeId: 'yi1-ch1-choice-2',
  },

  // 🎯 選項2：看到資料夾
  {
    id: 'yi1-ch1-choice-2',
    speaker: 'narrator',
    text: '她看著那些檔案名稱：「第一章_覺醒」、「第二章_啟程」……',
    choices: [
      {
        id: 'ch1-c2a',
        text: '「這是唯一讓我快樂的事……」',
        nextNodeId: 'yi1-ch1-9a',
        arcChange: 3,
        shadowChange: 0,
      },
      {
        id: 'ch1-c2b',
        text: '「真可笑，都幾歲了還寫這種東西。」',
        nextNodeId: 'yi1-ch1-9b',
        arcChange: -3,
        shadowChange: 5,
      },
    ],
  },
  {
    id: 'yi1-ch1-9a',
    speaker: 'narrator',
    text: '但快樂有什麼用？覺醒？她還在原地。啟程？她哪裡也沒去。',
    nextNodeId: 'yi1-ch1-10',
  },
  {
    id: 'yi1-ch1-9b',
    speaker: 'narrator',
    text: '覺醒？她還在原地。啟程？她哪裡也沒去。三年了，什麼都沒變。',
    nextNodeId: 'yi1-ch1-10',
  },

  // 四、刪除
  {
    id: 'yi1-ch1-10',
    speaker: 'narrator',
    text: '她按下 Ctrl+A。所有檔案變成藍色。',
    nextNodeId: 'yi1-ch1-11',
  },
  {
    id: 'yi1-ch1-11',
    speaker: 'protagonist',
    text: '刪掉吧。妳都三十歲了，連報告都寫不好，憑什麼覺得自己能寫故事？',
    nextNodeId: 'yi1-ch1-12',
  },
  {
    id: 'yi1-ch1-12',
    speaker: 'narrator',
    text: '她按下 Delete。打開資源回收筒。點擊「清空」。',
    effect: 'shake',
    bgImage: 'ch1_delete_dialog',
    nextNodeId: 'yi1-ch1-13',
  },

  // 五、異常對話框
  {
    id: 'yi1-ch1-13',
    speaker: 'narrator',
    text: '一個對話框彈出來。但上面寫的不是「確定要刪除嗎？」——',
    nextNodeId: 'yi1-ch1-14',
  },
  {
    id: 'yi1-ch1-14',
    speaker: 'system',
    speakerName: 'SYSTEM',
    text: '「你確定要丟棄這些嗎？」\n「它們還沒完成。」',
    effect: 'glitch',
    emotionSFX: 'digital_break',
    bgImage: 'ch1_glitch_dialog',
    nextNodeId: 'yi1-ch1-15',
  },
  {
    id: 'yi1-ch1-15',
    speaker: 'narrator',
    text: '她愣住了。不是「無法復原」，而是「它們還沒完成」。好像……有人在跟她說話。',
    nextNodeId: 'yi1-ch1-choice-3',
  },

  // 🎯 選項3：最後選擇
  {
    id: 'yi1-ch1-choice-3',
    speaker: 'narrator',
    text: '腦子裡有個聲音說刪掉吧。但另一個微弱的聲音說：等一下……',
    choices: [
      {
        id: 'ch1-c3a',
        text: '閉上眼，按下「確定」',
        nextNodeId: 'yi1-ch1-16',
        arcChange: 0,
        shadowChange: 3,
      },
      {
        id: 'ch1-c3b',
        text: '猶豫了一下，還是按下「確定」',
        nextNodeId: 'yi1-ch1-16',
        arcChange: 2,
        shadowChange: 0,
      },
    ],
  },
  {
    id: 'yi1-ch1-16',
    speaker: 'narrator',
    text: '就在那一秒，她感覺到什麼——像是有人在很遠的地方等她。',
    nextNodeId: 'yi1-ch1-17',
  },

  // 六、穿越
  {
    id: 'yi1-ch1-17',
    speaker: 'narrator',
    text: '螢幕突然變白。不是當機，是發光。那光從螢幕湧出來，把她整個人包住。',
    bgImage: 'ch1_white_light',
    effect: 'flash',
    nextNodeId: 'yi1-ch1-18',
  },
  {
    id: 'yi1-ch1-18',
    speaker: 'narrator',
    text: '她感覺自己在下墜。不對，是上升。不對，她分不清了。',
    nextNodeId: 'yi1-ch1-19',
  },
  {
    id: 'yi1-ch1-19',
    speaker: 'narrator',
    text: '那個房間、那杯涼掉的咖啡，離她越來越遠。一切歸於寂靜。',
    effect: 'fade-out',
    nextNodeId: 'yi1-ch1-20',
  },
  {
    id: 'yi1-ch1-20',
    speaker: 'narrator',
    text: '她最後聽見一個聲音，很輕，像風穿過樹葉——',
    nextNodeId: 'yi1-ch1-21',
  },
  {
    id: 'yi1-ch1-21',
    speaker: 'narrator',
    text: '「你來了。我們等你很久了。」',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-2-intro-1',
  },
];
// 總計：21 主線句 + 3 選項（6 分支句）= 27 節點
