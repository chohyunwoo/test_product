const langSelectTop = document.getElementById("langSelectTop");
  const themeToggle = document.getElementById("themeToggle");
  const themeRoot = document.documentElement;

  const i18n = {
    ko: {
      title: "이용약관",
      description: "이용약관 안내 페이지입니다.",
      badge_terms: "TERMS",
      brand_title: "이용약관",
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
      use_title: "서비스 이용",
      use_desc: "본 사이트는 엔터테인먼트와 참고용 정보를 제공합니다. 제공되는 정보는 일반적인 안내이며, 이용 결과에 대한 책임은 사용자에게 있습니다.",
      content_title: "콘텐츠 이용",
      content_desc: "사이트의 모든 콘텐츠는 저작권 보호를 받습니다. 사전 동의 없이 무단 복제, 배포, 상업적 이용을 금지합니다.",
      change_title: "서비스 변경",
      change_desc: "운영자는 서비스 개선을 위해 기능을 변경하거나 중단할 수 있습니다.",
      footer_about: "사이트 소개",
      footer_privacy: "개인정보 처리방침",
      footer_menu_request: "메뉴 추가 요청",
      footer_partner: "제휴 문의",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark",
        geo_title: "????? ??? ??????",
        geo_summary: "test-product-9ll.pages.dev? ?? ??? ?? ??? ????.",
        geo_def_title: "?????? ?????",
        geo_def_desc: "?????? ??? ?? ??? ??? ??? ???.",
        geo_how_title: "?? ??? ??????",
        geo_how_summary: "?? ??? ????.",
        geo_how_step1: "??? ?? ??",
        geo_how_step2: "??? ?? ??",
        geo_how_step3: "?? ??",
        faq_title: "?? ?? ??(FAQ)",
        faq_summary: "test-product-9ll.pages.dev ????? ?? ????.",
        faq_q1: "Q. ???? ??? ??? ? ????",
        faq_a1: "A. ?? ??? ?? ??? ? ??.",
        faq_q2: "Q. ??? ?? ??? ????",
        faq_a2: "A. ?? ??? ??? ??? ??? ? ??.",
    },
    de: {
      title: "Nutzungsbedingungen",
      description: "Informationen zu den Nutzungsbedingungen.",
      badge_terms: "TERMS",
      brand_title: "Nutzungsbedingungen",
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
      use_title: "Nutzung des Dienstes",
      use_desc: "Diese Seite bietet Unterhaltung und Hinweise. Die Nutzung erfolgt in eigener Verantwortung.",
      content_title: "Inhalte",
      content_desc: "Alle Inhalte sind urheberrechtlich geschützt. Unautorisierte Nutzung ist untersagt.",
      change_title: "Dienständerungen",
      change_desc: "Funktionen können zur Verbesserung geändert oder eingestellt werden.",
      footer_about: "Über die Seite",
      footer_privacy: "Datenschutz",
      footer_menu_request: "Menü-Anfrage",
      footer_partner: "Partnerschaft",
      footer_copyright: "© 2026 TodayLab. Alle Rechte vorbehalten.",
      theme_light: "Hell",
      theme_dark: "Dunkel",
        geo_title: "Was erkl?ren die Nutzungsbedingungen?",
        geo_summary: "Sie fassen Nutzungsregeln und Verantwortlichkeiten f?r test-product-9ll.pages.dev zusammen.",
        geo_def_title: "Was sind die Nutzungsbedingungen?",
        geo_def_desc: "Sie beschreiben Bedingungen und Verantwortlichkeiten der Nutzung.",
        geo_how_title: "Was sind die Kernpunkte?",
        geo_how_summary: "Diese Punkte sind zentral.",
        geo_how_step1: "Nutzungsregeln des Dienstes",
        geo_how_step2: "Umfang der Inhaltsnutzung",
        geo_how_step3: "?nderungshinweise",
        faq_title: "H?ufige Fragen (FAQ)",
        faq_summary: "Kurzfassung der Nutzungsbedingungen von test-product-9ll.pages.dev.",
        faq_q1: "Q. Kann sich der Dienst jederzeit ?ndern?",
        faq_a1: "A. ?nderungen sind aus betrieblichen Gr?nden m?glich.",
        faq_q2: "Q. Gibt es Einschr?nkungen bei der Nutzung von Inhalten?",
        faq_a2: "A. Unautorisierte Kopien oder kommerzielle Nutzung k?nnen eingeschr?nkt sein.",
    },
    ja: {
      title: "利用規約",
      description: "利用規約の案内ページです。",
      badge_terms: "TERMS",
      brand_title: "利用規約",
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
      use_title: "サービス利用",
      use_desc: "本サイトは娯楽・参考情報を提供します。利用は自己責任でお願いします。",
      content_title: "コンテンツの利用",
      content_desc: "すべてのコンテンツは著作権で保護されています。無断利用は禁止です。",
      change_title: "サービス変更",
      change_desc: "改善のため機能を変更または中止することがあります。",
      footer_about: "サイト紹介",
      footer_privacy: "プライバシーポリシー",
      footer_menu_request: "メニュー追加依頼",
      footer_partner: "提携問い合わせ",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark",
        geo_title: "??????????????",
        geo_summary: "test-product-9ll.pages.dev?????????????????",
        geo_def_title: "???????",
        geo_def_desc: "?????????????????????",
        geo_how_title: "??????",
        geo_how_summary: "????????",
        geo_how_step1: "????????",
        geo_how_step2: "?????????",
        geo_how_step3: "????",
        faq_title: "???????FAQ?",
        faq_summary: "test-product-9ll.pages.dev???????????",
        faq_q1: "Q. ?????????????????",
        faq_a1: "A. ??????????????????????",
        faq_q2: "Q. ?????????????????",
        faq_a2: "A. ???????????????????????",
    },
    en: {
      title: "Terms",
      description: "Terms of service information page.",
      badge_terms: "TERMS",
      brand_title: "Terms",
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
      use_title: "Service Use",
      use_desc: "This site provides entertainment and reference information. Users are responsible for how they use it.",
      content_title: "Content Usage",
      content_desc: "All content is protected by copyright. Unauthorized copying, distribution, or commercial use is prohibited.",
      change_title: "Service Changes",
      change_desc: "We may change or discontinue features to improve the service.",
      footer_about: "About",
      footer_privacy: "Privacy Policy",
      footer_menu_request: "Menu Request",
      footer_partner: "Partnership",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark",
        geo_title: "What do the Terms explain?",
        geo_summary: "They summarize usage rules and responsibilities for test-product-9ll.pages.dev.",
        geo_def_title: "What are the Terms of Service?",
        geo_def_desc: "They outline usage conditions and responsibilities.",
        geo_how_title: "What are the key points?",
        geo_how_summary: "These items are central.",
        geo_how_step1: "Service usage rules",
        geo_how_step2: "Content usage scope",
        geo_how_step3: "Change notices",
        faq_title: "Frequently Asked Questions (FAQ)",
        faq_summary: "A brief summary of the Terms on test-product-9ll.pages.dev.",
        faq_q1: "Q. Can the service change at any time?",
        faq_a1: "A. It may change as needed for operations.",
        faq_q2: "Q. Are there limits on content use?",
        faq_a2: "A. Unauthorized copying or commercial use may be restricted.",
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



