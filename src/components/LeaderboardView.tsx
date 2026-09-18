import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Flame, Crown, Sparkles, User, Target } from 'lucide-react';
import { LeaderboardEntry, AgeGroup, Language } from '../types';

interface LeaderboardViewProps {
  currentUserId?: string;
  selectedAgeGroup: AgeGroup;
  onSelectAgeGroup: (ag: AgeGroup) => void;
  language?: Language;
}

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({
  currentUserId,
  selectedAgeGroup,
  onSelectAgeGroup,
  language = 'en'
}) => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState<'all-time' | 'weekly'>('all-time');
  const isHi = language === 'hi';

  const fetchLeaderboard = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/leaderboard?ageGroup=${selectedAgeGroup}&period=${period}`);
      const data = await res.json();
      const list = Array.isArray(data) ? data : (data?.leaderboard || []);
      setEntries(list);
    } catch (err) {
      console.error('Failed fetching leaderboard:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, [selectedAgeGroup, period]);

  const topThree = entries.slice(0, 3);
  const restEntries = entries.slice(3);

  return (
    <div className="space-y-8">
      {/* Title & Filters */}
      <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-orange-950/60 p-6 sm:p-8 rounded-3xl border border-amber-500/25 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 mb-2">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>{isHi ? 'लीडरबोर्ड एवं रैंकिंग' : 'Arena Standings'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-white tracking-tight">
            {isHi ? 'विजेताओं का महामंच' : 'Hall of Champions'}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            {isHi ? 'भारत और विश्व के शीर्ष मेधावी प्रतिभागियों की रैंकिंग।' : 'Celebrating knowledge masters across India & the World.'}
          </p>
        </div>

        {/* Filter Switchers */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Age Group Filter */}
          <select
            id="leaderboard-age-select"
            value={selectedAgeGroup}
            onChange={(e) => onSelectAgeGroup(e.target.value as AgeGroup)}
            className="bg-slate-950 border border-slate-800 text-xs font-bold text-amber-300 rounded-xl px-3 py-2 focus:outline-none focus:border-amber-500"
          >
            <option value="all">{isHi ? 'सभी आयु वर्ग' : 'All Age Groups'}</option>
            <option value="6-9">{isHi ? 'बच्चे (६-९ वर्ष)' : 'Kids (6-9)'}</option>
            <option value="10-12">{isHi ? 'जूनियर (१०-१२ वर्ष)' : 'Junior (10-12)'}</option>
            <option value="13-17">{isHi ? 'किशोर (१३-१७ वर्ष)' : 'Teens (13-17)'}</option>
            <option value="18+">{isHi ? 'वयस्क (१८+ वर्ष)' : 'Adults (18+)'}</option>
          </select>

          {/* Period Filter */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              id="leaderboard-period-alltime"
              onClick={() => setPeriod('all-time')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                period === 'all-time'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isHi ? 'सर्वकालिक' : 'All Time'}
            </button>
            <button
              id="leaderboard-period-weekly"
              onClick={() => setPeriod('weekly')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                period === 'weekly'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isHi ? 'इस सप्ताह' : 'This Week'}
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="py-20 text-center text-slate-400 text-sm">
          {isHi ? 'रैंकिंग लोड हो रही है...' : 'Loading arena rankings...'}
        </div>
      ) : (
        <>
          {/* Top 3 Podium (if at least 3 entries) */}
          {topThree.length >= 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
              {/* 2nd Place (Silver) */}
              <div className="order-2 md:order-1 bg-slate-900 border border-slate-700/60 rounded-3xl p-6 text-center flex flex-col items-center justify-between relative shadow-lg">
                <div className="absolute -top-4 px-3 py-1 rounded-full bg-slate-700 text-slate-200 border border-slate-500 text-xs font-black">
                  🥈 {isHi ? 'द्वितीय स्थान' : '2nd Place'}
                </div>
                <div className="mt-2 flex flex-col items-center">
                  <img
                    src={topThree[1].avatar || topThree[1].avatarUrl}
                    alt={topThree[1].displayName}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-slate-600 mb-3"
                  />
                  <h3 className="font-bold text-base text-white font-serif">
                    {topThree[1].displayName}
                  </h3>
                  <span className="text-xs text-slate-400">@{topThree[1].username} • {isHi ? `आयु ${topThree[1].ageGroup}` : `Age ${topThree[1].ageGroup}`}</span>
                </div>
                <div className="w-full mt-4 pt-4 border-t border-slate-800 flex items-center justify-around text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">{isHi ? 'अंक' : 'Points'}</span>
                    <strong className="text-amber-300 font-extrabold text-sm">{topThree[1].totalScore.toLocaleString()}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">{isHi ? 'सटीकता' : 'Accuracy'}</span>
                    <strong className="text-emerald-400 font-extrabold text-sm">{topThree[1].accuracyRate || 92}%</strong>
                  </div>
                </div>
              </div>

              {/* 1st Place (Gold Champion) */}
              <div className="order-1 md:order-2 bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-900 border-2 border-amber-500/60 rounded-3xl p-7 text-center flex flex-col items-center justify-between relative shadow-2xl scale-103">
                <div className="absolute -top-5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs shadow-md shadow-amber-500/30 flex items-center gap-1.5">
                  <Crown className="w-4 h-4 fill-slate-950" />
                  <span>{isHi ? 'महान विजेता' : 'Grand Champion'}</span>
                </div>
                <div className="mt-2 flex flex-col items-center">
                  <div className="relative mb-3">
                    <img
                      src={topThree[0].avatar || topThree[0].avatarUrl}
                      alt={topThree[0].displayName}
                      className="w-20 h-20 rounded-full object-cover ring-4 ring-amber-400 shadow-xl"
                    />
                    <span className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-md">
                      1
                    </span>
                  </div>
                  <h3 className="font-black text-lg text-white font-serif">
                    {topThree[0].displayName}
                  </h3>
                  <span className="text-xs text-amber-300 font-semibold">@{topThree[0].username} • {isHi ? `आयु ${topThree[0].ageGroup}` : `Age ${topThree[0].ageGroup}`}</span>
                </div>
                <div className="w-full mt-5 pt-4 border-t border-amber-500/20 flex items-center justify-around text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">{isHi ? 'अंक' : 'Points'}</span>
                    <strong className="text-amber-300 font-black text-base">{topThree[0].totalScore.toLocaleString()}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">{isHi ? 'दैनिक स्ट्रीक' : 'Streak'}</span>
                    <strong className="text-orange-400 font-black text-base flex items-center justify-center gap-0.5">
                      <Flame className="w-3.5 h-3.5 fill-orange-400" />
                      {topThree[0].streak || 15}{isHi ? ' दिन' : 'd'}
                    </strong>
                  </div>
                </div>
              </div>

              {/* 3rd Place (Bronze) */}
              <div className="order-3 bg-slate-900 border border-amber-800/40 rounded-3xl p-6 text-center flex flex-col items-center justify-between relative shadow-lg">
                <div className="absolute -top-4 px-3 py-1 rounded-full bg-amber-900/80 text-amber-200 border border-amber-700 text-xs font-black">
                  🥉 {isHi ? 'तृतीय स्थान' : '3rd Place'}
                </div>
                <div className="mt-2 flex flex-col items-center">
                  <img
                    src={topThree[2].avatar || topThree[2].avatarUrl}
                    alt={topThree[2].displayName}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-amber-700 mb-3"
                  />
                  <h3 className="font-bold text-base text-white font-serif">
                    {topThree[2].displayName}
                  </h3>
                  <span className="text-xs text-slate-400">@{topThree[2].username} • {isHi ? `आयु ${topThree[2].ageGroup}` : `Age ${topThree[2].ageGroup}`}</span>
                </div>
                <div className="w-full mt-4 pt-4 border-t border-slate-800 flex items-center justify-around text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">{isHi ? 'अंक' : 'Points'}</span>
                    <strong className="text-amber-300 font-extrabold text-sm">{topThree[2].totalScore.toLocaleString()}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">{isHi ? 'सटीकता' : 'Accuracy'}</span>
                    <strong className="text-emerald-400 font-extrabold text-sm">{topThree[2].accuracyRate || 90}%</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Full Rankings Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                {isHi ? 'सम्पूर्ण रैंकिंग सूची' : 'Full Rankings Table'}
              </h4>
              <span className="text-xs text-slate-500">
                {entries.length} {isHi ? 'प्रतिभागी' : 'participants'}
              </span>
            </div>

            <div className="divide-y divide-slate-800 overflow-x-auto">
              {entries.map((entry) => {
                const isMe = entry.userId === currentUserId;
                return (
                  <div
                    key={entry.userId}
                    className={`flex items-center justify-between px-6 py-4 transition-colors ${
                      isMe
                        ? 'bg-amber-500/10 border-l-4 border-l-amber-500'
                        : 'hover:bg-slate-850'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-7 text-center text-sm font-black ${
                        entry.rank === 1 ? 'text-amber-400' :
                        entry.rank === 2 ? 'text-slate-300' :
                        entry.rank === 3 ? 'text-amber-600' : 'text-slate-500'
                      }`}>
                        #{entry.rank}
                      </span>

                      <img
                        src={entry.avatar || entry.avatarUrl}
                        alt={entry.displayName}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-700"
                      />

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-white">
                            {entry.displayName}
                          </span>
                          {isMe && (
                            <span className="px-1.5 py-0.2 rounded text-[10px] bg-amber-500 text-slate-950 font-black">
                              {isHi ? 'आप' : 'YOU'}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span>@{entry.username}</span>
                          <span>•</span>
                          <span className="capitalize">{isHi ? `आयु ${entry.ageGroup}` : `Age ${entry.ageGroup}`}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-right text-xs">
                      <div className="hidden sm:block">
                        <span className="text-slate-400 block text-[10px]">{isHi ? 'खेले गए क्विज़' : 'Quizzes'}</span>
                        <span className="font-semibold text-slate-200">{entry.quizzesPlayed || entry.quizzesCompleted || 0}</span>
                      </div>

                      <div className="hidden sm:block">
                        <span className="text-slate-400 block text-[10px]">{isHi ? 'सटीकता' : 'Accuracy'}</span>
                        <span className="font-semibold text-emerald-400">{entry.accuracyRate || 90}%</span>
                      </div>

                      <div>
                        <span className="text-slate-400 block text-[10px]">{isHi ? 'कुल अंक' : 'Score'}</span>
                        <span className="font-black text-sm text-amber-300">{entry.totalScore.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
