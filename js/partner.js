const langSelectTop = document.getElementById("langSelectTop");
  const themeToggle = document.getElementById("themeToggle");
  const themeRoot = document.documentElement;

  const i18n = window.getI18nForPage("partner");

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



