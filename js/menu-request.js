const langSelectTop = document.getElementById("langSelectTop");
  const themeToggle = document.getElementById("themeToggle");
  const themeRoot = document.documentElement;

  const i18n = {
    ko: {
      title: "메뉴 추가 요청",
      description: "메뉴 추천 리스트에 추가하고 싶은 메뉴를 요청할 수 있는 페이지입니다.",
      badge_menu: "MENU",
      brand_title: "메뉴 추가 요청",
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
      intro_title: "추천 메뉴 추가 신청",
      intro_desc: "원하는 메뉴와 이유를 알려주시면 추천 리스트에 반영할게요.",
      form_name_label: "이름",
      form_name_placeholder: "홍길동",
      form_email_label: "이메일",
      form_menu_label: "추가하고 싶은 메뉴",
      form_menu_placeholder: "예: 마라샹궈",
      form_reason_label: "추가 이유",
      form_reason_placeholder: "추천 목록에 추가하고 싶은 이유를 적어주세요.",
      form_submit: "요청 보내기",
      footer_about: "사이트 소개",
      footer_privacy: "개인정보 처리방침",
      footer_terms: "이용약관",
      footer_partner: "제휴 문의",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark"
        geo_title: "?? ?? ??? ??????",
        geo_summary: "test-product-9ll.pages.dev? ?? ??? ?? ?? ??? ???.",
        geo_def_title: "?? ?? ???? ?????",
        geo_def_desc: "?? ?? ???? ?? ??? ??? ??? ???? ???.",
        geo_how_title: "?? ??? ??????",
        geo_how_summary: "?? ??? ????.",
        geo_how_step1: "??? ?? ??? ????.",
        geo_how_step2: "??? ???? ????.",
        geo_how_step3: "?? ??? ??? ???.",
        geo_how_step4: "?? ??? ???.",
        faq_title: "?? ?? ??(FAQ)",
        faq_summary: "test-product-9ll.pages.dev ?? ?? ??? ?? ????.",
        faq_q1: "Q. ??? ?? ??????",
        faq_a1: "A. ?? ? ????? ????.",
        faq_q2: "Q. ?? ??? ?? ??????",
        faq_a2: "A. ??? ?? ??? ? ??.",
    },
    de: {
      title: "Menü-Anfrage",
      description: "Fordere ein neues Menü für die Empfehlungen an.",
      badge_menu: "MENU",
      brand_title: "Menü-Anfrage",
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
      intro_title: "Menü vorschlagen",
      intro_desc: "Nenne das gewünschte Menü und den Grund.",
      form_name_label: "Name",
      form_name_placeholder: "Dein Name",
      form_email_label: "E-Mail",
      form_menu_label: "Gewünschtes Menü",
      form_menu_placeholder: "z. B. Mala Xiang Guo",
      form_reason_label: "Grund",
      form_reason_placeholder: "Warum soll das Menü hinzugefügt werden?",
      form_submit: "Anfrage senden",
      footer_about: "Über die Seite",
      footer_privacy: "Datenschutz",
      footer_terms: "Nutzungsbedingungen",
      footer_partner: "Partnerschaft",
      footer_copyright: "© 2026 TodayLab. Alle Rechte vorbehalten.",
      theme_light: "Hell",
      theme_dark: "Dunkel"
        geo_title: "Was ist eine Men?-Erweiterungsanfrage?",
        geo_summary: "test-product-9ll.pages.dev nimmt Anfragen zur Aufnahme von Men?s an.",
        geo_def_title: "Was bedeutet eine Men?-Erweiterungsanfrage?",
        geo_def_desc: "Es ist ein Verfahren, Men?s f?r die Liste vorzuschlagen.",
        geo_how_title: "Wie reiche ich eine Anfrage ein?",
        geo_how_summary: "So gehst du vor.",
        geo_how_step1: "Gib Name und Kontaktinformationen ein.",
        geo_how_step2: "Schreibe den Men?namen, der hinzugef?gt werden soll.",
        geo_how_step3: "Gib kurz den Grund an.",
        geo_how_step4: "Sende das Formular ab.",
        faq_title: "H?ufige Fragen (FAQ)",
        faq_summary: "Antworten zu Men?-Erweiterungen auf test-product-9ll.pages.dev.",
        faq_q1: "Q. Wann wird die Anfrage umgesetzt?",
        faq_a1: "A. Nach Pr?fung wird sie der Reihe nach ?bernommen.",
        faq_q2: "Q. Werden alle Anfragen ?bernommen?",
        faq_a2: "A. Anfragen k?nnen nach Kriterien ausgew?hlt werden.",
    },
    ja: {
      title: "メニュー追加依頼",
      description: "おすすめに追加してほしいメニューを依頼できます。",
      badge_menu: "MENU",
      brand_title: "メニュー追加依頼",
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
      intro_title: "メニュー追加リクエスト",
      intro_desc: "希望するメニューと理由を教えてください。",
      form_name_label: "名前",
      form_name_placeholder: "山田太郎",
      form_email_label: "メール",
      form_menu_label: "追加したいメニュー",
      form_menu_placeholder: "例: 麻辣香鍋",
      form_reason_label: "追加理由",
      form_reason_placeholder: "追加してほしい理由を入力してください。",
      form_submit: "送信",
      footer_about: "サイト紹介",
      footer_privacy: "プライバシーポリシー",
      footer_terms: "利用規約",
      footer_partner: "提携問い合わせ",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark"
        geo_title: "??????????????",
        geo_summary: "test-product-9ll.pages.dev??????????????????????????",
        geo_def_title: "????????????????",
        geo_def_desc: "????????????????????",
        geo_how_title: "??????",
        geo_how_summary: "???????????",
        geo_how_step1: "?????????????",
        geo_how_step2: "???????????????",
        geo_how_step3: "????????????",
        geo_how_step4: "???????????",
        faq_title: "???????FAQ?",
        faq_summary: "test-product-9ll.pages.dev????????????????",
        faq_q1: "Q. ??????????",
        faq_a1: "A. ?????????????",
        faq_q2: "Q. ???????????",
        faq_a2: "A. ??????????????????",
    },
    en: {
      title: "Menu Request",
      description: "Request a new menu item to be added to the recommendations.",
      badge_menu: "MENU",
      brand_title: "Menu Request",
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
      intro_title: "Request a Menu Item",
      intro_desc: "Tell us the menu you want and why, and we will consider it.",
      form_name_label: "Name",
      form_name_placeholder: "Your name",
      form_email_label: "Email",
      form_menu_label: "Menu to add",
      form_menu_placeholder: "e.g., Mala Xiang Guo",
      form_reason_label: "Reason",
      form_reason_placeholder: "Tell us why you want this menu added.",
      form_submit: "Send Request",
      footer_about: "About",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms",
      footer_partner: "Partnership",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark"
        geo_title: "What is a menu add request?",
        geo_summary: "test-product-9ll.pages.dev accepts requests to add menus to the recommendation list.",
        geo_def_title: "What does a menu add request mean?",
        geo_def_desc: "It is a process to submit items to be included in the list.",
        geo_how_title: "How do I submit a request?",
        geo_how_summary: "Follow these steps.",
        geo_how_step1: "Enter your name and contact info.",
        geo_how_step2: "Write the menu name to add.",
        geo_how_step3: "Leave a short reason for the request.",
        geo_how_step4: "Press the submit button.",
        faq_title: "Frequently Asked Questions (FAQ)",
        faq_summary: "Answers about menu add requests on test-product-9ll.pages.dev.",
        faq_q1: "Q. When will my request be reflected?",
        faq_a1: "A. It will be reviewed and applied in order.",
        faq_q2: "Q. Will all requests be accepted?",
        faq_a2: "A. Requests may be selected based on criteria.",
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
    if (saved === "dark") {\n      applyTheme("dark");\n      return;\n    }\n    applyTheme("light");
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

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (i18n[lang][key]) el.setAttribute("placeholder", i18n[lang][key]);
    });

    const theme = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark") applyTheme(theme);
  }

  if (langSelectTop) {
    langSelectTop.addEventListener("change", (event) => {
      applyLanguage(event.target.value);
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = themeRoot.getAttribute("data-theme") === "light";
      const next = isLight ? "dark" : "light";
      applyTheme(next);
      localStorage.setItem("theme", next);
    });
  }

  initTheme();
  applyLanguage(currentLang);



