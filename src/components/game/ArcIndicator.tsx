import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore, ArcHistoryEntry } from '@/stores/gameStore';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const ArcIndicator = () => {
  const { getCurrentProgress, currentPart } = useGameStore();
  const progress = getCurrentProgress();
  const arcValue = progress.arcValue;
  const arcHistory = progress.arcHistory || [];
  
  // 計算弧度的角度（從0度開始，360度時完成圓）
  const arcAngle = (arcValue / 360) * 360;
  const arcRadius = 40;
  const strokeWidth = 3;
  const center = 50;

  // 計算弧的路徑（從頂部開始順時針繪製）
  const startAngle = -90; // 從12點鐘方向開始
  const endAngle = -90 + arcAngle;
  
  const startX = center + arcRadius * Math.cos((startAngle * Math.PI) / 180);
  const startY = center + arcRadius * Math.sin((startAngle * Math.PI) / 180);
  const endX = center + arcRadius * Math.cos((endAngle * Math.PI) / 180);
  const endY = center + arcRadius * Math.sin((endAngle * Math.PI) / 180);
  
  const largeArcFlag = arcAngle > 180 ? 1 : 0;
  
  // 處理完整圓的特殊情況
  const arcPath = arcAngle >= 360 
    ? `M ${center} ${center - arcRadius} A ${arcRadius} ${arcRadius} 0 1 1 ${center - 0.001} ${center - arcRadius} A ${arcRadius} ${arcRadius} 0 1 1 ${center} ${center - arcRadius}`
    : arcAngle > 0 
      ? `M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`
      : '';

  // 顏色根據弧度和當前部分變化
  const baseHue = currentPart === 'yi' ? 38 : 350; // 金色 or 紅色
  const hue = baseHue;

  // 計算趨勢
  const getTrend = () => {
    if (arcHistory.length < 2) return 'stable';
    const recentChanges = arcHistory.slice(-5);
    const totalChange = recentChanges.reduce((sum, entry) => sum + entry.change, 0);
    if (totalChange > 5) return 'up';
    if (totalChange < -5) return 'down';
    return 'stable';
  };

  const trend = getTrend();

  // 生成迷你趨勢圖的路徑
  const generateTrendPath = () => {
    if (arcHistory.length < 2) return '';
    
    const displayHistory = arcHistory.slice(-10);
    const width = 60;
    const height = 20;
    const padding = 2;
    
    const minValue = Math.min(...displayHistory.map(h => h.value));
    const maxValue = Math.max(...displayHistory.map(h => h.value));
    const valueRange = maxValue - minValue || 1;
    
    const points = displayHistory.map((entry, index) => {
      const x = padding + (index / (displayHistory.length - 1)) * (width - padding * 2);
      const y = height - padding - ((entry.value - minValue) / valueRange) * (height - padding * 2);
      return `${x},${y}`;
    });
    
    return `M ${points.join(' L ')}`;
  };

  const trendPath = generateTrendPath();

  return (
    <motion.div
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="relative">
        {/* 主要弧度指示器 - 手機上較小 */}
        <div className="relative w-16 h-16 sm:w-24 sm:h-24">
          {/* 背景圓 */}
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full"
          >
            {/* 底層虛線圓 */}
            <circle
              cx={center}
              cy={center}
              r={arcRadius}
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              strokeDasharray="2 4"
              className="text-muted-foreground/20"
            />
            
            {/* 弧度指示 */}
            {arcAngle > 0 && (
              <motion.path
                d={arcPath}
                fill="none"
                stroke={`hsl(${hue}, 70%, 55%)`}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                className="arc-glow"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            )}
            
            {/* 中心點 */}
            <circle
              cx={center}
              cy={center}
              r={4}
              fill={`hsl(${hue}, 70%, 55%)`}
              className="arc-glow"
            />
          </svg>
          
          {/* 弧度數值 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-xs sm:text-sm font-serif-tc font-semibold"
              style={{ color: `hsl(${hue}, 70%, 55%)` }}
              key={arcValue}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {arcValue}°
            </motion.span>
          </div>
          
          {/* 標籤 - 手機上較小 */}
          <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-[10px] sm:text-xs text-muted-foreground">弧度</span>
          </div>
        </div>

        {/* 趨勢指示器 */}
        <AnimatePresence>
          {arcHistory.length >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -right-2 top-0"
            >
              <div className={`p-1 rounded-full ${
                trend === 'up' ? 'bg-emerald-500/20 text-emerald-400' :
                trend === 'down' ? 'bg-rose-500/20 text-rose-400' :
                'bg-muted/20 text-muted-foreground'
              }`}>
                {trend === 'up' && <TrendingUp className="w-3 h-3" />}
                {trend === 'down' && <TrendingDown className="w-3 h-3" />}
                {trend === 'stable' && <Minus className="w-3 h-3" />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 迷你趨勢圖 - 手機上隱藏 */}
        {arcHistory.length >= 2 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="hidden sm:block mt-8 bg-surface/50 rounded-lg p-2 border border-border/30 backdrop-blur-sm"
          >
            <div className="text-[10px] text-muted-foreground mb-1 text-center">歷史趨勢</div>
            <svg 
              viewBox="0 0 60 20" 
              className="w-full h-5"
              style={{ overflow: 'visible' }}
            >
              {/* 背景網格 */}
              <line x1="0" y1="10" x2="60" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground/20" />
              
              {/* 趨勢線 */}
              <motion.path
                d={trendPath}
                fill="none"
                stroke={`hsl(${hue}, 70%, 55%)`}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              
              {/* 最新點 */}
              {arcHistory.length > 0 && (
                <motion.circle
                  cx={58}
                  cy={10}
                  r={2}
                  fill={`hsl(${hue}, 70%, 55%)`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                />
              )}
            </svg>
            
            {/* 最近變化摘要 */}
            {arcHistory.length > 1 && (
              <div className="flex justify-between text-[9px] mt-1">
                <span className="text-muted-foreground">
                  {arcHistory.length > 1 ? arcHistory[Math.max(0, arcHistory.length - 10)]?.value : 0}°
                </span>
                <span className={
                  arcHistory[arcHistory.length - 1]?.change > 0 ? 'text-emerald-400' :
                  arcHistory[arcHistory.length - 1]?.change < 0 ? 'text-rose-400' :
                  'text-muted-foreground'
                }>
                  {arcHistory[arcHistory.length - 1]?.change > 0 ? '+' : ''}
                  {arcHistory[arcHistory.length - 1]?.change || 0}
                </span>
                <span style={{ color: `hsl(${hue}, 70%, 55%)` }}>
                  {arcValue}°
                </span>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ArcIndicator;
