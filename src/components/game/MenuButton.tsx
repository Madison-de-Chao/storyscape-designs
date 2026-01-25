import { useState, ReactNode, startTransition } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MenuButtonProps {
  onClick: () => void;
  icon: ReactNode;
  label: string;
  variant?: 'default' | 'destructive';
  className?: string;
}

const MenuButton = ({ onClick, icon, label, variant = 'default', className }: MenuButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    // 讓動畫完成後再執行操作
    setTimeout(() => {
      startTransition(() => {
        onClick();
      });
    }, 150);
  };

  return (
    <motion.button
      onClick={handleClick}
      onAnimationComplete={() => setIsPressed(false)}
      whileTap={{ scale: 0.97 }}
      animate={isPressed ? {
        backgroundColor: variant === 'destructive' 
          ? 'hsl(var(--destructive) / 0.2)' 
          : 'hsl(var(--primary) / 0.15)',
      } : {}}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors border-t border-border/50",
        variant === 'destructive' 
          ? "text-destructive hover:bg-destructive/10" 
          : "text-foreground hover:bg-muted/50",
        className
      )}
    >
      {/* 圖標容器 - 點擊時有縮放動畫 */}
      <motion.span
        animate={isPressed ? { scale: 1.2, rotate: variant === 'destructive' ? -15 : 0 } : { scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        className="flex-shrink-0"
      >
        {icon}
      </motion.span>
      
      {/* 文字 - 點擊時有輕微位移 */}
      <motion.span
        animate={isPressed ? { x: 4, opacity: 0.8 } : { x: 0, opacity: 1 }}
        transition={{ duration: 0.15 }}
      >
        {label}
      </motion.span>
      
      {/* 點擊波紋效果 */}
      {isPressed && (
        <motion.span
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={cn(
            "absolute inset-0 rounded-sm",
            variant === 'destructive' 
              ? "bg-destructive/20" 
              : "bg-primary/10"
          )}
          style={{ pointerEvents: 'none' }}
        />
      )}
    </motion.button>
  );
};

export default MenuButton;
