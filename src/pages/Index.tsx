import { useGameStore } from '@/stores/gameStore';
import TitleScreen from '@/components/game/TitleScreen';
import GameScene from '@/components/game/GameScene';

const Index = () => {
  const isPlaying = useGameStore((state) => state.isPlaying);

  return (
    <div className="min-h-screen bg-background">
      {isPlaying ? <GameScene /> : <TitleScreen />}
    </div>
  );
};

export default Index;
