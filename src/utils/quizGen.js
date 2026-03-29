function _shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * generateMatchQuestion(vocabItems)
 * Génère une question d'association PT↔FR avec 4 paires.
 * Retourne { type:'match', ptWords, frWords, correct[], _generated:true }
 * correct[ptIdx] = index dans frWords qui correspond
 */
export function generateMatchQuestion(vocabItems) {
  if (!vocabItems || vocabItems.length < 4) return null;
  const items   = _shuffle(vocabItems).slice(0, 4);
  const frWords = _shuffle(items.map(i => i.fr));
  const correct = items.map(item => frWords.indexOf(item.fr));
  return {
    type: 'match',
    question: 'Associez chaque mot portugais à sa traduction :',
    ptWords: items.map(i => i.pt),
    frWords,
    correct,
    _generated: true,
  };
}

/**
 * generateOrderQuestion(vocabItems)
 * Génère une question "remets les mots dans l'ordre" à partir d'un example ≥4 mots.
 * Retourne { type:'order', hint, shuffled[], sentence[], _generated:true }
 */
export function generateOrderQuestion(vocabItems) {
  const suitable = (vocabItems || []).filter(v => v.example && v.example.split(/\s+/).length >= 4);
  if (!suitable.length) return null;
  const v = _shuffle(suitable)[0];
  const words = v.example.replace(/[«»"]/g, '').trim().split(/\s+/);
  return {
    type: 'order',
    question: 'Remettez les mots dans le bon ordre :',
    hint: v.fr,
    shuffled: _shuffle([...words]),
    sentence: words,
    _generated: true,
  };
}

/**
 * generateListenQuestion(vocabItems)
 * Génère une question de dictée : TTS lit la phrase, l'utilisateur tape ce qu'il entend.
 * Retourne { type:'listen', phrase, answer, hint, _generated:true }
 */
export function generateListenQuestion(vocabItems) {
  const suitable = (vocabItems || []).filter(v => v.example && v.example.length > 5);
  if (!suitable.length) return null;
  const v = _shuffle(suitable)[0];
  return {
    type: 'listen',
    phrase: v.example,
    answer: v.example,
    hint: v.fr,
    _generated: true,
  };
}

/**
 * generateVocabQuestions(vocabItems, count)
 * Génère jusqu'à `count` questions MCQ depuis un tableau de vocab.
 * Alternance PT→FR et FR→PT. Distracteurs pris dans le même pool.
 * Retourne des objets { type:'mcq', question, options, correct, _generated:true }
 */
export function generateVocabQuestions(vocabItems, count = 7) {
  if (!vocabItems || vocabItems.length < 2) return [];
  const items   = _shuffle(vocabItems);
  const targets = items.slice(0, Math.min(count, items.length));

  return targets.map((item, idx) => {
    const ptToFr = idx % 2 === 0;
    const pool   = items.filter(v => v !== item);
    const wrong  = _shuffle(pool).slice(0, 3);

    if (ptToFr) {
      const opts = _shuffle([item.fr, ...wrong.map(d => d.fr)]);
      return {
        type: 'mcq',
        question: `Que signifie « ${item.pt} » ?`,
        options: opts,
        correct: opts.indexOf(item.fr),
        _generated: true,
      };
    } else {
      const opts = _shuffle([item.pt, ...wrong.map(d => d.pt)]);
      return {
        type: 'mcq',
        question: `Comment dit-on « ${item.fr} » en portugais ?`,
        options: opts,
        correct: opts.indexOf(item.pt),
        _generated: true,
      };
    }
  });
}
