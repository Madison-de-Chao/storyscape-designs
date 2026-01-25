import React from 'react';
import { motion } from 'framer-motion';
import { LogOut, User } from 'lucide-react';
import { useMemberStore } from '@/stores/memberStore';

const MemberStatusBadge: React.FC = () => {
  const { member, logout, isAuthenticated } = useMemberStore();
  
  if (!isAuthenticated() || !member) {
    return null;
  }

  // Truncate email for display
  const displayEmail = member.email.length > 20 
    ? `${member.email.slice(0, 17)}...` 
    : member.email;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed top-4 right-4 z-30 flex items-center gap-1.5 sm:gap-2"
    >
      {/* Member badge */}
      <div className="
        flex items-center gap-2 px-3 py-1.5
        bg-stone-900/80 backdrop-blur-sm
        border border-stone-700/50
        rounded-full
        shadow-lg
      ">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
          <User className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-xs text-stone-300 hidden sm:inline">
          {displayEmail}
        </span>
        <span className="text-xs text-stone-300 sm:hidden">
          會員
        </span>
      </div>

      {/* Logout button */}
      <motion.button
        onClick={logout}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          p-2 rounded-full
          bg-stone-900/80 backdrop-blur-sm
          border border-stone-700/50
          text-stone-400 hover:text-red-400
          hover:border-red-500/50
          transition-colors
          touch-manipulation
        "
        title="登出"
      >
        <LogOut className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

export default MemberStatusBadge;
