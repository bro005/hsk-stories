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
    const levelStories = (typeof STORIES !== 'undefined' && STORIES[currentLevel]) ? STORIES[currentLevel] : [];
    
    if (levelStories.length === 0) {
        contentEl.innerHTML = `<p style="color: #64748b; text-align: center; margin-top: 20px;">No books here yet.</p>`;
        return;
    }

    levelStories.forEach((book) => {
        const item = document.createElement("div");
        item.className = "story-item";
        item.innerHTML = `
            <h3>📖 ${book.title}</h3>
            <p style="font-size: 15px; color: #64748b; margin-top: 5px;">${book.description}</p>
            <p style="font-size: 13px; color: #4f46e5; margin-top: 5px; font-weight: bold;">Chapters: ${book.chapters.length}</p>
        `;
        item.dataset.action = "open-book";
        item._bookData = book; 
        contentEl.appendChild(item);
    });
}

function renderChaptersList(book) {
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
        contentEl.appendChild(item);
    });
}

function renderChapterContent(book, chapter) {
    contentEl.innerHTML = "";
    
    const backBtn = document.createElement("button");
    backBtn.className = "btn-back";
    backBtn.textContent = "← Chapters List";
    backBtn.dataset.action = "back-to-chapters";
    backBtn._bookData = book;
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
            const span = document.createElement("span");
            span.className = "word";
            span.textContent = w.w; // Текст остается черным (обычным)
            
            if (w.p && w.e) {
                span.dataset.pinyin = w.p;
                span.dataset.meaning = w.e;
            }
            line.appendChild(span);
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
    
    // Раскрашиваем пиньинь по слогам с помощью pinyin-pro
    if (window.pinyinPro) {
        const pinyinArray = pinyinPro.pinyin(text, { type: 'array', toneType: 'symbol' });
        pinyinHtml = pinyinArray.map(py => {
            const tone = getTone(py);
            return `<span class="tone-${tone}">${py}</span>`;
        }).join(" ");
    } else {
        // Запасной вариант, если pinyin-pro не загрузился
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

// Создаем хранилище для аудиофайлов в памяти браузера
const audioCache = new Map();

async function playAudio(text) {
    // 1. Если аудио для этого слова уже есть в памяти, играем мгновенно
    if (audioCache.has(text)) {
        const cachedUrl = audioCache.get(text);
        const audio = new Audio(cachedUrl);
        audio.play();
        return;
    }

    // 2. Если аудио нет, запрашиваем его у Edge TTS
    try {
        const tts = new EdgeTTS();
        const audioBlob = await tts.synthesize({
            text: text,
            voice: 'zh-CN-XiaoxiaoNeural',
            rate: '-10%' 
        });
        
        const audioUrl = URL.createObjectURL(audioBlob);
        
        // Сохраняем ссылку на аудио в кэш, чтобы в следующий раз было быстро
        audioCache.set(text, audioUrl);
        
        const audio = new Audio(audioUrl);
        audio.play();
        
        // Мы убрали строчку, которая удаляла аудио, чтобы оно оставалось в памяти!
    } catch (error) {
        console.error("Edge TTS failed, falling back to browser TTS:", error);
        
        // Запасной вариант (встроенный голос браузера, если интернет пропал)
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
    
    // Проверяем, кликнули ли на слово
    const wordEl = event.target.closest(".word");
    if (wordEl) {
        event.stopPropagation(); 
        showTooltip(wordEl);
        if (wordEl.dataset.pinyin) {
            playAudio(wordEl.textContent);
        }
        return;
    }

    // Проверяем клик по пустому месту предложения
    const sentenceBlock = event.target.closest(".sentence-block");
    if (sentenceBlock) {
        sentenceBlock.classList.toggle("show-translation");
        return;
    }

    // Навигация (Книги, Главы, Назад)
    const actionTarget = event.target.closest("[data-action]");
    if (actionTarget) {
        const action = actionTarget.dataset.action;
        
        if (action === "open-book") {
            renderChaptersList(actionTarget._bookData);
        } 
        else if (action === "open-chapter") {
            renderChapterContent(actionTarget._bookData, actionTarget._chapterData);
        } 
        else if (action === "back-to-books") {
            renderStoriesList();
        } 
        else if (action === "back-to-chapters") {
            renderChaptersList(actionTarget._bookData);
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
// 6. START APP
// ==========================================
window.onload = () => { 
    if(typeof STORIES !== 'undefined') {
        renderStoriesList(); 
    } else {
        contentEl.innerHTML = "<p style='color: red;'>Error: stories.js not found.</p>";
    }
};
