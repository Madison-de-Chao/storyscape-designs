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
            className="w-28 h-28 md:w-36 md:h-36 mx-auto"
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
          className="text-4xl md:text-6xl font-serif-tc font-bold mb-3 text-glow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="text-foreground">弧度</span>
          <span className="text-primary">歸零</span>
        </motion.h1>

        {/* 英文副標 */}
        <motion.p
          className="text-base md:text-lg text-muted-foreground tracking-[0.3em] mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          ARC ZERO
        </motion.p>

        {/* 標語 */}
        <motion.p
          className="text-sm md:text-base text-muted-foreground/80 font-light mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          完整不是沒有缺口，完整是不再害怕缺口
        </motion.p>

        {/* 兩個入口 */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {/* 第一部：壹 */}
          <button
            onClick={startGame}
            className="
              group relative w-64 md:w-72 py-8 px-6
              bg-card/30 backdrop-blur-sm
              border border-primary/30 hover:border-primary/60
              rounded-2xl
              transition-all duration-500
              overflow-hidden
            "
          >
            {/* 背景光暈 */}
            <div className="
              absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
            " />
            
            {/* 內容 */}
            <div className="relative z-10">
              <div className="text-xs text-muted-foreground tracking-widest mb-2">第一部</div>
              <h2 className="text-2xl md:text-3xl font-serif-tc font-bold text-foreground mb-1">
                弧度歸零
              </h2>
              <div className="text-3xl md:text-4xl font-serif-tc font-bold text-primary text-glow">
                壹
              </div>
              <p className="text-xs text-muted-foreground mt-3">看見問題</p>
            </div>

            {/* 底部裝飾線 */}
            <div className="
              absolute bottom-0 left-1/2 -translate-x-1/2 
              w-0 group-hover:w-3/4 h-0.5 
              bg-gradient-to-r from-transparent via-primary to-transparent
              transition-all duration-500
            " />
          </button>

          {/* 分隔線 */}
          <div className="hidden md:block w-px h-24 bg-border/50" />
          <div className="md:hidden w-24 h-px bg-border/50" />

          {/* 第二部：伊 */}
          <button
            onClick={() => {
              // 暫時也啟動遊戲，後續可以切換到第二部
              startGame();
            }}
            className="
              group relative w-64 md:w-72 py-8 px-6
              bg-card/30 backdrop-blur-sm
              border border-accent/30 hover:border-accent/60
              rounded-2xl
              transition-all duration-500
              overflow-hidden
            "
          >
            {/* 背景光暈 */}
            <div className="
              absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
            " />
            
            {/* 內容 */}
            <div className="relative z-10">
              <div className="text-xs text-muted-foreground tracking-widest mb-2">第二部</div>
              <h2 className="text-2xl md:text-3xl font-serif-tc font-bold text-foreground mb-1">
                弧度歸零
              </h2>
              <div className="text-3xl md:text-4xl font-serif-tc font-bold text-accent text-glow-accent">
                伊
              </div>
              <p className="text-xs text-muted-foreground mt-3">走出來</p>
            </div>

            {/* 底部裝飾線 */}
            <div className="
              absolute bottom-0 left-1/2 -translate-x-1/2 
              w-0 group-hover:w-3/4 h-0.5 
              bg-gradient-to-r from-transparent via-accent to-transparent
              transition-all duration-500
            " />
          </button>
        </motion.div>

        {/* 重新開始按鈕 */}
        {hasStarted && (
          <motion.button
            onClick={resetGame}
            className="mt-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            重置進度
          </motion.button>
        )}

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
