import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkipForward } from 'lucide-react';

interface IntroVideoProps {
  onComplete: () => void;
}

const IntroVideo = ({ onComplete }: IntroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 顯示跳過按鈕延遲（讓玩家先體驗一下）
    const skipTimer = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(skipTimer);
  }, []);

  const handleVideoEnd = () => {
    setIsFadingOut(true);
    setTimeout(onComplete, 800);
  };

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsFadingOut(true);
    setTimeout(onComplete, 500);
  };

  const handleVideoLoaded = () => {
    setIsLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // 自動播放被阻止時，仍然顯示影片
        console.log('Autoplay blocked, waiting for user interaction');
      });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: isFadingOut ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* 載入中指示器 */}
        {!isLoaded && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-center">
              <motion.div
                className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              <p className="text-muted-foreground text-sm font-serif-tc">
                載入中...
              </p>
            </div>
          </motion.div>
        )}

        {/* 影片 */}
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          src="/videos/intro.mp4"
          playsInline
          muted={false}
          onLoadedData={handleVideoLoaded}
          onEnded={handleVideoEnd}
          onClick={() => {
            // 點擊可以播放（處理自動播放被阻止的情況）
            if (videoRef.current?.paused) {
              videoRef.current.play();
            }
          }}
        />

        {/* 跳過按鈕 */}
        <AnimatePresence>
          {showSkip && !isFadingOut && (
            <motion.button
              className="
                absolute bottom-8 right-8
                flex items-center gap-2
                px-4 py-2 rounded-full
                bg-background/30 backdrop-blur-sm
                border border-white/20
                text-white/80 hover:text-white
                text-sm font-serif-tc
                transition-all duration-300
                hover:bg-background/50
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={handleSkip}
            >
              <span>跳過</span>
              <SkipForward className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* 點擊播放提示（自動播放被阻止時） */}
        {isLoaded && videoRef.current?.paused && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => videoRef.current?.play()}
          >
            <div className="text-center">
              <motion.div
                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
              </motion.div>
              <p className="text-white/70 text-sm font-serif-tc">
                點擊播放
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroVideo;
