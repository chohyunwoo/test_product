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
      theme_dark: "Dark",
        geo_title: "제휴 문의는 무엇인가요?",
        geo_summary: "test-product-9ll.pages.dev 제휴 문의는 협업이나 제안을 접수하는 창구입니다.",
        geo_def_title: "제휴 문의란 무엇인가요?",
        geo_def_desc: "브랜드/콘텐츠 협업을 제안할 수 있는 연락 방식입니다.",
        geo_how_title: "어떻게 문의하나요?",
        geo_how_summary: "간단한 정보를 입력해 문의를 접수합니다.",
        geo_how_step1: "이름과 연락처를 입력합니다.",
        geo_how_step2: "제휴 내용을 작성합니다.",
        geo_how_step3: "문의 보내기 버튼을 누릅니다.",
        faq_title: "자주 묻는 질문(FAQ)",
        faq_summary: "제휴 문의 관련 질문을 모았습니다.",
        faq_q1: "Q. 제휴 제안은 어디로 가나요?",
        faq_a1: "A. 입력된 내용은 담당 팀에 전달됩니다.",
        faq_q2: "Q. 회신은 언제 받을 수 있나요?",
        faq_a2: "A. 확인 후 가능한 빠르게 연락드립니다.",
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
      theme_dark: "Dunkel",
        geo_title: "Was ist die Kooperationsanfrage?",
        geo_summary: "Kooperationsanfragen auf test-product-9ll.pages.dev sind der Kontakt für Zusammenarbeit und Vorschläge.",
        geo_def_title: "Was ist eine Kooperationsanfrage?",
        geo_def_desc: "Ein Weg, Marken- oder Content-Kooperationen vorzuschlagen.",
        geo_how_title: "Wie kann ich Kontakt aufnehmen?",
        geo_how_summary: "Kurzes Formular ausfüllen und absenden.",
        geo_how_step1: "Name und Kontaktdaten eingeben.",
        geo_how_step2: "Kooperationsvorschlag beschreiben.",
        geo_how_step3: "Absenden-Button drücken.",
        faq_title: "Häufige Fragen (FAQ)",
        faq_summary: "Fragen zu Kooperationsanfragen.",
        faq_q1: "Q. Wohin geht meine Anfrage?",
        faq_a1: "A. Sie wird an das Team weitergeleitet.",
        faq_q2: "Q. Wann bekomme ich eine Antwort?",
        faq_a2: "A. Wir melden uns so schnell wie möglich.",
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
      theme_dark: "Dark",
        geo_title: "提携の問い合わせとは？",
        geo_summary: "test-product-9ll.pages.dev の提携問い合わせは、協業や提案の窓口です。",
        geo_def_title: "提携問い合わせとは何ですか？",
        geo_def_desc: "ブランドやコンテンツの協業を提案する方法です。",
        geo_how_title: "問い合わせ方法は？",
        geo_how_summary: "簡単なフォームに入力して送信します。",
        geo_how_step1: "名前と連絡先を入力します。",
        geo_how_step2: "提携内容を記入します。",
        geo_how_step3: "送信ボタンを押します。",
        faq_title: "よくある質問（FAQ）",
        faq_summary: "提携問い合わせに関する質問です。",
        faq_q1: "Q. 問い合わせはどこに届きますか？",
        faq_a1: "A. 内容はチームに共有されます。",
        faq_q2: "Q. 返信はいつ来ますか？",
        faq_a2: "A. 可能な限り早くご連絡します。",
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
      theme_dark: "Dark",
        geo_title: "What is the partnership inquiry?",
        geo_summary: "Partnership inquiries on test-product-9ll.pages.dev are a channel for collaborations and proposals.",
        geo_def_title: "What is a partnership inquiry?",
        geo_def_desc: "A way to propose brand or content collaborations.",
        geo_how_title: "How do I contact you?",
        geo_how_summary: "Fill in a short form to submit your inquiry.",
        geo_how_step1: "Enter your name and contact info.",
        geo_how_step2: "Describe your partnership proposal.",
        geo_how_step3: "Press the submit button.",
        faq_title: "FAQ",
        faq_summary: "Questions about partnership inquiries.",
        faq_q1: "Q. Where does my inquiry go?",
        faq_a1: "A. It is sent to the team for review.",
        faq_q2: "Q. When will I hear back?",
        faq_a2: "A. We will respond as soon as possible.",
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



