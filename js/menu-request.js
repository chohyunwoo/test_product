const langSelect = document.getElementById("langSelect");
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
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark"
    },
    en: {
      title: "Menu Request",
      description: "Request a new menu item to be added to the recommendations.",
      badge_menu: "MENU",
      brand_title: "Menu Request",
      nav_home: "Home",
      nav_animal: "Animal Face Test",
      nav_menu: "Menu Picks",
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
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark"
    }
  };

  let currentLang = localStorage.getItem("lang") || "ko";

  function applyTheme(theme) {
    if (theme === "light") {
      themeRoot.setAttribute("data-theme", "light");
      themeToggle.textContent = i18n[currentLang].theme_light;
    } else {
      themeRoot.removeAttribute("data-theme");
      themeToggle.textContent = i18n[currentLang].theme_dark;
    }
  }

  function initTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      applyTheme(saved);
      return;
    }
    const prefersLight = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    applyTheme(prefersLight ? "light" : "dark");
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
