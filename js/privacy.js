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
      theme_dark: "Dark",
        geo_title: "개인정보 처리방침은 무엇인가요?",
        geo_summary: "test-product-9ll.pages.dev의 개인정보 처리 기준을 안내합니다.",
        geo_def_title: "개인정보 처리방침이란 무엇인가요?",
        geo_def_desc: "개인정보 수집과 이용, 보관에 대한 기준을 설명합니다.",
        geo_how_title: "어떤 내용을 포함하나요?",
        geo_how_summary: "필수 항목과 처리 방식을 간단히 정리했습니다.",
        geo_how_step1: "수집하는 정보 범위를 확인합니다.",
        geo_how_step2: "이용 목적과 보관 기간을 확인합니다.",
        geo_how_step3: "문의 방법과 권리를 확인합니다.",
        geo_how_step4: "변경 사항 안내를 확인합니다.",
        faq_title: "자주 묻는 질문(FAQ)",
        faq_summary: "개인정보 처리 관련 질문을 모았습니다.",
        faq_q1: "Q. 어떤 정보가 수집되나요?",
        faq_a1: "A. 최소한의 연락 정보만 수집합니다.",
        faq_q2: "Q. 정보는 얼마나 보관되나요?",
        faq_a2: "A. 목적 달성 후 지체 없이 파기됩니다.",
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
      theme_dark: "Dunkel",
        geo_title: "Was ist die Datenschutzerklärung?",
        geo_summary: "Hier steht, wie test-product-9ll.pages.dev personenbezogene Daten verarbeitet.",
        geo_def_title: "Was ist eine Datenschutzerklärung?",
        geo_def_desc: "Sie beschreibt Erhebung, Nutzung und Speicherung von Daten.",
        geo_how_title: "Was ist enthalten?",
        geo_how_summary: "Die wichtigsten Punkte zur Datenverarbeitung sind aufgeführt.",
        geo_how_step1: "Welche Daten erhoben werden.",
        geo_how_step2: "Zwecke und Aufbewahrungsdauer prüfen.",
        geo_how_step3: "Kontaktmöglichkeiten und Rechte prüfen.",
        geo_how_step4: "Hinweise zu Änderungen ansehen.",
        faq_title: "Häufige Fragen (FAQ)",
        faq_summary: "Fragen zum Datenschutz.",
        faq_q1: "Q. Welche Daten werden erhoben?",
        faq_a1: "A. Es werden nur minimale Kontaktdaten erhoben.",
        faq_q2: "Q. Wie lange werden Daten gespeichert?",
        faq_a2: "A. Nach Zweckentfall werden sie gelöscht.",
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
      theme_dark: "Dark",
        geo_title: "プライバシーポリシーとは？",
        geo_summary: "test-product-9ll.pages.dev の個人情報の扱いを説明します。",
        geo_def_title: "プライバシーポリシーとは何ですか？",
        geo_def_desc: "収集・利用・保管の方針を示します。",
        geo_how_title: "どんな内容ですか？",
        geo_how_summary: "個人情報の取り扱い要点をまとめています。",
        geo_how_step1: "収集する情報を確認します。",
        geo_how_step2: "利用目的と保存期間を確認します。",
        geo_how_step3: "問い合わせ方法と権利を確認します。",
        geo_how_step4: "変更時の案内を確認します。",
        faq_title: "よくある質問（FAQ）",
        faq_summary: "プライバシーに関する質問です。",
        faq_q1: "Q. どんな情報を収集しますか？",
        faq_a1: "A. 最小限の連絡先情報のみです。",
        faq_q2: "Q. 情報はどれくらい保存されますか？",
        faq_a2: "A. 目的達成後に削除します。",
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
      theme_dark: "Dark",
        geo_title: "What is the privacy policy?",
        geo_summary: "This page explains how test-product-9ll.pages.dev handles personal data.",
        geo_def_title: "What is a privacy policy?",
        geo_def_desc: "It describes what data is collected, used, and stored.",
        geo_how_title: "What does it include?",
        geo_how_summary: "Key points about data handling are listed.",
        geo_how_step1: "Check what information is collected.",
        geo_how_step2: "Review purposes and retention periods.",
        geo_how_step3: "See contact methods and user rights.",
        geo_how_step4: "Check how policy changes are announced.",
        faq_title: "FAQ",
        faq_summary: "Questions about privacy handling.",
        faq_q1: "Q. What data is collected?",
        faq_a1: "A. Only minimal contact info is collected.",
        faq_q2: "Q. How long is data stored?",
        faq_a2: "A. Data is deleted once the purpose is fulfilled.",
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



