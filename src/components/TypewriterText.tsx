import React from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { cn } from "@/lib/utils"; // 假設您有使用 shadcn 的 cn 工具

interface TypewriterTextProps {
  text: string;
  className?: string;
  cursorColor?: string; // 允許傳入 'bg-primary' 或 'bg-accent'
  speed?: number;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  className, 
  cursorColor = "bg-primary", // 預設為您的琥珀金主色
  speed = 50,
  onComplete
}) => {
  const { displayedText, isTyping, skipTyping } = useTypewriter(text, { 
    speed, 
    onComplete 
  });

  return (
    <div 
      className={cn("relative inline-block cursor-pointer", className)}
      onClick={skipTyping} // 點擊文字可以瞬間完成（優化使用者體驗）
      role="button"
      tabIndex={0}
      aria-label="點擊顯示全部文字"
    >
      <span className="whitespace-pre-wrap">{displayedText}</span>
      
      {/* 模擬游標閃爍效果 */}
      <span 
        className={cn(
          "inline-block w-[3px] h-[1em] align-middle ml-1 animate-pulse",
          cursorColor,
          !isTyping && "opacity-0" // 打完字後隱藏游標，或者您可以選擇保留 blink
        )} 
      />
    </div>
  );
};

export default TypewriterText;
