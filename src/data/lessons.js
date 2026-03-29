export const lessons = [
  {
    "id": "a1-1a",
    "level": "A1",
    "title": "Bonjour !",
    "titlePT": "Olá !",
    "icon": "👋",
    "description": "Apprenez les salutations de base selon le moment de la journée.",
    "xp": 30,
    "sections": [
      {
        "title": "Saluer en portugais",
        "content": "En portugais, les salutations varient selon le moment de la journée — comme en français !",
        "vocabulary": [
          { "pt": "Olá", "fr": "Salut / Bonjour", "phonetic": "o-LA", "ptBR": "Olá", "example": "Olá, tudo bem?",
            "exampleFr": "Bonjour tout va bien ?" },
          { "pt": "Bom dia", "fr": "Bonjour (matin)", "phonetic": "bom DI-a", "ptBR": "Bom dia", "example": "Bom dia, senhor Silva!",
            "exampleFr": "Bonjour, Monsieur Silva!" },
          { "pt": "Boa tarde", "fr": "Bon après-midi", "phonetic": "boa TAR-de", "ptBR": "Boa tarde", "example": "Boa tarde, como vai?",
            "exampleFr": "Bonjour, comment vas-tu ?" },
          { "pt": "Boa noite", "fr": "Bonsoir / Bonne nuit", "phonetic": "boa NOI-te", "ptBR": "Boa noite", "example": "Boa noite, até amanhã!",
            "exampleFr": "Bonne nuit, à demain !" },
          { "pt": "Até logo", "fr": "À bientôt", "phonetic": "a-TE LO-go", "ptBR": "Até logo / Tchau", "example": "Até logo, amigo!",
            "exampleFr": "A plus tard, mon ami !" }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Comment dit-on 'Bonjour' le matin en portugais ?", "options": ["Boa noite", "Bom dia", "Boa tarde", "Olá"], "correct": 1, "explanation": "'Bom dia' = bon + jour. Utilisé le matin uniquement." },
      { "type": "mcq", "question": "Que signifie 'Boa tarde' ?", "options": ["Bonsoir", "Bonjour matin", "Bon après-midi", "À bientôt"], "correct": 2, "explanation": "'Boa tarde' s'utilise de l'après-midi jusqu'au coucher du soleil." },
      { "type": "translate", "question": "Traduisez : 'À bientôt'", "answer": "até logo" },
      { "type": "mcq", "question": "Quel mot utilise-t-on à n'importe quelle heure ?", "options": ["Bom dia", "Boa tarde", "Boa noite", "Olá"], "correct": 3, "explanation": "'Olá' est neutre et peut s'utiliser à toute heure du jour." }
    ]
  },
  {
    "id": "a1-1b",
    "level": "A1",
    "title": "Au revoir",
    "titlePT": "Despedidas",
    "icon": "🤝",
    "description": "Apprenez toutes les façons de dire au revoir en portugais.",
    "xp": 25,
    "sections": [
      {
        "title": "Prendre congé",
        "content": "Le portugais offre plusieurs formules pour se dire au revoir selon la situation et la durée de séparation.",
        "vocabulary": [
          { "pt": "Adeus", "fr": "Au revoir (définitif)", "phonetic": "a-DE-ush", "ptBR": "Adeus", "example": "Adeus, boa viagem!",
            "exampleFr": "Au revoir, bon voyage !" },
          { "pt": "Até amanhã", "fr": "À demain", "phonetic": "a-TE a-ma-NHANG", "ptBR": "Até amanhã", "example": "Boa noite! Até amanhã.",
            "exampleFr": "Bonne nuit! À demain." },
          { "pt": "Até já", "fr": "À tout à l'heure", "phonetic": "a-TE ja", "ptBR": "Até já", "example": "Volto em cinco minutos. Até já!",
            "exampleFr": "Je reviens dans cinq minutes. À bientôt!" },
          { "pt": "Tchau", "fr": "Salut / Bye (informel)", "phonetic": "TCHAO", "ptBR": "Tchau", "example": "Tchau, até logo!",
            "exampleFr": "Au revoir, à plus tard !" }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Comment dit-on 'À demain' en portugais ?", "options": ["Até já", "Adeus", "Até amanhã", "Tchau"], "correct": 2, "explanation": "'Até amanhã' = 'até' (jusqu'à) + 'amanhã' (demain)." },
      { "type": "mcq", "question": "Quelle expression s'utilise pour une séparation définitive ?", "options": ["Tchau", "Até já", "Até logo", "Adeus"], "correct": 3, "explanation": "'Adeus' implique une séparation longue ou définitive. Attention à ne pas l'utiliser pour 'à tout à l'heure' !" },
      { "type": "translate", "question": "Traduisez : 'À tout à l'heure'", "answer": "até já" }
    ]
  },
  {
    "id": "a1-1c",
    "level": "A1",
    "title": "La politesse",
    "titlePT": "A cortesia",
    "icon": "🙏",
    "description": "Maîtrisez les formules de politesse indispensables du quotidien.",
    "xp": 35,
    "sections": [
      {
        "title": "Être poli en portugais",
        "content": "Ces expressions sont indispensables au quotidien. Le portugais est une langue très polie !",
        "vocabulary": [
          { "pt": "Obrigado", "fr": "Merci (homme)", "phonetic": "o-bri-GA-do", "ptBR": "Obrigado", "example": "Obrigado pela ajuda!",
            "exampleFr": "Merci pour l'aide!" },
          { "pt": "Obrigada", "fr": "Merci (femme)", "phonetic": "o-bri-GA-da", "ptBR": "Obrigada", "example": "Obrigada, você é muito gentil!",
            "exampleFr": "Merci, vous êtes très gentil!" },
          { "pt": "Por favor", "fr": "S'il vous plaît", "phonetic": "por fa-VOR", "ptBR": "Por favor", "example": "Um café, por favor.",
            "exampleFr": "Un café, s'il vous plaît." },
          { "pt": "De nada", "fr": "De rien", "phonetic": "de NA-da", "ptBR": "De nada", "example": "— Obrigado! — De nada!",
            "exampleFr": "- Merci! - Vous êtes les bienvenus!" },
          { "pt": "Desculpe", "fr": "Excusez-moi / Pardon", "phonetic": "des-KUL-pe", "ptBR": "Desculpa / Com licença", "example": "Desculpe, onde fica o museu?",
            "exampleFr": "Désolé, où est le musée ?" }
        ]
      },
      {
        "type": "note",
        "title": "Tu vs Você — Comment s'adresser à quelqu'un ?",
        "content": "En portugais, il existe deux façons de dire 'tu' :<br><br><table><tr><th>Forme</th><th>Utilisation</th><th>Exemple</th></tr><tr><td><strong>tu</strong></td><td>Informel, avec amis et famille (Portugal)</td><td>Como estás tu?</td></tr><tr><td><strong>você</strong></td><td>Formel (PT) ou standard (BR)</td><td>Como está você?</td></tr></table><br>💡 Au Brésil, <strong>você</strong> est utilisé partout, même avec les amis. Au Portugal, <strong>tu</strong> est réservé aux proches."
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Qu'est-ce que 'Obrigada' signifie ?", "options": ["Pardon", "S'il vous plaît", "Merci (dit par une femme)", "De rien"], "correct": 2, "explanation": "En portugais, 'merci' s'accorde : Obrigado (homme) / Obrigada (femme)." },
      { "type": "mcq", "question": "Que répond-on à 'Obrigado' ?", "options": ["Por favor", "De nada", "Tudo bem", "Desculpe"], "correct": 1, "explanation": "'De nada' = 'De rien'. C'est la réponse standard à 'obrigado/obrigada'." },
      { "type": "translate", "question": "Traduisez : 'S'il vous plaît'", "answer": "por favor" },
      { "type": "mcq", "question": "Comment dire 'Excusez-moi / Pardon' en portugais ?", "options": ["De nada", "Obrigado", "Desculpe", "Por favor"], "correct": 2, "explanation": "'Desculpe' s'utilise pour s'excuser ou attirer l'attention de quelqu'un." }
    ]
  },
  {
    "id": "a1-1d",
    "level": "A1",
    "title": "Comment ça va ?",
    "titlePT": "Como vai?",
    "icon": "😊",
    "description": "Demandez et répondez comment vous allez — la base de toute conversation !",
    "xp": 35,
    "sections": [
      {
        "title": "Demander des nouvelles",
        "content": "Apprenez à demander et répondre comment vous allez — la base de toute conversation !",
        "vocabulary": [
          { "pt": "Tudo bem?", "fr": "Tout va bien ?", "phonetic": "TU-do beng", "ptBR": "Tudo bem?", "example": "Olá! Tudo bem?",
            "exampleFr": "Bonjour! Tout va bien ?" },
          { "pt": "Como está?", "fr": "Comment allez-vous ? (formel)", "phonetic": "KO-mo es-TA", "ptBR": "Como vai?", "example": "Como está, senhor Diretor?",
            "exampleFr": "Comment allez-vous, directeur ?" },
          { "pt": "Muito bem", "fr": "Très bien", "phonetic": "MUI-to beng", "ptBR": "Muito bem", "example": "Estou muito bem, obrigado!",
            "exampleFr": "Je vais très bien, merci !" },
          { "pt": "Mais ou menos", "fr": "Comme ci comme ça", "phonetic": "maish o ME-nosh", "ptBR": "Mais ou menos", "example": "— Como vai? — Mais ou menos...",
            "exampleFr": "- Comment vas-tu? - Plus ou moins..." },
          { "pt": "Estou bem", "fr": "Je vais bien", "phonetic": "esh-TO beng", "ptBR": "Estou bem", "example": "Estou bem, obrigado pela pergunta!",
            "exampleFr": "Je vais bien, merci pour la question !" }
        ]
      },
      {
        "type": "conversation",
        "title": "Dialogue : Rencontre matinale",
        "setup": "Paulo croise son amie Ana dans la rue un matin.",
        "speakers": [
          { "name": "Paulo", "avatar": "👨🏻" },
          { "name": "Ana",   "avatar": "👩🏽" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Bom dia, Ana!", "fr": "Bonjour, Ana !", "hl": ["Bom dia"], "hlFr": ["Bonjour"] },
          { "speaker": 1, "pt": "Bom dia, Paulo! Tudo bem?", "fr": "Bonjour, Paulo ! Ça va ?", "hl": ["Bom dia", "Tudo bem"], "hlFr": ["Bonjour", "Ça va ?"] },
          { "speaker": 0, "pt": "Muito bem, ___! E você?", "fr": "Très bien, ___ ! Et toi ?", "blank": "obrigado", "options": ["obrigado", "obrigada", "de nada", "desculpe"] },
          { "speaker": 1, "pt": "Estou ___! Até logo, Paulo.", "fr": "Je vais ___ ! À bientôt, Paulo.", "blank": "bem", "options": ["bem", "mal", "cansada", "ocupada"] }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Comment répondre à 'Tudo bem?' affirmativement ?", "options": ["De nada", "Por favor", "Tudo bem!", "Desculpe"], "correct": 2, "explanation": "On répond 'Tudo bem!' (Tout va bien !) à la question 'Tudo bem?'." },
      { "type": "mcq", "question": "Que signifie 'Mais ou menos' ?", "options": ["Très bien", "Pas du tout", "Comme ci comme ça", "Comment ça va ?"], "correct": 2, "explanation": "'Mais ou menos' est l'équivalent exact de 'comme ci comme ça' en français." },
      { "type": "translate", "question": "Traduisez : 'Comment allez-vous ?'", "answer": "como está" },
      { "type": "mcq", "question": "Comment dit-on 'Je vais bien' ?", "options": ["Muito bem", "Estou bem", "Tudo bem?", "Como vai?"], "correct": 1, "explanation": "'Estou bem' = Je vais bien. 'Estou' vient du verbe 'estar' (être — état temporaire)." }
    ]
  },
  {
    "id": "a1-2a",
    "level": "A1",
    "title": "Se présenter",
    "titlePT": "Apresentar-se",
    "icon": "🙋",
    "description": "Dites qui vous êtes et faites connaissance en portugais.",
    "xp": 30,
    "sections": [
      {
        "title": "Dire son nom",
        "content": "Pour vous présenter en portugais, vous avez plusieurs formules possibles.",
        "vocabulary": [
          { "pt": "Chamo-me...", "fr": "Je m'appelle...", "phonetic": "SHA-mo me", "ptBR": "Me chamo... / Meu nome é...", "example": "Chamo-me Marie.",
            "exampleFr": "Je m'appelle Marie." },
          { "pt": "O meu nome é...", "fr": "Mon nom est...", "phonetic": "o meu NO-me e", "ptBR": "Meu nome é...", "example": "O meu nome é João.",
            "exampleFr": "Je m'appelle João." },
          { "pt": "Prazer!", "fr": "Enchanté(e) !", "phonetic": "pra-ZER", "ptBR": "Prazer!", "example": "— Chamo-me Ana. — Prazer!",
            "exampleFr": "— Je m'appelle Ana. - Bon!" },
          { "pt": "Muito prazer!", "fr": "Très enchanté(e) !", "phonetic": "MUI-to pra-ZER", "ptBR": "Muito prazer!", "example": "Muito prazer em conhecê-lo!",
            "exampleFr": "Très heureux de vous rencontrer!" },
          { "pt": "Sou de...", "fr": "Je suis de...", "phonetic": "so de", "ptBR": "Sou de...", "example": "Sou de Paris.",
            "exampleFr": "Je viens de Paris." }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Comment dit-on 'Je m'appelle' en portugais européen ?", "options": ["Me chamo", "Chamo-me", "Sou chamado", "O nome meu é"], "correct": 1, "explanation": "Au Portugal on dit 'Chamo-me...'. Au Brésil, on préfère 'Me chamo...' ou 'Meu nome é...'." },
      { "type": "translate", "question": "Traduisez : 'Enchanté !'", "answer": "prazer" },
      { "type": "mcq", "question": "Comment dit-on 'Je suis de Lyon' ?", "options": ["Moro em Lyon", "Falo Lyon", "Sou de Lyon", "Venho Lyon"], "correct": 2, "explanation": "'Sou de...' = Je suis de... (origine)." },
      { "type": "mcq", "question": "Quelle phrase est une réponse polie à 'Prazer' ?", "options": ["De nada", "Igualmente", "Obrigado", "Até logo"], "correct": 1, "explanation": "'Igualmente' = De même / Pareillement. Réponse idéale à 'Prazer !'." }
    ]
  },
  {
    "id": "a1-2b",
    "level": "A1",
    "title": "Parler de soi",
    "titlePT": "Falar de si",
    "icon": "💬",
    "description": "Dites votre âge, votre métier et où vous habitez.",
    "xp": 40,
    "sections": [
      {
        "title": "Informations personnelles",
        "content": "Apprenez à donner des informations essentielles sur vous-même.",
        "vocabulary": [
          { "pt": "Tenho X anos", "fr": "J'ai X ans", "phonetic": "TE-nyo a-nosh", "ptBR": "Tenho X anos", "example": "Tenho vinte e cinco anos.",
            "exampleFr": "J'ai vingt-cinq ans." },
          { "pt": "Falo francês", "fr": "Je parle français", "phonetic": "FA-lo fran-SESH", "ptBR": "Falo francês", "example": "Falo francês e um pouco de português.",
            "exampleFr": "Je parle français et un peu portugais." },
          { "pt": "Trabalho em...", "fr": "Je travaille à / dans...", "phonetic": "tra-BA-lyo eng", "ptBR": "Trabalho em...", "example": "Trabalho em Paris, numa empresa francesa.",
            "exampleFr": "Je travaille à Paris, dans une entreprise française." },
          { "pt": "Sou estudante", "fr": "Je suis étudiant(e)", "phonetic": "so esh-tu-DAN-te", "ptBR": "Sou estudante", "example": "Sou estudante de medicina.",
            "exampleFr": "Je suis étudiant en médecine." },
          { "pt": "Moro em...", "fr": "J'habite à...", "phonetic": "MO-ro eng", "ptBR": "Moro em...", "example": "Moro em Lisboa.",
            "exampleFr": "J'habite à Lisbonne." }
        ]
      },
      {
        "type": "note",
        "title": "Le verbe TER (avoir) — pour l'âge",
        "content": "En portugais, l'âge se dit avec le verbe <strong>ter</strong> (avoir), pas <strong>ser</strong> (être) :<br><br><table><tr><th>Portugais</th><th>Français</th></tr><tr><td>Eu <strong>tenho</strong> 25 anos</td><td>J'<strong>ai</strong> 25 ans</td></tr><tr><td>Ele <strong>tem</strong> 30 anos</td><td>Il <strong>a</strong> 30 ans</td></tr><tr><td>Ela <strong>tem</strong> 18 anos</td><td>Elle <strong>a</strong> 18 ans</td></tr></table><br>💡 Attention : on ne dit <strong>jamais</strong> 'Sou 25 anos' (Je suis 25 ans). Toujours 'Tenho 25 anos'."
      },
      {
        "type": "conversation",
        "title": "Dialogue : Première rencontre",
        "setup": "Marie et João se rencontrent lors d'une fête à Lisbonne.",
        "speakers": [
          { "name": "Marie", "avatar": "👩🏼" },
          { "name": "João",  "avatar": "👨🏽" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Olá! Chamo-me Marie. Sou de Paris.", "fr": "Bonjour ! Je m'appelle Marie. Je suis de Paris.", "hl": ["Chamo-me", "Sou de"], "hlFr": ["Je m'appelle", "Je suis de"] },
          { "speaker": 1, "pt": "Prazer, Marie! O meu nome é João.", "fr": "Enchanté, Marie ! Mon nom est João.", "hl": ["Prazer", "O meu nome é"], "hlFr": ["Enchanté", "Mon nom est"] },
          { "speaker": 0, "pt": "___ vinte e três anos. E você?", "fr": "J'ai vingt-trois ans. Et vous ?", "blank": "Tenho", "options": ["Tenho", "Sou", "Falo", "Moro"] },
          { "speaker": 1, "pt": "Tenho trinta anos. Moro em ___!", "fr": "J'ai trente ans. J'habite à ___ !", "blank": "Lisboa", "options": ["Lisboa", "Porto", "Braga", "Faro"] }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Comment dit-on 'J'ai 30 ans' ?", "options": ["Sou 30 anos", "Tenho 30 anos", "Faço 30 anos", "Estou 30 anos"], "correct": 1, "explanation": "'Tenho' vient du verbe 'ter' (avoir). On dit 'Tenho X anos'." },
      { "type": "mcq", "question": "Comment dit-on 'J'habite à Lisbonne' ?", "options": ["Sou Lisboa", "Falo Lisboa", "Moro em Lisboa", "Estou Lisboa"], "correct": 2, "explanation": "'Moro em...' = J'habite à... Le verbe 'morar' signifie 'habiter, résider'." },
      { "type": "translate", "question": "Traduisez : 'Je parle français'", "answer": "falo francês" },
      { "type": "mcq", "question": "Comment dit-on 'Je travaille dans une école' ?", "options": ["Estudo numa escola", "Trabalho numa escola", "Moro numa escola", "Falo numa escola"], "correct": 1, "explanation": "'Trabalho' vient du verbe 'trabalhar' (travailler). 'Numa' = 'em uma' (dans une)." },
      { "type": "translate", "question": "Traduisez : 'Je suis étudiant'", "answer": "sou estudante" }
    ]
  },
  {
    "id": "a1-3a",
    "level": "A1",
    "title": "Les chiffres 0–10",
    "titlePT": "Os números 0–10",
    "icon": "🔢",
    "description": "Apprenez à compter de zéro à dix en portugais.",
    "xp": 30,
    "sections": [
      {
        "title": "De zéro à dix",
        "content": "Les chiffres de 0 à 10 sont à apprendre par cœur — ils sont la base de tout !",
        "vocabulary": [
          { "pt": "zero", "fr": "0", "phonetic": "ZE-ro", "ptBR": "zero" },
          { "pt": "um / uma", "fr": "1", "phonetic": "ung / U-ma", "ptBR": "um / uma" },
          { "pt": "dois / duas", "fr": "2", "phonetic": "doish / DU-ash", "ptBR": "dois / duas" },
          { "pt": "três", "fr": "3", "phonetic": "tresh", "ptBR": "três" },
          { "pt": "quatro", "fr": "4", "phonetic": "KUA-tro", "ptBR": "quatro" },
          { "pt": "cinco", "fr": "5", "phonetic": "SING-ko", "ptBR": "cinco" },
          { "pt": "seis", "fr": "6", "phonetic": "seish", "ptBR": "seis" },
          { "pt": "sete", "fr": "7", "phonetic": "SE-te", "ptBR": "sete" },
          { "pt": "oito", "fr": "8", "phonetic": "OI-to", "ptBR": "oito" },
          { "pt": "nove", "fr": "9", "phonetic": "NO-ve", "ptBR": "nove" },
          { "pt": "dez", "fr": "10", "phonetic": "desh", "ptBR": "dez" }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Comment dit-on '7' en portugais ?", "options": ["seis", "oito", "sete", "nove"], "correct": 2, "explanation": "'Sete' = 7. À ne pas confondre avec 'seis' (6) ou 'oito' (8)." },
      { "type": "translate", "question": "Traduisez : 'cinq'", "answer": "cinco" },
      { "type": "mcq", "question": "Combien font 'três' + 'dois' ?", "options": ["quatro", "cinco", "seis", "sete"], "correct": 1, "explanation": "Três (3) + dois (2) = cinco (5) !" },
      { "type": "translate", "question": "Traduisez : 'dix'", "answer": "dez" }
    ]
  },
  {
    "id": "a1-3b",
    "level": "A1",
    "title": "Les chiffres 11–20",
    "titlePT": "Os números 11–20",
    "icon": "🔢",
    "description": "Apprenez à compter de onze à vingt en portugais.",
    "xp": 30,
    "sections": [
      {
        "title": "De onze à vingt",
        "content": "De 11 à 20, chaque chiffre a son propre nom à apprendre par cœur.",
        "vocabulary": [
          { "pt": "onze", "fr": "11", "phonetic": "ON-ze", "ptBR": "onze" },
          { "pt": "doze", "fr": "12", "phonetic": "DO-ze", "ptBR": "doze" },
          { "pt": "treze", "fr": "13", "phonetic": "TRE-ze", "ptBR": "treze" },
          { "pt": "catorze", "fr": "14", "phonetic": "ka-TOR-ze", "ptBR": "quatorze" },
          { "pt": "quinze", "fr": "15", "phonetic": "KING-ze", "ptBR": "quinze" },
          { "pt": "dezasseis", "fr": "16", "phonetic": "de-za-SEISH", "ptBR": "dezesseis" },
          { "pt": "dezassete", "fr": "17", "phonetic": "de-za-SE-te", "ptBR": "dezessete" },
          { "pt": "dezoito", "fr": "18", "phonetic": "de-ZOI-to", "ptBR": "dezoito" },
          { "pt": "dezanove", "fr": "19", "phonetic": "de-za-NO-ve", "ptBR": "dezenove" },
          { "pt": "vinte", "fr": "20", "phonetic": "VING-te", "ptBR": "vinte" }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Comment dit-on 'quinze' en portugais ?", "options": ["catorze", "dezasseis", "quinze", "treze"], "correct": 2, "explanation": "'Quinze' se dit pareil en français et en portugais !" },
      { "type": "translate", "question": "Traduisez : 'dix-huit'", "answer": "dezoito" },
      { "type": "mcq", "question": "Quel chiffre est 'doze' ?", "options": ["10", "11", "12", "13"], "correct": 2, "explanation": "'Doze' = 12. C'est une douzaine en portugais aussi !" },
      { "type": "translate", "question": "Traduisez : 'vingt'", "answer": "vinte" }
    ]
  },
  {
    "id": "a1-3c",
    "level": "A1",
    "title": "Les dizaines",
    "titlePT": "As dezenas",
    "icon": "💯",
    "description": "Comptez par dizaines jusqu'à cent et formez des nombres composés.",
    "xp": 35,
    "sections": [
      {
        "title": "Les dizaines",
        "content": "À partir de 20, les nombres se forment avec 'e' (et) : vinte e um = 21",
        "vocabulary": [
          { "pt": "trinta", "fr": "30", "phonetic": "TRING-ta", "ptBR": "trinta" },
          { "pt": "quarenta", "fr": "40", "phonetic": "kua-RENG-ta", "ptBR": "quarenta" },
          { "pt": "cinquenta", "fr": "50", "phonetic": "sing-KUENG-ta", "ptBR": "cinquenta" },
          { "pt": "sessenta", "fr": "60", "phonetic": "se-SENG-ta", "ptBR": "sessenta" },
          { "pt": "setenta", "fr": "70", "phonetic": "se-TENG-ta", "ptBR": "setenta" },
          { "pt": "oitenta", "fr": "80", "phonetic": "oi-TENG-ta", "ptBR": "oitenta" },
          { "pt": "noventa", "fr": "90", "phonetic": "no-VENG-ta", "ptBR": "noventa" },
          { "pt": "cem", "fr": "100", "phonetic": "seng", "ptBR": "cem" }
        ]
      },
      {
        "type": "conversation",
        "title": "Dialogue : Chez le boulanger",
        "setup": "Carlos entre dans une padaria (boulangerie) pour acheter du pain.",
        "speakers": [
          { "name": "Carlos", "avatar": "👨🏻" },
          { "name": "Padeiro", "avatar": "👨🏾" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Bom dia! Quero comprar pão, por favor.", "fr": "Bonjour ! Je voudrais acheter du pain, s'il vous plaît.", "hl": ["Bom dia", "por favor"], "hlFr": ["Bonjour", "s'il vous plaît"] },
          { "speaker": 1, "pt": "Claro! Quantos pães quer?", "fr": "Bien sûr ! Combien de pains voulez-vous ?", "hl": ["Quantos"], "hlFr": ["Combien"] },
          { "speaker": 0, "pt": "Quero ___ pães, por favor.", "fr": "Je voudrais ___ pains, s'il vous plaît.", "blank": "dois", "options": ["dois", "três", "um", "cinco"] },
          { "speaker": 1, "pt": "Mais alguma coisa?", "fr": "Autre chose ?", "hl": ["Mais alguma coisa"], "hlFr": ["Autre chose ?"] },
          { "speaker": 0, "pt": "Não, ___. Quanto custa?", "fr": "Non, ___. Combien ça coûte ?", "blank": "obrigado", "options": ["obrigado", "por favor", "desculpe", "com licença"] }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Comment dit-on '100' en portugais ?", "options": ["cento", "mil", "cem", "noventa"], "correct": 2, "explanation": "'Cem' = 100. Attention : 'cento' s'utilise avec des compléments : cento e um = 101." },
      { "type": "translate", "question": "Traduisez : 'trente'", "answer": "trinta" },
      { "type": "mcq", "question": "Que signifie 'vinte e cinco' ?", "options": ["25", "52", "15", "20"], "correct": 0, "explanation": "'Vinte' = 20, 'e' = et, 'cinco' = 5. Donc vinte e cinco = 25." },
      { "type": "translate", "question": "Traduisez : 'soixante-dix'", "answer": "setenta" }
    ]
  },
  {
    "id": "a1-1",
    "level": "A1",
    "hidden": true,
    "title": "Les salutations",
    "titlePT": "As saudações",
    "icon": "👋",
    "description": "Apprenez à dire bonjour, au revoir et les formules de politesse essentielles.",
    "xp": 50,
    "sections": [
      {
        "title": "Bonjour et au revoir",
        "content": "En portugais, les salutations varient selon le moment de la journée — comme en français !",
        "vocabulary": [
          {
            "pt": "Olá",
            "fr": "Salut / Bonjour",
            "phonetic": "o-LA",
            "ptBR": "Olá",
            "example": "Olá, tudo bem?",
            "exampleFr": "Bonjour tout va bien ?"
          },
          {
            "pt": "Bom dia",
            "fr": "Bonjour (matin)",
            "phonetic": "bom DI-a",
            "ptBR": "Bom dia",
            "example": "Bom dia, senhor Silva!",
            "exampleFr": "Bonjour, Monsieur Silva!"
          },
          {
            "pt": "Boa tarde",
            "fr": "Bon après-midi",
            "phonetic": "boa TAR-de",
            "ptBR": "Boa tarde",
            "example": "Boa tarde, como vai?",
            "exampleFr": "Bonjour, comment vas-tu ?"
          },
          {
            "pt": "Boa noite",
            "fr": "Bonsoir / Bonne nuit",
            "phonetic": "boa NOI-te",
            "ptBR": "Boa noite",
            "example": "Boa noite, até amanhã!",
            "exampleFr": "Bonne nuit, à demain !"
          },
          {
            "pt": "Até logo",
            "fr": "À bientôt",
            "phonetic": "a-TE LO-go",
            "ptBR": "Até logo / Tchau",
            "example": "Até logo, amigo!",
            "exampleFr": "A plus tard, mon ami !"
          },
          {
            "pt": "Adeus",
            "fr": "Au revoir (définitif)",
            "phonetic": "a-DE-ush",
            "ptBR": "Adeus",
            "example": "Adeus, boa viagem!",
            "exampleFr": "Au revoir, bon voyage !"
          },
          {
            "pt": "Até amanhã",
            "fr": "À demain",
            "phonetic": "a-TE a-ma-NHANG",
            "ptBR": "Até amanhã",
            "example": "Boa noite! Até amanhã.",
            "exampleFr": "Bonne nuit! À demain."
          },
          {
            "pt": "Até já",
            "fr": "À tout à l'heure",
            "phonetic": "a-TE ja",
            "ptBR": "Até já",
            "example": "Volto em cinco minutos. Até já!",
            "exampleFr": "Je reviens dans cinq minutes. À bientôt!"
          },
          {
            "pt": "Tchau",
            "fr": "Salut / Bye (informel)",
            "phonetic": "TCHAO",
            "ptBR": "Tchau",
            "example": "Tchau, até logo!",
            "exampleFr": "Au revoir, à plus tard !"
          }
        ]
      },
      {
        "title": "La politesse",
        "content": "Ces expressions sont indispensables au quotidien. Le portugais est une langue très polie !",
        "vocabulary": [
          {
            "pt": "Obrigado",
            "fr": "Merci (homme)",
            "phonetic": "o-bri-GA-do",
            "ptBR": "Obrigado",
            "example": "Obrigado pela ajuda!",
            "exampleFr": "Merci pour l'aide!"
          },
          {
            "pt": "Obrigada",
            "fr": "Merci (femme)",
            "phonetic": "o-bri-GA-da",
            "ptBR": "Obrigada",
            "example": "Obrigada, você é muito gentil!",
            "exampleFr": "Merci, vous êtes très gentil!"
          },
          {
            "pt": "Por favor",
            "fr": "S'il vous plaît",
            "phonetic": "por fa-VOR",
            "ptBR": "Por favor",
            "example": "Um café, por favor.",
            "exampleFr": "Un café, s'il vous plaît."
          },
          {
            "pt": "De nada",
            "fr": "De rien",
            "phonetic": "de NA-da",
            "ptBR": "De nada",
            "example": "— Obrigado! — De nada!",
            "exampleFr": "- Merci! - Vous êtes les bienvenus!"
          },
          {
            "pt": "Desculpe",
            "fr": "Excusez-moi / Pardon",
            "phonetic": "des-KUL-pe",
            "ptBR": "Desculpa / Com licença",
            "example": "Desculpe, onde fica o museu?",
            "exampleFr": "Désolé, où est le musée ?"
          },
          {
            "pt": "Com licença",
            "fr": "Excusez-moi (passage)",
            "phonetic": "com li-SEN-sa",
            "ptBR": "Com licença",
            "example": "Com licença, posso passar?",
            "exampleFr": "Excusez-moi, puis-je passer ?"
          },
          {
            "pt": "Perdão",
            "fr": "Pardon / Je suis désolé(e)",
            "phonetic": "per-DANG",
            "ptBR": "Perdão / Desculpa",
            "example": "Perdão, não ouvi bem.",
            "exampleFr": "Désolé, je ne vous ai pas bien entendu."
          },
          {
            "pt": "Faz favor",
            "fr": "S'il vous plaît (PT uniquement)",
            "phonetic": "fash fa-VOR",
            "ptBR": "Por favor",
            "example": "Um café, faz favor.",
            "exampleFr": "Un café, s'il vous plaît."
          },
          {
            "pt": "Bem-vindo / Bem-vinda",
            "fr": "Bienvenu / Bienvenue",
            "phonetic": "beng-VIN-do / beng-VIN-da",
            "ptBR": "Bem-vindo / Bem-vinda",
            "example": "Bem-vinda a Portugal!",
            "exampleFr": "Bienvenue au Portugal !"
          }
        ]
      },
      {
        "title": "Comment ça va ?",
        "content": "Apprenez à demander et répondre comment vous allez — la base de toute conversation !",
        "vocabulary": [
          {
            "pt": "Tudo bem?",
            "fr": "Tout va bien ?",
            "phonetic": "TU-do beng",
            "ptBR": "Tudo bem?",
            "example": "Olá! Tudo bem?",
            "exampleFr": "Bonjour! Tout va bien ?"
          },
          {
            "pt": "Tudo bem!",
            "fr": "Tout va bien !",
            "phonetic": "TU-do beng",
            "ptBR": "Tudo bem!",
            "example": "— Tudo bem? — Tudo bem, obrigado!",
            "exampleFr": "- Tout va bien ? — Très bien, merci !"
          },
          {
            "pt": "Como está?",
            "fr": "Comment allez-vous ? (formel)",
            "phonetic": "KO-mo es-TA",
            "ptBR": "Como vai?",
            "example": "Como está, senhor Diretor?",
            "exampleFr": "Comment allez-vous, directeur ?"
          },
          {
            "pt": "Como vai?",
            "fr": "Comment vas-tu ? (informel)",
            "phonetic": "KO-mo vai",
            "ptBR": "Como vai?",
            "example": "Oi, como vai?",
            "exampleFr": "Salut comment vas-tu?"
          },
          {
            "pt": "Muito bem",
            "fr": "Très bien",
            "phonetic": "MUI-to beng",
            "ptBR": "Muito bem",
            "example": "Estou muito bem, obrigado!",
            "exampleFr": "Je vais très bien, merci !"
          },
          {
            "pt": "Mais ou menos",
            "fr": "Comme ci comme ça",
            "phonetic": "maish o ME-nosh",
            "ptBR": "Mais ou menos",
            "example": "— Como vai? — Mais ou menos...",
            "exampleFr": "- Comment vas-tu? - Plus ou moins..."
          },
          {
            "pt": "Estou bem",
            "fr": "Je vais bien",
            "phonetic": "esh-TO beng",
            "ptBR": "Estou bem",
            "example": "Estou bem, obrigado pela pergunta!",
            "exampleFr": "Je vais bien, merci pour la question !"
          },
          {
            "pt": "Não estou muito bem",
            "fr": "Je ne vais pas très bien",
            "phonetic": "nang esh-TO MUI-to beng",
            "ptBR": "Não estou muito bem",
            "example": "Hoje não estou muito bem...",
            "exampleFr": "Aujourd'hui, je ne vais pas très bien..."
          },
          {
            "pt": "E tu? / E você?",
            "fr": "Et toi ? / Et vous ?",
            "phonetic": "e tu / e vo-SE",
            "ptBR": "E você?",
            "example": "Estou bem. E tu?",
            "exampleFr": "Je vais bien. Et toi?"
          }
        ]
      },
      {
        "type": "note",
        "title": "Tu vs Você — Comment s'adresser à quelqu'un ?",
        "content": "En portugais, il existe deux façons de dire 'tu' :<br><br><table><tr><th>Forme</th><th>Utilisation</th><th>Exemple</th></tr><tr><td><strong>tu</strong></td><td>Informel, avec amis et famille (Portugal)</td><td>Como estás tu?</td></tr><tr><td><strong>você</strong></td><td>Formel (PT) ou standard (BR)</td><td>Como está você?</td></tr></table><br>💡 Au Brésil, <strong>você</strong> est utilisé partout, même avec les amis. Au Portugal, <strong>tu</strong> est réservé aux proches."
      },
      {
        "type": "conversation",
        "title": "Dialogue : Rencontre matinale",
        "setup": "Paulo croise son amie Ana dans la rue un matin.",
        "speakers": [
          { "name": "Paulo", "avatar": "👨🏻" },
          { "name": "Ana",   "avatar": "👩🏽" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Bom dia, Ana!", "fr": "Bonjour, Ana !", "hl": ["Bom dia"], "hlFr": ["Bonjour"] },
          { "speaker": 1, "pt": "Bom dia, Paulo! Tudo bem?", "fr": "Bonjour, Paulo ! Ça va ?", "hl": ["Bom dia", "Tudo bem"], "hlFr": ["Bonjour", "Ça va ?"] },
          { "speaker": 0, "pt": "Muito bem, ___! E você?", "fr": "Très bien, ___ ! Et toi ?", "blank": "obrigado", "options": ["obrigado", "obrigada", "de nada", "desculpe"] },
          { "speaker": 1, "pt": "Estou ___! Até logo, Paulo.", "fr": "Je vais ___ ! À bientôt, Paulo.", "blank": "bem", "options": ["bem", "mal", "cansada", "ocupada"] }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Comment dit-on 'Bonjour' le matin en portugais ?",
        "options": [
          "Boa noite",
          "Bom dia",
          "Boa tarde",
          "Olá"
        ],
        "correct": 1,
        "explanation": "'Bom dia' signifie 'Bonjour' le matin (bon + jour)."
      },
      {
        "type": "mcq",
        "question": "Qu'est-ce que 'Obrigada' signifie ?",
        "options": [
          "Pardon",
          "S'il vous plaît",
          "Merci (dit par une femme)",
          "De rien"
        ],
        "correct": 2,
        "explanation": "En portugais, 'merci' s'accorde : Obrigado (homme) / Obrigada (femme)."
      },
      {
        "type": "mcq",
        "question": "Comment répondre à 'Tudo bem?' affirmativement ?",
        "options": [
          "De nada",
          "Por favor",
          "Tudo bem!",
          "Desculpe"
        ],
        "correct": 2,
        "explanation": "On répond 'Tudo bem!' (Tout va bien !) à la question 'Tudo bem?'."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'S'il vous plaît'",
        "answer": "por favor"
      },
      {
        "type": "translate",
        "question": "Traduisez : 'Au revoir'",
        "answer": "adeus"
      },
      {
        "type": "mcq",
        "question": "Quelle expression utilise-t-on uniquement au Portugal pour 's'il vous plaît' ?",
        "options": ["Por favor", "Faz favor", "Obrigado", "Com licença"],
        "correct": 1,
        "explanation": "'Faz favor' est typiquement portugais. Au Brésil, on dit uniquement 'por favor'."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'À demain'",
        "answer": "até amanhã"
      },
      {
        "type": "mcq",
        "question": "Que répond-on à 'Obrigado' ?",
        "options": ["Por favor", "De nada", "Tudo bem", "Desculpe"],
        "correct": 1,
        "explanation": "'De nada' = 'De rien'. C'est la réponse standard à 'obrigado/obrigada'."
      },
      {
        "type": "cloze",
        "sentence": "Bom dia! Como ___?",
        "answer": "está",
        "hint": "Comment allez-vous ? (formel)"
      },
      {
        "type": "mcq",
        "question": "Au Brésil, comment dit-on 'au revoir' de façon informelle ?",
        "options": ["Adeus", "Até logo", "Tchau", "Boa tarde"],
        "correct": 2,
        "explanation": "'Tchau' (de l'italien 'ciao') est très courant au Brésil pour dire au revoir entre amis."
      }
    ]
  },
  {
    "id": "a1-2",
    "level": "A1",
    "hidden": true,
    "title": "Se présenter",
    "titlePT": "Apresentar-se",
    "icon": "🙋",
    "description": "Dites qui vous êtes, d'où vous venez, quel âge vous avez.",
    "xp": 60,
    "sections": [
      {
        "title": "Dire son nom",
        "content": "Pour vous présenter en portugais, vous avez plusieurs formules possibles.",
        "vocabulary": [
          {
            "pt": "Chamo-me...",
            "fr": "Je m'appelle...",
            "phonetic": "SHA-mo me",
            "ptBR": "Me chamo... / Meu nome é...",
            "example": "Chamo-me Marie.",
            "exampleFr": "Je m'appelle Marie."
          },
          {
            "pt": "O meu nome é...",
            "fr": "Mon nom est...",
            "phonetic": "o meu NO-me e",
            "ptBR": "Meu nome é...",
            "example": "O meu nome é João.",
            "exampleFr": "Je m'appelle João."
          },
          {
            "pt": "Prazer!",
            "fr": "Enchanté(e) !",
            "phonetic": "pra-ZER",
            "ptBR": "Prazer!",
            "example": "— Chamo-me Ana. — Prazer!",
            "exampleFr": "— Je m'appelle Ana. - Bon!"
          },
          {
            "pt": "Muito prazer!",
            "fr": "Très enchanté(e) !",
            "phonetic": "MUI-to pra-ZER",
            "ptBR": "Muito prazer!",
            "example": "Muito prazer em conhecê-lo!",
            "exampleFr": "Très heureux de vous rencontrer!"
          },
          {
            "pt": "Permite apresentar-me?",
            "fr": "Permettez-moi de me présenter",
            "phonetic": "per-MI-te a-pre-zen-TAR-me",
            "ptBR": "Deixa eu me apresentar",
            "example": "Permite apresentar-me? Sou a diretora Silva.",
            "exampleFr": "Permettez-moi de me présenter ? Je suis le réalisateur Silva."
          },
          {
            "pt": "É um prazer conhecê-lo/la",
            "fr": "C'est un plaisir de vous rencontrer",
            "phonetic": "e ung pra-ZER ko-nye-SE-lo/la",
            "ptBR": "É um prazer te conhecer",
            "example": "É um prazer conhecê-la, senhora Dupont.",
            "exampleFr": "C'est un plaisir de vous rencontrer, Mme Dupont."
          },
          {
            "pt": "Igualmente",
            "fr": "De même / Pareillement",
            "phonetic": "i-gual-MEN-te",
            "ptBR": "Igualmente",
            "example": "— Muito prazer! — Igualmente!",
            "exampleFr": "- Grand plaisir ! - De même!"
          }
        ]
      },
      {
        "title": "L'âge et l'origine",
        "content": "Apprenez à dire votre âge et d'où vous venez.",
        "vocabulary": [
          {
            "pt": "Tenho X anos",
            "fr": "J'ai X ans",
            "phonetic": "TE-nyo a-nosh",
            "ptBR": "Tenho X anos",
            "example": "Tenho vinte e cinco anos.",
            "exampleFr": "J'ai vingt-cinq ans."
          },
          {
            "pt": "Sou de...",
            "fr": "Je suis de...",
            "phonetic": "so de",
            "ptBR": "Sou de...",
            "example": "Sou de Paris.",
            "exampleFr": "Je viens de Paris."
          },
          {
            "pt": "Sou francês/francesa",
            "fr": "Je suis français(e)",
            "phonetic": "so fran-SESH / fran-SE-za",
            "ptBR": "Sou francês/francesa",
            "example": "Sou francesa, de Lyon.",
            "exampleFr": "Je suis française, originaire de Lyon."
          },
          {
            "pt": "Moro em...",
            "fr": "J'habite à...",
            "phonetic": "MO-ro eng",
            "ptBR": "Moro em...",
            "example": "Moro em Lisboa.",
            "exampleFr": "J'habite à Lisbonne."
          },
          {
            "pt": "Falo francês",
            "fr": "Je parle français",
            "phonetic": "FA-lo fran-SESH",
            "ptBR": "Falo francês",
            "example": "Falo francês e um pouco de português.",
            "exampleFr": "Je parle français et un peu portugais."
          },
          {
            "pt": "Trabalho em...",
            "fr": "Je travaille à / dans...",
            "phonetic": "tra-BA-lyo eng",
            "ptBR": "Trabalho em...",
            "example": "Trabalho em Paris, numa empresa francesa.",
            "exampleFr": "Je travaille à Paris, dans une entreprise française."
          },
          {
            "pt": "Sou estudante",
            "fr": "Je suis étudiant(e)",
            "phonetic": "so esh-tu-DAN-te",
            "ptBR": "Sou estudante",
            "example": "Sou estudante de medicina.",
            "exampleFr": "Je suis étudiant en médecine."
          },
          {
            "pt": "Falo um pouco de português",
            "fr": "Je parle un peu de portugais",
            "phonetic": "FA-lo ung PO-ko de por-tu-GESH",
            "ptBR": "Falo um pouco de português",
            "example": "Falo um pouco de português, estou a aprender!",
            "exampleFr": "Je parle un peu portugais, j'apprends !"
          },
          {
            "pt": "Não falo bem português",
            "fr": "Je ne parle pas bien portugais",
            "phonetic": "nang FA-lo beng",
            "ptBR": "Não falo bem português",
            "example": "Desculpe, não falo bem português ainda.",
            "exampleFr": "Désolé, je ne parle pas encore bien le portugais."
          }
        ]
      },
      {
        "type": "note",
        "title": "Le verbe TER (avoir) — pour l'âge",
        "content": "En portugais, l'âge se dit avec le verbe <strong>ter</strong> (avoir), pas <strong>ser</strong> (être) :<br><br><table><tr><th>Portugais</th><th>Français</th></tr><tr><td>Eu <strong>tenho</strong> 25 anos</td><td>J'<strong>ai</strong> 25 ans</td></tr><tr><td>Ele <strong>tem</strong> 30 anos</td><td>Il <strong>a</strong> 30 ans</td></tr><tr><td>Ela <strong>tem</strong> 18 anos</td><td>Elle <strong>a</strong> 18 ans</td></tr></table><br>💡 Attention : on ne dit <strong>jamais</strong> 'Sou 25 anos' (Je suis 25 ans). Toujours 'Tenho 25 anos'."
      },
      {
        "type": "conversation",
        "title": "Dialogue : Première rencontre",
        "setup": "Marie et João se rencontrent lors d'une fête à Lisbonne.",
        "speakers": [
          { "name": "Marie", "avatar": "👩🏼" },
          { "name": "João",  "avatar": "👨🏽" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Olá! Chamo-me Marie. Sou de Paris.", "fr": "Bonjour ! Je m'appelle Marie. Je suis de Paris.", "hl": ["Chamo-me", "Sou de"], "hlFr": ["Je m'appelle", "Je suis de"] },
          { "speaker": 1, "pt": "Prazer, Marie! O meu nome é João.", "fr": "Enchanté, Marie ! Mon nom est João.", "hl": ["Prazer", "O meu nome é"], "hlFr": ["Enchanté", "Mon nom est"] },
          { "speaker": 0, "pt": "___ vinte e três anos. E você?", "fr": "J'ai vingt-trois ans. Et vous ?", "blank": "Tenho", "options": ["Tenho", "Sou", "Falo", "Moro"] },
          { "speaker": 1, "pt": "Tenho trinta anos. Moro em ___!", "fr": "J'ai trente ans. J'habite à ___ !", "blank": "Lisboa", "options": ["Lisboa", "Porto", "Braga", "Faro"] }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Comment dit-on 'Je m'appelle' en portugais brésilien ?",
        "options": [
          "Chamo-me",
          "Me chamo",
          "Sou chamado",
          "Nome meu é"
        ],
        "correct": 1,
        "explanation": "Au Brésil on dit 'Me chamo...' ou 'Meu nome é...', au Portugal 'Chamo-me...'"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'J'ai 30 ans' ?",
        "options": [
          "Sou 30 anos",
          "Tenho 30 anos",
          "Faço 30 anos",
          "Estou 30 anos"
        ],
        "correct": 1,
        "explanation": "'Tenho' vient du verbe 'ter' (avoir). On dit 'Tenho X anos'."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'Je suis enchanté(e)'",
        "answer": "prazer"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'J'habite à Lisbonne' ?",
        "options": [
          "Sou Lisboa",
          "Falo Lisboa",
          "Moro em Lisboa",
          "Estou Lisboa"
        ],
        "correct": 2,
        "explanation": "'Moro em...' = J'habite à... Le verbe 'morar' signifie 'habiter, résider'."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'Je parle français'",
        "answer": "falo francês"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'Je travaille dans une école' ?",
        "options": [
          "Estudo numa escola",
          "Trabalho numa escola",
          "Moro numa escola",
          "Falo numa escola"
        ],
        "correct": 1,
        "explanation": "'Trabalho' vient du verbe 'trabalhar' (travailler). 'Numa' = 'em uma' (dans une)."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'Je suis étudiant'",
        "answer": "sou estudante"
      },
      {
        "type": "mcq",
        "question": "Quelle phrase est correcte pour 'J'ai 20 ans' ?",
        "options": [
          "Sou vinte anos",
          "Estou com vinte anos",
          "Tenho vinte anos",
          "Faço vinte anos"
        ],
        "correct": 2,
        "explanation": "'Tenho vinte anos' est la forme standard. 'Faço anos' signifie 'c'est mon anniversaire'."
      },
      {
        "type": "cloze",
        "sentence": "___ em Lisboa, numa empresa portuguesa.",
        "answer": "trabalho",
        "hint": "Je travaille à Lisbonne..."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'De même !'",
        "answer": "igualmente"
      }
    ]
  },
  {
    "id": "a1-3",
    "level": "A1",
    "hidden": true,
    "title": "Les chiffres",
    "titlePT": "Os números",
    "icon": "🔢",
    "description": "Comptez de 0 à 100 en portugais.",
    "xp": 55,
    "sections": [
      {
        "title": "0 à 20",
        "content": "Les chiffres de 0 à 20 sont à apprendre par cœur — ils sont la base de tout !",
        "vocabulary": [
          {
            "pt": "zero",
            "fr": "0",
            "phonetic": "ZE-ro",
            "ptBR": "zero"
          },
          {
            "pt": "um / uma",
            "fr": "1",
            "phonetic": "ung / U-ma",
            "ptBR": "um / uma"
          },
          {
            "pt": "dois / duas",
            "fr": "2",
            "phonetic": "doish / DU-ash",
            "ptBR": "dois / duas"
          },
          {
            "pt": "três",
            "fr": "3",
            "phonetic": "tresh",
            "ptBR": "três"
          },
          {
            "pt": "quatro",
            "fr": "4",
            "phonetic": "KUA-tro",
            "ptBR": "quatro"
          },
          {
            "pt": "cinco",
            "fr": "5",
            "phonetic": "SING-ko",
            "ptBR": "cinco"
          },
          {
            "pt": "seis",
            "fr": "6",
            "phonetic": "seish",
            "ptBR": "seis"
          },
          {
            "pt": "sete",
            "fr": "7",
            "phonetic": "SE-te",
            "ptBR": "sete"
          },
          {
            "pt": "oito",
            "fr": "8",
            "phonetic": "OI-to",
            "ptBR": "oito"
          },
          {
            "pt": "nove",
            "fr": "9",
            "phonetic": "NO-ve",
            "ptBR": "nove"
          },
          {
            "pt": "dez",
            "fr": "10",
            "phonetic": "desh",
            "ptBR": "dez"
          },
          {
            "pt": "onze",
            "fr": "11",
            "phonetic": "ON-ze",
            "ptBR": "onze"
          },
          {
            "pt": "doze",
            "fr": "12",
            "phonetic": "DO-ze",
            "ptBR": "doze"
          },
          {
            "pt": "treze",
            "fr": "13",
            "phonetic": "TRE-ze",
            "ptBR": "treze"
          },
          {
            "pt": "catorze",
            "fr": "14",
            "phonetic": "ka-TOR-ze",
            "ptBR": "quatorze"
          },
          {
            "pt": "quinze",
            "fr": "15",
            "phonetic": "KING-ze",
            "ptBR": "quinze"
          },
          {
            "pt": "dezasseis",
            "fr": "16",
            "phonetic": "de-za-SEISH",
            "ptBR": "dezesseis"
          },
          {
            "pt": "dezassete",
            "fr": "17",
            "phonetic": "de-za-SE-te",
            "ptBR": "dezessete"
          },
          {
            "pt": "dezoito",
            "fr": "18",
            "phonetic": "de-ZOI-to",
            "ptBR": "dezoito"
          },
          {
            "pt": "dezanove",
            "fr": "19",
            "phonetic": "de-za-NO-ve",
            "ptBR": "dezenove"
          },
          {
            "pt": "vinte",
            "fr": "20",
            "phonetic": "VING-te",
            "ptBR": "vinte"
          }
        ]
      },
      {
        "title": "Les dizaines",
        "content": "À partir de 20, les nombres se forment avec 'e' (et) : vinte e um = 21",
        "vocabulary": [
          {
            "pt": "trinta",
            "fr": "30",
            "phonetic": "TRING-ta",
            "ptBR": "trinta"
          },
          {
            "pt": "quarenta",
            "fr": "40",
            "phonetic": "kua-RENG-ta",
            "ptBR": "quarenta"
          },
          {
            "pt": "cinquenta",
            "fr": "50",
            "phonetic": "sing-KUENG-ta",
            "ptBR": "cinquenta"
          },
          {
            "pt": "sessenta",
            "fr": "60",
            "phonetic": "se-SENG-ta",
            "ptBR": "sessenta"
          },
          {
            "pt": "setenta",
            "fr": "70",
            "phonetic": "se-TENG-ta",
            "ptBR": "setenta"
          },
          {
            "pt": "oitenta",
            "fr": "80",
            "phonetic": "oi-TENG-ta",
            "ptBR": "oitenta"
          },
          {
            "pt": "noventa",
            "fr": "90",
            "phonetic": "no-VENG-ta",
            "ptBR": "noventa"
          },
          {
            "pt": "cem",
            "fr": "100",
            "phonetic": "seng",
            "ptBR": "cem"
          }
        ]
      },
      {
        "type": "conversation",
        "title": "Dialogue : Chez le boulanger",
        "setup": "Carlos entre dans une padaria (boulangerie) pour acheter du pain.",
        "speakers": [
          { "name": "Carlos", "avatar": "👨🏻" },
          { "name": "Padeiro", "avatar": "👨🏾" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Bom dia! Quero comprar pão, por favor.", "fr": "Bonjour ! Je voudrais acheter du pain, s'il vous plaît.", "hl": ["Bom dia", "por favor"], "hlFr": ["Bonjour", "s'il vous plaît"] },
          { "speaker": 1, "pt": "Claro! Quantos pães quer?", "fr": "Bien sûr ! Combien de pains voulez-vous ?", "hl": ["Quantos"], "hlFr": ["Combien"] },
          { "speaker": 0, "pt": "Quero ___ pães, por favor.", "fr": "Je voudrais ___ pains, s'il vous plaît.", "blank": "dois", "options": ["dois", "três", "um", "cinco"] },
          { "speaker": 1, "pt": "Mais alguma coisa?", "fr": "Autre chose ?", "hl": ["Mais alguma coisa"], "hlFr": ["Autre chose ?"] },
          { "speaker": 0, "pt": "Não, ___. Quanto custa?", "fr": "Non, ___. Combien ça coûte ?", "blank": "obrigado", "options": ["obrigado", "por favor", "desculpe", "com licença"] }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Comment dit-on 'quinze' en portugais ?",
        "options": [
          "catorze",
          "dezasseis",
          "quinze",
          "treze"
        ],
        "correct": 2,
        "explanation": "'Quinze' se dit pareil en français et en portugais !"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on '100' en portugais ?",
        "options": [
          "cento",
          "mil",
          "cem",
          "noventa"
        ],
        "correct": 2,
        "explanation": "'Cem' = 100. Attention : 'cento' s'utilise avec des compléments : cento e um = 101."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'sept'",
        "answer": "sete"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on '1000' en portugais ?",
        "options": [
          "cento",
          "cem",
          "duzentos",
          "mil"
        ],
        "correct": 3,
        "explanation": "'Mil' = 1000. Ex: dois mil = 2000."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'trente'",
        "answer": "trinta"
      },
      {
        "type": "mcq",
        "question": "Que signifie 'vinte e cinco' ?",
        "options": [
          "25",
          "52",
          "15",
          "20"
        ],
        "correct": 0,
        "explanation": "'Vinte' = 20, 'e' = et, 'cinco' = 5. Donc vinte e cinco = 25."
      },
      {
        "type": "conversation",
        "title": "Dialogue : Chez le boulanger",
        "setup": "Carlos entre dans une padaria (boulangerie) et commande du pain.",
        "speakers": [
          { "name": "Carlos", "avatar": "👨🏻" },
          { "name": "Padeiro", "avatar": "👨🏾" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Bom dia! Quero pão, por favor.", "fr": "Bonjour ! Je voudrais du pain, s'il vous plaît.", "hl": ["pão"], "hlFr": ["pain"] },
          { "speaker": 1, "pt": "Quantos pães você quer?", "fr": "Combien de pains voulez-vous ?", "hl": ["Quantos"], "hlFr": ["Combien"] },
          { "speaker": 0, "pt": "Quero ___ pães, por favor.", "fr": "Je veux ___ pains, s'il vous plaît.", "blank": "dois", "options": ["dois", "três", "um", "cinco"] },
          { "speaker": 1, "pt": "São dois reais, ___.", "fr": "C'est deux reais, ___.", "blank": "obrigado", "options": ["obrigado", "obrigada", "por favor", "desculpe"] },
          { "speaker": 0, "pt": "Aqui está. Até logo!", "fr": "Voilà. À bientôt !", "hl": ["Até"], "hlFr": ["À bientôt"] }
        ]
      }
    ]
  },
  {
    "id": "a1-4",
    "level": "A1",
    "title": "Jours, mois et saisons",
    "titlePT": "Dias, meses e estações",
    "icon": "📅",
    "description": "Maîtrisez le calendrier en portugais.",
    "xp": 60,
    "sections": [
      {
        "title": "Les jours de la semaine",
        "content": "Une particularité fascinante : en portugais, les jours de la semaine sont numérotés ! Lundi = deuxième jour de la semaine liturgique.",
        "vocabulary": [
          {
            "pt": "segunda-feira",
            "fr": "lundi",
            "phonetic": "se-GUNG-da-FEI-ra",
            "ptBR": "segunda-feira",
            "example": "A reunião é na segunda-feira.",
            "exampleFr": "La réunion est lundi."
          },
          {
            "pt": "terça-feira",
            "fr": "mardi",
            "phonetic": "TER-sa-FEI-ra",
            "ptBR": "terça-feira",
            "example": "Tenho aula na terça.",
            "exampleFr": "J'ai cours mardi."
          },
          {
            "pt": "quarta-feira",
            "fr": "mercredi",
            "phonetic": "KUAR-ta-FEI-ra",
            "ptBR": "quarta-feira",
            "example": "Na quarta há mercado.",
            "exampleFr": "Le mercredi, il y a un marché."
          },
          {
            "pt": "quinta-feira",
            "fr": "jeudi",
            "phonetic": "KING-ta-FEI-ra",
            "ptBR": "quinta-feira",
            "example": "Saímos na quinta à noite.",
            "exampleFr": "Nous sommes partis jeudi soir."
          },
          {
            "pt": "sexta-feira",
            "fr": "vendredi",
            "phonetic": "SESH-ta-FEI-ra",
            "ptBR": "sexta-feira",
            "example": "Sexta-feira é véspera do fim de semana!",
            "exampleFr": "Vendredi, c'est la veille du week-end !"
          },
          {
            "pt": "sábado",
            "fr": "samedi",
            "phonetic": "SA-ba-do",
            "ptBR": "sábado",
            "example": "Ao sábado vou à praia.",
            "exampleFr": "Samedi, je vais à la plage."
          },
          {
            "pt": "domingo",
            "fr": "dimanche",
            "phonetic": "do-MING-go",
            "ptBR": "domingo",
            "example": "Domingo é dia de família.",
            "exampleFr": "Le dimanche est le jour de la famille."
          }
        ]
      },
      {
        "title": "Les mois",
        "content": "Les mois ressemblent beaucoup au français — facile à retenir !",
        "vocabulary": [
          {
            "pt": "janeiro",
            "fr": "janvier",
            "phonetic": "ja-NEI-ro",
            "ptBR": "janeiro"
          },
          {
            "pt": "fevereiro",
            "fr": "février",
            "phonetic": "fe-ve-REI-ro",
            "ptBR": "fevereiro"
          },
          {
            "pt": "março",
            "fr": "mars",
            "phonetic": "MAR-so",
            "ptBR": "março"
          },
          {
            "pt": "abril",
            "fr": "avril",
            "phonetic": "a-BRIL",
            "ptBR": "abril"
          },
          {
            "pt": "maio",
            "fr": "mai",
            "phonetic": "MAI-o",
            "ptBR": "maio"
          },
          {
            "pt": "junho",
            "fr": "juin",
            "phonetic": "JU-nyo",
            "ptBR": "junho"
          },
          {
            "pt": "julho",
            "fr": "juillet",
            "phonetic": "JU-lyo",
            "ptBR": "julho"
          },
          {
            "pt": "agosto",
            "fr": "août",
            "phonetic": "a-GOS-to",
            "ptBR": "agosto"
          },
          {
            "pt": "setembro",
            "fr": "septembre",
            "phonetic": "se-TENG-bro",
            "ptBR": "setembro"
          },
          {
            "pt": "outubro",
            "fr": "octobre",
            "phonetic": "ou-TU-bro",
            "ptBR": "outubro"
          },
          {
            "pt": "novembro",
            "fr": "novembre",
            "phonetic": "no-VENG-bro",
            "ptBR": "novembro"
          },
          {
            "pt": "dezembro",
            "fr": "décembre",
            "phonetic": "de-ZENG-bro",
            "ptBR": "dezembro"
          }
        ]
      },
      {
        "title": "Les saisons",
        "content": "Attention : au Brésil, les saisons sont inversées par rapport à l'Europe !",
        "vocabulary": [
          {
            "pt": "a primavera",
            "fr": "le printemps",
            "phonetic": "a pri-ma-VE-ra",
            "ptBR": "a primavera",
            "example": "A primavera começa em março.",
            "exampleFr": "Le printemps commence en mars."
          },
          {
            "pt": "o verão",
            "fr": "l'été",
            "phonetic": "o ve-RAONG",
            "ptBR": "o verão",
            "example": "No verão vamos à praia.",
            "exampleFr": "L'été, nous allons à la plage."
          },
          {
            "pt": "o outono",
            "fr": "l'automne",
            "phonetic": "o o-TO-no",
            "ptBR": "o outono",
            "example": "As folhas caem no outono.",
            "exampleFr": "Les feuilles tombent en automne."
          },
          {
            "pt": "o inverno",
            "fr": "l'hiver",
            "phonetic": "o ing-VER-no",
            "ptBR": "o inverno",
            "example": "O inverno em Lisboa é suave.",
            "exampleFr": "L'hiver à Lisbonne est doux."
          }
        ]
      },
      {
        "type": "conversation",
        "title": "Dialogue : Présenter sa famille",
        "setup": "Sofia montre des photos à son ami Pedro.",
        "speakers": [
          { "name": "Sofia", "avatar": "👩🏽" },
          { "name": "Pedro", "avatar": "👦🏻" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Pedro, olha! Esta é a minha família.", "fr": "Pedro, regarde ! Voici ma famille.", "hl": ["família"], "hlFr": ["famille"] },
          { "speaker": 1, "pt": "Que bonita família! Quem é esta menina?", "fr": "Quelle belle famille ! Qui est cette fille ?", "hl": ["família"], "hlFr": ["famille"] },
          { "speaker": 0, "pt": "É a minha ___. Chama-se Lara.", "fr": "C'est ma ___. Elle s'appelle Lara.", "blank": "irmã", "options": ["irmã", "mãe", "filha", "tia"] },
          { "speaker": 1, "pt": "Que giro! E o teu irmão?", "fr": "C'est mignon ! Et ton frère ?", "hl": ["irmão"], "hlFr": ["frère"] },
          { "speaker": 0, "pt": "O meu ___ mora em Lisboa.", "fr": "Mon ___ habite à Lisbonne.", "blank": "irmão", "options": ["irmão", "pai", "tio", "primo"] }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Comment dit-on 'vendredi' en portugais ?",
        "options": [
          "quinta-feira",
          "sábado",
          "sexta-feira",
          "segunda-feira"
        ],
        "correct": 2,
        "explanation": "'Sexta-feira' = vendredi (6ème jour de la semaine liturgique)."
      },
      {
        "type": "mcq",
        "question": "Quel mois correspond à 'setembro' ?",
        "options": [
          "juillet",
          "août",
          "septembre",
          "octobre"
        ],
        "correct": 2,
        "explanation": "'Setembro' ressemble à 'septembre' — facile à mémoriser !"
      },
      {
        "type": "translate",
        "question": "Traduisez : 'l'été'",
        "answer": "o verão"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'dimanche' en portugais ?",
        "options": [
          "sábado",
          "segunda-feira",
          "domingo",
          "sexta-feira"
        ],
        "correct": 2,
        "explanation": "'Domingo' = dimanche. C'est le seul jour qui ne porte pas de numéro en portugais !"
      },
      {
        "type": "translate",
        "question": "Traduisez : 'janvier'",
        "answer": "janeiro"
      },
      {
        "type": "conversation",
        "title": "Dialogue : Présenter sa famille",
        "setup": "Sofia montre des photos de sa famille à son ami Pedro.",
        "speakers": [
          { "name": "Sofia", "avatar": "👩🏽" },
          { "name": "Pedro", "avatar": "👦🏻" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Pedro, olha! Esta é minha família.", "fr": "Pedro, regarde ! Voici ma famille.", "hl": ["família"], "hlFr": ["famille"] },
          { "speaker": 1, "pt": "Quem é essa pessoa aqui?", "fr": "Qui est cette personne ici ?", "hl": ["Quem"], "hlFr": ["Qui"] },
          { "speaker": 0, "pt": "Este é meu irmão e esta é minha ___.", "fr": "C'est mon frère et c'est ma ___.", "blank": "irmã", "options": ["irmã", "mãe", "filha", "tia"] },
          { "speaker": 1, "pt": "Que família bonita! Você tem mais ___?", "fr": "Quelle belle famille ! Vous avez d'autres ___ ?", "blank": "irmãos", "options": ["irmãos", "primos", "amigos", "filhos"] },
          { "speaker": 0, "pt": "Não, somos só três.", "fr": "Non, nous sommes seulement trois.", "hl": ["três"], "hlFr": ["trois"] }
        ]
      }
    ]
  },
  {
    "id": "a1-5",
    "level": "A1",
    "title": "Les couleurs",
    "titlePT": "As cores",
    "icon": "🎨",
    "description": "Apprenez les couleurs et leurs accords en genre.",
    "xp": 45,
    "sections": [
      {
        "title": "Les couleurs principales",
        "content": "En portugais, les couleurs s'accordent en genre (masculin/féminin) et en nombre, comme les adjectifs.",
        "vocabulary": [
          {
            "pt": "vermelho / vermelha",
            "fr": "rouge",
            "phonetic": "ver-ME-lyo / ver-ME-lya",
            "ptBR": "vermelho / vermelha",
            "example": "Uma rosa vermelha.",
            "exampleFr": "Une rose rouge."
          },
          {
            "pt": "azul",
            "fr": "bleu(e)",
            "phonetic": "a-ZUL",
            "ptBR": "azul",
            "example": "O céu é azul.",
            "exampleFr": "Le ciel est bleu."
          },
          {
            "pt": "verde",
            "fr": "vert(e)",
            "phonetic": "VER-de",
            "ptBR": "verde",
            "example": "Uma maçã verde.",
            "exampleFr": "Une pomme verte."
          },
          {
            "pt": "amarelo / amarela",
            "fr": "jaune",
            "phonetic": "a-ma-RE-lo / a-ma-RE-la",
            "ptBR": "amarelo / amarela",
            "example": "O sol é amarelo.",
            "exampleFr": "Le soleil est jaune."
          },
          {
            "pt": "branco / branca",
            "fr": "blanc(he)",
            "phonetic": "BRANG-ko / BRANG-ka",
            "ptBR": "branco / branca",
            "example": "Uma parede branca.",
            "exampleFr": "Un mur blanc."
          },
          {
            "pt": "preto / preta",
            "fr": "noir(e)",
            "phonetic": "PRE-to / PRE-ta",
            "ptBR": "preto / preta",
            "example": "Um gato preto.",
            "exampleFr": "Un chat noir."
          },
          {
            "pt": "cor-de-rosa",
            "fr": "rose",
            "phonetic": "kor de RO-za",
            "ptBR": "rosa",
            "example": "Uma flor cor-de-rosa.",
            "exampleFr": "Une fleur rose."
          },
          {
            "pt": "laranja",
            "fr": "orange",
            "phonetic": "la-RANG-ja",
            "ptBR": "laranja",
            "example": "O pôr-do-sol laranja.",
            "exampleFr": "Le coucher de soleil orange."
          },
          {
            "pt": "castanho / castanha",
            "fr": "marron",
            "phonetic": "kas-TA-nyo / kas-TA-nya",
            "ptBR": "marrom",
            "example": "Olhos castanhos.",
            "exampleFr": "Yeux marrons."
          },
          {
            "pt": "cinzento / cinzenta",
            "fr": "gris(e)",
            "phonetic": "sing-ZENG-to / sing-ZENG-ta",
            "ptBR": "cinza",
            "example": "Um dia cinzento.",
            "exampleFr": "Une journée grise."
          }
        ]
      },
      {
        "type": "conversation",
        "title": "Dialogue : Chez le magasin de vêtements",
        "setup": "Ana cherche une robe dans un magasin.",
        "speakers": [
          { "name": "Ana", "avatar": "👩🏻" },
          { "name": "Vendedor", "avatar": "🧑🏽" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Boa tarde! Procuro um vestido.", "fr": "Bon après-midi ! Je cherche une robe.", "hl": ["Boa tarde", "vestido"], "hlFr": ["Bon après-midi", "robe"] },
          { "speaker": 1, "pt": "Que cor prefere?", "fr": "Quelle couleur préférez-vous ?", "hl": ["cor"], "hlFr": ["couleur"] },
          { "speaker": 0, "pt": "Quero um vestido ___, por favor.", "fr": "Je voudrais une robe ___, s'il vous plaît.", "blank": "azul", "options": ["azul", "vermelho", "verde", "amarelo"] },
          { "speaker": 1, "pt": "Temos um vestido azul muito ___!", "fr": "Nous avons une robe bleue très ___ !", "blank": "bonito", "options": ["bonito", "feio", "caro", "simples"] },
          { "speaker": 0, "pt": "Perfeito! Posso experimentar?", "fr": "Parfait ! Puis-je l'essayer ?", "hl": ["Perfeito", "experimentar"], "hlFr": ["Parfait", "essayer"] }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Comment dit-on 'bleu' en portugais ?",
        "options": [
          "verde",
          "azul",
          "vermelho",
          "amarelo"
        ],
        "correct": 1,
        "explanation": "'Azul' = bleu. C'est aussi le nom des fameux carreaux portugais : les azulejos !"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'blanc' (masculin) ?",
        "options": [
          "branca",
          "branco",
          "branca",
          "brancos"
        ],
        "correct": 1,
        "explanation": "'Branco' (masculin), 'branca' (féminin). Les couleurs s'accordent en portugais."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'rouge'",
        "answer": "vermelho"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'marron' au Portugal ?",
        "options": [
          "laranja",
          "cinzento",
          "castanho",
          "amarelo"
        ],
        "correct": 2,
        "explanation": "'Castanho' = marron (couleur du marron, la châtaigne). Au Brésil, on dit 'marrom'."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'vert'",
        "answer": "verde"
      },
      {
        "type": "conversation",
        "title": "Dialogue : Chez le magasin de vêtements",
        "setup": "Ana cherche une robe dans un magasin de vêtements.",
        "speakers": [
          { "name": "Ana", "avatar": "👩🏻" },
          { "name": "Vendedor", "avatar": "🧑🏽" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Boa tarde! Estou procurando um vestido.", "fr": "Bon après-midi ! Je cherche une robe.", "hl": ["vestido"], "hlFr": ["robe"] },
          { "speaker": 1, "pt": "Que cor você prefere?", "fr": "Quelle couleur préférez-vous ?", "hl": ["cor"], "hlFr": ["couleur"] },
          { "speaker": 0, "pt": "Quero um vestido ___, por favor.", "fr": "Je veux une robe ___, s'il vous plaît.", "blank": "azul", "options": ["azul", "vermelho", "verde", "amarelo"] },
          { "speaker": 1, "pt": "Temos um lindo vestido azul. Qual é o seu ___?", "fr": "Nous avons une belle robe bleue. Quelle est votre ___ ?", "blank": "tamanho", "options": ["tamanho", "nome", "preço", "cor"] },
          { "speaker": 0, "pt": "Sou tamanho médio, obrigada!", "fr": "Je fais du taille moyenne, merci !", "hl": ["médio", "obrigada"], "hlFr": ["moyen", "merci"] }
        ]
      }
    ]
  },
  {
    "id": "a1-6",
    "level": "A1",
    "title": "La famille",
    "titlePT": "A família",
    "icon": "👨‍👩‍👧‍👦",
    "description": "Le vocabulaire de la famille en portugais.",
    "xp": 55,
    "sections": [
      {
        "title": "La famille proche",
        "content": "Les mots de famille sont très proches du français — vous les reconnaîtrez facilement !",
        "vocabulary": [
          {
            "pt": "o pai",
            "fr": "le père",
            "phonetic": "o pai",
            "ptBR": "o pai",
            "example": "O meu pai é médico.",
            "exampleFr": "Mon père est médecin."
          },
          {
            "pt": "a mãe",
            "fr": "la mère",
            "phonetic": "a maing",
            "ptBR": "a mãe",
            "example": "A minha mãe cozinha bem.",
            "exampleFr": "Ma mère cuisine bien."
          },
          {
            "pt": "o irmão",
            "fr": "le frère",
            "phonetic": "o ir-MAONG",
            "ptBR": "o irmão",
            "example": "Tenho um irmão mais velho.",
            "exampleFr": "J'ai un frère aîné."
          },
          {
            "pt": "a irmã",
            "fr": "la sœur",
            "phonetic": "a ir-MAONG",
            "ptBR": "a irmã",
            "example": "A minha irmã mora em Londres.",
            "exampleFr": "Ma sœur vit à Londres."
          },
          {
            "pt": "o avô",
            "fr": "le grand-père",
            "phonetic": "o a-VO",
            "ptBR": "o avô",
            "example": "O meu avô tem 80 anos.",
            "exampleFr": "Mon grand-père a 80 ans."
          },
          {
            "pt": "a avó",
            "fr": "la grand-mère",
            "phonetic": "a a-VO",
            "ptBR": "a avó",
            "example": "A avó faz bolos deliciosos.",
            "exampleFr": "Grand-mère prépare de délicieux gâteaux."
          },
          {
            "pt": "o filho",
            "fr": "le fils",
            "phonetic": "o FI-lyo",
            "ptBR": "o filho",
            "example": "O meu filho tem três anos.",
            "exampleFr": "Mon fils a trois ans."
          },
          {
            "pt": "a filha",
            "fr": "la fille",
            "phonetic": "a FI-lya",
            "ptBR": "a filha",
            "example": "A filha mais velha estuda medicina.",
            "exampleFr": "La fille aînée étudie la médecine."
          },
          {
            "pt": "o tio",
            "fr": "l'oncle",
            "phonetic": "o TI-o",
            "ptBR": "o tio",
            "example": "O meu tio vive no Brasil.",
            "exampleFr": "Mon oncle vit au Brésil."
          },
          {
            "pt": "a tia",
            "fr": "la tante",
            "phonetic": "a TI-a",
            "ptBR": "a tia",
            "example": "A tia Ana é muito divertida.",
            "exampleFr": "Tante Ana est très amusante."
          },
          {
            "pt": "o primo / a prima",
            "fr": "le cousin / la cousine",
            "phonetic": "o PRI-mo / a PRI-ma",
            "ptBR": "o primo / a prima",
            "example": "Tenho muitos primos.",
            "exampleFr": "J'ai beaucoup de cousins."
          },
          {
            "pt": "o marido",
            "fr": "le mari",
            "phonetic": "o ma-RI-do",
            "ptBR": "o marido",
            "example": "O meu marido é professor.",
            "exampleFr": "Mon mari est enseignant."
          },
          {
            "pt": "a mulher",
            "fr": "la femme (épouse)",
            "phonetic": "a mu-LYER",
            "ptBR": "a esposa / a mulher",
            "example": "A minha mulher é dentista.",
            "exampleFr": "Ma femme est dentiste."
          }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Comment dit-on 'la mère' en portugais ?",
        "options": [
          "a pai",
          "a irmã",
          "a mãe",
          "a filha"
        ],
        "correct": 2,
        "explanation": "'A mãe' = la mère. Le son 'ã' est un son nasal typique du portugais."
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'le frère' ?",
        "options": [
          "o pai",
          "o irmão",
          "o filho",
          "o primo"
        ],
        "correct": 1,
        "explanation": "'O irmão' = le frère. 'Irmã' = la sœur."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'le grand-père'",
        "answer": "o avô"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'la femme (épouse)' ?",
        "options": [
          "a filha",
          "a mãe",
          "a mulher",
          "a prima"
        ],
        "correct": 2,
        "explanation": "'A mulher' = la femme/épouse. Au Brésil, on préfère 'a esposa' pour épouse."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'la tante'",
        "answer": "a tia"
      }
    ]
  },
  {
    "id": "a1-7",
    "level": "A1",
    "title": "SER et ESTAR",
    "titlePT": "SER e ESTAR",
    "icon": "⚖️",
    "description": "Maîtrisez les deux verbes 'être' du portugais — la clé de la langue.",
    "xp": 80,
    "sections": [
      {
        "title": "SER — l'être permanent",
        "content": "SER s'utilise pour les caractéristiques permanentes ou fondamentales : identité, origine, profession, nature des choses.",
        "vocabulary": [
          {
            "pt": "eu sou",
            "fr": "je suis",
            "phonetic": "e-u so",
            "ptBR": "eu sou",
            "example": "Eu sou francês.",
            "exampleFr": "Je suis français."
          },
          {
            "pt": "tu és",
            "fr": "tu es",
            "phonetic": "tu esh",
            "ptBR": "você é",
            "example": "Tu és simpático.",
            "exampleFr": "Tu es gentil."
          },
          {
            "pt": "ele/ela é",
            "fr": "il/elle est",
            "phonetic": "e-le / e-la e",
            "ptBR": "ele/ela é",
            "example": "Ela é médica.",
            "exampleFr": "Elle est médecin."
          },
          {
            "pt": "nós somos",
            "fr": "nous sommes",
            "phonetic": "nosh SO-mosh",
            "ptBR": "nós somos",
            "example": "Nós somos amigos.",
            "exampleFr": "Nous sommes amis."
          },
          {
            "pt": "vós sois",
            "fr": "vous êtes",
            "phonetic": "vosh soish",
            "ptBR": "vocês são",
            "example": "Vós sois portugueses?",
            "exampleFr": "Êtes-vous portugais?"
          },
          {
            "pt": "eles/elas são",
            "fr": "ils/elles sont",
            "phonetic": "E-lesh / E-lash saong",
            "ptBR": "eles/elas são",
            "example": "Eles são brasileiros.",
            "exampleFr": "Ce sont des Brésiliens."
          }
        ]
      },
      {
        "title": "ESTAR — l'état temporaire",
        "content": "ESTAR s'utilise pour les états temporaires, les émotions, les positions, la santé, les situations changeantes.",
        "vocabulary": [
          {
            "pt": "eu estou",
            "fr": "je suis (en ce moment)",
            "phonetic": "e-u esh-TO",
            "ptBR": "eu estou",
            "example": "Eu estou cansado.",
            "exampleFr": "Je suis fatigué."
          },
          {
            "pt": "tu estás",
            "fr": "tu es (en ce moment)",
            "phonetic": "tu esh-TASH",
            "ptBR": "você está",
            "example": "Tu estás feliz hoje?",
            "exampleFr": "Es-tu heureux aujourd'hui ?"
          },
          {
            "pt": "ele/ela está",
            "fr": "il/elle est (en ce moment)",
            "phonetic": "e-le esh-TA",
            "ptBR": "ele/ela está",
            "example": "Ela está em Lisboa.",
            "exampleFr": "Elle est à Lisbonne."
          },
          {
            "pt": "nós estamos",
            "fr": "nous sommes (en ce moment)",
            "phonetic": "nosh esh-TA-mosh",
            "ptBR": "nós estamos",
            "example": "Nós estamos em casa.",
            "exampleFr": "Nous sommes à la maison."
          },
          {
            "pt": "vós estais",
            "fr": "vous êtes (en ce moment)",
            "phonetic": "vosh esh-TAISH",
            "ptBR": "vocês estão",
            "example": "Vós estais prontos?",
            "exampleFr": "Es-tu prêt?"
          },
          {
            "pt": "eles/elas estão",
            "fr": "ils/elles sont (en ce moment)",
            "phonetic": "E-lesh esh-TAONG",
            "ptBR": "eles/elas estão",
            "example": "Eles estão ocupados.",
            "exampleFr": "Ils sont occupés."
          }
        ]
      },
      {
        "title": "SER vs ESTAR — les règles d'or",
        "content": "Voici le guide complet pour ne plus confondre SER et ESTAR !",
        "vocabulary": [
          {
            "pt": "SER: identité",
            "fr": "Sou João (Je suis João)",
            "phonetic": "",
            "ptBR": "SER: identité",
            "example": "Sou João, tenho 25 anos.",
            "exampleFr": "Je m'appelle João, j'ai 25 ans."
          },
          {
            "pt": "SER: nationalité",
            "fr": "Sou português (Je suis portugais)",
            "phonetic": "",
            "ptBR": "SER: nationalité",
            "example": "Ela é brasileira.",
            "exampleFr": "Elle est brésilienne."
          },
          {
            "pt": "SER: profession",
            "fr": "Sou professor (Je suis professeur)",
            "phonetic": "",
            "ptBR": "SER: profession",
            "example": "O pai é engenheiro.",
            "exampleFr": "Le père est ingénieur."
          },
          {
            "pt": "SER: heure/date",
            "fr": "São duas horas (Il est deux heures)",
            "phonetic": "",
            "ptBR": "SER: heure/date",
            "example": "Hoje é segunda-feira.",
            "exampleFr": "C'est lundi aujourd'hui."
          },
          {
            "pt": "ESTAR: émotions",
            "fr": "Estou feliz (Je suis heureux maintenant)",
            "phonetic": "",
            "ptBR": "ESTAR: émotions",
            "example": "Ela está triste hoje.",
            "exampleFr": "Elle est triste aujourd'hui."
          },
          {
            "pt": "ESTAR: localisation",
            "fr": "Estou em Paris (Je suis à Paris)",
            "phonetic": "",
            "ptBR": "ESTAR: localisation",
            "example": "O livro está na mesa.",
            "exampleFr": "Le livre est sur la table."
          },
          {
            "pt": "ESTAR: santé",
            "fr": "Estou doente (Je suis malade)",
            "phonetic": "",
            "ptBR": "ESTAR: santé",
            "example": "Estou muito bem, obrigado!",
            "exampleFr": "Je vais très bien, merci !"
          },
          {
            "pt": "ESTAR: état temporaire",
            "fr": "A janela está aberta (La fenêtre est ouverte)",
            "phonetic": "",
            "ptBR": "ESTAR: état temporaire",
            "example": "O café está quente.",
            "exampleFr": "Le café est chaud."
          }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Lequel utilise-t-on pour dire sa nationalité ?",
        "options": [
          "ESTAR",
          "SER",
          "Les deux",
          "Aucun"
        ],
        "correct": 1,
        "explanation": "La nationalité est une caractéristique permanente → on utilise SER : 'Sou francês.'"
      },
      {
        "type": "mcq",
        "question": "'Ela ___ cansada' (Elle est fatiguée). Quel verbe ?",
        "options": [
          "é",
          "está",
          "ser",
          "ser"
        ],
        "correct": 1,
        "explanation": "La fatigue est un état temporaire → ESTAR : 'Ela está cansada.'"
      },
      {
        "type": "mcq",
        "question": "'O café ___ quente' (Le café est chaud). Quel verbe ?",
        "options": [
          "é",
          "está",
          "são",
          "estão"
        ],
        "correct": 1,
        "explanation": "La chaleur du café est temporaire → ESTAR : 'O café está quente.'"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'nous sommes' avec ESTAR ?",
        "options": [
          "nós somos",
          "nós estamos",
          "nós são",
          "nós estão"
        ],
        "correct": 1,
        "explanation": "'Nós estamos' = nous sommes (état). 'Nós somos' = nous sommes (identité)."
      }
    ]
  },
  {
    "id": "a1-8",
    "level": "A1",
    "title": "Articles et genre",
    "titlePT": "Artigos e género",
    "icon": "📝",
    "description": "Les articles définis et indéfinis, le genre des noms.",
    "xp": 65,
    "sections": [
      {
        "title": "Articles définis",
        "content": "En portugais, il y a 4 articles définis selon le genre et le nombre.",
        "vocabulary": [
          {
            "pt": "o",
            "fr": "le (masculin singulier)",
            "phonetic": "o",
            "ptBR": "o",
            "example": "o livro (le livre)",
            "exampleFr": "le livre (lire gratuitement)"
          },
          {
            "pt": "a",
            "fr": "la (féminin singulier)",
            "phonetic": "a",
            "ptBR": "a",
            "example": "a casa (la maison)",
            "exampleFr": "la maison (la maison)"
          },
          {
            "pt": "os",
            "fr": "les (masculin pluriel)",
            "phonetic": "osh",
            "ptBR": "os",
            "example": "os livros (les livres)",
            "exampleFr": "les livres (les livres)"
          },
          {
            "pt": "as",
            "fr": "les (féminin pluriel)",
            "phonetic": "ash",
            "ptBR": "as",
            "example": "as casas (les maisons)",
            "exampleFr": "les maisons (les maisons)"
          }
        ]
      },
      {
        "title": "Articles indéfinis",
        "content": "Les articles indéfinis s'accordent aussi en genre et en nombre.",
        "vocabulary": [
          {
            "pt": "um",
            "fr": "un (masculin)",
            "phonetic": "ung",
            "ptBR": "um",
            "example": "um café (un café)",
            "exampleFr": "un café (un café)"
          },
          {
            "pt": "uma",
            "fr": "une (féminin)",
            "phonetic": "U-ma",
            "ptBR": "uma",
            "example": "uma mesa (une table)",
            "exampleFr": "une table (une table)"
          },
          {
            "pt": "uns",
            "fr": "des (masculin)",
            "phonetic": "ungsh",
            "ptBR": "uns",
            "example": "uns amigos (des amis)",
            "exampleFr": "quelques amis (des amis)"
          },
          {
            "pt": "umas",
            "fr": "des (féminin)",
            "phonetic": "U-mash",
            "ptBR": "umas",
            "example": "umas flores (des fleurs)",
            "exampleFr": "quelques fleurs (des fleurs)"
          }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Quel est l'article défini pour 'livro' (livre, masculin) ?",
        "options": [
          "a",
          "o",
          "as",
          "os"
        ],
        "correct": 1,
        "explanation": "'O livro' — le masculin singulier prend 'o'."
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'une fleur' ? (fleur = flor, féminin)",
        "options": [
          "um flor",
          "una flor",
          "uma flor",
          "o flor"
        ],
        "correct": 2,
        "explanation": "'Uma flor' — le féminin indéfini singulier prend 'uma'."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'les livres' (article défini)",
        "answer": "os livros"
      },
      {
        "type": "mcq",
        "question": "Quel article pour 'casas' (maisons) ?",
        "options": [
          "o",
          "a",
          "os",
          "as"
        ],
        "correct": 3,
        "explanation": "'As casas' = les maisons. Féminin pluriel → 'as'."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'un ami' (masculin)",
        "answer": "um amigo"
      }
    ]
  },
  {
    "id": "a2-1",
    "level": "A2",
    "title": "La nourriture",
    "titlePT": "A comida",
    "icon": "🍽️",
    "description": "Vocabulaire de la gastronomie portugaise et brésilienne.",
    "xp": 70,
    "sections": [
      {
        "title": "Les aliments de base",
        "content": "La gastronomie portugaise est mondialement reconnue — apprenons à en parler !",
        "vocabulary": [
          {
            "pt": "o pão",
            "fr": "le pain",
            "phonetic": "o paong",
            "ptBR": "o pão",
            "example": "Um pão com manteiga, por favor.",
            "exampleFr": "Du pain et du beurre, s'il vous plaît."
          },
          {
            "pt": "o peixe",
            "fr": "le poisson",
            "phonetic": "o PEI-she",
            "ptBR": "o peixe",
            "example": "O bacalhau é o peixe nacional português.",
            "exampleFr": "La morue est le poisson national portugais."
          },
          {
            "pt": "a carne",
            "fr": "la viande",
            "phonetic": "a KAR-ne",
            "ptBR": "a carne",
            "example": "Prefiro carne de frango.",
            "exampleFr": "Je préfère la viande de poulet."
          },
          {
            "pt": "o arroz",
            "fr": "le riz",
            "phonetic": "o a-ROSH",
            "ptBR": "o arroz",
            "example": "No Brasil, arroz e feijão são essenciais.",
            "exampleFr": "Au Brésil, le riz et les haricots sont essentiels."
          },
          {
            "pt": "o queijo",
            "fr": "le fromage",
            "phonetic": "o KEI-jo",
            "ptBR": "o queijo",
            "example": "Portugal tem queijos excelentes.",
            "exampleFr": "Le Portugal possède d'excellents fromages."
          },
          {
            "pt": "a fruta",
            "fr": "le fruit",
            "phonetic": "a FRU-ta",
            "ptBR": "a fruta",
            "example": "Como fruta todos os dias.",
            "exampleFr": "Je mange des fruits tous les jours."
          },
          {
            "pt": "o legume",
            "fr": "le légume",
            "phonetic": "o le-GU-me",
            "ptBR": "o legume / a verdura",
            "example": "Os legumes fazem bem à saúde.",
            "exampleFr": "Les légumes sont bons pour la santé."
          },
          {
            "pt": "o café",
            "fr": "le café",
            "phonetic": "o ka-FE",
            "ptBR": "o café",
            "example": "Um café por favor — un bica!",
            "exampleFr": "Un café s'il vous plaît — un bica !"
          },
          {
            "pt": "o vinho",
            "fr": "le vin",
            "phonetic": "o VI-nyo",
            "ptBR": "o vinho",
            "example": "O vinho português é famoso no mundo.",
            "exampleFr": "Le vin portugais est célèbre dans le monde entier."
          },
          {
            "pt": "a água",
            "fr": "l'eau",
            "phonetic": "a A-gua",
            "ptBR": "a água",
            "example": "Pode trazer água, por favor?",
            "exampleFr": "Pouvez-vous apporter de l'eau, s'il vous plaît ?"
          }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Comment dit-on 'le pain' en portugais ?",
        "options": [
          "o peixe",
          "o pão",
          "o queijo",
          "o arroz"
        ],
        "correct": 1,
        "explanation": "'O pão' = le pain. Note le son nasal 'ão' !"
      },
      {
        "type": "translate",
        "question": "Traduisez : 'le vin'",
        "answer": "o vinho"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'l'eau' en portugais ?",
        "options": [
          "o vinho",
          "o café",
          "a água",
          "o suco"
        ],
        "correct": 2,
        "explanation": "'A água' = l'eau. Attention : bien que 'água' commence par 'a', l'article 'a' se maintient."
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'le fromage' ?",
        "options": [
          "a fruta",
          "o peixe",
          "o arroz",
          "o queijo"
        ],
        "correct": 3,
        "explanation": "'O queijo' = le fromage. Le Portugal est réputé pour ses excellents fromages !"
      },
      {
        "type": "conversation",
        "title": "Dialogue : Collègues au bureau",
        "setup": "João et Mariana parlent de leur journée de travail au bureau.",
        "speakers": [
          { "name": "João", "avatar": "👨🏻" },
          { "name": "Mariana", "avatar": "👩🏽" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Mariana, a que horas você chega ao trabalho?", "fr": "Mariana, à quelle heure tu arrives au travail ?", "hl": ["horas", "trabalho"], "hlFr": ["heures", "travail"] },
          { "speaker": 1, "pt": "Eu chego às oito. E você, como vem para o trabalho?", "fr": "J'arrive à huit heures. Et toi, comment tu viens au travail ?", "hl": ["oito"], "hlFr": ["huit"] },
          { "speaker": 0, "pt": "Eu ___ às seis para pegar o metrô.", "fr": "Je ___ à six heures pour prendre le métro.", "blank": "acordo", "options": ["acordo", "durmo", "trabalho", "chego"] },
          { "speaker": 1, "pt": "Que cedo! Eu de ônibus ___ meia hora.", "fr": "Comme c'est tôt ! Moi en bus ça ___ une demi-heure.", "blank": "levo", "options": ["levo", "demoro", "passo", "gasto"] },
          { "speaker": 0, "pt": "É um pouco cansativo, mas gosto do meu trabalho.", "fr": "C'est un peu fatigant, mais j'aime mon travail.", "hl": ["gosto"], "hlFr": ["j'aime"] }
        ]
      }
    ]
  },
  {
    "id": "b1-1",
    "level": "B1",
    "title": "Exprimer ses opinions",
    "titlePT": "Expressar opiniões",
    "icon": "💬",
    "description": "Donnez votre avis et engagez des conversations en portugais.",
    "xp": 90,
    "sections": [
      {
        "title": "Formules d'opinion",
        "content": "Pour enrichir vos conversations, maîtrisez ces expressions d'opinion.",
        "vocabulary": [
          {
            "pt": "Na minha opinião...",
            "fr": "À mon avis...",
            "phonetic": "na MI-nya o-pi-NIAONG",
            "ptBR": "Na minha opinião... / Na minha visão...",
            "example": "Na minha opinião, o fado é fantástico.",
            "exampleFr": "À mon avis, le fado est fantastique."
          },
          {
            "pt": "Acho que...",
            "fr": "Je pense que...",
            "phonetic": "A-sho ke",
            "ptBR": "Acho que...",
            "example": "Acho que o português é uma língua bonita.",
            "exampleFr": "Je pense que le portugais est une belle langue."
          },
          {
            "pt": "Penso que...",
            "fr": "Je crois que...",
            "phonetic": "PENG-so ke",
            "ptBR": "Penso que... / Acho que...",
            "example": "Penso que tens razão.",
            "exampleFr": "Je pense que tu as raison."
          },
          {
            "pt": "Concordo!",
            "fr": "Je suis d'accord !",
            "phonetic": "kong-KOR-do",
            "ptBR": "Concordo!",
            "example": "Concordo completamente!",
            "exampleFr": "Je suis tout à fait d'accord !"
          },
          {
            "pt": "Discordo.",
            "fr": "Je ne suis pas d'accord.",
            "phonetic": "dish-KOR-do",
            "ptBR": "Discordo.",
            "example": "Discordo, acho que é diferente.",
            "exampleFr": "Je ne suis pas d'accord, je pense que c'est différent."
          },
          {
            "pt": "Tens razão.",
            "fr": "Tu as raison.",
            "phonetic": "tengsh ra-ZAONG",
            "ptBR": "Você tem razão.",
            "example": "Tens razão, é verdade.",
            "exampleFr": "Tu as raison, c'est vrai."
          },
          {
            "pt": "Não sei.",
            "fr": "Je ne sais pas.",
            "phonetic": "naong sei",
            "ptBR": "Não sei.",
            "example": "Não sei, preciso de pensar.",
            "exampleFr": "Je ne sais pas, je dois réfléchir."
          }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Comment dit-on 'Je pense que' en portugais ?",
        "options": [
          "Concordo",
          "Acho que",
          "Discordo",
          "Tens razão"
        ],
        "correct": 1,
        "explanation": "'Acho que...' = Je pense que... / Je trouve que... Très utilisé !"
      },
      {
        "type": "translate",
        "question": "Traduisez : 'Tu as raison.'",
        "answer": "tens razão"
      },
      {
        "type": "mcq",
        "question": "Que signifie 'Discordo' ?",
        "options": [
          "Je suis d'accord",
          "Je ne sais pas",
          "Je ne suis pas d'accord",
          "Je pense"
        ],
        "correct": 2,
        "explanation": "'Discordo' = Je ne suis pas d'accord. Contraire : 'Concordo' = Je suis d'accord."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'À mon avis...'",
        "answer": "na minha opinião"
      },
      {
        "type": "conversation",
        "title": "Dialogue : À l'aéroport",
        "setup": "Laura arrive à l'aéroport de São Paulo pour faire son check-in.",
        "speakers": [
          { "name": "Laura", "avatar": "👩🏻" },
          { "name": "Agente", "avatar": "👩🏾" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Bom dia! Eu tenho uma reserva para o voo das dez.", "fr": "Bonjour ! J'ai une réservation pour le vol de dix heures.", "hl": ["reserva", "voo"], "hlFr": ["réservation", "vol"] },
          { "speaker": 1, "pt": "Pode me mostrar o seu ___, por favor?", "fr": "Pouvez-vous me montrer votre ___, s'il vous plaît ?", "blank": "passaporte", "options": ["passaporte", "bilhete", "mala", "cartão"] },
          { "speaker": 0, "pt": "Aqui está o meu passaporte.", "fr": "Voici mon passeport.", "hl": ["passaporte"], "hlFr": ["passeport"] },
          { "speaker": 1, "pt": "Obrigada. Você tem ___ para despachar?", "fr": "Merci. Vous avez des ___ à enregistrer ?", "blank": "bagagem", "options": ["bagagem", "documentos", "dinheiro", "passagens"] },
          { "speaker": 0, "pt": "Sim, tenho uma mala grande.", "fr": "Oui, j'ai une grande valise.", "hl": ["mala"], "hlFr": ["valise"] }
        ]
      }
    ]
  },
  {
    "id": "a2-2",
    "level": "A2",
    "title": "Les transports",
    "titlePT": "Os transportes",
    "icon": "🚌",
    "description": "Prenez le bus, le métro, le train — déplacez-vous en portugais !",
    "xp": 75,
    "sections": [
      {
        "title": "Les moyens de transport",
        "content": "Au Portugal et au Brésil, les transports publics sont très utilisés. Apprenons à nous déplacer !",
        "vocabulary": [
          {
            "pt": "o autocarro",
            "fr": "le bus (Portugal)",
            "phonetic": "o OU-to-KA-ro",
            "ptBR": "o ônibus",
            "example": "Apanho o autocarro número 28.",
            "exampleFr": "Je prends le bus numéro 28."
          },
          {
            "pt": "o metro",
            "fr": "le métro",
            "phonetic": "o ME-tro",
            "ptBR": "o metrô",
            "example": "O metro de Lisboa é muito moderno.",
            "exampleFr": "Le métro de Lisbonne est très moderne."
          },
          {
            "pt": "o comboio",
            "fr": "le train (Portugal)",
            "phonetic": "o kom-BOI-o",
            "ptBR": "o trem",
            "example": "Apanho o comboio para o Porto.",
            "exampleFr": "Je prends le train pour Porto."
          },
          {
            "pt": "o avião",
            "fr": "l'avion",
            "phonetic": "o a-VIAONG",
            "ptBR": "o avião",
            "example": "O avião parte às 10h.",
            "exampleFr": "L'avion décolle à 10h."
          },
          {
            "pt": "o táxi",
            "fr": "le taxi",
            "phonetic": "o TAK-si",
            "ptBR": "o táxi",
            "example": "Chame um táxi, por favor!",
            "exampleFr": "Appelez un taxi, s'il vous plaît !"
          },
          {
            "pt": "o carro",
            "fr": "la voiture",
            "phonetic": "o KA-ro",
            "ptBR": "o carro",
            "example": "Tenho um carro novo.",
            "exampleFr": "J'ai une nouvelle voiture."
          },
          {
            "pt": "a bicicleta",
            "fr": "le vélo",
            "phonetic": "a bi-si-KLE-ta",
            "ptBR": "a bicicleta",
            "example": "Ando de bicicleta todos os dias.",
            "exampleFr": "Je fais du vélo tous les jours."
          },
          {
            "pt": "o barco",
            "fr": "le bateau",
            "phonetic": "o BAR-ko",
            "ptBR": "o barco",
            "example": "Tomamos o barco para a outra margem.",
            "exampleFr": "Nous prenons le bateau vers l'autre rive."
          }
        ]
      },
      {
        "title": "À la gare / Au guichet",
        "content": "Expressions indispensables pour acheter un billet et s'orienter dans les transports.",
        "vocabulary": [
          {
            "pt": "a estação",
            "fr": "la gare / la station",
            "phonetic": "a esh-ta-SAONG",
            "ptBR": "a estação",
            "example": "A estação fica perto daqui?",
            "exampleFr": "La gare est-elle proche d'ici ?"
          },
          {
            "pt": "o bilhete",
            "fr": "le billet",
            "phonetic": "o bi-LYE-te",
            "ptBR": "o bilhete / a passagem",
            "example": "Quero um bilhete de ida e volta.",
            "exampleFr": "Je veux un billet aller-retour."
          },
          {
            "pt": "de ida e volta",
            "fr": "aller-retour",
            "phonetic": "de I-da e VOL-ta",
            "ptBR": "de ida e volta",
            "example": "Um bilhete de ida e volta para Sintra.",
            "exampleFr": "Un billet aller-retour pour Sintra."
          },
          {
            "pt": "a paragem",
            "fr": "l'arrêt (de bus)",
            "phonetic": "a pa-RA-jeng",
            "ptBR": "a parada",
            "example": "A próxima paragem é o Rossio.",
            "exampleFr": "Le prochain arrêt est Rossio."
          },
          {
            "pt": "Onde fica...?",
            "fr": "Où se trouve... ?",
            "phonetic": "ON-de FI-ka",
            "ptBR": "Onde fica...?",
            "example": "Onde fica o metro mais próximo?",
            "exampleFr": "Où est le métro le plus proche ?"
          },
          {
            "pt": "Quero ir para...",
            "fr": "Je veux aller à...",
            "phonetic": "KE-ro ir PA-ra",
            "ptBR": "Quero ir para...",
            "example": "Quero ir para o aeroporto.",
            "exampleFr": "Je veux aller à l'aéroport."
          }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Comment dit-on 'le train' au Portugal ?",
        "options": [
          "o autocarro",
          "o metro",
          "o comboio",
          "o avião"
        ],
        "correct": 2,
        "explanation": "Au Portugal, le train = 'o comboio'. Au Brésil, on dit 'o trem'."
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'l'arrêt de bus' au Portugal ?",
        "options": [
          "a estação",
          "a paragem",
          "o bilhete",
          "o táxi"
        ],
        "correct": 1,
        "explanation": "'A paragem' = l'arrêt. Au Brésil, c'est 'a parada'."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'Un billet aller-retour'",
        "answer": "um bilhete de ida e volta"
      },
      {
        "type": "mcq",
        "question": "Que signifie 'Onde fica...?' ?",
        "options": [
          "Comment vas-tu ?",
          "Où se trouve... ?",
          "Quand part... ?",
          "Je voudrais..."
        ],
        "correct": 1,
        "explanation": "'Onde fica...?' = Où se trouve...? Très utile pour s'orienter !"
      },
      {
        "type": "translate",
        "question": "Traduisez : 'Je veux aller à l'aéroport'",
        "answer": "quero ir para o aeroporto"
      }
    ]
  },
  {
    "id": "a2-3",
    "level": "A2",
    "title": "La météo",
    "titlePT": "O tempo e o clima",
    "icon": "⛅",
    "description": "Parlez de la météo et du présent progressif.",
    "xp": 70,
    "sections": [
      {
        "title": "Les expressions météo",
        "content": "Pour parler du temps, on utilise souvent 'estar' + adjectif ou 'fazer' + nom.",
        "vocabulary": [
          {
            "pt": "Está sol.",
            "fr": "Il fait soleil.",
            "phonetic": "esh-TA sol",
            "ptBR": "Está sol. / Faz sol.",
            "example": "Está sol, vamos à praia!",
            "exampleFr": "Il fait beau, allons à la plage !"
          },
          {
            "pt": "Está a chover.",
            "fr": "Il pleut.",
            "phonetic": "esh-TA a sho-VER",
            "ptBR": "Está chovendo.",
            "example": "Está a chover, fica em casa.",
            "exampleFr": "Il pleut, restez chez vous."
          },
          {
            "pt": "Faz calor.",
            "fr": "Il fait chaud.",
            "phonetic": "fash ka-LOR",
            "ptBR": "Faz calor.",
            "example": "Em agosto faz muito calor em Lisboa.",
            "exampleFr": "En août, il fait très chaud à Lisbonne."
          },
          {
            "pt": "Faz frio.",
            "fr": "Il fait froid.",
            "phonetic": "fash FRI-o",
            "ptBR": "Faz frio.",
            "example": "No inverno faz frio no norte de Portugal.",
            "exampleFr": "En hiver, il fait froid dans le nord du Portugal."
          },
          {
            "pt": "Está nublado.",
            "fr": "Il est nuageux.",
            "phonetic": "esh-TA nu-BLA-do",
            "ptBR": "Está nublado.",
            "example": "Hoje está nublado, leva um casaco.",
            "exampleFr": "Aujourd'hui, le temps est nuageux, prends un manteau."
          },
          {
            "pt": "Há vento.",
            "fr": "Il y a du vent.",
            "phonetic": "a VENG-to",
            "ptBR": "Está ventando.",
            "example": "Na costa há muito vento.",
            "exampleFr": "Il y a beaucoup de vent sur la côte."
          },
          {
            "pt": "Está a nevar.",
            "fr": "Il neige.",
            "phonetic": "esh-TA a ne-VAR",
            "ptBR": "Está nevando.",
            "example": "Na Serra da Estrela está a nevar!",
            "exampleFr": "À Serra da Estrela, il neige !"
          },
          {
            "pt": "a temperatura",
            "fr": "la température",
            "phonetic": "a teng-pe-ra-TU-ra",
            "ptBR": "a temperatura",
            "example": "A temperatura está a 25 graus.",
            "exampleFr": "La température est de 25 degrés."
          }
        ]
      },
      {
        "title": "Le présent progressif",
        "content": "Au Portugal, on exprime l'action en cours avec 'estar a + infinitif'. Au Brésil, avec 'estar + gérondif (-ando/-endo)'.",
        "vocabulary": [
          {
            "pt": "estou a trabalhar",
            "fr": "je suis en train de travailler",
            "phonetic": "esh-TO a tra-bya-LYAR",
            "ptBR": "estou trabalhando",
            "example": "Estou a trabalhar agora.",
            "exampleFr": "Je travaille maintenant."
          },
          {
            "pt": "estamos a comer",
            "fr": "nous sommes en train de manger",
            "phonetic": "esh-TA-mosh a ko-MER",
            "ptBR": "estamos comendo",
            "example": "Não posso falar, estamos a comer.",
            "exampleFr": "Je ne peux pas parler, nous mangeons."
          },
          {
            "pt": "está a chover",
            "fr": "il est en train de pleuvoir",
            "phonetic": "esh-TA a sho-VER",
            "ptBR": "está chovendo",
            "example": "Olha, está a chover!",
            "exampleFr": "Regardez, il pleut !"
          },
          {
            "pt": "estou a estudar",
            "fr": "je suis en train d'étudier",
            "phonetic": "esh-TO a esh-tu-DAR",
            "ptBR": "estou estudando",
            "example": "Estou a estudar português.",
            "exampleFr": "J'étudie le portugais."
          }
        ]
      },
      {
        "type": "conversation",
        "title": "Dialogue : Commander au restaurant",
        "setup": "Dois amigos num restaurante brasileiro fazem o pedido ao garçom.",
        "speakers": [
          { "name": "Cliente", "avatar": "👨🏻" },
          { "name": "Garçom", "avatar": "👨🏾" }
        ],
        "lines": [
          { "speaker": 1, "pt": "Boa tarde! O que vão querer?", "fr": "Bon après-midi ! Qu'est-ce que vous allez prendre ?", "hl": ["Boa tarde"], "hlFr": ["Bon après-midi"] },
          { "speaker": 0, "pt": "Quero o ___ com arroz, por favor.", "fr": "Je voudrais le ___ avec du riz, s'il vous plaît.", "blank": "peixe", "options": ["peixe", "frango", "bife", "camarão"] },
          { "speaker": 1, "pt": "E para beber?", "fr": "Et pour boire ?", "hl": ["beber"], "hlFr": ["boire"] },
          { "speaker": 0, "pt": "Uma água. Pode trazer a ___ no fim?", "fr": "Une eau. Vous pouvez apporter l'___ à la fin ?", "blank": "conta", "options": ["conta", "cardápio", "mesa", "prato"] },
          { "speaker": 1, "pt": "Claro! Com licença.", "fr": "Bien sûr ! Avec votre permission.", "hl": ["Com licença"], "hlFr": ["Avec votre permission"] }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Comment dit-on 'Il fait chaud' en portugais ?",
        "options": [
          "Está a nevar.",
          "Faz calor.",
          "Está nublado.",
          "Há vento."
        ],
        "correct": 1,
        "explanation": "'Faz calor.' = Il fait chaud. On utilise le verbe 'fazer' pour la température."
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'Il pleut' en Portugal ?",
        "options": [
          "Está chovendo.",
          "Está a chover.",
          "Faz chuva.",
          "Há chuva."
        ],
        "correct": 1,
        "explanation": "En Portugal : 'Está a chover.' Au Brésil : 'Está chovendo'."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'Je suis en train d'étudier' (Portugal)",
        "answer": "estou a estudar"
      },
      {
        "type": "mcq",
        "question": "Comment dire 'Il neige' au Portugal ?",
        "options": [
          "Está a chover",
          "Faz neve",
          "Está a nevar",
          "Há neve"
        ],
        "correct": 2,
        "explanation": "'Está a nevar.' = Il neige. 'Nevar' est le verbe 'neiger'."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'Il fait froid'",
        "answer": "faz frio"
      },
      {
        "type": "conversation",
        "title": "Dialogue : Commander au restaurant",
        "setup": "Dois amigos num restaurante brasileiro pedem o jantar.",
        "speakers": [
          { "name": "Cliente", "avatar": "👨🏻" },
          { "name": "Garçom", "avatar": "👨🏾" }
        ],
        "lines": [
          { "speaker": 1, "pt": "Boa noite! O que vocês vão pedir?", "fr": "Bonsoir ! Qu'est-ce que vous allez commander ?", "hl": ["pedir"], "hlFr": ["commander"] },
          { "speaker": 0, "pt": "Eu quero o frango ___ com arroz e feijão.", "fr": "Je voudrais le poulet ___ avec riz et haricots.", "blank": "grelhado", "options": ["grelhado", "frito", "assado", "cozido"] },
          { "speaker": 1, "pt": "E para beber?", "fr": "Et à boire ?", "hl": ["beber"], "hlFr": ["boire"] },
          { "speaker": 0, "pt": "Uma água, por favor. E depois, pode trazer a ___?", "fr": "Une eau, s'il vous plaît. Et ensuite, vous pouvez apporter l'___ ?", "blank": "conta", "options": ["conta", "cardápio", "mesa", "prato"] },
          { "speaker": 1, "pt": "Claro! Já trago a conta.", "fr": "Bien sûr ! Je vous apporte l'addition.", "hl": ["conta"], "hlFr": ["addition"] }
        ]
      }
    ]
  },
  {
    "id": "a2-4",
    "level": "A2",
    "title": "Le corps et la santé",
    "titlePT": "O corpo e a saúde",
    "icon": "🏥",
    "description": "Chez le médecin — décrivez vos douleurs et comprenez les soins.",
    "xp": 80,
    "sections": [
      {
        "title": "Expressions de douleur",
        "content": "Pour décrire où vous avez mal, utilisez 'doer' (faire mal) ou 'tenho dores de' (j'ai des douleurs de).",
        "vocabulary": [
          {
            "pt": "Dói-me a cabeça.",
            "fr": "J'ai mal à la tête.",
            "phonetic": "DOI-me a ka-BE-sa",
            "ptBR": "Estou com dor de cabeça.",
            "example": "Dói-me a cabeça, preciso de aspirina.",
            "exampleFr": "J'ai mal à la tête, j'ai besoin d'aspirine."
          },
          {
            "pt": "Dói-me o estômago.",
            "fr": "J'ai mal à l'estomac.",
            "phonetic": "DOI-me o esh-TO-ma-go",
            "ptBR": "Estou com dor de estômago.",
            "example": "Dói-me o estômago desde ontem.",
            "exampleFr": "J'ai mal au ventre depuis hier."
          },
          {
            "pt": "Tenho febre.",
            "fr": "J'ai de la fièvre.",
            "phonetic": "TE-nyo FE-bre",
            "ptBR": "Estou com febre.",
            "example": "Tenho febre — 38 graus.",
            "exampleFr": "J'ai de la fièvre – 38 degrés."
          },
          {
            "pt": "Estou constipado(a).",
            "fr": "J'ai un rhume.",
            "phonetic": "esh-TO kong-shti-PA-do",
            "ptBR": "Estou resfriado(a).",
            "example": "Estou constipado desde segunda.",
            "exampleFr": "J'ai un rhume depuis lundi."
          },
          {
            "pt": "Estou cansado(a).",
            "fr": "Je suis fatigué(e).",
            "phonetic": "esh-TO kang-SA-do",
            "ptBR": "Estou cansado(a).",
            "example": "Estou muito cansado, não dormi bem.",
            "exampleFr": "Je suis très fatigué, je n'ai pas bien dormi."
          },
          {
            "pt": "Preciso de um médico.",
            "fr": "J'ai besoin d'un médecin.",
            "phonetic": "pre-SI-zo de ung ME-di-ko",
            "ptBR": "Preciso de um médico.",
            "example": "Preciso de um médico urgentemente.",
            "exampleFr": "J'ai besoin d'un médecin de toute urgence."
          }
        ]
      },
      {
        "title": "À la pharmacie",
        "content": "Expressions utiles pour la pharmacie ou une consultation médicale.",
        "vocabulary": [
          {
            "pt": "a farmácia",
            "fr": "la pharmacie",
            "phonetic": "a far-MA-sia",
            "ptBR": "a farmácia",
            "example": "Há uma farmácia perto daqui?",
            "exampleFr": "Y a-t-il une pharmacie près d'ici ?"
          },
          {
            "pt": "o medicamento",
            "fr": "le médicament",
            "phonetic": "o me-di-ka-MENG-to",
            "ptBR": "o remédio",
            "example": "O médico receitou este medicamento.",
            "exampleFr": "Le médecin m'a prescrit ce médicament."
          },
          {
            "pt": "a receita",
            "fr": "l'ordonnance",
            "phonetic": "a re-SEI-ta",
            "ptBR": "a receita / a prescrição",
            "example": "Preciso de receita para este medicamento.",
            "exampleFr": "J'ai besoin d'une ordonnance pour ce médicament."
          },
          {
            "pt": "o comprimido",
            "fr": "le comprimé",
            "phonetic": "o kong-pri-MI-do",
            "ptBR": "o comprimido",
            "example": "Tome dois comprimidos por dia.",
            "exampleFr": "Prenez deux comprimés par jour."
          },
          {
            "pt": "a consulta",
            "fr": "la consultation",
            "phonetic": "a kong-SUL-ta",
            "ptBR": "a consulta",
            "example": "Tenho consulta às 15h.",
            "exampleFr": "J'ai rendez-vous à 15h."
          },
          {
            "pt": "a urgência",
            "fr": "les urgences",
            "phonetic": "a ur-JENG-sia",
            "ptBR": "a emergência / o pronto-socorro",
            "example": "Vá à urgência imediatamente!",
            "exampleFr": "Rendez-vous immédiatement aux urgences !"
          }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Comment dit-on 'J'ai mal à la tête' au Portugal ?",
        "options": [
          "Tenho febre.",
          "Estou constipado.",
          "Dói-me a cabeça.",
          "Estou cansado."
        ],
        "correct": 2,
        "explanation": "'Dói-me a cabeça.' = J'ai mal à la tête. 'Doer' = faire mal."
      },
      {
        "type": "mcq",
        "question": "Que signifie 'Estou constipado' en portugais européen ?",
        "options": [
          "Je suis constipé",
          "J'ai un rhume",
          "J'ai de la fièvre",
          "Je suis fatigué"
        ],
        "correct": 1,
        "explanation": "Attention ! 'Constipado' en PT-PT = rhume. En PT-BR = constipé. Faux ami !"
      },
      {
        "type": "translate",
        "question": "Traduisez : 'J'ai de la fièvre'",
        "answer": "tenho febre"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'le médicament' ?",
        "options": [
          "a consulta",
          "a receita",
          "o medicamento",
          "o comprimido"
        ],
        "correct": 2,
        "explanation": "'O medicamento' = le médicament. Au Brésil, on dit aussi 'o remédio'."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'J'ai besoin d'un médecin'",
        "answer": "preciso de um médico"
      }
    ]
  },
  {
    "id": "a2-5",
    "level": "A2",
    "title": "À la maison",
    "titlePT": "Em casa",
    "icon": "🏡",
    "description": "Décrivez votre logement et parlez des actions quotidiennes.",
    "xp": 75,
    "sections": [
      {
        "title": "Décrire son logement",
        "content": "Apprenez à décrire votre appartement ou maison en portugais.",
        "vocabulary": [
          {
            "pt": "o apartamento",
            "fr": "l'appartement",
            "phonetic": "o a-par-ta-MENG-to",
            "ptBR": "o apartamento",
            "example": "Moro num apartamento no terceiro andar.",
            "exampleFr": "J'habite dans un appartement au troisième étage."
          },
          {
            "pt": "a moradia",
            "fr": "la maison individuelle",
            "phonetic": "a mo-ra-DI-a",
            "ptBR": "a casa",
            "example": "Tenho uma moradia com jardim.",
            "exampleFr": "J'ai une maison avec un jardin."
          },
          {
            "pt": "o andar",
            "fr": "l'étage",
            "phonetic": "o ang-DAR",
            "ptBR": "o andar",
            "example": "Moro no quinto andar.",
            "exampleFr": "J'habite au cinquième étage."
          },
          {
            "pt": "o rés-do-chão",
            "fr": "le rez-de-chaussée",
            "phonetic": "o resh-do-SHAONG",
            "ptBR": "o térreo",
            "example": "A loja fica no rés-do-chão.",
            "exampleFr": "Le magasin est au rez-de-chaussée."
          },
          {
            "pt": "a garagem",
            "fr": "le garage",
            "phonetic": "a ga-RA-jeng",
            "ptBR": "a garagem",
            "example": "Tenho garagem para dois carros.",
            "exampleFr": "J'ai un garage pour deux voitures."
          },
          {
            "pt": "o terraço",
            "fr": "la terrasse",
            "phonetic": "o te-RA-so",
            "ptBR": "o terraço",
            "example": "O terraço tem vista para o mar.",
            "exampleFr": "La terrasse offre une vue sur la mer."
          },
          {
            "pt": "o elevador",
            "fr": "l'ascenseur",
            "phonetic": "o e-le-va-DOR",
            "ptBR": "o elevador",
            "example": "O elevador está avariado.",
            "exampleFr": "L'ascenseur est en panne."
          }
        ]
      },
      {
        "title": "Les actions à la maison",
        "content": "Verbes du quotidien pour parler de ce qu'on fait chez soi.",
        "vocabulary": [
          {
            "pt": "limpar a casa",
            "fr": "faire le ménage",
            "phonetic": "limg-PAR a KA-za",
            "ptBR": "limpar a casa",
            "example": "Ao sábado limpo a casa.",
            "exampleFr": "Samedi, je nettoie la maison."
          },
          {
            "pt": "cozinhar",
            "fr": "cuisiner",
            "phonetic": "ko-zi-NYAR",
            "ptBR": "cozinhar",
            "example": "Gosto de cozinhar pratos portugueses.",
            "exampleFr": "J'aime cuisiner des plats portugais."
          },
          {
            "pt": "lavar a roupa",
            "fr": "faire la lessive",
            "phonetic": "la-VAR a RO-pa",
            "ptBR": "lavar a roupa",
            "example": "Lavo a roupa na quinta-feira.",
            "exampleFr": "Je fais la lessive jeudi."
          },
          {
            "pt": "arrumar o quarto",
            "fr": "ranger la chambre",
            "phonetic": "a-ru-MAR o KUA-rto",
            "ptBR": "arrumar o quarto",
            "example": "Arruma o quarto antes de sair!",
            "exampleFr": "Rangez votre chambre avant de partir !"
          },
          {
            "pt": "tomar banho",
            "fr": "prendre une douche",
            "phonetic": "to-MAR BA-nyo",
            "ptBR": "tomar banho",
            "example": "Tomo banho todas as manhãs.",
            "exampleFr": "Je prends une douche tous les matins."
          },
          {
            "pt": "dormir",
            "fr": "dormir",
            "phonetic": "dor-MIR",
            "ptBR": "dormir",
            "example": "Durmo oito horas por noite.",
            "exampleFr": "Je dors huit heures par nuit."
          }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Comment dit-on 'l'appartement' ?",
        "options": [
          "a moradia",
          "o apartamento",
          "o andar",
          "a garagem"
        ],
        "correct": 1,
        "explanation": "'O apartamento' = l'appartement. 'A moradia' = la maison individuelle."
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'le rez-de-chaussée' au Portugal ?",
        "options": [
          "o primeiro andar",
          "o andar térreo",
          "o rés-do-chão",
          "o elevador"
        ],
        "correct": 2,
        "explanation": "'O rés-do-chão' = le rez-de-chaussée au Portugal. Au Brésil, 'o térreo'."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'cuisiner'",
        "answer": "cozinhar"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'faire le ménage' ?",
        "options": [
          "cozinhar",
          "limpar a casa",
          "tomar banho",
          "dormir"
        ],
        "correct": 1,
        "explanation": "'Limpar a casa' = faire le ménage / nettoyer la maison."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'Je prends une douche tous les matins'",
        "answer": "tomo banho todas as manhãs"
      }
    ]
  },
  {
    "id": "a2-6",
    "level": "A2",
    "title": "Au restaurant",
    "titlePT": "No restaurante",
    "icon": "🍽️",
    "description": "Commandez, demandez l'addition, appréciez la gastronomie lusophone.",
    "xp": 75,
    "sections": [
      {
        "title": "Au restaurant",
        "content": "Apprenez à vous débrouiller dans un restaurant portugais ou brésilien.",
        "vocabulary": [
          {
            "pt": "Uma mesa para dois, por favor.",
            "fr": "Une table pour deux, s'il vous plaît.",
            "phonetic": "U-ma ME-za PA-ra doish",
            "ptBR": "Uma mesa para dois, por favor.",
            "example": "Boa noite, uma mesa para dois, por favor.",
            "exampleFr": "Bonsoir, une table pour deux, s'il vous plaît."
          },
          {
            "pt": "A ementa / o cardápio",
            "fr": "Le menu / la carte",
            "phonetic": "a e-MENG-ta",
            "ptBR": "o cardápio",
            "example": "Pode trazer a ementa, por favor?",
            "exampleFr": "Pouvez-vous apporter le menu, s'il vous plaît ?"
          },
          {
            "pt": "Quero pedir...",
            "fr": "Je voudrais commander...",
            "phonetic": "KE-ro pe-DIR",
            "ptBR": "Quero pedir...",
            "example": "Quero pedir o bacalhau à brás.",
            "exampleFr": "Je veux commander la morue à bras."
          },
          {
            "pt": "A conta, por favor.",
            "fr": "L'addition, s'il vous plaît.",
            "phonetic": "a KONG-ta por fa-VOR",
            "ptBR": "A conta, por favor.",
            "example": "Pode trazer a conta, por favor?",
            "exampleFr": "Pouvez-vous apporter la facture, s'il vous plaît ?"
          },
          {
            "pt": "Está delicioso!",
            "fr": "C'est délicieux !",
            "phonetic": "esh-TA de-li-SI-o-zo",
            "ptBR": "Está delicioso!",
            "example": "Este peixe está delicioso!",
            "exampleFr": "Ce poisson est délicieux !"
          },
          {
            "pt": "Sou alérgico(a) a...",
            "fr": "Je suis allergique à...",
            "phonetic": "so a-LER-ji-ko a",
            "ptBR": "Sou alérgico(a) a...",
            "example": "Sou alérgico a frutos do mar.",
            "exampleFr": "Je suis allergique aux fruits de mer."
          }
        ]
      },
      {
        "title": "Faire les courses",
        "content": "Vocabulaire pour aller au marché ou au supermarché.",
        "vocabulary": [
          {
            "pt": "o supermercado",
            "fr": "le supermarché",
            "phonetic": "o su-per-mer-KA-do",
            "ptBR": "o supermercado",
            "example": "Vou ao supermercado comprar frutas.",
            "exampleFr": "Je vais au supermarché acheter des fruits."
          },
          {
            "pt": "o mercado",
            "fr": "le marché",
            "phonetic": "o mer-KA-do",
            "ptBR": "o mercado",
            "example": "Ao sábado vou ao mercado.",
            "exampleFr": "Le samedi, je vais au marché."
          },
          {
            "pt": "Quanto custa?",
            "fr": "Combien ça coûte ?",
            "phonetic": "KUANG-to KUSH-ta",
            "ptBR": "Quanto custa?",
            "example": "Quanto custa este queijo?",
            "exampleFr": "Combien coûte ce fromage ?"
          },
          {
            "pt": "Está caro.",
            "fr": "C'est cher.",
            "phonetic": "esh-TA KA-ro",
            "ptBR": "Está caro.",
            "example": "O peixe está muito caro hoje.",
            "exampleFr": "Le poisson est très cher aujourd'hui."
          },
          {
            "pt": "Está barato.",
            "fr": "C'est bon marché.",
            "phonetic": "esh-TA ba-RA-to",
            "ptBR": "Está barato.",
            "example": "A fruta está muito barata!",
            "exampleFr": "Les fruits sont très bon marché !"
          },
          {
            "pt": "meio quilo de...",
            "fr": "un demi-kilo de...",
            "phonetic": "MEI-o KI-lo de",
            "ptBR": "meio quilo de...",
            "example": "Quero meio quilo de tomates.",
            "exampleFr": "Je veux un demi-kilo de tomates."
          }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Comment demander l'addition au restaurant ?",
        "options": [
          "A ementa, por favor.",
          "Quero pedir.",
          "A conta, por favor.",
          "Está delicioso!"
        ],
        "correct": 2,
        "explanation": "'A conta, por favor.' = L'addition, s'il vous plaît."
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'le menu / la carte' au Portugal ?",
        "options": [
          "o cardápio",
          "a ementa",
          "a conta",
          "o prato"
        ],
        "correct": 1,
        "explanation": "Au Portugal : 'a ementa'. Au Brésil : 'o cardápio'."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'Combien ça coûte ?'",
        "answer": "quanto custa"
      },
      {
        "type": "mcq",
        "question": "Que signifie 'Está barato' ?",
        "options": [
          "C'est délicieux",
          "C'est cher",
          "C'est bon marché",
          "C'est prêt"
        ],
        "correct": 2,
        "explanation": "'Barato' = bon marché, pas cher. Contraire : 'caro' = cher."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'C'est délicieux !'",
        "answer": "está delicioso"
      }
    ]
  },
  {
    "id": "a2-7",
    "level": "A2",
    "title": "Le passé composé",
    "titlePT": "O Pretérito Perfeito",
    "icon": "⏮️",
    "description": "Racontez vos expériences passées avec le pretérito perfeito.",
    "xp": 90,
    "sections": [
      {
        "title": "Formation du pretérito perfeito",
        "content": "Le pretérito perfeito exprime des actions passées terminées. Réguliers : -AR → -ei, -aste, -ou, -ámos, -astes, -aram.",
        "vocabulary": [
          {
            "pt": "falei",
            "fr": "j'ai parlé",
            "phonetic": "fa-LEI",
            "ptBR": "falei",
            "example": "Falei com ele ontem.",
            "exampleFr": "Je lui ai parlé hier."
          },
          {
            "pt": "comeu",
            "fr": "il/elle a mangé",
            "phonetic": "ko-ME-u",
            "ptBR": "comeu",
            "example": "Ela comeu peixe ao almoço.",
            "exampleFr": "Elle a mangé du poisson pour le déjeuner."
          },
          {
            "pt": "partimos",
            "fr": "nous sommes partis",
            "phonetic": "par-TI-mosh",
            "ptBR": "partimos",
            "example": "Partimos cedo esta manhã.",
            "exampleFr": "Nous sommes partis tôt ce matin."
          },
          {
            "pt": "foi",
            "fr": "il/elle est allé(e)",
            "phonetic": "foi",
            "ptBR": "foi",
            "example": "Ele foi ao cinema.",
            "exampleFr": "Il est allé au cinéma."
          },
          {
            "pt": "tive",
            "fr": "j'ai eu",
            "phonetic": "TI-ve",
            "ptBR": "tive",
            "example": "Tive uma boa ideia.",
            "exampleFr": "J'ai eu une bonne idée."
          },
          {
            "pt": "fiz",
            "fr": "j'ai fait",
            "phonetic": "fiz",
            "ptBR": "fiz",
            "example": "Fiz o jantar ontem à noite.",
            "exampleFr": "J'ai préparé le dîner hier soir."
          },
          {
            "pt": "disse",
            "fr": "j'ai dit",
            "phonetic": "DI-se",
            "ptBR": "disse",
            "example": "Disse a verdade.",
            "exampleFr": "J'ai dit la vérité."
          },
          {
            "pt": "vim",
            "fr": "je suis venu(e)",
            "phonetic": "ving",
            "ptBR": "vim",
            "example": "Vim de França para aprender português.",
            "exampleFr": "Je suis venu de France pour apprendre le portugais."
          }
        ]
      },
      {
        "title": "Expressions temporelles du passé",
        "content": "Ces mots-clés permettent de situer une action dans le temps passé.",
        "vocabulary": [
          {
            "pt": "ontem",
            "fr": "hier",
            "phonetic": "ONG-teng",
            "ptBR": "ontem",
            "example": "Ontem fui ao teatro.",
            "exampleFr": "Hier, je suis allé au théâtre."
          },
          {
            "pt": "anteontem",
            "fr": "avant-hier",
            "phonetic": "ang-te-ONG-teng",
            "ptBR": "anteontem",
            "example": "Anteontem choveu muito.",
            "exampleFr": "Avant-hier, il a beaucoup plu."
          },
          {
            "pt": "na semana passada",
            "fr": "la semaine dernière",
            "phonetic": "na se-MA-na pa-SA-da",
            "ptBR": "na semana passada",
            "example": "Na semana passada fui ao Porto.",
            "exampleFr": "La semaine dernière, je suis allé à Porto."
          },
          {
            "pt": "no ano passado",
            "fr": "l'année dernière",
            "phonetic": "no A-no pa-SA-do",
            "ptBR": "no ano passado",
            "example": "No ano passado visitei Lisboa.",
            "exampleFr": "L'année dernière, j'ai visité Lisbonne."
          },
          {
            "pt": "há dois dias",
            "fr": "il y a deux jours",
            "phonetic": "a doish DI-ash",
            "ptBR": "há dois dias",
            "example": "Encontrei-o há dois dias.",
            "exampleFr": "Je l'ai trouvé il y a deux jours."
          },
          {
            "pt": "já",
            "fr": "déjà",
            "phonetic": "ja",
            "ptBR": "já",
            "example": "Já fui ao Brasil!",
            "exampleFr": "Je suis déjà allé au Brésil !"
          }
        ]
      }
    ],
    "phrases": [
      {
        "pt": "Ontem fui ao restaurante com os meus amigos.",
        "fr": "Hier je suis allé au restaurant avec mes amis.",
        "context": "Récit d'événement passé"
      },
      {
        "pt": "O que fizeste no fim de semana?",
        "fr": "Qu'est-ce que tu as fait le week-end ?",
        "context": "Question au passé"
      },
      {
        "pt": "Nunca fui ao Brasil, mas quero ir!",
        "fr": "Je ne suis jamais allé au Brésil, mais je veux y aller !",
        "context": "Expérience de vie"
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Comment conjuguer 'falar' (eu) au pretérito perfeito ?",
        "options": [
          "falava",
          "falei",
          "falarei",
          "falo"
        ],
        "correct": 1,
        "explanation": "'Falei' = j'ai parlé. Conjugaison -AR : eu falei, tu falaste, ele falou..."
      },
      {
        "type": "mcq",
        "question": "Quelle est la forme de 'ir'/'ser' (ele/ela) au passé ?",
        "options": [
          "iu",
          "fosse",
          "foi",
          "ía"
        ],
        "correct": 2,
        "explanation": "'Foi' est la forme passée de 'ir' ET de 'ser' pour ele/ela. Le contexte détermine le sens !"
      },
      {
        "type": "translate",
        "question": "Traduisez : 'hier'",
        "answer": "ontem"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'j'ai fait' ?",
        "options": [
          "faço",
          "fazia",
          "fiz",
          "farei"
        ],
        "correct": 2,
        "explanation": "'Fiz' = j'ai fait. Verbe irrégulier 'fazer' au pretérito perfeito."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'la semaine dernière'",
        "answer": "na semana passada"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'nous sommes partis' au pretérito perfeito ?",
        "options": [
          "partíamos",
          "partiremos",
          "partimos",
          "partiram"
        ],
        "correct": 2,
        "explanation": "Attention : 'partimos' est identique au présent ET au perfeito pour nós. Le contexte (ontem, esta manhã...) fait la différence."
      }
    ]
  },
  {
    "id": "b1-2",
    "level": "B1",
    "title": "L'imparfait",
    "titlePT": "O Pretérito Imperfeito",
    "icon": "📺",
    "description": "Décrivez des habitudes passées et faites des descriptions au passé.",
    "xp": 100,
    "sections": [
      {
        "title": "Formation de l'imparfait",
        "content": "L'imparfait (pretérito imperfeito) exprime des habitudes, des états ou des descriptions dans le passé. -AR → -ava / -ER/-IR → -ia.",
        "vocabulary": [
          {
            "pt": "falava",
            "fr": "je parlais / il parlait",
            "phonetic": "fa-LA-va",
            "ptBR": "falava",
            "example": "Quando era criança, falava muito.",
            "exampleFr": "Quand j'étais enfant, je parlais beaucoup."
          },
          {
            "pt": "comia",
            "fr": "je mangeais",
            "phonetic": "ko-MI-a",
            "ptBR": "comia",
            "example": "Comia sempre peixe ao domingo.",
            "exampleFr": "Je mangeais toujours du poisson le dimanche."
          },
          {
            "pt": "era",
            "fr": "j'étais / il était",
            "phonetic": "E-ra",
            "ptBR": "era",
            "example": "Ela era professora quando jovem.",
            "exampleFr": "Elle était enseignante quand elle était jeune."
          },
          {
            "pt": "tinha",
            "fr": "j'avais",
            "phonetic": "TI-nya",
            "ptBR": "tinha",
            "example": "Tinha um cão quando era criança.",
            "exampleFr": "J'avais un chien quand j'étais enfant."
          },
          {
            "pt": "ia",
            "fr": "j'allais",
            "phonetic": "I-a",
            "ptBR": "ia",
            "example": "Ia ao cinema todos os sábados.",
            "exampleFr": "J'allais au cinéma tous les samedis."
          },
          {
            "pt": "estudava",
            "fr": "j'étudiais",
            "phonetic": "esh-tu-DA-va",
            "ptBR": "estudava",
            "example": "Antes estudava à noite.",
            "exampleFr": "Avant, j'étudiais le soir."
          }
        ]
      },
      {
        "title": "Usages de l'imparfait",
        "content": "L'imparfait s'emploie pour : les habitudes passées (antes/quando era criança...), les descriptions, les états d'âme passés.",
        "vocabulary": [
          {
            "pt": "Quando era criança...",
            "fr": "Quand j'étais enfant...",
            "phonetic": "KUANG-do E-ra kri-ANG-sa",
            "ptBR": "Quando era criança...",
            "example": "Quando era criança, adorava jogar futebol.",
            "exampleFr": "Quand j'étais enfant, j'adorais jouer au football."
          },
          {
            "pt": "Antes...",
            "fr": "Avant...",
            "phonetic": "ANG-tesh",
            "ptBR": "Antes...",
            "example": "Antes morava em Paris.",
            "exampleFr": "Auparavant, j'habitais à Paris."
          },
          {
            "pt": "naquela época",
            "fr": "à cette époque-là",
            "phonetic": "na-KE-la E-po-ka",
            "ptBR": "naquela época",
            "example": "Naquela época não havia internet.",
            "exampleFr": "A cette époque, il n’y avait pas Internet."
          },
          {
            "pt": "costumava + infinitivo",
            "fr": "avoir l'habitude de...",
            "phonetic": "kosh-tu-MA-va",
            "ptBR": "costumava",
            "example": "Costumava acordar cedo todos os dias.",
            "exampleFr": "Je me levais tôt tous les jours."
          }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Quelle est la terminaison de l'imparfait pour les verbes en -AR (eu) ?",
        "options": [
          "-ei",
          "-ava",
          "-ia",
          "-arei"
        ],
        "correct": 1,
        "explanation": "Imparfait -AR : eu falava, tu falavas, ele falava, nós falávamos..."
      },
      {
        "type": "mcq",
        "question": "'Costumava acordar cedo' signifie... ?",
        "options": [
          "Je me lève tôt",
          "Je vais me lever tôt",
          "J'avais l'habitude de me lever tôt",
          "Je me suis levé tôt"
        ],
        "correct": 2,
        "explanation": "'Costumava + infinitif' = avoir l'habitude de (dans le passé)."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'Quand j'étais enfant'",
        "answer": "quando era criança"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'j'allais' avec le verbe 'ir' ?",
        "options": [
          "fui",
          "vou",
          "ia",
          "irei"
        ],
        "correct": 2,
        "explanation": "'Ia' est l'imparfait de 'ir' (aller). Forme courte mais irrégulière !"
      },
      {
        "type": "translate",
        "question": "Traduisez : 'Avant, j'habitais à Paris'",
        "answer": "antes morava em paris"
      }
    ]
  },
  {
    "id": "b1-3",
    "level": "B1",
    "title": "Le futur et le conditionnel",
    "titlePT": "O Futuro e o Condicional",
    "icon": "🔮",
    "description": "Parlez de vos projets, exprimez des souhaits et soyez poli en portugais.",
    "xp": 100,
    "sections": [
      {
        "title": "Le futur simple",
        "content": "Le futur simple (futuro simples) se forme en ajoutant au verbe : -ei, -ás, -á, -emos, -eis, -ão. Même forme pour -AR, -ER, -IR !",
        "vocabulary": [
          {
            "pt": "falarei",
            "fr": "je parlerai",
            "phonetic": "fa-la-REI",
            "ptBR": "vou falar (futur proche)",
            "example": "Amanhã falarei com o diretor.",
            "exampleFr": "Demain, je parlerai au directeur."
          },
          {
            "pt": "comerás",
            "fr": "tu mangeras",
            "phonetic": "ko-me-RASH",
            "ptBR": "vai comer",
            "example": "Amanhã comerás na minha casa!",
            "exampleFr": "Demain tu mangeras chez moi !"
          },
          {
            "pt": "virá",
            "fr": "il/elle viendra",
            "phonetic": "vi-RA",
            "ptBR": "vai vir",
            "example": "Ela virá à festa.",
            "exampleFr": "Elle viendra à la fête."
          },
          {
            "pt": "seremos",
            "fr": "nous serons",
            "phonetic": "se-RE-mosh",
            "ptBR": "vamos ser",
            "example": "Seremos grandes amigos.",
            "exampleFr": "Nous serons de grands amis."
          },
          {
            "pt": "farão",
            "fr": "ils/elles feront",
            "phonetic": "fa-RAONG",
            "ptBR": "vão fazer",
            "example": "Eles farão uma viagem ao Brasil.",
            "exampleFr": "Ils feront un voyage au Brésil."
          },
          {
            "pt": "amanhã",
            "fr": "demain",
            "phonetic": "a-ma-NYAONG",
            "ptBR": "amanhã",
            "example": "Amanhã iremos ao museu.",
            "exampleFr": "Demain, nous irons au musée."
          },
          {
            "pt": "no próximo mês",
            "fr": "le mois prochain",
            "phonetic": "no PROKS-si-mo mesh",
            "ptBR": "no próximo mês",
            "example": "No próximo mês mudamos de casa.",
            "exampleFr": "Le mois prochain, nous déménageons."
          }
        ]
      },
      {
        "title": "Le conditionnel",
        "content": "Le condicional se forme avec : -ia, -ias, -ia, -íamos, -íeis, -iam. Il exprime la politesse, les souhaits et les hypothèses.",
        "vocabulary": [
          {
            "pt": "gostaria de...",
            "fr": "j'aimerais...",
            "phonetic": "gosh-ta-RI-a de",
            "ptBR": "gostaria de...",
            "example": "Gostaria de visitar Lisboa um dia.",
            "exampleFr": "J'aimerais visiter Lisbonne un jour."
          },
          {
            "pt": "poderia...",
            "fr": "pourriez-vous... / je pourrais...",
            "phonetic": "po-de-RI-a",
            "ptBR": "poderia...",
            "example": "Poderia trazer a ementa, por favor?",
            "exampleFr": "Pourriez-vous apporter le menu, s'il vous plaît ?"
          },
          {
            "pt": "seria",
            "fr": "ce serait",
            "phonetic": "se-RI-a",
            "ptBR": "seria",
            "example": "Seria fantástico viver no Algarve!",
            "exampleFr": "Ce serait fantastique de vivre en Algarve !"
          },
          {
            "pt": "queria",
            "fr": "je voudrais",
            "phonetic": "ke-RI-a",
            "ptBR": "queria",
            "example": "Queria um café e um pastel, por favor.",
            "exampleFr": "Je voudrais un café et une pâtisserie, s'il vous plaît."
          },
          {
            "pt": "deveria",
            "fr": "je devrais",
            "phonetic": "de-ve-RI-a",
            "ptBR": "deveria",
            "example": "Deveria estudar mais português.",
            "exampleFr": "Je devrais étudier davantage le portugais."
          }
        ]
      }
    ],
    "phrases": [
      {
        "pt": "Gostaria de reservar uma mesa para esta noite.",
        "fr": "J'aimerais réserver une table pour ce soir.",
        "context": "Politesse au restaurant"
      },
      {
        "pt": "Poderia repetir, por favor?",
        "fr": "Pourriez-vous répéter, s'il vous plaît ?",
        "context": "Demande polie"
      },
      {
        "pt": "No futuro, quero aprender mais línguas.",
        "fr": "Dans le futur, je veux apprendre plus de langues.",
        "context": "Projets"
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Quelle est la terminaison du futur simple pour 'eu' ?",
        "options": [
          "-ava",
          "-ia",
          "-ei",
          "-arei"
        ],
        "correct": 2,
        "explanation": "Futuro simples : eu falaREI, comerEI, virEI... La terminaison 'eu' = -ei."
      },
      {
        "type": "mcq",
        "question": "Comment exprimer poliment 'je voudrais' ?",
        "options": [
          "quero",
          "queria",
          "quis",
          "quererei"
        ],
        "correct": 1,
        "explanation": "'Queria' (conditionnel) est plus poli que 'quero' (présent) pour commander ou demander."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'j'aimerais visiter Lisbonne'",
        "answer": "gostaria de visitar lisboa"
      },
      {
        "type": "mcq",
        "question": "'Poderia trazer a ementa?' signifie... ?",
        "options": [
          "Vous apportez le menu",
          "Apportez le menu !",
          "Pourriez-vous apporter le menu ?",
          "Avez-vous un menu ?"
        ],
        "correct": 2,
        "explanation": "'Poderia' = conditionnel de 'poder'. Exprime une demande très polie."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'demain'",
        "answer": "amanhã"
      }
    ]
  },
  {
    "id": "b1-4",
    "level": "B1",
    "title": "Les pronoms",
    "titlePT": "Os pronomes",
    "icon": "🔗",
    "description": "Maîtrisez les pronoms directs et indirects pour des phrases fluides.",
    "xp": 110,
    "sections": [
      {
        "title": "Pronoms sujets",
        "content": "Le portugais utilise les pronoms sujets mais ils peuvent être omis car la conjugaison suffit. Attention aux différences PT-PT / PT-BR !",
        "vocabulary": [
          {
            "pt": "eu",
            "fr": "je",
            "phonetic": "e-u",
            "ptBR": "eu",
            "example": "Eu falo português.",
            "exampleFr": "Je parle portugais."
          },
          {
            "pt": "tu / você",
            "fr": "tu / vous",
            "phonetic": "tu / vo-SE",
            "ptBR": "você (courant)",
            "example": "Tu falas muito bem! (PT) / Você fala! (BR)",
            "exampleFr": "Tu parles très bien ! (PT)"
          },
          {
            "pt": "ele / ela",
            "fr": "il / elle",
            "phonetic": "E-le / E-la",
            "ptBR": "ele / ela",
            "example": "Ela é professora.",
            "exampleFr": "Elle est enseignante."
          },
          {
            "pt": "nós / a gente",
            "fr": "nous",
            "phonetic": "nosh / a JENG-te",
            "ptBR": "a gente (courant)",
            "example": "A gente vai ao cinema. (BR / fam.)",
            "exampleFr": "Nous allons au cinéma. (BR"
          },
          {
            "pt": "eles / elas",
            "fr": "ils / elles",
            "phonetic": "E-lesh / E-lash",
            "ptBR": "eles / elas",
            "example": "Eles estão a estudar.",
            "exampleFr": "Ils étudient."
          }
        ]
      },
      {
        "title": "Pronoms compléments",
        "content": "Les pronoms COD remplacent un nom objet direct. En PT-PT ils se placent après le verbe avec tiret ; en PT-BR, avant.",
        "vocabulary": [
          {
            "pt": "Vejo-o.",
            "fr": "Je le vois.",
            "phonetic": "VE-jo-o",
            "ptBR": "Eu o vejo.",
            "example": "O Pedro? Vejo-o todos os dias.",
            "exampleFr": "Pédro ? Je le vois tous les jours."
          },
          {
            "pt": "Conheço-a.",
            "fr": "Je la connais.",
            "phonetic": "ko-NYE-so-a",
            "ptBR": "Eu a conheço.",
            "example": "A Maria? Conheço-a bem.",
            "exampleFr": "Marie ? Je la connais bien."
          },
          {
            "pt": "Comprei-o.",
            "fr": "Je l'ai acheté.",
            "phonetic": "kong-PREI-o",
            "ptBR": "Eu o comprei.",
            "example": "O livro? Comprei-o ontem.",
            "exampleFr": "Le livre ? Je l'ai acheté hier."
          },
          {
            "pt": "Amo-te.",
            "fr": "Je t'aime.",
            "phonetic": "A-mo-te",
            "ptBR": "Eu te amo.",
            "example": "Amo-te muito! (PT-PT)",
            "exampleFr": "Je t'aime tellement!"
          },
          {
            "pt": "Diz-me...",
            "fr": "Dis-moi...",
            "phonetic": "dish-me",
            "ptBR": "Me diz...",
            "example": "Diz-me a verdade. (PT) / Me diz a verdade. (BR)",
            "exampleFr": "Dis-moi la vérité. (PT)"
          }
        ]
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Comment dit-on 'tu' couramment au Brésil ?",
        "options": [
          "vós",
          "você",
          "ele",
          "nós"
        ],
        "correct": 1,
        "explanation": "Au Brésil, 'você' remplace 'tu' dans la plupart des situations. 'Tu' reste utilisé dans certaines régions."
      },
      {
        "type": "mcq",
        "question": "En PT-PT, où se place le pronom COD ?",
        "options": [
          "Avant le verbe",
          "Après le verbe avec tiret",
          "En fin de phrase",
          "Avant le sujet"
        ],
        "correct": 1,
        "explanation": "En portugais européen : 'Vejo-o', 'Conheço-a'. En PT-BR : avant le verbe ('Eu o vejo')."
      },
      {
        "type": "translate",
        "question": "Traduisez 'Je la connais' (PT-PT)",
        "answer": "conheço-a"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'nous' familièrement au Brésil ?",
        "options": [
          "nós",
          "a gente",
          "vós",
          "eles"
        ],
        "correct": 1,
        "explanation": "'A gente' est très courant au Brésil. Il se conjugue à la 3ème personne du singulier."
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'Je te vois' en PT-PT ?",
        "options": [
          "Te vejo",
          "Vejo-te",
          "Vejo-o",
          "O vejo"
        ],
        "correct": 1,
        "explanation": "'Vejo-te' = je te vois en portugais européen. Au Brésil : 'Eu te vejo'."
      }
    ]
  },
  {
    "id": "b1-5",
    "level": "B1",
    "title": "Connecteurs logiques",
    "titlePT": "Conectores e argumentação",
    "icon": "🔀",
    "description": "Structurez votre discours avec des connecteurs logiques en portugais.",
    "xp": 110,
    "sections": [
      {
        "title": "Connecteurs de base",
        "content": "Les connecteurs logiques permettent de lier vos idées et de construire des arguments cohérents.",
        "vocabulary": [
          {
            "pt": "porque",
            "fr": "parce que / car",
            "phonetic": "por-KE",
            "ptBR": "porque",
            "example": "Gosto de português porque é bonito.",
            "exampleFr": "J'aime le portugais parce que c'est beau."
          },
          {
            "pt": "portanto",
            "fr": "donc / par conséquent",
            "phonetic": "por-TANG-to",
            "ptBR": "portanto / então",
            "example": "Estudei muito, portanto passei no exame.",
            "exampleFr": "J'ai étudié dur, alors j'ai réussi l'examen."
          },
          {
            "pt": "mas",
            "fr": "mais",
            "phonetic": "mash",
            "ptBR": "mas",
            "example": "Gosto de vinho, mas não bebo muito.",
            "exampleFr": "J'aime le vin, mais je ne bois pas beaucoup."
          },
          {
            "pt": "no entanto",
            "fr": "cependant / pourtant",
            "phonetic": "no eng-TANG-to",
            "ptBR": "no entanto / porém",
            "example": "É caro, no entanto vale a pena.",
            "exampleFr": "C'est cher, mais ça vaut le coup."
          },
          {
            "pt": "além disso",
            "fr": "de plus / en outre",
            "phonetic": "a-LENG di-SO",
            "ptBR": "além disso",
            "example": "O país é bonito. Além disso, a comida é excelente.",
            "exampleFr": "Le pays est magnifique. De plus, la nourriture est excellente."
          },
          {
            "pt": "por isso",
            "fr": "c'est pourquoi / donc",
            "phonetic": "por I-so",
            "ptBR": "por isso",
            "example": "Gosto de português, por isso estudo todos os dias.",
            "exampleFr": "J'aime le portugais, donc j'étudie tous les jours."
          }
        ]
      },
      {
        "title": "Connecteurs de concession et condition",
        "content": "Ces connecteurs expriment des nuances comme la concession, la condition et l'opposition.",
        "vocabulary": [
          {
            "pt": "embora",
            "fr": "bien que / quoique",
            "phonetic": "eng-BO-ra",
            "ptBR": "embora (+ subj.)",
            "example": "Embora chova, vou sair.",
            "exampleFr": "Même s'il pleut, je sors."
          },
          {
            "pt": "apesar de",
            "fr": "malgré / en dépit de",
            "phonetic": "a-pe-ZAR de",
            "ptBR": "apesar de",
            "example": "Apesar do frio, fui nadar.",
            "exampleFr": "Malgré le froid, je suis allé nager."
          },
          {
            "pt": "se",
            "fr": "si (condition)",
            "phonetic": "se",
            "ptBR": "se",
            "example": "Se tiver tempo, vou ao museu.",
            "exampleFr": "Si j'ai le temps, j'irai au musée."
          },
          {
            "pt": "quando",
            "fr": "quand / lorsque",
            "phonetic": "KUANG-do",
            "ptBR": "quando",
            "example": "Quando chegar, telefona-me.",
            "exampleFr": "Quand tu arriveras, appelle-moi."
          },
          {
            "pt": "mesmo que",
            "fr": "même si",
            "phonetic": "MES-mo ke",
            "ptBR": "mesmo que",
            "example": "Mesmo que seja difícil, não desisto.",
            "exampleFr": "Même si c'est difficile, je n'abandonne pas."
          },
          {
            "pt": "desde que",
            "fr": "du moment que / depuis que",
            "phonetic": "DESH-de ke",
            "ptBR": "desde que",
            "example": "Estudo português desde que cheguei a Lisboa.",
            "exampleFr": "J'étudie le portugais depuis mon arrivée à Lisbonne."
          }
        ]
      }
    ],
    "phrases": [
      {
        "pt": "Embora seja difícil, não desisto.",
        "fr": "Bien que ce soit difficile, je n'abandonne pas.",
        "context": "Concession"
      },
      {
        "pt": "Apesar das dificuldades, continuamos.",
        "fr": "Malgré les difficultés, nous continuons.",
        "context": "Opposition"
      },
      {
        "pt": "Se estudares todos os dias, vais melhorar muito.",
        "fr": "Si tu étudies tous les jours, tu vas beaucoup progresser.",
        "context": "Condition"
      }
    ],
    "quiz": [
      {
        "type": "mcq",
        "question": "Quel connecteur exprime la cause ?",
        "options": [
          "portanto",
          "porque",
          "embora",
          "mas"
        ],
        "correct": 1,
        "explanation": "'Porque' = parce que / car. Exprime la cause. 'Portanto' = donc (conséquence)."
      },
      {
        "type": "mcq",
        "question": "Quel connecteur signifie 'cependant / pourtant' ?",
        "options": [
          "portanto",
          "e",
          "no entanto",
          "porque"
        ],
        "correct": 2,
        "explanation": "'No entanto' = cependant, pourtant. Exprime une opposition ou nuance."
      },
      {
        "type": "translate",
        "question": "Traduisez : 'malgré'",
        "answer": "apesar de"
      },
      {
        "type": "mcq",
        "question": "'Embora' + quel mode verbal ?",
        "options": [
          "Indicatif",
          "Subjonctif",
          "Conditionnel",
          "Infinitif"
        ],
        "correct": 1,
        "explanation": "'Embora' (bien que) exige le subjonctif en portugais, comme en français !"
      },
      {
        "type": "translate",
        "question": "Traduisez : 'c'est pourquoi / donc'",
        "answer": "por isso"
      },
      {
        "type": "mcq",
        "question": "Comment dit-on 'de plus / en outre' ?",
        "options": [
          "por isso",
          "no entanto",
          "além disso",
          "apesar de"
        ],
        "correct": 2,
        "explanation": "'Além disso' = de plus, en outre. Permet d'ajouter un argument supplémentaire."
      }
    ]
  },
  {
    "id": "a2-8",
    "level": "A2",
    "title": "En ville — Directions",
    "titlePT": "Na cidade — Direções",
    "icon": "🗺️",
    "description": "Demandez et donnez des directions en ville en portugais.",
    "xp": 65,
    "sections": [
      {
        "title": "Demander son chemin",
        "content": "Pour demander la route : 'Desculpe, onde fica...?' (Excusez-moi, où se trouve...?). Très utile à Lisbonne ou Porto !",
        "vocabulary": [
          { "pt": "Onde fica...?", "fr": "Où se trouve... ?", "example": "Onde fica o museu?",
            "exampleFr": "Où est le musée?" },
          { "pt": "à esquerda", "fr": "à gauche", "phonetic": "a esh-QUER-da", "example": "Vire à esquerda.",
            "exampleFr": "Tourner à gauche." },
          { "pt": "à direita", "fr": "à droite", "phonetic": "a di-REI-ta", "example": "Vire à direita.",
            "exampleFr": "Tournez à droite." },
          { "pt": "em frente", "fr": "tout droit / en face", "example": "Vá em frente.",
            "exampleFr": "Poursuivre." },
          { "pt": "perto", "fr": "près", "example": "O hotel fica perto.",
            "exampleFr": "L'hôtel est à proximité." },
          { "pt": "longe", "fr": "loin", "example": "A praia não está longe.",
            "exampleFr": "La plage n'est pas loin." }
        ]
      },
      {
        "title": "Les lieux de la ville",
        "content": "Vocabulaire des lieux essentiels pour se repérer dans une ville portugaise.",
        "vocabulary": [
          { "pt": "a rua", "fr": "la rue", "example": "A rua Augusta é bonita.",
            "exampleFr": "La Rua Augusta est magnifique." },
          { "pt": "a praça", "fr": "la place", "example": "A praça do Comércio.",
            "exampleFr": "La place du Commerce." },
          { "pt": "o banco", "fr": "la banque", "example": "O banco fica à esquerda.",
            "exampleFr": "La banque est à gauche." },
          { "pt": "a farmácia", "fr": "la pharmacie", "example": "Preciso de uma farmácia.",
            "exampleFr": "J'ai besoin d'une pharmacie." },
          { "pt": "o supermercado", "fr": "le supermarché", "example": "O supermercado está em frente.",
            "exampleFr": "Le supermarché est en face." },
          { "pt": "a estação de metro", "fr": "la station de métro", "example": "A estação fica perto.",
            "exampleFr": "La gare est proche." }
        ]
      }
    ],
    "phrases": [
      { "pt": "Desculpe, onde fica a farmácia?", "fr": "Excusez-moi, où est la pharmacie ?", "context": "Demander une direction" },
      { "pt": "Vire à esquerda depois do semáforo.", "fr": "Tournez à gauche après le feu rouge." },
      { "pt": "É a segunda rua à direita.", "fr": "C'est la deuxième rue à droite." }
    ],
    "quiz": [
      { "type": "mcq", "question": "Comment demander 'où se trouve...' ?", "options": ["O que é...?", "Onde fica...?", "Como se chama...?", "Quanto custa...?"], "correct": 1, "explanation": "Onde fica...? = Où se trouve...? C'est la formule clé pour demander une direction !" },
      { "type": "translate", "question": "Traduisez : 'à gauche'", "answer": "à esquerda" },
      { "type": "mcq", "question": "Que signifie 'em frente' ?", "options": ["à droite", "à gauche", "tout droit / en face", "derrière"], "correct": 2, "explanation": "Em frente = tout droit / en face. Vá em frente = allez tout droit." },
      { "type": "translate", "question": "Traduisez : 'la banque est près'", "answer": "o banco fica perto" },
      { "type": "mcq", "question": "Comment dit-on 'loin' ?", "options": ["perto", "longe", "frente", "atrás"], "correct": 1, "explanation": "Longe = loin. Perto = près." },
      { "type": "cloze", "sentence": "Vire ___ depois do semáforo.", "answer": "à direita/à esquerda", "hint": "à droite ou à gauche" }
    ]
  },
  {
    "id": "a2-9",
    "level": "A2",
    "title": "À la pharmacie",
    "titlePT": "Na farmácia",
    "icon": "💊",
    "description": "Exprimez vos symptômes et achetez des médicaments en portugais.",
    "xp": 65,
    "sections": [
      {
        "title": "Les symptômes courants",
        "content": "Pour dire qu'on ne va pas bien : 'Estou doente' (je suis malade) ou 'Tenho dores' (j'ai des douleurs). 'Dói-me...' = j'ai mal à...",
        "vocabulary": [
          { "pt": "Estou doente.", "fr": "Je suis malade.", "example": "Estou doente desde ontem.",
            "exampleFr": "Je suis malade depuis hier." },
          { "pt": "Tenho febre.", "fr": "J'ai de la fièvre.", "example": "Tenho febre alta.",
            "exampleFr": "J'ai une forte fièvre." },
          { "pt": "Tenho dores de cabeça.", "fr": "J'ai mal à la tête.", "example": "Tenho muitas dores de cabeça.",
            "exampleFr": "J'ai beaucoup de maux de tête." },
          { "pt": "Tenho dores de barriga.", "fr": "J'ai mal au ventre.", "example": "Tenho dores de barriga há dois dias.",
            "exampleFr": "J'ai des douleurs au ventre depuis deux jours." },
          { "pt": "Tenho tosse.", "fr": "J'ai la toux.", "example": "Tenho tosse seca.",
            "exampleFr": "J'ai une toux sèche." },
          { "pt": "Estou constipado/a.", "fr": "J'ai un rhume.", "phonetic": "es-tou cons-ti-PA-do", "example": "Estou constipado e tenho febre.",
            "exampleFr": "J'ai un rhume et j'ai de la fièvre." }
        ]
      },
      {
        "title": "À la pharmacie",
        "content": "Le/la pharmacien(ne) : 'o farmacêutico / a farmacêutica'. Vous pouvez acheter des médicaments sans ordonnance pour les petits maux.",
        "vocabulary": [
          { "pt": "Preciso de um medicamento.", "fr": "J'ai besoin d'un médicament.", "example": "Preciso de um medicamento para a tosse.",
            "exampleFr": "J'ai besoin de médicaments contre la toux." },
          { "pt": "o comprimido", "fr": "le comprimé", "example": "Tomo dois comprimidos por dia.",
            "exampleFr": "Je prends deux comprimés par jour." },
          { "pt": "o xarope", "fr": "le sirop", "example": "Este xarope é para a tosse.",
            "exampleFr": "Ce sirop est contre la toux." },
          { "pt": "a receita médica", "fr": "l'ordonnance", "example": "Tem receita médica?",
            "exampleFr": "Avez-vous une ordonnance?" },
          { "pt": "Tem algo para...?", "fr": "Vous avez quelque chose pour... ?", "example": "Tem algo para a febre?",
            "exampleFr": "As-tu quelque chose contre la fièvre ?" },
          { "pt": "a dose", "fr": "la dose", "example": "Qual é a dose recomendada?",
            "exampleFr": "Quelle est la dose recommandée ?" }
        ]
      }
    ],
    "phrases": [
      { "pt": "Bom dia, estou doente.", "fr": "Bonjour, je suis malade.", "context": "En entrant à la pharmacie" },
      { "pt": "Tem algo para as dores de cabeça?", "fr": "Vous avez quelque chose pour le mal de tête ?" },
      { "pt": "Preciso de uma receita?", "fr": "J'ai besoin d'une ordonnance ?" }
    ],
    "quiz": [
      { "type": "mcq", "question": "Comment dit-on 'je suis malade' ?", "options": ["Tenho fome.", "Estou doente.", "Estou cansado.", "Tenho sede."], "correct": 1, "explanation": "Estou doente = je suis malade. Estar + adjectif pour les états temporaires !" },
      { "type": "translate", "question": "Traduisez : 'j'ai de la fièvre'", "answer": "tenho febre" },
      { "type": "mcq", "question": "Que signifie 'Tenho tosse' ?", "options": ["J'ai faim", "J'ai la toux", "J'ai soif", "J'ai froid"], "correct": 1, "explanation": "Tosse = la toux. Avoir la toux = ter tosse." },
      { "type": "translate", "question": "Traduisez : 'j'ai mal à la tête'", "answer": "tenho dores de cabeça" },
      { "type": "mcq", "question": "Comment demander un médicament ?", "options": ["Onde fica...?", "Tem algo para...?", "Quanto custa...?", "O que é...?"], "correct": 1, "explanation": "Tem algo para...? = Vous avez quelque chose pour...? Très utile à la pharmacie !" },
      { "type": "cloze", "sentence": "Preciso de um ___ para a febre.", "answer": "medicamento/comprimido", "hint": "médicament ou comprimé" }
    ]
  },
  {
    "id": "b1-6",
    "level": "B1",
    "title": "Le subjonctif présent",
    "titlePT": "O conjuntivo presente",
    "icon": "🎭",
    "description": "Maîtrisez le mode subjonctif, essentiel pour exprimer le doute, le souhait et l'hypothèse.",
    "xp": 80,
    "sections": [
      {
        "title": "Formation du subjonctif",
        "content": "Le subjonctif (conjuntivo) se forme à partir de la 1ère personne du présent de l'indicatif, en changeant la voyelle thématique : -AR → -e, -ER/-IR → -a.",
        "vocabulary": [
          { "pt": "falar → fale, fales, fale", "fr": "parler → que je parle, que tu parles...", "example": "Espero que ele fale português.",
            "exampleFr": "J'espère qu'il parle portugais." },
          { "pt": "comer → coma, comas, coma", "fr": "manger → que je mange...", "example": "Quero que eles comam bem.",
            "exampleFr": "Je veux qu'ils mangent bien." },
          { "pt": "ser → seja, sejas, seja", "fr": "être (ser) → que je sois...", "example": "Espero que sejas feliz.",
            "exampleFr": "J'espère que tu es heureux." },
          { "pt": "estar → esteja, estejas, esteja", "fr": "être (estar) → que je sois...", "example": "Quero que estejas aqui.",
            "exampleFr": "Je veux que tu sois là." },
          { "pt": "ter → tenha, tenhas, tenha", "fr": "avoir → que j'aie...", "example": "É importante que tenhas paciência.",
            "exampleFr": "Il est important que vous soyez patient." },
          { "pt": "ir → vá, vás, vá", "fr": "aller → que j'aille...", "example": "Prefiro que vás tu.",
            "exampleFr": "Je préférerais que tu partes." }
        ]
      },
      {
        "title": "Quand utiliser le subjonctif",
        "content": "Le subjonctif s'emploie après certaines conjonctions et expressions : querer que, esperar que, embora (bien que), para que (pour que), antes de (avant de)...",
        "vocabulary": [
          { "pt": "Espero que...", "fr": "J'espère que...", "example": "Espero que venhas à festa.",
            "exampleFr": "J'espère que tu viendras à la fête." },
          { "pt": "Quero que...", "fr": "Je veux que...", "example": "Quero que fales mais devagar.",
            "exampleFr": "Je veux que tu parles plus lentement." },
          { "pt": "Embora...", "fr": "Bien que...", "example": "Embora esteja cansado, trabalho.",
            "exampleFr": "Même si je suis fatigué, je travaille." },
          { "pt": "Para que...", "fr": "Pour que...", "example": "Falo devagar para que entendam.",
            "exampleFr": "Je parle lentement pour qu'ils comprennent." },
          { "pt": "É importante que...", "fr": "Il est important que...", "example": "É importante que estudes.",
            "exampleFr": "C'est important que tu étudies." },
          { "pt": "Duvido que...", "fr": "Je doute que...", "example": "Duvido que ele venha.",
            "exampleFr": "Je doute qu'il vienne." }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Quel mode en portugais après 'Espero que...' ?", "options": ["Indicatif", "Subjonctif", "Conditionnel", "Infinitif"], "correct": 1, "explanation": "Après 'espero que', on utilise le subjonctif (conjuntivo) : Espero que fales." },
      { "type": "translate", "question": "Conjuguez FALAR au subjonctif, 1ère pers.", "answer": "fale" },
      { "type": "mcq", "question": "Quel est le subjonctif de 'ser' pour 'eu' ?", "options": ["serei", "seja", "sou", "fui"], "correct": 1, "explanation": "Ser → seja (subjonctif). C'est un verbe irrégulier au subjonctif." },
      { "type": "translate", "question": "Traduisez : 'bien que' (conjonction + subjonctif)", "answer": "embora" },
      { "type": "mcq", "question": "'É importante que...' est suivi de quel mode ?", "options": ["indicatif", "subjonctif", "conditionnel", "futur"], "correct": 1, "explanation": "Les expressions impersonnelles (é importante que, é necessário que) exigent le subjonctif." },
      { "type": "cloze", "sentence": "Quero que ele ___ a verdade.", "answer": "diga", "hint": "dizer au subjonctif pour 'ele'" }
    ]
  },
  {
    "id": "b1-7",
    "level": "B1",
    "title": "Le conditionnel",
    "titlePT": "O condicional",
    "icon": "🌟",
    "description": "Exprimez la politesse, les désirs et les hypothèses avec le conditionnel portugais.",
    "xp": 75,
    "sections": [
      {
        "title": "Formation du conditionnel",
        "content": "Le conditionnel (condicional) se forme à partir de l'infinitif + terminaisons : -ia, -ias, -ia, -íamos, -íeis, -iam. Identique pour -AR, -ER, -IR !",
        "vocabulary": [
          { "pt": "gostar → gostaria", "fr": "aimer → j'aimerais", "example": "Gostaria de um café, faz favor.",
            "exampleFr": "Je voudrais un café, s'il vous plaît." },
          { "pt": "querer → queria", "fr": "vouloir → je voudrais", "example": "Queria reservar uma mesa.",
            "exampleFr": "Je voulais réserver une table." },
          { "pt": "poder → poderia", "fr": "pouvoir → je pourrais", "example": "Poderia falar mais devagar?",
            "exampleFr": "Pourriez-vous parler plus lentement, s'il vous plaît?" },
          { "pt": "ter → teria", "fr": "avoir → j'aurais", "example": "Teria sido melhor assim.",
            "exampleFr": "Cela aurait été mieux ainsi." },
          { "pt": "ser → seria", "fr": "être → je serais", "example": "Seria perfeito!",
            "exampleFr": "Ce serait parfait !" },
          { "pt": "fazer → faria", "fr": "faire → je ferais", "example": "Faria tudo por ti.",
            "exampleFr": "Je ferais n'importe quoi pour toi." }
        ]
      },
      {
        "title": "Usages du conditionnel",
        "content": "Le conditionnel s'utilise pour : la politesse (gostaria = j'aimerais), l'hypothèse (se... faria = si... je ferais), ou le futur dans le passé.",
        "vocabulary": [
          { "pt": "Se tivesse tempo...", "fr": "Si j'avais du temps...", "example": "Se tivesse tempo, viajaria mais.",
            "exampleFr": "Si j'avais le temps, je voyagerais davantage." },
          { "pt": "Poderia ajudar-me?", "fr": "Pourriez-vous m'aider ?", "example": "Poderia ajudar-me, por favor?",
            "exampleFr": "Pourriez-vous m'aider, s'il vous plaît ?" },
          { "pt": "Gostaria de...", "fr": "J'aimerais...", "example": "Gostaria de aprender piano.",
            "exampleFr": "J'aimerais apprendre le piano." },
          { "pt": "No teu lugar...", "fr": "À ta place...", "example": "No teu lugar, faria diferente.",
            "exampleFr": "À votre place, je procéderais différemment." },
          { "pt": "seria melhor", "fr": "ce serait mieux", "example": "Seria melhor falar com ele.",
            "exampleFr": "Il vaudrait mieux lui parler." },
          { "pt": "Na minha opinião...", "fr": "À mon avis...", "example": "Na minha opinião, seria melhor assim.",
            "exampleFr": "À mon avis, ce serait mieux ainsi." }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Quel est le conditionnel de 'gostar' pour 'eu' ?", "options": ["gostei", "gosto", "gostaria", "gostasse"], "correct": 2, "explanation": "Gostar → gostaria (condicional). Infinitif + -ia = forme du conditionnel !" },
      { "type": "translate", "question": "Traduisez : 'je voudrais un café'", "answer": "gostaria de um café/queria um café" },
      { "type": "mcq", "question": "Comment former le conditionnel ?", "options": ["radical + -ei", "infinitif + -ia", "participe + -ia", "radical + -eria"], "correct": 1, "explanation": "Infinitif + terminaisons (-ia, -ias...). Falar → falar + ia = falaria." },
      { "type": "translate", "question": "Traduisez : 'ce serait mieux'", "answer": "seria melhor" },
      { "type": "mcq", "question": "'Poderia ajudar-me?' signifie :", "options": ["Aidez-moi !", "Vous avez aidé ?", "Pourriez-vous m'aider ?", "Vous pouvez aider ?"], "correct": 2, "explanation": "Poderia = conditionnel de poder. Exprime une requête polie." },
      { "type": "cloze", "sentence": "No teu lugar, eu ___ diferente.", "answer": "faria", "hint": "faire au conditionnel pour 'eu'" }
    ]
  },
  {
    "id": "b1-8",
    "level": "B1",
    "title": "Le futur — Parler de l'avenir",
    "titlePT": "O futuro — Falar do futuro",
    "icon": "🚀",
    "description": "Exprimez vos projets et l'avenir avec le futur simple et le futur proche en portugais.",
    "xp": 75,
    "sections": [
      {
        "title": "Le futur proche",
        "content": "En portugais parlé, on utilise souvent le futur proche avec 'ir + infinitivo' : Vou estudar = je vais étudier. C'est la forme la plus courante !",
        "vocabulary": [
          { "pt": "Vou viajar.", "fr": "Je vais voyager.", "example": "Vou viajar no verão.",
            "exampleFr": "Je vais voyager cet été." },
          { "pt": "Vais estudar?", "fr": "Tu vas étudier ?", "example": "Vais estudar para o exame?",
            "exampleFr": "Allez-vous étudier pour l'examen ?" },
          { "pt": "Ele vai trabalhar.", "fr": "Il va travailler.", "example": "Ele vai trabalhar amanhã.",
            "exampleFr": "Il va travailler demain." },
          { "pt": "Vamos sair!", "fr": "Nous allons sortir !", "example": "Esta noite vamos sair juntos.",
            "exampleFr": "Ce soir, nous sortons ensemble." },
          { "pt": "logo", "fr": "tout à l'heure / bientôt", "example": "Faço isso logo.",
            "exampleFr": "Je le ferai bientôt." },
          { "pt": "no próximo ano", "fr": "l'année prochaine", "example": "No próximo ano mudo de emprego.",
            "exampleFr": "L'année prochaine, je changerai de travail." }
        ]
      },
      {
        "title": "Le futur simple",
        "content": "Le futur simple (futuro do indicativo) s'utilise à l'écrit ou pour le style plus formel. Formation : infinitif + -ei, -ás, -á, -emos, -eis, -ão.",
        "vocabulary": [
          { "pt": "falarei", "fr": "je parlerai", "example": "Falarei com ele amanhã.",
            "exampleFr": "Je lui parlerai demain." },
          { "pt": "virás", "fr": "tu viendras", "example": "Virás à festa?",
            "exampleFr": "Viendras-tu à la fête ?" },
          { "pt": "será", "fr": "ce sera / il sera", "example": "Será que ele vem?",
            "exampleFr": "Viendra-t-il ?" },
          { "pt": "faremos", "fr": "nous ferons", "example": "Faremos o melhor possível.",
            "exampleFr": "Nous ferons de notre mieux." },
          { "pt": "Quem sabe...", "fr": "Qui sait...", "example": "Quem sabe, talvez vá a Lisboa.",
            "exampleFr": "Qui sait, j'irai peut-être à Lisbonne." },
          { "pt": "um dia", "fr": "un jour", "example": "Um dia vou falar português fluente.",
            "exampleFr": "Un jour, je parlerai couramment le portugais." }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Comment former le futur proche ?", "options": ["ser + infinitif", "ir + infinitif", "ter + participe", "estar + gérondif"], "correct": 1, "explanation": "Futur proche = ir + infinitivo. Vou falar = je vais parler." },
      { "type": "translate", "question": "Traduisez : 'je vais voyager'", "answer": "vou viajar" },
      { "type": "mcq", "question": "Quel est le futur de 'falar' pour 'eu' ?", "options": ["falei", "falava", "falarei", "falaria"], "correct": 2, "explanation": "Futur simple : falar + ei = falarei. Infinitif + terminaison." },
      { "type": "translate", "question": "Traduisez : 'nous allons sortir'", "answer": "vamos sair" },
      { "type": "mcq", "question": "'Será que ele vem?' signifie :", "options": ["Il vient certainement.", "Il est venu.", "Est-ce qu'il va venir?", "Il ne vient pas."], "correct": 2, "explanation": "Será que...? = Est-ce que... ? / Se pourrait-il que... ? Exprime le doute sur l'avenir." },
      { "type": "cloze", "sentence": "No próximo ano ___ de emprego.", "answer": "mudo/vou mudar", "hint": "je vais changer (mudo ou futur proche)" }
    ]
  },
  {
    "id": "b2-1",
    "level": "B2",
    "title": "Le subjonctif présent",
    "titlePT": "O subjuntivo presente",
    "icon": "🌀",
    "description": "Maîtrisez le subjonctif présent en portugais : conjugaisons, irréguliers et emplois.",
    "xp": 120,
    "sections": [
      {
        "title": "Conjugaison du subjonctif",
        "content": "Le subjonctif présent (subjuntivo presente) se forme à partir de la 1ère personne du présent de l'indicatif. Pour -AR : radical + -e, -es, -e, -emos, -em. Exemple : falar → eu falo → fale, fales, fale, falemos, falem.",
        "vocabulary": [
          { "pt": "fale", "fr": "que je parle (subj.)", "example": "É importante que você fale devagar.",
            "exampleFr": "Il est important que vous parliez lentement." },
          { "pt": "fales", "fr": "que tu parles (subj.)", "example": "Quero que fales com ela.",
            "exampleFr": "Je veux que tu lui parles." },
          { "pt": "falemos", "fr": "que nous parlions (subj.)", "example": "Para que falemos melhor, pratiquemos.",
            "exampleFr": "Pour mieux parler, pratiquons." },
          { "pt": "a possibilidade", "fr": "la possibilité", "example": "Existe a possibilidade de chover.",
            "exampleFr": "Il y a une possibilité de pluie." },
          { "pt": "o desejo", "fr": "le désir", "example": "É o meu maior desejo.",
            "exampleFr": "C'est mon plus grand souhait." }
        ]
      },
      {
        "title": "Verbes irréguliers au subjonctif",
        "content": "Certains verbes ont un subjonctif irrégulier très différent de l'indicatif. À mémoriser absolument : ser → seja, ter → tenha, estar → esteja, ir → vá.",
        "vocabulary": [
          { "pt": "seja", "fr": "que ce soit (subj. de ser)", "example": "Quero que isso seja verdade.",
            "exampleFr": "Je veux que ce soit vrai." },
          { "pt": "tenha", "fr": "qu'il ait (subj. de ter)", "example": "É importante que você tenha paciência.",
            "exampleFr": "Il est important que vous soyez patient." },
          { "pt": "esteja", "fr": "qu'il soit (subj. de estar)", "example": "Espero que esteja bem.",
            "exampleFr": "J'espère que tu vas bien." },
          { "pt": "vá", "fr": "qu'il aille (subj. de ir)", "example": "É melhor que você vá agora.",
            "exampleFr": "Tu ferais mieux d'y aller maintenant." },
          { "pt": "a necessidade", "fr": "la nécessité", "example": "Há necessidade de mudar.",
            "exampleFr": "Il est nécessaire de changer." }
        ]
      },
      {
        "title": "Emplois du subjonctif",
        "content": "Le subjonctif s'emploie après certaines expressions : quero que (je veux que), é importante que (il est important que), embora (bien que), para que (pour que).",
        "vocabulary": [
          { "pt": "quero que", "fr": "je veux que", "example": "Quero que você venha.",
            "exampleFr": "Je veux que tu viennes." },
          { "pt": "é importante que", "fr": "il est important que", "example": "É importante que estudemos.",
            "exampleFr": "Il est important que nous étudiions." },
          { "pt": "embora", "fr": "bien que / quoique", "example": "Embora esteja cansado, continuo.",
            "exampleFr": "Même si je suis fatigué, je continue." },
          { "pt": "para que", "fr": "pour que / afin que", "example": "Estudo para que possa comunicar.",
            "exampleFr": "Étudiez pour pouvoir communiquer." },
          { "pt": "embora", "fr": "bien que", "example": "Embora seja difícil, é possível.",
            "exampleFr": "Même si c’est difficile, c’est possible." }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Quel est le subjonctif de 'falar' pour 'você' ?", "options": ["fala", "fale", "falo", "falará"], "correct": 1, "explanation": "Subjonctif de falar : fale (vous), conjugué à partir de 'falo' → fal- + -e." },
      { "type": "mcq", "question": "Quel est le subjonctif de 'ser' ?", "options": ["sere", "seje", "seja", "seia"], "correct": 2, "explanation": "Ser est irrégulier au subjonctif : seja, sejas, seja, sejamos, sejam." },
      { "type": "mcq", "question": "'Embora' déclenche quel mode ?", "options": ["L'indicatif", "Le subjonctif", "L'infinitif", "L'impératif"], "correct": 1, "explanation": "'Embora' (bien que) est une conjonction de concession qui exige le subjonctif." },
      { "type": "translate", "question": "Traduisez : 'il est important que vous ayez de la patience'", "answer": "é importante que você tenha paciência" },
      { "type": "translate", "question": "Traduisez : 'je veux que ce soit vrai'", "answer": "quero que seja verdade" }
    ]
  },
  {
    "id": "b2-2",
    "level": "B2",
    "title": "Le futur simple et l'hypothèse",
    "titlePT": "O futuro simples e a hipótese",
    "icon": "🔮",
    "description": "Exprimez l'avenir et les hypothèses avec le futur simple et le conditionnel.",
    "xp": 120,
    "sections": [
      {
        "title": "Le futur simple",
        "content": "Le futur simple (futuro do indicativo) se forme avec l'infinitif + terminaisons : -ei, -ás, -á, -emos, -eis, -ão. Exemple : falar → falarei, falará, falaremos.",
        "vocabulary": [
          { "pt": "falarei", "fr": "je parlerai", "example": "Amanhã falarei com o chefe.",
            "exampleFr": "Demain, je parlerai au patron." },
          { "pt": "falará", "fr": "il/elle parlera", "example": "Ela falará na reunião.",
            "exampleFr": "Elle prendra la parole lors de la réunion." },
          { "pt": "falaremos", "fr": "nous parlerons", "example": "Falaremos sobre isso amanhã.",
            "exampleFr": "Nous en parlerons demain." },
          { "pt": "provavelmente", "fr": "probablement", "example": "Provavelmente chegarei tarde.",
            "exampleFr": "Je serai probablement en retard." },
          { "pt": "certamente", "fr": "certainement", "example": "Certamente virás à festa?",
            "exampleFr": "Viendrez-vous certainement à la fête ?" }
        ]
      },
      {
        "title": "Le conditionnel et l'hypothèse",
        "content": "Pour les hypothèses : 'Se + présent, futur' (hypothèse réelle) ; 'Se + imparfait du subjonctif, conditionnel' (hypothèse irréelle). Exemple : Se estudar, passarei. / Se estudasse, passaria.",
        "vocabulary": [
          { "pt": "eu falaria", "fr": "je parlerais", "example": "Eu falaria com ele se tivesse tempo.",
            "exampleFr": "Je lui parlerais si j'avais le temps." },
          { "pt": "você falaria", "fr": "vous parleriez", "example": "Você falaria melhor com prática.",
            "exampleFr": "Vous parleriez mieux avec de la pratique." },
          { "pt": "talvez", "fr": "peut-être", "example": "Talvez venha amanhã.",
            "exampleFr": "Peut-être que ça viendra demain." },
          { "pt": "caso", "fr": "au cas où", "example": "Caso precise, ligue-me.",
            "exampleFr": "Si tu en as besoin, appelle-moi." },
          { "pt": "a hipótese", "fr": "l'hypothèse", "example": "Há uma hipótese de mudar de plano.",
            "exampleFr": "Il y a une chance de changer les plans." }
        ]
      },
      {
        "title": "Futur irrégulier et expressions d'avenir",
        "content": "Quelques futurs irréguliers courants : fazer → farei, trazer → trarei, dizer → direi, poder → poderei, querer → quererei. Expressions utiles pour parler de l'avenir.",
        "vocabulary": [
          { "pt": "farei", "fr": "je ferai", "example": "Farei o que for necessário.",
            "exampleFr": "Je ferai tout ce qui est nécessaire." },
          { "pt": "direi", "fr": "je dirai", "example": "Direi a verdade amanhã.",
            "exampleFr": "Je dirai la vérité demain." },
          { "pt": "Se chover...", "fr": "S'il pleut...", "example": "Se chover, ficarei em casa.",
            "exampleFr": "S'il pleut, je resterai à la maison." },
          { "pt": "Se eu fosse rico...", "fr": "Si j'étais riche...", "example": "Se eu fosse rico, viajaria o mundo.",
            "exampleFr": "Si j'étais riche, je voyagerais à travers le monde." },
          { "pt": "com certeza", "fr": "certainement / avec certitude", "example": "Com certeza voltarei.",
            "exampleFr": "Je reviendrai certainement." }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Quel est le futur de 'falar' pour 'eu' ?", "options": ["falei", "falava", "falarei", "falaria"], "correct": 2, "explanation": "Futur de falar : infinitif + -ei = falarei." },
      { "type": "mcq", "question": "Quelle structure exprime une hypothèse réelle ?", "options": ["Se + imparfait, conditionnel", "Se + présent, futur", "Se + subjonctif, impératif", "Se + futur, passé"], "correct": 1, "explanation": "'Se chover, ficarei em casa.' = Si + présent indicatif, futur simple. Hypothèse réelle possible." },
      { "type": "mcq", "question": "'Talvez' déclenche généralement quel mode ?", "options": ["L'indicatif", "L'infinitif", "Le subjonctif", "L'impératif"], "correct": 2, "explanation": "'Talvez' (peut-être) est suivi du subjonctif : Talvez venha amanhã." },
      { "type": "translate", "question": "Traduisez : 'nous parlerons de ça demain'", "answer": "falaremos sobre isso amanhã" },
      { "type": "translate", "question": "Traduisez : 'au cas où tu aurais besoin, appelle-moi'", "answer": "caso precise, ligue-me" }
    ]
  },
  {
    "id": "b2-3",
    "level": "B2",
    "title": "Le discours indirect",
    "titlePT": "O discurso indireto",
    "icon": "💬",
    "description": "Rapportez les paroles de quelqu'un avec le discours indirect en portugais.",
    "xp": 120,
    "sections": [
      {
        "title": "Transformation directe → indirecte",
        "content": "Pour passer du discours direct au discours indirect, on utilise des verbes introducteurs : disse que (il a dit que), perguntou se (il a demandé si), pediu para (il a demandé de). La ponctuation et les pronoms changent.",
        "vocabulary": [
          { "pt": "disse que", "fr": "il/elle a dit que", "example": "Ela disse que estava cansada.",
            "exampleFr": "Elle a dit qu'elle était fatiguée." },
          { "pt": "perguntou se", "fr": "il/elle a demandé si", "example": "Ele perguntou se eu tinha fome.",
            "exampleFr": "Il m'a demandé si j'avais faim." },
          { "pt": "pediu para", "fr": "il/elle a demandé de", "example": "Ela pediu para eu esperar.",
            "exampleFr": "Elle m'a demandé d'attendre." },
          { "pt": "afirmar", "fr": "affirmer", "example": "Ele afirmou que sabia a verdade.",
            "exampleFr": "Il a affirmé qu'il connaissait la vérité." },
          { "pt": "declarar", "fr": "déclarer", "example": "A ministra declarou que apoiava o projeto.",
            "exampleFr": "La ministre a déclaré qu'elle soutenait le projet." }
        ]
      },
      {
        "title": "Concordance des temps et marqueurs",
        "content": "Au discours indirect, les temps changent : présent → imparfait, futur → conditionnel. Les adverbes aussi changent : aqui → ali, agora → naquele momento, amanhã → no dia seguinte.",
        "vocabulary": [
          { "pt": "acrescentar", "fr": "ajouter (en parlant)", "example": "Ele acrescentou que havia mais detalhes.",
            "exampleFr": "Il a ajouté qu'il y avait plus de détails." },
          { "pt": "segundo", "fr": "selon", "example": "Segundo o relatório, os dados estão corretos.",
            "exampleFr": "Selon le rapport, les données sont correctes." },
          { "pt": "de acordo com", "fr": "selon / conformément à", "example": "De acordo com ela, o projeto é viável.",
            "exampleFr": "Selon elle, le projet est viable." },
          { "pt": "no dia seguinte", "fr": "le lendemain", "example": "Disse que viria no dia seguinte.",
            "exampleFr": "Il a dit qu'il viendrait le lendemain." },
          { "pt": "naquele momento", "fr": "à ce moment-là", "example": "Explicou que naquele momento não podia.",
            "exampleFr": "Il a expliqué qu'à ce moment-là, il ne pouvait pas." }
        ]
      },
      {
        "title": "Pratique du discours rapporté",
        "content": "Exercez-vous à transformer le discours direct en indirect. N'oubliez pas : aqui → ali (là), agora → então (alors), hoje → naquele dia (ce jour-là).",
        "vocabulary": [
          { "pt": "pediu que", "fr": "il/elle a demandé que (subj.)", "example": "Ela pediu que eu viesse logo.",
            "exampleFr": "Elle m'a demandé de venir bientôt." },
          { "pt": "respondeu que", "fr": "il/elle a répondu que", "example": "Ele respondeu que não sabia.",
            "exampleFr": "Il a répondu qu'il ne savait pas." },
          { "pt": "explicou que", "fr": "il/elle a expliqué que", "example": "Ela explicou que era tarde.",
            "exampleFr": "Elle a expliqué qu'il était tard." },
          { "pt": "naquele dia", "fr": "ce jour-là", "example": "Disse que naquele dia estava ocupada.",
            "exampleFr": "Elle a dit qu'elle était occupée ce jour-là." },
          { "pt": "então", "fr": "alors / à ce moment-là", "example": "Explicou que então não tinha tempo.",
            "exampleFr": "Il a expliqué qu'il n'avait pas eu le temps à ce moment-là." }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Comment rapporter 'Estou cansado' au discours indirect ?", "options": ["Disse que está cansado", "Disse que estava cansado", "Disse que estarão cansados", "Disse que esteve cansado"], "correct": 1, "explanation": "Au discours indirect, le présent devient imparfait : está → estava." },
      { "type": "mcq", "question": "Comment rapporter une question oui/non ?", "options": ["avec 'que'", "avec 'se'", "avec 'como'", "avec 'o que'"], "correct": 1, "explanation": "Pour rapporter une question fermée, on utilise 'perguntou se' (il a demandé si)." },
      { "type": "mcq", "question": "Que signifie 'de acordo com' ?", "options": ["par rapport à", "selon / conformément à", "grâce à", "à cause de"], "correct": 1, "explanation": "'De acordo com' signifie 'selon' ou 'conformément à'. Ex: De acordo com o manual..." },
      { "type": "translate", "question": "Traduisez : 'elle a dit qu'elle était fatiguée'", "answer": "ela disse que estava cansada" },
      { "type": "translate", "question": "Traduisez : 'il a demandé si j'avais faim'", "answer": "ele perguntou se eu tinha fome" }
    ]
  },
  {
    "id": "b2-4",
    "level": "B2",
    "title": "Les connecteurs logiques avancés",
    "titlePT": "Os conectores lógicos avançados",
    "icon": "🔗",
    "description": "Enrichissez votre discours avec des connecteurs de cause, concession et conséquence.",
    "xp": 120,
    "sections": [
      {
        "title": "Cause et concession",
        "content": "Pour exprimer la cause en style soutenu : visto que, dado que, uma vez que (étant donné que, puisque). Pour la concession : apesar de (malgré), mesmo que / ainda que (même si) + subjonctif.",
        "vocabulary": [
          { "pt": "visto que", "fr": "étant donné que / vu que", "example": "Visto que está tarde, vamos embora.",
            "exampleFr": "Comme il est tard, allons-y." },
          { "pt": "dado que", "fr": "étant donné que", "example": "Dado que não veio, adiamos a reunião.",
            "exampleFr": "Comme il n'est pas venu, nous avons reporté la réunion." },
          { "pt": "uma vez que", "fr": "puisque / dès lors que", "example": "Uma vez que concordamos, assinemos.",
            "exampleFr": "Une fois que nous serons d’accord, signons." },
          { "pt": "apesar de", "fr": "malgré / en dépit de", "example": "Apesar do cansaço, continuou.",
            "exampleFr": "Malgré sa fatigue, il continue." },
          { "pt": "mesmo que", "fr": "même si (subj.)", "example": "Mesmo que chova, irei.",
            "exampleFr": "Même s'il pleut, j'y vais." }
        ]
      },
      {
        "title": "Conséquence et articulation",
        "content": "Pour exprimer la conséquence : portanto (donc), assim (ainsi), de modo que (de sorte que). Ces connecteurs structurent votre argumentation.",
        "vocabulary": [
          { "pt": "ainda que", "fr": "quoique / bien que (subj.)", "example": "Ainda que seja difícil, vale a pena.",
            "exampleFr": "Même si c'est difficile, ça vaut le coup." },
          { "pt": "portanto", "fr": "donc / par conséquent", "example": "Estudei muito, portanto passei.",
            "exampleFr": "J'ai beaucoup étudié, donc j'ai réussi." },
          { "pt": "logo", "fr": "donc / alors", "example": "Penso, logo existo.",
            "exampleFr": "Je pense, donc je suis." },
          { "pt": "consequentemente", "fr": "par conséquent", "example": "Faltou às aulas, consequentemente reprovou.",
            "exampleFr": "Il a manqué des cours et a donc échoué." },
          { "pt": "no entanto", "fr": "cependant / toutefois", "example": "É difícil, no entanto é possível.",
            "exampleFr": "C'est difficile, mais c'est possible." }
        ]
      },
      {
        "title": "Dialogue : Argumentation",
        "type": "conversation",
        "title": "Dialogue : Débat professionnel",
        "setup": "Maria e João debatem sobre uma decisão importante.",
        "speakers": [
          { "name": "Maria", "avatar": "👩🏻" },
          { "name": "João", "avatar": "👨🏽" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Dado que os resultados são positivos, devemos continuar.", "fr": "Étant donné que les résultats sont positifs, nous devons continuer.", "hl": ["Dado que"], "hlFr": ["Étant donné que"] },
          { "speaker": 1, "pt": "No entanto, os custos ___ muito.", "fr": "Cependant, les coûts ont beaucoup ___.", "blank": "aumentaram", "options": ["aumentaram", "diminuíram", "ficaram", "melhoraram"] },
          { "speaker": 0, "pt": "Mesmo que os custos sejam altos, os benefícios são maiores.", "fr": "Même si les coûts sont élevés, les avantages sont plus grands.", "hl": ["Mesmo que"], "hlFr": ["Même si"] },
          { "speaker": 1, "pt": "Portanto, ___.", "fr": "Donc, ___.", "blank": "concordo", "options": ["concordo", "discordo", "talvez", "nunca"] }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Quel connecteur exprime la cause soutenue ?", "options": ["portanto", "no entanto", "visto que", "todavia"], "correct": 2, "explanation": "'Visto que' = étant donné que. Exprime la cause en style formel/soutenu." },
      { "type": "mcq", "question": "'Mesmo que' est suivi de quel mode ?", "options": ["L'indicatif", "L'infinitif", "Le subjonctif", "Le conditionnel"], "correct": 2, "explanation": "'Mesmo que' (même si) est une conjonction de concession → subjonctif obligatoire." },
      { "type": "mcq", "question": "Que signifie 'no entanto' ?", "options": ["donc", "puisque", "cependant", "malgré"], "correct": 2, "explanation": "'No entanto' = cependant, toutefois. Connecteur d'opposition/concession." },
      { "type": "translate", "question": "Traduisez : 'j'ai beaucoup étudié, donc j'ai réussi'", "answer": "estudei muito, portanto passei" },
      { "type": "translate", "question": "Traduisez : 'même si c'est difficile, ça vaut la peine'", "answer": "mesmo que seja difícil, vale a pena" }
    ]
  },
  {
    "id": "b2-5",
    "level": "B2",
    "title": "Vocabulaire académique et professionnel",
    "titlePT": "Vocabulário académico e profissional",
    "icon": "💼",
    "description": "Maîtrisez le vocabulaire du monde du travail, des études et la communication formelle.",
    "xp": 120,
    "sections": [
      {
        "title": "Le monde du travail",
        "content": "Vocabulaire essentiel pour les contextes professionnels et académiques au Brésil et au Portugal.",
        "vocabulary": [
          { "pt": "a candidatura", "fr": "la candidature / la candidacy", "example": "Enviei a minha candidatura ontem.",
            "exampleFr": "J'ai envoyé ma candidature hier." },
          { "pt": "o currículo", "fr": "le CV / le curriculum vitae", "example": "O meu currículo está atualizado.",
            "exampleFr": "Mon CV est mis à jour." },
          { "pt": "a entrevista", "fr": "l'entretien / l'interview", "example": "Tenho uma entrevista de emprego amanhã.",
            "exampleFr": "J'ai un entretien d'embauche demain." },
          { "pt": "o contrato", "fr": "le contrat", "example": "Assinei o contrato de trabalho.",
            "exampleFr": "J'ai signé le contrat de travail." },
          { "pt": "a empresa", "fr": "l'entreprise / la société", "example": "Esta empresa tem 500 funcionários.",
            "exampleFr": "Cette entreprise compte 500 salariés." }
        ]
      },
      {
        "title": "Organisation et communication formelle",
        "content": "Pour les e-mails professionnels et les situations formelles : Venho por meio desta (Je vous contacte par ce biais), Atenciosamente (Cordialement), Aguardo retorno (Dans l'attente de votre réponse).",
        "vocabulary": [
          { "pt": "o prazo", "fr": "le délai / l'échéance", "example": "O prazo para entregar é sexta-feira.",
            "exampleFr": "La date limite de livraison est vendredi." },
          { "pt": "a reunião", "fr": "la réunion", "example": "A reunião começa às 9h.",
            "exampleFr": "La réunion commence à 9 heures du matin." },
          { "pt": "o relatório", "fr": "le rapport", "example": "Preciso de entregar o relatório hoje.",
            "exampleFr": "Je dois rendre le rapport aujourd'hui." },
          { "pt": "Atenciosamente", "fr": "Cordialement (clôture e-mail)", "example": "Atenciosamente, João Silva.",
            "exampleFr": "Cordialement, João Silva." },
          { "pt": "Aguardo retorno", "fr": "Dans l'attente de votre réponse", "example": "Aguardo retorno assim que possível.",
            "exampleFr": "J'ai hâte de revenir le plus tôt possible." }
        ]
      },
      {
        "title": "Expressions formelles et e-mail professionnel",
        "content": "En contexte professionnel, utilisez des formules de politesse précises. 'Venho por meio desta' ouvre formellement un e-mail. 'Em anexo' (ci-joint) et 'conforme combinado' (comme convenu) sont très utiles.",
        "vocabulary": [
          { "pt": "Venho por meio desta", "fr": "Je vous contacte par ce biais (formule d'ouverture)", "example": "Venho por meio desta solicitar uma reunião.",
            "exampleFr": "Je demande par la présente une rencontre." },
          { "pt": "em anexo", "fr": "en pièce jointe / ci-joint", "example": "Segue em anexo o relatório solicitado.",
            "exampleFr": "Le rapport demandé est joint." },
          { "pt": "conforme combinado", "fr": "comme convenu", "example": "Conforme combinado, envio os documentos.",
            "exampleFr": "Comme convenu, j'envoie les documents." },
          { "pt": "o funcionário", "fr": "l'employé", "example": "Os funcionários trabalharam muito este mês.",
            "exampleFr": "Les employés ont travaillé très dur ce mois-ci." },
          { "pt": "a proposta", "fr": "la proposition / l'offre", "example": "Analisámos a proposta com cuidado.",
            "exampleFr": "Nous avons soigneusement analysé la proposition." }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Comment dit-on 'le CV' en portugais ?", "options": ["a candidatura", "o currículo", "o relatório", "o contrato"], "correct": 1, "explanation": "'O currículo' = le CV (curriculum vitae). 'A candidatura' = la candidature." },
      { "type": "mcq", "question": "Que signifie 'Aguardo retorno' dans un e-mail ?", "options": ["J'attends votre appel", "Dans l'attente de votre réponse", "Merci de votre confiance", "Cordialement"], "correct": 1, "explanation": "'Aguardo retorno' (j'attends un retour) = Dans l'attente de votre réponse. Formule de clôture d'e-mail." },
      { "type": "mcq", "question": "Quel mot signifie 'le délai' ?", "options": ["a reunião", "o prazo", "a empresa", "o contrato"], "correct": 1, "explanation": "'O prazo' = le délai, l'échéance. Ex: O prazo é amanhã." },
      { "type": "translate", "question": "Traduisez : 'j'ai signé le contrat de travail'", "answer": "assinei o contrato de trabalho" },
      { "type": "translate", "question": "Traduisez : 'la réunion commence à 9h'", "answer": "a reunião começa às 9h" }
    ]
  },
  {
    "id": "b2-6",
    "level": "B2",
    "title": "Expressions idiomatiques brésiliennes",
    "titlePT": "Expressões idiomáticas brasileiras",
    "icon": "🇧🇷",
    "description": "Parlez comme un Brésilien avec les expressions idiomatiques et les registres de langue.",
    "xp": 120,
    "sections": [
      {
        "title": "Expressions du quotidien brésilien",
        "content": "Les Brésiliens utilisent de nombreuses expressions colorées dans la vie quotidienne. Ces tournures informelles sont essentielles pour comprendre la langue parlée.",
        "vocabulary": [
          { "pt": "não é para menos", "fr": "c'est bien normal / pas étonnant", "example": "Ele ganhou o prêmio — não é para menos, trabalhou muito!",
            "exampleFr": "Il a remporté le prix – pas étonnant, il a travaillé très dur !" },
          { "pt": "deixa pra lá", "fr": "laisse tomber / n'y pense plus", "example": "Deixa pra lá, não vale a pena discutir.",
            "exampleFr": "Laissez tomber, cela ne vaut pas la peine de discuter." },
          { "pt": "que saudade!", "fr": "comme tu m'as manqué ! / comme ça me manque !", "example": "Que saudade! Faz tanto tempo que não nos vemos!",
            "exampleFr": "Comme tu me manques ! Nous ne nous sommes pas vus depuis si longtemps !" },
          { "pt": "com certeza", "fr": "bien sûr / certainement", "example": "— Vai à festa? — Com certeza!",
            "exampleFr": "— Tu vas à la fête ? - À coup sûr!" },
          { "pt": "a gente", "fr": "on / nous (informel)", "example": "A gente vai ao cinema hoje?",
            "exampleFr": "On va au cinéma aujourd'hui ?" }
        ]
      },
      {
        "title": "Argot et registres de langue",
        "content": "Le portugais brésilien parlé est très différent du portugais écrit formel. 'Tá bom', 'de boa', 'vai dar certo' sont des expressions typiques du Brésil quotidien.",
        "vocabulary": [
          { "pt": "tá bom", "fr": "d'accord / OK", "example": "— Às 8h? — Tá bom!",
            "exampleFr": "— A 8h du matin ? - C'est bon!" },
          { "pt": "de boa", "fr": "tranquille / cool / sans problème", "example": "Tudo de boa por aqui.",
            "exampleFr": "Tout le meilleur ici." },
          { "pt": "vai dar certo", "fr": "ça va marcher / tout ira bien", "example": "Não se preocupe, vai dar certo!",
            "exampleFr": "Ne vous inquiétez pas, cela fonctionnera !" },
          { "pt": "formal: Está bem", "fr": "d'accord (formel)", "example": "Está bem, conforme combinado.",
            "exampleFr": "D'accord, comme convenu." },
          { "pt": "formal: Certamente", "fr": "certainement (formel)", "example": "Certamente comparecerei à reunião.",
            "exampleFr": "Je serai certainement présent à la réunion." }
        ]
      },
      {
        "title": "Dialogue : Entre amis brésiliens",
        "type": "conversation",
        "setup": "Lucas retrouve sa vieille amie Carla après plusieurs mois.",
        "speakers": [
          { "name": "Lucas", "avatar": "👨🏻" },
          { "name": "Carla", "avatar": "👩🏽" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Carla! Que saudade! Como você está?", "fr": "Carla ! Comme tu m'as manqué ! Comment tu vas ?", "hl": ["Que saudade"], "hlFr": ["Comme tu m'as manqué"] },
          { "speaker": 1, "pt": "Tudo de ___! E você?", "fr": "Tout va ___, tranquille ! Et toi ?", "blank": "boa", "options": ["boa", "mal", "ruim", "pesado"] },
          { "speaker": 0, "pt": "Também! A gente vai tomar um café?", "fr": "Pareil ! On va prendre un café ?", "hl": ["A gente"], "hlFr": ["On"] },
          { "speaker": 1, "pt": "Com certeza! ___!", "fr": "Bien sûr ! ___ !", "blank": "vai dar certo", "options": ["vai dar certo", "deixa pra lá", "não é para menos", "tá ruim"] }
        ]
      }
    ],
    "quiz": [
      { "type": "mcq", "question": "Que signifie 'deixa pra lá' ?", "options": ["C'est bien normal", "Laisse tomber", "Comme tu m'as manqué", "Bien sûr"], "correct": 1, "explanation": "'Deixa pra lá' = laisse tomber, n'y pense plus. Expression très fréquente en langage informel." },
      { "type": "mcq", "question": "Comment dit 'on / nous' de façon informelle en brésilien ?", "options": ["nós", "vocês", "a gente", "eles"], "correct": 2, "explanation": "'A gente' remplace 'nós' dans la langue parlée brésilienne. Très courant !" },
      { "type": "mcq", "question": "Quel est l'équivalent formel de 'tá bom' ?", "options": ["de boa", "vai dar certo", "que saudade", "Está bem"], "correct": 3, "explanation": "'Tá bom' (informel) = 'Está bem' (formel). Le 'tá' est une contraction de 'está'." },
      { "type": "translate", "question": "Traduisez (informel) : 'tout ira bien'", "answer": "vai dar certo" },
      { "type": "translate", "question": "Traduisez : 'laisse tomber, ça ne vaut pas la peine de discuter'", "answer": "deixa pra lá, não vale a pena discutir" }
    ]
  }
];
