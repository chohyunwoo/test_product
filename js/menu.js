const themeToggle = document.getElementById("themeToggle");
  const themeRoot = document.documentElement;
  const menuGrid = document.getElementById("menuGrid");
  const menuPickBtn = document.getElementById("menuPickBtn");
  const langSelectTop = document.getElementById("langSelectTop");

  const i18n = {
    ko: {
      title: "메뉴 추천",
      description: "TheMealDB 레시피를 기반으로 오늘의 메뉴를 추천합니다.",
      badge_menu: "MENU",
      brand_title: "메뉴 추천",
      nav_home: "홈으로",
      nav_animal: "동물상 테스트",
      nav_menu: "메뉴 추천",
      nav_about: "사이트 소개",
      menu_label: "메뉴",
      menu_animal: "동물상 테스트",
      menu_menu: "메뉴 추천",
      menu_label: "메뉴",
      menu_animal: "동물상 테스트",
      menu_menu: "메뉴 추천",
      settings_label: "설정",
      settings_language: "언어",
      settings_theme: "테마",
      menu_title: "오늘의 메뉴 추천",
      menu_desc: "TheMealDB 레시피에서 오늘의 메뉴를 랜덤으로 추천해요. 마음에 드는 메뉴를 골라보세요.",
      menu_reroll: "다시 추천하기",
      menu_loading: "레시피를 불러오는 중...",
      menu_error: "레시피를 불러오지 못해 기본 추천으로 대체했어요.",
      menu_source: "레시피 보기",
      footer_about: "사이트 소개",
      footer_privacy: "개인정보 처리방침",
      footer_terms: "이용약관",
      footer_menu_request: "메뉴 추가 요청",
      footer_partner: "제휴 문의",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark",
        geo_title: "메뉴 추천은 무엇인가요?",
        geo_summary: "test-product-9ll.pages.dev의 메뉴 추천은 버튼 하나로 오늘의 메뉴 아이디어를 제공합니다.",
        geo_def_title: "메뉴 추천이란 무엇인가요?",
        geo_def_desc: "간단한 선택만으로 랜덤 메뉴를 제안하는 기능입니다.",
        geo_how_title: "어떻게 이용하나요?",
        geo_how_summary: "버튼을 누르면 즉시 추천 결과가 표시됩니다.",
        geo_how_step1: "메뉴 추천 섹션으로 이동합니다.",
        geo_how_step2: "추천 버튼을 누릅니다.",
        geo_how_step3: "추천 결과와 출처를 확인합니다.",
        geo_result_title: "결과는 어떻게 나오나요?",
        geo_result_desc: "무작위로 선택된 메뉴가 표시됩니다.",
        faq_title: "자주 묻는 질문(FAQ)",
        faq_summary: "메뉴 추천 기능 관련 질문을 모았습니다.",
        faq_q1: "Q. 추천 메뉴는 매번 바뀌나요?",
        faq_a1: "A. 네, 버튼을 누를 때마다 새로 추천됩니다.",
        faq_q2: "Q. 특정 메뉴를 지정할 수 있나요?",
        faq_a2: "A. 현재는 랜덤 추천만 제공합니다.",
        faq_q3: "Q. 출처 표시는 무엇인가요?",
        faq_a3: "A. 메뉴 정보의 출처를 함께 표기합니다.",
    },
    de: {
      title: "Menü-Empfehlung",
      description: "Menüvorschläge basierend auf TheMealDB-Rezepten.",
      badge_menu: "MENU",
      brand_title: "Menü-Empfehlung",
      nav_home: "Zur Startseite",
      nav_animal: "Tiergesichtstest",
      nav_menu: "Menü-Empfehlung",
      nav_about: "Über die Seite",
      menu_label: "Menü",
      menu_animal: "Tiergesichtstest",
      menu_menu: "Menü-Empfehlung",
      menu_label: "Menü",
      menu_animal: "Tiergesichtstest",
      menu_menu: "Menü-Empfehlung",
      settings_label: "Einstellungen",
      settings_language: "Sprache",
      settings_theme: "Design",
      menu_title: "Menü des Tages",
      menu_desc: "Zufällige Empfehlungen aus TheMealDB. Wähle dein heutiges Menü.",
      menu_reroll: "Neu empfehlen",
      menu_loading: "Rezepte werden geladen...",
      menu_error: "Rezepte nicht verfügbar, Standardvorschläge werden gezeigt.",
      menu_source: "Rezept ansehen",
      footer_about: "Über die Seite",
      footer_privacy: "Datenschutz",
      footer_terms: "Nutzungsbedingungen",
      footer_menu_request: "Menü-Anfrage",
      footer_partner: "Partnerschaft",
      footer_copyright: "© 2026 TodayLab. Alle Rechte vorbehalten.",
      theme_light: "Hell",
      theme_dark: "Dunkel",
        geo_title: "Was ist die Menü-Empfehlung?",
        geo_summary: "Die Menü-Empfehlung auf test-product-9ll.pages.dev liefert mit einem Klick eine Idee.",
        geo_def_title: "Was ist eine Menü-Empfehlung?",
        geo_def_desc: "Sie schlägt eine zufällige Menüidee mit wenig Eingabe vor.",
        geo_how_title: "Wie funktioniert es?",
        geo_how_summary: "Button drücken und sofort eine Empfehlung sehen.",
        geo_how_step1: "Zum Menü-Empfehlungsbereich gehen.",
        geo_how_step2: "Empfehlungs-Button drücken.",
        geo_how_step3: "Ergebnis und Quelle ansehen.",
        geo_result_title: "Wie wird das Ergebnis angezeigt?",
        geo_result_desc: "Ein zufällig ausgewähltes Menü wird angezeigt.",
        faq_title: "Häufige Fragen (FAQ)",
        faq_summary: "Fragen zur Menü-Empfehlung.",
        faq_q1: "Q. Ändert sich die Empfehlung jedes Mal?",
        faq_a1: "A. Ja, bei jedem Klick neu.",
        faq_q2: "Q. Kann ich ein bestimmtes Menü wählen?",
        faq_a2: "A. Noch nicht, aktuell nur Zufallsempfehlungen.",
        faq_q3: "Q. Was bedeutet die Quellenangabe?",
        faq_a3: "A. Sie zeigt die Quelle der Menüinfo an.",
    },
    ja: {
      title: "メニュー提案",
      description: "TheMealDBのレシピから今日のメニューを提案します。",
      badge_menu: "MENU",
      brand_title: "メニュー提案",
      nav_home: "ホームへ",
      nav_animal: "動物顔テスト",
      nav_menu: "メニュー提案",
      nav_about: "サイト紹介",
      menu_label: "メニュー",
      menu_animal: "動物顔テスト",
      menu_menu: "メニュー提案",
      menu_label: "メニュー",
      menu_animal: "動物顔テスト",
      menu_menu: "メニュー提案",
      settings_label: "設定",
      settings_language: "言語",
      settings_theme: "テーマ",
      menu_title: "今日のメニュー提案",
      menu_desc: "TheMealDBのレシピからランダムに提案します。気に入ったメニューを選んでください。",
      menu_reroll: "もう一度提案",
      menu_loading: "レシピを読み込み中...",
      menu_error: "レシピ取得に失敗したため、代替メニューを表示します。",
      menu_source: "レシピを見る",
      footer_about: "サイト紹介",
      footer_privacy: "プライバシーポリシー",
      footer_terms: "利用規約",
      footer_menu_request: "メニュー追加依頼",
      footer_partner: "提携問い合わせ",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark",
        geo_title: "メニュー提案とは？",
        geo_summary: "test-product-9ll.pages.dev のメニュー提案は、ワンクリックで今日のアイデアを提示します。",
        geo_def_title: "メニュー提案とは何ですか？",
        geo_def_desc: "少ない入力でランダムなメニューを提案する機能です。",
        geo_how_title: "使い方は？",
        geo_how_summary: "ボタンを押すとすぐに提案が表示されます。",
        geo_how_step1: "メニュー提案セクションへ移動します。",
        geo_how_step2: "提案ボタンを押します。",
        geo_how_step3: "結果と出典を確認します。",
        geo_result_title: "結果はどう表示されますか？",
        geo_result_desc: "ランダムに選ばれたメニューが表示されます。",
        faq_title: "よくある質問（FAQ）",
        faq_summary: "メニュー提案に関する質問をまとめました。",
        faq_q1: "Q. 毎回結果は変わりますか？",
        faq_a1: "A. はい、クリックするたびに生成されます。",
        faq_q2: "Q. 特定のメニューを選べますか？",
        faq_a2: "A. 現在はランダムのみです。",
        faq_q3: "Q. 出典表示とは？",
        faq_a3: "A. メニュー情報の出典を示します。",
    },
    en: {
      title: "Menu Picks",
      description: "Daily menu picks powered by TheMealDB recipes.",
      badge_menu: "MENU",
      brand_title: "Menu Picks",
      nav_home: "Home",
      nav_animal: "Animal Face Test",
      nav_menu: "Menu Picks",
      nav_about: "About",
      menu_label: "Menu",
      menu_animal: "Animal Face Test",
      menu_menu: "Menu Picks",
      menu_label: "Menu",
      menu_animal: "Animal Face Test",
      menu_menu: "Menu Picks",
      settings_label: "Settings",
      settings_language: "Language",
      settings_theme: "Theme",
      menu_title: "Today's Menu Picks",
      menu_desc: "Random picks powered by TheMealDB recipes. Choose one for today.",
      menu_reroll: "Pick Again",
      menu_loading: "Loading recipes...",
      menu_error: "Couldn't reach the recipe API, showing fallback picks.",
      menu_source: "View recipe",
      footer_about: "About",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms",
      footer_menu_request: "Menu Request",
      footer_partner: "Partnership",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark",
        geo_title: "What is the menu recommendation?",
        geo_summary: "Menu recommendations on test-product-9ll.pages.dev provide a quick idea with one click.",
        geo_def_title: "What is a menu recommendation?",
        geo_def_desc: "It suggests a random menu choice with minimal input.",
        geo_how_title: "How do I use it?",
        geo_how_summary: "Press the button to see a recommendation instantly.",
        geo_how_step1: "Go to the menu recommendation section.",
        geo_how_step2: "Press the recommend button.",
        geo_how_step3: "Check the result and the source.",
        geo_result_title: "How are results shown?",
        geo_result_desc: "A randomly chosen menu is displayed.",
        faq_title: "FAQ",
        faq_summary: "Questions about menu recommendations.",
        faq_q1: "Q. Do recommendations change every time?",
        faq_a1: "A. Yes, a new pick is generated each time.",
        faq_q2: "Q. Can I select a specific menu?",
        faq_a2: "A. Not yet; only random picks are available.",
        faq_q3: "Q. What does the source label mean?",
        faq_a3: "A. It shows the source of the menu info.",
    }
  };

  let currentLang = localStorage.getItem("lang") || "ko";

  const fallbackMenuOptions = [
    {
      title: { ko: "매운 칼국수", en: "Spicy Kalguksu" },
      desc: { ko: "기운이 떨어질 때 따뜻하게 회복하기 좋아요.", en: "Warm soup to reset on low-energy days." },
      tag: { ko: "따뜻함", en: "Warm" }
    },
    {
      title: { ko: "연어 포케", en: "Salmon Poke" },
      desc: { ko: "집중이 필요한 날에 가볍게 즐기기 좋아요.", en: "Light but satisfying when you need focus." },
      tag: { ko: "가볍게", en: "Light" }
    },
    {
      title: { ko: "트러플 크림 파스타", en: "Truffle Cream Pasta" },
      desc: { ko: "오늘은 작은 사치를 즐겨도 좋아요.", en: "A small treat for yourself today." },
      tag: { ko: "위로", en: "Comfort" }
    },
    {
      title: { ko: "숯불 닭갈비", en: "Charcoal Dakgalbi" },
      desc: { ko: "에너지가 필요할 때 과감한 선택이에요.", en: "A bold meal when you need energy." },
      tag: { ko: "에너지", en: "Energy" }
    },
    {
      title: { ko: "새우 로제 리소토", en: "Shrimp Rose Risotto" },
      desc: { ko: "부드럽고 살짝 매콤해 기분 전환에 좋아요.", en: "Creamy with a hint of spice for a mood lift." },
      tag: { ko: "리프레시", en: "Refresh" }
    },
    {
      title: { ko: "불고기 비빔밥", en: "Bulgogi Bibimbap" },
      desc: { ko: "든든한 한 그릇이 생각날 때 좋아요.", en: "Perfect when you want a hearty bowl." },
      tag: { ko: "든든함", en: "Hearty" }
    },
    {
      title: { ko: "치킨 샐러드", en: "Chicken Salad" },
      desc: { ko: "가볍지만 단백질이 풍부해 균형에 좋아요.", en: "Light yet protein-rich for balance." },
      tag: { ko: "균형", en: "Balance" }
    },
    {
      title: { ko: "매운 돼지덮밥", en: "Spicy Pork Rice Bowl" },
      desc: { ko: "매콤하게 오후 에너지를 끌어올려보세요.", en: "Boost your afternoon with a spicy kick." },
      tag: { ko: "활력", en: "Energy" }
    }
  ];

  const MEALDB_RANDOM_ENDPOINT = "https://www.themealdb.com/api/json/v1/1/random.php";

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function extractIngredients(meal, limit = 4) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const value = meal[`strIngredient${i}`];
      if (value && value.trim()) ingredients.push(value.trim());
      if (ingredients.length >= limit) break;
    }
    return ingredients;
  }

  function formatMeal(meal) {
    const ingredients = extractIngredients(meal, 4);
    const tags = [meal.strCategory, meal.strArea].filter(Boolean);
    return {
      title: { ko: meal.strMeal, en: meal.strMeal },
      desc: {
        ko: ingredients.length ? `핵심 재료: ${ingredients.join(", ")}` : "오늘 한 번 도전해볼 만한 레시피예요.",
        en: ingredients.length ? `Key ingredients: ${ingredients.join(", ")}` : "A recipe worth trying today."
      },
      tags,
      image: meal.strMealThumb || "",
      link: meal.strSource || meal.strYoutube || ""
    };
  }

  async function fetchRandomMeal() {
    const response = await fetch(MEALDB_RANDOM_ENDPOINT);
    if (!response.ok) throw new Error("Meal API error");
    const data = await response.json();
    return data && data.meals ? data.meals[0] : null;
  }

  async function fetchMenuPicks(count = 4) {
    const picks = [];
    const seen = new Set();
    let attempts = 0;

    while (picks.length < count && attempts < count * 3) {
      attempts += 1;
      const meal = await fetchRandomMeal();
      if (!meal || seen.has(meal.idMeal)) continue;
      seen.add(meal.idMeal);
      picks.push(formatMeal(meal));
    }

    return picks;
  }

  function renderMenuCard(item) {
    const title = escapeHTML(item.title[currentLang] || item.title.en || "");
    const desc = escapeHTML(item.desc[currentLang] || item.desc.en || "");
    const tags = item.tags && item.tags.length
      ? item.tags
      : [currentLang === "ko" ? "레시피" : "Recipe"];
    const imgMarkup = item.image
      ? `<img class="menu-thumb" src="${escapeHTML(item.image)}" alt="${title}" loading="lazy" />`
      : `<div class="menu-thumb"></div>`;
    const tagMarkup = tags
      .map(tag => `<span class="tag">${escapeHTML(tag)}</span>`)
      .join("");
    const linkMarkup = item.link
      ? `<a class="menu-link" href="${escapeHTML(item.link)}" target="_blank" rel="noopener">${i18n[currentLang].menu_source}</a>`
      : "";

    return `
      <div class="menu-card">
        ${imgMarkup}
        <h3>${title}</h3>
        <p>${desc}</p>
        <div class="menu-meta">${tagMarkup}</div>
        ${linkMarkup}
      </div>
    `;
  }

  function shuffle(list) {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  async function renderMenu() {
    if (!menuGrid) return;

    menuGrid.innerHTML = `
      <div class="menu-card menu-alert">
        <p>${i18n[currentLang].menu_loading}</p>
      </div>
    `;

    let picks = [];
    try {
      picks = await fetchMenuPicks(4);
    } catch (error) {
      picks = [];
    }

    if (!picks.length) {
      const fallback = shuffle(fallbackMenuOptions).slice(0, 4).map(item => ({
        title: item.title,
        desc: item.desc,
        tags: [item.tag[currentLang]],
        image: "",
        link: ""
      }));

      menuGrid.innerHTML = `
        <div class="menu-card menu-alert">
          <p>${i18n[currentLang].menu_error}</p>
        </div>
      ` + fallback.map(renderMenuCard).join("");
      return;
    }

    menuGrid.innerHTML = picks.map(renderMenuCard).join("");
  }

  function applyTheme(theme) {
    if (theme === "light") {
      themeRoot.setAttribute("data-theme", "light");
      themeToggle.textContent = "🌙";
    } else {
      themeRoot.removeAttribute("data-theme");
      themeToggle.textContent = "☀️";
    }
  }

  function initTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      applyTheme("dark");
      return;
    }
    applyTheme("light");
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
    if (langSelectTop) langSelectTop.value = lang;

    document.title = i18n[lang].title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", i18n[lang].description);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (i18n[lang][key]) el.textContent = i18n[lang][key];
    });

    const theme = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark") applyTheme(theme);
    renderMenu();
  }

  if (menuPickBtn) menuPickBtn.addEventListener("click", renderMenu);

  themeToggle.onclick = () => {
    const isLight = themeRoot.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem("theme", next);
  };

  if (langSelectTop) {
    langSelectTop.addEventListener("change", (event) => {
      applyLanguage(event.target.value);
    });
  }

  initTheme();
  applyLanguage(currentLang);



