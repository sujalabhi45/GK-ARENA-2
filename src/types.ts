export type AgeGroup = '6-9' | '10-12' | '13-15' | '13-17' | '16-18' | '18+' | 'all';

export type Language = 'en' | 'hi';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type QuizMode = 
  | 'quick'
  | 'standard'
  | 'random'
  | 'category'
  | 'timed'
  | 'practice'
  | 'daily'
  | 'challenge';

export interface UserStats {
  totalQuizzes: number;
  totalScore: number;
  bestScore: number;
  averageScore: number;
  totalQuestionsAnswered: number;
  correctAnswersCount: number;
  challengeWins: number;
  challengeLosses: number;
  currentStreak: number;
  bestStreak: number;
}

export interface User {
  id: string;
  username: string;
  displayName?: string;
  email?: string;
  passwordHash?: string;
  role: 'user' | 'admin';
  ageGroup: AgeGroup;
  avatar: string;
  avatarUrl?: string;
  isGuest?: boolean;
  isSuspended?: boolean;
  createdAt: string;
  lastActiveDate?: string;
  totalPoints: number;
  coins: number;
  currentStreak: number;
  bestStreak: number;
  totalQuizzes: number;
  accuracyRate: number;
  categoryMastery?: Record<string, number>;
  badges: string[];
  stats: UserStats;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  questionHi?: string;
  optionsHi?: string[];
  correctAnswerHi?: string;
  explanationHi?: string;
  category: string;
  subcategory: string;
  ageGroup: AgeGroup;
  difficulty: Difficulty;
  imageUrl?: string;
  tags: string[];
  historicalFigure?: string;
  accuracyRate?: number;
  timesAnswered?: number;
}

export interface QuizAttempt {
  id: string;
  userId: string;
  userDisplayName?: string;
  userAvatar?: string;
  category: string;
  ageGroup: AgeGroup;
  score: number;
  totalQuestions: number;
  correctCount: number;
  timeTakenSeconds: number;
  pointsEarned: number;
  coinsEarned: number;
  completedAt: string;
  userAnswers: {
    questionId: string;
    question?: string;
    selectedAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    explanation?: string;
  }[];
}

export interface CustomQuiz {
  id: string;
  title: string;
  description: string;
  createdById: string;
  createdByDisplayName: string;
  category: string;
  ageGroup: AgeGroup;
  timeLimitMinutes: number;
  pinCode: string;
  questionIds: string[];
  createdAt: string;
}

// Sent to client during active quiz (omits correctAnswer & explanation for anti-cheat)
export interface ClientQuestion {
  id: string;
  question: string;
  options: string[];
  category: string;
  subcategory: string;
  ageGroup: AgeGroup;
  difficulty: Difficulty;
  imageUrl?: string;
  tags: string[];
}

export interface QuizSession {
  id: string;
  userId: string;
  mode: QuizMode;
  category?: string;
  subcategory?: string;
  ageGroup: AgeGroup;
  difficulty?: Difficulty;
  questionIds: string[];
  currentIndex: number;
  answers: {
    questionId: string;
    selectedAnswer: string;
    isCorrect: boolean;
    timeTakenSeconds: number;
    points: number;
  }[];
  score: number;
  totalQuestions: number;
  timeLimitPerQuestion: number;
  isCompleted: boolean;
  isPaused: boolean;
  createdAt: string;
  updatedAt: string;
  challengeId?: string;
}

export interface QuizResult {
  id: string;
  sessionId: string;
  userId: string;
  username: string;
  avatar: string;
  ageGroup: AgeGroup;
  mode: QuizMode;
  category?: string;
  finalScore: number;
  maxPossibleScore: number;
  percentage: number;
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
  totalQuestions: number;
  timeTakenSeconds: number;
  averageResponseTime: number;
  difficultyBreakdown: {
    easy: { total: number; correct: number };
    medium: { total: number; correct: number };
    hard: { total: number; correct: number };
  };
  categoryPerformance: Record<string, { total: number; correct: number }>;
  questionsReview: {
    questionId: string;
    question: string;
    options: string[];
    selectedAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    explanation: string;
    timeTakenSeconds: number;
    points: number;
    category: string;
    difficulty: Difficulty;
  }[];
  unlockedAchievements: Achievement[];
  createdAt: string;
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  displayName?: string;
  avatar: string;
  avatarUrl?: string;
  ageGroup: AgeGroup;
  points?: number;
  totalScore: number;
  bestScore?: number;
  averageScore?: number;
  quizzesCompleted?: number;
  quizzesPlayed?: number;
  accuracyRate?: number;
  streak?: number;
  challengeWins?: number;
  winRate?: number;
  category?: string;
}

export interface Challenge {
  id: string;
  code: string;
  creatorId: string;
  creatorUsername: string;
  creatorAvatar: string;
  category: string;
  ageGroup: AgeGroup;
  difficulty: Difficulty;
  questionCount: number;
  questionIds: string[];
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  creatorScore?: number;
  creatorTimeTaken?: number;
  opponentId?: string;
  opponentUsername?: string;
  opponentAvatar?: string;
  opponentScore?: number;
  opponentTimeTaken?: number;
  winnerId?: string | 'draw';
  createdAt: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  conditionType: string;
  threshold: number;
  unlockedAt?: string;
}

export interface AdminAction {
  id: string;
  adminId: string;
  adminUsername: string;
  action: string;
  targetType: string;
  targetId?: string;
  metadata?: Record<string, any>;
  timestamp: string;
}

export interface QuizSettings {
  timeLimits: Record<AgeGroup, number>; // seconds per question
  scoring: {
    easyBase: number;
    mediumBase: number;
    hardBase: number;
    speedBonusMultiplier: number;
    negativeMarking: boolean;
    negativePoints: number;
  };
  questionsPerQuiz: {
    quick: number;
    standard: number;
    timed: number;
    daily: number;
    challenge: number;
  };
  maintenanceMode: boolean;
}

export interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  totalQuestions: number;
  subcategories: string[];
  featured?: boolean;
}

export interface HistoricalFigure {
  id: string;
  name: string;
  title: string;
  dynasty: string;
  period: string;
  region: string;
  capital: string;
  keyAchievements: string[];
  shortBio: string;
  icon: string;
}
