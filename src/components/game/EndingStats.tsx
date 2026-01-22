import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '@/stores/gameStore';
import { X, Sparkles, Palette, GitBranch, BookOpen, Clock, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useShareImage } from '@/hooks/useShareImage';
import ShareButtons from './ShareButtons';

interface EndingStatsProps {
  isOpen: boolean;
  onClose: () => void;
}

// 根據弧度值計算結局類型
const getEndingType = (arcValue: number): { title: string; description: string; color: string } => {
  if (arcValue >= 150) {
    return {
      title: '圓滿弧度',
      description: '你選擇了完整接納自己，弧度趨近圓滿。問心的聲音已成為你內心的一部分。',
      color: 'text-amber-400',
    };
  } else if (arcValue >= 100) {
    return {
      title: '和解弧度',
      description: '你在光與影之間找到了平衡，學會了與自己和解。',
      color: 'text-emerald-400',
    };
  } else if (arcValue >= 50) {
    return {
      title: '探索弧度',
      description: '你開始認識自己，但旅程仍在繼續。弧度等待被補完。',
      color: 'text-blue-400',
    };
  } else {
    return {
      title: '迷霧弧度',
      description: '迷霧仍未散去，或許需要更多勇氣面對內心的聲音。',
      color: 'text-gray-400',
    };
  }
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

const EndingStats = ({ isOpen, onClose }: EndingStatsProps) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const { getCurrentProgress, currentPart } = useGameStore();
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
  
  const { arcValue, colorsCollected, choicesHistory, readNodes, lastReadAt } = progress;
  
  // 計算統計數據
  const totalNodesRead = Object.values(readNodes || {}).reduce((sum, nodes) => sum + nodes.length, 0);
  const chaptersVisited = Object.keys(readNodes || {}).length;
  const totalChoices = Object.keys(choicesHistory || {}).length;
  const ending = getEndingType(arcValue);
  
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
  
  const handleDownload = () => {
    downloadImage(statsRef.current, { filename: `${gameName}-ending.png` });
  };

  const handleCopy = () => {
    copyToClipboard(statsRef.current);
  };

  const handleNativeShare = () => {
    nativeShare(statsRef.current, {
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
          onClick={onClose}
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
              animate={{ width: `${(arcValue / 180) * 100}%` }}
              transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
            <span>0°</span>
            <span>180°</span>
          </div>
        </motion.div>

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
    </motion.div>
  );
};

export default EndingStats;
