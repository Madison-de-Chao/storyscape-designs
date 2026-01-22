import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroSequenceProps {
  lines: string[];
  onComplete: () => void;
  lineDelay?: number;
}

export const IntroSequence = ({ 
  lines, 
  onComplete, 
  lineDelay = 2500 
}: IntroSequenceProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < lines.length) {
      const timer = setTimeout(() => setCurrentIndex(i => i + 1), lineDelay);
      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      const completeTimer = setTimeout(onComplete, 1500);
      return () => clearTimeout(completeTimer);
    }
  }, [currentIndex, lines.length, lineDelay, onComplete, isComplete]);

  // 點擊任意處跳過
  const handleSkip = () => {
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={handleSkip}
        style={{ 
          background: 'linear-gradient(180deg, hsl(222 50% 2%) 0%, hsl(222 47% 6%) 100%)' 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* 背景微光塵埃 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* 中央光暈 */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* 直排文字容器 */}
        <div 
          className="relative h-[60vh] flex flex-row-reverse gap-6 md:gap-10 text-xl md:text-3xl lg:text-4xl font-serif-tc tracking-[0.2em] leading-[2.5]"
          style={{ writingMode: 'vertical-rl' }}
        >
          {lines.slice(0, currentIndex + 1).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, filter: "blur(12px)", x: 30 }}
              animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
              transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* 裝飾線 */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              <span className="pl-4 text-foreground/90 zen-text">
                {line.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: charIndex * 0.08,
                      ease: "easeOut"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.div>
          ))}
        </div>

        {/* 底部漸層遮罩 */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, hsl(222 50% 2%) 0%, transparent 100%)'
          }}
        />

        {/* 點擊跳過提示 */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground/50 font-sans-tc pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          點擊任意處繼續
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroSequence;
