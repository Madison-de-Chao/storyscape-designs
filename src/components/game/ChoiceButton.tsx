import { motion } from 'framer-motion';
import { Choice } from '@/stores/gameStore';
import { useSFX } from '@/hooks/useAudio';
import { useState } from 'react';

interface ChoiceButtonProps {
  choice: Choice;
  index: number;
  onClick: () => void;
}

const ChoiceButton = ({ choice, index, onClick }: ChoiceButtonProps) => {
  const { playSFX } = useSFX();
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    playSFX('choice');
    setIsPressed(true);
    // 延遲執行，讓使用者看到選擇的視覺回饋
    setTimeout(() => {
      onClick();
    }, 400);
  };

  const handleHover = () => {
    playSFX('hover');
  };

  return (
    <motion.button
      className={`
        relative w-full text-left px-6 py-4 overflow-hidden
        rounded-xl border-2
        font-sans-tc text-base md:text-lg
        transition-all duration-300
        ${isPressed 
          ? 'border-primary bg-primary/30 text-primary-foreground shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)]' 
          : 'border-border/50 bg-background/60 text-foreground/90 hover:text-foreground hover:border-primary/50 hover:bg-primary/10'
        }
      `}
      initial={{ opacity: 0, x: -30, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        scale: isPressed ? 1.02 : 1,
      }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.12,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 0 20px rgba(var(--primary-rgb), 0.3)",
      }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      onMouseEnter={handleHover}
      disabled={isPressed}
    >
      {/* 背景光暈效果 */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
        initial={{ x: "-100%", opacity: 0 }}
        whileHover={{ x: "100%", opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      {/* 選中時的脈衝效果 */}
      {isPressed && (
        <motion.div
          className="absolute inset-0 bg-primary/40"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      )}
      
      {/* 左側裝飾線 */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        whileHover={{ scaleY: 1, opacity: 1 }}
        animate={isPressed ? { scaleY: 1, opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      />

      <div className="relative flex items-center gap-4">
        {/* 序號圓圈 */}
        <motion.span 
          className={`
            flex items-center justify-center
            w-8 h-8 rounded-full text-sm font-serif-tc
            transition-all duration-300
            ${isPressed 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-primary/20 text-primary/80'
            }
          `}
          whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.4)" }}
        >
          {index + 1}
        </motion.span>
        
        {/* 選項文字 */}
        <motion.span 
          className="flex-1"
          animate={isPressed ? { x: 5 } : { x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {choice.text}
        </motion.span>
        
        {/* 右側箭頭指示 */}
        <motion.span
          className="text-primary/60"
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          animate={isPressed ? { opacity: 1, x: 5 } : {}}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
      </div>
    </motion.button>
  );
};

export default ChoiceButton;
