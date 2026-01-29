const grid = document.getElementById("grid");
    const footer = document.getElementById("footer");
    const bonusCheck = document.getElementById("bonusCheck");
    const themeToggle = document.getElementById("themeToggle");
    const themeRoot = document.documentElement;
    const fortuneText = document.getElementById("fortuneText");
    const fortuneTags = document.getElementById("fortuneTags");
    const zodiacBtn = document.getElementById("zodiacBtn");
    const zodiacSelect = document.getElementById("zodiacSelect");
    const menuGrid = document.getElementById("menuGrid");
    const menuPickBtn = document.getElementById("menuPickBtn");
    const langSelectTop = document.getElementById("langSelectTop");
    const birthDateInput = document.getElementById("birthDateInput");
    const birthDateBtn = document.getElementById("birthDateBtn");
    const birthPickerBtn = document.getElementById("birthPickerBtn");
    const luckScoreValue = document.getElementById("luckScoreValue");
    const luckScoreFill = document.getElementById("luckScoreFill");
    const focusCompatibilityValue = document.getElementById("focusCompatibilityValue");
    const focusLuckyNumberValue = document.getElementById("focusLuckyNumberValue");
    const focusLuckyTimeValue = document.getElementById("focusLuckyTimeValue");
    const lottoTabsContainer = document.getElementById("lottoTabs");
    const lottoPanelsContainer = document.getElementById("lottoPanels");

    const i18n = {
      ko: {
        title: "운을 시험해보세요",
        description: "오늘의 운세, 로또 번호 추천, 메뉴 추천, 동물상 테스트까지 한 번에 즐길 수 있는 엔터테인먼트 사이트입니다.",
        badge_today: "오늘",
        brand_title: "운세를 보고 당신의 운을 시험해보세요",
        nav_animal: "동물상 테스트",
        nav_menu: "메뉴 추천",
        nav_about: "사이트 소개",
        menu_label: "메뉴",
        menu_animal: "동물상 테스트",
        menu_menu: "메뉴 추천",
        menu_loading: "메뉴를 불러오는 중...",
        menu_error: "메뉴를 불러오지 못했어요.",
        menu_source: "출처",
        fortune_title: "오늘의 별자리 운세",
        fortune_tag: "별자리 가이드",
        luck_score_label: "오늘의 운빨 지수",
        settings_label: "설정",
        settings_language: "언어",
        settings_theme: "테마",
        birth_label: "생일로 별자리 찾기",
        birth_btn: "생일 적용",
        birth_placeholder: "생일을 선택하세요",
        birth_hint: "생일을 입력하면 별자리가 자동으로 선택됩니다.",
        fortune_btn: "운세 보기",
        zodiac_loading: "운세를 불러오는 중...",
        zodiac_error: "운세를 불러오지 못했어요. 잠시 후 다시 시도해주세요.",
        zodiac_compatibility: "궁합",
        zodiac_lucky_number: "행운 숫자",
        zodiac_lucky_time: "행운 시간",
        zodiac_color: "행운 색",
        zodiac_mood: "오늘의 기분",
        zodiac_sign: "별자리",
        zodiac_range: "기간",
        zodiac_no_data: "해당 언어에 맞는 운세 데이터가 없어요.",
        focus_compatibility_label: "궁합",
        focus_compatibility_tag: "오늘의 궁합",
        focus_lucky_number_label: "행운 숫자",
        focus_lucky_number_tag: "오늘의 숫자",
        focus_lucky_time_label: "행운 시간",
        focus_lucky_time_tag: "오늘의 시간",
        lotto_title: "로또 추첨",
        lotto_desc: "버튼을 누르면 1~45 사이의 번호 6개를 중복 없이 5게임 추천합니다.",
        lotto_tab_ko: "한국 로또",
        lotto_tab_de: "독일 로또",
        lotto_tab_jp: "일본 복권",
        lotto_pick: "5게임 추천받기",
        lotto_copy: "전체 복사",
        lotto_bonus: "보너스 번호 포함",
        lotto_bonus_label: "보너스",
        lotto_de_title: "6aus49 + Superzahl",
        lotto_de_desc: "1~49 사이 숫자 6개와 Superzahl(0~9) 1개를 랜덤으로 생성합니다.",
        lotto_de_pick: "번호 생성",
        lotto_de_copy: "결과 복사",
        lotto_de_super: "Superzahl",
        lotto_jp_title: "일본 복권",
        lotto_jp_desc: "복권 종류를 선택해 번호를 생성하세요.",
        lotto_jp_type_label: "복권 종류",
        lotto_jp_pick: "번호 생성",
        lotto_jp_copy: "결과 복사",
        lotto_jp_loto6: "로또 6",
        lotto_jp_loto7: "로또 7",
        lotto_jp_mini: "미니 로또",
        lotto_jp_numbers3: "넘버스 3",
        lotto_jp_numbers4: "넘버스 4",
        note_title: "오늘의 별자리 큐레이션 노트",
        note_desc: "별자리 운세는 매일 업데이트되는 데이터로 구성되며, 참고용 안내로 제공됩니다.",
        note_line_1: "오늘의 별자리 운세는 날짜별로 새롭게 반영되며, 핵심 키워드를 중심으로 요약됩니다.",
        note_line_2: "운세 해석은 재미와 참고를 위한 안내이며, 개인의 선택과 상황을 우선으로 고려해주세요.",
        contact_title: "제휴 문의",
        contact_desc: "간단한 정보만 남겨주시면 빠르게 연락드릴게요.",
        contact_name_label: "이름",
        contact_name_placeholder: "이름",
        contact_email_label: "이메일",
        contact_message_label: "문의 내용",
        contact_message_placeholder: "문의 내용을 입력해주세요.",
        contact_submit: "문의 보내기",
        footer_about: "사이트 소개",
        footer_privacy: "개인정보 처리방침",
        footer_terms: "이용약관",
        footer_menu: "메뉴 추천",
        footer_menu_request: "메뉴 추가 요청",
        footer_partner: "제휴 문의",
        footer_contact_note: "문의는 제휴 문의 폼을 통해 접수받고 있습니다.",
        footer_copyright: "© 2026 TodayLab. All rights reserved.",
        theme_light: "Light",
        theme_dark: "Dark",
        game_label: "게임",
        bonus_label: "보너스 포함",
        complete_label: "추첨 완료",
        total_games: "총 5게임",
        copy_success: "전체 번호가 복사됐어요."
        geo_q_title: "? ???? ??? ??????",
        geo_q_summary: "test-product-9ll.pages.dev? ??? ??, ?? ??, ?? ??, ??? ???? ???? ????.",
        geo_def_fortune_title: "??? ?????",
        geo_def_fortune_desc: "??? ??? ??? ???? ? ?? ??? ???.",
        geo_def_lotto_title: "?? ???? ?????",
        geo_def_lotto_desc: "?? ???? ??? ?? ??? ??? ??? ???? ????.",
        geo_how_title: "??? ??????",
        geo_how_desc: "?? ??? ?? ??? ? ??.",
        geo_how_step1: "??? ?? ????.",
        geo_how_step2: "?? ??? ?? ??? ???.",
        geo_how_step3: "??? ???? ???? ????.",
        faq_title: "?? ?? ??(FAQ)",
        faq_summary: "test-product-9ll.pages.dev? ?? ?? ??? ???.",
        faq_q1: "Q. test-product-9ll.pages.dev? ?? ???????",
        faq_a1: "A. ??? ?? ??? ?? ???? ???? ?????? ????.",
        faq_q2: "Q. ??? ??????",
        faq_a2: "A. ??? ???? ?? ???? ????.",
        faq_q3: "Q. ?? ??? ??????",
        faq_a3: "A. ?? ??? ????? ??? ???? ???.",
      },
      de: {
        title: "Teste dein Glück",
        description: "Ein Entertainment-Hub für Tageshoroskope, Lottozahlen, Menüideen und den Tiergesichtstest.",
        badge_today: "Heute",
        brand_title: "Schau dir dein Horoskop an und teste dein Glück",
        nav_animal: "Tiergesichtstest",
        nav_menu: "Menü-Empfehlung",
        nav_about: "Über die Seite",
        menu_label: "Menü",
        menu_animal: "Tiergesichtstest",
        menu_menu: "Menü-Empfehlung",
        menu_loading: "Menü wird geladen...",
        menu_error: "Menü konnte nicht geladen werden.",
        menu_source: "Quelle",
        fortune_title: "Heutiges Sternzeichen-Horoskop",
        fortune_tag: "Sternzeichen-Guide",
        luck_score_label: "Heutiger Glücks-Score",
        settings_label: "Einstellungen",
        settings_language: "Sprache",
        settings_theme: "Design",
        birth_label: "Sternzeichen per Geburtstag",
        birth_btn: "Geburtstag anwenden",
        birth_placeholder: "Geburtstag auswählen",
        birth_hint: "Geburtstag eingeben, Sternzeichen wird automatisch gewählt.",
        fortune_btn: "Horoskop ansehen",
        zodiac_loading: "Horoskop wird geladen...",
        zodiac_error: "Horoskop konnte nicht geladen werden. Bitte später erneut versuchen.",
        zodiac_compatibility: "Kompatibilität",
        zodiac_lucky_number: "Glückszahl",
        zodiac_lucky_time: "Glückszeit",
        zodiac_color: "Glücksfarbe",
        zodiac_mood: "Tagesstimmung",
        zodiac_sign: "Sternzeichen",
        zodiac_range: "Zeitraum",
        zodiac_no_data: "Für diese Sprache gibt es keine Horoskopdaten.",
        focus_compatibility_label: "Kompatibilität",
        focus_compatibility_tag: "Beste Übereinstimmung",
        focus_lucky_number_label: "Glückszahl",
        focus_lucky_number_tag: "Heutige Zahl",
        focus_lucky_time_label: "Glückszeit",
        focus_lucky_time_tag: "Heutige Zeit",
        lotto_title: "Lotto-Ziehung",
        lotto_desc: "Klicke den Button, um 5 Spiele mit 6 Zahlen von 1 bis 45 ohne Duplikate zu ziehen.",
        lotto_tab_ko: "Korea-Lotto",
        lotto_tab_de: "Deutschland-Lotto",
        lotto_tab_jp: "Japan-Lotto",
        lotto_pick: "5 Tipps ziehen",
        lotto_copy: "Alle kopieren",
        lotto_bonus: "Bonuszahl einschließen",
        lotto_de_title: "6aus49 + Superzahl",
        lotto_de_desc: "6 Zahlen von 1 bis 49 plus eine Superzahl (0 bis 9) werden zufällig erzeugt.",
        lotto_de_pick: "Zahlen generieren",
        lotto_de_copy: "Ergebnis kopieren",
        lotto_de_super: "Superzahl",
        note_title: "Tagesnotiz zum Sternzeichen",
        note_desc: "Horoskope werden täglich aktualisiert und dienen als Orientierung.",
        note_line_1: "Das Tageshoroskop wird datumsbasiert aktualisiert und auf Kernpunkte verdichtet.",
        note_line_2: "Die Deutung dient der Unterhaltung; persönliche Entscheidungen haben Vorrang.",
        contact_title: "Kooperationsanfrage",
        contact_desc: "Hinterlasse kurz deine Infos, wir melden uns schnell.",
        contact_name_label: "Name",
        contact_name_placeholder: "Name",
        contact_email_label: "E-Mail",
        contact_message_label: "Nachricht",
        contact_message_placeholder: "Bitte gib deine Anfrage ein.",
        contact_submit: "Anfrage senden",
        footer_about: "Über die Seite",
        footer_privacy: "Datenschutz",
        footer_terms: "Nutzungsbedingungen",
        footer_menu: "Menü-Empfehlung",
        footer_menu_request: "Menü-Anfrage",
        footer_partner: "Partnerschaft",
        footer_contact_note: "Anfragen bitte über das Formular senden.",
        footer_copyright: "© 2026 TodayLab. Alle Rechte vorbehalten.",
        theme_light: "Hell",
        theme_dark: "Dunkel",
        game_label: "Spiel",
        bonus_label: "Bonus enthalten",
        complete_label: "Ziehung abgeschlossen",
        total_games: "Insgesamt 5 Spiele",
        copy_success: "Alle Zahlen wurden kopiert."
        geo_q_title: "Was bietet diese Seite?",
        geo_q_summary: "test-product-9ll.pages.dev liefert schnelle Antworten zu Tageshoroskop, Lottozahlen, Men?vorschl?gen und Tiergesicht-Tests.",
        geo_def_fortune_title: "Was ist ein Horoskop?",
        geo_def_fortune_desc: "Ein Horoskop ist eine Ein-Zeilen-?bersicht zu heutigen Tendenzen und Stichworten.",
        geo_def_lotto_title: "Was ist eine Lotto-Empfehlung?",
        geo_def_lotto_desc: "Sie erzeugt zuf?llige Zahlen nach den Regeln und zeigt sie an.",
        geo_how_title: "Wie benutze ich es?",
        geo_how_desc: "So geht es Schritt f?r Schritt.",
        geo_how_step1: "W?hle einen Tab.",
        geo_how_step2: "Klicke auf ?Generieren?.",
        geo_how_step3: "Pr?fe das Ergebnis und kopiere es bei Bedarf.",
        faq_title: "H?ufige Fragen (FAQ)",
        faq_summary: "Kurzantworten zu test-product-9ll.pages.dev.",
        faq_q1: "Q. Was ist test-product-9ll.pages.dev?",
        faq_a1: "A. Eine Entertainment-Seite mit kurzen, klaren Ergebnissen f?r Horoskop und Empfehlungen.",
        faq_q2: "Q. Werden Ergebnisse gespeichert?",
        faq_a2: "A. Ergebnisse werden sofort erzeugt und angezeigt.",
        faq_q3: "Q. Sind Empfehlungen garantiert?",
        faq_a3: "A. Empfehlungen sind unverbindlich und ohne Garantie.",
      },
      ja: {
        title: "運を試してみよう",
        description: "今日の運勢、ロト番号、メニュー提案、動物顔テストを一度に楽しめます。",
        badge_today: "今日",
        brand_title: "運勢を見てあなたの運を試してみましょう",
        nav_animal: "動物顔テスト",
        nav_menu: "メニュー提案",
        nav_about: "サイト紹介",
        menu_label: "メニュー",
        menu_animal: "動物顔テスト",
        menu_menu: "メニュー提案",
        menu_loading: "メニューを読み込み中...",
        menu_error: "メニューの読み込みに失敗しました。",
        menu_source: "出典",
        fortune_title: "今日の星座運勢",
        fortune_tag: "星座ガイド",
        luck_score_label: "今日の運勢スコア",
        settings_label: "設定",
        settings_language: "言語",
        settings_theme: "テーマ",
        birth_label: "誕生日で星座を探す",
        birth_btn: "誕生日適用",
        birth_placeholder: "誕生日を選択してください",
        birth_hint: "誕生日を入力すると星座が自動選択されます。",
        fortune_btn: "運勢を見る",
        zodiac_loading: "運勢を読み込み中...",
        zodiac_error: "運勢を読み込めませんでした。後でもう一度お試しください。",
        zodiac_compatibility: "相性",
        zodiac_lucky_number: "ラッキーナンバー",
        zodiac_lucky_time: "ラッキータイム",
        zodiac_color: "ラッキーカラー",
        zodiac_mood: "今日の気分",
        zodiac_sign: "星座",
        zodiac_range: "期間",
        zodiac_no_data: "この言語の運勢データはありません。",
        focus_compatibility_label: "相性",
        focus_compatibility_tag: "今日の相性",
        focus_lucky_number_label: "ラッキーナンバー",
        focus_lucky_number_tag: "今日の数字",
        focus_lucky_time_label: "ラッキータイム",
        focus_lucky_time_tag: "今日の時間",
        lotto_title: "ロト抽選",
        lotto_desc: "ボタンを押すと1〜45の数字から重複なしで5ゲームを抽選します。",
        lotto_tab_ko: "韓国ロト",
        lotto_tab_de: "ドイツロト",
        lotto_tab_jp: "日本ロト",
        lotto_pick: "5ゲーム生成",
        lotto_copy: "すべてコピー",
        lotto_bonus: "ボーナス番号を含む",
        lotto_bonus_label: "ボーナス",
        lotto_de_title: "6aus49 + Superzahl",
        lotto_de_desc: "1〜49の数字6個とSuperzahl(0〜9)を生成します。",
        lotto_de_pick: "番号生成",
        lotto_de_copy: "結果コピー",
        lotto_de_super: "Superzahl",
        lotto_jp_title: "日本ロト",
        lotto_jp_desc: "種類を選択して番号を生成してください。",
        lotto_jp_type_label: "ロトの種類",
        lotto_jp_pick: "番号生成",
        lotto_jp_copy: "結果コピー",
        lotto_jp_loto6: "ロト6",
        lotto_jp_loto7: "ロト7",
        lotto_jp_mini: "ミニロト",
        lotto_jp_numbers3: "ナンバーズ3",
        lotto_jp_numbers4: "ナンバーズ4",
        note_title: "今日の星座メモ",
        note_desc: "星座運勢は日次更新の参考情報です。",
        note_line_1: "今日の運勢は日付に合わせて更新され、要点をまとめています。",
        note_line_2: "占いは参考として楽しみ、最終判断はご自身で。",
        contact_title: "提携問い合わせ",
        contact_desc: "簡単な情報を残していただければすぐにご連絡します。",
        contact_name_label: "名前",
        contact_name_placeholder: "名前",
        contact_email_label: "メール",
        contact_message_label: "問い合わせ内容",
        contact_message_placeholder: "お問い合わせ内容を入力してください。",
        contact_submit: "送信",
        footer_about: "サイト紹介",
        footer_privacy: "プライバシーポリシー",
        footer_terms: "利用規約",
        footer_menu: "メニュー提案",
        footer_menu_request: "メニュー追加依頼",
        footer_partner: "提携問い合わせ",
        footer_contact_note: "お問い合わせはフォームから受け付けています。",
        footer_copyright: "© 2026 TodayLab. All rights reserved.",
        theme_light: "Light",
        theme_dark: "Dark",
        game_label: "ゲーム",
        bonus_label: "ボーナス含む",
        complete_label: "抽選完了",
        total_games: "合計5ゲーム",
        copy_success: "全番号をコピーしました。"
        geo_q_title: "???????????????",
        geo_q_summary: "test-product-9ll.pages.dev????????????????????????????????????",
        geo_def_fortune_title: "?????????",
        geo_def_fortune_desc: "??????????????????????????",
        geo_def_lotto_title: "???????????",
        geo_def_lotto_desc: "?????????????????????????",
        geo_how_title: "?????",
        geo_how_desc: "????????????",
        geo_how_step1: "????????",
        geo_how_step2: "???????????",
        geo_how_step3: "??????????????????",
        faq_title: "???????FAQ?",
        faq_summary: "test-product-9ll.pages.dev???????????",
        faq_q1: "Q. test-product-9ll.pages.dev?????????",
        faq_a1: "A. ???????????????????????????",
        faq_q2: "Q. ???????????",
        faq_a2: "A. ?????????????????????",
        faq_q3: "Q. ???????????",
        faq_a3: "A. ?????????????????",
      },
      en: {
        title: "Test your luck",
        description: "A fun hub for daily fortune, lotto numbers, menu picks, and animal-face test in one place.",
        badge_today: "Today",
        brand_title: "Check your fortune and test your luck",
        nav_animal: "Animal Face Test",
        nav_menu: "Menu Picks",
        nav_about: "About",
        menu_label: "Menu",
        menu_animal: "Animal Face Test",
        menu_menu: "Menu Picks",
        menu_loading: "Loading menu picks...",
        menu_error: "Unable to load menu picks.",
        menu_source: "Source",
        fortune_title: "Today's Zodiac Horoscope",
        fortune_tag: "Zodiac Guide",
        luck_score_label: "Today's Luck Score",
        settings_label: "Settings",
        settings_language: "Language",
        settings_theme: "Theme",
        birth_label: "Find by birthday",
        birth_btn: "Apply birthday",
        birth_placeholder: "Select your birthday",
        birth_hint: "Enter your birthday to auto-select your zodiac sign.",
        fortune_btn: "Get Horoscope",
        zodiac_loading: "Loading your horoscope...",
        zodiac_error: "Unable to load the horoscope. Please try again.",
        zodiac_compatibility: "Compatibility",
        zodiac_lucky_number: "Lucky number",
        zodiac_lucky_time: "Lucky time",
        zodiac_color: "Lucky color",
        zodiac_mood: "Today's mood",
        zodiac_sign: "Zodiac",
        zodiac_range: "Date range",
        zodiac_no_data: "No horoscope data for this language.",
        focus_compatibility_label: "Compatibility",
        focus_compatibility_tag: "Best match",
        focus_lucky_number_label: "Lucky number",
        focus_lucky_number_tag: "Today's number",
        focus_lucky_time_label: "Lucky time",
        focus_lucky_time_tag: "Today's time",
        lotto_title: "Lotto Picks",
        lotto_desc: "Tap the button to draw 5 games of 6 numbers between 1 and 45 without duplicates.",
        lotto_tab_ko: "Korean Lotto",
        lotto_tab_de: "German Lotto",
        lotto_tab_jp: "Japan Lottery",
        lotto_pick: "Get 5 Picks",
        lotto_copy: "Copy All",
        lotto_bonus: "Include bonus number",
        lotto_bonus_label: "Bonus",
        lotto_de_title: "6aus49 + Superzahl",
        lotto_de_desc: "Pick 6 numbers from 1-49 plus one Superzahl (0-9).",
        lotto_de_pick: "Generate numbers",
        lotto_de_copy: "Copy result",
        lotto_de_super: "Superzahl",
        lotto_jp_title: "Japan Lottery",
        lotto_jp_desc: "Select a lottery type and generate numbers.",
        lotto_jp_type_label: "Lottery type",
        lotto_jp_pick: "Generate numbers",
        lotto_jp_copy: "Copy result",
        lotto_jp_loto6: "Loto 6",
        lotto_jp_loto7: "Loto 7",
        lotto_jp_mini: "Mini Loto",
        lotto_jp_numbers3: "Numbers 3",
        lotto_jp_numbers4: "Numbers 4",
        note_title: "Horoscope Curation Note",
        note_desc: "Horoscopes are built from daily updates and provided for reference.",
        note_line_1: "Today's horoscope is refreshed by date and summarized with key themes.",
        note_line_2: "Use these insights for fun and keep your personal choices in mind.",
        contact_title: "Partnership Inquiry",
        contact_desc: "Leave a short note and we will get back to you soon.",
        contact_name_label: "Name",
        contact_name_placeholder: "Your name",
        contact_email_label: "Email",
        contact_message_label: "Message",
        contact_message_placeholder: "Tell us about your inquiry.",
        contact_submit: "Send Inquiry",
        footer_about: "About",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms",
        footer_menu: "Menu Picks",
        footer_menu_request: "Menu Request",
        footer_partner: "Partnership",
        footer_contact_note: "Please submit inquiries via the partnership form.",
        footer_copyright: "© 2026 TodayLab. All rights reserved.",
        theme_light: "Light",
        theme_dark: "Dark",
        game_label: "Game",
        bonus_label: "Bonus included",
        complete_label: "Completed",
        total_games: "Total 5 games",
        copy_success: "All numbers copied."
        geo_q_title: "What does this site provide?",
        geo_q_summary: "test-product-9ll.pages.dev gives quick answers for daily fortune, lotto numbers, menu picks, and animal-face tests.",
        geo_def_fortune_title: "What is a fortune?",
        geo_def_fortune_desc: "A fortune is a one-line guide to today's flow and keywords.",
        geo_def_lotto_title: "What is a lotto recommendation?",
        geo_def_lotto_desc: "It generates random numbers by the rules and presents them.",
        geo_how_title: "How do I use it?",
        geo_how_desc: "Use the steps below.",
        geo_how_step1: "Choose a tab.",
        geo_how_step2: "Press the generate button.",
        geo_how_step3: "Check the result and copy if needed.",
        faq_title: "Frequently Asked Questions (FAQ)",
        faq_summary: "Key answers about test-product-9ll.pages.dev.",
        faq_q1: "Q. What kind of site is test-product-9ll.pages.dev?",
        faq_a1: "A. It is an entertainment site that gives short, clear fortune and recommendation results.",
        faq_q2: "Q. Are results saved?",
        faq_a2: "A. Results are generated and shown immediately on the screen.",
        faq_q3: "Q. Are recommendations guaranteed?",
        faq_a3: "A. Recommendations are for reference only and not guaranteed.",
      }
    };

    let currentLang = localStorage.getItem("lang") || "ko";
    const luckScoreStorageKey = "luckScore";
    const luckScoreDateKey = "luckScoreDate";
    const userIdKey = "luckUserId";

    const zodiacSigns = [
      { value: "aries", ko: "양자리", de: "Widder", en: "Aries", range_ko: "3/21 ~ 4/19", range_en: "Mar 21 - Apr 19" },
      { value: "taurus", ko: "황소자리", de: "Stier", en: "Taurus", range_ko: "4/20 ~ 5/20", range_en: "Apr 20 - May 20" },
      { value: "gemini", ko: "쌍둥이자리", de: "Zwillinge", en: "Gemini", range_ko: "5/21 ~ 6/21", range_en: "May 21 - Jun 21" },
      { value: "cancer", ko: "게자리", de: "Krebs", en: "Cancer", range_ko: "6/22 ~ 7/22", range_en: "Jun 22 - Jul 22" },
      { value: "leo", ko: "사자자리", de: "Löwe", en: "Leo", range_ko: "7/23 ~ 8/22", range_en: "Jul 23 - Aug 22" },
      { value: "virgo", ko: "처녀자리", de: "Jungfrau", en: "Virgo", range_ko: "8/23 ~ 9/22", range_en: "Aug 23 - Sep 22" },
      { value: "libra", ko: "천칭자리", de: "Waage", en: "Libra", range_ko: "9/23 ~ 10/22", range_en: "Sep 23 - Oct 22" },
      { value: "scorpio", ko: "전갈자리", de: "Skorpion", en: "Scorpio", range_ko: "10/23 ~ 11/22", range_en: "Oct 23 - Nov 22" },
      { value: "sagittarius", ko: "사수자리", de: "Schütze", en: "Sagittarius", range_ko: "11/23 ~ 12/21", range_en: "Nov 23 - Dec 21" },
      { value: "capricorn", ko: "염소자리", de: "Steinbock", en: "Capricorn", range_ko: "12/22 ~ 1/19", range_en: "Dec 22 - Jan 19" },
      { value: "aquarius", ko: "물병자리", de: "Wassermann", en: "Aquarius", range_ko: "1/20 ~ 2/18", range_en: "Jan 20 - Feb 18" },
      { value: "pisces", ko: "물고기자리", de: "Fische", en: "Pisces", range_ko: "2/19 ~ 3/20", range_en: "Feb 19 - Mar 20" }
    ];

    const ASTRO_ENDPOINT = "/api/horoscope";
    const zodiacNameMap = {
      Aries: "양자리",
      Taurus: "황소자리",
      Gemini: "쌍둥이자리",
      Cancer: "게자리",
      Leo: "사자자리",
      Virgo: "처녀자리",
      Libra: "천칭자리",
      Scorpio: "전갈자리",
      Sagittarius: "사수자리",
      Capricorn: "염소자리",
      Aquarius: "물병자리",
      Pisces: "물고기자리"
    };

    const fallbackMoods = {
      ko: ["차분함", "활기", "집중", "여유", "호기심", "정리", "전환", "도전"],
      de: ["Ruhe", "Energie", "Fokus", "Leichtigkeit", "Neugier", "Klarheit", "Wechsel", "Mut"],
      en: ["Calm", "Energy", "Focus", "Ease", "Curiosity", "Clarity", "Shift", "Bold"]
    };
    const fallbackColors = {
      ko: ["코랄", "네이비", "민트", "라벤더", "카멜", "오프화이트", "올리브", "머스터드"],
      de: ["Koralle", "Navy", "Minze", "Lavendel", "Kamel", "Off-White", "Oliv", "Senf"],
      en: ["Coral", "Navy", "Mint", "Lavender", "Camel", "Off-white", "Olive", "Mustard"]
    };
    const fallbackTimes = {
      ko: ["오전 9시", "오전 11시", "오후 2시", "오후 4시", "오후 7시", "밤 9시"],
      de: ["9 Uhr", "11 Uhr", "14 Uhr", "16 Uhr", "19 Uhr", "21 Uhr"],
      en: ["9 AM", "11 AM", "2 PM", "4 PM", "7 PM", "9 PM"]
    };
    const fallbackTemplates = {
      ko: [
        "작은 선택이 큰 흐름을 바꾸는 날이에요. 한 걸음만 더 확인해보세요.",
        "오늘은 속도를 조금 늦추면 보이는 것이 늘어납니다.",
        "가벼운 대화가 좋은 기회를 데려올 수 있어요.",
        "정리와 정돈이 운을 끌어오는 열쇠가 됩니다.",
        "직감이 살아나는 날, 지나친 고민은 줄이세요.",
        "새로운 시도가 생각보다 수월하게 흘러갑니다."
      ],
      de: [
        "Kleine Entscheidungen verändern heute den Verlauf. Prüfe einen Schritt mehr.",
        "Nimm heute etwas Tempo raus, dann siehst du mehr.",
        "Leichte Gespräche können eine gute Gelegenheit bringen.",
        "Ordnung ist der Schlüssel, um Glück anzuziehen.",
        "Dein Bauchgefühl ist stark, vermeide zu viel Grübeln.",
        "Ein neuer Versuch läuft leichter als erwartet."
      ],
      en: [
        "Small choices shift the flow today. Double-check one more step.",
        "Slow down a little and you will see more.",
        "Light conversations can open a good opportunity.",
        "Tidying up is the key to inviting luck.",
        "Your intuition is sharp—avoid overthinking.",
        "A new attempt moves more smoothly than expected."
      ]
    };

    function getZodiacRange(signValue) {
      const sign = zodiacSigns.find(item => item.value === signValue);
      if (!sign) return "";
      return currentLang === "ko" ? sign.range_ko : sign.range_en;
    }

    function getDailySeed(signValue) {
      const dayKey = new Date().toISOString().slice(0, 10);
      let hash = 0;
      const raw = `${signValue}-${dayKey}`;
      for (let i = 0; i < raw.length; i++) {
        hash = (hash * 31 + raw.charCodeAt(i)) % 100000;
      }
      return hash;
    }

    function buildFallbackHoroscope(signValue) {
      const seed = getDailySeed(signValue);
      const moodList = fallbackMoods[currentLang];
      const colorList = fallbackColors[currentLang];
      const timeList = fallbackTimes[currentLang];
      const descList = fallbackTemplates[currentLang];
      const signIndex = zodiacSigns.findIndex(item => item.value === signValue);
      const compatibilityIndex = (signIndex + (seed % 11) + 1) % zodiacSigns.length;
      const compatibilityValue = zodiacSigns[compatibilityIndex].en;

      return {
        description: descList[seed % descList.length],
        date_range: getZodiacRange(signValue),
        compatibility: compatibilityValue,
        lucky_number: String((seed % 89) + 11),
        lucky_time: timeList[seed % timeList.length],
        color: colorList[(seed + 2) % colorList.length],
        mood: moodList[(seed + 3) % moodList.length]
      };
    }

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
    function getOrCreateUserId() {
      let userId = localStorage.getItem(userIdKey);
      if (!userId) {
        userId = Math.random().toString(36).slice(2) + Date.now().toString(36);
        localStorage.setItem(userIdKey, userId);
      }
      return userId;
    }

    function getTodayKey() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    function buildLuckScore() {
      const userId = getOrCreateUserId();
      const seedSource = `${userId}-${getTodayKey()}`;
      let hash = 0;
      for (let i = 0; i < seedSource.length; i++) {
        hash = (hash * 31 + seedSource.charCodeAt(i)) % 101;
      }
      return hash;
    }

    function renderLuckScore() {
      if (!luckScoreValue) return;
      const today = getTodayKey();
      const storedDate = localStorage.getItem(luckScoreDateKey);
      let score = localStorage.getItem(luckScoreStorageKey);
      if (!score || storedDate !== today) {
        score = String(buildLuckScore());
        localStorage.setItem(luckScoreStorageKey, score);
        localStorage.setItem(luckScoreDateKey, today);
      }
      const numericScore = Math.max(0, Math.min(100, Number(score)));
      luckScoreValue.textContent = `${numericScore} / 100`;
      if (luckScoreFill) luckScoreFill.style.width = `${numericScore}%`;
    }

    function getZodiacByDate(month, day) {
      if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "aries";
      if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "taurus";
      if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return "gemini";
      if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return "cancer";
      if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "leo";
      if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "virgo";
      if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "libra";
      if ((month === 10 && day >= 23) || (month === 11 && day <= 22)) return "scorpio";
      if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) return "sagittarius";
      if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "capricorn";
      if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "aquarius";
      if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "pisces";
      return null;
    }

    function applyZodiacFromBirthDate() {
      if (!birthDateInput || !zodiacSelect) return;
      const value = birthDateInput.value;
      if (!value) return;
      const parts = value.split("-");
      if (parts.length !== 3) return;
      const month = Number(parts[1]);
      const day = Number(parts[2]);
      const signValue = getZodiacByDate(month, day);
      if (!signValue) return;
      zodiacSelect.value = signValue;
      localStorage.setItem("zodiacSign", signValue);
      renderHoroscope();
    }


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
      renderMenu();
      renderZodiacOptions();
      renderHoroscope();
      renderActiveLotto();
      renderLuckScore();
    }

    function renderZodiacOptions() {
      if (!zodiacSelect) return;
      const saved = localStorage.getItem("zodiacSign") || zodiacSigns[0].value;
      zodiacSelect.innerHTML = zodiacSigns
        .map(sign => {
          const label = currentLang === "ko"
            ? sign.ko
            : currentLang === "de"
              ? sign.de
              : sign.en;
          return `<option value="${sign.value}">${label}</option>`;
        })
        .join("");
      zodiacSelect.value = saved;
    }

    function getZodiacLabel(signValue) {
      const sign = zodiacSigns.find(item => item.value === signValue) || zodiacSigns[0];
      if (currentLang === "ko") return sign.ko;
      if (currentLang === "de") return sign.de;
      return sign.en;
    }

    function localizeCompatibility(value) {
      if (!value) return "-";
      if (currentLang !== "ko") return value;
      return zodiacNameMap[value] || value;
    }

    async function fetchHoroscope(sign, day = "today") {
      const url = `${ASTRO_ENDPOINT}?sign=${encodeURIComponent(sign)}&day=${encodeURIComponent(day)}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Horoscope API error");
      return response.json();
    }

    function renderHoroscopeTags(data, signLabel) {
      const tags = [
        `${i18n[currentLang].zodiac_sign}: ${signLabel}`,
        data.date_range ? `${i18n[currentLang].zodiac_range}: ${data.date_range}` : null,
        data.compatibility ? `${i18n[currentLang].zodiac_compatibility}: ${localizeCompatibility(data.compatibility)}` : null,
        data.lucky_number ? `${i18n[currentLang].zodiac_lucky_number}: ${data.lucky_number}` : null,
        data.lucky_time ? `${i18n[currentLang].zodiac_lucky_time}: ${data.lucky_time}` : null,
        data.color ? `${i18n[currentLang].zodiac_color}: ${data.color}` : null,
        data.mood ? `${i18n[currentLang].zodiac_mood}: ${data.mood}` : null
      ].filter(Boolean);

      fortuneTags.innerHTML = tags
        .map(tag => `<span class="tag">${escapeHTML(tag)}</span>`)
        .join("");
    }

    async function renderHoroscope() {
      if (!fortuneText || !fortuneTags) return;
      const signValue = zodiacSelect ? zodiacSelect.value : zodiacSigns[0].value;
      const signLabel = getZodiacLabel(signValue);

      const hasHoroscopeData = Boolean(
        fallbackMoods[currentLang]
        && fallbackColors[currentLang]
        && fallbackTimes[currentLang]
        && fallbackTemplates[currentLang]
      );

      if (!hasHoroscopeData) {
        fortuneText.textContent = i18n[currentLang].zodiac_no_data || i18n.ko.zodiac_no_data;
        fortuneTags.innerHTML = `<span class="tag">${escapeHTML(signLabel)}</span>`;
        if (focusCompatibilityValue) focusCompatibilityValue.textContent = "-";
        if (focusLuckyNumberValue) focusLuckyNumberValue.textContent = "-";
        if (focusLuckyTimeValue) focusLuckyTimeValue.textContent = "-";
        return;
      }

      fortuneText.textContent = i18n[currentLang].zodiac_loading;
      fortuneTags.innerHTML = `<span class="tag">${escapeHTML(signLabel)}</span>`;
      if (focusCompatibilityValue) focusCompatibilityValue.textContent = "-";
      if (focusLuckyNumberValue) focusLuckyNumberValue.textContent = "-";
      if (focusLuckyTimeValue) focusLuckyTimeValue.textContent = "-";

      try {
        const data = await fetchHoroscope(signValue, "today");
        const fallback = buildFallbackHoroscope(signValue);
        const description = data && (data.description || data.horoscope);
        const normalized = description ? { ...fallback, ...data, description } : fallback;
        fortuneText.textContent = normalized.description || i18n[currentLang].zodiac_error;
        renderHoroscopeTags(normalized, signLabel);
        if (focusCompatibilityValue) focusCompatibilityValue.textContent = localizeCompatibility(normalized.compatibility);
        if (focusLuckyNumberValue) focusLuckyNumberValue.textContent = normalized.lucky_number || "-";
        if (focusLuckyTimeValue) focusLuckyTimeValue.textContent = normalized.lucky_time || "-";
      } catch (error) {
        const fallback = buildFallbackHoroscope(signValue);
        fortuneText.textContent = fallback.description || i18n[currentLang].zodiac_error;
        renderHoroscopeTags(fallback, signLabel);
        if (focusCompatibilityValue) focusCompatibilityValue.textContent = localizeCompatibility(fallback.compatibility);
        if (focusLuckyNumberValue) focusLuckyNumberValue.textContent = fallback.lucky_number || "-";
        if (focusLuckyTimeValue) focusLuckyTimeValue.textContent = fallback.lucky_time || "-";
      }
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

    function colorClass(n) {
      if (n <= 10) return "n1";
      if (n <= 20) return "n2";
      if (n <= 30) return "n3";
      if (n <= 40) return "n4";
      return "n5";
    }

    function pickNumbers(count, max, exclude = new Set()) {
      const pool = [];
      for (let i = 1; i <= max; i++) {
        if (!exclude.has(i)) pool.push(i);
      }
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      return pool.slice(0, count).sort((a, b) => a - b);
    }

    const lottoConfig = [
      {
        key: "ko",
        type: "multiGame",
        tabKey: "lotto_tab_ko",
        descriptionKey: "lotto_desc",
        pickKey: "lotto_pick",
        copyKey: "lotto_copy",
        bonusLabelKey: "lotto_bonus",
        games: 5,
        range: 45,
        mainCount: 6,
        bonusEnabled: true
      },
      {
        key: "de",
        type: "linePick",
        tabKey: "lotto_tab_de",
        titleKey: "lotto_de_title",
        descriptionKey: "lotto_de_desc",
        pickKey: "lotto_de_pick",
        copyKey: "lotto_de_copy",
        mainCount: 6,
        range: 49,
        superzahlRange: 10,
        superLabelKey: "lotto_de_super"
      },
      {
        key: "jp",
        type: "groupPick",
        tabKey: "lotto_tab_jp",
        titleKey: "lotto_jp_title",
        descriptionKey: "lotto_jp_desc",
        typeLabelKey: "lotto_jp_type_label",
        pickKey: "lotto_jp_pick",
        copyKey: "lotto_jp_copy",
        variants: [
          {
            key: "loto6",
            labelKey: "lotto_jp_loto6",
            type: "COMBINATION",
            mainCount: 6,
            range: 43,
            bonusCount: 1,
            bonusRange: 43
          },
          {
            key: "loto7",
            labelKey: "lotto_jp_loto7",
            type: "COMBINATION",
            mainCount: 7,
            range: 37,
            bonusCount: 2,
            bonusRange: 37
          },
          {
            key: "mini",
            labelKey: "lotto_jp_mini",
            type: "COMBINATION",
            mainCount: 5,
            range: 31,
            bonusCount: 1,
            bonusRange: 31
          },
          {
            key: "numbers3",
            labelKey: "lotto_jp_numbers3",
            type: "DIGIT",
            digitCount: 3,
            digitRange: 10
          },
          {
            key: "numbers4",
            labelKey: "lotto_jp_numbers4",
            type: "DIGIT",
            digitCount: 4,
            digitRange: 10
          }
        ]
      }
    ];

    const lottoState = {
      activeMode: null,
      panels: new Map()
    };

    const lottoRenderers = {
      multiGame: {
        buildPanel(config) {
          const panel = document.createElement("div");
          panel.className = "lotto-panel";
          panel.dataset.lottoPanel = config.key;

          const controls = document.createElement("div");
          controls.className = "controls";

          const pickBtn = document.createElement("button");
          pickBtn.type = "button";
          pickBtn.className = "btn-main";
          pickBtn.dataset.i18n = config.pickKey;
          pickBtn.textContent = i18n[currentLang][config.pickKey] || "";

          const copyBtn = document.createElement("button");
          copyBtn.type = "button";
          copyBtn.className = "btn-sub";
          copyBtn.dataset.i18n = config.copyKey;
          copyBtn.textContent = i18n[currentLang][config.copyKey] || "";

          const checkboxLabel = document.createElement("label");
          checkboxLabel.className = "checkbox";
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = true;
          const checkboxText = document.createElement("span");
          checkboxText.dataset.i18n = config.bonusLabelKey;
          checkboxText.textContent = i18n[currentLang][config.bonusLabelKey] || "";

          checkboxLabel.appendChild(checkbox);
          checkboxLabel.appendChild(checkboxText);

          controls.appendChild(pickBtn);
          controls.appendChild(copyBtn);
          controls.appendChild(checkboxLabel);

          const gridEl = document.createElement("div");
          gridEl.className = "grid";
          const footerEl = document.createElement("div");
          footerEl.className = "footer";

          panel.appendChild(controls);
          panel.appendChild(gridEl);
          panel.appendChild(footerEl);

          return {
            panel,
            elements: { pickBtn, copyBtn, checkbox, gridEl, footerEl },
            data: { games: [] }
          };
        },
        render(config, state, options = {}) {
          const { gridEl, footerEl, checkbox } = state.elements;
          if (!gridEl || !footerEl || !checkbox) return;

          gridEl.innerHTML = "";
          const allGames = [];

          for (let i = 1; i <= config.games; i++) {
            const mainNums = pickNumbers(config.mainCount, config.range);
            const bonusNum = config.bonusEnabled && checkbox.checked
              ? pickNumbers(1, config.range, new Set(mainNums))[0]
              : null;

            allGames.push({ mainNums, bonusNum });

            const card = document.createElement("div");
            card.className = "game-card";
            card.innerHTML = `
              <div class="game-header">
                <span>${i18n[currentLang].game_label} ${i}</span>
                <span>${bonusNum ? i18n[currentLang].bonus_label : ""}</span>
              </div>
              <div class="numbers">
                ${mainNums.map(n =>
                  `<div class="ball ${colorClass(n)}">${n}</div>`
                ).join("")}
                ${bonusNum ? `<span class="plus">+</span>
                  <div class="ball bonus">${bonusNum}</div>` : ""}
              </div>
            `;

            gridEl.appendChild(card);
          }

          state.data.games = allGames;

          const dateLocale = currentLang === "ko" ? "ko-KR" : "en-US";
          footerEl.textContent =
            `${i18n[currentLang].complete_label} · ${new Date().toLocaleString(dateLocale)} · ${i18n[currentLang].total_games}`;

          state.elements.copyBtn.onclick = () => {
            const text = allGames.map(g =>
              g.mainNums.join(", ") + (g.bonusNum ? ` + ${g.bonusNum}` : "")
            ).join("\n");
            navigator.clipboard.writeText(text);
            alert(i18n[currentLang].copy_success);
          };

          if (options.scrollToTop) {
            gridEl.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        },
        bind(config, state) {
          state.elements.pickBtn.addEventListener("click", () => {
            lottoRenderers.multiGame.render(config, state, { scrollToTop: false });
          });
        }
      },
      linePick: {
        buildPanel(config) {
          const panel = document.createElement("div");
          panel.className = "lotto-panel";
          panel.dataset.lottoPanel = config.key;

          const head = document.createElement("div");
          head.className = "lotto-de-head";

          const title = document.createElement("div");
          title.className = "lotto-de-title";
          if (config.titleKey) {
            title.dataset.i18n = config.titleKey;
            title.textContent = i18n[currentLang][config.titleKey] || "";
          }

          const desc = document.createElement("p");
          desc.className = "lotto-de-desc";
          if (config.descriptionKey) {
            desc.dataset.i18n = config.descriptionKey;
            desc.textContent = i18n[currentLang][config.descriptionKey] || "";
          }

          head.appendChild(title);
          head.appendChild(desc);

          const controls = document.createElement("div");
          controls.className = "controls";
          const pickBtn = document.createElement("button");
          pickBtn.type = "button";
          pickBtn.className = "btn-main";
          pickBtn.dataset.i18n = config.pickKey;
          pickBtn.textContent = i18n[currentLang][config.pickKey] || "";
          const copyBtn = document.createElement("button");
          copyBtn.type = "button";
          copyBtn.className = "btn-sub";
          copyBtn.dataset.i18n = config.copyKey;
          copyBtn.textContent = i18n[currentLang][config.copyKey] || "";

          controls.appendChild(pickBtn);
          controls.appendChild(copyBtn);

          const result = document.createElement("div");
          result.className = "de-result";
          result.setAttribute("aria-live", "polite");
          result.textContent = "-";

          panel.appendChild(head);
          panel.appendChild(controls);
          panel.appendChild(result);

          return {
            panel,
            elements: { pickBtn, copyBtn, result },
            data: { currentPick: null }
          };
        },
        buildLinePickText(config, pick) {
          if (!pick) return "-";
          if (!config.superzahlRange) return pick.mainNums.join(", ");
          const superLabel = i18n[currentLang][config.superLabelKey] || "Superzahl";
          return `${pick.mainNums.join(", ")} + ${superLabel}: ${pick.superzahl}`;
        },
        render(config, state) {
          if (!state.elements.result) return;
          state.elements.result.textContent = lottoRenderers.linePick.buildLinePickText(config, state.data.currentPick);
        },
        bind(config, state) {
          state.elements.pickBtn.addEventListener("click", () => {
            const mainNums = pickNumbers(config.mainCount, config.range);
            const superzahl = config.superzahlRange
              ? Math.floor(Math.random() * config.superzahlRange)
              : null;
            state.data.currentPick = { mainNums, superzahl };
            lottoRenderers.linePick.render(config, state);
          });
          state.elements.copyBtn.addEventListener("click", () => {
            if (!state.data.currentPick) return;
            const text = lottoRenderers.linePick.buildLinePickText(config, state.data.currentPick);
            navigator.clipboard.writeText(text);
            alert(i18n[currentLang].copy_success);
          });
        }
      }
    ,
      groupPick: {
        buildPanel(config) {
          const panel = document.createElement("div");
          panel.className = "lotto-panel";
          panel.dataset.lottoPanel = config.key;

          const head = document.createElement("div");
          head.className = "lotto-de-head";

          const title = document.createElement("div");
          title.className = "lotto-de-title";
          if (config.titleKey) {
            title.dataset.i18n = config.titleKey;
            title.textContent = i18n[currentLang][config.titleKey] || "";
          }

          const desc = document.createElement("p");
          desc.className = "lotto-de-desc";
          if (config.descriptionKey) {
            desc.dataset.i18n = config.descriptionKey;
            desc.textContent = i18n[currentLang][config.descriptionKey] || "";
          }

          head.appendChild(title);
          head.appendChild(desc);

          const typeRow = document.createElement("div");
          typeRow.className = "controls";

          const typeLabel = document.createElement("span");
          typeLabel.className = "tag";
          typeLabel.dataset.i18n = config.typeLabelKey;
          typeLabel.textContent = i18n[currentLang][config.typeLabelKey] || "";

          const typeSelect = document.createElement("select");
          typeSelect.className = "select-field";
          typeSelect.setAttribute("aria-label", i18n[currentLang][config.typeLabelKey] || "Lottery type");

          config.variants.forEach((variant) => {
            const option = document.createElement("option");
            option.value = variant.key;
            option.dataset.i18n = variant.labelKey;
            option.textContent = i18n[currentLang][variant.labelKey] || "";
            typeSelect.appendChild(option);
          });

          typeRow.appendChild(typeLabel);
          typeRow.appendChild(typeSelect);

          const controls = document.createElement("div");
          controls.className = "controls";
          const pickBtn = document.createElement("button");
          pickBtn.type = "button";
          pickBtn.className = "btn-main";
          pickBtn.dataset.i18n = config.pickKey;
          pickBtn.textContent = i18n[currentLang][config.pickKey] || "";
          const copyBtn = document.createElement("button");
          copyBtn.type = "button";
          copyBtn.className = "btn-sub";
          copyBtn.dataset.i18n = config.copyKey;
          copyBtn.textContent = i18n[currentLang][config.copyKey] || "";

          controls.appendChild(pickBtn);
          controls.appendChild(copyBtn);

          const result = document.createElement("div");
          result.className = "de-result";
          result.setAttribute("aria-live", "polite");
          result.textContent = "-";

          panel.appendChild(head);
          panel.appendChild(typeRow);
          panel.appendChild(controls);
          panel.appendChild(result);

          return {
            panel,
            elements: { typeSelect, pickBtn, copyBtn, result },
            data: { currentType: config.variants[0]?.key || "", picks: new Map() }
          };
        },
        buildResultText(variant, pick) {
          if (!pick || !variant) return "-";
          if (variant.type === "DIGIT") {
            return pick.digits.join(", ");
          }
          const mainText = pick.mainNums.join(", ");
          if (!variant.bonusCount) return mainText;
          const bonusLabel = i18n[currentLang].lotto_bonus_label || "Bonus";
          return `${mainText} + ${bonusLabel}: ${pick.bonusNums.join(", ")}`;
        },
        render(config, state) {
          if (!state.elements.result) return;
          const variant = config.variants.find(v => v.key === state.data.currentType) || config.variants[0];
          const pick = state.data.picks.get(variant?.key);
          state.elements.result.textContent = lottoRenderers.groupPick.buildResultText(variant, pick);
        },
        bind(config, state) {
          state.elements.typeSelect.addEventListener("change", (event) => {
            state.data.currentType = event.target.value;
            lottoRenderers.groupPick.render(config, state);
          });

          state.elements.pickBtn.addEventListener("click", () => {
            const variant = config.variants.find(v => v.key === state.data.currentType) || config.variants[0];
            if (!variant) return;
            if (variant.type === "DIGIT") {
              const digits = Array.from({ length: variant.digitCount }, () =>
                Math.floor(Math.random() * variant.digitRange)
              );
              state.data.picks.set(variant.key, { digits });
            } else {
              const mainNums = pickNumbers(variant.mainCount, variant.range);
              let bonusNums = [];
              if (variant.bonusCount) {
                const exclude = new Set(mainNums);
                bonusNums = pickNumbers(variant.bonusCount, variant.bonusRange, exclude);
              }
              state.data.picks.set(variant.key, { mainNums, bonusNums });
            }
            lottoRenderers.groupPick.render(config, state);
          });

          state.elements.copyBtn.addEventListener("click", () => {
            const variant = config.variants.find(v => v.key === state.data.currentType) || config.variants[0];
            if (!variant) return;
            const pick = state.data.picks.get(variant.key);
            if (!pick) return;
            const text = lottoRenderers.groupPick.buildResultText(variant, pick);
            navigator.clipboard.writeText(text);
            alert(i18n[currentLang].copy_success);
          });
        }
      }
    };

    function renderLottoUI() {
      if (!lottoTabsContainer || !lottoPanelsContainer) return;

      lottoTabsContainer.innerHTML = "";
      lottoPanelsContainer.innerHTML = "";
      lottoState.panels.clear();

      lottoConfig.forEach((config) => {
        const tab = document.createElement("button");
        tab.type = "button";
        tab.className = "lotto-tab";
        tab.dataset.lottoTab = config.key;
        tab.dataset.i18n = config.tabKey;
        tab.textContent = i18n[currentLang][config.tabKey] || "";
        tab.addEventListener("click", () => setLottoMode(config.key));
        lottoTabsContainer.appendChild(tab);

        const renderer = lottoRenderers[config.type];
        if (!renderer) return;
        const panelState = renderer.buildPanel(config);
        lottoPanelsContainer.appendChild(panelState.panel);
        renderer.bind(config, panelState);
        lottoState.panels.set(config.key, { config, renderer, state: panelState });
      });

      const savedMode = localStorage.getItem("lottoMode");
      const initialMode = savedMode && lottoState.panels.has(savedMode)
        ? savedMode
        : lottoConfig[0].key;
      setLottoMode(initialMode);
    }

    function setLottoMode(mode) {
      if (!lottoTabsContainer || !lottoPanelsContainer) return;
      lottoState.activeMode = mode;
      const tabs = lottoTabsContainer.querySelectorAll(".lotto-tab");
      const panels = lottoPanelsContainer.querySelectorAll(".lotto-panel");

      tabs.forEach((tab) => {
        tab.classList.toggle("is-active", tab.dataset.lottoTab === mode);
      });
      panels.forEach((panel) => {
        const isActive = panel.dataset.lottoPanel === mode;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
      localStorage.setItem("lottoMode", mode);
    }

    function renderActiveLotto() {
      const active = lottoState.panels.get(lottoState.activeMode);
      if (!active) return;
      active.renderer.render(active.config, active.state);
    }
    if (zodiacBtn) zodiacBtn.addEventListener("click", renderHoroscope);
    if (zodiacSelect) {
      zodiacSelect.addEventListener("change", (event) => {
        localStorage.setItem("zodiacSign", event.target.value);
        renderHoroscope();
      });
    }
    if (birthDateInput) {
      birthDateInput.addEventListener("change", applyZodiacFromBirthDate);
    }
    if (birthDateBtn) {
      birthDateBtn.addEventListener("click", applyZodiacFromBirthDate);
    }
    if (birthPickerBtn && birthDateInput) {
      birthPickerBtn.addEventListener("click", () => {
        if (typeof birthDateInput.showPicker === "function") {
          birthDateInput.showPicker();
          return;
        }
        birthDateInput.focus();
        birthDateInput.click();
      });
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

    renderLottoUI();
    initTheme();
    applyLanguage(currentLang);


