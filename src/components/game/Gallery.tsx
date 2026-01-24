import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ZoomIn, ChevronDown, ChevronRight, Sparkles } from 'lucide-react';
import { useGameStore } from '@/stores/gameStore';
import { sceneImages, type SceneImageConfig } from '@/data/yi1/sceneImages';

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

// 章節定義
interface ChapterInfo {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  patterns: string[];
}

const chapters: ChapterInfo[] = [
  { id: 'preface', title: '作者序', subtitle: '起源', color: 'hsl(45, 80%, 55%)', patterns: ['preface-'] },
  { id: 'prologue', title: '序章', subtitle: '訓練場', color: 'hsl(270, 60%, 50%)', patterns: ['prologue-'] },
  { id: 'chapter-1', title: '第一章', subtitle: '刪除', color: 'hsl(0, 70%, 45%)', patterns: ['chapter-1-'] },
  { id: 'chapter-2', title: '第二章', subtitle: '渡口', color: 'hsl(200, 70%, 50%)', patterns: ['chapter-2-'] },
  { id: 'chapter-3', title: '第三章', subtitle: '心即理', color: 'hsl(120, 40%, 40%)', patterns: ['chapter-3-'] },
  { id: 'chapter-4', title: '第四章', subtitle: '命樹', color: 'hsl(30, 50%, 35%)', patterns: ['chapter-4-'] },
  { id: 'chapter-5', title: '第五章', subtitle: '也無風雨', color: 'hsl(180, 50%, 45%)', patterns: ['chapter-5-'] },
  { id: 'chapter-6', title: '第六章', subtitle: '龍場悟道', color: 'hsl(45, 60%, 50%)', patterns: ['chapter-6-'] },
  { id: 'chapter-7', title: '第七章', subtitle: '無字碑', color: 'hsl(340, 60%, 50%)', patterns: ['chapter-7-'] },
  { id: 'chapter-8', title: '第八章', subtitle: '把自己活完', color: 'hsl(25, 50%, 40%)', patterns: ['chapter-8-'] },
  { id: 'chapter-9', title: '第九章', subtitle: '天生我材', color: 'hsl(220, 60%, 55%)', patterns: ['chapter-9-'] },
  { id: 'chapter-10', title: '第十章', subtitle: '權力與愛', color: 'hsl(15, 70%, 50%)', patterns: ['chapter-10-'] },
  { id: 'chapter-11', title: '第十一章', subtitle: '寬恕', color: 'hsl(140, 50%, 45%)', patterns: ['chapter-11-'] },
  { id: 'chapter-12', title: '第十二章', subtitle: '幽默', color: 'hsl(35, 55%, 45%)', patterns: ['chapter-12-'] },
  { id: 'chapter-13', title: '第十三章', subtitle: '破框', color: 'hsl(0, 0%, 85%)', patterns: ['chapter-13-'] },
  { id: 'chapter-14', title: '第十四章', subtitle: '未歸者廊', color: 'hsl(260, 50%, 40%)', patterns: ['chapter-14-'] },
  { id: 'chapter-15', title: '第十五章', subtitle: '伊', color: 'hsl(350, 60%, 45%)', patterns: ['chapter-15-'] },
  { id: 'chapter-16', title: '第十六章', subtitle: '歸零', color: 'hsl(45, 70%, 55%)', patterns: ['chapter-16-'] },
  { id: 'epilogue', title: '終章', subtitle: '新的開始', color: 'hsl(30, 60%, 50%)', patterns: ['epilogue-', 'yi1-epilogue-'] },
  { id: 'postscript', title: '後記', subtitle: '作者的話', color: 'hsl(45, 50%, 45%)', patterns: ['postscript-', 'yi1-postscript-'] },
];

// 判斷圖片屬於哪個章節
const getChapterForImage = (config: SceneImageConfig): string => {
  for (const chapter of chapters) {
    for (const pattern of chapter.patterns) {
      if (config.nodePatterns.some(np => np.startsWith(pattern) || np.includes(pattern))) {
        return chapter.id;
      }
    }
  }
  // 根據 alt 文本判斷
  const alt = config.alt.toLowerCase();
  if (alt.includes('作者序') || alt.includes('起源')) return 'preface';
  if (alt.includes('序章') || alt.includes('虛空') || alt.includes('訓練場')) return 'prologue';
  if (alt.includes('終章') || alt.includes('epilogue')) return 'epilogue';
  // 嘗試從 alt 中提取章節號
  const chMatch = alt.match(/ch(\d+)/);
  if (chMatch) return `chapter-${chMatch[1]}`;
  return 'other';
};

const Gallery = ({ isOpen, onClose }: GalleryProps) => {
  const { yiProgress } = useGameStore();
  const unlockedImages = yiProgress.unlockedImages || [];
  const [selectedImage, setSelectedImage] = useState<SceneImageConfig | null>(null);
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set(['preface', 'prologue', 'chapter-1']));

  // 獲取所有可解鎖的圖片（去重）並按章節分組
  const imagesByChapter = useMemo(() => {
    const allImages = sceneImages.reduce<SceneImageConfig[]>((acc, config) => {
      if (!acc.find(img => img.image === config.image)) {
        acc.push(config);
      }
      return acc;
    }, []);

    const grouped: Record<string, SceneImageConfig[]> = {};
    
    for (const image of allImages) {
      const chapterId = getChapterForImage(image);
      if (!grouped[chapterId]) {
        grouped[chapterId] = [];
      }
      grouped[chapterId].push(image);
    }

    return grouped;
  }, []);

  const totalImages = Object.values(imagesByChapter).flat().length;

  const isImageUnlocked = (imageUrl: string) => {
    return unlockedImages.includes(imageUrl);
  };

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => {
      const next = new Set(prev);
      if (next.has(chapterId)) {
        next.delete(chapterId);
      } else {
        next.add(chapterId);
      }
      return next;
    });
  };

  const getChapterStats = (chapterId: string) => {
    const images = imagesByChapter[chapterId] || [];
    const unlocked = images.filter(img => isImageUnlocked(img.image)).length;
    return { total: images.length, unlocked };
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

          {/* 裝飾粒子 */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* 內容 */}
          <motion.div
            className="relative z-10 w-full max-w-6xl max-h-[90vh] mx-4 overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            {/* 標題列 */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Sparkles className="w-8 h-8 text-primary" />
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-serif-tc font-bold text-foreground tracking-wider">
                    藝廊
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    已解鎖 <span className="text-primary font-semibold">{unlockedImages.length}</span> / {totalImages} 張圖片
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-muted/30 hover:bg-muted/50 transition-all duration-300 group"
              >
                <X className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              </button>
            </div>

            {/* 進度條 */}
            <div className="mb-6">
              <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(unlockedImages.length / totalImages) * 100}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* 章節列表 */}
            <div className="overflow-y-auto max-h-[65vh] pr-2 space-y-3 custom-scrollbar">
              {chapters.map((chapter, chapterIndex) => {
                const stats = getChapterStats(chapter.id);
                const isExpanded = expandedChapters.has(chapter.id);
                const images = imagesByChapter[chapter.id] || [];
                const hasImages = images.length > 0;
                const allUnlocked = stats.unlocked === stats.total && stats.total > 0;

                if (!hasImages) return null;

                return (
                  <motion.div
                    key={chapter.id}
                    className="rounded-xl overflow-hidden border border-border/30 bg-card/30 backdrop-blur-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: chapterIndex * 0.05 }}
                  >
                    {/* 章節標題 */}
                    <button
                      onClick={() => toggleChapter(chapter.id)}
                      className="w-full flex items-center justify-between p-4 hover:bg-muted/20 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-3 h-3 rounded-full shadow-lg"
                          style={{ 
                            backgroundColor: chapter.color,
                            boxShadow: `0 0 10px ${chapter.color}40`
                          }}
                        />
                        <div className="text-left">
                          <div className="flex items-center gap-2">
                            <span className="font-serif-tc font-semibold text-foreground">
                              {chapter.title}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {chapter.subtitle}
                            </span>
                            {allUnlocked && (
                              <motion.span
                                className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                              >
                                完成
                              </motion.span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {stats.unlocked} / {stats.total} 張
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {/* 小進度條 */}
                        <div className="w-20 h-1.5 bg-muted/30 rounded-full overflow-hidden hidden sm:block">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${stats.total > 0 ? (stats.unlocked / stats.total) * 100 : 0}%`,
                              backgroundColor: chapter.color
                            }}
                          />
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 0 : -90 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        </motion.div>
                      </div>
                    </button>

                    {/* 圖片網格 */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-4 pt-0">
                            {images.map((config, index) => {
                              const unlocked = isImageUnlocked(config.image);
                              return (
                                <motion.div
                                  key={config.image}
                                  className={`
                                    relative aspect-video rounded-lg overflow-hidden
                                    border-2 transition-all duration-300
                                    ${unlocked 
                                      ? 'cursor-pointer border-transparent hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10' 
                                      : 'cursor-not-allowed border-border/20'
                                    }
                                  `}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: index * 0.03 }}
                                  onClick={() => unlocked && setSelectedImage(config)}
                                  whileHover={unlocked ? { scale: 1.03, y: -2 } : {}}
                                  whileTap={unlocked ? { scale: 0.98 } : {}}
                                >
                                  {unlocked ? (
                                    <>
                                      <img
                                        src={config.image}
                                        alt={config.alt}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                      />
                                      {/* 懸停覆蓋層 */}
                                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                                        <ZoomIn className="w-5 h-5 text-foreground mb-6" />
                                        <p className="absolute bottom-2 left-2 right-2 text-[10px] text-foreground font-serif-tc truncate text-center">
                                          {config.alt}
                                        </p>
                                      </div>
                                      {/* 發光邊框效果 */}
                                      <div 
                                        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                                        style={{
                                          boxShadow: `inset 0 0 20px ${chapter.color}30`
                                        }}
                                      />
                                    </>
                                  ) : (
                                    <div className="w-full h-full bg-muted/20 flex flex-col items-center justify-center">
                                      <Lock className="w-5 h-5 text-muted-foreground/40 mb-1" />
                                      <p className="text-[10px] text-muted-foreground/40">未解鎖</p>
                                    </div>
                                  )}
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
                {/* 背景模糊的縮圖 */}
                <div 
                  className="absolute inset-0 opacity-20 blur-3xl"
                  style={{
                    backgroundImage: `url(${selectedImage.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                <motion.div
                  className="relative max-w-[95vw] max-h-[95vh]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: 'spring', damping: 25 }}
                  onClick={e => e.stopPropagation()}
                >
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                  />
                  
                  {/* 標題標籤 */}
                  <motion.div 
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-background/80 backdrop-blur-md rounded-full border border-border/30"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-base font-serif-tc text-foreground whitespace-nowrap">
                      {selectedImage.alt}
                    </p>
                  </motion.div>

                  {/* 關閉按鈕 */}
                  <motion.button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 p-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border border-border/30 transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </motion.button>

                  {/* 裝飾角標 */}
                  <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
                    <div className="absolute top-4 left-4 w-8 h-[2px] bg-primary/50" />
                    <div className="absolute top-4 left-4 w-[2px] h-8 bg-primary/50" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
                    <div className="absolute bottom-4 right-4 w-8 h-[2px] bg-primary/50" />
                    <div className="absolute bottom-4 right-4 w-[2px] h-8 bg-primary/50" />
                  </div>
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
