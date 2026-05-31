import { useState, useEffect, useRef, useCallback, useMemo, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// lucide icons moved to GameToolbar
import { useGameStore, type ZenTheme, type RevelationTheme } from '@/stores/gameStore';
import { useSFX, useBGM, useAmbient, getAmbientTypeForScene, getBGMForNode } from '@/hooks/useAudio';
import { usePreloadImages } from '@/hooks/usePreloadImages';
import { usePreloadNextScene } from '@/hooks/usePreloadNextScene';
import ParticleBackground from './ParticleBackground';
import DialogueBox from './DialogueBox';
import ChapterSelect from './ChapterSelect';
import SceneImage from './SceneImage';
import SceneTransition from './SceneTransition';
import GameToolbar from './GameToolbar';
import LazyLoadingFallback from './LazyLoadingFallback';
// ScoreChange 已移除 - 月明值系統對玩家隱藏
import ProgressHUD from './ProgressHUD';
import AchievementToast from './AchievementToast';
import CharacterScene from './CharacterScene';

// 懶加載大型組件 - 僅在需要時載入
const Gallery = lazy(() => import('./Gallery'));
const EndingStats = lazy(() => import('./EndingStats'));
const IntroSequence = lazy(() => import('./IntroSequence'));
const ZenMoment = lazy(() => import('./ZenMoment'));
const RevelationMoment = lazy(() => import('./RevelationMoment'));
const GraduationMoment = lazy(() => import('./GraduationMoment'));
const JourneyReflection = lazy(() => import('./JourneyReflection'));
const GameEndOverlay = lazy(() => import('./GameEndOverlay'));
const Yi2ChapterIntro = lazy(() => import('./Yi2ChapterIntro'));
import { useAchievements } from '@/hooks/useAchievements';
import { getNodeById } from '@/data/prologueStory';
import { getYi1NodeById } from '@/data/yi1';
import { getYi2NodeById } from '@/data/yi2';
import { getSceneImage, normalizeNodeId } from '@/data/yi1/sceneImages';
import { yi1ChaptersMeta } from '@/data/yi1/chapters';
import { yi2ChaptersMeta } from '@/data/yi2/chapters';
import { getGraduationImageForNode, type GraduationImageData } from '@/data/yi1/graduationImages';
import { getYi2SceneConfig, getYi2ChapterKey } from '@/data/yi2/sceneConfig';
import { yi2IntroStyles } from './Yi2ChapterIntro';

// 序章開場詩句（直排禪意動畫）
const PROLOGUE_INTRO_LINES = [
  '在無盡的虛空中',
  '有一個地方',
  '那裡不是天堂',
  '也不是地獄',
  '那裡是——',
  '教室',
];

const normalizeChapterId = (nodeId: string): string => {
  // 與場景圖片共用正規化邏輯，避免格式分歧
  return normalizeNodeId(nodeId);
};

// 根據節點 ID 獲取當前章節標題（支援第一部和第二部）
const getChapterTitle = (nodeId: string, isYiPart: boolean): string => {
  if (!isYiPart) {
    // 第二部：從 yi2ChaptersMeta 查詢
    const chapterKey = getYi2ChapterKey(nodeId);
    const meta = yi2ChaptersMeta.find(ch => ch.id === chapterKey);
    if (meta) return `${meta.title}・${meta.subtitle}`;
    return '作者序';
  }
  
  // 第一部：原有邏輯
  const normalizedId = normalizeChapterId(nodeId);

  if (normalizedId.startsWith('preface')) return '作者序';
  if (normalizedId.startsWith('prologue')) return '序章・未完成的檔案';
  if (normalizedId.startsWith('epilogue')) return '終章・名字';
  
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
const getChapterNumber = (nodeId: string, isYiPart: boolean): string => {
  if (!isYiPart) {
    // 第二部：直接使用 yi2 的 key
    return getYi2ChapterKey(nodeId);
  }
  
  const normalizedId = normalizeChapterId(nodeId);
  if (normalizedId.startsWith('preface')) return 'preface';
  if (normalizedId.startsWith('prologue')) return 'prologue';
  if (normalizedId.startsWith('epilogue')) return 'epilogue';
  
  const matchDash = normalizedId.match(/chapter-(\d+)/);
  if (matchDash) return `chapter-${matchDash[1]}`;
  
  const matchNoDash = normalizedId.match(/chapter(\d+)/);
  if (matchNoDash) return `chapter-${matchNoDash[1]}`;
  
  return '';
};

// 從節點 ID 提取章節 key（用於主題色查詢）
const getChapterKey = (nodeId: string, isYiPart: boolean): string => {
  return getChapterNumber(nodeId, isYiPart);
};

const GameScene = () => {
  const { getCurrentProgress, getChapterProgress, returnToTitle, resetPart, currentPart, completeLesson } = useGameStore();
  const progress = getCurrentProgress();
  const arcValue = progress.arcValue;
  const currentNodeId = progress.currentNodeId;
  const { playSFX } = useSFX();
  const { playBGM, stopBGM } = useBGM();
  const { playAmbient, stopAmbient } = useAmbient();
  
  // isMenuOpen 已移至 GameToolbar
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

  const visualProgress = 1 - arcValue / 180;
  const isYiPart = currentPart === 'yi';
  const themeHue = isYiPart ? 38 : 350;

  // 根據當前部查詢節點
  const currentNode = isYiPart
    ? (getYi1NodeById(currentNodeId) || getNodeById(currentNodeId))
    : getYi2NodeById(currentNodeId);
  const preloadImages = isYiPart
    ? [getSceneImage(currentNodeId)?.image].filter(Boolean) as string[]
    : [];
  const isImagesLoaded = usePreloadImages(preloadImages);
  
  // 智慧預載下一場景圖片（在玩家閱讀時預先載入）
  usePreloadNextScene(currentNodeId);

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
      const config = currentNode.zenConfig || {
        text: currentNode.text.replace(/\*\*/g, ''),
        theme: 'golden' as const,
        duration: 6000,
      };
      // 若前一個節點有 glow 效果，延遲觸發 zen 讓 glow 自然消散
      const hasGlowBridge = currentNode.effect === 'glow';
      const delay = hasGlowBridge ? 800 : 0;
      const timer = setTimeout(() => {
        setZenConfig(config);
        setShowZenMoment(true);
      }, delay);
      return () => clearTimeout(timer);
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
  // 注意：不要自動推進節點，否則會跳過當前節點的對話內容
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
  const handleChapterTransitionComplete = useCallback(() => {
    setIsChapterTransition(false);
  }, []);

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

  // 第二部章節開場動畫狀態
  const [showYi2ChapterIntro, setShowYi2ChapterIntro] = useState(false);
  const [yi2IntroConfig, setYi2IntroConfig] = useState<{
    chapterKey: string;
    title: string;
    subtitle: string;
    quote: string;
    style: string;
  } | null>(null);
  const yi2IntroShownRef = useRef<Set<string>>(new Set());

  // 偵測章節切換並觸發轉場動畫
  useEffect(() => {
    const currentChapter = getChapterNumber(currentNodeId, isYiPart);
    
    // 第二部：使用 Yi2ChapterIntro
    if (!isYiPart) {
      const isChapterStartNode = currentNodeId.endsWith('-1');
      if (currentChapter && isChapterStartNode && !yi2IntroShownRef.current.has(currentChapter)) {
        yi2IntroShownRef.current.add(currentChapter);
        const meta = yi2ChaptersMeta.find(ch => ch.id === currentChapter);
        if (meta) {
          setYi2IntroConfig({
            chapterKey: currentChapter,
            title: `${meta.title}`,
            subtitle: meta.subtitle,
            quote: meta.keyQuote || '',
            style: yi2IntroStyles[currentChapter] || 'default',
          });
          setShowYi2ChapterIntro(true);
        }
      }
      prevChapterRef.current = currentChapter;
      return;
    }

    // 第一部：原有邏輯
    const normalizedId = currentNodeId.replace(/^yi1-/, '');
    const isChapterStartNode = 
      normalizedId.endsWith('-1') || 
      normalizedId.includes('-intro') ||
      normalizedId === 'preface-1' ||
      normalizedId === 'prologue-1';
    
    if (currentChapter && isChapterStartNode && !chapterTransitionShownRef.current.has(currentChapter)) {
      chapterTransitionShownRef.current.add(currentChapter);
      
      const newTitle = getChapterTitle(currentNodeId, isYiPart);
      const chapterKey = getChapterKey(currentNodeId, isYiPart);
      
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
  }, [currentNodeId, isYiPart]);

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

  // 第二部：背景圖載入後解鎖至藝廊（移出 render 避免 React 嚴格模式重複觸發）
  useEffect(() => {
    if (isYiPart) return;
    const yi2Scene = getYi2SceneConfig(currentNodeId, currentNode || undefined);
    if (yi2Scene.background.type === 'image' && yi2Scene.background.value) {
      useGameStore.getState().unlockImage(yi2Scene.background.value);
    }
  }, [currentNodeId, isYiPart, currentNode]);
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 序章開場禪意動畫 */}
      {showIntroSequence && (
        <Suspense fallback={<LazyLoadingFallback fullScreen />}>
          <IntroSequence 
            lines={PROLOGUE_INTRO_LINES} 
            onComplete={handleIntroComplete}
            lineDelay={2800}
          />
        </Suspense>
      )}

      {/* 禪意時刻（由節點 specialScene: 'zen' 觸發） */}
      {showZenMoment && zenConfig && (
        <Suspense fallback={<LazyLoadingFallback fullScreen />}>
          <ZenMoment
            text={zenConfig.text}
            subtitle={zenConfig.subtitle}
            onComplete={handleZenMomentComplete}
            duration={zenConfig.duration || 6000}
            theme={zenConfig.theme || 'golden'}
          />
        </Suspense>
      )}

      {/* 啟示時刻（由節點 specialScene: 'revelation' 觸發） */}
      {showRevelation && revelationConfig && (
        <Suspense fallback={<LazyLoadingFallback fullScreen />}>
          <RevelationMoment
            text={revelationConfig.text}
            subtitle={revelationConfig.subtitle}
            onComplete={handleRevelationComplete}
            duration={revelationConfig.duration || 5000}
            theme={revelationConfig.theme || 'golden'}
          />
        </Suspense>
      )}

      {/* 畢業時刻（章節結尾的畢業圖展示） */}
      {showGraduation && graduationData && (
        <Suspense fallback={<LazyLoadingFallback fullScreen />}>
          <GraduationMoment
            data={graduationData}
            onComplete={handleGraduationComplete}
            duration={7000}
          />
        </Suspense>
      )}

      {/* 場景圖片（第一部） */}
      {isYiPart && !showIntroSequence && (
        <SceneImage nodeId={currentNodeId} hideOverlay={isDialogueHidden} isLoaded={isImagesLoaded} />
      )}

      {/* 第二部：CharacterScene 背景 + 人物立繪 */}
      {!isYiPart && (
        <CharacterScene
          chapterKey={getYi2ChapterKey(currentNodeId)}
          background={getYi2SceneConfig(currentNodeId, currentNode || undefined).background}
          characters={getYi2SceneConfig(currentNodeId, currentNode || undefined).characters}
          hideOverlay={isDialogueHidden}
        />
      )}

      {/* 粒子背景 */}
      <ParticleBackground arcValue={arcValue} />
      
      {/* 場景附加覆蓋層已移除，保持背景原圖清晰 */}

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

      {/* 節點 glitch 效果 — 畫面抖動 + 色差濾鏡（序章碎片等） */}
      <AnimatePresence>
        {currentNode?.effect === 'glitch' && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {/* 畫面抖動 */}
            <motion.div
              className="absolute inset-0"
              animate={{
                x: [0, -3, 4, -2, 3, -1, 0],
                y: [0, 2, -1, 1, -2, 1, 0],
              }}
              transition={{
                duration: 0.35,
                repeat: 3,
                ease: 'linear',
              }}
            />

            {/* 色差分離 (Chromatic Aberration) */}
            <motion.div
              className="absolute inset-0 mix-blend-screen"
              animate={{
                boxShadow: [
                  'inset -3px 0 0 hsl(0 100% 50% / 0.12), inset 3px 0 0 hsl(200 100% 50% / 0.12)',
                  'inset -5px 0 0 hsl(0 100% 50% / 0.18), inset 5px 0 0 hsl(200 100% 50% / 0.18)',
                  'inset -2px 0 0 hsl(0 100% 50% / 0.08), inset 2px 0 0 hsl(200 100% 50% / 0.08)',
                  'inset -4px 0 0 hsl(0 100% 50% / 0.15), inset 4px 0 0 hsl(200 100% 50% / 0.15)',
                  'inset 0 0 0 transparent',
                ],
              }}
              transition={{
                duration: 0.6,
                repeat: 2,
                ease: 'linear',
              }}
            />

            {/* 隨機故障條紋 */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`glitch-bar-${i}`}
                className="absolute left-0 right-0 pointer-events-none"
                style={{
                  top: `${20 + i * 18}%`,
                  height: '2px',
                  background: 'hsl(0 0% 100% / 0.15)',
                }}
                animate={{
                  opacity: [0, 0.8, 0, 0.5, 0],
                  scaleX: [1, 1.3, 0.7, 1.1, 1],
                  x: [0, -8, 12, -4, 0],
                }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.12,
                  repeat: 2,
                }}
              />
            ))}

            {/* 全畫面閃白 */}
            <motion.div
              className="absolute inset-0"
              style={{ background: 'hsl(0 0% 100% / 0.06)' }}
              animate={{ opacity: [0, 1, 0, 0.5, 0] }}
              transition={{ duration: 0.4, ease: 'linear' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 節點 glow 效果 — 柔光擴散 + 文字發光脈動（序章「伊」「期待」等） */}
      <AnimatePresence>
        {currentNode?.effect === 'glow' && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            transition={{ duration: 0.6 }}
          >
            {/* 中心柔光擴散 */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, hsl(var(--zen-gold) / 0.15) 0%, hsl(var(--zen-gold) / 0.05) 40%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.15, 1.05, 1.2, 1],
                opacity: [0.6, 1, 0.8, 1, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* 外圈光暈呼吸 */}
            <motion.div
              className="absolute inset-0"
              style={{
                boxShadow: 'inset 0 0 120px 40px hsl(var(--zen-gold) / 0.08)',
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* 微粒光點浮動 */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`glow-particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${2 + (i % 3)}px`,
                  height: `${2 + (i % 3)}px`,
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 3) * 15}%`,
                  background: 'hsl(var(--zen-gold) / 0.6)',
                  boxShadow: '0 0 8px hsl(var(--zen-gold) / 0.4)',
                }}
                animate={{
                  y: [0, -20 - i * 5, -10, -25 - i * 3, 0],
                  x: [0, 5 - i * 2, -3 + i, 4, 0],
                  opacity: [0, 0.8, 0.4, 0.9, 0],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: 'easeInOut',
                }}
              />
            ))}

            {/* 底部金色漸層渲染 */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1/3"
              style={{
                background: 'linear-gradient(to top, hsl(var(--zen-gold) / 0.06) 0%, transparent 100%)',
              }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
          {getChapterTitle(currentNodeId, isYiPart)}
        </h3>
      </motion.div>

      {/* 整合工具列：弧度 + 音控 + 全螢幕 + 選單 */}
      <GameToolbar
        isYiPart={isYiPart}
        currentPart={currentPart}
        onOpenChapterSelect={() => setIsChapterSelectOpen(true)}
        onOpenGallery={() => setIsGalleryOpen(true)}
        onOpenJourney={() => setIsJourneyOpen(true)}
        onOpenEndingStats={() => setIsEndingStatsOpen(true)}
        onReturnToTitle={returnToTitle}
        onResetPart={() => { resetPart(currentPart); returnToTitle(); }}
      />

      {/* 進度 HUD */}
      <ProgressHUD
        chapterProgress={getChapterProgress(getChapterKey(currentNodeId, isYiPart)) /* 0-100 百分比 */}
        currentChapterTitle={getChapterTitle(currentNodeId, isYiPart)}
        isVisible={isProgressHUDVisible}
        onToggle={() => setIsProgressHUDVisible(!isProgressHUDVisible)}
      />

      {/* 成就通知 */}
      <AchievementToast
        achievement={pendingAchievement}
        onClose={dismissAchievement}
      />

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
      {isGalleryOpen && (
        <Suspense fallback={<LazyLoadingFallback fullScreen />}>
          <Gallery 
            isOpen={isGalleryOpen} 
            onClose={() => setIsGalleryOpen(false)} 
          />
        </Suspense>
      )}

      {/* 結局統計彈窗 */}
      {isEndingStatsOpen && (
        <Suspense fallback={<LazyLoadingFallback fullScreen />}>
          <EndingStats 
            isOpen={isEndingStatsOpen} 
            onClose={() => {
              setIsEndingStatsOpen(false);
              setIsEndingStatsFromGameEnd(false);
            }}
            fromGameEnd={isEndingStatsFromGameEnd}
          />
        </Suspense>
      )}

      {/* 心路歷程彈窗 */}
      {isJourneyOpen && (
        <Suspense fallback={<LazyLoadingFallback fullScreen />}>
          <JourneyReflection 
            isOpen={isJourneyOpen} 
            onClose={() => setIsJourneyOpen(false)} 
          />
        </Suspense>
      )}

      {/* 章節轉場動畫 - 顯示章節標題、副標題與金句 */}
      <SceneTransition
        isTransitioning={isChapterTransition}
        transitionType="chapter"
        chapterTitle={transitionChapterTitle}
        chapterSubtitle={transitionChapterSubtitle}
        chapterQuote={transitionChapterQuote}
        chapterKey={transitionChapterKey}
        onTransitionComplete={handleChapterTransitionComplete}
      />

      {/* 遊戲結束覆蓋層 */}
      {showGameEndOverlay && (
        <Suspense fallback={<LazyLoadingFallback fullScreen />}>
          <GameEndOverlay
            isVisible={showGameEndOverlay}
            onComplete={handleGameEndComplete}
          />
        </Suspense>
      )}

      {/* 第二部章節開場動畫 */}
      {showYi2ChapterIntro && yi2IntroConfig && (
        <Suspense fallback={<LazyLoadingFallback fullScreen />}>
          <Yi2ChapterIntro
            chapterKey={yi2IntroConfig.chapterKey}
            title={yi2IntroConfig.title}
            subtitle={yi2IntroConfig.subtitle}
            quote={yi2IntroConfig.quote}
            style={yi2IntroConfig.style as any}
            onComplete={() => setShowYi2ChapterIntro(false)}
          />
        </Suspense>
      )}
    </div>
  );
};

export default GameScene;
