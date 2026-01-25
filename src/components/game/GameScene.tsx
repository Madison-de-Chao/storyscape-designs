import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Home, BookOpen, RotateCcw, Image, Trophy, Map } from 'lucide-react';
import { useGameStore, type ZenTheme, type RevelationTheme } from '@/stores/gameStore';
import { useSFX, useBGM, useAmbient, getAmbientTypeForScene, getBGMForNode } from '@/hooks/useAudio';
import { usePreloadImages } from '@/hooks/usePreloadImages';
import ParticleBackground from './ParticleBackground';
import DialogueBox from './DialogueBox';
import ArcIndicator from './ArcIndicator';
import ChapterSelect from './ChapterSelect';
import SceneImage from './SceneImage';
import Gallery from './Gallery';
import AudioControls from './AudioControls';
import SceneTransition from './SceneTransition';
import EndingStats from './EndingStats';
import IntroSequence from './IntroSequence';
import ZenMoment from './ZenMoment';
import RevelationMoment from './RevelationMoment';
import GraduationMoment from './GraduationMoment';
import JourneyReflection from './JourneyReflection';
import GameEndOverlay from './GameEndOverlay';
// ScoreChange 已移除 - 月明值系統對玩家隱藏
import ProgressHUD from './ProgressHUD';
import AchievementToast from './AchievementToast';
import { useAchievements } from '@/hooks/useAchievements';
import { getNodeById } from '@/data/prologueStory';
// TODO: 第二部節點查詢函數待建立
import { getYi1NodeById } from '@/data/yi1';
import { getSceneImage } from '@/data/yi1/sceneImages';
import { yi1ChaptersMeta } from '@/data/yi1/chapters';
import { getGraduationImageForNode, type GraduationImageData } from '@/data/yi1/graduationImages';

// 序章開場詩句（直排禪意動畫）
const PROLOGUE_INTRO_LINES = [
  '在無盡的虛空中',
  '有一個地方',
  '那裡不是天堂',
  '也不是地獄',
  '那裡是——',
  '教室',
];

// 根據節點 ID 獲取當前章節標題
const getChapterTitle = (nodeId: string): string => {
  // 統一處理：移除 yi1- 前綴
  const normalizedId = nodeId.replace(/^yi1-/, '');

  if (normalizedId.startsWith('preface')) return '作者序';
  if (normalizedId.startsWith('prologue')) return '序章・未完成的檔案';
  if (normalizedId.startsWith('epilogue')) return '終章・名字';
  
  // 支援兩種格式：chapter-1- 和 chapter1-
  if (normalizedId.startsWith('chapter-1-') || normalizedId.startsWith('chapter1-')) return '第一章・刪除';
  if (normalizedId.startsWith('chapter-2-') || normalizedId.startsWith('chapter2-')) return '第二章・渡口';
  if (normalizedId.startsWith('chapter-3-') || normalizedId.startsWith('chapter3-')) return '第三章・真相';
  if (normalizedId.startsWith('chapter-4-') || normalizedId.startsWith('chapter4-')) return '第四章・命樹';
  if (normalizedId.startsWith('chapter-5-') || normalizedId.startsWith('chapter5-')) return '第五章・也無風雨';
  if (normalizedId.startsWith('chapter-6-') || normalizedId.startsWith('chapter6-')) return '第六章・吾性自足';
  if (normalizedId.startsWith('chapter-7-') || normalizedId.startsWith('chapter7-')) return '第七章・誰定的規矩';
  if (normalizedId.startsWith('chapter-8-') || normalizedId.startsWith('chapter8-')) return '第八章・筆比命長';
  if (normalizedId.startsWith('chapter-9-') || normalizedId.startsWith('chapter9-')) return '第九章・天生我材';
  if (normalizedId.startsWith('chapter-10-') || normalizedId.startsWith('chapter10-')) return '第十章・心靈之眼';
  if (normalizedId.startsWith('chapter-11-') || normalizedId.startsWith('chapter11-')) return '第十一章・自由';
  if (normalizedId.startsWith('chapter-12-') || normalizedId.startsWith('chapter12-')) return '第十二章・星夜';
  if (normalizedId.startsWith('chapter-13-') || normalizedId.startsWith('chapter13-')) return '第十三章・連結點';
  if (normalizedId.startsWith('chapter-14-') || normalizedId.startsWith('chapter14-')) return '第十四章・未歸者畫廊';
  if (normalizedId.startsWith('chapter-15-') || normalizedId.startsWith('chapter15-')) return '第十五章・伊';
  if (normalizedId.startsWith('chapter-16-') || normalizedId.startsWith('chapter16-')) return '第十六章・歸一';

  return '序章';
};

// 從節點 ID 提取章節編號（同時返回用於主題色的 key）
const getChapterNumber = (nodeId: string): string => {
  const normalizedId = nodeId.replace(/^yi1-/, '');
  if (normalizedId.startsWith('preface')) return 'preface';
  if (normalizedId.startsWith('prologue')) return 'prologue';
  if (normalizedId.startsWith('epilogue')) return 'epilogue';
  
  // 支援兩種格式
  const matchDash = normalizedId.match(/chapter-(\d+)/);
  if (matchDash) return `chapter-${matchDash[1]}`;
  
  const matchNoDash = normalizedId.match(/chapter(\d+)/);
  if (matchNoDash) return `chapter-${matchNoDash[1]}`;
  
  return '';
};

// 從節點 ID 提取章節 key（用於主題色查詢）
const getChapterKey = (nodeId: string): string => {
  return getChapterNumber(nodeId);
};

const GameScene = () => {
  const { getCurrentProgress, returnToTitle, resetPart, currentPart, completeLesson } = useGameStore();
  const progress = getCurrentProgress();
  const arcValue = progress.arcValue;
  const currentNodeId = progress.currentNodeId;
  const { playSFX } = useSFX();
  const { playBGM, stopBGM } = useBGM();
  const { playAmbient, stopAmbient } = useAmbient();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChapterSelectOpen, setIsChapterSelectOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isDialogueHidden, setIsDialogueHidden] = useState(false);
  const [isEndingStatsOpen, setIsEndingStatsOpen] = useState(false);
  const [isEndingStatsFromGameEnd, setIsEndingStatsFromGameEnd] = useState(false);
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);
  
  // 序章開場動畫狀態
  const [showIntroSequence, setShowIntroSequence] = useState(false);
  const introSequenceShownRef = useRef(false);
  
  // 禪意時刻狀態
  const [showZenMoment, setShowZenMoment] = useState(false);
  const [zenConfig, setZenConfig] = useState<{
    text: string;
    subtitle?: string;
    theme?: ZenTheme;
    duration?: number;
  } | null>(null);
  const zenMomentShownRef = useRef<Set<string>>(new Set());
  
  // 啟示時刻狀態
  const [showRevelation, setShowRevelation] = useState(false);
  const [revelationConfig, setRevelationConfig] = useState<{
    text: string;
    subtitle?: string;
    theme?: RevelationTheme;
    duration?: number;
  } | null>(null);
  const revelationShownRef = useRef<Set<string>>(new Set());
  
  // 畢業時刻狀態
  const [showGraduation, setShowGraduation] = useState(false);
  const [graduationData, setGraduationData] = useState<GraduationImageData | null>(null);
  const graduationShownRef = useRef<Set<string>>(new Set());
  
  // 章節轉場狀態
  const [isChapterTransition, setIsChapterTransition] = useState(false);
  const [transitionChapterTitle, setTransitionChapterTitle] = useState('');
  const [transitionChapterSubtitle, setTransitionChapterSubtitle] = useState('');
  const [transitionChapterQuote, setTransitionChapterQuote] = useState('');
  const [transitionChapterKey, setTransitionChapterKey] = useState('');
  const prevChapterRef = useRef<string>('');
  const chapterTransitionShownRef = useRef<Set<string>>(new Set());

  // 月明值系統對玩家隱藏，不再顯示即時反饋
  
  // 進度 HUD 顯示狀態
  const [isProgressHUDVisible, setIsProgressHUDVisible] = useState(false);

  // 遊戲結束覆蓋層狀態
  const [showGameEndOverlay, setShowGameEndOverlay] = useState(false);
  const gameEndShownRef = useRef(false);

  // 成就系統
  const { pendingAchievement, dismissAchievement, unlockAchievement } = useAchievements();

  // TODO: 第二部節點邏輯待實作
  const currentNode = getYi1NodeById(currentNodeId) || getNodeById(currentNodeId);

  const visualProgress = 1 - arcValue / 180;
  const isYiPart = currentPart === 'yi';
  const themeHue = isYiPart ? 38 : 350;
  const preloadImages = isYiPart
    ? [getSceneImage(currentNodeId)?.image].filter(Boolean) as string[]
    : [];
  const isImagesLoaded = usePreloadImages(preloadImages);

  // 檢測是否在「崩潰」場景（通過 specialScene 欄位或節點 ID）
  const isCollapseScene = useMemo(() => {
    // 優先使用節點的 specialScene 欄位
    if (currentNode?.specialScene === 'collapse') return true;
    
    // 向後兼容：硬編碼的節點 ID 範圍
    const normalizedId = currentNodeId.replace(/^yi1-/, '');
    const match = normalizedId.match(/^chapter-1-(\d+)$/);
    if (match) {
      const nodeNum = parseInt(match[1], 10);
      return nodeNum >= 69 && nodeNum <= 78;
    }
    return false;
  }, [currentNodeId, currentNode?.specialScene]);

  // 檢測是否在選擇時刻（yi1-chapter-1-choice）
  const isChoiceMoment = currentNodeId === 'yi1-chapter-1-choice';

  // 檢測禪意時刻（通過 specialScene === 'zen'）
  useEffect(() => {
    if (currentNode?.specialScene === 'zen' && !zenMomentShownRef.current.has(currentNodeId)) {
      zenMomentShownRef.current.add(currentNodeId);
      // 淡出 BGM，進入禪意時刻
      stopBGM(true);
      // 設定禪意配置
      setZenConfig(currentNode.zenConfig || {
        text: currentNode.text.replace(/\*\*/g, ''), // 移除 markdown 粗體標記
        theme: 'golden',
        duration: 6000,
      });
      setShowZenMoment(true);
    }
  }, [currentNodeId, currentNode, stopBGM]);

  // 檢測啟示時刻（通過 specialScene === 'revelation'）
  useEffect(() => {
    if (currentNode?.specialScene === 'revelation' && !revelationShownRef.current.has(currentNodeId)) {
      revelationShownRef.current.add(currentNodeId);
      // 淡出 BGM，進入啟示時刻
      stopBGM(true);
      // 設定啟示配置
      setRevelationConfig(currentNode.revelationConfig || {
        text: currentNode.text.replace(/\*\*/g, ''), // 移除 markdown 粗體標記
        theme: 'golden',
        duration: 5000,
      });
      setShowRevelation(true);
    }
  }, [currentNodeId, currentNode, stopBGM]);

  // 禪意時刻結束後恢復 BGM
  const handleZenMomentComplete = useCallback(() => {
    setShowZenMoment(false);
    setZenConfig(null);
    // 恢復播放背景音樂
    const bgmType = getBGMForNode(currentNodeId);
    playBGM(bgmType);
  }, [currentNodeId, playBGM]);

  // 啟示時刻結束後恢復 BGM
  const handleRevelationComplete = useCallback(() => {
    setShowRevelation(false);
    setRevelationConfig(null);
    // 恢復播放背景音樂
    const bgmType = getBGMForNode(currentNodeId);
    playBGM(bgmType);
  }, [currentNodeId, playBGM]);

  // 檢測畢業時刻（章節結尾的畢業圖）
  useEffect(() => {
    const gradData = getGraduationImageForNode(currentNodeId);
    if (gradData && !graduationShownRef.current.has(currentNodeId)) {
      graduationShownRef.current.add(currentNodeId);
      // 淡出 BGM，進入畢業時刻
      stopBGM(true);
      setGraduationData(gradData);
      setShowGraduation(true);
      
      // 完成課程，固定加弧度（每課 40°）
      completeLesson(gradData.id);
    }
  }, [currentNodeId, stopBGM, completeLesson]);

  // 畢業時刻結束後恢復 BGM
  const handleGraduationComplete = useCallback(() => {
    setShowGraduation(false);
    setGraduationData(null);
    // 恢復播放背景音樂
    const bgmType = getBGMForNode(currentNodeId);
    playBGM(bgmType);
  }, [currentNodeId, playBGM]);

  // 月明值系統：選項的影響對玩家隱藏，不需要顯示反饋

  // 檢測遊戲結束節點（postscript-end）
  useEffect(() => {
    const normalizedId = currentNodeId.replace(/^yi1-/, '');
    if (normalizedId === 'postscript-end' && !gameEndShownRef.current) {
      gameEndShownRef.current = true;
      // 延遲顯示遊戲結束覆蓋層，讓玩家看完最後一段文字
      const timer = setTimeout(() => {
        stopBGM(true);
        setShowGameEndOverlay(true);
        // 解鎖完成遊戲成就
        unlockAchievement('complete_journey');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentNodeId, stopBGM, unlockAchievement]);

  // 處理遊戲結束覆蓋層點擊
  const handleGameEndComplete = useCallback(() => {
    setShowGameEndOverlay(false);
    // 顯示成就統計頁面，標記為從遊戲結束打開
    setIsEndingStatsFromGameEnd(true);
    setIsEndingStatsOpen(true);
  }, []);

  // 檢測序章開始節點，觸發直排禪意開場動畫
  useEffect(() => {
    // 當進入 prologue-1 且尚未顯示過開場動畫時觸發
    if (currentNodeId === 'prologue-1' && !introSequenceShownRef.current) {
      introSequenceShownRef.current = true;
      setShowIntroSequence(true);
    }
  }, [currentNodeId]);

  // 開場動畫完成後的回調
  const handleIntroComplete = useCallback(() => {
    setShowIntroSequence(false);
    // 自動跳到序章第三個節點（prologue-3），因為開場動畫已經展示了前兩段內容
    // 這避免玩家重複閱讀相同的文字
  }, []);

  // 根據劇情氛圍動態播放背景音樂
  useEffect(() => {
    const bgmType = getBGMForNode(currentNodeId);
    playBGM(bgmType);
    // 不在 cleanup 中 stopBGM，讓音樂持續播放
  }, [currentNodeId]); // eslint-disable-line react-hooks/exhaustive-deps

  // 偵測章節切換並觸發轉場動畫
  useEffect(() => {
    const currentChapter = getChapterNumber(currentNodeId);
    
    // 檢查是否為章節起始節點（節點 ID 以 -1 結尾或包含 -intro）
    const normalizedId = currentNodeId.replace(/^yi1-/, '');
    const isChapterStartNode = 
      normalizedId.endsWith('-1') || 
      normalizedId.includes('-intro') ||
      normalizedId === 'preface-1' ||
      normalizedId === 'prologue-1';
    
    // 如果是新章節的起始節點，且尚未顯示過該章節的轉場
    if (currentChapter && isChapterStartNode && !chapterTransitionShownRef.current.has(currentChapter)) {
      chapterTransitionShownRef.current.add(currentChapter);
      
      const newTitle = getChapterTitle(currentNodeId);
      const chapterKey = getChapterKey(currentNodeId);
      
      // 從章節資料中獲取副標題和金句
      const chapterMeta = yi1ChaptersMeta.find(ch => ch.id === chapterKey);
      const subtitle = chapterMeta?.subtitle || '';
      const quote = chapterMeta?.keyQuote || '';
      
      setTransitionChapterTitle(newTitle);
      setTransitionChapterSubtitle(subtitle);
      setTransitionChapterQuote(quote);
      setTransitionChapterKey(chapterKey);
      setIsChapterTransition(true);
    }
    
    prevChapterRef.current = currentChapter;
  }, [currentNodeId]);

  // 組件卸載時停止音樂
  useEffect(() => {
    return () => {
      stopBGM();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // 根據場景播放環境音效
  useEffect(() => {
    if (!isYiPart) {
      stopAmbient();
      return;
    }

    const sceneConfig = getSceneImage(currentNodeId);
    if (sceneConfig) {
      const ambientType = getAmbientTypeForScene(sceneConfig.alt);
      if (ambientType) {
        playAmbient(ambientType);
      } else {
        stopAmbient();
      }
    } else {
      stopAmbient();
    }
  }, [currentNodeId, isYiPart]); // eslint-disable-line react-hooks/exhaustive-deps

  // 組件卸載時停止環境音
  useEffect(() => {
    return () => {
      stopAmbient();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 序章開場禪意動畫 */}
      {showIntroSequence && (
        <IntroSequence 
          lines={PROLOGUE_INTRO_LINES} 
          onComplete={handleIntroComplete}
          lineDelay={2800}
        />
      )}

      {/* 禪意時刻（由節點 specialScene: 'zen' 觸發） */}
      {showZenMoment && zenConfig && (
        <ZenMoment
          text={zenConfig.text}
          subtitle={zenConfig.subtitle}
          onComplete={handleZenMomentComplete}
          duration={zenConfig.duration || 6000}
          theme={zenConfig.theme || 'golden'}
        />
      )}

      {/* 啟示時刻（由節點 specialScene: 'revelation' 觸發） */}
      {showRevelation && revelationConfig && (
        <RevelationMoment
          text={revelationConfig.text}
          subtitle={revelationConfig.subtitle}
          onComplete={handleRevelationComplete}
          duration={revelationConfig.duration || 5000}
          theme={revelationConfig.theme || 'golden'}
        />
      )}

      {/* 畢業時刻（章節結尾的畢業圖展示） */}
      {showGraduation && graduationData && (
        <GraduationMoment
          data={graduationData}
          onComplete={handleGraduationComplete}
          duration={7000}
        />
      )}

      {/* 場景圖片（如果有） */}
      {isYiPart && !showIntroSequence && (
        <SceneImage nodeId={currentNodeId} hideOverlay={isDialogueHidden} isLoaded={isImagesLoaded} />
      )}

      {/* 粒子背景 */}
      <ParticleBackground arcValue={arcValue} />
      
      {/* 漸變背景（半透明覆蓋，避免遮住場景圖） */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none transition-colors duration-1000"
        style={{
          background: `linear-gradient(180deg,
            hsl(222 ${47 - visualProgress * 10}% ${6 + visualProgress * 4}% / 0.75) 0%,
            hsl(222 ${47 - visualProgress * 15}% ${10 + visualProgress * 5}% / 0.85) 100%
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

      {/* 故障效果覆蓋層 - yi 說話時 */}
      {currentNode?.speaker === 'yi' && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.08, 0, 0.04, 0] }}
          transition={{ duration: 0.6, repeat: 2, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 bg-accent/8" />
          <div 
            className="absolute inset-0"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--accent) / 0.02) 2px, hsl(var(--accent) / 0.02) 4px)',
            }}
          />
        </motion.div>
      )}

      {/* 崩潰刪除場景 - 畫面閃爍與故障效果 */}
      <AnimatePresence>
        {isCollapseScene && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* 紅色脈衝閃爍 */}
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundColor: [
                  'transparent',
                  'hsl(0 70% 50% / 0.06)',
                  'transparent',
                  'hsl(0 70% 50% / 0.04)',
                  'transparent',
                ],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            />
            
            {/* 掃描線效果 */}
            <motion.div
              className="absolute inset-0 glitch-scanlines"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            {/* 隨機位移抖動 */}
            <motion.div
              className="absolute inset-0 border-2 border-destructive/20"
              animate={{
                x: [0, -2, 1, -1, 2, 0],
                y: [0, 1, -1, 1, -1, 0],
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* RGB 分離效果 */}
            <motion.div
              className="absolute inset-0 mix-blend-screen"
              style={{
                boxShadow: 'inset -2px 0 0 hsl(0 100% 50% / 0.08), inset 2px 0 0 hsl(180 100% 50% / 0.08)',
              }}
              animate={{
                boxShadow: [
                  'inset -2px 0 0 hsl(0 100% 50% / 0.08), inset 2px 0 0 hsl(180 100% 50% / 0.08)',
                  'inset -4px 0 0 hsl(0 100% 50% / 0.12), inset 4px 0 0 hsl(180 100% 50% / 0.12)',
                  'inset -2px 0 0 hsl(0 100% 50% / 0.06), inset 2px 0 0 hsl(180 100% 50% / 0.06)',
                ],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 選擇時刻 - 緊張的邊緣發光 */}
      <AnimatePresence>
        {isChoiceMoment && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* 邊緣警告發光 */}
            <motion.div
              className="absolute inset-0"
              style={{
                boxShadow: 'inset 0 0 100px 20px hsl(0 60% 40% / 0.15)',
              }}
              animate={{
                boxShadow: [
                  'inset 0 0 100px 20px hsl(0 60% 40% / 0.1)',
                  'inset 0 0 150px 40px hsl(0 60% 40% / 0.2)',
                  'inset 0 0 100px 20px hsl(0 60% 40% / 0.1)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* 心跳般的脈衝 */}
            <motion.div
              className="absolute inset-0 bg-destructive/5"
              animate={{
                opacity: [0, 0.08, 0, 0, 0.05, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                times: [0, 0.1, 0.2, 0.6, 0.7, 1],
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 章節標題 - 手機優化佈局 */}
      <motion.div
        className="absolute top-12 left-4 sm:top-6 sm:left-6 z-40 max-w-[50%] sm:max-w-none"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xs sm:text-sm text-muted-foreground font-serif-tc truncate">
          {isYiPart ? '弧度歸零：壹' : '弧度歸零：伊'}
        </h2>
        <h3 className="text-sm sm:text-lg text-foreground/80 font-serif-tc truncate">
          {isYiPart ? getChapterTitle(currentNodeId) : '序章・另一個我們'}
        </h3>
      </motion.div>

      {/* 弧度指示器 */}
      <ArcIndicator />

      {/* 進度 HUD */}
      <ProgressHUD
        chapterProgress={progress.readNodes[getChapterKey(currentNodeId)]?.length || 0}
        currentChapterTitle={isYiPart ? getChapterTitle(currentNodeId) : '序章・另一個我們'}
        isVisible={isProgressHUDVisible}
        onToggle={() => setIsProgressHUDVisible(!isProgressHUDVisible)}
      />

      {/* 月明值系統：選項影響隱藏的內心明暗值，不再顯示分數變化 */}

      {/* 成就通知 */}
      <AchievementToast
        achievement={pendingAchievement}
        onClose={dismissAchievement}
      />

      {/* 選單按鈕 */}
      {/* 音量控制 */}
      <AudioControls />

      {/* 選單按鈕 - 手機優化位置 */}
      <motion.div
        className="fixed top-4 right-24 sm:top-6 sm:right-32 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={() => {
            playSFX(isMenuOpen ? 'menu_close' : 'menu_open');
            setIsMenuOpen(!isMenuOpen);
          }}
          className={`
            p-2.5 sm:p-3 rounded-full backdrop-blur-sm border transition-all duration-300 touch-manipulation
            ${isMenuOpen 
              ? 'bg-primary/20 border-primary/50 text-primary' 
              : 'bg-card/50 border-border/50 text-muted-foreground hover:text-foreground hover:border-border'
            }
          `}
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
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

          {/* 藝廊 */}
          {isYiPart && (
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsGalleryOpen(true);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted/50 transition-colors border-t border-border/50"
            >
              <Image className="w-4 h-4 text-primary" />
              藝廊
            </button>
          )}

          {/* 心路歷程（僅第一部） */}
          {currentPart === 'yi' && (
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsJourneyOpen(true);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted/50 transition-colors border-t border-border/50"
            >
              <Map className="w-4 h-4 text-emerald-400" />
              心路歷程
            </button>
          )}

          {/* 結局統計 */}
          <button
            onClick={() => {
              setIsMenuOpen(false);
              setIsEndingStatsOpen(true);
            }}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted/50 transition-colors border-t border-border/50"
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            結局統計
          </button>

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

      {/* 對話框（可隱藏） */}
      <DialogueBox 
        isHidden={isDialogueHidden}
        onToggleHide={() => setIsDialogueHidden(!isDialogueHidden)}
      />

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

      {/* 結局統計彈窗 */}
      <EndingStats 
        isOpen={isEndingStatsOpen} 
        onClose={() => {
          setIsEndingStatsOpen(false);
          setIsEndingStatsFromGameEnd(false);
        }}
        fromGameEnd={isEndingStatsFromGameEnd}
      />

      {/* 心路歷程彈窗 */}
      <JourneyReflection 
        isOpen={isJourneyOpen} 
        onClose={() => setIsJourneyOpen(false)} 
      />

      {/* 章節轉場動畫 - 顯示章節標題、副標題與金句 */}
      <SceneTransition
        isTransitioning={isChapterTransition}
        transitionType="chapter"
        chapterTitle={transitionChapterTitle}
        chapterSubtitle={transitionChapterSubtitle}
        chapterQuote={transitionChapterQuote}
        chapterKey={transitionChapterKey}
        onTransitionComplete={() => setIsChapterTransition(false)}
      />

      {/* 遊戲結束覆蓋層 */}
      <GameEndOverlay
        isVisible={showGameEndOverlay}
        onComplete={handleGameEndComplete}
      />
    </div>
  );
};

export default GameScene;
