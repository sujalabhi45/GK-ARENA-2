import React, { useState } from 'react';
import { Crown, Sparkles, Shield, ChevronRight, BookOpen, Sword, MapPin, Calendar, Play, Bot } from 'lucide-react';
import { HistoricalFigure, Language } from '../types';
import { HISTORICAL_FIGURES_HI } from '../data/hindiData';
import { TRANSLATIONS } from '../translations';

interface KingsAndQueensGalleryProps {
  figures: HistoricalFigure[];
  onStartRulerQuiz: (rulerName: string) => void;
  language?: Language;
}

export const KingsAndQueensGallery: React.FC<KingsAndQueensGalleryProps> = ({
  figures,
  onStartRulerQuiz,
  language = 'en'
}) => {
  const safeFigures = Array.isArray(figures) ? figures : [];
  const [selectedFigure, setSelectedFigure] = useState<HistoricalFigure | null>(null);
  const [selectedDynasty, setSelectedDynasty] = useState<string>('all');
  const [aiStory, setAiStory] = useState<string | null>(null);
  const [loadingAiStory, setLoadingAiStory] = useState<boolean>(false);
  const isHi = language === 'hi';

  // Helper to get localized figure details
  const getDisplayFigure = (fig: HistoricalFigure) => {
    if (!isHi) return fig;
    const hi = HISTORICAL_FIGURES_HI[fig.id];
    if (!hi) return fig;
    return {
      ...fig,
      name: hi.name,
      title: hi.title,
      dynasty: hi.dynasty,
      period: hi.period,
      region: hi.region,
      capital: hi.capital,
      shortBio: hi.shortBio,
      keyAchievements: hi.keyAchievements
    };
  };

  // Extract unique dynasties
  const rawDynasties = ['all', ...Array.from(new Set(safeFigures.map(f => f.dynasty)))];

  const filteredFigures = selectedDynasty === 'all'
    ? safeFigures
    : safeFigures.filter(f => f.dynasty === selectedDynasty);

  const fetchAiStory = async (figure: HistoricalFigure) => {
    setLoadingAiStory(true);
    setAiStory(null);
    const displayFig = getDisplayFigure(figure);
    try {
      const res = await fetch('/api/ai/storyteller', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: `${displayFig.name} (${displayFig.title})`,
          context: `Reign of ${displayFig.period}, Dynasty ${displayFig.dynasty}, Capital ${displayFig.capital}. Key achievements: ${displayFig.keyAchievements.join(', ')}`,
          ageGroup: 'Students and History enthusiasts',
          language
        })
      });
      const data = await res.json();
      setAiStory(data.story);
    } catch (err) {
      setAiStory(displayFig.shortBio);
    } finally {
      setLoadingAiStory(false);
    }
  };

  const selectedDisplayFigure = selectedFigure ? getDisplayFigure(selectedFigure) : null;

  return (
    <div className="space-y-8">
      {/* Title & Filter Bar */}
      <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-orange-950/60 p-6 sm:p-8 rounded-3xl border border-amber-500/25 shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 mb-2">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>{isHi ? 'अमर गाथाएं एवं शौर्य कक्ष' : 'Hall of Immortals'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-serif text-white tracking-tight">
            {isHi ? 'महान भारतीय राजा और रानियां' : 'Great Indian Kings & Queens'}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
            {isHi 
              ? 'मौर्य साम्राज्य, चोल नौसेना, छत्रपति शिवाजी के हिंदवी स्वराज्य और वीरांगना रानियों के पराक्रम, रणनीति और धर्म-रक्षा की अमर गाथाएं।'
              : 'From the Mauryan zenith and Chola maritime expeditions to the Maratha Hindavi Swarajya and brave warrior queens who resisted foreign invaders—explore their triumphs, strategy, and virtue.'}
          </p>
        </div>

        {/* Dynasty Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pt-5 scrollbar-none">
          <span className="text-xs text-slate-400 font-semibold whitespace-nowrap">
            {isHi ? 'राजवंश चुनें:' : 'Filter Dynasty:'}
          </span>
          {rawDynasties.map((dyn) => (
            <button
              key={dyn}
              id={`dynasty-filter-${dyn}`}
              onClick={() => setSelectedDynasty(dyn)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedDynasty === dyn
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300'
              }`}
            >
              {dyn === 'all' ? (isHi ? 'सभी राजवंश' : 'All Dynasties') : dyn}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Historical Figures */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredFigures.map((rawFig) => {
          const fig = getDisplayFigure(rawFig);

          return (
            <div
              key={rawFig.id}
              id={`ruler-card-${rawFig.id}`}
              className="group relative bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Dynasty & Era Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/25">
                    {fig.dynasty}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {fig.period}
                  </span>
                </div>

                {/* Name & Title */}
                <h3 className="text-lg font-black font-serif text-white group-hover:text-amber-300 transition-colors mt-1">
                  {fig.name}
                </h3>
                <p className="text-xs font-semibold text-orange-400 mb-2">
                  {fig.title}
                </p>

                <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400/80" />
                    {fig.region}
                  </span>
                  <span>•</span>
                  <span className="truncate">{isHi ? 'राजधानी:' : 'Capital:'} {fig.capital}</span>
                </div>

                {/* Short Bio */}
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {fig.shortBio}
                </p>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
                <button
                  id={`read-ruler-${rawFig.id}`}
                  onClick={() => {
                    setSelectedFigure(rawFig);
                    fetchAiStory(rawFig);
                  }}
                  className="flex-1 py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isHi ? 'गाथा और शौर्य' : 'Story & Feats'}</span>
                </button>
                <button
                  id={`quiz-ruler-${rawFig.id}`}
                  onClick={() => onStartRulerQuiz(rawFig.name)}
                  className="py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-black flex items-center gap-1 shadow-md shadow-amber-500/20 transition-transform hover:scale-103 cursor-pointer"
                  title={`${isHi ? 'क्विज़ खेलें:' : 'Challenge Quiz on'} ${fig.name}`}
                >
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>{isHi ? 'क्विज़' : 'Quiz'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal / Detail Drawer for Selected Figure */}
      {selectedFigure && selectedDisplayFigure && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-slate-900 border-2 border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 p-6 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-200 uppercase tracking-wider mb-1">
                  <Crown className="w-4 h-4" />
                  <span>{selectedDisplayFigure.dynasty} • {selectedDisplayFigure.period}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black font-serif text-white">
                  {selectedDisplayFigure.name}
                </h2>
                <p className="text-sm font-semibold text-amber-100 mt-0.5">
                  {selectedDisplayFigure.title}
                </p>
              </div>

              <button
                id="close-figure-modal-btn"
                onClick={() => setSelectedFigure(null)}
                className="p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">{isHi ? 'शासित क्षेत्र:' : 'Region Governed:'}</span>
                  <span className="font-bold text-white">{selectedDisplayFigure.region}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">{isHi ? 'शाही राजधानी:' : 'Imperial Capital:'}</span>
                  <span className="font-bold text-amber-300">{selectedDisplayFigure.capital}</span>
                </div>
              </div>

              {/* Key Achievements List */}
              <div>
                <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sword className="w-4 h-4" />
                  <span>{isHi ? 'प्रमुख उपलब्धियां एवं ऐतिहासिक मील के पत्थर' : 'Key Achievements & Milestones'}</span>
                </h4>
                <ul className="space-y-2.5">
                  {selectedDisplayFigure.keyAchievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Sage Chronicle / Deep Story */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/40 to-slate-950 border border-amber-500/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                    <Bot className="w-4 h-4 text-amber-400" />
                    <span>{isHi ? 'एरीना इतिहासकार गाथा' : 'Arena Historian Chronicle'}</span>
                  </div>
                  {loadingAiStory && (
                    <span className="text-[10px] text-slate-400 animate-pulse">
                      {isHi ? 'प्राचीन इतिहास का अध्ययन हो रहा है...' : 'Consulting ancient archives...'}
                    </span>
                  )}
                </div>

                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
                  {loadingAiStory ? (
                    <div className="h-16 flex items-center justify-center text-xs text-slate-400">
                      {isHi ? 'ऐतिहासिक गाथा प्रस्तुत की जा रही है...' : 'Generating historical chronicle...'}
                    </div>
                  ) : (
                    aiStory?.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    )) || <p>{selectedDisplayFigure.shortBio}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                id="close-drawer-btn"
                onClick={() => setSelectedFigure(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
              >
                {isHi ? 'बंद करें' : 'Close'}
              </button>
              <button
                id="start-modal-ruler-quiz-btn"
                onClick={() => {
                  const rulerName = selectedFigure.name;
                  setSelectedFigure(null);
                  onStartRulerQuiz(rulerName);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>{isHi ? `${selectedDisplayFigure.name} पर क्विज़ खेलें` : `Play Quiz on ${selectedFigure.name}`}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
