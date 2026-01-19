import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/stores/gameStore';
import { getNodeById } from '@/data/prologueStory';
import { getYiPart2NodeById } from '@/data/yiPart2Story';
import { getYi1NodeById } from '@/data/yi1';
import { DialogueNode } from '@/stores/gameStore';
import ChoiceButton from './ChoiceButton';

const DialogueBox = () => {
  const { getCurrentProgress, advanceToNextNode, makeChoice, currentPart, markNodeAsRead } = useGameStore();
  const progress = getCurrentProgress();
  const currentNodeId = progress.currentNodeId;
  
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentNode, setCurrentNode] = useState<DialogueNode | null>(null);

  useEffect(() => {
    // 嘗試從 yi1 數據獲取節點，如果沒有則回退到舊的 prologueStory
    const node = currentPart === 'yi' 
      ? (getYi1NodeById(currentNodeId) || getNodeById(currentNodeId))
      : getYiPart2NodeById(currentNodeId);
    if (node) {
      setCurrentNode(node);
      setDisplayedText('');
      setIsTyping(true);
      // 自動標記節點為已讀
      markNodeAsRead(currentNodeId);
    }
  }, [currentNodeId, currentPart, markNodeAsRead]);

  // 打字機效果
  useEffect(() => {
    if (!currentNode) return;

    const text = currentNode.text;
    let index = 0;
    setDisplayedText('');
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentNode]);

  const handleClick = useCallback(() => {
    if (!currentNode) return;

    if (isTyping) {
      setDisplayedText(currentNode.text);
      setIsTyping(false);
    } else if (currentNode.nextNodeId && !currentNode.choices) {
      advanceToNextNode(currentNode.nextNodeId);
    }
  }, [currentNode, isTyping, advanceToNextNode]);

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

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* 對話框 */}
        <motion.div
          className={`
            relative bg-card/80 backdrop-blur-md border border-border/50 
            rounded-2xl p-6 md:p-8 cursor-pointer
            shadow-[0_-10px_60px_-15px_hsl(var(--primary)/0.1)]
            ${getEffectClass()}
          `}
          onClick={handleClick}
          whileHover={{ borderColor: 'hsl(var(--primary) / 0.3)' }}
          transition={{ duration: 0.2 }}
        >
          {/* 說話者名稱 */}
          {currentNode.speaker !== 'narrator' && (
            <motion.div
              className={`text-sm font-serif-tc mb-2 ${getSpeakerColor(currentNode.speaker)}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {getSpeakerName(currentNode)}
            </motion.div>
          )}

          {/* 對話文字 */}
          <div className="min-h-[80px] flex items-start">
            <p
              className={`
                text-lg md:text-xl leading-relaxed font-sans-tc
                ${currentNode.speaker === 'narrator' ? 'text-muted-foreground' : 'text-foreground'}
                ${currentNode.speaker === 'yi' ? 'text-accent italic' : ''}
              `}
            >
              {displayedText}
              {isTyping && (
                <motion.span
                  className="inline-block w-0.5 h-5 bg-primary ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
            </p>
          </div>

          {/* 點擊提示 */}
          <AnimatePresence>
            {!isTyping && !currentNode.choices && currentNode.nextNodeId && (
              <motion.div
                className="absolute bottom-4 right-6 text-xs text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                點擊繼續 ▼
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 選項按鈕 */}
        <AnimatePresence>
          {!isTyping && currentNode.choices && (
            <motion.div
              className="mt-6 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {currentNode.choices.map((choice, index) => (
                <ChoiceButton
                  key={choice.id}
                  choice={choice}
                  index={index}
                  onClick={() => makeChoice(choice)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default DialogueBox;
