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
        geo_goal_title: "이 사이트의 목표는 무엇인가요?",
        geo_goal_summary: "test-product-9ll.pages.dev는 운세, 로또, 메뉴, 동물상 콘텐츠를 쉽게 즐기도록 돕는 것이 목표입니다.",
        geo_def_title: "이 사이트는 무엇인가요?",
        geo_def_desc: "운세와 랜덤 추천 콘텐츠를 한 곳에서 제공하는 정적 웹사이트입니다.",
        geo_feature_title: "주요 기능은 무엇인가요?",
        geo_feature_summary: "핵심 기능을 간단하게 정리했습니다.",
        geo_feature_1: "오늘의 별자리 운세",
        geo_feature_2: "로또 번호 추천",
        geo_feature_3: "메뉴 추천",
        geo_feature_4: "동물상 테스트",
        geo_how_title: "어떻게 이용하나요?",
        geo_how_summary: "필요한 메뉴를 선택해 바로 이용할 수 있습니다.",
        geo_how_step1: "상단 메뉴에서 원하는 페이지를 선택합니다.",
        geo_how_step2: "필요한 정보를 입력합니다.",
        geo_how_step3: "결과를 확인하고 공유합니다.",
        faq_title: "자주 묻는 질문(FAQ)",
        faq_summary: "사이트 소개 페이지에 대한 질문을 모았습니다.",
        faq_q1: "Q. 이 사이트는 무료인가요?",
        faq_a1: "A. 모든 기능은 무료로 제공됩니다.",
        faq_q2: "Q. 회원 가입이 필요한가요?",
        faq_a2: "A. 회원 가입 없이 이용할 수 있습니다.",
        faq_q3: "Q. 연락은 어떻게 하나요?",
        faq_a3: "A. 제휴 문의 폼을 통해 연락할 수 있습니다.",
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
        geo_goal_title: "Was ist das Ziel der Seite?",
        geo_goal_summary: "test-product-9ll.pages.dev macht Horoskope, Lottozahlen, Menüideen und den Tiergesichtstest leicht zugänglich.",
        geo_def_title: "Was ist diese Seite?",
        geo_def_desc: "Eine statische Website mit Horoskopen und Zufallsempfehlungen an einem Ort.",
        geo_feature_title: "Was sind die Hauptfunktionen?",
        geo_feature_summary: "Die wichtigsten Funktionen im Überblick.",
        geo_feature_1: "Tägliche Sternzeichen-Horoskope",
        geo_feature_2: "Lottozahlen-Empfehlung",
        geo_feature_3: "Menü-Empfehlungen",
        geo_feature_4: "Tiergesichtstest",
        geo_how_title: "Wie funktioniert es?",
        geo_how_summary: "Wähle im Menü eine Seite und starte sofort.",
        geo_how_step1: "Seite im oberen Menü auswählen.",
        geo_how_step2: "Benötigte Infos eingeben.",
        geo_how_step3: "Ergebnis ansehen und teilen.",
        faq_title: "Häufige Fragen (FAQ)",
        faq_summary: "Fragen zur Seite im Überblick.",
        faq_q1: "Q. Ist die Seite kostenlos?",
        faq_a1: "A. Ja, alle Funktionen sind kostenlos.",
        faq_q2: "Q. Brauche ich ein Konto?",
        faq_a2: "A. Nein, kein Konto erforderlich.",
        faq_q3: "Q. Wie kann ich Kontakt aufnehmen?",
        faq_a3: "A. Über das Partnerschaftsformular.",
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
        geo_goal_title: "このサイトの目的は？",
        geo_goal_summary: "test-product-9ll.pages.dev は運勢、ロト、メニュー提案、動物顔テストを気軽に楽しめるようにします。",
        geo_def_title: "このサイトとは？",
        geo_def_desc: "運勢とランダムな提案を一か所で提供する静的サイトです。",
        geo_feature_title: "主な機能は？",
        geo_feature_summary: "主要機能を簡潔にまとめました。",
        geo_feature_1: "今日の星座運勢",
        geo_feature_2: "ロト番号の提案",
        geo_feature_3: "メニュー提案",
        geo_feature_4: "動物顔テスト",
        geo_how_title: "使い方は？",
        geo_how_summary: "上部メニューから選んで、すぐに利用できます。",
        geo_how_step1: "上部メニューでページを選択します。",
        geo_how_step2: "必要な情報を入力します。",
        geo_how_step3: "結果を確認して共有します。",
        faq_title: "よくある質問（FAQ）",
        faq_summary: "サイト紹介に関する質問をまとめました。",
        faq_q1: "Q. 無料で使えますか？",
        faq_a1: "A. はい、すべて無料です。",
        faq_q2: "Q. 登録は必要ですか？",
        faq_a2: "A. 登録は不要です。",
        faq_q3: "Q. 連絡方法は？",
        faq_a3: "A. 提携フォームからご連絡ください。",
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
        geo_goal_summary: "test-product-9ll.pages.dev aims to make fortunes, lotto picks, menu ideas, and animal-face tests easy to enjoy.",
        geo_def_title: "What is this site?",
        geo_def_desc: "A static site that offers fortunes and random recommendations in one place.",
        geo_feature_title: "What are the main features?",
        geo_feature_summary: "Here are the core features at a glance.",
        geo_feature_1: "Daily zodiac fortunes",
        geo_feature_2: "Lotto number picks",
        geo_feature_3: "Menu recommendations",
        geo_feature_4: "Animal-face test",
        geo_how_title: "How do I use it?",
        geo_how_summary: "Pick a menu item and use it right away.",
        geo_how_step1: "Choose a page from the top menu.",
        geo_how_step2: "Enter the required info.",
        geo_how_step3: "Check and share the results.",
        faq_title: "FAQ",
        faq_summary: "Questions about the site overview.",
        faq_q1: "Q. Is this site free?",
        faq_a1: "A. Yes, all features are free.",
        faq_q2: "Q. Do I need an account?",
        faq_a2: "A. No account is needed.",
        faq_q3: "Q. How can I contact you?",
        faq_a3: "A. Use the partnership inquiry form.",
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



