import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/stores/gameStore';

interface GameEndOverlayProps {
  isVisible: boolean;
  onComplete: () => void;
}

/**
 * 遊戲結束覆蓋層
 * 當遊戲到達 postscript-end 節點時，畫面漸暗並顯示點擊提示
 */
const GameEndOverlay = ({ isVisible, onComplete }: GameEndOverlayProps) => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // 延遲顯示提示文字
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setShowPrompt(false);
    }
  }, [isVisible]);

  const handleClick = () => {
    if (showPrompt) {
      onComplete();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          onClick={handleClick}
        >
          {/* 漸暗背景 */}
          <motion.div
            className="absolute inset-0 bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ duration: 2 }}
          />

          {/* 中央提示文字 */}
          <AnimatePresence>
            {showPrompt && (
              <motion.div
                className="relative z-10 text-center px-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                {/* 裝飾線 */}
                <motion.div
                  className="w-24 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />

                {/* 主文字 */}
                <motion.p
                  className="text-lg sm:text-xl text-muted-foreground font-serif-tc tracking-widest mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  旅程告一段落
                </motion.p>

                {/* 點擊提示 */}
                <motion.p
                  className="text-sm text-muted-foreground/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.6, 1] }}
                  transition={{ 
                    duration: 2, 
                    delay: 1,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                >
                  點擊畫面返回首頁
                </motion.p>

                {/* 裝飾線 */}
                <motion.div
                  className="w-24 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GameEndOverlay;
