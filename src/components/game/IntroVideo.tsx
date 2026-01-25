import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkipForward, Volume2, VolumeX } from 'lucide-react';
import { useBGM } from '@/hooks/useAudio';

interface IntroVideoProps {
  onComplete: () => void;
}

const IntroVideo = ({ onComplete }: IntroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { stopBGM } = useBGM();

  // 開始播放時停止背景音樂
  useEffect(() => {
    // 立即停止任何正在播放的 BGM
    stopBGM(true);
    
    // 顯示跳過按鈕延遲（讓玩家先體驗一下）
    const skipTimer = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(skipTimer);
  }, [stopBGM]);

  const handleVideoEnd = () => {
    setIsFadingOut(true);
    // 淡出後通知完成，讓遊戲場景處理後續 BGM
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
        // 自動播放被阻止時，設為靜音後重試
        console.log('Autoplay blocked, trying muted playback');
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {
            console.log('Even muted autoplay blocked');
          });
        }
      });
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handlePlayClick = () => {
    if (videoRef.current?.paused) {
      // 用戶互動後可以取消靜音
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play();
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
          onLoadedData={handleVideoLoaded}
          onEnded={handleVideoEnd}
          onClick={handlePlayClick}
        />

        {/* 控制按鈕區 */}
        <AnimatePresence>
          {showSkip && !isFadingOut && (
            <motion.div
              className="absolute bottom-8 right-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* 靜音切換按鈕 */}
              <motion.button
                className="
                  flex items-center justify-center
                  w-10 h-10 rounded-full
                  bg-background/30 backdrop-blur-sm
                  border border-white/20
                  text-white/80 hover:text-white
                  transition-all duration-300
                  hover:bg-background/50
                "
                onClick={toggleMute}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </motion.button>

              {/* 跳過按鈕 */}
              <motion.button
                className="
                  flex items-center gap-2
                  px-4 py-2 rounded-full
                  bg-background/30 backdrop-blur-sm
                  border border-white/20
                  text-white/80 hover:text-white
                  text-sm font-serif-tc
                  transition-all duration-300
                  hover:bg-background/50
                "
                onClick={handleSkip}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>跳過</span>
                <SkipForward className="w-4 h-4" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 點擊播放提示（自動播放被阻止時） */}
        {isLoaded && videoRef.current?.paused && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handlePlayClick}
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

        {/* 靜音提示 */}
        <AnimatePresence>
          {isLoaded && isMuted && !videoRef.current?.paused && (
            <motion.div
              className="absolute top-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="
                flex items-center gap-2
                px-4 py-2 rounded-full
                bg-background/50 backdrop-blur-sm
                border border-white/10
                text-white/60 text-xs font-serif-tc
              ">
                <VolumeX className="w-3 h-3" />
                <span>點擊右下角按鈕開啟聲音</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroVideo;
