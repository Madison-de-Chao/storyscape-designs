import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useMemo } from 'react';
import { getSceneImage, type SceneImageConfig } from '@/data/yi1/sceneImages';
import { useGameStore } from '@/stores/gameStore';

interface SceneImageProps {
  nodeId: string;
  hideOverlay?: boolean;
  isLoaded?: boolean;
}

// 場景特效類型
type SceneEffectType = 'default' | 'glitch' | 'ethereal' | 'dramatic' | 'mystical' | 'warm' | 'dark' | 'poetic';

// 根據場景名稱獲取特效類型
const getSceneEffect = (alt: string): SceneEffectType => {
  // 故障/刪除系列
  if (alt.includes('刪除') || alt.includes('靈魂抽離')) return 'glitch';
  
  // 迷霧/渡口系列
  if (alt.includes('迷霧') || alt.includes('渡口') || alt.includes('擺渡')) return 'mystical';
  
  // 問心/光明系列
  if (alt.includes('問心') || alt.includes('心即理') || alt.includes('寬恕')) return 'ethereal';
  
  // 歷史人物/大殿系列
  if (alt.includes('武則天') || alt.includes('鳳門') || alt.includes('凱薩')) return 'dramatic';
  
  // 書房/文人系列
  if (alt.includes('書房') || alt.includes('書匣') || alt.includes('司馬遷')) return 'warm';
  
  // 李白/詩意系列
  if (alt.includes('李白') || alt.includes('月下') || alt.includes('詩句')) return 'poetic';
  
  // 牢獄/黑暗系列
  if (alt.includes('鐵窗') || alt.includes('牢籠')) return 'dark';
  
  // 自然/命樹系列
  if (alt.includes('命樹') || alt.includes('花園') || alt.includes('海棠')) return 'ethereal';
  
  return 'default';
};

const SceneImage = ({ nodeId, hideOverlay = false, isLoaded: externalLoaded }: SceneImageProps) => {
  const [currentImage, setCurrentImage] = useState<SceneImageConfig | null>(null);
  const [prevImage, setPrevImage] = useState<SceneImageConfig | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTransitionEffect, setShowTransitionEffect] = useState(false);
  const { unlockImage } = useGameStore();
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sceneEffect = useMemo(() => {
    return currentImage ? getSceneEffect(currentImage.alt) : 'default';
  }, [currentImage]);

  useEffect(() => {
    const sceneImage = getSceneImage(nodeId);
    if (sceneImage?.image !== currentImage?.image) {
      if (currentImage) {
        setPrevImage(currentImage);
        setShowTransitionEffect(true);
        
        if (transitionTimeoutRef.current) {
          clearTimeout(transitionTimeoutRef.current);
        }
        
        // 根據場景類型調整轉場時間
        const transitionDuration = sceneEffect === 'mystical' ? 2000 : 
                                   sceneEffect === 'glitch' ? 1000 : 
                                   sceneEffect === 'dramatic' ? 1800 : 1500;
        
        transitionTimeoutRef.current = setTimeout(() => {
          setShowTransitionEffect(false);
          setPrevImage(null);
        }, transitionDuration);
      }
      
      setIsLoaded(false);
      setCurrentImage(sceneImage);
      
      if (sceneImage) {
        unlockImage(sceneImage.image);
      }
    }
  }, [nodeId, currentImage?.image, unlockImage, sceneEffect]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (externalLoaded) {
      setIsLoaded(true);
    }
  }, [externalLoaded]);

  // 即使沒有匹配的圖片，也會使用預設圖片（由 getSceneImage 提供）
  // 這裡只在極端情況下返回 null
  if (!currentImage) {
    return (
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 to-background" />
    );
  }

  // 根據特效類型獲取進場動畫
  const getEntryAnimation = () => {
    switch (sceneEffect) {
      case 'glitch':
        return {
          initial: { opacity: 0, x: 10, filter: 'hue-rotate(90deg) saturate(2)' },
          animate: { 
            opacity: isLoaded ? 1 : 0, 
            x: isLoaded ? [0, -5, 3, -2, 0] : 0,
            filter: isLoaded ? 'hue-rotate(0deg) saturate(1)' : 'hue-rotate(90deg) saturate(2)',
          },
          transition: { duration: 0.8, ease: 'easeOut' as const },
        };
      case 'mystical':
        return {
          initial: { opacity: 0, scale: 1.2, filter: 'blur(20px)' },
          animate: { 
            opacity: isLoaded ? 1 : 0, 
            scale: isLoaded ? 1 : 1.2,
            filter: isLoaded ? 'blur(0px)' : 'blur(20px)',
          },
          transition: { duration: 2, ease: [0.25, 0.46, 0.45, 0.94] as const },
        };
      case 'ethereal':
        return {
          initial: { opacity: 0, y: -30, filter: 'brightness(2)' },
          animate: { 
            opacity: isLoaded ? 1 : 0, 
            y: isLoaded ? 0 : -30,
            filter: isLoaded ? 'brightness(1)' : 'brightness(2)',
          },
          transition: { duration: 1.5, ease: 'easeOut' as const },
        };
      case 'dramatic':
        return {
          initial: { opacity: 0, scale: 0.9, filter: 'contrast(1.5) brightness(0.5)' },
          animate: { 
            opacity: isLoaded ? 1 : 0, 
            scale: isLoaded ? 1 : 0.9,
            filter: isLoaded ? 'contrast(1) brightness(1)' : 'contrast(1.5) brightness(0.5)',
          },
          transition: { duration: 1.2, ease: 'easeOut' as const },
        };
      case 'warm':
        return {
          initial: { opacity: 0, filter: 'sepia(1) brightness(0.8)' },
          animate: { 
            opacity: isLoaded ? 1 : 0, 
            filter: isLoaded ? 'sepia(0.2) brightness(1)' : 'sepia(1) brightness(0.8)',
          },
          transition: { duration: 1.5, ease: 'easeInOut' as const },
        };
      case 'poetic':
        return {
          initial: { opacity: 0, y: 20, filter: 'saturate(0) brightness(1.3)' },
          animate: { 
            opacity: isLoaded ? 1 : 0, 
            y: isLoaded ? 0 : 20,
            filter: isLoaded ? 'saturate(1) brightness(1)' : 'saturate(0) brightness(1.3)',
          },
          transition: { duration: 1.8, ease: 'easeOut' as const },
        };
      case 'dark':
        return {
          initial: { opacity: 0, filter: 'brightness(0) contrast(2)' },
          animate: { 
            opacity: isLoaded ? 1 : 0, 
            filter: isLoaded ? 'brightness(0.9) contrast(1.1)' : 'brightness(0) contrast(2)',
          },
          transition: { duration: 1.5, ease: 'easeInOut' as const },
        };
      default:
        return {
          initial: { opacity: 0, scale: 1.1 },
          animate: { opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.05 },
          transition: { duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
        };
    }
  };

  // 根據特效類型獲取過場效果顏色
  const getTransitionColor = () => {
    switch (sceneEffect) {
      case 'glitch': return 'hsl(var(--destructive))';
      case 'mystical': return 'hsl(210 80% 60% / 0.6)';
      case 'ethereal': return 'hsl(var(--primary) / 0.8)';
      case 'dramatic': return 'hsl(350 70% 40% / 0.7)';
      case 'warm': return 'hsl(35 80% 50% / 0.5)';
      case 'poetic': return 'hsl(220 60% 70% / 0.5)';
      case 'dark': return 'hsl(0 0% 0% / 0.9)';
      default: return 'hsl(var(--primary) / 0.6)';
    }
  };

  const entryAnimation = getEntryAnimation();

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* 過場效果 */}
      <AnimatePresence>
        {showTransitionEffect && (
          <motion.div
            className="absolute inset-0 z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.8, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {/* 故障效果專用 */}
            {sceneEffect === 'glitch' && (
              <>
                {/* RGB 分離效果 */}
                <motion.div
                  className="absolute inset-0 mix-blend-screen"
                  animate={{
                    x: [0, -10, 5, -3, 0],
                    opacity: [0, 0.5, 0.3, 0.5, 0],
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{ background: 'linear-gradient(90deg, rgba(255,0,0,0.3) 0%, transparent 50%, rgba(0,255,255,0.3) 100%)' }}
                />
                {/* 掃描線故障 */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-0 right-0 h-1 bg-white/20"
                    initial={{ y: `${i * 20}%`, opacity: 0, scaleX: 0 }}
                    animate={{ 
                      y: `${i * 20 + Math.random() * 10}%`,
                      opacity: [0, 1, 0],
                      scaleX: [0, 1, 0],
                    }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  />
                ))}
              </>
            )}

            {/* 神秘霧氣效果 */}
            {sceneEffect === 'mystical' && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 1.5 }}
                style={{
                  background: 'radial-gradient(ellipse at center, hsl(210 60% 70% / 0.4) 0%, hsl(220 50% 20% / 0.6) 100%)',
                }}
              />
            )}

            {/* 光明降臨效果 */}
            {sceneEffect === 'ethereal' && (
              <motion.div
                className="absolute inset-0"
                initial={{ y: '-100%' }}
                animate={{ y: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                style={{
                  background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--primary) / 0.5) 30%, hsl(var(--primary) / 0.8) 50%, hsl(var(--primary) / 0.5) 70%, transparent 100%)',
                  height: '50%',
                }}
              />
            )}

            {/* 戲劇性閃光 */}
            {sceneEffect === 'dramatic' && (
              <>
                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.3 }}
                  style={{ background: 'hsl(350 70% 30% / 0.5)' }}
                />
                <motion.div
                  className="absolute inset-0"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: [0, 1, 0] }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{ 
                    background: 'linear-gradient(to bottom, transparent, hsl(350 80% 50% / 0.3), transparent)',
                    transformOrigin: 'center',
                  }}
                />
              </>
            )}

            {/* 溫暖光暈 */}
            {sceneEffect === 'warm' && (
              <motion.div
                className="absolute inset-0"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 1.2 }}
                style={{
                  background: 'radial-gradient(ellipse at 70% 30%, hsl(35 90% 60% / 0.5) 0%, transparent 60%)',
                }}
              />
            )}

            {/* 詩意月光 */}
            {sceneEffect === 'poetic' && (
              <>
                <motion.div
                  className="absolute inset-0"
                  animate={{ opacity: [0, 0.4, 0] }}
                  transition={{ duration: 1.5 }}
                  style={{
                    background: 'radial-gradient(ellipse 60% 80% at 50% 20%, hsl(220 50% 80% / 0.5) 0%, transparent 70%)',
                  }}
                />
                {/* 飄落的光點 */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-white/60"
                    initial={{ 
                      x: `${10 + i * 12}%`, 
                      y: '-5%',
                      opacity: 0,
                    }}
                    animate={{ 
                      y: '110%',
                      opacity: [0, 0.8, 0.8, 0],
                      x: `${10 + i * 12 + (Math.random() - 0.5) * 10}%`,
                    }}
                    transition={{ 
                      duration: 2, 
                      delay: i * 0.1,
                      ease: 'easeIn',
                    }}
                  />
                ))}
              </>
            )}

            {/* 黑暗籠罩 */}
            {sceneEffect === 'dark' && (
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.8, 0] }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                style={{ background: 'hsl(0 0% 0%)' }}
              />
            )}

            {/* 預設過場光暈 */}
            {sceneEffect === 'default' && (
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at center, ${getTransitionColor()} 0%, transparent 70%)`,
                }}
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [0.8, 0.4, 0],
                }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 舊圖片淡出 - 增強平滑度 */}
      <AnimatePresence mode="sync">
        {prevImage && showTransitionEffect && (
          <motion.div
            key={`prev-${prevImage.image}`}
            className="absolute inset-0"
            initial={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            animate={{ 
              opacity: 0, 
              scale: sceneEffect === 'glitch' ? 1 : 1.08,
              filter: sceneEffect === 'mystical' ? 'blur(8px)' : 'blur(2px)',
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: sceneEffect === 'mystical' ? 1.8 : 1.4, 
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <img
              src={prevImage.image}
              alt={prevImage.alt}
              className="w-full h-full object-cover"
            />
            {/* 淡出時的疊加漸層 */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.8 }}
              style={{
                background: 'linear-gradient(180deg, hsl(222 47% 6% / 0.3) 0%, hsl(222 47% 3% / 0.5) 100%)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 新圖片淡入 - 增強視覺過渡 */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentImage.image}
          className="absolute inset-0"
          {...entryAnimation}
        >
          {/* 進場時的柔光效果 */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            style={{
              background: 'radial-gradient(ellipse at center, hsl(38 80% 55% / 0.15) 0%, transparent 60%)',
            }}
          />

          {/* 圖片容器 - 緩慢呼吸動畫 */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ scale: 1.05 }}
            animate={{
              scale: sceneEffect === 'glitch' ? [1, 1.005, 1] : [1, 1.02, 1],
            }}
            transition={{
              scale: {
                duration: sceneEffect === 'glitch' ? 8 : 25,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              },
            }}
          >
            <motion.img
              src={currentImage.image}
              alt={currentImage.alt}
              className="w-full h-full object-cover"
              onLoad={() => setIsLoaded(true)}
              initial={{ scale: 1.08 }}
              animate={{
                scale: 1,
                y: sceneEffect === 'mystical' ? [0, -15, 0] : [0, -8, 0],
                x: sceneEffect === 'poetic' ? [0, 5, 0] : [0, 3, 0],
              }}
              transition={{
                scale: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] },
                y: { duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
                x: { duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
              }}
            />
          </motion.div>

          {/* 故障效果持續動畫 */}
          {sceneEffect === 'glitch' && isLoaded && (
            <>
              {/* 隨機故障條紋 */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  opacity: [0, 0, 0.1, 0, 0, 0.15, 0, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)',
                  }}
                />
              </motion.div>
              {/* 數位噪點 */}
              <motion.div
                className="absolute inset-0 pointer-events-none mix-blend-overlay"
                animate={{
                  opacity: [0.02, 0.05, 0.02],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />
            </>
          )}

          {/* 神秘霧氣持續效果 */}
          {sceneEffect === 'mystical' && isLoaded && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                background: 'radial-gradient(ellipse 100% 60% at 50% 100%, hsl(210 50% 70% / 0.3) 0%, transparent 70%)',
              }}
            />
          )}

          {/* 光明光暈效果 */}
          {sceneEffect === 'ethereal' && isLoaded && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                background: 'radial-gradient(ellipse 80% 60% at 50% 30%, hsl(var(--primary) / 0.2) 0%, transparent 60%)',
              }}
            />
          )}

          {/* 溫暖燭光效果 */}
          {sceneEffect === 'warm' && isLoaded && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                opacity: [0.1, 0.2, 0.15, 0.2, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                background: 'radial-gradient(ellipse 60% 60% at 70% 40%, hsl(35 80% 50% / 0.15) 0%, transparent 60%)',
              }}
            />
          )}

          {/* 詩意星光 */}
          {sceneEffect === 'poetic' && isLoaded && (
            <>
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{
                  background: 'radial-gradient(ellipse 80% 50% at 50% 20%, hsl(220 60% 80% / 0.15) 0%, transparent 60%)',
                }}
              />
              {/* 閃爍星點 */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-white/40"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${15 + (i % 2) * 10}%`,
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: i * 0.3,
                  }}
                />
              ))}
            </>
          )}

          {/* 黑暗陰影效果 */}
          {sceneEffect === 'dark' && isLoaded && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                background: 'radial-gradient(ellipse at center, transparent 30%, hsl(0 0% 0% / 0.4) 100%)',
              }}
            />
          )}

          {/* 動態光斑效果（預設） */}
          {sceneEffect === 'default' && isLoaded && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
            >
              <motion.div
                className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, hsl(var(--primary) / 0.1) 10%, transparent 20%, transparent 100%)',
                }}
              />
            </motion.div>
          )}

          {/* 浮動粒子（所有場景） */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                initial={{
                  x: `${20 + i * 15}%`,
                  y: '110%',
                  opacity: 0,
                }}
                animate={{
                  y: '-10%',
                  opacity: [0, 0.5, 0.5, 0],
                  x: `${20 + i * 15 + (Math.random() - 0.5) * 20}%`,
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: 'easeOut',
                }}
                style={{
                  width: 2 + Math.random() * 3,
                  height: 2 + Math.random() * 3,
                  background: sceneEffect === 'glitch' 
                    ? 'hsl(var(--destructive) / 0.4)' 
                    : sceneEffect === 'warm'
                    ? 'hsl(35 80% 60% / 0.4)'
                    : 'hsl(var(--primary) / 0.3)',
                }}
              />
            ))}
          </div>

          {/* 邊緣光暈 */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
            style={{
              boxShadow: sceneEffect === 'dark' 
                ? 'inset 0 0 150px 50px hsl(0 0% 0% / 0.3)'
                : 'inset 0 0 100px 20px hsl(var(--primary) / 0.08)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* 漸變遮罩（可隱藏） */}
      <AnimatePresence>
        {!hideOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-20"
          >
            {/* 頂部漸變 - 更輕薄 */}
            <div 
              className="absolute inset-x-0 top-0 h-32 z-10"
              style={{
                background: 'linear-gradient(to bottom, hsl(var(--background) / 0.6) 0%, hsl(var(--background) / 0.2) 50%, transparent 100%)',
              }}
            />
            {/* 底部漸變 - 更輕薄，讓圖片更清晰 */}
            <div 
              className="absolute inset-x-0 bottom-0 h-[40%] z-10"
              style={{
                background: 'linear-gradient(to top, hsl(var(--background) / 0.9) 0%, hsl(var(--background) / 0.6) 30%, hsl(var(--background) / 0.2) 60%, transparent 100%)',
              }}
            />
            {/* 邊角暗化 - 更輕 */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 90% 90% at center, transparent 50%, hsl(var(--background) / 0.25) 100%)',
              }}
            />
            {/* 左右邊緣 - 更輕 */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, hsl(var(--background) / 0.15) 0%, transparent 10%, transparent 90%, hsl(var(--background) / 0.15) 100%)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 主題色光暈 */}
      <motion.div
        className="absolute inset-0 z-15 pointer-events-none"
        animate={{ opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          background: sceneEffect === 'warm'
            ? 'radial-gradient(ellipse 60% 40% at 30% 30%, hsl(35 70% 50% / 0.12) 0%, transparent 60%)'
            : 'radial-gradient(ellipse 60% 40% at 30% 30%, hsl(var(--primary) / 0.15) 0%, transparent 60%)',
        }}
      />

      {/* 精細掃描線紋理 */}
      <div 
        className="absolute inset-0 z-25 pointer-events-none"
        style={{
          opacity: sceneEffect === 'glitch' ? 0.04 : 0.02,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 3px)',
          backgroundSize: '100% 3px',
        }}
      />

      {/* 噪點紋理 */}
      <div 
        className="absolute inset-0 z-25 pointer-events-none opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default SceneImage;
