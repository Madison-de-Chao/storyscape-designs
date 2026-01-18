import { motion } from 'framer-motion';
import { useGameStore } from '@/stores/gameStore';

const ArcIndicator = () => {
  const arcValue = useGameStore((state) => state.arcValue);
  
  // 計算弧度的角度（從180度開始，歸零時完成圓）
  const arcAngle = (arcValue / 180) * 180; // 轉換為度數
  const arcRadius = 40;
  const strokeWidth = 3;
  const center = 50;

  // 計算弧的路徑
  const startAngle = 180; // 從左側開始
  const endAngle = 180 + arcAngle;
  
  const startX = center + arcRadius * Math.cos((startAngle * Math.PI) / 180);
  const startY = center + arcRadius * Math.sin((startAngle * Math.PI) / 180);
  const endX = center + arcRadius * Math.cos((endAngle * Math.PI) / 180);
  const endY = center + arcRadius * Math.sin((endAngle * Math.PI) / 180);
  
  const largeArcFlag = arcAngle > 180 ? 1 : 0;
  
  const arcPath = arcAngle > 0 
    ? `M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`
    : '';

  // 顏色根據弧度變化
  const progress = 1 - arcValue / 180;
  const hue = 220 - progress * 180; // 藍色到金色

  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="relative w-24 h-24">
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
            className="text-sm font-serif-tc font-semibold"
            style={{ color: `hsl(${hue}, 70%, 55%)` }}
            key={arcValue}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {arcValue}°
          </motion.span>
        </div>
        
        {/* 標籤 */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-xs text-muted-foreground">弧度</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ArcIndicator;
