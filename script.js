// ==========================================
// 1. DATA (You can paste your full STORIES data here later)
// ==========================================
const STORIES = {
  1: [{
    title: "My Father's Tea",
    description: "A moving and warm story about a son studying in Beijing...",
    chapters: [{
      title: "Chapter 1: Letters from Beijing",
      sentences: [{
        en: "Today the weather in Beijing is very cold.",
        words: [
          { w: "今天", p: "jīntiān", e: "today" },
          { w: "北京", p: "Běijīng", e: "Beijing" },
          { w: "的", p: "de", e: "possessive" },
          { w: "天气", p: "tiānqì", e: "weather" },
          { w: "很", p: "hěn", e: "very" },
          { w: "冷", p: "lěng", e: "cold" },
          { w: "。", p: "", e: "" }
        ]
      }]
    }]
  }]
};

// ==========================================
// 2. DOM ELEMENTS
// ==========================================
const storyContainer = document.getElementById("story-container");
const tooltipEl = document.getElementById("tooltip");
let activeWord = null;

// ==========================================
// 3. MODULAR FUNCTIONS
// ==========================================
function showPopup(wordEl) {
    const pinyin = wordEl.dataset.pinyin;
    const meaning = wordEl.dataset.meaning;
    
    tooltipEl.innerHTML = `<span class="pinyin">${pinyin}</span><span>${meaning}</span>`;
    tooltipEl.style.display = "block";
    
    const rect = wordEl.getBoundingClientRect();
    tooltipEl.style.left = `${rect.left + window.scrollX + (rect.width / 2) - (tooltipEl.offsetWidth / 2)}px`;
    tooltipEl.style.top = `${rect.top + window.scrollY - tooltipEl.offsetHeight - 8}px`;
    
    if (activeWord) activeWord.classList.remove("active");
    activeWord = wordEl;
    wordEl.classList.add("active");
}

function hidePopup() {
    tooltipEl.style.display = "none";
    if (activeWord) {
        activeWord.classList.remove("active");
        activeWord = null;
    }
}

function toggleTranslation(sentenceBlock) {
    sentenceBlock.classList.toggle("show-translation");
}

function playAudio(text) {
    // Placeholder for future audio feature!
    console.log("Playing audio for:", text); 
}

// ==========================================
// 4. EVENT DELEGATION (The Magic Part)
// ==========================================
// We put ONE listener on the whole container. It catches clicks on everything inside.
storyContainer.addEventListener("click", (event) => {
    
    // Check if a Chinese word was clicked
    if (event.target.classList.contains("word")) {
        showPopup(event.target);
        playAudio(event.target.textContent); // Example of triggering multiple functions
        return; // Stop here so it doesn't trigger the sentence click
    }

    // Check if the empty space of a sentence block was clicked
    const sentenceBlock = event.target.closest(".sentence-block");
    if (sentenceBlock) {
        toggleTranslation(sentenceBlock);
    }
});

// Hide tooltip if user clicks anywhere else on the page
document.addEventListener("click", (event) => {
    if (!event.target.closest("#story-container")) {
        hidePopup();
    }
});

// ==========================================
// 5. INITIALIZATION
// ==========================================
function init() {
    // Here you would normally render your story list and chapters
    // For this demo, we just render the sample sentence
    const sampleSentence = STORIES[1][0].chapters[0].sentences[0];
    
    const block = document.createElement("div");
    block.className = "sentence-block";
    
    const line = document.createElement("div");
    sampleSentence.words.forEach(w => {
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
    translation.textContent = sampleSentence.en;
    block.appendChild(translation);
    
    storyContainer.appendChild(block);
}

// Run when page loads
window.onload = init;
