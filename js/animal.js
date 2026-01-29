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
      result_label_cat: "고양이상",
        geo_title: "동물상 테스트는 무엇인가요?",
        geo_summary: "test-product-9ll.pages.dev 동물상 테스트는 사진 없이 간단한 질문으로 동물상 유형을 알려줍니다.",
        geo_def_title: "동물상 테스트란 무엇인가요?",
        geo_def_desc: "질문에 답하면 특징에 맞는 동물상 결과를 안내하는 테스트입니다.",
        geo_how_title: "어떻게 진행하나요?",
        geo_how_summary: "몇 가지 질문에 답하면 결과가 바로 표시됩니다.",
        geo_how_step1: "테스트 시작 버튼을 누릅니다.",
        geo_how_step2: "질문에 답합니다.",
        geo_how_step3: "결과와 설명을 확인합니다.",
        geo_result_title: "결과는 어떻게 나오나요?",
        geo_result_desc: "답변 패턴에 따라 동물상 유형이 표시됩니다.",
        faq_title: "자주 묻는 질문(FAQ)",
        faq_summary: "동물상 테스트 관련 질문을 모았습니다.",
        faq_q1: "Q. 사진을 업로드해야 하나요?",
        faq_a1: "A. 사진 업로드 없이 질문으로만 진행됩니다.",
        faq_q2: "Q. 결과는 저장되나요?",
        faq_a2: "A. 결과는 저장되지 않으며 바로 확인만 할 수 있습니다.",
        faq_q3: "Q. 다시 테스트할 수 있나요?",
        faq_a3: "A. 언제든지 다시 진행할 수 있습니다.",
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
      result_label_cat: "Katzentyp",
        geo_title: "Was ist der Tiergesichtstest?",
        geo_summary: "Der Tiergesichtstest auf test-product-9ll.pages.dev zeigt anhand einfacher Fragen einen Typ, ganz ohne Foto.",
        geo_def_title: "Was ist ein Tiergesichtstest?",
        geo_def_desc: "Ein Quiz, das anhand der Antworten einen Tier-Typ vorschlägt.",
        geo_how_title: "Wie läuft es ab?",
        geo_how_summary: "Ein paar Fragen beantworten, Ergebnis erscheint sofort.",
        geo_how_step1: "Start-Button drücken.",
        geo_how_step2: "Fragen beantworten.",
        geo_how_step3: "Ergebnis und Beschreibung ansehen.",
        geo_result_title: "Wie entsteht das Ergebnis?",
        geo_result_desc: "Das Antwortmuster wird einem Tier-Typ zugeordnet.",
        faq_title: "Häufige Fragen (FAQ)",
        faq_summary: "Fragen zum Tiergesichtstest.",
        faq_q1: "Q. Muss ich ein Foto hochladen?",
        faq_a1: "A. Nein, der Test nutzt nur Fragen.",
        faq_q2: "Q. Werden Ergebnisse gespeichert?",
        faq_a2: "A. Nein, Ergebnisse werden nicht gespeichert.",
        faq_q3: "Q. Kann ich den Test wiederholen?",
        faq_a3: "A. Ja, jederzeit.",
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
      result_label_cat: "猫顔",
        geo_title: "動物顔テストとは？",
        geo_summary: "test-product-9ll.pages.dev の動物顔テストは、写真なしで簡単な質問からタイプを示します。",
        geo_def_title: "動物顔テストとは何ですか？",
        geo_def_desc: "回答に基づき動物タイプを提案するクイズです。",
        geo_how_title: "進め方は？",
        geo_how_summary: "いくつかの質問に答えると結果が表示されます。",
        geo_how_step1: "開始ボタンを押します。",
        geo_how_step2: "質問に答えます。",
        geo_how_step3: "結果と説明を確認します。",
        geo_result_title: "結果はどう決まりますか？",
        geo_result_desc: "回答の傾向からタイプが決まります。",
        faq_title: "よくある質問（FAQ）",
        faq_summary: "動物顔テストに関する質問集です。",
        faq_q1: "Q. 写真のアップロードは必要ですか？",
        faq_a1: "A. いいえ、質問のみで進めます。",
        faq_q2: "Q. 結果は保存されますか？",
        faq_a2: "A. いいえ、保存されません。",
        faq_q3: "Q. もう一度できますか？",
        faq_a3: "A. はい、いつでも再テストできます。",
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
      result_label_cat: "Cat face",
        geo_title: "What is the animal-face test?",
        geo_summary: "The animal-face test on test-product-9ll.pages.dev shows a type based on simple questions, without photos.",
        geo_def_title: "What is an animal-face test?",
        geo_def_desc: "It’s a quiz that suggests an animal type based on your answers.",
        geo_how_title: "How does it work?",
        geo_how_summary: "Answer a few questions and your result appears instantly.",
        geo_how_step1: "Press the start button.",
        geo_how_step2: "Answer the questions.",
        geo_how_step3: "Check your result and description.",
        geo_result_title: "How are results determined?",
        geo_result_desc: "Your answer pattern maps to an animal-face type.",
        faq_title: "FAQ",
        faq_summary: "Common questions about the animal-face test.",
        faq_q1: "Q. Do I need to upload a photo?",
        faq_a1: "A. No, the test uses questions only.",
        faq_q2: "Q. Are results saved?",
        faq_a2: "A. No, results are not stored.",
        faq_q3: "Q. Can I retake the test?",
        faq_a3: "A. Yes, you can retake it anytime.",
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



