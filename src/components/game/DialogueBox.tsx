import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, FastForward, Play, Pause, History, Save, Download } from 'lucide-react';
import { getSpeakerAvatar } from '@/utils/speakerAvatars';
import { useGameStore } from '@/stores/gameStore';
import { usePerformanceStore } from '@/stores/performanceStore';
import { getNodeById } from '@/data/prologueStory';
import { getYi1NodeById } from '@/data/yi1';
import { getYi2NodeById } from '@/data/yi2';
import { DialogueNode } from '@/stores/gameStore';
import { useSFX } from '@/hooks/useAudio';
import { getSpeakerEmotionSFX, shouldPlayEmotionSFX, type SpeakerType } from '@/utils/speakerEmotionSFX';
import ChoiceButton from './ChoiceButton';
import DialogueHistory from './DialogueHistory';
import SaveLoadPanel from './SaveLoadPanel';

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
  const { getCurrentProgress, advanceToNextNode, makeChoice, currentPart, markNodeAsRead, addDialogueHistory, getDialogueHistory, saveGame } = useGameStore();
  const shouldSimplify = usePerformanceStore((state) => state.shouldSimplifyAnimations());
  const progress = getCurrentProgress();
  const currentNodeId = progress.currentNodeId;
  const { playSFX, playEmotionSFX } = useSFX();
  
   const [displayedText, setDisplayedText] = useState('');
   const [isTyping, setIsTyping] = useState(true);
   const typingCancelledRef = useRef(false);
  const [currentNode, setCurrentNode] = useState<DialogueNode | null>(null);
  const [isAutoForward, setIsAutoForward] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isSavePanelOpen, setIsSavePanelOpen] = useState(false);
  const [isLoadPanelOpen, setIsLoadPanelOpen] = useState(false);
  const autoForwardRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const lastAutoSaveNodeRef = useRef<string | null>(null);
  const lastTypingFinishTimeRef = useRef<number>(0);

  // 獲取說話者名稱（用於歷史記錄）- 必須在 useEffect 之前定義
  const getSpeakerNameForHistory = useCallback((speaker: string): string => {
    switch (speaker) {
      case 'yi': return '???';
      case 'protagonist': return currentPart === 'yi' ? '她' : '你';
      case 'mentor': return '歸者';
      case 'wenxin': return '問心';
      case 'wendu': return '問渡';
      case 'wangyangming': return '王陽明';
      case 'sushi': return '蘇軾';
      case 'simaqian': return '司馬遷';
      case 'wuzetian': return '武則天';
      case 'libai': return '李白';
      case 'mandela': return '曼德拉';
      case 'caesar': return '凱撒';
      case 'cleopatra': return '埃及豔后';
      case 'lincoln': return '林肯';
      case 'jobs': return '賈伯斯';
      case 'narrator': return '';
      default: return '';
    }
  }, [currentPart]);

  useEffect(() => {
    const node = currentPart === 'yi'
      ? (getYi1NodeById(currentNodeId) || getNodeById(currentNodeId))
      : getYi2NodeById(currentNodeId);
    if (node) {
      setCurrentNode(node);
      setDisplayedText('');
      setIsTyping(true);
      markNodeAsRead(currentNodeId);

      // 記錄對話歷史（用於回顧模式）
      const speakerName = node.speakerName || getSpeakerNameForHistory(node.speaker);
      addDialogueHistory({
        nodeId: currentNodeId,
        speaker: node.speaker,
        speakerName,
        text: node.text,
      });

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
  }, [currentNodeId, currentPart, markNodeAsRead, playEmotionSFX, addDialogueHistory, getSpeakerNameForHistory]);

  // 打字機效果 - 優化版本：低性能模式使用批量更新減少重繪
  useEffect(() => {
    if (!currentNode) return;

    const text = currentNode.text;
    setDisplayedText('');
    setIsTyping(true);
    typingCancelledRef.current = false;

    // 特殊文字效果：跳過打字機，由逐字動畫控制顯示
    if (currentNode.textEffect === 'materialize' || currentNode.textEffect === 'whisper' || currentNode.textEffect === 'heavy-reveal') {
      setDisplayedText(text);
      setIsTyping(false);
      return;
    }

    // 低性能模式：直接顯示完整文字，避免逐字渲染
    if (shouldSimplify && !isAutoForward) {
      const timer = setTimeout(() => {
        setDisplayedText(text);
        setIsTyping(false);
      }, 100);
      return () => clearTimeout(timer);
    }

    let index = 0;
    let animationFrameId: number | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    
    // 基礎打字速度：快轉模式 8ms，正常模式 35ms
    const baseSpeed = isAutoForward ? 8 : 35;
    
    const typeNextChar = () => {
      if (index < text.length && !typingCancelledRef.current) {
        const char = text[index];
        
        // 使用 functional update 避免閉包問題，減少重新創建字串
        setDisplayedText(text.slice(0, index + 1));
        index++;
        
        // 智能延遲：標點符號後暫停更長時間，提升閱讀節奏感
        let delay = baseSpeed;
        if (!isAutoForward) {
          if ('。！？…」』' .includes(char)) {
            delay = 180; // 結束標點：長暫停
          } else if ('，、；：「『（）' .includes(char)) {
            delay = 90;  // 中間標點：中等暫停
          } else if (char === '\n') {
            delay = 120; // 換行：額外暫停
          }
        }
        
        timeoutId = setTimeout(() => {
          // 使用 requestAnimationFrame 確保在繪製幀前更新
          animationFrameId = requestAnimationFrame(typeNextChar);
        }, delay);
      } else {
        setIsTyping(false);
      }
    };

    // 初始延遲後開始
    timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(typeNextChar);
    }, 50);
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [currentNode, isAutoForward, shouldSimplify]);

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

  // 獲取當前章節標題（用於存檔顯示）
  const getCurrentChapterTitle = useCallback((): string => {
    if (!currentNodeId) return '未知章節';
    
    // 根據節點 ID 判斷章節
    if (currentNodeId.includes('preface')) return '作者序';
    if (currentNodeId.includes('prologue')) return '序章';
    
    const chapterMatch = currentNodeId.match(/chapter-?(\d+)/);
    if (chapterMatch) {
      const chapterNum = parseInt(chapterMatch[1], 10);
      const chapterNames: Record<number, string> = {
        1: '第一章 蘇軾',
        2: '第二章 王陽明',
        3: '第三章 司馬遷',
        4: '第四章 武則天',
        5: '第五章 李白',
        6: '第六章 凱撒與埃及豔后',
        7: '第七章 曼德拉',
        8: '第八章 海倫凱勒',
        9: '第九章 梵谷',
        10: '第十章 林肯',
        11: '第十一章 賈伯斯',
        12: '第十二章 歸零',
      };
      return chapterNames[chapterNum] || `第${chapterNum}章`;
    }
    
    if (currentNodeId.includes('epilogue')) return '尾聲';
    if (currentNodeId.includes('postscript')) return '後記';
    
    return '旅程中';
  }, [currentNodeId]);

  // 遇到選項時自動停止快轉和自動播放，並觸發自動存檔
  useEffect(() => {
    if (currentNode?.choices) {
      setIsAutoForward(false);
      setIsAutoPlay(false);
      
      // 避免同一節點重複存檔
      if (lastAutoSaveNodeRef.current !== currentNodeId) {
        lastAutoSaveNodeRef.current = currentNodeId;
        const chapterTitle = getCurrentChapterTitle();
        saveGame(`選項前自動存檔`, chapterTitle, true);
      }
    }
  }, [currentNode?.choices, currentNodeId, getCurrentChapterTitle, saveGame]);

  // 自動播放模式 - 優化：根據文字複雜度動態計算延遲
  useEffect(() => {
    if (isAutoPlay && !isAutoForward && !isTyping && currentNode?.nextNodeId && !currentNode.choices) {
      const text = currentNode.text;
      const textLength = text.length;
      
      // 計算閱讀時間：基礎 1.5 秒 + 每個字 80ms，上限 6 秒
      // 標點符號多的段落需要更多時間
      const punctuationCount = (text.match(/[。！？…，、；：]/g) || []).length;
      const baseDelay = 1500;
      const charDelay = textLength * 80;
      const punctuationBonus = punctuationCount * 100;
      const delay = Math.min(Math.max(baseDelay + charDelay + punctuationBonus, 2000), 6000);
      
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
      typingCancelledRef.current = true;
      setDisplayedText(currentNode.text);
      setIsTyping(false);
      lastTypingFinishTimeRef.current = Date.now();
    } else if (currentNode.nextNodeId && !currentNode.choices) {
      // 避免點擊完成打字時誤觸發下一段（增加 300ms 冷卻時間）
      if (Date.now() - lastTypingFinishTimeRef.current < 300) return;
      
      playSFX('dialogue_advance');
      advanceToNextNode(currentNode.nextNodeId);
    }
  }, [currentNode, isTyping, advanceToNextNode, playSFX]);

  // Parse displayed text - must be before early return to follow hooks rules
  const parsedText = useMemo(() => {
    if (!displayedText || !currentNode) return [];
    return parseDialogueText(displayedText, currentNode.speaker);
  }, [displayedText, currentNode]);

  // 開關回顧模式 - 必須在 early return 之前
  const toggleHistory = useCallback(() => {
    setIsHistoryOpen(prev => !prev);
    playSFX('click');
  }, [playSFX]);

  // 獲取對話歷史 - 必須在 early return 之前
  const dialogueHistory = getDialogueHistory();

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
  // 序章 ??? 說話者使用伊的紅字樣式
  const effectiveSpeaker = (currentNode.speaker === 'narrator' && currentNode.speakerName === '???') ? 'yi' : currentNode.speaker;

  const getSpeakerTextStyle = () => {
    switch (effectiveSpeaker) {
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
    switch (effectiveSpeaker) {
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
      {/* 對話回顧面板 */}
      <DialogueHistory
        history={dialogueHistory}
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
      />

      {/* 存檔/讀檔面板 */}
      <SaveLoadPanel
        isOpen={isSavePanelOpen}
        onClose={() => setIsSavePanelOpen(false)}
        mode="save"
        currentChapterTitle={getCurrentChapterTitle()}
      />
      <SaveLoadPanel
        isOpen={isLoadPanelOpen}
        onClose={() => setIsLoadPanelOpen(false)}
        mode="load"
        currentChapterTitle={getCurrentChapterTitle()}
      />

      {/* 控制按鈕群組 - 手機優化佈局：增大觸控區域 */}
      <div className="fixed bottom-20 sm:bottom-4 right-2 sm:right-4 z-50 flex flex-col sm:flex-row gap-2 sm:gap-2">
        {/* 存檔按鈕 - 增大手機觸控區域 */}
        <motion.button
          onClick={() => { setIsSavePanelOpen(true); playSFX('click'); }}
          className="p-3.5 sm:p-3 rounded-full backdrop-blur-md border-2 transition-colors duration-200 shadow-lg bg-card/80 border-border/40 text-muted-foreground hover:text-foreground hover:border-amber-500/40 hover:bg-card/90 active:scale-95 will-change-transform touch-manipulation min-w-[48px] min-h-[48px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.15, delay: 0.05 }}
          title="存檔"
        >
          <Save className="w-5 h-5 sm:w-5 sm:h-5" />
        </motion.button>

        {/* 讀檔按鈕 - 增大手機觸控區域 */}
        <motion.button
          onClick={() => { setIsLoadPanelOpen(true); playSFX('click'); }}
          className="p-3.5 sm:p-3 rounded-full backdrop-blur-md border-2 transition-colors duration-200 shadow-lg bg-card/80 border-border/40 text-muted-foreground hover:text-foreground hover:border-emerald-500/40 hover:bg-card/90 active:scale-95 will-change-transform touch-manipulation min-w-[48px] min-h-[48px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.15, delay: 0.08 }}
          title="讀取進度"
        >
          <Download className="w-5 h-5 sm:w-5 sm:h-5" />
        </motion.button>

        {/* 回顧按鈕 - 增大手機觸控區域 */}
        <motion.button
          onClick={toggleHistory}
          className={`
            p-3.5 sm:p-3 rounded-full backdrop-blur-md border-2 transition-colors duration-200 shadow-lg active:scale-95 will-change-transform touch-manipulation min-w-[48px] min-h-[48px] flex items-center justify-center
            ${isHistoryOpen 
              ? 'bg-primary/25 border-primary/60 text-primary shadow-primary/20' 
              : 'bg-card/80 border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-card/90'
            }
          `}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.15, delay: 0.11 }}
          title="對話回顧"
        >
          <History className="w-5 h-5 sm:w-5 sm:h-5" />
        </motion.button>

        {/* 自動播放按鈕 - 增大手機觸控區域 */}
        <motion.button
          onClick={toggleAutoPlay}
          className={`
            p-3.5 sm:p-3 rounded-full backdrop-blur-md border-2 transition-colors duration-200 shadow-lg active:scale-95 will-change-transform touch-manipulation min-w-[48px] min-h-[48px] flex items-center justify-center
            ${isAutoPlay 
              ? 'bg-primary/25 border-primary/60 text-primary shadow-primary/20' 
              : 'bg-card/80 border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-card/90'
            }
          `}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.15, delay: 0.14 }}
          title={isAutoPlay ? '停止自動播放' : '自動播放'}
        >
          {isAutoPlay ? (
            <Pause className="w-5 h-5 sm:w-5 sm:h-5" />
          ) : (
            <Play className="w-5 h-5 sm:w-5 sm:h-5" />
          )}
        </motion.button>

        {/* 快轉按鈕 - 增大手機觸控區域 */}
        <motion.button
          onClick={toggleAutoForward}
          className={`
            p-3.5 sm:p-3 rounded-full backdrop-blur-md border-2 transition-colors duration-200 shadow-lg active:scale-95 will-change-transform touch-manipulation min-w-[48px] min-h-[48px] flex items-center justify-center
            ${isAutoForward 
              ? 'bg-accent/25 border-accent/60 text-accent shadow-accent/20' 
              : 'bg-card/80 border-border/40 text-muted-foreground hover:text-foreground hover:border-accent/30 hover:bg-card/90'
            }
          `}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.15, delay: 0.17 }}
          title={isAutoForward ? '停止快轉' : '快轉'}
        >
          <FastForward className={`w-5 h-5 sm:w-5 sm:h-5 ${isAutoForward ? 'animate-pulse' : ''}`} />
        </motion.button>

        {/* 隱藏/顯示按鈕 - 增大手機觸控區域 */}
        {onToggleHide && (
          <motion.button
            onClick={onToggleHide}
            className={`
              p-3.5 sm:p-3 rounded-full backdrop-blur-md border-2 transition-colors duration-200 shadow-lg active:scale-95 will-change-transform touch-manipulation min-w-[48px] min-h-[48px] flex items-center justify-center
              ${isHidden 
                ? 'bg-primary/25 border-primary/60 text-primary shadow-primary/20' 
                : 'bg-card/80 border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-card/90'
              }
            `}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.15, delay: 0.2 }}
            title={isHidden ? '顯示對話框' : '隱藏對話框'}
          >
            {isHidden ? <Eye className="w-5 h-5 sm:w-5 sm:h-5" /> : <EyeOff className="w-5 h-5 sm:w-5 sm:h-5" />}
          </motion.button>
        )}
      </div>

      {/* 對話框 - 手機優化佈局 */}
      <AnimatePresence mode="sync">
        {!isHidden && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-40 max-h-[55vh] overflow-y-auto p-2 pb-4 sm:max-h-none sm:overflow-visible sm:p-4 md:p-6 lg:p-8"
            style={{ overscrollBehavior: 'contain', contain: 'layout paint' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.25 },
            }}
          >
            <div className="max-w-4xl mx-auto">
              {/* 主對話框 - 手機觸控優化 */}
              <motion.div
                className={`
                  relative overflow-hidden cursor-pointer
                  rounded-xl sm:rounded-2xl border sm:border-2 border-border/30
                  ${getEffectClass()}
                `}
                onClick={handleClick}
                whileHover={{ borderColor: 'hsl(var(--primary) / 0.4)' }}
                transition={{ duration: 0.2 }}
                style={{
                  background: `linear-gradient(
                    180deg, 
                    hsl(222 47% 10% / 0.65) 0%, 
                    hsl(222 47% 7% / 0.7) 100%
                  )`,
                  boxShadow: `
                    0 -8px 50px hsl(222 47% 4% / 0.4),
                    0 8px 30px hsl(0 0% 0% / 0.3),
                    inset 0 1px 0 hsl(45 30% 90% / 0.08),
                    inset 0 -1px 0 hsl(45 30% 90% / 0.03)
                  `,
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
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

                {/* 角落裝飾 - 手機上隱藏 */}
                <div className="hidden sm:block absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-primary/25 rounded-tl-lg" />
                <div className="hidden sm:block absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 border-primary/25 rounded-tr-lg" />
                <div className="hidden sm:block absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 border-primary/15 rounded-bl-lg" />
                <div className="hidden sm:block absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-primary/15 rounded-br-lg" />

                {/* 內容區域 - 手機優化間距 */}
                <div className="relative px-4 py-4 sm:px-8 sm:py-6 md:px-10 md:py-7 lg:px-12 lg:py-8">
                  {/* 說話者名稱 + 頭像 */}
                  {currentNode.speaker !== 'narrator' && (
                    <motion.div
                      className="mb-2 sm:mb-4 flex items-center gap-2 sm:gap-3"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* 角色頭像 */}
                      {(() => {
                        const avatarSrc = getSpeakerAvatar(
                          (currentNode.speaker === 'narrator' && currentNode.speakerName === '???') ? 'yi' : currentNode.speaker
                        );
                        if (!avatarSrc) return null;
                        return (
                          <div
                            className="relative flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-border/40"
                            style={{
                              boxShadow: currentNode.speaker === 'yi'
                                ? '0 0 10px hsl(350 60% 45% / 0.5)'
                                : '0 0 8px hsl(38 80% 55% / 0.3)',
                            }}
                          >
                            <img
                              src={avatarSrc}
                              alt={getSpeakerName(currentNode)}
                              className="w-full h-full object-cover object-top"
                              draggable={false}
                            />
                          </div>
                        );
                      })()}
                      <span
                        className={`font-serif-tc text-base sm:text-xl font-bold tracking-widest ${getSpeakerColor(currentNode.speaker)}`}
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
                        className="hidden sm:block flex-shrink-0 w-16 h-[2px]" 
                        style={{
                          background: `linear-gradient(90deg, hsl(38 80% 55% / 0.5), transparent)`,
                        }}
                      />
                    </motion.div>
                  )}

                  {/* 對話文字 - 手機字體優化 */}
                  <div className="min-h-[60px] sm:min-h-[90px] flex items-start">
                    <div
                      className={`
                        font-sans-tc leading-relaxed sm:leading-loose relative
                        ${currentNode.speaker === 'yi' ? 'italic' : ''}
                      `}
                      style={{
                        fontSize: 'clamp(0.95rem, 3.5vw, 1.35rem)',
                        lineHeight: '2.2', // 增加行高以提升閱讀舒適度
                        letterSpacing: '0.03em',
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
                        {currentNode.textEffect === 'materialize' ? (
                          // 文字從虛無中凝聚成形效果
                          parsedText.map((part, index) => (
                            <span key={index}>
                              {[...part.text].map((char, charIdx) => {
                                const isCore = char === '伊';
                                return (
                                  <motion.span
                                    key={`${index}-${charIdx}`}
                                    className="inline-block"
                                    style={part.isEmphasis ? emphasisStyle : undefined}
                                    initial={{
                                      opacity: 0,
                                      filter: 'blur(12px)',
                                      y: isCore ? 20 : 8,
                                      scale: isCore ? 0.3 : 0.7,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      filter: 'blur(0px)',
                                      y: 0,
                                      scale: 1,
                                      textShadow: isCore
                                        ? [
                                            '0 0 30px hsl(350 60% 50% / 0.8), 0 0 60px hsl(350 60% 50% / 0.4)',
                                            '0 0 15px hsl(350 60% 50% / 0.5), 0 0 30px hsl(350 60% 50% / 0.2)',
                                            '0 0 25px hsl(350 60% 50% / 0.7), 0 0 50px hsl(350 60% 50% / 0.3)',
                                          ]
                                        : undefined,
                                    }}
                                    transition={{
                                      opacity: { duration: isCore ? 2.5 : 1.2, delay: charIdx * 0.15 + (isCore ? 0.8 : 0) },
                                      filter: { duration: isCore ? 2.5 : 1.0, delay: charIdx * 0.15 + (isCore ? 0.8 : 0) },
                                      y: { duration: isCore ? 2.0 : 0.8, delay: charIdx * 0.15 + (isCore ? 0.8 : 0), ease: [0.25, 0.46, 0.45, 0.94] },
                                      scale: { duration: isCore ? 2.0 : 0.8, delay: charIdx * 0.15 + (isCore ? 0.8 : 0) },
                                      textShadow: isCore ? { duration: 3, repeat: Infinity, repeatType: 'reverse' as const, delay: 3 } : undefined,
                                    }}
                                  >
                                    {char === ' ' ? '\u00A0' : char}
                                  </motion.span>
                                );
                              })}
                            </span>
                          ))
                        ) : currentNode.textEffect === 'whisper' ? (
                          // 「在等你」— 呢喃浮現：字元從四散位置柔和漂入，如低語飄來
                          parsedText.map((part, index) => (
                            <span key={index}>
                              {[...part.text].map((char, charIdx) => {
                                const isKeyChar = '在等你'.includes(char);
                                const driftX = (charIdx % 3 - 1) * 15;
                                return (
                                  <motion.span
                                    key={`whisper-${index}-${charIdx}`}
                                    className="inline-block"
                                    style={part.isEmphasis ? emphasisStyle : undefined}
                                    initial={{
                                      opacity: 0,
                                      x: driftX,
                                      y: isKeyChar ? -12 : 6,
                                      filter: 'blur(8px)',
                                      scale: 0.85,
                                    }}
                                    animate={{
                                      opacity: isKeyChar ? [0, 1, 0.7, 1] : 1,
                                      x: 0,
                                      y: 0,
                                      filter: 'blur(0px)',
                                      scale: 1,
                                      textShadow: isKeyChar
                                        ? [
                                            '0 0 20px hsl(38 70% 60% / 0.6), 0 0 40px hsl(38 70% 60% / 0.3)',
                                            '0 0 10px hsl(38 70% 60% / 0.3), 0 0 20px hsl(38 70% 60% / 0.15)',
                                            '0 0 20px hsl(38 70% 60% / 0.6), 0 0 40px hsl(38 70% 60% / 0.3)',
                                          ]
                                        : undefined,
                                    }}
                                    transition={{
                                      opacity: { duration: 1.8, delay: charIdx * 0.2, ease: 'easeOut' },
                                      x: { duration: 1.5, delay: charIdx * 0.2, ease: [0.25, 0.1, 0.25, 1] },
                                      y: { duration: 1.5, delay: charIdx * 0.2, ease: [0.25, 0.1, 0.25, 1] },
                                      filter: { duration: 1.5, delay: charIdx * 0.2 },
                                      scale: { duration: 1.2, delay: charIdx * 0.2 },
                                      textShadow: isKeyChar ? { duration: 2.5, repeat: Infinity, repeatType: 'reverse' as const, delay: charIdx * 0.2 + 2 } : undefined,
                                    }}
                                  >
                                    {char === ' ' ? '\u00A0' : char}
                                  </motion.span>
                                );
                              })}
                            </span>
                          ))
                        ) : currentNode.textEffect === 'heavy-reveal' ? (
                          // 「很久了」— 沉重揭示：字元沉重落下，如漫長時光的重量
                          parsedText.map((part, index) => (
                            <span key={index}>
                              {[...part.text].map((char, charIdx) => {
                                const isKeyChar = '很久了'.includes(char);
                                return (
                                  <motion.span
                                    key={`heavy-${index}-${charIdx}`}
                                    className="inline-block"
                                    style={part.isEmphasis ? emphasisStyle : undefined}
                                    initial={{
                                      opacity: 0,
                                      y: -30,
                                      scale: isKeyChar ? 1.4 : 1.1,
                                      filter: 'blur(6px)',
                                    }}
                                    animate={{
                                      opacity: 1,
                                      y: 0,
                                      scale: 1,
                                      filter: 'blur(0px)',
                                      textShadow: isKeyChar
                                        ? [
                                            '0 0 25px hsl(220 40% 70% / 0.7), 0 0 50px hsl(220 40% 70% / 0.3)',
                                            '0 0 12px hsl(220 40% 70% / 0.4), 0 0 25px hsl(220 40% 70% / 0.15)',
                                            '0 0 25px hsl(220 40% 70% / 0.7), 0 0 50px hsl(220 40% 70% / 0.3)',
                                          ]
                                        : undefined,
                                    }}
                                    transition={{
                                      opacity: { duration: 0.8, delay: charIdx * 0.35 },
                                      y: {
                                        duration: isKeyChar ? 1.2 : 0.8,
                                        delay: charIdx * 0.35,
                                        ease: [0.6, 0.05, 0.01, 0.9],
                                      },
                                      scale: {
                                        duration: isKeyChar ? 1.5 : 0.8,
                                        delay: charIdx * 0.35,
                                        ease: [0.6, 0.05, 0.01, 0.9],
                                      },
                                      filter: { duration: 0.6, delay: charIdx * 0.35 },
                                      textShadow: isKeyChar ? { duration: 3, repeat: Infinity, repeatType: 'reverse' as const, delay: charIdx * 0.35 + 1.5 } : undefined,
                                    }}
                                  >
                                    {char === ' ' ? '\u00A0' : char}
                                  </motion.span>
                                );
                              })}
                            </span>
                          ))
                        ) : (
                          parsedText.map((part, index) => (
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
                          ))
                        )}
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
              <AnimatePresence mode="sync">
                {!isTyping && currentNode.choices && (
                  <motion.div
                    className="mt-5 space-y-3"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94],
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
