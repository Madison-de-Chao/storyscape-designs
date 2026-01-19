import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getSceneImage, type SceneImageConfig } from '@/data/yi1/sceneImages';
import { useGameStore } from '@/stores/gameStore';

interface SceneImageProps {
  nodeId: string;
  hideOverlay?: boolean;
}

const SceneImage = ({ nodeId, hideOverlay = false }: SceneImageProps) => {
  const [currentImage, setCurrentImage] = useState<SceneImageConfig | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { unlockImage } = useGameStore();

  useEffect(() => {
    const sceneImage = getSceneImage(nodeId);
    if (sceneImage?.image !== currentImage?.image) {
      setIsLoaded(false);
      setCurrentImage(sceneImage);
      // 解鎖圖片
      if (sceneImage) {
        unlockImage(sceneImage.image);
      }
    }
  }, [nodeId, currentImage?.image, unlockImage]);

  if (!currentImage) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentImage.image}
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        {/* 圖片容器 */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 20,
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
              y: [0, -10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* 漸變遮罩（可隱藏） */}
        <AnimatePresence>
          {!hideOverlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* 漸變遮罩：頂部 */}
              <div 
                className="absolute inset-x-0 top-0 h-32 z-10"
                style={{
                  background: 'linear-gradient(to bottom, hsl(var(--background) / 0.8) 0%, transparent 100%)',
                }}
              />

              {/* 漸變遮罩：底部（對話框區域） */}
              <div 
                className="absolute inset-x-0 bottom-0 h-[40%] z-10"
                style={{
                  background: 'linear-gradient(to top, hsl(var(--background) / 0.95) 0%, hsl(var(--background) / 0.7) 50%, transparent 100%)',
                }}
              />

              {/* 輕微的暗角效果 */}
              <div 
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 50%, hsl(var(--background) / 0.4) 100%)',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 光暈動畫效果（始終顯示） */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{
            background: 'radial-gradient(ellipse at 30% 30%, hsl(var(--primary) / 0.1) 0%, transparent 50%)',
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SceneImage;
