import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  onComplete?: () => void;
}

const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`";
const chineseGlitchChars = "亂碼錯誤崩潰消失虛無空白混沌迷失";

export const GlitchText = ({ 
  text, 
  className = "",
  intensity = 'medium',
  onComplete
}: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(true);

  const config = useMemo(() => ({
    low: { speed: 50, iterations: 2 },
    medium: { speed: 30, iterations: 3 },
    high: { speed: 20, iterations: 5 }
  }), []);

  useEffect(() => {
    let iteration = 0;
    const maxIterations = text.length * config[intensity].iterations;
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            // 已解碼的字符
            if (index < iteration / config[intensity].iterations) {
              return text[index];
            }
            // 空格保持不變
            if (char === " " || char === "\n") return char;
            // 中文使用中文亂碼
            const isChinese = /[\u4e00-\u9fa5]/.test(char);
            const chars = isChinese ? chineseGlitchChars : glitchChars;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsGlitching(false);
        onComplete?.();
      }
      iteration += 1;
    }, config[intensity].speed);

    return () => clearInterval(interval);
  }, [text, intensity, config, onComplete]);

  return (
    <motion.span 
      className={`relative inline-block ${className}`}
      animate={isGlitching ? {
        x: [0, -2, 2, -1, 1, 0],
        filter: [
          'hue-rotate(0deg)',
          'hue-rotate(90deg)',
          'hue-rotate(-90deg)',
          'hue-rotate(0deg)'
        ]
      } : {}}
      transition={{
        duration: 0.25,
        repeat: isGlitching ? Infinity : 0,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      {/* RGB 分離效果 */}
      {isGlitching && (
        <>
          <span 
            className="absolute inset-0 text-red-500/50 pointer-events-none"
            style={{ transform: 'translateX(-2px)' }}
          >
            {displayText}
          </span>
          <span 
            className="absolute inset-0 text-cyan-500/50 pointer-events-none"
            style={{ transform: 'translateX(2px)' }}
          >
            {displayText}
          </span>
        </>
      )}
      
      {/* 主文字 */}
      <span className={isGlitching ? 'text-destructive' : ''}>
        {displayText}
      </span>

      {/* 掃描線效果 */}
      {isGlitching && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
          }}
          animate={{ y: [0, 10] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      )}
    </motion.span>
  );
};

export default GlitchText;
