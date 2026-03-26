import { STATE } from '../../core/state.js';
import { DATA } from '../../data/index.js';
import { shuffle } from '../../utils/text.js';
import { getDueWords } from '../../utils/srs.js';

export function buildQuizQuestions(mode) {
  let questions = [];

  if (mode === 'quick' || mode === 'daily') {
    DATA.lessons.forEach(l => {
      (l.quiz || []).filter(q => q.type === 'mcq').forEach(q => {
        questions.push({ ...q, lessonTitle: l.title });
      });
    });
    questions = shuffle(questions).slice(0, mode === 'daily' ? 5 : 10);

  } else if (mode === 'vocab') {
    DATA.vocabulary.categories.forEach(cat => {
      cat.words.forEach(w => {
        questions.push({
          type: 'mcq',
          question: `Que signifie "${w.pt}" ?`,
          options: buildVocabOptions(w, cat),
          correct: 0,
          explanation: `"${w.pt}" signifie "${w.fr}".`,
          lessonTitle: cat.name,
          _wordKey: cat.id + '_' + w.pt,
        });
      });
    });
    questions = shuffle(questions).slice(0, 10).map(q => {
      if (q.type === 'mcq' && q.options) {
        const correctAnswer = q.explanation.match(/"([^"]+)"\.$/)?.[1];
        q.correct = q.options.indexOf(correctAnswer);
        if (q.correct === -1) q.correct = 0;
      }
      return q;
    });

  } else if (mode === 'conjugation') {
    DATA.conjugation.essential.forEach(v => {
      const pronouns = Object.keys(v.tenses.presente);
      const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
      questions.push({
        type: 'fill',
        question: `Conjuguez <strong>${v.verb}</strong> (${v.meaning}) au présent pour "<strong>${randomPronoun}</strong>"`,
        answer: v.tenses.presente[randomPronoun],
        lessonTitle: 'Conjugaison',
      });
    });
    questions = shuffle(questions).slice(0, 8);

  } else if (mode === 'srs') {
    const dueKeys = getDueWords(STATE.learnedWords);
    const allWords = [];
    DATA.vocabulary.categories.forEach(cat => {
      cat.words.forEach(w => {
        const key = cat.id + '_' + w.pt;
        if (dueKeys.includes(key)) {
          allWords.push({ word: w, cat, key });
        }
      });
    });
    shuffle(allWords).slice(0, 15).forEach(({ word: w, cat, key }) => {
      questions.push({
        type: 'mcq',
        question: `Que signifie "${w.pt}" ?`,
        options: buildVocabOptions(w, cat),
        correct: 0,
        explanation: `"${w.pt}" signifie "${w.fr}".`,
        lessonTitle: '📅 Révision SRS',
        _wordKey: key,
        _srs: true,
      });
    });
    questions = questions.map(q => {
      if (q.type === 'mcq' && q.options) {
        const correctAnswer = q.explanation.match(/"([^"]+)"\.$/)?.[1];
        q.correct = q.options.indexOf(correctAnswer);
        if (q.correct === -1) q.correct = 0;
      }
      return q;
    });

  } else if (mode === 'errors') {
    const errorEntries = Object.entries(STATE.errors)
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 15);

    errorEntries.forEach(([key]) => {
      const [catId, ...rest] = key.split('_');
      const wordPt = rest.join('_');
      const cat = DATA.vocabulary.categories.find(c => c.id === catId);
      const word = cat?.words.find(w => w.pt === wordPt);
      if (!word || !cat) return;
      questions.push({
        type: 'fill',
        question: `Traduisez en portugais : <strong>${word.fr}</strong>`,
        answer: word.pt,
        explanation: `"${word.fr}" se dit "${word.pt}" en portugais.`,
        lessonTitle: '🎯 Révision ciblée',
        _wordKey: key,
      });
    });
    questions = shuffle(questions).slice(0, 10);
  }

  return questions;
}

export function buildVocabOptions(word, cat) {
  const otherWords = cat.words.filter(w => w.fr !== word.fr);
  const distractors = shuffle(otherWords).slice(0, 3).map(w => w.fr);
  return shuffle([word.fr, ...distractors]);
}
