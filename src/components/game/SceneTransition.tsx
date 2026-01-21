import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SceneTransitionProps {
  isTransitioning: boolean;
  transitionType?: 'fade' | 'slide' | 'blur' | 'cinematic' | 'chapter';
  chapterTitle?: string;
  onTransitionComplete?: () => void;
}

/**
 * 全屏場景轉場組件
 * 用於章節切換、重大場景轉換時的視覺過渡
 */
const SceneTransition = ({
  isTransitioning,
  transitionType = 'fade',
  chapterTitle,
  onTransitionComplete,
}: SceneTransitionProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isTransitioning && transitionType === 'chapter') {
      const timer = setTimeout(() => setShowContent(true), 400);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isTransitioning, transitionType]);

  useEffect(() => {
    if (isTransitioning && onTransitionComplete) {
      const duration = transitionType === 'chapter' ? 3000 : 1500;
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
          className="fixed inset-0 z-[100] flex items-center justify-center"
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
              : 'linear-gradient(180deg, hsl(222 47% 6%) 0%, hsl(222 47% 3%) 100%)',
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

          {/* 章節轉場標題 */}
          {transitionType === 'chapter' && chapterTitle && (
            <div className="text-center">
              {/* 裝飾線 - 上 */}
              <motion.div
                className="w-32 h-px mx-auto mb-8"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={showContent ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  background: 'linear-gradient(90deg, transparent, hsl(38 80% 55%), transparent)',
                }}
              />

              {/* 章節標題 */}
              <motion.h1
                className="font-serif-tc text-3xl md:text-4xl lg:text-5xl tracking-[0.2em]"
                initial={{ opacity: 0, y: 20 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  color: 'hsl(38 80% 70%)',
                  textShadow: '0 0 40px hsl(38 80% 55% / 0.5), 0 4px 20px hsl(0 0% 0% / 0.8)',
                }}
              >
                {chapterTitle}
              </motion.h1>

              {/* 裝飾線 - 下 */}
              <motion.div
                className="w-32 h-px mx-auto mt-8"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={showContent ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{
                  background: 'linear-gradient(90deg, transparent, hsl(38 80% 55%), transparent)',
                }}
              />

              {/* 浮動粒子效果 */}
              {showContent && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      initial={{
                        x: `${Math.random() * 100}%`,
                        y: '110%',
                        opacity: 0,
                      }}
                      animate={{
                        y: '-10%',
                        opacity: [0, 0.6, 0.6, 0],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        delay: i * 0.2,
                        ease: 'linear',
                      }}
                      style={{
                        background: 'hsl(38 80% 60%)',
                        boxShadow: '0 0 8px hsl(38 80% 55% / 0.6)',
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
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
