const langSelect = document.getElementById("langSelect");
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
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark"
    },
    en: {
      title: "Terms",
      description: "Terms of service information page.",
      badge_terms: "TERMS",
      brand_title: "Terms",
      nav_home: "Home",
      nav_animal: "Animal Face Test",
      nav_menu: "Menu Picks",
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

    const theme = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark") applyTheme(theme);
  }

  if (langSelect) {
    langSelect.addEventListener("change", (event) => {
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
