import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import GameScene from "@/components/game/GameScene";
import NodeIntegrityAlert from "@/components/game/NodeIntegrityAlert";
import TitleScreen from "@/components/game/TitleScreen";
import IntroVideo from "@/components/game/IntroVideo";
import { useGameStore } from "@/stores/gameStore";

const pageVariants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(5px)" },
};

// 使用 sessionStorage 確保每次瀏覽器會話只顯示一次開場動畫
const INTRO_SHOWN_KEY = 'arctozero_intro_shown';

const Index = () => {
  const isPlaying = useGameStore((state) => state.isPlaying);
  const currentNodeId = useGameStore((state) => state.yiProgress.currentNodeId);
  
  // 追蹤是否需要顯示開場動畫
  const [showIntroVideo, setShowIntroVideo] = useState(false);
  const prevIsPlaying = useRef(isPlaying);

  // 偵測從標題畫面開始遊戲
  useEffect(() => {
    // 當 isPlaying 從 false 變成 true，且是從頭開始（preface-1）
    // 並且本次瀏覽器會話尚未顯示過開場動畫
    const introShown = sessionStorage.getItem(INTRO_SHOWN_KEY);
    
    if (
      isPlaying && 
      !prevIsPlaying.current && 
      currentNodeId === 'preface-1' &&
      !introShown
    ) {
      setShowIntroVideo(true);
      sessionStorage.setItem(INTRO_SHOWN_KEY, 'true');
    }
    prevIsPlaying.current = isPlaying;
  }, [isPlaying, currentNodeId]);

  const handleIntroComplete = () => {
    setShowIntroVideo(false);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen bg-background"
    >
      <NodeIntegrityAlert />
      
      {/* 開場動畫 */}
      {showIntroVideo && (
        <IntroVideo onComplete={handleIntroComplete} />
      )}
      
      {isPlaying ? <GameScene /> : <TitleScreen />}
    </motion.div>
  );
};

export default Index;
