(function () {
  const pageKey = document.body && document.body.dataset ? document.body.dataset.i18nPage : null;
  if (!pageKey || !window.getI18nForPage) return;

  const i18n = window.getI18nForPage(pageKey);
  const metaDesc = document.querySelector('meta[name="description"]');
  const langSelectTop = document.getElementById("langSelectTop");
  const themeToggle = document.getElementById("themeToggle");
  const themeRoot = document.documentElement;

  let currentLang = localStorage.getItem("lang") || "ko";
  let currentTheme = localStorage.getItem("theme") === "dark" ? "dark" : "light";

  function t(key) {
    if (i18n[currentLang] && i18n[currentLang][key]) return i18n[currentLang][key];
    if (i18n.en && i18n.en[key]) return i18n.en[key];
    if (i18n.ko && i18n.ko[key]) return i18n.ko[key];
    return "";
  }

  function applyI18n() {
    const title = t("title");
    const desc = t("description");
    if (title) document.title = title;
    if (metaDesc && desc) metaDesc.setAttribute("content", desc);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const value = t(key);
      if (value) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      const value = t(key);
      if (value) el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      const value = t(key);
      if (value) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.dataset.i18nAlt;
      const value = t(key);
      if (value) el.setAttribute("alt", value);
    });
  }

  function applyTheme() {
    themeRoot.setAttribute("data-theme", currentTheme);
    if (themeToggle) themeToggle.textContent = currentTheme === "dark" ? "Light" : "Dark";
  }

  if (langSelectTop) {
    langSelectTop.value = currentLang;
    langSelectTop.addEventListener("change", () => {
      currentLang = langSelectTop.value;
      localStorage.setItem("lang", currentLang);
      applyI18n();
    });
  }

  if (themeToggle) {
    applyTheme();
    themeToggle.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", currentTheme);
      applyTheme();
    });
  } else {
    applyTheme();
  }

  applyI18n();
})();
