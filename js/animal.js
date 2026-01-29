const themeToggle = document.getElementById("themeToggle");
  const themeRoot = document.documentElement;
  const imageInput = document.getElementById("imageInput");
  const preview = document.getElementById("preview");
  const analyzeBtn = document.getElementById("analyzeBtn");
  const labelContainer = document.getElementById("label-container");
  const langSelectTop = document.getElementById("langSelectTop");

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
      menu_label: "메뉴",
      menu_animal: "동물상 테스트",
      menu_menu: "메뉴 추천",
      menu_label: "메뉴",
      menu_animal: "동물상 테스트",
      menu_menu: "메뉴 추천",
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
      footer_partner: "제휴 문의",
      footer_note: "사진은 브라우저에서 분석되며 서버에 저장되지 않습니다.",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark",
      upload_alert: "이미지를 먼저 업로드해주세요.",
      result_label_dog: "강아지상",
      result_label_cat: "고양이상"
    },
    de: {
      title: "Tiergesichtstest",
      description: "Lade ein Foto hoch, um Hund vs. Katze zu sehen.",
      badge_ai: "AI",
      brand_title: "Tiergesichtstest",
      nav_home: "Zur Startseite",
      nav_about: "Über die Seite",
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
      hero_title: "Hunde- vs. Katzengesicht",
      hero_desc: "Lade ein Foto hoch und wir analysieren deinen Typ.",
      upload_title: "Foto hochladen",
      upload_desc: "Frontaufnahmen liefern die beste Genauigkeit.",
      upload_alt: "Vorschau des hochgeladenen Bildes",
      analyze_btn: "Analysieren",
      result_title: "Vorhersage",
      result_desc: "Die höchste Wahrscheinlichkeit steht oben.",
      footer_about: "Über die Seite",
      footer_privacy: "Datenschutz",
      footer_terms: "Nutzungsbedingungen",
      footer_menu_request: "Menü-Anfrage",
      footer_partner: "Partnerschaft",
      footer_note: "Fotos werden im Browser analysiert und nicht gespeichert.",
      footer_copyright: "© 2026 TodayLab. Alle Rechte vorbehalten.",
      theme_light: "Hell",
      theme_dark: "Dunkel",
      upload_alert: "Bitte zuerst ein Bild hochladen.",
      result_label_dog: "Hundetyp",
      result_label_cat: "Katzentyp"
    },
    ja: {
      title: "動物顔テスト",
      description: "写真をアップロードして犬顔/猫顔の確率を表示します。",
      badge_ai: "AI",
      brand_title: "動物顔テスト",
      nav_home: "ホームへ",
      nav_about: "サイト紹介",
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
      hero_title: "犬顔 vs 猫顔",
      hero_desc: "写真をアップロードすると動物顔を分析します。",
      upload_title: "写真アップロード",
      upload_desc: "正面に近い写真ほど精度が高いです。",
      upload_alt: "アップロード画像のプレビュー",
      analyze_btn: "分析する",
      result_title: "予測結果",
      result_desc: "確率が高い順に表示されます。",
      footer_about: "サイト紹介",
      footer_privacy: "プライバシーポリシー",
      footer_terms: "利用規約",
      footer_menu_request: "メニュー追加依頼",
      footer_partner: "提携問い合わせ",
      footer_note: "写真はブラウザ内で解析され、保存されません。",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark",
      upload_alert: "先に画像をアップロードしてください。",
      result_label_dog: "犬顔",
      result_label_cat: "猫顔"
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
      menu_label: "Menu",
      menu_animal: "Animal Face Test",
      menu_menu: "Menu Picks",
      menu_label: "Menu",
      menu_animal: "Animal Face Test",
      menu_menu: "Menu Picks",
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
      footer_partner: "Partnership",
      footer_note: "Photos are analyzed in your browser and not stored on servers.",
      footer_copyright: "© 2026 TodayLab. All rights reserved.",
      theme_light: "Light",
      theme_dark: "Dark",
      upload_alert: "Please upload an image first.",
      result_label_dog: "Dog face",
      result_label_cat: "Cat face"
    }
  };

  let currentLang = localStorage.getItem("lang") || "ko";

  const MODEL_URL = "https://teachablemachine.withgoogle.com/models/0JKL623Vr/";
  let model, maxPredictions;

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
      const classPrediction = getResultLabel(prediction[i].className) + ": " + percent + "%";
      const row = document.createElement("div");
      row.textContent = classPrediction;
      labelContainer.appendChild(row);
    }
  }

  const resultLabelMap = {
    dog: "result_label_dog",
    Dog: "result_label_dog",
    DOG: "result_label_dog",
    cat: "result_label_cat",
    Cat: "result_label_cat",
    CAT: "result_label_cat"
  };

  function getResultLabel(className) {
    const key = resultLabelMap[className];
    if (key && i18n[currentLang] && i18n[currentLang][key]) {
      return i18n[currentLang][key];
    }
    return className;
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

  if (langSelectTop) {
    langSelectTop.addEventListener("change", (event) => {
      applyLanguage(event.target.value);
    });
  }

  initTheme();
  applyLanguage(currentLang);



