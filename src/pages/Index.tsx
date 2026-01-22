import { motion } from "framer-motion";
import GameScene from "@/components/game/GameScene";
import NodeIntegrityAlert from "@/components/game/NodeIntegrityAlert";
import TitleScreen from "@/components/game/TitleScreen";
import { useGameStore } from "@/stores/gameStore";

const pageVariants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(5px)" },
};

const Index = () => {
  const isPlaying = useGameStore((state) => state.isPlaying);

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
      {isPlaying ? <GameScene /> : <TitleScreen />}
    </motion.div>
  );
};
// 在渲染對話框的地方
const getEffectClass = (effect?: string) => {
  switch (effect) {
    case 'glitch': return 'effect-glitch';
    case 'starry': return 'effect-starry';
    case 'flash': return 'effect-flash-screen'; // 這是全螢幕的
    case 'glow': return 'effect-heartbeat';
    default: return '';
  }
};

// ... JSX 中 ...
<div className={`dialogue-text ${getEffectClass(currentNode.effect)}`}>
  {currentNode.text}
</div>

{/* 如果是 flash，可能需要獨立渲染一個全螢幕 div */}
{currentNode.effect === 'flash' && <div className="effect-flash-screen" />}
export default Index;
