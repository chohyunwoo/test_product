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
      theme_dark: "Dark",
        geo_title: "메뉴 추가 요청은 무엇인가요?",
        geo_summary: "test-product-9ll.pages.dev에서 원하는 메뉴를 간단히 요청할 수 있습니다.",
        geo_def_title: "메뉴 추가 요청이란 무엇인가요?",
        geo_def_desc: "사용자가 새로운 메뉴 아이디어를 제안하는 기능입니다.",
        geo_how_title: "어떻게 요청하나요?",
        geo_how_summary: "간단한 정보를 입력하면 요청이 접수됩니다.",
        geo_how_step1: "이름과 이메일을 입력합니다.",
        geo_how_step2: "추가 요청 내용을 작성합니다.",
        geo_how_step3: "필요한 상세 정보를 적습니다.",
        geo_how_step4: "요청 보내기 버튼을 누릅니다.",
        faq_title: "자주 묻는 질문(FAQ)",
        faq_summary: "메뉴 요청 관련 질문을 정리했습니다.",
        faq_q1: "Q. 요청은 어디에 반영되나요?",
        faq_a1: "A. 검토 후 메뉴 추천 목록에 반영됩니다.",
        faq_q2: "Q. 응답은 언제 받을 수 있나요?",
        faq_a2: "A. 입력하신 연락처로 안내드립니다.",
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
      theme_dark: "Dunkel",
        geo_title: "Was ist eine Menü-Anfrage?",
        geo_summary: "Auf test-product-9ll.pages.dev kannst du neue Menüideen einfach vorschlagen.",
        geo_def_title: "Was ist eine Menü-Anfrage?",
        geo_def_desc: "Eine Funktion, mit der Nutzer neue Menüideen vorschlagen.",
        geo_how_title: "Wie stelle ich eine Anfrage?",
        geo_how_summary: "Ein paar Felder ausfüllen und abschicken.",
        geo_how_step1: "Name und E-Mail eingeben.",
        geo_how_step2: "Die gewünschte Menüidee beschreiben.",
        geo_how_step3: "Zusätzliche Details angeben.",
        geo_how_step4: "Absenden-Button drücken.",
        faq_title: "Häufige Fragen (FAQ)",
        faq_summary: "Fragen zur Menü-Anfrage.",
        faq_q1: "Q. Wo landet meine Anfrage?",
        faq_a1: "A. Sie wird geprüft und kann in die Menüliste aufgenommen werden.",
        faq_q2: "Q. Wann erhalte ich eine Antwort?",
        faq_a2: "A. Wir melden uns über die angegebenen Kontaktdaten.",
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
      theme_dark: "Dark",
        geo_title: "メニュー追加リクエストとは？",
        geo_summary: "test-product-9ll.pages.dev では新しいメニュー案を簡単に依頼できます。",
        geo_def_title: "メニュー追加リクエストとは何ですか？",
        geo_def_desc: "ユーザーが新しいメニュー案を提案できる機能です。",
        geo_how_title: "依頼方法は？",
        geo_how_summary: "必要事項を入力して送信します。",
        geo_how_step1: "名前とメールを入力します。",
        geo_how_step2: "追加したいメニューを記入します。",
        geo_how_step3: "補足情報を記載します。",
        geo_how_step4: "送信ボタンを押します。",
        faq_title: "よくある質問（FAQ）",
        faq_summary: "メニュー追加リクエストに関する質問です。",
        faq_q1: "Q. 依頼はどこに反映されますか？",
        faq_a1: "A. 確認後、メニュー候補に追加されることがあります。",
        faq_q2: "Q. 返信はいつ来ますか？",
        faq_a2: "A. 入力した連絡先にご案内します。",
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
      theme_dark: "Dark",
        geo_title: "What is the menu request?",
        geo_summary: "On test-product-9ll.pages.dev, you can request new menu ideas easily.",
        geo_def_title: "What is a menu request?",
        geo_def_desc: "A feature that lets users suggest new menu ideas.",
        geo_how_title: "How do I request one?",
        geo_how_summary: "Fill in a few fields and submit your request.",
        geo_how_step1: "Enter your name and email.",
        geo_how_step2: "Write the menu request.",
        geo_how_step3: "Add any helpful details.",
        geo_how_step4: "Press the submit button.",
        faq_title: "FAQ",
        faq_summary: "Common questions about menu requests.",
        faq_q1: "Q. Where does my request go?",
        faq_a1: "A. It’s reviewed and may be added to the menu list.",
        faq_q2: "Q. When will I get a response?",
        faq_a2: "A. We’ll contact you via the info you provided.",
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



