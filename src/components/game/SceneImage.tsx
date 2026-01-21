import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { getSceneImage, type SceneImageConfig } from '@/data/yi1/sceneImages';
import { useGameStore } from '@/stores/gameStore';

interface SceneImageProps {
  nodeId: string;
  hideOverlay?: boolean;
}

const SceneImage = ({ nodeId, hideOverlay = false }: SceneImageProps) => {
  const [currentImage, setCurrentImage] = useState<SceneImageConfig | null>(null);
  const [prevImage, setPrevImage] = useState<SceneImageConfig | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTransitionEffect, setShowTransitionEffect] = useState(false);
  const { unlockImage } = useGameStore();
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const sceneImage = getSceneImage(nodeId);
    if (sceneImage?.image !== currentImage?.image) {
      // 觸發過場效果
      if (currentImage) {
        setPrevImage(currentImage);
        setShowTransitionEffect(true);
        
        // 清除之前的 timeout
        if (transitionTimeoutRef.current) {
          clearTimeout(transitionTimeoutRef.current);
        }
        
        // 過場效果持續時間
        transitionTimeoutRef.current = setTimeout(() => {
          setShowTransitionEffect(false);
          setPrevImage(null);
        }, 1500);
      }
      
      setIsLoaded(false);
      setCurrentImage(sceneImage);
      
      // 解鎖圖片
      if (sceneImage) {
        unlockImage(sceneImage.image);
      }
    }
  }, [nodeId, currentImage?.image, unlockImage]);

  // 清理 timeout
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  if (!currentImage) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* 過場閃光效果 */}
      <AnimatePresence>
        {showTransitionEffect && (
          <motion.div
            className="absolute inset-0 z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.8, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {/* 白色閃光 */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.6) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0.8, 0.4, 0],
              }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
            
            {/* 掃描線效果 */}
            <motion.div
              className="absolute inset-0"
              initial={{ y: '-100%' }}
              animate={{ y: '100%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--primary) / 0.3) 50%, transparent 100%)',
                height: '30%',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 舊圖片淡出 */}
      <AnimatePresence>
        {prevImage && showTransitionEffect && (
          <motion.div
            key={`prev-${prevImage.image}`}
            className="absolute inset-0"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <img
              src={prevImage.image}
              alt={prevImage.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 新圖片淡入 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage.image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            scale: isLoaded ? 1 : 1.05,
          }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* 圖片容器 - 緩慢呼吸動畫 */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            <motion.img
              src={currentImage.image}
              alt={currentImage.alt}
              className="w-full h-full object-cover"
              onLoad={() => setIsLoaded(true)}
              animate={{
                y: [0, -8, 0],
                x: [0, 3, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* 動態光斑效果 */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                background: 'conic-gradient(from 0deg, transparent 0%, hsl(var(--primary) / 0.1) 10%, transparent 20%, transparent 100%)',
              }}
            />
          </motion.div>

          {/* 粒子飄動效果 */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary/30"
                initial={{
                  x: `${20 + i * 15}%`,
                  y: '110%',
                  opacity: 0,
                }}
                animate={{
                  y: '-10%',
                  opacity: [0, 0.6, 0.6, 0],
                  x: `${20 + i * 15 + (Math.random() - 0.5) * 20}%`,
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: 'easeOut',
                }}
                style={{
                  width: 2 + Math.random() * 4,
                  height: 2 + Math.random() * 4,
                }}
              />
            ))}
          </div>

          {/* 邊緣光暈 */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            style={{
              boxShadow: 'inset 0 0 100px 20px hsl(var(--primary) / 0.08)',
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
            {/* 漸變遮罩：頂部 */}
            <div 
              className="absolute inset-x-0 top-0 h-40 z-10"
              style={{
                background: 'linear-gradient(to bottom, hsl(var(--background) / 0.85) 0%, hsl(var(--background) / 0.4) 50%, transparent 100%)',
              }}
            />

            {/* 漸變遮罩：底部（對話框區域） */}
            <div 
              className="absolute inset-x-0 bottom-0 h-[45%] z-10"
              style={{
                background: 'linear-gradient(to top, hsl(var(--background) / 0.98) 0%, hsl(var(--background) / 0.85) 40%, hsl(var(--background) / 0.5) 70%, transparent 100%)',
              }}
            />

            {/* 電影級暗角效果 */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 80% 80% at center, transparent 30%, hsl(var(--background) / 0.5) 100%)',
              }}
            />

            {/* 側邊暗角強化 */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, hsl(var(--background) / 0.3) 0%, transparent 15%, transparent 85%, hsl(var(--background) / 0.3) 100%)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 主題色光暈動畫 */}
      <motion.div
        className="absolute inset-0 z-15 pointer-events-none"
        animate={{
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 30% 30%, hsl(var(--primary) / 0.15) 0%, transparent 60%)',
        }}
      />

      {/* 次要光暈（右下） */}
      <motion.div
        className="absolute inset-0 z-15 pointer-events-none"
        animate={{
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 2,
        }}
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 75% 70%, hsl(var(--secondary) / 0.1) 0%, transparent 50%)',
        }}
      />

      {/* 精細掃描線紋理 */}
      <div 
        className="absolute inset-0 z-25 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 3px)',
          backgroundSize: '100% 3px',
        }}
      />

      {/* 輕微噪點紋理 */}
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