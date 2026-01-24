import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, X, ChevronUp, ChevronDown, User, MessageSquare } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DialogueNode } from '@/stores/gameStore';

interface DialogueHistoryEntry {
  nodeId: string;
  speaker: string;
  speakerName: string;
  text: string;
  timestamp: number;
}

interface DialogueHistoryProps {
  history: DialogueHistoryEntry[];
  isOpen: boolean;
  onClose: () => void;
  onJumpToNode?: (nodeId: string) => void;
}

// 獲取說話者顯示樣式
const getSpeakerStyle = (speaker: string) => {
  switch (speaker) {
    case 'yi':
      return {
        color: 'hsl(350 55% 72%)',
        bgColor: 'hsl(350 50% 20% / 0.3)',
        borderColor: 'hsl(350 50% 40% / 0.5)',
      };
    case 'wenxin':
      return {
        color: 'hsl(38 85% 75%)',
        bgColor: 'hsl(38 60% 20% / 0.3)',
        borderColor: 'hsl(38 60% 50% / 0.5)',
      };
    case 'wendu':
      return {
        color: 'hsl(210 60% 75%)',
        bgColor: 'hsl(210 50% 20% / 0.3)',
        borderColor: 'hsl(210 50% 50% / 0.5)',
      };
    case 'protagonist':
      return {
        color: 'hsl(45 80% 80%)',
        bgColor: 'hsl(45 50% 20% / 0.3)',
        borderColor: 'hsl(45 50% 50% / 0.5)',
      };
    case 'narrator':
      return {
        color: 'hsl(220 20% 72%)',
        bgColor: 'hsl(220 20% 15% / 0.3)',
        borderColor: 'hsl(220 20% 40% / 0.5)',
      };
    default:
      // 歷史人物使用金色系
      return {
        color: 'hsl(45 50% 85%)',
        bgColor: 'hsl(45 40% 18% / 0.3)',
        borderColor: 'hsl(45 40% 45% / 0.5)',
      };
  }
};

// 移除 Markdown 粗體標記
const cleanText = (text: string) => text.replace(/\*\*/g, '');

const DialogueHistory = ({ history, isOpen, onClose, onJumpToNode }: DialogueHistoryProps) => {
  const [scrollToBottom, setScrollToBottom] = useState(true);

  // 按時間倒序排列（最新在上）
  const sortedHistory = useMemo(() => {
    return [...history].reverse();
  }, [history]);

  const handleScrollToTop = useCallback(() => {
    setScrollToBottom(false);
  }, []);

  const handleScrollToEnd = useCallback(() => {
    setScrollToBottom(true);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* 背景遮罩 */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* 對話歷史面板 - 手機優化 */}
        <motion.div
          className="relative w-full sm:max-w-2xl h-[85vh] sm:h-[80vh] sm:mx-4 rounded-t-2xl sm:rounded-2xl border-t-2 sm:border-2 border-border/40 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 100 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          style={{
            background: `linear-gradient(
              180deg,
              hsl(222 47% 11% / 0.98) 0%,
              hsl(222 47% 8% / 0.99) 100%
            )`,
            boxShadow: `
              0 25px 50px -12px hsl(0 0% 0% / 0.6),
              inset 0 1px 0 hsl(45 30% 90% / 0.08)
            `,
          }}
        >
          {/* 頂部拖曳指示器（手機） */}
          <div className="sm:hidden flex justify-center py-2">
            <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
          </div>

          {/* 頂部標題欄 */}
          <div className="relative flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border/30">
            {/* 頂部發光線 */}
            <div 
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background: `linear-gradient(
                  90deg,
                  transparent 0%,
                  hsl(38 80% 55% / 0.4) 20%,
                  hsl(38 80% 55% / 0.8) 50%,
                  hsl(38 80% 55% / 0.4) 80%,
                  transparent 100%
                )`,
              }}
            />
            
            <div className="flex items-center gap-2 sm:gap-3">
              <History className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <h2 className="text-base sm:text-lg font-medium text-foreground">對話回顧</h2>
              <span className="text-xs sm:text-sm text-muted-foreground">
                ({history.length})
              </span>
            </div>
            
            <div className="flex items-center gap-1 sm:gap-2">
              {/* 快速跳轉按鈕 */}
              <button
                onClick={handleScrollToTop}
                className="p-1.5 sm:p-2 rounded-lg bg-card/50 hover:bg-card/80 active:bg-card text-muted-foreground hover:text-foreground transition-colors touch-manipulation"
                title="跳至最新"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                onClick={handleScrollToEnd}
                className="p-1.5 sm:p-2 rounded-lg bg-card/50 hover:bg-card/80 active:bg-card text-muted-foreground hover:text-foreground transition-colors touch-manipulation"
                title="跳至開頭"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* 關閉按鈕 */}
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-lg bg-card/50 hover:bg-destructive/20 active:bg-destructive/30 text-muted-foreground hover:text-destructive transition-colors touch-manipulation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 對話列表 - 手機優化 */}
          <ScrollArea className="h-[calc(85vh-100px)] sm:h-[calc(80vh-80px)]">
            <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
              {sortedHistory.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
                  <MessageSquare className="w-12 h-12 mb-4 opacity-30" />
                  <p>尚無對話記錄</p>
                  <p className="text-sm mt-2 opacity-60">繼續閱讀後將自動記錄</p>
                </div>
              ) : (
                sortedHistory.map((entry, index) => {
                  const style = getSpeakerStyle(entry.speaker);
                  const isNarrator = entry.speaker === 'narrator';

                  return (
                    <motion.div
                      key={`${entry.nodeId}-${index}`}
                      className="relative rounded-lg sm:rounded-xl p-3 sm:p-4 border transition-all duration-200 active:border-primary/40"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.02, duration: 0.25 }}
                      style={{
                        backgroundColor: style.bgColor,
                        borderColor: style.borderColor,
                      }}
                    >
                      {/* 說話者標籤 */}
                      {!isNarrator && entry.speakerName && (
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                          <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: style.color }} />
                          <span 
                            className="text-xs sm:text-sm font-medium"
                            style={{ color: style.color }}
                          >
                            {entry.speakerName}
                          </span>
                        </div>
                      )}
                      
                      {/* 對話內容 */}
                      <p 
                        className={`text-xs sm:text-sm leading-relaxed ${isNarrator ? 'italic opacity-80' : ''}`}
                        style={{ 
                          color: isNarrator ? 'hsl(220 15% 70%)' : 'hsl(45 20% 88%)',
                        }}
                      >
                        {cleanText(entry.text)}
                      </p>
                    </motion.div>
                  );
                })
              )}
            </div>
          </ScrollArea>

          {/* 底部提示 */}
          <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, hsl(222 47% 8% / 0.95), transparent)',
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DialogueHistory;

// 導出歷史記錄 entry 類型
export type { DialogueHistoryEntry };
