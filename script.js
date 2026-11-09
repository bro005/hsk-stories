// ==========================================
// 1. DOM ELEMENTS & STATE
// ==========================================
const tabsEl = document.getElementById("levels");
const contentEl = document.getElementById("story-container");
const tooltipEl = document.getElementById("tooltip");
const flashcardContainer = document.getElementById("flashcard-container");
const clearFlashcardsBtn = document.getElementById("clear-flashcards");
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
    btn.dataset.level = i;
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
        item._bookIndex = bookIndex;
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
        item._chapterIndex = index;
        contentEl.appendChild(item);
    });
}

function renderChapterContent(book, chapter, bookIndex, chapterIndex) {
    contentEl.innerHTML = "";
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
// 4. TOOLTIP & AUDIO
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

    // NEW: Added the "+" button inside the tooltip
    tooltipEl.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap: 10px;">
            <div style="text-align: left;">
                <span class="pinyin" style="display:flex; gap:4px; justify-content:center;">${pinyinHtml}</span>
                <span>${wordEl.dataset.meaning}</span>
            </div>
            <button class="btn-save-flashcard" 
                data-char="${text}" 
                data-pinyin="${wordEl.dataset.pinyin}" 
                data-meaning="${wordEl.dataset.meaning}" 
                title="Save to Flashcards">+</button>
        </div>
    `;
    
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
        new Audio(cachedUrl).play();
        return;
    }
    try {
        const tts = new EdgeTTS();
        const audioBlob = await tts.synthesize({ text: text, voice: 'zh-CN-XiaoxiaoNeural', rate: '-10%' });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioCache.set(text, audioUrl);
        new Audio(audioUrl).play();
    } catch (error) {
        console.error("TTS failed", error);
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
        if (wordEl.dataset.pinyin) playAudio(wordEl.textContent);
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
        if (action === "open-book") renderChaptersList(actionTarget._bookData, actionTarget._bookIndex);
        else if (action === "open-chapter") renderChapterContent(actionTarget._bookData, actionTarget._chapterData, actionTarget._bookIndex, actionTarget._chapterIndex);
        else if (action === "back-to-books") renderStoriesList();
        else if (action === "back-to-chapters") renderChaptersList(actionTarget._bookData, actionTarget._bookIndex);
    }
});

// Global click listener for Tooltip buttons and Flashcards
document.addEventListener("click", (event) => {
    // 1. Close tooltip if clicking outside
    if (!event.target.closest("#story-container") && !event.target.closest(".tooltip")) {
        hideTooltip();
    }

    // 2. Save to flashcard button click
    if (event.target.classList.contains("btn-save-flashcard")) {
        const btn = event.target;
        saveFlashcard(btn.dataset.char, btn.dataset.pinyin, btn.dataset.meaning);
        btn.textContent = "✓";
        setTimeout(() => { btn.textContent = "+"; }, 1000);
    }

    // 3. Flip flashcard click
    const card = event.target.closest(".flashcard");
    if (card) {
        card.classList.toggle("flipped");
    }
});

window.addEventListener("resize", hideTooltip);

// ==========================================
// 6. PROGRESS SAVING LOGIC
// ==========================================
function saveProgress(level, bookIndex, chapterIndex) {
    localStorage.setItem("hskProgress", JSON.stringify({ level, bookIndex, chapterIndex }));
}

function checkForProgress() {
    const saved = localStorage.getItem("hskProgress");
    if (!saved) return;
    try {
        const progress = JSON.parse(saved);
        if (STORIES[progress.level] && STORIES[progress.level][progress.bookIndex]) {
            const book = STORIES[progress.level][progress.bookIndex];
            const chapter = book.chapters[progress.chapterIndex];
            if (chapter) {
                const resumeBtn = document.createElement("div");
                resumeBtn.className = "resume-banner";
                resumeBtn.innerHTML = `
                    <span>👋 Welcome back! You were reading <b>${chapter.title}</b>.</span>
                    <button class="btn-resume">Continue</button>
                `;
                contentEl.prepend(resumeBtn);
                resumeBtn.querySelector("button").addEventListener("click", () => {
                    renderChapterContent(book, chapter, progress.bookIndex, progress.chapterIndex);
                });
            }
        }
    } catch (e) { console.error(e); }
}

// ==========================================
// 7. FLASHCARD LOGIC
// ==========================================
function getFlashcards() {
    return JSON.parse(localStorage.getItem("hskFlashcards")) || [];
}

function saveFlashcard(char, pinyin, meaning) {
    const cards = getFlashcards();
    // Prevent duplicates
    if (!cards.some(c => c.char === char)) {
        cards.push({ char, pinyin, meaning });
        localStorage.setItem("hskFlashcards", JSON.stringify(cards));
        renderFlashcards();
    }
}

function renderFlashcards() {
    const cards = getFlashcards();
    flashcardContainer.innerHTML = "";
    
    if (cards.length === 0) {
        flashcardContainer.innerHTML = `<p style="color: var(--text-light); font-size: 14px;">No flashcards saved yet. Click a word and press "+" to save it!</p>`;
        return;
    }

    cards.forEach(card => {
        const cardEl = document.createElement("div");
        cardEl.className = "flashcard";
        cardEl.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <span>${card.char}</span>
                    <span class="pinyin">${card.pinyin}</span>
                </div>
                <div class="flashcard-back">
                    <span>${card.meaning}</span>
                </div>
            </div>
        `;
        flashcardContainer.appendChild(cardEl);
    });
}

clearFlashcardsBtn.addEventListener("click", () => {
    if(confirm("Are you sure you want to clear all your flashcards?")) {
        localStorage.removeItem("hskFlashcards");
        renderFlashcards();
    }
});

// ==========================================
// 8. START APP & TOGGLE
// ==========================================
window.onload = () => { 
    if(typeof STORIES !== 'undefined') {
        renderStoriesList(); 
        checkForProgress();
        renderFlashcards(); // Load flashcards on start
    } else {
        contentEl.innerHTML = "<p style='color: red;'>Error: stories.js not found.</p>";
    }
};

const pinyinToggle = document.getElementById("pinyin-toggle");
if (pinyinToggle) {
    pinyinToggle.addEventListener("change", (e) => {
        document.body.classList.toggle("hide-pinyin-mode", e.target.checked);
    });
}

const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️ Light Mode";
    }
    themeToggle.addEventListener("click", function(e) {
        e.preventDefault();
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.textContent = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });
}
