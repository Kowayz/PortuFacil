// Shared mutable quiz state — imported as a single object reference so all
// modules see the same values when they are mutated.
export const qs = {
  active: null,
  questions: [],
  currentIndex: 0,
  score: 0,
  answered: false,
  dragPlaced: [],
  currentKey: null,
  matchSelected: null,
  matchCorrect: [],
};
