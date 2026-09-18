import React, { useState } from 'react';
import { Scroll, Shield, BookOpen, Sparkles, Play, Award, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { RAMAYAN_KANDAS_HI, MAHABHARAT_HIGHLIGHTS_HI, EPIC_CHARACTERS_HI } from '../data/hindiData';

interface EpicsPavilionProps {
  onStartEpicQuiz: (category: 'ramayan' | 'mahabharat', subcategory?: string) => void;
  language?: Language;
}

export const EpicsPavilion: React.FC<EpicsPavilionProps> = ({ 
  onStartEpicQuiz,
  language = 'en'
}) => {
  const [activeEpic, setActiveEpic] = useState<'ramayan' | 'mahabharat'>('ramayan');
  const isHi = language === 'hi';

  const ramayanChaptersEn = [
    { name: 'Bala Kanda', desc: 'Birth of Rama and his brothers, sage Vishwamitra’s yajna, breaking the Shiva Dhanush, and divine marriage with Sita.' },
    { name: 'Ayodhya Kanda', desc: 'Preparations for Rama’s coronation, Manthara’s instigation, Kaikeyi’s two boons, and exile to the forest.' },
    { name: 'Aranya Kanda', desc: 'Life in Dandakaranya, meeting sage Agastya, golden deer Maricha, and the abduction of Sita by Ravana.' },
    { name: 'Kishkindha Kanda', desc: 'Meeting Shabari, alliance with Sugriva and Hanuman, the slaying of Vali, and search party heading South.' },
    { name: 'Sundara Kanda', desc: 'Hanuman’s leap across the ocean, locating Sita in Ashoka Vatika, burning of Lanka, and reassuring Rama.' },
    { name: 'Yuddha Kanda', desc: 'Building the Ram Setu bridge, monumental war, Lakshman revived with Sanjeevani, slaying of Ravana, and return to Ayodhya.' }
  ];

  const mahabharatHighlightsEn = [
    { name: 'The Pandavas & Kauravas', desc: 'Hastinapur lineage, the tutoring under Dronacharya, Ekalavya’s devotion, and the Lac Palace conspiracy.' },
    { name: 'The Sabha & The Dice Game', desc: 'Establishment of Indraprastha, Rajasuya Yajna, the fateful game of chaupar, and the twelve-year forest exile.' },
    { name: 'The Shrimad Bhagavad Gita', desc: 'On the sacred field of Kurukshetra, Lord Krishna reveals the timeless path of Nishkama Karma, Dharma, and the Vishwaroopa.' },
    { name: 'The 18 Days of Kurukshetra War', desc: 'Supreme valour of Bhishma, Abhimanyu’s Chakravyuha bravery, Karna’s unmatched generosity, and the victory of Dharma.' },
    { name: 'Teachings of Shanti Parva', desc: 'Bhishma pitamaha lying on the bed of arrows imparts monumental wisdom on Rajadharma, statecraft, and spiritual duty.' }
  ];

  const epicCharactersEn = {
    ramayan: [
      { name: 'Lord Rama', title: 'Maryada Purushottama', role: 'Seventh avatar of Vishnu, embodiment of righteousness, truth, and duty.' },
      { name: 'Sita Mata', title: 'Daughter of Janaka & Bhumi', role: 'Incarnation of Lakshmi, paragon of patience, loyalty, courage, and moral dignity.' },
      { name: 'Hanuman Ji', title: 'Vayuputra & Sankat Mochan', role: 'Supreme devotee of Rama, endowed with ashta-siddhis, immortal chiranjeevi.' },
      { name: 'Lakshmana', title: 'Devoted Brother', role: 'Accompanied Rama for 14 years in the forest without sleeping, slayer of Indrajit.' },
      { name: 'Bharata', title: 'Righteous Ruler', role: 'Placed Rama’s sacred sandals on the throne of Ayodhya, ruling with saintly detachment.' },
      { name: 'Jatayu', title: 'The Valiant Bird King', role: 'Sacrificed his life fighting Ravana in the sky to protect Sita Mata.' }
    ],
    mahabharat: [
      { name: 'Lord Krishna', title: 'Yogeshvara & Charioteer', role: 'Eighth avatar of Vishnu, guide of the Pandavas, speaker of the Bhagavad Gita.' },
      { name: 'Arjuna', title: 'Sabyasachi & Partha', role: 'Supreme archer with the Gandiva bow, son of Indra, recipient of the Gita teachings.' },
      { name: 'Karna', title: 'Danaveera & Radheya', role: 'Son of Surya, renowned for incomparable charity, unmatched loyalty, and bravery.' },
      { name: 'Bhishma', title: 'Pitamaha of the Kurus', role: 'Possessor of the boon of iccha-mrityu (death at will), bound by his oath of celibacy.' },
      { name: 'Yudhishthira', title: 'Dharmaraja', role: 'Eldest Pandava, unyielding follower of truth and moral conscience.' },
      { name: 'Draupadi', title: 'Yajnaseni', role: 'Born from sacrificial fire, revered empress who stood as the catalyst for justice.' }
    ]
  };

  const currentChapters = isHi
    ? (activeEpic === 'ramayan' ? RAMAYAN_KANDAS_HI : MAHABHARAT_HIGHLIGHTS_HI)
    : (activeEpic === 'ramayan' ? ramayanChaptersEn : mahabharatHighlightsEn);

  const currentCharacters = isHi
    ? EPIC_CHARACTERS_HI[activeEpic]
    : epicCharactersEn[activeEpic];

  return (
    <div className="space-y-8">
      {/* Hero Banner with Epic Switcher */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-950 via-slate-900 to-rose-950 border-2 border-amber-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{isHi ? 'इतिहास एवं अमर महाकाव्य' : 'Itihasa & Timeless Epics'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-serif text-white tracking-tight">
            {isHi ? 'महाकाव्य मंडप (रामायण एवं महाभारत)' : 'The Epics Pavilion'}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
            {isHi
              ? 'रामायण और महाभारत के गहन उपदेशों, आदर्श चरित्रों, नैतिक धर्म-संकटों और युगांतरकारी आख्यानों की दिव्य यात्रा।'
              : 'Journey through the profound teachings, monumental narratives, characters, and ethical dilemmas of the Ramayan and the Mahabharat.'}
          </p>

          {/* Epic Switcher Buttons */}
          <div className="flex items-center gap-3 mt-6">
            <button
              id="switch-epic-ramayan"
              onClick={() => setActiveEpic('ramayan')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeEpic === 'ramayan'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-102'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white'
              }`}
            >
              <Scroll className="w-4 h-4" />
              <span>{isHi ? 'रामायण (९०+ प्रश्न)' : 'Ramayan (90+ Questions)'}</span>
            </button>

            <button
              id="switch-epic-mahabharat"
              onClick={() => setActiveEpic('mahabharat')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeEpic === 'mahabharat'
                  ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-lg shadow-rose-500/25 scale-102'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>{isHi ? 'महाभारत (९०+ प्रश्न)' : 'Mahabharat (90+ Questions)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Chapters / Sections */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-serif text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              <span>
                {isHi
                  ? (activeEpic === 'ramayan' ? 'रामायण के सात पवित्र कांड' : 'महाभारत के प्रमुख पर्व एवं प्रसंग')
                  : (activeEpic === 'ramayan' ? 'The Seven Kandas of Ramayan' : 'Parvas & Key Highlights of Mahabharat')}
              </span>
            </h3>

            <button
              id={`quick-play-${activeEpic}`}
              onClick={() => onStartEpicQuiz(activeEpic)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-black flex items-center gap-1.5 shadow-md shadow-amber-500/20 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-slate-950" />
              <span>
                {isHi
                  ? `सम्पूर्ण ${activeEpic === 'ramayan' ? 'रामायण' : 'महाभारत'} क्विज़`
                  : `Take Full ${activeEpic === 'ramayan' ? 'Ramayan' : 'Mahabharat'} Quiz`}
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentChapters.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 shadow-md transition-all hover:bg-slate-850 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                      {isHi ? `भाग ${idx + 1}` : `Part ${idx + 1}`}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white font-serif mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <button
                  id={`quiz-part-${idx}`}
                  onClick={() => onStartEpicQuiz(activeEpic, item.name)}
                  className="w-full py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <span>{isHi ? 'अभ्यास प्रश्न खेलें' : 'Practice Questions'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Prominent Personalities */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold font-serif text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{isHi ? 'महाकाव्य के अमर पात्र' : 'Epic Personalities'}</span>
            </h3>
          </div>

          <div className="space-y-3">
            {currentCharacters.map((char, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-amber-300 font-serif">
                    {char.name}
                  </h4>
                  <span className="text-[10px] font-semibold text-orange-400">
                    {char.title}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {char.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
