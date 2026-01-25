import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Loader2, AlertCircle, LogOut, CheckCircle2 } from 'lucide-react';
import { useMemberStore } from '@/stores/memberStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface MemberGateProps {
  children: React.ReactNode;
}

const MemberGate: React.FC<MemberGateProps> = ({ children }) => {
  const { 
    member, 
    isVerifying, 
    error, 
    verifyMembership, 
    logout, 
    clearError,
    isAuthenticated 
  } = useMemberStore();
  
  const [email, setEmail] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  // Check if already authenticated
  const authenticated = isAuthenticated();

  // Show welcome animation when first authenticated
  useEffect(() => {
    if (authenticated && member) {
      setShowWelcome(true);
      const timer = setTimeout(() => setShowWelcome(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [authenticated, member]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isVerifying) return;
    
    const success = await verifyMembership(email);
    if (success) {
      setEmail('');
    }
  };

  const handleLogout = () => {
    logout();
    setEmail('');
  };

  // If authenticated and welcome animation is done, show children
  if (authenticated && !showWelcome) {
    return <>{children}</>;
  }

  // Welcome animation
  if (showWelcome && member) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center"
          >
            <CheckCircle2 className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-medium text-stone-100 mb-2"
          >
            歡迎回來
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-stone-400"
          >
            {member.email}
          </motion.p>
        </motion.div>
      </motion.div>
    );
  }

  // Login form
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-800/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative w-full max-w-md"
      >
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-4xl font-bold text-stone-100 mb-2 tracking-wider"
            style={{ fontFamily: "'Noto Serif TC', serif" }}
          >
            弧度歸零
          </motion.h1>
          <p className="text-stone-400 text-sm">
            請使用主站帳號登入
          </p>
        </div>

        {/* Login Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-stone-900/80 backdrop-blur-xl border border-stone-700/50 rounded-2xl p-6 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm text-stone-300 font-medium">
                電子信箱
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) clearError();
                  }}
                  disabled={isVerifying}
                  className="pl-11 h-12 bg-stone-800/50 border-stone-700 text-stone-100 placeholder:text-stone-500 focus:border-amber-500/50 focus:ring-amber-500/20"
                />
              </div>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-start gap-2 p-3 rounded-lg bg-red-950/50 border border-red-800/50"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-300">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!email.trim() || isVerifying}
              className="w-full h-12 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isVerifying ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  驗證中...
                </>
              ) : (
                '驗證會員身份'
              )}
            </Button>
          </form>

          {/* Help Text */}
          <div className="mt-6 pt-4 border-t border-stone-800 space-y-3">
            <p className="text-xs text-stone-500 text-center">
              請使用您在主站註冊的信箱進行驗證
            </p>
            
            {/* 公開測試註冊連結 */}
            <div className="text-center">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 mb-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-400 font-medium">公開測試中</span>
              </div>
              <p className="text-xs text-stone-400 mb-2">
                免費註冊即可遊玩完整遊戲
              </p>
              <a
                href="https://arctozero.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-amber-400 hover:text-amber-300 transition-colors font-medium"
              >
                前往主站註冊
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Already logged in indicator (if session exists but checking) */}
        {member && !authenticated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="text-stone-500 hover:text-stone-300"
            >
              <LogOut className="w-4 h-4 mr-2" />
              使用其他帳號
            </Button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default MemberGate;
