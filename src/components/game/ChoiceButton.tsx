import { motion } from 'framer-motion';
import { Choice } from '@/stores/gameStore';
import { useSFX } from '@/hooks/useAudio';

interface ChoiceButtonProps {
  choice: Choice;
  index: number;
  onClick: () => void;
}

const ChoiceButton = ({ choice, index, onClick }: ChoiceButtonProps) => {
  const { playSFX } = useSFX();

  const handleClick = () => {
    playSFX('choice');
    onClick();
  };

  const handleHover = () => {
    playSFX('hover');
  };

  return (
    <motion.button
      className="
        w-full text-left px-6 py-4 
        choice-btn rounded-xl border border-border/50
        font-sans-tc text-base md:text-lg
        text-foreground/90 hover:text-foreground
        transition-all duration-300
      "
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={handleClick}
      onMouseEnter={handleHover}
    >
      <div className="flex items-center gap-4">
        <span className="text-primary/70 text-sm font-serif-tc">
          {index + 1}
        </span>
        <span>{choice.text}</span>
      </div>
    </motion.button>
  );
};

export default ChoiceButton;
