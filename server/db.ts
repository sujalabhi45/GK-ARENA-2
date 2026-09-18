import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { User, LeaderboardEntry, QuizAttempt, Question, Achievement, CustomQuiz, AgeGroup } from '../src/types';
import { ALL_QUESTIONS, shuffleQuestionOptions } from './data/questions_all';
import { ACHIEVEMENTS_LIST } from './data/achievements';

interface DatabaseSchema {
  users: User[];
  attempts: QuizAttempt[];
  customQuizzes: CustomQuiz[];
  customQuestions: Question[];
  dailyChallengeDates: Record<string, string[]>; // YYYY-MM-DD -> questionIds
}

const DB_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DB_DIR, 'arena_db.json');

// In-memory state
let dbData: DatabaseSchema = {
  users: [],
  attempts: [],
  customQuizzes: [],
  customQuestions: [],
  dailyChallengeDates: {}
};

// Initialize DB
export function initDB(): void {
  try {
    if (!fs.existsSync(DB_DIR)) {
      fs.mkdirSync(DB_DIR, { recursive: true });
    }

    if (fs.existsSync(DB_FILE)) {
      const raw = fs.readFileSync(DB_FILE, 'utf-8');
      dbData = JSON.parse(raw);
    } else {
      seedDefaultData();
      saveDB();
    }
  } catch (err) {
    console.warn('Could not load or save db file, using in-memory store:', err);
    seedDefaultData();
  }
}

export function saveDB(): void {
  try {
    if (!fs.existsSync(DB_DIR)) {
      fs.mkdirSync(DB_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(dbData, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Failed writing to database file:', err);
  }
}

function seedDefaultData(): void {
  const salt = bcrypt.genSaltSync(10);
  const defaultPasswordHash = bcrypt.hashSync('Password@123', salt);
  const adminPasswordHash = bcrypt.hashSync('ArenaAdmin2025!', salt);

  const initialUsers: User[] = [
    {
      id: 'usr-admin-1',
      username: 'admin',
      displayName: 'Arena Master (Admin)',
      email: 'admin@gkarena.com',
      passwordHash: adminPasswordHash,
      role: 'admin',
      ageGroup: '18+',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      totalPoints: 12500,
      coins: 850,
      currentStreak: 15,
      bestStreak: 21,
      totalQuizzes: 82,
      accuracyRate: 94.5,
      createdAt: '2025-01-01T00:00:00.000Z',
      categoryMastery: {
        'great-kings-queens': 98,
        'history': 95,
        'ramayan': 96,
        'mahabharat': 92,
        'science': 90,
        'space': 93,
        'sports': 88,
        'geography': 91
      },
      badges: ['first-quiz', 'quiz-ten', 'quiz-fifty', 'perfect-score', 'kings-queens-expert'],
      stats: {
        totalQuizzes: 82,
        totalScore: 12500,
        bestScore: 100,
        averageScore: 92,
        totalQuestionsAnswered: 820,
        correctAnswersCount: 775,
        challengeWins: 14,
        challengeLosses: 2,
        currentStreak: 15,
        bestStreak: 21
      }
    },
    {
      id: 'usr-demo-aarav',
      username: 'aarav',
      displayName: 'Aarav Sharma',
      email: 'aarav@gkarena.com',
      passwordHash: defaultPasswordHash,
      role: 'user',
      ageGroup: '6-9',
      avatar: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=150',
      avatarUrl: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=150',
      totalPoints: 3450,
      coins: 240,
      currentStreak: 5,
      bestStreak: 9,
      totalQuizzes: 24,
      accuracyRate: 88.0,
      createdAt: '2025-02-10T00:00:00.000Z',
      categoryMastery: {
        'great-kings-queens': 85,
        'ramayan': 92,
        'science': 80,
        'animals-nature': 90
      },
      badges: ['first-quiz', 'quiz-ten', 'ramayan-scholar'],
      stats: {
        totalQuizzes: 24,
        totalScore: 3450,
        bestScore: 100,
        averageScore: 88,
        totalQuestionsAnswered: 240,
        correctAnswersCount: 211,
        challengeWins: 3,
        challengeLosses: 1,
        currentStreak: 5,
        bestStreak: 9
      }
    },
    {
      id: 'usr-demo-diya',
      username: 'diya',
      displayName: 'Diya Patel',
      email: 'diya@gkarena.com',
      passwordHash: defaultPasswordHash,
      role: 'user',
      ageGroup: '10-12',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
      avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150',
      totalPoints: 6890,
      coins: 490,
      currentStreak: 8,
      bestStreak: 14,
      totalQuizzes: 46,
      accuracyRate: 91.2,
      createdAt: '2025-01-20T00:00:00.000Z',
      categoryMastery: {
        'history': 90,
        'space': 94,
        'great-kings-queens': 92,
        'mahabharat': 86
      },
      badges: ['first-quiz', 'quiz-ten', 'space-explorer'],
      stats: {
        totalQuizzes: 46,
        totalScore: 6890,
        bestScore: 100,
        averageScore: 91,
        totalQuestionsAnswered: 460,
        correctAnswersCount: 420,
        challengeWins: 7,
        challengeLosses: 2,
        currentStreak: 8,
        bestStreak: 14
      }
    },
    {
      id: 'usr-demo-arjun',
      username: 'arjun_v',
      displayName: 'Arjun Verma',
      email: 'arjun@gkarena.com',
      passwordHash: defaultPasswordHash,
      role: 'user',
      ageGroup: '13-17',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150',
      avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150',
      totalPoints: 9240,
      coins: 610,
      currentStreak: 12,
      bestStreak: 18,
      totalQuizzes: 62,
      accuracyRate: 93.4,
      createdAt: '2025-01-15T00:00:00.000Z',
      categoryMastery: {
        'history': 96,
        'mahabharat': 94,
        'great-kings-queens': 95,
        'science': 91,
        'sports': 89
      },
      badges: ['first-quiz', 'quiz-ten', 'quiz-fifty', 'mahabharat-scholar'],
      stats: {
        totalQuizzes: 62,
        totalScore: 9240,
        bestScore: 100,
        averageScore: 93,
        totalQuestionsAnswered: 620,
        correctAnswersCount: 579,
        challengeWins: 12,
        challengeLosses: 4,
        currentStreak: 12,
        bestStreak: 18
      }
    },
    {
      id: 'usr-demo-ananya',
      username: 'ananya_m',
      displayName: 'Ananya Mukherjee',
      email: 'ananya@gkarena.com',
      passwordHash: defaultPasswordHash,
      role: 'user',
      ageGroup: '18+',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      totalPoints: 8750,
      coins: 530,
      currentStreak: 7,
      bestStreak: 15,
      totalQuizzes: 58,
      accuracyRate: 92.0,
      createdAt: '2025-02-01T00:00:00.000Z',
      categoryMastery: {
        'great-kings-queens': 94,
        'history': 92,
        'ramayan': 95,
        'space': 88
      },
      badges: ['first-quiz', 'quiz-ten', 'india-expert'],
      stats: {
        totalQuizzes: 58,
        totalScore: 8750,
        bestScore: 100,
        averageScore: 92,
        totalQuestionsAnswered: 580,
        correctAnswersCount: 534,
        challengeWins: 9,
        challengeLosses: 3,
        currentStreak: 7,
        bestStreak: 15
      }
    }
  ];

  dbData.users = initialUsers;

  // Seed sample leaderboard attempts
  dbData.attempts = [
    {
      id: 'att-1',
      userId: 'usr-admin-1',
      userDisplayName: 'Arena Master (Admin)',
      userAvatar: initialUsers[0].avatar,
      category: 'great-kings-queens',
      ageGroup: '18+',
      score: 100,
      totalQuestions: 10,
      correctCount: 10,
      timeTakenSeconds: 42,
      pointsEarned: 250,
      coinsEarned: 25,
      completedAt: new Date(Date.now() - 3600000).toISOString(),
      userAnswers: []
    },
    {
      id: 'att-2',
      userId: 'usr-demo-arjun',
      userDisplayName: 'Arjun Verma',
      userAvatar: initialUsers[3].avatar,
      category: 'history',
      ageGroup: '13-17',
      score: 90,
      totalQuestions: 10,
      correctCount: 9,
      timeTakenSeconds: 51,
      pointsEarned: 220,
      coinsEarned: 20,
      completedAt: new Date(Date.now() - 7200000).toISOString(),
      userAnswers: []
    },
    {
      id: 'att-3',
      userId: 'usr-demo-diya',
      userDisplayName: 'Diya Patel',
      userAvatar: initialUsers[2].avatar,
      category: 'space',
      ageGroup: '10-12',
      score: 100,
      totalQuestions: 10,
      correctCount: 10,
      timeTakenSeconds: 48,
      pointsEarned: 250,
      coinsEarned: 25,
      completedAt: new Date(Date.now() - 14400000).toISOString(),
      userAnswers: []
    },
    {
      id: 'att-4',
      userId: 'usr-demo-aarav',
      userDisplayName: 'Aarav Sharma',
      userAvatar: initialUsers[1].avatar,
      category: 'ramayan',
      ageGroup: '6-9',
      score: 90,
      totalQuestions: 10,
      correctCount: 9,
      timeTakenSeconds: 58,
      pointsEarned: 210,
      coinsEarned: 20,
      completedAt: new Date(Date.now() - 28800000).toISOString(),
      userAnswers: []
    }
  ];

  // Seed sample custom quiz
  dbData.customQuizzes = [
    {
      id: 'quiz-chhatrapati',
      title: 'The Great Chhatrapati Shivaji Maharaj Challenge',
      description: 'Test your knowledge on Swarajya, Maratha hill forts, and naval battles!',
      createdById: 'usr-admin-1',
      createdByDisplayName: 'Arena Master',
      category: 'great-kings-queens',
      ageGroup: 'all',
      timeLimitMinutes: 10,
      pinCode: '7412',
      questionIds: ['kq-1', 'kq-2', 'j-kq-1', 'j-kq-2', 'ta-kq-5'],
      createdAt: new Date().toISOString()
    }
  ];
}

// User Operations
export function getAllUsers(): User[] {
  return dbData.users;
}

export function getUserById(id: string): User | undefined {
  return dbData.users.find(u => u.id === id);
}

export function getUserByEmail(email: string): User | undefined {
  return dbData.users.find(u => (u.email || '').toLowerCase() === email.toLowerCase());
}

export function getUserByUsername(username: string): User | undefined {
  return dbData.users.find(u => u.username.toLowerCase() === username.toLowerCase());
}

export function createUser(userData: {
  username: string;
  displayName: string;
  email: string;
  password: string;
  ageGroup: AgeGroup;
  avatarUrl?: string;
}): User {
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(userData.password, salt);
  const avatar = userData.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150';

  const newUser: User = {
    id: `usr-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    username: userData.username.trim(),
    displayName: userData.displayName.trim(),
    email: userData.email.trim().toLowerCase(),
    passwordHash,
    role: 'user',
    ageGroup: userData.ageGroup,
    avatar,
    avatarUrl: avatar,
    totalPoints: 0,
    coins: 50, // Welcome bonus
    currentStreak: 1,
    bestStreak: 1,
    totalQuizzes: 0,
    accuracyRate: 0,
    createdAt: new Date().toISOString(),
    categoryMastery: {},
    badges: ['first-quiz'],
    stats: {
      totalQuizzes: 0,
      totalScore: 0,
      bestScore: 0,
      averageScore: 0,
      totalQuestionsAnswered: 0,
      correctAnswersCount: 0,
      challengeWins: 0,
      challengeLosses: 0,
      currentStreak: 1,
      bestStreak: 1
    }
  };

  dbData.users.push(newUser);
  saveDB();
  return newUser;
}

export function updateUser(id: string, updates: Partial<User>): User | null {
  const user = dbData.users.find(u => u.id === id);
  if (!user) return null;

  Object.assign(user, updates);
  saveDB();
  return user;
}

// Attempts & Scoring
export function recordQuizAttempt(attemptData: Omit<QuizAttempt, 'id' | 'completedAt'>): {
  attempt: QuizAttempt;
  updatedUser: User | null;
  newAchievements: Achievement[];
} {
  const attempt: QuizAttempt = {
    ...attemptData,
    id: `att-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    completedAt: new Date().toISOString()
  };

  dbData.attempts.unshift(attempt);

  // Update user stats
  const user = dbData.users.find(u => u.id === attempt.userId);
  const newAchievements: Achievement[] = [];

  if (user) {
    user.totalPoints += attempt.pointsEarned;
    user.coins += attempt.coinsEarned;
    user.totalQuizzes += 1;
    user.stats.totalQuizzes += 1;
    user.stats.totalScore += attempt.pointsEarned;
    user.stats.totalQuestionsAnswered += attempt.totalQuestions;
    user.stats.correctAnswersCount += attempt.correctCount;
    if (attempt.score > user.stats.bestScore) {
      user.stats.bestScore = attempt.score;
    }

    // Recalculate accuracy rate
    const userAttempts = dbData.attempts.filter(a => a.userId === user.id);
    const totalQ = userAttempts.reduce((sum, a) => sum + a.totalQuestions, 0);
    const totalCorrect = userAttempts.reduce((sum, a) => sum + a.correctCount, 0);
    user.accuracyRate = totalQ > 0 ? Math.round((totalCorrect / totalQ) * 1000) / 10 : 0;
    user.stats.averageScore = user.accuracyRate;

    // Update Category Mastery
    if (!user.categoryMastery) user.categoryMastery = {};
    const catAttempts = userAttempts.filter(a => a.category === attempt.category);
    const catTotal = catAttempts.reduce((sum, a) => sum + a.totalQuestions, 0);
    const catCorrect = catAttempts.reduce((sum, a) => sum + a.correctCount, 0);
    if (catTotal > 0) {
      user.categoryMastery[attempt.category] = Math.round((catCorrect / catTotal) * 100);
    }

    // Update streak based on last played date
    const today = new Date().toISOString().split('T')[0];
    if (user.lastActiveDate) {
      const lastDate = user.lastActiveDate.split('T')[0];
      if (lastDate !== today) {
        const diffDays = Math.floor((new Date(today).getTime() - new Date(lastDate).getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          user.currentStreak += 1;
          if (user.currentStreak > user.bestStreak) {
            user.bestStreak = user.currentStreak;
          }
        } else if (diffDays > 1) {
          user.currentStreak = 1;
        }
      }
    } else {
      user.currentStreak = 1;
    }
    user.lastActiveDate = new Date().toISOString();
    user.stats.currentStreak = user.currentStreak;
    user.stats.bestStreak = user.bestStreak;

    // Check achievement unlock
    if (!user.badges) user.badges = [];

    // Helper to award badge
    const awardBadge = (achId: string) => {
      if (!user.badges.includes(achId)) {
        user.badges.push(achId);
        const found = ACHIEVEMENTS_LIST.find((a: Achievement) => a.id === achId);
        if (found) newAchievements.push(found);
      }
    };

    if (user.totalQuizzes >= 1) awardBadge('first-quiz');
    if (attempt.score === 100) awardBadge('perfect-score');
    if (attempt.timeTakenSeconds < 45 && attempt.score >= 80) awardBadge('speed-master');
    if (attempt.category === 'ramayan' && attempt.score >= 80) awardBadge('ramayan-scholar');
    if (attempt.category === 'mahabharat' && attempt.score >= 80) awardBadge('mahabharat-scholar');
    if (attempt.category === 'great-kings-queens' && attempt.score >= 80) awardBadge('kings-queens-expert');
    if (attempt.category === 'space' && attempt.score >= 80) awardBadge('space-explorer');
    if (user.totalQuizzes >= 10) awardBadge('quiz-ten');
    if (user.totalQuizzes >= 50) awardBadge('quiz-fifty');
    if (user.totalQuizzes >= 100) awardBadge('quiz-hundred');

    saveDB();
  }

  return {
    attempt,
    updatedUser: user || null,
    newAchievements
  };
}

// Leaderboard Queries
export function getLeaderboard(filter?: {
  ageGroup?: string;
  category?: string;
  period?: 'all-time' | 'weekly';
  limit?: number;
}): LeaderboardEntry[] {
  const limit = filter?.limit || 20;
  let candidates = [...dbData.users];

  if (filter?.ageGroup && filter.ageGroup !== 'all') {
    candidates = candidates.filter(u => u.ageGroup === filter.ageGroup);
  }

  // Sort descending by totalPoints
  candidates.sort((a, b) => b.totalPoints - a.totalPoints);

  return candidates.slice(0, limit).map((u, idx) => ({
    rank: idx + 1,
    userId: u.id,
    displayName: u.displayName || u.username,
    username: u.username,
    avatar: u.avatar || u.avatarUrl || '',
    avatarUrl: u.avatarUrl || u.avatar,
    ageGroup: u.ageGroup,
    points: u.totalPoints,
    totalScore: u.totalPoints,
    bestScore: u.stats?.bestScore || 100,
    averageScore: u.accuracyRate || 90,
    quizzesCompleted: u.totalQuizzes,
    quizzesPlayed: u.totalQuizzes,
    accuracyRate: u.accuracyRate,
    streak: u.currentStreak,
    category: filter?.category || 'Overall'
  }));
}

// Daily Challenge (50+ questions Grand Arena Trial)
export function getDailyChallengeQuestions(): Question[] {
  const today = new Date().toISOString().split('T')[0];

  if (!dbData.dailyChallengeDates) {
    dbData.dailyChallengeDates = {};
  }

  // If already generated for today with 50 questions, return the same
  if (dbData.dailyChallengeDates[today] && dbData.dailyChallengeDates[today].length >= 50) {
    const qIds = dbData.dailyChallengeDates[today];
    const found = ALL_QUESTIONS.filter(q => qIds.includes(q.id));
    if (found.length >= 50) return found.slice(0, 50).map(shuffleQuestionOptions);
  }

  // Deterministically select 50 varied questions for today using date string hash
  let hash = 0;
  for (let i = 0; i < today.length; i++) {
    hash = (hash << 5) - hash + today.charCodeAt(i);
    hash |= 0;
  }
  hash = Math.abs(hash);

  const categories = [
    'great-kings-queens',
    'ramayan',
    'mahabharat',
    'india-gk',
    'science',
    'history',
    'geography',
    'space',
    'mathematics',
    'sports'
  ];
  const selected: Question[] = [];
  const selectedIds = new Set<string>();

  // Select evenly 5 questions from each of the 10 categories (10 * 5 = 50 questions)
  for (let catIdx = 0; catIdx < categories.length; catIdx++) {
    const cat = categories[catIdx];
    const catQs = ALL_QUESTIONS.filter(q => q.category === cat);
    if (catQs.length > 0) {
      for (let j = 0; j < 5 && selected.length < 50; j++) {
        const idx = (hash + j * 7 + catIdx * 11) % catQs.length;
        const q = catQs[idx];
        if (!selectedIds.has(q.id)) {
          selected.push(q);
          selectedIds.add(q.id);
        }
      }
    }
  }

  // If any category had duplicate indices or fewer items, fill up to 50 from ALL_QUESTIONS
  for (let i = 0; i < ALL_QUESTIONS.length && selected.length < 50; i++) {
    const idx = (hash + i * 3) % ALL_QUESTIONS.length;
    const q = ALL_QUESTIONS[idx];
    if (!selectedIds.has(q.id)) {
      selected.push(q);
      selectedIds.add(q.id);
    }
  }

  dbData.dailyChallengeDates[today] = selected.map(q => q.id);
  saveDB();
  return selected.map(shuffleQuestionOptions);
}

// Custom Quizzes
export function getCustomQuizzes(): CustomQuiz[] {
  return dbData.customQuizzes || [];
}

export function createCustomQuiz(quiz: Omit<CustomQuiz, 'id' | 'createdAt'>): CustomQuiz {
  const newQuiz: CustomQuiz = {
    ...quiz,
    id: `quiz-${Date.now()}`,
    createdAt: new Date().toISOString()
  };
  if (!dbData.customQuizzes) dbData.customQuizzes = [];
  dbData.customQuizzes.unshift(newQuiz);
  saveDB();
  return newQuiz;
}

export function getCustomQuizByPin(pin: string): CustomQuiz | undefined {
  return (dbData.customQuizzes || []).find(q => q.pinCode === pin);
}

export function getUserAttempts(userId: string): QuizAttempt[] {
  return (dbData.attempts || []).filter(a => a.userId === userId);
}

export function addCustomQuestion(qData: Omit<Question, 'id'>): Question {
  const newQ: Question = shuffleQuestionOptions({
    ...qData,
    id: `q-custom-${Date.now()}`
  });
  if (!dbData.customQuestions) dbData.customQuestions = [];
  dbData.customQuestions.push(newQ);
  ALL_QUESTIONS.push(newQ);
  saveDB();
  return newQ;
}
