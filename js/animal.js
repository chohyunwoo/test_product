const themeToggle = document.getElementById("themeToggle");
  const themeRoot = document.documentElement;
  const imageInput = document.getElementById("imageInput");
  const preview = document.getElementById("preview");
  const analyzeBtn = document.getElementById("analyzeBtn");
  const labelContainer = document.getElementById("label-container");
  const langSelect = document.getElementById("langSelect");

  const i18n = {
    ko: {
      title: "동물상 테스트",
      description: "사진을 업로드하면 강아지상/고양이상 확률을 보여주는 동물상 테스트 페이지입니다.",
      badge_ai: "AI",
      brand_title: "동물상 테스트",
      nav_home: "홈으로",
      nav_about: "사이트 소개",
      nav_animal: "동물상 테스트",
      nav_menu: "메뉴 추천",
      settings_label: "설정",
      settings_language: "언어",
      settings_theme: "테마",
      hero_title: "강아지상 vs 고양이상",
      hero_desc: "사진을 업로드하면 동물상을 분석해드려요.",
      upload_title: "사진 업로드",
      upload_desc: "정면에 가까운 얼굴 사진일수록 정확도가 높아요.",
      upload_alt: "업로드한 이미지 미리보기",
      analyze_btn: "분석하기",
      result_title: "예측 결과",
      result_desc: "확률이 높은 동물상이 위에 표시됩니다.",
      footer_about: "사이트 소개",
      footer_privacy: "개인정보 처리방침",
      footer_terms: "이용약관",
      footer_menu_request: "메뉴 추가 요청",
      footer_note: "사진은 브라우저에서 분석되며 서버에 저장되지 않습니다.",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark",
      upload_alert: "이미지를 먼저 업로드해주세요."
    },
    en: {
      title: "Animal Face Test",
      description: "Upload a photo to see dog vs cat face probabilities.",
      badge_ai: "AI",
      brand_title: "Animal Face Test",
      nav_home: "Home",
      nav_about: "About",
      nav_animal: "Animal Face Test",
      nav_menu: "Menu Picks",
      settings_label: "Settings",
      settings_language: "Language",
      settings_theme: "Theme",
      hero_title: "Dog Face vs Cat Face",
      hero_desc: "Upload a photo to analyze your animal face type.",
      upload_title: "Upload Photo",
      upload_desc: "Front-facing photos yield the best accuracy.",
      upload_alt: "Preview of uploaded image",
      analyze_btn: "Analyze",
      result_title: "Predictions",
      result_desc: "The higher probability appears at the top.",
      footer_about: "About",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms",
      footer_menu_request: "Menu Request",
      footer_note: "Photos are analyzed in your browser and not stored on servers.",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark",
      upload_alert: "Please upload an image first."
    }
  };

  let currentLang = localStorage.getItem("lang") || "ko";

  const MODEL_URL = "https://teachablemachine.withgoogle.com/models/0JKL623Vr/";
  let model, maxPredictions;

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

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.dataset.i18nAlt;
      if (i18n[lang][key]) el.setAttribute("alt", i18n[lang][key]);
    });

    const theme = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark") applyTheme(theme);
  }

  async function ensureModel() {
    if (model) return;
    const modelURL = MODEL_URL + "model.json";
    const metadataURL = MODEL_URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
  }

  function renderLabels(prediction) {
    labelContainer.innerHTML = "";
    for (let i = 0; i < maxPredictions; i++) {
      const percent = Math.round(prediction[i].probability * 100);
      const classPrediction = prediction[i].className + ": " + percent + "%";
      const row = document.createElement("div");
      row.textContent = classPrediction;
      labelContainer.appendChild(row);
    }
  }

  async function analyzeImage() {
    if (!imageInput.files || imageInput.files.length === 0) {
      return false;
    }
    await ensureModel();
    const prediction = await model.predict(preview);
    renderLabels(prediction);
    return true;
  }

  analyzeBtn.addEventListener("click", async () => {
    const ok = await analyzeImage();
    if (!ok) alert(i18n[currentLang].upload_alert);
  });

  imageInput.addEventListener("change", () => {
    const file = imageInput.files && imageInput.files[0];
    if (!file) return;
    const url = window.URL.createObjectURL(file);
    preview.src = url;
    preview.style.display = "block";
    analyzeImage();
  });
  themeToggle.onclick = () => {
    const isLight = themeRoot.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem("theme", next);
  };

  if (langSelect) {
    langSelect.addEventListener("change", (event) => {
      applyLanguage(event.target.value);
    });
  }

  initTheme();
  applyLanguage(currentLang);
