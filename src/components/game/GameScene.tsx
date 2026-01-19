import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Home, BookOpen, RotateCcw } from 'lucide-react';
import { useGameStore } from '@/stores/gameStore';
import ParticleBackground from './ParticleBackground';
import DialogueBox from './DialogueBox';
import ArcIndicator from './ArcIndicator';
import ChapterSelect from './ChapterSelect';
import { getNodeById } from '@/data/prologueStory';
import { getYiPart2NodeById } from '@/data/yiPart2Story';
import { getYi1NodeById } from '@/data/yi1';

// 根據節點 ID 獲取當前章節標題
const getChapterTitle = (nodeId: string): string => {
  if (nodeId.startsWith('yi1-preface')) return '作者序';
  if (nodeId.startsWith('yi1-prologue')) return '序章・未完成的檔案';
  if (nodeId.startsWith('yi1-chapter-1')) return '第一章・刪除';
  if (nodeId.startsWith('yi1-chapter-2')) return '第二章・渡口';
  if (nodeId.startsWith('yi1-chapter-3')) return '第三章・真相';
  if (nodeId.startsWith('yi1-chapter-4')) return '第四章・命樹';
  if (nodeId.startsWith('prologue')) return '序章・未完成的檔案';
  return '序章';
};

const GameScene = () => {
  const { getCurrentProgress, returnToTitle, resetPart, currentPart } = useGameStore();
  const progress = getCurrentProgress();
  const arcValue = progress.arcValue;
  const currentNodeId = progress.currentNodeId;
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChapterSelectOpen, setIsChapterSelectOpen] = useState(false);

  const currentNode = currentPart === 'yi' 
    ? (getYi1NodeById(currentNodeId) || getNodeById(currentNodeId))
    : getYiPart2NodeById(currentNodeId);

  const visualProgress = 1 - arcValue / 180;
  const isYiPart = currentPart === 'yi';
  const themeHue = isYiPart ? 38 : 350;
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 粒子背景 */}
      <ParticleBackground arcValue={arcValue} />
      
      {/* 漸變背景 */}
      <motion.div
        className="absolute inset-0 transition-colors duration-1000"
        style={{
          background: `linear-gradient(180deg, 
            hsl(222, ${47 - visualProgress * 10}%, ${6 + visualProgress * 4}%) 0%, 
            hsl(222, ${47 - visualProgress * 15}%, ${10 + visualProgress * 5}%) 100%
          )`,
        }}
      />

      {/* 光暈效果 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: 0.5 + visualProgress * 0.5 }}
        transition={{ duration: 1 }}
      >
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{
            background: `radial-gradient(circle, hsl(${themeHue}, 60%, 30%, 0.1) 0%, transparent 70%)`,
          }}
        />
      </motion.div>

      {/* 故障效果覆蓋層 */}
      {currentNode?.speaker === 'yi' && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.1, 0, 0.05, 0] }}
          transition={{ duration: 0.3, repeat: 3 }}
        >
          <div className="absolute inset-0 bg-accent/10" />
          <div 
            className="absolute inset-0"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--accent) / 0.03) 2px, hsl(var(--accent) / 0.03) 4px)',
            }}
          />
        </motion.div>
      )}

      {/* 章節標題 */}
      <motion.div
        className="absolute top-6 left-6 z-40"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-sm text-muted-foreground font-serif-tc">
          {isYiPart ? '弧度歸零：壹' : '弧度歸零：伊'}
        </h2>
        <h3 className="text-lg text-foreground/80 font-serif-tc">
          {isYiPart ? getChapterTitle(currentNodeId) : '序章・另一個我們'}
        </h3>
      </motion.div>

      {/* 弧度指示器 */}
      <ArcIndicator />

      {/* 選單按鈕 */}
      <motion.div
        className="fixed top-6 right-6 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`
            p-3 rounded-full backdrop-blur-sm border transition-all duration-300
            ${isMenuOpen 
              ? 'bg-primary/20 border-primary/50 text-primary' 
              : 'bg-card/50 border-border/50 text-muted-foreground hover:text-foreground hover:border-border'
            }
          `}
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* 下拉選單 */}
        <motion.div
          className={`
            absolute top-14 right-0 w-48
            bg-card/95 backdrop-blur-md border border-border
            rounded-xl shadow-xl overflow-hidden
            ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}
          `}
          initial={false}
          animate={isMenuOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {/* 章節選擇 */}
          {isYiPart && (
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsChapterSelectOpen(true);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted/50 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-primary" />
              章節選擇
            </button>
          )}

          {/* 返回標題 */}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              returnToTitle();
            }}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted/50 transition-colors border-t border-border/50"
          >
            <Home className="w-4 h-4 text-muted-foreground" />
            返回標題
          </button>

          {/* 重新開始 */}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              resetPart(currentPart);
              returnToTitle();
            }}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-destructive hover:bg-destructive/10 transition-colors border-t border-border/50"
          >
            <RotateCcw className="w-4 h-4" />
            重新開始本部
          </button>
        </motion.div>
      </motion.div>

      {/* 點擊背景關閉選單 */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsMenuOpen(false)} 
        />
      )}

      {/* 對話框 */}
      <DialogueBox />

      {/* 章節選擇彈窗 */}
      <ChapterSelect 
        isOpen={isChapterSelectOpen} 
        onClose={() => setIsChapterSelectOpen(false)} 
      />
    </div>
  );
};

export default GameScene;
