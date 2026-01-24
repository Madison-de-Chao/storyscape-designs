import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, FastForward, Play, Pause } from 'lucide-react';
import { useGameStore } from '@/stores/gameStore';
import { getNodeById } from '@/data/prologueStory';
import { getYiPart2NodeById } from '@/data/yiPart2Story';
import { getYi1NodeById } from '@/data/yi1';
import { DialogueNode } from '@/stores/gameStore';
import { useSFX } from '@/hooks/useAudio';
import { getSpeakerEmotionSFX, shouldPlayEmotionSFX, type SpeakerType } from '@/utils/speakerEmotionSFX';
import ChoiceButton from './ChoiceButton';

// 解析文字中的強調標記 **text** 和角色專屬效果
const parseDialogueText = (text: string, speaker: string) => {
  // 匹配 **強調文字** 的正則表達式
  const emphasisRegex = /\*\*(.+?)\*\*/g;
  const parts: { text: string; isEmphasis: boolean }[] = [];
  let lastIndex = 0;
  let match;

  while ((match = emphasisRegex.exec(text)) !== null) {
    // 添加匹配之前的普通文字
    if (match.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, match.index), isEmphasis: false });
    }
    // 添加強調文字
    parts.push({ text: match[1], isEmphasis: true });
    lastIndex = match.index + match[0].length;
  }
  
  // 添加剩餘的普通文字
  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), isEmphasis: false });
  }

  return parts.length > 0 ? parts : [{ text, isEmphasis: false }];
};

interface DialogueBoxProps {
  isHidden?: boolean;
  onToggleHide?: () => void;
  onScoreChange?: (arcChange: number, shadowChange: number) => void;
}

const DialogueBox = ({ isHidden = false, onToggleHide, onScoreChange }: DialogueBoxProps) => {
  const { getCurrentProgress, advanceToNextNode, makeChoice, currentPart, markNodeAsRead } = useGameStore();
  const progress = getCurrentProgress();
  const currentNodeId = progress.currentNodeId;
  const { playSFX, playEmotionSFX } = useSFX();
  
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentNode, setCurrentNode] = useState<DialogueNode | null>(null);
  const [isAutoForward, setIsAutoForward] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const autoForwardRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const node = currentPart === 'yi' 
      ? (getYi1NodeById(currentNodeId) || getNodeById(currentNodeId))
      : getYiPart2NodeById(currentNodeId);
    if (node) {
      setCurrentNode(node);
      setDisplayedText('');
      setIsTyping(true);
      markNodeAsRead(currentNodeId);

      // 根據說話者和節點效果播放情緒音效
      if (shouldPlayEmotionSFX()) {
        const emotionSFX = getSpeakerEmotionSFX(
          node.speaker as SpeakerType,
          node.effect,
          node.emotionSFX
        );
        if (emotionSFX) {
          // 延遲播放，讓對話開始後才播放音效
          setTimeout(() => {
            playEmotionSFX(emotionSFX);
          }, 500);
        }
      }
    }
  }, [currentNodeId, currentPart, markNodeAsRead, playEmotionSFX]);

  // 打字機效果
  useEffect(() => {
    if (!currentNode) return;

    const text = currentNode.text;
    let index = 0;
    setDisplayedText('');
    setIsTyping(true);

    const typingSpeed = isAutoForward ? 10 : 50;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentNode, isAutoForward]);

  // 快轉自動前進
  useEffect(() => {
    if (isAutoForward && !isTyping && currentNode?.nextNodeId && !currentNode.choices) {
      autoForwardRef.current = setTimeout(() => {
        playSFX('dialogue_advance');
        advanceToNextNode(currentNode.nextNodeId!);
      }, 300);
    }

    return () => {
      if (autoForwardRef.current) {
        clearTimeout(autoForwardRef.current);
      }
    };
  }, [isAutoForward, isTyping, currentNode, advanceToNextNode, playSFX]);

  // 遇到選項時自動停止快轉和自動播放
  useEffect(() => {
    if (currentNode?.choices) {
      setIsAutoForward(false);
      setIsAutoPlay(false);
    }
  }, [currentNode?.choices]);

  // 自動播放模式
  useEffect(() => {
    if (isAutoPlay && !isAutoForward && !isTyping && currentNode?.nextNodeId && !currentNode.choices) {
      const textLength = currentNode.text.length;
      const delay = Math.min(Math.max(textLength * 100, 2000), 5000);
      
      autoPlayRef.current = setTimeout(() => {
        playSFX('dialogue_advance');
        advanceToNextNode(currentNode.nextNodeId!);
      }, delay);
    }

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [isAutoPlay, isAutoForward, isTyping, currentNode, advanceToNextNode, playSFX]);

  const toggleAutoForward = useCallback(() => {
    setIsAutoForward(prev => {
      if (!prev) setIsAutoPlay(false);
      return !prev;
    });
    playSFX('click');
  }, [playSFX]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlay(prev => {
      if (!prev) setIsAutoForward(false);
      return !prev;
    });
    playSFX('click');
  }, [playSFX]);

  const handleClick = useCallback(() => {
    if (!currentNode) return;

    if (isTyping) {
      setDisplayedText(currentNode.text);
      setIsTyping(false);
    } else if (currentNode.nextNodeId && !currentNode.choices) {
      playSFX('dialogue_advance');
      advanceToNextNode(currentNode.nextNodeId);
    }
  }, [currentNode, isTyping, advanceToNextNode, playSFX]);

  // Parse displayed text - must be before early return to follow hooks rules
  const parsedText = useMemo(() => {
    if (!displayedText || !currentNode) return [];
    return parseDialogueText(displayedText, currentNode.speaker);
  }, [displayedText, currentNode]);

  if (!currentNode) return null;

  const getSpeakerColor = (speaker: string) => {
    switch (speaker) {
      case 'yi':
        return 'text-accent';
      case 'protagonist':
        return currentPart === 'yi' ? 'text-primary' : 'text-accent';
      case 'mentor':
        return 'text-zen-gold';
      default:
        return 'text-muted-foreground';
    }
  };

  const getSpeakerName = (node: DialogueNode) => {
    if (node.speakerName) return node.speakerName;
    switch (node.speaker) {
      case 'yi':
        return '???';
      case 'protagonist':
        return currentPart === 'yi' ? '她' : '你';
      case 'mentor':
        return '歸者';
      case 'wenxin':
        return '問心';
      case 'wendu':
        return '問渡';
      case 'wangyangming':
        return '王陽明';
      case 'sushi':
        return '蘇軾';
      case 'simaqian':
        return '司馬遷';
      case 'wuzetian':
        return '武則天';
      case 'libai':
        return '李白';
      case 'mandela':
        return '曼德拉';
      case 'caesar':
        return '凱撒';
      case 'cleopatra':
        return '埃及豔后';
      case 'lincoln':
        return '林肯';
      case 'jobs':
        return '賈伯斯';
      default:
        return '';
    }
  };

  const getEffectClass = () => {
    switch (currentNode.effect) {
      case 'glitch':
        return 'glitch';
      case 'glow':
        return 'text-glow';
      default:
        return '';
    }
  };

  // 根據說話者獲取專屬文字效果樣式
  const getSpeakerTextStyle = () => {
    switch (currentNode.speaker) {
      case 'yi':
        return {
          color: 'hsl(350 55% 72%)',
          textShadow: '0 0 8px hsl(350 60% 50% / 0.6), 0 1px 3px hsl(0 0% 0% / 0.9)',
          fontStyle: 'italic' as const,
        };
      case 'wenxin':
        return {
          color: 'hsl(38 85% 75%)',
          textShadow: '0 0 15px hsl(38 80% 55% / 0.5), 0 0 30px hsl(38 80% 55% / 0.3), 0 1px 3px hsl(0 0% 0% / 0.9)',
        };
      case 'wendu':
        return {
          color: 'hsl(210 60% 75%)',
          textShadow: '0 0 12px hsl(210 70% 60% / 0.4), 0 1px 3px hsl(0 0% 0% / 0.9)',
        };
      case 'wangyangming':
      case 'sushi':
      case 'simaqian':
      case 'libai':
        return {
          color: 'hsl(45 50% 85%)',
          textShadow: '0 0 10px hsl(45 60% 60% / 0.3), 0 1px 3px hsl(0 0% 0% / 0.9)',
        };
      case 'wuzetian':
      case 'cleopatra':
        return {
          color: 'hsl(350 60% 78%)',
          textShadow: '0 0 12px hsl(350 70% 50% / 0.4), 0 1px 3px hsl(0 0% 0% / 0.9)',
        };
      case 'mandela':
      case 'lincoln':
        return {
          color: 'hsl(180 40% 80%)',
          textShadow: '0 0 10px hsl(180 50% 60% / 0.3), 0 1px 3px hsl(0 0% 0% / 0.9)',
        };
      case 'narrator':
        return {
          color: 'hsl(220 20% 72%)',
          textShadow: '0 1px 3px hsl(0 0% 0% / 0.9)',
        };
      default:
        return {
          color: 'hsl(45 35% 92%)',
          textShadow: '0 1px 3px hsl(0 0% 0% / 0.9), 0 0 1px hsl(0 0% 0% / 0.6)',
        };
    }
  };

  // 強調文字的樣式
  const getEmphasisStyle = () => {
    switch (currentNode.speaker) {
      case 'yi':
        return {
          color: 'hsl(350 70% 65%)',
          fontWeight: 700,
          textShadow: '0 0 15px hsl(350 80% 50% / 0.8), 0 0 30px hsl(350 80% 50% / 0.4)',
        };
      case 'wenxin':
        return {
          color: 'hsl(38 90% 65%)',
          fontWeight: 700,
          textShadow: '0 0 20px hsl(38 90% 55% / 0.8), 0 0 40px hsl(38 90% 55% / 0.4)',
        };
      default:
        return {
          color: 'hsl(38 80% 70%)',
          fontWeight: 700,
          textShadow: '0 0 12px hsl(38 80% 55% / 0.6), 0 0 25px hsl(38 80% 55% / 0.3)',
        };
    }
  };

  // parsedText is now computed before early return (line ~165)

  const speakerTextStyle = getSpeakerTextStyle();
  const emphasisStyle = getEmphasisStyle();

  return (
    <>
      {/* 控制按鈕群組 */}
      <div className="fixed bottom-4 right-4 z-50 flex gap-2">
        {/* 自動播放按鈕 */}
        <motion.button
          onClick={toggleAutoPlay}
          className={`
            p-3 rounded-full backdrop-blur-md border-2 transition-all duration-300 shadow-lg
            ${isAutoPlay 
              ? 'bg-primary/25 border-primary/60 text-primary shadow-primary/20' 
              : 'bg-card/70 border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-card/90'
            }
          `}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.3 }}
          title={isAutoPlay ? '停止自動播放' : '自動播放'}
        >
          {isAutoPlay ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </motion.button>

        {/* 快轉按鈕 */}
        <motion.button
          onClick={toggleAutoForward}
          className={`
            p-3 rounded-full backdrop-blur-md border-2 transition-all duration-300 shadow-lg
            ${isAutoForward 
              ? 'bg-accent/25 border-accent/60 text-accent shadow-accent/20' 
              : 'bg-card/70 border-border/40 text-muted-foreground hover:text-foreground hover:border-accent/30 hover:bg-card/90'
            }
          `}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 0.4 }}
          title={isAutoForward ? '停止快轉' : '快轉'}
        >
          <FastForward className={`w-5 h-5 ${isAutoForward ? 'animate-pulse' : ''}`} />
        </motion.button>

        {/* 隱藏/顯示按鈕 */}
        {onToggleHide && (
          <motion.button
            onClick={onToggleHide}
            className={`
              p-3 rounded-full backdrop-blur-md border-2 transition-all duration-300 shadow-lg
              ${isHidden 
                ? 'bg-primary/25 border-primary/60 text-primary shadow-primary/20' 
                : 'bg-card/70 border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-card/90'
              }
            `}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.5 }}
            title={isHidden ? '顯示對話框' : '隱藏對話框'}
          >
            {isHidden ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
          </motion.button>
        )}
      </div>

      {/* 對話框 - 優化進場動畫 */}
      <AnimatePresence mode="wait">
        {!isHidden && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6 lg:p-8"
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ 
              duration: 0.45, 
              ease: [0.43, 0.13, 0.23, 0.96],
              opacity: { duration: 0.35 },
            }}
          >
            <div className="max-w-4xl mx-auto">
              {/* 主對話框 - 增強視覺效果和文字可讀性 */}
              <motion.div
                className={`
                  relative overflow-hidden cursor-pointer
                  rounded-2xl border-2 border-border/30
                  ${getEffectClass()}
                `}
                onClick={handleClick}
                whileHover={{ borderColor: 'hsl(var(--primary) / 0.4)' }}
                transition={{ duration: 0.2 }}
                style={{
                  background: `linear-gradient(
                    180deg, 
                    hsl(222 47% 10% / 0.94) 0%, 
                    hsl(222 47% 7% / 0.97) 100%
                  )`,
                  boxShadow: `
                    0 -8px 50px hsl(222 47% 4% / 0.7),
                    0 8px 30px hsl(0 0% 0% / 0.5),
                    inset 0 1px 0 hsl(45 30% 90% / 0.08),
                    inset 0 -1px 0 hsl(45 30% 90% / 0.03)
                  `,
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* 頂部發光邊線 */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(
                      90deg, 
                      transparent 0%, 
                      hsl(38 80% 55% / 0.4) 10%,
                      hsl(38 80% 55% / 0.9) 50%, 
                      hsl(38 80% 55% / 0.4) 90%,
                      transparent 100%
                    )`,
                    boxShadow: '0 0 25px hsl(38 80% 55% / 0.4)',
                  }}
                />

                {/* 角落裝飾 */}
                <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-primary/25 rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 border-primary/25 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 border-primary/15 rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-primary/15 rounded-br-lg" />

                {/* 內容區域 */}
                <div className="relative px-8 py-6 md:px-10 md:py-7 lg:px-12 lg:py-8">
                  {/* 說話者名稱 - 增強樣式 */}
                  {currentNode.speaker !== 'narrator' && (
                    <motion.div
                      className="mb-4 flex items-center gap-4"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span
                        className={`font-serif-tc text-xl font-bold tracking-widest ${getSpeakerColor(currentNode.speaker)}`}
                        style={{
                          textShadow: currentNode.speaker === 'yi'
                            ? '0 0 25px hsl(350 60% 45% / 0.7), 0 0 10px hsl(350 60% 45% / 0.4)'
                            : currentNode.speaker === 'protagonist'
                            ? '0 0 20px hsl(38 80% 55% / 0.5), 0 0 8px hsl(38 80% 55% / 0.3)'
                            : '0 2px 4px hsl(0 0% 0% / 0.6)',
                        }}
                      >
                        {getSpeakerName(currentNode)}
                      </span>
                      <span 
                        className="flex-shrink-0 w-16 h-[2px]" 
                        style={{
                          background: `linear-gradient(90deg, hsl(38 80% 55% / 0.5), transparent)`,
                        }}
                      />
                    </motion.div>
                  )}

                  {/* 對話文字 - 角色專屬效果 */}
                  <div className="min-h-[90px] flex items-start">
                    <div
                      className={`
                        font-sans-tc leading-loose relative
                        ${currentNode.speaker === 'yi' ? 'italic' : ''}
                      `}
                      style={{
                        fontSize: 'clamp(1.125rem, 2.5vw, 1.35rem)',
                        lineHeight: '2.1',
                        letterSpacing: '0.05em',
                        fontWeight: 400,
                      }}
                    >
                      {/* 伊的故障效果疊加層 */}
                      {currentNode.speaker === 'yi' && (
                        <motion.div
                          className="absolute inset-0 pointer-events-none overflow-hidden"
                          animate={{
                            opacity: [0, 0, 0.15, 0, 0, 0.1, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'loop',
                          }}
                        >
                          <div 
                            className="absolute inset-0"
                            style={{
                              background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 3px, hsl(350 60% 50% / 0.1) 3px, hsl(350 60% 50% / 0.1) 4px)',
                            }}
                          />
                        </motion.div>
                      )}

                      {/* 問心的金色光暈效果 */}
                      {currentNode.speaker === 'wenxin' && (
                        <motion.div
                          className="absolute -inset-4 pointer-events-none"
                          animate={{
                            opacity: [0.1, 0.25, 0.1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: 'reverse',
                          }}
                          style={{
                            background: 'radial-gradient(ellipse at center, hsl(38 80% 55% / 0.15) 0%, transparent 70%)',
                            filter: 'blur(8px)',
                          }}
                        />
                      )}

                      {/* 渲染解析後的文字 */}
                      <span style={speakerTextStyle}>
                        {parsedText.map((part, index) => (
                          part.isEmphasis ? (
                            <motion.span
                              key={index}
                              style={emphasisStyle}
                              animate={currentNode.speaker === 'wenxin' ? {
                                textShadow: [
                                  '0 0 20px hsl(38 90% 55% / 0.8), 0 0 40px hsl(38 90% 55% / 0.4)',
                                  '0 0 30px hsl(38 90% 55% / 1), 0 0 60px hsl(38 90% 55% / 0.6)',
                                  '0 0 20px hsl(38 90% 55% / 0.8), 0 0 40px hsl(38 90% 55% / 0.4)',
                                ],
                              } : currentNode.speaker === 'yi' ? {
                                x: [0, -1, 1, 0],
                                opacity: [1, 0.8, 1, 0.9, 1],
                              } : {}}
                              transition={{
                                duration: currentNode.speaker === 'wenxin' ? 2 : 0.5,
                                repeat: Infinity,
                                repeatType: 'reverse',
                              }}
                            >
                              {part.text}
                            </motion.span>
                          ) : (
                            <span key={index}>{part.text}</span>
                          )
                        ))}
                      </span>

                      {/* 打字游標 */}
                      {isTyping && (
                        <motion.span
                          className="inline-block w-[3px] h-6 ml-1.5 align-text-bottom rounded-sm"
                          animate={{ opacity: [1, 0.2] }}
                          transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
                          style={{
                            background: currentNode.speaker === 'yi' 
                              ? 'hsl(350 60% 55%)' 
                              : currentNode.speaker === 'wenxin'
                              ? 'hsl(38 90% 60%)'
                              : 'hsl(38 80% 55%)',
                            boxShadow: currentNode.speaker === 'yi'
                              ? '0 0 10px hsl(350 60% 55% / 0.7)'
                              : '0 0 10px hsl(38 80% 55% / 0.7)',
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* 點擊繼續提示 - 增強可見性 */}
                  <AnimatePresence>
                    {!isTyping && !currentNode.choices && currentNode.nextNodeId && (
                      <motion.div
                        className="absolute bottom-5 right-8 flex items-center gap-2"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.25 }}
                      >
                        <span 
                          className="text-sm font-sans-tc tracking-wide"
                          style={{
                            color: 'hsl(220 20% 60%)',
                            textShadow: '0 1px 2px hsl(0 0% 0% / 0.6)',
                          }}
                        >
                          點擊繼續
                        </span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                          style={{ color: 'hsl(38 80% 55% / 0.7)' }}
                        >
                          ▸
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 底部裝飾線 */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-[1px]" 
                  style={{
                    background: 'linear-gradient(90deg, transparent, hsl(220 30% 25% / 0.5), transparent)',
                  }}
                />
              </motion.div>

              {/* 選項按鈕 - 優化進場動畫 */}
              <AnimatePresence mode="wait">
                {!isTyping && currentNode.choices && (
                  <motion.div
                    className="mt-5 space-y-3"
                    initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.1,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                  >
                    {currentNode.choices.map((choice, index) => (
                      <ChoiceButton
                        key={choice.id}
                        choice={choice}
                        index={index}
                        onClick={(arcChange, shadowChange) => {
                          // 觸發分數變化反饋
                          onScoreChange?.(arcChange, shadowChange);
                          makeChoice(choice);
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DialogueBox;
