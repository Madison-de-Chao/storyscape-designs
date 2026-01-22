import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2, Play, Music, Pause } from 'lucide-react';
import { toast } from 'sonner';

interface MusicGeneratorProps {
  onClose?: () => void;
}

const MOOD_PRESETS = [
  {
    id: 'calm',
    label: '平靜',
    emoji: '🧘',
    prompt: "Peaceful ambient meditation music with soft piano, gentle strings, and ethereal pads. Calm and serene atmosphere, suitable for contemplation and relaxation. Minimal percussion, flowing melody, 60-70 BPM",
    duration: 30,
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'tension',
    label: '緊張',
    emoji: '⚡',
    prompt: "Tense dramatic orchestral music with pulsing synths, deep bass, and urgent strings. Building suspense and anxiety, cinematic thriller atmosphere. Dark undertones, 90-110 BPM",
    duration: 30,
    color: 'from-red-600 to-orange-600',
  },
  {
    id: 'emotional',
    label: '感性',
    emoji: '💔',
    prompt: "Emotional piano ballad with gentle strings and soft choir. Melancholic yet beautiful, evoking nostalgia and deep feelings. Expressive melody, 70-80 BPM, cinematic and touching",
    duration: 30,
    color: 'from-purple-600 to-pink-600',
  },
  {
    id: 'mysterious',
    label: '神秘',
    emoji: '🌙',
    prompt: "Mysterious ethereal ambient music with haunting vocals, deep drones, and otherworldly textures. Mystical and enigmatic atmosphere, like ancient secrets being revealed. 50-70 BPM",
    duration: 30,
    color: 'from-indigo-600 to-purple-600',
  },
  {
    id: 'revelation',
    label: '啟示',
    emoji: '✨',
    prompt: "Epic cinematic revelation music with ascending orchestral swells, triumphant brass, angelic choir, and shimmering strings. Moment of enlightenment and spiritual awakening. Building to a powerful climax, 80-100 BPM",
    duration: 30,
    color: 'from-amber-500 to-yellow-500',
  },
  {
    id: 'void',
    label: '虛空',
    emoji: '🕳️',
    prompt: "Dark ambient void music with deep space drones, subtle digital glitches, and vast emptiness. Cosmic and existential atmosphere, like floating in infinite darkness. Very slow, 40-50 BPM",
    duration: 30,
    color: 'from-slate-700 to-gray-900',
  },
  {
    id: 'ferry',
    label: '渡口',
    emoji: '🚣',
    prompt: "Gentle water ambient with soft ripples, distant fog horns, and peaceful Eastern flute. Misty river crossing atmosphere, zen and contemplative. 50-60 BPM, traditional Asian instruments",
    duration: 30,
    color: 'from-teal-600 to-emerald-600',
  },
  {
    id: 'cosmos',
    label: '宇宙',
    emoji: '🌌',
    prompt: "Cosmic space ambient with vast synthesizer pads, twinkling stars, and celestial harmonies. Journey through the universe, awe-inspiring and infinite. 60-70 BPM, new age style",
    duration: 30,
    color: 'from-violet-600 to-blue-600',
  },
];

const MusicGenerator = ({ onClose }: MusicGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedMood, setSelectedMood] = useState(MOOD_PRESETS[0]);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const generateMusic = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/elevenlabs-music`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            prompt: selectedMood.prompt,
            duration: selectedMood.duration,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to generate music: ${response.status}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudioBlob(blob);
      setAudioUrl(url);
      
      // Clean up previous audio element
      if (audioElement) {
        audioElement.pause();
        setAudioElement(null);
      }
      
      toast.success('音樂生成成功！');
    } catch (error) {
      console.error('Music generation error:', error);
      toast.error('音樂生成失敗，請稍後再試');
    } finally {
      setIsGenerating(false);
    }
  };

  const togglePlayback = () => {
    if (!audioUrl) return;

    if (isPlaying && audioElement) {
      audioElement.pause();
      setIsPlaying(false);
    } else {
      const audio = new Audio(audioUrl);
      audio.onended = () => setIsPlaying(false);
      audio.play();
      setAudioElement(audio);
      setIsPlaying(true);
    }
  };

  const downloadMusic = () => {
    if (audioBlob && audioUrl) {
      const link = document.createElement('a');
      link.href = audioUrl;
      link.download = `bgm_${selectedMood.id}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('音樂已下載！');
    }
  };

  const handleMoodSelect = (mood: typeof MOOD_PRESETS[0]) => {
    setSelectedMood(mood);
    setAudioUrl(null);
    setAudioBlob(null);
    if (audioElement) {
      audioElement.pause();
      setAudioElement(null);
    }
    setIsPlaying(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 max-w-lg w-full border border-purple-500/30 shadow-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
          <Music className="w-6 h-6" />
          AI BGM 生成器
        </h2>
        
        <p className="text-slate-300 mb-4 text-sm">
          選擇氛圍類型，生成對應的背景音樂（約30秒）
        </p>

        {/* Mood Selection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {MOOD_PRESETS.map((mood) => (
            <button
              key={mood.id}
              onClick={() => handleMoodSelect(mood)}
              className={`p-3 rounded-lg border transition-all text-center ${
                selectedMood.id === mood.id
                  ? `border-purple-500 bg-gradient-to-br ${mood.color} text-white`
                  : 'border-slate-600 bg-slate-800/50 text-slate-400 hover:border-slate-500 hover:bg-slate-700/50'
              }`}
            >
              <span className="text-2xl block mb-1">{mood.emoji}</span>
              <span className="text-xs font-medium">{mood.label}</span>
            </button>
          ))}
        </div>

        {/* Selected Mood Info */}
        <div className="bg-slate-800/50 rounded-lg p-3 mb-4 border border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">{selectedMood.emoji}</span>
            <span className="font-medium text-white">{selectedMood.label}</span>
            <span className="text-xs text-slate-500">({selectedMood.duration}秒)</span>
          </div>
          <p className="text-xs text-slate-400 line-clamp-2">{selectedMood.prompt}</p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={generateMusic}
            disabled={isGenerating}
            className={`w-full bg-gradient-to-r ${selectedMood.color} hover:opacity-90`}
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                生成中...（約需30秒）
              </>
            ) : (
              <>生成「{selectedMood.label}」BGM</>
            )}
          </Button>

          {audioUrl && (
            <div className="flex gap-2">
              <Button
                onClick={togglePlayback}
                variant="outline"
                className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-500/20"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 mr-2" />
                    暫停
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    試聽
                  </>
                )}
              </Button>
              <Button
                onClick={downloadMusic}
                variant="outline"
                className="flex-1 border-green-500/50 text-green-400 hover:bg-green-500/20"
              >
                <Download className="w-4 h-4 mr-2" />
                下載
              </Button>
            </div>
          )}
        </div>

        {onClose && (
          <Button
            onClick={() => {
              if (audioElement) {
                audioElement.pause();
              }
              onClose();
            }}
            variant="ghost"
            className="w-full mt-4 text-slate-400 hover:text-slate-200"
          >
            關閉
          </Button>
        )}
      </div>
    </div>
  );
};

export default MusicGenerator;
