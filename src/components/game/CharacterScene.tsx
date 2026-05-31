import { motion, AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';
import { getChapterTheme, themeToHSL, themeToGlow } from '@/utils/chapterThemes';
import { usePerformanceStore } from '@/stores/performanceStore';

// ── 類型定義 ──

export type CharacterPosition = 'left' | 'center' | 'right';
export type CharacterEntrance = 'fade' | 'slide-left' | 'slide-right' | 'slide-up' | 'glitch';
export type BackgroundType = 'gradient' | 'pattern' | 'image';
export type BackgroundAnimation = 'breathe' | 'drift' | 'pulse' | 'static';

export interface CharacterSprite {
  id: string;
  /** 人物立繪圖片路徑（透明 PNG） */
  src: string;
  /** 位置 */
  position: CharacterPosition;
  /** 進場動畫 */
  entrance?: CharacterEntrance;
  /** 是否為當前說話者（高亮） */
  isSpeaking?: boolean;
  /** 縮放比例 (0-1, 預設 1) */
  scale?: number;
  /** 垂直偏移 (px, 正值向下) */
  offsetY?: number;
}

export interface BackgroundConfig {
  type: BackgroundType;
  /** 漸層色或圖片路徑 */
  value: string;
  /** 背景動畫 */
  animation?: BackgroundAnimation;
  /** 疊加紋理 */
  overlay?: 'noise' | 'lines' | 'dots' | 'none';
}

interface CharacterSceneProps {
  /** 章節 key（用於主題色） */
  chapterKey: string;
  /** 背景配置 */
  background: BackgroundConfig;
  /** 人物立繪列表 */
  characters?: CharacterSprite[];
  /** 隱藏覆蓋層（對話框隱藏模式） */
  hideOverlay?: boolean;
}

// ── 位置映射 ──

const positionStyles: Record<CharacterPosition, string> = {
  left: 'left-[5%] sm:left-[10%]',
  center: 'left-1/2 -translate-x-1/2',
  right: 'right-[5%] sm:right-[10%]',
};

// ── 進場動畫 ──

const getEntranceVariants = (entrance: CharacterEntrance = 'fade') => {
  switch (entrance) {
    case 'slide-left':
      return {
        initial: { opacity: 0, x: -60 },
        animate: { opacity: 1, x: 0 },
      };
    case 'slide-right':
      return {
        initial: { opacity: 0, x: 60 },
        animate: { opacity: 1, x: 0 },
      };
    case 'slide-up':
      return {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
      };
    case 'glitch':
      return {
        initial: { opacity: 0, filter: 'blur(8px) hue-rotate(90deg)' },
        animate: { opacity: 1, filter: 'blur(0px) hue-rotate(0deg)' },
      };
    default:
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      };
  }
};

// ── 背景動畫 ──

const getBackgroundAnimation = (anim: BackgroundAnimation = 'static') => {
  switch (anim) {
    case 'breathe':
      return {
        animate: { scale: [1, 1.03, 1] },
        transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' as const },
      };
    case 'drift':
      return {
        animate: { x: [0, 10, -10, 0], y: [0, -5, 5, 0] },
        transition: { duration: 20, repeat: Infinity, ease: 'easeInOut' as const },
      };
    case 'pulse':
      return {
        animate: { opacity: [0.8, 1, 0.8] },
        transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
      };
    default:
      return {};
  }
};

// ── 紋理覆蓋 ──

const OverlayTexture = ({ type, themeHue }: { type: string; themeHue: number }) => {
  if (type === 'none') return null;

  const patterns: Record<string, string> = {
    noise: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
    lines: `repeating-linear-gradient(0deg, transparent, transparent 3px, hsl(${themeHue} 20% 50% / 0.03) 3px, hsl(${themeHue} 20% 50% / 0.03) 4px)`,
    dots: `radial-gradient(circle, hsl(${themeHue} 30% 50% / 0.05) 1px, transparent 1px)`,
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none z-[2]"
      style={{
        backgroundImage: patterns[type] || patterns.noise,
        backgroundSize: type === 'dots' ? '20px 20px' : undefined,
        mixBlendMode: 'overlay',
      }}
    />
  );
};

// ── 主組件 ──

const CharacterScene = ({
  chapterKey,
  background,
  characters = [],
  hideOverlay = false,
}: CharacterSceneProps) => {
  const shouldSimplify = usePerformanceStore((s) => s.shouldSimplifyAnimations());
  const theme = useMemo(() => getChapterTheme(chapterKey), [chapterKey]);

  const bgAnimProps = useMemo(
    () => (shouldSimplify ? {} : getBackgroundAnimation(background.animation)),
    [background.animation, shouldSimplify],
  );

  // 背景渲染
  const backgroundStyle = useMemo(() => {
    if (background.type === 'image') {
      return {
        backgroundImage: `url(${background.value})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    }
    if (background.type === 'gradient') {
      return { background: background.value };
    }
    // pattern - 使用主題色生成
    return {
      background: `linear-gradient(180deg, 
        hsl(${theme.hue} ${theme.saturation * 0.3}% 8%) 0%, 
        hsl(${theme.hue} ${theme.saturation * 0.4}% 12%) 50%, 
        hsl(${theme.hue} ${theme.saturation * 0.3}% 6%) 100%)`,
    };
  }, [background, theme]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* 背景層 */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={backgroundStyle}
        {...bgAnimProps}
      />

      {/* 紋理疊加 - 極輕微 */}
      {background.overlay && background.overlay !== 'none' && (
        <OverlayTexture type={background.overlay} themeHue={theme.hue} />
      )}

      {/* 邊緣暈影 - 極輕微 */}
      <div
        className="absolute inset-0 pointer-events-none z-[4]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, hsl(0 0% 0% / 0.15) 100%)',
        }}
      />

      {/* 人物立繪層 */}
      <AnimatePresence mode="sync">
        {characters.map((char) => {
          const variants = getEntranceVariants(char.entrance);
          const scale = char.scale ?? 1;
          const offsetY = char.offsetY ?? 0;

          return (
            <motion.div
              key={char.id}
              className={`absolute bottom-0 z-[5] ${positionStyles[char.position]}`}
              initial={{ ...variants.initial, scale, y: offsetY }}
              animate={{
                ...variants.animate,
                scale,
                y: offsetY,
                opacity: 1,
                filter: char.isSpeaking
                  ? 'brightness(1.1) drop-shadow(0 0 20px ' + themeToHSL(theme, 0.3) + ')'
                  : 'brightness(0.55)',
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                transformOrigin: 'bottom center',
                maxHeight: '85vh',
                willChange: 'opacity, filter',
              }}
            >
              <img
                src={char.src}
                alt={char.id}
                className="h-full max-h-[85vh] w-auto object-contain pointer-events-none select-none"
                draggable={false}
              />

              {/* 說話者底部光暈 */}
              {char.isSpeaking && !shouldSimplify && (
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-8"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    background: `radial-gradient(ellipse at center, ${themeToGlow(theme, 0.4)} 0%, transparent 70%)`,
                    filter: 'blur(12px)',
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* 對話框隱藏模式時的覆蓋漸層 */}
      {!hideOverlay && (
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3 z-[6] pointer-events-none"
          style={{
            background: 'linear-gradient(to top, hsl(0 0% 0% / 0.1) 0%, transparent 100%)',
          }}
        />
      )}
    </div>
  );
};

export default CharacterScene;
