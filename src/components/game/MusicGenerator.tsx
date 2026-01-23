import { Button } from '@/components/ui/button';
import { Music, CheckCircle } from 'lucide-react';

interface MusicGeneratorProps {
  onClose?: () => void;
}

// 所有 BGM 已完備：calm, tension, emotional, mysterious, revelation, void, ferry, cosmos
const MusicGenerator = ({ onClose }: MusicGeneratorProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 max-w-lg w-full border border-green-500/30 shadow-2xl">
        <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
          <Music className="w-6 h-6" />
          AI BGM 生成器
        </h2>
        
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 text-center">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-green-300 mb-2">所有 BGM 已完備！</h3>
          <p className="text-slate-400 text-sm mb-4">
            8 種氛圍背景音樂皆已就緒
          </p>
          <div className="grid grid-cols-4 gap-2 text-xs text-slate-500">
            <span>🧘 平靜</span>
            <span>⚡ 緊張</span>
            <span>💔 感性</span>
            <span>🌙 神秘</span>
            <span>✨ 啟示</span>
            <span>🕳️ 虛空</span>
            <span>🚣 渡口</span>
            <span>🌌 宇宙</span>
          </div>
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

export default MusicGenerator;
