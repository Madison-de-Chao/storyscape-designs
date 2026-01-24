import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, BookOpen, Heart, Zap, Eye, Compass, Shield, Flame, Sparkles } from 'lucide-react';
import { useSFX } from '@/hooks/useAudio';
import { useEffect } from 'react';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: 'trophy' | 'star' | 'book' | 'heart' | 'zap' | 'eye' | 'compass' | 'shield' | 'flame' | 'sparkles';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface AchievementToastProps {
  achievement: Achievement | null;
  onClose: () => void;
}

const iconMap = {
  trophy: Trophy,
  star: Star,
  book: BookOpen,
  heart: Heart,
  zap: Zap,
  eye: Eye,
  compass: Compass,
  shield: Shield,
  flame: Flame,
  sparkles: Sparkles,
};

const rarityStyles = {
  common: {
    bg: 'from-slate-600/90 to-slate-700/90',
    border: 'border-slate-500/50',
    glow: 'shadow-slate-500/30',
    icon: 'text-slate-300',
    label: '普通',
  },
  rare: {
    bg: 'from-blue-600/90 to-blue-700/90',
    border: 'border-blue-400/50',
    glow: 'shadow-blue-500/40',
    icon: 'text-blue-300',
    label: '稀有',
  },
  epic: {
    bg: 'from-purple-600/90 to-purple-700/90',
    border: 'border-purple-400/50',
    glow: 'shadow-purple-500/50',
    icon: 'text-purple-300',
    label: '史詩',
  },
  legendary: {
    bg: 'from-amber-500/90 to-amber-600/90',
    border: 'border-amber-300/60',
    glow: 'shadow-amber-400/60',
    icon: 'text-amber-100',
    label: '傳說',
  },
};

/**
 * 成就解鎖通知組件
 */
const AchievementToast = ({ achievement, onClose }: AchievementToastProps) => {
  const { playSFX } = useSFX();

  useEffect(() => {
    if (achievement) {
      // 播放成就音效
      playSFX('choice');
      
      // 5秒後自動關閉
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [achievement, onClose, playSFX]);

  if (!achievement) return null;

  const IconComponent = iconMap[achievement.icon];
  const style = rarityStyles[achievement.rarity];

  return (
    <AnimatePresence>
      {achievement && (
        <motion.div
          className="fixed top-24 right-6 z-[70] cursor-pointer"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          onClick={onClose}
        >
          {/* 背景光暈效果 */}
          <motion.div
            className={`absolute inset-0 rounded-2xl blur-xl opacity-50 ${style.glow}`}
            style={{ transform: 'scale(1.2)' }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1.2, 1.3, 1.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className={`relative flex items-center gap-4 px-5 py-4 rounded-2xl 
            bg-gradient-to-r ${style.bg} backdrop-blur-xl 
            border ${style.border} shadow-2xl ${style.glow}`}
          >
            {/* 圖標容器 */}
            <motion.div
              className={`flex items-center justify-center w-14 h-14 rounded-xl 
                bg-black/20 ${style.icon}`}
              initial={{ rotate: -10, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
            >
              <IconComponent className="w-7 h-7" />
            </motion.div>

            {/* 內容 */}
            <div className="flex-1 min-w-0">
              <motion.div
                className="flex items-center gap-2 mb-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
                  {style.label}成就解鎖
                </span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  ✨
                </motion.div>
              </motion.div>
              
              <motion.h4
                className="text-lg font-bold text-white mb-0.5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {achievement.title}
              </motion.h4>
              
              <motion.p
                className="text-sm text-white/70 truncate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {achievement.description}
              </motion.p>
            </div>

            {/* 裝飾粒子 */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-white/60"
                style={{
                  left: `${20 + i * 20}%`,
                  top: '10%',
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementToast;
