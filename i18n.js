var LANGS = [
  { code: "en", native: "English" },
  { code: "ja", native: "日本語" },
  { code: "ko", native: "한국어" },
  { code: "zh", native: "简体中文" }
];

var CURRENT_LANG = "en";

function L(en, ja, ko, zh) {
  return { en: en, ja: ja, ko: ko, zh: zh };
}

function t(field) {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[CURRENT_LANG] || field.en || "";
}

var ASK = L("Ask", "応相談", "문의", "询问");

var TAG_LABELS = {
  "Hawaii": L("Hawaii", "ハワイ", "하와이", "夏威夷"),
  "Japan": L("Japan", "日本", "일본", "日本"),
  "Canada": L("Canada", "カナダ", "캐나다", "加拿大"),
  "Chilled": L("Chilled", "冷酒", "냉주", "冰镇"),
  "Warm": L("Warm", "燗", "데움", "温酒"),
  "Local": L("Local", "地元", "로컬", "本地"),
  "New Zealand": L("New Zealand", "ニュージーランド", "뉴질랜드", "新西兰"),
  "Columbia Valley, WA": L("Columbia Valley, WA", "コロンビアバレー、ワシントン州", "컬럼비아 밸리, 워싱턴주", "哥伦比亚谷，华盛顿州"),
  "Sonoma, CA": L("Sonoma, CA", "ソノマ、カリフォルニア州", "소노마, 캘리포니아주", "索诺玛，加利福尼亚州"),
  "Rias Baixas, Spain": L("Rias Baixas, Spain", "リアス・バイシャス、スペイン", "리아스 바이샤스, 스페인", "下海湾产区，西班牙"),
  "Napa, CA": L("Napa, CA", "ナパ、カリフォルニア州", "나파, 캘리포니아주", "纳帕，加利福尼亚州"),
  "Italy": L("Italy", "イタリア", "이탈리아", "意大利"),
  "France": L("France", "フランス", "프랑스", "法国")
};

var TIER_LABELS = {
  "6pc": L("6pc", "6個", "6개", "6个"),
  "3pc": L("3pc", "3個", "3개", "3个"),
  "glass": L("glass", "グラス", "글라스", "杯"),
  "soda": L("soda", "ソーダ割り", "소다", "加苏打"),
  "bottle": L("bottle", "ボトル", "보틀", "瓶"),
  "add": L("add", "追加", "추가", "加")
};

var UI_STRINGS = {
  "nav.food": L("Food", "フード", "푸드", "美食"),
  "nav.drinks": L("Drinks", "ドリンク", "음료", "饮品"),

  "hero.food.eyebrow": L(
    "Honolulu's finest oyster bar",
    "ホノルル最高峰のオイスターバー",
    "호놀룰루 최고의 오이스터 바",
    "檀香山最顶级的生蚝吧"
  ),
  "hero.food.tagline": L(
    "These oysters are so fresh, they practically swim to your table. Tap any price to start building your order.",
    "このオイスターは驚くほど新鮮 — まるでテーブルまで泳いでくるよう。価格をタップして注文リストを作りましょう。",
    "이 오이스터는 테이블까지 헤엄쳐 올 만큼 신선합니다. 가격을 탭하면 주문 목록에 추가됩니다.",
    "这些生蚝新鲜到几乎能自己游到你桌上。点击价格即可开始添加到您的点单清单。"
  ),
  "hero.drinks.eyebrow": L(
    "Japanese & international selection",
    "日本酒と世界のセレクション",
    "일본 및 인터내셔널 셀렉션",
    "日本酒与国际精选"
  ),
  "hero.drinks.tagline": L(
    "Carefully selected from Japan's finest breweries and beyond — ask your server about tonight's pairing.",
    "日本各地の銘醸蔵から厳選 — 今夜のペアリングはスタッフにお気軽にご相談ください。",
    "일본 최고의 양조장에서 신중하게 선별했습니다 — 오늘의 페어링은 서버에게 문의해 주세요.",
    "精选自日本顶级酒窖与世界各地 — 欢迎向服务员咨询今晚的搭配推荐。"
  ),

  "hint.tapprice": L(
    "Tap a price to add it to your picks",
    "価格をタップしてピックに追加",
    "가격을 탭하여 픽에 추가하세요",
    "点击价格即可加入您的选单"
  ),

  "legend.food": L(
    "★ Chef's recommendation · tags show origin or sourcing · prices in USD",
    "★ シェフのおすすめ · タグは産地・仕入れ先を表示 · 価格は米ドル表示",
    "★ 셰프 추천 · 태그는 원산지를 나타냅니다 · 가격은 미국 달러 기준",
    "★ 主厨推荐 · 标签显示产地或采购来源 · 价格以美元计"
  ),
  "legend.drinks": L(
    "★ Chef's recommendation · CHILLED / WARM shows serving style · LOCAL is Hawaii-brewed",
    "★ シェフのおすすめ · 「冷酒」「燗」は提供スタイルを表示 · 「地元」はハワイ産",
    "★ 셰프 추천 · 냉주/온주는 제공 방식을 나타냅니다 · 로컬은 하와이산",
    "★ 主厨推荐 · 冰镇/温酒标示供应方式 · 本地表示夏威夷酿造"
  ),

  "footnote.disclaimer": L(
    "Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of food borne illness.",
    "生または十分に加熱されていない肉、鶏肉、魚介類、貝類、卵の摂取は、食中毒のリスクを高める可能性があります。",
    "덜 익히거나 익히지 않은 육류, 가금류, 해산물, 조개류, 또는 달걀을 섭취하면 식중독 위험이 높아질 수 있습니다.",
    "食用生的或未煮熟的肉类、禽类、海鲜、贝类或蛋类可能增加食源性疾病的风险。"
  ),

  "picks.one": L("1 pick · view", "1件選択中 · 表示", "1개 선택 · 보기", "已选1项 · 查看"),
  "picks.many": L("{n} picks · view", "{n}件選択中 · 表示", "{n}개 선택 · 보기", "已选{n}项 · 查看"),

  "sheet.title": L("Your picks", "あなたのピック", "내가 선택한 항목", "我的选单"),
  "sheet.subtitle": L(
    "Show this list to your server when you're ready to order.",
    "ご注文の際は、このリストをスタッフにお見せください。",
    "주문 준비가 되면 이 목록을 서버에게 보여주세요.",
    "准备点餐时，请将此清单展示给服务员。"
  ),
  "sheet.empty": L(
    "No picks yet. Tap any price on the menu to add it here.",
    "まだ選択がありません。メニューの価格をタップして追加しましょう。",
    "아직 선택한 항목이 없습니다. 메뉴의 가격을 탭하여 추가하세요.",
    "还没有选择任何项目。点击菜单中的价格即可添加到这里。"
  ),
  "sheet.total": L("Estimated total", "概算合計", "예상 합계", "预估总额"),
  "sheet.disclaimer": L(
    "Estimate only — add-ons like rice, bread, or extra toppings aren't included. This isn't an order placed with the kitchen; your server will confirm everything.",
    "こちらはあくまで概算です。ライス・パン・追加トッピングなどは含まれていません。これは厨房への注文ではなく、最終的な内容はスタッフがご確認いたします。",
    "이는 예상 금액일 뿐입니다 — 라이스, 빵, 추가 토핑 등은 포함되지 않습니다. 이는 주방에 전달된 주문이 아니며, 서버가 모든 내용을 확인해 드립니다.",
    "此为预估金额 — 不包含米饭、面包或额外配料等加项。这并非已提交厨房的订单，最终内容将由服务员为您确认。"
  ),
  "sheet.clear": L("Clear all", "すべて削除", "전체 삭제", "全部清除"),
  "sheet.done": L("Done", "完了", "완료", "完成"),

  "splash.skip": L("Skip", "スキップ", "건너뛰기", "跳过"),
  "splash.hint": L("Tap to continue", "タップして次へ", "탭하여 계속", "点击继续"),
  "splash.reclabel": L("Recommended tonight", "本日のおすすめ", "오늘의 추천", "今晚推荐"),
  "splash.cta": L("Let\u2019s choose", "選びに行く", "선택하러 가기", "开始选择"),
  "splash.title.eyebrow": L(
    "Waikiki\u2019s #1 oyster bar",
    "ワイキキ No.1 オイスターバー",
    "와이키키 1위 오이스터 바",
    "威基基第一生蚝吧"
  ),

  "meta.title": L(
    "Oyster Hale by Crush \u2014 Menu",
    "Oyster Hale by Crush \u2014 メニュー",
    "Oyster Hale by Crush \u2014 메뉴",
    "Oyster Hale by Crush \u2014 菜单"
  ),

  "lang.prompt": L("Choose your language", "言語を選択してください", "언어를 선택해 주세요", "请选择语言")
};

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    var val = UI_STRINGS[key];
    if (val) el.textContent = t(val);
  });
  document.documentElement.lang = CURRENT_LANG;
  var titleVal = UI_STRINGS["meta.title"];
  if (titleVal) document.title = t(titleVal);
}
