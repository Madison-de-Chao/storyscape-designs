// 第十四章｜空白的位置 - 未歸者廊
import type { DialogueNode } from '@/stores/gameStore';

export const chapter14Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'chapter14-1',
    speaker: 'narrator',
    text: '「那是預留的。」',
    nextNodeId: 'chapter14-2',
  },
  {
    id: 'chapter14-2',
    speaker: 'narrator',
    text: '「給那些正在學習的人。」',
    nextNodeId: 'chapter14-3',
  },

  // 一、進入未歸者廊
  {
    id: 'chapter14-3',
    speaker: 'narrator',
    text: '未歸者廊是安靜的。',
    nextNodeId: 'chapter14-4',
  },
  {
    id: 'chapter14-4',
    speaker: 'narrator',
    text: '不是那種舒適的安靜，是一種沉重的、凝固的、讓人想放輕腳步的安靜。像是走進一座很老很老的圖書館，或者一間存放著什麼重要東西的房間。',
    nextNodeId: 'chapter14-5',
  },
  {
    id: 'chapter14-5',
    speaker: 'narrator',
    text: '她跟著問心走進去，第一眼看到的是兩排廊柱。廊柱是灰黑色的，上面刻著她看不懂的文字。廊柱之間，每隔一段距離，就有一個壁龕。',
    nextNodeId: 'chapter14-6',
  },
  {
    id: 'chapter14-6',
    speaker: 'narrator',
    text: '壁龕裡沒有雕像，沒有畫像。只有一團光。淡淡的、朦朧的光，像是被稀釋的月色。',
    nextNodeId: 'chapter14-7',
  },
  {
    id: 'chapter14-7',
    speaker: 'protagonist',
    text: '那是什麼？',
    nextNodeId: 'chapter14-8',
  },
  {
    id: 'chapter14-8',
    speaker: 'wenxin',
    text: '記憶。未歸者的記憶。當你靠近的時候，你會看見他們的故事。',
    nextNodeId: 'chapter14-9',
  },
  {
    id: 'chapter14-9',
    speaker: 'narrator',
    text: '她看著那些壁龕，數了數——左邊五個，右邊五個，一共十個。但有一個壁龕是空的，沒有光。在長廊的盡頭，左邊最後一個位置。',
    nextNodeId: 'chapter14-10',
  },
  {
    id: 'chapter14-10',
    speaker: 'protagonist',
    text: '那個空的是——',
    nextNodeId: 'chapter14-11',
  },
  {
    id: 'chapter14-11',
    speaker: 'wenxin',
    text: '等一下再說，先看看這些。',
    nextNodeId: 'chapter14-12',
  },

  // 二、項羽
  {
    id: 'chapter14-12',
    speaker: 'narrator',
    text: '她走向第一個壁龕。那團光在她靠近的時候開始變化，像是水面泛起漣漪。然後，她看見了一個人。',
    nextNodeId: 'chapter14-13',
  },
  {
    id: 'chapter14-13',
    speaker: 'narrator',
    text: '一個穿著盔甲的男人。年輕，英俊，眼神裡有一種不可一世的傲氣。他站在一條河邊，身後是殘兵敗將，身前是滔滔江水。',
    nextNodeId: 'chapter14-14',
  },
  {
    id: 'chapter14-14',
    speaker: 'wenxin',
    text: '項羽。',
    nextNodeId: 'chapter14-15',
  },
  {
    id: 'chapter14-15',
    speaker: 'narrator',
    text: '她認得這個名字。霸王別姬，四面楚歌，烏江自刎。',
    nextNodeId: 'chapter14-16',
  },
  {
    id: 'chapter14-16',
    speaker: 'narrator',
    text: '畫面開始流動。她看見項羽舉起劍，對著江水，喃喃自語——「**無顏見江東父老。**」',
    effect: 'glow',
    emotionSFX: 'sad_sigh',
    nextNodeId: 'chapter14-17',
  },
  {
    id: 'chapter14-17',
    speaker: 'narrator',
    text: '然後，劍落。她倒吸一口氣。',
    nextNodeId: 'chapter14-18',
  },
  {
    id: 'chapter14-18',
    speaker: 'protagonist',
    text: '他為什麼是未歸者？',
    nextNodeId: 'chapter14-19',
  },
  {
    id: 'chapter14-19',
    speaker: 'wenxin',
    text: '你覺得呢？',
    nextNodeId: 'chapter14-20',
  },
  {
    id: 'chapter14-20',
    speaker: 'protagonist',
    text: '因為他自殺了？',
    nextNodeId: 'chapter14-21',
  },
  {
    id: 'chapter14-21',
    speaker: 'wenxin',
    text: '不是。自殺不是問題。問題是他為什麼自殺。因為他覺得輸了就沒有價值了。**他把自己的價值，綁定在「勝利」上面。一旦失敗，他就不知道自己是誰了。**',
    effect: 'glow',
    nextNodeId: 'chapter14-22',
  },
  {
    id: 'chapter14-22',
    speaker: 'narrator',
    text: '她看著那團光，項羽的身影漸漸消散。',
    nextNodeId: 'chapter14-23',
  },
  {
    id: 'chapter14-23',
    speaker: 'wenxin',
    text: '他打了那麼多勝仗，但他從來沒有學會一件事——輸了，不代表你沒有價值。他的價值是別人給的——是「霸王」這個稱號給的，是「戰無不勝」這個名聲給的。當這些東西被拿走，他就什麼都不剩了。',
    nextNodeId: 'chapter14-24',
  },
  {
    id: 'chapter14-24',
    speaker: 'protagonist',
    text: '這聽起來像——蘇軾說的，外境不能定義你的價值。',
    nextNodeId: 'chapter14-25',
  },
  {
    id: 'chapter14-25',
    speaker: 'wenxin',
    text: '對。但項羽沒有學會。',
    nextNodeId: 'chapter14-26',
  },

  // 三、屈原
  {
    id: 'chapter14-26',
    speaker: 'narrator',
    text: '她走向第二個壁龕。這次出現的是一個穿著長袍的男人，面容清瘦，眼神憂鬱。他站在江邊——又是江邊——懷裡抱著一塊石頭。',
    nextNodeId: 'chapter14-27',
  },
  {
    id: 'chapter14-27',
    speaker: 'wenxin',
    text: '屈原。',
    nextNodeId: 'chapter14-28',
  },
  {
    id: 'chapter14-28',
    speaker: 'narrator',
    text: '畫面流動。屈原對著江水，聲音悲愴——「**舉世皆濁我獨清，眾人皆醉我獨醒。**」然後，他抱著石頭，走進了江裡。',
    effect: 'glow',
    emotionSFX: 'sad_sigh',
    nextNodeId: 'chapter14-29',
  },
  {
    id: 'chapter14-29',
    speaker: 'protagonist',
    text: '他也是把價值綁定在外面的東西上？',
    nextNodeId: 'chapter14-30',
  },
  {
    id: 'chapter14-30',
    speaker: 'wenxin',
    text: '不完全一樣。項羽把價值綁在「勝敗」上，屈原把價值綁在「被認可」上。他一生都在等楚王回心轉意，等朝廷重新重用他。他的才華、他的理想、他的抱負——全都需要楚王的認可才有意義。當楚王不認可他，他就覺得活著沒有意義了。',
    nextNodeId: 'chapter14-31',
  },
  {
    id: 'chapter14-31',
    speaker: 'protagonist',
    text: '這像王陽明說的，答案不在外面，在心裡。但屈原一輩子都在向外求。',
    nextNodeId: 'chapter14-32',
  },
  {
    id: 'chapter14-32',
    speaker: 'wenxin',
    text: '對。他沒有找到自己內心的答案。',
    nextNodeId: 'chapter14-33',
  },

  // 四、梵谷
  {
    id: 'chapter14-33',
    speaker: 'narrator',
    text: '第三個壁龕。這次出現的是一個西方人。紅色的頭髮，鬍子亂糟糟的，眼神裡有一種瘋狂的光芒。他站在一間小房間裡，周圍堆滿了畫作。向日葵，星空，麥田——她認得這些畫。',
    nextNodeId: 'chapter14-34',
  },
  {
    id: 'chapter14-34',
    speaker: 'wenxin',
    text: '梵谷。',
    nextNodeId: 'chapter14-35',
  },
  {
    id: 'chapter14-35',
    speaker: 'narrator',
    text: '畫面流動。梵谷對著鏡子，手裡拿著一把刀。',
    nextNodeId: 'chapter14-36',
  },
  {
    id: 'chapter14-36',
    speaker: 'protagonist',
    text: '他的問題是什麼？',
    nextNodeId: 'chapter14-37',
  },
  {
    id: 'chapter14-37',
    speaker: 'wenxin',
    text: '他一輩子都在問一個問題：「我是不是真的有價值？」他畫了那麼多畫，但生前只賣出過一幅。他的弟弟支持他，但他覺得那是施捨。他遇到過欣賞他的人，但他覺得那是同情。',
    nextNodeId: 'chapter14-38',
  },
  {
    id: 'chapter14-38',
    speaker: 'wenxin',
    text: '他不相信自己有價值。無論外面的人怎麼說，他都不相信。因為他的內心已經決定了答案——「我是沒有價值的」。所有相反的證據，都被他過濾掉了。',
    nextNodeId: 'chapter14-39',
  },
  {
    id: 'chapter14-39',
    speaker: 'protagonist',
    text: '這像賈伯斯說的，**被自己拒絕比被別人拒絕更可怕**。',
    effect: 'glow',
    nextNodeId: 'chapter14-40',
  },
  {
    id: 'chapter14-40',
    speaker: 'wenxin',
    text: '對。梵谷不是被世界拒絕，是被自己拒絕。',
    nextNodeId: 'chapter14-41',
  },

  // 五、夢露
  {
    id: 'chapter14-41',
    speaker: 'narrator',
    text: '第四個壁龕。一個金髮的女人，濃妝艷抹，穿著白色的裙子。她站在鏡子前面，但鏡子裡的影像和她不一樣——鏡子裡是一個更年輕、更美麗、更完美的版本。',
    nextNodeId: 'chapter14-42',
  },
  {
    id: 'chapter14-42',
    speaker: 'wenxin',
    text: '瑪麗蓮·夢露。',
    nextNodeId: 'chapter14-43',
  },
  {
    id: 'chapter14-43',
    speaker: 'narrator',
    text: '畫面流動。夢露對著鏡子，眼神空洞——「他們愛的不是我。他們愛的是那個她。」然後，她看向手邊的藥瓶。',
    nextNodeId: 'chapter14-44',
  },
  {
    id: 'chapter14-44',
    speaker: 'protagonist',
    text: '她的問題是什麼？',
    nextNodeId: 'chapter14-45',
  },
  {
    id: 'chapter14-45',
    speaker: 'wenxin',
    text: '她被世界塑造成一個「形象」——性感女神，金髮尤物，所有男人的夢中情人。但那不是她，那是別人想要她成為的樣子。**她把真正的自己切掉了。**為了符合那個形象，她壓抑了自己的聰明、自己的脆弱、自己的渴望。到最後，她已經不知道真正的自己是什麼了。',
    effect: 'glow',
    emotionSFX: 'sad_sigh',
    nextNodeId: 'chapter14-46',
  },
  {
    id: 'chapter14-46',
    speaker: 'protagonist',
    text: '自我切割。把「不符合期待」的部分丟掉。這是最核心的問題——伊的來源。',
    nextNodeId: 'chapter14-47',
  },
  {
    id: 'chapter14-47',
    speaker: 'wenxin',
    text: '對。她是自我切割最極端的例子。她切掉了太多，到最後，剩下的已經不夠支撐一個完整的人了。',
    nextNodeId: 'chapter14-48',
  },

  // 六、其他未歸者
  {
    id: 'chapter14-48',
    speaker: 'narrator',
    text: '她繼續往前走，一個壁龕接著一個壁龕。',
    nextNodeId: 'chapter14-49',
  },
  {
    id: 'chapter14-49',
    speaker: 'narrator',
    text: '她看見了秦始皇——用絕對的控制來對抗內心的恐懼，修長城、焚書坑儒、尋找長生不老藥，但越控制越恐懼，到死都被困在那個牢籠裡。',
    nextNodeId: 'chapter14-50',
  },
  {
    id: 'chapter14-50',
    speaker: 'narrator',
    text: '她看見了希特勒——極端的二元切割，把世界分成「我們」和「他們」，把「他們」定義成不是人，然後用最殘忍的方式消滅。這是二元思維走到最黑暗盡頭的樣子。',
    nextNodeId: 'chapter14-51',
  },
  {
    id: 'chapter14-51',
    speaker: 'narrator',
    text: '她看見了一個又一個的故事。每一個未歸者，都讓她想起歸者們說過的話。',
    nextNodeId: 'chapter14-52',
  },
  {
    id: 'chapter14-52',
    speaker: 'narrator',
    text: '外境定義價值——項羽。向外求認可——屈原。被自己拒絕——梵谷。自我切割——夢露。恐懼與控制——秦始皇。極端二元——希特勒。',
    nextNodeId: 'chapter14-53',
  },
  {
    id: 'chapter14-53',
    speaker: 'narrator',
    text: '這些人，都是在某個地方「卡住」了。他們離完整只差一步，但他們沒有跨過去。',
    nextNodeId: 'chapter14-54',
  },
  {
    id: 'chapter14-54',
    speaker: 'narrator',
    text: '她站在長廊中央，回頭看著那些壁龕，搖了搖頭。',
    nextNodeId: 'chapter14-55',
  },
  {
    id: 'chapter14-55',
    speaker: 'protagonist',
    text: '真可惜。',
    nextNodeId: 'chapter14-56',
  },

  // 七、自以為懂
  {
    id: 'chapter14-56',
    speaker: 'wenxin',
    text: '可惜？',
    nextNodeId: 'chapter14-57',
  },
  {
    id: 'chapter14-57',
    speaker: 'protagonist',
    text: '是啊，他們其實都很厲害。項羽打仗那麼猛，屈原文章寫那麼好，梵谷畫畫那麼棒，秦始皇統一六國。他們都是大人物，但就是——想不開。',
    nextNodeId: 'chapter14-58',
  },
  {
    id: 'chapter14-58',
    speaker: 'protagonist',
    text: '如果他們有機會聽聽蘇軾說的話，或者王陽明說的話，也許就不一樣了。可惜他們那個年代沒有這些——',
    nextNodeId: 'chapter14-59',
  },
  {
    id: 'chapter14-59',
    speaker: 'narrator',
    text: '她突然停住了。不對，蘇軾和王陽明也是古人。他們同一個年代，說不定還更早。',
    nextNodeId: 'chapter14-60',
  },
  {
    id: 'chapter14-60',
    speaker: 'narrator',
    text: '那為什麼蘇軾學會了，項羽沒有？為什麼王陽明學會了，屈原沒有？',
    nextNodeId: 'chapter14-61',
  },
  {
    id: 'chapter14-61',
    speaker: 'wenxin',
    text: '他們不是沒有機會聽到這些道理。項羽身邊有范增，有虞姬，有無數人告訴過他「勝敗乃兵家常事」。屈原身邊有漁父，告訴過他「滄浪之水清兮可以濯我纓」。他們不是不知道，他們是——',
    nextNodeId: 'chapter14-62',
  },
  {
    id: 'chapter14-62',
    speaker: 'protagonist',
    text: '做不到。',
    nextNodeId: 'chapter14-63',
  },
  {
    id: 'chapter14-63',
    speaker: 'wenxin',
    text: '對。**知道和做到是兩回事。**',
    effect: 'glow',
    nextNodeId: 'chapter14-64',
  },

  // 八、空白的位置
  {
    id: 'chapter14-64',
    speaker: 'narrator',
    text: '她走向長廊盡頭，站在那個空的壁龕前面。那個壁龕是空的，沒有光，沒有任何影像。只有一面灰色的牆壁。',
    nextNodeId: 'chapter14-65',
  },
  {
    id: 'chapter14-65',
    speaker: 'protagonist',
    text: '這是誰的？',
    nextNodeId: 'chapter14-66',
  },
  {
    id: 'chapter14-66',
    speaker: 'wenxin',
    text: '這是預留的。',
    nextNodeId: 'chapter14-67',
  },
  {
    id: 'chapter14-67',
    speaker: 'protagonist',
    text: '預留給誰？',
    nextNodeId: 'chapter14-68',
  },
  {
    id: 'chapter14-68',
    speaker: 'wenxin',
    text: '給那些正在學習的人。這裡的每一個位置，都曾經是空的。項羽的位置，是他死後才亮起來的。屈原的位置，是他投江後才亮起來的。他們生前，都是「正在學習的人」。',
    nextNodeId: 'chapter14-69',
  },
  {
    id: 'chapter14-69',
    speaker: 'protagonist',
    text: '所以這個空的位置——是給那些「還沒決定結局」的靈魂？',
    nextNodeId: 'chapter14-70',
  },
  {
    id: 'chapter14-70',
    speaker: 'wenxin',
    text: '對。',
    nextNodeId: 'chapter14-71',
  },
  {
    id: 'chapter14-71',
    speaker: 'narrator',
    text: '她看著那個空的壁龕，想了一會兒，然後笑了。',
    nextNodeId: 'chapter14-72',
  },
  {
    id: 'chapter14-72',
    speaker: 'protagonist',
    text: '這個位置不會是我的。',
    nextNodeId: 'chapter14-73',
  },
  {
    id: 'chapter14-73',
    speaker: 'wenxin',
    text: '為什麼這麼確定？',
    nextNodeId: 'chapter14-74',
  },

  // 九、自信過頭
  {
    id: 'chapter14-74',
    speaker: 'protagonist',
    text: '第一，我已經懂了這些道理。項羽的問題是把價值綁在外境上——我知道外境不能定義價值，蘇軾教過我。屈原的問題是向外求認可——我知道答案在心裡，王陽明教過我。梵谷的問題是被自己拒絕——我知道不要自己拒絕自己，賈伯斯教過我。夢露的問題是自我切割——我知道不能把自己切掉，這是伊的來源，整個旅程都在教我這個。',
    nextNodeId: 'chapter14-75',
  },
  {
    id: 'chapter14-75',
    speaker: 'protagonist',
    text: '我知道問題在哪裡，我知道方向是什麼。我不會像他們一樣被困住。',
    nextNodeId: 'chapter14-76',
  },
  {
    id: 'chapter14-76',
    speaker: 'wenxin',
    text: '第二呢？',
    nextNodeId: 'chapter14-77',
  },
  {
    id: 'chapter14-77',
    speaker: 'protagonist',
    text: '第二——你看這些人。項羽，西楚霸王。屈原，楚國大夫。梵谷，世界級的畫家。夢露，一代巨星。秦始皇，千古一帝。他們都是歷史上留名的大人物，都是有大建樹的人。',
    nextNodeId: 'chapter14-78',
  },
  {
    id: 'chapter14-78',
    speaker: 'protagonist',
    text: '我是誰？我只是一個普通的上班族，一個連報告都寫不好的小人物。我做什麼都不對，我什麼成就都沒有。說實話，我根本不夠格進這裡。就算我最後沒有學會完整——我的故事也不值得被放在這裡。',
    nextNodeId: 'chapter14-79',
  },
  {
    id: 'chapter14-79',
    speaker: 'narrator',
    text: '問心看著她，眼神變得複雜。',
    nextNodeId: 'chapter14-80',
  },
  {
    id: 'chapter14-80',
    speaker: 'wenxin',
    text: '你覺得，只有大人物才會成為未歸者？',
    nextNodeId: 'chapter14-81',
  },
  {
    id: 'chapter14-81',
    speaker: 'protagonist',
    text: '不然呢？你會把一個普通人的故事放在項羽旁邊嗎？',
    nextNodeId: 'chapter14-82',
  },

  // 十、真相
  {
    id: 'chapter14-82',
    speaker: 'narrator',
    text: '問心沉默了很久。',
    nextNodeId: 'chapter14-83',
  },
  {
    id: 'chapter14-83',
    speaker: 'wenxin',
    text: '你知道嗎，這裡展示的只是一小部分。',
    nextNodeId: 'chapter14-84',
  },
  {
    id: 'chapter14-84',
    speaker: 'protagonist',
    text: '什麼意思？',
    nextNodeId: 'chapter14-85',
  },
  {
    id: 'chapter14-85',
    speaker: 'wenxin',
    text: '未歸者不只是這些名人。未歸者——多得數不清。每一個在痛苦中離開的靈魂，每一個沒有學會完整就放棄的生命，都是未歸者。這裡展示的，只是幾個「有代表性」的例子。因為他們的故事被歷史記錄下來了。',
    nextNodeId: 'chapter14-86',
  },
  {
    id: 'chapter14-86',
    speaker: 'wenxin',
    text: '但真正的未歸者廊——',
    nextNodeId: 'chapter14-87',
  },
  {
    id: 'chapter14-87',
    speaker: 'narrator',
    text: '問心閉上眼睛。',
    nextNodeId: 'chapter14-88',
  },
  {
    id: 'chapter14-88',
    speaker: 'narrator',
    text: '她周圍的空間突然開始變化。那十個壁龕的牆壁像是水波一樣散開，露出了後面的——',
    nextNodeId: 'chapter14-89',
  },
  {
    id: 'chapter14-89',
    speaker: 'narrator',
    text: '她倒吸一口氣。',
    nextNodeId: 'chapter14-90',
  },
  {
    id: 'chapter14-90',
    speaker: 'narrator',
    text: '那是一片無邊無際的空間。到處都是光點。無數的、密密麻麻的光點。每一個光點都是一團記憶，每一團記憶都是一個**沒有學會完整就離開的靈魂**。',
    effect: 'glow',
    emotionSFX: 'fear',
    nextNodeId: 'chapter14-91',
  },
  {
    id: 'chapter14-91',
    speaker: 'narrator',
    text: '她的腿軟了。',
    nextNodeId: 'chapter14-92',
  },
  {
    id: 'chapter14-92',
    speaker: 'narrator',
    text: '那些光點裡，有古代的，有現代的。有東方的，有西方的。有男人，有女人，有孩子。有名人，更多的是——普通人。',
    nextNodeId: 'chapter14-93',
  },
  {
    id: 'chapter14-93',
    speaker: 'narrator',
    text: '她看見一個穿著西裝的年輕人，站在高樓的邊緣。她看見一個穿著校服的女孩，手裡拿著一瓶藥。她看見一個滿臉皺紋的老人，在空蕩蕩的房間裡獨自流淚。',
    nextNodeId: 'chapter14-94',
  },
  {
    id: 'chapter14-94',
    speaker: 'narrator',
    text: '無數的故事。無數的痛苦。無數的——和她一樣的人。',
    nextNodeId: 'chapter14-95',
  },
  {
    id: 'chapter14-95',
    speaker: 'wenxin',
    text: '你還覺得，你不夠格嗎？',
    emotionSFX: 'mysterious_whisper',
    nextNodeId: 'chapter14-96',
  },
  {
    id: 'chapter14-96',
    speaker: 'narrator',
    text: '她說不出話。眼淚流了下來。',
    nextNodeId: 'chapter14-97',
  },

  // 結尾
  {
    id: 'chapter14-97',
    speaker: 'wenxin',
    text: '那個空的位置，從來不是給「大人物」的。那個空的位置，是給**每一個正在掙扎的靈魂**的。包括你。',
    effect: 'glow',
    emotionSFX: 'gentle_laugh',
    nextNodeId: 'chapter14-98',
  },
  {
    id: 'chapter14-98',
    speaker: 'wenxin',
    text: '你說你懂了那些道理。但「懂」和「做到」是兩回事。那些未歸者，很多人也「懂」。他們也讀過書，也聽過勸告，也知道應該怎麼做。但他們沒有做到。',
    nextNodeId: 'chapter14-99',
  },
  {
    id: 'chapter14-99',
    speaker: 'wenxin',
    text: '你和他們——真的那麼不一樣嗎？',
    nextNodeId: 'chapter14-100',
  },
  {
    id: 'chapter14-100',
    speaker: 'narrator',
    text: '她站在那片無邊的光點之中，感覺自己變得很小很小。她不再那麼確定了。',
    nextNodeId: 'chapter14-101',
  },
  {
    id: 'chapter14-101',
    speaker: 'wenxin',
    text: '走吧。該去見伊了。',
    nextNodeId: 'chapter15-1',
  },
];
