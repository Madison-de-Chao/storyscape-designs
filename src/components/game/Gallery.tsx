import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ZoomIn } from 'lucide-react';
import { useGameStore } from '@/stores/gameStore';
import { sceneImages, type SceneImageConfig } from '@/data/yi1/sceneImages';

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const Gallery = ({ isOpen, onClose }: GalleryProps) => {
  const { yiProgress } = useGameStore();
  const unlockedImages = yiProgress.unlockedImages || [];
  const [selectedImage, setSelectedImage] = useState<SceneImageConfig | null>(null);

  // 獲取所有可解鎖的圖片（去重）
  const allImages = sceneImages.reduce<SceneImageConfig[]>((acc, config) => {
    if (!acc.find(img => img.image === config.image)) {
      acc.push(config);
    }
    return acc;
  }, []);

  const isImageUnlocked = (imageUrl: string) => {
    return unlockedImages.includes(imageUrl);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* 背景遮罩 */}
          <motion.div
            className="absolute inset-0 bg-background/95 backdrop-blur-md"
            onClick={onClose}
          />

          {/* 內容 */}
          <motion.div
            className="relative z-10 w-full max-w-5xl max-h-[90vh] mx-4 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            {/* 標題列 */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-serif-tc font-bold text-foreground">
                  藝廊
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  已解鎖 {unlockedImages.length} / {allImages.length} 張圖片
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-muted/50 transition-colors"
              >
                <X className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>

            {/* 圖片網格 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto max-h-[70vh] pr-2">
              {allImages.map((config, index) => {
                const unlocked = isImageUnlocked(config.image);
                return (
                  <motion.div
                    key={config.image}
                    className={`
                      relative aspect-video rounded-xl overflow-hidden
                      border border-border/50
                      ${unlocked ? 'cursor-pointer hover:border-primary/50' : 'cursor-not-allowed'}
                      transition-all duration-300
                    `}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => unlocked && setSelectedImage(config)}
                    whileHover={unlocked ? { scale: 1.02 } : {}}
                  >
                    {unlocked ? (
                      <>
                        <img
                          src={config.image}
                          alt={config.alt}
                          className="w-full h-full object-cover"
                        />
                        {/* 懸停時顯示放大圖標 */}
                        <div className="absolute inset-0 bg-background/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                          <ZoomIn className="w-8 h-8 text-foreground" />
                        </div>
                        {/* 標題 */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-background/90 to-transparent">
                          <p className="text-xs text-foreground font-serif-tc truncate">
                            {config.alt}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full bg-muted/30 flex flex-col items-center justify-center">
                        <Lock className="w-8 h-8 text-muted-foreground/50 mb-2" />
                        <p className="text-xs text-muted-foreground/50">未解鎖</p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* 大圖檢視 */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="fixed inset-0 z-60 flex items-center justify-center bg-background/98"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  className="relative max-w-[95vw] max-h-[95vh]"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                >
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full">
                    <p className="text-sm font-serif-tc text-foreground">
                      {selectedImage.alt}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Gallery;
