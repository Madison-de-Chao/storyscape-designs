// 第十二章｜星夜 - 梵谷
import type { DialogueNode } from '@/stores/gameStore';

export const chapter12Nodes: DialogueNode[] = [
  // 開場：星空下
  {
    id: 'chapter12-1',
    speaker: 'narrator',
    text: '她聞到了油彩的味道。濃烈的、帶著松節油刺鼻氣息的油彩味。天空是深藍色的，但不是普通的深藍——是那種會**流動**的深藍，像有什麼活著的東西在裡面游泳。',
    nextNodeId: 'chapter12-2',
  },
  {
    id: 'chapter12-2',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '這裡是梵谷的世界。他大部分時間都在這裡作畫。',
    nextNodeId: 'chapter12-3',
  },
  {
    id: 'chapter12-3',
    speaker: 'narrator',
    text: '她抬頭看天空。那些星星——不是點狀的，而是一個個巨大的**漩渦**，散發著金黃色的光芒，在深藍色的夜空中旋轉。月亮是一個巨大的橙黃色光球，周圍環繞著同樣旋轉的光暈。',
    nextNodeId: 'chapter12-4',
  },
  {
    id: 'chapter12-4',
    speaker: 'protagonist',
    text: '這是……《星夜》？',
    nextNodeId: 'chapter12-5',
  },
  {
    id: 'chapter12-5',
    speaker: 'narrator',
    text: '但這不是看一幅畫。她**在**這幅畫裡面。那些旋轉的筆觸就在她頭頂流動，她甚至能感覺到空氣中的震動——像是整個世界都在呼吸。',
    nextNodeId: 'chapter12-6',
  },
  {
    id: 'chapter12-6',
    speaker: 'narrator',
    text: '遠處有一座小山丘，山丘上有一個人的剪影。他背對著她，正在對著天空作畫。畫架在風中輕輕搖晃，但他穩穩地站著，畫筆在畫布上快速移動。',
    nextNodeId: 'chapter12-7',
  },
  {
    id: 'chapter12-7',
    speaker: 'protagonist',
    text: '梵谷先生？',
    nextNodeId: 'chapter12-8',
  },
  {
    id: 'chapter12-8',
    speaker: 'narrator',
    text: '他轉過身來。她看到了那張著名的臉——紅棕色的鬍子、深陷的眼窩、瘦削的臉頰。但最讓她震驚的是他的眼睛——那雙眼睛裡，有著和天空一樣的**漩渦**。',
    nextNodeId: 'chapter12-9',
  },
  {
    id: 'chapter12-9',
    speaker: 'narrator',
    text: '他的衣服上沾滿了顏料，各種顏色——藍色、黃色、綠色、白色——像是他剛從調色盤裡走出來。',
    nextNodeId: 'chapter12-10',
  },

  // 梵谷登場
  {
    id: 'chapter12-10',
    speaker: 'narrator',
    text: '梵谷看著她，沒有說話。他放下畫筆，走過來，繞著她轉了一圈，像是在觀察一個模特兒。',
    nextNodeId: 'chapter12-11',
  },
  {
    id: 'chapter12-11',
    speaker: 'narrator',
    text: '他開口說話，聲音出奇地輕柔。',
    nextNodeId: 'chapter12-12',
  },
  {
    id: 'chapter12-12',
    speaker: 'narrator',
    text: '「你的顏色不太對。」',
    nextNodeId: 'chapter12-13',
  },
  {
    id: 'chapter12-13',
    speaker: 'protagonist',
    text: '什麼？',
    nextNodeId: 'chapter12-14',
  },
  {
    id: 'chapter12-14',
    speaker: 'narrator',
    text: '「每個人都有自己的顏色。你的顏色——有點混濁。像是本來應該是很漂亮的顏色，但被什麼東西蓋住了。」',
    nextNodeId: 'chapter12-15',
  },
  {
    id: 'chapter12-15',
    speaker: 'narrator',
    text: '他說話的方式很奇特——像是在自言自語，又像是在對她說話。他的眼神時而專注、時而飄忽，像是同時看著這個世界和另一個世界。',
    nextNodeId: 'chapter12-16',
  },
  {
    id: 'chapter12-16',
    speaker: 'protagonist',
    text: '問心說你可以教我一些東西……',
    nextNodeId: 'chapter12-17',
  },
  {
    id: 'chapter12-17',
    speaker: 'narrator',
    text: '「教？我不會教。我只會畫。」他轉身走回畫架前，「你想學什麼，就看我畫。」',
    nextNodeId: 'chapter12-18',
  },

  // 痛苦與創造
  {
    id: 'chapter12-18',
    speaker: 'narrator',
    text: '她走到他身邊，看著他的畫布。他正在畫的——不是星空，而是一朵**向日葵**。那朵向日葵的花瓣正在枯萎，邊緣發黑，但中心還是金黃色的。',
    nextNodeId: 'chapter12-19',
  },
  {
    id: 'chapter12-19',
    speaker: 'protagonist',
    text: '這朵向日葵……好像在死掉。',
    nextNodeId: 'chapter12-20',
  },
  {
    id: 'chapter12-20',
    speaker: 'narrator',
    text: '「它不是在死掉。它在**轉變**。」梵谷繼續畫著，筆觸快而有力，「你知道嗎，向日葵最美的時候，不是盛開的時候。是它開始枯萎的時候。」',
    nextNodeId: 'chapter12-21',
  },
  {
    id: 'chapter12-21',
    speaker: 'protagonist',
    text: '為什麼？',
    nextNodeId: 'chapter12-22',
  },
  {
    id: 'chapter12-22',
    speaker: 'narrator',
    text: '「因為那時候它的顏色最**真實**。盛開的時候，它在表演——看，我多漂亮，多年輕，多有活力。但枯萎的時候，它不再表演了。它只是……它自己。」',
    nextNodeId: 'chapter12-23',
  },
  {
    id: 'chapter12-23',
    speaker: 'narrator',
    text: '他停下畫筆，看著畫布上那朵半枯萎的向日葵。',
    nextNodeId: 'chapter12-24',
  },
  {
    id: 'chapter12-24',
    speaker: 'narrator',
    text: '「我活著的時候，只賣出過一幅畫。一幅。其他的時候，人們說我是瘋子、是廢物、是失敗者。我相信他們說的。我恨自己。」',
    nextNodeId: 'chapter12-25',
  },
  {
    id: 'chapter12-25',
    speaker: 'protagonist',
    text: '但你的畫現在……',
    nextNodeId: 'chapter12-26',
  },
  {
    id: 'chapter12-26',
    speaker: 'narrator',
    text: '「價值幾億？對，我知道。」他苦笑了一下，「但那有什麼意義？我死了。我活著的時候，沒有人認可我。我活著的時候，每一天都在和**黑暗**搏鬥。」',
    nextNodeId: 'chapter12-27',
  },

  // 第一個選擇
  {
    id: 'chapter12-27',
    speaker: 'narrator',
    text: '她看著梵谷眼中的漩渦，那裡面有星光，也有黑暗。',
    choices: [
      {
        id: 'chapter12-choice-1a',
        text: '問他如何面對那種黑暗',
        arcChange: 4,
        shadowChange: -3,
        nextNodeId: 'chapter12-28a',
      },
      {
        id: 'chapter12-choice-1b',
        text: '說自己也有類似的感受',
        arcChange: 3,
        shadowChange: -2,
        nextNodeId: 'chapter12-28b',
      },
    ],
  },
  {
    id: 'chapter12-28a',
    speaker: 'protagonist',
    text: '那種黑暗……你是怎麼面對的？',
    nextNodeId: 'chapter12-29',
  },
  {
    id: 'chapter12-28b',
    speaker: 'protagonist',
    text: '我好像也有那種黑暗。有時候會覺得，活著沒什麼意義。',
    nextNodeId: 'chapter12-29',
  },

  // 關於瘋狂
  {
    id: 'chapter12-29',
    speaker: 'narrator',
    text: '梵谷放下畫筆，坐在地上，示意她也坐下。',
    nextNodeId: 'chapter12-30',
  },
  {
    id: 'chapter12-30',
    speaker: 'narrator',
    text: '「你知道人們說我什麼嗎？他們說我是天才，因為我瘋了。他們說瘋狂是創造力的來源。」',
    nextNodeId: 'chapter12-31',
  },
  {
    id: 'chapter12-31',
    speaker: 'narrator',
    text: '他的聲音變得有些激動。',
    nextNodeId: 'chapter12-32',
  },
  {
    id: 'chapter12-32',
    speaker: 'narrator',
    text: '「那是**胡說**。瘋狂不是創造力的來源。瘋狂是——障礙。是敵人。是我每天都要對抗的東西。」',
    nextNodeId: 'chapter12-33',
  },
  {
    id: 'chapter12-33',
    speaker: 'narrator',
    text: '「我能畫畫，不是因為我瘋了。是**儘管**我瘋了，我還是在畫。瘋狂讓我看到別人看不到的東西——這是真的。但瘋狂也讓我無法控制自己，讓我割掉自己的耳朵，讓我最後舉起槍。」',
    nextNodeId: 'chapter12-34',
  },
  {
    id: 'chapter12-34',
    speaker: 'protagonist',
    text: '所以——痛苦和創造力……不是同一件事？',
    nextNodeId: 'chapter12-35',
  },
  {
    id: 'chapter12-35',
    speaker: 'narrator',
    text: '「痛苦是原料。創造力是——把原料變成別的東西。」',
    nextNodeId: 'chapter12-36',
  },
  {
    id: 'chapter12-36',
    speaker: 'narrator',
    text: '他指著天空。',
    nextNodeId: 'chapter12-37',
  },
  {
    id: 'chapter12-37',
    speaker: 'narrator',
    text: '「你看那些星星。我畫這幅畫的時候，我在精神病院裡。我看著窗外的星空，腦子裡是一團亂——焦慮、恐懼、絕望。但我沒有讓那些情緒控制我。我把它們**放進畫裡**。」',
    nextNodeId: 'chapter12-38',
  },
  {
    id: 'chapter12-38',
    speaker: 'narrator',
    text: '「那些旋轉的星星——那是我腦子裡的混亂。那棵黑色的柏樹——那是我的恐懼。但當我把它們畫出來，它們就不再只是混亂和恐懼了。它們變成了——**美**。」',
    nextNodeId: 'chapter12-39',
  },

  // 轉化的藝術
  {
    id: 'chapter12-39',
    speaker: 'protagonist',
    text: '所以畫畫對你來說，是一種——治療？',
    nextNodeId: 'chapter12-40',
  },
  {
    id: 'chapter12-40',
    speaker: 'narrator',
    text: '「不是治療。治療是把病治好。我的病沒有治好。我到死都在和那個黑暗搏鬥。」',
    nextNodeId: 'chapter12-41',
  },
  {
    id: 'chapter12-41',
    speaker: 'narrator',
    text: '他想了想。',
    nextNodeId: 'chapter12-42',
  },
  {
    id: 'chapter12-42',
    speaker: 'narrator',
    text: '「畫畫對我來說，是——**轉化**。把痛苦轉化成別的東西。痛苦還在，但它不再只是痛苦。它變成了作品，變成了意義，變成了——我活過的證據。」',
    nextNodeId: 'chapter12-43',
  },
  {
    id: 'chapter12-43',
    speaker: 'protagonist',
    text: '但不是每個人都會畫畫……',
    nextNodeId: 'chapter12-44',
  },
  {
    id: 'chapter12-44',
    speaker: 'narrator',
    text: '「不需要畫畫。轉化有很多種方式。寫作、音樂、舞蹈、園藝、烹飪——任何**創造**的行為都可以。重點不是你創造了什麼，重點是你在創造的過程中，把內在的東西**外化**了。」',
    nextNodeId: 'chapter12-45',
  },
  {
    id: 'chapter12-45',
    speaker: 'narrator',
    text: '「那些困在你腦子裡的東西——恐懼、憤怒、悲傷——它們在腦子裡會越來越大，越來越重。但當你把它們拿出來，放進一個外在的形式裡，它們就不再那麼可怕了。因為你可以看著它們，而不是被它們吞噬。」',
    nextNodeId: 'chapter12-46',
  },

  // 第二個選擇
  {
    id: 'chapter12-46',
    speaker: 'narrator',
    text: '她開始理解了什麼。那些歸者們教她的——似乎都指向同一個方向。',
    choices: [
      {
        id: 'chapter12-choice-2a',
        text: '嘗試表達自己內心的感受',
        arcChange: 5,
        shadowChange: -4,
        nextNodeId: 'chapter12-47a',
      },
      {
        id: 'chapter12-choice-2b',
        text: '問如果創造出來的東西不夠好怎麼辦',
        arcChange: 3,
        shadowChange: -1,
        nextNodeId: 'chapter12-47b',
      },
    ],
  },
  {
    id: 'chapter12-47a',
    speaker: 'protagonist',
    text: '我心裡有很多東西——憤怒、悲傷、恐懼。我一直試著把它們壓下去，假裝它們不存在。但它們越來越重……',
    nextNodeId: 'chapter12-48',
  },
  {
    id: 'chapter12-47b',
    speaker: 'protagonist',
    text: '但如果我創造出來的東西——不夠好呢？如果沒有人認可呢？',
    nextNodeId: 'chapter12-52',
  },

  // 承認感受
  {
    id: 'chapter12-48',
    speaker: 'narrator',
    text: '梵谷看著她，眼中的漩渦似乎柔和了一些。',
    nextNodeId: 'chapter12-49',
  },
  {
    id: 'chapter12-49',
    speaker: 'narrator',
    text: '「壓下去是行不通的。我試過。壓得越深，爆發得越猛。你需要找一個**出口**。」',
    nextNodeId: 'chapter12-50',
  },
  {
    id: 'chapter12-50',
    speaker: 'protagonist',
    text: '什麼樣的出口？',
    nextNodeId: 'chapter12-51',
  },
  {
    id: 'chapter12-51',
    speaker: 'narrator',
    text: '「任何讓你能夠表達的出口。畫、寫、唱、跳、說——什麼都好。重點是讓那些東西從你的身體裡**出來**。不要評判它們好不好、對不對。先讓它們出來。」',
    nextNodeId: 'chapter12-52',
  },

  // 關於認可
  {
    id: 'chapter12-52',
    speaker: 'narrator',
    text: '梵谷站起來，走回畫架前。他拿起一支新的畫筆，開始調色。',
    nextNodeId: 'chapter12-53',
  },
  {
    id: 'chapter12-53',
    speaker: 'narrator',
    text: '「你知道我為什麼一直畫嗎？不是因為我相信有一天會被認可。我畫的時候，根本沒想過認可這件事。我畫，是因為我**不得不**畫。」',
    nextNodeId: 'chapter12-54',
  },
  {
    id: 'chapter12-54',
    speaker: 'narrator',
    text: '「畫畫是我和這個世界對話的方式。我不會用語言表達我看到的東西、感受到的東西。但我可以畫出來。當我畫畫的時候，我覺得——我是活著的。我是有意義的。不是因為別人說我有意義，是因為我自己知道。」',
    nextNodeId: 'chapter12-55',
  },
  {
    id: 'chapter12-55',
    speaker: 'protagonist',
    text: '可是——你還是很痛苦。你還是……',
    nextNodeId: 'chapter12-56',
  },
  {
    id: 'chapter12-56',
    speaker: 'narrator',
    text: '「自殺了？對。」他沒有迴避這個問題，「我不是一個成功的例子。我沒有戰勝我的黑暗。我被它打敗了。」',
    nextNodeId: 'chapter12-57',
  },
  {
    id: 'chapter12-57',
    speaker: 'narrator',
    text: '他轉過身來看著她。',
    nextNodeId: 'chapter12-58',
  },
  {
    id: 'chapter12-58',
    speaker: 'narrator',
    text: '「但我不後悔我畫過的那些畫。我後悔的是——我太孤獨了。我把所有的愛都給了畫畫，卻忘了也需要接受愛。」',
    nextNodeId: 'chapter12-59',
  },

  // 連結的重要
  {
    id: 'chapter12-59',
    speaker: 'narrator',
    text: '「我弟弟西奧——他是唯一理解我的人。他一直支持我，寄錢給我，鼓勵我。但我太沉浸在自己的世界裡，沒有好好珍惜他。我總是在信裡抱怨、訴苦、要錢。我很少告訴他——我愛他。」',
    nextNodeId: 'chapter12-60',
  },
  {
    id: 'chapter12-60',
    speaker: 'narrator',
    text: '他的眼眶紅了。',
    nextNodeId: 'chapter12-61',
  },
  {
    id: 'chapter12-61',
    speaker: 'narrator',
    text: '「創造是重要的。把痛苦轉化是重要的。但**連結**也很重要。不要像我一樣，把自己關在自己的世界裡。找到那些願意陪伴你的人。讓他們知道，他們對你很重要。」',
    nextNodeId: 'chapter12-62',
  },
  {
    id: 'chapter12-62',
    speaker: 'protagonist',
    text: '可是——如果我覺得沒有人理解我呢？',
    nextNodeId: 'chapter12-63',
  },
  {
    id: 'chapter12-63',
    speaker: 'narrator',
    text: '「那是因為你沒有給他們機會。」',
    nextNodeId: 'chapter12-64',
  },
  {
    id: 'chapter12-64',
    speaker: 'narrator',
    text: '他指著她。',
    nextNodeId: 'chapter12-65',
  },
  {
    id: 'chapter12-65',
    speaker: 'narrator',
    text: '「你把真正的自己藏起來，然後抱怨沒有人看到真正的你。這不公平。你要先願意展示，別人才有機會理解。」',
    nextNodeId: 'chapter12-66',
  },

  // 畫你的星空
  {
    id: 'chapter12-66',
    speaker: 'narrator',
    text: '梵谷拿起一塊空白的畫布，遞給她。',
    nextNodeId: 'chapter12-67',
  },
  {
    id: 'chapter12-67',
    speaker: 'narrator',
    text: '「來，畫點什麼。」',
    nextNodeId: 'chapter12-68',
  },
  {
    id: 'chapter12-68',
    speaker: 'protagonist',
    text: '我不會畫畫……',
    nextNodeId: 'chapter12-69',
  },
  {
    id: 'chapter12-69',
    speaker: 'narrator',
    text: '「我沒說畫得好。我說畫點什麼。拿起筆，把你腦子裡的東西放上去。不要想好不好看、對不對。就是——畫。」',
    nextNodeId: 'chapter12-70',
  },
  {
    id: 'chapter12-70',
    speaker: 'narrator',
    text: '她猶豫了一下，拿起一支沾滿藍色顏料的畫筆。她不知道要畫什麼。但她開始動筆了。',
    nextNodeId: 'chapter12-71',
  },
  {
    id: 'chapter12-71',
    speaker: 'narrator',
    text: '一開始是混亂的線條，沒有形狀，沒有方向。但慢慢地，那些線條開始形成——一個**洞穴**。黑暗的、深邃的、讓人害怕的洞穴。',
    nextNodeId: 'chapter12-72',
  },
  {
    id: 'chapter12-72',
    speaker: 'narrator',
    text: '然後她在洞穴的深處，畫了一個小小的光點。',
    nextNodeId: 'chapter12-73',
  },
  {
    id: 'chapter12-73',
    speaker: 'narrator',
    text: '梵谷看著她的畫，輕輕點頭。',
    nextNodeId: 'chapter12-74',
  },
  {
    id: 'chapter12-74',
    speaker: 'narrator',
    text: '「你看到了。洞穴裡有光。這就是你的星空。」',
    nextNodeId: 'chapter12-75',
  },

  // 告別
  {
    id: 'chapter12-75',
    speaker: 'narrator',
    text: '頭頂的星空開始旋轉得更快，那些金黃色的漩渦發出溫暖的光芒。她感覺自己的內心有什麼東西鬆動了——那些壓抑已久的情緒，好像找到了一個小小的出口。',
    nextNodeId: 'chapter12-76',
  },
  {
    id: 'chapter12-76',
    speaker: 'narrator',
    text: '梵谷看著天空，像是在和那些星星說話。',
    nextNodeId: 'chapter12-77',
  },
  {
    id: 'chapter12-77',
    speaker: 'narrator',
    text: '「我曾經在信裡寫過——我想用星星的光來畫畫。我想讓人們看著我的畫的時候，感覺到那種光。不是外在的光，是——**內心的光**。」',
    nextNodeId: 'chapter12-78',
  },
  {
    id: 'chapter12-78',
    speaker: 'narrator',
    text: '「你也有那種光。每個人都有。只是有時候，我們把它藏得太深，連自己都忘了它在那裡。」',
    nextNodeId: 'chapter12-79',
  },
  {
    id: 'chapter12-79',
    speaker: 'protagonist',
    text: '謝謝你，梵谷先生。',
    nextNodeId: 'chapter12-80',
  },
  {
    id: 'chapter12-80',
    speaker: 'narrator',
    text: '「不用謝我。去找到你的星空。去畫你自己的畫。不是為了讓別人看，是為了讓你自己——**活著**。」',
    nextNodeId: 'chapter12-81',
  },

  // 結尾
  {
    id: 'chapter12-81',
    speaker: 'narrator',
    text: '那些星星的漩渦開始包圍她，金黃色的光芒越來越亮。她閉上眼睛，感覺自己被溫暖包裹。',
    nextNodeId: 'chapter12-82',
  },
  {
    id: 'chapter12-82',
    speaker: 'narrator',
    text: '當她再次睜開眼睛時，星空已經消失了。她站在一片溫柔的光芒中，手裡還握著那支畫筆。',
    nextNodeId: 'chapter12-83',
  },
  {
    id: 'chapter12-83',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '梵谷教會你什麼了？',
    nextNodeId: 'chapter12-84',
  },

  // 最後的選擇
  {
    id: 'chapter12-84',
    speaker: 'narrator',
    text: '她想了想。',
    choices: [
      {
        id: 'chapter12-choice-3a',
        text: '痛苦可以被轉化成美',
        arcChange: 5,
        shadowChange: -4,
        nextNodeId: 'chapter12-85a',
      },
      {
        id: 'chapter12-choice-3b',
        text: '需要找到自己的表達方式',
        arcChange: 4,
        shadowChange: -3,
        nextNodeId: 'chapter12-85b',
      },
      {
        id: 'chapter12-choice-3c',
        text: '連結和創造一樣重要',
        arcChange: 4,
        shadowChange: -3,
        nextNodeId: 'chapter12-85c',
      },
    ],
  },
  {
    id: 'chapter12-85a',
    speaker: 'protagonist',
    text: '他教會我——痛苦不一定要被消滅。它可以被**轉化**。變成藝術、變成意義、變成我活過的證據。',
    nextNodeId: 'chapter12-86',
  },
  {
    id: 'chapter12-85b',
    speaker: 'protagonist',
    text: '他教會我——每個人都需要找到自己的表達方式。把內心的東西外化，這樣它們才不會把我吞噬。',
    nextNodeId: 'chapter12-86',
  },
  {
    id: 'chapter12-85c',
    speaker: 'protagonist',
    text: '他教會我——創造很重要，但連結也很重要。不能把自己關在自己的世界裡。要讓別人有機會看到真正的我。',
    nextNodeId: 'chapter12-86',
  },
  {
    id: 'chapter12-86',
    speaker: 'wenxin',
    speakerName: '問心',
    text: '很好。你開始找到自己的星空了。現在，是時候見見下一位歸者了。',
    nextNodeId: 'chapter12-87',
  },
  {
    id: 'chapter12-87',
    speaker: 'narrator',
    text: '光芒漸漸褪去，她準備好迎接下一段旅程。',
    nextNodeId: null,
  },
];
