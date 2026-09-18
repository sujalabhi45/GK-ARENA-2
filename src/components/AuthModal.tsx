import React, { useState } from 'react';
import { X, Sparkles, User, Lock, Mail, Shield, CheckCircle2 } from 'lucide-react';
import { AgeGroup, Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (token: string, user: any) => void;
  language?: Language;
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  onLoginSuccess,
  language = 'en'
}) => {
  const [isRegister, setIsRegister] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [ageGroup, setAgeGroup] = useState<AgeGroup>('10-12');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const isHi = language === 'hi';
  const t = TRANSLATIONS[language];

  if (!isOpen) return null;

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || (isHi ? 'लॉगिन विफल रहा' : 'Login failed'));
      }

      onLoginSuccess(data.token, data.user);
      onClose();
    } catch (err: any) {
      setError(err.message || (isHi ? 'लॉगिन में त्रुटि हुई' : 'Login error occurred'));
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          displayName: displayName || username,
          email,
          password,
          ageGroup
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || (isHi ? 'पंजीकरण विफल रहा' : 'Registration failed'));
      }

      onLoginSuccess(data.token, data.user);
      onClose();
    } catch (err: any) {
      setError(err.message || (isHi ? 'पंजीकरण में त्रुटि हुई' : 'Registration error occurred'));
    } finally {
      setLoading(false);
    }
  };

  // 1-Click Fast Demo Login Profiles
  const handleQuickDemoLogin = (demoUsername: string) => {
    setIdentifier(demoUsername);
    setPassword(demoUsername === 'admin' ? 'ArenaAdmin2025!' : 'Password@123');
    // Trigger login with demo credentials
    setTimeout(async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            identifier: demoUsername,
            password: demoUsername === 'admin' ? 'ArenaAdmin2025!' : 'Password@123'
          })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || (isHi ? 'डेमो लॉगिन विफल रहा' : 'Demo login failed'));
        onLoginSuccess(data.token, data.user);
        onClose();
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden text-slate-100">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-200" />
            <h2 className="text-lg font-bold text-white tracking-wide">
              {isRegister ? t.authModalRegisterTitle : t.authModalTitle}
            </h2>
          </div>
          <button
            id="auth-modal-close-btn"
            onClick={onClose}
            className="text-amber-100 hover:text-white p-1 rounded-lg hover:bg-black/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Demo Quick Logins Box */}
          <div className="mb-6 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" /> {t.instantDemoAccounts}
              </span>
              <span className="text-[10px] text-slate-400">{t.clickToEnter}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                id="demo-login-aarav"
                onClick={() => handleQuickDemoLogin('aarav')}
                className="text-left px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 transition-all text-xs cursor-pointer"
              >
                <p className="font-bold text-amber-300">👦 आरव (Aarav)</p>
                <p className="text-[10px] text-slate-400">{t.kids69}</p>
              </button>
              <button
                type="button"
                id="demo-login-diya"
                onClick={() => handleQuickDemoLogin('diya')}
                className="text-left px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 transition-all text-xs cursor-pointer"
              >
                <p className="font-bold text-amber-300">👧 दीया (Diya)</p>
                <p className="text-[10px] text-slate-400">{t.juniors1012}</p>
              </button>
              <button
                type="button"
                id="demo-login-arjun"
                onClick={() => handleQuickDemoLogin('arjun_v')}
                className="text-left px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 transition-all text-xs cursor-pointer"
              >
                <p className="font-bold text-amber-300">🧑 अर्जुन (Arjun)</p>
                <p className="text-[10px] text-slate-400">{t.teens1317}</p>
              </button>
              <button
                type="button"
                id="demo-login-admin"
                onClick={() => handleQuickDemoLogin('admin')}
                className="text-left px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-amber-500/40 hover:border-amber-400 transition-all text-xs cursor-pointer"
              >
                <p className="font-bold text-orange-300">👑 {isHi ? 'एरीना प्रमुख' : 'Arena Master'}</p>
                <p className="text-[10px] text-slate-400">{isHi ? 'प्रशासक' : 'Administrator'}</p>
              </button>
            </div>
          </div>

          <div className="relative flex py-1 items-center mb-4">
            <div className="flex-grow border-t border-slate-800"></div>
            <span className="flex-shrink mx-3 text-[11px] text-slate-400 font-medium">
              {isHi ? 'या क्रेडेंशियल दर्ज करें' : 'Or enter credentials'}
            </span>
            <div className="flex-grow border-t border-slate-800"></div>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-rose-950/80 border border-rose-500/40 text-rose-200 text-xs">
              {error}
            </div>
          )}

          {isRegister ? (
            /* Registration Form */
            <form onSubmit={handleRegister} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.fullName}</label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    id="register-displayname"
                    type="text"
                    required
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder={isHi ? 'उदा. विक्रमादित्य सिंह' : 'e.g. Vikramaditya Rathore'}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.username}</label>
                <input
                  id="register-username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. vikram_warrior"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.emailAddress}</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    id="register-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.selectAgeGroup}</label>
                <select
                  id="register-agegroup"
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value as AgeGroup)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-amber-300 focus:outline-none focus:border-amber-500 font-medium"
                >
                  <option value="6-9">{t.kids69}</option>
                  <option value="10-12">{t.juniors1012}</option>
                  <option value="13-17">{t.teens1317}</option>
                  <option value="18+">{t.adults18}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.password}</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    id="register-password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                id="submit-register-btn"
                disabled={loading}
                className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
              >
                {loading ? t.creatingAccount : `${t.createAccount} (+50 ${isHi ? 'सिक्के' : 'Coins'})`}
              </button>
            </form>
          ) : (
            /* Login Form */
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.emailOrUsername}</label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    id="login-identifier"
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder={isHi ? 'उपयोगकर्ता नाम या ईमेल दर्ज करें' : 'Enter username or email'}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.password}</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    id="login-password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                id="submit-login-btn"
                disabled={loading}
                className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
              >
                {loading ? t.signingIn : t.signIn}
              </button>
            </form>
          )}

          {/* Toggle between Login and Register */}
          <div className="mt-5 text-center">
            <button
              id="toggle-auth-mode-btn"
              type="button"
              onClick={() => {
                setIsRegister(!isRegister);
                setError('');
              }}
              className="text-xs text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 cursor-pointer"
            >
              {isRegister
                ? `${t.alreadyHaveAccount} ${t.loginNow}`
                : `${t.newToArena} ${t.registerNow}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
