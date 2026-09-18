import { Achievement } from '../../src/types';

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'first-quiz',
    title: 'First Quiz',
    description: 'Completed your very first quiz on GK Arena!',
    icon: 'Flag',
    category: 'quizzes',
    conditionType: 'total_quizzes',
    threshold: 1
  },
  {
    id: 'quiz-ten',
    title: 'Quiz Enthusiast (10)',
    description: 'Completed 10 quizzes across any category.',
    icon: 'Zap',
    category: 'quizzes',
    conditionType: 'total_quizzes',
    threshold: 10
  },
  {
    id: 'quiz-fifty',
    title: 'Quiz Veteran (50)',
    description: 'Completed 50 quizzes with dedication.',
    icon: 'Award',
    category: 'quizzes',
    conditionType: 'total_quizzes',
    threshold: 50
  },
  {
    id: 'quiz-hundred',
    title: 'Century Master (100)',
    description: 'Mastered 100 quizzes on GK Arena!',
    icon: 'Crown',
    category: 'quizzes',
    conditionType: 'total_quizzes',
    threshold: 100
  },
  {
    id: 'perfect-score',
    title: 'Perfect Score',
    description: 'Scored 100% on any standard or timed quiz.',
    icon: 'Sparkles',
    category: 'performance',
    conditionType: 'perfect_score',
    threshold: 1
  },
  {
    id: 'speed-master',
    title: 'Speed Master',
    description: 'Completed a quiz with an average response time under 6 seconds per question.',
    icon: 'Clock',
    category: 'performance',
    conditionType: 'speed_master',
    threshold: 6
  },
  {
    id: 'gk-master',
    title: 'GK Master',
    description: 'Scored at least 500 total points in General Knowledge & World Facts.',
    icon: 'BookOpen',
    category: 'category',
    conditionType: 'cat_gk',
    threshold: 500
  },
  {
    id: 'india-expert',
    title: 'India Expert',
    description: 'Scored at least 500 total points in India GK & Culture.',
    icon: 'Flame',
    category: 'category',
    conditionType: 'cat_india',
    threshold: 500
  },
  {
    id: 'kings-queens-expert',
    title: 'Great Indian History Expert',
    description: 'Mastered quizzes in Great Indian Kings & Queens category.',
    icon: 'Shield',
    category: 'category',
    conditionType: 'cat_kings',
    threshold: 500
  },
  {
    id: 'ramayan-scholar',
    title: 'Ramayan Scholar',
    description: 'Showed deep knowledge and devotion in the Ramayan Quiz category.',
    icon: 'Scroll',
    category: 'category',
    conditionType: 'cat_ramayan',
    threshold: 500
  },
  {
    id: 'mahabharat-scholar',
    title: 'Mahabharat Scholar',
    description: 'Demonstrated exceptional insight in the Mahabharat Quiz category.',
    icon: 'Target',
    category: 'category',
    conditionType: 'cat_mahabharat',
    threshold: 500
  },
  {
    id: 'science-master',
    title: 'Science Master',
    description: 'Tackled physics, chemistry, biology, and human body questions.',
    icon: 'Atom',
    category: 'category',
    conditionType: 'cat_science',
    threshold: 500
  },
  {
    id: 'space-explorer',
    title: 'Space Explorer',
    description: 'Ventured through astronomy, ISRO/NASA missions, and solar system quizzes.',
    icon: 'Rocket',
    category: 'category',
    conditionType: 'cat_space',
    threshold: 500
  },
  {
    id: 'geography-master',
    title: 'Geography Master',
    description: 'Navigated mountains, oceans, countries, and world capitals successfully.',
    icon: 'Globe2',
    category: 'category',
    conditionType: 'cat_geography',
    threshold: 500
  },
  {
    id: 'cricket-expert',
    title: 'Cricket Expert',
    description: 'Demonstrated supreme knowledge in Sports & Cricket.',
    icon: 'Trophy',
    category: 'category',
    conditionType: 'cat_sports',
    threshold: 500
  },
  {
    id: 'challenge-winner',
    title: 'Challenge Winner',
    description: 'Won your first head-to-head multiplayer challenge!',
    icon: 'Swords',
    category: 'challenge',
    conditionType: 'challenge_wins',
    threshold: 1
  },
  {
    id: 'ten-challenge-wins',
    title: 'Arena Champion (10 Wins)',
    description: 'Triumphed in 10 challenge face-offs against opponents.',
    icon: 'Medal',
    category: 'challenge',
    conditionType: 'challenge_wins',
    threshold: 10
  },
  {
    id: 'twenty-five-challenge-wins',
    title: 'Unstoppable Legend (25 Wins)',
    description: 'Won 25 challenges and dominated the arena.',
    icon: 'Crown',
    category: 'challenge',
    conditionType: 'challenge_wins',
    threshold: 25
  }
];

export const ACHIEVEMENTS_LIST = ACHIEVEMENTS_DATA;

