import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2, Play, Volume2 } from 'lucide-react';
import { toast } from 'sonner';

interface SFXGeneratorProps {
  onClose?: () => void;
}

// 只保留尚未製作的音效
const MISSING_SFX_PRESETS = [
  {
    id: 'wood_chop',
    label: '劈柴聲',
    emoji: '🪓',
    prompt: "Realistic wood chopping sound. A sharp axe striking a log with a satisfying thunk, wood splitting apart. Single clean chop with slight echo, outdoor forest setting. Crisp and powerful impact",
    duration: 2,
    usage: '林肯章節',
  },
  {
    id: 'rain_light',
    label: '輕柔雨聲',
    emoji: '🌧️',
    prompt: "Gentle light rain ambient sound. Soft raindrops falling on leaves and rooftops. Peaceful, calming drizzle without thunder. Continuous gentle patter, relaxing nature atmosphere",
    duration: 8,
    usage: '蘇軾章節',
  },
  {
    id: 'ear_ringing',
    label: '耳鳴聲',
    emoji: '🔔',
    prompt: "Tinnitus ear ringing sound effect. High-pitched continuous tone that swells and fades. Disorienting, unsettling frequency. Subtle pulsing, headache inducing whine. Psychological tension",
    duration: 4,
    usage: '崩潰時刻',
  },
  {
    id: 'birds_chirping',
    label: '鳥鳴聲',
    emoji: '🐦',
    prompt: "Morning birds chirping and singing. Multiple songbirds creating a peaceful dawn chorus. Cheerful, hopeful ambient sound. Clear tweets and melodic calls, new beginning atmosphere",
    duration: 6,
    usage: '清晨場景',
  },
  {
    id: 'digital_break',
    label: '數位破碎聲',
    emoji: '💥',
    prompt: "Digital glitch destruction sound. Electronic circuits breaking apart, data corruption noise. Static bursts, pixelated crackle, binary disintegration. Cyberpunk system crash effect",
    duration: 3,
    usage: '刪除場景',
  },
  {
    id: 'holy_bell',
    label: '神聖鐘聲',
    emoji: '🛕',
    prompt: "Sacred temple bell resonating. Deep, pure bronze bell strike with long ethereal reverb. Spiritual awakening tone, Buddhist meditation bell. Single majestic chime fading into silence",
    duration: 5,
    usage: '頓悟時刻',
  },
];

const SFXGenerator = ({ onClose }: SFXGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedSFX, setSelectedSFX] = useState(MISSING_SFX_PRESETS[0]);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const generateSFX = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/elevenlabs-sfx`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            prompt: selectedSFX.prompt,
            duration: selectedSFX.duration,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to generate SFX: ${response.status}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudioBlob(blob);
      setAudioUrl(url);
      toast.success('音效生成成功！');
    } catch (error) {
      console.error('SFX generation error:', error);
      toast.error('音效生成失敗，請稍後再試');
    } finally {
      setIsGenerating(false);
    }
  };

  const playPreview = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  const downloadSFX = () => {
    if (audioBlob && audioUrl) {
      const link = document.createElement('a');
      link.href = audioUrl;
      link.download = `${selectedSFX.id}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('音效已下載！');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 max-w-md w-full border border-amber-500/30 shadow-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
          <Volume2 className="w-6 h-6" />
          缺失音效生成器
        </h2>
        
        <p className="text-slate-300 mb-4 text-sm">
          以下音效尚未製作，選擇後可生成並下載
        </p>

        {/* SFX Selection Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {MISSING_SFX_PRESETS.map((sfx) => (
            <button
              key={sfx.id}
              onClick={() => {
                setSelectedSFX(sfx);
                setAudioUrl(null);
                setAudioBlob(null);
              }}
              className={`p-3 rounded-lg border transition-all text-left ${
                selectedSFX.id === sfx.id
                  ? 'border-amber-500 bg-amber-500/20 text-amber-300'
                  : 'border-slate-600 bg-slate-800/50 text-slate-400 hover:border-slate-500 hover:bg-slate-700/50'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{sfx.emoji}</span>
                <span className="text-sm font-medium">{sfx.label}</span>
              </div>
              <span className="text-xs text-slate-500">用於：{sfx.usage}</span>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <Button
            onClick={generateSFX}
            disabled={isGenerating}
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                生成中...
              </>
            ) : (
              <>生成「{selectedSFX.label}」音效</>
            )}
          </Button>

          {audioUrl && (
            <div className="flex gap-2">
              <Button
                onClick={playPreview}
                variant="outline"
                className="flex-1 border-amber-500/50 text-amber-400 hover:bg-amber-500/20"
              >
                <Play className="w-4 h-4 mr-2" />
                試聽
              </Button>
              <Button
                onClick={downloadSFX}
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
            onClick={onClose}
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

export default SFXGenerator;
