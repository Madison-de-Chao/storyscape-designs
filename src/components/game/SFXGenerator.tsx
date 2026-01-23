import { Button } from '@/components/ui/button';
import { CheckCircle, Volume2 } from 'lucide-react';

interface SFXGeneratorProps {
  onClose?: () => void;
}

const SFXGenerator = ({ onClose }: SFXGeneratorProps) => {
  // 所有技術音效已完成
  const completedSFX = [
    { id: 'holy_bell', label: '神聖鐘聲', emoji: '🛕', variants: 4 },
    { id: 'birds_chirping', label: '鳥鳴聲', emoji: '🐦', variants: 2 },
    { id: 'rain_light', label: '輕柔雨聲', emoji: '🌧️', variants: 3 },
    { id: 'ear_ringing', label: '耳鳴聲', emoji: '🔔', variants: 3 },
    { id: 'digital_break', label: '數位破碎聲', emoji: '💥', variants: 4 },
    { id: 'wood_chop', label: '劈柴聲', emoji: '🪓', variants: 2 },
  ];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 max-w-md w-full border border-green-500/30 shadow-2xl">
        <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6" />
          音效製作完成！
        </h2>
        
        <p className="text-slate-300 mb-4 text-sm">
          所有 6 種技術音效已成功製作並整合到遊戲中。
        </p>

        {/* Completed SFX Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {completedSFX.map((sfx) => (
            <div
              key={sfx.id}
              className="p-3 rounded-lg border border-green-500/30 bg-green-500/10 text-left"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{sfx.emoji}</span>
                <span className="text-sm font-medium text-green-300">{sfx.label}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-green-400/70">
                <Volume2 className="w-3 h-3" />
                <span>{sfx.variants} 個變體</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-slate-400 text-sm mb-4">
          共 18 個音效檔案已就緒 ✨
        </div>

        {onClose && (
          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500"
          >
            完成
          </Button>
        )}
      </div>
    </div>
  );
};

export default SFXGenerator;
