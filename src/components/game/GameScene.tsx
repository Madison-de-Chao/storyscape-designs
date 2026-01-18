import { motion } from 'framer-motion';
import { useGameStore } from '@/stores/gameStore';
import ParticleBackground from './ParticleBackground';
import DialogueBox from './DialogueBox';
import ArcIndicator from './ArcIndicator';
import { getNodeById } from '@/data/prologueStory';

const GameScene = () => {
  const { arcValue, currentNodeId, resetGame } = useGameStore();
  const currentNode = getNodeById(currentNodeId);

  // 根據弧度計算背景色調
  const progress = 1 - arcValue / 180;
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 粒子背景 */}
      <ParticleBackground arcValue={arcValue} />
      
      {/* 漸變背景 */}
      <motion.div
        className="absolute inset-0 transition-colors duration-1000"
        style={{
          background: `linear-gradient(180deg, 
            hsl(222, ${47 - progress * 10}%, ${6 + progress * 4}%) 0%, 
            hsl(222, ${47 - progress * 15}%, ${10 + progress * 5}%) 100%
          )`,
        }}
      />

      {/* 光暈效果 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: 0.5 + progress * 0.5,
        }}
        transition={{ duration: 1 }}
      >
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px]"
          style={{
            background: `radial-gradient(circle, hsl(${220 - progress * 180}, 60%, 30%, 0.1) 0%, transparent 70%)`,
          }}
        />
      </motion.div>

      {/* 故障效果覆蓋層 (當「伊」出現時) */}
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
        <h2 className="text-sm text-muted-foreground font-serif-tc">序章</h2>
        <h3 className="text-lg text-foreground/80 font-serif-tc">未完成的檔案</h3>
      </motion.div>

      {/* 弧度指示器 */}
      <ArcIndicator />

      {/* 選單按鈕 */}
      <motion.button
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        onClick={resetGame}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        返回標題
      </motion.button>

      {/* 對話框 */}
      <DialogueBox />
    </div>
  );
};

export default GameScene;
