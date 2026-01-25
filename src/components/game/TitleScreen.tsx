import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Image, Music, Volume2, Trophy } from 'lucide-react';
import { useGameStore } from '@/stores/gameStore';
import { useSFX, useBGM } from '@/hooks/useAudio';
import { useAchievements } from '@/hooks/useAchievements';
import ParticleBackground from './ParticleBackground';
import ChapterSelect from './ChapterSelect';
import Gallery from './Gallery';
import AudioControls from './AudioControls';
import SFXGenerator from './SFXGenerator';
import MusicGenerator from './MusicGenerator';
import AchievementsOverview from './AchievementsOverview';

const TitleScreen = () => {
  const { startGame, resetGame, yiProgress, yiPart2Progress } = useGameStore();
  const hasAnyProgress = yiProgress.hasStarted || yiPart2Progress.hasStarted;
  const [isChapterSelectOpen, setIsChapterSelectOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isSFXGeneratorOpen, setIsSFXGeneratorOpen] = useState(false);
  const [isMusicGeneratorOpen, setIsMusicGeneratorOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const { playSFX } = useSFX();
  const { unlockedCount: achievementCount, totalCount } = useAchievements();
  const { playBGM, stopBGM } = useBGM();
  
  // 計算已解鎖的圖片數量
  const galleryCount = (yiProgress.unlockedImages || []).length;

  // 播放標題畫面背景音樂
  useEffect(() => {
    playBGM('title');
    return () => stopBGM();
  }, [playBGM, stopBGM]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <ParticleBackground arcValue={180} />
      
      {/* 音量控制 */}
      <AudioControls />

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
            onClick={() => {
              playSFX('select');
              startGame('yi');
            }}
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
              {yiProgress.hasStarted && (
                <div className="mt-3 text-xs text-primary/70">
                  進度：{yiProgress.arcValue}°
                </div>
              )}
            </div>

            {/* 章節選擇按鈕 */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsChapterSelectOpen(true);
              }}
              className="
                absolute top-3 right-3 p-2 
                rounded-lg bg-primary/10 hover:bg-primary/20
                text-primary/70 hover:text-primary
                transition-all duration-300
                opacity-0 group-hover:opacity-100
              "
              title="章節選擇"
            >
              <BookOpen className="w-4 h-4" />
            </button>

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

          {/* 第二部：伊 (製作中) */}
          <div
            className="
              group relative w-64 md:w-72 py-8 px-6
              bg-card/20 backdrop-blur-sm
              border border-muted/30
              rounded-2xl
              overflow-hidden
              opacity-60 cursor-not-allowed
            "
          >
            {/* 製作中標籤 */}
            <div className="
              absolute top-3 right-3 
              px-2 py-1 rounded-full
              bg-muted/30 backdrop-blur-sm
              border border-muted/40
              text-[10px] text-muted-foreground tracking-wider
            ">
              製作中
            </div>
            
            {/* 內容 */}
            <div className="relative z-10">
              <div className="text-xs text-muted-foreground/60 tracking-widest mb-2">第二部</div>
              <h2 className="text-2xl md:text-3xl font-serif-tc font-bold text-muted-foreground/70 mb-1">
                弧度歸零
              </h2>
              <div className="text-3xl md:text-4xl font-serif-tc font-bold text-muted-foreground/50">
                伊
              </div>
              <div className="mt-3 text-xs text-muted-foreground/40">
                敬請期待
              </div>
            </div>

            {/* 裝飾性掃描線動畫 */}
            <div className="
              absolute inset-0 pointer-events-none overflow-hidden
            ">
              <div className="
                absolute w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent
                animate-pulse
              " style={{ top: '30%' }} />
              <div className="
                absolute w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent
                animate-pulse
              " style={{ top: '70%', animationDelay: '1s' }} />
            </div>
          </div>
        </motion.div>

        {/* 功能按鈕區 */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          {/* 成就總覽按鈕 */}
          <button
            onClick={() => setIsAchievementsOpen(true)}
            className="
              flex items-center gap-2 px-4 py-2
              text-sm text-muted-foreground hover:text-foreground 
              border border-border/50 hover:border-amber-400/50
              rounded-full backdrop-blur-sm
              transition-all duration-300
            "
          >
            <Trophy className="w-4 h-4" />
            成就
            <span className="text-xs text-amber-400">({achievementCount}/{totalCount})</span>
          </button>

          {/* 藝廊按鈕 */}
          {(yiProgress.unlockedImages || []).length > 0 && (
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="
                flex items-center gap-2 px-4 py-2
                text-sm text-muted-foreground hover:text-foreground 
                border border-border/50 hover:border-primary/50
                rounded-full backdrop-blur-sm
                transition-all duration-300
              "
            >
              <Image className="w-4 h-4" />
              藝廊
              <span className="text-xs text-primary">({(yiProgress.unlockedImages || []).length})</span>
            </button>
          )}

          {/* AI 音效生成按鈕 */}
          <button
            onClick={() => setIsSFXGeneratorOpen(true)}
            className="
              flex items-center gap-2 px-4 py-2
              text-sm text-muted-foreground hover:text-foreground 
              border border-border/50 hover:border-amber-500/50
              rounded-full backdrop-blur-sm
              transition-all duration-300
            "
          >
            <Volume2 className="w-4 h-4" />
            AI 音效
          </button>

          {/* AI 音樂生成按鈕 */}
          <button
            onClick={() => setIsMusicGeneratorOpen(true)}
            className="
              flex items-center gap-2 px-4 py-2
              text-sm text-muted-foreground hover:text-foreground 
              border border-border/50 hover:border-purple-500/50
              rounded-full backdrop-blur-sm
              transition-all duration-300
            "
          >
            <Music className="w-4 h-4" />
            AI BGM
          </button>
        </motion.div>

        {/* 重置進度按鈕 */}
        {hasAnyProgress && (
          <motion.button
            onClick={resetGame}
            className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            重置所有進度
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

      {/* 章節選擇彈窗 */}
      <ChapterSelect 
        isOpen={isChapterSelectOpen} 
        onClose={() => setIsChapterSelectOpen(false)} 
      />

      {/* 藝廊彈窗 */}
      <Gallery 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
      />

      {/* 成就總覽 */}
      <AchievementsOverview
        isOpen={isAchievementsOpen}
        onClose={() => setIsAchievementsOpen(false)}
      />

      {/* AI 音效生成器 */}
      {isSFXGeneratorOpen && (
        <SFXGenerator onClose={() => setIsSFXGeneratorOpen(false)} />
      )}

      {/* AI 音樂生成器 */}
      {isMusicGeneratorOpen && (
        <MusicGenerator onClose={() => setIsMusicGeneratorOpen(false)} />
      )}
    </div>
  );
};

export default TitleScreen;
