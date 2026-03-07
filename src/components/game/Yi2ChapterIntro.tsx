import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';
import { getChapterTheme, themeToHSL, themeToGlow } from '@/utils/chapterThemes';
import { usePerformanceStore } from '@/stores/performanceStore';
import EffectRenderer from './yi2-intro/EffectRenderer';
import type { Yi2ChapterIntroProps } from './yi2-intro/types';

// Re-export for consumers
export { yi2IntroStyles } from './yi2-intro/types';
export type { IntroStyle, Yi2ChapterIntroProps } from './yi2-intro/types';

const Yi2ChapterIntro = ({
  chapterKey,
  title,
  subtitle,
  quote,
  style,
  onComplete,
}: Yi2ChapterIntroProps) => {
  const theme = getChapterTheme(chapterKey);
  const color = themeToHSL(theme);
  const glow = themeToGlow(theme, 0.8);
  const shouldSimplify = usePerformanceStore((s) => s.shouldSimplifyAnimations());

  // 使用 ref 穩定回調，防止父組件重渲染時重置計時器
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const completedRef = useRef(false);

  const forceComplete = useCallback(() => {
    if (!completedRef.current) {
      completedRef.current = true;
      onCompleteRef.current();
    }
  }, []);

  // 自動結束計時
  useEffect(() => {
    completedRef.current = false;
    const timer = setTimeout(forceComplete, 4500);
    const safety = setTimeout(forceComplete, 7000);
    return () => { clearTimeout(timer); clearTimeout(safety); };
  }, [forceComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={forceComplete}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: `linear-gradient(180deg, hsl(${theme.hue} ${theme.saturation * 0.3}% 4%) 0%, hsl(${theme.hue} ${theme.saturation * 0.4}% 8%) 50%, hsl(${theme.hue} ${theme.saturation * 0.3}% 4%) 100%)`,
      }}
    >
      {/* 章節專屬動畫效果 */}
      {!shouldSimplify && <EffectRenderer style={style} color={color} />}

      {/* 標題區 */}
      <div className="relative z-20 text-center px-6">
        {/* 上方裝飾線 */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="h-[1px] w-12 sm:w-20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ background: `linear-gradient(90deg, transparent, ${color})`, transformOrigin: 'right' }}
          />
          <motion.div
            className="w-2 h-2 rotate-45"
            style={{ background: color, boxShadow: `0 0 10px ${color}` }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
          <motion.div
            className="h-[1px] w-12 sm:w-20"
            style={{ background: `linear-gradient(90deg, ${color}, transparent)`, transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </motion.div>

        {/* 章節標題 */}
        <motion.h1
          className="font-serif-tc text-2xl sm:text-4xl md:text-5xl tracking-[0.2em]"
          style={{
            color: glow,
            textShadow: `0 0 40px ${themeToHSL(theme, 0.5)}, 0 4px 20px hsl(0 0% 0% / 0.8)`,
          }}
          initial={{ opacity: 0, y: 20, letterSpacing: '0.4em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.2em' }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {title}
        </motion.h1>

        {/* 副標題 */}
        {subtitle && (
          <motion.h2
            className="font-serif-tc text-lg sm:text-2xl mt-3 tracking-[0.1em]"
            style={{
              color: themeToGlow(theme, 0.7),
              textShadow: `0 0 20px ${themeToHSL(theme, 0.3)}`,
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {subtitle}
          </motion.h2>
        )}

        {/* 金句 */}
        {quote && (
          <motion.p
            className="font-serif-tc text-sm sm:text-base md:text-lg mt-8 max-w-lg mx-auto italic leading-relaxed"
            style={{ color: 'hsl(45 20% 75%)', textShadow: `0 0 20px ${themeToHSL(theme, 0.2)}` }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            「{quote}」
          </motion.p>
        )}

        {/* 下方裝飾線 */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="h-[1px] w-8 sm:w-14" style={{ background: `linear-gradient(90deg, transparent, ${themeToHSL(theme, 0.5)})` }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: themeToHSL(theme, 0.5) }} />
          <div className="h-[1px] w-8 sm:w-14" style={{ background: `linear-gradient(90deg, ${themeToHSL(theme, 0.5)}, transparent)` }} />
        </motion.div>
      </div>

      {/* 底部漸層 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: `linear-gradient(to top, hsl(${theme.hue} ${theme.saturation * 0.3}% 4%) 0%, transparent 100%)`,
        }}
      />
    </motion.div>
  );
};

export default Yi2ChapterIntro;
