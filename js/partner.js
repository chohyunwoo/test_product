const langSelectTop = document.getElementById("langSelectTop");
  const themeToggle = document.getElementById("themeToggle");
  const themeRoot = document.documentElement;

  const i18n = {
    ko: {
      title: "제휴 문의",
      description: "사업자/협업 목적의 제휴 문의를 접수하는 페이지입니다.",
      badge_partner: "PARTNER",
      brand_title: "제휴 문의",
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
      intro_title: "제휴 문의",
      intro_desc: "사업자/협업 목적의 문의를 남겨주시면 빠르게 연락드릴게요.",
      form_company_label: "회사명",
      form_company_placeholder: "회사명을 입력하세요",
      form_name_label: "담당자 이름",
      form_name_placeholder: "홍길동",
      form_email_label: "이메일",
      form_purpose_label: "협업 목적",
      form_purpose_placeholder: "예: 제휴/광고/콘텐츠 협업",
      form_message_label: "문의 내용",
      form_message_placeholder: "협업 내용을 자세히 적어주세요.",
      form_submit: "문의 보내기",
      footer_about: "사이트 소개",
      footer_privacy: "개인정보 처리방침",
      footer_terms: "이용약관",
      footer_menu_request: "메뉴 추가 요청",
      footer_partner: "제휴 문의",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark"
        geo_title: "?? ??? ??? ?? ???????",
        geo_summary: "test-product-9ll.pages.dev? ??? ?? ??? ????.",
        geo_def_title: "?? ??? ?????",
        geo_def_desc: "?? ??? ??? ??? ?? ??? ???? ???.",
        geo_how_title: "?? ??? ??????",
        geo_how_summary: "?? ???? ???? ??.",
        geo_how_step1: "???? ??? ??? ????.",
        geo_how_step2: "?? ??? ??? ???.",
        geo_how_step3: "?? ??? ??? ????.",
        faq_title: "?? ?? ??(FAQ)",
        faq_summary: "test-product-9ll.pages.dev ?? ??? ?? ?? ????.",
        faq_q1: "Q. ??? ??? ????",
        faq_a1: "A. ??? ???? ????.",
        faq_q2: "Q. ?? ??? ??? ????",
        faq_a2: "A. ??? ??? ?? ????.",
    },
    de: {
      title: "Partnerschaft",
      description: "Kontakt für geschäftliche Kooperationen.",
      badge_partner: "PARTNER",
      brand_title: "Partnerschaft",
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
      intro_title: "Partnerschaft",
      intro_desc: "Hinterlasse deine Anfrage, wir melden uns schnell.",
      form_company_label: "Firma",
      form_company_placeholder: "Firmenname",
      form_name_label: "Ansprechpartner",
      form_name_placeholder: "Name",
      form_email_label: "E-Mail",
      form_purpose_label: "Zweck",
      form_purpose_placeholder: "z. B. Partnerschaft / Werbung / Kooperation",
      form_message_label: "Nachricht",
      form_message_placeholder: "Bitte Details zur Kooperation angeben.",
      form_submit: "Anfrage senden",
      footer_about: "Über die Seite",
      footer_privacy: "Datenschutz",
      footer_terms: "Nutzungsbedingungen",
      footer_menu_request: "Menü-Anfrage",
      footer_partner: "Partnerschaft",
      footer_copyright: "© 2026 TodayLab. Alle Rechte vorbehalten.",
      theme_light: "Hell",
      theme_dark: "Dunkel"
        geo_title: "Wof?r ist die Partneranfrage-Seite?",
        geo_summary: "test-product-9ll.pages.dev nimmt Partner- und Kooperationsvorschl?ge an.",
        geo_def_title: "Was ist eine Partneranfrage?",
        geo_def_desc: "Sie dient dazu, Kooperationsvorschl?ge zu ?bermitteln.",
        geo_how_title: "Wie kontaktiere ich euch?",
        geo_how_summary: "So f?llst du das Formular aus.",
        geo_how_step1: "Gib Firmendaten und Kontakt an.",
        geo_how_step2: "Schreibe den Zweck kurz auf.",
        geo_how_step3: "F?ge Details hinzu und sende ab.",
        faq_title: "H?ufige Fragen (FAQ)",
        faq_summary: "Kurzantworten zu Partneranfragen auf test-product-9ll.pages.dev.",
        faq_q1: "Q. Wie erhalte ich eine R?ckmeldung?",
        faq_a1: "A. Wir kontaktieren dich per E-Mail.",
        faq_q2: "Q. Gibt es Einschr?nkungen bei Partnerschaften?",
        faq_a2: "A. Das h?ngt von Zweck und Inhalt ab.",
    },
    ja: {
      title: "提携問い合わせ",
      description: "事業・協業に関する問い合わせページです。",
      badge_partner: "PARTNER",
      brand_title: "提携問い合わせ",
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
      intro_title: "提携問い合わせ",
      intro_desc: "協業のご相談をいただければ迅速にご連絡します。",
      form_company_label: "会社名",
      form_company_placeholder: "会社名を入力",
      form_name_label: "担当者名",
      form_name_placeholder: "山田太郎",
      form_email_label: "メール",
      form_purpose_label: "協業目的",
      form_purpose_placeholder: "例: 提携 / 広告 / コンテンツ協業",
      form_message_label: "問い合わせ内容",
      form_message_placeholder: "協業内容を詳しくご記入ください。",
      form_submit: "送信",
      footer_about: "サイト紹介",
      footer_privacy: "プライバシーポリシー",
      footer_terms: "利用規約",
      footer_menu_request: "メニュー追加依頼",
      footer_partner: "提携問い合わせ",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark"
        geo_title: "?????????????????",
        geo_summary: "test-product-9ll.pages.dev?????????????????",
        geo_def_title: "??????????",
        geo_def_desc: "?????????????????",
        geo_how_title: "?????????",
        geo_how_summary: "??????????",
        geo_how_step1: "????????????????",
        geo_how_step2: "?????????????",
        geo_how_step3: "?????????????",
        faq_title: "???????FAQ?",
        faq_summary: "test-product-9ll.pages.dev?????????????????",
        faq_q1: "Q. ???????????",
        faq_a1: "A. ??????????????",
        faq_q2: "Q. ??????????????",
        faq_a2: "A. ??????????????",
    },
    en: {
      title: "Partnership Inquiry",
      description: "Submit a partnership inquiry for business collaboration.",
      badge_partner: "PARTNER",
      brand_title: "Partnership Inquiry",
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
      intro_title: "Partnership Inquiry",
      intro_desc: "Leave a business inquiry and we will get back to you soon.",
      form_company_label: "Company",
      form_company_placeholder: "Your company name",
      form_name_label: "Contact name",
      form_name_placeholder: "Your name",
      form_email_label: "Email",
      form_purpose_label: "Purpose",
      form_purpose_placeholder: "e.g., Partnership / Ads / Collaboration",
      form_message_label: "Message",
      form_message_placeholder: "Tell us about your inquiry.",
      form_submit: "Send Inquiry",
      footer_about: "About",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms",
      footer_menu_request: "Menu Request",
      footer_partner: "Partnership",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark"
        geo_title: "What is the partnership inquiry page for?",
        geo_summary: "test-product-9ll.pages.dev accepts partnership and collaboration proposals.",
        geo_def_title: "What is a partnership inquiry?",
        geo_def_desc: "It is a process to submit collaboration proposals and details.",
        geo_how_title: "How do I contact you?",
        geo_how_summary: "Fill out the form in this order.",
        geo_how_step1: "Enter company and contact details.",
        geo_how_step2: "Write the partnership purpose briefly.",
        geo_how_step3: "Add details and submit.",
        faq_title: "Frequently Asked Questions (FAQ)",
        faq_summary: "Summary answers about partnership inquiries on test-product-9ll.pages.dev.",
        faq_q1: "Q. How will I receive a reply?",
        faq_a1: "A. We will contact you via the email you provided.",
        faq_q2: "Q. Are there limits on partnership types?",
        faq_a2: "A. It depends on goals and details.",
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



