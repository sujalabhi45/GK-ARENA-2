import { Question } from '../../src/types';
import { ALL_KIDS_QUESTIONS } from './questions_kids';
import { ALL_JUNIOR_QUESTIONS } from './questions_junior';
import { ALL_TEEN_ADULT_QUESTIONS } from './questions_teen_adult';

/**
 * Shuffles options for a question using Fisher-Yates algorithm
 * Ensures the correct answer is randomly distributed across options (A, B, C, D)
 */
export function shuffleQuestionOptions(q: Question): Question {
  if (!q.options || q.options.length <= 1) return q;
  const indices = q.options.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const options = indices.map(i => q.options[i]);
  const optionsHi = q.optionsHi && q.optionsHi.length === q.options.length
    ? indices.map(i => q.optionsHi![i])
    : undefined;

  return {
    ...q,
    options,
    ...(optionsHi ? { optionsHi } : {})
  };
}

export const ALL_QUESTIONS: Question[] = [
  ...ALL_KIDS_QUESTIONS,
  ...ALL_JUNIOR_QUESTIONS,
  ...ALL_TEEN_ADULT_QUESTIONS
].map(shuffleQuestionOptions);

export function getQuestionsByFilter(filter: {
  category?: string;
  ageGroup?: string;
  difficulty?: string;
  search?: string;
  historicalFigure?: string;
  subcategory?: string;
  ids?: string[];
  limit?: number;
}): Question[] {
  let results = [...ALL_QUESTIONS];

  if (filter.ids && filter.ids.length > 0) {
    return results.filter(q => filter.ids!.includes(q.id));
  }

  if (filter.category && filter.category !== 'all') {
    results = results.filter(q => q.category === filter.category);
  }

  if (filter.ageGroup && filter.ageGroup !== 'all') {
    results = results.filter(q => q.ageGroup === filter.ageGroup || q.ageGroup === 'all');
  }

  if (filter.historicalFigure && filter.historicalFigure.trim()) {
    const fig = filter.historicalFigure.toLowerCase().trim();
    const figMatch = results.filter(q =>
      (q.historicalFigure && q.historicalFigure.toLowerCase().includes(fig)) ||
      q.question.toLowerCase().includes(fig) ||
      q.explanation.toLowerCase().includes(fig) ||
      q.tags?.some(t => t.toLowerCase().includes(fig))
    );
    if (figMatch.length > 0) {
      results = figMatch;
    }
  }

  if (filter.subcategory && filter.subcategory.trim()) {
    const sub = filter.subcategory.toLowerCase().trim();
    const subMatch = results.filter(q =>
      (q.subcategory && q.subcategory.toLowerCase().includes(sub)) ||
      q.question.toLowerCase().includes(sub) ||
      q.tags?.some(t => t.toLowerCase().includes(sub))
    );
    if (subMatch.length > 0) {
      results = subMatch;
    }
  }

  if (filter.difficulty && filter.difficulty !== 'all') {
    results = results.filter(q => q.difficulty === filter.difficulty);
  }

  if (filter.search && filter.search.trim()) {
    const term = filter.search.toLowerCase().trim();
    results = results.filter(q =>
      q.question.toLowerCase().includes(term) ||
      q.explanation.toLowerCase().includes(term) ||
      q.subcategory?.toLowerCase().includes(term) ||
      q.tags?.some(t => t.toLowerCase().includes(term))
    );
  }

  // Shuffle array for dynamic variety
  for (let i = results.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [results[i], results[j]] = [results[j], results[i]];
  }

  if (filter.limit && filter.limit > 0) {
    results = results.slice(0, filter.limit);
  }

  return results.map(shuffleQuestionOptions);
}

export function getRandomQuizQuestions(options: {
  category?: string;
  ageGroup?: string;
  difficulty?: string;
  count?: number;
}): Question[] {
  const { category, ageGroup, difficulty, count = 10 } = options;

  let pool = [...ALL_QUESTIONS];

  if (category && category !== 'all') {
    pool = pool.filter(q => q.category === category);
  }

  if (ageGroup && ageGroup !== 'all') {
    // If specific age group requested, prioritize matching ageGroup or 'all'
    const matching = pool.filter(q => q.ageGroup === ageGroup);
    if (matching.length >= count) {
      pool = matching;
    } else {
      // Fallback: blend with other age groups if matching isn't sufficient
      pool = pool.filter(q => q.ageGroup === ageGroup || q.ageGroup === 'all');
    }
  }

  if (difficulty && difficulty !== 'all') {
    const diffMatch = pool.filter(q => q.difficulty === difficulty);
    if (diffMatch.length >= count) {
      pool = diffMatch;
    }
  }

  // Shuffle array using Fisher-Yates
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length)).map(shuffleQuestionOptions);
}
