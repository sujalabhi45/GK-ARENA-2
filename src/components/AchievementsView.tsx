import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, Award, Lock, CheckCircle2, Shield, Crown, Zap, Flame, Rocket, Atom } from 'lucide-react';
import { Achievement, User, Language } from '../types';
import { ACHIEVEMENTS_HI, CATEGORIES_HI } from '../data/hindiData';

interface AchievementsViewProps {
  user: User | null;
  language?: Language;
}

const ICON_MAP: Record<string, any> = {
  Flag: Trophy,
  Zap: Zap,
  Award: Award,
  Crown: Crown,
  Sparkles: Sparkles,
  Shield: Shield,
  Scroll: Award,
  Atom: Atom,
  Rocket: Rocket,
  Flame: Flame,
  Trophy: Trophy,
  Medal: Award
};

export const AchievementsView: React.FC<AchievementsViewProps> = ({ 
  user,
  language = 'en'
}) => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const isHi = language === 'hi';

  useEffect(() => {
    fetch('/api/achievements')
      .then(res => res.json())
      .then(data => {
        const list = Array.isArray(data) ? data : (data?.achievements || []);
        setAchievements(list);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load achievements:', err);
        setLoading(false);
      });
  }, []);

  const unlockedIds = user?.badges || [];
  const unlockedCount = achievements.filter(a => unlockedIds.includes(a.id)).length;
  const progressPercent = achievements.length > 0 ? Math.round((unlockedCount / achievements.length) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* Hero Overview */}
      <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-orange-950/60 p-6 sm:p-8 rounded-3xl border border-amber-500/25 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{isHi ? 'ट्रॉफी कक्ष एवं विशिष्ट पदक' : 'Trophy Room & Badges'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-white tracking-tight">
            {isHi ? 'विद्वत्ता सम्मान एवं पदक' : 'Scholarly Honors'}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
            {isHi
              ? 'क्विज़ जीतकर, दैनिक स्ट्रीक बनाकर, विषय में महारत हासिल कर और गति से उत्तर देकर विशिष्ट पदक अर्जित करें।'
              : 'Earn badges by conquering quizzes, hitting streak milestones, demonstrating category mastery, and proving your speed.'}
          </p>
        </div>

        {/* Progress Card */}
        <div className="bg-slate-950/80 border border-slate-800 p-4 sm:p-5 rounded-2xl min-w-[240px]">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-slate-400 font-medium">{isHi ? 'प्राप्त पदक' : 'Trophies Collected'}</span>
            <span className="font-extrabold text-amber-400">
              {unlockedCount} / {achievements.length}
            </span>
          </div>
          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-400 text-right font-medium">
            {progressPercent}% {isHi ? 'पूर्ण' : 'Complete'}
          </p>
        </div>
      </div>

      {loading ? (
        <div className="py-20 text-center text-slate-400 text-sm">
          {isHi ? 'उपलब्धियां लोड हो रही हैं...' : 'Loading achievements...'}
        </div>
      ) : (
        /* Badges Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {achievements.map((ach) => {
            const isUnlocked = unlockedIds.includes(ach.id);
            const IconComp = ICON_MAP[ach.icon] || Trophy;
            const hiAch = isHi ? ACHIEVEMENTS_HI[ach.id] : null;
            const title = hiAch?.title || ach.title;
            const description = hiAch?.description || ach.description;

            return (
              <div
                key={ach.id}
                id={`badge-${ach.id}`}
                className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isUnlocked
                    ? 'bg-slate-900 border-amber-500/40 shadow-lg shadow-amber-500/5'
                    : 'bg-slate-950/60 border-slate-850 opacity-70'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                      isUnlocked
                        ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-500/50 text-amber-400'
                        : 'bg-slate-900 border-slate-800 text-slate-600'
                    }`}>
                      {isUnlocked ? (
                        <IconComp className="w-6 h-6 animate-pulse" />
                      ) : (
                        <Lock className="w-5 h-5" />
                      )}
                    </div>

                    <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${
                      isUnlocked
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {isUnlocked ? (isHi ? 'प्राप्त' : 'Unlocked') : (isHi ? 'बंद' : 'Locked')}
                    </span>
                  </div>

                  <h4 className={`text-base font-bold font-serif mb-1 ${
                    isUnlocked ? 'text-white' : 'text-slate-400'
                  }`}>
                    {title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="capitalize">
                    {isHi && CATEGORIES_HI[ach.category]?.name ? CATEGORIES_HI[ach.category].name : ach.category}
                  </span>
                  {isUnlocked && (
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {isHi ? 'हासिल किया' : 'Achieved'}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
