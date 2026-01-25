import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/stores/gameStore';
import { X, Sparkles, Palette, GitBranch, BookOpen, Clock, Trophy, Star, Map, Award, Lock, Compass, Eye, Book, Zap, Flame, Heart, Shield, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useShareImage } from '@/hooks/useShareImage';
import ShareButtons from './ShareButtons';
import ShareCard from './ShareCard';
import JourneyReflection from './JourneyReflection';
import { useAchievements } from '@/hooks/useAchievements';
import MoonPhaseIndicator from './MoonPhaseIndicator';
import MoonEndingRemarks from './MoonEndingRemarks';
import ArcCompleteCelebration from './ArcCompleteCelebration';

interface EndingStatsProps {
  isOpen: boolean;
  onClose: () => void;
  fromGameEnd?: boolean; // 是否從遊戲結束畫面打開
  onReturnToTitle?: () => void; // 返回首頁的回調
}

// 全篇總選項數（根據實際章節選項統計）
// ch1:1, ch4:1, ch7:3, ch8:3, ch9:2, ch10:2, ch11:2, ch12:2 = 16個
const TOTAL_CHOICES_AVAILABLE = 24;

// Calculate ending type based on arc value (0-360 system)
const getEndingType = (arcValue: number): { title: string; description: string; color: string } => {
  if (arcValue >= 360) {
    return {
      title: '圓滿弧度',
      description: '你完成了完整的旅程，從0°走到360°，弧度圓滿。你已認識了完整的自己。',
      color: 'text-amber-400',
    };
  } else if (arcValue >= 270) {
    return {
      title: '和解弧度',
      description: '你在光與影之間找到了平衡，學會了與自己和解。',
      color: 'text-emerald-400',
    };
  } else if (arcValue >= 180) {
    return {
      title: '探索弧度',
      description: '你已走過一半的旅程，繼續前進，完整就在不遠處。',
      color: 'text-blue-400',
    };
  } else if (arcValue >= 90) {
    return {
      title: '啟程弧度',
      description: '你開始認識自己，旅程仍在繼續。弧度等待被補完。',
      color: 'text-cyan-400',
    };
  } else {
    return {
      title: '迷霧弧度',
      description: '迷霧仍未散去，或許需要更多勇氣面對內心的聲音。',
      color: 'text-gray-400',
    };
  }
};

// 完整度計算與調侃語句
const getCompletenessData = (choicesMade: number, totalAvailable: number) => {
  const percentage = Math.round((choicesMade / totalAvailable) * 100);
  
  // 根據完整度返回對應的調侃語句（會輪播）
  let teasingMessages: string[] = [];
  let level: 'perfect' | 'good' | 'medium' | 'low' = 'low';
  
  if (percentage >= 100) {
    level = 'perfect';
    teasingMessages = [
      '✨ 恭喜你，真正的完美主義者！連問心都在鼓掌！',
      '🌟 每一個選擇都沒放過，這執著讓我感動！',
      '💫 你是不是連攻略都看完了？（開玩笑的）',
    ];
  } else if (percentage >= 75) {
    level = 'good';
    teasingMessages = [
      '👏 做得不錯！只差一點點就完美了～',
      '🎯 看來你很認真體驗這趟旅程呢',
      '💪 距離完美就差那麼一咪咪',
    ];
  } else if (percentage >= 50) {
    level = 'medium';
    teasingMessages = [
      '🤔 一半一半……是選擇困難症嗎？',
      '😅 有些關鍵時刻你選擇了沉默呢',
      '🎭 猶豫之間，錯過了一些風景',
      '💭 下次可以更勇敢一點喔',
    ];
  } else if (percentage >= 25) {
    level = 'low';
    teasingMessages = [
      '😶 你……是不是一直按跳過？',
      '🙈 問心：「我說了那麼多，你到底有沒有在聽！」',
      '💤 這趟旅程你好像有點心不在焉呢',
      '🌫️ 很多選擇的岔路，你都擦肩而過了',
    ];
  } else {
    level = 'low';
    teasingMessages = [
      '😱 你確定有玩過嗎？！',
      '🏃 快到終點才發現你一直在趕路',
      '📖 這本書你好像只看了封面和封底',
      '🤯 問心表示：我講的你一個字都沒聽進去吧',
      '💔 歷史人物們：「我們的故事白說了」',
    ];
  }
  
  return { percentage, level, teasingMessages };
};

const getGameExperienceSuggestions = (arcValue: number, choicesMade: number, totalAvailable: number) => {
  const completion = totalAvailable > 0 ? (choicesMade / totalAvailable) * 100 : 0;

  if (arcValue >= 360 && completion >= 90) {
    return {
      title: '弧度歸零的圓滿建議',
      description: '你已經走完完整弧度，不妨換個節奏再進一次：刻意選擇與直覺相反的選項，觀察「伊」與問心帶來的新視角。',
    };
  }

  if (arcValue >= 270) {
    return {
      title: '深化體驗的下一步',
      description: '你已經跨過多數章節，建議回到最早的章節，挑戰那些你當時沒選的分支，讓命樹長出新的枝條。',
    };
  }

  if (arcValue >= 180) {
    return {
      title: '讓旅程更完整',
      description: '你已走過半程，試著在每章停留久一點，反覆閱讀金句並開啟不同選項，會出現更深層的共鳴。',
    };
  }

  if (completion >= 60) {
    return {
      title: '加深故事的連結',
      description: '你已經做了不少選擇，下一次可以專注於每位歷史角色的指引，留意他們的隱藏提問。',
    };
  }

  return {
    title: '重新進入故事的建議',
    description: '若你想更完整體驗，建議放慢節奏、盡量不跳過敘事，並在每章做出至少一個關鍵選擇。',
  };
};

// 收集顏色的展示配置
const colorConfig: Record<string, { name: string; bg: string; glow: string }> = {
  amber: { name: '琥珀', bg: 'bg-amber-500', glow: 'shadow-amber-500/50' },
  emerald: { name: '翠綠', bg: 'bg-emerald-500', glow: 'shadow-emerald-500/50' },
  violet: { name: '紫羅蘭', bg: 'bg-violet-500', glow: 'shadow-violet-500/50' },
  rose: { name: '玫瑰', bg: 'bg-rose-500', glow: 'shadow-rose-500/50' },
  cyan: { name: '青碧', bg: 'bg-cyan-500', glow: 'shadow-cyan-500/50' },
  gold: { name: '金黃', bg: 'bg-yellow-500', glow: 'shadow-yellow-500/50' },
  crimson: { name: '緋紅', bg: 'bg-red-600', glow: 'shadow-red-600/50' },
  azure: { name: '蔚藍', bg: 'bg-blue-500', glow: 'shadow-blue-500/50' },
};

// 成就圖標映射
const achievementIconMap: Record<string, React.FC<{ className?: string }>> = {
  compass: Compass,
  eye: Eye,
  book: Book,
  star: Star,
  trophy: Trophy,
  sparkles: Sparkles,
  zap: Zap,
  flame: Flame,
  heart: Heart,
  shield: Shield,
};

// 稀有度顏色映射
const rarityConfig: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  common: { bg: 'bg-slate-600/50', border: 'border-slate-500/50', text: 'text-slate-300', glow: '' },
  rare: { bg: 'bg-blue-600/50', border: 'border-blue-500/50', text: 'text-blue-300', glow: 'shadow-blue-500/30' },
  epic: { bg: 'bg-purple-600/50', border: 'border-purple-500/50', text: 'text-purple-300', glow: 'shadow-purple-500/30' },
  legendary: { bg: 'bg-amber-600/50', border: 'border-amber-500/50', text: 'text-amber-300', glow: 'shadow-amber-500/50' },
};

const EndingStats = ({ isOpen, onClose, fromGameEnd = false, onReturnToTitle }: EndingStatsProps) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const shareCardRef = useRef<HTMLDivElement>(null);
  const { getCurrentProgress, currentPart, returnToTitle } = useGameStore();
  const progress = getCurrentProgress();
  const {
    isGenerating,
    downloadImage,
    shareToTwitter,
    shareToFacebook,
    shareToLine,
    copyToClipboard,
    nativeShare,
  } = useShareImage();
  
  // 旅程回顧頁面狀態
  const [showJourneyReflection, setShowJourneyReflection] = useState(false);
  
  // 360 celebration animation state
  const [showArcCelebration, setShowArcCelebration] = useState(false);
  const [hasShownCelebration, setHasShownCelebration] = useState(false);
  
  // 成就系統
  const { achievements, unlockedIds, unlockedCount, totalCount, unlockAchievement } = useAchievements();
  
  // 獲取月明值
  const { getMoonClarity } = useGameStore();
  const moonClarity = getMoonClarity();
  
  const { arcValue, colorsCollected, choicesHistory, readNodes, lastReadAt, moonBrightValue, moonDarkValue } = progress;
  
  // 計算統計數據
  const totalNodesRead = Object.values(readNodes || {}).reduce((sum, nodes) => sum + nodes.length, 0);
  const chaptersVisited = Object.keys(readNodes || {}).length;
  const totalChoices = Object.keys(choicesHistory || {}).length;
  const ending = getEndingType(arcValue);
  const suggestions = getGameExperienceSuggestions(arcValue, totalChoices, TOTAL_CHOICES_AVAILABLE);
  
  // 計算完整度
  const completeness = getCompletenessData(totalChoices, TOTAL_CHOICES_AVAILABLE);
  
  // 跑馬燈狀態
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  // 360 celebration animation trigger
  useEffect(() => {
    if (isOpen && arcValue >= 360 && !hasShownCelebration) {
      setShowArcCelebration(true);
      setHasShownCelebration(true);
      // Unlock arc complete achievement
      unlockAchievement('arc_complete');
    }
  }, [isOpen, arcValue, hasShownCelebration, unlockAchievement]);
  
  // 跑馬燈輪播
  useEffect(() => {
    if (!isOpen || completeness.teasingMessages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % completeness.teasingMessages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isOpen, completeness.teasingMessages.length]);
  
  // 格式化時間
  const formatPlayTime = (timestamp: number | null) => {
    if (!timestamp) return '未知';
    const date = new Date(timestamp);
    return date.toLocaleDateString('zh-TW', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // 分享相關處理
  const gameName = currentPart === 'yi' ? '弧度歸零：壹' : '弧度歸零：伊';
  const shareText = `我在《${gameName}》達成了「${ending.title}」！弧度值：${arcValue}°，收集了 ${colorsCollected?.length || 0} 種顏色。`;
  
  // 使用分享卡片模板生成圖片
  const handleDownload = () => {
    downloadImage(shareCardRef.current, { filename: `${gameName}-ending.png` });
  };

  const handleCopy = () => {
    copyToClipboard(shareCardRef.current);
  };

  const handleNativeShare = () => {
    nativeShare(shareCardRef.current, {
      title: `${gameName} - ${ending.title}`,
      text: shareText,
      url: window.location.href,
    });
  };

  const handleTwitterShare = () => {
    shareToTwitter(shareText, window.location.href);
  };

  const handleFacebookShare = () => {
    shareToFacebook(window.location.href);
  };

  const handleLineShare = () => {
    shareToLine(shareText, window.location.href);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <motion.div
        ref={statsRef}
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-surface-dark to-background border border-border/50 rounded-2xl shadow-2xl"
      >
        {/* 關閉按鈕 */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            if (fromGameEnd) {
              onClose();
              returnToTitle();
            } else {
              onClose();
            }
          }}
          className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* 標題區域 */}
        <div className="p-8 pb-4 text-center border-b border-border/30">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-primary/30 to-accent/30"
          >
            <Trophy className={`w-8 h-8 ${ending.color}`} />
          </motion.div>
          <h2 className="text-2xl font-serif-tc font-bold text-foreground mb-2">
            {currentPart === 'yi' ? '弧度歸零：壹' : '弧度歸零：伊'}
          </h2>
          <p className="text-sm text-muted-foreground">結局統計</p>
        </div>

        {/* 結局類型 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-6 mt-6 p-4 rounded-xl bg-surface/50 border border-border/30"
        >
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className={`w-5 h-5 ${ending.color}`} />
            <h3 className={`text-lg font-semibold ${ending.color}`}>{ending.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{ending.description}</p>
        </motion.div>

        {/* 弧度值顯示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-6 mt-4 p-4 rounded-xl bg-surface/50 border border-border/30"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">最終弧度值</span>
            <span className="text-2xl font-bold text-primary">{arcValue}°</span>
          </div>
          <div className="h-3 rounded-full bg-muted/30 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(arcValue / 360) * 100}%` }}
              transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
            <span>0°</span>
            <span>360°</span>
          </div>
        </motion.div>

        {/* 月明程度視覺化 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
          className="mx-6 mt-4 p-6 rounded-xl bg-gradient-to-b from-surface/60 to-surface/30 border border-border/30"
        >
          <h4 className="text-sm font-medium text-muted-foreground mb-4 text-center">
            內心月相
          </h4>
          <MoonPhaseIndicator size="md" showLabel={true} />
        </motion.div>

        {/* Moon Ending Remarks - Personalized commentary */}
        <MoonEndingRemarks clarity={moonClarity} className="mx-6 mt-4" />

        {/* 完整度區塊 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mx-6 mt-4 p-4 rounded-xl bg-surface/50 border border-border/30"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              <Star className="w-4 h-4" />
              旅程完整度
            </span>
            <span className={`text-2xl font-bold ${
              completeness.level === 'perfect' ? 'text-amber-400' :
              completeness.level === 'good' ? 'text-emerald-400' :
              completeness.level === 'medium' ? 'text-blue-400' :
              'text-gray-400'
            }`}>
              {completeness.percentage}%
            </span>
          </div>
          <div className="h-3 rounded-full bg-muted/30 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${completeness.percentage}%` }}
              transition={{ delay: 0.55, duration: 1, ease: 'easeOut' }}
              className={`h-full rounded-full ${
                completeness.level === 'perfect' ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400' :
                completeness.level === 'good' ? 'bg-gradient-to-r from-emerald-500 to-teal-400' :
                completeness.level === 'medium' ? 'bg-gradient-to-r from-blue-500 to-cyan-400' :
                'bg-gradient-to-r from-gray-500 to-gray-400'
              }`}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
            <span>已做 {totalChoices} 個選擇</span>
            <span>共 {TOTAL_CHOICES_AVAILABLE} 個</span>
          </div>
          
          {/* 跑馬燈調侃 */}
          <motion.div 
            className="mt-4 relative h-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMessageIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`text-sm text-center px-4 ${
                    completeness.level === 'perfect' ? 'text-amber-300' :
                    completeness.level === 'good' ? 'text-emerald-300' :
                    completeness.level === 'medium' ? 'text-blue-300' :
                    'text-gray-400'
                  }`}
                >
                  {completeness.teasingMessages[currentMessageIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
            {completeness.teasingMessages.length > 1 && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-1">
                {completeness.teasingMessages.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      idx === currentMessageIndex ? 'bg-primary' : 'bg-muted/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* 遊戲體驗建議 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.47 }}
          className="mx-6 mt-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20"
        >
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Gem className="w-4 h-4" />
            <span className="text-sm font-medium">{suggestions.title}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{suggestions.description}</p>
        </motion.div>

        {/* 旅程回顧按鈕 */}
        {currentPart === 'yi' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48 }}
            className="mx-6 mt-4"
          >
            <Button
              onClick={() => setShowJourneyReflection(true)}
              variant="outline"
              className="w-full py-6 border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all group"
            >
              <Map className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-foreground font-medium">查看心路歷程</span>
              <span className="ml-2 text-xs text-muted-foreground">從破碎到完整的英雄之旅</span>
            </Button>
          </motion.div>
        )}

        {/* 統計網格 */}
        <div className="grid grid-cols-2 gap-4 mx-6 mt-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="p-4 rounded-xl bg-surface/50 border border-border/30 text-center"
          >
            <BookOpen className="w-6 h-6 mx-auto mb-2 text-blue-400" />
            <div className="text-2xl font-bold text-foreground">{totalNodesRead}</div>
            <div className="text-xs text-muted-foreground">閱讀節點數</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55 }}
            className="p-4 rounded-xl bg-surface/50 border border-border/30 text-center"
          >
            <GitBranch className="w-6 h-6 mx-auto mb-2 text-emerald-400" />
            <div className="text-2xl font-bold text-foreground">{totalChoices}</div>
            <div className="text-xs text-muted-foreground">關鍵抉擇</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="p-4 rounded-xl bg-surface/50 border border-border/30 text-center"
          >
            <Palette className="w-6 h-6 mx-auto mb-2 text-violet-400" />
            <div className="text-2xl font-bold text-foreground">{colorsCollected?.length || 0}</div>
            <div className="text-xs text-muted-foreground">收集顏色</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65 }}
            className="p-4 rounded-xl bg-surface/50 border border-border/30 text-center"
          >
            <Clock className="w-6 h-6 mx-auto mb-2 text-amber-400" />
            <div className="text-2xl font-bold text-foreground">{chaptersVisited}</div>
            <div className="text-xs text-muted-foreground">造訪章節</div>
          </motion.div>
        </div>

        {/* 收集的顏色展示 */}
        {colorsCollected && colorsCollected.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mx-6 mt-4 p-4 rounded-xl bg-surface/50 border border-border/30"
          >
            <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
              <Palette className="w-4 h-4" />
              收集的顏色
            </h4>
            <div className="flex flex-wrap gap-2">
              {colorsCollected.map((color, index) => {
                const config = colorConfig[color] || { name: color, bg: 'bg-gray-500', glow: '' };
                return (
                  <motion.div
                    key={color}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                    className={`px-3 py-1.5 rounded-full ${config.bg} text-white text-xs font-medium shadow-lg ${config.glow}`}
                  >
                    {config.name}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* 關鍵選擇歷史 */}
        {Object.keys(choicesHistory || {}).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mx-6 mt-4 p-4 rounded-xl bg-surface/50 border border-border/30"
          >
            <h4 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              關鍵抉擇回顧
            </h4>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {Object.entries(choicesHistory).slice(-10).map(([id, text], index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <span className="text-primary/60">•</span>
                  <span className="text-foreground/80">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 成就展示區 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="mx-6 mt-4 p-4 rounded-xl bg-surface/50 border border-border/30"
        >
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Award className="w-4 h-4" />
              成就徽章
            </h4>
            <span className="text-xs text-muted-foreground">
              {unlockedCount} / {totalCount} ({Math.round((unlockedCount / totalCount) * 100)}%)
            </span>
          </div>
          
          {/* 成就進度條 */}
          <div className="h-2 rounded-full bg-muted/30 overflow-hidden mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(unlockedCount / totalCount) * 100}%` }}
              transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500"
            />
          </div>
          
          {/* 成就網格 */}
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {achievements.map((achievement, index) => {
              const isUnlocked = unlockedIds.includes(achievement.id);
              const rarity = rarityConfig[achievement.rarity] || rarityConfig.common;
              const IconComponent = achievementIconMap[achievement.icon] || Trophy;
              
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.03 }}
                  className={`relative group aspect-square rounded-lg border p-2 flex flex-col items-center justify-center transition-all ${
                    isUnlocked 
                      ? `${rarity.bg} ${rarity.border} shadow-lg ${rarity.glow}` 
                      : 'bg-muted/20 border-muted/30 opacity-50'
                  }`}
                  title={isUnlocked ? `${achievement.title}: ${achievement.description}` : '???'}
                >
                  {isUnlocked ? (
                    <IconComponent className={`w-5 h-5 ${rarity.text}`} />
                  ) : (
                    <Lock className="w-4 h-4 text-muted-foreground/50" />
                  )}
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-surface border border-border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    {isUnlocked ? (
                      <div className="text-center">
                        <div className={`font-medium ${rarity.text}`}>{achievement.title}</div>
                        <div className="text-muted-foreground text-[10px]">{achievement.description}</div>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">未解鎖</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* 稀有度圖例 */}
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-[10px]">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-slate-500" />
              <span className="text-slate-400">普通</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-blue-400">稀有</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-purple-400">史詩</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-amber-400">傳說</span>
            </div>
          </div>
        </motion.div>

        {/* 分享按鈕 */}
        <ShareButtons
          onDownload={handleDownload}
          onCopy={handleCopy}
          onNativeShare={handleNativeShare}
          onTwitterShare={handleTwitterShare}
          onFacebookShare={handleFacebookShare}
          onLineShare={handleLineShare}
          isGenerating={isGenerating}
          supportsNativeShare={typeof navigator !== 'undefined' && !!navigator.share}
        />

        {/* 完成時間 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="p-6 text-center text-sm text-muted-foreground"
        >
          最後遊玩時間：{formatPlayTime(lastReadAt)}
        </motion.div>
      </motion.div>

      {/* Hidden share card template for image generation */}
      <div
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 0,
          pointerEvents: 'none',
        }}
      >
        <ShareCard
          ref={shareCardRef}
          gameName={gameName}
          endingTitle={ending.title}
          endingColor={ending.color}
          arcValue={arcValue}
          colorsCollected={colorsCollected || []}
          totalNodesRead={totalNodesRead}
          totalChoices={totalChoices}
          moonBrightValue={moonBrightValue || 0}
          moonDarkValue={moonDarkValue || 0}
        />
      </div>

      {/* Journey Reflection Page */}
      <JourneyReflection
        isOpen={showJourneyReflection}
        onClose={() => setShowJourneyReflection(false)}
      />

      {/* 360 Degree Celebration Animation */}
      <ArcCompleteCelebration
        isVisible={showArcCelebration}
        onComplete={() => setShowArcCelebration(false)}
      />
    </motion.div>
  );
};

export default EndingStats;
