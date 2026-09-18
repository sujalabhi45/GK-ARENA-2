import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AuthModal } from './components/AuthModal';
import { DailyChallengeCard } from './components/DailyChallengeCard';
import { CategoryGrid } from './components/CategoryGrid';
import { KingsAndQueensGallery } from './components/KingsAndQueensGallery';
import { EpicsPavilion } from './components/EpicsPavilion';
import { LeaderboardView } from './components/LeaderboardView';
import { AchievementsView } from './components/AchievementsView';
import { CustomQuizView } from './components/CustomQuizView';
import { ProfileView } from './components/ProfileView';
import { QuizModal } from './components/QuizModal';
import { User, AgeGroup, CategoryInfo, HistoricalFigure, Question, CustomQuiz, Language } from './types';
import { TRANSLATIONS } from './translations';
import { Crown, Sparkles, Trophy, BookOpen, Shield, Flame, Languages } from 'lucide-react';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroup>('all');
  const [currentTab, setCurrentTab] = useState<string>('play');
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const [historicalFigures, setHistoricalFigures] = useState<HistoricalFigure[]>([]);
  const [loading, setLoading] = useState(true);

  // Language State with persistence
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gkarena_language');
      if (saved === 'hi' || saved === 'en') return saved;
    }
    return 'en';
  });

  const handleToggleLanguage = (newLang?: Language) => {
    setLanguage(prev => {
      const next = newLang || (prev === 'en' ? 'hi' : 'en');
      localStorage.setItem('gkarena_language', next);
      return next;
    });
  };

  const t = TRANSLATIONS[language];

  // Modals
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Active Quiz State
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<Question[]>([]);
  const [activeQuizTitle, setActiveQuizTitle] = useState('Arena Quiz');
  const [activeQuizCategory, setActiveQuizCategory] = useState('all');
  const [dailyPlayed, setDailyPlayed] = useState(false);

  // Initial Load: Categories, Figures, and auto-login demo or stored token
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Fetch categories & figures in parallel
        const [catRes, figRes] = await Promise.all([
          fetch('/api/categories'),
          fetch('/api/historical-figures')
        ]);

        const catData = await catRes.json();
        const figData = await figRes.json();

        const safeCategories = Array.isArray(catData) ? catData : (catData?.categories || []);
        const safeFigures = Array.isArray(figData) ? figData : (figData?.figures || []);

        setCategories(safeCategories);
        setHistoricalFigures(safeFigures);

        // Check stored auth or auto-login with default demo user
        const storedToken = localStorage.getItem('gkarena_token');
        if (storedToken) {
          const userRes = await fetch('/api/auth/me', {
            headers: { Authorization: `Bearer ${storedToken}` }
          });
          if (userRes.ok) {
            const userData = await userRes.json();
            const actualUser = userData.user || userData;
            setUser(actualUser);
            setToken(storedToken);
            if (actualUser.ageGroup) setSelectedAgeGroup(actualUser.ageGroup);
          } else {
            // Auto login with demo user "diya" (Junior 10-12) for instant play
            loginDefaultDemo();
          }
        } else {
          loginDefaultDemo();
        }
      } catch (err) {
        console.error('Initialization error:', err);
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  const loginDefaultDemo = async () => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: 'diya', password: 'Password@123' })
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem('gkarena_token', data.token);
      }
    } catch (err) {
      console.warn('Demo login failed:', err);
    }
  };

  const handleLoginSuccess = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser);
    localStorage.setItem('gkarena_token', newToken);
    if (newUser.ageGroup) setSelectedAgeGroup(newUser.ageGroup);
  };

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('gkarena_token');
  };

  // Launch Quiz Handlers
  const handleStartDaily = async () => {
    try {
      const res = await fetch('/api/questions/daily');
      const data = await res.json();
      const questions = Array.isArray(data) ? data : (data?.questions || []);
      if (questions && questions.length > 0) {
        setActiveQuizQuestions(questions);
        setActiveQuizTitle(language === 'hi' ? "आज का ५० प्रश्नों का महा-मुकाबला" : "Today's 50-Question Daily Grand Trial");
        setActiveQuizCategory('daily');
        setIsQuizOpen(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleStartCategoryQuiz = async (catId: string, count: number = 10) => {
    try {
      let url = `/api/questions?limit=${count}`;
      if (catId && catId !== 'all') {
        url += `&category=${catId}`;
      }
      if (selectedAgeGroup && selectedAgeGroup !== 'all') {
        url += `&ageGroup=${selectedAgeGroup}`;
      }

      const res = await fetch(url);
      const data = await res.json();
      const questions = Array.isArray(data) ? data : (data?.questions || []);
      if (questions && questions.length > 0) {
        const catInfo = categories.find(c => c.id === catId);
        setActiveQuizQuestions(questions);
        setActiveQuizTitle(catInfo ? `${catInfo.name} Quiz` : 'Mixed Knowledge Arena');
        setActiveQuizCategory(catId);
        setIsQuizOpen(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleStartRulerQuiz = async (rulerName: string) => {
    try {
      // First try fetching ruler-specific questions
      const res = await fetch(`/api/questions?category=great-kings-queens&historicalFigure=${encodeURIComponent(rulerName)}&limit=10`);
      const data = await res.json();
      let questions = Array.isArray(data) ? data : (data?.questions || []);

      // If less than 3, fallback to great kings category questions
      if (!questions || questions.length < 3) {
        const fallbackRes = await fetch('/api/questions?category=great-kings-queens&limit=10');
        const fallbackData = await fallbackRes.json();
        questions = Array.isArray(fallbackData) ? fallbackData : (fallbackData?.questions || []);
      }

      if (questions && questions.length > 0) {
        setActiveQuizQuestions(questions);
        setActiveQuizTitle(`${rulerName} Challenge`);
        setActiveQuizCategory('great-kings-queens');
        setIsQuizOpen(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleStartEpicQuiz = async (epic: 'ramayan' | 'mahabharat', subcategory?: string) => {
    try {
      let url = `/api/questions?category=${epic}&limit=10`;
      if (subcategory) {
        url += `&subcategory=${encodeURIComponent(subcategory)}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      const questions = Array.isArray(data) ? data : (data?.questions || []);
      if (questions && questions.length > 0) {
        setActiveQuizQuestions(questions);
        setActiveQuizTitle(subcategory ? `${subcategory} (${epic.toUpperCase()})` : `${epic === 'ramayan' ? 'Ramayan' : 'Mahabharat'} Quest`);
        setActiveQuizCategory(epic);
        setIsQuizOpen(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handlePlayCustomQuiz = async (quiz: CustomQuiz) => {
    try {
      let questions: Question[] = [];
      if (quiz.questionIds && quiz.questionIds.length > 0) {
        const res = await fetch(`/api/questions?ids=${quiz.questionIds.join(',')}`);
        const data = await res.json();
        questions = Array.isArray(data) ? data : (data?.questions || []);
      }

      if (!questions || questions.length === 0) {
        const res = await fetch(`/api/questions?category=${quiz.category}&limit=10`);
        const data = await res.json();
        questions = Array.isArray(data) ? data : (data?.questions || []);
      }

      if (questions && questions.length > 0) {
        setActiveQuizQuestions(questions);
        setActiveQuizTitle(quiz.title);
        setActiveQuizCategory(quiz.category);
        setIsQuizOpen(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleQuizCompleted = async (result: any) => {
    if (activeQuizCategory === 'daily') {
      setDailyPlayed(true);
    }
    // Refresh user state
    if (token) {
      try {
        const res = await fetch('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const updatedData = await res.json();
          setUser(updatedData.user || updatedData);
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar
        user={user}
        selectedAgeGroup={selectedAgeGroup}
        onSelectAgeGroup={setSelectedAgeGroup}
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={handleLogout}
        onStartDaily={handleStartDaily}
        language={language}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Main App Canvas */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {loading ? (
          <div className="py-32 flex flex-col items-center justify-center text-center">
            <Crown className="w-12 h-12 text-amber-400 animate-bounce mb-3" />
            <h3 className="text-xl font-bold font-serif text-white">
              {language === 'hi' ? 'ज्ञान का महामंच खुल रहा है...' : 'Opening the Knowledge Arena...'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {language === 'hi' ? 'प्रश्न बैंक और ऐतिहासिक अभिलेखागार लोड हो रहे हैं...' : 'Loading question banks and royal archives...'}
            </p>
          </div>
        ) : (
          <>
            {/* Play Tab: Daily Challenge + Categories */}
            {currentTab === 'play' && (
              <div className="space-y-8 animate-fade-in">
                <DailyChallengeCard
                  streak={user?.currentStreak || 1}
                  onStartDaily={handleStartDaily}
                  alreadyPlayedToday={dailyPlayed}
                  language={language}
                />

                <CategoryGrid
                  categories={categories}
                  selectedAgeGroup={selectedAgeGroup}
                  onStartQuiz={handleStartCategoryQuiz}
                  onExploreCategory={(targetTab) => setCurrentTab(targetTab)}
                  language={language}
                />
              </div>
            )}

            {/* Kings & Queens Hall */}
            {currentTab === 'kings-queens' && (
              <div className="animate-fade-in">
                <KingsAndQueensGallery
                  figures={historicalFigures}
                  onStartRulerQuiz={handleStartRulerQuiz}
                  language={language}
                />
              </div>
            )}

            {/* Epics Pavilion */}
            {currentTab === 'epics' && (
              <div className="animate-fade-in">
                <EpicsPavilion
                  onStartEpicQuiz={handleStartEpicQuiz}
                  language={language}
                />
              </div>
            )}

            {/* Leaderboard View */}
            {currentTab === 'leaderboard' && (
              <div className="animate-fade-in">
                <LeaderboardView
                  currentUserId={user?.id}
                  selectedAgeGroup={selectedAgeGroup}
                  onSelectAgeGroup={setSelectedAgeGroup}
                  language={language}
                />
              </div>
            )}

            {/* Achievements & Trophies */}
            {currentTab === 'badges' && (
              <div className="animate-fade-in">
                <AchievementsView
                  user={user}
                  language={language}
                />
              </div>
            )}

            {/* Custom & Multiplayer Rooms */}
            {currentTab === 'custom' && (
              <div className="animate-fade-in">
                <CustomQuizView
                  user={user}
                  categories={categories}
                  onPlayCustomQuiz={handlePlayCustomQuiz}
                  onRequireAuth={() => setIsAuthOpen(true)}
                  language={language}
                />
              </div>
            )}

            {/* User Profile & Mastery View */}
            {currentTab === 'profile' && user && (
              <div className="animate-fade-in">
                <ProfileView
                  user={user}
                  language={language}
                />
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/90 border-t border-slate-800 text-slate-400 text-xs py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-amber-400" />
            <span className="font-bold font-serif text-white tracking-wide text-sm">
              {t.brandTitle}
            </span>
            <span className="text-slate-500">•</span>
            <span>{language === 'hi' ? 'सभी आयु वर्ग: बच्चे, जूनियर, किशोर व वयस्क' : 'All Age Groups: Kids, Juniors, Teens & Adults'}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
            <button onClick={() => setCurrentTab('play')} className="hover:text-amber-300">{t.tabPlay}</button>
            <button onClick={() => setCurrentTab('kings-queens')} className="hover:text-amber-300">{t.tabKingsQueens}</button>
            <button onClick={() => setCurrentTab('epics')} className="hover:text-amber-300">{t.tabEpics}</button>
            <button onClick={() => setCurrentTab('leaderboard')} className="hover:text-amber-300">{t.tabLeaderboard}</button>
            <button onClick={() => setCurrentTab('badges')} className="hover:text-amber-300">{t.tabTrophies}</button>
            <button
              onClick={() => handleToggleLanguage()}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
            >
              <Languages className="w-3 h-3" />
              <span>{language === 'en' ? 'हिन्दी में बदलें' : 'Switch to English'}</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} GK Arena. {language === 'hi' ? 'भारतीय धरोहर और वैश्विक ज्ञान के जिज्ञासुओं के लिए समर्पित।' : 'Crafted for learners of Indian Heritage & Global Knowledge.'}
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        language={language}
      />

      {/* Active Quiz Engine Modal */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        questions={activeQuizQuestions}
        quizTitle={activeQuizTitle}
        category={activeQuizCategory}
        user={user}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onQuizCompleted={handleQuizCompleted}
      />
    </div>
  );
}
