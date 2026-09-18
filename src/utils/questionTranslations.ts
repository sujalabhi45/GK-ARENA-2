import { Question, Language } from '../types';
import { getQuestionInHindi } from './hindiTranslationEngine';

export { getQuestionInHindi };

/**
 * Returns question in requested language synchronously and immediately.
 * Guaranteed 1-to-1 option matching and zero lag.
 */
export function getQuestionInLanguage(
  q: Question,
  language: Language
): Question {
  if (!q) return q;
  if (language === 'en') {
    return q;
  }
  return getQuestionInHindi(q);
}

