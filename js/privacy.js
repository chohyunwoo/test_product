const langSelectTop = document.getElementById("langSelectTop");
  const themeToggle = document.getElementById("themeToggle");
  const themeRoot = document.documentElement;

  const i18n = {
    ko: {
      title: "개인정보 처리방침",
      description: "개인정보 처리방침 안내 페이지입니다.",
      badge_policy: "POLICY",
      brand_title: "개인정보 처리방침",
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
      collect_title: "개인정보 수집 및 이용",
      collect_desc: "본 사이트는 제휴 문의 폼을 통해 이름, 이메일, 문의 내용을 수집할 수 있습니다. 수집된 정보는 문의 응답을 위해서만 사용됩니다.",
      collect_note: "문의는 Formspree 서비스를 통해 전달되며, 자세한 처리 방식은 Formspree 정책을 따릅니다.",
      image_title: "동물상 테스트 이미지 처리",
      image_desc: "동물상 테스트는 브라우저에서 이미지 분석을 수행합니다. 업로드된 파일은 서버에 저장하지 않습니다.",
      retention_title: "보관 및 삭제",
      retention_desc: "문의 응답이 완료되면 관련 정보는 합리적인 기간 내 삭제됩니다.",
      contact_title: "문의",
      contact_desc: "개인정보 관련 문의는 메인 페이지의 문의 폼을 통해 접수해주세요.",
      footer_about: "사이트 소개",
      footer_terms: "이용약관",
      footer_menu_request: "메뉴 추가 요청",
      footer_partner: "제휴 문의",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark"
        geo_title: "???? ????? ??? ??????",
        geo_summary: "test-product-9ll.pages.dev? ???? ?? ??? ??? ????.",
        geo_def_title: "???? ?????? ?????",
        geo_def_desc: "???? ?????? ???????? ??? ???? ???.",
        geo_how_title: "?? ??? ??????",
        geo_how_summary: "?? ??? ???? ??.",
        geo_how_step1: "?? ??",
        geo_how_step2: "?? ??",
        geo_how_step3: "?? ??",
        geo_how_step4: "?? ??",
        faq_title: "?? ?? ??(FAQ)",
        faq_summary: "test-product-9ll.pages.dev ???? ????? ????.",
        faq_q1: "Q. ?? ??? ??????",
        faq_a1: "A. ??? ??? ?? ??? ????.",
        faq_q2: "Q. ??? ??? ????",
        faq_a2: "A. ???? ?? ??? ??? ??.",
    },
    de: {
      title: "Datenschutz",
      description: "Informationen zur Datenschutzerklärung.",
      badge_policy: "POLICY",
      brand_title: "Datenschutz",
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
      collect_title: "Datenerhebung und Nutzung",
      collect_desc: "Über das Anfrageformular können Name, E-Mail und Nachricht erfasst werden. Die Daten dienen nur zur Beantwortung.",
      collect_note: "Anfragen werden über Formspree übermittelt und folgen deren Richtlinien.",
      image_title: "Bildverarbeitung",
      image_desc: "Der Tiergesichtstest läuft im Browser. Dateien werden nicht gespeichert.",
      retention_title: "Aufbewahrung und Löschung",
      retention_desc: "Anfragedaten werden nach Abschluss in angemessener Frist gelöscht.",
      contact_title: "Kontakt",
      contact_desc: "Für Datenschutzfragen bitte das Formular auf der Startseite nutzen.",
      footer_about: "Über die Seite",
      footer_terms: "Nutzungsbedingungen",
      footer_menu_request: "Menü-Anfrage",
      footer_partner: "Partnerschaft",
      footer_copyright: "© 2026 TodayLab. Alle Rechte vorbehalten.",
      theme_light: "Hell",
      theme_dark: "Dunkel"
        geo_title: "Was erkl?rt die Datenschutzerkl?rung?",
        geo_summary: "Sie fasst zusammen, wie test-product-9ll.pages.dev Daten verarbeitet.",
        geo_def_title: "Was ist eine Datenschutzerkl?rung?",
        geo_def_desc: "Sie beschreibt Regeln zur Erhebung, Nutzung und Aufbewahrung von Daten.",
        geo_how_title: "Was sind die Kernpunkte?",
        geo_how_summary: "Siehe die Punkte unten.",
        geo_how_step1: "Erhobene Daten",
        geo_how_step2: "Nutzungszweck",
        geo_how_step3: "Aufbewahrungsdauer",
        geo_how_step4: "Kontaktweg",
        faq_title: "H?ufige Fragen (FAQ)",
        faq_summary: "Kurzfassung der Datenschutzerkl?rung auf test-product-9ll.pages.dev.",
        faq_q1: "Q. Welche Daten werden erhoben?",
        faq_a1: "A. Es werden nur minimale Daten f?r Anfragen erhoben.",
        faq_q2: "Q. Wie kontaktiere ich euch?",
        faq_a2: "A. Folge den Hinweisen auf der Seite.",
    },
    ja: {
      title: "プライバシーポリシー",
      description: "プライバシーポリシーの案内ページです。",
      badge_policy: "POLICY",
      brand_title: "プライバシーポリシー",
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
      collect_title: "個人情報の収集と利用",
      collect_desc: "問い合わせフォームで名前・メール・内容を収集する場合があります。回答のためだけに使用します。",
      collect_note: "問い合わせはFormspreeで送信され、同社の方針に従います。",
      image_title: "画像処理",
      image_desc: "動物顔テストはブラウザ内で処理し、画像は保存しません。",
      retention_title: "保管と削除",
      retention_desc: "問い合わせ対応後、合理的な期間内に削除します。",
      contact_title: "お問い合わせ",
      contact_desc: "プライバシーに関する問い合わせはメインページのフォームからお願いします。",
      footer_about: "サイト紹介",
      footer_terms: "利用規約",
      footer_menu_request: "メニュー追加依頼",
      footer_partner: "提携問い合わせ",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark"
        geo_title: "????????????????????",
        geo_summary: "test-product-9ll.pages.dev??????????????????",
        geo_def_title: "?????????????",
        geo_def_desc: "??????????????????????",
        geo_how_title: "??????",
        geo_how_summary: "???????????????",
        geo_how_step1: "????",
        geo_how_step2: "????",
        geo_how_step3: "????",
        geo_how_step4: "???????",
        faq_title: "???????FAQ?",
        faq_summary: "test-product-9ll.pages.dev?????????????????",
        faq_q1: "Q. ?????????????",
        faq_a1: "A. ??????????????????",
        faq_q2: "Q. ????????",
        faq_a2: "A. ????????????????",
    },
    en: {
      title: "Privacy Policy",
      description: "Privacy policy information page.",
      badge_policy: "POLICY",
      brand_title: "Privacy Policy",
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
      collect_title: "Data Collection & Use",
      collect_desc: "We may collect name, email, and message through the inquiry form. This information is used only to respond to inquiries.",
      collect_note: "Messages are delivered via Formspree and follow Formspree's policies.",
      image_title: "Image Processing",
      image_desc: "The animal face test runs in the browser. Uploaded files are not stored on servers.",
      retention_title: "Retention & Deletion",
      retention_desc: "Inquiry data is deleted within a reasonable period after resolution.",
      contact_title: "Contact",
      contact_desc: "For privacy inquiries, please use the contact form on the main page.",
      footer_about: "About",
      footer_terms: "Terms",
      footer_menu_request: "Menu Request",
      footer_partner: "Partnership",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark"
        geo_title: "What does the Privacy Policy explain?",
        geo_summary: "It summarizes how test-product-9ll.pages.dev handles personal data.",
        geo_def_title: "What is a Privacy Policy?",
        geo_def_desc: "It describes the rules for collection, use, and retention of data.",
        geo_how_title: "What are the key points?",
        geo_how_summary: "Check the items below.",
        geo_how_step1: "Collected items",
        geo_how_step2: "Purpose of use",
        geo_how_step3: "Retention period",
        geo_how_step4: "Contact method",
        faq_title: "Frequently Asked Questions (FAQ)",
        faq_summary: "A short summary of the Privacy Policy on test-product-9ll.pages.dev.",
        faq_q1: "Q. What information is collected?",
        faq_a1: "A. Only the minimum data needed for inquiries is collected.",
        faq_q2: "Q. How do I contact you?",
        faq_a2: "A. Follow the contact instructions on the page.",
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



