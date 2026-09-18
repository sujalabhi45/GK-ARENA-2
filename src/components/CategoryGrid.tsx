import React from 'react';
import { 
  Crown, Scroll, Shield, Landmark, Sparkles, Globe, 
  FlaskConical, Rocket, MapPin, Trophy, Calculator, 
  ChevronRight, Play, CheckCircle2, Compass
} from 'lucide-react';
import { CategoryInfo, AgeGroup, Language } from '../types';
import { CATEGORIES_HI } from '../data/hindiData';
import { TRANSLATIONS } from '../translations';

interface CategoryGridProps {
  categories: CategoryInfo[];
  selectedAgeGroup: AgeGroup;
  onStartQuiz: (category: string, count?: number) => void;
  onExploreCategory: (category: string) => void;
  language?: Language;
}

const ICON_MAP: Record<string, any> = {
  Crown: Crown,
  Scroll: Scroll,
  Shield: Shield,
  Landmark: Landmark,
  Flame: Sparkles,
  BookOpen: Globe,
  Atom: FlaskConical,
  Rocket: Rocket,
  Globe2: MapPin,
  Trophy: Trophy,
  Compass: Calculator
};

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  selectedAgeGroup,
  onStartQuiz,
  onExploreCategory,
  language = 'en'
}) => {
  const safeCategories = Array.isArray(categories) ? categories : [];
  const t = TRANSLATIONS[language];
  const isHi = language === 'hi';

  const ageGroupDisplay = isHi
    ? (selectedAgeGroup === 'all' ? 'सभी आयु वर्ग' : `${selectedAgeGroup} वर्ष`)
    : (selectedAgeGroup === 'all' ? 'All Age Groups' : `Age ${selectedAgeGroup}`);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-black font-serif text-white tracking-tight flex items-center gap-2">
            <span>{isHi ? 'ज्ञान के प्रमुख क्षेत्र' : 'Knowledge Arenas'}</span>
            <span className="text-xs font-sans font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {safeCategories.length} {isHi ? 'विषय' : 'Realms'}
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            {isHi 
              ? `अपनी मेधा की परीक्षा लेने और पदक जीतने के लिए विषय चुनें। लक्षित आयु:` 
              : `Select a discipline to begin your quest. Tailored for`}{' '}
            <strong className="text-amber-300 capitalize">{ageGroupDisplay}</strong>.
          </p>
        </div>

        <button
          id="btn-quick-play-mixed"
          onClick={() => onStartQuiz('all', 10)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:scale-102 transition-transform cursor-pointer"
        >
          <Play className="w-4 h-4 fill-slate-950" />
          <span>{isHi ? 'मिश्रित महा-मुकाबला (१० प्रश्न)' : 'Quick Mixed Arena (10 Qs)'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {safeCategories.map((cat) => {
          const IconComponent = ICON_MAP[cat.icon] || Compass;
          const hiData = CATEGORIES_HI[cat.id];
          const name = (isHi && hiData?.name) || cat.name;
          const description = (isHi && hiData?.description) || cat.description;
          const subcategories = (isHi && hiData?.subcategories) || cat.subcategories;

          return (
            <div
              key={cat.id}
              id={`cat-card-${cat.id}`}
              className="group relative bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-amber-500/5 group-hover:bg-amber-500/10 rounded-full blur-2xl transition-all pointer-events-none" />

              <div>
                {/* Header Row: Icon, Name & Question Count */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700/80 group-hover:border-amber-500/50 p-2.5 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors font-serif line-clamp-1">
                        {name}
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {cat.totalQuestions}+ {isHi ? 'प्रश्न संग्रह' : 'Questions Bank'}
                      </span>
                    </div>
                  </div>

                  {cat.featured && (
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 flex-shrink-0">
                      {isHi ? 'लोकप्रिय' : 'Popular'}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {description}
                </p>

                {/* Subcategories tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {subcategories.slice(0, 3).map((sub, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-950/70 border border-slate-800 text-slate-300 group-hover:border-slate-700"
                    >
                      {sub}
                    </span>
                  ))}
                  {subcategories.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[10px] text-amber-400/80 font-medium">
                      +{subcategories.length - 3} {isHi ? 'और' : 'more'}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Controls */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2">
                <button
                  id={`play-cat-btn-${cat.id}`}
                  onClick={() => onStartQuiz(cat.id, 10)}
                  className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 transition-all hover:scale-101 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>{isHi ? 'क्विज़ खेलें' : 'Start Quiz'}</span>
                </button>

                {cat.id === 'great-kings-queens' ? (
                  <button
                    id="explore-kings-btn"
                    onClick={() => onExploreCategory('kings-queens')}
                    className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-300 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    title={isHi ? 'राजा और रानी कक्ष देखें' : 'View Kings & Queens Hall'}
                  >
                    <span>{isHi ? 'अमर गाथाएं' : 'Hall of Fame'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (cat.id === 'ramayan' || cat.id === 'mahabharat') ? (
                  <button
                    id={`explore-epics-btn-${cat.id}`}
                    onClick={() => onExploreCategory('epics')}
                    className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-300 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    title={isHi ? 'महाकाव्य दर्शन' : 'Explore Epics'}
                  >
                    <span>{isHi ? 'महाकाव्य दर्शन' : 'Epic View'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    id={`custom-len-btn-${cat.id}`}
                    onClick={() => onStartQuiz(cat.id, 15)}
                    className="py-2 px-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                    title={isHi ? '१५ प्रश्नों की चुनौती' : '15 Questions Challenge'}
                  >
                    15 {isHi ? 'प्रश्न' : 'Qs'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
