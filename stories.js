const STORIES = {
  "1": [
    {
      id: "hsk1_halal_book1",
      title: "My Father's Tea",
      description: "A moving and warm story about a son studying in Beijing and his elderly father's unconditional love and sacrifices.",
      chapters: [
        {
          chapter_id: "ch1",
          title: "Chapter 1: Letters from Beijing",
          pinyin: "Dì yī zhāng: Cóng Běijīng lái de xìn",
          translation: "Chapter 1: Letters from Beijing",
          sentences: [
            { en: "Today the weather in Beijing is very cold. I miss my father.", words: [ { w: "今天", p: "jīntiān", e: "today" }, { w: "北京", p: "Běijīng", e: "Beijing" }, { w: "的", p: "de", e: "possessive particle" }, { w: "天气", p: "tiānqì", e: "weather" }, { w: "很", p: "hěn", e: "very" }, { w: "冷", p: "lěng", e: "cold" }, { w: "。", p: "", e: "" }, { w: "我", p: "wǒ", e: "I, me" }, { w: "想", p: "xiǎng", e: "to miss, to think of" }, { w: "我的", p: "wǒ de", e: "my" }, { w: "爸爸", p: "bàba", e: "father, dad" } ] },
            { en: "My name is Ali. I am a student. I study Chinese in Beijing.", words: [ { w: "我", p: "wǒ", e: "I, me" }, { w: "叫", p: "jiào", e: "to be called" }, { w: "阿里", p: "Ālǐ", e: "Ali (name)" }, { w: "。", p: "", e: "" }, { w: "我", p: "wǒ", e: "I, me" }, { w: "是", p: "shì", e: "to be" }, { w: "一个", p: "yí gè", e: "a, one" }, { w: "学生", p: "xuésheng", e: "student" }, { w: "。", p: "", e: "" }, { w: "我", p: "wǒ", e: "I, me" }, { w: "在", p: "zài", e: "in, at" }, { w: "北京", p: "Běijīng", e: "Beijing" }, { w: "学习", p: "xuéxí", e: "to study, to learn" }, { w: "汉语", p: "Hànyǔ", e: "Chinese (language)" }, { w: "。", p: "", e: "" } ] },
            { en: "My home is in China. My home is very small.", words: [ { w: "我的", p: "wǒ de", e: "my" }, { w: "家", p: "jiā", e: "home, family" }, { w: "在", p: "zài", e: "in, at" }, { w: "中国", p: "Zhōngguó", e: "China" }, { w: "。", p: "", e: "" }, { w: "我的", p: "wǒ de", e: "my" }, { w: "家", p: "jiā", e: "home" }, { w: "很", p: "hěn", e: "very" }, { w: "小", p: "xiǎo", e: "small" }, { w: "。", p: "", e: "" } ] },
            { en: "My father lives at home alone. He is sixty years old.", words: [ { w: "我的", p: "wǒ de", e: "my" }, { w: "爸爸", p: "bàba", e: "father, dad" }, { w: "一个人", p: "yí gè rén", e: "alone, one person" }, { w: "住", p: "zhù", e: "to live, to reside" }, { w: "在", p: "zài", e: "at, in" }, { w: "家", p: "jiā", e: "home" }, { w: "。", p: "", e: "" }, { w: "他", p: "tā", e: "he, him" }, { w: "六十", p: "liùshí", e: "sixty" }, { w: "岁", p: "suì", e: "years old" }, { w: "了", p: "le", e: "particle indicating change" }, { w: "。", p: "", e: "" } ] },
            { en: "My father's clothes are very few. My books are very many.", words: [ { w: "我的", p: "wǒ de", e: "my" }, { w: "爸爸", p: "bàba", e: "father, dad" }, { w: "的", p: "de", e: "possessive particle" }, { w: "衣服", p: "yīfu", e: "clothes" }, { w: "很", p: "hěn", e: "very" }, { w: "少", p: "shǎo", e: "few, little" }, { w: "。", p: "", e: "" }, { w: "我的", p: "wǒ de", e: "my" }, { w: "书", p: "shū", e: "book" }, { w: "很", p: "hěn", e: "very" }, { w: "多", p: "duō", e: "many, much" }, { w: "。", p: "", e: "" } ] },
            { en: "My father likes drinking tea. In the morning he drinks tea; in the afternoon he reads books.", words: [ { w: "我的", p: "wǒ de", e: "my" }, { w: "爸爸", p: "bàba", e: "father, dad" }, { w: "喜欢", p: "xǐhuan", e: "to like" }, { w: "喝", p: "hē", e: "to drink" }, { w: "茶", p: "chá", e: "tea" }, { w: "。", p: "", e: "" }, { w: "他", p: "tā", e: "he, him" }, { w: "上午", p: "shàngwǔ", e: "morning, before noon" }, { w: "喝", p: "hē", e: "to drink" }, { w: "茶", p: "chá", e: "tea" }, { w: "，", p: "", e: "" }, { w: "下午", p: "xiàwǔ", e: "afternoon" }, { w: "看书", p: "kàn shū", e: "to read a book" }, { w: "。", p: "", e: "" } ] },
            { en: "Today I called my father. \"Hello, Dad!\" \"Hello, son!\"", words: [ { w: "今天", p: "jīntiān", e: "today" }, { w: "我", p: "wǒ", e: "I, me" }, { w: "打电话", p: "dǎ diànhuà", e: "to make a phone call" }, { w: "。", p: "", e: "" }, { w: "“", p: "", e: "" }, { w: "喂", p: "wèi", e: "hello (on the phone)" }, { w: "，", p: "", e: "" }, { w: "爸爸", p: "bàba", e: "father, dad" }, { w: "！", p: "", e: "" }, { w: "”", p: "", e: "" }, { w: "“", p: "", e: "" }, { w: "喂", p: "wèi", e: "hello (on the phone)" }, { w: "，", p: "", e: "" }, { w: "儿子", p: "érzi", e: "son" }, { w: "！", p: "", e: "" }, { w: "”", p: "", e: "" } ] },
            { en: "My father said: \"Son, is Beijing cold? Are you well?\"", words: [ { w: "爸爸", p: "bàba", e: "father, dad" }, { w: "说", p: "shuō", e: "to say" }, { w: "：", p: "", e: "" }, { w: "“", p: "", e: "" }, { w: "儿子", p: "érzi", e: "son" }, { w: "，", p: "", e: "" }, { w: "北京", p: "Běijīng", e: "Beijing" }, { w: "冷", p: "lěng", e: "cold" }, { w: "吗", p: "ma", e: "question particle" }, { w: "？", p: "", e: "" }, { w: "你", p: "nǐ", e: "you" }, { w: "好", p: "hǎo", e: "well, good" }, { w: "吗", p: "ma", e: "question particle" }, { w: "？", p: "", e: "" }, { w: "”", p: "", e: "" } ] }
          ]
        }
      ]
    },
    {
      id: "hsk1_halal_book2",
      title: "The Brother's Garden",
      description: "A beautiful, heart-touching story about two brothers learning the value of hard work, patience, and helping each other.",
      chapters: [
        {
          chapter_id: "book2_ch1",
          title: "Chapter 1: The Old Garden",
          pinyin: "Dì yī zhāng: Lǎo huāyuán",
          translation: "Chapter 1: The Old Garden",
          sentences: [
            { en: "My father has a small garden. The garden is very old.", words: [ { w: "我的", p: "wǒ de", e: "my" }, { w: "爸爸", p: "bàba", e: "father, dad" }, { w: "有", p: "yǒu", e: "to have" }, { w: "一个", p: "yí gè", e: "a, one" }, { w: "小", p: "xiǎo", e: "small" }, { w: "花园", p: "huāyuán", e: "garden" }, { w: "。", p: "", e: "" }, { w: "花园", p: "huāyuán", e: "garden" }, { w: "很", p: "hěn", e: "very" }, { w: "老", p: "lǎo", e: "old" }, { w: "。", p: "", e: "" } ] },
            { en: "My father has two sons. I am the younger brother. I have an older brother.", words: [ { w: "我的", p: "wǒ de", e: "my" }, { w: "爸爸", p: "bàba", e: "father, dad" }, { w: "有", p: "yǒu", e: "to have" }, { w: "两个", p: "liǎng gè", e: "two" }, { w: "儿子", p: "érzi", e: "son" }, { w: "。", p: "", e: "" }, { w: "我", p: "wǒ", e: "I, me" }, { w: "是", p: "shì", e: "to be" }, { w: "弟弟", p: "dìdi", e: "younger brother" }, { w: "。", p: "", e: "" }, { w: "我", p: "wǒ", e: "I, me" }, { w: "有", p: "yǒu", e: "to have" }, { w: "哥哥", p: "gēge", e: "older brother" }, { w: "。", p: "", e: "" } ] },
            { en: "My older brother's name is Ali. My name is Hasan.", words: [ { w: "我的", p: "wǒ de", e: "my" }, { w: "哥哥", p: "gēge", e: "older brother" }, { w: "的", p: "de", e: "possessive particle" }, { w: "名字", p: "míngzi", e: "name" }, { w: "叫", p: "jiào", e: "to be called" }, { w: "阿里", p: "Ālǐ", e: "Ali (name)" }, { w: "。", p: "", e: "" }, { w: "我的", p: "wǒ de", e: "my" }, { w: "名字", p: "míngzi", e: "name" }, { w: "叫", p: "jiào", e: "to be called" }, { w: "哈桑", p: "Hāsāng", e: "Hasan (name)" }, { w: "。", p: "", e: "" } ] },
            { en: "Father said: \"This garden is yours. You two have time. You two must work in the garden.\"", words: [ { w: "爸爸", p: "bàba", e: "father, dad" }, { w: "说", p: "shuō", e: "to say" }, { w: "：", p: "", e: "" }, { w: "“", p: "", e: "" }, { w: "这个", p: "zhège", e: "this" }, { w: "花园", p: "huāyuán", e: "garden" }, { w: "是", p: "shì", e: "to be" }, { w: "你们", p: "nǐmen", e: "you (plural)" }, { w: "的", p: "de", e: "possessive particle" }, { w: "。", p: "", e: "" }, { w: "你们", p: "nǐmen", e: "you (plural)" }, { w: "有", p: "yǒu", e: "to have" }, { w: "时间", p: "shíjiān", e: "time" }, { w: "。", p: "", e: "" }, { w: "你们", p: "nǐmen", e: "you (plural)" }, { w: "要", p: "yào", e: "must, want to" }, { w: "在", p: "zài", e: "at, in" }, { w: "花园", p: "huāyuán", e: "garden" }, { w: "工作", p: "gōngzuò", e: "to work" }, { w: "。", p: "", e: "" }, { w: "”", p: "", e: "" } ] }
          ]
        }
      ]
    }
  ],
  "2": [
    {
      id: "hsk2_neighbors_light",
      title: "邻居的爱",
      description: "一个关于尊重老人、帮助邻居和社区温暖的故事。虽然事情很小，但是爱让大家都快乐。",
      chapters: [
        {
          title: "第一章：晚上的灯",
          sentences: [
            { "en": "Next to my home lives an old grandma.", "words": [ { "w": "我", "p": "wǒ", "e": "I/me" }, { "w": "家", "p": "jiā", "e": "home/family" }, { "w": "旁边", "p": "pángbiān", "e": "next to/beside" }, { "w": "住着", "p": "zhùzhe", "e": "lives" }, { "w": "一位", "p": "yí wèi", "e": "one (polite measure word for people)" }, { "w": "老奶奶", "p": "lǎonǎinai", "e": "old grandma" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "She lives alone, and her health is not very good.", "words": [ { "w": "她", "p": "tā", "e": "she/her" }, { "w": "一个人", "p": "yí gè rén", "e": "alone/one person" }, { "w": "住", "p": "zhù", "e": "to live" }, { "w": "，", "p": "", "e": "" }, { "w": "身体", "p": "shēntǐ", "e": "health/body" }, { "w": "不", "p": "bù", "e": "not" }, { "w": "太", "p": "tài", "e": "too/very" }, { "w": "好", "p": "hǎo", "e": "good/well" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "Every night, the light in her home turns off very late.", "words": [ { "w": "每天", "p": "měitiān", "e": "every day" }, { "w": "晚上", "p": "wǎnshang", "e": "night/evening" }, { "w": "，", "p": "", "e": "" }, { "w": "她", "p": "tā", "e": "she/her" }, { "w": "家", "p": "jiā", "e": "home" }, { "w": "的", "p": "de", "e": "possessive particle" }, { "w": "灯", "p": "dēng", "e": "light/lamp" }, { "w": "很", "p": "hěn", "e": "very" }, { "w": "晚", "p": "wǎn", "e": "late" }, { "w": "才", "p": "cái", "e": "only then" }, { "w": "关", "p": "guān", "e": "to turn off" }, { "w": "。", "p": "", "e": "" } ] }
          ]
        },
        {
          "title": "第二章：一起准备",
          "sentences": [
            { "en": "On Sunday, Mom prepared to cook a lot of food.", "words": [ { "w": "星期天", "p": "xīngqītiān", "e": "Sunday" }, { "w": "，", "p": "", "e": "" }, { "w": "妈妈", "p": "māma", "e": "mom" }, { "w": "准备", "p": "zhǔnbèi", "e": "to prepare" }, { "w": "做", "p": "zuò", "e": "to make/cook" }, { "w": "很多", "p": "hěn duō", "e": "a lot of/many" }, { "w": "饭", "p": "fàn", "e": "food/meal" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "I asked Mom: 'Can we deliver food to Grandma?'", "words": [ { "w": "我", "p": "wǒ", "e": "I" }, { "w": "问", "p": "wèn", "e": "to ask" }, { "w": "妈妈", "p": "māma", "e": "mom" }, { "w": "：", "p": "", "e": "" }, { "w": "“", "p": "", "e": "" }, { "w": "我们", "p": "wǒmen", "e": "we" }, { "w": "可以", "p": "kěyǐ", "e": "can" }, { "w": "给", "p": "gěi", "e": "to/for" }, { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "送", "p": "sòng", "e": "to deliver" }, { "w": "饭", "p": "fàn", "e": "food/meal" }, { "w": "吗", "p": "ma", "e": "question particle" }, { "w": "？", "p": "", "e": "" }, { "w": "”", "p": "", "e": "" } ] },
            { "en": "Mom said: 'Yes. Grandma's health is not good, so we should care about her more.'", "words": [ { "w": "妈妈", "p": "māma", "e": "mom" }, { "w": "说", "p": "shuō", "e": "to say" }, { "w": "：", "p": "", "e": "" }, { "w": "“", "p": "", "e": "" }, { "w": "可以", "p": "kěyǐ", "e": "yes/can" }, { "w": "。", "p": "", "e": "" }, { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "身体", "p": "shēntǐ", "e": "health/body" }, { "w": "不", "p": "bù", "e": "not" }, { "w": "好", "p": "hǎo", "e": "good" }, { "w": "，", "p": "", "e": "" }, { "w": "我们", "p": "wǒmen", "e": "we" }, { "w": "要", "p": "yào", "e": "should/must" }, { "w": "多", "p": "duō", "e": "more" }, { "w": "关心", "p": "guānxīn", "e": "to care about" }, { "w": "她", "p": "tā", "e": "her" }, { "w": "。", "p": "", "e": "" }, { "w": "”", "p": "", "e": "" } ] }
          ]
        },
        {
          "title": "第三章：互相帮助",
          "sentences": [
            { "en": "Later, I told my classmates about Grandma's situation.", "words": [ { "w": "后来", "p": "hòulái", "e": "later" }, { "w": "，", "p": "", "e": "" }, { "w": "我", "p": "wǒ", "e": "I" }, { "w": "告诉", "p": "gàosu", "e": "to tell" }, { "w": "同学们", "p": "tóngxuémen", "e": "classmates" }, { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "的", "p": "de", "e": "possessive particle" }, { "w": "事情", "p": "shìqing", "e": "situation/matter" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "We all smiled. Because of mutual help, this place became happier.", "words": [ { "w": "我们", "p": "wǒmen", "e": "we" }, { "w": "都", "p": "dōu", "e": "all" }, { "w": "笑", "p": "xiào", "e": "to smile" }, { "w": "了", "p": "le", "e": "particle indicating change" }, { "w": "。", "p": "", "e": "" }, { "w": "这个", "p": "zhège", "e": "this" }, { "w": "这里", "p": "zhèlǐ", "e": "here/this place" }, { "w": "因为", "p": "yīnwèi", "e": "because" }, { "w": "互相", "p": "hùxiāng", "e": "mutually/each other" }, { "w": "帮助", "p": "bāngzhù", "e": "to help" }, { "w": "，", "p": "", "e": "" }, { "w": "所以", "p": "suǒyǐ", "e": "so/therefore" }, { "w": "变", "p": "biàn", "e": "to become" }, { "w": "得", "p": "de", "e": "complement particle" }, { "w": "更", "p": "gèng", "e": "more" }, { "w": "快乐", "p": "kuàilè", "e": "happy" }, { "w": "。", "p": "", "e": "" } ] }
          ]
        }
      ]
    }
  ]
};
