/**
 *  日文復原表
 *
 *  【包括】
 *    ・日文復原一對多表
 *    ・日文復原增補一對一表
 *
 *  【說明】
 *    ・「日文復原一對多表」即裁剪修改過的一簡多繁表，
 *    　其中若出現中文一對多而日文一對一的情況
 *    　則加入「日文復原增補一對一表」
 */


var 日文復原增補一對一表 = {
  // 正異取捨，不在繁化表中
  "为": "為", // ため
  "伪": "偽", // にせ
  "闲": "閑", // 閑暇
  "灶": "竈", // かまど
  "妆": "粧", // 化粧
  "线": "線", // 線路
  "鲶": "鯰", // なまず
  "腭": "顎", // あご
  "痹": "痺", // しびれ
  "众": "衆", // 民衆
  "钩": "鉤", // 鉤括弧
  "钵": "鉢", // はち
  "启": "啓", // 拝啓
  "沉": "沈", // 沈没
  "卫": "衛", // 衛生
  "赝": "贋", // 贋造
  // 一對多變一對一
  "卤": "鹵",
  "坛": "壇",
  "饥": "飢",
  "仆": "僕",
  "舍": "捨",
  "佣": "傭",
  "苏": "蘇",
  "别": "別",
  "哄": "鬨",
  "熏": "燻",
  "尝": "嘗",
  "烟": "煙",
  "柜": "櫃",
  "杰": "傑",
  "炼": "煉",
  "链": "鏈",
  "摆": "擺",
  "僵": "殭",
  "药": "葯",
  "仑": "崙",
  "帘": "簾",
  "夸": "誇",
  "袅": "嫋",
  "杆": "桿",
  "鑒": "鑑",
  "搜": "蒐",
  "铲": "鏟",
  "叹": "嘆",
  "哗": "嘩",
  "荫": "蔭",
  "迹": "跡",
  "宁": "寧",
  "咨": "諮"
}


var 日文復原一對多表 = {
  "只": {
    "對應字": {
      "只": [
        "ただ",
	"只今",
	"只見"
      ],
      "隻": [
        "せき",
	"一隻",
        "片言隻語"
      ]
    },
    "注解": "簡体字は助数詞の「隻」という字を「只」という字に統合した。"
  },
  "后": {
    "對應字": {
      "後": [
        "あと",
	"のち",
	"うしろ"
      ],
      "后": [
        "皇后",
	"后宫"
      ]
    },
    "注解": "簡体字には「後悔」の「後」は「皇后」の「后」に統合された。"
  },
  "复": {
    "對應字": {
      "復": [
        "回復",
        "復習"
      ],
      "複": [
        "複雑",
        "複数",
	"複写"
      ]
    },
    "注解": "簡体字は「往復」などを意味する「復」という字を「重なる」などを意味する「複」という字とともに「复(ふく)」という字に統合した。"
  },
  "尽": {
    "對應字": {
      "尽": [
        "つくす",
        "つきる"
      ],
      "儘": [
        "まま"
      ]
    },
    "注解": "「儘(まま)」という字は日本語の文章にあまり現れないが、もし現れれば簡体字に「尽」という字に統合されるので修正する必要がある。"
  },
  "干": {
    "對應字": {
      "干": [
        "ほす",
	"干害",
        "干渉",
        "干支"
      ],
      "乾": [
        "かわく",
        "乾燥",
	"乾物"
      ],
      "幹": [
        "幹部",
        "新幹線"
      ]
    },
    "注解": "簡体字にはこの３つの「かん」と読む字は全部「干」に統合された。"
  },
  "并": {
    "對應字": {
      "並": [
        "ならぶ",
	"なみ",
	"並行"
      ],
      "併": [
        "合併",
        "併記"
      ],
      "并": [
        "并州(地名)"
      ]
    },
    "注解": "簡体字にはこの３つの字は全部「并(へい)」という字に統合された。"
  },
  "志": {
    "對應字": {
      "志": [
        "こころざし"
      ],
      "誌": [
        "雜誌",
        "日誌"
      ]
    },
    "注解": "簡体字は「記録」「記事」などを意味する「誌」という字を「志」という字に統合した。"
  },
  "汇": {
    "對應字": {
      "彙": [
        "語彙",
        "彙報"
      ],
      "匯": [
        "匯滞",
        "匯兌",
        "徐家匯"
      ]
    },
    "注解": "「匯(わい)」という字は「水がめぐる」などを意味する。簡体字には「語彙」の「彙」という字とともに「汇(わい)」という字に統合された。"
  },
  "系": {
    "對應字": {
      "系": [
        "系統",
	"理系",
	"参考系"
      ],
      "係": [
        "係數",
        "関係"
      ],
      /*
      "繋": [
	"つなぐ" // 「繋」非「繫」
      ]
      */
    },
    "注解": "簡体字にはこの２つの「けい」と読む字は全部「系統」の「系」に統合された。"
  },
  "荡": {
    "對應字": {
      "蕩": [],
      "盪": []
    },
    "注解": "この２つの字は日本語にあまり区別されないが、習慣による使い分けはないとはいえない。簡体字には統合された。"
  },
  "获": {
    "對應字": {
      "獲": [
        "獲得"
      ],
      "穫": [
        "収穫"
      ]
    },
    "注解": "簡体字にはこの２つの「かく」と読む字は全部「获(かく)」という字に統合された。"
  },
  "采": {
    "對應字": {
      "采": [
	"風采",
	"采女",
	"采配"
      ],
      "採": [
        "採点",
        "採集"
      ]
    },
    "注解": "簡体字は「採集」などを意味する「採」という字を「風采」の「采」という字に統合した。"
  },
  "里": {
    "對應字": {
      "里": [
        "さと",
        "万里の長城"
      ],
      "裏": [
	"うら",
        "裏面"
      ]
    },
    "注解": "簡体字には「裏面」の「裏」は「万里」の「里」に統合された。"
  },
  "钟": {
    "對應字": {
      "鍾": [
        "鍾愛",
        "鍾乳石"
      ],
      "鐘": [
        "かね"
      ]
    },
    "注解": "簡体字は「鐘」という字を「あつめる」などを意味する「鍾(しょう)」という字とともに「钟(しょう)」という字に統合した。"
  },
  "丑": {
    "對應字": {
      "丑": [
        "丑の日"
      ],
      "醜": [
        "みにくい",
        "醜悪"
      ]
    },
    "注解": "簡体字は「醜」という字を十二支の二番目の「丑」という字に統合した。"
  },
  "了": {
    "對應字": {
      "了": [
        "完了",
        "了解"
      ],
      "瞭": [
        "明瞭",
        "一目瞭然"
      ]
    },
    "注解": "簡体字は「明瞭」などを意味する「瞭」という字を「完了」の「了」という字に統合した。"
  },
  "克": {
    "對應字": {
      "克": [
        "克服",
      ],
      "剋": [
        "相剋",
        "下剋上"
      ]
    },
    "注解": "簡体字は「剋」という「克」と通用する字を「克」に統合した。"
  },
  "准": {
    "對應字": {
      "准": [
        "准看護師",
	"批准"
      ],
      "準": [
        "準備",
        "標準"
      ]
    },
    "注解": "「准」と「準」はもともと同じ字だが、習慣による使い分けがある。簡体字には全部「准」に統合された。"
  },
  "制": {
    "對應字": {
      "制": [
        "制度",
        "制御"
      ],
      "製": [
        "製造"
      ]
    },
    "注解": "簡体字には「製造」の「製」は「制度」の「制」に統合された。"
  },
  "吊": {
    "對應字": {
      "吊": [
        "つる",
        "吊革"
      ],
      "弔": [
        "とむらう",
        "弔問"
      ]
    },
    "注解": "簡体字は「吊」という字を「弔」という字に統合した。"
  },
  "致": {
    "對應字": {
      "致": [
        "いたす",
        "拉致"
      ],
      "緻": [
        "細緻",
	"緻密"
      ]
    },
    "注解": "簡体字は「きめが細かい」などを意味する「緻」という字を「致」という字に統合した。"
  },
  "云": {
    "對應字": {
      "雲": [
        "くも",
	"飛行機雲"
      ],
      "云": [
	"いう",
        "云云"
      ]
    },
    "注解": "簡体字は「雲」という字を「云々」の「云」という字に統合した。"
  },
  "签": {
    "對應字": {
      "簽": [
        "題簽"
      ],
      "籖": [
	"くじ",
	"宝籤"
      ]
    },
    "注解": "簡体字は「籤(くじ)」という字を「題簽(だいせん)」の「簽」の簡体字「签」に統合した。"
  },
  "谷": {
    "對應字": {
      "谷": [
	"たに"
      ],
      "穀": [
        "穀物"
      ]
    },
    "注解": "簡体字は「穀物」の「穀」という字を「谷」という字に統合した。"
  },
  "辟": {
    "對應字": {
      "辟": [
        "辟易"
      ],
      "闢": [
        "開闢"
      ]
    },
    "注解": "簡体字は「天地開闢」の「闢」という字を「辟易」の「辟」という字に統合した。"
  },
  "奸": {
    "對應字": {
      "奸": [
        "奸臣",
        "奸計"
      ],
      "姦": [
	"強姦",
        "姦淫"
      ]
    },
    "注解": "簡体字にはこの２つの意味が近い字は全部「奸」に統合された。"
  },
  "游": {
    "對應字": {
      "游": [
        "およぐ",
        "游泳"
      ],
      "遊": [
        "あそぶ"
      ]
    },
    "注解": "簡体字は「遊」という字を「およぐ」を意味する「游」という字に統合した。"
  },
  "郁": {
    "對應字": {
      "郁": [
        "馥郁"
      ],
      "鬱": [
        "憂鬱"
      ]
    },
    "注解": "簡体字は「憂鬱」の「鬱」という字を「馥郁(ふくいく)」の「郁(いく)」という字に統合した。"
  },
  "征": {
    "對應字": {
      "征": [
        "征服",
        "征伐"
      ],
      "徵": [
        "特徵",
        "徴収"
      ]
    },
    "注解": "簡体字は「特徴」の「徴」という字を「征服」の「征」という字に統合した。"
  },
  "周": {
    "對應字": {
      "周": [
        "周囲",
        "周回"
      ],
      "週": [
        "週末",
        "週刊"
      ],
      /*
      "賙": [
        "賙濟" // 罕用
      ]
      */
    },
    "注解": "簡体字には「週末」の「週」は「周回」の「周」に統合された。"
  },
  "针": {
    "對應字": {
      "針": [
        "秒針",
        "針葉樹"
      ],
      "鍼": [
        "鍼灸",
        "鍼砭"
      ]
    },
    "注解": "簡体字には「鍼灸(しんきゅう)」の「鍼(しん)」は「秒針」の「針」に統合された。"
  },
  "托": {
    "對應字": {
      "托": [
        "一蓮托生"
      ],
      "託": [
        "たくす"
      ]
    },
    "注解": "簡体字は「託」という字を手偏の「托(たく)」という字に統合した。"
  },
  "栗": {
    "對應字": {
      "栗": [
        "くり"
      ],
      "慄": [
        "戰慄"
      ]
    },
    "注解": "簡体字は「戦慄」の「慄」という字を「栗」という字に統合した。"
  },
  "升": {
    "對應字": {
      "升": [
        "一升"
      ],
      "昇": [
	"のぼる",
	"昇華"
      ]
    },
    "注解": "簡体字は「昇」という字を体積の単位の「升」という字に統合した。"
  },
  "出": {
    "對應字": {
      "出": [
        "でる",
        "輸出"
      ],
      "齣": [
        "こま"
      ]
    },
    "注解": "簡体字は「四齣漫画」の「齣(こま)」という字を「出」という字に統合した。"
  },
  "漓": {
    "對應字": {
      "漓": [
        "淋漓",
        "澆漓"
      ],
      "灕": [
        "灕江",
        "灕水"
      ]
    },
    "注解": "簡体字は地名に用いる「灕(り)」という字を「淋漓」の「漓」という字に統合した。"
  },
  "术": {
    "對應字": {
      "術": [
        "すべ",
	"芸術"
      ],
      "朮": [
        "オケラ"
      ]
    },
    "注解": "簡体字は「術」という字を植物の「朮(オケラ)」という字とともに「术(じゅつ)」という字に統合した。"
  },
  "尸": {
    "對應字": {
      "屍": [
        "かばね",
	"屍柩",
	"死屍"
      ],
      "尸": [
        "尸位素餐"
      ]
    },
    "注解": "簡体字は「屍(し)」という字をその本字「尸(し)」に統合した。"
  },
  "筑": {
    "對應字": {
      "築": [
        "建築"
      ],
      "筑": [
	"筑波"
      ]
    },
    "注解": "簡体字は「建築」の「築」という字を「筑波」の「筑」という字に統合した。"
  },
  "暗": {
    "對應字": {
      "暗": [
        "くらい"
      ],
      "闇": [
        "やみ"
      ]
    },
    "注解": "簡体字は「暗」という字を「闇」という字に統合した。"
  },
  "冲": {
    "對應字": {
      "衝": [
        "衝突",
        "衝動"
      ],
      "沖": [
        "おき",
	"沖合"
      ]
    },
    "注解": "簡体字は「突き当たる」などを意味する「衝」という字を「沖」という字に統合した。"
  },
  "扣": {
    "對應字": {
      "扣": [
	"ひかえる"
      ],
      "釦": [
        "ボタン"
      ]
    },
    "注解": "簡体字は「扣(ひかえる)」という字を「衣服のボタン」を意味する「釦」という字に統合した。"
  },
  "念": {
    "對應字": {
      "念": [
	"記念",
        "思念",
        "念の為"
      ],
      "唸": [
        "うなり"
      ]
    },
    "注解": "簡体字は「記念」の「念」という字を「唸」という字に統合した。"
  },
  "泛": {
    "對應字": {
      "泛": [
	"泛泛",
        "泛藍連盟"
      ],
      "氾": [
        "氾濫"
      ]
    },
    "注解": "簡体字は「氾濫」の「氾」という字を「汎」を意味する「泛」という字に統合した。"
  },
  "巨": {
    "對應字": {
      "巨": [
	"巨大"
      ],
      "鉅": [
        "鉅鹿"
      ]
    },
    "注解": "簡体字は地名に用いる「鉅(きょ)」という字を「巨大」の「巨」という字に統合した。"
  },
  "咽": {
    "對應字": {
      "咽": [
        "のど",
	"咽喉"
      ],
      "嚥": [
        "誤嚥",
	"嚥下"
      ]
    },
    "注解": "簡体字は「咽喉」の「咽」という字を「嚥下」の「嚥」に統合した。"
  },
  "愈": {
    "對應字": {
      "愈": [
	"いよいよ",
	"ますます"
      ],
      "癒": [
        "いやす",
        "癒着"
      ]
    },
    "注解": "簡体字は「癒」という字を「愈(いよいよ)」という字に統合した。"
  },
  "苔": {
    "對應字": {
      "苔": [
        "こけ"
      ],
      "薹": [
        "薹が立つ"
      ]      
    },
    "注解": "簡体字は「薹が立つ」の「薹(とう)」という字を「苔」という字に統合した。"
  },
  "于": {
    "對應字": {    
      "于": [],
      "於": [
	"おいて"
      ],
    },
    "注解": "簡体字は「於」という字を「于」という名字に用いる字に統合した。"
  }, 
  "适": {
    "對應字": {
      "適": [
	"てきする",
	"適当"
      ],
      "适": [
	"李适",
	"南宫适"
      ]
    },
    "注解": "簡体字は「適」という字を「适(かつ)」という人名に用いる字に統合した。"
  },
  "叶": {
    "對應字": {
      "叶": [
	"かなう",
	"叶韻"
      ],
      "葉": [
	"は",
	"言葉",
	"紅葉"
      ]
    },
    "注解": "簡体字は「葉」という字を「叶」という字に統合した。"
  },
  "沈": {
    "對應字": {
      "沈": [
	"しずむ",
	"沈氏"
      ],
      "瀋": [
	"瀋陽"
      ]
    },
    "注解": "簡体字は「瀋陽(しんよう)」の「瀋」という字を「沈」という字に統合した。"
  },
  "范": {
    "對應字": {
      "范": [
	"范仲淹",
	"范陽"
      ],
      "範": [
	"規範"
      ]
    },
    "注解": "簡体字は「規範」の「範」という字を「范(はん)」という名字に用いる字に統合した。"
  },
  "种": {
    "對應字": {
      "種": [
	"種類"
      ],
      "种": [
	"种氏"
      ]
    },
    "注解": "簡体字は「種類」の「種」という字を「种(ちゅう)」という名字に用いる字に統合した。"
  },
  "涂": {
    "對應字": {
      "塗": [
	"ぬる"
      ],
      "涂": [
	"涂氏"
      ]
    },
    "注解": "簡体字は「塗」という字を「涂(と)」という名字に用いる字に統合した。"
  },
  "厘": {
    "對應字": {
      "厘": [
	"一分一厘"
      ],
      "釐": [
	"毫釐"
      ]
    },
    "注解": "簡体字は「小さい分量」を意味する「毫釐(ごうり)」の「釐」という字を単位の一つの「厘」という字に統合した。"
  },
  "涌": {
    "對應字": {
      "湧": [
	"わく",
	"湧出",
	"湧泉"
      ],
      "涌": [
	"河涌",
	"東涌",
	"鰂魚涌"
      ]
    },
    "注解": "簡体字は「湧」という字をその異体字「涌(ゆう)」に統合した。しかし同じ形を持つ「涌(ちゅう)」という字は広東や香港などでは地名にも用いられる。"
  }
  /*
  "脏": {
    "對應字": {
      "髒": [
        "骯髒" // 日文用「汚」不用「髒」
      ]
      "臟": [
        "內臟" // 「臓」非「臟」
      ]
    },
    "注解": "「臟」讀音zang4, 意義為「身體器官」，「髒」讀音zang1, 意義為「不乾淨」。"
  },
  */
  /*
  "饥": {
    "對應字": {
      "飢": [
        "飢餓"
      ],
      "饑": [
        "饑荒", // 「饑」不在常用漢字中
        "饑饉"
      ]
    },
    "注解": "「飢」意義為「吃不飽」，「饑」意義為「穀物不熟」。"
  },
  */
  /*
  "丰": {
    "對應字": {
      "豐": [
        "豐富", // 日文用「豊」
        "五穀豐登"
      ],
      "丰": [
        "丰采", // 「丰」罕用
        "丰姿",
        "張三丰"
      ]
    },
    "注解": "表示「美好的容貌的姿態」用「丰」，其餘一般為「豐」。"
  },
  */
  /*
  "借": {
    "對應字": {
      "借": [
        "借住",
        "借題發揮",
        "借刀殺人"
      ],
      "藉": [
        "慰藉", // 「藉」字罕用
        "藉口",
        "憑藉"
      ]
    },
    "注解": "表示「依賴、依托、草墊」之意時用「藉」，表示「借東西」時用「借」。「藉口」也寫作「借口」。"
  },
  */
  /*
  "御": {
    "對應字": {
      "御": [
        "御馬",
        "御用"
      ],
      "禦": [
        "防禦", // 罕用
        "抵禦"
      ]
    },
    "注解": "與「抵抗」有關用「禦」，其餘用「御」。"
  },
  */
  /*
  "斗": {
    "對應字": {
      "鬥": [
        "鬥爭", // 日文用「闘」
        "戰鬥"
      ],
      "鬭": [],
      "斗": [
        "五斗米",
        "車載斗量"
      ]
    },
    "注解": "「斗」為一種容積計量單位；「鬥」表示「鬥爭」之意，傳統中文用異體字「鬭」較多。"
  },
  */
  /*
  "曲": {
    "對應字": {
      "曲": [
        "樂曲",
        "曲直"
      ],
      "麯": [
        "酒麯", // 罕用
        "大麯"
      ]
    },
    "注解": "「麯」與釀酒有關，其餘用「曲」。"
  },
  */
  /*
  "松": {
    "對應字": {
      "鬆": [
        "輕鬆", // 罕用
        "肉鬆"
      ],
      "松": [
        "松樹",
        "雪松"
      ]
    },
    "注解": "「松」為一種樹木名詞，「鬆」與「緊」相對、"
  },
  */
  /*
  "淀": {
    "對應字": {
      "澱": [
        "澱粉", //  デンプン
        "沉澱"  // 「沈殿」代用
      ],
      "淀": [
	"よど",
        "淀川"
      ]
    },
    "注解": "「淀」之意義為「淺水」，其餘用「澱」。"
  },
  */
  /*
  "纤": {
    "對應字": {
      "纖": [
        "纖維", // 繊維
        "光纖"
      ],
      "縴": [
        "縴夫" // 縴: 不用此字
      ]
    },
    "注解": "表示「細小」用「纖」，讀作 xian1. 表示拉船用「縴」，讀作 qian4."
  },
  */
  /*
  "蔑": {
    "對應字": {
      "蔑": [
        "輕蔑",
        "蔑視"
      ],
      "衊": [
        "誣衊" // 衊: 不用此字
      ]
    },
    "注解": "表示「血污」、「誹謗」用「衊」，其餘意義用「蔑」。"
  },
  */
  /*
  "仇": {
    "對應字": {
      "仇": [
        "仇恨",
        "報仇",
        "仇讎"
      ],
      "讎": [
        "讎校",
        "仇讎"
      ]
    },
    "注解": "與「校對」有關用「讎」，其餘用「仇」。"
  },
  */
  /*
  "咸": {
    "對應字": {
      "咸": [
        "咸陽"
      ],
      "鹹": [
        "鹹魚" // 罕用
      ]
    },
    "注解": "「鹹」意義與「淡」相對，其餘用「咸」。"
  },
  */
  /*
  "仆": {
    "對應字": {
      "僕": [
        "奴僕",
        "公僕",
        "風塵僕僕"
      ],
      "仆": [
        "前仆後繼", // 罕用
        "仆街"
      ]
    },
    "注解": "「仆」意義為「跌倒」，讀音 pu1, 「僕」為「供人使喚的人」，讀音pu2."
  },
  */
  /*
  "舍": {
    "對應字": {
      "舍": [
        "田舎" // 「舎」非「舍」
      ],
      "捨": [
        "すてる"
      ]
    },
    "注解": "「捨」讀作 she3, 用於「放棄」意義，其餘用「舍」，讀作 she4, 古文亦同「捨」。"
  },
  */
  /*
  "折": {
    "對應字": {
      "折": [
        "折斷",
        "折腰",
        "折服",
        "打折",
        "損兵折將"
      ],
      "摺": [
	"する",
        "引き摺る" // 罕用
      ]
    },
    "注解": "與「叠」有關用「摺」，與「斷」有關用「折」。"
  },
  */
  /*
  "几": {
    "對應字": {
      "幾": [
        "幾乎",
        "幾個"
      ],
      "几": [
        "几案" // 机案
      ]
    },
    "注解": "「几」只用作「茶几」等物品。表示「幾乎」、「幾個」等意義用「幾」。"
  },
  */
  /*
  "佣": {
    "對應字": {
      "傭": [
        "傭人",
        "雇傭",
        "傭兵"
      ],
      "佣": [
        "佣金" // 佣: 不用此字
      ]
    },
    "注解": "「傭」為「僕役」，讀音 yong1, 「佣」為「中間人」，讀音 yong4."
  },
  */
  /*
  "苏": {
    "對應字": {
      "蘇": [
        "蘇州",
        "屠蘇",
        "蘇俄"
      ],
      "囌": [
        "嚕囌"
      ],
      "甦": [
        "甦醒", // 「甦る」でも「蘇る」でもOK
        "甦生",
        "復甦"
      ]
    },
    "注解": "「甦」與「醒」、「恢復」有關，「囌」用於「嚕囌」（囉唆），其餘用「蘇」。"
  },
  */
  /*
  "回": {
    "對應字": {
      "回": [
        "回答",
        "回族",
        "回絕"
      ],
      "迴": [
        "迴合", // 「迴」字不用
        "迴光返照",
        "迴旋",
        "迴避"
      ]
    },
    "注解": "與「旋轉」、「返迴」有關用「迴」，其餘用「回」。"
  },
  */
  /*
  "面": {
    "對應字": {
      "面": [
        "臉面"
      ],
      "麵": [
        "麵條", // 「麺」非「麵」
        "麵粉"
      ],
      "麪": [
        "麪條",
        "麪粉"
      ]
    },
    "注解": "「面」意義為「臉」、「外表」，「麵」「麪」為小麥磨成的粉。香港、台灣更常用「麵」字。"
  },
  */
  /*
  "向": {
    "對應字": {
      "向": [
        "方向",
        "意向",
        "向晚",
        "向背",
        "向來"
      ],
      "嚮": [
        "嚮導", // 罕用
        "嚮往",
        "嚮晦"
      ],
      "曏": [
        "曏者" // 罕用
      ]
    },
    "注解": "「曏」表示「從前」，「嚮」表示「引導」、「傾向」，其餘用「向」。"
  },
  */
  /*
  "伙": {
    "對應字": {
      "夥": [
        "夥同", // 罕用
        "夥伴",
        "小夥子"
      ],
      "伙": [
        "伙食",
        "包伙",
        "傢伙"
      ]
    },
    "注解": "「伙」只用於「伙食」、「工具」相關意義，其餘用「夥」。"
  },
  */
  /*
  "朴": {
    "對應字": {
      "樸": [
        "樸素", // 罕用
        "純樸",
        "質樸"
      ],
      "朴": [
        "朴刀",
        "朴姓",
        "朴硝"
      ]
    },
    "注解": "表示「原本的」意義用「樸」，其他音義用「朴」。"
  },
  */
// 【從俗】
/*
  "才": {
    "對應字": {
      "才": [
        "才俊",
        "才幹",
        "才能"
      ],
      "纔": [
        "纔能",
        "剛纔",
        "方纔"
      ]
    },
    "注解": "表示「方」、「僅」用「纔」，其餘用「才」。現代一般不做區分，一律用「才」。"
  },
*/
  /*
  "朱": {
    "對應字": {
      "朱": [
        "近朱者赤"
      ],
      "硃": [
        "硃砂" // 硃：不用此字
      ]
    },
    "注解": "「硃」用於與「硃砂」有關意義，其餘用「朱」。"
  },
  */
  /*
  "别": {
    "對應字": {
      "別": [
        "區別"
      ],
      "彆": [
        "彆扭" // 彆: 不用此字
      ]
    },
    "注解": "「彆」讀音 bie4, 與「彆扭」有關，其餘用「別」。"
  },
  */
  /*
  "卷": {
    "對應字": {
      "捲": [
        "席捲", // 罕用
        "捲土重來",
        "花捲"
      ],
      "卷": [
        "試卷",
        "卷帙",
        "讀萬卷書"
      ]
    },
    "注解": "「捲」表示彎曲，讀音 juan3, 其餘用「卷」，讀音 juan4."
  },
  */
  /*
  "蒙": {
    "對應字": {
      "蒙": [
        "蒙受",
        "蒙昧",
        "啓蒙",
        "蒙古"
      ],
      "矇": [
        "矇騙", // 罕用
        "矇蔽",
        "矇混"
      ],
      "濛": [
        "濛濛細雨", // 罕用
        "涳濛"
      ],
      "懞": [
        "懞直" // 罕用
      ]
    },
    "注解": "表示「欺騙」、「猜測」、「盲」用「矇」，表示「細雨」用「濛」，表示「老實」用「懞」，其餘意義用「蒙」。"
  },
  */
  /*
  "症": {
    "對應字": {
      "症": [
        "絕症",
        "癌症",
        "對症下藥"
      ],
      "癥": [
        "癥結" // 罕用
      ]
    },
    "注解": "「癥」為一種「腹中結硬塊的疾病」，讀音 zheng1. 一般病症用「症」，讀音 zheng4."
  },
  */
  /*
  "恶": {
    "對應字": {
      "惡": [
        "善惡" // 新字體「悪」
      ],
      "噁": [
        "噁心", // 罕用
        "二噁英"
      ]
    },
    "注解": "「噁心」用「噁」，其餘一般用「惡」。"
  },
  */
  /*
  "注": {
    "對應字": {
      "注": [
        "注意",
        "注入",
        "關注"
      ],
      "註": [
        "註冊", // 通用「注」
        "註釋",
        "命中註定"
      ]
    },
    "注解": "與「記錄」有關意義用「註」，其餘用「注」。"
  },
  */
  /*
  "哄": {
    "對應字": {
      "哄": [
        "哄騙", // 罕用
        "哄孩子"
      ],
      "鬨": [
        "起鬨",
        "一鬨而散"
      ]
    },
    "注解": "與「眾人喧鬧」有關用「鬨」，讀音hong4, 其餘用「哄」。"
  },
  */
  /*
  "参": {
    "對應字": {
      "參": [
        "參與", // 新字體「参」
        "參數"
      ],
      "蔘": [
        "人蔘", // 罕用
        "黃金蔘"
      ]
    },
    "注解": "「蔘」表示一種植物，其餘用「參」。"
  },
  */
  /*
  "腌": {
    "對應字": {
      "醃": [
        "醃漬", // 不用
        "醃肉"
      ],
      "腌": [
        "腌臢" // 罕用
      ]
    },
    "注解": "「腌」用於「腌臢」，表示一種食物加工方法用「醃」。"
  },
  */
  /*
  "彩": {
    "對應字": {
      "彩": [
        "彩票",
        "五彩繽紛"
      ],
      "綵": [
        "張燈結綵", // 罕用
        "綵頭",
        "剪綵"
      ]
    },
    "注解": "表示「五彩的絲織品」用「綵」，其餘用「彩」。"
  },
  */
  /*
  "占": {
    "對應字": {
      "占": [
        "うらない",
        "占星術",
	"占拠"
      ],
      "佔": [] // 「佔」-> 「占」
    },
    "注解": ""
  },
  */
  /*
  "欲": {
    "對應字": {
      "欲": [
        "貪欲",
        "暢所欲言",
        "震耳欲聾"
      ],
      "慾": [
        "獸慾", // 「慾」-> 「欲」
        "慾火"
      ]
    },
    "注解": "「慾」只用於「情慾」有關意義，其餘用「欲」。"
  },
  */
  /*
  "扎": {
    "對應字": {
      "扎": [
        "扎針", // 罕用
        "扎花",
        "掙扎"
      ],
      "紮": [
        "駐紮", // 罕用
        "包紮",
        "安營紮寨"
      ]
    },
    "注解": "表示「纏束」、「軍隊屯駐」用「紮」，其餘用「扎」。"
  },
  */
  /*
  "熏": {
    "對應字": {
      "熏": [
        "熏陶", // 罕用
        "利慾熏心",
        "臭氣熏天"
      ],
      "燻": [
        "くすべる",
	"燻蒸"
      ]
    },
    "注解": "「燻」特指一種烹飪方法，其餘用「熏」。"
  },
  */
  /*
  "赞": {
    "對應字": {
      "贊": [
        "賛成" // 「賛」非「贊」
      ],
      "讚": [
        "たたえる",
	"和讃" // 「讃」非「讚」
      ]
    },
    "注解": "與「表揚」有關意義用「讚」，其餘用「贊」。"
  },
  */
  /*
  "尝": {
    "對應字": {
      "嘗": [
        "嘗試"
      ],
      "嚐": [
        "品嚐" // 後起字
      ]
    },
    "注解": "與「喫」、「品嚐」有關意義用「嚐」，其餘用「嘗」。"
  },
  */
  /*
  "烟": {
    "對應字": {
      "煙": [
        "煙霧"
      ],
      "菸": [
        "菸草", // 不用
        "香菸"
      ]
    },
    "注解": "「煙」用於一般煙霧，與「菸草」有關時用「菸」。香港全部用「煙」。"
  },
  */
  /*
  "柜": {
    "對應字": {
      "櫃": [
        "書櫃"
      ],
      "柜": [
        "柜柳" // 罕用
      ]
    },
    "注解": "表示收藏東西的傢具時作「櫃」，表示一種落葉喬木用「柜」。"
  },
  */
  /*
  "喂": {
    "對應字": {
      "餵": [
        "餵豬" // 罕用
      ],
      "喂": [
        "喂！" // 罕用
      ]
    },
    "注解": "表示「餵養」時用「餵」，「喂」僅用作語氣詞。"
  },
  */
  /*
  "幸": {
    "對應字": {
      "幸": [
        "幸福",
        "寵幸",
        "慶幸"
      ],
      "倖": [
        "倖免", // 後起字
        "倖存",
        "僥倖",
        "倖運"
      ]
    },
    "注解": "「倖」專指「意外地成功或避免」，其餘一般用「幸」。"
  },
  */
  /*
  "凶": {
    "對應字": {
      "凶": [
        "凶宅",
        "吉凶"
      ],
      "兇": [
        "兇殺", // 與「凶」通用
        "兇器",
        "行兇"
      ]
    },
    "注解": "與占卜吉凶有關用「凶」，與「殺害」有關用「兇」。「兇」的意義也時常寫作「凶」。"
  },
  */
  /*
  "杰": {
    "對應字": {
      "傑": [
        "傑出",
        "俊傑",
        "傑作"
      ],
      "杰": [
        "李連杰", // 罕用
        "周杰倫",
        "狄仁杰"
      ]
    },
    "注解": "「杰」常用於人名，表示「出眾」用「傑」。"
  },
  */
  /*
  "戚": {
    "對應字": {
      "戚": [
        "戚繼光",
        "親戚"
      ],
      "慼": [
        "悲慼", // 不用
        "慼慼"
      ],
      "鏚": [
        "干鏚羽旄" // 後起字
      ]
    },
    "注解": "表示「憂愁」、「悲傷」用「慼」，「鏚」為一種武器，其他意義用「戚」。"
  },
  */
  /*
  "挨": {
    "對應字": {
      "挨": [
        "挨家挨戶"
      ],
      "捱": [
        "捱打" // 不用
      ]
    },
    "注解": "表示「承受」、「拖延」、「抗拒」有關用「捱」，讀為 ai2, 其餘用「挨」，讀為 ai1."
  },
  */
  /*
  "挽": {
    "對應字": {
      "挽": [
        "挽救",
        "力挽狂瀾"
      ],
      "輓": [
        "輓聯", // 與「挽」通用
        "哀輓"
      ]
    },
    "注解": "與「哀悼死者」有關用「輓」，其餘意義為「挽」。"
  },
  */
  /*
  "炼": {
    "對應字": {
      "煉": [
	"煉獄"
      ],
      "鍊": [
	"錬金術" // 新字體: 「錬」
      ]
    },
    "注解": ""
  },
  */
  /*
  "链": {
    "對應字": {
      "鏈": [
        "鎖鏈",
        "鏈接"
      ],
      "鍊": [
        "項鍊", // 新字體: 「錬」
        "金手鍊"
      ]
    },
    "注解": "「鏈」用作一般的「金屬繩狀物」，「鍊」專指首飾。"
  },
  */
  /*
  "穗": {
    "對應字": {
      "穗": [
        "麥穗"
      ],
      "繐": [
        "帽繐" // 不用
      ]
    },
    "注解": "「繐」用作「結紮成的裝飾物」，其餘用「穗」。"
  },
  */
  /*
  "雕": {
    "對應字": {
      "雕": [
        "雕刻",
        "雕蟲小技"
      ],
      "鵰": [
        "一箭雙鵰" // 與「雕」通用
      ]
    },
    "注解": "「鵰」為一種猛禽，與「雕刻」有關時用「雕」。「鵰」有時也寫成「雕」。"
  },
  */
  /*
  "梁": {
    "對應字": {
      "梁": [
        "大梁城",
        "梁朝",
        "梁山"
      ],
      "樑": [
        "樑上君子", // 不用
        "鼻樑"
      ]
    },
    "注解": "與「橋樑」、「棟樑」有關用「樑」，其餘意義為「梁」。"
  },
  */
  /*
  "摆": {
    "對應字": {
      "擺": [
        "擺線"
      ],
      "襬": [
        "裙襬", // 「裾」
        "下襬"
      ]
    },
    "注解": "表示「衣服下緣的部分」用「襬」，其餘用「擺」。"
  },
  */
  /*
  "岩": {
    "對應字": {
      "巖": [
        "巖壁", // 新字體: 「巌」
        "中空成巖"
      ],
      "岩": [
        "沉積岩",
        "岩漿"
      ]
    },
    "注解": "「岩」只用於「岩石」相關意義，其餘用「巖」。"
  },
  */
  /*
  "娘": {
    "對應字": {
      "娘": [
        "姑娘",
        "娘子",
        "婆娘",
        "舞娘"
      ],
      "孃": [
        "老孃", // お嬢様
        "爹孃",
        "孃家"
      ]
    },
    "注解": "「孃」意義為「母親」，其餘用「娘」。"
  },
  */
  /*
  "僵": {
    "對應字": {
      "僵": [
        "僵硬", // 與「殭」通用
        "僵局",
        "李代桃僵"
      ],
      "殭": [
        "殭屍",
        "殭蠶"
      ]
    },
    "注解": "「殭」意義為「不腐朽的屍體」，其餘用「僵」。"
  },
  */
  /*
  "药": {
    "對應字": {
      "藥": [
        "くすり" // 新字體: 「薬」
      ],
      "葯": [
        "葯培養"
      ]
    },
    "注解": "「葯」特指「花的雄蕊中貯藏劃分的部份」，其餘用「藥」。"
  },
  */
  /*
  "余": {
    "對應字": {
      "餘": [
        "剩餘", // 新字體: 「余」
        "多餘"
      ],
      "余": [
        "余吾鎮"
      ]
    },
    "注解": "「余」為第一人稱代詞、地名或姓氏。"
  },
  */
  /*
  "蜡": {
    "對應字": {
      "蠟": [
        "蠟燭", // 新字體: 蝋燭
        "蜂蠟",
        "石蠟"
      ],
      "蜡": [
        "蜡月"
      ]
    },
    "注解": "「臘月」也寫作「蜡月」。"
  },
  */
  /*
  "卜": {
    "對應字": {
      "卜": [
        "占卜",
        "卜辭"
      ],
      "蔔": [
        "蘿蔔" // 大根
      ]
    },
    "注解": "「蔔」只用於「蘿蔔」。"
  },
  */
  /*
  "同": {
    "對應字": {
      "同": [
        "大同"
      ],
      "衕": [
        "衚衕" // 不用
      ]
    },
    "注解": "「衕」只用於「衚衕」。"
  },
  */
  /*
  "板": {
    "對應字": {
      "板": [
        "板塊"
      ],
      "闆": [
        "老闆" // 不用
      ]
    },
    "注解": "「闆」只用於「老闆」。"
  },
  */
  /*
  "仑": {
    "對應字": {
      "侖": [
        "加侖" // 罕用
      ],
      "崙": [
        "崑崙"
      ]
    },
    "注解": "表示「崑崙」時用崙。"
  },
  */
  /*
  "秋": {
    "對應字": {
      "秋": [
        "秋季"
      ],
      "鞦": [
        "鞦韆" // 罕用
      ]
    },
    "注解": "「鞦」只用於「鞦韆」。"
  },
  "千": {
    "對應字": {
      "千": [
        "千萬"
      ],
      "韆": [
        "鞦韆" // 罕用
      ]
    },
    "注解": "「韆」只用於「鞦韆」。"
  },
  */
  /*
  "帘": {
    "對應字": {
      "簾": [
        "窗簾",
        "珠簾"
      ],
      "帘": [
        "酒帘" // 罕用
      ]
    },
    "注解": "表示旗幟狀的標識用「帘」。"
  },
  */
  /*
  "庵": {
    "對應字": {
      "庵": [
        "尼姑庵"
      ],
      "菴": [
        "菴藹" // 罕用
      ]
    },
    "注解": "「菴」只用作「菴藹」，讀作 an4."
  },
  */
  /*
  "胡": {
    "對應字": {
      "胡": [
        "胡人",
        "胡亂"
      ],
      "衚": [
        "衚衕" // 罕用
      ],
      "鬍": [
        "鬍鬚" // 「髭」
      ]
    },
    "注解": "「衚」只用於「衚衕」，「鬍」只用於「鬍鬚」。"
  },
  "须": {
    "對應字": {
      "須": [
        "必須"
      ],
      "鬚": [
        "鬍鬚" // 「髭」
      ]
    },
    "注解": "「鬚」只用於「鬍鬚」。"
  },
  */
  /*
  "据": {
    "對應字": {
      "據": [
        "數據", // 新字體: 「拠」
        "根據"
      ],
      "据": [
        "拮据"
      ]
    },
    "注解": "「据」只用於「拮据」。"
  },
  */
  /*
  "夸": {
    "對應字": {
      "誇": [
        "誇大",
        "誇獎"
      ],
      "夸": [
        "夸父", // 不用
        "夸克"
      ]
    },
    "注解": "「夸」見於古文和專有名詞。"
  },
  */
  /*
  "苹": {
    "對應字": {
      "蘋": [
        "蘋果", // 罕用
        "白蘋"
      ],
      "苹": [
        "苹縈", // 罕用
        "食野之苹"
      ]
    },
    "注解": "「苹」、「蘋」為兩種不同的植物。"
  },
  */
  /*
  "袅": {
    "對應字": {
      "裊": [
        "裊裊" // 與「嫋」通用
      ],
      "嫋": [
	"たおやか",
        "嫋嫋"
      ]
    },
    "注解": ""
  },
  */
  /*
  "表": {
    "對應字": {
      "表": [
        "表達",
        "表示",
        "代表"
      ],
      "錶": [
        "手錶" // 不用
      ]
    },
    "注解": "「錶」用作「鐘錶」，其餘用「表」。"
  },
  */
  /*
  "杆": {
    "對應字": {
      "杆": [
        "櫓杆" // 罕用
      ],
      "桿": [
        "槓桿",
        "桿菌"
      ]
    },
    "注解": ""
  },
  */
  /*
  "鉴": {
    "對應字": {
      "鑒": [
        "借鑒", // 罕用
        "鑒定"
      ],
      "鑑": [
        "銅鑑",
        "印鑑"
      ]
    },
    "注解": "用於「鏡子」、「圖章」意義時用「鑑」，其他引申意義均用「鑒」。"
  },
  */
  /*
  "搜": {
    "對應字": {
      "搜": [
        "搜身", // 新字體: 「捜」
        "搜尋"
      ],
      "蒐": [
        "蒐集",
        "蒐羅",
        "蒐購",
        "春蒐"
      ]
    },
    "注解": "「搜」意義為「尋找」，與「聚集」和其他意義有關用「蒐」。"
  },
  */
  /*
  "杯": {
    "對應字": {
      "杯": [],
      "盃": [
        "獎盃", // 與「杯」通用
        "冠軍盃",
        "世界盃"
      ]
    },
    "注解": "「盃」特別用於「獎盃」"
  },
  */
  /*
  "铲": {
    "對應字": {
      "鏟": [
        "鏟子"
      ],
      "剷": [
        "剷除" // 不用
      ]
    },
    "注解": "「剷」用作動詞意義"
  },
  */
  /*
  "核": {
    "對應字": {
      "核": [],
      "覈": [
        "覈實", // 罕用
        "覈對",
        "覈算",
        "考覈"
      ]
    },
    "注解": "與「校對」相關意義用「覈」"
  },
  */
  /*
  "叹": {
    "對應字": {
      "嘆": [
        "哀嘆",
        "感嘆",
        "仰天長嘆",
        "嘆息",
        "嘆氣"
      ],
      "歎": [
        "吟歎", // 表外，與「嘆」通用
        "詠歎",
        "歎賞",
        "歎為觀止",
        "歎羨",
        "讚歎"
      ]
    },
    "注解": "悲傷有關用「嘆」，其他用「歎」。"
  },
  */
  /*
  "价": {
    "對應字": {
      "價": [
        "價格" // 新字體: 「価」
      ],
      "价": [
        "貴价" // 貴介
      ]
    },
    "注解": "表示僕役用「价」"
  },
  */
  /*
  "私": {
    "對應字": {
      "私": [],
      "俬": [
        "傢俬" // 不用
      ]
    },
    "注解": "「俬」為室內使用的器具"
  },
  */
  /*
  "局": {
    "對應字": {
      "局": [
        "大局"
      ],
      "侷": [
        "侷促", // 不用
        "侷限"
      ]
    },
    "注解": "表示「狹小」用「侷」"
  },
  */
  /*
  "拐": {
    "對應字": {
      "拐": [
        "誘拐"
      ],
      "柺": [
        "柺杖", // 不用
        "鐵柺李"
      ]
    },
    "注解": "與「柺杖」有關用「柺」"
  },
  */
  /*
  "弦": {
    "對應字": {
      "弦": [
	"正弦",
        "上弦の月"
      ],
      "絃": [
        "管絃", // 表外字，與「弦」通用
        "三絃"
      ]
    },
    "注解": ""
  },
  */
  /*
  "哗": {
    "對應字": {
      "譁": [],
      "嘩": [
        "喧嘩" // 日文傾向用口部的「嘩」
      ]
    },
    "注解": ""
  },
  */
  /*
  "凄": {
    "對應字": {
      "淒": [
        "淒涼" // 不用
      ],
      "悽": [
        "悽慘", // 凄惨
        "悽楚",
        "悽惻"
      ]
    },
    "注解": ""
  },
  */
  /*
  "家": {
    "對應字": {
      "家": [],
      "傢": [
        "傢俬", // 不用
	"傢具",
	"傢伙"
      ]
    },
    "注解": "「傢」為「家」某些意義的分化字"
  },
  */
  /*
  "席": {
    "對應字": {
      "席": [],
      "蓆": [
        "涼蓆", // 罕用
        "草蓆"
      ]
    },
    "注解": "「蓆」特指涼蓆"
  },
  */
  /*
  "酸": {
    "對應字": {
      "酸": [],
      "痠": [
        "痠痛", // 不用
        "腰痠"
      ]
    },
    "注解": "肢體疼痛用「痠」"
  },
  */
  /*
  "噪": {
    "對應字": {
      "噪": [
        "聒噪",
        "噪音"
      ],
      "譟": [
        "鼓譟", // 用「騒」代替
        "譟詐",
        "譟動"
      ]
    },
    "注解": "壯大聲勢用「譟」"
  },
  */
  /*
  "凌": {
    "對應字": {
      "凌": [],
      "淩": [
        "淩氏" // 不用
      ]
    },
    "注解": "「淩」作姓氏"
  },
  */
  /*
  "毁": {
    "對應字": {
      "毀": [],
      "譭": [
        "詆譭", // 不用
        "譭譽參半",
        "譭棄"
      ],
      "燬": [
        "禁燬", // 罕用
        "燒燬"
      ]
    },
    "注解": "與「燒」、「熔」有關用「燬」。「譭」表示「污衊」。"
  },
  */
  /*
  "糊": {
    "對應字": {
      "糊": [],
      "餬": [
        "養家餬口" // 跟「糊」通用
      ]
    },
    "注解": "「填飽肚子」用「餬」。"
  },
  */
  /*
  "抵": {
    "對應字": {
      "抵": [],
      "牴": [
        "牴觸", // 罕用
        "牴牾"
      ]
    },
    "注解": "「牴」本意為「有角的獸類用角碰撞」，引申為「衝突」。"
  },
  */
  /*
  "恤": {
    "對應字": {
      "恤": [
        "體恤",
        "憂國恤民"
      ],
      "卹": [
        "撫卹", // 不用
        "卹金",
        "振窮卹貧"
      ]
    },
    "注解": "「卹」用作「撫慰」「賑濟」，「恤」用作「憂慮」「憐憫」。"
  },
  */
  /*
  "荫": {
    "對應字": {
      "蔭": [],
      "廕": [
        "廕庇", // 不用
        "封妻廕子"
      ]
    },
    "注解": "表示「庇護」「父祖恩澤」用「廕」。"
  },
  */
  /*
  "皂": {
    "對應字": {
      "皂": [
        "香皂",
        "皂莢樹"
      ],
      "皁": [
        "青紅皁白" // 罕用
      ]
    },
    "注解": "「皁」指黑色，「皂」專指肥皂。香港不做區分，均作「皂」。"
  },
  */
  /*
  "芸": {
    "對應字": {
      "芸": [],
      "蕓": [
        "蕓薹", // 可作「芸薹」
        "蕓香"
      ]
    },
    "注解": "「蕓」只用作「蕓薹」。"
  },
  */
  /*
  "背": {
    "對應字": {
      "背": [],
      "揹": [
        "揹黑鍋", // 不用
        "揹負"
      ]
    },
    "注解": "「揹」作動詞，表示「負荷」，讀陰平聲。"
  },
  */
  /*
  "夫": {
    "對應字": {
      "夫": [],
      "伕": [
        "車伕", // 罕用
        "轎伕",
        "腳伕"
      ]
    },
    "注解": "「伕」指「出苦力的人」。"
  },
  */
  /*
  "迹": {
    "對應字": {
      "蹟": [
        "遺蹟", // 與「跡」通用
        "事蹟",
        "奇蹟"
      ],
      "跡": []
    },
    "注解": "「蹟」特指「前人留下的事物」。"
  },
  */
  /*
  "洒": {
    "對應字": {
      "灑": [
        "灑水" // 與「洒」通用
      ],
      "洒": [
        "洒家"
      ]
    },
    "注解": "「洒」義比「灑」寬。僅在用於灑水義時兩字互通。男性自稱詞「洒家」不能轉換成「灑家」。"
  },
  */
  /*
  "晒": {
    "對應字": {
      "曬": [], // 不用
      "晒": [
	"唔該晒"
      ],
    },
    "注解": "在表示曝露在陽光下時，「晒」為正體，「曬」為異體，但香港台灣多用「曬」，比如「曝曬」「好曬」。表示粵語虚詞時一般只用「晒」。"
  },
  */
  /*
  "党": {
    "對應字": {
      "党": [
	"党家莊"
      ],
      "黨": [
	"政黨" // 新字體: 「党」
      ]
    },
    "注解": "「党」作姓氏，其餘用「黨」。"
  },
  */
  /*
  "姜": {
    "對應字": {
      "薑": [
	"はじかみ" // ショウガ = 生姜
      ],
      "姜": [
	"姜子牙"
      ]
    },
    "注解": "植物名用「薑」，姓氏用「姜」。"
  },
  */
  /*
  "万": {
    "對應字": {
      "萬": [
	"成千上萬" // 新字體: 「万」
      ],
      "万": [
	"万俟"
      ]
    },
    "注解": "「万」只用在複姓「万俟」中。音 mo4 qi2."
  },
  */
  /*
  "宁": {
    "對應字": {
      "寧": [
	"安寧"
      ],
      "宁": [] // 不用
    },
    "注解": "爾雅：「門屏之間謂之『宁』」。音柱。"
  },
  */
  /*
  "厂": {
    "對應字": {
      "廠": [
	"工廠"
      ],
      "厂": [
	"厂部" // 雁垂れ
      ]
    },
    "注解": "「厂」為漢字部首之一。說文：「厂，山石之厓巖，人可居。」"
  },
  "广": {
    "對應字": {
      "廣": [
	"寬廣",
	"廣東"
      ],
      "广": [
	"广部" // 麻垂れ
      ]
    },
    "注解": "「广」為漢字部首之一。說文：「因广為屋，象對剌高屋之形。」"
  },
  */
  // 【罕用古義】
  /*
  "机": {
    "對應字": {
      "機": [
	"機器",
	"心機"
      ],
      "机": []
    },
    "注解": "說文：「机，木也，从木几聲。」"
  },
  */
  // 【罕用古義】
  /*
  "愿": {
    "對應字": {
      "願": [
	"願望"
      ],
      "愿": []
    },
    "注解": "「愿」為忠厚、謹慎之意。"
  },
  */
  /*
  "么": {
    "對應字": {
      "麼": [], // 罕用
      "么": []  // 么九牌
    },
    "注解": ""
  },
  */  
  /*
  "累": {
    "對應字": {
      "累": [
	"累積",
	"拖累",
	"疲累"
      ],
      "纍": [
	"果實纍纍", // 罕用
	"印纍綬若"
      ]
    },
    "注解": "「纍」讀陽平聲，用在「纍纍」一詞中。也是姓氏之一。"
  },
  */
  /*
  "痒": {
    "對應字": {
      "癢": [
	"撓癢" // 與「痒」通用
      ],
      "痒": []
    },
    "注解": "「痒」意為「病」。詩經：「癙憂以痒。」"
  },
  */
  /*
  "旋": {
    "對應字": {
      "旋": [
	"旋轉"
      ],
      "鏇": [
	"鏇酒", // 不用
	"鏇螺絲釘"
      ]
    },
    "注解": "「旋」讀陽平聲；「鏇」讀去聲，本義為盛酒的容器。"
  },
  */
  /*
  "听": {
    "對應字": {
      "聽": [
	"聽聞" // 新字體: 「聴」
      ],
      "听": [
	"听然而笑"
      ]
    },
    "注解": "「听」讀如銀，指張口而笑的樣子。"
  },
  */
  /*
  "咨": {
    "對應字": {
      "諮": [],
      "咨": [
	"咨嗟" // 罕用
      ]      
    },
    "注解": "「諮」和「咨」在「諮詢」之意上是通用的。用於公文之意時一般會用「咨」，如「咨文」。"
  },
  */
}
