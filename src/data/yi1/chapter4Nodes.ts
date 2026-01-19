// 第四章｜命樹（蘇軾）
import type { DialogueNode } from '@/stores/gameStore';

export const chapter4Nodes: DialogueNode[] = [
  // 開場引言
  {
    id: 'yi1-chapter-4-intro-1',
    speaker: 'narrator',
    text: '「人生如逆旅，我亦是行人。」',
    nextNodeId: 'yi1-chapter-4-intro-2',
  },
  {
    id: 'yi1-chapter-4-intro-2',
    speaker: 'narrator',
    text: '——蘇軾',
    nextNodeId: 'yi1-chapter-4-1',
  },

  // 一
  {
    id: 'yi1-chapter-4-1',
    speaker: 'narrator',
    text: '船繼續在金色的河流上行駛。',
    nextNodeId: 'yi1-chapter-4-2',
  },
  {
    id: 'yi1-chapter-4-2',
    speaker: 'narrator',
    text: '兩岸的景色再次變化——竹林漸漸消失，取而代之的是一片廣闊的平原。平原上矗立著一棵巨大的樹。',
    nextNodeId: 'yi1-chapter-4-3',
  },
  {
    id: 'yi1-chapter-4-3',
    speaker: 'narrator',
    text: '那棵樹大得不可思議。',
    nextNodeId: 'yi1-chapter-4-4',
  },
  {
    id: 'yi1-chapter-4-4',
    speaker: 'narrator',
    text: '樹幹粗壯得像一座小山，樹冠伸展開來，幾乎遮蔽了半邊天空。樹葉是一種奇異的銀色，在微風中閃閃發光。',
    nextNodeId: 'yi1-chapter-4-5',
  },
  {
    id: 'yi1-chapter-4-5',
    speaker: 'protagonist',
    text: '那是什麼……？',
    nextNodeId: 'yi1-chapter-4-6',
  },
  {
    id: 'yi1-chapter-4-6',
    speaker: 'wenxin',
    text: '那是命樹。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-4-7',
  },
  {
    id: 'yi1-chapter-4-7',
    speaker: 'protagonist',
    text: '命樹？',
    nextNodeId: 'yi1-chapter-4-8',
  },
  {
    id: 'yi1-chapter-4-8',
    speaker: 'wenxin',
    text: '每一個靈魂，在出生之前，都會在元壹境種下一棵命樹。這棵樹會記錄你這一生所有的選擇、所有的經歷、所有的成長。',
    nextNodeId: 'yi1-chapter-4-9',
  },
  {
    id: 'yi1-chapter-4-9',
    speaker: 'protagonist',
    text: '這是……我的命樹？',
    nextNodeId: 'yi1-chapter-4-10',
  },
  {
    id: 'yi1-chapter-4-10',
    speaker: 'wenxin',
    text: '不，這是另一個人的。一個你應該見見的人。',
    nextNodeId: 'yi1-chapter-4-11',
  },

  // 二
  {
    id: 'yi1-chapter-4-11',
    speaker: 'narrator',
    text: '船靠岸。她們走向那棵巨樹。',
    nextNodeId: 'yi1-chapter-4-12',
  },
  {
    id: 'yi1-chapter-4-12',
    speaker: 'narrator',
    text: '走近了，她看到樹下坐著一個人。',
    nextNodeId: 'yi1-chapter-4-13',
  },
  {
    id: 'yi1-chapter-4-13',
    speaker: 'narrator',
    text: '那是一個中年男子，穿著深藍色的長袍，頭戴一頂黑色的高帽。他的面容圓潤，眼睛明亮，嘴角帶著一抹若有似無的笑意。',
    nextNodeId: 'yi1-chapter-4-14',
  },
  {
    id: 'yi1-chapter-4-14',
    speaker: 'narrator',
    text: '他手裡拿著一支筆，正在一張絲絹上寫著什麼。',
    nextNodeId: 'yi1-chapter-4-15',
  },
  {
    id: 'yi1-chapter-4-15',
    speaker: 'sushi',
    text: '來了？',
    nextNodeId: 'yi1-chapter-4-16',
  },
  {
    id: 'yi1-chapter-4-16',
    speaker: 'narrator',
    text: '他抬起頭，放下筆，笑著看向她。',
    nextNodeId: 'yi1-chapter-4-17',
  },
  {
    id: 'yi1-chapter-4-17',
    speaker: 'sushi',
    text: '久等了。我是蘇軾。',
    nextNodeId: 'yi1-chapter-4-18',
  },
  {
    id: 'yi1-chapter-4-18',
    speaker: 'protagonist',
    text: '蘇軾？「大江東去」的那個蘇軾？',
    nextNodeId: 'yi1-chapter-4-19',
  },
  {
    id: 'yi1-chapter-4-19',
    speaker: 'sushi',
    text: '哈哈，就是我。不過在這裡，我更喜歡人家叫我東坡。',
    nextNodeId: 'yi1-chapter-4-20',
  },
  {
    id: 'yi1-chapter-4-20',
    speaker: 'protagonist',
    text: '東坡先生……您怎麼會在這裡？',
    nextNodeId: 'yi1-chapter-4-21',
  },
  {
    id: 'yi1-chapter-4-21',
    speaker: 'sushi',
    text: '我在這裡住了快一千年了。每天喝喝茶、寫寫字、看看風景。日子過得挺不錯的。',
    nextNodeId: 'yi1-chapter-4-22',
  },
  {
    id: 'yi1-chapter-4-22',
    speaker: 'narrator',
    text: '她看著這個傳說中的大文豪，心裡充滿了敬畏。',
    nextNodeId: 'yi1-chapter-4-23',
  },
  {
    id: 'yi1-chapter-4-23',
    speaker: 'narrator',
    text: '蘇軾，中國歷史上最偉大的詩人之一。他一生坎坷，多次被貶，卻從未放棄對生活的熱愛。',
    nextNodeId: 'yi1-chapter-4-24',
  },
  {
    id: 'yi1-chapter-4-24',
    speaker: 'sushi',
    text: '別站著啊，坐。我剛泡了壺好茶。',
    nextNodeId: 'yi1-chapter-4-25',
  },

  // 三
  {
    id: 'yi1-chapter-4-25',
    speaker: 'narrator',
    text: '她在樹下坐下，蘇軾給她倒了一杯茶。',
    nextNodeId: 'yi1-chapter-4-26',
  },
  {
    id: 'yi1-chapter-4-26',
    speaker: 'narrator',
    text: '那茶是透明的，帶著淡淡的花香。喝下去，她感覺整個人都輕鬆了。',
    nextNodeId: 'yi1-chapter-4-27',
  },
  {
    id: 'yi1-chapter-4-27',
    speaker: 'sushi',
    text: '問心說你在困惑。什麼事困惑你？',
    nextNodeId: 'yi1-chapter-4-28',
  },
  {
    id: 'yi1-chapter-4-28',
    speaker: 'protagonist',
    text: '我……我覺得我的人生走錯了方向。我做的選擇都是錯的。',
    nextNodeId: 'yi1-chapter-4-29',
  },
  {
    id: 'yi1-chapter-4-29',
    speaker: 'sushi',
    text: '錯的？怎麼個錯法？',
    nextNodeId: 'yi1-chapter-4-30',
  },
  {
    id: 'yi1-chapter-4-30',
    speaker: 'protagonist',
    text: '我本來可以選一條更穩定的路。更安全的工作，更實際的生活。但我選擇了去追夢。結果……一無所有。',
    nextNodeId: 'yi1-chapter-4-31',
  },
  {
    id: 'yi1-chapter-4-31',
    speaker: 'sushi',
    text: '一無所有？',
    nextNodeId: 'yi1-chapter-4-32',
  },
  {
    id: 'yi1-chapter-4-32',
    speaker: 'protagonist',
    text: '是啊。我的夢想沒有實現，錢也沒賺到，時間也浪費了。如果當初選另一條路……',
    nextNodeId: 'yi1-chapter-4-33',
  },
  {
    id: 'yi1-chapter-4-33',
    speaker: 'sushi',
    text: '如果當初選另一條路，你現在就會快樂嗎？',
    nextNodeId: 'yi1-chapter-4-34',
  },
  {
    id: 'yi1-chapter-4-34',
    speaker: 'narrator',
    text: '她愣住了。',
    nextNodeId: 'yi1-chapter-4-35',
  },
  {
    id: 'yi1-chapter-4-35',
    speaker: 'protagonist',
    text: '這……我不知道。',
    nextNodeId: 'yi1-chapter-4-36',
  },
  {
    id: 'yi1-chapter-4-36',
    speaker: 'sushi',
    text: '你看，你自己也不確定。',
    nextNodeId: 'yi1-chapter-4-37',
  },

  // 四
  {
    id: 'yi1-chapter-4-37',
    speaker: 'narrator',
    text: '蘇軾指了指頭頂的巨樹。',
    nextNodeId: 'yi1-chapter-4-38',
  },
  {
    id: 'yi1-chapter-4-38',
    speaker: 'sushi',
    text: '這是我的命樹。',
    nextNodeId: 'yi1-chapter-4-39',
  },
  {
    id: 'yi1-chapter-4-39',
    speaker: 'narrator',
    text: '她抬頭看去。那巨大的樹冠在微風中輕輕搖晃，銀色的葉子發出沙沙的聲響。',
    nextNodeId: 'yi1-chapter-4-40',
  },
  {
    id: 'yi1-chapter-4-40',
    speaker: 'sushi',
    text: '你看到那些分叉了嗎？',
    nextNodeId: 'yi1-chapter-4-41',
  },
  {
    id: 'yi1-chapter-4-41',
    speaker: 'narrator',
    text: '她仔細看。樹幹分出無數枝幹，每一根枝幹又分出更多的小枝。整棵樹像是一個錯綜複雜的迷宮。',
    nextNodeId: 'yi1-chapter-4-42',
  },
  {
    id: 'yi1-chapter-4-42',
    speaker: 'sushi',
    text: '每一個分叉，都是我人生中的一個選擇。每一個選擇，都開出一條新的路。',
    nextNodeId: 'yi1-chapter-4-43',
  },
  {
    id: 'yi1-chapter-4-43',
    speaker: 'protagonist',
    text: '這麼多……',
    nextNodeId: 'yi1-chapter-4-44',
  },
  {
    id: 'yi1-chapter-4-44',
    speaker: 'sushi',
    text: '是啊。我這一生，做過無數選擇。有些看起來是對的，有些看起來是錯的。',
    nextNodeId: 'yi1-chapter-4-45',
  },
  {
    id: 'yi1-chapter-4-45',
    speaker: 'sushi',
    text: '我考中進士，人人說這是對的。我反對王安石變法，結果被貶，人人說這是錯的。',
    nextNodeId: 'yi1-chapter-4-46',
  },
  {
    id: 'yi1-chapter-4-46',
    speaker: 'sushi',
    text: '我被貶到黃州，窮困潦倒，人人說這是人生低谷。',
    nextNodeId: 'yi1-chapter-4-47',
  },
  {
    id: 'yi1-chapter-4-47',
    speaker: 'sushi',
    text: '可是你知道嗎？我最好的詩詞，就是在那裡寫的。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-4-48',
  },

  // 五
  {
    id: 'yi1-chapter-4-48',
    speaker: 'protagonist',
    text: '您是說……《念奴嬌》？《赤壁賦》？',
    nextNodeId: 'yi1-chapter-4-49',
  },
  {
    id: 'yi1-chapter-4-49',
    speaker: 'sushi',
    text: '對。還有《定風波》。「莫聽穿林打葉聲，何妨吟嘯且徐行。」',
    nextNodeId: 'yi1-chapter-4-50',
  },
  {
    id: 'yi1-chapter-4-50',
    speaker: 'sushi',
    text: '如果我沒有被貶到黃州，我不會經歷那些痛苦。但如果我沒有經歷那些痛苦，我也不會有那些領悟。',
    nextNodeId: 'yi1-chapter-4-51',
  },
  {
    id: 'yi1-chapter-4-51',
    speaker: 'protagonist',
    text: '所以您是說……挫折也是有意義的？',
    nextNodeId: 'yi1-chapter-4-52',
  },
  {
    id: 'yi1-chapter-4-52',
    speaker: 'sushi',
    text: '不只是有意義。我是說——沒有「錯」的選擇。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-4-53',
  },
  {
    id: 'yi1-chapter-4-53',
    speaker: 'protagonist',
    text: '沒有錯的選擇？可是……',
    nextNodeId: 'yi1-chapter-4-54',
  },
  {
    id: 'yi1-chapter-4-54',
    speaker: 'sushi',
    text: '你看這棵樹。它的每一根枝幹，都是朝著天空生長的。不管往左、往右、往前、往後，最終都是向上。',
    nextNodeId: 'yi1-chapter-4-55',
  },
  {
    id: 'yi1-chapter-4-55',
    speaker: 'sushi',
    text: '人生也是這樣。不管你選什麼路，只要你持續成長，最終都會到達同一個地方。',
    nextNodeId: 'yi1-chapter-4-56',
  },
  {
    id: 'yi1-chapter-4-56',
    speaker: 'protagonist',
    text: '同一個地方？',
    nextNodeId: 'yi1-chapter-4-57',
  },
  {
    id: 'yi1-chapter-4-57',
    speaker: 'sushi',
    text: '完整。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-4-58',
  },

  // 六
  {
    id: 'yi1-chapter-4-58',
    speaker: 'narrator',
    text: '又是這個詞。',
    nextNodeId: 'yi1-chapter-4-59',
  },
  {
    id: 'yi1-chapter-4-59',
    speaker: 'narrator',
    text: '問心說過，地球是一座學校，每個靈魂來這裡，是為了學習「完整」。',
    nextNodeId: 'yi1-chapter-4-60',
  },
  {
    id: 'yi1-chapter-4-60',
    speaker: 'protagonist',
    text: '什麼是「完整」？我一直不太明白。',
    nextNodeId: 'yi1-chapter-4-61',
  },
  {
    id: 'yi1-chapter-4-61',
    speaker: 'sushi',
    text: '完整就是接受自己的全部。成功的部分，失敗的部分。光明的部分，黑暗的部分。',
    nextNodeId: 'yi1-chapter-4-62',
  },
  {
    id: 'yi1-chapter-4-62',
    speaker: 'sushi',
    text: '你看這棵樹，它有很多枝幹。有的長得高，有的長得矮。有的茂盛，有的枯萎。',
    nextNodeId: 'yi1-chapter-4-63',
  },
  {
    id: 'yi1-chapter-4-63',
    speaker: 'sushi',
    text: '但它們都是同一棵樹的一部分。你會說哪一根枝幹是「錯」的嗎？',
    nextNodeId: 'yi1-chapter-4-64',
  },
  {
    id: 'yi1-chapter-4-64',
    speaker: 'protagonist',
    text: '不會……',
    nextNodeId: 'yi1-chapter-4-65',
  },
  {
    id: 'yi1-chapter-4-65',
    speaker: 'sushi',
    text: '對。每一根枝幹都在它該在的位置。每一個選擇，都是你生命的一部分。',
    nextNodeId: 'yi1-chapter-4-66',
  },
  {
    id: 'yi1-chapter-4-66',
    speaker: 'sushi',
    text: '你無法回到過去改變選擇。但你可以選擇如何看待這些選擇。',
    nextNodeId: 'yi1-chapter-4-67',
  },

  // 七
  {
    id: 'yi1-chapter-4-67',
    speaker: 'protagonist',
    text: '可是……有些選擇真的帶來了很大的傷害。我傷害了自己，也傷害了別人。',
    nextNodeId: 'yi1-chapter-4-68',
  },
  {
    id: 'yi1-chapter-4-68',
    speaker: 'sushi',
    text: '我知道。我也傷害過人。',
    nextNodeId: 'yi1-chapter-4-69',
  },
  {
    id: 'yi1-chapter-4-69',
    speaker: 'narrator',
    text: '蘇軾的眼神變得有些遙遠。',
    nextNodeId: 'yi1-chapter-4-70',
  },
  {
    id: 'yi1-chapter-4-70',
    speaker: 'sushi',
    text: '我年輕的時候，太過狂傲。得罪了很多人，也連累了很多人。',
    nextNodeId: 'yi1-chapter-4-71',
  },
  {
    id: 'yi1-chapter-4-71',
    speaker: 'sushi',
    text: '烏台詩案的時候，我差點被殺。我的弟弟為了救我，差點丟了官。我的朋友們因為認識我，也受到了牽連。',
    nextNodeId: 'yi1-chapter-4-72',
  },
  {
    id: 'yi1-chapter-4-72',
    speaker: 'sushi',
    text: '那時候我也想過——如果我當初不那麼愛說話，是不是就不會害到這些人？',
    nextNodeId: 'yi1-chapter-4-73',
  },
  {
    id: 'yi1-chapter-4-73',
    speaker: 'protagonist',
    text: '後來呢？',
    nextNodeId: 'yi1-chapter-4-74',
  },
  {
    id: 'yi1-chapter-4-74',
    speaker: 'sushi',
    text: '後來我想通了。過去的事，已經過去了。我能做的，不是後悔，而是用接下來的時間，做得更好。',
    nextNodeId: 'yi1-chapter-4-75',
  },
  {
    id: 'yi1-chapter-4-75',
    speaker: 'sushi',
    text: '「回首向來蕭瑟處，歸去，也無風雨也無晴。」',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-4-76',
  },

  // 八
  {
    id: 'yi1-chapter-4-76',
    speaker: 'narrator',
    text: '她聽著蘇軾的話，心裡湧起一種複雜的情緒。',
    nextNodeId: 'yi1-chapter-4-77',
  },
  {
    id: 'yi1-chapter-4-77',
    speaker: 'narrator',
    text: '她想到自己做過的那些選擇。那些她認為「錯誤」的選擇。',
    nextNodeId: 'yi1-chapter-4-78',
  },
  {
    id: 'yi1-chapter-4-78',
    speaker: 'narrator',
    text: '如果把它們都當成樹的枝幹來看……它們真的是「錯」的嗎？',
    nextNodeId: 'yi1-chapter-4-79',
  },
  {
    id: 'yi1-chapter-4-79',
    speaker: 'narrator',
    text: '還是只是不同的成長路徑？',
    nextNodeId: 'yi1-chapter-4-80',
  },
  {
    id: 'yi1-chapter-4-80',
    speaker: 'sushi',
    text: '我再問你一個問題。',
    nextNodeId: 'yi1-chapter-4-81',
  },
  {
    id: 'yi1-chapter-4-81',
    speaker: 'sushi',
    text: '如果你沒有走過那些「錯」的路，你還會是現在的你嗎？',
    nextNodeId: 'yi1-chapter-4-82',
  },
  {
    id: 'yi1-chapter-4-82',
    speaker: 'narrator',
    text: '她沉默了。',
    nextNodeId: 'yi1-chapter-4-83',
  },
  {
    id: 'yi1-chapter-4-83',
    speaker: 'narrator',
    text: '答案是——不會。',
    nextNodeId: 'yi1-chapter-4-84',
  },
  {
    id: 'yi1-chapter-4-84',
    speaker: 'narrator',
    text: '那些痛苦、那些失敗、那些後悔，都塑造了她。讓她變成了現在的自己。',
    nextNodeId: 'yi1-chapter-4-85',
  },
  {
    id: 'yi1-chapter-4-85',
    speaker: 'sushi',
    text: '所以你看，沒有任何經歷是浪費的。每一個選擇，都把你帶到了這裡。',
    nextNodeId: 'yi1-chapter-4-86',
  },

  // 九 - 選擇
  {
    id: 'yi1-chapter-4-86',
    speaker: 'sushi',
    text: '現在我問你——',
    nextNodeId: 'yi1-chapter-4-87',
  },
  {
    id: 'yi1-chapter-4-87',
    speaker: 'sushi',
    text: '你願意接受你的命樹嗎？接受每一根枝幹，不論它看起來是成功還是失敗？',
    nextNodeId: 'yi1-chapter-4-choice-1',
  },
  {
    id: 'yi1-chapter-4-choice-1',
    speaker: 'narrator',
    text: '——你願意嗎？',
    choices: [
      {
        text: '願意。這些都是我的一部分。',
        nextNodeId: 'yi1-chapter-4-accept-1',
        arcChange: 5,
      },
      {
        text: '我還需要時間……',
        nextNodeId: 'yi1-chapter-4-hesitate-1',
        shadowChange: 2,
      },
    ],
  },

  // 接受路線
  {
    id: 'yi1-chapter-4-accept-1',
    speaker: 'protagonist',
    text: '願意。不論是成功還是失敗，這些都是我走過的路。',
    nextNodeId: 'yi1-chapter-4-accept-2',
  },
  {
    id: 'yi1-chapter-4-accept-2',
    speaker: 'sushi',
    text: '好。這就是智慧的開始。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-4-merge-1',
  },

  // 猶豫路線
  {
    id: 'yi1-chapter-4-hesitate-1',
    speaker: 'protagonist',
    text: '我……還需要一點時間。有些事，我還是沒辦法原諒自己。',
    nextNodeId: 'yi1-chapter-4-hesitate-2',
  },
  {
    id: 'yi1-chapter-4-hesitate-2',
    speaker: 'sushi',
    text: '沒關係。這條路，本來就不需要一步到位。',
    nextNodeId: 'yi1-chapter-4-hesitate-3',
  },
  {
    id: 'yi1-chapter-4-hesitate-3',
    speaker: 'sushi',
    text: '慢慢來。你有的是時間。',
    nextNodeId: 'yi1-chapter-4-merge-1',
  },

  // 合併路線
  {
    id: 'yi1-chapter-4-merge-1',
    speaker: 'narrator',
    text: '蘇軾站起身，拍了拍她的肩膀。',
    nextNodeId: 'yi1-chapter-4-merge-2',
  },
  {
    id: 'yi1-chapter-4-merge-2',
    speaker: 'sushi',
    text: '記住，人生如逆旅，我亦是行人。',
    effect: 'glow',
    nextNodeId: 'yi1-chapter-4-merge-3',
  },
  {
    id: 'yi1-chapter-4-merge-3',
    speaker: 'sushi',
    text: '我們都是旅人。路上遇到的風景，不論美醜，都是旅途的一部分。',
    nextNodeId: 'yi1-chapter-4-merge-4',
  },
  {
    id: 'yi1-chapter-4-merge-4',
    speaker: 'sushi',
    text: '享受這趟旅程吧。',
    nextNodeId: 'yi1-chapter-4-merge-5',
  },
  {
    id: 'yi1-chapter-4-merge-5',
    speaker: 'protagonist',
    text: '謝謝您，東坡先生。',
    nextNodeId: 'yi1-chapter-4-merge-6',
  },
  {
    id: 'yi1-chapter-4-merge-6',
    speaker: 'sushi',
    text: '哈哈，別客氣。下次來，我請你吃東坡肉。',
    nextNodeId: 'yi1-chapter-4-merge-7',
  },
  {
    id: 'yi1-chapter-4-merge-7',
    speaker: 'narrator',
    text: '她忍不住笑了。',
    nextNodeId: 'yi1-chapter-4-merge-8',
  },
  {
    id: 'yi1-chapter-4-merge-8',
    speaker: 'narrator',
    text: '這就是蘇軾吧。即使談論最深刻的人生哲理，也不忘開個玩笑。',
    nextNodeId: 'yi1-chapter-4-merge-9',
  },
  {
    id: 'yi1-chapter-4-merge-9',
    speaker: 'wenxin',
    text: '準備好了嗎？',
    nextNodeId: 'yi1-chapter-4-merge-10',
  },
  {
    id: 'yi1-chapter-4-merge-10',
    speaker: 'narrator',
    text: '問心站在河邊，等著她。',
    nextNodeId: 'yi1-chapter-4-end',
  },
  {
    id: 'yi1-chapter-4-end',
    speaker: 'narrator',
    text: '她回頭看了一眼那棵巨大的命樹，然後轉身走向船。下一段旅程，在等著她。',
    nextNodeId: 'yi1-chapter-5-intro-1',
  },
];
