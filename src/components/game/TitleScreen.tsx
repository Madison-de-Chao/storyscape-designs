import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Image, Music, Volume2, Trophy, Play } from 'lucide-react';
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
import MemberStatusBadge from '@/components/member/MemberStatusBadge';
import yi1Cover from '@/assets/covers/yi1-cover.png';
import yi2Cover from '@/assets/covers/yi2-cover.png';

const TitleScreen = () => {
  const { startGame, resetGame, yiProgress, yiPart2Progress, getSaveSlots, loadGame } = useGameStore();
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

  // 取得最新存檔
  const allSaves = getSaveSlots();
  const latestSave = allSaves.length > 0 
    ? allSaves.sort((a, b) => b.savedAt - a.savedAt)[0] 
    : null;

  // 處理繼續遊戲
  const handleContinue = () => {
    if (latestSave) {
      playSFX('select');
      loadGame(latestSave.id);
    }
  };

  // 播放標題畫面背景音樂
  useEffect(() => {
    playBGM('title');
    return () => stopBGM();
  }, [playBGM, stopBGM]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <ParticleBackground arcValue={180} />
      
      {/* 會員狀態徽章 */}
      <MemberStatusBadge />
      
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

      {/* 主要內容 - 手機優化 */}
      <div className="relative z-10 text-center px-4 sm:px-6 py-8 sm:py-0">
        {/* 弧度符號 - 手機上較小間距 */}
        <motion.div
          className="mb-4 sm:mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <svg
            viewBox="0 0 120 120"
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 mx-auto"
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

        {/* 標題 - 手機響應式字體 */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-serif-tc font-bold mb-2 sm:mb-3 text-glow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="text-foreground">弧度</span>
          <span className="text-primary">歸零</span>
        </motion.h1>

        {/* 英文副標 - 手機響應式 */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-muted-foreground tracking-[0.2em] sm:tracking-[0.3em] mb-1 sm:mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          ARC ZERO
        </motion.p>

        {/* 標語 - 手機響應式 */}
        <motion.p
          className="text-xs sm:text-sm md:text-base text-muted-foreground/80 font-light mb-6 sm:mb-12 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          完整不是沒有缺口，完整是不再害怕缺口
        </motion.p>

        {/* 繼續遊戲按鈕 - 當有存檔時顯示 */}
        {latestSave && (
          <motion.button
            onClick={handleContinue}
            className="
              group relative mb-6 sm:mb-8 px-8 sm:px-12 py-3 sm:py-4
              rounded-xl sm:rounded-2xl
              overflow-hidden
              touch-manipulation
              shadow-lg hover:shadow-xl hover:shadow-primary/30
              border border-primary/40 hover:border-primary/70
              bg-gradient-to-r from-primary/20 to-amber-600/20
              transition-all duration-300
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* 背景光暈 */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/30 via-amber-500/20 to-primary/30 opacity-0 group-hover:opacity-100"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* 按鈕內容 */}
            <div className="relative flex items-center gap-3">
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary/30" />
              </motion.div>
              <div className="text-left">
                <span className="block text-base sm:text-lg font-medium text-stone-100">
                  繼續遊戲
                </span>
                <span className="block text-[10px] sm:text-xs text-stone-400">
                  {latestSave.currentChapterTitle}
                </span>
              </div>
            </div>
          </motion.button>
        )}

        {/* 兩個入口 - 手機優化佈局 */}
        <motion.div
          className="flex flex-col gap-4 sm:gap-6 md:flex-row md:gap-8 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {/* 第一部：壹 - 封面圖片版 */}
          <motion.button
            onClick={() => {
              playSFX('select');
              startGame('yi');
            }}
            className="
              group relative w-40 sm:w-48 md:w-56
              rounded-xl sm:rounded-2xl
              overflow-hidden
              touch-manipulation
              shadow-lg hover:shadow-xl hover:shadow-primary/30
              border border-primary/20 hover:border-primary/50
            "
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* 呼吸光暈效果 */}
            <motion.div
              className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 blur-lg opacity-0 group-hover:opacity-100 -z-10"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* 封面圖片 */}
            <div className="relative aspect-[2/3] w-full overflow-hidden">
              <motion.img 
                src={yi1Cover} 
                alt="弧度歸零：壹 封面"
                className="w-full h-full object-cover"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* 流動光暈遮罩 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-accent/10 opacity-0 group-hover:opacity-100"
                initial={{ y: "100%" }}
                whileHover={{ y: "0%" }}
                transition={{ duration: 0.6 }}
              />
              
              {/* 掃光效果 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              
              {/* 進度標籤 */}
              {yiProgress.hasStarted && (
                <div className="
                  absolute bottom-2 left-2 right-2
                  px-2 py-1 rounded-lg
                  bg-background/80 backdrop-blur-sm
                  text-[10px] sm:text-xs text-primary text-center
                  border border-primary/30
                ">
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
                absolute top-2 right-2 p-1.5 sm:p-2 
                rounded-lg bg-background/60 backdrop-blur-sm hover:bg-background/80
                text-primary/70 hover:text-primary
                transition-all duration-300
                border border-primary/20
                touch-manipulation
              "
              title="章節選擇"
            >
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </motion.button>

          {/* 分隔線 - 手機上更小 */}
          <div className="hidden md:block w-px h-24 bg-border/50" />
          <div className="md:hidden w-16 sm:w-24 h-px bg-border/50" />

          {/* 第二部：伊 (製作中) - 封面圖片版 */}
          <motion.div
            className="
              group relative w-40 sm:w-48 md:w-56
              rounded-xl sm:rounded-2xl
              overflow-hidden
              cursor-not-allowed
              border border-muted/30
            "
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* 封面圖片 - 灰度處理 + 微呼吸 */}
            <div className="relative aspect-[2/3] w-full overflow-hidden">
              <motion.img 
                src={yi2Cover} 
                alt="弧度歸零：伊 封面"
                className="w-full h-full object-cover grayscale opacity-60"
                animate={{
                  scale: [1, 1.015, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* 製作中遮罩 */}
              <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
              
              {/* 製作中標籤 */}
              <motion.div 
                className="
                  absolute top-2 right-2
                  px-2 py-1 rounded-full
                  bg-background/70 backdrop-blur-sm
                  border border-muted/40
                  text-[10px] sm:text-xs text-muted-foreground tracking-wider
                "
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                製作中
              </motion.div>
              
              {/* 敬請期待文字 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="
                    px-4 py-2 rounded-lg
                    bg-background/60 backdrop-blur-sm
                    border border-muted/30
                    text-sm text-muted-foreground font-serif-tc
                  "
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  敬請期待
                </motion.div>
              </div>
              
              {/* 裝飾性掃描線動畫 */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div 
                  className="absolute w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"
                  style={{ top: '30%' }}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent"
                  style={{ top: '70%' }}
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 功能按鈕區 - 手機優化 */}
        <motion.div
          className="mt-4 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          {/* 成就總覽按鈕 - 手機優化 */}
          <button
            onClick={() => setIsAchievementsOpen(true)}
            className="
              flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2
              text-xs sm:text-sm text-muted-foreground hover:text-foreground 
              border border-border/50 hover:border-amber-400/50
              rounded-full backdrop-blur-sm
              transition-all duration-300
              touch-manipulation
            "
          >
            <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            成就
            <span className="text-[10px] sm:text-xs text-amber-400">({achievementCount}/{totalCount})</span>
          </button>

          {/* 藝廊按鈕 - 手機優化 */}
          {(yiProgress.unlockedImages || []).length > 0 && (
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="
                flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2
                text-xs sm:text-sm text-muted-foreground hover:text-foreground 
                border border-border/50 hover:border-primary/50
                rounded-full backdrop-blur-sm
                transition-all duration-300
                touch-manipulation
              "
            >
              <Image className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              藝廊
              <span className="text-[10px] sm:text-xs text-primary">({(yiProgress.unlockedImages || []).length})</span>
            </button>
          )}

          {/* AI 音效生成按鈕 - 手機優化 */}
          <button
            onClick={() => setIsSFXGeneratorOpen(true)}
            className="
              flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2
              text-xs sm:text-sm text-muted-foreground hover:text-foreground 
              border border-border/50 hover:border-amber-500/50
              rounded-full backdrop-blur-sm
              transition-all duration-300
              touch-manipulation
            "
          >
            <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            AI 音效
          </button>

          {/* AI 音樂生成按鈕 - 手機優化 */}
          <button
            onClick={() => setIsMusicGeneratorOpen(true)}
            className="
              flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2
              text-xs sm:text-sm text-muted-foreground hover:text-foreground 
              border border-border/50 hover:border-purple-500/50
              rounded-full backdrop-blur-sm
              transition-all duration-300
              touch-manipulation
            "
          >
            <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            AI BGM
          </button>
        </motion.div>

        {/* 重置進度按鈕 - 手機優化 */}
        {hasAnyProgress && (
          <motion.button
            onClick={resetGame}
            className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors touch-manipulation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            重置所有進度
          </motion.button>
        )}

        {/* 作者署名 - 手機優化 */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs text-muted-foreground/50"
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
