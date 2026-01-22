import { useState, useEffect, useCallback, useRef } from 'react';

interface TypewriterOptions {
  speed?: number;       // 基礎打字速度 (毫秒)
  punctuationDelay?: number; // 遇到標點符號時的額外停頓
  startDelay?: number;  // 開始前的延遲
  onComplete?: () => void; // 打字完成後的回調
}

export const useTypewriter = (text: string, options: TypewriterOptions = {}) => {
  const { 
    speed = 50, 
    punctuationDelay = 400, // 預設遇到逗號句號停頓 400ms
    startDelay = 0,
    onComplete 
  } = options;

  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  // 使用 ref 來處理閉包問題，確保計時器準確
  const indexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startTyping = useCallback(() => {
    setDisplayedText("");
    indexRef.current = 0;
    setIsTyping(true);
    setIsComplete(false);

    // 延遲開始
    timeoutRef.current = setTimeout(() => {
      typeNextChar();
    }, startDelay);
  }, [text, startDelay]);

  const typeNextChar = () => {
    const currentIndex = indexRef.current;
    
    if (currentIndex >= text.length) {
      setIsTyping(false);
      setIsComplete(true);
      if (onComplete) onComplete();
      return;
    }

    const char = text.charAt(currentIndex);
    setDisplayedText((prev) => prev + char);
    indexRef.current += 1;

    // 判斷是否為標點符號，給予不同節奏 (東方禪意節奏)
    let currentSpeed = speed;
    if (["，", "。", "！", "？", "、", "…"].includes(char)) {
      currentSpeed += punctuationDelay;
    }

    timeoutRef.current = setTimeout(typeNextChar, currentSpeed);
  };

  // 立即顯示全部（玩家點擊跳過時使用）
  const skipTyping = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDisplayedText(text);
    setIsTyping(false);
    setIsComplete(true);
    if (onComplete) onComplete();
  }, [text, onComplete]);

  useEffect(() => {
    startTyping();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, startTyping]);

  return { displayedText, isTyping, isComplete, skipTyping };
};
