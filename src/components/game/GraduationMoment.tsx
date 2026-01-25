import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Award, Star } from 'lucide-react';
import type { GraduationImageData } from '@/data/yi1/graduationImages';

interface GraduationMomentProps {
  data: GraduationImageData;
  onComplete: () => void;
  duration?: number;
}

/**
 * 畢業時刻 - 全螢幕展示課程畢業圖
 * 具備華麗的進場動畫和視覺特效
 */
const GraduationMoment = ({ 
  data, 
  onComplete, 
  duration = 6000 
}: GraduationMomentProps) => {
  const [phase, setPhase] = useState<'entering' | 'display' | 'exiting'>('entering');
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // 預載入圖片
  useEffect(() => {
    const img = new Image();
    img.src = data.image;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(true); // 即使失敗也繼續流程
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [data.image]);

  // 階段控制
  useEffect(() => {
    if (!isImageLoaded) return;

    // 進入階段 → 顯示階段
    const enterTimer = setTimeout(() => {
      setPhase('display');
    }, 1500);

    // 顯示階段 → 退出階段
    const displayTimer = setTimeout(() => {
      setPhase('exiting');
    }, duration - 1000);

    // 完成退出
    const exitTimer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(displayTimer);
      clearTimeout(exitTimer);
    };
  }, [isImageLoaded, duration, onComplete]);

  // 點擊跳過
  const handleSkip = useCallback(() => {
    if (phase !== 'exiting') {
      setPhase('exiting');
      setTimeout(onComplete, 800);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer overflow-hidden"
        onClick={handleSkip}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 背景漸層 */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            background: 'radial-gradient(ellipse at center, hsl(222 40% 8%) 0%, hsl(222 50% 3%) 100%)',
          }}
        />

        {/* 金色光暈 */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: phase === 'display' ? [0.3, 0.6, 0.3] : 0.2 
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px]"
            style={{
              background: 'radial-gradient(circle, hsl(38 80% 50% / 0.2) 0%, transparent 70%)',
            }}
          />
        </motion.div>

        {/* 粒子效果 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${10 + (i * 4.5)}%`,
                bottom: '-10%',
                background: i % 2 === 0 
                  ? 'hsl(38 80% 60%)' 
                  : 'hsl(45 90% 70%)',
                boxShadow: '0 0 10px hsl(38 80% 60% / 0.5)',
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                y: [0, -800],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        {/* 主要內容容器 */}
        <motion.div
          className="relative z-10 flex flex-col items-center max-w-2xl mx-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ 
            y: phase === 'exiting' ? -30 : 0, 
            opacity: phase === 'exiting' ? 0 : 1 
          }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* 課程標題標籤 */}
          <motion.div
            className="flex items-center gap-2 mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold text-amber-400 tracking-widest">
              {data.lessonTitle}
            </span>
            <Award className="w-5 h-5 text-amber-400" />
          </motion.div>

          {/* 畢業圖片 */}
          <motion.div
            className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: isImageLoaded ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
          >
            {/* 圖片邊框光暈 */}
            <motion.div
              className="absolute -inset-1 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, hsl(38 80% 50%) 0%, hsl(45 90% 60%) 50%, hsl(38 80% 50%) 100%)',
              }}
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            {/* 圖片內容 */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-amber-500/30">
              <img
                src={data.image}
                alt={`${data.mentor} - ${data.theme}`}
                className="w-full h-full object-cover"
              />
              
              {/* 掃描光效 */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, hsl(45 90% 70% / 0.15) 50%, transparent 100%)',
                }}
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* 角落裝飾 */}
            <motion.div
              className="absolute -top-2 -left-2 w-8 h-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.3 }}
            >
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.3 }}
            >
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-2 w-8 h-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.3 }}
            >
              <Sparkles className="w-6 h-6 text-amber-400" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-8 h-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.3 }}
            >
              <Sparkles className="w-6 h-6 text-amber-400" />
            </motion.div>
          </motion.div>

          {/* 導師與主題 */}
          <motion.div
            className="mt-8 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-tc text-amber-100 mb-2">
              {data.mentor}
            </h2>
            <div className="flex items-center justify-center gap-3 text-amber-400/80">
              <span className="text-lg">✦</span>
              <span className="text-xl font-serif-tc tracking-widest">{data.theme}</span>
              <span className="text-lg">✦</span>
            </div>
          </motion.div>

          {/* 金句 */}
          <motion.p
            className="mt-6 text-center text-muted-foreground/90 text-sm sm:text-base font-serif-tc italic max-w-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            「{data.quote}」
          </motion.p>

          {/* 點擊繼續提示 */}
          <motion.p
            className="mt-8 text-xs text-muted-foreground/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ delay: 2, duration: 2, repeat: Infinity }}
          >
            點擊任意處繼續
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GraduationMoment;
