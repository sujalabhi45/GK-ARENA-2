import React from 'react';
import { Crown, Flame, Coins, Trophy, User as UserIcon, LogOut, Sparkles, BookOpen, Shield, Award, Users, Languages } from 'lucide-react';
import { User, AgeGroup, Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface NavbarProps {
  user: User | null;
  selectedAgeGroup: AgeGroup;
  onSelectAgeGroup: (ag: AgeGroup) => void;
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenAuth: () => void;
  onLogout: () => void;
  onStartDaily: () => void;
  language: Language;
  onToggleLanguage: (lang?: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  selectedAgeGroup,
  onSelectAgeGroup,
  currentTab,
  onSelectTab,
  onOpenAuth,
  onLogout,
  onStartDaily,
  language,
  onToggleLanguage
}) => {
  const t = TRANSLATIONS[language];

  const ageGroupLabels: { id: AgeGroup; label: string; sub: string }[] = [
    { id: 'all', label: t.ageAll, sub: language === 'hi' ? 'समग्र' : 'Comprehensive' },
    { id: '6-9', label: t.ageKids, sub: language === 'hi' ? '६-९ वर्ष' : 'Age 6-9' },
    { id: '10-12', label: t.ageJunior, sub: language === 'hi' ? '१०-१२ वर्ष' : 'Age 10-12' },
    { id: '13-17', label: t.ageTeens, sub: language === 'hi' ? '१३-१७ वर्ष' : 'Age 13-17' },
    { id: '18+', label: t.ageAdults, sub: language === 'hi' ? '१८+ वर्ष' : 'Age 18+' }
  ];

  const navTabs = [
    { id: 'play', label: t.tabPlay, icon: Trophy },
    { id: 'kings-queens', label: t.tabKingsQueens, icon: Crown },
    { id: 'epics', label: t.tabEpics, icon: Shield },
    { id: 'leaderboard', label: t.tabLeaderboard, icon: Award },
    { id: 'badges', label: t.tabTrophies, icon: Sparkles },
    { id: 'custom', label: t.tabCustom, icon: Users }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-amber-500/20 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Brand, Global Stats, User Action */}
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo & Tagline */}
          <div 
            id="brand-logo-btn"
            onClick={() => onSelectTab('play')}
            className="flex items-center gap-3 cursor-pointer group select-none flex-shrink-0"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 p-0.5 shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Crown className="w-6 h-6 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200">
                  {t.brandTitle}
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {language === 'hi' ? 'भारत व विश्व' : 'Bharat & Global'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block font-medium">
                {t.brandTagline}
              </p>
            </div>
          </div>

          {/* Age Group Switcher Pills */}
          <div className="hidden lg:flex items-center bg-slate-950/80 p-1 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 px-2 font-medium flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" /> {t.targetAge}
            </span>
            {ageGroupLabels.map(ag => (
              <button
                key={ag.id}
                id={`nav-age-${ag.id}`}
                onClick={() => onSelectAgeGroup(ag.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                  selectedAgeGroup === ag.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md shadow-amber-500/20 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {ag.label}
              </button>
            ))}
          </div>

          {/* User Stats & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dedicated Language Selector Segmented Control */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-amber-500/40 shadow-sm" title={language === 'en' ? 'Select language (भाषा चुनें)' : 'भाषा चुनें (Select language)'}>
              <div className="flex items-center gap-1 px-1.5 text-amber-400">
                <Languages className="w-3.5 h-3.5" />
              </div>
              <button
                id="nav-lang-btn-en"
                type="button"
                onClick={() => onToggleLanguage('en')}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                id="nav-lang-btn-hi"
                type="button"
                onClick={() => onToggleLanguage('hi')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  language === 'hi'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                हिन्दी
              </button>
            </div>

            {/* Daily Challenge Quick Button */}
            <button
              id="nav-daily-challenge-btn"
              onClick={onStartDaily}
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-bold shadow-md shadow-orange-600/30 transition-all hover:scale-102 cursor-pointer"
            >
              <Flame className="w-4 h-4 text-yellow-300 fill-yellow-300 animate-bounce" />
              <span>{t.dailyChallenge}</span>
            </button>

            {/* Streak & Points & Coins */}
            {user && (
              <div className="flex items-center gap-2 sm:gap-3 bg-slate-950/70 border border-slate-800 px-3 py-1.5 rounded-xl text-xs">
                <div className="flex items-center gap-1 text-orange-400 font-bold" title={t.streak}>
                  <Flame className="w-4 h-4 fill-orange-500" />
                  <span>{user.currentStreak || 1}d</span>
                </div>
                <div className="h-4 w-px bg-slate-800" />
                <div className="flex items-center gap-1 text-amber-300 font-bold" title={t.coins}>
                  <Coins className="w-4 h-4 text-amber-400" />
                  <span>{user.coins || 50}</span>
                </div>
                <div className="hidden md:flex items-center gap-1 text-yellow-400 font-bold" title={t.points}>
                  <Trophy className="w-4 h-4" />
                  <span>{user.totalPoints.toLocaleString()}</span>
                </div>
              </div>
            )}

            {/* User Profile / Auth Button */}
            {user ? (
              <div className="flex items-center gap-2">
                <button
                  id="nav-profile-btn"
                  onClick={() => onSelectTab('profile')}
                  className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
                >
                  <img
                    src={user.avatar || user.avatarUrl}
                    alt={user.displayName || user.username}
                    className="w-7 h-7 rounded-full object-cover ring-2 ring-amber-500/50"
                  />
                  <div className="text-left hidden sm:block">
                    <p className="text-xs font-bold text-slate-200 truncate max-w-[100px]">
                      {user.displayName || user.username}
                    </p>
                    <p className="text-[10px] text-amber-400 font-medium capitalize">
                      {user.role === 'admin' ? (language === 'hi' ? 'एरीना मास्टर' : 'Arena Master') : `${user.ageGroup} Scholar`}
                    </p>
                  </div>
                </button>
                <button
                  id="nav-logout-btn"
                  onClick={onLogout}
                  title={t.logout}
                  className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-slate-800/60 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                id="nav-login-btn"
                onClick={onOpenAuth}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all hover:scale-102 cursor-pointer"
              >
                <UserIcon className="w-4 h-4" />
                <span>{t.joinArena}</span>
              </button>
            )}
          </div>
        </div>

        {/* Secondary Tier: Navigation Tabs & Mobile Age Selector */}
        <div className="flex items-center justify-between overflow-x-auto py-2.5 border-t border-slate-800/80 scrollbar-none gap-2">
          {/* Main Tabs */}
          <nav className="flex items-center gap-1.5 sm:gap-2">
            {navTabs.map(tab => {
              const Icon = tab.icon;
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id}`}
                  onClick={() => onSelectTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Age Group Selector */}
          <div className="flex lg:hidden items-center gap-1 flex-shrink-0">
            <select
              id="mobile-age-selector"
              value={selectedAgeGroup}
              onChange={(e) => onSelectAgeGroup(e.target.value as AgeGroup)}
              className="bg-slate-950 border border-slate-800 text-xs text-amber-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-500 font-semibold"
            >
              {ageGroupLabels.map(ag => (
                <option key={ag.id} value={ag.id}>
                  {ag.label} ({ag.sub})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

