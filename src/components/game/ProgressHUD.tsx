import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/stores/gameStore';
import { BookOpen, Sparkles, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProgressHUDProps {
  chapterProgress: number; // 0-100
  currentChapterTitle: string;
  isVisible: boolean;
  onToggle: () => void;
}

/**
 * 進度可視化 HUD
 * 顯示當前章節進度、弧度趨勢和陰影等級
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
  const choicesMade = Object.keys(progress.choicesHistory).length;
  
  // 弧度趨勢（最近5次選擇的變化方向）
  const [arcTrend, setArcTrend] = useState<'up' | 'down' | 'stable'>('stable');
  const [prevArcValue, setPrevArcValue] = useState(arcValue);
  
  useEffect(() => {
    if (arcValue > prevArcValue) {
      setArcTrend('up');
    } else if (arcValue < prevArcValue) {
      setArcTrend('down');
    }
    setPrevArcValue(arcValue);
    
    // 3秒後恢復穩定狀態
    const timer = setTimeout(() => setArcTrend('stable'), 3000);
    return () => clearTimeout(timer);
  }, [arcValue, prevArcValue]);

  const baseHue = currentPart === 'yi' ? 38 : 350;
  
  // 計算弧度完成百分比（180 -> 0 = 0% -> 100%）
  const arcCompletionPercent = Math.round(((180 - arcValue) / 180) * 100);

  return (
    <>
      {/* 展開/收起按鈕 */}
      <motion.button
        className="fixed top-6 left-6 z-50 p-3 rounded-full 
          bg-background/60 backdrop-blur-md border border-border/40
          hover:bg-background/80 transition-colors"
        onClick={onToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <BookOpen className="w-5 h-5 text-primary" />
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-20 left-6 z-40 w-64"
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="bg-background/80 backdrop-blur-xl rounded-2xl border border-border/40 p-4 shadow-2xl">
              {/* 章節標題 */}
              <div className="mb-4">
                <h3 className="text-sm text-muted-foreground mb-1">當前章節</h3>
                <p className="font-serif-tc text-lg text-foreground truncate">
                  {currentChapterTitle}
                </p>
              </div>

              {/* 章節進度條 */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>章節進度</span>
                  <span>{Math.round(chapterProgress)}%</span>
                </div>
                <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
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

              {/* 弧度統計 */}
              <div className="grid grid-cols-2 gap-3 mb-4">
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
                  <div className="flex items-baseline gap-1">
                    <span 
                      className="text-xl font-bold"
                      style={{ color: `hsl(${baseHue}, 70%, 55%)` }}
                    >
                      {arcValue}°
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    歸零進度 {arcCompletionPercent}%
                  </div>
                </div>

                {/* 陰影等級 */}
                <div className="bg-muted/20 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Moon className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-muted-foreground">陰影</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-purple-400">
                      {shadowLevel >= 0 ? '+' : ''}{shadowLevel}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {shadowLevel > 50 ? '深淵徘徊' : shadowLevel > 20 ? '暗影浮現' : shadowLevel > 0 ? '微光中' : '光明面'}
                  </div>
                </div>
              </div>

              {/* 選擇統計 */}
              <div className="flex items-center justify-between text-sm border-t border-border/30 pt-3">
                <span className="text-muted-foreground">已做選擇</span>
                <span className="font-medium text-foreground">
                  {choicesMade} 次
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProgressHUD;
