import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Settings, Music, Sparkles, Wind } from 'lucide-react';
import { useAudioSettings } from '@/hooks/useAudio';

const AudioControls = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    masterVolume,
    bgmVolume,
    sfxVolume,
    ambientVolume,
    isMuted,
    setMasterVolume,
    setBgmVolume,
    setSfxVolume,
    setAmbientVolume,
    toggleMute,
  } = useAudioSettings();

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* 靜音按鈕 */}
      <div className="flex gap-2">
        <motion.button
          onClick={toggleMute}
          className="
            p-2 rounded-full
            bg-background/80 backdrop-blur-sm
            border border-border/50 hover:border-primary/50
            text-muted-foreground hover:text-foreground
            transition-colors duration-200
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={isMuted ? '取消靜音' : '靜音'}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </motion.button>

        {/* 設定按鈕 */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            p-2 rounded-full
            bg-background/80 backdrop-blur-sm
            border border-border/50 hover:border-primary/50
            text-muted-foreground hover:text-foreground
            transition-colors duration-200
            ${isOpen ? 'border-primary/50 text-primary' : ''}
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="音量設定"
        >
          <Settings className="w-5 h-5" />
        </motion.button>
      </div>

      {/* 音量控制面板 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              absolute top-full right-0 mt-2
              w-64 p-4
              bg-background/95 backdrop-blur-md
              border border-border/50 rounded-lg
              shadow-lg
            "
          >
            <h3 className="text-sm font-medium text-foreground mb-4">音量設定</h3>

            {/* 主音量 */}
            <div className="space-y-3">
              <VolumeSlider
                icon={<Volume2 className="w-4 h-4" />}
                label="主音量"
                value={masterVolume}
                onChange={setMasterVolume}
                disabled={isMuted}
              />

              <VolumeSlider
                icon={<Music className="w-4 h-4" />}
                label="背景音樂"
                value={bgmVolume}
                onChange={setBgmVolume}
                disabled={isMuted}
              />

              <VolumeSlider
                icon={<Sparkles className="w-4 h-4" />}
                label="音效"
                value={sfxVolume}
                onChange={setSfxVolume}
                disabled={isMuted}
              />

              <VolumeSlider
                icon={<Wind className="w-4 h-4" />}
                label="環境音"
                value={ambientVolume}
                onChange={setAmbientVolume}
                disabled={isMuted}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface VolumeSliderProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

const VolumeSlider = ({ icon, label, value, onChange, disabled }: VolumeSliderProps) => {
  return (
    <div className={`space-y-1 ${disabled ? 'opacity-50' : ''}`}>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        {icon}
        <span>{label}</span>
        <span className="ml-auto">{Math.round(value * 100)}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        disabled={disabled}
        className="
          w-full h-1.5 rounded-full appearance-none cursor-pointer
          bg-border
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-3
          [&::-webkit-slider-thumb]:h-3
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-primary
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-webkit-slider-thumb]:transition-transform
          [&::-webkit-slider-thumb]:hover:scale-110
          [&::-moz-range-thumb]:w-3
          [&::-moz-range-thumb]:h-3
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-primary
          [&::-moz-range-thumb]:border-0
          [&::-moz-range-thumb]:cursor-pointer
          disabled:cursor-not-allowed
        "
      />
    </div>
  );
};

export default AudioControls;
