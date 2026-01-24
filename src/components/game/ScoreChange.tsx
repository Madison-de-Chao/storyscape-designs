import { motion, AnimatePresence } from 'framer-motion';

interface ScoreChangeProps {
  change: number;
  type: 'arc' | 'shadow';
  isVisible: boolean;
}

/**
 * 即時分數變化動畫組件
 * 當玩家做出選擇時，顯示弧度值或陰影值的變化
 */
const ScoreChange = ({ change, type, isVisible }: ScoreChangeProps) => {
  if (change === 0) return null;

  const isPositive = change > 0;
  const colors = {
    arc: {
      positive: { bg: 'from-amber-500/20 to-transparent', text: 'text-amber-400', glow: 'shadow-amber-500/50' },
      negative: { bg: 'from-red-500/20 to-transparent', text: 'text-red-400', glow: 'shadow-red-500/50' },
    },
    shadow: {
      positive: { bg: 'from-purple-500/20 to-transparent', text: 'text-purple-400', glow: 'shadow-purple-500/50' },
      negative: { bg: 'from-emerald-500/20 to-transparent', text: 'text-emerald-400', glow: 'shadow-emerald-500/50' },
    },
  };

  const colorSet = colors[type][isPositive ? 'positive' : 'negative'];
  const label = type === 'arc' ? '弧度' : '陰影';
  const icon = type === 'arc' 
    ? (isPositive ? '↗' : '↘') 
    : (isPositive ? '◐' : '◑');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] pointer-events-none"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -30 }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          {/* 背景光暈 */}
          <motion.div
            className={`absolute inset-0 rounded-full bg-gradient-radial ${colorSet.bg} blur-xl`}
            style={{ width: 200, height: 200, margin: -50 }}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 1] }}
            transition={{ duration: 0.8 }}
          />
          
          {/* 主要內容 */}
          <motion.div
            className={`relative flex flex-col items-center gap-1 px-8 py-4 rounded-2xl backdrop-blur-md 
              bg-background/60 border border-white/10 ${colorSet.glow} shadow-lg`}
          >
            {/* 圖標 */}
            <motion.span
              className={`text-3xl ${colorSet.text}`}
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: isPositive ? [0, 10, 0] : [0, -10, 0],
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {icon}
            </motion.span>
            
            {/* 數值變化 */}
            <motion.div
              className={`text-4xl font-bold font-serif-tc ${colorSet.text}`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {isPositive ? '+' : ''}{change}
            </motion.div>
            
            {/* 標籤 */}
            <span className="text-sm text-muted-foreground">{label}</span>
            
            {/* 粒子效果 */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${colorSet.text.replace('text-', 'bg-')}`}
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos((i * 60 * Math.PI) / 180) * 80,
                  y: Math.sin((i * 60 * Math.PI) / 180) * 80,
                  opacity: 0,
                  scale: 0,
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1 + i * 0.05,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScoreChange;
