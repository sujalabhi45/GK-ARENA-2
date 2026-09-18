import React, { useState, useEffect } from 'react';
import { User, Flame, Coins, Trophy, Award, BookOpen, CheckCircle2, Clock, ShieldCheck, Target } from 'lucide-react';
import { User as UserType, QuizAttempt, Language } from '../types';
import { CATEGORIES_HI } from '../data/hindiData';

interface ProfileViewProps {
  user: UserType;
  onOpenQuizReview?: (attempt: QuizAttempt) => void;
  language?: Language;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ 
  user,
  language = 'en'
}) => {
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [loading, setLoading] = useState(true);
  const isHi = language === 'hi';

  useEffect(() => {
    fetch(`/api/attempts/user/${user.id}`)
      .then(res => res.json())
      .then(data => {
        const list = Array.isArray(data) ? data : (data?.attempts || []);
        setAttempts(list);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [user.id]);

  const mastery = user.categoryMastery || {};
  const masteryEntries = Object.entries(mastery);

  return (
    <div className="space-y-8">
      {/* Hero Profile Card */}
      <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-orange-950/60 p-6 sm:p-8 rounded-3xl border border-amber-500/30 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <img
            src={user.avatar || user.avatarUrl}
            alt={user.displayName}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-4 ring-amber-500/50 shadow-2xl"
          />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl sm:text-3xl font-black font-serif text-white">
                {user.displayName || user.username}
              </h2>
              {user.role === 'admin' && (
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-amber-500 text-slate-950">
                  {isHi ? 'विद्वान' : 'Master'}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              @{user.username} • <strong className="text-amber-300 capitalize">{isHi ? 'आयु वर्ग:' : 'Age Group:'} {user.ageGroup}</strong>
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              {isHi ? 'सदस्य बने:' : 'Member since'} {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Quick Badges Count */}
        <div className="flex items-center gap-3 bg-slate-950/70 border border-slate-800 p-4 rounded-2xl">
          <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] text-slate-400 block font-medium">
              {isHi ? 'प्राप्त पदक' : 'Trophies Earned'}
            </span>
            <span className="text-xl font-black text-amber-300">
              {user.badges?.length || 0} {isHi ? 'बैज' : 'Badges'}
            </span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[11px] text-slate-400 block mb-1">
            {isHi ? 'कुल अंक' : 'Total Points'}
          </span>
          <span className="text-xl font-black text-amber-300">
            {user.totalPoints.toLocaleString()}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[11px] text-slate-400 block mb-1">
            {isHi ? 'एरीना सिक्के' : 'Arena Coins'}
          </span>
          <span className="text-xl font-black text-yellow-400 flex items-center justify-center gap-1">
            <Coins className="w-4 h-4 text-yellow-400" />
            {user.coins || 50}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[11px] text-slate-400 block mb-1">
            {isHi ? 'सक्रिय स्ट्रीक' : 'Active Streak'}
          </span>
          <span className="text-xl font-black text-orange-400 flex items-center justify-center gap-1">
            <Flame className="w-4 h-4 fill-orange-400" />
            {user.currentStreak || 1}{isHi ? ' दिन' : 'd'}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[11px] text-slate-400 block mb-1">
            {isHi ? 'सर्वश्रेष्ठ स्ट्रीक' : 'Best Streak'}
          </span>
          <span className="text-xl font-black text-amber-400">
            {user.bestStreak || 1}{isHi ? ' दिन' : 'd'}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[11px] text-slate-400 block mb-1">
            {isHi ? 'सटीकता' : 'Accuracy'}
          </span>
          <span className="text-xl font-black text-emerald-400">
            {user.accuracyRate || 90}%
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-center">
          <span className="text-[11px] text-slate-400 block mb-1">
            {isHi ? 'पूर्ण किए गए क्विज़' : 'Quizzes Mastered'}
          </span>
          <span className="text-xl font-black text-slate-200">
            {user.totalQuizzes}
          </span>
        </div>
      </div>

      {/* Category Mastery Progress */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
        <h3 className="text-base font-bold font-serif text-white flex items-center gap-2">
          <Target className="w-4 h-4 text-amber-400" />
          <span>{isHi ? 'विषयवार प्रवीणता' : 'Category Mastery'}</span>
        </h3>

        {masteryEntries.length === 0 ? (
          <p className="text-xs text-slate-400">
            {isHi 
              ? 'अपनी प्रवीणता देखने के लिए विभिन्न विषयों में क्विज़ खेलें!'
              : 'Complete quizzes in different knowledge realms to unlock your mastery breakdown!'}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {masteryEntries.map(([cat, score]) => {
              const catName = isHi && CATEGORIES_HI[cat] ? CATEGORIES_HI[cat].name : cat.replace(/-/g, ' ');

              return (
                <div key={cat} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300 capitalize">
                      {catName}
                    </span>
                    <span className="font-bold text-amber-400">{score}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Recent Activity Log */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
        <h3 className="text-base font-bold font-serif text-white flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-400" />
          <span>{isHi ? 'हाल के क्विज़ प्रयास' : 'Recent Quiz Trials'}</span>
        </h3>

        {loading ? (
          <p className="text-xs text-slate-400">
            {isHi ? 'प्रयास इतिहास लोड हो रहा है...' : 'Loading attempt history...'}
          </p>
        ) : attempts.length === 0 ? (
          <p className="text-xs text-slate-400">
            {isHi ? 'अभी तक कोई प्रयास दर्ज नहीं हुआ। आज ही अपना पहला क्विज़ शुरू करें!' : 'No attempts logged yet. Start your first quiz today!'}
          </p>
        ) : (
          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {attempts.map((att) => {
              const catName = isHi && CATEGORIES_HI[att.category] ? CATEGORIES_HI[att.category].name : att.category.replace(/-/g, ' ');

              return (
                <div
                  key={att.id}
                  className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-white capitalize">
                        {catName}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {new Date(att.completedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      {isHi
                        ? `${att.totalQuestions} में से ${att.correctCount} प्रश्न सही (${att.timeTakenSeconds} सेकंड में)`
                        : `${att.correctCount} / ${att.totalQuestions} questions correct in ${att.timeTakenSeconds}s`}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="font-black text-amber-300 block text-sm">
                      {att.score}%
                    </span>
                    <span className="text-yellow-400 font-bold text-[10px]">
                      +{att.pointsEarned} XP
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
