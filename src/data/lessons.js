export const lessons = [
  {
    "id": "a1-1",
    "level": "A1",
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
            "example": "Olá, tudo bem?"
          },
          {
            "pt": "Bom dia",
            "fr": "Bonjour (matin)",
            "phonetic": "bom DI-a",
            "ptBR": "Bom dia",
            "example": "Bom dia, senhor Silva!"
          },
          {
            "pt": "Boa tarde",
            "fr": "Bon après-midi",
            "phonetic": "boa TAR-de",
            "ptBR": "Boa tarde",
            "example": "Boa tarde, como vai?"
          },
          {
            "pt": "Boa noite",
            "fr": "Bonsoir / Bonne nuit",
            "phonetic": "boa NOI-te",
            "ptBR": "Boa noite",
            "example": "Boa noite, até amanhã!"
          },
          {
            "pt": "Até logo",
            "fr": "À bientôt",
            "phonetic": "a-TE LO-go",
            "ptBR": "Até logo / Tchau",
            "example": "Até logo, amigo!"
          },
          {
            "pt": "Adeus",
            "fr": "Au revoir (définitif)",
            "phonetic": "a-DE-ush",
            "ptBR": "Adeus",
            "example": "Adeus, boa viagem!"
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
            "example": "Obrigado pela ajuda!"
          },
          {
            "pt": "Obrigada",
            "fr": "Merci (femme)",
            "phonetic": "o-bri-GA-da",
            "ptBR": "Obrigada",
            "example": "Obrigada, você é muito gentil!"
          },
          {
            "pt": "Por favor",
            "fr": "S'il vous plaît",
            "phonetic": "por fa-VOR",
            "ptBR": "Por favor",
            "example": "Um café, por favor."
          },
          {
            "pt": "De nada",
            "fr": "De rien",
            "phonetic": "de NA-da",
            "ptBR": "De nada",
            "example": "— Obrigado! — De nada!"
          },
          {
            "pt": "Desculpe",
            "fr": "Excusez-moi / Pardon",
            "phonetic": "des-KUL-pe",
            "ptBR": "Desculpa / Com licença",
            "example": "Desculpe, onde fica o museu?"
          },
          {
            "pt": "Com licença",
            "fr": "Excusez-moi (passage)",
            "phonetic": "com li-SEN-sa",
            "ptBR": "Com licença",
            "example": "Com licença, posso passar?"
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
            "example": "Olá! Tudo bem?"
          },
          {
            "pt": "Tudo bem!",
            "fr": "Tout va bien !",
            "phonetic": "TU-do beng",
            "ptBR": "Tudo bem!",
            "example": "— Tudo bem? — Tudo bem, obrigado!"
          },
          {
            "pt": "Como está?",
            "fr": "Comment allez-vous ? (formel)",
            "phonetic": "KO-mo es-TA",
            "ptBR": "Como vai?",
            "example": "Como está, senhor Diretor?"
          },
          {
            "pt": "Como vai?",
            "fr": "Comment vas-tu ? (informel)",
            "phonetic": "KO-mo vai",
            "ptBR": "Como vai?",
            "example": "Oi, como vai?"
          },
          {
            "pt": "Muito bem",
            "fr": "Très bien",
            "phonetic": "MUI-to beng",
            "ptBR": "Muito bem",
            "example": "Estou muito bem, obrigado!"
          },
          {
            "pt": "Mais ou menos",
            "fr": "Comme ci comme ça",
            "phonetic": "maish o ME-nosh",
            "ptBR": "Mais ou menos",
            "example": "— Como vai? — Mais ou menos..."
          }
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
          { "speaker": 0, "pt": "Bom dia, Ana!", "fr": "Bonjour, Ana !", "hl": ["Bom dia"] },
          { "speaker": 1, "pt": "Bom dia, Paulo! Tudo bem?", "fr": "Bonjour, Paulo ! Ça va ?", "hl": ["Bom dia", "Tudo bem"] },
          { "speaker": 0, "pt": "Muito bem, ___! E você?", "fr": "Très bien, ___ ! Et toi ?", "blank": "obrigado", "hl": ["Muito bem"] },
          { "speaker": 1, "pt": "Estou bem, obrigada!", "fr": "Je vais bien, merci !", "hl": ["obrigada"] }
        ],
        "options": ["obrigado", "obrigada", "de nada", "desculpe"]
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
      }
    ]
  },
  {
    "id": "a1-2",
    "level": "A1",
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
            "example": "Chamo-me Marie."
          },
          {
            "pt": "O meu nome é...",
            "fr": "Mon nom est...",
            "phonetic": "o meu NO-me e",
            "ptBR": "Meu nome é...",
            "example": "O meu nome é João."
          },
          {
            "pt": "Prazer!",
            "fr": "Enchanté(e) !",
            "phonetic": "pra-ZER",
            "ptBR": "Prazer!",
            "example": "— Chamo-me Ana. — Prazer!"
          },
          {
            "pt": "Muito prazer!",
            "fr": "Très enchanté(e) !",
            "phonetic": "MUI-to pra-ZER",
            "ptBR": "Muito prazer!",
            "example": "Muito prazer em conhecê-lo!"
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
            "example": "Tenho vinte e cinco anos."
          },
          {
            "pt": "Sou de...",
            "fr": "Je suis de...",
            "phonetic": "so de",
            "ptBR": "Sou de...",
            "example": "Sou de Paris."
          },
          {
            "pt": "Sou francês/francesa",
            "fr": "Je suis français(e)",
            "phonetic": "so fran-SESH / fran-SE-za",
            "ptBR": "Sou francês/francesa",
            "example": "Sou francesa, de Lyon."
          },
          {
            "pt": "Moro em...",
            "fr": "J'habite à...",
            "phonetic": "MO-ro eng",
            "ptBR": "Moro em...",
            "example": "Moro em Lisboa."
          },
          {
            "pt": "Falo francês",
            "fr": "Je parle français",
            "phonetic": "FA-lo fran-SESH",
            "ptBR": "Falo francês",
            "example": "Falo francês e um pouco de português."
          }
        ]
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
          { "speaker": 0, "pt": "Olá! Chamo-me Marie. Sou de Paris.", "fr": "Bonjour ! Je m'appelle Marie. Je suis de Paris.", "hl": ["Chamo-me", "Sou de"] },
          { "speaker": 1, "pt": "Prazer, Marie! O meu nome é João.", "fr": "Enchanté, Marie ! Mon nom est João.", "hl": ["Prazer", "O meu nome é"] },
          { "speaker": 0, "pt": "___ vinte e três anos. E você?", "fr": "J'ai vingt-trois ans. Et vous ?", "blank": "Tenho", "hl": [] },
          { "speaker": 1, "pt": "Tenho trinta anos. Moro em Lisboa!", "fr": "J'ai trente ans. J'habite à Lisbonne !", "hl": ["Tenho", "Moro em"] }
        ],
        "options": ["Tenho", "Sou", "Falo", "Moro"]
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
      }
    ]
  },
  {
    "id": "a1-3",
    "level": "A1",
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
            "example": "A reunião é na segunda-feira."
          },
          {
            "pt": "terça-feira",
            "fr": "mardi",
            "phonetic": "TER-sa-FEI-ra",
            "ptBR": "terça-feira",
            "example": "Tenho aula na terça."
          },
          {
            "pt": "quarta-feira",
            "fr": "mercredi",
            "phonetic": "KUAR-ta-FEI-ra",
            "ptBR": "quarta-feira",
            "example": "Na quarta há mercado."
          },
          {
            "pt": "quinta-feira",
            "fr": "jeudi",
            "phonetic": "KING-ta-FEI-ra",
            "ptBR": "quinta-feira",
            "example": "Saímos na quinta à noite."
          },
          {
            "pt": "sexta-feira",
            "fr": "vendredi",
            "phonetic": "SESH-ta-FEI-ra",
            "ptBR": "sexta-feira",
            "example": "Sexta-feira é véspera do fim de semana!"
          },
          {
            "pt": "sábado",
            "fr": "samedi",
            "phonetic": "SA-ba-do",
            "ptBR": "sábado",
            "example": "Ao sábado vou à praia."
          },
          {
            "pt": "domingo",
            "fr": "dimanche",
            "phonetic": "do-MING-go",
            "ptBR": "domingo",
            "example": "Domingo é dia de família."
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
            "example": "A primavera começa em março."
          },
          {
            "pt": "o verão",
            "fr": "l'été",
            "phonetic": "o ve-RAONG",
            "ptBR": "o verão",
            "example": "No verão vamos à praia."
          },
          {
            "pt": "o outono",
            "fr": "l'automne",
            "phonetic": "o o-TO-no",
            "ptBR": "o outono",
            "example": "As folhas caem no outono."
          },
          {
            "pt": "o inverno",
            "fr": "l'hiver",
            "phonetic": "o ing-VER-no",
            "ptBR": "o inverno",
            "example": "O inverno em Lisboa é suave."
          }
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
            "example": "Uma rosa vermelha."
          },
          {
            "pt": "azul",
            "fr": "bleu(e)",
            "phonetic": "a-ZUL",
            "ptBR": "azul",
            "example": "O céu é azul."
          },
          {
            "pt": "verde",
            "fr": "vert(e)",
            "phonetic": "VER-de",
            "ptBR": "verde",
            "example": "Uma maçã verde."
          },
          {
            "pt": "amarelo / amarela",
            "fr": "jaune",
            "phonetic": "a-ma-RE-lo / a-ma-RE-la",
            "ptBR": "amarelo / amarela",
            "example": "O sol é amarelo."
          },
          {
            "pt": "branco / branca",
            "fr": "blanc(he)",
            "phonetic": "BRANG-ko / BRANG-ka",
            "ptBR": "branco / branca",
            "example": "Uma parede branca."
          },
          {
            "pt": "preto / preta",
            "fr": "noir(e)",
            "phonetic": "PRE-to / PRE-ta",
            "ptBR": "preto / preta",
            "example": "Um gato preto."
          },
          {
            "pt": "cor-de-rosa",
            "fr": "rose",
            "phonetic": "kor de RO-za",
            "ptBR": "rosa",
            "example": "Uma flor cor-de-rosa."
          },
          {
            "pt": "laranja",
            "fr": "orange",
            "phonetic": "la-RANG-ja",
            "ptBR": "laranja",
            "example": "O pôr-do-sol laranja."
          },
          {
            "pt": "castanho / castanha",
            "fr": "marron",
            "phonetic": "kas-TA-nyo / kas-TA-nya",
            "ptBR": "marrom",
            "example": "Olhos castanhos."
          },
          {
            "pt": "cinzento / cinzenta",
            "fr": "gris(e)",
            "phonetic": "sing-ZENG-to / sing-ZENG-ta",
            "ptBR": "cinza",
            "example": "Um dia cinzento."
          }
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
            "example": "O meu pai é médico."
          },
          {
            "pt": "a mãe",
            "fr": "la mère",
            "phonetic": "a maing",
            "ptBR": "a mãe",
            "example": "A minha mãe cozinha bem."
          },
          {
            "pt": "o irmão",
            "fr": "le frère",
            "phonetic": "o ir-MAONG",
            "ptBR": "o irmão",
            "example": "Tenho um irmão mais velho."
          },
          {
            "pt": "a irmã",
            "fr": "la sœur",
            "phonetic": "a ir-MAONG",
            "ptBR": "a irmã",
            "example": "A minha irmã mora em Londres."
          },
          {
            "pt": "o avô",
            "fr": "le grand-père",
            "phonetic": "o a-VO",
            "ptBR": "o avô",
            "example": "O meu avô tem 80 anos."
          },
          {
            "pt": "a avó",
            "fr": "la grand-mère",
            "phonetic": "a a-VO",
            "ptBR": "a avó",
            "example": "A avó faz bolos deliciosos."
          },
          {
            "pt": "o filho",
            "fr": "le fils",
            "phonetic": "o FI-lyo",
            "ptBR": "o filho",
            "example": "O meu filho tem três anos."
          },
          {
            "pt": "a filha",
            "fr": "la fille",
            "phonetic": "a FI-lya",
            "ptBR": "a filha",
            "example": "A filha mais velha estuda medicina."
          },
          {
            "pt": "o tio",
            "fr": "l'oncle",
            "phonetic": "o TI-o",
            "ptBR": "o tio",
            "example": "O meu tio vive no Brasil."
          },
          {
            "pt": "a tia",
            "fr": "la tante",
            "phonetic": "a TI-a",
            "ptBR": "a tia",
            "example": "A tia Ana é muito divertida."
          },
          {
            "pt": "o primo / a prima",
            "fr": "le cousin / la cousine",
            "phonetic": "o PRI-mo / a PRI-ma",
            "ptBR": "o primo / a prima",
            "example": "Tenho muitos primos."
          },
          {
            "pt": "o marido",
            "fr": "le mari",
            "phonetic": "o ma-RI-do",
            "ptBR": "o marido",
            "example": "O meu marido é professor."
          },
          {
            "pt": "a mulher",
            "fr": "la femme (épouse)",
            "phonetic": "a mu-LYER",
            "ptBR": "a esposa / a mulher",
            "example": "A minha mulher é dentista."
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
            "example": "Eu sou francês."
          },
          {
            "pt": "tu és",
            "fr": "tu es",
            "phonetic": "tu esh",
            "ptBR": "você é",
            "example": "Tu és simpático."
          },
          {
            "pt": "ele/ela é",
            "fr": "il/elle est",
            "phonetic": "e-le / e-la e",
            "ptBR": "ele/ela é",
            "example": "Ela é médica."
          },
          {
            "pt": "nós somos",
            "fr": "nous sommes",
            "phonetic": "nosh SO-mosh",
            "ptBR": "nós somos",
            "example": "Nós somos amigos."
          },
          {
            "pt": "vós sois",
            "fr": "vous êtes",
            "phonetic": "vosh soish",
            "ptBR": "vocês são",
            "example": "Vós sois portugueses?"
          },
          {
            "pt": "eles/elas são",
            "fr": "ils/elles sont",
            "phonetic": "E-lesh / E-lash saong",
            "ptBR": "eles/elas são",
            "example": "Eles são brasileiros."
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
            "example": "Eu estou cansado."
          },
          {
            "pt": "tu estás",
            "fr": "tu es (en ce moment)",
            "phonetic": "tu esh-TASH",
            "ptBR": "você está",
            "example": "Tu estás feliz hoje?"
          },
          {
            "pt": "ele/ela está",
            "fr": "il/elle est (en ce moment)",
            "phonetic": "e-le esh-TA",
            "ptBR": "ele/ela está",
            "example": "Ela está em Lisboa."
          },
          {
            "pt": "nós estamos",
            "fr": "nous sommes (en ce moment)",
            "phonetic": "nosh esh-TA-mosh",
            "ptBR": "nós estamos",
            "example": "Nós estamos em casa."
          },
          {
            "pt": "vós estais",
            "fr": "vous êtes (en ce moment)",
            "phonetic": "vosh esh-TAISH",
            "ptBR": "vocês estão",
            "example": "Vós estais prontos?"
          },
          {
            "pt": "eles/elas estão",
            "fr": "ils/elles sont (en ce moment)",
            "phonetic": "E-lesh esh-TAONG",
            "ptBR": "eles/elas estão",
            "example": "Eles estão ocupados."
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
            "example": "Sou João, tenho 25 anos."
          },
          {
            "pt": "SER: nationalité",
            "fr": "Sou português (Je suis portugais)",
            "phonetic": "",
            "ptBR": "SER: nationalité",
            "example": "Ela é brasileira."
          },
          {
            "pt": "SER: profession",
            "fr": "Sou professor (Je suis professeur)",
            "phonetic": "",
            "ptBR": "SER: profession",
            "example": "O pai é engenheiro."
          },
          {
            "pt": "SER: heure/date",
            "fr": "São duas horas (Il est deux heures)",
            "phonetic": "",
            "ptBR": "SER: heure/date",
            "example": "Hoje é segunda-feira."
          },
          {
            "pt": "ESTAR: émotions",
            "fr": "Estou feliz (Je suis heureux maintenant)",
            "phonetic": "",
            "ptBR": "ESTAR: émotions",
            "example": "Ela está triste hoje."
          },
          {
            "pt": "ESTAR: localisation",
            "fr": "Estou em Paris (Je suis à Paris)",
            "phonetic": "",
            "ptBR": "ESTAR: localisation",
            "example": "O livro está na mesa."
          },
          {
            "pt": "ESTAR: santé",
            "fr": "Estou doente (Je suis malade)",
            "phonetic": "",
            "ptBR": "ESTAR: santé",
            "example": "Estou muito bem, obrigado!"
          },
          {
            "pt": "ESTAR: état temporaire",
            "fr": "A janela está aberta (La fenêtre est ouverte)",
            "phonetic": "",
            "ptBR": "ESTAR: état temporaire",
            "example": "O café está quente."
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
            "example": "o livro (le livre)"
          },
          {
            "pt": "a",
            "fr": "la (féminin singulier)",
            "phonetic": "a",
            "ptBR": "a",
            "example": "a casa (la maison)"
          },
          {
            "pt": "os",
            "fr": "les (masculin pluriel)",
            "phonetic": "osh",
            "ptBR": "os",
            "example": "os livros (les livres)"
          },
          {
            "pt": "as",
            "fr": "les (féminin pluriel)",
            "phonetic": "ash",
            "ptBR": "as",
            "example": "as casas (les maisons)"
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
            "example": "um café (un café)"
          },
          {
            "pt": "uma",
            "fr": "une (féminin)",
            "phonetic": "U-ma",
            "ptBR": "uma",
            "example": "uma mesa (une table)"
          },
          {
            "pt": "uns",
            "fr": "des (masculin)",
            "phonetic": "ungsh",
            "ptBR": "uns",
            "example": "uns amigos (des amis)"
          },
          {
            "pt": "umas",
            "fr": "des (féminin)",
            "phonetic": "U-mash",
            "ptBR": "umas",
            "example": "umas flores (des fleurs)"
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
            "example": "Um pão com manteiga, por favor."
          },
          {
            "pt": "o peixe",
            "fr": "le poisson",
            "phonetic": "o PEI-she",
            "ptBR": "o peixe",
            "example": "O bacalhau é o peixe nacional português."
          },
          {
            "pt": "a carne",
            "fr": "la viande",
            "phonetic": "a KAR-ne",
            "ptBR": "a carne",
            "example": "Prefiro carne de frango."
          },
          {
            "pt": "o arroz",
            "fr": "le riz",
            "phonetic": "o a-ROSH",
            "ptBR": "o arroz",
            "example": "No Brasil, arroz e feijão são essenciais."
          },
          {
            "pt": "o queijo",
            "fr": "le fromage",
            "phonetic": "o KEI-jo",
            "ptBR": "o queijo",
            "example": "Portugal tem queijos excelentes."
          },
          {
            "pt": "a fruta",
            "fr": "le fruit",
            "phonetic": "a FRU-ta",
            "ptBR": "a fruta",
            "example": "Como fruta todos os dias."
          },
          {
            "pt": "o legume",
            "fr": "le légume",
            "phonetic": "o le-GU-me",
            "ptBR": "o legume / a verdura",
            "example": "Os legumes fazem bem à saúde."
          },
          {
            "pt": "o café",
            "fr": "le café",
            "phonetic": "o ka-FE",
            "ptBR": "o café",
            "example": "Um café por favor — un bica!"
          },
          {
            "pt": "o vinho",
            "fr": "le vin",
            "phonetic": "o VI-nyo",
            "ptBR": "o vinho",
            "example": "O vinho português é famoso no mundo."
          },
          {
            "pt": "a água",
            "fr": "l'eau",
            "phonetic": "a A-gua",
            "ptBR": "a água",
            "example": "Pode trazer água, por favor?"
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
            "example": "Na minha opinião, o fado é fantástico."
          },
          {
            "pt": "Acho que...",
            "fr": "Je pense que...",
            "phonetic": "A-sho ke",
            "ptBR": "Acho que...",
            "example": "Acho que o português é uma língua bonita."
          },
          {
            "pt": "Penso que...",
            "fr": "Je crois que...",
            "phonetic": "PENG-so ke",
            "ptBR": "Penso que... / Acho que...",
            "example": "Penso que tens razão."
          },
          {
            "pt": "Concordo!",
            "fr": "Je suis d'accord !",
            "phonetic": "kong-KOR-do",
            "ptBR": "Concordo!",
            "example": "Concordo completamente!"
          },
          {
            "pt": "Discordo.",
            "fr": "Je ne suis pas d'accord.",
            "phonetic": "dish-KOR-do",
            "ptBR": "Discordo.",
            "example": "Discordo, acho que é diferente."
          },
          {
            "pt": "Tens razão.",
            "fr": "Tu as raison.",
            "phonetic": "tengsh ra-ZAONG",
            "ptBR": "Você tem razão.",
            "example": "Tens razão, é verdade."
          },
          {
            "pt": "Não sei.",
            "fr": "Je ne sais pas.",
            "phonetic": "naong sei",
            "ptBR": "Não sei.",
            "example": "Não sei, preciso de pensar."
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
            "example": "Apanho o autocarro número 28."
          },
          {
            "pt": "o metro",
            "fr": "le métro",
            "phonetic": "o ME-tro",
            "ptBR": "o metrô",
            "example": "O metro de Lisboa é muito moderno."
          },
          {
            "pt": "o comboio",
            "fr": "le train (Portugal)",
            "phonetic": "o kom-BOI-o",
            "ptBR": "o trem",
            "example": "Apanho o comboio para o Porto."
          },
          {
            "pt": "o avião",
            "fr": "l'avion",
            "phonetic": "o a-VIAONG",
            "ptBR": "o avião",
            "example": "O avião parte às 10h."
          },
          {
            "pt": "o táxi",
            "fr": "le taxi",
            "phonetic": "o TAK-si",
            "ptBR": "o táxi",
            "example": "Chame um táxi, por favor!"
          },
          {
            "pt": "o carro",
            "fr": "la voiture",
            "phonetic": "o KA-ro",
            "ptBR": "o carro",
            "example": "Tenho um carro novo."
          },
          {
            "pt": "a bicicleta",
            "fr": "le vélo",
            "phonetic": "a bi-si-KLE-ta",
            "ptBR": "a bicicleta",
            "example": "Ando de bicicleta todos os dias."
          },
          {
            "pt": "o barco",
            "fr": "le bateau",
            "phonetic": "o BAR-ko",
            "ptBR": "o barco",
            "example": "Tomamos o barco para a outra margem."
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
            "example": "A estação fica perto daqui?"
          },
          {
            "pt": "o bilhete",
            "fr": "le billet",
            "phonetic": "o bi-LYE-te",
            "ptBR": "o bilhete / a passagem",
            "example": "Quero um bilhete de ida e volta."
          },
          {
            "pt": "de ida e volta",
            "fr": "aller-retour",
            "phonetic": "de I-da e VOL-ta",
            "ptBR": "de ida e volta",
            "example": "Um bilhete de ida e volta para Sintra."
          },
          {
            "pt": "a paragem",
            "fr": "l'arrêt (de bus)",
            "phonetic": "a pa-RA-jeng",
            "ptBR": "a parada",
            "example": "A próxima paragem é o Rossio."
          },
          {
            "pt": "Onde fica...?",
            "fr": "Où se trouve... ?",
            "phonetic": "ON-de FI-ka",
            "ptBR": "Onde fica...?",
            "example": "Onde fica o metro mais próximo?"
          },
          {
            "pt": "Quero ir para...",
            "fr": "Je veux aller à...",
            "phonetic": "KE-ro ir PA-ra",
            "ptBR": "Quero ir para...",
            "example": "Quero ir para o aeroporto."
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
            "example": "Está sol, vamos à praia!"
          },
          {
            "pt": "Está a chover.",
            "fr": "Il pleut.",
            "phonetic": "esh-TA a sho-VER",
            "ptBR": "Está chovendo.",
            "example": "Está a chover, fica em casa."
          },
          {
            "pt": "Faz calor.",
            "fr": "Il fait chaud.",
            "phonetic": "fash ka-LOR",
            "ptBR": "Faz calor.",
            "example": "Em agosto faz muito calor em Lisboa."
          },
          {
            "pt": "Faz frio.",
            "fr": "Il fait froid.",
            "phonetic": "fash FRI-o",
            "ptBR": "Faz frio.",
            "example": "No inverno faz frio no norte de Portugal."
          },
          {
            "pt": "Está nublado.",
            "fr": "Il est nuageux.",
            "phonetic": "esh-TA nu-BLA-do",
            "ptBR": "Está nublado.",
            "example": "Hoje está nublado, leva um casaco."
          },
          {
            "pt": "Há vento.",
            "fr": "Il y a du vent.",
            "phonetic": "a VENG-to",
            "ptBR": "Está ventando.",
            "example": "Na costa há muito vento."
          },
          {
            "pt": "Está a nevar.",
            "fr": "Il neige.",
            "phonetic": "esh-TA a ne-VAR",
            "ptBR": "Está nevando.",
            "example": "Na Serra da Estrela está a nevar!"
          },
          {
            "pt": "a temperatura",
            "fr": "la température",
            "phonetic": "a teng-pe-ra-TU-ra",
            "ptBR": "a temperatura",
            "example": "A temperatura está a 25 graus."
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
            "example": "Estou a trabalhar agora."
          },
          {
            "pt": "estamos a comer",
            "fr": "nous sommes en train de manger",
            "phonetic": "esh-TA-mosh a ko-MER",
            "ptBR": "estamos comendo",
            "example": "Não posso falar, estamos a comer."
          },
          {
            "pt": "está a chover",
            "fr": "il est en train de pleuvoir",
            "phonetic": "esh-TA a sho-VER",
            "ptBR": "está chovendo",
            "example": "Olha, está a chover!"
          },
          {
            "pt": "estou a estudar",
            "fr": "je suis en train d'étudier",
            "phonetic": "esh-TO a esh-tu-DAR",
            "ptBR": "estou estudando",
            "example": "Estou a estudar português."
          }
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
            "example": "Dói-me a cabeça, preciso de aspirina."
          },
          {
            "pt": "Dói-me o estômago.",
            "fr": "J'ai mal à l'estomac.",
            "phonetic": "DOI-me o esh-TO-ma-go",
            "ptBR": "Estou com dor de estômago.",
            "example": "Dói-me o estômago desde ontem."
          },
          {
            "pt": "Tenho febre.",
            "fr": "J'ai de la fièvre.",
            "phonetic": "TE-nyo FE-bre",
            "ptBR": "Estou com febre.",
            "example": "Tenho febre — 38 graus."
          },
          {
            "pt": "Estou constipado(a).",
            "fr": "J'ai un rhume.",
            "phonetic": "esh-TO kong-shti-PA-do",
            "ptBR": "Estou resfriado(a).",
            "example": "Estou constipado desde segunda."
          },
          {
            "pt": "Estou cansado(a).",
            "fr": "Je suis fatigué(e).",
            "phonetic": "esh-TO kang-SA-do",
            "ptBR": "Estou cansado(a).",
            "example": "Estou muito cansado, não dormi bem."
          },
          {
            "pt": "Preciso de um médico.",
            "fr": "J'ai besoin d'un médecin.",
            "phonetic": "pre-SI-zo de ung ME-di-ko",
            "ptBR": "Preciso de um médico.",
            "example": "Preciso de um médico urgentemente."
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
            "example": "Há uma farmácia perto daqui?"
          },
          {
            "pt": "o medicamento",
            "fr": "le médicament",
            "phonetic": "o me-di-ka-MENG-to",
            "ptBR": "o remédio",
            "example": "O médico receitou este medicamento."
          },
          {
            "pt": "a receita",
            "fr": "l'ordonnance",
            "phonetic": "a re-SEI-ta",
            "ptBR": "a receita / a prescrição",
            "example": "Preciso de receita para este medicamento."
          },
          {
            "pt": "o comprimido",
            "fr": "le comprimé",
            "phonetic": "o kong-pri-MI-do",
            "ptBR": "o comprimido",
            "example": "Tome dois comprimidos por dia."
          },
          {
            "pt": "a consulta",
            "fr": "la consultation",
            "phonetic": "a kong-SUL-ta",
            "ptBR": "a consulta",
            "example": "Tenho consulta às 15h."
          },
          {
            "pt": "a urgência",
            "fr": "les urgences",
            "phonetic": "a ur-JENG-sia",
            "ptBR": "a emergência / o pronto-socorro",
            "example": "Vá à urgência imediatamente!"
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
            "example": "Moro num apartamento no terceiro andar."
          },
          {
            "pt": "a moradia",
            "fr": "la maison individuelle",
            "phonetic": "a mo-ra-DI-a",
            "ptBR": "a casa",
            "example": "Tenho uma moradia com jardim."
          },
          {
            "pt": "o andar",
            "fr": "l'étage",
            "phonetic": "o ang-DAR",
            "ptBR": "o andar",
            "example": "Moro no quinto andar."
          },
          {
            "pt": "o rés-do-chão",
            "fr": "le rez-de-chaussée",
            "phonetic": "o resh-do-SHAONG",
            "ptBR": "o térreo",
            "example": "A loja fica no rés-do-chão."
          },
          {
            "pt": "a garagem",
            "fr": "le garage",
            "phonetic": "a ga-RA-jeng",
            "ptBR": "a garagem",
            "example": "Tenho garagem para dois carros."
          },
          {
            "pt": "o terraço",
            "fr": "la terrasse",
            "phonetic": "o te-RA-so",
            "ptBR": "o terraço",
            "example": "O terraço tem vista para o mar."
          },
          {
            "pt": "o elevador",
            "fr": "l'ascenseur",
            "phonetic": "o e-le-va-DOR",
            "ptBR": "o elevador",
            "example": "O elevador está avariado."
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
            "example": "Ao sábado limpo a casa."
          },
          {
            "pt": "cozinhar",
            "fr": "cuisiner",
            "phonetic": "ko-zi-NYAR",
            "ptBR": "cozinhar",
            "example": "Gosto de cozinhar pratos portugueses."
          },
          {
            "pt": "lavar a roupa",
            "fr": "faire la lessive",
            "phonetic": "la-VAR a RO-pa",
            "ptBR": "lavar a roupa",
            "example": "Lavo a roupa na quinta-feira."
          },
          {
            "pt": "arrumar o quarto",
            "fr": "ranger la chambre",
            "phonetic": "a-ru-MAR o KUA-rto",
            "ptBR": "arrumar o quarto",
            "example": "Arruma o quarto antes de sair!"
          },
          {
            "pt": "tomar banho",
            "fr": "prendre une douche",
            "phonetic": "to-MAR BA-nyo",
            "ptBR": "tomar banho",
            "example": "Tomo banho todas as manhãs."
          },
          {
            "pt": "dormir",
            "fr": "dormir",
            "phonetic": "dor-MIR",
            "ptBR": "dormir",
            "example": "Durmo oito horas por noite."
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
            "example": "Boa noite, uma mesa para dois, por favor."
          },
          {
            "pt": "A ementa / o cardápio",
            "fr": "Le menu / la carte",
            "phonetic": "a e-MENG-ta",
            "ptBR": "o cardápio",
            "example": "Pode trazer a ementa, por favor?"
          },
          {
            "pt": "Quero pedir...",
            "fr": "Je voudrais commander...",
            "phonetic": "KE-ro pe-DIR",
            "ptBR": "Quero pedir...",
            "example": "Quero pedir o bacalhau à brás."
          },
          {
            "pt": "A conta, por favor.",
            "fr": "L'addition, s'il vous plaît.",
            "phonetic": "a KONG-ta por fa-VOR",
            "ptBR": "A conta, por favor.",
            "example": "Pode trazer a conta, por favor?"
          },
          {
            "pt": "Está delicioso!",
            "fr": "C'est délicieux !",
            "phonetic": "esh-TA de-li-SI-o-zo",
            "ptBR": "Está delicioso!",
            "example": "Este peixe está delicioso!"
          },
          {
            "pt": "Sou alérgico(a) a...",
            "fr": "Je suis allergique à...",
            "phonetic": "so a-LER-ji-ko a",
            "ptBR": "Sou alérgico(a) a...",
            "example": "Sou alérgico a frutos do mar."
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
            "example": "Vou ao supermercado comprar frutas."
          },
          {
            "pt": "o mercado",
            "fr": "le marché",
            "phonetic": "o mer-KA-do",
            "ptBR": "o mercado",
            "example": "Ao sábado vou ao mercado."
          },
          {
            "pt": "Quanto custa?",
            "fr": "Combien ça coûte ?",
            "phonetic": "KUANG-to KUSH-ta",
            "ptBR": "Quanto custa?",
            "example": "Quanto custa este queijo?"
          },
          {
            "pt": "Está caro.",
            "fr": "C'est cher.",
            "phonetic": "esh-TA KA-ro",
            "ptBR": "Está caro.",
            "example": "O peixe está muito caro hoje."
          },
          {
            "pt": "Está barato.",
            "fr": "C'est bon marché.",
            "phonetic": "esh-TA ba-RA-to",
            "ptBR": "Está barato.",
            "example": "A fruta está muito barata!"
          },
          {
            "pt": "meio quilo de...",
            "fr": "un demi-kilo de...",
            "phonetic": "MEI-o KI-lo de",
            "ptBR": "meio quilo de...",
            "example": "Quero meio quilo de tomates."
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
            "example": "Falei com ele ontem."
          },
          {
            "pt": "comeu",
            "fr": "il/elle a mangé",
            "phonetic": "ko-ME-u",
            "ptBR": "comeu",
            "example": "Ela comeu peixe ao almoço."
          },
          {
            "pt": "partimos",
            "fr": "nous sommes partis",
            "phonetic": "par-TI-mosh",
            "ptBR": "partimos",
            "example": "Partimos cedo esta manhã."
          },
          {
            "pt": "foi",
            "fr": "il/elle est allé(e)",
            "phonetic": "foi",
            "ptBR": "foi",
            "example": "Ele foi ao cinema."
          },
          {
            "pt": "tive",
            "fr": "j'ai eu",
            "phonetic": "TI-ve",
            "ptBR": "tive",
            "example": "Tive uma boa ideia."
          },
          {
            "pt": "fiz",
            "fr": "j'ai fait",
            "phonetic": "fiz",
            "ptBR": "fiz",
            "example": "Fiz o jantar ontem à noite."
          },
          {
            "pt": "disse",
            "fr": "j'ai dit",
            "phonetic": "DI-se",
            "ptBR": "disse",
            "example": "Disse a verdade."
          },
          {
            "pt": "vim",
            "fr": "je suis venu(e)",
            "phonetic": "ving",
            "ptBR": "vim",
            "example": "Vim de França para aprender português."
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
            "example": "Ontem fui ao teatro."
          },
          {
            "pt": "anteontem",
            "fr": "avant-hier",
            "phonetic": "ang-te-ONG-teng",
            "ptBR": "anteontem",
            "example": "Anteontem choveu muito."
          },
          {
            "pt": "na semana passada",
            "fr": "la semaine dernière",
            "phonetic": "na se-MA-na pa-SA-da",
            "ptBR": "na semana passada",
            "example": "Na semana passada fui ao Porto."
          },
          {
            "pt": "no ano passado",
            "fr": "l'année dernière",
            "phonetic": "no A-no pa-SA-do",
            "ptBR": "no ano passado",
            "example": "No ano passado visitei Lisboa."
          },
          {
            "pt": "há dois dias",
            "fr": "il y a deux jours",
            "phonetic": "a doish DI-ash",
            "ptBR": "há dois dias",
            "example": "Encontrei-o há dois dias."
          },
          {
            "pt": "já",
            "fr": "déjà",
            "phonetic": "ja",
            "ptBR": "já",
            "example": "Já fui ao Brasil!"
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
            "example": "Quando era criança, falava muito."
          },
          {
            "pt": "comia",
            "fr": "je mangeais",
            "phonetic": "ko-MI-a",
            "ptBR": "comia",
            "example": "Comia sempre peixe ao domingo."
          },
          {
            "pt": "era",
            "fr": "j'étais / il était",
            "phonetic": "E-ra",
            "ptBR": "era",
            "example": "Ela era professora quando jovem."
          },
          {
            "pt": "tinha",
            "fr": "j'avais",
            "phonetic": "TI-nya",
            "ptBR": "tinha",
            "example": "Tinha um cão quando era criança."
          },
          {
            "pt": "ia",
            "fr": "j'allais",
            "phonetic": "I-a",
            "ptBR": "ia",
            "example": "Ia ao cinema todos os sábados."
          },
          {
            "pt": "estudava",
            "fr": "j'étudiais",
            "phonetic": "esh-tu-DA-va",
            "ptBR": "estudava",
            "example": "Antes estudava à noite."
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
            "example": "Quando era criança, adorava jogar futebol."
          },
          {
            "pt": "Antes...",
            "fr": "Avant...",
            "phonetic": "ANG-tesh",
            "ptBR": "Antes...",
            "example": "Antes morava em Paris."
          },
          {
            "pt": "naquela época",
            "fr": "à cette époque-là",
            "phonetic": "na-KE-la E-po-ka",
            "ptBR": "naquela época",
            "example": "Naquela época não havia internet."
          },
          {
            "pt": "costumava + infinitivo",
            "fr": "avoir l'habitude de...",
            "phonetic": "kosh-tu-MA-va",
            "ptBR": "costumava",
            "example": "Costumava acordar cedo todos os dias."
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
            "example": "Amanhã falarei com o diretor."
          },
          {
            "pt": "comerás",
            "fr": "tu mangeras",
            "phonetic": "ko-me-RASH",
            "ptBR": "vai comer",
            "example": "Amanhã comerás na minha casa!"
          },
          {
            "pt": "virá",
            "fr": "il/elle viendra",
            "phonetic": "vi-RA",
            "ptBR": "vai vir",
            "example": "Ela virá à festa."
          },
          {
            "pt": "seremos",
            "fr": "nous serons",
            "phonetic": "se-RE-mosh",
            "ptBR": "vamos ser",
            "example": "Seremos grandes amigos."
          },
          {
            "pt": "farão",
            "fr": "ils/elles feront",
            "phonetic": "fa-RAONG",
            "ptBR": "vão fazer",
            "example": "Eles farão uma viagem ao Brasil."
          },
          {
            "pt": "amanhã",
            "fr": "demain",
            "phonetic": "a-ma-NYAONG",
            "ptBR": "amanhã",
            "example": "Amanhã iremos ao museu."
          },
          {
            "pt": "no próximo mês",
            "fr": "le mois prochain",
            "phonetic": "no PROKS-si-mo mesh",
            "ptBR": "no próximo mês",
            "example": "No próximo mês mudamos de casa."
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
            "example": "Gostaria de visitar Lisboa um dia."
          },
          {
            "pt": "poderia...",
            "fr": "pourriez-vous... / je pourrais...",
            "phonetic": "po-de-RI-a",
            "ptBR": "poderia...",
            "example": "Poderia trazer a ementa, por favor?"
          },
          {
            "pt": "seria",
            "fr": "ce serait",
            "phonetic": "se-RI-a",
            "ptBR": "seria",
            "example": "Seria fantástico viver no Algarve!"
          },
          {
            "pt": "queria",
            "fr": "je voudrais",
            "phonetic": "ke-RI-a",
            "ptBR": "queria",
            "example": "Queria um café e um pastel, por favor."
          },
          {
            "pt": "deveria",
            "fr": "je devrais",
            "phonetic": "de-ve-RI-a",
            "ptBR": "deveria",
            "example": "Deveria estudar mais português."
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
            "example": "Eu falo português."
          },
          {
            "pt": "tu / você",
            "fr": "tu / vous",
            "phonetic": "tu / vo-SE",
            "ptBR": "você (courant)",
            "example": "Tu falas muito bem! (PT) / Você fala! (BR)"
          },
          {
            "pt": "ele / ela",
            "fr": "il / elle",
            "phonetic": "E-le / E-la",
            "ptBR": "ele / ela",
            "example": "Ela é professora."
          },
          {
            "pt": "nós / a gente",
            "fr": "nous",
            "phonetic": "nosh / a JENG-te",
            "ptBR": "a gente (courant)",
            "example": "A gente vai ao cinema. (BR / fam.)"
          },
          {
            "pt": "eles / elas",
            "fr": "ils / elles",
            "phonetic": "E-lesh / E-lash",
            "ptBR": "eles / elas",
            "example": "Eles estão a estudar."
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
            "example": "O Pedro? Vejo-o todos os dias."
          },
          {
            "pt": "Conheço-a.",
            "fr": "Je la connais.",
            "phonetic": "ko-NYE-so-a",
            "ptBR": "Eu a conheço.",
            "example": "A Maria? Conheço-a bem."
          },
          {
            "pt": "Comprei-o.",
            "fr": "Je l'ai acheté.",
            "phonetic": "kong-PREI-o",
            "ptBR": "Eu o comprei.",
            "example": "O livro? Comprei-o ontem."
          },
          {
            "pt": "Amo-te.",
            "fr": "Je t'aime.",
            "phonetic": "A-mo-te",
            "ptBR": "Eu te amo.",
            "example": "Amo-te muito! (PT-PT)"
          },
          {
            "pt": "Diz-me...",
            "fr": "Dis-moi...",
            "phonetic": "dish-me",
            "ptBR": "Me diz...",
            "example": "Diz-me a verdade. (PT) / Me diz a verdade. (BR)"
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
            "example": "Gosto de português porque é bonito."
          },
          {
            "pt": "portanto",
            "fr": "donc / par conséquent",
            "phonetic": "por-TANG-to",
            "ptBR": "portanto / então",
            "example": "Estudei muito, portanto passei no exame."
          },
          {
            "pt": "mas",
            "fr": "mais",
            "phonetic": "mash",
            "ptBR": "mas",
            "example": "Gosto de vinho, mas não bebo muito."
          },
          {
            "pt": "no entanto",
            "fr": "cependant / pourtant",
            "phonetic": "no eng-TANG-to",
            "ptBR": "no entanto / porém",
            "example": "É caro, no entanto vale a pena."
          },
          {
            "pt": "além disso",
            "fr": "de plus / en outre",
            "phonetic": "a-LENG di-SO",
            "ptBR": "além disso",
            "example": "O país é bonito. Além disso, a comida é excelente."
          },
          {
            "pt": "por isso",
            "fr": "c'est pourquoi / donc",
            "phonetic": "por I-so",
            "ptBR": "por isso",
            "example": "Gosto de português, por isso estudo todos os dias."
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
            "example": "Embora chova, vou sair."
          },
          {
            "pt": "apesar de",
            "fr": "malgré / en dépit de",
            "phonetic": "a-pe-ZAR de",
            "ptBR": "apesar de",
            "example": "Apesar do frio, fui nadar."
          },
          {
            "pt": "se",
            "fr": "si (condition)",
            "phonetic": "se",
            "ptBR": "se",
            "example": "Se tiver tempo, vou ao museu."
          },
          {
            "pt": "quando",
            "fr": "quand / lorsque",
            "phonetic": "KUANG-do",
            "ptBR": "quando",
            "example": "Quando chegar, telefona-me."
          },
          {
            "pt": "mesmo que",
            "fr": "même si",
            "phonetic": "MES-mo ke",
            "ptBR": "mesmo que",
            "example": "Mesmo que seja difícil, não desisto."
          },
          {
            "pt": "desde que",
            "fr": "du moment que / depuis que",
            "phonetic": "DESH-de ke",
            "ptBR": "desde que",
            "example": "Estudo português desde que cheguei a Lisboa."
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
          { "pt": "Onde fica...?", "fr": "Où se trouve... ?", "example": "Onde fica o museu?" },
          { "pt": "à esquerda", "fr": "à gauche", "phonetic": "a esh-QUER-da", "example": "Vire à esquerda." },
          { "pt": "à direita", "fr": "à droite", "phonetic": "a di-REI-ta", "example": "Vire à direita." },
          { "pt": "em frente", "fr": "tout droit / en face", "example": "Vá em frente." },
          { "pt": "perto", "fr": "près", "example": "O hotel fica perto." },
          { "pt": "longe", "fr": "loin", "example": "A praia não está longe." }
        ]
      },
      {
        "title": "Les lieux de la ville",
        "content": "Vocabulaire des lieux essentiels pour se repérer dans une ville portugaise.",
        "vocabulary": [
          { "pt": "a rua", "fr": "la rue", "example": "A rua Augusta é bonita." },
          { "pt": "a praça", "fr": "la place", "example": "A praça do Comércio." },
          { "pt": "o banco", "fr": "la banque", "example": "O banco fica à esquerda." },
          { "pt": "a farmácia", "fr": "la pharmacie", "example": "Preciso de uma farmácia." },
          { "pt": "o supermercado", "fr": "le supermarché", "example": "O supermercado está em frente." },
          { "pt": "a estação de metro", "fr": "la station de métro", "example": "A estação fica perto." }
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
          { "pt": "Estou doente.", "fr": "Je suis malade.", "example": "Estou doente desde ontem." },
          { "pt": "Tenho febre.", "fr": "J'ai de la fièvre.", "example": "Tenho febre alta." },
          { "pt": "Tenho dores de cabeça.", "fr": "J'ai mal à la tête.", "example": "Tenho muitas dores de cabeça." },
          { "pt": "Tenho dores de barriga.", "fr": "J'ai mal au ventre.", "example": "Tenho dores de barriga há dois dias." },
          { "pt": "Tenho tosse.", "fr": "J'ai la toux.", "example": "Tenho tosse seca." },
          { "pt": "Estou constipado/a.", "fr": "J'ai un rhume.", "phonetic": "es-tou cons-ti-PA-do", "example": "Estou constipado e tenho febre." }
        ]
      },
      {
        "title": "À la pharmacie",
        "content": "Le/la pharmacien(ne) : 'o farmacêutico / a farmacêutica'. Vous pouvez acheter des médicaments sans ordonnance pour les petits maux.",
        "vocabulary": [
          { "pt": "Preciso de um medicamento.", "fr": "J'ai besoin d'un médicament.", "example": "Preciso de um medicamento para a tosse." },
          { "pt": "o comprimido", "fr": "le comprimé", "example": "Tomo dois comprimidos por dia." },
          { "pt": "o xarope", "fr": "le sirop", "example": "Este xarope é para a tosse." },
          { "pt": "a receita médica", "fr": "l'ordonnance", "example": "Tem receita médica?" },
          { "pt": "Tem algo para...?", "fr": "Vous avez quelque chose pour... ?", "example": "Tem algo para a febre?" },
          { "pt": "a dose", "fr": "la dose", "example": "Qual é a dose recomendada?" }
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
          { "pt": "falar → fale, fales, fale", "fr": "parler → que je parle, que tu parles...", "example": "Espero que ele fale português." },
          { "pt": "comer → coma, comas, coma", "fr": "manger → que je mange...", "example": "Quero que eles comam bem." },
          { "pt": "ser → seja, sejas, seja", "fr": "être (ser) → que je sois...", "example": "Espero que sejas feliz." },
          { "pt": "estar → esteja, estejas, esteja", "fr": "être (estar) → que je sois...", "example": "Quero que estejas aqui." },
          { "pt": "ter → tenha, tenhas, tenha", "fr": "avoir → que j'aie...", "example": "É importante que tenhas paciência." },
          { "pt": "ir → vá, vás, vá", "fr": "aller → que j'aille...", "example": "Prefiro que vás tu." }
        ]
      },
      {
        "title": "Quand utiliser le subjonctif",
        "content": "Le subjonctif s'emploie après certaines conjonctions et expressions : querer que, esperar que, embora (bien que), para que (pour que), antes de (avant de)...",
        "vocabulary": [
          { "pt": "Espero que...", "fr": "J'espère que...", "example": "Espero que venhas à festa." },
          { "pt": "Quero que...", "fr": "Je veux que...", "example": "Quero que fales mais devagar." },
          { "pt": "Embora...", "fr": "Bien que...", "example": "Embora esteja cansado, trabalho." },
          { "pt": "Para que...", "fr": "Pour que...", "example": "Falo devagar para que entendam." },
          { "pt": "É importante que...", "fr": "Il est important que...", "example": "É importante que estudes." },
          { "pt": "Duvido que...", "fr": "Je doute que...", "example": "Duvido que ele venha." }
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
          { "pt": "gostar → gostaria", "fr": "aimer → j'aimerais", "example": "Gostaria de um café, faz favor." },
          { "pt": "querer → queria", "fr": "vouloir → je voudrais", "example": "Queria reservar uma mesa." },
          { "pt": "poder → poderia", "fr": "pouvoir → je pourrais", "example": "Poderia falar mais devagar?" },
          { "pt": "ter → teria", "fr": "avoir → j'aurais", "example": "Teria sido melhor assim." },
          { "pt": "ser → seria", "fr": "être → je serais", "example": "Seria perfeito!" },
          { "pt": "fazer → faria", "fr": "faire → je ferais", "example": "Faria tudo por ti." }
        ]
      },
      {
        "title": "Usages du conditionnel",
        "content": "Le conditionnel s'utilise pour : la politesse (gostaria = j'aimerais), l'hypothèse (se... faria = si... je ferais), ou le futur dans le passé.",
        "vocabulary": [
          { "pt": "Se tivesse tempo...", "fr": "Si j'avais du temps...", "example": "Se tivesse tempo, viajaria mais." },
          { "pt": "Poderia ajudar-me?", "fr": "Pourriez-vous m'aider ?", "example": "Poderia ajudar-me, por favor?" },
          { "pt": "Gostaria de...", "fr": "J'aimerais...", "example": "Gostaria de aprender piano." },
          { "pt": "No teu lugar...", "fr": "À ta place...", "example": "No teu lugar, faria diferente." },
          { "pt": "seria melhor", "fr": "ce serait mieux", "example": "Seria melhor falar com ele." },
          { "pt": "Na minha opinião...", "fr": "À mon avis...", "example": "Na minha opinião, seria melhor assim." }
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
          { "pt": "Vou viajar.", "fr": "Je vais voyager.", "example": "Vou viajar no verão." },
          { "pt": "Vais estudar?", "fr": "Tu vas étudier ?", "example": "Vais estudar para o exame?" },
          { "pt": "Ele vai trabalhar.", "fr": "Il va travailler.", "example": "Ele vai trabalhar amanhã." },
          { "pt": "Vamos sair!", "fr": "Nous allons sortir !", "example": "Esta noite vamos sair juntos." },
          { "pt": "logo", "fr": "tout à l'heure / bientôt", "example": "Faço isso logo." },
          { "pt": "no próximo ano", "fr": "l'année prochaine", "example": "No próximo ano mudo de emprego." }
        ]
      },
      {
        "title": "Le futur simple",
        "content": "Le futur simple (futuro do indicativo) s'utilise à l'écrit ou pour le style plus formel. Formation : infinitif + -ei, -ás, -á, -emos, -eis, -ão.",
        "vocabulary": [
          { "pt": "falarei", "fr": "je parlerai", "example": "Falarei com ele amanhã." },
          { "pt": "virás", "fr": "tu viendras", "example": "Virás à festa?" },
          { "pt": "será", "fr": "ce sera / il sera", "example": "Será que ele vem?" },
          { "pt": "faremos", "fr": "nous ferons", "example": "Faremos o melhor possível." },
          { "pt": "Quem sabe...", "fr": "Qui sait...", "example": "Quem sabe, talvez vá a Lisboa." },
          { "pt": "um dia", "fr": "un jour", "example": "Um dia vou falar português fluente." }
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
          { "pt": "fale", "fr": "que je parle (subj.)", "example": "É importante que você fale devagar." },
          { "pt": "fales", "fr": "que tu parles (subj.)", "example": "Quero que fales com ela." },
          { "pt": "falemos", "fr": "que nous parlions (subj.)", "example": "Para que falemos melhor, pratiquemos." },
          { "pt": "a possibilidade", "fr": "la possibilité", "example": "Existe a possibilidade de chover." },
          { "pt": "o desejo", "fr": "le désir", "example": "É o meu maior desejo." }
        ]
      },
      {
        "title": "Verbes irréguliers au subjonctif",
        "content": "Certains verbes ont un subjonctif irrégulier très différent de l'indicatif. À mémoriser absolument : ser → seja, ter → tenha, estar → esteja, ir → vá.",
        "vocabulary": [
          { "pt": "seja", "fr": "que ce soit (subj. de ser)", "example": "Quero que isso seja verdade." },
          { "pt": "tenha", "fr": "qu'il ait (subj. de ter)", "example": "É importante que você tenha paciência." },
          { "pt": "esteja", "fr": "qu'il soit (subj. de estar)", "example": "Espero que esteja bem." },
          { "pt": "vá", "fr": "qu'il aille (subj. de ir)", "example": "É melhor que você vá agora." },
          { "pt": "a necessidade", "fr": "la nécessité", "example": "Há necessidade de mudar." }
        ]
      },
      {
        "title": "Emplois du subjonctif",
        "content": "Le subjonctif s'emploie après certaines expressions : quero que (je veux que), é importante que (il est important que), embora (bien que), para que (pour que).",
        "vocabulary": [
          { "pt": "quero que", "fr": "je veux que", "example": "Quero que você venha." },
          { "pt": "é importante que", "fr": "il est important que", "example": "É importante que estudemos." },
          { "pt": "embora", "fr": "bien que / quoique", "example": "Embora esteja cansado, continuo." },
          { "pt": "para que", "fr": "pour que / afin que", "example": "Estudo para que possa comunicar." },
          { "pt": "embora", "fr": "bien que", "example": "Embora seja difícil, é possível." }
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
          { "pt": "falarei", "fr": "je parlerai", "example": "Amanhã falarei com o chefe." },
          { "pt": "falará", "fr": "il/elle parlera", "example": "Ela falará na reunião." },
          { "pt": "falaremos", "fr": "nous parlerons", "example": "Falaremos sobre isso amanhã." },
          { "pt": "provavelmente", "fr": "probablement", "example": "Provavelmente chegarei tarde." },
          { "pt": "certamente", "fr": "certainement", "example": "Certamente virás à festa?" }
        ]
      },
      {
        "title": "Le conditionnel et l'hypothèse",
        "content": "Pour les hypothèses : 'Se + présent, futur' (hypothèse réelle) ; 'Se + imparfait du subjonctif, conditionnel' (hypothèse irréelle). Exemple : Se estudar, passarei. / Se estudasse, passaria.",
        "vocabulary": [
          { "pt": "eu falaria", "fr": "je parlerais", "example": "Eu falaria com ele se tivesse tempo." },
          { "pt": "você falaria", "fr": "vous parleriez", "example": "Você falaria melhor com prática." },
          { "pt": "talvez", "fr": "peut-être", "example": "Talvez venha amanhã." },
          { "pt": "caso", "fr": "au cas où", "example": "Caso precise, ligue-me." },
          { "pt": "a hipótese", "fr": "l'hypothèse", "example": "Há uma hipótese de mudar de plano." }
        ]
      },
      {
        "title": "Futur irrégulier et expressions d'avenir",
        "content": "Quelques futurs irréguliers courants : fazer → farei, trazer → trarei, dizer → direi, poder → poderei, querer → quererei. Expressions utiles pour parler de l'avenir.",
        "vocabulary": [
          { "pt": "farei", "fr": "je ferai", "example": "Farei o que for necessário." },
          { "pt": "direi", "fr": "je dirai", "example": "Direi a verdade amanhã." },
          { "pt": "Se chover...", "fr": "S'il pleut...", "example": "Se chover, ficarei em casa." },
          { "pt": "Se eu fosse rico...", "fr": "Si j'étais riche...", "example": "Se eu fosse rico, viajaria o mundo." },
          { "pt": "com certeza", "fr": "certainement / avec certitude", "example": "Com certeza voltarei." }
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
          { "pt": "disse que", "fr": "il/elle a dit que", "example": "Ela disse que estava cansada." },
          { "pt": "perguntou se", "fr": "il/elle a demandé si", "example": "Ele perguntou se eu tinha fome." },
          { "pt": "pediu para", "fr": "il/elle a demandé de", "example": "Ela pediu para eu esperar." },
          { "pt": "afirmar", "fr": "affirmer", "example": "Ele afirmou que sabia a verdade." },
          { "pt": "declarar", "fr": "déclarer", "example": "A ministra declarou que apoiava o projeto." }
        ]
      },
      {
        "title": "Concordance des temps et marqueurs",
        "content": "Au discours indirect, les temps changent : présent → imparfait, futur → conditionnel. Les adverbes aussi changent : aqui → ali, agora → naquele momento, amanhã → no dia seguinte.",
        "vocabulary": [
          { "pt": "acrescentar", "fr": "ajouter (en parlant)", "example": "Ele acrescentou que havia mais detalhes." },
          { "pt": "segundo", "fr": "selon", "example": "Segundo o relatório, os dados estão corretos." },
          { "pt": "de acordo com", "fr": "selon / conformément à", "example": "De acordo com ela, o projeto é viável." },
          { "pt": "no dia seguinte", "fr": "le lendemain", "example": "Disse que viria no dia seguinte." },
          { "pt": "naquele momento", "fr": "à ce moment-là", "example": "Explicou que naquele momento não podia." }
        ]
      },
      {
        "title": "Pratique du discours rapporté",
        "content": "Exercez-vous à transformer le discours direct en indirect. N'oubliez pas : aqui → ali (là), agora → então (alors), hoje → naquele dia (ce jour-là).",
        "vocabulary": [
          { "pt": "pediu que", "fr": "il/elle a demandé que (subj.)", "example": "Ela pediu que eu viesse logo." },
          { "pt": "respondeu que", "fr": "il/elle a répondu que", "example": "Ele respondeu que não sabia." },
          { "pt": "explicou que", "fr": "il/elle a expliqué que", "example": "Ela explicou que era tarde." },
          { "pt": "naquele dia", "fr": "ce jour-là", "example": "Disse que naquele dia estava ocupada." },
          { "pt": "então", "fr": "alors / à ce moment-là", "example": "Explicou que então não tinha tempo." }
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
          { "pt": "visto que", "fr": "étant donné que / vu que", "example": "Visto que está tarde, vamos embora." },
          { "pt": "dado que", "fr": "étant donné que", "example": "Dado que não veio, adiamos a reunião." },
          { "pt": "uma vez que", "fr": "puisque / dès lors que", "example": "Uma vez que concordamos, assinemos." },
          { "pt": "apesar de", "fr": "malgré / en dépit de", "example": "Apesar do cansaço, continuou." },
          { "pt": "mesmo que", "fr": "même si (subj.)", "example": "Mesmo que chova, irei." }
        ]
      },
      {
        "title": "Conséquence et articulation",
        "content": "Pour exprimer la conséquence : portanto (donc), assim (ainsi), de modo que (de sorte que). Ces connecteurs structurent votre argumentation.",
        "vocabulary": [
          { "pt": "ainda que", "fr": "quoique / bien que (subj.)", "example": "Ainda que seja difícil, vale a pena." },
          { "pt": "portanto", "fr": "donc / par conséquent", "example": "Estudei muito, portanto passei." },
          { "pt": "logo", "fr": "donc / alors", "example": "Penso, logo existo." },
          { "pt": "consequentemente", "fr": "par conséquent", "example": "Faltou às aulas, consequentemente reprovou." },
          { "pt": "no entanto", "fr": "cependant / toutefois", "example": "É difícil, no entanto é possível." }
        ]
      },
      {
        "title": "Dialogue : Argumentation",
        "type": "conversation",
        "setup": "Maria e João debatem sobre uma decisão importante.",
        "speakers": [
          { "name": "Maria", "avatar": "👩🏻" },
          { "name": "João", "avatar": "👨🏽" }
        ],
        "lines": [
          { "speaker": 0, "pt": "Dado que os resultados são positivos, devemos continuar.", "fr": "Étant donné que les résultats sont positifs, nous devons continuer.", "hl": ["Dado que"] },
          { "speaker": 1, "pt": "No entanto, os custos aumentaram muito.", "fr": "Cependant, les coûts ont beaucoup augmenté.", "hl": ["No entanto"] },
          { "speaker": 0, "pt": "Mesmo que os custos sejam altos, os benefícios são maiores.", "fr": "Même si les coûts sont élevés, les avantages sont plus grands.", "hl": ["Mesmo que"] },
          { "speaker": 1, "pt": "Portanto, ___.", "fr": "Donc, ___.", "blank": "concordo", "hl": ["Portanto"] }
        ],
        "options": ["concordo", "discordo", "talvez", "nunca"]
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
          { "pt": "a candidatura", "fr": "la candidature / la candidacy", "example": "Enviei a minha candidatura ontem." },
          { "pt": "o currículo", "fr": "le CV / le curriculum vitae", "example": "O meu currículo está atualizado." },
          { "pt": "a entrevista", "fr": "l'entretien / l'interview", "example": "Tenho uma entrevista de emprego amanhã." },
          { "pt": "o contrato", "fr": "le contrat", "example": "Assinei o contrato de trabalho." },
          { "pt": "a empresa", "fr": "l'entreprise / la société", "example": "Esta empresa tem 500 funcionários." }
        ]
      },
      {
        "title": "Organisation et communication formelle",
        "content": "Pour les e-mails professionnels et les situations formelles : Venho por meio desta (Je vous contacte par ce biais), Atenciosamente (Cordialement), Aguardo retorno (Dans l'attente de votre réponse).",
        "vocabulary": [
          { "pt": "o prazo", "fr": "le délai / l'échéance", "example": "O prazo para entregar é sexta-feira." },
          { "pt": "a reunião", "fr": "la réunion", "example": "A reunião começa às 9h." },
          { "pt": "o relatório", "fr": "le rapport", "example": "Preciso de entregar o relatório hoje." },
          { "pt": "Atenciosamente", "fr": "Cordialement (clôture e-mail)", "example": "Atenciosamente, João Silva." },
          { "pt": "Aguardo retorno", "fr": "Dans l'attente de votre réponse", "example": "Aguardo retorno assim que possível." }
        ]
      },
      {
        "title": "Expressions formelles et e-mail professionnel",
        "content": "En contexte professionnel, utilisez des formules de politesse précises. 'Venho por meio desta' ouvre formellement un e-mail. 'Em anexo' (ci-joint) et 'conforme combinado' (comme convenu) sont très utiles.",
        "vocabulary": [
          { "pt": "Venho por meio desta", "fr": "Je vous contacte par ce biais (formule d'ouverture)", "example": "Venho por meio desta solicitar uma reunião." },
          { "pt": "em anexo", "fr": "en pièce jointe / ci-joint", "example": "Segue em anexo o relatório solicitado." },
          { "pt": "conforme combinado", "fr": "comme convenu", "example": "Conforme combinado, envio os documentos." },
          { "pt": "o funcionário", "fr": "l'employé", "example": "Os funcionários trabalharam muito este mês." },
          { "pt": "a proposta", "fr": "la proposition / l'offre", "example": "Analisámos a proposta com cuidado." }
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
          { "pt": "não é para menos", "fr": "c'est bien normal / pas étonnant", "example": "Ele ganhou o prêmio — não é para menos, trabalhou muito!" },
          { "pt": "deixa pra lá", "fr": "laisse tomber / n'y pense plus", "example": "Deixa pra lá, não vale a pena discutir." },
          { "pt": "que saudade!", "fr": "comme tu m'as manqué ! / comme ça me manque !", "example": "Que saudade! Faz tanto tempo que não nos vemos!" },
          { "pt": "com certeza", "fr": "bien sûr / certainement", "example": "— Vai à festa? — Com certeza!" },
          { "pt": "a gente", "fr": "on / nous (informel)", "example": "A gente vai ao cinema hoje?" }
        ]
      },
      {
        "title": "Argot et registres de langue",
        "content": "Le portugais brésilien parlé est très différent du portugais écrit formel. 'Tá bom', 'de boa', 'vai dar certo' sont des expressions typiques du Brésil quotidien.",
        "vocabulary": [
          { "pt": "tá bom", "fr": "d'accord / OK", "example": "— Às 8h? — Tá bom!" },
          { "pt": "de boa", "fr": "tranquille / cool / sans problème", "example": "Tudo de boa por aqui." },
          { "pt": "vai dar certo", "fr": "ça va marcher / tout ira bien", "example": "Não se preocupe, vai dar certo!" },
          { "pt": "formal: Está bem", "fr": "d'accord (formel)", "example": "Está bem, conforme combinado." },
          { "pt": "formal: Certamente", "fr": "certainement (formel)", "example": "Certamente comparecerei à reunião." }
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
          { "speaker": 0, "pt": "Carla! Que saudade! Como você está?", "fr": "Carla ! Comme tu m'as manqué ! Comment tu vas ?", "hl": ["Que saudade"] },
          { "speaker": 1, "pt": "Tudo de boa! E você?", "fr": "Tout va bien, tranquille ! Et toi ?", "hl": ["Tudo de boa"] },
          { "speaker": 0, "pt": "Também! A gente vai tomar um café?", "fr": "Pareil ! On va prendre un café ?", "hl": ["A gente"] },
          { "speaker": 1, "pt": "Com certeza! ___!", "fr": "Bien sûr ! ___ !", "blank": "vai dar certo", "hl": ["Com certeza"] }
        ],
        "options": ["vai dar certo", "deixa pra lá", "não é para menos", "tá ruim"]
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
