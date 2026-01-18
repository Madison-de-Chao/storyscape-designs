import { motion } from 'framer-motion';
import { useGameStore } from '@/stores/gameStore';
import ParticleBackground from './ParticleBackground';

const TitleScreen = () => {
  const { startGame, hasStarted, resetGame } = useGameStore();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <ParticleBackground arcValue={180} />
      
      {/* 背景漸變 */}
      <div className="absolute inset-0 bg-gradient-void" />
      
      {/* 光暈效果 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]" />
      </motion.div>

      {/* 主要內容 */}
      <div className="relative z-10 text-center px-6">
        {/* 弧度符號 */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <svg
            viewBox="0 0 120 120"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto"
          >
            {/* 外圈虛線 */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="3 6"
              className="text-muted-foreground/30"
            />
            {/* 弧度線 - 半圓代表180度 */}
            <motion.path
              d="M 10 60 A 50 50 0 0 1 110 60"
              fill="none"
              stroke="url(#arcGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              className="arc-glow"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            {/* 中心點 */}
            <circle
              cx="60"
              cy="60"
              r="4"
              className="fill-primary breathing-glow"
            />
            {/* 漸變定義 */}
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(38, 80%, 55%)" />
                <stop offset="50%" stopColor="hsl(350, 60%, 50%)" />
                <stop offset="100%" stopColor="hsl(220, 50%, 50%)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* 標題 */}
        <motion.h1
          className="text-5xl md:text-7xl font-serif-tc font-bold mb-4 text-glow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="text-foreground">弧度</span>
          <span className="text-primary">歸零</span>
        </motion.h1>

        {/* 英文副標 */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground tracking-[0.3em] mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          ARC ZERO
        </motion.p>

        {/* 標語 */}
        <motion.p
          className="text-base md:text-lg text-muted-foreground/80 font-light mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          完整不是沒有缺口，完整是不再害怕缺口
        </motion.p>

        {/* 開始按鈕 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <button
            onClick={startGame}
            className="
              group relative px-12 py-4 
              bg-transparent border border-primary/50
              rounded-full font-serif-tc text-lg
              text-primary hover:text-primary-foreground
              transition-all duration-500
              overflow-hidden
            "
          >
            {/* 背景填充效果 */}
            <span className="
              absolute inset-0 bg-primary 
              transform scale-x-0 group-hover:scale-x-100
              transition-transform duration-500 origin-left
            " />
            <span className="relative z-10">
              {hasStarted ? '繼續旅程' : '開始體驗'}
            </span>
          </button>

          {/* 重新開始按鈕 */}
          {hasStarted && (
            <motion.button
              onClick={resetGame}
              className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              重新開始
            </motion.button>
          )}
        </motion.div>

        {/* 作者署名 */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          原著：默默超
        </motion.div>
      </div>
    </div>
  );
};

export default TitleScreen;
