// 節點完整性警告組件
import { useState, useEffect } from 'react';
import { AlertTriangle, X, ChevronDown, ChevronUp } from 'lucide-react';
import { yi1AllNodes } from '@/data/yi1/index';
import { checkNodeIntegrity, type IntegrityReport } from '@/utils/nodeIntegrityCheck';

export default function NodeIntegrityAlert() {
  const [report, setReport] = useState<IntegrityReport | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // 只在開發環境執行檢查
    if (import.meta.env.DEV) {
      const result = checkNodeIntegrity(yi1AllNodes);
      if (!result.isValid) {
        setReport(result);
        console.warn('🔴 節點完整性檢查失敗:', result);
      } else {
        console.log('✅ 節點完整性檢查通過，共', result.totalNodes, '個節點');
      }
    }
  }, []);

  if (!report || report.isValid || isDismissed) {
    return null;
  }

  const totalErrors = report.brokenLinks.length + report.brokenChoiceLinks.length;

  return (
    <div className="fixed top-4 left-4 right-4 z-[9999] max-w-2xl mx-auto">
      <div className="bg-red-950/95 border-2 border-red-500/50 rounded-lg shadow-2xl backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-red-500/30">
          <div className="flex items-center gap-2 text-red-300">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="font-bold">節點斷裂警告</span>
            <span className="px-2 py-0.5 bg-red-500/30 rounded text-sm">
              {totalErrors} 個錯誤
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-red-500/20 rounded transition-colors"
            >
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-red-300" />
              ) : (
                <ChevronDown className="w-4 h-4 text-red-300" />
              )}
            </button>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 hover:bg-red-500/20 rounded transition-colors"
            >
              <X className="w-4 h-4 text-red-300" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-4 overflow-y-auto max-h-80 text-sm font-mono">
            {/* 主線斷裂 */}
            {report.brokenLinks.length > 0 && (
              <div className="mb-4">
                <div className="text-red-400 font-bold mb-2">【主線斷裂】</div>
                {report.brokenLinks.map((link, i) => (
                  <div key={i} className="mb-3 p-2 bg-red-900/30 rounded border border-red-500/20">
                    <div className="text-red-200">
                      <span className="text-yellow-400">{link.nodeId}</span>
                      <span className="text-red-400"> → </span>
                      <span className="text-red-300 line-through">"{link.brokenNextNodeId}"</span>
                      <span className="text-red-500 ml-2">(不存在)</span>
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      說話者: {link.speaker} | {link.textPreview}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 選項斷裂 */}
            {report.brokenChoiceLinks.length > 0 && (
              <div>
                <div className="text-orange-400 font-bold mb-2">【選項斷裂】</div>
                {report.brokenChoiceLinks.map((link, i) => (
                  <div key={i} className="mb-2 p-2 bg-orange-900/30 rounded border border-orange-500/20">
                    <div className="text-orange-200">
                      <span className="text-yellow-400">{link.nodeId}</span>
                      <span className="text-gray-400"> 選項 </span>
                      <span className="text-white">"{link.choiceText}"</span>
                    </div>
                    <div className="text-orange-300">
                      → <span className="line-through">"{link.brokenNextNodeId}"</span>
                      <span className="text-red-500 ml-2">(不存在)</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer hint */}
        {!isExpanded && (
          <div className="px-3 py-2 text-xs text-red-400/70 border-t border-red-500/20">
            點擊展開查看詳細錯誤列表
          </div>
        )}
      </div>
    </div>
  );
}
