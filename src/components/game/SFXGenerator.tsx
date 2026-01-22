import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2, Play, Volume2 } from 'lucide-react';
import { toast } from 'sonner';

interface SFXGeneratorProps {
  onClose?: () => void;
}

const EMOTION_PRESETS = [
  // 男聲版本
  {
    id: 'cold_laugh_male',
    label: '冷笑（男）',
    emoji: '😏',
    prompt: "A young man's cold, dismissive scoff. Short and sharp with a hint of condescension. Subtle breath followed by a brief, icy chuckle that trails off. Realistic male voice, slightly mocking tone",
    duration: 2,
  },
  {
    id: 'mockery_male',
    label: '嘲諷（男）',
    emoji: '🙄',
    prompt: "A young man's mocking laugh. Exaggerated and theatrical with an air of superiority. A sharp 'ha!' followed by a drawn-out, condescending chuckle. Realistic male voice, sarcastic and dismissive",
    duration: 2,
  },
  {
    id: 'contempt_male',
    label: '輕蔑（男）',
    emoji: '😤',
    prompt: "A young man's contemptuous huff. A sharp exhale through the nose followed by a quiet, disdainful 'tch' sound. Brief and cutting. Realistic male voice, expressing disgust and superiority",
    duration: 1.5,
  },
  {
    id: 'mysterious_whisper_male',
    label: '神秘低語（男）',
    emoji: '🤫',
    prompt: "A young man's mysterious whisper. Soft, breathy, and enigmatic. A quiet, drawn-out unintelligible murmur that fades into silence. Realistic male voice, ethereal and haunting",
    duration: 3,
  },
  {
    id: 'mysterious_whisper_female',
    label: '神秘低語（女）',
    emoji: '🤫',
    prompt: "A young woman's mysterious whisper. Soft, breathy, and enigmatic. A quiet, drawn-out unintelligible murmur that fades into silence. Realistic female voice, ethereal and haunting",
    duration: 3,
  },
  {
    id: 'evil_giggle_male',
    label: '邪惡輕笑（男）',
    emoji: '😈',
    prompt: "A young man's sinister giggle. Low and unsettling, starting soft then building to a brief, unnerving laugh. Realistic male voice with a dark, threatening undertone",
    duration: 2.5,
  },
  {
    id: 'sad_sigh_male',
    label: '哀傷嘆息（男）',
    emoji: '😢',
    prompt: "A young man's sad, melancholic sigh. A deep, trembling breath followed by a soft, sorrowful exhale. Realistic male voice filled with grief and longing",
    duration: 2,
  },
  {
    id: 'surprise_male',
    label: '驚訝（男）',
    emoji: '😲',
    prompt: "A young man's surprised gasp. A sudden sharp intake of breath followed by a soft 'oh!' with rising intonation. Realistic male voice expressing genuine shock and wonder",
    duration: 1.5,
  },
  {
    id: 'excitement_male',
    label: '興奮（男）',
    emoji: '🤩',
    prompt: "A young man's excited exclamation. A quick, energetic laugh bursting with joy and enthusiasm. Breathless and energetic with infectious happiness. Realistic male voice, youthful and thrilled",
    duration: 2,
  },
  {
    id: 'fear_male',
    label: '恐懼（男）',
    emoji: '😨',
    prompt: "A young man's fearful whimper. A trembling, shaky breath followed by a quiet, terrified gasp. Voice quivering with dread and vulnerability. Realistic male voice expressing deep fear",
    duration: 2,
  },
  {
    id: 'gentle_laugh_male',
    label: '溫柔笑聲（男）',
    emoji: '🥰',
    prompt: "A young man's gentle, warm laugh. Soft and melodic, like sunlight through leaves. A quiet, affectionate chuckle that conveys kindness and comfort. Realistic male voice, soothing and warm",
    duration: 2,
  },
  {
    id: 'frustration_male',
    label: '煩躁（男）',
    emoji: '😫',
    prompt: "A young man's frustrated groan. An exasperated sigh followed by a muttered complaint. Tense and impatient with barely contained irritation. Realistic male voice expressing annoyance",
    duration: 2,
  },
  {
    id: 'seductive_male',
    label: '魅惑（男）',
    emoji: '💋',
    prompt: "A young man's seductive whisper. Low, breathy, and alluring. A soft, drawn-out hum followed by a quiet, inviting chuckle. Realistic male voice, sultry and mysterious",
    duration: 2.5,
  },
  {
    id: 'revelation',
    label: '啟示',
    emoji: '✨',
    prompt: "Ethereal resonating crystal chime with gentle ascending chord, magical spiritual awakening moment, soft bells and celestial harmonics, cinematic epiphany sound effect",
    duration: 4,
  },
];

const SFXGenerator = ({ onClose }: SFXGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState(EMOTION_PRESETS[0]);
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
            prompt: selectedEmotion.prompt,
            duration: selectedEmotion.duration,
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
      link.download = `${selectedEmotion.id}.mp3`;
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
          AI 女聲音效生成
        </h2>
        
        <p className="text-slate-300 mb-4 text-sm">
          選擇情緒類型，生成不同風格的女聲音效
        </p>

        {/* Emotion Selection Grid */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {EMOTION_PRESETS.map((emotion) => (
            <button
              key={emotion.id}
              onClick={() => {
                setSelectedEmotion(emotion);
                setAudioUrl(null);
                setAudioBlob(null);
              }}
              className={`p-3 rounded-lg border transition-all text-center ${
                selectedEmotion.id === emotion.id
                  ? 'border-amber-500 bg-amber-500/20 text-amber-300'
                  : 'border-slate-600 bg-slate-800/50 text-slate-400 hover:border-slate-500 hover:bg-slate-700/50'
              }`}
            >
              <span className="text-2xl block mb-1">{emotion.emoji}</span>
              <span className="text-xs font-medium">{emotion.label}</span>
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
              <>生成「{selectedEmotion.label}」音效</>
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
