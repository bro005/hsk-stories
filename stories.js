
const STORIES = {
  1: [
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
            {
              en: "Today the weather in Beijing is very cold. I miss my father.",
              words: [
                { w: "今天", p: "jīntiān", e: "today" },
                { w: "北京", p: "Běijīng", e: "Beijing" },
                { w: "的", p: "de", e: "possessive particle" },
                { w: "天气", p: "tiānqì", e: "weather" },
                { w: "很", p: "hěn", e: "very" },
                { w: "冷", p: "lěng", e: "cold" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "想", p: "xiǎng", e: "to miss, to think of" },
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" }
              ]
            },
            {
              en: "My name is Ali. I am a student. I study Chinese in Beijing.",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "叫", p: "jiào", e: "to be called" },
                { w: "阿里", p: "Ālǐ", e: "Ali (name)" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "是", p: "shì", e: "to be" },
                { w: "一个", p: "yí gè", e: "a, one" },
                { w: "学生", p: "xuésheng", e: "student" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "在", p: "zài", e: "in, at" },
                { w: "北京", p: "Běijīng", e: "Beijing" },
                { w: "学习", p: "xuéxí", e: "to study, to learn" },
                { w: "汉语", p: "Hànyǔ", e: "Chinese (language)" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "My home is in China. My home is very small.",
              words: [
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "家", p: "jiā", e: "home, family" },
                { w: "在", p: "zài", e: "in, at" },
                { w: "中国", p: "Zhōngguó", e: "China" },
                { w: "。", p: "", e: "" },
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "家", p: "jiā", e: "home" },
                { w: "很", p: "hěn", e: "very" },
                { w: "小", p: "xiǎo", e: "small" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "My father lives at home alone. He is sixty years old.",
              words: [
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "一个人", p: "yí gè rén", e: "alone, one person" },
                { w: "住", p: "zhù", e: "to live, to reside" },
                { w: "在", p: "zài", e: "at, in" },
                { w: "家", p: "jiā", e: "home" },
                { w: "。", p: "", e: "" },
                { w: "他", p: "tā", e: "he, him" },
                { w: "六十", p: "liùshí", e: "sixty" },
                { w: "岁", p: "suì", e: "years old" },
                { w: "了", p: "le", e: "particle indicating change" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "My father's clothes are very few. My books are very many.",
              words: [
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "的", p: "de", e: "possessive particle" },
                { w: "衣服", p: "yīfu", e: "clothes" },
                { w: "很", p: "hěn", e: "very" },
                { w: "少", p: "shǎo", e: "few, little" },
                { w: "。", p: "", e: "" },
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "书", p: "shū", e: "book" },
                { w: "很", p: "hěn", e: "very" },
                { w: "多", p: "duō", e: "many, much" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "My father likes drinking tea. In the morning he drinks tea; in the afternoon he reads books.",
              words: [
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "喜欢", p: "xǐhuan", e: "to like" },
                { w: "喝", p: "hē", e: "to drink" },
                { w: "茶", p: "chá", e: "tea" },
                { w: "。", p: "", e: "" },
                { w: "他", p: "tā", e: "he, him" },
                { w: "上午", p: "shàngwǔ", e: "morning, before noon" },
                { w: "喝", p: "hē", e: "to drink" },
                { w: "茶", p: "chá", e: "tea" },
                { w: "，", p: "", e: "" },
                { w: "下午", p: "xiàwǔ", e: "afternoon" },
                { w: "看书", p: "kàn shū", e: "to read a book" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "Today I called my father. \"Hello, Dad!\" \"Hello, son!\"",
              words: [
                { w: "今天", p: "jīntiān", e: "today" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "打电话", p: "dǎ diànhuà", e: "to make a phone call" },
                { w: "。", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "喂", p: "wèi", e: "hello (on the phone)" },
                { w: "，", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "！", p: "", e: "" },
                { w: "”", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "喂", p: "wèi", e: "hello (on the phone)" },
                { w: "，", p: "", e: "" },
                { w: "儿子", p: "érzi", e: "son" },
                { w: "！", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "My father said: \"Son, is Beijing cold? Are you well?\"",
              words: [
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "儿子", p: "érzi", e: "son" },
                { w: "，", p: "", e: "" },
                { w: "北京", p: "Běijīng", e: "Beijing" },
                { w: "冷", p: "lěng", e: "cold" },
                { w: "吗", p: "ma", e: "question particle" },
                { w: "？", p: "", e: "" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "好", p: "hǎo", e: "well, good" },
                { w: "吗", p: "ma", e: "question particle" },
                { w: "？", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "I said: \"Dad, Beijing is very cold. I am very well. My studying is very good.\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "，", p: "", e: "" },
                { w: "北京", p: "Běijīng", e: "Beijing" },
                { w: "很", p: "hěn", e: "very" },
                { w: "冷", p: "lěng", e: "cold" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "well, good" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "学习", p: "xuéxí", e: "to study" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "My father said: \"Good. Son, do you have money? Do you eat well?\"",
              words: [
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "。", p: "", e: "" },
                { w: "儿子", p: "érzi", e: "son" },
                { w: "，", p: "", e: "" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "有", p: "yǒu", e: "to have" },
                { w: "钱", p: "qián", e: "money" },
                { w: "吗", p: "ma", e: "question particle" },
                { w: "？", p: "", e: "" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "吃饭", p: "chīfàn", e: "to eat (a meal)" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "well" },
                { w: "吗", p: "ma", e: "question particle" },
                { w: "？", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "I said: \"Dad, I have money. I eat very well. Dad, what about you?\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "，", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "有", p: "yǒu", e: "to have" },
                { w: "钱", p: "qián", e: "money" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "吃饭", p: "chīfàn", e: "to eat (a meal)" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "well" },
                { w: "。", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "，", p: "", e: "" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "呢", p: "ne", e: "question particle (and...?)" },
                { w: "？", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "My father said: \"I am very well. I drink tea in the morning and read books in the afternoon. You study — I am very happy.\"",
              words: [
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "well, good" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "上午", p: "shàngwǔ", e: "morning" },
                { w: "喝", p: "hē", e: "to drink" },
                { w: "茶", p: "chá", e: "tea" },
                { w: "，", p: "", e: "" },
                { w: "下午", p: "xiàwǔ", e: "afternoon" },
                { w: "看书", p: "kàn shū", e: "to read a book" },
                { w: "。", p: "", e: "" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "学习", p: "xuéxí", e: "to study" },
                { w: "，", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "高兴", p: "gāoxìng", e: "happy, glad" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "I heard that my father was very happy. I missed him very much. I looked at my book, but I could not see the book.",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "听见", p: "tīngjiàn", e: "to hear" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "很", p: "hěn", e: "very" },
                { w: "高兴", p: "gāoxìng", e: "happy, glad" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "想", p: "xiǎng", e: "to miss" },
                { w: "他", p: "tā", e: "him" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "看", p: "kàn", e: "to look at" },
                { w: "书", p: "shū", e: "book" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "看不见", p: "kàn bú jiàn", e: "cannot see" },
                { w: "书", p: "shū", e: "book" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "I thought: \"My father's work is very much. My father's money is not much.\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "想", p: "xiǎng", e: "to think" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "的", p: "de", e: "possessive particle" },
                { w: "工作", p: "gōngzuò", e: "work, job" },
                { w: "很", p: "hěn", e: "very" },
                { w: "多", p: "duō", e: "much, many" },
                { w: "。", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "的", p: "de", e: "possessive particle" },
                { w: "钱", p: "qián", e: "money" },
                { w: "不", p: "bù", e: "not" },
                { w: "多", p: "duō", e: "much" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "I will study very well. I will work. I will buy many things and give them to my father.",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "会", p: "huì", e: "will" },
                { w: "学习", p: "xuéxí", e: "to study" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "well" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "会", p: "huì", e: "will" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "买", p: "mǎi", e: "to buy" },
                { w: "很多", p: "hěn duō", e: "many" },
                { w: "东西", p: "dōngxi", e: "things" },
                { w: "，", p: "", e: "" },
                { w: "给", p: "gěi", e: "to give, for" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "I said: \"Dad, I love you.\" My father said: \"Son, I love you. I love you very much.\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "，", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "爱", p: "ài", e: "to love" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "儿子", p: "érzi", e: "son" },
                { w: "，", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "爱", p: "ài", e: "to love" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "爱", p: "ài", e: "to love" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "Tomorrow is Sunday. I will go to the train station. I want to go home and see my father.",
              words: [
                { w: "明天", p: "míngtiān", e: "tomorrow" },
                { w: "是", p: "shì", e: "to be" },
                { w: "星期天", p: "xīngqītiān", e: "Sunday" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "去", p: "qù", e: "to go" },
                { w: "火车站", p: "huǒchēzhàn", e: "train station" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "想", p: "xiǎng", e: "to want" },
                { w: "回家", p: "huíjiā", e: "to go home" },
                { w: "看", p: "kàn", e: "to see" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "。", p: "", e: "" }
              ]
            }
          ]
        },
        {
          chapter_id: "ch2",
          title: "Chapter 2: The Warmest Reunion",
          pinyin: "Dì èr zhāng: Zuì wēnnuǎn de jiànmiàn",
          translation: "Chapter 2: The Warmest Reunion",
          sentences: [
            {
              en: "Today is Sunday. I sat on the train. There are many people on the train.",
              words: [
                { w: "今天", p: "jīntiān", e: "today" },
                { w: "是", p: "shì", e: "to be" },
                { w: "星期天", p: "xīngqītiān", e: "Sunday" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "坐", p: "zuò", e: "to sit, to ride" },
                { w: "火车", p: "huǒchē", e: "train" },
                { w: "。", p: "", e: "" },
                { w: "火车", p: "huǒchē", e: "train" },
                { w: "上", p: "shàng", e: "on" },
                { w: "有", p: "yǒu", e: "there are" },
                { w: "很", p: "hěn", e: "very" },
                { w: "多", p: "duō", e: "many" },
                { w: "人", p: "rén", e: "people" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "Today it is raining. The weather is very cold. I am very happy.",
              words: [
                { w: "今天", p: "jīntiān", e: "today" },
                { w: "下雨", p: "xiàyǔ", e: "to rain" },
                { w: "。", p: "", e: "" },
                { w: "天气", p: "tiānqì", e: "weather" },
                { w: "很", p: "hěn", e: "very" },
                { w: "冷", p: "lěng", e: "cold" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "高兴", p: "gāoxìng", e: "happy" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "In the morning I sat on the train. In the afternoon I went home.",
              words: [
                { w: "上午", p: "shàngwǔ", e: "morning" },
                { w: "，", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "坐", p: "zuò", e: "to ride, to sit" },
                { w: "火车", p: "huǒchē", e: "train" },
                { w: "。", p: "", e: "" },
                { w: "下午", p: "xiàwǔ", e: "afternoon" },
                { w: "，", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "回家", p: "huíjiā", e: "to go home" },
                { w: "了", p: "le", e: "particle indicating change" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "I saw my father. He was in front of our home.",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "看见", p: "kànjiàn", e: "to see" },
                { w: "了", p: "le", e: "particle indicating completion" },
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "。", p: "", e: "" },
                { w: "他", p: "tā", e: "he, him" },
                { w: "在", p: "zài", e: "at, in" },
                { w: "家", p: "jiā", e: "home" },
                { w: "前面", p: "qiánmiàn", e: "in front of" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "My father was very happy. He said: \"Son! You are back!\"",
              words: [
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "很", p: "hěn", e: "very" },
                { w: "高兴", p: "gāoxìng", e: "happy" },
                { w: "。", p: "", e: "" },
                { w: "他", p: "tā", e: "he, him" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "儿子", p: "érzi", e: "son" },
                { w: "！", p: "", e: "" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "回来", p: "huílái", e: "to come back" },
                { w: "了", p: "le", e: "particle indicating change" },
                { w: "！", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "I said: \"Dad, I am back. I missed you very much.\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "，", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "回来", p: "huílái", e: "to come back" },
                { w: "了", p: "le", e: "particle indicating change" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "想", p: "xiǎng", e: "to miss" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "My father looked at me. He did not speak. I did not speak.",
              words: [
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "看", p: "kàn", e: "to look at" },
                { w: "我", p: "wǒ", e: "me" },
                { w: "。", p: "", e: "" },
                { w: "他", p: "tā", e: "he, him" },
                { w: "不", p: "bù", e: "not" },
                { w: "说", p: "shuō", e: "to speak" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "不", p: "bù", e: "not" },
                { w: "说", p: "shuō", e: "to speak" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "Then my father smiled. He said: \"Son, are you cold? Let us go home.\"",
              words: [
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "笑", p: "xiào", e: "to smile" },
                { w: "了", p: "le", e: "particle indicating change" },
                { w: "。", p: "", e: "" },
                { w: "他", p: "tā", e: "he, him" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "儿子", p: "érzi", e: "son" },
                { w: "，", p: "", e: "" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "冷", p: "lěng", e: "cold" },
                { w: "吗", p: "ma", e: "question particle" },
                { w: "？", p: "", e: "" },
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "回家", p: "huíjiā", e: "to go home" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "At home we drank tea. The tea was very hot. My father was very happy.",
              words: [
                { w: "在", p: "zài", e: "at" },
                { w: "家", p: "jiā", e: "home" },
                { w: "，", p: "", e: "" },
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "喝", p: "hē", e: "to drink" },
                { w: "茶", p: "chá", e: "tea" },
                { w: "。", p: "", e: "" },
                { w: "茶", p: "chá", e: "tea" },
                { w: "很", p: "hěn", e: "very" },
                { w: "热", p: "rè", e: "hot" },
                { w: "。", p: "", e: "" },
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "很", p: "hěn", e: "very" },
                { w: "高兴", p: "gāoxìng", e: "happy" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "My father said: \"Son, your books are very many. Your studying is very good. I am very happy.\"",
              words: [
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "儿子", p: "érzi", e: "son" },
                { w: "，", p: "", e: "" },
                { w: "你的", p: "nǐ de", e: "your" },
                { w: "书", p: "shū", e: "book" },
                { w: "很", p: "hěn", e: "very" },
                { w: "多", p: "duō", e: "many" },
                { w: "。", p: "", e: "" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "学习", p: "xuéxí", e: "to study" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "高兴", p: "gāoxìng", e: "happy" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "I said: \"Dad, my books are very many, but your clothes are very few. I have seen it. Thank you, Dad.\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "，", p: "", e: "" },
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "书", p: "shū", e: "book" },
                { w: "很", p: "hěn", e: "very" },
                { w: "多", p: "duō", e: "many" },
                { w: "。", p: "", e: "" },
                { w: "你的", p: "nǐ de", e: "your" },
                { w: "衣服", p: "yīfu", e: "clothes" },
                { w: "很", p: "hěn", e: "very" },
                { w: "少", p: "shǎo", e: "few" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "看见", p: "kànjiàn", e: "to see" },
                { w: "了", p: "le", e: "particle indicating completion" },
                { w: "。", p: "", e: "" },
                { w: "谢谢", p: "xièxie", e: "thank you" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "，", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "My father said: \"Son, my things are very few. I am very well. You study, I am very happy. You are a good son. I love you.\"",
              words: [
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "儿子", p: "érzi", e: "son" },
                { w: "，", p: "", e: "" },
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "东西", p: "dōngxi", e: "things" },
                { w: "很", p: "hěn", e: "very" },
                { w: "少", p: "shǎo", e: "few" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "well" },
                { w: "。", p: "", e: "" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "学习", p: "xuéxí", e: "to study" },
                { w: "，", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "高兴", p: "gāoxìng", e: "happy" },
                { w: "。", p: "", e: "" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "是", p: "shì", e: "to be" },
                { w: "一个", p: "yí gè", e: "a, one" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "儿子", p: "érzi", e: "son" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "爱", p: "ài", e: "to love" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "I said: \"Dad, I love you very much. You are my good father.\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "，", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "爱", p: "ài", e: "to love" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "。", p: "", e: "" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "是", p: "shì", e: "to be" },
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "That afternoon we sat in front of our home and drank tea. We did not say much. We were very happy.",
              words: [
                { w: "那个", p: "nàge", e: "that" },
                { w: "下午", p: "xiàwǔ", e: "afternoon" },
                { w: "，", p: "", e: "" },
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "坐", p: "zuò", e: "to sit" },
                { w: "在", p: "zài", e: "at, in" },
                { w: "家", p: "jiā", e: "home" },
                { w: "前面", p: "qiánmiàn", e: "in front of" },
                { w: "，", p: "", e: "" },
                { w: "喝", p: "hē", e: "to drink" },
                { w: "茶", p: "chá", e: "tea" },
                { w: "。", p: "", e: "" },
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "没有", p: "méiyǒu", e: "did not" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "很", p: "hěn", e: "very" },
                { w: "多", p: "duō", e: "much" },
                { w: "。", p: "", e: "" },
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "很", p: "hěn", e: "very" },
                { w: "高兴", p: "gāoxìng", e: "happy" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "I thought: \"My father's tea is very good. This home is very good. I love this home very much.\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "想", p: "xiǎng", e: "to think" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "的", p: "de", e: "possessive particle" },
                { w: "茶", p: "chá", e: "tea" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "。", p: "", e: "" },
                { w: "这个", p: "zhège", e: "this" },
                { w: "家", p: "jiā", e: "home" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "爱", p: "ài", e: "to love" },
                { w: "这个", p: "zhège", e: "this" },
                { w: "家", p: "jiā", e: "home" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "My father said: \"Son, tomorrow you go back to Beijing. Study very well. Do not miss home. I am very well.\"",
              words: [
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "儿子", p: "érzi", e: "son" },
                { w: "，", p: "", e: "" },
                { w: "明天", p: "míngtiān", e: "tomorrow" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "回", p: "huí", e: "to return" },
                { w: "北京", p: "Běijīng", e: "Beijing" },
                { w: "。", p: "", e: "" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "学习", p: "xuéxí", e: "to study" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "well" },
                { w: "。", p: "", e: "" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "不", p: "bù", e: "do not" },
                { w: "想", p: "xiǎng", e: "to miss" },
                { w: "家", p: "jiā", e: "home" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "well" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "I said: \"Dad, I will study very well. I will come back. I will come back to see you.\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "，", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "会", p: "huì", e: "will" },
                { w: "学习", p: "xuéxí", e: "to study" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "well" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "会", p: "huì", e: "will" },
                { w: "回来", p: "huílái", e: "to come back" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "回来", p: "huílái", e: "to come back" },
                { w: "看", p: "kàn", e: "to see" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "In the morning I sat on the train. My father was in front of the train station. He looked at me. I looked at him.",
              words: [
                { w: "上午", p: "shàngwǔ", e: "morning" },
                { w: "，", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "坐", p: "zuò", e: "to sit, to ride" },
                { w: "火车", p: "huǒchē", e: "train" },
                { w: "。", p: "", e: "" },
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "在", p: "zài", e: "at, in" },
                { w: "火车站", p: "huǒchēzhàn", e: "train station" },
                { w: "前面", p: "qiánmiàn", e: "in front of" },
                { w: "。", p: "", e: "" },
                { w: "他", p: "tā", e: "he, him" },
                { w: "看", p: "kàn", e: "to look at" },
                { w: "我", p: "wǒ", e: "me" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "看", p: "kàn", e: "to look at" },
                { w: "他", p: "tā", e: "him" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "My father did not speak. I did not speak. We both were very happy.",
              words: [
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "不", p: "bù", e: "not" },
                { w: "说", p: "shuō", e: "to speak" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "不", p: "bù", e: "not" },
                { w: "说", p: "shuō", e: "to speak" },
                { w: "。", p: "", e: "" },
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "都", p: "dōu", e: "both, all" },
                { w: "很", p: "hěn", e: "very" },
                { w: "高兴", p: "gāoxìng", e: "happy" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "I thought: \"My father's tea is very good. My father is very good. Home is very good.\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "想", p: "xiǎng", e: "to think" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "的", p: "de", e: "possessive particle" },
                { w: "茶", p: "chá", e: "tea" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "。", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "。", p: "", e: "" },
                { w: "家", p: "jiā", e: "home" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "Thank you, Dad. Goodbye. I love you.",
              words: [
                { w: "谢谢", p: "xièxie", e: "thank you" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "，", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "。", p: "", e: "" },
                { w: "再见", p: "zàijiàn", e: "goodbye" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "爱", p: "ài", e: "to love" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "。", p: "", e: "" }
              ]
            }
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
            {
              en: "My father has a small garden. The garden is very old.",
              words: [
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "有", p: "yǒu", e: "to have" },
                { w: "一个", p: "yí gè", e: "a, one" },
                { w: "小", p: "xiǎo", e: "small" },
                { w: "花园", p: "huāyuán", e: "garden" },
                { w: "。", p: "", e: "" },
                { w: "花园", p: "huāyuán", e: "garden" },
                { w: "很", p: "hěn", e: "very" },
                { w: "老", p: "lǎo", e: "old" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "My father has two sons. I am the younger brother. I have an older brother.",
              words: [
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "有", p: "yǒu", e: "to have" },
                { w: "两个", p: "liǎng gè", e: "two" },
                { w: "儿子", p: "érzi", e: "son" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "是", p: "shì", e: "to be" },
                { w: "弟弟", p: "dìdi", e: "younger brother" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "有", p: "yǒu", e: "to have" },
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "My older brother's name is Ali. My name is Hasan.",
              words: [
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "的", p: "de", e: "possessive particle" },
                { w: "名字", p: "míngzi", e: "name" },
                { w: "叫", p: "jiào", e: "to be called" },
                { w: "阿里", p: "Ālǐ", e: "Ali (name)" },
                { w: "。", p: "", e: "" },
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "名字", p: "míngzi", e: "name" },
                { w: "叫", p: "jiào", e: "to be called" },
                { w: "哈桑", p: "Hāsāng", e: "Hasan (name)" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "Father said: \"This garden is yours. You two have time. You two must work in the garden.\"",
              words: [
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "这个", p: "zhège", e: "this" },
                { w: "花园", p: "huāyuán", e: "garden" },
                { w: "是", p: "shì", e: "to be" },
                { w: "你们", p: "nǐmen", e: "you (plural)" },
                { w: "的", p: "de", e: "possessive particle" },
                { w: "。", p: "", e: "" },
                { w: "你们", p: "nǐmen", e: "you (plural)" },
                { w: "有", p: "yǒu", e: "to have" },
                { w: "时间", p: "shíjiān", e: "time" },
                { w: "。", p: "", e: "" },
                { w: "你们", p: "nǐmen", e: "you (plural)" },
                { w: "要", p: "yào", e: "must, want to" },
                { w: "在", p: "zài", e: "at, in" },
                { w: "花园", p: "huāyuán", e: "garden" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "My older brother works in the garden every day. He is not tired.",
              words: [
                { w: "我的", p: "wǒ de", e: "my" },
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "天天", p: "tiāntiān", e: "every day" },
                { w: "在", p: "zài", e: "at, in" },
                { w: "花园", p: "huāyuán", e: "garden" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" },
                { w: "他", p: "tā", e: "he, him" },
                { w: "不", p: "bù", e: "not" },
                { w: "累", p: "lèi", e: "tired" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "I do not like to work. I am very tired every day.",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "不", p: "bù", e: "not" },
                { w: "喜欢", p: "xǐhuan", e: "to like" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "天天", p: "tiāntiān", e: "every day" },
                { w: "很", p: "hěn", e: "very" },
                { w: "累", p: "lèi", e: "tired" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "I said: \"Older brother, working is very tiring. I have no time. I am very tired.\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "，", p: "", e: "" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "很", p: "hěn", e: "very" },
                { w: "累", p: "lèi", e: "tiring" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "没有", p: "méiyǒu", e: "to not have" },
                { w: "时间", p: "shíjiān", e: "time" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "累", p: "lèi", e: "tired" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "Older brother said: \"Younger brother, we have time. I will help you. I will work together with you.\"",
              words: [
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "弟弟", p: "dìdi", e: "younger brother" },
                { w: "，", p: "", e: "" },
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "有", p: "yǒu", e: "to have" },
                { w: "时间", p: "shíjiān", e: "time" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "帮助", p: "bāngzhù", e: "to help" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "和", p: "hé", e: "with" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "一起", p: "yìqǐ", e: "together" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "I said: \"Thank you, older brother. But I am very tired. I want to sleep.\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "谢谢", p: "xièxie", e: "thank you" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "，", p: "", e: "" },
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "。", p: "", e: "" },
                { w: "但是", p: "dànshì", e: "but" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "累", p: "lèi", e: "tired" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "想", p: "xiǎng", e: "to want" },
                { w: "睡觉", p: "shuìjiào", e: "to sleep" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "Older brother did not say anything. He works alone in the garden. He gives me time.",
              words: [
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "不", p: "bù", e: "not" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "什么", p: "shénme", e: "anything, what" },
                { w: "。", p: "", e: "" },
                { w: "他", p: "tā", e: "he, him" },
                { w: "一个人", p: "yí gè rén", e: "alone" },
                { w: "在", p: "zài", e: "at, in" },
                { w: "花园", p: "huāyuán", e: "garden" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" },
                { w: "他", p: "tā", e: "he, him" },
                { w: "给", p: "gěi", e: "to give" },
                { w: "我", p: "wǒ", e: "me" },
                { w: "时间", p: "shíjiān", e: "time" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "Every day, older brother works in the garden. I sleep. I am not happy.",
              words: [
                { w: "天天", p: "tiāntiān", e: "every day" },
                { w: "，", p: "", e: "" },
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "在", p: "zài", e: "at, in" },
                { w: "花园", p: "huāyuán", e: "garden" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "睡觉", p: "shuìjiào", e: "to sleep" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "不", p: "bù", e: "not" },
                { w: "高兴", p: "gāoxìng", e: "happy" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "I look at older brother. He is very tired, but he is happy. He helps me.",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "看", p: "kàn", e: "to look at" },
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "。", p: "", e: "" },
                { w: "他", p: "tā", e: "he, him" },
                { w: "很", p: "hěn", e: "very" },
                { w: "累", p: "lèi", e: "tired" },
                { w: "，", p: "", e: "" },
                { w: "但是", p: "dànshì", e: "but" },
                { w: "他", p: "tā", e: "he, him" },
                { w: "很", p: "hěn", e: "very" },
                { w: "高兴", p: "gāoxìng", e: "happy" },
                { w: "。", p: "", e: "" },
                { w: "他", p: "tā", e: "he, him" },
                { w: "帮助", p: "bāngzhù", e: "to help" },
                { w: "我", p: "wǒ", e: "me" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "I thought: \"Older brother works every day. He helps me every day. I am not a good younger brother.\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "想", p: "xiǎng", e: "to think" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "天天", p: "tiāntiān", e: "every day" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" },
                { w: "他", p: "tā", e: "he, him" },
                { w: "天天", p: "tiāntiān", e: "every day" },
                { w: "帮助", p: "bāngzhù", e: "to help" },
                { w: "我", p: "wǒ", e: "me" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "不", p: "bù", e: "not" },
                { w: "是", p: "shì", e: "to be" },
                { w: "一个", p: "yí gè", e: "a, one" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "弟弟", p: "dìdi", e: "younger brother" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            }
          ]
        },
        {
          chapter_id: "book2_ch2",
          title: "Chapter 2: Working Together",
          pinyin: "Dì èr zhāng: Yìqǐ gōngzuò",
          translation: "Chapter 2: Working Together",
          sentences: [
            {
              en: "Today the weather is very good. I got up very early. Today I have time.",
              words: [
                { w: "今天", p: "jīntiān", e: "today" },
                { w: "天气", p: "tiānqì", e: "weather" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "起床", p: "qǐchuáng", e: "to get up" },
                { w: "很", p: "hěn", e: "very" },
                { w: "早", p: "zǎo", e: "early" },
                { w: "。", p: "", e: "" },
                { w: "今天", p: "jīntiān", e: "today" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "有", p: "yǒu", e: "to have" },
                { w: "时间", p: "shíjiān", e: "time" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "I went to the garden. Older brother was working in the garden.",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "去", p: "qù", e: "to go" },
                { w: "花园", p: "huāyuán", e: "garden" },
                { w: "。", p: "", e: "" },
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "在", p: "zài", e: "at, in" },
                { w: "花园", p: "huāyuán", e: "garden" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "I said: \"Older brother, today I want to work together with you.\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "，", p: "", e: "" },
                { w: "今天", p: "jīntiān", e: "today" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "想", p: "xiǎng", e: "to want" },
                { w: "和", p: "hé", e: "with" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "一起", p: "yìqǐ", e: "together" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "Older brother was very happy. He said: \"Very good, younger brother! Thank you. We have time. We can work together. I will help you.\"",
              words: [
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "很", p: "hěn", e: "very" },
                { w: "高兴", p: "gāoxìng", e: "happy" },
                { w: "。", p: "", e: "" },
                { w: "他", p: "tā", e: "he, him" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "，", p: "", e: "" },
                { w: "弟弟", p: "dìdi", e: "younger brother" },
                { w: "！", p: "", e: "" },
                { w: "谢谢", p: "xièxie", e: "thank you" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "。", p: "", e: "" },
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "有", p: "yǒu", e: "to have" },
                { w: "时间", p: "shíjiān", e: "time" },
                { w: "。", p: "", e: "" },
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "可以", p: "kěyǐ", e: "can" },
                { w: "一起", p: "yìqǐ", e: "together" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "帮助", p: "bāngzhù", e: "to help" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "We worked together in the garden. We looked at the flowers and the trees.",
              words: [
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "一起", p: "yìqǐ", e: "together" },
                { w: "在", p: "zài", e: "at, in" },
                { w: "花园", p: "huāyuán", e: "garden" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" },
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "看", p: "kàn", e: "to look at" },
                { w: "花", p: "huā", e: "flower" },
                { w: "，", p: "", e: "" },
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "看", p: "kàn", e: "to look at" },
                { w: "树", p: "shù", e: "tree" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "After working, I was very tired. But I was also very happy.",
              words: [
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "以后", p: "yǐhòu", e: "after" },
                { w: "，", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "累", p: "lèi", e: "tired" },
                { w: "。", p: "", e: "" },
                { w: "但是", p: "dànshì", e: "but" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "也", p: "yě", e: "also" },
                { w: "很", p: "hěn", e: "very" },
                { w: "高兴", p: "gāoxìng", e: "happy" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "I said: \"Older brother, thank you for helping me. Now I know: working together is very good.\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "，", p: "", e: "" },
                { w: "谢谢", p: "xièxie", e: "thank you" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "帮助", p: "bāngzhù", e: "to help" },
                { w: "我", p: "wǒ", e: "me" },
                { w: "。", p: "", e: "" },
                { w: "现在", p: "xiànzài", e: "now" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "知道", p: "zhīdào", e: "to know" },
                { w: "：", p: "", e: "" },
                { w: "一起", p: "yìqǐ", e: "together" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "Older brother said: \"Younger brother, I am very happy. We are older brother and younger brother. Older brother helps younger brother. I want to help you every day.\"",
              words: [
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "弟弟", p: "dìdi", e: "younger brother" },
                { w: "，", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "高兴", p: "gāoxìng", e: "happy" },
                { w: "。", p: "", e: "" },
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "是", p: "shì", e: "to be" },
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "和", p: "hé", e: "and" },
                { w: "弟弟", p: "dìdi", e: "younger brother" },
                { w: "。", p: "", e: "" },
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "帮助", p: "bāngzhù", e: "to help" },
                { w: "弟弟", p: "dìdi", e: "younger brother" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "天天", p: "tiāntiān", e: "every day" },
                { w: "想", p: "xiǎng", e: "to want" },
                { w: "帮助", p: "bāngzhù", e: "to help" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "Every day, we work together in the garden. We are not tired, because we work together.",
              words: [
                { w: "天天", p: "tiāntiān", e: "every day" },
                { w: "，", p: "", e: "" },
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "一起", p: "yìqǐ", e: "together" },
                { w: "在", p: "zài", e: "at, in" },
                { w: "花园", p: "huāyuán", e: "garden" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" },
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "不", p: "bù", e: "not" },
                { w: "累", p: "lèi", e: "tired" },
                { w: "，", p: "", e: "" },
                { w: "因为", p: "yīnwèi", e: "because" },
                { w: "我们", p: "wǒmen", e: "we, us" },
                { w: "一起", p: "yìqǐ", e: "together" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "The garden is very beautiful now. Father is very happy.",
              words: [
                { w: "现在", p: "xiànzài", e: "now" },
                { w: "花园", p: "huāyuán", e: "garden" },
                { w: "很", p: "hěn", e: "very" },
                { w: "漂亮", p: "piàoliang", e: "beautiful" },
                { w: "。", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "很", p: "hěn", e: "very" },
                { w: "高兴", p: "gāoxìng", e: "happy" },
                { w: "。", p: "", e: "" }
              ]
            },
            {
              en: "Father said: \"You two are good sons. You two work very well together. Thank you.\"",
              words: [
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "你们", p: "nǐmen", e: "you (plural)" },
                { w: "两个", p: "liǎng gè", e: "two" },
                { w: "是", p: "shì", e: "to be" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "儿子", p: "érzi", e: "son" },
                { w: "。", p: "", e: "" },
                { w: "你们", p: "nǐmen", e: "you (plural)" },
                { w: "一起", p: "yìqǐ", e: "together" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "well" },
                { w: "。", p: "", e: "" },
                { w: "谢谢", p: "xièxie", e: "thank you" },
                { w: "你们", p: "nǐmen", e: "you (plural)" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "I said: \"Thank you, Father. Thank you, older brother. Working together is very good. Working together, time is very good.\"",
              words: [
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "说", p: "shuō", e: "to say" },
                { w: "：", p: "", e: "" },
                { w: "“", p: "", e: "" },
                { w: "谢谢", p: "xièxie", e: "thank you" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "，", p: "", e: "" },
                { w: "爸爸", p: "bàba", e: "father, dad" },
                { w: "。", p: "", e: "" },
                { w: "谢谢", p: "xièxie", e: "thank you" },
                { w: "你", p: "nǐ", e: "you" },
                { w: "，", p: "", e: "" },
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "。", p: "", e: "" },
                { w: "一起", p: "yìqǐ", e: "together" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "。", p: "", e: "" },
                { w: "一起", p: "yìqǐ", e: "together" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "，", p: "", e: "" },
                { w: "时间", p: "shíjiān", e: "time" },
                { w: "很", p: "hěn", e: "very" },
                { w: "好", p: "hǎo", e: "good" },
                { w: "。", p: "", e: "" },
                { w: "”", p: "", e: "" }
              ]
            },
            {
              en: "Now I like working. I am not tired. I am very happy. Next time, I will work together with older brother again.",
              words: [
                { w: "现在", p: "xiànzài", e: "now" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "喜欢", p: "xǐhuan", e: "to like" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "不", p: "bù", e: "not" },
                { w: "累", p: "lèi", e: "tired" },
                { w: "。", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "很", p: "hěn", e: "very" },
                { w: "高兴", p: "gāoxìng", e: "happy" },
                { w: "。", p: "", e: "" },
                { w: "下次", p: "xià cì", e: "next time" },
                { w: "，", p: "", e: "" },
                { w: "我", p: "wǒ", e: "I, me" },
                { w: "和", p: "hé", e: "with" },
                { w: "哥哥", p: "gēge", e: "older brother" },
                { w: "一起", p: "yìqǐ", e: "together" },
                { w: "工作", p: "gōngzuò", e: "to work" },
                { w: "。", p: "", e: "" }
              ]
            }
          ]
        }
      ]
    }


] ,
  "2": [
    {
      "id": "hsk2_neighbors_light",
      "title": "邻居的爱",
      "description": "一个关于尊重老人、帮助邻居和社区温暖的故事。虽然事情很小，但是爱让大家都快乐。",
      "chapters": [
        {
          "title": "第一章：晚上的灯",
          "sentences": [
            { "en": "Next to my home lives an old grandma.", "words": [ { "w": "我", "p": "wǒ", "e": "I/me" }, { "w": "家", "p": "jiā", "e": "home/family" }, { "w": "旁边", "p": "pángbiān", "e": "next to/beside" }, { "w": "住着", "p": "zhùzhe", "e": "lives" }, { "w": "一位", "p": "yí wèi", "e": "one (polite measure word for people)" }, { "w": "老奶奶", "p": "lǎonǎinai", "e": "old grandma" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "She lives alone, and her health is not very good.", "words": [ { "w": "她", "p": "tā", "e": "she/her" }, { "w": "一个人", "p": "yí gè rén", "e": "alone/one person" }, { "w": "住", "p": "zhù", "e": "to live" }, { "w": "，", "p": "", "e": "" }, { "w": "身体", "p": "shēntǐ", "e": "health/body" }, { "w": "不", "p": "bù", "e": "not" }, { "w": "太", "p": "tài", "e": "too/very" }, { "w": "好", "p": "hǎo", "e": "good/well" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "Every night, the light in her home turns off very late.", "words": [ { "w": "每天", "p": "měitiān", "e": "every day" }, { "w": "晚上", "p": "wǎnshang", "e": "night/evening" }, { "w": "，", "p": "", "e": "" }, { "w": "她", "p": "tā", "e": "she/her" }, { "w": "家", "p": "jiā", "e": "home" }, { "w": "的", "p": "de", "e": "possessive particle" }, { "w": "灯", "p": "dēng", "e": "light/lamp" }, { "w": "很", "p": "hěn", "e": "very" }, { "w": "晚", "p": "wǎn", "e": "late" }, { "w": "才", "p": "cái", "e": "only then" }, { "w": "关", "p": "guān", "e": "to turn off" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "Mom said to me: 'Grandma helped us before, so we should also help her now.'", "words": [ { "w": "妈妈", "p": "māma", "e": "mom" }, { "w": "对", "p": "duì", "e": "to/toward" }, { "w": "我", "p": "wǒ", "e": "me" }, { "w": "说", "p": "shuō", "e": "to say" }, { "w": "：", "p": "", "e": "" }, { "w": "“", "p": "", "e": "" }, { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "以前", "p": "yǐqián", "e": "before" }, { "w": "帮助", "p": "bāngzhù", "e": "to help" }, { "w": "过", "p": "guo", "e": "past experience particle" }, { "w": "我们", "p": "wǒmen", "e": "us/we" }, { "w": "，", "p": "", "e": "" }, { "w": "所以", "p": "suǒyǐ", "e": "so/therefore" }, { "w": "我们", "p": "wǒmen", "e": "we/us" }, { "w": "现在", "p": "xiànzài", "e": "now" }, { "w": "也", "p": "yě", "e": "also" }, { "w": "要", "p": "yào", "e": "should/must" }, { "w": "帮助", "p": "bāngzhù", "e": "to help" }, { "w": "她", "p": "tā", "e": "her" }, { "w": "。", "p": "", "e": "" }, { "w": "”", "p": "", "e": "" } ] },
            { "en": "I understood: helping others is a happy thing.", "words": [ { "w": "我", "p": "wǒ", "e": "I" }, { "w": "懂", "p": "dǒng", "e": "to understand" }, { "w": "了", "p": "le", "e": "particle indicating change" }, { "w": "：", "p": "", "e": "" }, { "w": "帮助", "p": "bāngzhù", "e": "to help" }, { "w": "别人", "p": "biéren", "e": "others" }, { "w": "是", "p": "shì", "e": "is" }, { "w": "一件", "p": "yí jiàn", "e": "a piece/one thing" }, { "w": "快乐", "p": "kuàilè", "e": "happy" }, { "w": "的", "p": "de", "e": "possessive/modifying particle" }, { "w": "事情", "p": "shìqing", "e": "thing/matter" }, { "w": "。", "p": "", "e": "" } ] }
          ]
        },  
                {
          "title": "第二章：一起准备",
          "sentences": [
            { "en": "On Sunday, Mom prepared to cook a lot of food.", "words": [ { "w": "星期天", "p": "xīngqītiān", "e": "Sunday" }, { "w": "，", "p": "", "e": "" }, { "w": "妈妈", "p": "māma", "e": "mom" }, { "w": "准备", "p": "zhǔnbèi", "e": "to prepare" }, { "w": "做", "p": "zuò", "e": "to make/cook" }, { "w": "很多", "p": "hěn duō", "e": "a lot of/many" }, { "w": "饭", "p": "fàn", "e": "food/meal" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "I asked Mom: 'Can we deliver food to Grandma?'", "words": [ { "w": "我", "p": "wǒ", "e": "I" }, { "w": "问", "p": "wèn", "e": "to ask" }, { "w": "妈妈", "p": "māma", "e": "mom" }, { "w": "：", "p": "", "e": "" }, { "w": "“", "p": "", "e": "" }, { "w": "我们", "p": "wǒmen", "e": "we" }, { "w": "可以", "p": "kěyǐ", "e": "can" }, { "w": "给", "p": "gěi", "e": "to/for" }, { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "送", "p": "sòng", "e": "to deliver" }, { "w": "饭", "p": "fàn", "e": "food/meal" }, { "w": "吗", "p": "ma", "e": "question particle" }, { "w": "？", "p": "", "e": "" }, { "w": "”", "p": "", "e": "" } ] },
            { "en": "Mom said: 'Yes. Grandma's health is not good, so we should care about her more.'", "words": [ { "w": "妈妈", "p": "māma", "e": "mom" }, { "w": "说", "p": "shuō", "e": "to say" }, { "w": "：", "p": "", "e": "" }, { "w": "“", "p": "", "e": "" }, { "w": "可以", "p": "kěyǐ", "e": "yes/can" }, { "w": "。", "p": "", "e": "" }, { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "身体", "p": "shēntǐ", "e": "health/body" }, { "w": "不", "p": "bù", "e": "not" }, { "w": "好", "p": "hǎo", "e": "good" }, { "w": "，", "p": "", "e": "" }, { "w": "我们", "p": "wǒmen", "e": "we" }, { "w": "要", "p": "yào", "e": "should/must" }, { "w": "多", "p": "duō", "e": "more" }, { "w": "关心", "p": "guānxīn", "e": "to care about" }, { "w": "她", "p": "tā", "e": "her" }, { "w": "。", "p": "", "e": "" }, { "w": "”", "p": "", "e": "" } ] },
            { "en": "Because Grandma cannot walk very far, we delivered food to her home.", "words": [ { "w": "因为", "p": "yīnwèi", "e": "because" }, { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "不能", "p": "bù néng", "e": "cannot" }, { "w": "走", "p": "zǒu", "e": "to walk" }, { "w": "很", "p": "hěn", "e": "very" }, { "w": "远", "p": "yuǎn", "e": "far" }, { "w": "，", "p": "", "e": "" }, { "w": "所以", "p": "suǒyǐ", "e": "so/therefore" }, { "w": "我们", "p": "wǒmen", "e": "we" }, { "w": "送", "p": "sòng", "e": "to deliver" }, { "w": "饭", "p": "fàn", "e": "food/meal" }, { "w": "去", "p": "qù", "e": "to go" }, { "w": "她", "p": "tā", "e": "her" }, { "w": "家", "p": "jiā", "e": "home" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "Grandma was very happy. She said the food is cheaper than outside and also tastier than outside.", "words": [ { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "很", "p": "hěn", "e": "very" }, { "w": "高兴", "p": "gāoxìng", "e": "happy" }, { "w": "，", "p": "", "e": "" }, { "w": "她", "p": "tā", "e": "she" }, { "w": "说", "p": "shuō", "e": "to say" }, { "w": "饭", "p": "fàn", "e": "food/meal" }, { "w": "比", "p": "bǐ", "e": "compared to/than" }, { "w": "外面", "p": "wàimian", "e": "outside" }, { "w": "的", "p": "de", "e": "modifying particle" }, { "w": "便宜", "p": "piányi", "e": "cheap" }, { "w": "，", "p": "", "e": "" }, { "w": "也", "p": "yě", "e": "also" }, { "w": "比", "p": "bǐ", "e": "compared to/than" }, { "w": "外面", "p": "wàimian", "e": "outside" }, { "w": "的", "p": "de", "e": "modifying particle" }, { "w": "好吃", "p": "hǎochī", "e": "tasty/delicious" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "I helped Grandma wash fruit, and Mom helped Grandma clean the room.", "words": [ { "w": "我", "p": "wǒ", "e": "I" }, { "w": "帮助", "p": "bāngzhù", "e": "to help" }, { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "洗", "p": "xǐ", "e": "to wash" }, { "w": "水果", "p": "shuǐguǒ", "e": "fruit" }, { "w": "，", "p": "", "e": "" }, { "w": "妈妈", "p": "māma", "e": "mom" }, { "w": "帮助", "p": "bāngzhù", "e": "to help" }, { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "打扫", "p": "dǎsǎo", "e": "to clean" }, { "w": "房间", "p": "fángjiān", "e": "room" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "After doing these things, we drank tea together with Grandma.", "words": [ { "w": "做", "p": "zuò", "e": "to do" }, { "w": "完", "p": "wán", "e": "to finish" }, { "w": "这些", "p": "zhèxiē", "e": "these" }, { "w": "事情", "p": "shìqing", "e": "things/matters" }, { "w": "以后", "p": "yǐhòu", "e": "after" }, { "w": "，", "p": "", "e": "" }, { "w": "我们", "p": "wǒmen", "e": "we" }, { "w": "和", "p": "hé", "e": "with" }, { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "一起", "p": "yìqǐ", "e": "together" }, { "w": "喝", "p": "hē", "e": "to drink" }, { "w": "茶", "p": "chá", "e": "tea" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "Grandma said: 'Although my children are not by my side, you make me very happy.'", "words": [ { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "说", "p": "shuō", "e": "to say" }, { "w": "：", "p": "", "e": "" }, { "w": "“", "p": "", "e": "" }, { "w": "虽然", "p": "suīrán", "e": "although" }, { "w": "我的", "p": "wǒ de", "e": "my" }, { "w": "孩子", "p": "háizi", "e": "children/child" }, { "w": "不", "p": "bù", "e": "not" }, { "w": "在", "p": "zài", "e": "at" }, { "w": "身边", "p": "shēnbiān", "e": "by one's side" }, { "w": "，", "p": "", "e": "" }, { "w": "但是", "p": "dànshì", "e": "but" }, { "w": "你们", "p": "nǐmen", "e": "you all" }, { "w": "让", "p": "ràng", "e": "to make/let" }, { "w": "我", "p": "wǒ", "e": "me" }, { "w": "很", "p": "hěn", "e": "very" }, { "w": "快乐", "p": "kuàilè", "e": "happy" }, { "w": "。", "p": "", "e": "" }, { "w": "”", "p": "", "e": "" } ] },
            { "en": "Hearing this, I was also very happy.", "words": [ { "w": "我", "p": "wǒ", "e": "I" }, { "w": "听", "p": "tīng", "e": "to hear/listen" }, { "w": "了", "p": "le", "e": "completion particle" }, { "w": "，", "p": "", "e": "" }, { "w": "也", "p": "yě", "e": "also" }, { "w": "很", "p": "hěn", "e": "very" }, { "w": "快乐", "p": "kuàilè", "e": "happy" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "It turns out that helping others also makes oneself happy.", "words": [ { "w": "原来", "p": "yuánlái", "e": "it turns out" }, { "w": "，", "p": "", "e": "" }, { "w": "帮助", "p": "bāngzhù", "e": "to help" }, { "w": "别人", "p": "biéren", "e": "others" }, { "w": "，", "p": "", "e": "" }, { "w": "自己", "p": "zìjǐ", "e": "oneself" }, { "w": "也", "p": "yě", "e": "also" }, { "w": "会", "p": "huì", "e": "will" }, { "w": "快乐", "p": "kuàilè", "e": "happy" }, { "w": "。", "p": "", "e": "" } ] }
          ]
        },
        {
          "title": "第三章：互相帮助",
          "sentences": [
            { "en": "Later, I told my classmates about Grandma's situation.", "words": [ { "w": "后来", "p": "hòulái", "e": "later" }, { "w": "，", "p": "", "e": "" }, { "w": "我", "p": "wǒ", "e": "I" }, { "w": "告诉", "p": "gàosu", "e": "to tell" }, { "w": "同学们", "p": "tóngxuémen", "e": "classmates" }, { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "的", "p": "de", "e": "possessive particle" }, { "w": "事情", "p": "shìqing", "e": "situation/matter" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "My classmates said: 'We also want to help Grandma.'", "words": [ { "w": "同学们", "p": "tóngxuémen", "e": "classmates" }, { "w": "说", "p": "shuō", "e": "to say" }, { "w": "：", "p": "", "e": "" }, { "w": "“", "p": "", "e": "" }, { "w": "我们", "p": "wǒmen", "e": "we" }, { "w": "也", "p": "yě", "e": "also" }, { "w": "想", "p": "xiǎng", "e": "to want" }, { "w": "帮助", "p": "bāngzhù", "e": "to help" }, { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "。", "p": "", "e": "" }, { "w": "”", "p": "", "e": "" } ] },
            { "en": "We prepared a small plan: some people help Grandma buy groceries, and some people accompany Grandma to talk.", "words": [ { "w": "我们", "p": "wǒmen", "e": "we" }, { "w": "准备", "p": "zhǔnbèi", "e": "to prepare" }, { "w": "了", "p": "le", "e": "completion particle" }, { "w": "一个", "p": "yí gè", "e": "a/one" }, { "w": "小", "p": "xiǎo", "e": "small" }, { "w": "计划", "p": "jìhuà", "e": "plan" }, { "w": "：", "p": "", "e": "" }, { "w": "有的", "p": "yǒude", "e": "some" }, { "w": "人", "p": "rén", "e": "people" }, { "w": "帮助", "p": "bāngzhù", "e": "to help" }, { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "买", "p": "mǎi", "e": "to buy" }, { "w": "菜", "p": "cài", "e": "groceries/vegetables" }, { "w": "，", "p": "", "e": "" }, { "w": "有的", "p": "yǒude", "e": "some" }, { "w": "人", "p": "rén", "e": "people" }, { "w": "陪", "p": "péi", "e": "to accompany" }, { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "说话", "p": "shuōhuà", "e": "to talk" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "Because everyone was very serious, the plan had no mistakes.", "words": [ { "w": "因为", "p": "yīnwèi", "e": "because" }, { "w": "大家", "p": "dàjiā", "e": "everyone" }, { "w": "都", "p": "dōu", "e": "all" }, { "w": "很", "p": "hěn", "e": "very" }, { "w": "认真", "p": "rènzhēn", "e": "serious/careful" }, { "w": "，", "p": "", "e": "" }, { "w": "所以", "p": "suǒyǐ", "e": "so/therefore" }, { "w": "计划", "p": "jìhuà", "e": "plan" }, { "w": "没有", "p": "méiyǒu", "e": "had no" }, { "w": "错", "p": "cuò", "e": "mistake" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "Grandma's health is much better than last year.", "words": [ { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "的", "p": "de", "e": "possessive particle" }, { "w": "身体", "p": "shēntǐ", "e": "health/body" }, { "w": "比", "p": "bǐ", "e": "compared to/than" }, { "w": "去年", "p": "qùnián", "e": "last year" }, { "w": "好", "p": "hǎo", "e": "good" }, { "w": "多", "p": "duō", "e": "much more" }, { "w": "了", "p": "le", "e": "particle indicating change" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "She smiles every day and says to us: 'You are my good neighbors.'", "words": [ { "w": "她", "p": "tā", "e": "she" }, { "w": "天天", "p": "tiāntiān", "e": "every day" }, { "w": "笑", "p": "xiào", "e": "to smile" }, { "w": "着", "p": "zhe", "e": "continuous action particle" }, { "w": "对", "p": "duì", "e": "to/toward" }, { "w": "我们", "p": "wǒmen", "e": "us" }, { "w": "说", "p": "shuō", "e": "to say" }, { "w": "：", "p": "", "e": "" }, { "w": "“", "p": "", "e": "" }, { "w": "你们", "p": "nǐmen", "e": "you all" }, { "w": "是", "p": "shì", "e": "are" }, { "w": "我的", "p": "wǒ de", "e": "my" }, { "w": "好", "p": "hǎo", "e": "good" }, { "w": "邻居", "p": "línjū", "e": "neighbors" }, { "w": "。", "p": "", "e": "" }, { "w": "”", "p": "", "e": "" } ] },
            { "en": "One day, Grandma gave us a pot of flowers.", "words": [ { "w": "有", "p": "yǒu", "e": "there was" }, { "w": "一天", "p": "yì tiān", "e": "one day" }, { "w": "，", "p": "", "e": "" }, { "w": "奶奶", "p": "nǎinai", "e": "grandma" }, { "w": "送", "p": "sòng", "e": "to give" }, { "w": "给", "p": "gěi", "e": "to" }, { "w": "我们", "p": "wǒmen", "e": "us" }, { "w": "一盆", "p": "yì pén", "e": "one pot" }, { "w": "花", "p": "huā", "e": "flowers" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "She said: 'Although this pot of flowers is cheap, it represents my heart.'", "words": [ { "w": "她", "p": "tā", "e": "she" }, { "w": "说", "p": "shuō", "e": "to say" }, { "w": "：", "p": "", "e": "" }, { "w": "“", "p": "", "e": "" }, { "w": "这", "p": "zhè", "e": "this" }, { "w": "盆", "p": "pén", "e": "pot" }, { "w": "花", "p": "huā", "e": "flowers" }, { "w": "虽然", "p": "suīrán", "e": "although" }, { "w": "便宜", "p": "piányi", "e": "cheap" }, { "w": "，", "p": "", "e": "" }, { "w": "但是", "p": "dànshì", "e": "but" }, { "w": "它", "p": "tā", "e": "it" }, { "w": "代表", "p": "dàibiǎo", "e": "to represent" }, { "w": "我的", "p": "wǒ de", "e": "my" }, { "w": "心", "p": "xīn", "e": "heart" }, { "w": "。", "p": "", "e": "" }, { "w": "”", "p": "", "e": "" } ] },
            { "en": "I understood: happiness is not because of more money, but because of more love.", "words": [ { "w": "我", "p": "wǒ", "e": "I" }, { "w": "懂", "p": "dǒng", "e": "to understand" }, { "w": "了", "p": "le", "e": "particle indicating change" }, { "w": "：", "p": "", "e": "" }, { "w": "快乐", "p": "kuàilè", "e": "happiness/happy" }, { "w": "不是", "p": "bú shì", "e": "is not" }, { "w": "因为", "p": "yīnwèi", "e": "because of" }, { "w": "钱", "p": "qián", "e": "money" }, { "w": "多", "p": "duō", "e": "more/many" }, { "w": "，", "p": "", "e": "" }, { "w": "而是", "p": "érshì", "e": "but rather" }, { "w": "因为", "p": "yīnwèi", "e": "because of" }, { "w": "爱", "p": "ài", "e": "love" }, { "w": "多", "p": "duō", "e": "more/many" }, { "w": "。", "p": "", "e": "" } ] },
            { "en": "We all smiled. Because of mutual help, this place became happier.", "words": [ { "w": "我们", "p": "wǒmen", "e": "we" }, { "w": "都", "p": "dōu", "e": "all" }, { "w": "笑", "p": "xiào", "e": "to smile" }, { "w": "了", "p": "le", "e": "particle indicating change" }, { "w": "。", "p": "", "e": "" }, { "w": "这个", "p": "zhège", "e": "this" }, { "w": "这里", "p": "zhèlǐ", "e": "here/this place" }, { "w": "因为", "p": "yīnwèi", "e": "because" }, { "w": "互相", "p": "hùxiāng", "e": "mutually/each other" }, { "w": "帮助", "p": "bāngzhù", "e": "to help" }, { "w": "，", "p": "", "e": "" }, { "w": "所以", "p": "suǒyǐ", "e": "so/therefore" }, { "w": "变", "p": "biàn", "e": "to become" }, { "w": "得", "p": "de", "e": "complement particle" }, { "w": "更", "p": "gèng", "e": "more" }, { "w": "快乐", "p": "kuàilè", "e": "happy" }, { "w": "。", "p": "", "e": "" } ] }
          ]
        }
      ]
    }
  ]

};
