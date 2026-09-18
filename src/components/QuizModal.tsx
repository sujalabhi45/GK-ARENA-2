import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  X, Clock, Sparkles, CheckCircle2, AlertCircle, 
  HelpCircle, Zap, Trophy, Coins, RotateCcw, ArrowRight,
  Shield, BookOpen, Volume2, VolumeX, Languages
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Question, User, Achievement, Language } from '../types';
import { TRANSLATIONS } from '../translations';
import { getQuestionInHindi } from '../utils/hindiTranslationEngine';
import { CATEGORIES_HI, ACHIEVEMENTS_HI } from '../data/hindiData';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  quizTitle: string;
  category: string;
  user: User | null;
  language?: Language;
  onToggleLanguage?: (lang?: Language) => void;
  onQuizCompleted: (result: {
    score: number;
    totalQuestions: number;
    correctCount: number;
    timeTakenSeconds: number;
    pointsEarned: number;
    coinsEarned: number;
    userAnswers: any[];
    newAchievements: Achievement[];
  }) => void;
}

// Lightweight Web Audio SFX Engine (No external sound assets needed)
class SoundEffects {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private getContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  playCorrect() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
    osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.35);
  }

  playIncorrect() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now); // A3
    osc.frequency.linearRampToValueAtTime(180, now + 0.25);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.3);
  }

  playFanfare() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const now = ctx.currentTime + i * 0.12;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    });
  }
}

const sfx = new SoundEffects();

// Helper to shuffle question options so the correct answer is randomized across A, B, C, D
// Simultaneously shuffles English options and Hindi options with identical index alignment
const shuffleQuestionOptions = (q: Question): Question => {
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
};

export const QuizModal: React.FC<QuizModalProps> = ({
  isOpen,
  onClose,
  questions,
  quizTitle,
  category,
  user,
  language = 'en',
  onToggleLanguage,
  onQuizCompleted
}) => {
  const t = TRANSLATIONS[language];
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [eliminatedIndices, setEliminatedIndices] = useState<number[]>([]);
  const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);
  const [aiHint, setAiHint] = useState<string | null>(null);
  const [loadingHint, setLoadingHint] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  // Stats accumulator
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalTimeTaken, setTotalTimeTaken] = useState(0);
  const [unlockedAchievements, setUnlockedAchievements] = useState<Achievement[]>([]);

  const timerRef = useRef<any>(null);
  const questionStartTimeRef = useRef<number>(Date.now());

  const questionsList = activeQuestions.length > 0 ? activeQuestions : questions;
  const currentQ = questionsList[currentIndex];
  const timeLimit = user?.ageGroup === '6-9' ? 35 : 25;

  // Synchronous and instantaneous question localization
  // Toggling Hindi updates the active question, options, and explanation in 0ms!
  const displayQ = useMemo(() => {
    if (!currentQ) return currentQ;
    if (language === 'hi') {
      return getQuestionInHindi(currentQ);
    }
    return currentQ;
  }, [language, currentQ]);

  // Reset quiz state when opened
  useEffect(() => {
    if (isOpen && questions.length > 0) {
      const randomized = questions.map(shuffleQuestionOptions);
      setActiveQuestions(randomized);
      setCurrentIndex(0);
      setSelectedOption(null);
      setSelectedOptionIndex(null);
      setIsAnswerRevealed(false);
      setTimeLeft(timeLimit);
      setIsQuizFinished(false);
      setUserAnswers([]);
      setCorrectCount(0);
      setTotalTimeTaken(0);
      setEliminatedIndices([]);
      setUsedFiftyFifty(false);
      setAiHint(null);
      questionStartTimeRef.current = Date.now();
    }
  }, [isOpen, questions]);

  // Timer effect
  useEffect(() => {
    if (!isOpen || isQuizFinished || isAnswerRevealed) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleTimeExpired();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, isQuizFinished, isAnswerRevealed, currentIndex]);

  const handleTimeExpired = () => {
    if (isAnswerRevealed || isQuizFinished || !currentQ) return;
    sfx.playIncorrect();
    const timeSpent = Math.round((Date.now() - questionStartTimeRef.current) / 1000);
    setTotalTimeTaken(t => t + timeSpent);

    const activeDisplay = language === 'hi' ? getQuestionInHindi(currentQ) : currentQ;
    const correctIdx = currentQ.options.indexOf(currentQ.correctAnswer);

    const answerRecord = {
      questionId: currentQ.id,
      question: activeDisplay.question,
      selectedAnswer: language === 'hi' ? 'समय समाप्त' : 'Time Expired',
      correctAnswer: (activeDisplay.options && activeDisplay.options[correctIdx]) || currentQ.correctAnswer,
      isCorrect: false,
      explanation: activeDisplay.explanation
    };

    setUserAnswers(prev => [...prev, answerRecord]);
    setSelectedOptionIndex(-1);
    setSelectedOption('Time Expired');
    setIsAnswerRevealed(true);
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerRevealed || isQuizFinished || !currentQ) return;

    if (timerRef.current) clearInterval(timerRef.current);

    const isCorrect = currentQ.options[idx] === currentQ.correctAnswer;
    const timeSpent = Math.round((Date.now() - questionStartTimeRef.current) / 1000);
    setTotalTimeTaken(t => t + timeSpent);

    if (isCorrect) {
      sfx.playCorrect();
      setCorrectCount(c => c + 1);
    } else {
      sfx.playIncorrect();
    }

    const activeDisplay = language === 'hi' ? getQuestionInHindi(currentQ) : currentQ;
    const correctIdx = currentQ.options.indexOf(currentQ.correctAnswer);

    const answerRecord = {
      questionId: currentQ.id,
      question: activeDisplay.question,
      selectedAnswer: (activeDisplay.options && activeDisplay.options[idx]) || currentQ.options[idx],
      correctAnswer: (activeDisplay.options && activeDisplay.options[correctIdx]) || currentQ.correctAnswer,
      isCorrect,
      explanation: activeDisplay.explanation
    };

    setUserAnswers(prev => [...prev, answerRecord]);
    setSelectedOptionIndex(idx);
    setSelectedOption(currentQ.options[idx]);
    setIsAnswerRevealed(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questionsList.length) {
      setCurrentIndex(i => i + 1);
      setSelectedOption(null);
      setSelectedOptionIndex(null);
      setIsAnswerRevealed(false);
      setTimeLeft(timeLimit);
      setEliminatedIndices([]);
      setAiHint(null);
      questionStartTimeRef.current = Date.now();
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = async () => {
    setIsQuizFinished(true);
    sfx.playFanfare();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    const totalQ = questionsList.length;
    const finalCorrect = correctCount + (selectedOptionIndex !== null && selectedOptionIndex >= 0 && currentQ && currentQ.options[selectedOptionIndex] === currentQ.correctAnswer && !isAnswerRevealed ? 1 : 0);
    const scorePercent = Math.round((finalCorrect / totalQ) * 100);
    const pointsEarned = finalCorrect * 25 + (scorePercent === 100 ? 50 : 0);
    const coinsEarned = Math.round(pointsEarned / 10);

    // Record attempt on backend if logged in
    let newAchs: Achievement[] = [];
    if (user) {
      try {
        const res = await fetch('/api/attempts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: user.id,
            userDisplayName: user.displayName || user.username,
            userAvatar: user.avatar,
            category,
            ageGroup: user.ageGroup,
            score: scorePercent,
            totalQuestions: totalQ,
            correctCount: finalCorrect,
            timeTakenSeconds: totalTimeTaken,
            pointsEarned,
            coinsEarned,
            userAnswers
          })
        });

        if (res.ok) {
          const data = await res.json();
          newAchs = data.newAchievements || [];
          setUnlockedAchievements(newAchs);
        }
      } catch (err) {
        console.error('Failed to submit attempt:', err);
      }
    }

    onQuizCompleted({
      score: scorePercent,
      totalQuestions: totalQ,
      correctCount: finalCorrect,
      timeTakenSeconds: totalTimeTaken,
      pointsEarned,
      coinsEarned,
      userAnswers,
      newAchievements: newAchs
    });
  };

  // 50/50 Lifeline
  const handleFiftyFifty = () => {
    if (usedFiftyFifty || isAnswerRevealed || !currentQ) return;
    const correctIdx = currentQ.options.indexOf(currentQ.correctAnswer);
    const wrongIndices = [0, 1, 2, 3].filter(idx => idx !== correctIdx);
    // Shuffle and pick 2 to eliminate
    const shuffledWrong = wrongIndices.sort(() => 0.5 - Math.random());
    setEliminatedIndices(shuffledWrong.slice(0, 2));
    setUsedFiftyFifty(true);
  };

  // Ask AI Sage Hint
  const handleAskAiHint = async () => {
    if (aiHint || loadingHint || isAnswerRevealed || !currentQ) return;
    setLoadingHint(true);
    try {
      const res = await fetch('/api/ai/storyteller', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: `Hint for Quiz Question: ${currentQ.question}`,
          context: `Category: ${currentQ.category}. Give a subtle, engaging historical hint that guides the student to think in the right direction without explicitly giving away which of [${currentQ.options.join(', ')}] is the exact answer.`,
          ageGroup: user?.ageGroup || '10-12',
          language
        })
      });
      const data = await res.json();
      setAiHint(data.story || (displayQ ? displayQ.explanation : currentQ.explanation));
    } catch (err) {
      setAiHint(language === 'hi' ? 'उस कालखंड के प्रमुख महापुरुषों, स्थानों और ऐतिहासिक घटनाओं पर ध्यान दें!' : "Think about the prominent historical figures and events during that epoch!");
    } finally {
      setLoadingHint(false);
    }
  };

  const localizedQuizTitle = language === 'hi'
    ? (CATEGORIES_HI[category]?.name ? `${CATEGORIES_HI[category].name} क्विज़` : quizTitle)
    : quizTitle;

  if (!isOpen || questions.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border-2 border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] text-slate-100">
        
        {/* Top Control Bar */}
        <div className="bg-slate-950 px-4 sm:px-5 py-3.5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold font-serif text-amber-300">
              {localizedQuizTitle}
            </span>
            <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {language === 'hi' ? `प्रश्न ${currentIndex + 1} / ${questions.length}` : `Q ${currentIndex + 1} of ${questions.length}`}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher in Quiz */}
            {onToggleLanguage && (
              <button
                id="quiz-modal-lang-toggle"
                onClick={() => onToggleLanguage()}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-amber-500/40 text-xs font-bold text-amber-300 hover:bg-slate-800 transition-colors cursor-pointer"
                title={language === 'en' ? 'Switch to Hindi (हिन्दी में बदलें)' : 'Switch to English (अंग्रेजी में बदलें)'}
              >
                <Languages className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
              </button>
            )}

            {/* Audio Toggle */}
            <button
              id="btn-toggle-sound"
              onClick={() => {
                sfx.enabled = !soundOn;
                setSoundOn(!soundOn);
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title={soundOn ? 'Mute Sound' : 'Unmute Sound'}
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>

            {/* Close Button */}
            <button
              id="btn-close-quiz"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {!isQuizFinished ? (
          /* Active Question Flow */
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 flex flex-col justify-between">
            <div>
              {/* Progress & Timer Bar */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">
                    {t.questionLabel} {currentIndex + 1} / {questionsList.length}
                  </span>
                  <div className="flex items-center gap-1.5 font-bold">
                    <Clock className={`w-3.5 h-3.5 ${timeLeft <= 5 ? 'text-rose-500 animate-pulse' : 'text-amber-400'}`} />
                    <span className={timeLeft <= 5 ? 'text-rose-400' : 'text-slate-200'}>
                      {timeLeft}s
                    </span>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / questionsList.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                    {language === 'hi' && CATEGORIES_HI[currentQ.category]?.name 
                      ? CATEGORIES_HI[currentQ.category].name 
                      : (t[currentQ.category as keyof typeof t] || currentQ.category)}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {t.difficulty}: <strong className="text-slate-300 capitalize">{t[`difficulty${currentQ.difficulty.charAt(0).toUpperCase() + currentQ.difficulty.slice(1)}` as keyof typeof t] || currentQ.difficulty}</strong>
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-white leading-relaxed">
                  {displayQ.question}
                </h3>
              </div>

              {/* Lifelines Bar */}
              {!isAnswerRevealed && (
                <div className="flex items-center gap-2 mb-5">
                  <button
                    id="lifeline-fifty-fifty"
                    type="button"
                    disabled={usedFiftyFifty}
                    onClick={handleFiftyFifty}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                      usedFiftyFifty
                        ? 'bg-slate-800/40 text-slate-600 border border-slate-800 cursor-not-allowed'
                        : 'bg-slate-800 hover:bg-slate-750 text-amber-300 border border-amber-500/30 hover:border-amber-500/60 shadow-sm cursor-pointer'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>{t.fiftyFifty} {usedFiftyFifty ? (language === 'hi' ? '(प्रयुक्त)' : '(Used)') : ''}</span>
                  </button>

                  <button
                    id="lifeline-ai-hint"
                    type="button"
                    disabled={loadingHint || !!aiHint}
                    onClick={handleAskAiHint}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-750 text-orange-300 border border-orange-500/30 hover:border-orange-500/60 shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{loadingHint ? t.aiThinking : t.askAiSage}</span>
                  </button>
                </div>
              )}

              {/* AI Sage Hint Popup if invoked */}
              {aiHint && (
                <div className="mb-5 p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/40 text-xs text-amber-200 leading-relaxed animate-fade-in flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-amber-300 block mb-0.5">{t.aiHintLabel}:</strong>
                    <span>{aiHint}</span>
                  </div>
                </div>
              )}

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {(displayQ.options || currentQ.options).map((opt, idx) => {
                  const isEliminated = eliminatedIndices.includes(idx);
                  const isSelected = selectedOptionIndex === idx;
                  const isCorrect = currentQ.options[idx] === currentQ.correctAnswer;

                  let btnStyle = 'bg-slate-950/70 border-slate-800 text-slate-200 hover:bg-slate-800 hover:border-amber-500/40';

                  if (isAnswerRevealed) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-950/90 border-emerald-500 text-emerald-100 shadow-md shadow-emerald-500/20';
                    } else if (isSelected) {
                      btnStyle = 'bg-rose-950/90 border-rose-500 text-rose-100';
                    } else {
                      btnStyle = 'bg-slate-950/40 border-slate-850 text-slate-600 opacity-60';
                    }
                  } else if (isSelected) {
                    btnStyle = 'bg-amber-500/20 border-amber-400 text-amber-200';
                  }

                  if (isEliminated) {
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl border border-slate-850 bg-slate-950/30 text-slate-650 line-through text-xs font-medium cursor-not-allowed opacity-40 select-none flex items-center"
                      >
                        <span className="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center text-[11px] mr-2">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={idx}
                      id={`quiz-option-${idx}`}
                      disabled={isAnswerRevealed}
                      onClick={() => handleSelectOption(idx)}
                      className={`p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all duration-150 flex items-center justify-between cursor-pointer ${btnStyle}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-[11px] font-bold text-amber-400 flex-shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-snug">{opt}</span>
                      </div>

                      {isAnswerRevealed && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      )}
                      {isAnswerRevealed && isSelected && !isCorrect && (
                        <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Historical Explanation Drawer */}
              {isAnswerRevealed && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed animate-fade-in">
                  <div className="flex items-center gap-1.5 font-bold text-amber-400 mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{t.historicalContext}</span>
                  </div>
                  <p>{displayQ.explanation}</p>
                </div>
              )}
            </div>

            {/* Next Question / Finish Action Bar */}
            {isAnswerRevealed && (
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4 mt-4">
                <div className="text-xs text-slate-400">
                  {selectedOptionIndex !== null && selectedOptionIndex >= 0 && currentQ.options[selectedOptionIndex] === currentQ.correctAnswer ? (
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> {t.correctExplanation} (+25 {language === 'hi' ? 'अंक' : 'pts'})
                    </span>
                  ) : (
                    <span className="text-rose-400 font-bold flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {t.incorrectExplanation}
                    </span>
                  )}
                </div>

                <button
                  id="btn-next-question"
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/25 flex items-center gap-2 transition-transform hover:scale-102 cursor-pointer"
                >
                  <span>{currentIndex + 1 < questionsList.length ? t.nextQuestion : t.viewResults}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Post-Quiz Comprehensive Result Screen */
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shadow-xl shadow-amber-500/10 mb-1">
                <Trophy className="w-10 h-10 animate-bounce" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-serif text-white">
                {t.arenaTrialCompleted}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {language === 'hi' ? `आपने सफलतापूर्वक पूर्ण किया:` : `You’ve finished the`} <strong className="text-amber-300">{localizedQuizTitle}</strong>.
              </p>
            </div>

            {/* Scorecard Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 block mb-1">{t.accuracy}</span>
                <span className="text-xl font-black text-amber-300">
                  {Math.round((correctCount / questionsList.length) * 100)}%
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 block mb-1">{t.correct}</span>
                <span className="text-xl font-black text-emerald-400">
                  {correctCount} / {questionsList.length}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 block mb-1">{t.pointsEarned}</span>
                <span className="text-xl font-black text-yellow-400">
                  +{correctCount * 25} {language === 'hi' ? 'अंक' : 'XP'}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 block mb-1">{t.coinsEarned}</span>
                <span className="text-xl font-black text-amber-400 flex items-center justify-center gap-1">
                  <Coins className="w-4 h-4 text-amber-400" />
                  +{Math.round((correctCount * 25) / 10)}
                </span>
              </div>
            </div>

            {/* Unlocked Achievements Toast */}
            {unlockedAchievements.length > 0 && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 mb-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{t.newAchievementsUnlocked}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {unlockedAchievements.map(ach => (
                    <div key={ach.id} className="px-3 py-1.5 rounded-xl bg-slate-950 border border-amber-500/40 flex items-center gap-2 text-xs">
                      <Trophy className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-bold text-white">
                        {language === 'hi' && ACHIEVEMENTS_HI[ach.id]?.title ? ACHIEVEMENTS_HI[ach.id].title : ach.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Question Review Accordion */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold font-serif text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>{t.questionReview} ({questionsList.length})</span>
              </h4>

              <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                {userAnswers.map((ans, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl border text-xs leading-relaxed ${
                      ans.isCorrect
                        ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
                        : 'bg-rose-950/30 border-rose-500/30 text-rose-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-bold text-white">
                        {i + 1}. {ans.question}
                      </p>
                      {ans.isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {t.yourAnswer}: <strong className={ans.isCorrect ? 'text-emerald-300' : 'text-rose-300'}>{ans.selectedAnswer}</strong>
                      {!ans.isCorrect && (
                        <span> | {t.correctAnswerReview}: <strong className="text-emerald-300">{ans.correctAnswer}</strong></span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1 italic">
                      {ans.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                id="btn-finish-dialog-close"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/25 cursor-pointer"
              >
                {t.returnToArena}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
