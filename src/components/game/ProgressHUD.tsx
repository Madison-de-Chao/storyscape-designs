import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore, type Choice } from '@/stores/gameStore';
import { BookOpen, Sparkles, Moon, ChevronRight, Clock, CheckCircle2, Circle } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { yi1ChaptersMeta } from '@/data/yi1/chapters';

interface ProgressHUDProps {
  chapterProgress: number; // 0-100
  currentChapterTitle: string;
  isVisible: boolean;
  onToggle: () => void;
}

// 章節 ID 到索引的映射
const getChapterIndex = (nodeId: string): number => {
  if (nodeId.includes('preface')) return 0;
  if (nodeId.includes('prologue')) return 1;
  if (nodeId.includes('epilogue')) return 16;
  if (nodeId.includes('postscript')) return 17;
  
  // 從節點 ID 提取章節號
  const match = nodeId.match(/ch(\d+)|chapter-(\d+)|chapter(\d+)/i);
  if (match) {
    const num = parseInt(match[1] || match[2] || match[3], 10);
    return num + 1; // 章節 1 對應索引 2
  }
  return -1;
};

// 格式化時間戳
const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - timestamp;
  
  if (diff < 60000) return '剛才';
  if (diff < 3600000) return `${Math.floor(diff / 60000)} 分鐘前`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} 小時前`;
  return date.toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' });
};

/**
 * 進度可視化 HUD - 增強版
 * 顯示當前章節進度、弧度趨勢、陰影等級、章節總覽和選擇時間線
 */
const ProgressHUD = ({ 
  chapterProgress, 
  currentChapterTitle, 
  isVisible,
  onToggle,
}: ProgressHUDProps) => {
  const { getCurrentProgress, currentPart } = useGameStore();
  const progress = getCurrentProgress();
  const arcValue = progress.arcValue;
  const shadowLevel = progress.shadowLevel;
  const choicesHistory = progress.choicesHistory;
  const readNodes = progress.readNodes;
  const arcHistory = progress.arcHistory || [];
  
  const choicesMade = Object.keys(choicesHistory).length;
  
  // 當前 Tab
  const [activeTab, setActiveTab] = useState<'stats' | 'chapters' | 'timeline'>('stats');
  
  // 弧度趨勢
  const [arcTrend, setArcTrend] = useState<'up' | 'down' | 'stable'>('stable');
  const [prevArcValue, setPrevArcValue] = useState(arcValue);
  
  useEffect(() => {
    if (arcValue > prevArcValue) {
      setArcTrend('up');
    } else if (arcValue < prevArcValue) {
      setArcTrend('down');
    }
    setPrevArcValue(arcValue);
    
    const timer = setTimeout(() => setArcTrend('stable'), 3000);
    return () => clearTimeout(timer);
  }, [arcValue, prevArcValue]);

  const baseHue = currentPart === 'yi' ? 38 : 350;
  const arcCompletionPercent = Math.round(((180 - arcValue) / 180) * 100);

  // 計算各章節進度
  const chapterProgressList = useMemo(() => {
    return yi1ChaptersMeta.map((ch, index) => {
      const chapterReadNodes = readNodes[ch.id] || [];
      const hasVisited = chapterReadNodes.length > 0;
      const isCurrent = getChapterIndex(progress.currentNodeId) === index;
      return {
        ...ch,
        visited: hasVisited,
        isCurrent,
        nodeCount: chapterReadNodes.length,
      };
    });
  }, [readNodes, progress.currentNodeId]);

  // 已訪問章節數
  const visitedChapters = chapterProgressList.filter(c => c.visited).length;
  const totalChapters = yi1ChaptersMeta.length;

  // 選擇時間線（從 arcHistory 構建）
  const choiceTimeline = useMemo(() => {
    return arcHistory
      .filter(entry => entry.change !== 0)
      .slice(-10) // 最近 10 個選擇
      .reverse();
  }, [arcHistory]);

  return (
    <>
      {/* 展開/收起按鈕 - 手機優化 */}
      <motion.button
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 p-2.5 sm:p-3 rounded-full 
          bg-background/70 backdrop-blur-md border border-border/40
          hover:bg-background/80 active:scale-95 transition-all touch-manipulation"
        onClick={onToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        {choicesMade > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-primary text-primary-foreground text-[10px] sm:text-xs rounded-full flex items-center justify-center">
            {choicesMade > 9 ? '9+' : choicesMade}
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-14 left-2 sm:top-20 sm:left-6 z-40 w-[calc(100vw-1rem)] sm:w-72 max-w-72"
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="bg-background/90 backdrop-blur-xl rounded-2xl border border-border/40 shadow-2xl overflow-hidden">
              {/* 章節標題區 */}
              <div className="p-4 border-b border-border/30">
                <h3 className="text-xs text-muted-foreground mb-1">當前章節</h3>
                <p className="font-serif-tc text-base text-foreground truncate">
                  {currentChapterTitle}
                </p>
                {/* 章節進度條 */}
                <div className="mt-2">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>進度</span>
                    <span>{Math.round(chapterProgress)}%</span>
                  </div>
                  <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, hsl(${baseHue}, 70%, 45%), hsl(${baseHue}, 80%, 60%))`,
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${chapterProgress}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              {/* Tab 切換 */}
              <div className="flex border-b border-border/30">
                {[
                  { id: 'stats', label: '數據' },
                  { id: 'chapters', label: '章節' },
                  { id: 'timeline', label: '時間線' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`flex-1 py-2 text-xs transition-colors ${
                      activeTab === tab.id
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab 內容 */}
              <div className="p-4 max-h-80 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {activeTab === 'stats' && (
                    <motion.div
                      key="stats"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-3"
                    >
                      {/* 弧度統計 */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* 弧度值 */}
                        <div className="bg-muted/20 rounded-xl p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span className="text-xs text-muted-foreground">弧度</span>
                            {arcTrend !== 'stable' && (
                              <motion.span
                                className={`text-xs ${arcTrend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                              >
                                {arcTrend === 'up' ? '↑' : '↓'}
                              </motion.span>
                            )}
                          </div>
                          <span 
                            className="text-xl font-bold"
                            style={{ color: `hsl(${baseHue}, 70%, 55%)` }}
                          >
                            {arcValue}°
                          </span>
                          <div className="text-xs text-muted-foreground mt-1">
                            歸零 {arcCompletionPercent}%
                          </div>
                        </div>

                        {/* 陰影等級 */}
                        <div className="bg-muted/20 rounded-xl p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Moon className="w-4 h-4 text-purple-400" />
                            <span className="text-xs text-muted-foreground">陰影</span>
                          </div>
                          <span className="text-xl font-bold text-purple-400">
                            {shadowLevel >= 0 ? '+' : ''}{shadowLevel}
                          </span>
                          <div className="text-xs text-muted-foreground mt-1">
                            {shadowLevel > 50 ? '深淵徘徊' : shadowLevel > 20 ? '暗影浮現' : shadowLevel > 0 ? '微光中' : '光明面'}
                          </div>
                        </div>
                      </div>

                      {/* 選擇與章節統計 */}
                      <div className="bg-muted/10 rounded-xl p-3 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">已做選擇</span>
                          <span className="font-medium text-foreground">{choicesMade} 次</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">已訪問章節</span>
                          <span className="font-medium text-foreground">{visitedChapters} / {totalChapters}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'chapters' && (
                    <motion.div
                      key="chapters"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-1"
                    >
                      {chapterProgressList.map((ch, index) => (
                        <motion.div
                          key={ch.id}
                          className={`
                            flex items-center gap-2 p-2 rounded-lg text-xs transition-colors
                            ${ch.isCurrent 
                              ? 'bg-primary/20 border border-primary/40' 
                              : ch.visited 
                                ? 'bg-muted/20 hover:bg-muted/30' 
                                : 'opacity-50'
                            }
                          `}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.02 }}
                        >
                          {ch.visited ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-muted-foreground/50 shrink-0" />
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1">
                              <span className={`truncate ${ch.isCurrent ? 'text-primary font-medium' : 'text-foreground'}`}>
                                {ch.title}
                              </span>
                              {ch.isCurrent && (
                                <ChevronRight className="w-3 h-3 text-primary animate-pulse" />
                              )}
                            </div>
                            <span className="text-muted-foreground text-[10px]">{ch.subtitle}</span>
                          </div>
                          {ch.character && (
                            <span className="text-[10px] px-1.5 py-0.5 bg-primary/10 text-primary rounded">
                              {ch.character}
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'timeline' && (
                    <motion.div
                      key="timeline"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-2"
                    >
                      {choiceTimeline.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground text-sm">
                          <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                          <p>尚無選擇記錄</p>
                          <p className="text-xs mt-1">做出選擇後會顯示在這裡</p>
                        </div>
                      ) : (
                        <div className="relative">
                          {/* 時間線軸 */}
                          <div className="absolute left-3 top-2 bottom-2 w-px bg-border/50" />
                          
                          {choiceTimeline.map((entry, index) => (
                            <motion.div
                              key={`${entry.nodeId}-${entry.timestamp}`}
                              className="relative flex items-start gap-3 pl-6 py-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              {/* 時間線節點 */}
                              <div className={`
                                absolute left-1.5 top-3 w-3 h-3 rounded-full border-2
                                ${entry.change > 0 
                                  ? 'bg-red-500/20 border-red-400' 
                                  : 'bg-emerald-500/20 border-emerald-400'
                                }
                              `} />
                              
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className={`
                                    text-sm font-medium
                                    ${entry.change > 0 ? 'text-red-400' : 'text-emerald-400'}
                                  `}>
                                    {entry.change > 0 ? `+${entry.change}` : entry.change}°
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    → {entry.value}°
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <span className="text-[10px] text-muted-foreground truncate">
                                    {entry.nodeId.replace(/yi1-|chapter-|-\d+$/g, ' ').trim()}
                                  </span>
                                  <span className="text-[10px] text-muted-foreground/50">
                                    {formatTime(entry.timestamp)}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProgressHUD;
