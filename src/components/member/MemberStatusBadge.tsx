import React from 'react';
import { motion } from 'framer-motion';
import { LogOut, User } from 'lucide-react';
import { useMemberStore } from '@/stores/memberStore';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

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

      {/* Logout button with confirmation */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <motion.button
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
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-stone-900/95 backdrop-blur-xl border-stone-700/80 shadow-2xl shadow-black/50 overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-red-500/10 rounded-full blur-3xl" />
          </div>
          
          <AlertDialogHeader className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
              className="w-12 h-12 mx-auto mb-3 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center"
            >
              <LogOut className="w-6 h-6 text-red-400" />
            </motion.div>
            <AlertDialogTitle className="text-stone-100 text-center">確認登出</AlertDialogTitle>
            <AlertDialogDescription className="text-stone-400 text-center">
              登出後需要重新驗證會員身份才能繼續遊玩，確定要登出嗎？
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="relative sm:justify-center gap-3 pt-2">
            <AlertDialogCancel asChild>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 rounded-lg bg-stone-800 border border-stone-700 text-stone-300 hover:bg-stone-700 hover:text-stone-100 transition-colors"
              >
                取消
              </motion.button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <motion.button
                onClick={logout}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-medium shadow-lg shadow-red-500/25 transition-all"
              >
                確認登出
              </motion.button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </motion.div>
  );
};

export default MemberStatusBadge;
