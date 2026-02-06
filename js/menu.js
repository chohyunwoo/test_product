const themeToggle = document.getElementById("themeToggle");
  const themeRoot = document.documentElement;
  const menuGrid = document.getElementById("menuGrid");
  const menuPickBtn = document.getElementById("menuPickBtn");
  const langSelectTop = document.getElementById("langSelectTop");

  const i18n = window.getI18nForPage("menu");

  let currentLang = localStorage.getItem("lang") || "ko";

  const fallbackMenuOptions = [
    {
      title: { ko: "매운 칼국수", en: "Spicy Kalguksu" },
      desc: { ko: "기운이 떨어질 때 따뜻하게 회복하기 좋아요.", en: "Warm soup to reset on low-energy days." },
      tag: { ko: "따뜻함", en: "Warm" }
    },
    {
      title: { ko: "연어 포케", en: "Salmon Poke" },
      desc: { ko: "집중이 필요한 날에 가볍게 즐기기 좋아요.", en: "Light but satisfying when you need focus." },
      tag: { ko: "가볍게", en: "Light" }
    },
    {
      title: { ko: "트러플 크림 파스타", en: "Truffle Cream Pasta" },
      desc: { ko: "오늘은 작은 사치를 즐겨도 좋아요.", en: "A small treat for yourself today." },
      tag: { ko: "위로", en: "Comfort" }
    },
    {
      title: { ko: "숯불 닭갈비", en: "Charcoal Dakgalbi" },
      desc: { ko: "에너지가 필요할 때 과감한 선택이에요.", en: "A bold meal when you need energy." },
      tag: { ko: "에너지", en: "Energy" }
    },
    {
      title: { ko: "새우 로제 리소토", en: "Shrimp Rose Risotto" },
      desc: { ko: "부드럽고 살짝 매콤해 기분 전환에 좋아요.", en: "Creamy with a hint of spice for a mood lift." },
      tag: { ko: "리프레시", en: "Refresh" }
    },
    {
      title: { ko: "불고기 비빔밥", en: "Bulgogi Bibimbap" },
      desc: { ko: "든든한 한 그릇이 생각날 때 좋아요.", en: "Perfect when you want a hearty bowl." },
      tag: { ko: "든든함", en: "Hearty" }
    },
    {
      title: { ko: "치킨 샐러드", en: "Chicken Salad" },
      desc: { ko: "가볍지만 단백질이 풍부해 균형에 좋아요.", en: "Light yet protein-rich for balance." },
      tag: { ko: "균형", en: "Balance" }
    },
    {
      title: { ko: "매운 돼지덮밥", en: "Spicy Pork Rice Bowl" },
      desc: { ko: "매콤하게 오후 에너지를 끌어올려보세요.", en: "Boost your afternoon with a spicy kick." },
      tag: { ko: "활력", en: "Energy" }
    }
  ];

  const MEALDB_RANDOM_ENDPOINT = "https://www.themealdb.com/api/json/v1/1/random.php";

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function extractIngredients(meal, limit = 4) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const value = meal[`strIngredient${i}`];
      if (value && value.trim()) ingredients.push(value.trim());
      if (ingredients.length >= limit) break;
    }
    return ingredients;
  }

  function formatMeal(meal) {
    const ingredients = extractIngredients(meal, 4);
    const tags = [meal.strCategory, meal.strArea].filter(Boolean);
    return {
      title: { ko: meal.strMeal, en: meal.strMeal },
      desc: {
        ko: ingredients.length ? `핵심 재료: ${ingredients.join(", ")}` : "오늘 한 번 도전해볼 만한 레시피예요.",
        en: ingredients.length ? `Key ingredients: ${ingredients.join(", ")}` : "A recipe worth trying today."
      },
      tags,
      image: meal.strMealThumb || "",
      link: meal.strSource || meal.strYoutube || ""
    };
  }

  async function fetchRandomMeal() {
    const response = await fetch(MEALDB_RANDOM_ENDPOINT);
    if (!response.ok) throw new Error("Meal API error");
    const data = await response.json();
    return data && data.meals ? data.meals[0] : null;
  }

  async function fetchMenuPicks(count = 4) {
    const picks = [];
    const seen = new Set();
    let attempts = 0;

    while (picks.length < count && attempts < count * 3) {
      attempts += 1;
      const meal = await fetchRandomMeal();
      if (!meal || seen.has(meal.idMeal)) continue;
      seen.add(meal.idMeal);
      picks.push(formatMeal(meal));
    }

    return picks;
  }

  function renderMenuCard(item) {
    const title = escapeHTML(item.title[currentLang] || item.title.en || "");
    const desc = escapeHTML(item.desc[currentLang] || item.desc.en || "");
    const tags = item.tags && item.tags.length
      ? item.tags
      : [currentLang === "ko" ? "레시피" : "Recipe"];
    const imgMarkup = item.image
      ? `<img class="menu-thumb" src="${escapeHTML(item.image)}" alt="${title}" loading="lazy" />`
      : `<div class="menu-thumb"></div>`;
    const tagMarkup = tags
      .map(tag => `<span class="tag">${escapeHTML(tag)}</span>`)
      .join("");
    const linkMarkup = item.link
      ? `<a class="menu-link" href="${escapeHTML(item.link)}" target="_blank" rel="noopener">${i18n[currentLang].menu_source}</a>`
      : "";

    return `
      <div class="menu-card">
        ${imgMarkup}
        <h3>${title}</h3>
        <p>${desc}</p>
        <div class="menu-meta">${tagMarkup}</div>
        ${linkMarkup}
      </div>
    `;
  }

  function shuffle(list) {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  async function renderMenu() {
    if (!menuGrid) return;

    menuGrid.innerHTML = `
      <div class="menu-card menu-alert">
        <p>${i18n[currentLang].menu_loading}</p>
      </div>
    `;

    let picks = [];
    try {
      picks = await fetchMenuPicks(4);
    } catch (error) {
      picks = [];
    }

    if (!picks.length) {
      const fallback = shuffle(fallbackMenuOptions).slice(0, 4).map(item => ({
        title: item.title,
        desc: item.desc,
        tags: [item.tag[currentLang]],
        image: "",
        link: ""
      }));

      menuGrid.innerHTML = `
        <div class="menu-card menu-alert">
          <p>${i18n[currentLang].menu_error}</p>
        </div>
      ` + fallback.map(renderMenuCard).join("");
      return;
    }

    menuGrid.innerHTML = picks.map(renderMenuCard).join("");
  }

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

    const theme = localStorage.getItem("theme");
    if (theme === "light" || theme === "dark") applyTheme(theme);
    renderMenu();
  }

  if (menuPickBtn) menuPickBtn.addEventListener("click", renderMenu);

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



