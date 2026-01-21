import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2, Play, Volume2 } from 'lucide-react';
import { toast } from 'sonner';

interface SFXGeneratorProps {
  onClose?: () => void;
}

const SFXGenerator = ({ onClose }: SFXGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
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
            prompt: 'A young woman\'s cold, dismissive scoff. Short and sharp with a hint of condescension. Subtle breath followed by a brief, icy chuckle that trails off. Realistic human voice, slightly mocking tone',
            duration: 2,
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
      link.download = 'chapter_transition.mp3';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success('音效已下載！請將檔案放到 public/audio/sfx/ 資料夾');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 max-w-md w-full border border-amber-500/30 shadow-2xl">
        <h2 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
          <Volume2 className="w-6 h-6" />
          AI 音效生成器
        </h2>
        
        <p className="text-slate-300 mb-6 text-sm">
          使用 ElevenLabs AI 生成空靈鐘聲風格的章節過場音效
        </p>

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
              '生成章節過場音效'
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

          {audioUrl && (
            <p className="text-xs text-slate-400 text-center">
              下載後請將 chapter_transition.mp3 放到<br />
              <code className="bg-slate-700 px-1 rounded">public/audio/sfx/</code> 資料夾
            </p>
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
