const langSelectTop = document.getElementById("langSelectTop");
  const themeToggle = document.getElementById("themeToggle");
  const themeRoot = document.documentElement;

  const i18n = {
    ko: {
      title: "사이트 소개",
      description: "사이트 목적, 제공 기능, 운영 방식에 대한 소개 페이지입니다.",
      badge_info: "INFO",
      brand_title: "사이트 소개",
      nav_home: "홈으로",
      nav_animal: "동물상 테스트",
      nav_menu: "메뉴 추천",
      menu_label: "메뉴",
      menu_animal: "동물상 테스트",
      menu_menu: "메뉴 추천",
      menu_label: "메뉴",
      menu_animal: "동물상 테스트",
      menu_menu: "메뉴 추천",
      settings_label: "설정",
      settings_language: "언어",
      settings_theme: "테마",
      intro_title: "이 사이트는 어떤 곳인가요?",
      intro_desc: "오늘의 운세, 로또 번호 추천, 메뉴 추천, 동물상 테스트를 한 곳에서 즐길 수 있는 엔터테인먼트형 서비스입니다.",
      intro_note: "모든 기능은 참고용으로 제공되며, 재미와 일상의 영감을 위한 콘텐츠입니다.",
      feature_title: "주요 기능",
      feature_list: "- 오늘의 운세: 별자리 기반 운세를 제공합니다.<br />- 로또 추첨: 1~45 사이 번호를 랜덤으로 추천합니다.<br />- 메뉴 추천: 일상에 맞는 식사 아이디어를 제안합니다.<br />- 동물상 테스트: 사진을 업로드하면 동물상 확률을 분석합니다.",
      contact_title: "문의",
      contact_desc: "제휴 문의는 메인 페이지의 문의 폼을 통해 접수해주세요.",
      footer_privacy: "개인정보 처리방침",
      footer_terms: "이용약관",
      footer_menu_request: "메뉴 추가 요청",
      footer_partner: "제휴 문의",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark",
        geo_goal_title: "? ???? ?? ??? ?? ????",
        geo_goal_summary: "test-product-9ll.pages.dev? ?? ??? ?? ? ?? ????? ??? ??? ??.",
        geo_def_title: "test-product-9ll.pages.dev? ?????",
        geo_def_desc: "test-product-9ll.pages.dev? ??? ??, ??, ?? ??, ??? ???? ?? ?????? ????.",
        geo_feature_title: "?? ??? ??????",
        geo_feature_summary: "?? ??? ?? ????.",
        geo_feature_1: "??? ??",
        geo_feature_2: "?? ?? ??",
        geo_feature_3: "?? ??",
        geo_feature_4: "??? ???",
        geo_how_title: "?? ??? ??????",
        geo_how_summary: "?? ??? ????.",
        geo_how_step1: "??? ??? ??? ????.",
        geo_how_step2: "??? ?? ??? ????.",
        geo_how_step3: "??? ??? ????.",
        faq_title: "?? ?? ??(FAQ)",
        faq_summary: "test-product-9ll.pages.dev ?? ??? ????.",
        faq_q1: "Q. ????? ??????",
        faq_a1: "A. ?? ??? ?? ??? ? ??.",
        faq_q2: "Q. ?? ???????",
        faq_a2: "A. ?? ???? ??? ??? ? ??.",
        faq_q3: "Q. ??? ??? ????",
        faq_a3: "A. ??? ?? ??? ?? ???? ??? ??.",
    },
    de: {
      title: "Über die Seite",
      description: "Einführung in Zweck, Funktionen und Betrieb der Seite.",
      badge_info: "INFO",
      brand_title: "Über die Seite",
      nav_home: "Zur Startseite",
      nav_animal: "Tiergesichtstest",
      nav_menu: "Menü-Empfehlung",
      menu_label: "Menü",
      menu_animal: "Tiergesichtstest",
      menu_menu: "Menü-Empfehlung",
      menu_label: "Menü",
      menu_animal: "Tiergesichtstest",
      menu_menu: "Menü-Empfehlung",
      settings_label: "Einstellungen",
      settings_language: "Sprache",
      settings_theme: "Design",
      intro_title: "Worum geht es auf dieser Seite?",
      intro_desc: "Ein Entertainment-Hub für Tageshoroskope, Lottozahlen, Menüideen und einen Tiergesichtstest.",
      intro_note: "Alle Funktionen sind zur Unterhaltung und als Orientierung gedacht.",
      feature_title: "Hauptfunktionen",
      feature_list: "- Tageshoroskop: Horoskop nach Sternzeichen.<br />- Lotto: Zufallszahlen zwischen 1 und 45.<br />- Menü: Ideen für den Alltag.<br />- Tiergesichtstest: Foto hochladen und Ähnlichkeiten sehen.",
      contact_title: "Kontakt",
      contact_desc: "Für Partnerschaften bitte das Formular auf der Startseite nutzen.",
      footer_privacy: "Datenschutz",
      footer_terms: "Nutzungsbedingungen",
      footer_menu_request: "Menü-Anfrage",
      footer_partner: "Partnerschaft",
      footer_copyright: "© 2026 TodayLab. Alle Rechte vorbehalten.",
      theme_light: "Hell",
      theme_dark: "Dunkel",
        geo_goal_title: "Welches Ziel hat diese Seite?",
        geo_goal_summary: "test-product-9ll.pages.dev bietet kurze und schnelle Erlebnisse f?r Horoskop und Empfehlungen.",
        geo_def_title: "Was ist test-product-9ll.pages.dev?",
        geo_def_desc: "test-product-9ll.pages.dev ist eine Entertainment-Seite f?r Tageshoroskope, Lottozahlen, Men?ideen und Tiergesicht-Tests.",
        geo_feature_title: "Was sind die Kernfunktionen?",
        geo_feature_summary: "Dies sind die Hauptfunktionen.",
        geo_feature_1: "Tageshoroskop",
        geo_feature_2: "Lottozahlen",
        geo_feature_3: "Men?empfehlungen",
        geo_feature_4: "Tiergesicht-Test",
        geo_how_title: "Wie benutze ich es?",
        geo_how_summary: "So funktioniert es.",
        geo_how_step1: "W?hle eine Funktion auf der Startseite.",
        geo_how_step2: "Dr?cke den Button, um Ergebnisse zu erzeugen.",
        geo_how_step3: "Sieh dir die Ergebnisse an.",
        faq_title: "H?ufige Fragen (FAQ)",
        faq_summary: "Kurzinfo zur Nutzung von test-product-9ll.pages.dev.",
        faq_q1: "Q. Brauche ich eine Registrierung?",
        faq_a1: "A. Grundfunktionen sind sofort nutzbar.",
        faq_q2: "Q. Ist es kostenpflichtig?",
        faq_a2: "A. Derzeit ist die Nutzung kostenlos.",
        faq_q3: "Q. Wie kann ich euch kontaktieren?",
        faq_a3: "A. Sende eine Nachricht ?ber den Kontaktlink im Footer.",
    },
    ja: {
      title: "サイト紹介",
      description: "サイトの目的、機能、運営についての紹介ページです。",
      badge_info: "INFO",
      brand_title: "サイト紹介",
      nav_home: "ホームへ",
      nav_animal: "動物顔テスト",
      nav_menu: "メニュー提案",
      menu_label: "メニュー",
      menu_animal: "動物顔テスト",
      menu_menu: "メニュー提案",
      menu_label: "メニュー",
      menu_animal: "動物顔テスト",
      menu_menu: "メニュー提案",
      settings_label: "設定",
      settings_language: "言語",
      settings_theme: "テーマ",
      intro_title: "このサイトについて",
      intro_desc: "今日の運勢、ロト番号、メニュー提案、動物顔テストを楽しめるエンタメサービスです。",
      intro_note: "すべての機能は参考・娯楽として提供しています。",
      feature_title: "主な機能",
      feature_list: "- 今日の運勢: 星座に基づく運勢。<br />- ロト: 1〜45のランダム番号。<br />- メニュー: 日常の食事アイデア。<br />- 動物顔テスト: 写真で類似度を分析。",
      contact_title: "お問い合わせ",
      contact_desc: "提携のご相談はメインページのフォームからお願いします。",
      footer_privacy: "プライバシーポリシー",
      footer_terms: "利用規約",
      footer_menu_request: "メニュー追加依頼",
      footer_partner: "提携問い合わせ",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark",
        geo_goal_title: "??????????????",
        geo_goal_summary: "test-product-9ll.pages.dev???????????????????????",
        geo_def_title: "test-product-9ll.pages.dev???????",
        geo_def_desc: "test-product-9ll.pages.dev???????????????????????????????????",
        geo_feature_title: "??????????",
        geo_feature_summary: "??????????",
        geo_feature_1: "?????",
        geo_feature_2: "???????",
        geo_feature_3: "??????",
        geo_feature_4: "??????",
        geo_how_title: "?????",
        geo_how_summary: "??????????",
        geo_how_step1: "????????????",
        geo_how_step2: "????????????????",
        geo_how_step3: "????????????",
        faq_title: "???????FAQ?",
        faq_summary: "test-product-9ll.pages.dev??????????",
        faq_q1: "Q. ?????????",
        faq_a1: "A. ?????????????",
        faq_q2: "Q. ??????",
        faq_a2: "A. ?????????????",
        faq_q3: "Q. ??????",
        faq_a3: "A. ??????????????????????",
    },
    en: {
      title: "About",
      description: "Introduction to the site purpose, features, and operations.",
      badge_info: "INFO",
      brand_title: "About",
      nav_home: "Home",
      nav_animal: "Animal Face Test",
      nav_menu: "Menu Picks",
      menu_label: "Menu",
      menu_animal: "Animal Face Test",
      menu_menu: "Menu Picks",
      menu_label: "Menu",
      menu_animal: "Animal Face Test",
      menu_menu: "Menu Picks",
      settings_label: "Settings",
      settings_language: "Language",
      settings_theme: "Theme",
      intro_title: "What is this site?",
      intro_desc: "An entertainment hub for daily fortunes, lotto picks, menu ideas, and an animal face test.",
      intro_note: "All features are provided for fun and reference purposes.",
      feature_title: "Key Features",
      feature_list: "- Daily Fortune: Zodiac-based fortune updates.<br />- Lotto Picks: Random numbers between 1 and 45.<br />- Menu Picks: Meal ideas for daily life.<br />- Animal Face Test: Upload a photo to see probabilities.",
      contact_title: "Contact",
      contact_desc: "For partnership inquiries, please use the contact form on the main page.",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms",
      footer_menu_request: "Menu Request",
      footer_partner: "Partnership",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark",
        geo_goal_title: "What is the goal of this site?",
        geo_goal_summary: "test-product-9ll.pages.dev aims to deliver quick fortune and recommendation experiences.",
        geo_def_title: "What is test-product-9ll.pages.dev?",
        geo_def_desc: "test-product-9ll.pages.dev is an entertainment site for daily fortune, lotto, menu picks, and animal-face tests.",
        geo_feature_title: "What are the core features?",
        geo_feature_summary: "These are the main features.",
        geo_feature_1: "Daily fortune",
        geo_feature_2: "Lotto number picks",
        geo_feature_3: "Menu recommendations",
        geo_feature_4: "Animal-face test",
        geo_how_title: "How do I use it?",
        geo_how_summary: "Use it in this order.",
        geo_how_step1: "Choose a feature on the home page.",
        geo_how_step2: "Press the button to generate results.",
        geo_how_step3: "Check the results on screen.",
        faq_title: "Frequently Asked Questions (FAQ)",
        faq_summary: "A short summary of test-product-9ll.pages.dev operations.",
        faq_q1: "Q. Do I need to sign up?",
        faq_a1: "A. Basic features are available right away.",
        faq_q2: "Q. Is it paid?",
        faq_a2: "A. The site is currently free to use.",
        faq_q3: "Q. How do I contact you?",
        faq_a3: "A. Leave a message via the contact link in the footer.",
    }
  };

  let currentLang = localStorage.getItem("lang") || "ko";

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

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
    });

    const theme = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark") applyTheme(theme);
  }

  if (langSelectTop) {
    langSelectTop.addEventListener("change", (event) => {
      applyLanguage(event.target.value);
    });
  }

  themeToggle.onclick = () => {
    const isLight = themeRoot.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem("theme", next);
  };

  initTheme();
  applyLanguage(currentLang);



