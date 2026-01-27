const langSelect = document.getElementById("langSelect");
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
    if (langSelect) langSelect.value = lang;
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

  if (langSelect) {
    langSelect.addEventListener("change", (event) => {
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


