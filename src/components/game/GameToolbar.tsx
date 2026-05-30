import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Volume2, VolumeX, Settings, Music, Sparkles, Wind,
  Maximize, Minimize, Menu, BookOpen, Image, Map, Trophy,
  Home, RotateCcw, Gauge, ChevronDown,
} from 'lucide-react';
import { useAudioSettings } from '@/hooks/useAudio';
import { usePerformanceStore } from '@/stores/performanceStore';
import { useGameStore, ArcHistoryEntry } from '@/stores/gameStore';
import { useSFX } from '@/hooks/useAudio';
import MenuButton from './MenuButton';

interface GameToolbarProps {
  /** 是否顯示弧度歸零第一部的選項 */
  isYiPart: boolean;
  currentPart: string;
  onOpenChapterSelect: () => void;
  onOpenGallery: () => void;
  onOpenJourney: () => void;
  onOpenEndingStats: () => void;
  onReturnToTitle: () => void;
  onResetPart: () => void;
}

const GameToolbar = ({
  isYiPart,
  currentPart,
  onOpenChapterSelect,
  onOpenGallery,
  onOpenJourney,
  onOpenEndingStats,
  onReturnToTitle,
  onResetPart,
}: GameToolbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { playSFX } = useSFX();

  const {
    masterVolume, bgmVolume, sfxVolume, ambientVolume, isMuted,
    setMasterVolume, setBgmVolume, setSfxVolume, setAmbientVolume, toggleMute,
  } = useAudioSettings();
  const { performanceMode, setPerformanceMode } = usePerformanceStore();

  // Arc indicator data
  const { getCurrentProgress, currentPart: storePart } = useGameStore();
  const progress = getCurrentProgress();
  const arcValue = progress.arcValue;

  // Fullscreen
  useEffect(() => {
    const handleChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleChange);
    return () => document.removeEventListener('fullscreenchange', handleChange);
  }, []);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (e) {
      console.warn('Fullscreen not supported:', e);
    }
  }, []);

  // Arc color
  const baseHue = storePart === 'yi' ? 38 : 350;

  // Close all panels when clicking outside
  const closeAll = () => {
    setIsMenuOpen(false);
    setIsSettingsOpen(false);
  };

  return (
    <>
      {/* 背景遮罩 */}
      {(isMenuOpen || isSettingsOpen) && (
        <div className="fixed inset-0 z-40" onClick={closeAll} />
      )}

      {/* 主工具列 */}
      <motion.div
        className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <div
          className="flex items-center gap-0.5 sm:gap-1 rounded-full px-1 sm:px-1.5 py-0.5 sm:py-1
            bg-background/70 backdrop-blur-md border border-border/40 shadow-lg"
        >
          {/* 弧度迷你指示 */}
          <button
            className="flex items-center gap-1 px-2 py-1.5 sm:px-2.5 sm:py-2 rounded-full
              hover:bg-muted/30 transition-colors touch-manipulation"
            onClick={() => { playSFX('click'); }}
            title={`弧度：${arcValue}°`}
          >
            <MiniArc value={arcValue} hue={baseHue} />
            <span
              className="text-xs sm:text-sm font-serif-tc font-semibold leading-none"
              style={{ color: `hsl(${baseHue}, 70%, 55%)` }}
            >
              {arcValue}°
            </span>
          </button>

          <Divider />

          {/* 靜音 */}
          <ToolbarButton
            onClick={toggleMute}
            title={isMuted ? '取消靜音' : '靜音'}
            active={isMuted}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </ToolbarButton>

          {/* 設定（音量+效能） */}
          <ToolbarButton
            onClick={() => { setIsSettingsOpen(!isSettingsOpen); setIsMenuOpen(false); }}
            title="設定"
            active={isSettingsOpen}
          >
            <Settings className="w-4 h-4" />
          </ToolbarButton>

          {/* 全螢幕 */}
          <ToolbarButton
            onClick={toggleFullscreen}
            title={isFullscreen ? '退出全螢幕' : '全螢幕'}
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </ToolbarButton>

          <Divider />

          {/* 選單 */}
          <ToolbarButton
            onClick={() => {
              playSFX(isMenuOpen ? 'menu_close' : 'menu_open');
              setIsMenuOpen(!isMenuOpen);
              setIsSettingsOpen(false);
            }}
            title="選單"
            active={isMenuOpen}
          >
            <Menu className="w-4 h-4" />
            <ChevronDown className={`w-3 h-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          </ToolbarButton>
        </div>

        {/* 設定下拉面板 */}
        <AnimatePresence>
          {isSettingsOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-64 sm:w-72 p-3 sm:p-4
                bg-background/95 backdrop-blur-md border border-border/50
                rounded-xl shadow-xl max-h-[70vh] overflow-y-auto"
            >
              <h3 className="text-sm font-medium text-foreground mb-3">音量設定</h3>
              <div className="space-y-3">
                <VolumeSlider icon={<Volume2 className="w-4 h-4" />} label="主音量" value={masterVolume} onChange={setMasterVolume} disabled={isMuted} />
                <VolumeSlider icon={<Music className="w-4 h-4" />} label="背景音樂" value={bgmVolume} onChange={setBgmVolume} disabled={isMuted} />
                <VolumeSlider icon={<Sparkles className="w-4 h-4" />} label="音效" value={sfxVolume} onChange={setSfxVolume} disabled={isMuted} />
                <VolumeSlider icon={<Wind className="w-4 h-4" />} label="環境音" value={ambientVolume} onChange={setAmbientVolume} disabled={isMuted} />
              </div>

              <div className="my-3 border-t border-border/30" />

              <h3 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                <Gauge className="w-4 h-4" /> 效能模式
              </h3>
              <p className="text-xs text-muted-foreground mb-2">
                如果遊戲畫面閃爍或卡頓，請切換至「省電模式」
              </p>
              <div className="flex gap-1.5">
                {(['auto', 'high', 'low'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setPerformanceMode(mode)}
                    className={`flex-1 px-2 py-1.5 text-xs rounded-md transition-colors touch-manipulation
                      ${mode === performanceMode
                        ? 'bg-primary/20 text-primary border border-primary/50'
                        : 'bg-background/50 text-muted-foreground border border-border/30 hover:border-border/50 hover:text-foreground'
                      }`}
                  >
                    {mode === 'auto' ? '自動' : mode === 'high' ? '高效能' : '省電'}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 選單下拉面板 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-48
                bg-card/95 backdrop-blur-md border border-border
                rounded-xl shadow-xl overflow-hidden"
            >
              {isYiPart && (
                <MenuButton
                  onClick={() => { setIsMenuOpen(false); onOpenChapterSelect(); }}
                  icon={<BookOpen className="w-4 h-4 text-primary" />}
                  label="章節選擇"
                />
              )}
              <MenuButton
                onClick={() => { setIsMenuOpen(false); onOpenGallery(); }}
                icon={<Image className="w-4 h-4 text-primary" />}
                label="藝廊"
              />
              {currentPart === 'yi' && (
                <MenuButton
                  onClick={() => { setIsMenuOpen(false); onOpenJourney(); }}
                  icon={<Map className="w-4 h-4 text-primary" />}
                  label="心路歷程"
                />
              )}
              <MenuButton
                onClick={() => { setIsMenuOpen(false); onOpenEndingStats(); }}
                icon={<Trophy className="w-4 h-4 text-primary" />}
                label="結局統計"
              />
              <MenuButton
                onClick={() => { setIsMenuOpen(false); onReturnToTitle(); }}
                icon={<Home className="w-4 h-4 text-muted-foreground" />}
                label="返回標題"
              />
              <MenuButton
                onClick={() => { setIsMenuOpen(false); onResetPart(); }}
                icon={<RotateCcw className="w-4 h-4" />}
                label="重新開始本部"
                variant="destructive"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

/** 工具列按鈕 */
const ToolbarButton = ({
  children, onClick, title, active = false,
}: {
  children: React.ReactNode; onClick: () => void; title: string; active?: boolean;
}) => (
  <button
    onClick={onClick}
    title={title}
    className={`
      flex items-center gap-0.5 p-2 sm:p-2.5 rounded-full
      transition-colors duration-150 touch-manipulation
      ${active
        ? 'text-primary bg-primary/15'
        : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
      }
    `}
    style={{ WebkitTapHighlightColor: 'transparent' }}
  >
    {children}
  </button>
);

/** 分隔線 */
const Divider = () => (
  <div className="w-px h-5 bg-border/40 mx-0.5" />
);

/** 迷你弧度 SVG */
const MiniArc = ({ value, hue }: { value: number; hue: number }) => {
  const angle = (value / 360) * 360;
  const r = 8;
  const cx = 10;
  const cy = 10;
  const startAngle = -90;
  const endAngle = startAngle + angle;
  const endX = cx + r * Math.cos((endAngle * Math.PI) / 180);
  const endY = cy + r * Math.sin((endAngle * Math.PI) / 180);
  const large = angle > 180 ? 1 : 0;
  const path = angle >= 360
    ? `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx - 0.001} ${cy - r} A ${r} ${r} 0 1 1 ${cx} ${cy - r}`
    : angle > 0
      ? `M ${cx} ${cy - r} A ${r} ${r} 0 ${large} 1 ${endX} ${endY}`
      : '';

  return (
    <svg viewBox="0 0 20 20" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth={1} strokeDasharray="1.5 2.5" className="text-muted-foreground/25" />
      {angle > 0 && (
        <path d={path} fill="none" stroke={`hsl(${hue}, 70%, 55%)`} strokeWidth={2} strokeLinecap="round" />
      )}
      <circle cx={cx} cy={cy} r={1.5} fill={`hsl(${hue}, 70%, 55%)`} />
    </svg>
  );
};

/** 音量滑桿 */
const VolumeSlider = ({ icon, label, value, onChange, disabled }: {
  icon: React.ReactNode; label: string; value: number; onChange: (v: number) => void; disabled?: boolean;
}) => (
  <div className={`space-y-1 ${disabled ? 'opacity-50' : ''}`}>
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      {icon}
      <span>{label}</span>
      <span className="ml-auto">{Math.round(value * 100)}%</span>
    </div>
    <input
      type="range" min="0" max="1" step="0.01" value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      disabled={disabled}
      className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-border
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
        [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer
        [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0 disabled:cursor-not-allowed"
    />
  </div>
);

export default GameToolbar;
