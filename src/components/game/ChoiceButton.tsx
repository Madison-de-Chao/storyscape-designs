import { motion, AnimatePresence } from 'framer-motion';
import { Choice } from '@/stores/gameStore';
import { useSFX } from '@/hooks/useAudio';
import { useHapticFeedback } from '@/hooks/useHapticFeedback';
import { useState } from 'react';

interface ChoiceButtonProps {
  choice: Choice;
  index: number;
  onClick: (arcChange: number, shadowChange: number) => void;
}

const ChoiceButton = ({ choice, index, onClick }: ChoiceButtonProps) => {
  const { playSFX } = useSFX();
  const { triggerHaptic } = useHapticFeedback();
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    playSFX('choice');
    triggerHaptic('medium'); // 選擇選項時觸發中等振動
    setIsPressed(true);
    setTimeout(() => {
      onClick(choice.arcChange, choice.shadowChange);
    }, 400);
  };

  const handleHover = () => {
    playSFX('hover');
    triggerHaptic('light'); // 懸停時輕微振動
    setIsHovered(true);
  };

  // 不再顯示分數預覽 - 月明值系統對玩家隱藏

  return (
    <motion.button
      className={`
        relative w-full text-left px-5 py-5 sm:px-6 sm:py-5 overflow-hidden
        rounded-xl sm:rounded-2xl border sm:border-2
        font-sans-tc text-base sm:text-base md:text-lg
        backdrop-blur-md
        transition-colors duration-200
        touch-manipulation select-none
        will-change-transform
        min-h-[60px] sm:min-h-[auto]
        ${isPressed 
          ? 'border-primary bg-primary/40 text-primary-foreground' 
          : 'border-border/40 bg-background/60 text-foreground/90 hover:text-foreground hover:border-primary/60 active:bg-primary/20'
        }
      `}
      style={{
        boxShadow: isPressed 
          ? '0 0 40px rgba(var(--primary-rgb), 0.6), inset 0 0 30px rgba(var(--primary-rgb), 0.2)' 
          : isHovered 
            ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(var(--primary-rgb), 0.2)' 
            : '0 4px 16px rgba(0, 0, 0, 0.3)',
        WebkitTapHighlightColor: 'transparent',
        transform: 'translateZ(0)', // GPU 加速
      }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        scale: isPressed ? 1.02 : 1,
      }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1], // 更流暢的緩動
      }}
      whileHover={{ 
        scale: 1.015,
        y: -1,
        transition: { duration: 0.15 }
      }}
      whileTap={{ 
        scale: 0.97,
        transition: { duration: 0.1 }
      }}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => { setIsHovered(true); playSFX('hover'); }}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 150)}
      disabled={isPressed}
    >
      {/* 頂部發光邊線 */}
      <motion.div
        className="absolute top-0 left-4 right-4 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.6), transparent)',
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isHovered || isPressed ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* 懸停時的光暈掃描效果 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, hsl(var(--primary) / 0.15) 50%, transparent 100%)',
        }}
        initial={{ x: '-100%', opacity: 0 }}
        animate={isHovered && !isPressed ? { x: '100%', opacity: 1 } : { x: '-100%', opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* 懸停時的邊框光暈 */}
      <AnimatePresence>
        {isHovered && !isPressed && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              border: '2px solid transparent',
              background: 'linear-gradient(135deg, hsl(var(--primary) / 0.3), transparent, hsl(var(--primary) / 0.2)) border-box',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
      
      {/* 選中時的脈衝波紋效果 */}
      <AnimatePresence>
        {isPressed && (
          <>
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{ background: 'hsl(var(--primary) / 0.5)' }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{ background: 'hsl(var(--primary) / 0.3)' }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            />
          </>
        )}
      </AnimatePresence>
      
      {/* 左側裝飾光條 */}
      <motion.div
        className="absolute left-0 top-2 bottom-2 w-1 rounded-full"
        style={{
          background: 'linear-gradient(180deg, transparent, hsl(var(--primary)), transparent)',
        }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={isHovered || isPressed ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* 底部發光線 */}
      <motion.div
        className="absolute bottom-0 left-4 right-4 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), transparent)',
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isPressed ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative flex items-center gap-3 sm:gap-4 z-10">
        {/* 序號圓圈 - 手機縮小 */}
        <motion.span 
          className={`
            flex items-center justify-center
            w-7 h-7 sm:w-9 sm:h-9 rounded-full text-xs sm:text-sm font-serif-tc font-bold
            transition-all duration-300 shrink-0
            ${isPressed 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-primary/20 text-primary/90 border border-primary/30'
            }
          `}
          style={{
            boxShadow: isPressed 
              ? '0 0 20px hsl(var(--primary) / 0.6)' 
              : isHovered 
                ? '0 0 12px hsl(var(--primary) / 0.4)' 
                : 'none',
          }}
          animate={isHovered || isPressed ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {index + 1}
        </motion.span>
        
        {/* 選項文字 - 手機行高優化 */}
        <motion.span 
          className="flex-1 leading-snug sm:leading-relaxed"
          style={{
            textShadow: isPressed 
              ? '0 0 20px hsl(var(--primary) / 0.8)' 
              : '0 2px 4px rgba(0, 0, 0, 0.5)',
          }}
          animate={isPressed ? { x: 4 } : isHovered ? { x: 2 } : { x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {choice.text}
        </motion.span>
        
        {/* 右側箭頭指示 - 增強動畫 */}
        <motion.span
          className="text-lg font-bold"
          style={{
            color: isPressed ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.5)',
            textShadow: isPressed ? '0 0 10px hsl(var(--primary) / 0.8)' : 'none',
          }}
          initial={{ opacity: 0, x: -15 }}
          animate={isHovered || isPressed ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
          transition={{ duration: 0.25 }}
        >
          →
        </motion.span>
      </div>

      {/* 懸停時的簡化粒子效果 - 只在桌面顯示 */}
      <AnimatePresence>
        {isHovered && !isPressed && (
          <motion.div
            className="absolute inset-0 pointer-events-none hidden sm:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/60"
              style={{ left: '30%', bottom: '15%' }}
              animate={{ y: [-5, -15], opacity: [0, 0.8, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.3 }}
            />
            <motion.div
              className="absolute w-1 h-1 rounded-full bg-primary/50"
              style={{ left: '60%', bottom: '15%' }}
              animate={{ y: [-5, -18], opacity: [0, 0.6, 0] }}
              transition={{ duration: 0.9, delay: 0.2, repeat: Infinity, repeatDelay: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ChoiceButton;
