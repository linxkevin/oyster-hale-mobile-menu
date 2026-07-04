const FOOD_MENU = [
  {
    id: "raw-oyster",
    label: L("Raw Oysters", "生牡蠣", "생오이스터", "生蚝"),
    title: L("Raw Oyster", "生牡蠣", "생오이스터", "生蚝"),
    subtitle: L("Always fresh · served ½ dozen", "常に新鮮 · 半ダースよりご提供", "항상 신선함 · 반 다스 단위로 제공", "始终新鲜 · 以半打为单位供应"),
    note: L("Served with Ponzu · Yuzu Kosho · Lemon", "ポン酢・柚子胡椒・レモンを添えて", "폰즈・유즈코쇼・레몬과 함께 제공", "配柚子醋・柚子胡椒・柠檬"),
    items: [
      { name: L("Oyster of the Day", "本日のオイスター", "오늘의 오이스터", "今日生蚝"), priceTiers: [{ label: "6pc", price: 30 }], note: L("+5 per extra piece", "追加1個ごとに+5", "추가 1개당 +5", "每加一个+5") },
      { name: L("Chef's Choice Oyster", "シェフ厳選オイスター", "셰프 셀렉션 오이스터", "主厨精选生蚝"), priceTiers: [{ label: "6pc", price: 34 }], note: L("+6 per extra piece", "追加1個ごとに+6", "추가 1개당 +6", "每加一个+6") },
      { name: L("Half & Half", "ハーフ&ハーフ", "하프 앤 하프", "各半拼盘"), priceTiers: [{ label: "6pc", price: 32 }] },
      { name: L("Topping — Caviar, Uni, Ikura or Combination", "トッピング — キャビア・ウニ・イクラ又はコンビネーション", "토핑 — 캐비어・우니・이쿠라 또는 콤비네이션", "配料 — 鱼子酱・海胆・鲑鱼籽或组合"), priceTiers: [{ label: "add", price: 12 }] }
    ]
  },
  {
    id: "oyster-shooter",
    label: L("Shooters", "オイスターショット", "오이스터 샷", "生蚝特调"),
    title: L("Oyster Shooter", "オイスターショット", "오이스터 샷", "生蚝特调"),
    subtitle: L("Our signature · must try", "当店の名物 · 必食", "우리의 시그니처 · 꼭 드셔보세요", "招牌必试"),
    items: [
      { name: L("Combination Shooters", "コンビネーションショット", "콤비네이션 샷", "组合特调"), star: true, unit: L("6 shots", "6杯", "6샷", "6杯"), priceTiers: [{ label: "", price: 38 }], desc: L("Diced fresh oyster in dashi-based shooter sauce, topped with ikura, uni and caviar.", "角切りの新鮮な牡蠣を、出汁ベースのショットソースで。イクラ・ウニ・キャビアをトッピング。", "신선한 오이스터를 다시 베이스 샷 소스에 담고, 이쿠라・우니・캐비어를 올렸습니다.", "新鲜生蚝切丁，浸于以出汁为基底的特调酱汁中，再点缀鲑鱼籽、海胆与鱼子酱。") },
      { name: L("Half Size", "ハーフサイズ", "하프 사이즈", "半份"), unit: L("3 shots", "3杯", "3샷", "3杯"), priceTiers: [{ label: "", price: 22 }] }
    ]
  },
  {
    id: "baked-oyster",
    label: L("Baked", "焼き牡蠣", "베이크드", "烤制"),
    title: L("Baked Oyster", "焼き牡蠣", "베이크드 오이스터", "烤生蚝"),
    items: [
      { name: L("Simply Baked Oyster", "シンプル焼き牡蠣", "심플 베이크드 오이스터", "原味烤生蚝"), priceTiers: [{ label: "3pc", price: 20 }, { label: "6pc", price: 32 }] },
      { name: L("Spicy Cheese Baked Oyster", "スパイシーチーズ焼き牡蠣", "스파이시 치즈 베이크드 오이스터", "香辣芝士烤生蚝"), priceTiers: [{ label: "3pc", price: 22 }, { label: "6pc", price: 40 }] }
    ]
  },
  {
    id: "special-oyster",
    label: L("Special Oysters", "スペシャルオイスター", "스페셜 오이스터", "特色生蚝"),
    title: L("Special Oyster Menu", "スペシャルオイスターメニュー", "스페셜 오이스터 메뉴", "特色生蚝菜单"),
    subtitle: L("Only at Oyster Hale · limited", "Oyster Haleだけの限定メニュー", "오이스터 할레에서만・한정", "仅在Oyster Hale供应・限量"),
    items: [
      { name: L("Oyster Supreme", "オイスタースプリーム", "오이스터 수프림", "至尊生蚝"), star: true, priceTiers: [{ label: "", price: 38 }], desc: L("3pc raw oysters topped with uni, ikura, caviar, negitoro and house blended sauce.", "生牡蠣3個に、ウニ・イクラ・キャビア・ネギトロと自家製ブレンドソースをトッピング。", "생오이스터 3개에 우니・이쿠라・캐비어・네기토로와 하우스 블렌드 소스를 올렸습니다.", "3只生蚝，配以海胆・鲑鱼籽・鱼子酱・葱花拖罗及自调酱汁。") },
      { name: L("Oyster Lovers", "オイスターラバーズ", "오이스터 러버즈", "生蚝爱好者"), priceTiers: [{ label: "", price: 34 }], desc: L("3pc raw oysters plus 3pc oyster combination shooters.", "生牡蠣3個と、コンビネーションショット3杯のセット。", "생오이스터 3개와 콤비네이션 샷 3개로 구성.", "3只生蚝搭配3杯组合特调。") },
      { name: L("Oyster Hale Special", "オイスターハレ スペシャル", "오이스터 할레 스페셜", "Oyster Hale特制"), star: true, priceTiers: [{ label: "", price: 32 }], desc: L("Spicy sizzling oyster — served hot and sizzling. Bold, flavorful, and full of aroma.", "ジュージューと熱々でお届けするスパイシーオイスター。力強い旨みと豊かな香り。", "뜨겁고 지글지글한 스파이시 오이스터. 강렬한 풍미와 진한 향이 가득합니다.", "香辣滋滋作响的热制生蚝，风味浓郁、香气十足。") },
      { name: L("Alfred Oyster", "アルフレッドオイスター", "알프레도 오이스터", "白汁生蚝"), priceTiers: [{ label: "3pc", price: 22 }, { label: "6pc", price: 40 }], desc: L("Baked with Alfred sauce and Japanese aosa seaweed — crispy, savory, with oceanic depth.", "アルフレッドソースと青のりで焼き上げた、香ばしく旨み深い一品。", "알프레도 소스와 일본식 아오사 김으로 구워내 바삭하고 깊은 풍미를 더했습니다.", "以白汁酱与日本青海苔烤制，外脆内嫩，海洋风味浓厚。") },
      { name: L("Miso Yaki Oyster", "味噌焼き牡蠣", "미소야키 오이스터", "味噌烤生蚝"), priceTiers: [{ label: "", price: 32 }], desc: L("Baked oysters glazed with house miso — savory, slightly sweet, deeply umami.", "自家製味噌を纏わせて焼き上げた牡蠣。甘みと旨みが深く広がります。", "하우스 미소를 발라 구운 오이스터. 짭짤하고 약간 달며 깊은 감칠맛이 느껴집니다.", "刷上自制味噌烤制，咸甜交融，鲜味浓郁。") }
    ]
  },
  {
    id: "starters",
    label: L("Starters", "前菜", "스타터", "前菜"),
    title: L("Starters", "前菜", "스타터", "前菜"),
    items: [
      { name: L("Ahi Poke", "アヒポキ", "아히 포케", "夏威夷波奇"), tags: ["Hawaii"], priceTiers: [{ label: "", price: 24 }], desc: L("Ahi, onion, green onion, sesame, wari shoyu, sesame oil, baby green, house mayo.", "アヒ・オニオン・青ねぎ・ごま・割り醬油・ごま油・ベビーグリーン・自家製マヨ。", "아히・양파・파・참깨・와리쇼유・참기름・베이비 그린・하우스 마요네즈.", "夏威夷生鱼・洋葱・青葱・芝麻・割り醬油・芝麻油・嫩叶菜・自制蛋黄酱。") },
      { name: L("Ahi Carpaccio", "アヒカルパッチョ", "아히 카르파초", "夏威夷生鱼薄片"), tags: ["Hawaii"], priceTiers: [{ label: "", price: 26 }], desc: L("Thinly sliced ahi, onion slice, house mayo, caviar, wasabi oil, black pepper, house blended ponzu.", "薄切りアヒ・オニオンスライス・自家製マヨ・キャビア・ワサビオイル・黒胡椒・自家製ポン酢。", "얇게 썬 아히・양파 슬라이스・하우스 마요네즈・캐비어・와사비 오일・블랙 페퍼・하우스 블렌드 폰즈.", "薄切夏威夷生鱼・洋葱片・自制蛋黄酱・鱼子酱・芥末油・黑胡椒・自调柚子醋。") },
      { name: L("Hamachi Carpaccio", "ハマチカルパッチョ", "하마치 카르파초", "鰤鱼薄片"), star: true, tags: ["Japan"], priceTiers: [{ label: "", price: 25 }], desc: L("Hamachi, onion slice, tobiko, yuzu mayo, jalapeno, cilantro, house blended ponzu.", "ハマチ・オニオンスライス・とびこ・柚子マヨ・ハラペーニョ・パクチー・自家製ポン酢。", "하마치・양파 슬라이스・토비코・유즈 마요네즈・할라페뇨・고수・하우스 블렌드 폰즈.", "鰤鱼・洋葱片・飞鱼籽・柚子蛋黄酱・墨西哥辣椒・香菜・自调柚子醋。") },
      { name: L("Scallop Carpaccio", "ホタテカルパッチョ", "스캘럽 카르파초", "扇贝薄片"), tags: ["Japan"], priceTiers: [{ label: "", price: 25 }], desc: L("Scallop, onion slice, ikura, house mayo, capers, black pepper, house blended ponzu.", "ホタテ・オニオンスライス・イクラ・自家製マヨ・ケッパー・黒胡椒・自家製ポン酢。", "스캘럽・양파 슬라이스・이쿠라・하우스 마요네즈・케이퍼・블랙 페퍼・하우스 블렌드 폰즈.", "扇贝・洋葱片・鲑鱼籽・自制蛋黄酱・酸豆・黑胡椒・自调柚子醋。") },
      { name: L("Ceviche", "セビーチェ", "세비체", "酸橘汁腌鱼"), star: true, priceTiers: [{ label: "", price: 26 }], desc: L("Fresh seafood marinated in citrus dressing with onion, tomato, and cilantro jalapeno.", "新鮮なシーフードを、オニオン・トマト・パクチー・ハラペーニョと共に柑橘ドレッシングでマリネ。", "신선한 해산물을 양파・토마토・고수・할라페뇨와 함께 시트러스 드레싱에 마리네이드.", "新鲜海鲜以柑橘风味腌渍，搭配洋葱・番茄・香菜与墨西哥辣椒。") },
      { name: L("Tako Poke", "タコポキ", "타코 포케", "章鱼波奇"), tags: ["Japan"], priceTiers: [{ label: "", price: 24 }], desc: L("Tako, onion, green onion, shichimi, sesame oil, wari shoyu, baby green, house mayo.", "タコ・オニオン・青ねぎ・七味・ごま油・割り醬油・ベビーグリーン・自家製マヨ。", "문어・양파・파・시치미・참기름・와리쇼유・베이비 그린・하우스 마요네즈.", "章鱼・洋葱・青葱・七味粉・芝麻油・割り醬油・嫩叶菜・自制蛋黄酱。") },
      { name: L("Salmon Carpaccio", "サーモンカルパッチョ", "연어 카르파초", "鲑鱼薄片"), tags: ["Canada"], priceTiers: [{ label: "", price: 24 }], desc: L("Salmon, onion slice, ikura, house mayo, capers, black pepper, house blended ponzu.", "サーモン・オニオンスライス・イクラ・自家製マヨ・ケッパー・黒胡椒・自家製ポン酢。", "연어・양파 슬라이스・이쿠라・하우스 마요네즈・케이퍼・블랙 페퍼・하우스 블렌드 폰즈.", "鲑鱼・洋葱片・鲑鱼籽・自制蛋黄酱・酸豆・黑胡椒・自调柚子醋。") },
      { name: L("Negitoro Tartar", "ネギトロタルタル", "네기토로 타르타르", "葱花拖罗他他"), tags: ["Japan"], priceTiers: [{ label: "", price: 22 }], desc: L("Minced fatty tuna with scallion, prepared in a tartar style.", "刻んだ脂の乗ったマグロを、ねぎと共にタルタル仕立てで。", "다진 참치 뱃살을 파와 함께 타르타르 스타일로 준비했습니다.", "切碎的肥美吞拿鱼搭配葱花，以鞑靼风格呈现。") },
      { name: L("Ahi Poke Nachos", "アヒポキナチョス", "아히 포케 나초", "夏威夷波奇玉米片"), star: true, priceTiers: [{ label: "", price: 26 }], desc: L("Ahi poke, nachos, sweet sauce, jalapeno cilantro cheese sauce.", "アヒポキ・ナチョス・甘口ソース・ハラペーニョパクチーチーズソース。", "아히 포케・나초・스위트 소스・할라페뇨 실란트로 치즈 소스.", "夏威夷生鱼・玉米片・甜酱・墨西哥辣椒香菜芝士酱。") }
    ]
  },
  {
    id: "sashimi",
    label: L("Sashimi", "刺身", "사시미", "生鱼片"),
    title: L("Sashimi", "刺身", "사시미", "生鱼片"),
    note: L("Add rice +4", "ライス追加 +4", "라이스 추가 +4", "加米饭 +4"),
    items: [
      { name: L("Ahi (Tuna)", "アヒ", "아히", "吞拿鱼"), star: true, desc: L("Hawaii — caught fresh locally", "ハワイ — 地元で水揚げされた新鮮なもの", "하와이 — 현지에서 갓 잡은 신선한 참치", "夏威夷 — 当地新鲜捕获"), priceTiers: [{ label: "", price: 26 }] },
      { name: L("Hamachi (Yellowtail)", "ハマチ", "하마치", "鰤鱼"), star: true, desc: L("Japan — premium imported", "日本 — 高級輸入品", "일본 — 프리미엄 수입", "日本 — 高级进口"), priceTiers: [{ label: "", price: 26 }] },
      { name: L("Scallop", "ホタテ", "스캘럽", "扇贝"), desc: L("Japan — premium imported", "日本 — 高級輸入品", "일본 — 프리미엄 수입", "日本 — 高级进口"), priceTiers: [{ label: "", price: 24 }] },
      { name: L("Tako (Octopus)", "タコ", "타코", "章鱼"), desc: L("Japan — premium imported", "日本 — 高級輸入品", "일본 — 프리미엄 수입", "日本 — 高级进口"), priceTiers: [{ label: "", price: 24 }] },
      { name: L("Salmon", "サーモン", "연어", "鲑鱼"), desc: L("Canada — Atlantic fresh", "カナダ — 大西洋の新鮮なサーモン", "캐나다 — 대서양산 신선한 연어", "加拿大 — 大西洋新鲜直送"), priceTiers: [{ label: "", price: 24 }] },
      { name: L("Assorted (3 Kinds)", "盛り合わせ（3種）", "모음（3종）", "拼盘（3种）"), desc: L("Tuna, salmon and hamachi, 2pc each.", "マグロ・サーモン・ハマチを各2枚。", "참치・연어・하마치 각 2점.", "吞拿鱼・鲑鱼・鰤鱼各2片。"), priceTiers: [{ label: "", price: 36 }] },
      { name: L("Deluxe", "デラックス", "디럭스", "豪华版"), star: true, desc: L("Tuna, salmon, hamachi, tako, uni and ikura.", "マグロ・サーモン・ハマチ・タコ・ウニ・イクラ。", "참치・연어・하마치・문어・우니・이쿠라.", "吞拿鱼・鲑鱼・鰤鱼・章鱼・海胆・鲑鱼籽。"), priceTiers: [{ label: "", price: 48 }] }
    ],
    footer: L("Selection is subject to change upon shipment.", "入荷状況により内容が変更となる場合があります。", "입고 상황에 따라 구성이 변경될 수 있습니다.", "内容可能因到货情况而有所变动。")
  },
  {
    id: "sushi-roll",
    label: L("Sushi Rolls", "寿司ロール", "스시 롤", "寿司卷"),
    title: L("Sushi Roll", "寿司ロール", "스시 롤", "寿司卷"),
    items: [
      { name: L("Volcano Roll", "ヴォルケーノロール", "볼케이노 롤", "火山卷"), priceTiers: [{ label: "", price: 22 }], desc: L("California roll, spicy tuna, eel sauce and spicy mayo.", "カリフォルニアロールにスパイシーツナ・うなぎソース・スパイシーマヨを添えて。", "캘리포니아 롤에 스파이시 참치・장어 소스・스파이시 마요네즈를 더했습니다.", "加州卷搭配香辣吞拿鱼・鳗鱼酱与香辣蛋黄酱。") },
      { name: L("Waikiki Roll", "ワイキキロール", "와이키키 롤", "威基基卷"), priceTiers: [{ label: "", price: 25 }], desc: L("California roll, salmon, ikura and house mayo.", "カリフォルニアロールにサーモン・イクラ・自家製マヨを添えて。", "캘리포니아 롤에 연어・이쿠라・하우스 마요네즈를 더했습니다.", "加州卷搭配鲑鱼・鲑鱼籽与自制蛋黄酱。") },
      { name: L("Aloha Roll", "アロハロール", "알로하 롤", "阿罗哈卷"), priceTiers: [{ label: "", price: 28 }], desc: L("California roll, seared hamachi, avocado, eel sauce, jalapeno, tobiko.", "カリフォルニアロールに炙りハマチ・アボカド・うなぎソース・ハラペーニョ・とびこを添えて。", "캘리포니아 롤에 시어드 하마치・아보카도・장어 소스・할라페뇨・토비코를 더했습니다.", "加州卷搭配香煎鰤鱼・牛油果・鳗鱼酱・墨西哥辣椒与飞鱼籽。") },
      { name: L("Diamond Head Roll", "ダイヤモンドヘッドロール", "다이아몬드 헤드 롤", "钻石头卷"), star: true, priceTiers: [{ label: "", price: 32 }], desc: L("Spicy tuna roll, uni and caviar on top.", "スパイシーツナロールに、ウニとキャビアをトッピング。", "스파이시 참치 롤에 우니와 캐비어를 올렸습니다.", "香辣吞拿鱼卷，上铺海胆与鱼子酱。") },
      { name: L("Hale Supreme Roll", "ハレ スプリームロール", "할레 수프림 롤", "Hale至尊卷"), star: true, priceTiers: [{ label: "", price: 38 }], desc: L("Negitoro, cucumber and avocado inside — topped with tuna, salmon, hamachi and scallop with yuzu mayo, uni and caviar.", "ネギトロ・きゅうり・アボカドを巻き込み、マグロ・サーモン・ハマチ・ホタテに柚子マヨ、ウニとキャビアをトッピング。", "네기토로・오이・아보카도를 안에 넣고, 위에 참치・연어・하마치・스캘럽에 유즈 마요네즈, 우니와 캐비어를 올렸습니다.", "内含葱花拖罗・黄瓜・牛油果，上铺吞拿鱼・鲑鱼・鰤鱼・扇贝配柚子蛋黄酱、海胆与鱼子酱。") }
    ]
  },
  {
    id: "sushi-bowl",
    label: L("Sushi Bowls", "丼", "스시 보울", "寿司碗"),
    title: L("Sushi Bowl", "丼", "스시 보울", "寿司碗"),
    note: L("Add spicy mayo +1", "スパイシーマヨ追加 +1", "스파이시 마요네즈 추가 +1", "加香辣蛋黄酱 +1"),
    items: [
      { name: L("Bara Chirashi Bowl", "バラちらし丼", "바라 치라시 보울", "散寿司碗"), star: true, priceTiers: [{ label: "", price: 38 }], desc: L("Chopped assorted sashimi on rice bowl.", "刻んだ盛り合わせ刺身をライスにのせて。", "다진 모둠 사시미를 라이스 위에 올렸습니다.", "切碎的拼盘生鱼片铺于米饭之上。") },
      { name: L("Ahi Poke Bowl", "アヒポキ丼", "아히 포케 보울", "夏威夷生鱼碗"), priceTiers: [{ label: "", price: 28 }], desc: L("Ahi poke on rice bowl.", "アヒポキをライスにのせて。", "아히 포케를 라이스 위에 올렸습니다.", "夏威夷生鱼铺于米饭之上。") },
      { name: L("Salmon Ikura Bowl", "サーモンイクラ丼", "연어 이쿠라 보울", "鲑鱼籽碗"), priceTiers: [{ label: "", price: 28 }], desc: L("Salmon sashimi and ikura on rice bowl.", "サーモンの刺身とイクラをライスにのせて。", "연어 사시미와 이쿠라를 라이스 위에 올렸습니다.", "鲑鱼生鱼片与鲑鱼籽铺于米饭之上。") },
      { name: L("Tuna Negitoro Bowl", "マグロネギトロ丼", "참치 네기토로 보울", "吞拿鱼葱花拖罗碗"), priceTiers: [{ label: "", price: 30 }], desc: L("Tuna and negitoro on rice bowl.", "マグロとネギトロをライスにのせて。", "참치와 네기토로를 라이스 위에 올렸습니다.", "吞拿鱼与葱花拖罗铺于米饭之上。") },
      { name: L("Uni Toro Ikura Bowl \u201cSupreme\u201d", "ウニ・トロ・イクラ丼「スプリーム」", "우니 토로 이쿠라 보울 \u201c수프림\u201d", "海胆拖罗鲑鱼籽碗「至尊版」"), star: true, priceTiers: [{ label: "", price: 42 }], desc: L("Negitoro, uni, ikura and caviar on rice bowl.", "ネギトロ・ウニ・イクラ・キャビアをライスにのせて。", "네기토로・우니・이쿠라・캐비어를 라이스 위에 올렸습니다.", "葱花拖罗・海胆・鲑鱼籽・鱼子酱铺于米饭之上。") }
    ]
  },
  {
    id: "salad",
    label: L("Salad", "サラダ", "샐러드", "沙拉"),
    title: L("Salad", "サラダ", "샐러드", "沙拉"),
    items: [
      { name: L("Mix Green Salad", "ミックスグリーンサラダ", "믹스 그린 샐러드", "混合青菜沙拉"), priceTiers: [{ label: "", price: 18 }], desc: L("Baby green, tomato, grapes, sesame, sesame oil, ponzu, house mayo.", "ベビーグリーン・トマト・ぶどう・ごま・ごま油・ポン酢・自家製マヨ。", "베이비 그린・토마토・포도・참깨・참기름・폰즈・하우스 마요네즈.", "嫩叶菜・番茄・葡萄・芝麻・芝麻油・柚子醋・自制蛋黄酱。") },
      { name: L("Japanese Seafood Salad", "和風シーフードサラダ", "일본식 해산물 샐러드", "日式海鲜沙拉"), priceTiers: [{ label: "", price: 26 }], desc: L("Tako, onion, green onion, shichimi, sesame oil, wari shoyu, baby green, house mayo.", "タコ・オニオン・青ねぎ・七味・ごま油・割り醬油・ベビーグリーン・自家製マヨ。", "문어・양파・파・시치미・참기름・와리쇼유・베이비 그린・하우스 마요네즈.", "章鱼・洋葱・青葱・七味粉・芝麻油・割り醬油・嫩叶菜・自制蛋黄酱。") }
    ]
  },
  {
    id: "dessert",
    label: L("Dessert", "デザート", "디저트", "甜点"),
    title: L("Desserts", "デザート", "디저트", "甜点"),
    items: [
      { name: L("Matcha Ice Cream", "抹茶アイスクリーム", "마차 아이스크림", "抹茶冰淇淋"), priceTiers: [{ label: "", price: 8 }], desc: L("Creamy green tea ice cream with premium Japanese matcha.", "高級な日本産抹茶を使った、なめらかな抹茶アイスクリーム。", "프리미엄 일본 마차를 사용한 부드러운 그린티 아이스크림.", "使用高级日本抹茶制成的香浓抹茶冰淇淋。") },
      { name: L("Today's Dessert", "本日のデザート", "오늘의 디저트", "今日甜点"), desc: L("Ask your server.", "スタッフにお尋ねください。", "서버에게 문의해 주세요.", "请询问服务员。"), priceStatic: ASK }
    ]
  },
  {
    id: "dashi-butter",
    label: L("Dashi Butter", "出汁バター", "다시 버터", "高汤黄油"),
    title: L("Dashi Butter", "出汁バター", "다시 버터", "高汤黄油"),
    subtitle: L("Our signature hot soup bowl", "当店名物のホットスープボウル", "우리의 시그니처 핫 수프 보울", "招牌热汤碗"),
    note: L("Additional bread +4 · add rice +4", "パン追加 +4 · ライス追加 +4", "빵 추가 +4 · 라이스 추가 +4", "加面包 +4 · 加米饭 +4"),
    items: [
      { name: L("Dashi Butter Oyster", "出汁バター オイスター", "다시 버터 오이스터", "高汤黄油生蚝"), star: true, unit: L("Most popular", "最も人気", "가장 인기", "最受欢迎"), priceTiers: [{ label: "", price: 32 }] },
      { name: L("Dashi Butter Clam", "出汁バター アサリ", "다시 버터 클램", "高汤黄油蛤蜊"), priceTiers: [{ label: "", price: 30 }] },
      { name: L("Dashi Butter Mussel", "出汁バター ムール貝", "다시 버터 무슬", "高汤黄油青口"), priceTiers: [{ label: "", price: 30 }] },
      { name: L("Dashi Butter Assorted", "出汁バター 盛り合わせ", "다시 버터 모음", "高汤黄油拼盘"), unit: L("clam, mussel, shrimp", "アサリ・ムール貝・エビ", "클램・무슬・새우", "蛤蜊・青口・虾"), priceTiers: [{ label: "", price: 36 }] }
    ],
    footer: L(
      "A creative twist on the classic bouillabaisse — deep umami of Japanese dashi with butter, simmered with fresh seafood, sweet onion, tomato, capers, and garlic. A touch of grapes and strawberries adds natural sweetness. Served with crusty bread.",
      "クラシックなブイヤベースに独自のひねりを加えた一品 — 和の出汁とバターの深い旨みに、新鮮なシーフード・甘いオニオン・トマト・ケッパー・ガーリックを煮込んで。ぶどうと苺がほのかな自然な甘みを添えます。クラスティブレッドと共に。",
      "클래식 부야베스를 새롭게 재해석한 요리 — 일본식 다시와 버터의 깊은 감칠맛에 신선한 해산물・단양파・토마토・케이퍼・마늘을 넣어 끓였습니다. 포도와 딸기가 은은한 자연의 단맛을 더합니다. 바삭한 빵과 함께 제공됩니다.",
      "经典法式海鲜汤的创意演绎 — 以日式高汤与黄油的浓郁鲜味，慢煮新鲜海鲜・甜洋葱・番茄・酸豆与蒜末。葡萄与草莓的点缀带来天然的甜美余韵。搭配脆皮面包享用。"
    )
  },
  {
    id: "oven-baked",
    label: L("Oven Baked", "オーブン焼き", "오븐 베이크드", "烤箱料理"),
    title: L("Oven Baked", "オーブン焼き", "오븐 베이크드", "烤箱料理"),
    note: L("Add rice +4 · add spicy mayo +1", "ライス追加 +4 · スパイシーマヨ追加 +1", "라이스 추가 +4 · 스파이시 마요네즈 추가 +1", "加米饭 +4 · 加香辣蛋黄酱 +1"),
    items: [
      { name: L("Garlic Butter Shrimp", "ガーリックバターシュリンプ", "갈릭 버터 쉬림프", "蒜香黄油虾"), star: true, unit: L("with salad", "サラダ付き", "샐러드 포함", "配沙拉"), priceTiers: [{ label: "", price: 26 }], desc: L("Shrimp, garlic, butter, sweet onion — served with a side salad.", "エビ・ガーリック・バター・甘いオニオン — サイドサラダ付き。", "새우・마늘・버터・단양파 — 사이드 샐러드와 함께 제공.", "虾・蒜・黄油・甜洋葱 — 附赠一份配菜沙拉。") },
      { name: L("Garlic Butter Salmon", "ガーリックバターサーモン", "갈릭 버터 연어", "蒜香黄油鲑鱼"), priceTiers: [{ label: "", price: 28 }], desc: L("Salmon, garlic, butter, sweet onion.", "サーモン・ガーリック・バター・甘いオニオン。", "연어・마늘・버터・단양파.", "鲑鱼・蒜・黄油・甜洋葱。") },
      { name: L("Garlic Butter Chicken", "ガーリックバターチキン", "갈릭 버터 치킨", "蒜香黄油鸡肉"), priceTiers: [{ label: "", price: 22 }], desc: L("Chicken, garlic, butter, sweet onion.", "チキン・ガーリック・バター・甘いオニオン。", "치킨・마늘・버터・단양파.", "鸡肉・蒜・黄油・甜洋葱。") },
      { name: L("Miso Butter Salmon", "味噌バターサーモン", "미소 버터 연어", "味噌黄油鲑鱼"), star: true, priceTiers: [{ label: "", price: 28 }], desc: L("Salmon, miso, garlic, butter, sweet onion.", "サーモン・味噌・ガーリック・バター・甘いオニオン。", "연어・미소・마늘・버터・단양파.", "鲑鱼・味噌・蒜・黄油・甜洋葱。") },
      { name: L("Miso Butter Chicken", "味噌バターチキン", "미소 버터 치킨", "味噌黄油鸡肉"), priceTiers: [{ label: "", price: 22 }], desc: L("Chicken, miso, garlic, butter, sweet onion.", "チキン・味噌・ガーリック・バター・甘いオニオン。", "치킨・미소・마늘・버터・단양파.", "鸡肉・味噌・蒜・黄油・甜洋葱。") },
      { name: L("Yuzu Kosho Chicken", "柚子胡椒チキン", "유즈코쇼 치킨", "柚子胡椒鸡肉"), priceTiers: [{ label: "", price: 24 }], desc: L("Chicken, yuzu kosho, garlic, sweet onion.", "チキン・柚子胡椒・ガーリック・甘いオニオン。", "치킨・유즈코쇼・마늘・단양파.", "鸡肉・柚子胡椒・蒜・甜洋葱。") }
    ]
  },
  {
    id: "special-menu",
    label: L("More", "その他", "기타", "更多"),
    title: L("Special Menu", "スペシャルメニュー", "스페셜 메뉴", "特别菜单"),
    items: [
      { name: L("Yakitori Set", "焼き鳥セット", "야키토리 세트", "烤鸡串套餐"), star: true, unit: L("chicken skewer", "鶏串", "치킨 스큐어", "鸡肉串"), priceTiers: [{ label: "", price: 18 }], desc: L("Grilled chicken thigh (2pc), chicken skin (2pc), glazed with sweet teriyaki sauce.", "鶏もも肉串（2本）・鶏皮串（2本）を、甘い照り焼きソースでグレーズ。", "닭다리살 꼬치（2개）・닭껍질 꼬치（2개）에 달콤한 데리야키 소스를 발랐습니다.", "鸡腿肉串（2串）・鸡皮串（2串），刷上甜照烧酱。"), note: L("+1pc thigh or skin $5", "+1本（もも肉・皮選択可）$5", "+1개（다리살 또는 껍질 선택）$5", "+1串（鸡腿或鸡皮可选）$5") },
      { name: L("Garlic Shrimp Fried Rice", "ガーリックシュリンプ炒飯", "갈릭 쉬림프 프라이드 라이스", "蒜香虾炒饭"), priceTiers: [{ label: "", price: 26 }], desc: L("Fried rice topped with savory garlic shrimp.", "香り高いガーリックシュリンプをのせた炒飯。", "풍미 가득한 갈릭 쉬림프를 올린 프라이드 라이스.", "铺上鲜香蒜味虾仁的炒饭。") },
      { name: L("Yakitori Fried Rice", "焼き鳥炒飯", "야키토리 프라이드 라이스", "烤鸡串炒饭"), priceTiers: [{ label: "", price: 24 }], desc: L("Fried rice topped with two skewers of yakitori.", "焼き鳥串2本をのせた炒飯。", "야키토리 꼬치 2개를 올린 프라이드 라이스.", "铺上两串烤鸡串的炒饭。") },
      { name: L("Fried Rice (Vegan)", "炒飯（ヴィーガン）", "프라이드 라이스（비건）", "炒饭（素食）"), priceTiers: [{ label: "", price: 20 }] },
      { name: L("French Fries", "フレンチフライ", "감자튀김", "炸薯条"), priceTiers: [{ label: "", price: 9 }] },
      { name: L("Oshinko", "お新香", "오신코", "日式腌菜"), unit: L("Japanese pickles", "漬物", "일본식 채소 절임", "日式酱菜"), priceTiers: [{ label: "", price: 8 }] }
    ],
    footer: L("The menu is subject to change by availability.", "内容は仕入れ状況により変更となる場合があります。", "메뉴는 재고 상황에 따라 변경될 수 있습니다.", "菜单内容可能因供应情况而有所变动。")
  }
];

const DRINKS_MENU = [
  {
    id: "sake",
    label: L("Sake", "日本酒", "사케", "日本酒"),
    title: L("Japanese Premium Sake", "日本酒 プレミアムセレクション", "일본 프리미엄 사케", "日本顶级清酒"),
    items: [
      { name: "Tatenokawa Junmai Daiginjo Red Stream", tags: ["Chilled"], unit: L("300ml bottle", "300mlボトル", "300ml 보틀", "300毫升瓶装"), priceTiers: [{ label: "", price: 42 }] },
      { name: "Hakkaisan Junmai Daiginjo", tags: ["Chilled"], unit: L("300ml bottle", "300mlボトル", "300ml 보틀", "300毫升瓶装"), priceTiers: [{ label: "", price: 35 }] },
      { name: "Kubota Junmai Daiginjo", star: true, tags: ["Chilled"], unit: L("300ml bottle", "300mlボトル", "300ml 보틀", "300毫升瓶装"), priceTiers: [{ label: "", price: 30 }] },
      { name: "Nanbu Bijin Tokubetsu Junmai", tags: ["Chilled"], unit: L("300ml bottle", "300mlボトル", "300ml 보틀", "300毫升瓶装"), priceTiers: [{ label: "", price: 28 }] },
      { name: "Oze no Yukidoke Junmai Super Dry", tags: ["Chilled"], priceTiers: [{ label: "", price: 28 }] },
      { name: "Kikusui Perfect Snow \u201cNigori\u201d", tags: ["Chilled"], unit: L("300ml bottle", "300mlボトル", "300ml 보틀", "300毫升瓶装"), priceTiers: [{ label: "", price: 22 }] },
      { name: "Hakutsuru Blanc", star: true, tags: ["Chilled"], unit: L("300ml bottle", "300mlボトル", "300ml 보틀", "300毫升瓶装"), desc: L("Wine-yeast hybrid, apple and lime notes.", "ワイン酵母を使用したハイブリッド酒。りんごとライムのような風味。", "와인 효모를 사용한 하이브리드 사케. 사과와 라임의 풍미.", "使用葡萄酒酵母酿造，带有苹果与青柠风味。"), priceTiers: [{ label: "", price: 20 }] },
      { name: L("Umeshu — Sweet Plum Sake", "梅酒（甘口）", "우메슈 — 매실주", "梅酒 — 甜梅酒"), tags: ["Chilled"], note: L("with soda +2", "ソーダ割り +2", "소다 추가 +2", "加苏打 +2"), priceTiers: [{ label: "", price: 8 }] },
      { name: "Kikumasamune Junmai", tags: ["Warm"], unit: L("hot or cold", "燗・冷どちらも", "따뜻하게 또는 차갑게", "温饮或冷饮均可"), priceTiers: [{ label: "", price: 18 }] }
    ]
  },
  {
    id: "sake-flight",
    label: L("Sake Flight", "日本酒飲み比べ", "사케 플라이트", "清酒品鉴套组"),
    title: L("Sake Flight", "日本酒飲み比べ", "사케 플라이트", "清酒品鉴套组"),
    subtitle: L("3 sake sampler", "3種飲み比べセット", "3종 사케 샘플러", "3款清酒品鉴"),
    items: [
      { name: L("Standard Flight", "スタンダード飲み比べ", "스탠다드 플라이트", "标准品鉴套组"), unit: L("3 sampler", "3種セット", "3종 세트", "3款套组"), desc: L("A curated taste of three classic styles, hand-picked by our team.", "スタッフが厳選した、3つのクラシックなスタイルの飲み比べ。", "우리 팀이 직접 선별한 3가지 클래식 스타일의 사케.", "由我们团队精心挑选的三款经典风格清酒。"), priceTiers: [{ label: "", price: 20 }] },
      { name: L("Premium Flight", "プレミアム飲み比べ", "프리미엄 플라이트", "高级品鉴套组"), star: true, unit: L("3 sampler", "3種セット", "3종 세트", "3款套组"), desc: L("Our rarest daiginjo selections — for the discerning palate.", "最も希少な大吟醸セレクション — 通な方にこそ。", "가장 희귀한 다이긴조 셀렉션 — 미식가를 위한 한 잔.", "我们最稀有的大吟醸精选 — 献给懂酒之人。"), priceTiers: [{ label: "", price: 32 }] },
      { name: L("Today's Pour", "今夜のおすすめ一杯", "오늘의 한 잔", "今日特选一杯"), star: true, unit: L("daily special sake shot", "日替わりスペシャルショット", "매일 바뀌는 스페셜 샷", "每日更替的特选小杯"), desc: L("Rotating daily selection — ask your server what's pouring tonight.", "日替わりのセレクション — 今夜の一杯はスタッフにお尋ねください。", "매일 바뀌는 셀렉션 — 오늘 밤의 한 잔을 서버에게 물어보세요.", "每日更换的精选清酒 — 欢迎询问服务员今晚的推荐。"), priceTiers: [{ label: "", price: 6 }] }
    ]
  },
  {
    id: "shochu",
    label: L("Shochu", "焼酎", "소주（쇼츄）", "烧酒"),
    title: L("Japanese Shochu", "日本の焼酎", "일본 소주", "日本烧酒"),
    items: [
      { name: "Iichiko", unit: L("barley", "麦", "보리", "大麦"), priceTiers: [{ label: "glass", price: 6 }, { label: "soda", price: 8 }, { label: "bottle", price: 48 }] },
      { name: "Golden Iichiko", unit: L("sweet potato", "芋", "고구마", "薩摩薯"), priceTiers: [{ label: "glass", price: 6 }, { label: "soda", price: 8 }, { label: "bottle", price: 48 }] }
    ],
    footer: L(
      "A distilled spirit — not brewed like sake. Made from barley, sweet potato, or rice, it's typically stronger (25% ABV) and drier, with a clean finish. Enjoy it on the rocks, with soda, or warm.",
      "日本酒とは異なる蒸留酒。大麦・芋・米などから造られ、アルコール度数は高め（25%前後）でキリッとした飲み口。ロック・ソーダ割り・お湯割りでお楽しみください。",
      "사케와는 다른 증류주입니다. 보리・고구마・쌀 등으로 만들어지며 도수가 다소 높고（약 25%）깔끔한 끝맛이 특징입니다. 온더록스・소다・온더록 형태로 즐겨보세요.",
      "一种蒸馏酒，酿造方式与清酒不同。以大麦・薩摩薯或米制成，酒精浓度较高（约25%），口感干爽利落。可加冰、加苏打或温饮享用。"
    )
  },
  {
    id: "chuhi",
    label: L("Chu-Hi", "チューハイ", "츄하이", "Chu-Hi"),
    title: L("Japanese Cocktail \u201cChu-Hi\u201d", "日本のカクテル「チューハイ」", "일본식 칵테일 \u201c츄하이\u201d", "日式鸡尾酒「Chu-Hi」"),
    items: [
      { name: L("Grapefruit Chu-Hi", "グレープフルーツチューハイ", "그레이프프루트 츄하이", "葡萄柚Chu-Hi"), priceTiers: [{ label: "", price: 7 }] },
      { name: L("Peach Chu-Hi", "ピーチチューハイ", "피치 츄하이", "白桃Chu-Hi"), priceTiers: [{ label: "", price: 7 }] },
      { name: L("Lychee Chu-Hi", "ライチチューハイ", "리치 츄하이", "荔枝Chu-Hi"), priceTiers: [{ label: "", price: 7 }] },
      { name: L("Oolong Hi", "ウーロンハイ", "우롱하이", "乌龙Hi"), priceTiers: [{ label: "", price: 7 }] }
    ],
    footer: L(
      "A popular Japanese cocktail made with shochu, soda water, and flavored with fruit juice such as lemon or grapefruit. Refreshing and light.",
      "焼酎とソーダをベースに、レモンやグレープフルーツなどの果汁で風味づけした、人気の日本のカクテル。爽やかで軽い飲み口。",
      "소주와 소다수를 베이스로, 레몬이나 그레이프프루트 등의 과즙으로 풍미를 더한 인기 일본 칵테일입니다. 청량하고 가볍게 즐길 수 있습니다.",
      "以烧酒和苏打水为基底，加入柠檬或葡萄柚等果汁调味，是一款深受欢迎的日式鸡尾酒，清爽怡人。"
    )
  },
  {
    id: "wine",
    label: L("Wine", "ワイン", "와인", "葡萄酒"),
    title: L("Wine", "ワイン", "와인", "葡萄酒"),
    items: [
      { name: "Oyster Bay Sauvignon Blanc", tags: ["New Zealand"], priceTiers: [{ label: "", price: 38 }] },
      { name: "Oyster Bay Chardonnay", tags: ["New Zealand"], priceTiers: [{ label: "", price: 38 }] },
      { name: "Cataclysm Chardonnay", tags: ["Columbia Valley, WA"], priceTiers: [{ label: "", price: 38 }] },
      { name: "Matanzas Creek Sauvignon Blanc", tags: ["Sonoma, CA"], priceTiers: [{ label: "", price: 68 }] },
      { name: "Vionta Albari\u00f1o", tags: ["Rias Baixas, Spain"], priceTiers: [{ label: "", price: 70 }] },
      { name: "La Chablisienne Chablis", tags: ["France"], priceTiers: [{ label: "", price: 80 }] },
      { name: L("Glass Wine", "グラスワイン", "글라스 와인", "杯装葡萄酒"), desc: L("Ask your server for today's by-the-glass pour.", "本日のグラスワインはスタッフにお尋ねください。", "오늘의 글라스 와인은 서버에게 문의해 주세요.", "请向服务员询问今日的杯装葡萄酒选择。"), priceTiers: [{ label: "", price: 9 }] },
      { name: "Oyster Bay Pinot Noir", tags: ["New Zealand"], priceTiers: [{ label: "", price: 44 }] },
      { name: "Benvolio Prosecco Sparkling", tags: ["Italy"], priceTiers: [{ label: "", price: 42 }] },
      { name: "Chandon Brut", tags: ["Napa, CA"], priceTiers: [{ label: "", price: 62 }] },
      { name: "Veuve Clicquot Champagne Brut", tags: ["France"], priceTiers: [{ label: "", price: 128 }] },
      { name: L("House Wine", "ハウスワイン", "하우스 와인", "招牌葡萄酒"), unit: L("white or red, glass", "白または赤、グラス", "화이트 또는 레드, 글라스", "白或红，杯装"), priceTiers: [{ label: "", price: 10 }] }
    ]
  },
  {
    id: "beer",
    label: L("Beer", "ビール", "맥주", "啤酒"),
    title: L("Beer", "ビール", "맥주", "啤酒"),
    items: [
      { name: "Kirin Ichiban", unit: L("draft", "ドラフト", "드래프트", "生啤"), priceTiers: [{ label: "", price: 7 }] },
      { name: "Big Swell IPA", unit: L("draft", "ドラフト", "드래프트", "生啤"), tags: ["Local"], priceTiers: [{ label: "", price: 9.5 }] },
      { name: "Da Hawaii Life Lite Lager", unit: L("12oz", "12オンス", "12oz", "12盎司"), tags: ["Local"], priceTiers: [{ label: "", price: 5 }] },
      { name: "Kewalo's Cream Ale", unit: L("12oz", "12オンス", "12oz", "12盎司"), tags: ["Local"], priceTiers: [{ label: "", price: 6.5 }] },
      { name: "Point Panic Pale Ale", unit: L("12oz", "12オンス", "12oz", "12盎司"), tags: ["Local"], priceTiers: [{ label: "", price: 7 }] }
    ]
  },
  {
    id: "whiskey",
    label: L("Whiskey", "ウイスキー", "위스키", "威士忌"),
    title: L("Whiskey", "ウイスキー", "위스키", "威士忌"),
    note: L("Add soda — highball — +2", "ソーダ追加（ハイボール）+2", "소다 추가（하이볼）+2", "加苏打（高球）+2"),
    items: [
      { name: "Jim Beam", priceTiers: [{ label: "", price: 6 }] },
      { name: "Suntory Toki", tags: ["Japan"], priceTiers: [{ label: "", price: 8 }] },
      { name: "Suntory Ao", tags: ["Japan"], priceTiers: [{ label: "", price: 15 }] },
      { name: "Suntory Hibiki", tags: ["Japan"], priceTiers: [{ label: "", price: 25 }] },
      { name: "Suntory Yamazaki", tags: ["Japan"], priceStatic: ASK }
    ]
  },
  {
    id: "soft-drinks",
    label: L("Soft Drinks", "ソフトドリンク", "소프트 드링크", "软饮"),
    title: L("Soft Drinks", "ソフトドリンク", "소프트 드링크", "软饮"),
    items: [
      { name: "Coke", priceTiers: [{ label: "", price: 4 }] },
      { name: "Diet Coke", priceTiers: [{ label: "", price: 4 }] },
      { name: "Sprite", priceTiers: [{ label: "", price: 4 }] },
      { name: L("Oolong Tea", "ウーロン茶", "우롱차", "乌龙茶"), priceTiers: [{ label: "", price: 4 }] },
      { name: "Hawaiian Sun Lilikoi Passion", priceTiers: [{ label: "", price: 4 }] }
    ]
  }
];
