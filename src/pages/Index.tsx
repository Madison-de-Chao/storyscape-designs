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

export default Index;
