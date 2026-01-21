import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import { getChapterTheme, themeToHSL, themeToGlow, type ChapterTheme } from '@/utils/chapterThemes';
import { useSFX } from '@/hooks/useAudio';

interface SceneTransitionProps {
  isTransitioning: boolean;
  transitionType?: 'fade' | 'slide' | 'blur' | 'cinematic' | 'chapter';
  chapterTitle?: string;
  chapterKey?: string;  // 用於獲取章節主題色
  onTransitionComplete?: () => void;
}

/**
 * 全屏場景轉場組件
 * 用於章節切換、重大場景轉換時的視覺過渡
 * 電影級動畫效果 + 章節專屬主題色
 */
const SceneTransition = ({
  isTransitioning,
  transitionType = 'fade',
  chapterTitle,
  chapterKey,
  onTransitionComplete,
}: SceneTransitionProps) => {
  const { playSFX } = useSFX();
  const [showContent, setShowContent] = useState(false);
  const [phase, setPhase] = useState<'enter' | 'display' | 'exit'>('enter');

  // 獲取章節主題色
  const theme: ChapterTheme = useMemo(() => {
    return getChapterTheme(chapterKey || 'preface');
  }, [chapterKey]);

  // 過場開始時播放音效
  useEffect(() => {
    if (isTransitioning && transitionType === 'chapter') {
      playSFX('chapter_transition');
    }
  }, [isTransitioning, transitionType, playSFX]);

  useEffect(() => {
    if (isTransitioning && transitionType === 'chapter') {
      setPhase('enter');
      const showTimer = setTimeout(() => {
        setShowContent(true);
        setPhase('display');
      }, 600);
      const exitTimer = setTimeout(() => {
        setPhase('exit');
      }, 2400);
      return () => {
        clearTimeout(showTimer);
        clearTimeout(exitTimer);
      };
    } else {
      setShowContent(false);
      setPhase('enter');
    }
  }, [isTransitioning, transitionType]);

  useEffect(() => {
    if (isTransitioning && onTransitionComplete) {
      const duration = transitionType === 'chapter' ? 3200 : 1500;
      const timer = setTimeout(onTransitionComplete, duration);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, transitionType, onTransitionComplete]);

  const getTransitionVariants = () => {
    switch (transitionType) {
      case 'slide':
        return {
          initial: { x: '100%' },
          animate: { x: 0 },
          exit: { x: '-100%' },
        };
      case 'blur':
        return {
          initial: { opacity: 0, filter: 'blur(30px)' },
          animate: { opacity: 1, filter: 'blur(0px)' },
          exit: { opacity: 0, filter: 'blur(30px)' },
        };
      case 'cinematic':
        return {
          initial: { scaleY: 0 },
          animate: { scaleY: 1 },
          exit: { scaleY: 0 },
        };
      case 'chapter':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        };
    }
  };

  const variants = getTransitionVariants();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={{
            duration: transitionType === 'chapter' ? 0.8 : 0.5,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          style={{
            background: transitionType === 'cinematic'
              ? 'hsl(0 0% 0%)'
              : 'linear-gradient(180deg, hsl(222 50% 3%) 0%, hsl(222 47% 6%) 50%, hsl(222 50% 3%) 100%)',
            transformOrigin: transitionType === 'cinematic' ? 'center' : undefined,
          }}
        >
          {/* 電影式轉場的上下黑邊效果 */}
          {transitionType === 'cinematic' && (
            <>
              <motion.div
                className="absolute top-0 left-0 right-0 bg-black"
                initial={{ height: '0%' }}
                animate={{ height: '12%' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-black"
                initial={{ height: '0%' }}
                animate={{ height: '12%' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </>
          )}

          {/* 章節轉場 - 電影級效果 + 動態主題色 */}
          {transitionType === 'chapter' && chapterTitle && (
            <>
              {/* 動態光線掃描效果 */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 2, times: [0, 0.3, 1] }}
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${themeToHSL(theme, 0.15)} 50%, transparent 100%)`,
                }}
              />

              {/* 中央光暈 */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: showContent ? [0, 0.6, 0.4] : 0, 
                  scale: showContent ? [0.8, 1.2, 1] : 0.8 
                }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                style={{
                  background: `radial-gradient(ellipse at center, ${themeToHSL(theme, 0.25)} 0%, ${themeToHSL(theme, 0.05)} 40%, transparent 70%)`,
                }}
              />

              {/* 動態漸層背景 */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  background: [
                    `radial-gradient(ellipse at 50% 50%, hsl(222 50% 8%) 0%, hsl(222 50% 3%) 100%)`,
                    `radial-gradient(ellipse at 50% 40%, ${themeToHSL(theme, 0.1)} 0%, hsl(222 50% 3%) 100%)`,
                    `radial-gradient(ellipse at 50% 50%, hsl(222 50% 8%) 0%, hsl(222 50% 3%) 100%)`,
                  ],
                }}
                transition={{ duration: 3, ease: 'easeInOut' }}
              />

              {/* 水平光線掃描 - 使用主題色 */}
              <motion.div
                className="absolute h-[2px] left-0 right-0 pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${themeToGlow(theme, 0.9)} 50%, transparent 100%)`,
                  boxShadow: `0 0 30px 10px ${themeToHSL(theme, 0.4)}`,
                }}
                initial={{ top: '0%', opacity: 0 }}
                animate={{ 
                  top: ['0%', '100%'],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{ 
                  duration: 1.8, 
                  delay: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />

              {/* 邊緣暈影 (電影感) */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 30%, hsl(0 0% 0% / 0.6) 100%)',
                }}
              />

              {/* 主要內容區域 */}
              <div className="relative text-center z-10">
                {/* 上方裝飾光線 - 動態主題色 */}
                <motion.div
                  className="flex items-center justify-center gap-4 mb-10"
                  initial={{ opacity: 0 }}
                  animate={showContent ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.div
                    className="h-[1px] w-16 md:w-24"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={showContent ? { scaleX: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                      background: `linear-gradient(90deg, transparent, ${themeToHSL(theme)})`,
                      transformOrigin: 'right',
                    }}
                  />
                  <motion.div
                    className="w-2 h-2 rotate-45"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={showContent ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    style={{
                      background: themeToHSL(theme),
                      boxShadow: `0 0 15px ${themeToHSL(theme, 0.8)}`,
                    }}
                  />
                  <motion.div
                    className="h-[1px] w-16 md:w-24"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={showContent ? { scaleX: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                      background: `linear-gradient(90deg, ${themeToHSL(theme)}, transparent)`,
                      transformOrigin: 'left',
                    }}
                  />
                </motion.div>

                {/* 章節標題 - 電影級文字動畫 + 動態主題色 */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={showContent ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* 標題背後光暈 */}
                  <motion.div
                    className="absolute inset-0 -z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={showContent ? { 
                      opacity: [0, 0.8, 0.5], 
                      scale: [0.9, 1.1, 1] 
                    } : {}}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    style={{
                      background: `radial-gradient(ellipse at center, ${themeToHSL(theme, 0.2)} 0%, transparent 60%)`,
                      filter: 'blur(20px)',
                    }}
                  />
                  
                  <motion.h1
                    className="font-serif-tc text-3xl md:text-5xl lg:text-6xl tracking-[0.25em] relative"
                    initial={{ opacity: 0, y: 30, letterSpacing: '0.4em' }}
                    animate={showContent ? { 
                      opacity: 1, 
                      y: 0, 
                      letterSpacing: '0.25em',
                    } : {}}
                    transition={{ 
                      duration: 1, 
                      delay: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    style={{
                      color: themeToGlow(theme, 1),
                      textShadow: `
                        0 0 60px ${themeToHSL(theme, 0.6)},
                        0 0 100px ${themeToHSL(theme, 0.3)},
                        0 4px 30px hsl(0 0% 0% / 0.9)
                      `,
                    }}
                  >
                    {chapterTitle}
                  </motion.h1>

                  {/* 標題下方光線擴散 */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 h-[1px]"
                    initial={{ width: 0, opacity: 0 }}
                    animate={showContent ? { width: '120%', opacity: [0, 1, 0.6] } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, ${themeToHSL(theme, 0.6)} 50%, transparent 100%)`,
                    }}
                  />
                </motion.div>

                {/* 下方裝飾光線 - 動態主題色 */}
                <motion.div
                  className="flex items-center justify-center gap-4 mt-12"
                  initial={{ opacity: 0 }}
                  animate={showContent ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div
                    className="h-[1px] w-12 md:w-20"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={showContent ? { scaleX: 1, opacity: 0.6 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    style={{
                      background: `linear-gradient(90deg, transparent, ${themeToHSL(theme, 0.6)})`,
                      transformOrigin: 'right',
                    }}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 rotate-45"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={showContent ? { scale: 1, opacity: 0.6 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    style={{
                      background: themeToHSL(theme, 0.8),
                      boxShadow: `0 0 10px ${themeToHSL(theme, 0.5)}`,
                    }}
                  />
                  <motion.div
                    className="h-[1px] w-12 md:w-20"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={showContent ? { scaleX: 1, opacity: 0.6 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    style={{
                      background: `linear-gradient(90deg, ${themeToHSL(theme, 0.6)}, transparent)`,
                      transformOrigin: 'left',
                    }}
                  />
                </motion.div>
              </div>

              {/* 浮動粒子效果 - 使用動態主題色 */}
              {showContent && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {/* 主要上升粒子 */}
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute rounded-full"
                      initial={{
                        x: `${10 + Math.random() * 80}%`,
                        y: '120%',
                        opacity: 0,
                        scale: 0.5 + Math.random() * 0.5,
                      }}
                      animate={{
                        y: '-20%',
                        opacity: [0, 0.8, 0.8, 0],
                        scale: [0.5 + Math.random() * 0.5, 1, 0.8],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        delay: i * 0.1,
                        ease: 'linear',
                      }}
                      style={{
                        width: 2 + Math.random() * 3,
                        height: 2 + Math.random() * 3,
                        background: `hsl(${theme.hue} ${theme.saturation - 10 + Math.random() * 20}% ${theme.lightness + Math.random() * 15}%)`,
                        boxShadow: `0 0 ${6 + Math.random() * 8}px ${themeToHSL(theme, 0.6)}`,
                      }}
                    />
                  ))}

                  {/* 環繞光點 */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i / 8) * Math.PI * 2;
                    const radius = 180 + Math.random() * 60;
                    return (
                      <motion.div
                        key={`orbit-${i}`}
                        className="absolute left-1/2 top-1/2 w-1 h-1 rounded-full"
                        initial={{
                          x: Math.cos(angle) * radius * 0.5,
                          y: Math.sin(angle) * radius * 0.5,
                          opacity: 0,
                        }}
                        animate={{
                          x: Math.cos(angle) * radius,
                          y: Math.sin(angle) * radius,
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          delay: 0.5 + i * 0.15,
                          ease: 'easeOut',
                        }}
                        style={{
                          background: themeToGlow(theme),
                          boxShadow: `0 0 12px ${themeToHSL(theme, 0.8)}`,
                        }}
                      />
                    );
                  })}
                </div>
              )}

              {/* 底部漸層淡出 */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                  background: 'linear-gradient(to top, hsl(222 50% 3%) 0%, transparent 100%)',
                }}
              />
            </>
          )}

          {/* 普通轉場的視覺效果 */}
          {transitionType !== 'chapter' && transitionType !== 'cinematic' && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 1.5 }}
              style={{
                background: 'radial-gradient(ellipse at center, hsl(38 80% 55% / 0.2) 0%, transparent 60%)',
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SceneTransition;
