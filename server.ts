import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { CATEGORIES, HISTORICAL_FIGURES } from './server/data/categories';
import { ACHIEVEMENTS_LIST } from './server/data/achievements';
import { ALL_QUESTIONS, getQuestionsByFilter, getRandomQuizQuestions } from './server/data/questions_all';
import {
  initDB,
  getUserById,
  getUserByEmail,
  getUserByUsername,
  createUser,
  recordQuizAttempt,
  getLeaderboard,
  getDailyChallengeQuestions,
  getCustomQuizzes,
  createCustomQuiz,
  getCustomQuizByPin,
  getUserAttempts,
  addCustomQuestion
} from './server/db';
import { translateQuestion, translateQuestionsBatch } from './server/translationService';

dotenv.config();

const app = express();
const PORT = 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'gk_arena_jwt_secret_dev_key_2025';

// Initialize the database
initDB();

app.use(express.json());

// Auth helper middleware
interface AuthRequest extends Request {
  user?: { id: string; role: string; ageGroup: string };
}

function authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    req.user = undefined;
    return next();
  }

  jwt.verify(token, JWT_SECRET, (err, decoded: any) => {
    if (!err && decoded) {
      req.user = { id: decoded.id, role: decoded.role, ageGroup: decoded.ageGroup };
    }
    next();
  });
}

app.use(authenticateToken);

// ==========================================
// API ROUTES
// ==========================================

// Health Check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    name: 'GK Arena API',
    totalQuestions: ALL_QUESTIONS.length,
    timestamp: new Date().toISOString()
  });
});

// Categories & Figures
app.get('/api/categories', (_req, res) => {
  res.json(CATEGORIES);
});

app.get('/api/historical-figures', (_req, res) => {
  res.json(HISTORICAL_FIGURES);
});

app.get('/api/achievements', (_req, res) => {
  res.json(ACHIEVEMENTS_LIST);
});

// Auth Routes
app.post('/api/auth/register', (req, res) => {
  try {
    const { username, displayName, email, password, ageGroup, avatarUrl } = req.body;

    if (!username || !displayName || !email || !password || !ageGroup) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (getUserByEmail(email)) {
      return res.status(400).json({ error: 'An account with this email already exists' });
    }

    if (getUserByUsername(username)) {
      return res.status(400).json({ error: 'Username is already taken' });
    }

    const newUser = createUser({
      username,
      displayName,
      email,
      password,
      ageGroup,
      avatarUrl
    });

    const token = jwt.sign(
      { id: newUser.id, role: newUser.role, ageGroup: newUser.ageGroup },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    // Exclude passwordHash in response
    const { passwordHash, ...userSafe } = newUser;
    res.status(201).json({ user: userSafe, token });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Registration failed' });
  }
});

app.post('/api/auth/login', (req, res) => {
  try {
    const { identifier, password } = req.body; // identifier can be email or username

    if (!identifier || !password) {
      return res.status(400).json({ error: 'Identifier and password are required' });
    }

    const user = getUserByEmail(identifier) || getUserByUsername(identifier);

    if (!user || !user.passwordHash) {
      return res.status(401).json({ error: 'Invalid username/email or password' });
    }

    const isValid = bcrypt.compareSync(password, user.passwordHash);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid username/email or password' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, ageGroup: user.ageGroup },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    const { passwordHash, ...userSafe } = user;
    res.json({ user: userSafe, token });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Login failed' });
  }
});

app.get('/api/auth/me', (req: AuthRequest, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  const user = getUserById(req.user.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const { passwordHash, ...userSafe } = user;
  res.json({ user: userSafe });
});

// Questions & Search
app.get('/api/questions', (req, res) => {
  const { category, ageGroup, difficulty, search, limit, historicalFigure, subcategory, ids } = req.query;
  const parsedIds = ids ? (ids as string).split(',').map(s => s.trim()).filter(Boolean) : undefined;

  const questions = getQuestionsByFilter({
    category: category as string,
    ageGroup: ageGroup as string,
    difficulty: difficulty as string,
    search: search as string,
    historicalFigure: historicalFigure as string,
    subcategory: subcategory as string,
    ids: parsedIds,
    limit: limit ? parseInt(limit as string, 10) : undefined
  });

  res.json(questions);
});

// Questions Daily & Daily Challenge
app.get('/api/questions/daily', (_req, res) => {
  const questions = getDailyChallengeQuestions();
  res.json(questions);
});

app.get('/api/daily-challenge', (_req, res) => {
  const questions = getDailyChallengeQuestions();
  res.json({
    date: new Date().toISOString().split('T')[0],
    title: 'Daily GK Arena Challenge',
    bonusMultiplier: 1.5,
    questions
  });
});

// Quiz Generation
app.get('/api/quiz/generate', (req: AuthRequest, res) => {
  const { category, ageGroup, difficulty, count } = req.query;

  // Use requested ageGroup, or fall back to user's registered ageGroup, or 'all'
  const targetAge = (ageGroup as string) || req.user?.ageGroup || 'all';

  const questions = getRandomQuizQuestions({
    category: category as string,
    ageGroup: targetAge,
    difficulty: difficulty as string,
    count: count ? parseInt(count as string, 10) : 10
  });

  res.json({
    category: category || 'mixed',
    ageGroup: targetAge,
    questions
  });
});

// Quiz Attempts & Submission
const handleQuizAttemptSubmit = (req: AuthRequest, res: Response) => {
  try {
    const {
      userId,
      userDisplayName,
      userAvatar,
      category,
      ageGroup,
      score,
      totalQuestions,
      correctCount,
      timeTakenSeconds,
      pointsEarned,
      coinsEarned,
      userAnswers
    } = req.body;

    const effectiveUserId = userId || req.user?.id || 'usr-guest';
    const effectiveName = userDisplayName || 'Noble Challenger';

    const result = recordQuizAttempt({
      userId: effectiveUserId,
      userDisplayName: effectiveName,
      userAvatar: userAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
      category: category || 'mixed',
      ageGroup: ageGroup || 'all',
      score: score || 0,
      totalQuestions: totalQuestions || 10,
      correctCount: correctCount || 0,
      timeTakenSeconds: timeTakenSeconds || 60,
      pointsEarned: pointsEarned || 0,
      coinsEarned: coinsEarned || 0,
      userAnswers: userAnswers || []
    });

    res.json({
      success: true,
      attemptId: result.attempt.id,
      attempt: result.attempt,
      pointsEarned,
      coinsEarned,
      updatedUser: result.updatedUser ? {
        totalPoints: result.updatedUser.totalPoints,
        coins: result.updatedUser.coins,
        currentStreak: result.updatedUser.currentStreak,
        badges: result.updatedUser.badges,
        accuracyRate: result.updatedUser.accuracyRate
      } : null,
      newAchievements: result.newAchievements
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to submit quiz' });
  }
};

app.post('/api/attempts', handleQuizAttemptSubmit);
app.post('/api/quiz/submit', handleQuizAttemptSubmit);

// User Quiz Attempts History
app.get('/api/attempts/user/:userId', (req, res) => {
  const attempts = getUserAttempts(req.params.userId);
  res.json(attempts);
});

// Leaderboard
app.get('/api/leaderboard', (req, res) => {
  const { ageGroup, category, period, limit } = req.query;
  const entries = getLeaderboard({
    ageGroup: ageGroup as string,
    category: category as string,
    period: period as any,
    limit: limit ? parseInt(limit as string, 10) : 20
  });

  res.json(entries);
});

// Custom Quizzes (Community & Teacher rooms)
app.get('/api/custom-quizzes', (_req, res) => {
  const quizzes = getCustomQuizzes();
  res.json(quizzes);
});

app.post('/api/custom-quizzes', (req: AuthRequest, res) => {
  try {
    const { title, description, category, ageGroup, timeLimitMinutes, questionIds, questionCount, createdById, createdByDisplayName } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    let finalQIds: string[] = questionIds || [];
    if (finalQIds.length === 0) {
      const generated = getRandomQuizQuestions({
        category: category || 'all',
        ageGroup: ageGroup || 'all',
        count: questionCount || 10
      });
      finalQIds = generated.map(q => q.id);
    }

    const pinCode = Math.floor(1000 + Math.random() * 9000).toString();

    const newQuiz = createCustomQuiz({
      title,
      description: description || '',
      createdById: createdById || req.user?.id || 'guest-creator',
      createdByDisplayName: createdByDisplayName || 'Arena Creator',
      category: category || 'all',
      ageGroup: ageGroup || 'all',
      timeLimitMinutes: timeLimitMinutes || 10,
      pinCode,
      questionIds: finalQIds
    });

    res.status(201).json(newQuiz);
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Failed to create quiz' });
  }
});

const handleCustomQuizByPin = (req: Request, res: Response) => {
  const pin = req.params.pin;
  const quiz = getCustomQuizByPin(pin);

  if (!quiz) {
    return res.status(404).json({ error: 'No quiz room found with this PIN code' });
  }

  res.json(quiz);
};

app.get('/api/custom-quizzes/pin/:pin', handleCustomQuizByPin);
app.get('/api/custom-quizzes/join/:pin', handleCustomQuizByPin);

// Add Question (Contributor / Admin)
app.post('/api/questions/create', (req: AuthRequest, res) => {
  try {
    const { question, options, correctAnswer, explanation, category, subcategory, ageGroup, difficulty, tags } = req.body;

    if (!question || !options || options.length !== 4 || !correctAnswer || !explanation || !category) {
      return res.status(400).json({ error: 'Invalid question payload' });
    }

    const newQ = addCustomQuestion({
      question,
      options,
      correctAnswer,
      explanation,
      category,
      subcategory: subcategory || 'General',
      ageGroup: ageGroup || 'all',
      difficulty: difficulty || 'medium',
      tags: tags || []
    });

    res.status(201).json({ question: newQ });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Could not save question' });
  }
});

// AI Historical Storyteller / Explanation (Gemini API Server-Side)
app.post('/api/ai/storyteller', async (req, res) => {
  const { topic, context, ageGroup, language } = req.body;

  if (!topic) {
    return res.status(400).json({ error: 'Topic is required' });
  }

  const isHindi = language === 'hi';

  // Graceful fallback if GEMINI_API_KEY is not configured
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.json({
      story: isHindi
        ? `${topic} का इतिहास अत्यंत गौरवशाली और प्रेरणादायी है! सदियों से छत्रपति शिवाजी महाराज, रानी लक्ष्मीबाई, सम्राट अशोक और रामायण व महाभारत के अमर आख्यान हमें सत्य, शौर्य और धर्म के मार्ग पर चलने की प्रेरणा देते हैं।`
        : `Explore the glorious heritage of ${topic}! Across centuries of Indian and world history, monumental figures like Chhatrapati Shivaji Maharaj, Rani Lakshmibai, Ashoka the Great, and epic chronicles of the Ramayan and Mahabharat continue to inspire courage, virtue, and truth.`,
      source: 'offline_curated'
    });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const prompt = isHindi
      ? `आप "जीके एरीना" (GK Arena) के पूज्य प्राचीन ऋषि और महान इतिहासकार हैं।
विषय: "${topic}"।
संदर्भ: ${context || 'भारतीय इतिहास, संस्कृति एवं महाकाव्य'}।
लक्ष्य आयु वर्ग: ${ageGroup || 'सभी छात्र एवं जिज्ञासु'}।
कृपया २ संक्षिप्त, ज्ञानवर्धक और प्रेरक अनुच्छेदों में शुद्ध व सरल हिन्दी (देवनागरी लिपि) में गहरा ऐतिहासिक विवरण या संकेत प्रस्तुत करें। लहजा प्रेरक, आदरपूर्ण और ज्ञानवर्धक होना चाहिए।`
      : `You are the revered ancient sage and master historian of "GK Arena", an educational platform for students and enthusiasts.
Provide an engaging, inspiring, and historically accurate 2-paragraph deep dive story or fact about: "${topic}".
Context: ${context || 'Indian History and World Knowledge'}.
Target Audience Age: ${ageGroup || 'General audience'}.
Keep tone inspiring, clear, respectful of traditional culture, and captivating for learners.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt
    });

    res.json({
      story: response.text || (isHindi ? 'इतिहास शौर्य, त्याग और ज्ञान की अमर गाथाओं से परिपूर्ण है।' : 'History echoes with glorious tales of bravery and wisdom.'),
      source: 'gemini'
    });
  } catch (err: any) {
    console.warn('Gemini call failed, falling back:', err?.message);
    res.json({
      story: isHindi
        ? `${topic} भारतीय इतिहास और ज्ञान का एक अमर विषय है, जिसने हमारी संस्कृति पर अमिट छाप छोड़ी है।`
        : `${topic} is one of the most celebrated subjects in history, leaving an indelible imprint on civilization and our shared heritage.`,
      source: 'offline_fallback'
    });
  }
});

// Question Translation Endpoint (English -> Hindi)
app.post('/api/translate/question', async (req, res) => {
  try {
    const { question } = req.body;
    if (!question || !question.id) {
      return res.status(400).json({ error: 'Valid question object is required' });
    }
    const translated = await translateQuestion(question);
    res.json(translated);
  } catch (err: any) {
    console.error('Translation error:', err?.message);
    res.status(500).json({ error: 'Failed to translate question' });
  }
});

// Batch Question Translation Endpoint
app.post('/api/translate/batch', async (req, res) => {
  try {
    const { questions } = req.body;
    if (!Array.isArray(questions)) {
      return res.status(400).json({ error: 'Array of questions is required' });
    }
    const translatedQuestions = await translateQuestionsBatch(questions);
    res.json({ questions: translatedQuestions });
  } catch (err: any) {
    console.error('Batch translation error:', err?.message);
    res.status(500).json({ error: 'Failed to translate questions batch' });
  }
});

// ==========================================
// VITE / STATIC SERVING
// ==========================================
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`GK Arena Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
