// SM-2 Simplified Spaced Repetition Algorithm
// Intervals: 1d → 3d → 7d → 14d → 30d

const INTERVALS = [1, 3, 7, 14, 30];

function nextInterval(current) {
  const idx = INTERVALS.indexOf(current);
  if (idx === -1) return INTERVALS[INTERVALS.length - 1];
  return INTERVALS[Math.min(idx + 1, INTERVALS.length - 1)];
}

export function isDueToday(wordEntry) {
  if (!wordEntry || typeof wordEntry === 'string') return false;
  if (wordEntry.status === 'new') return false;
  if (!wordEntry.nextReview) return true;
  return Date.now() >= wordEntry.nextReview;
}

export function getDueWords(learnedWords) {
  return Object.keys(learnedWords).filter(k => isDueToday(learnedWords[k]));
}

export function updateAfterReview(wordEntry, correct) {
  const entry = typeof wordEntry === 'string'
    ? { status: wordEntry, interval: 1, nextReview: null, easeFactor: 2.5, lapses: 0 }
    : { ...wordEntry };

  if (correct) {
    entry.interval = nextInterval(entry.interval || 1);
    entry.nextReview = Date.now() + entry.interval * 86400000;
    entry.status = 'mastered';
  } else {
    entry.lapses = (entry.lapses || 0) + 1;
    entry.interval = 1;
    entry.nextReview = Date.now() + 86400000;
    if (entry.status === 'mastered') entry.status = 'learning';
  }

  return entry;
}

// Migrate old string entry to full SRS object
export function migrateEntry(val) {
  if (val && typeof val === 'object') return val;
  return { status: val || 'new', interval: 1, nextReview: null, easeFactor: 2.5, lapses: 0 };
}

// Read status safely from either format
export function getStatus(wordEntry) {
  if (!wordEntry) return 'new';
  if (typeof wordEntry === 'string') return wordEntry;
  return wordEntry.status || 'new';
}
