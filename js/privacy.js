const langSelect = document.getElementById("langSelect");
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
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark"
    },
    en: {
      title: "Privacy Policy",
      description: "Privacy policy information page.",
      badge_policy: "POLICY",
      brand_title: "Privacy Policy",
      nav_home: "Home",
      nav_animal: "Animal Face Test",
      nav_menu: "Menu Picks",
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
