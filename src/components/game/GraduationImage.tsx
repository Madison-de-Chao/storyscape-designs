import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ImageIcon } from 'lucide-react';

interface GraduationImageProps {
  src: string;
  title: string;
  theme: string;
}

const GraduationImage = ({ src, title, theme }: GraduationImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // 預載入圖片
  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoaded(true);
      // 延遲顯示內容，確保過渡平滑
      setTimeout(() => setShowContent(true), 100);
    };
    
    img.onerror = () => {
      setHasError(true);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  if (hasError) {
    return (
      <div className="mt-4 p-6 rounded-xl border border-border/30 bg-surface/50 text-center">
        <ImageIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground/50" />
        <p className="text-xs text-muted-foreground">圖片載入失敗</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.4, type: 'spring' }}
      className="mt-4 relative group"
    >
      {/* 畢業圖外框光暈 */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* 角落裝飾 - 延遲顯示 */}
      <AnimatePresence>
        {showContent && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary/60 rounded-tl-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary/60 rounded-tr-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary/60 rounded-bl-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary/60 rounded-br-lg"
            />
          </>
        )}
      </AnimatePresence>
      
      {/* 畢業標籤 */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
          >
            <div className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-primary via-accent to-primary text-background text-xs font-bold rounded-full shadow-lg">
              <Sparkles className="w-3 h-3" />
              <span>畢業圖</span>
              <Sparkles className="w-3 h-3" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 圖片容器 */}
      <div className="relative overflow-hidden rounded-xl border-2 border-primary/30 bg-surface-dark aspect-[16/9]">
        {/* 載入骨架屏 */}
        <AnimatePresence>
          {!isLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-br from-surface via-surface-dark to-surface"
            >
              {/* 骨架動畫 */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                />
              </div>
              
              {/* 載入圖示 */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 1, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary"
                />
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-xs text-muted-foreground"
                >
                  載入畢業圖中...
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 發光效果層 - 只在載入後顯示 */}
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10 pointer-events-none z-10"
          />
        )}
        
        {/* 掃描光效 - 只在載入後顯示 */}
        {showContent && (
          <motion.div
            initial={{ left: '-100%' }}
            animate={{
              left: ['-100%', '200%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-10"
          />
        )}
        
        {/* 畢業圖片 */}
        <motion.img
          src={src}
          alt={`${title} 畢業圖`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 1.05,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={{ scale: 1.02 }}
          className="w-full h-full object-cover relative z-0"
        />
        
        {/* 底部漸層文字區 */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent p-3 pt-8 z-20"
            >
              <p className="text-xs text-center text-primary/80 font-serif-tc">
                ✦ {theme} ✦
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* 粒子效果 - 只在載入後顯示 */}
      {showContent && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/60"
              initial={{ opacity: 0 }}
              animate={{
                y: [100, -20],
                x: [0, (i % 2 === 0 ? 10 : -10)],
                opacity: [0, 1, 0],
                scale: [0, 1, 0.5],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: 0.5 + i * 0.4,
                ease: 'easeOut',
              }}
              style={{
                left: `${15 + i * 14}%`,
                bottom: 0,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default GraduationImage;
