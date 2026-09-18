import React from 'react';
import { Flame, Sparkles, Clock, ArrowRight, Trophy, Zap, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface DailyChallengeCardProps {
  streak: number;
  onStartDaily: () => void;
  alreadyPlayedToday?: boolean;
  language?: Language;
}

export const DailyChallengeCard: React.FC<DailyChallengeCardProps> = ({
  streak,
  onStartDaily,
  alreadyPlayedToday = false,
  language = 'en'
}) => {
  const isHi = language === 'hi';
  const today = new Date().toLocaleDateString(isHi ? 'hi-IN' : 'en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-950/80 via-slate-900 to-amber-950/80 border-2 border-amber-500/30 shadow-2xl p-6 sm:p-8">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-10 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left Info Column */}
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-orange-500/20 text-orange-300 border border-orange-500/40">
              <Flame className="w-3.5 h-3.5 fill-orange-400 text-orange-400 animate-pulse" />
              {isHi ? `दैनिक महा-मुकाबला • ${today}` : `Daily Challenge • ${today}`}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5" /> {isHi ? '1.5x बोनस XP और सिक्के' : '1.5x Bonus XP & Coins'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-serif text-white tracking-tight">
            {isHi ? 'आज की ५० प्रश्नों की महा-मुकाबला परीक्षा' : 'Today’s 50-Question Grand Arena Trial'}
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
            {isHi 
              ? 'महान राजाओं, रामायण, महाभारत, भारत सामान्य ज्ञान, विज्ञान, भूगोल और अंतरिक्ष पर आधारित 50 प्रश्नों का विशाल मुकाबला। अपनी दैनिक स्ट्रीक मजबूत करें और महा-विजेता पदक जीतें!'
              : 'Comprehensive 50-question arena challenge across Great Kings, Ramayan, Mahabharat, India GK, Science, Space, and World Facts. Solve to protect your streak and earn the Grand Arena Champion medal!'}
          </p>

          <div className="flex items-center gap-4 mt-4 text-xs font-medium text-slate-400">
            <div className="flex items-center gap-1.5 text-amber-300 font-bold">
              <Flame className="w-4 h-4 fill-amber-400" />
              <span>{isHi ? `वर्तमान स्ट्रीक: ${streak} दिन` : `Current Streak: ${streak} Days`}</span>
            </div>
            <div className="h-3.5 w-px bg-slate-700" />
            <div className="flex items-center gap-1 text-orange-300 font-semibold">
              <Clock className="w-4 h-4 text-orange-400" />
              <span>{isHi ? '५० महा-प्रश्न (~१५ मिनट)' : '50 Grand Questions (~15 mins)'}</span>
            </div>
            <div className="h-3.5 w-px bg-slate-700 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-1 text-yellow-300 font-bold">
              <Trophy className="w-4 h-4" />
              <span>{isHi ? '+1,250 XP महा-बोनस' : '+1,250 XP Grand Bonus'}</span>
            </div>
          </div>
        </div>

        {/* Right Action Button Column */}
        <div className="flex-shrink-0 flex flex-col items-start md:items-end justify-center">
          {alreadyPlayedToday ? (
            <div className="flex flex-col items-start md:items-end gap-2">
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>{isHi ? 'आज का महा-मुकाबला पूर्ण!' : 'Trial Conquered Today!'}</span>
              </div>
              <button
                id="replay-daily-challenge-btn"
                onClick={onStartDaily}
                className="text-xs text-slate-400 hover:text-amber-300 underline underline-offset-2 transition-colors cursor-pointer"
              >
                {isHi ? 'अभ्यास के लिए पुनः खेलें (50 प्रश्न)' : 'Replay for practice (50 questions)'}
              </button>
            </div>
          ) : (
            <button
              id="start-daily-challenge-hero-btn"
              onClick={onStartDaily}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm sm:text-base tracking-wide shadow-xl shadow-orange-500/25 transition-all hover:scale-103 cursor-pointer group"
            >
              <Zap className="w-5 h-5 fill-slate-950 group-hover:animate-bounce" />
              <span>{isHi ? '५० प्रश्नों का महा-मुकाबला शुरू करें' : 'Enter 50-Question Daily Trial'}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

