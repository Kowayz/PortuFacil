// PortuFácil — Content Data
const DATA = {

  wordOfDay: [
    { word: "Saudade", translation: "Nostalgie mélancolique, manque profond", example: "Tenho saudade de Portugal.", emoji: "💙" },
    { word: "Maravilhoso", translation: "Merveilleux", example: "Esta cidade é maravilhosa!", emoji: "✨" },
    { word: "Obrigado", translation: "Merci (dit par un homme)", example: "Obrigado pela ajuda!", emoji: "🙏" },
    { word: "Fado", translation: "Destin / genre musical portugais", example: "O fado é a alma de Portugal.", emoji: "🎵" },
    { word: "Paixão", translation: "Passion", example: "Tenho paixão pela música.", emoji: "❤️" },
    { word: "Alegria", translation: "Joie", example: "A alegria é contagiante.", emoji: "😄" },
    { word: "Brinde", translation: "Toast / tchin-tchin", example: "Vamos fazer um brinde!", emoji: "🥂" },
  ],

  quotes: [
    { text: "Não sou nada. Nunca serei nada. Não posso querer ser nada.", author: "Fernando Pessoa", emoji: "📜" },
    { text: "A vida é breve, a arte é longa.", author: "José Saramago", emoji: "📚" },
    { text: "As palavras são o único meio que temos para falar das coisas.", author: "Clarice Lispector", emoji: "✍️" },
    { text: "Há um tempo em que é preciso abandonar as roupas usadas.", author: "Fernando Pessoa", emoji: "🌊" },
  ],

  lessons: [
    {
      id: "a1-1",
      level: "A1",
      title: "Les salutations",
      titlePT: "As saudações",
      icon: "👋",
      description: "Apprenez à dire bonjour, au revoir et les formules de politesse essentielles.",
      xp: 50,
      sections: [
        {
          title: "Bonjour et au revoir",
          content: `En portugais, les salutations varient selon le moment de la journée — comme en français !`,
          vocabulary: [
            { pt: "Olá", fr: "Salut / Bonjour", phonetic: "o-LA", ptBR: "Olá", example: "Olá, tudo bem?" },
            { pt: "Bom dia", fr: "Bonjour (matin)", phonetic: "bom DI-a", ptBR: "Bom dia", example: "Bom dia, senhor Silva!" },
            { pt: "Boa tarde", fr: "Bon après-midi", phonetic: "boa TAR-de", ptBR: "Boa tarde", example: "Boa tarde, como vai?" },
            { pt: "Boa noite", fr: "Bonsoir / Bonne nuit", phonetic: "boa NOI-te", ptBR: "Boa noite", example: "Boa noite, até amanhã!" },
            { pt: "Até logo", fr: "À bientôt", phonetic: "a-TE LO-go", ptBR: "Até logo / Tchau", example: "Até logo, amigo!" },
            { pt: "Adeus", fr: "Au revoir (définitif)", phonetic: "a-DE-ush", ptBR: "Adeus", example: "Adeus, boa viagem!" },
          ]
        },
        {
          title: "La politesse",
          content: `Ces expressions sont indispensables au quotidien. Le portugais est une langue très polie !`,
          vocabulary: [
            { pt: "Obrigado", fr: "Merci (homme)", phonetic: "o-bri-GA-do", ptBR: "Obrigado", example: "Obrigado pela ajuda!" },
            { pt: "Obrigada", fr: "Merci (femme)", phonetic: "o-bri-GA-da", ptBR: "Obrigada", example: "Obrigada, você é muito gentil!" },
            { pt: "Por favor", fr: "S'il vous plaît", phonetic: "por fa-VOR", ptBR: "Por favor", example: "Um café, por favor." },
            { pt: "De nada", fr: "De rien", phonetic: "de NA-da", ptBR: "De nada", example: "— Obrigado! — De nada!" },
            { pt: "Desculpe", fr: "Excusez-moi / Pardon", phonetic: "des-KUL-pe", ptBR: "Desculpa / Com licença", example: "Desculpe, onde fica o museu?" },
            { pt: "Com licença", fr: "Excusez-moi (passage)", phonetic: "com li-SEN-sa", ptBR: "Com licença", example: "Com licença, posso passar?" },
          ]
        },
        {
          title: "Comment ça va ?",
          content: `Apprenez à demander et répondre comment vous allez — la base de toute conversation !`,
          vocabulary: [
            { pt: "Tudo bem?", fr: "Tout va bien ?", phonetic: "TU-do beng", ptBR: "Tudo bem?", example: "Olá! Tudo bem?" },
            { pt: "Tudo bem!", fr: "Tout va bien !", phonetic: "TU-do beng", ptBR: "Tudo bem!", example: "— Tudo bem? — Tudo bem, obrigado!" },
            { pt: "Como está?", fr: "Comment allez-vous ? (formel)", phonetic: "KO-mo es-TA", ptBR: "Como vai?", example: "Como está, senhor Diretor?" },
            { pt: "Como vai?", fr: "Comment vas-tu ? (informel)", phonetic: "KO-mo vai", ptBR: "Como vai?", example: "Oi, como vai?" },
            { pt: "Muito bem", fr: "Très bien", phonetic: "MUI-to beng", ptBR: "Muito bem", example: "Estou muito bem, obrigado!" },
            { pt: "Mais ou menos", fr: "Comme ci comme ça", phonetic: "maish o ME-nosh", ptBR: "Mais ou menos", example: "— Como vai? — Mais ou menos..." },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Comment dit-on 'Bonjour' le matin en portugais ?", options: ["Boa noite", "Bom dia", "Boa tarde", "Olá"], correct: 1, explanation: "'Bom dia' signifie 'Bonjour' le matin (bon + jour)." },
        { type: "mcq", question: "Qu'est-ce que 'Obrigada' signifie ?", options: ["Pardon", "S'il vous plaît", "Merci (dit par une femme)", "De rien"], correct: 2, explanation: "En portugais, 'merci' s'accorde : Obrigado (homme) / Obrigada (femme)." },
        { type: "mcq", question: "Comment répondre à 'Tudo bem?' affirmativement ?", options: ["De nada", "Por favor", "Tudo bem!", "Desculpe"], correct: 2, explanation: "On répond 'Tudo bem!' (Tout va bien !) à la question 'Tudo bem?'." },
        { type: "translate", question: "Traduisez : 'S'il vous plaît'", answer: "por favor" },
        { type: "translate", question: "Traduisez : 'Au revoir'", answer: "adeus" },
      ]
    },
    {
      id: "a1-2",
      level: "A1",
      title: "Se présenter",
      titlePT: "Apresentar-se",
      icon: "🙋",
      description: "Dites qui vous êtes, d'où vous venez, quel âge vous avez.",
      xp: 60,
      sections: [
        {
          title: "Dire son nom",
          content: `Pour vous présenter en portugais, vous avez plusieurs formules possibles.`,
          vocabulary: [
            { pt: "Chamo-me...", fr: "Je m'appelle...", phonetic: "SHA-mo me", ptBR: "Me chamo... / Meu nome é...", example: "Chamo-me Marie." },
            { pt: "O meu nome é...", fr: "Mon nom est...", phonetic: "o meu NO-me e", ptBR: "Meu nome é...", example: "O meu nome é João." },
            { pt: "Prazer!", fr: "Enchanté(e) !", phonetic: "pra-ZER", ptBR: "Prazer!", example: "— Chamo-me Ana. — Prazer!" },
            { pt: "Muito prazer!", fr: "Très enchanté(e) !", phonetic: "MUI-to pra-ZER", ptBR: "Muito prazer!", example: "Muito prazer em conhecê-lo!" },
          ]
        },
        {
          title: "L'âge et l'origine",
          content: `Apprenez à dire votre âge et d'où vous venez.`,
          vocabulary: [
            { pt: "Tenho X anos", fr: "J'ai X ans", phonetic: "TE-nyo a-nosh", ptBR: "Tenho X anos", example: "Tenho vinte e cinco anos." },
            { pt: "Sou de...", fr: "Je suis de...", phonetic: "so de", ptBR: "Sou de...", example: "Sou de Paris." },
            { pt: "Sou francês/francesa", fr: "Je suis français(e)", phonetic: "so fran-SESH / fran-SE-za", ptBR: "Sou francês/francesa", example: "Sou francesa, de Lyon." },
            { pt: "Moro em...", fr: "J'habite à...", phonetic: "MO-ro eng", ptBR: "Moro em...", example: "Moro em Lisboa." },
            { pt: "Falo francês", fr: "Je parle français", phonetic: "FA-lo fran-SESH", ptBR: "Falo francês", example: "Falo francês e um pouco de português." },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Comment dit-on 'Je m'appelle' en portugais brésilien ?", options: ["Chamo-me", "Me chamo", "Sou chamado", "Nome meu é"], correct: 1, explanation: "Au Brésil on dit 'Me chamo...' ou 'Meu nome é...', au Portugal 'Chamo-me...'" },
        { type: "mcq", question: "Comment dit-on 'J'ai 30 ans' ?", options: ["Sou 30 anos", "Tenho 30 anos", "Faço 30 anos", "Estou 30 anos"], correct: 1, explanation: "'Tenho' vient du verbe 'ter' (avoir). On dit 'Tenho X anos'." },
        { type: "translate", question: "Traduisez : 'Je suis enchanté(e)'", answer: "prazer" },
        { type: "mcq", question: "Comment dit-on 'J'habite à Lisbonne' ?", options: ["Sou Lisboa", "Falo Lisboa", "Moro em Lisboa", "Estou Lisboa"], correct: 2, explanation: "'Moro em...' = J'habite à... Le verbe 'morar' signifie 'habiter, résider'." },
        { type: "translate", question: "Traduisez : 'Je parle français'", answer: "falo francês" },
      ]
    },
    {
      id: "a1-3",
      level: "A1",
      title: "Les chiffres",
      titlePT: "Os números",
      icon: "🔢",
      description: "Comptez de 0 à 100 en portugais.",
      xp: 55,
      sections: [
        {
          title: "0 à 20",
          content: `Les chiffres de 0 à 20 sont à apprendre par cœur — ils sont la base de tout !`,
          vocabulary: [
            { pt: "zero", fr: "0", phonetic: "ZE-ro", ptBR: "zero" },
            { pt: "um / uma", fr: "1", phonetic: "ung / U-ma", ptBR: "um / uma" },
            { pt: "dois / duas", fr: "2", phonetic: "doish / DU-ash", ptBR: "dois / duas" },
            { pt: "três", fr: "3", phonetic: "tresh", ptBR: "três" },
            { pt: "quatro", fr: "4", phonetic: "KUA-tro", ptBR: "quatro" },
            { pt: "cinco", fr: "5", phonetic: "SING-ko", ptBR: "cinco" },
            { pt: "seis", fr: "6", phonetic: "seish", ptBR: "seis" },
            { pt: "sete", fr: "7", phonetic: "SE-te", ptBR: "sete" },
            { pt: "oito", fr: "8", phonetic: "OI-to", ptBR: "oito" },
            { pt: "nove", fr: "9", phonetic: "NO-ve", ptBR: "nove" },
            { pt: "dez", fr: "10", phonetic: "desh", ptBR: "dez" },
            { pt: "onze", fr: "11", phonetic: "ON-ze", ptBR: "onze" },
            { pt: "doze", fr: "12", phonetic: "DO-ze", ptBR: "doze" },
            { pt: "treze", fr: "13", phonetic: "TRE-ze", ptBR: "treze" },
            { pt: "catorze", fr: "14", phonetic: "ka-TOR-ze", ptBR: "quatorze" },
            { pt: "quinze", fr: "15", phonetic: "KING-ze", ptBR: "quinze" },
            { pt: "dezasseis", fr: "16", phonetic: "de-za-SEISH", ptBR: "dezesseis" },
            { pt: "dezassete", fr: "17", phonetic: "de-za-SE-te", ptBR: "dezessete" },
            { pt: "dezoito", fr: "18", phonetic: "de-ZOI-to", ptBR: "dezoito" },
            { pt: "dezanove", fr: "19", phonetic: "de-za-NO-ve", ptBR: "dezenove" },
            { pt: "vinte", fr: "20", phonetic: "VING-te", ptBR: "vinte" },
          ]
        },
        {
          title: "Les dizaines",
          content: `À partir de 20, les nombres se forment avec 'e' (et) : vinte e um = 21`,
          vocabulary: [
            { pt: "trinta", fr: "30", phonetic: "TRING-ta", ptBR: "trinta" },
            { pt: "quarenta", fr: "40", phonetic: "kua-RENG-ta", ptBR: "quarenta" },
            { pt: "cinquenta", fr: "50", phonetic: "sing-KUENG-ta", ptBR: "cinquenta" },
            { pt: "sessenta", fr: "60", phonetic: "se-SENG-ta", ptBR: "sessenta" },
            { pt: "setenta", fr: "70", phonetic: "se-TENG-ta", ptBR: "setenta" },
            { pt: "oitenta", fr: "80", phonetic: "oi-TENG-ta", ptBR: "oitenta" },
            { pt: "noventa", fr: "90", phonetic: "no-VENG-ta", ptBR: "noventa" },
            { pt: "cem", fr: "100", phonetic: "seng", ptBR: "cem" },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Comment dit-on 'quinze' en portugais ?", options: ["catorze", "dezasseis", "quinze", "treze"], correct: 2, explanation: "'Quinze' se dit pareil en français et en portugais !" },
        { type: "mcq", question: "Comment dit-on '100' en portugais ?", options: ["cento", "mil", "cem", "noventa"], correct: 2, explanation: "'Cem' = 100. Attention : 'cento' s'utilise avec des compléments : cento e um = 101." },
        { type: "translate", question: "Traduisez : 'sept'", answer: "sete" },
        { type: "mcq", question: "Comment dit-on '1000' en portugais ?", options: ["cento", "cem", "duzentos", "mil"], correct: 3, explanation: "'Mil' = 1000. Ex: dois mil = 2000." },
        { type: "translate", question: "Traduisez : 'trente'", answer: "trinta" },
        { type: "mcq", question: "Que signifie 'vinte e cinco' ?", options: ["25", "52", "15", "20"], correct: 0, explanation: "'Vinte' = 20, 'e' = et, 'cinco' = 5. Donc vinte e cinco = 25." },
      ]
    },
    {
      id: "a1-4",
      level: "A1",
      title: "Jours, mois et saisons",
      titlePT: "Dias, meses e estações",
      icon: "📅",
      description: "Maîtrisez le calendrier en portugais.",
      xp: 60,
      sections: [
        {
          title: "Les jours de la semaine",
          content: `Une particularité fascinante : en portugais, les jours de la semaine sont numérotés ! Lundi = deuxième jour de la semaine liturgique.`,
          vocabulary: [
            { pt: "segunda-feira", fr: "lundi", phonetic: "se-GUNG-da-FEI-ra", ptBR: "segunda-feira", example: "A reunião é na segunda-feira." },
            { pt: "terça-feira", fr: "mardi", phonetic: "TER-sa-FEI-ra", ptBR: "terça-feira", example: "Tenho aula na terça." },
            { pt: "quarta-feira", fr: "mercredi", phonetic: "KUAR-ta-FEI-ra", ptBR: "quarta-feira", example: "Na quarta há mercado." },
            { pt: "quinta-feira", fr: "jeudi", phonetic: "KING-ta-FEI-ra", ptBR: "quinta-feira", example: "Saímos na quinta à noite." },
            { pt: "sexta-feira", fr: "vendredi", phonetic: "SESH-ta-FEI-ra", ptBR: "sexta-feira", example: "Sexta-feira é véspera do fim de semana!" },
            { pt: "sábado", fr: "samedi", phonetic: "SA-ba-do", ptBR: "sábado", example: "Ao sábado vou à praia." },
            { pt: "domingo", fr: "dimanche", phonetic: "do-MING-go", ptBR: "domingo", example: "Domingo é dia de família." },
          ]
        },
        {
          title: "Les mois",
          content: `Les mois ressemblent beaucoup au français — facile à retenir !`,
          vocabulary: [
            { pt: "janeiro", fr: "janvier", phonetic: "ja-NEI-ro", ptBR: "janeiro" },
            { pt: "fevereiro", fr: "février", phonetic: "fe-ve-REI-ro", ptBR: "fevereiro" },
            { pt: "março", fr: "mars", phonetic: "MAR-so", ptBR: "março" },
            { pt: "abril", fr: "avril", phonetic: "a-BRIL", ptBR: "abril" },
            { pt: "maio", fr: "mai", phonetic: "MAI-o", ptBR: "maio" },
            { pt: "junho", fr: "juin", phonetic: "JU-nyo", ptBR: "junho" },
            { pt: "julho", fr: "juillet", phonetic: "JU-lyo", ptBR: "julho" },
            { pt: "agosto", fr: "août", phonetic: "a-GOS-to", ptBR: "agosto" },
            { pt: "setembro", fr: "septembre", phonetic: "se-TENG-bro", ptBR: "setembro" },
            { pt: "outubro", fr: "octobre", phonetic: "ou-TU-bro", ptBR: "outubro" },
            { pt: "novembro", fr: "novembre", phonetic: "no-VENG-bro", ptBR: "novembro" },
            { pt: "dezembro", fr: "décembre", phonetic: "de-ZENG-bro", ptBR: "dezembro" },
          ]
        },
        {
          title: "Les saisons",
          content: `Attention : au Brésil, les saisons sont inversées par rapport à l'Europe !`,
          vocabulary: [
            { pt: "a primavera", fr: "le printemps", phonetic: "a pri-ma-VE-ra", ptBR: "a primavera", example: "A primavera começa em março." },
            { pt: "o verão", fr: "l'été", phonetic: "o ve-RAONG", ptBR: "o verão", example: "No verão vamos à praia." },
            { pt: "o outono", fr: "l'automne", phonetic: "o o-TO-no", ptBR: "o outono", example: "As folhas caem no outono." },
            { pt: "o inverno", fr: "l'hiver", phonetic: "o ing-VER-no", ptBR: "o inverno", example: "O inverno em Lisboa é suave." },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Comment dit-on 'vendredi' en portugais ?", options: ["quinta-feira", "sábado", "sexta-feira", "segunda-feira"], correct: 2, explanation: "'Sexta-feira' = vendredi (6ème jour de la semaine liturgique)." },
        { type: "mcq", question: "Quel mois correspond à 'setembro' ?", options: ["juillet", "août", "septembre", "octobre"], correct: 2, explanation: "'Setembro' ressemble à 'septembre' — facile à mémoriser !" },
        { type: "translate", question: "Traduisez : 'l'été'", answer: "o verão" },
        { type: "mcq", question: "Comment dit-on 'dimanche' en portugais ?", options: ["sábado", "segunda-feira", "domingo", "sexta-feira"], correct: 2, explanation: "'Domingo' = dimanche. C'est le seul jour qui ne porte pas de numéro en portugais !" },
        { type: "translate", question: "Traduisez : 'janvier'", answer: "janeiro" },
      ]
    },
    {
      id: "a1-5",
      level: "A1",
      title: "Les couleurs",
      titlePT: "As cores",
      icon: "🎨",
      description: "Apprenez les couleurs et leurs accords en genre.",
      xp: 45,
      sections: [
        {
          title: "Les couleurs principales",
          content: `En portugais, les couleurs s'accordent en genre (masculin/féminin) et en nombre, comme les adjectifs.`,
          vocabulary: [
            { pt: "vermelho / vermelha", fr: "rouge", phonetic: "ver-ME-lyo / ver-ME-lya", ptBR: "vermelho / vermelha", example: "Uma rosa vermelha." },
            { pt: "azul", fr: "bleu(e)", phonetic: "a-ZUL", ptBR: "azul", example: "O céu é azul." },
            { pt: "verde", fr: "vert(e)", phonetic: "VER-de", ptBR: "verde", example: "Uma maçã verde." },
            { pt: "amarelo / amarela", fr: "jaune", phonetic: "a-ma-RE-lo / a-ma-RE-la", ptBR: "amarelo / amarela", example: "O sol é amarelo." },
            { pt: "branco / branca", fr: "blanc(he)", phonetic: "BRANG-ko / BRANG-ka", ptBR: "branco / branca", example: "Uma parede branca." },
            { pt: "preto / preta", fr: "noir(e)", phonetic: "PRE-to / PRE-ta", ptBR: "preto / preta", example: "Um gato preto." },
            { pt: "cor-de-rosa", fr: "rose", phonetic: "kor de RO-za", ptBR: "rosa", example: "Uma flor cor-de-rosa." },
            { pt: "laranja", fr: "orange", phonetic: "la-RANG-ja", ptBR: "laranja", example: "O pôr-do-sol laranja." },
            { pt: "castanho / castanha", fr: "marron", phonetic: "kas-TA-nyo / kas-TA-nya", ptBR: "marrom", example: "Olhos castanhos." },
            { pt: "cinzento / cinzenta", fr: "gris(e)", phonetic: "sing-ZENG-to / sing-ZENG-ta", ptBR: "cinza", example: "Um dia cinzento." },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Comment dit-on 'bleu' en portugais ?", options: ["verde", "azul", "vermelho", "amarelo"], correct: 1, explanation: "'Azul' = bleu. C'est aussi le nom des fameux carreaux portugais : les azulejos !" },
        { type: "mcq", question: "Comment dit-on 'blanc' (masculin) ?", options: ["branca", "branco", "branca", "brancos"], correct: 1, explanation: "'Branco' (masculin), 'branca' (féminin). Les couleurs s'accordent en portugais." },
        { type: "translate", question: "Traduisez : 'rouge'", answer: "vermelho" },
        { type: "mcq", question: "Comment dit-on 'marron' au Portugal ?", options: ["laranja", "cinzento", "castanho", "amarelo"], correct: 2, explanation: "'Castanho' = marron (couleur du marron, la châtaigne). Au Brésil, on dit 'marrom'." },
        { type: "translate", question: "Traduisez : 'vert'", answer: "verde" },
      ]
    },
    {
      id: "a1-6",
      level: "A1",
      title: "La famille",
      titlePT: "A família",
      icon: "👨‍👩‍👧‍👦",
      description: "Le vocabulaire de la famille en portugais.",
      xp: 55,
      sections: [
        {
          title: "La famille proche",
          content: `Les mots de famille sont très proches du français — vous les reconnaîtrez facilement !`,
          vocabulary: [
            { pt: "o pai", fr: "le père", phonetic: "o pai", ptBR: "o pai", example: "O meu pai é médico." },
            { pt: "a mãe", fr: "la mère", phonetic: "a maing", ptBR: "a mãe", example: "A minha mãe cozinha bem." },
            { pt: "o irmão", fr: "le frère", phonetic: "o ir-MAONG", ptBR: "o irmão", example: "Tenho um irmão mais velho." },
            { pt: "a irmã", fr: "la sœur", phonetic: "a ir-MAONG", ptBR: "a irmã", example: "A minha irmã mora em Londres." },
            { pt: "o avô", fr: "le grand-père", phonetic: "o a-VO", ptBR: "o avô", example: "O meu avô tem 80 anos." },
            { pt: "a avó", fr: "la grand-mère", phonetic: "a a-VO", ptBR: "a avó", example: "A avó faz bolos deliciosos." },
            { pt: "o filho", fr: "le fils", phonetic: "o FI-lyo", ptBR: "o filho", example: "O meu filho tem três anos." },
            { pt: "a filha", fr: "la fille", phonetic: "a FI-lya", ptBR: "a filha", example: "A filha mais velha estuda medicina." },
            { pt: "o tio", fr: "l'oncle", phonetic: "o TI-o", ptBR: "o tio", example: "O meu tio vive no Brasil." },
            { pt: "a tia", fr: "la tante", phonetic: "a TI-a", ptBR: "a tia", example: "A tia Ana é muito divertida." },
            { pt: "o primo / a prima", fr: "le cousin / la cousine", phonetic: "o PRI-mo / a PRI-ma", ptBR: "o primo / a prima", example: "Tenho muitos primos." },
            { pt: "o marido", fr: "le mari", phonetic: "o ma-RI-do", ptBR: "o marido", example: "O meu marido é professor." },
            { pt: "a mulher", fr: "la femme (épouse)", phonetic: "a mu-LYER", ptBR: "a esposa / a mulher", example: "A minha mulher é dentista." },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Comment dit-on 'la mère' en portugais ?", options: ["a pai", "a irmã", "a mãe", "a filha"], correct: 2, explanation: "'A mãe' = la mère. Le son 'ã' est un son nasal typique du portugais." },
        { type: "mcq", question: "Comment dit-on 'le frère' ?", options: ["o pai", "o irmão", "o filho", "o primo"], correct: 1, explanation: "'O irmão' = le frère. 'Irmã' = la sœur." },
        { type: "translate", question: "Traduisez : 'le grand-père'", answer: "o avô" },
        { type: "mcq", question: "Comment dit-on 'la femme (épouse)' ?", options: ["a filha", "a mãe", "a mulher", "a prima"], correct: 2, explanation: "'A mulher' = la femme/épouse. Au Brésil, on préfère 'a esposa' pour épouse." },
        { type: "translate", question: "Traduisez : 'la tante'", answer: "a tia" },
      ]
    },
    {
      id: "a1-7",
      level: "A1",
      title: "SER et ESTAR",
      titlePT: "SER e ESTAR",
      icon: "⚖️",
      description: "Maîtrisez les deux verbes 'être' du portugais — la clé de la langue.",
      xp: 80,
      sections: [
        {
          title: "SER — l'être permanent",
          content: `SER s'utilise pour les caractéristiques permanentes ou fondamentales : identité, origine, profession, nature des choses.`,
          vocabulary: [
            { pt: "eu sou", fr: "je suis", phonetic: "e-u so", ptBR: "eu sou", example: "Eu sou francês." },
            { pt: "tu és", fr: "tu es", phonetic: "tu esh", ptBR: "você é", example: "Tu és simpático." },
            { pt: "ele/ela é", fr: "il/elle est", phonetic: "e-le / e-la e", ptBR: "ele/ela é", example: "Ela é médica." },
            { pt: "nós somos", fr: "nous sommes", phonetic: "nosh SO-mosh", ptBR: "nós somos", example: "Nós somos amigos." },
            { pt: "vós sois", fr: "vous êtes", phonetic: "vosh soish", ptBR: "vocês são", example: "Vós sois portugueses?" },
            { pt: "eles/elas são", fr: "ils/elles sont", phonetic: "E-lesh / E-lash saong", ptBR: "eles/elas são", example: "Eles são brasileiros." },
          ]
        },
        {
          title: "ESTAR — l'état temporaire",
          content: `ESTAR s'utilise pour les états temporaires, les émotions, les positions, la santé, les situations changeantes.`,
          vocabulary: [
            { pt: "eu estou", fr: "je suis (en ce moment)", phonetic: "e-u esh-TO", ptBR: "eu estou", example: "Eu estou cansado." },
            { pt: "tu estás", fr: "tu es (en ce moment)", phonetic: "tu esh-TASH", ptBR: "você está", example: "Tu estás feliz hoje?" },
            { pt: "ele/ela está", fr: "il/elle est (en ce moment)", phonetic: "e-le esh-TA", ptBR: "ele/ela está", example: "Ela está em Lisboa." },
            { pt: "nós estamos", fr: "nous sommes (en ce moment)", phonetic: "nosh esh-TA-mosh", ptBR: "nós estamos", example: "Nós estamos em casa." },
            { pt: "vós estais", fr: "vous êtes (en ce moment)", phonetic: "vosh esh-TAISH", ptBR: "vocês estão", example: "Vós estais prontos?" },
            { pt: "eles/elas estão", fr: "ils/elles sont (en ce moment)", phonetic: "E-lesh esh-TAONG", ptBR: "eles/elas estão", example: "Eles estão ocupados." },
          ]
        },
        {
          title: "SER vs ESTAR — les règles d'or",
          content: `Voici le guide complet pour ne plus confondre SER et ESTAR !`,
          vocabulary: [
            { pt: "SER: identité", fr: "Sou João (Je suis João)", phonetic: "", ptBR: "SER: identité", example: "Sou João, tenho 25 anos." },
            { pt: "SER: nationalité", fr: "Sou português (Je suis portugais)", phonetic: "", ptBR: "SER: nationalité", example: "Ela é brasileira." },
            { pt: "SER: profession", fr: "Sou professor (Je suis professeur)", phonetic: "", ptBR: "SER: profession", example: "O pai é engenheiro." },
            { pt: "SER: heure/date", fr: "São duas horas (Il est deux heures)", phonetic: "", ptBR: "SER: heure/date", example: "Hoje é segunda-feira." },
            { pt: "ESTAR: émotions", fr: "Estou feliz (Je suis heureux maintenant)", phonetic: "", ptBR: "ESTAR: émotions", example: "Ela está triste hoje." },
            { pt: "ESTAR: localisation", fr: "Estou em Paris (Je suis à Paris)", phonetic: "", ptBR: "ESTAR: localisation", example: "O livro está na mesa." },
            { pt: "ESTAR: santé", fr: "Estou doente (Je suis malade)", phonetic: "", ptBR: "ESTAR: santé", example: "Estou muito bem, obrigado!" },
            { pt: "ESTAR: état temporaire", fr: "A janela está aberta (La fenêtre est ouverte)", phonetic: "", ptBR: "ESTAR: état temporaire", example: "O café está quente." },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Lequel utilise-t-on pour dire sa nationalité ?", options: ["ESTAR", "SER", "Les deux", "Aucun"], correct: 1, explanation: "La nationalité est une caractéristique permanente → on utilise SER : 'Sou francês.'" },
        { type: "mcq", question: "'Ela ___ cansada' (Elle est fatiguée). Quel verbe ?", options: ["é", "está", "ser", "ser"], correct: 1, explanation: "La fatigue est un état temporaire → ESTAR : 'Ela está cansada.'" },
        { type: "mcq", question: "'O café ___ quente' (Le café est chaud). Quel verbe ?", options: ["é", "está", "são", "estão"], correct: 1, explanation: "La chaleur du café est temporaire → ESTAR : 'O café está quente.'" },
        { type: "mcq", question: "Comment dit-on 'nous sommes' avec ESTAR ?", options: ["nós somos", "nós estamos", "nós são", "nós estão"], correct: 1, explanation: "'Nós estamos' = nous sommes (état). 'Nós somos' = nous sommes (identité)." },
      ]
    },
    {
      id: "a1-8",
      level: "A1",
      title: "Articles et genre",
      titlePT: "Artigos e género",
      icon: "📝",
      description: "Les articles définis et indéfinis, le genre des noms.",
      xp: 65,
      sections: [
        {
          title: "Articles définis",
          content: `En portugais, il y a 4 articles définis selon le genre et le nombre.`,
          vocabulary: [
            { pt: "o", fr: "le (masculin singulier)", phonetic: "o", ptBR: "o", example: "o livro (le livre)" },
            { pt: "a", fr: "la (féminin singulier)", phonetic: "a", ptBR: "a", example: "a casa (la maison)" },
            { pt: "os", fr: "les (masculin pluriel)", phonetic: "osh", ptBR: "os", example: "os livros (les livres)" },
            { pt: "as", fr: "les (féminin pluriel)", phonetic: "ash", ptBR: "as", example: "as casas (les maisons)" },
          ]
        },
        {
          title: "Articles indéfinis",
          content: `Les articles indéfinis s'accordent aussi en genre et en nombre.`,
          vocabulary: [
            { pt: "um", fr: "un (masculin)", phonetic: "ung", ptBR: "um", example: "um café (un café)" },
            { pt: "uma", fr: "une (féminin)", phonetic: "U-ma", ptBR: "uma", example: "uma mesa (une table)" },
            { pt: "uns", fr: "des (masculin)", phonetic: "ungsh", ptBR: "uns", example: "uns amigos (des amis)" },
            { pt: "umas", fr: "des (féminin)", phonetic: "U-mash", ptBR: "umas", example: "umas flores (des fleurs)" },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Quel est l'article défini pour 'livro' (livre, masculin) ?", options: ["a", "o", "as", "os"], correct: 1, explanation: "'O livro' — le masculin singulier prend 'o'." },
        { type: "mcq", question: "Comment dit-on 'une fleur' ? (fleur = flor, féminin)", options: ["um flor", "una flor", "uma flor", "o flor"], correct: 2, explanation: "'Uma flor' — le féminin indéfini singulier prend 'uma'." },
        { type: "translate", question: "Traduisez : 'les livres' (article défini)", answer: "os livros" },
        { type: "mcq", question: "Quel article pour 'casas' (maisons) ?", options: ["o", "a", "os", "as"], correct: 3, explanation: "'As casas' = les maisons. Féminin pluriel → 'as'." },
        { type: "translate", question: "Traduisez : 'un ami' (masculin)", answer: "um amigo" },
      ]
    },
    {
      id: "a2-1",
      level: "A2",
      title: "La nourriture",
      titlePT: "A comida",
      icon: "🍽️",
      description: "Vocabulaire de la gastronomie portugaise et brésilienne.",
      xp: 70,
      sections: [
        {
          title: "Les aliments de base",
          content: `La gastronomie portugaise est mondialement reconnue — apprenons à en parler !`,
          vocabulary: [
            { pt: "o pão", fr: "le pain", phonetic: "o paong", ptBR: "o pão", example: "Um pão com manteiga, por favor." },
            { pt: "o peixe", fr: "le poisson", phonetic: "o PEI-she", ptBR: "o peixe", example: "O bacalhau é o peixe nacional português." },
            { pt: "a carne", fr: "la viande", phonetic: "a KAR-ne", ptBR: "a carne", example: "Prefiro carne de frango." },
            { pt: "o arroz", fr: "le riz", phonetic: "o a-ROSH", ptBR: "o arroz", example: "No Brasil, arroz e feijão são essenciais." },
            { pt: "o queijo", fr: "le fromage", phonetic: "o KEI-jo", ptBR: "o queijo", example: "Portugal tem queijos excelentes." },
            { pt: "a fruta", fr: "le fruit", phonetic: "a FRU-ta", ptBR: "a fruta", example: "Como fruta todos os dias." },
            { pt: "o legume", fr: "le légume", phonetic: "o le-GU-me", ptBR: "o legume / a verdura", example: "Os legumes fazem bem à saúde." },
            { pt: "o café", fr: "le café", phonetic: "o ka-FE", ptBR: "o café", example: "Um café por favor — un bica!" },
            { pt: "o vinho", fr: "le vin", phonetic: "o VI-nyo", ptBR: "o vinho", example: "O vinho português é famoso no mundo." },
            { pt: "a água", fr: "l'eau", phonetic: "a A-gua", ptBR: "a água", example: "Pode trazer água, por favor?" },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Comment dit-on 'le pain' en portugais ?", options: ["o peixe", "o pão", "o queijo", "o arroz"], correct: 1, explanation: "'O pão' = le pain. Note le son nasal 'ão' !" },
        { type: "translate", question: "Traduisez : 'le vin'", answer: "o vinho" },
        { type: "mcq", question: "Comment dit-on 'l'eau' en portugais ?", options: ["o vinho", "o café", "a água", "o suco"], correct: 2, explanation: "'A água' = l'eau. Attention : bien que 'água' commence par 'a', l'article 'a' se maintient." },
        { type: "mcq", question: "Comment dit-on 'le fromage' ?", options: ["a fruta", "o peixe", "o arroz", "o queijo"], correct: 3, explanation: "'O queijo' = le fromage. Le Portugal est réputé pour ses excellents fromages !" },
      ]
    },
    {
      id: "b1-1",
      level: "B1",
      title: "Exprimer ses opinions",
      titlePT: "Expressar opiniões",
      icon: "💬",
      description: "Donnez votre avis et engagez des conversations en portugais.",
      xp: 90,
      sections: [
        {
          title: "Formules d'opinion",
          content: `Pour enrichir vos conversations, maîtrisez ces expressions d'opinion.`,
          vocabulary: [
            { pt: "Na minha opinião...", fr: "À mon avis...", phonetic: "na MI-nya o-pi-NIAONG", ptBR: "Na minha opinião... / Na minha visão...", example: "Na minha opinião, o fado é fantástico." },
            { pt: "Acho que...", fr: "Je pense que...", phonetic: "A-sho ke", ptBR: "Acho que...", example: "Acho que o português é uma língua bonita." },
            { pt: "Penso que...", fr: "Je crois que...", phonetic: "PENG-so ke", ptBR: "Penso que... / Acho que...", example: "Penso que tens razão." },
            { pt: "Concordo!", fr: "Je suis d'accord !", phonetic: "kong-KOR-do", ptBR: "Concordo!", example: "Concordo completamente!" },
            { pt: "Discordo.", fr: "Je ne suis pas d'accord.", phonetic: "dish-KOR-do", ptBR: "Discordo.", example: "Discordo, acho que é diferente." },
            { pt: "Tens razão.", fr: "Tu as raison.", phonetic: "tengsh ra-ZAONG", ptBR: "Você tem razão.", example: "Tens razão, é verdade." },
            { pt: "Não sei.", fr: "Je ne sais pas.", phonetic: "naong sei", ptBR: "Não sei.", example: "Não sei, preciso de pensar." },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Comment dit-on 'Je pense que' en portugais ?", options: ["Concordo", "Acho que", "Discordo", "Tens razão"], correct: 1, explanation: "'Acho que...' = Je pense que... / Je trouve que... Très utilisé !" },
        { type: "translate", question: "Traduisez : 'Tu as raison.'", answer: "tens razão" },
        { type: "mcq", question: "Que signifie 'Discordo' ?", options: ["Je suis d'accord", "Je ne sais pas", "Je ne suis pas d'accord", "Je pense"], correct: 2, explanation: "'Discordo' = Je ne suis pas d'accord. Contraire : 'Concordo' = Je suis d'accord." },
        { type: "translate", question: "Traduisez : 'À mon avis...'", answer: "na minha opinião" },
      ]
    },
    {
      id: "a2-2",
      level: "A2",
      title: "Les transports",
      titlePT: "Os transportes",
      icon: "🚌",
      description: "Prenez le bus, le métro, le train — déplacez-vous en portugais !",
      xp: 75,
      sections: [
        {
          title: "Les moyens de transport",
          content: `Au Portugal et au Brésil, les transports publics sont très utilisés. Apprenons à nous déplacer !`,
          vocabulary: [
            { pt: "o autocarro", fr: "le bus (Portugal)", phonetic: "o OU-to-KA-ro", ptBR: "o ônibus", example: "Apanho o autocarro número 28." },
            { pt: "o metro", fr: "le métro", phonetic: "o ME-tro", ptBR: "o metrô", example: "O metro de Lisboa é muito moderno." },
            { pt: "o comboio", fr: "le train (Portugal)", phonetic: "o kom-BOI-o", ptBR: "o trem", example: "Apanho o comboio para o Porto." },
            { pt: "o avião", fr: "l'avion", phonetic: "o a-VIAONG", ptBR: "o avião", example: "O avião parte às 10h." },
            { pt: "o táxi", fr: "le taxi", phonetic: "o TAK-si", ptBR: "o táxi", example: "Chame um táxi, por favor!" },
            { pt: "o carro", fr: "la voiture", phonetic: "o KA-ro", ptBR: "o carro", example: "Tenho um carro novo." },
            { pt: "a bicicleta", fr: "le vélo", phonetic: "a bi-si-KLE-ta", ptBR: "a bicicleta", example: "Ando de bicicleta todos os dias." },
            { pt: "o barco", fr: "le bateau", phonetic: "o BAR-ko", ptBR: "o barco", example: "Tomamos o barco para a outra margem." },
          ]
        },
        {
          title: "À la gare / Au guichet",
          content: `Expressions indispensables pour acheter un billet et s'orienter dans les transports.`,
          vocabulary: [
            { pt: "a estação", fr: "la gare / la station", phonetic: "a esh-ta-SAONG", ptBR: "a estação", example: "A estação fica perto daqui?" },
            { pt: "o bilhete", fr: "le billet", phonetic: "o bi-LYE-te", ptBR: "o bilhete / a passagem", example: "Quero um bilhete de ida e volta." },
            { pt: "de ida e volta", fr: "aller-retour", phonetic: "de I-da e VOL-ta", ptBR: "de ida e volta", example: "Um bilhete de ida e volta para Sintra." },
            { pt: "a paragem", fr: "l'arrêt (de bus)", phonetic: "a pa-RA-jeng", ptBR: "a parada", example: "A próxima paragem é o Rossio." },
            { pt: "Onde fica...?", fr: "Où se trouve... ?", phonetic: "ON-de FI-ka", ptBR: "Onde fica...?", example: "Onde fica o metro mais próximo?" },
            { pt: "Quero ir para...", fr: "Je veux aller à...", phonetic: "KE-ro ir PA-ra", ptBR: "Quero ir para...", example: "Quero ir para o aeroporto." },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Comment dit-on 'le train' au Portugal ?", options: ["o autocarro", "o metro", "o comboio", "o avião"], correct: 2, explanation: "Au Portugal, le train = 'o comboio'. Au Brésil, on dit 'o trem'." },
        { type: "mcq", question: "Comment dit-on 'l'arrêt de bus' au Portugal ?", options: ["a estação", "a paragem", "o bilhete", "o táxi"], correct: 1, explanation: "'A paragem' = l'arrêt. Au Brésil, c'est 'a parada'." },
        { type: "translate", question: "Traduisez : 'Un billet aller-retour'", answer: "um bilhete de ida e volta" },
        { type: "mcq", question: "Que signifie 'Onde fica...?' ?", options: ["Comment vas-tu ?", "Où se trouve... ?", "Quand part... ?", "Je voudrais..."], correct: 1, explanation: "'Onde fica...?' = Où se trouve...? Très utile pour s'orienter !" },
        { type: "translate", question: "Traduisez : 'Je veux aller à l'aéroport'", answer: "quero ir para o aeroporto" },
      ]
    },
    {
      id: "a2-3",
      level: "A2",
      title: "La météo",
      titlePT: "O tempo e o clima",
      icon: "⛅",
      description: "Parlez de la météo et du présent progressif.",
      xp: 70,
      sections: [
        {
          title: "Les expressions météo",
          content: `Pour parler du temps, on utilise souvent 'estar' + adjectif ou 'fazer' + nom.`,
          vocabulary: [
            { pt: "Está sol.", fr: "Il fait soleil.", phonetic: "esh-TA sol", ptBR: "Está sol. / Faz sol.", example: "Está sol, vamos à praia!" },
            { pt: "Está a chover.", fr: "Il pleut.", phonetic: "esh-TA a sho-VER", ptBR: "Está chovendo.", example: "Está a chover, fica em casa." },
            { pt: "Faz calor.", fr: "Il fait chaud.", phonetic: "fash ka-LOR", ptBR: "Faz calor.", example: "Em agosto faz muito calor em Lisboa." },
            { pt: "Faz frio.", fr: "Il fait froid.", phonetic: "fash FRI-o", ptBR: "Faz frio.", example: "No inverno faz frio no norte de Portugal." },
            { pt: "Está nublado.", fr: "Il est nuageux.", phonetic: "esh-TA nu-BLA-do", ptBR: "Está nublado.", example: "Hoje está nublado, leva um casaco." },
            { pt: "Há vento.", fr: "Il y a du vent.", phonetic: "a VENG-to", ptBR: "Está ventando.", example: "Na costa há muito vento." },
            { pt: "Está a nevar.", fr: "Il neige.", phonetic: "esh-TA a ne-VAR", ptBR: "Está nevando.", example: "Na Serra da Estrela está a nevar!" },
            { pt: "a temperatura", fr: "la température", phonetic: "a teng-pe-ra-TU-ra", ptBR: "a temperatura", example: "A temperatura está a 25 graus." },
          ]
        },
        {
          title: "Le présent progressif",
          content: `Au Portugal, on exprime l'action en cours avec 'estar a + infinitif'. Au Brésil, avec 'estar + gérondif (-ando/-endo)'.`,
          vocabulary: [
            { pt: "estou a trabalhar", fr: "je suis en train de travailler", phonetic: "esh-TO a tra-bya-LYAR", ptBR: "estou trabalhando", example: "Estou a trabalhar agora." },
            { pt: "estamos a comer", fr: "nous sommes en train de manger", phonetic: "esh-TA-mosh a ko-MER", ptBR: "estamos comendo", example: "Não posso falar, estamos a comer." },
            { pt: "está a chover", fr: "il est en train de pleuvoir", phonetic: "esh-TA a sho-VER", ptBR: "está chovendo", example: "Olha, está a chover!" },
            { pt: "estou a estudar", fr: "je suis en train d'étudier", phonetic: "esh-TO a esh-tu-DAR", ptBR: "estou estudando", example: "Estou a estudar português." },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Comment dit-on 'Il fait chaud' en portugais ?", options: ["Está a nevar.", "Faz calor.", "Está nublado.", "Há vento."], correct: 1, explanation: "'Faz calor.' = Il fait chaud. On utilise le verbe 'fazer' pour la température." },
        { type: "mcq", question: "Comment dit-on 'Il pleut' en Portugal ?", options: ["Está chovendo.", "Está a chover.", "Faz chuva.", "Há chuva."], correct: 1, explanation: "En Portugal : 'Está a chover.' Au Brésil : 'Está chovendo'." },
        { type: "translate", question: "Traduisez : 'Je suis en train d'étudier' (Portugal)", answer: "estou a estudar" },
        { type: "mcq", question: "Comment dire 'Il neige' au Portugal ?", options: ["Está a chover", "Faz neve", "Está a nevar", "Há neve"], correct: 2, explanation: "'Está a nevar.' = Il neige. 'Nevar' est le verbe 'neiger'." },
        { type: "translate", question: "Traduisez : 'Il fait froid'", answer: "faz frio" },
      ]
    },
    {
      id: "a2-4",
      level: "A2",
      title: "Le corps et la santé",
      titlePT: "O corpo e a saúde",
      icon: "🏥",
      description: "Chez le médecin — décrivez vos douleurs et comprenez les soins.",
      xp: 80,
      sections: [
        {
          title: "Expressions de douleur",
          content: `Pour décrire où vous avez mal, utilisez 'doer' (faire mal) ou 'tenho dores de' (j'ai des douleurs de).`,
          vocabulary: [
            { pt: "Dói-me a cabeça.", fr: "J'ai mal à la tête.", phonetic: "DOI-me a ka-BE-sa", ptBR: "Estou com dor de cabeça.", example: "Dói-me a cabeça, preciso de aspirina." },
            { pt: "Dói-me o estômago.", fr: "J'ai mal à l'estomac.", phonetic: "DOI-me o esh-TO-ma-go", ptBR: "Estou com dor de estômago.", example: "Dói-me o estômago desde ontem." },
            { pt: "Tenho febre.", fr: "J'ai de la fièvre.", phonetic: "TE-nyo FE-bre", ptBR: "Estou com febre.", example: "Tenho febre — 38 graus." },
            { pt: "Estou constipado(a).", fr: "J'ai un rhume.", phonetic: "esh-TO kong-shti-PA-do", ptBR: "Estou resfriado(a).", example: "Estou constipado desde segunda." },
            { pt: "Estou cansado(a).", fr: "Je suis fatigué(e).", phonetic: "esh-TO kang-SA-do", ptBR: "Estou cansado(a).", example: "Estou muito cansado, não dormi bem." },
            { pt: "Preciso de um médico.", fr: "J'ai besoin d'un médecin.", phonetic: "pre-SI-zo de ung ME-di-ko", ptBR: "Preciso de um médico.", example: "Preciso de um médico urgentemente." },
          ]
        },
        {
          title: "À la pharmacie",
          content: `Expressions utiles pour la pharmacie ou une consultation médicale.`,
          vocabulary: [
            { pt: "a farmácia", fr: "la pharmacie", phonetic: "a far-MA-sia", ptBR: "a farmácia", example: "Há uma farmácia perto daqui?" },
            { pt: "o medicamento", fr: "le médicament", phonetic: "o me-di-ka-MENG-to", ptBR: "o remédio", example: "O médico receitou este medicamento." },
            { pt: "a receita", fr: "l'ordonnance", phonetic: "a re-SEI-ta", ptBR: "a receita / a prescrição", example: "Preciso de receita para este medicamento." },
            { pt: "o comprimido", fr: "le comprimé", phonetic: "o kong-pri-MI-do", ptBR: "o comprimido", example: "Tome dois comprimidos por dia." },
            { pt: "a consulta", fr: "la consultation", phonetic: "a kong-SUL-ta", ptBR: "a consulta", example: "Tenho consulta às 15h." },
            { pt: "a urgência", fr: "les urgences", phonetic: "a ur-JENG-sia", ptBR: "a emergência / o pronto-socorro", example: "Vá à urgência imediatamente!" },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Comment dit-on 'J'ai mal à la tête' au Portugal ?", options: ["Tenho febre.", "Estou constipado.", "Dói-me a cabeça.", "Estou cansado."], correct: 2, explanation: "'Dói-me a cabeça.' = J'ai mal à la tête. 'Doer' = faire mal." },
        { type: "mcq", question: "Que signifie 'Estou constipado' en portugais européen ?", options: ["Je suis constipé", "J'ai un rhume", "J'ai de la fièvre", "Je suis fatigué"], correct: 1, explanation: "Attention ! 'Constipado' en PT-PT = rhume. En PT-BR = constipé. Faux ami !" },
        { type: "translate", question: "Traduisez : 'J'ai de la fièvre'", answer: "tenho febre" },
        { type: "mcq", question: "Comment dit-on 'le médicament' ?", options: ["a consulta", "a receita", "o medicamento", "o comprimido"], correct: 2, explanation: "'O medicamento' = le médicament. Au Brésil, on dit aussi 'o remédio'." },
        { type: "translate", question: "Traduisez : 'J'ai besoin d'un médecin'", answer: "preciso de um médico" },
      ]
    },
    {
      id: "a2-5",
      level: "A2",
      title: "À la maison",
      titlePT: "Em casa",
      icon: "🏡",
      description: "Décrivez votre logement et parlez des actions quotidiennes.",
      xp: 75,
      sections: [
        {
          title: "Décrire son logement",
          content: `Apprenez à décrire votre appartement ou maison en portugais.`,
          vocabulary: [
            { pt: "o apartamento", fr: "l'appartement", phonetic: "o a-par-ta-MENG-to", ptBR: "o apartamento", example: "Moro num apartamento no terceiro andar." },
            { pt: "a moradia", fr: "la maison individuelle", phonetic: "a mo-ra-DI-a", ptBR: "a casa", example: "Tenho uma moradia com jardim." },
            { pt: "o andar", fr: "l'étage", phonetic: "o ang-DAR", ptBR: "o andar", example: "Moro no quinto andar." },
            { pt: "o rés-do-chão", fr: "le rez-de-chaussée", phonetic: "o resh-do-SHAONG", ptBR: "o térreo", example: "A loja fica no rés-do-chão." },
            { pt: "a garagem", fr: "le garage", phonetic: "a ga-RA-jeng", ptBR: "a garagem", example: "Tenho garagem para dois carros." },
            { pt: "o terraço", fr: "la terrasse", phonetic: "o te-RA-so", ptBR: "o terraço", example: "O terraço tem vista para o mar." },
            { pt: "o elevador", fr: "l'ascenseur", phonetic: "o e-le-va-DOR", ptBR: "o elevador", example: "O elevador está avariado." },
          ]
        },
        {
          title: "Les actions à la maison",
          content: `Verbes du quotidien pour parler de ce qu'on fait chez soi.`,
          vocabulary: [
            { pt: "limpar a casa", fr: "faire le ménage", phonetic: "limg-PAR a KA-za", ptBR: "limpar a casa", example: "Ao sábado limpo a casa." },
            { pt: "cozinhar", fr: "cuisiner", phonetic: "ko-zi-NYAR", ptBR: "cozinhar", example: "Gosto de cozinhar pratos portugueses." },
            { pt: "lavar a roupa", fr: "faire la lessive", phonetic: "la-VAR a RO-pa", ptBR: "lavar a roupa", example: "Lavo a roupa na quinta-feira." },
            { pt: "arrumar o quarto", fr: "ranger la chambre", phonetic: "a-ru-MAR o KUA-rto", ptBR: "arrumar o quarto", example: "Arruma o quarto antes de sair!" },
            { pt: "tomar banho", fr: "prendre une douche", phonetic: "to-MAR BA-nyo", ptBR: "tomar banho", example: "Tomo banho todas as manhãs." },
            { pt: "dormir", fr: "dormir", phonetic: "dor-MIR", ptBR: "dormir", example: "Durmo oito horas por noite." },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Comment dit-on 'l'appartement' ?", options: ["a moradia", "o apartamento", "o andar", "a garagem"], correct: 1, explanation: "'O apartamento' = l'appartement. 'A moradia' = la maison individuelle." },
        { type: "mcq", question: "Comment dit-on 'le rez-de-chaussée' au Portugal ?", options: ["o primeiro andar", "o andar térreo", "o rés-do-chão", "o elevador"], correct: 2, explanation: "'O rés-do-chão' = le rez-de-chaussée au Portugal. Au Brésil, 'o térreo'." },
        { type: "translate", question: "Traduisez : 'cuisiner'", answer: "cozinhar" },
        { type: "mcq", question: "Comment dit-on 'faire le ménage' ?", options: ["cozinhar", "limpar a casa", "tomar banho", "dormir"], correct: 1, explanation: "'Limpar a casa' = faire le ménage / nettoyer la maison." },
        { type: "translate", question: "Traduisez : 'Je prends une douche tous les matins'", answer: "tomo banho todas as manhãs" },
      ]
    },
    {
      id: "a2-6",
      level: "A2",
      title: "Au restaurant",
      titlePT: "No restaurante",
      icon: "🍽️",
      description: "Commandez, demandez l'addition, appréciez la gastronomie lusophone.",
      xp: 75,
      sections: [
        {
          title: "Au restaurant",
          content: `Apprenez à vous débrouiller dans un restaurant portugais ou brésilien.`,
          vocabulary: [
            { pt: "Uma mesa para dois, por favor.", fr: "Une table pour deux, s'il vous plaît.", phonetic: "U-ma ME-za PA-ra doish", ptBR: "Uma mesa para dois, por favor.", example: "Boa noite, uma mesa para dois, por favor." },
            { pt: "A ementa / o cardápio", fr: "Le menu / la carte", phonetic: "a e-MENG-ta", ptBR: "o cardápio", example: "Pode trazer a ementa, por favor?" },
            { pt: "Quero pedir...", fr: "Je voudrais commander...", phonetic: "KE-ro pe-DIR", ptBR: "Quero pedir...", example: "Quero pedir o bacalhau à brás." },
            { pt: "A conta, por favor.", fr: "L'addition, s'il vous plaît.", phonetic: "a KONG-ta por fa-VOR", ptBR: "A conta, por favor.", example: "Pode trazer a conta, por favor?" },
            { pt: "Está delicioso!", fr: "C'est délicieux !", phonetic: "esh-TA de-li-SI-o-zo", ptBR: "Está delicioso!", example: "Este peixe está delicioso!" },
            { pt: "Sou alérgico(a) a...", fr: "Je suis allergique à...", phonetic: "so a-LER-ji-ko a", ptBR: "Sou alérgico(a) a...", example: "Sou alérgico a frutos do mar." },
          ]
        },
        {
          title: "Faire les courses",
          content: `Vocabulaire pour aller au marché ou au supermarché.`,
          vocabulary: [
            { pt: "o supermercado", fr: "le supermarché", phonetic: "o su-per-mer-KA-do", ptBR: "o supermercado", example: "Vou ao supermercado comprar frutas." },
            { pt: "o mercado", fr: "le marché", phonetic: "o mer-KA-do", ptBR: "o mercado", example: "Ao sábado vou ao mercado." },
            { pt: "Quanto custa?", fr: "Combien ça coûte ?", phonetic: "KUANG-to KUSH-ta", ptBR: "Quanto custa?", example: "Quanto custa este queijo?" },
            { pt: "Está caro.", fr: "C'est cher.", phonetic: "esh-TA KA-ro", ptBR: "Está caro.", example: "O peixe está muito caro hoje." },
            { pt: "Está barato.", fr: "C'est bon marché.", phonetic: "esh-TA ba-RA-to", ptBR: "Está barato.", example: "A fruta está muito barata!" },
            { pt: "meio quilo de...", fr: "un demi-kilo de...", phonetic: "MEI-o KI-lo de", ptBR: "meio quilo de...", example: "Quero meio quilo de tomates." },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Comment demander l'addition au restaurant ?", options: ["A ementa, por favor.", "Quero pedir.", "A conta, por favor.", "Está delicioso!"], correct: 2, explanation: "'A conta, por favor.' = L'addition, s'il vous plaît." },
        { type: "mcq", question: "Comment dit-on 'le menu / la carte' au Portugal ?", options: ["o cardápio", "a ementa", "a conta", "o prato"], correct: 1, explanation: "Au Portugal : 'a ementa'. Au Brésil : 'o cardápio'." },
        { type: "translate", question: "Traduisez : 'Combien ça coûte ?'", answer: "quanto custa" },
        { type: "mcq", question: "Que signifie 'Está barato' ?", options: ["C'est délicieux", "C'est cher", "C'est bon marché", "C'est prêt"], correct: 2, explanation: "'Barato' = bon marché, pas cher. Contraire : 'caro' = cher." },
        { type: "translate", question: "Traduisez : 'C'est délicieux !'", answer: "está delicioso" },
      ]
    },
    {
      id: "a2-7",
      level: "A2",
      title: "Le passé composé",
      titlePT: "O Pretérito Perfeito",
      icon: "⏮️",
      description: "Racontez vos expériences passées avec le pretérito perfeito.",
      xp: 90,
      sections: [
        {
          title: "Formation du pretérito perfeito",
          content: `Le pretérito perfeito exprime des actions passées terminées. Réguliers : -AR → -ei, -aste, -ou, -ámos, -astes, -aram.`,
          vocabulary: [
            { pt: "falei", fr: "j'ai parlé", phonetic: "fa-LEI", ptBR: "falei", example: "Falei com ele ontem." },
            { pt: "comeu", fr: "il/elle a mangé", phonetic: "ko-ME-u", ptBR: "comeu", example: "Ela comeu peixe ao almoço." },
            { pt: "partimos", fr: "nous sommes partis", phonetic: "par-TI-mosh", ptBR: "partimos", example: "Partimos cedo esta manhã." },
            { pt: "foi", fr: "il/elle est allé(e)", phonetic: "foi", ptBR: "foi", example: "Ele foi ao cinema." },
            { pt: "tive", fr: "j'ai eu", phonetic: "TI-ve", ptBR: "tive", example: "Tive uma boa ideia." },
            { pt: "fiz", fr: "j'ai fait", phonetic: "fiz", ptBR: "fiz", example: "Fiz o jantar ontem à noite." },
            { pt: "disse", fr: "j'ai dit", phonetic: "DI-se", ptBR: "disse", example: "Disse a verdade." },
            { pt: "vim", fr: "je suis venu(e)", phonetic: "ving", ptBR: "vim", example: "Vim de França para aprender português." },
          ]
        },
        {
          title: "Expressions temporelles du passé",
          content: `Ces mots-clés permettent de situer une action dans le temps passé.`,
          vocabulary: [
            { pt: "ontem", fr: "hier", phonetic: "ONG-teng", ptBR: "ontem", example: "Ontem fui ao teatro." },
            { pt: "anteontem", fr: "avant-hier", phonetic: "ang-te-ONG-teng", ptBR: "anteontem", example: "Anteontem choveu muito." },
            { pt: "na semana passada", fr: "la semaine dernière", phonetic: "na se-MA-na pa-SA-da", ptBR: "na semana passada", example: "Na semana passada fui ao Porto." },
            { pt: "no ano passado", fr: "l'année dernière", phonetic: "no A-no pa-SA-do", ptBR: "no ano passado", example: "No ano passado visitei Lisboa." },
            { pt: "há dois dias", fr: "il y a deux jours", phonetic: "a doish DI-ash", ptBR: "há dois dias", example: "Encontrei-o há dois dias." },
            { pt: "já", fr: "déjà", phonetic: "ja", ptBR: "já", example: "Já fui ao Brasil!" },
          ]
        }
      ],
      phrases: [
        { pt: "Ontem fui ao restaurante com os meus amigos.", fr: "Hier je suis allé au restaurant avec mes amis.", context: "Récit d'événement passé" },
        { pt: "O que fizeste no fim de semana?", fr: "Qu'est-ce que tu as fait le week-end ?", context: "Question au passé" },
        { pt: "Nunca fui ao Brasil, mas quero ir!", fr: "Je ne suis jamais allé au Brésil, mais je veux y aller !", context: "Expérience de vie" },
      ],
      quiz: [
        { type: "mcq", question: "Comment conjuguer 'falar' (eu) au pretérito perfeito ?", options: ["falava", "falei", "falarei", "falo"], correct: 1, explanation: "'Falei' = j'ai parlé. Conjugaison -AR : eu falei, tu falaste, ele falou..." },
        { type: "mcq", question: "Quelle est la forme de 'ir'/'ser' (ele/ela) au passé ?", options: ["iu", "fosse", "foi", "ía"], correct: 2, explanation: "'Foi' est la forme passée de 'ir' ET de 'ser' pour ele/ela. Le contexte détermine le sens !" },
        { type: "translate", question: "Traduisez : 'hier'", answer: "ontem" },
        { type: "mcq", question: "Comment dit-on 'j'ai fait' ?", options: ["faço", "fazia", "fiz", "farei"], correct: 2, explanation: "'Fiz' = j'ai fait. Verbe irrégulier 'fazer' au pretérito perfeito." },
        { type: "translate", question: "Traduisez : 'la semaine dernière'", answer: "na semana passada" },
        { type: "mcq", question: "Comment dit-on 'nous sommes partis' au pretérito perfeito ?", options: ["partíamos", "partiremos", "partimos", "partiram"], correct: 2, explanation: "Attention : 'partimos' est identique au présent ET au perfeito pour nós. Le contexte (ontem, esta manhã...) fait la différence." },
      ]
    },
    {
      id: "b1-2",
      level: "B1",
      title: "L'imparfait",
      titlePT: "O Pretérito Imperfeito",
      icon: "📺",
      description: "Décrivez des habitudes passées et faites des descriptions au passé.",
      xp: 100,
      sections: [
        {
          title: "Formation de l'imparfait",
          content: `L'imparfait (pretérito imperfeito) exprime des habitudes, des états ou des descriptions dans le passé. -AR → -ava / -ER/-IR → -ia.`,
          vocabulary: [
            { pt: "falava", fr: "je parlais / il parlait", phonetic: "fa-LA-va", ptBR: "falava", example: "Quando era criança, falava muito." },
            { pt: "comia", fr: "je mangeais", phonetic: "ko-MI-a", ptBR: "comia", example: "Comia sempre peixe ao domingo." },
            { pt: "era", fr: "j'étais / il était", phonetic: "E-ra", ptBR: "era", example: "Ela era professora quando jovem." },
            { pt: "tinha", fr: "j'avais", phonetic: "TI-nya", ptBR: "tinha", example: "Tinha um cão quando era criança." },
            { pt: "ia", fr: "j'allais", phonetic: "I-a", ptBR: "ia", example: "Ia ao cinema todos os sábados." },
            { pt: "estudava", fr: "j'étudiais", phonetic: "esh-tu-DA-va", ptBR: "estudava", example: "Antes estudava à noite." },
          ]
        },
        {
          title: "Usages de l'imparfait",
          content: `L'imparfait s'emploie pour : les habitudes passées (antes/quando era criança...), les descriptions, les états d'âme passés.`,
          vocabulary: [
            { pt: "Quando era criança...", fr: "Quand j'étais enfant...", phonetic: "KUANG-do E-ra kri-ANG-sa", ptBR: "Quando era criança...", example: "Quando era criança, adorava jogar futebol." },
            { pt: "Antes...", fr: "Avant...", phonetic: "ANG-tesh", ptBR: "Antes...", example: "Antes morava em Paris." },
            { pt: "naquela época", fr: "à cette époque-là", phonetic: "na-KE-la E-po-ka", ptBR: "naquela época", example: "Naquela época não havia internet." },
            { pt: "costumava + infinitivo", fr: "avoir l'habitude de...", phonetic: "kosh-tu-MA-va", ptBR: "costumava", example: "Costumava acordar cedo todos os dias." },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Quelle est la terminaison de l'imparfait pour les verbes en -AR (eu) ?", options: ["-ei", "-ava", "-ia", "-arei"], correct: 1, explanation: "Imparfait -AR : eu falava, tu falavas, ele falava, nós falávamos..." },
        { type: "mcq", question: "'Costumava acordar cedo' signifie... ?", options: ["Je me lève tôt", "Je vais me lever tôt", "J'avais l'habitude de me lever tôt", "Je me suis levé tôt"], correct: 2, explanation: "'Costumava + infinitif' = avoir l'habitude de (dans le passé)." },
        { type: "translate", question: "Traduisez : 'Quand j'étais enfant'", answer: "quando era criança" },
        { type: "mcq", question: "Comment dit-on 'j'allais' avec le verbe 'ir' ?", options: ["fui", "vou", "ia", "irei"], correct: 2, explanation: "'Ia' est l'imparfait de 'ir' (aller). Forme courte mais irrégulière !" },
        { type: "translate", question: "Traduisez : 'Avant, j'habitais à Paris'", answer: "antes morava em paris" },
      ]
    },
    {
      id: "b1-3",
      level: "B1",
      title: "Le futur et le conditionnel",
      titlePT: "O Futuro e o Condicional",
      icon: "🔮",
      description: "Parlez de vos projets, exprimez des souhaits et soyez poli en portugais.",
      xp: 100,
      sections: [
        {
          title: "Le futur simple",
          content: `Le futur simple (futuro simples) se forme en ajoutant au verbe : -ei, -ás, -á, -emos, -eis, -ão. Même forme pour -AR, -ER, -IR !`,
          vocabulary: [
            { pt: "falarei", fr: "je parlerai", phonetic: "fa-la-REI", ptBR: "vou falar (futur proche)", example: "Amanhã falarei com o diretor." },
            { pt: "comerás", fr: "tu mangeras", phonetic: "ko-me-RASH", ptBR: "vai comer", example: "Amanhã comerás na minha casa!" },
            { pt: "virá", fr: "il/elle viendra", phonetic: "vi-RA", ptBR: "vai vir", example: "Ela virá à festa." },
            { pt: "seremos", fr: "nous serons", phonetic: "se-RE-mosh", ptBR: "vamos ser", example: "Seremos grandes amigos." },
            { pt: "farão", fr: "ils/elles feront", phonetic: "fa-RAONG", ptBR: "vão fazer", example: "Eles farão uma viagem ao Brasil." },
            { pt: "amanhã", fr: "demain", phonetic: "a-ma-NYAONG", ptBR: "amanhã", example: "Amanhã iremos ao museu." },
            { pt: "no próximo mês", fr: "le mois prochain", phonetic: "no PROKS-si-mo mesh", ptBR: "no próximo mês", example: "No próximo mês mudamos de casa." },
          ]
        },
        {
          title: "Le conditionnel",
          content: `Le condicional se forme avec : -ia, -ias, -ia, -íamos, -íeis, -iam. Il exprime la politesse, les souhaits et les hypothèses.`,
          vocabulary: [
            { pt: "gostaria de...", fr: "j'aimerais...", phonetic: "gosh-ta-RI-a de", ptBR: "gostaria de...", example: "Gostaria de visitar Lisboa um dia." },
            { pt: "poderia...", fr: "pourriez-vous... / je pourrais...", phonetic: "po-de-RI-a", ptBR: "poderia...", example: "Poderia trazer a ementa, por favor?" },
            { pt: "seria", fr: "ce serait", phonetic: "se-RI-a", ptBR: "seria", example: "Seria fantástico viver no Algarve!" },
            { pt: "queria", fr: "je voudrais", phonetic: "ke-RI-a", ptBR: "queria", example: "Queria um café e um pastel, por favor." },
            { pt: "deveria", fr: "je devrais", phonetic: "de-ve-RI-a", ptBR: "deveria", example: "Deveria estudar mais português." },
          ]
        }
      ],
      phrases: [
        { pt: "Gostaria de reservar uma mesa para esta noite.", fr: "J'aimerais réserver une table pour ce soir.", context: "Politesse au restaurant" },
        { pt: "Poderia repetir, por favor?", fr: "Pourriez-vous répéter, s'il vous plaît ?", context: "Demande polie" },
        { pt: "No futuro, quero aprender mais línguas.", fr: "Dans le futur, je veux apprendre plus de langues.", context: "Projets" },
      ],
      quiz: [
        { type: "mcq", question: "Quelle est la terminaison du futur simple pour 'eu' ?", options: ["-ava", "-ia", "-ei", "-arei"], correct: 2, explanation: "Futuro simples : eu falaREI, comerEI, virEI... La terminaison 'eu' = -ei." },
        { type: "mcq", question: "Comment exprimer poliment 'je voudrais' ?", options: ["quero", "queria", "quis", "quererei"], correct: 1, explanation: "'Queria' (conditionnel) est plus poli que 'quero' (présent) pour commander ou demander." },
        { type: "translate", question: "Traduisez : 'j'aimerais visiter Lisbonne'", answer: "gostaria de visitar lisboa" },
        { type: "mcq", question: "'Poderia trazer a ementa?' signifie... ?", options: ["Vous apportez le menu", "Apportez le menu !", "Pourriez-vous apporter le menu ?", "Avez-vous un menu ?"], correct: 2, explanation: "'Poderia' = conditionnel de 'poder'. Exprime une demande très polie." },
        { type: "translate", question: "Traduisez : 'demain'", answer: "amanhã" },
      ]
    },
    {
      id: "b1-4",
      level: "B1",
      title: "Les pronoms",
      titlePT: "Os pronomes",
      icon: "🔗",
      description: "Maîtrisez les pronoms directs et indirects pour des phrases fluides.",
      xp: 110,
      sections: [
        {
          title: "Pronoms sujets",
          content: `Le portugais utilise les pronoms sujets mais ils peuvent être omis car la conjugaison suffit. Attention aux différences PT-PT / PT-BR !`,
          vocabulary: [
            { pt: "eu", fr: "je", phonetic: "e-u", ptBR: "eu", example: "Eu falo português." },
            { pt: "tu / você", fr: "tu / vous", phonetic: "tu / vo-SE", ptBR: "você (courant)", example: "Tu falas muito bem! (PT) / Você fala! (BR)" },
            { pt: "ele / ela", fr: "il / elle", phonetic: "E-le / E-la", ptBR: "ele / ela", example: "Ela é professora." },
            { pt: "nós / a gente", fr: "nous", phonetic: "nosh / a JENG-te", ptBR: "a gente (courant)", example: "A gente vai ao cinema. (BR / fam.)" },
            { pt: "eles / elas", fr: "ils / elles", phonetic: "E-lesh / E-lash", ptBR: "eles / elas", example: "Eles estão a estudar." },
          ]
        },
        {
          title: "Pronoms compléments",
          content: `Les pronoms COD remplacent un nom objet direct. En PT-PT ils se placent après le verbe avec tiret ; en PT-BR, avant.`,
          vocabulary: [
            { pt: "Vejo-o.", fr: "Je le vois.", phonetic: "VE-jo-o", ptBR: "Eu o vejo.", example: "O Pedro? Vejo-o todos os dias." },
            { pt: "Conheço-a.", fr: "Je la connais.", phonetic: "ko-NYE-so-a", ptBR: "Eu a conheço.", example: "A Maria? Conheço-a bem." },
            { pt: "Comprei-o.", fr: "Je l'ai acheté.", phonetic: "kong-PREI-o", ptBR: "Eu o comprei.", example: "O livro? Comprei-o ontem." },
            { pt: "Amo-te.", fr: "Je t'aime.", phonetic: "A-mo-te", ptBR: "Eu te amo.", example: "Amo-te muito! (PT-PT)" },
            { pt: "Diz-me...", fr: "Dis-moi...", phonetic: "dish-me", ptBR: "Me diz...", example: "Diz-me a verdade. (PT) / Me diz a verdade. (BR)" },
          ]
        }
      ],
      quiz: [
        { type: "mcq", question: "Comment dit-on 'tu' couramment au Brésil ?", options: ["vós", "você", "ele", "nós"], correct: 1, explanation: "Au Brésil, 'você' remplace 'tu' dans la plupart des situations. 'Tu' reste utilisé dans certaines régions." },
        { type: "mcq", question: "En PT-PT, où se place le pronom COD ?", options: ["Avant le verbe", "Après le verbe avec tiret", "En fin de phrase", "Avant le sujet"], correct: 1, explanation: "En portugais européen : 'Vejo-o', 'Conheço-a'. En PT-BR : avant le verbe ('Eu o vejo')." },
        { type: "translate", question: "Traduisez 'Je la connais' (PT-PT)", answer: "conheço-a" },
        { type: "mcq", question: "Comment dit-on 'nous' familièrement au Brésil ?", options: ["nós", "a gente", "vós", "eles"], correct: 1, explanation: "'A gente' est très courant au Brésil. Il se conjugue à la 3ème personne du singulier." },
        { type: "mcq", question: "Comment dit-on 'Je te vois' en PT-PT ?", options: ["Te vejo", "Vejo-te", "Vejo-o", "O vejo"], correct: 1, explanation: "'Vejo-te' = je te vois en portugais européen. Au Brésil : 'Eu te vejo'." },
      ]
    },
    {
      id: "b1-5",
      level: "B1",
      title: "Connecteurs logiques",
      titlePT: "Conectores e argumentação",
      icon: "🔀",
      description: "Structurez votre discours avec des connecteurs logiques en portugais.",
      xp: 110,
      sections: [
        {
          title: "Connecteurs de base",
          content: `Les connecteurs logiques permettent de lier vos idées et de construire des arguments cohérents.`,
          vocabulary: [
            { pt: "porque", fr: "parce que / car", phonetic: "por-KE", ptBR: "porque", example: "Gosto de português porque é bonito." },
            { pt: "portanto", fr: "donc / par conséquent", phonetic: "por-TANG-to", ptBR: "portanto / então", example: "Estudei muito, portanto passei no exame." },
            { pt: "mas", fr: "mais", phonetic: "mash", ptBR: "mas", example: "Gosto de vinho, mas não bebo muito." },
            { pt: "no entanto", fr: "cependant / pourtant", phonetic: "no eng-TANG-to", ptBR: "no entanto / porém", example: "É caro, no entanto vale a pena." },
            { pt: "além disso", fr: "de plus / en outre", phonetic: "a-LENG di-SO", ptBR: "além disso", example: "O país é bonito. Além disso, a comida é excelente." },
            { pt: "por isso", fr: "c'est pourquoi / donc", phonetic: "por I-so", ptBR: "por isso", example: "Gosto de português, por isso estudo todos os dias." },
          ]
        },
        {
          title: "Connecteurs de concession et condition",
          content: `Ces connecteurs expriment des nuances comme la concession, la condition et l'opposition.`,
          vocabulary: [
            { pt: "embora", fr: "bien que / quoique", phonetic: "eng-BO-ra", ptBR: "embora (+ subj.)", example: "Embora chova, vou sair." },
            { pt: "apesar de", fr: "malgré / en dépit de", phonetic: "a-pe-ZAR de", ptBR: "apesar de", example: "Apesar do frio, fui nadar." },
            { pt: "se", fr: "si (condition)", phonetic: "se", ptBR: "se", example: "Se tiver tempo, vou ao museu." },
            { pt: "quando", fr: "quand / lorsque", phonetic: "KUANG-do", ptBR: "quando", example: "Quando chegar, telefona-me." },
            { pt: "mesmo que", fr: "même si", phonetic: "MES-mo ke", ptBR: "mesmo que", example: "Mesmo que seja difícil, não desisto." },
            { pt: "desde que", fr: "du moment que / depuis que", phonetic: "DESH-de ke", ptBR: "desde que", example: "Estudo português desde que cheguei a Lisboa." },
          ]
        }
      ],
      phrases: [
        { pt: "Embora seja difícil, não desisto.", fr: "Bien que ce soit difficile, je n'abandonne pas.", context: "Concession" },
        { pt: "Apesar das dificuldades, continuamos.", fr: "Malgré les difficultés, nous continuons.", context: "Opposition" },
        { pt: "Se estudares todos os dias, vais melhorar muito.", fr: "Si tu étudies tous les jours, tu vas beaucoup progresser.", context: "Condition" },
      ],
      quiz: [
        { type: "mcq", question: "Quel connecteur exprime la cause ?", options: ["portanto", "porque", "embora", "mas"], correct: 1, explanation: "'Porque' = parce que / car. Exprime la cause. 'Portanto' = donc (conséquence)." },
        { type: "mcq", question: "Quel connecteur signifie 'cependant / pourtant' ?", options: ["portanto", "e", "no entanto", "porque"], correct: 2, explanation: "'No entanto' = cependant, pourtant. Exprime une opposition ou nuance." },
        { type: "translate", question: "Traduisez : 'malgré'", answer: "apesar de" },
        { type: "mcq", question: "'Embora' + quel mode verbal ?", options: ["Indicatif", "Subjonctif", "Conditionnel", "Infinitif"], correct: 1, explanation: "'Embora' (bien que) exige le subjonctif en portugais, comme en français !" },
        { type: "translate", question: "Traduisez : 'c'est pourquoi / donc'", answer: "por isso" },
        { type: "mcq", question: "Comment dit-on 'de plus / en outre' ?", options: ["por isso", "no entanto", "além disso", "apesar de"], correct: 2, explanation: "'Além disso' = de plus, en outre. Permet d'ajouter un argument supplémentaire." },
      ]
    },
  ],

  vocabulary: {
    categories: [
      {
        id: "corps",
        name: "Corps humain",
        icon: "🫀",
        color: "#C84B31",
        words: [
          { pt: "a cabeça", fr: "la tête", img: "🧠" },
          { pt: "os olhos", fr: "les yeux", img: "👀" },
          { pt: "o nariz", fr: "le nez", img: "👃" },
          { pt: "a boca", fr: "la bouche", img: "👄" },
          { pt: "os ouvidos", fr: "les oreilles", img: "👂" },
          { pt: "o pescoço", fr: "le cou", img: "🫚" },
          { pt: "os ombros", fr: "les épaules", img: "💪" },
          { pt: "o braço", fr: "le bras", img: "💪" },
          { pt: "a mão", fr: "la main", img: "✋" },
          { pt: "os dedos", fr: "les doigts", img: "☝️" },
          { pt: "o peito", fr: "la poitrine", img: "❤️" },
          { pt: "o estômago", fr: "l'estomac", img: "🫃" },
          { pt: "a perna", fr: "la jambe", img: "🦵" },
          { pt: "o pé", fr: "le pied", img: "🦶" },
          { pt: "o joelho", fr: "le genou", img: "🦵" },
          { pt: "o coração", fr: "le cœur", img: "❤️" },
        ]
      },
      {
        id: "animaux",
        name: "Animaux",
        icon: "🐾",
        color: "#4A7C59",
        words: [
          { pt: "o cão", fr: "le chien", img: "🐕" },
          { pt: "o gato", fr: "le chat", img: "🐱" },
          { pt: "o pássaro", fr: "l'oiseau", img: "🐦" },
          { pt: "o peixe", fr: "le poisson", img: "🐠" },
          { pt: "o cavalo", fr: "le cheval", img: "🐴" },
          { pt: "a vaca", fr: "la vache", img: "🐄" },
          { pt: "o porco", fr: "le cochon", img: "🐷" },
          { pt: "a galinha", fr: "la poule", img: "🐔" },
          { pt: "o coelho", fr: "le lapin", img: "🐰" },
          { pt: "o leão", fr: "le lion", img: "🦁" },
          { pt: "o elefante", fr: "l'éléphant", img: "🐘" },
          { pt: "a borboleta", fr: "le papillon", img: "🦋" },
          { pt: "o golfinho", fr: "le dauphin", img: "🐬" },
          { pt: "a tartaruga", fr: "la tortue", img: "🐢" },
          { pt: "o urso", fr: "l'ours", img: "🐻" },
          { pt: "a cobra", fr: "le serpent", img: "🐍" },
        ]
      },
      {
        id: "nourriture",
        name: "Nourriture",
        icon: "🍽️",
        color: "#E8A838",
        words: [
          { pt: "o pão", fr: "le pain", img: "🍞" },
          { pt: "o arroz", fr: "le riz", img: "🍚" },
          { pt: "o peixe", fr: "le poisson", img: "🐟" },
          { pt: "a carne", fr: "la viande", img: "🥩" },
          { pt: "o frango", fr: "le poulet", img: "🍗" },
          { pt: "o queijo", fr: "le fromage", img: "🧀" },
          { pt: "o ovo", fr: "l'œuf", img: "🥚" },
          { pt: "a maçã", fr: "la pomme", img: "🍎" },
          { pt: "a laranja", fr: "l'orange", img: "🍊" },
          { pt: "o tomate", fr: "la tomate", img: "🍅" },
          { pt: "a banana", fr: "la banane", img: "🍌" },
          { pt: "o café", fr: "le café", img: "☕" },
          { pt: "o vinho", fr: "le vin", img: "🍷" },
          { pt: "a água", fr: "l'eau", img: "💧" },
          { pt: "o bolo", fr: "le gâteau", img: "🎂" },
          { pt: "o pastel de nata", fr: "le pastel de nata", img: "🥧" },
        ]
      },
      {
        id: "maison",
        name: "La maison",
        icon: "🏠",
        color: "#1A3A5C",
        words: [
          { pt: "a casa", fr: "la maison", img: "🏡" },
          { pt: "o quarto", fr: "la chambre", img: "🛏️" },
          { pt: "a sala", fr: "le salon", img: "🛋️" },
          { pt: "a cozinha", fr: "la cuisine", img: "🍳" },
          { pt: "a casa de banho", fr: "la salle de bain", img: "🚿" },
          { pt: "a janela", fr: "la fenêtre", img: "🪟" },
          { pt: "a porta", fr: "la porte", img: "🚪" },
          { pt: "a mesa", fr: "la table", img: "🪑" },
          { pt: "a cadeira", fr: "la chaise", img: "🪑" },
          { pt: "o sofá", fr: "le canapé", img: "🛋️" },
          { pt: "a cama", fr: "le lit", img: "🛏️" },
          { pt: "o jardim", fr: "le jardin", img: "🌿" },
          { pt: "o telhado", fr: "le toit", img: "🏠" },
          { pt: "o livro", fr: "le livre", img: "📚" },
          { pt: "o computador", fr: "l'ordinateur", img: "💻" },
          { pt: "o telefone", fr: "le téléphone", img: "📱" },
        ]
      },
      {
        id: "emotions",
        name: "Émotions",
        icon: "😊",
        color: "#C84B31",
        words: [
          { pt: "feliz", fr: "heureux/heureuse", img: "😊" },
          { pt: "triste", fr: "triste", img: "😢" },
          { pt: "com raiva", fr: "en colère", img: "😠" },
          { pt: "com medo", fr: "effrayé(e)", img: "😨" },
          { pt: "surpreendido(a)", fr: "surpris(e)", img: "😲" },
          { pt: "cansado(a)", fr: "fatigué(e)", img: "😴" },
          { pt: "animado(a)", fr: "enthousiaste", img: "🤩" },
          { pt: "apaixonado(a)", fr: "amoureux/euse", img: "😍" },
          { pt: "com ciúmes", fr: "jaloux/jalouse", img: "😒" },
          { pt: "orgulhoso(a)", fr: "fier/fière", img: "😤" },
          { pt: "entediado(a)", fr: "ennuyé(e)", img: "😑" },
          { pt: "nervoso(a)", fr: "nerveux/nerveuse", img: "😰" },
        ]
      },
      {
        id: "voyage",
        name: "Voyage",
        icon: "✈️",
        color: "#4A7C59",
        words: [
          { pt: "o aeroporto", fr: "l'aéroport", img: "✈️" },
          { pt: "o avião", fr: "l'avion", img: "🛫" },
          { pt: "o comboio", fr: "le train", img: "🚂" },
          { pt: "o autocarro", fr: "le bus", img: "🚌" },
          { pt: "o táxi", fr: "le taxi", img: "🚕" },
          { pt: "o hotel", fr: "l'hôtel", img: "🏨" },
          { pt: "a praia", fr: "la plage", img: "🏖️" },
          { pt: "o museu", fr: "le musée", img: "🏛️" },
          { pt: "o mapa", fr: "la carte/le plan", img: "🗺️" },
          { pt: "a bagagem", fr: "les bagages", img: "🧳" },
          { pt: "o passaporte", fr: "le passeport", img: "📘" },
          { pt: "a viagem", fr: "le voyage", img: "🌍" },
        ]
      },
      {
        id: "nature",
        name: "Nature",
        icon: "🌿",
        color: "#4A7C59",
        words: [
          { pt: "o sol", fr: "le soleil", img: "☀️" },
          { pt: "a lua", fr: "la lune", img: "🌙" },
          { pt: "o mar", fr: "la mer", img: "🌊" },
          { pt: "o rio", fr: "la rivière", img: "🏞️" },
          { pt: "a montanha", fr: "la montagne", img: "⛰️" },
          { pt: "a floresta", fr: "la forêt", img: "🌲" },
          { pt: "a flor", fr: "la fleur", img: "🌸" },
          { pt: "a árvore", fr: "l'arbre", img: "🌳" },
          { pt: "a chuva", fr: "la pluie", img: "🌧️" },
          { pt: "o vento", fr: "le vent", img: "💨" },
          { pt: "a neve", fr: "la neige", img: "❄️" },
          { pt: "o céu", fr: "le ciel", img: "🌤️" },
        ]
      },
      {
        id: "metiers",
        name: "Métiers",
        icon: "👔",
        color: "#1A3A5C",
        words: [
          { pt: "o médico / a médica", fr: "le médecin", img: "👨‍⚕️" },
          { pt: "o professor / a professora", fr: "le professeur", img: "👨‍🏫" },
          { pt: "o engenheiro / a engenheira", fr: "l'ingénieur(e)", img: "👷" },
          { pt: "o advogado / a advogada", fr: "l'avocat(e)", img: "⚖️" },
          { pt: "o cozinheiro / a cozinheira", fr: "le cuisinier/la cuisinière", img: "👨‍🍳" },
          { pt: "o polícia", fr: "le policier", img: "👮" },
          { pt: "o bombeiro", fr: "le pompier", img: "🚒" },
          { pt: "o escritor / a escritora", fr: "l'écrivain(e)", img: "✍️" },
          { pt: "o músico / a música", fr: "le/la musicien(ne)", img: "🎵" },
          { pt: "o arquiteto / a arquiteta", fr: "l'architecte", img: "🏛️" },
          { pt: "o farmacêutico", fr: "le pharmacien", img: "💊" },
          { pt: "o jornalista", fr: "le/la journaliste", img: "📰" },
        ]
      },
      {
        id: "vetements",
        name: "Vêtements",
        icon: "👕",
        color: "#C84B31",
        words: [
          { pt: "a camisa", fr: "la chemise", img: "👔" },
          { pt: "a t-shirt", fr: "le t-shirt", img: "👕" },
          { pt: "as calças", fr: "le pantalon", img: "👖" },
          { pt: "o vestido", fr: "la robe", img: "👗" },
          { pt: "a saia", fr: "la jupe", img: "👗" },
          { pt: "o casaco", fr: "le manteau / la veste", img: "🧥" },
          { pt: "o blusão", fr: "le blouson / le sweat", img: "🧥" },
          { pt: "os sapatos", fr: "les chaussures", img: "👟" },
          { pt: "as botas", fr: "les bottes", img: "👢" },
          { pt: "as sandálias", fr: "les sandales", img: "👡" },
          { pt: "o chapéu", fr: "le chapeau", img: "🎩" },
          { pt: "os óculos", fr: "les lunettes", img: "👓" },
          { pt: "o lenço", fr: "l'écharpe / le foulard", img: "🧣" },
          { pt: "as meias", fr: "les chaussettes", img: "🧦" },
          { pt: "a gravata", fr: "la cravate", img: "👔" },
          { pt: "o cinto", fr: "la ceinture", img: "👔" },
          { pt: "a mochila", fr: "le sac à dos", img: "🎒" },
          { pt: "a carteira", fr: "le portefeuille / le sac", img: "👛" },
          { pt: "o pijama", fr: "le pyjama", img: "🩲" },
          { pt: "o fato de banho", fr: "le maillot de bain", img: "🩱" },
        ]
      },
      {
        id: "sports",
        name: "Sports & loisirs",
        icon: "⚽",
        color: "#4A7C59",
        words: [
          { pt: "o futebol", fr: "le football", img: "⚽" },
          { pt: "o basquetebol", fr: "le basketball", img: "🏀" },
          { pt: "o ténis", fr: "le tennis", img: "🎾" },
          { pt: "a natação", fr: "la natation", img: "🏊" },
          { pt: "o ciclismo", fr: "le cyclisme", img: "🚴" },
          { pt: "a corrida", fr: "la course à pied", img: "🏃" },
          { pt: "o surf", fr: "le surf", img: "🏄" },
          { pt: "a ginástica", fr: "la gym", img: "🤸" },
          { pt: "o ioga", fr: "le yoga", img: "🧘" },
          { pt: "o voleibol", fr: "le volleyball", img: "🏐" },
          { pt: "a dança", fr: "la danse", img: "💃" },
          { pt: "a caminhada", fr: "la randonnée", img: "🥾" },
          { pt: "o cinema", fr: "le cinéma", img: "🎬" },
          { pt: "a música", fr: "la musique", img: "🎵" },
          { pt: "a leitura", fr: "la lecture", img: "📖" },
          { pt: "a fotografia", fr: "la photographie", img: "📷" },
        ]
      },
      {
        id: "sante",
        name: "Santé",
        icon: "💊",
        color: "#E8A838",
        words: [
          { pt: "o hospital", fr: "l'hôpital", img: "🏥" },
          { pt: "a farmácia", fr: "la pharmacie", img: "💊" },
          { pt: "o médico", fr: "le médecin", img: "👨‍⚕️" },
          { pt: "a enfermeira", fr: "l'infirmière", img: "👩‍⚕️" },
          { pt: "o comprimido", fr: "le comprimé", img: "💊" },
          { pt: "a vacina", fr: "le vaccin", img: "💉" },
          { pt: "a dor", fr: "la douleur", img: "😣" },
          { pt: "a febre", fr: "la fièvre", img: "🌡️" },
          { pt: "a tosse", fr: "la toux", img: "😷" },
          { pt: "o resfriado", fr: "le rhume", img: "🤧" },
          { pt: "a alergia", fr: "l'allergie", img: "🤧" },
          { pt: "o dentista", fr: "le dentiste", img: "🦷" },
          { pt: "a cirurgia", fr: "la chirurgie", img: "🏥" },
          { pt: "o sangue", fr: "le sang", img: "🩸" },
          { pt: "a tensão arterial", fr: "la tension artérielle", img: "❤️" },
          { pt: "a receita médica", fr: "l'ordonnance", img: "📋" },
        ]
      },
      {
        id: "technologie",
        name: "Technologie",
        icon: "💻",
        color: "#1A3A5C",
        words: [
          { pt: "o computador", fr: "l'ordinateur", img: "💻" },
          { pt: "o telemóvel", fr: "le téléphone portable", img: "📱" },
          { pt: "a internet", fr: "l'internet", img: "🌐" },
          { pt: "o email", fr: "l'e-mail", img: "📧" },
          { pt: "a palavra-passe", fr: "le mot de passe", img: "🔑" },
          { pt: "o aplicativo / a app", fr: "l'application", img: "📲" },
          { pt: "as redes sociais", fr: "les réseaux sociaux", img: "📱" },
          { pt: "o ecrã", fr: "l'écran", img: "🖥️" },
          { pt: "o teclado", fr: "le clavier", img: "⌨️" },
          { pt: "a bateria", fr: "la batterie", img: "🔋" },
          { pt: "a câmara", fr: "l'appareil photo / la caméra", img: "📷" },
          { pt: "o ficheiro", fr: "le fichier", img: "📁" },
          { pt: "o download", fr: "le téléchargement", img: "⬇️" },
          { pt: "a inteligência artificial", fr: "l'intelligence artificielle", img: "🤖" },
        ]
      },
    ]
  },

  conjugation: {
    regular: {
      ar: {
        infinitive: "-AR (ex: falar — parler)",
        tenses: {
          presente: { eu: "falo", tu: "falas", "ele/ela": "fala", "nós": "falamos", "vós": "falais", "eles/elas": "falam" },
          preteritoPerfeito: { eu: "falei", tu: "falaste", "ele/ela": "falou", "nós": "falámos", "vós": "flastes", "eles/elas": "falaram" },
          preteritoImperfeito: { eu: "falava", tu: "falavas", "ele/ela": "falava", "nós": "falávamos", "vós": "faláveis", "eles/elas": "falavam" },
          futuro: { eu: "falarei", tu: "falarás", "ele/ela": "falará", "nós": "falaremos", "vós": "falareis", "eles/elas": "falarão" },
        }
      },
      er: {
        infinitive: "-ER (ex: comer — manger)",
        tenses: {
          presente: { eu: "como", tu: "comes", "ele/ela": "come", "nós": "comemos", "vós": "comeis", "eles/elas": "comem" },
          preteritoPerfeito: { eu: "comi", tu: "comeste", "ele/ela": "comeu", "nós": "comemos", "vós": "comestes", "eles/elas": "comeram" },
          preteritoImperfeito: { eu: "comia", tu: "comias", "ele/ela": "comia", "nós": "comíamos", "vós": "comíeis", "eles/elas": "comiam" },
          futuro: { eu: "comerei", tu: "comerás", "ele/ela": "comerá", "nós": "comeremos", "vós": "comereis", "eles/elas": "comerão" },
        }
      },
      ir: {
        infinitive: "-IR (ex: partir — partir)",
        tenses: {
          presente: { eu: "parto", tu: "partes", "ele/ela": "parte", "nós": "partimos", "vós": "partis", "eles/elas": "partem" },
          preteritoPerfeito: { eu: "parti", tu: "partiste", "ele/ela": "partiu", "nós": "partimos", "vós": "partistes", "eles/elas": "partiram" },
          preteritoImperfeito: { eu: "partia", tu: "partias", "ele/ela": "partia", "nós": "partíamos", "vós": "partíeis", "eles/elas": "partiam" },
          futuro: { eu: "partirei", tu: "partirás", "ele/ela": "partirá", "nós": "partiremos", "vós": "partireis", "eles/elas": "partirão" },
        }
      }
    },
    essential: [
      {
        verb: "ser", meaning: "être (permanent)", irregular: true,
        tenses: {
          presente: { eu: "sou", tu: "és", "ele/ela": "é", "nós": "somos", "vós": "sois", "eles/elas": "são" },
          preteritoPerfeito: { eu: "fui", tu: "foste", "ele/ela": "foi", "nós": "fomos", "vós": "fostes", "eles/elas": "foram" },
          preteritoImperfeito: { eu: "era", tu: "eras", "ele/ela": "era", "nós": "éramos", "vós": "éreis", "eles/elas": "eram" },
          futuro: { eu: "serei", tu: "serás", "ele/ela": "será", "nós": "seremos", "vós": "sereis", "eles/elas": "serão" },
        }
      },
      {
        verb: "estar", meaning: "être (temporaire)", irregular: true,
        tenses: {
          presente: { eu: "estou", tu: "estás", "ele/ela": "está", "nós": "estamos", "vós": "estais", "eles/elas": "estão" },
          preteritoPerfeito: { eu: "estive", tu: "estiveste", "ele/ela": "esteve", "nós": "estivemos", "vós": "estivestes", "eles/elas": "estiveram" },
          preteritoImperfeito: { eu: "estava", tu: "estavas", "ele/ela": "estava", "nós": "estávamos", "vós": "estáveis", "eles/elas": "estavam" },
          futuro: { eu: "estarei", tu: "estarás", "ele/ela": "estará", "nós": "estaremos", "vós": "estareis", "eles/elas": "estarão" },
        }
      },
      {
        verb: "ter", meaning: "avoir", irregular: true,
        tenses: {
          presente: { eu: "tenho", tu: "tens", "ele/ela": "tem", "nós": "temos", "vós": "tendes", "eles/elas": "têm" },
          preteritoPerfeito: { eu: "tive", tu: "tiveste", "ele/ela": "teve", "nós": "tivemos", "vós": "tivestes", "eles/elas": "tiveram" },
          preteritoImperfeito: { eu: "tinha", tu: "tinhas", "ele/ela": "tinha", "nós": "tínhamos", "vós": "tínheis", "eles/elas": "tinham" },
          futuro: { eu: "terei", tu: "terás", "ele/ela": "terá", "nós": "teremos", "vós": "tereis", "eles/elas": "terão" },
        }
      },
      {
        verb: "ir", meaning: "aller", irregular: true,
        tenses: {
          presente: { eu: "vou", tu: "vais", "ele/ela": "vai", "nós": "vamos", "vós": "ides", "eles/elas": "vão" },
          preteritoPerfeito: { eu: "fui", tu: "foste", "ele/ela": "foi", "nós": "fomos", "vós": "fostes", "eles/elas": "foram" },
          preteritoImperfeito: { eu: "ia", tu: "ias", "ele/ela": "ia", "nós": "íamos", "vós": "íeis", "eles/elas": "iam" },
          futuro: { eu: "irei", tu: "irás", "ele/ela": "irá", "nós": "iremos", "vós": "ireis", "eles/elas": "irão" },
        }
      },
      {
        verb: "fazer", meaning: "faire", irregular: true,
        tenses: {
          presente: { eu: "faço", tu: "fazes", "ele/ela": "faz", "nós": "fazemos", "vós": "fazeis", "eles/elas": "fazem" },
          preteritoPerfeito: { eu: "fiz", tu: "fizeste", "ele/ela": "fez", "nós": "fizemos", "vós": "fizestes", "eles/elas": "fizeram" },
          preteritoImperfeito: { eu: "fazia", tu: "fazias", "ele/ela": "fazia", "nós": "fazíamos", "vós": "fazíeis", "eles/elas": "faziam" },
          futuro: { eu: "farei", tu: "farás", "ele/ela": "fará", "nós": "faremos", "vós": "fareis", "eles/elas": "farão" },
        }
      },
      {
        verb: "poder", meaning: "pouvoir", irregular: true,
        tenses: {
          presente: { eu: "posso", tu: "podes", "ele/ela": "pode", "nós": "podemos", "vós": "podeis", "eles/elas": "podem" },
          preteritoPerfeito: { eu: "pude", tu: "pudeste", "ele/ela": "pôde", "nós": "pudemos", "vós": "pudestes", "eles/elas": "puderam" },
          preteritoImperfeito: { eu: "podia", tu: "podias", "ele/ela": "podia", "nós": "podíamos", "vós": "podíeis", "eles/elas": "podiam" },
          futuro: { eu: "poderei", tu: "poderás", "ele/ela": "poderá", "nós": "poderemos", "vós": "podereis", "eles/elas": "poderão" },
        }
      },
      {
        verb: "querer", meaning: "vouloir", irregular: true,
        tenses: {
          presente: { eu: "quero", tu: "queres", "ele/ela": "quer", "nós": "queremos", "vós": "quereis", "eles/elas": "querem" },
          preteritoPerfeito: { eu: "quis", tu: "quiseste", "ele/ela": "quis", "nós": "quisemos", "vós": "quisestes", "eles/elas": "quiseram" },
          preteritoImperfeito: { eu: "queria", tu: "querias", "ele/ela": "queria", "nós": "queríamos", "vós": "queríeis", "eles/elas": "queriam" },
          futuro: { eu: "quererei", tu: "quererás", "ele/ela": "quererá", "nós": "quereremos", "vós": "querereis", "eles/elas": "quererão" },
        }
      },
      {
        verb: "dizer", meaning: "dire", irregular: true,
        tenses: {
          presente: { eu: "digo", tu: "dizes", "ele/ela": "diz", "nós": "dizemos", "vós": "dizeis", "eles/elas": "dizem" },
          preteritoPerfeito: { eu: "disse", tu: "disseste", "ele/ela": "disse", "nós": "dissemos", "vós": "dissestes", "eles/elas": "disseram" },
          preteritoImperfeito: { eu: "dizia", tu: "dizias", "ele/ela": "dizia", "nós": "dizíamos", "vós": "dizíeis", "eles/elas": "diziam" },
          futuro: { eu: "direi", tu: "dirás", "ele/ela": "dirá", "nós": "diremos", "vós": "direis", "eles/elas": "dirão" },
        }
      },
    ]
  },

  pronunciation: {
    alphabet: [
      { letter: "A", sound: "a", example: "amor", translation: "amour" },
      { letter: "B", sound: "bê", example: "bom", translation: "bon" },
      { letter: "C", sound: "cê", example: "casa", translation: "maison" },
      { letter: "D", sound: "dê", example: "dia", translation: "jour" },
      { letter: "E", sound: "ê / é", example: "estar", translation: "être" },
      { letter: "F", sound: "efe", example: "flor", translation: "fleur" },
      { letter: "G", sound: "gê", example: "gato", translation: "chat" },
      { letter: "H", sound: "agá (muet!)", example: "hoje", translation: "aujourd'hui" },
      { letter: "I", sound: "i", example: "ilha", translation: "île" },
      { letter: "J", sound: "jota", example: "janela", translation: "fenêtre" },
      { letter: "L", sound: "ele", example: "lua", translation: "lune" },
      { letter: "M", sound: "eme", example: "mar", translation: "mer" },
      { letter: "N", sound: "ene", example: "noite", translation: "nuit" },
      { letter: "O", sound: "ô / ó", example: "olho", translation: "œil" },
      { letter: "P", sound: "pê", example: "pai", translation: "père" },
      { letter: "Q", sound: "quê", example: "quatro", translation: "quatre" },
      { letter: "R", sound: "erre (roulé)", example: "rosa", translation: "rose" },
      { letter: "S", sound: "esse", example: "sol", translation: "soleil" },
      { letter: "T", sound: "tê", example: "tarde", translation: "après-midi" },
      { letter: "U", sound: "u", example: "uva", translation: "raisin" },
      { letter: "V", sound: "vê", example: "vinho", translation: "vin" },
      { letter: "X", sound: "xis (=ch/sh)", example: "xícara", translation: "tasse" },
      { letter: "Z", sound: "zê", example: "zero", translation: "zéro" },
    ],
    specialSounds: [
      { sound: "ão", description: "Voyelle nasale — comme 'on' mais nasal", example: "pão, mão, coração", tip: "Imaginez dire 'paong' en pinçant le nez !" },
      { sound: "ã", description: "Nasale sans le 'o' final", example: "mã, irmã, cidadã", tip: "Comme 'an' très nasal" },
      { sound: "lh", description: "Comme 'lh' en espagnol = 'ly' français", example: "filho, trabalho, palha", tip: "Comme 'filio' en français" },
      { sound: "nh", description: "Comme 'gn' en français", example: "vinho, sonho, banho", tip: "Exactement comme 'vigneau'" },
      { sound: "ç", description: "Toujours prononcé 'ss'", example: "açúcar, força, França", tip: "Jamais de 'k', toujours 'ss'" },
      { sound: "x", description: "Variable : 'ch', 'z', 'ks' ou 's'", example: "xícara=ch, exame=z", tip: "Contexte détermine la prononciation !" },
      { sound: "r / rr", description: "R fort au début de mot ou double RR = son guttural", example: "rosa, carro, rua", tip: "Comme le 'j' espagnol ou le 'r' parisien roulé" },
      { sound: "e final", description: "Au Portugal, le 'e' final est souvent muet", example: "verde=[verd], arte=[art]", tip: "Différence PT-PT vs PT-BR où il se prononce !" },
    ],
    traps: [
      { trap: "Le H est toujours muet !", explanation: "Contrairement au français, le H portugais ne s'aspire jamais.", example: "hoje=[oje], homem=[omem]", emoji: "🚫" },
      { trap: "Le -s final se prononce 'sh' en Portugal", explanation: "En Portugal, les S en fin de mot ou syllabe font 'sh'. Au Brésil, reste 'ss'.", example: "os=[osh], mais=[maish]", emoji: "🇵🇹" },
      { trap: "Le D et T au Brésil", explanation: "Au Brésil, d+i=[dj] et t+i=[tch]. Ex: dia=[djia], tio=[tchio]", example: "dia=djia, tia=tchia", emoji: "🇧🇷" },
      { trap: "Les voyelles atones sont réduites", explanation: "En Portugal, les voyelles non-accentuées sont très réduites ou muettes.", example: "palavra=[plvra] en PT-PT", emoji: "🔇" },
      { trap: "Le EM et EN nasaux", explanation: "'em' et 'en' sont nasaux en fin de mot", example: "também=[tambẽ], bem=[bẽ]", emoji: "👃" },
    ]
  },

  badges: [
    { id: "first_word", name: "Premier Mot", icon: "🌱", description: "Vous avez appris votre premier mot !", condition: "words >= 1" },
    { id: "ten_words", name: "Débutant", icon: "📖", description: "10 mots appris", condition: "words >= 10" },
    { id: "fifty_words", name: "Progressant", icon: "🎯", description: "50 mots appris", condition: "words >= 50" },
    { id: "hundred_words", name: "Centurion", icon: "💯", description: "100 mots appris", condition: "words >= 100" },
    { id: "first_lesson", name: "Première Leçon", icon: "🏫", description: "Première leçon complétée", condition: "lessons >= 1" },
    { id: "five_lessons", name: "Studieux", icon: "🎓", description: "5 leçons complétées", condition: "lessons >= 5" },
    { id: "streak_3", name: "En Feu", icon: "🔥", description: "3 jours consécutifs", condition: "streak >= 3" },
    { id: "streak_7", name: "7 Jours !", icon: "⚡", description: "7 jours consécutifs", condition: "streak >= 7" },
    { id: "streak_30", name: "Mestre", icon: "👑", description: "30 jours consécutifs", condition: "streak >= 30" },
    { id: "first_quiz", name: "Quiz Master", icon: "🧠", description: "Premier quiz réussi", condition: "quizzes >= 1" },
    { id: "perfect_quiz", name: "Perfeito!", icon: "⭐", description: "Quiz réussi à 100%", condition: "perfectQuiz >= 1" },
    { id: "ser_estar", name: "Maître SER/ESTAR", icon: "⚖️", description: "Leçon SER/ESTAR complétée", condition: "lesson_a1-7" },
    { id: "early_bird", name: "Lève-tôt", icon: "🌅", description: "Leçon avant 8h du matin", condition: "earlyBird" },
    { id: "night_owl", name: "Hibou Nocturne", icon: "🦉", description: "Leçon après 22h", condition: "nightOwl" },
    { id: "culturalist", name: "Culturaliste", icon: "🎭", description: "Lu 5 faits culturels", condition: "culturalFacts >= 5" },
    { id: "all_a1", name: "Diplômé A1", icon: "🎓", description: "Toutes les leçons A1 complétées !", condition: "all A1 lessons done" },
    { id: "polyglotte", name: "Polyglotte", icon: "🌍", description: "200 mots maîtrisés", condition: "words >= 200" },
    { id: "quiz_master_5", name: "Champion", icon: "🏆", description: "5 quiz parfaits (100%)", condition: "perfectQuizzes >= 5" },
    { id: "vocab_traveller", name: "Grand Voyageur", icon: "✈️", description: "Catégorie Voyage maîtrisée à 100%", condition: "voyage category mastered" },
    { id: "week_warrior", name: "Guerrier de la Semaine", icon: "⚔️", description: "Actif 7 jours dans la même semaine", condition: "7 days active" },
  ],

  culturalFacts: [
    { emoji: "🎵", title: "Le Fado", text: "Le fado est le genre musical emblématique du Portugal, inscrit au patrimoine immatériel de l'UNESCO. Il exprime la 'saudade' — cette nostalgie mélancolique typiquement portugaise." },
    { emoji: "🥧", title: "Pastel de Nata", text: "Le pastel de nata (ou pastel de Belém) est le symbole de la pâtisserie portugaise. Créé par des moines à Lisbonne au XIXe siècle, il est aujourd'hui mondialement connu." },
    { emoji: "🚋", title: "Le tram 28", text: "Le célèbre tram jaune n°28 de Lisbonne traverse les plus vieux quartiers de la ville, comme Alfama. C'est un symbole de la capitale portugaise." },
    { emoji: "🌍", title: "Langue mondiale", text: "Le portugais est la 5ème langue la plus parlée au monde avec 260 millions de locuteurs, répartis sur 4 continents : Europe, Amérique du Sud, Afrique et Asie." },
    { emoji: "🏆", title: "Les Grandes Découvertes", text: "Au XVe-XVIe siècle, les explorateurs portugais comme Vasco de Gama et Magellan ont cartographié le monde et établi des routes commerciales qui ont changé l'histoire." },
    { emoji: "🦜", title: "Langue plurielle", text: "Le portugais européen et le brésilien sont assez différents — accent, vocabulaire et même orthographe. C'est comme comparer le français de Paris à celui de Montréal !" },
    { emoji: "🎸", title: "Fado de Coimbra", text: "Il existe deux fados distincts : le Fado de Lisboa, chanté par des femmes et des hommes sur des thèmes populaires, et le Fado de Coimbra, tradition exclusive des étudiants universitaires, plus mélancolique et poétique." },
    { emoji: "🌺", title: "Bossa Nova", text: "Née à Rio de Janeiro dans les années 1950, la Bossa Nova mêle samba et jazz. João Gilberto, Tom Jobim et Vinícius de Moraes en sont les pères fondateurs. 'Garota de Ipanema' est la 2ème chanson la plus enregistrée au monde." },
    { emoji: "📝", title: "Fernando Pessoa et ses hétéronymes", text: "Pessoa n'avait pas de pseudonymes mais des 'hétéronymes' — des personnalités complètes avec biographies, styles et philosophies propres. Alberto Caeiro, Ricardo Reis et Álvaro de Campos sont ses trois principaux hétéronymes." },
    { emoji: "🟦", title: "Les Azulejos", text: "Les azulejos (de l'arabe 'az-zulayj', petite pierre polie) sont des carreaux de céramique peints présents partout au Portugal. Introduits au XVe siècle, ils ornent églises, palais et stations de métro. Certains panneaux racontent l'histoire du pays." },
    { emoji: "🎭", title: "Carnaval brésilien", text: "Le Carnaval de Rio de Janeiro est le plus célèbre du monde avec ses défilés d'écoles de samba au Sambódromo. Mais le Carnaval de Salvador de Bahia, aux rythmes afro-brésiliens comme le axé et le pagode, est tout aussi spectaculaire." },
    { emoji: "🌍", title: "Lusophonie africaine", text: "Cinq pays africains ont le portugais comme langue officielle : Angola, Mozambique, Cap-Vert, Guinée-Bissau et São Tomé-et-Príncipe. Ces pays représentent une part importante des 260 millions de locuteurs de la langue portugaise." },
    { emoji: "🏯", title: "L'empreinte portugaise en Asie", text: "Macau (Chine), ancienne colonie jusqu'en 1999, conserve une architecture unique mêlant baroque portugais et culture chinoise. Goa (Inde) et Timor-Oriental gardent aussi l'influence lusitanienne dans leur architecture, gastronomie et vocabulaire." },
    { emoji: "📚", title: "José Saramago", text: "José Saramago (1922-2010) est le seul écrivain de langue portugaise à avoir reçu le Prix Nobel de Littérature (1998). Son roman 'L'Aveuglement' (Ensaio sobre a Cegueira) est une allégorie sur la fragilité des sociétés humaines." },
  ]
};
