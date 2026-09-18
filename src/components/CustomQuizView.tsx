import React, { useState, useEffect } from 'react';
import { Users, KeyRound, Plus, Play, Sparkles, Trophy, Clock, CheckCircle2, Copy } from 'lucide-react';
import { CustomQuiz, User, CategoryInfo, Language } from '../types';
import { CATEGORIES_HI } from '../data/hindiData';
import { TRANSLATIONS } from '../translations';

interface CustomQuizViewProps {
  user: User | null;
  categories: CategoryInfo[];
  onPlayCustomQuiz: (quiz: CustomQuiz) => void;
  onRequireAuth: () => void;
  language?: Language;
}

export const CustomQuizView: React.FC<CustomQuizViewProps> = ({
  user,
  categories,
  onPlayCustomQuiz,
  onRequireAuth,
  language = 'en'
}) => {
  const [quizzes, setQuizzes] = useState<CustomQuiz[]>([]);
  const [pinCode, setPinCode] = useState('');
  const [pinError, setPinError] = useState('');
  const [loadingPin, setLoadingPin] = useState(false);
  const [copiedPin, setCopiedPin] = useState<string | null>(null);
  const isHi = language === 'hi';
  const t = TRANSLATIONS[language];

  // Creation State
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(categories[0]?.id || 'great-kings-queens');
  const [questionCount, setQuestionCount] = useState(10);
  const [creating, setCreating] = useState(false);

  const fetchQuizzes = async () => {
    try {
      const res = await fetch('/api/custom-quizzes');
      const data = await res.json();
      const list = Array.isArray(data) ? data : (data?.customQuizzes || []);
      setQuizzes(list);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const handleJoinByPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinCode.trim()) return;
    setPinError('');
    setLoadingPin(true);

    try {
      const res = await fetch(`/api/custom-quizzes/pin/${pinCode.trim()}`);
      if (!res.ok) {
        throw new Error(isHi ? 'इस पिन से कोई क्विज़ रूम नहीं मिला। कृपया कोड जांचें।' : 'No quiz room found with this PIN. Check the code and try again.');
      }
      const quiz = await res.json();
      onPlayCustomQuiz(quiz);
    } catch (err: any) {
      setPinError(err.message || (isHi ? 'रूम में जुड़ने में त्रुटि हुई' : 'Error joining room'));
    } finally {
      setLoadingPin(false);
    }
  };

  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      onRequireAuth();
      return;
    }
    setCreating(true);

    try {
      const res = await fetch('/api/custom-quizzes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description: description || (isHi ? 'कस्टम एरीना मुकाबला' : 'Custom Arena Challenge'),
          createdById: user.id,
          createdByDisplayName: user.displayName || user.username,
          category,
          ageGroup: user.ageGroup,
          timeLimitMinutes: 10,
          questionCount
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || (isHi ? 'क्विज़ बनाने में विफल' : 'Failed to create quiz'));

      setShowCreateForm(false);
      setTitle('');
      setDescription('');
      fetchQuizzes();
      // Immediately open room or show code
      onPlayCustomQuiz(data.customQuiz || data);
    } catch (err: any) {
      alert(err.message);
    } finally {
      setCreating(false);
    }
  };

  const copyToClipboard = (pin: string) => {
    navigator.clipboard.writeText(pin);
    setCopiedPin(pin);
    setTimeout(() => setCopiedPin(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-orange-950/60 p-6 sm:p-8 rounded-3xl border border-amber-500/25 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 mb-2">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>{isHi ? 'मल्टीप्लेयर एवं कस्टम रूम' : 'Multiplayer & Custom Rooms'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-white tracking-tight">
            {isHi ? 'एरीना क्विज़ रूम' : 'Arena Quiz Rooms'}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
            {isHi
              ? 'कक्षा के मित्रों, अध्ययन समूहों या परिवार को चुनौती दें। ४ अंकों का रूम पिन दर्ज करें या अपना स्वयं का क्विज़ रूम बनाएं।'
              : 'Challenge classmates, study groups, or family. Enter a 4-digit room PIN or build your own custom arena room.'}
          </p>
        </div>

        <button
          id="btn-open-create-room"
          onClick={() => {
            if (!user) onRequireAuth();
            else setShowCreateForm(true);
          }}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/20 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>{isHi ? 'नया कस्टम रूम बनाएं' : 'Create Custom Room'}</span>
        </button>
      </div>

      {/* Join Room by PIN Bar */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl max-w-xl mx-auto">
        <h3 className="text-base font-bold text-white font-serif mb-1 text-center">
          {isHi ? 'क्या आपके पास रूम पिन है?' : 'Have a Room PIN?'}
        </h3>
        <p className="text-xs text-slate-400 mb-4 text-center">
          {isHi 
            ? 'अपने शिक्षक या मित्र द्वारा दिया गया ४ अंकों का पिन दर्ज करें (जैसे ७४१२)' 
            : 'Enter the 4-digit code provided by your teacher or friend (e.g. 7412)'}
        </p>

        <form onSubmit={handleJoinByPin} className="flex gap-2">
          <div className="relative flex-1">
            <KeyRound className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
            <input
              id="room-pin-input"
              type="text"
              maxLength={6}
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              placeholder="e.g. 7412"
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-10 pr-4 py-2.5 text-center font-mono font-bold tracking-widest text-amber-300 text-sm focus:outline-none focus:border-amber-500"
            />
          </div>
          <button
            type="submit"
            id="join-pin-btn"
            disabled={loadingPin || !pinCode.trim()}
            className="px-6 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm cursor-pointer disabled:opacity-50"
          >
            {loadingPin ? (isHi ? 'प्रवेश हो रहा है...' : 'Entering...') : (isHi ? 'रूम में जुड़ें' : 'Join Room')}
          </button>
        </form>

        {pinError && (
          <p className="mt-3 text-xs text-rose-400 text-center font-medium">
            {pinError}
          </p>
        )}
      </div>

      {/* Public / Community Rooms List */}
      <div>
        <h3 className="text-lg font-bold font-serif text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{isHi ? 'सक्रिय मुकाबला रूम' : 'Active Challenge Rooms'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {quizzes.map((q) => {
            const catName = isHi && CATEGORIES_HI[q.category] ? CATEGORIES_HI[q.category].name : q.category;

            return (
              <div
                key={q.id}
                className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-amber-500/15 text-amber-300 border border-amber-500/25">
                      {catName}
                    </span>
                    <div
                      onClick={() => copyToClipboard(q.pinCode)}
                      className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-amber-400 text-xs font-mono font-bold cursor-pointer hover:border-amber-500/50"
                      title={isHi ? 'पिन कॉपी करने के लिए क्लिक करें' : 'Click to copy PIN'}
                    >
                      <span>{isHi ? 'पिन:' : 'PIN:'} {q.pinCode}</span>
                      <Copy className="w-3 h-3 text-slate-400" />
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white font-serif mb-1">
                    {q.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {q.description}
                  </p>

                  <div className="text-[11px] text-slate-400 mb-4 flex items-center justify-between">
                    <span>{isHi ? 'मेजबान:' : 'Host:'} <strong className="text-slate-300">{q.createdByDisplayName}</strong></span>
                    <span>{q.questionIds?.length || 10} {isHi ? 'प्रश्न' : 'Questions'}</span>
                  </div>
                </div>

                <button
                  id={`play-custom-quiz-${q.id}`}
                  onClick={() => onPlayCustomQuiz(q)}
                  className="w-full py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>{isHi ? 'मुकाबले में प्रवेश करें' : 'Enter Challenge'}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Create Room Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 shadow-2xl text-slate-100">
            <h3 className="text-lg font-bold font-serif text-white mb-1">
              {isHi ? 'नया मुकाबला रूम तैयार करें' : 'Create Challenge Room'}
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              {isHi
                ? 'रूम बनाएं और मित्रों के लिए एक विशिष्ट ४ अंकों का पिन प्राप्त करें।'
                : 'Set up a room and get a unique 4-digit PIN for your friends.'}
            </p>

            <form onSubmit={handleCreateRoom} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {isHi ? 'रूम का नाम' : 'Room Title'}
                </label>
                <input
                  id="create-room-title"
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={isHi ? 'उदा. भारतीय इतिहास महा-मुकाबला' : 'e.g. 7th Grade History Championship'}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {isHi ? 'ज्ञान का विषय' : 'Category Realm'}
                </label>
                <select
                  id="create-room-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-amber-300 focus:outline-none focus:border-amber-500 font-semibold"
                >
                  {categories.map((c) => {
                    const catName = isHi && CATEGORIES_HI[c.id] ? CATEGORIES_HI[c.id].name : c.name;
                    return (
                      <option key={c.id} value={c.id}>
                        {catName}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {isHi ? 'प्रश्नों की संख्या' : 'Question Count'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[5, 10, 15].map(n => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setQuestionCount(n)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        questionCount === n
                          ? 'bg-amber-500 text-slate-950 border-amber-400'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      {n} {isHi ? 'प्रश्न' : 'Questions'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
                >
                  {isHi ? 'रद्द करें' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  id="submit-create-room-btn"
                  disabled={creating}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm cursor-pointer"
                >
                  {creating 
                    ? (isHi ? 'रूम बन रहा है...' : 'Generating Room...') 
                    : (isHi ? 'रूम शुरू करें' : 'Launch Room')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
