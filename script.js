// ==========================================
// 1. DOM ELEMENTS & STATE
// ==========================================
const tabsEl = document.getElementById("levels");
const contentEl = document.getElementById("story-container");
const tooltipEl = document.getElementById("tooltip");
let currentLevel = 1;
let activeWord = null;

// ==========================================
// 2. INITIALIZATION (Tabs)
// ==========================================
for (let i = 1; i <= 6; i++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `tab ${i === 1 ? 'active' : ''}`;
    btn.textContent = `HSK ${i}`;
    btn.dataset.level = i; // Сохраняем уровень в data-атрибут
    btn.onclick = () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        currentLevel = i;
        renderStoriesList();
    };
    tabsEl.appendChild(btn);
}

// ==========================================
// 3. RENDER FUNCTIONS
// ==========================================
function renderStoriesList() {
    hideTooltip();
    contentEl.innerHTML = "";
    
    // Убираем кнопку "Продолжить", если она была
    const resumeBtn = document.getElementById("resume-btn");
    if (resumeBtn) resumeBtn.remove();

    const levelStories = (typeof STORIES !== 'undefined' && STORIES[currentLevel]) ? STORIES[currentLevel] : [];
    
    if (levelStories.length === 0) {
        contentEl.innerHTML = `<p style="color: #64748b; text-align: center; margin-top: 20px;">No books here yet.</p>`;
        return;
    }

    levelStories.forEach((book, bookIndex) => {
        const item = document.createElement("div");
        item.className = "story-item";
        item.innerHTML = `
            <h3>📖 ${book.title}</h3>
            <p style="font-size: 15px; color: #64748b; margin-top: 5px;">${book.description}</p>
            <p style="font-size: 13px; color: #4f46e5; margin-top: 5px; font-weight: bold;">Chapters: ${book.chapters.length}</p>
        `;
        item.dataset.action = "open-book";
        item._bookData = book; 
        item._bookIndex = bookIndex; // Запоминаем индекс книги
        contentEl.appendChild(item);
    });
}

function renderChaptersList(book, bookIndex) {
    contentEl.innerHTML = "";
    
    const backBtn = document.createElement("button");
    backBtn.className = "btn-back";
    backBtn.textContent = "← Back to Books";
    backBtn.dataset.action = "back-to-books";
    contentEl.appendChild(backBtn);

    const title = document.createElement("h2");
    title.style.margin = "10px 0 20px 0";
    title.textContent = book.title;
    contentEl.appendChild(title);

    book.chapters.forEach((chapter, index) => {
        const item = document.createElement("div");
        item.className = "chapter-item";
        item.innerHTML = `<h3>${chapter.title}</h3>`;
        item.dataset.action = "open-chapter";
        item._chapterData = chapter;
        item._bookData = book;
        item._bookIndex = bookIndex;
        item._chapterIndex = index; // Запоминаем индекс главы
        contentEl.appendChild(item);
    });
}

function renderChapterContent(book, chapter, bookIndex, chapterIndex) {
    contentEl.innerHTML = "";
    
    // Сохраняем прогресс в память браузера
    saveProgress(currentLevel, bookIndex, chapterIndex);

    const backBtn = document.createElement("button");
    backBtn.className = "btn-back";
    backBtn.textContent = "← Chapters List";
    backBtn.dataset.action = "back-to-chapters";
    backBtn._bookData = book;
    backBtn._bookIndex = bookIndex;
    contentEl.appendChild(backBtn);

    const title = document.createElement("h2");
    title.style.marginBottom = "5px";
    title.style.color = "#4f46e5";
    title.textContent = chapter.title;
    contentEl.appendChild(title);

    if (chapter.pinyin || chapter.translation) {
        const sub = document.createElement("p");
        sub.style.color = "#64748b";
        sub.style.marginBottom = "30px";
        sub.textContent = `${chapter.pinyin || ''} — ${chapter.translation || ''}`;
        contentEl.appendChild(sub);
    }

    chapter.sentences.forEach(s => {
        const block = document.createElement("div");
        block.className = "sentence-block";

        const line = document.createElement("div");
        
        s.words.forEach(w => {
            const container = document.createElement("span");
            container.className = "word-container";
            
            const charSpan = document.createElement("span");
            charSpan.className = "word";
            charSpan.textContent = w.w;
            if (w.p && w.e) {
                charSpan.dataset.pinyin = w.p;
                charSpan.dataset.meaning = w.e;
            }
            container.appendChild(charSpan);

            if (w.p && w.e) {
                const pinyinSpan = document.createElement("span");
                pinyinSpan.className = "pinyin-text";
                pinyinSpan.textContent = w.p;
                container.appendChild(pinyinSpan);
            }

            line.appendChild(container);
        });

        block.appendChild(line);

        const translation = document.createElement("span");
        translation.className = "sentence-translation";
        translation.textContent = s.en;
        block.appendChild(translation);

        contentEl.appendChild(block);
    });
}

// ==========================================
// 4. TOOLTIP, TONE & AUDIO FUNCTIONS
// ==========================================
function getTone(pinyin) {
    if (!pinyin) return 5; 
    const numMatch = pinyin.match(/[1-4]/);
    if (numMatch) return parseInt(numMatch[0]);
    if (/[āēīōūǖĀĒĪŌŪǕ]/.test(pinyin)) return 1;
    if (/[áéíóúǘÁÉÍÓÚǗ]/.test(pinyin)) return 2;
    if (/[ǎěǐǒǔǚǍĚǏǑǓǙ]/.test(pinyin)) return 3;
    if (/[àèìòùǜÀÈÌÒÙǛ]/.test(pinyin)) return 4;
    return 5;
}

function showTooltip(wordEl) {
    let pinyinHtml = "";
    const text = wordEl.textContent;
    
    if (window.pinyinPro) {
        const pinyinArray = pinyinPro.pinyin(text, { type: 'array', toneType: 'symbol' });
        pinyinHtml = pinyinArray.map(py => {
            const tone = getTone(py);
            return `<span class="tone-${tone}">${py}</span>`;
        }).join(" ");
    } else {
        const tone = getTone(wordEl.dataset.pinyin);
        pinyinHtml = `<span class="tone-${tone}">${wordEl.dataset.pinyin}</span>`;
    }

    tooltipEl.innerHTML = `<span class="pinyin" style="display:flex; gap:4px; justify-content:center;">${pinyinHtml}</span><span>${wordEl.dataset.meaning}</span>`;
    
    tooltipEl.style.display = "block";
    const rect = wordEl.getBoundingClientRect();
    tooltipEl.style.left = `${rect.left + window.scrollX + (rect.width / 2) - (tooltipEl.offsetWidth / 2)}px`;
    tooltipEl.style.top = `${rect.top + window.scrollY - tooltipEl.offsetHeight - 8}px`;
    
    if (activeWord) activeWord.classList.remove("active");
    activeWord = wordEl;
    wordEl.classList.add("active");
}

function hideTooltip() {
    tooltipEl.style.display = "none";
    if (activeWord) { activeWord.classList.remove("active"); activeWord = null; }
}

const audioCache = new Map();

async function playAudio(text) {
    if (audioCache.has(text)) {
        const cachedUrl = audioCache.get(text);
        const audio = new Audio(cachedUrl);
        audio.play();
        return;
    }

    try {
        const tts = new EdgeTTS();
        const audioBlob = await tts.synthesize({
            text: text,
            voice: 'zh-CN-XiaoxiaoNeural',
            rate: '-10%' 
        });
        
        const audioUrl = URL.createObjectURL(audioBlob);
        audioCache.set(text, audioUrl);
        
        const audio = new Audio(audioUrl);
        audio.play();
    } catch (error) {
        console.error("Edge TTS failed, falling back to browser TTS:", error);
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        window.speechSynthesis.speak(utterance);
    }
}

// ==========================================
// 5. EVENT DELEGATION
// ==========================================
contentEl.addEventListener("click", (event) => {
    
    const wordEl = event.target.closest(".word");
    if (wordEl) {
        event.stopPropagation(); 
        showTooltip(wordEl);
        if (wordEl.dataset.pinyin) {
            playAudio(wordEl.textContent);
        }
        return;
    }

    const sentenceBlock = event.target.closest(".sentence-block");
    if (sentenceBlock) {
        sentenceBlock.classList.toggle("show-translation");
        return;
    }

    const actionTarget = event.target.closest("[data-action]");
    if (actionTarget) {
        const action = actionTarget.dataset.action;
        
        if (action === "open-book") {
            renderChaptersList(actionTarget._bookData, actionTarget._bookIndex);
        } 
        else if (action === "open-chapter") {
            renderChapterContent(actionTarget._bookData, actionTarget._chapterData, actionTarget._bookIndex, actionTarget._chapterIndex);
        } 
        else if (action === "back-to-books") {
            renderStoriesList();
        } 
        else if (action === "back-to-chapters") {
            renderChaptersList(actionTarget._bookData, actionTarget._bookIndex);
        }
        else if (action === "resume") {
            resumeLastRead();
        }
    }
});

document.addEventListener("click", (event) => {
    if (!event.target.closest("#story-container")) {
        hideTooltip();
    }
});

window.addEventListener("resize", hideTooltip);

// ==========================================
// 6. PROGRESS SAVING LOGIC
// ==========================================
function saveProgress(level, bookIndex, chapterIndex) {
    const progress = { level, bookIndex, chapterIndex };
    localStorage.setItem("hskProgress", JSON.stringify(progress));
}

function checkForProgress() {
    const saved = localStorage.getItem("hskProgress");
    if (!saved) return;

    try {
        const progress = JSON.parse(saved);
        // Проверяем, существуют ли сохраненные данные
        if (STORIES[progress.level] && STORIES[progress.level][progress.bookIndex]) {
            const book = STORIES[progress.level][progress.bookIndex];
            const chapter = book.chapters[progress.chapterIndex];
            
            if (chapter) {
                // Создаем красивую кнопку "Продолжить чтение"
                const resumeBtn = document.createElement("div");
                resumeBtn.className = "resume-banner";
                resumeBtn.innerHTML = `
                    <span>👋 Welcome back! You were reading <b>${chapter.title}</b>.</span>
                    <button data-action="resume" class="btn-resume">Continue</button>
                `;
                
                // Вставляем её перед списком книг
                contentEl.prepend(resumeBtn);
                
                // Сохраняем прогресс в кнопку, чтобы при клике открыть нужное место
                resumeBtn.querySelector("button").addEventListener("click", () => {
                    renderChapterContent(book, chapter, progress.bookIndex, progress.chapterIndex);
                });
            }
        }
    } catch (e) {
        console.error("Error reading progress", e);
    }
}

// ==========================================
// 7. START APP & TOGGLE
// ==========================================
window.onload = () => { 
    if(typeof STORIES !== 'undefined') {
        renderStoriesList(); 
        checkForProgress(); // Проверяем сохраненный прогресс при загрузке
    } else {
        contentEl.innerHTML = "<p style='color: red;'>Error: stories.js not found.</p>";
    }
};

const pinyinToggle = document.getElementById("pinyin-toggle");
if (pinyinToggle) {
    pinyinToggle.addEventListener("change", (e) => {
        if (e.target.checked) {
            document.body.classList.add("hide-pinyin-mode");
        } else {
            document.body.classList.remove("hide-pinyin-mode");
        }
    });
}
// ==========================================
// 8. DARK MODE TOGGLE
// ==========================================
const themeToggle = document.getElementById("theme-toggle");

// Проверяем, не включал ли пользователь тёмную тему раньше
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) themeToggle.textContent = "☀️ Light Mode";
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        // Меняем текст на кнопке и сохраняем выбор в память
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.textContent = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });
}
