(function () {
  "use strict";

  var picks = []; // { key, name, unit, tierLabel, price, menu, catLabel }

  function escapeAttr(s) {
    return String(s).replace(/"/g, "&quot;");
  }

  function fmtPrice(n) {
    var num = Number(n);
    if (Math.round(num) === num) return "$" + num;
    return "$" + num.toFixed(2);
  }

  function pillKey(menuId, catId, itemName, tierLabel) {
    return menuId + "::" + catId + "::" + itemName + "::" + (tierLabel || "");
  }

  function renderTags(tags) {
    if (!tags || !tags.length) return "";
    return (
      '<div class="tags">' +
      tags
        .map(function (tag) {
          var cls = "tag";
          var low = tag.toLowerCase();
          if (low === "chilled" || low === "warm") cls += " serve";
          if (low === "local") cls += " local";
          var label = TAG_LABELS[tag] ? t(TAG_LABELS[tag]) : tag;
          return '<span class="' + cls + '">' + label + "</span>";
        })
        .join("") +
      "</div>"
    );
  }

  function renderItem(menuId, cat, item) {
    var nameText = t(item.name);
    var hasPhoto = !!item.imageUrl;
    var photoIcon = hasPhoto
      ? '<span class="photo-icon" data-photo-item="1" title="View photo">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
        '<rect x="3" y="5" width="18" height="14" rx="2"/>' +
        '<circle cx="12" cy="12" r="3"/>' +
        '<path d="M9 5l1.5-2h3L15 5"/>' +
        '</svg></span>'
      : '';
    var nameBits = (item.star ? '<span class="star">\u2605</span> ' : "") + nameText + photoIcon;
    if (item.unit) nameBits += ' <span class="unit">\u00b7 ' + t(item.unit) + "</span>";

    var priceHtml = "";
    if (item.priceStatic) {
      priceHtml = '<div class="price-row"><span class="price-static serif">' + t(item.priceStatic) + "</span></div>";
    } else if (item.priceTiers && item.priceTiers.length) {
      priceHtml =
        '<div class="price-row">' +
        item.priceTiers
          .map(function (tier) {
            var tierText = tier.label ? (t(TIER_LABELS[tier.label]) || tier.label) : "";
            var key = pillKey(menuId, cat.id, nameText, tier.label);
            var lbl = tierText ? '<span class="lbl">' + tierText + "</span>" : "";
            var unitForData = tierText || t(item.unit) || "";
            var nameEn = (typeof item.name === 'object' && item.name.en) ? item.name.en : nameText;
            return (
              '<button class="price-pill" data-key="' +
              escapeAttr(key) +
              '" data-menu="' +
              menuId +
              '" data-cat="' +
              cat.id +
              '" data-catlabel="' +
              escapeAttr(t(cat.label)) +
              '" data-name="' +
              escapeAttr(nameText) +
              '" data-name-en="' +
              escapeAttr(nameEn) +
              '" data-unit="' +
              escapeAttr(unitForData) +
              '" data-price="' +
              tier.price +
              '">' +
              lbl +
              '<span class="num serif">' +
              fmtPrice(tier.price) +
              "</span>" +
              '<svg class="chk" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg>' +
              "</button>"
            );
          })
          .join("") +
        "</div>";
    }

    return (
      '<div class="card' +
      (item.star ? " featured" : "") +
      '"' +
      (item.imageUrl ? ' data-image-url="' + escapeAttr(item.imageUrl) + '"' : '') +
      ' data-item-name="' + escapeAttr(nameText) + '"' +
      ' data-item-desc="' + escapeAttr(t(item.desc) || '') + '"' +
      '>' +
      '<div class="card-top"><div class="card-name">' +
      nameBits +
      "</div></div>" +
      renderTags(item.tags) +
      (item.desc ? '<div class="card-desc">' + t(item.desc) + "</div>" : "") +
      (item.note ? '<div class="card-note">' + t(item.note) + "</div>" : "") +
      priceHtml +
      "</div>"
    );
  }

  function renderCategory(menuId, cat) {
    var html = '<section class="catsection" id="' + cat.id + '">';
    html += '<div class="cathead"><h2 class="serif">' + t(cat.title) + "</h2></div>";
    if (cat.subtitle) html += '<div class="catsub">' + t(cat.subtitle) + "</div>";
    if (cat.note) html += '<div class="catnote">' + t(cat.note) + "</div>";
    html += '<div class="cards">' + cat.items.map(function (it) { return renderItem(menuId, cat, it); }).join("") + "</div>";
    if (cat.footer) html += '<div class="catnote" style="margin-top:12px;">' + t(cat.footer) + "</div>";
    html += "</section>";
    return html;
  }

  function scrollToCategory(catId) {
    var target = document.getElementById(catId);
    if (!target) return;
    var top = target.getBoundingClientRect().top + window.scrollY - 116;
    window.scrollTo({ top: top, behavior: "smooth" });
  }

  function renderMenu(menuId, categories, sectionsHostId, pillNavId) {
    var sectionsHost = document.getElementById(sectionsHostId);
    sectionsHost.innerHTML = categories.map(function (cat) { return renderCategory(menuId, cat); }).join("");

    var pillNav = document.getElementById(pillNavId);
    pillNav.innerHTML = categories
      .map(function (cat, i) {
        return '<button data-target="' + cat.id + '" class="' + (i === 0 ? "active" : "") + '">' + t(cat.label) + "</button>";
      })
      .join("");

    if (!pillNav.dataset.bound) {
      pillNav.addEventListener("click", function (e) {
        var btn = e.target.closest("button");
        if (!btn) return;
        scrollToCategory(btn.dataset.target);
      });
      pillNav.dataset.bound = "1";
    }

    var sections = categories.map(function (c) { return document.getElementById(c.id); });
    var pillButtons = Array.prototype.slice.call(pillNav.querySelectorAll("button"));

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var idx = sections.indexOf(entry.target);
            pillButtons.forEach(function (b) { b.classList.remove("active"); });
            if (pillButtons[idx]) {
              pillButtons[idx].classList.add("active");
              pillButtons[idx].scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
            }
          }
        });
      },
      { rootMargin: "-110px 0px -65% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { if (s) observer.observe(s); });

    if (!sectionsHost.dataset.bound) {
      sectionsHost.addEventListener("click", function (e) {
        var pill = e.target.closest(".price-pill");
        if (!pill) return;
        togglePick(pill);
      });
      sectionsHost.dataset.bound = "1";
    }
  }

  function rerenderAllMenus() {
    renderMenu("food", FOOD_MENU, "food-sections", "pillnav-food");
    renderMenu("drinks", DRINKS_MENU, "drinks-sections", "pillnav-drinks");
  }

  function togglePick(pill) {
    var key = pill.dataset.key;
    var idx = picks.findIndex(function (p) { return p.key === key; });
    if (idx >= 0) {
      picks.splice(idx, 1);
      pill.classList.remove("added");
    } else {
      picks.push({
        key: key,
        name: pill.dataset.name,
        nameEn: pill.dataset.nameEn || pill.dataset.name,
        unit: pill.dataset.unit,
        price: parseFloat(pill.dataset.price),
        catLabel: pill.dataset.catlabel
      });
      pill.classList.add("added");
      pill.style.transform = "scale(1.08)";
      setTimeout(function () { pill.style.transform = ""; }, 150);
    }
    syncAllPillsForKey(key);
    renderPicksBar();
  }

  function syncAllPillsForKey(key) {
    var isAdded = picks.some(function (p) { return p.key === key; });
    var pills = document.querySelectorAll('.price-pill[data-key="' + key.replace(/"/g, '\\"') + '"]');
    pills.forEach(function (p) { p.classList.toggle("added", isAdded); });
  }

  function renderPicksBar() {
    var bar = document.getElementById("picksbar");
    var count = document.getElementById("picksCount");
    var label = document.getElementById("picksLabel");
    count.textContent = picks.length;
    var template = picks.length === 1 ? t(UI_STRINGS["picks.one"]) : t(UI_STRINGS["picks.many"]);
    label.textContent = template.replace("{n}", picks.length);
    bar.classList.toggle("show", picks.length > 0);
    renderSheet();
  }

  function renderSheet() {
    var list = document.getElementById("sheetList");
    var total = document.getElementById("sheetTotal");
    if (!picks.length) {
      list.innerHTML = '<div class="sheet-empty">' + t(UI_STRINGS["sheet.empty"]) + "</div>";
      total.textContent = "$0";
      return;
    }
    list.innerHTML = picks
      .map(function (p) {
        var showEnSub = CURRENT_LANG !== "en" && p.nameEn && p.nameEn !== p.name;
        return (
          '<div class="sheet-item">' +
          '<div><div class="si-name">' +
          p.name +
          (showEnSub ? '<div class="si-name-en">' + p.nameEn + '</div>' : '') +
          "</div>" +
          '<div class="si-cat">' +
          p.catLabel +
          (p.unit ? " · " + p.unit : "") +
          "</div></div>" +
          '<div class="si-right"><span class="si-price serif">' +
          fmtPrice(p.price) +
          '</span><button class="si-remove" data-key="' +
          escapeAttr(p.key) +
          '" aria-label="Remove">' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
          "</button></div></div>"
        );
      })
      .join("");
    var sum = picks.reduce(function (acc, p) { return acc + p.price; }, 0);
    total.textContent = fmtPrice(Math.round(sum * 100) / 100);
  }

  function openSheet() {
    document.getElementById("sheet").classList.add("show");
    document.getElementById("scrim").classList.add("show");
  }
  function closeSheet() {
    document.getElementById("sheet").classList.remove("show");
    document.getElementById("scrim").classList.remove("show");
  }

  function switchToMenu(which) {
    var seg = document.getElementById("segmented");
    var foodMenu = document.getElementById("menu-food");
    var drinksMenu = document.getElementById("menu-drinks");
    var foodPills = document.getElementById("pillnav-food");
    var drinksPills = document.getElementById("pillnav-drinks");
    Array.prototype.slice.call(seg.querySelectorAll("button[data-menu]")).forEach(function (b) {
      b.classList.toggle("active", b.dataset.menu === which);
    });
    seg.classList.toggle("drinks-active", which === "drinks");
    var showFood = which === "food";
    foodMenu.hidden = !showFood;
    drinksMenu.hidden = showFood;
    foodPills.hidden = !showFood;
    drinksPills.hidden = showFood;
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  function initSegmented() {
    var seg = document.getElementById("segmented");
    seg.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-menu]");
      if (!btn) return;
      switchToMenu(btn.dataset.menu);
    });
  }

  var STORY_SLIDES = [
    { kind: "lang" },
    {
      kind: "title",
      eyebrowKey: "splash.title.eyebrow",
      title: 'Oyster <em>Hale</em>',
      tint: "rgba(210,163,62,0.10)"
    },
    {
      kind: "line",
      text: L(
        "Fresh oysters are what we\u2019re <span class=\"q\">known for</span> \u2014 ask what\u2019s shucking tonight.",
        "新鮮なオイスターこそ、私たちが<span class=\"q\">最も自信を持つ味</span> — 今夜のおすすめをスタッフにお尋ねください。",
        "신선한 오이스터는 우리가 <span class=\"q\">가장 자신하는 메뉴</span>입니다 — 오늘 밤 추천을 서버에게 물어보세요.",
        "新鲜生蚝正是我们<span class=\"q\">最自豪的招牌</span> — 不妨问问服务员今晚现开的是哪一种。"
      ),
      tint: "rgba(94,144,152,0.14)"
    },
    {
      kind: "line",
      text: L(
        "Most tables start with <span class=\"q\">oysters, a starter, and a roll</span> to share.",
        "多くのお客様は、<span class=\"q\">オイスター・前菜・ロール</span>をシェアしながらスタート。",
        "많은 테이블이 <span class=\"q\">오이스터, 스타터, 그리고 롤</span>을 나눠 먹는 것으로 시작합니다.",
        "大多数客人都会从<span class=\"q\">生蚝、前菜和一份卷物</span>开始，一起分享。"
      ),
      tint: "rgba(210,163,62,0.09)"
    },
    {
      kind: "line",
      text: L(
        "Pair anything raw with a <span class=\"q\">chilled sake</span> \u2014 your server loves making the match.",
        "生ものには<span class=\"q\">冷酒</span>の組み合わせがおすすめ — ペアリングはスタッフにお任せください。",
        "회와 함께라면 <span class=\"q\">시원한 사케</span>가 잘 어울립니다 — 서버가 기꺼이 페어링을 추천해 드립니다.",
        "生食类与<span class=\"q\">冰镇日本酒</span>是绝佳搭配 — 服务员很乐意为您推荐。"
      ),
      tint: "rgba(193,96,74,0.10)"
    },
    { kind: "final", tint: "rgba(10,26,30,0)" }
  ];

  var SPLASH_RECS = [
    { label: L("Oysters", "オイスター", "오이스터", "生蚝"), desc: L("Raw, baked, or our signature shooters.", "生牡蠣・グリル・名物のショットスタイルまで。", "생, 구운 것, 그리고 시그니처 샷 스타일까지.", "生食、烤制，或我们招牌的一口生蚝特调。"), menu: "food", cat: "raw-oyster" },
    { label: L("Starters", "前菜", "스타터", "前菜"), desc: L("Carpaccio, poke, and ceviche to share.", "カルパッチョ・ポキ・セビーチェをシェアして。", "카르파초, 포케, 세비체를 함께 나눠보세요.", "卡帕乔、波奇沙拉、酸橘汁腌鱼，一起分享。"), menu: "food", cat: "starters" },
    { label: L("Sushi rolls", "寿司ロール", "스시 롤", "寿司卷"), desc: L("From the Volcano Roll to Hale Supreme.", "ヴォルケーノロールからHale Supremeまで。", "볼케이노 롤부터 할레 수프림까지.", "从火山卷到Hale Supreme，应有尽有。"), menu: "food", cat: "sushi-roll" }
  ];

  var LANG_PROMPTS = ["en", "ja", "ko", "zh"].map(function (code) { return UI_STRINGS["lang.prompt"][code]; });

  var storyIdx = -1;
  var storyTimer = null;

  function wordCount(s) {
    return String(s).replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;
  }

  function slideDuration(slide) {
    if (slide.kind === "title") return 3400;
    var raw = t(slide.text).replace(/<[^>]+>/g, "");
    var isCJK = CURRENT_LANG === "ja" || CURRENT_LANG === "ko" || CURRENT_LANG === "zh";
    if (isCJK) {
      var chars = raw.replace(/\s+/g, "").length;
      return Math.max(3200, Math.min(6400, chars * 160));
    }
    var words = wordCount(raw);
    return Math.max(3000, Math.min(6200, words * 430));
  }

  function renderSlideContent(slide) {
    if (slide.kind === "lang") {
      return (
        '<div class="lang-prompt">' +
        LANG_PROMPTS.map(function (p) { return "<div>" + p + "</div>"; }).join("") +
        "</div>" +
        '<div class="lang-grid" id="langGrid">' +
        LANGS.map(function (l) { return '<button class="lang-btn" data-code="' + l.code + '">' + l.native + "</button>"; }).join("") +
        "</div>"
      );
    }
    if (slide.kind === "title") {
      return '<div class="slide-eyebrow">' + t(UI_STRINGS[slide.eyebrowKey]) + '</div><div class="slide-title serif">' + slide.title + '</div><div class="slide-byline">by Crush</div>';
    }
    if (slide.kind === "line") {
      return '<div class="slide-line serif">' + t(slide.text) + "</div>";
    }
    return (
      '<div class="splash-reclabel">' +
      t(UI_STRINGS["splash.reclabel"]) +
      '</div><div class="splash-cards-wrap" id="splashCards"></div>' +
      '<button class="splash-cta" id="splashCta">' +
      t(UI_STRINGS["splash.cta"]) +
      ' <span aria-hidden="true">\u2192</span></button>'
    );
  }

  function buildProgressBar() {
    var wrap = document.getElementById("splashProgress");
    wrap.innerHTML = STORY_SLIDES.map(function () { return '<div class="seg"><span class="fill"></span></div>'; }).join("");
  }

  function updateProgress(i) {
    var segs = document.querySelectorAll("#splashProgress .seg");
    segs.forEach(function (seg, idx) {
      seg.classList.remove("done");
      var fill = seg.querySelector(".fill");
      fill.style.animation = "none";
      fill.style.width = "0%";
      if (idx < i) {
        seg.classList.add("done");
      } else if (idx === i) {
        if (STORY_SLIDES[i].kind === "final" || STORY_SLIDES[i].kind === "lang") {
          seg.classList.add("done");
        } else {
          var dur = slideDuration(STORY_SLIDES[i]);
          requestAnimationFrame(function () {
            fill.style.animation = "fillBar " + dur + "ms linear forwards";
          });
        }
      }
    });
  }

  function renderFinalCards() {
    var wrap = document.getElementById("splashCards");
    if (!wrap) return;
    wrap.innerHTML = SPLASH_RECS.map(function (r) {
      return (
        '<button class="splash-card" data-menu="' +
        r.menu +
        '" data-cat="' +
        r.cat +
        '"><div><div class="sc-name">' +
        t(r.label) +
        '</div><div class="sc-desc">' +
        t(r.desc) +
        "</div></div>" +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 6l6 6-6 6"/></svg></button>'
      );
    }).join("");

    wrap.querySelectorAll(".splash-card").forEach(function (btn) {
      btn.addEventListener("click", function () {
        closeSplash();
        setTimeout(function () {
          if (btn.dataset.menu === "drinks") switchToMenu("drinks");
          scrollToCategory(btn.dataset.cat);
        }, 380);
      });
    });

    var cta = document.getElementById("splashCta");
    if (cta) cta.addEventListener("click", closeSplash);
  }

  function bindLangButtons() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        CURRENT_LANG = btn.dataset.code;
        applyI18n();
        rerenderAllMenus();
        goToSlide(storyIdx + 1);
      });
    });
  }

  function goToSlide(i) {
    clearTimeout(storyTimer);
    if (i < 0) i = 0;
    if (i >= STORY_SLIDES.length) { closeSplash(); return; }
    storyIdx = i;

    var stage = document.getElementById("splashStage");
    stage.innerHTML = '<div class="splash-slide" id="curSlide">' + renderSlideContent(STORY_SLIDES[i]) + "</div>";
    var el = document.getElementById("curSlide");
    requestAnimationFrame(function () { el.classList.add("show"); });

    document.getElementById("splashTint").style.background = STORY_SLIDES[i].tint || "transparent";
    var kind = STORY_SLIDES[i].kind;
    document.getElementById("splashHint").style.display = (kind === "final" || kind === "lang") ? "none" : "block";
    updateProgress(i);

    if (kind === "final") {
      renderFinalCards();
    } else if (kind === "lang") {
      bindLangButtons();
    } else {
      storyTimer = setTimeout(function () { goToSlide(i + 1); }, slideDuration(STORY_SLIDES[i]));
    }
  }

  function seedBubbles() {
    var bg = document.getElementById("splashBg");
    var n = 13;
    for (var k = 0; k < n; k++) {
      var b = document.createElement("div");
      b.className = "bubble";
      var size = 4 + Math.random() * 10;
      var left = Math.random() * 100;
      var dur = 9 + Math.random() * 9;
      var delay = Math.random() * 10;
      var drift = (Math.random() * 40 - 20).toFixed(0) + "px";
      b.style.width = size + "px";
      b.style.height = size + "px";
      b.style.left = left + "%";
      b.style.setProperty("--drift", drift);
      b.style.animationDuration = dur + "s";
      b.style.animationDelay = "-" + delay + "s";
      bg.appendChild(b);
    }
  }

  function closeSplash() {
    clearTimeout(storyTimer);
    var splash = document.getElementById("splash");
    splash.classList.add("hide");
    document.body.style.overflow = "";
    setTimeout(function () { splash.hidden = true; }, 420);
  }

  function initSplash() {
    document.body.style.overflow = "hidden";
    seedBubbles();
    buildProgressBar();
    goToSlide(0);

    document.getElementById("splashSkip").addEventListener("click", closeSplash);

    document.getElementById("splashStage").addEventListener("click", function (e) {
      if (e.target.closest(".splash-card, .splash-cta, .lang-btn")) return;
      var w = window.innerWidth;
      var goingNext = e.clientX >= w * 0.32;
      var kind = STORY_SLIDES[storyIdx].kind;
      if (goingNext && (kind === "final" || kind === "lang")) return;
      goToSlide(storyIdx + (goingNext ? 1 : -1));
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyI18n();
    rerenderAllMenus();
    initSegmented();
    initSplash();

    document.getElementById("picksbarBtn").addEventListener("click", openSheet);
    document.getElementById("scrim").addEventListener("click", closeSheet);
    document.getElementById("btnCloseSheet").addEventListener("click", closeSheet);
    document.getElementById("btnClear").addEventListener("click", function () {
      picks = [];
      document.querySelectorAll(".price-pill.added").forEach(function (p) { p.classList.remove("added"); });
      renderPicksBar();
    });
    document.getElementById("sheetList").addEventListener("click", function (e) {
      var btn = e.target.closest(".si-remove");
      if (!btn) return;
      var key = btn.dataset.key;
      picks = picks.filter(function (p) { return p.key !== key; });
      syncAllPillsForKey(key);
      renderPicksBar();
    });

    // ── Photo Popup ───────────────────────────────────────────
    var currentPhotoItem = null;

    function openPhotoPopup(card) {
      var popup   = document.getElementById("photoPopup");
      var imgWrap = document.getElementById("photoPopupImgWrap");
      var nameEl  = document.getElementById("photoPopupName");
      var descEl  = document.getElementById("photoPopupDesc");
      var actions = document.getElementById("photoPopupActions");

      var imageUrl = card.dataset.imageUrl;
      var name     = card.dataset.itemName;
      var desc     = card.dataset.itemDesc;
      currentPhotoItem = card;

      // Image area
      var closeBtn = '<button class="photo-popup-close" id="photoPopupClose" aria-label="Close">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>';
      if (imageUrl) {
        imgWrap.innerHTML = closeBtn + '<img src="' + imageUrl + '" alt="' + escapeAttr(name) + '">';
      } else {
        imgWrap.innerHTML = closeBtn +
          '<div class="photo-popup-placeholder">' +
          '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M9 5l1.5-2h3L15 5"/></svg>' +
          '<span>No photo yet</span></div>';
      }
      document.getElementById("photoPopupClose").addEventListener("click", closePhotoPopup);

      nameEl.textContent = name;
      descEl.textContent = desc;

      // Price buttons — clone from the card
      var pills = card.querySelectorAll(".price-pill");
      actions.innerHTML = "";
      pills.forEach(function (pill) {
        var btn = document.createElement("button");
        btn.className = "price-pill" + (pill.classList.contains("added") ? " added" : "");
        btn.innerHTML = pill.innerHTML;
        btn.dataset.key      = pill.dataset.key;
        btn.dataset.menu     = pill.dataset.menu;
        btn.dataset.cat      = pill.dataset.cat;
        btn.dataset.catlabel = pill.dataset.catlabel;
        btn.dataset.name     = pill.dataset.name;
        btn.dataset.nameEn   = pill.dataset.nameEn || pill.dataset.name;
        btn.dataset.unit     = pill.dataset.unit;
        btn.dataset.price    = pill.dataset.price;
        btn.addEventListener("click", function () {
          togglePick(btn);
          // sync state back to card pill
          var cardPill = card.querySelector('.price-pill[data-key="' + btn.dataset.key + '"]');
          if (cardPill) cardPill.classList.toggle("added", btn.classList.contains("added"));
        });
        actions.appendChild(btn);
      });

      popup.classList.add("show");
      document.body.style.overflow = "hidden";
    }

    function closePhotoPopup() {
      document.getElementById("photoPopup").classList.remove("show");
      document.body.style.overflow = "";
      currentPhotoItem = null;
    }

    document.getElementById("photoPopupScrim").addEventListener("click", closePhotoPopup);

    // Delegate: photo icon click → open popup
    document.addEventListener("click", function (e) {
      var icon = e.target.closest(".photo-icon");
      if (!icon) return;
      e.stopPropagation();
      var card = icon.closest(".card");
      if (card) openPhotoPopup(card);
    });
  });
})();
