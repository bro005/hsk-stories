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
            span.textContent = w.w;
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
// 4. TOOLTIP & AUDIO FUNCTIONS
// ==========================================
function showTooltip(wordEl) {
    tooltipEl.innerHTML = `<span class="pinyin">${wordEl.dataset.pinyin}</span><span>${wordEl.dataset.meaning}</span>`;
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

// NEW: Text-to-Speech Function
// Улучшенная функция Text-to-Speech
async function playAudio(text) {
    try {
        const tts = new EdgeTTS();
        // You can change the voice here (e.g., 'zh-CN-XiaoxiaoNeural')
        const audioBlob = await tts.synthesize({
            text: text,
            voice: 'zh-CN-XiaoxiaoNeural',
            rate: '-10%' // Slightly slower for learners
        });
        
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
        
        // Clean up memory after playback
        audio.onended = () => URL.revokeObjectURL(audioUrl);
    } catch (error) {
        console.error("Edge TTS failed, falling back to browser TTS:", error);
        // Fallback to the old Web Speech API if the network fails
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        window.speechSynthesis.speak(utterance);
    }
}
// ==========================================
// 5. EVENT DELEGATION (The Master Listener)
// ==========================================
contentEl.addEventListener("click", (event) => {
    
    // 1. Check if a Chinese word was clicked
    if (event.target.classList.contains("word")) {
        event.stopPropagation(); 
        
        // Show Pinyin popup
        showTooltip(event.target);
        
        // Play audio (only if it's a real word with pinyin data, not punctuation)
        if (event.target.dataset.pinyin) {
            playAudio(event.target.textContent);
        }
        
        return;
    }

    // 2. Check if the empty space of a sentence was clicked
    const sentenceBlock = event.target.closest(".sentence-block");
    if (sentenceBlock) {
        sentenceBlock.classList.toggle("show-translation");
        return;
    }

    // 3. Check if a navigation element (Book, Chapter, Back) was clicked
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

// Hide tooltip when clicking outside
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
