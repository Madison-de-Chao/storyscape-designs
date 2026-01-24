import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { ZenTheme } from "@/stores/gameStore";

interface ZenMomentProps {
  text: string;
  subtitle?: string;
  onComplete: () => void;
  duration?: number;
  theme?: ZenTheme;
}

const themeStyles: Record<ZenTheme, { glow: string; text: string; accent: string }> = {
  golden: {
    glow: 'rgba(212, 175, 55, 0.4)',
    text: 'text-amber-100',
    accent: 'border-amber-400/30',
  },
  gold: {
    glow: 'rgba(212, 175, 55, 0.4)',
    text: 'text-amber-100',
    accent: 'border-amber-400/30',
  },
  moonlight: {
    glow: 'rgba(200, 200, 255, 0.3)',
    text: 'text-blue-100',
    accent: 'border-blue-300/30',
  },
  dawn: {
    glow: 'rgba(255, 200, 150, 0.3)',
    text: 'text-orange-100',
    accent: 'border-orange-300/30',
  },
  ink: {
    glow: 'rgba(100, 100, 100, 0.2)',
    text: 'text-gray-200',
    accent: 'border-gray-400/30',
  },
  'yin-yang': {
    glow: 'rgba(180, 180, 180, 0.3)',
    text: 'text-gray-100',
    accent: 'border-gray-300/30',
  },
  cosmos: {
    glow: 'rgba(100, 100, 200, 0.4)',
    text: 'text-indigo-100',
    accent: 'border-indigo-400/30',
  },
  earth: {
    glow: 'rgba(139, 90, 43, 0.4)',
    text: 'text-amber-200',
    accent: 'border-amber-600/30',
  },
  wood: {
    glow: 'rgba(101, 67, 33, 0.4)',
    text: 'text-amber-100',
    accent: 'border-amber-700/30',
  },
  white: {
    glow: 'rgba(255, 255, 255, 0.3)',
    text: 'text-white',
    accent: 'border-white/30',
  },
  crimson: {
    glow: 'rgba(180, 30, 30, 0.4)',
    text: 'text-red-100',
    accent: 'border-red-400/30',
  },
  silver: {
    glow: 'rgba(192, 192, 192, 0.4)',
    text: 'text-gray-100',
    accent: 'border-gray-300/30',
  },
  rain: {
    glow: 'rgba(100, 150, 200, 0.3)',
    text: 'text-blue-200',
    accent: 'border-blue-400/30',
  },
};

export const ZenMoment = ({ 
  text, 
  subtitle,
  onComplete, 
  duration = 6000,
  theme = 'golden'
}: ZenMomentProps) => {
  const [phase, setPhase] = useState<'enter' | 'display' | 'exit'>('enter');
  const style = themeStyles[theme];

  useEffect(() => {
    // 進入動畫完成後進入展示階段
    const enterTimer = setTimeout(() => setPhase('display'), 1500);
    
    // 展示後進入退出階段
    const displayTimer = setTimeout(() => setPhase('exit'), duration - 1500);
    
    // 完全結束
    const exitTimer = setTimeout(onComplete, duration);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(displayTimer);
      clearTimeout(exitTimer);
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer"
        onClick={onComplete}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        style={{
          background: 'linear-gradient(180deg, hsl(222 50% 3%) 0%, hsl(222 47% 8%) 50%, hsl(222 50% 3%) 100%)'
        }}
      >
        {/* 水墨霧氣效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[800px] h-[400px] rounded-full opacity-10"
              style={{
                left: `${-20 + i * 30}%`,
                top: `${20 + Math.sin(i) * 20}%`,
                background: `radial-gradient(ellipse, ${style.glow} 0%, transparent 70%)`,
                filter: 'blur(80px)',
              }}
              animate={{
                x: [0, 50, 0],
                y: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* 中央光暈 */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${style.glow} 0%, transparent 60%)`,
            filter: 'blur(40px)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: phase === 'exit' ? 1.5 : 1, 
            opacity: phase === 'exit' ? 0 : 0.6 
          }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* 裝飾邊框 */}
        <motion.div
          className={`absolute w-[80%] max-w-2xl h-px ${style.accent} border-t`}
          style={{ top: '30%' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: phase !== 'enter' ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className={`absolute w-[80%] max-w-2xl h-px ${style.accent} border-t`}
          style={{ bottom: '30%' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: phase !== 'enter' ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* 主文字 */}
        <motion.div
          className="relative z-10 text-center px-8"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ 
            opacity: phase === 'exit' ? 0 : 1, 
            y: phase === 'exit' ? -30 : 0,
            filter: 'blur(0px)'
          }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 
            className={`text-3xl md:text-5xl lg:text-6xl font-serif-tc ${style.text} tracking-[0.15em] leading-relaxed zen-text`}
            style={{
              textShadow: `0 0 30px ${style.glow}, 0 0 60px ${style.glow}`
            }}
          >
            {text}
          </h2>
          
          {subtitle && (
            <motion.p
              className="mt-8 text-lg md:text-xl text-muted-foreground/70 font-sans-tc tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'display' ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* 角落裝飾 */}
        <svg className="absolute top-8 left-8 w-16 h-16 text-primary/20" viewBox="0 0 100 100">
          <motion.path
            d="M 0 50 Q 0 0 50 0"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: phase !== 'enter' ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        </svg>
        <svg className="absolute bottom-8 right-8 w-16 h-16 text-primary/20 rotate-180" viewBox="0 0 100 100">
          <motion.path
            d="M 0 50 Q 0 0 50 0"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: phase !== 'enter' ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        </svg>

        {/* 點擊繼續提示 */}
        <motion.div
          className="absolute bottom-6 text-sm text-muted-foreground/40 font-sans-tc"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'display' ? 1 : 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          點擊任意處繼續
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ZenMoment;
