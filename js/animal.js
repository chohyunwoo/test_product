const themeToggle = document.getElementById("themeToggle");
  const themeRoot = document.documentElement;
  const imageInput = document.getElementById("imageInput");
  const preview = document.getElementById("preview");
  const analyzeBtn = document.getElementById("analyzeBtn");
  const labelContainer = document.getElementById("label-container");
  const langSelectTop = document.getElementById("langSelectTop");

  const i18n = window.getI18nForPage("animal");

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



