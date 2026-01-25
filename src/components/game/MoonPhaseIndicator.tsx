import { motion } from 'framer-motion';
import { useGameStore } from '@/stores/gameStore';
import { Moon } from 'lucide-react';

interface MoonPhaseIndicatorProps {
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * 月明程度視覺化元件
 * 顯示玩家內心的明暗比例，使用月相圖示表示
 * clarity > 0: 明亮（滿月方向）
 * clarity < 0: 陰暗（新月方向）
 * clarity = 0: 半月
 */
const MoonPhaseIndicator = ({ 
  className = '', 
  showLabel = true,
  size = 'md' 
}: MoonPhaseIndicatorProps) => {
  const { getMoonClarity, getCurrentProgress } = useGameStore();
  const progress = getCurrentProgress();
  const clarity = getMoonClarity();
  
  const bright = progress.moonBrightValue || 0;
  const dark = progress.moonDarkValue || 0;
  const total = bright + dark;
  
  // 根據 size 決定尺寸
  const sizeConfig = {
    sm: { container: 'w-16 h-16', moon: 80 },
    md: { container: 'w-24 h-24', moon: 120 },
    lg: { container: 'w-32 h-32', moon: 160 },
  };
  
  const config = sizeConfig[size];
  const moonSize = config.moon;
  const cx = moonSize / 2;
  const cy = moonSize / 2;
  const r = moonSize / 2 - 4;
  
  // 計算月相：clarity 從 -100 到 100 映射到月亮亮面比例
  // clarity = 100: 滿月（全亮）
  // clarity = 0: 半月
  // clarity = -100: 新月（全暗）
  const illuminationRatio = (clarity + 100) / 200; // 0 到 1
  
  // 計算月相的陰影遮罩
  // 使用二次曲線模擬月相
  const getPhaseDescription = () => {
    if (clarity >= 80) return { name: '皓月當空', desc: '內心清澈通透' };
    if (clarity >= 50) return { name: '盈凸之月', desc: '正向選擇居多' };
    if (clarity >= 20) return { name: '上弦之月', desc: '傾向光明' };
    if (clarity >= -20) return { name: '半月朦朧', desc: '明暗交織' };
    if (clarity >= -50) return { name: '下弦之月', desc: '傾向晦澀' };
    if (clarity >= -80) return { name: '殘月如鉤', desc: '迴避型選擇居多' };
    return { name: '晦暗新月', desc: '內心深藏不露' };
  };
  
  const phase = getPhaseDescription();
  
  // 計算月相曲線路徑
  // 使用橢圓弧來模擬月相
  const generateMoonPath = () => {
    // illuminationRatio: 0 = 新月, 0.5 = 半月, 1 = 滿月
    const ratio = illuminationRatio;
    
    // 計算明暗分界線的曲率
    // ratio = 0: 完全遮擋（新月）
    // ratio = 0.5: 直線分割（半月）
    // ratio = 1: 無遮擋（滿月）
    
    if (ratio >= 0.99) {
      // 滿月：不需要遮擋
      return '';
    }
    
    if (ratio <= 0.01) {
      // 新月：完全遮擋
      return `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy + 0.01} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
    }
    
    // 計算分界線的控制點
    // 當 ratio < 0.5 時，曲線向右凸（遮擋更多）
    // 當 ratio > 0.5 時，曲線向左凸（遮擋更少）
    const curveOffset = (ratio - 0.5) * 2 * r; // -r 到 +r
    
    // 使用貝塞爾曲線繪製月相
    const topY = cy - r;
    const bottomY = cy + r;
    const leftX = cx - r;
    const midX = cx + curveOffset;
    
    // 繪製陰暗面
    return `
      M ${cx} ${topY}
      A ${r} ${r} 0 0 0 ${cx} ${bottomY}
      Q ${midX} ${cy} ${cx} ${topY}
      Z
    `;
  };
  
  const shadowPath = generateMoonPath();
  
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* 月相視覺化 */}
      <div className={`relative ${config.container} flex items-center justify-center`}>
        {/* 外圍光暈 */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: clarity >= 0 
              ? `radial-gradient(circle, hsla(45, 100%, 90%, ${0.2 + illuminationRatio * 0.3}) 0%, transparent 70%)`
              : `radial-gradient(circle, hsla(240, 30%, 30%, ${0.2 + (1 - illuminationRatio) * 0.2}) 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* 月亮主體 SVG */}
        <svg 
          width={moonSize} 
          height={moonSize} 
          viewBox={`0 0 ${moonSize} ${moonSize}`}
          className="relative z-10"
        >
          {/* 月亮底色（亮面） */}
          <defs>
            <radialGradient id="moonGlow" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="hsl(45, 100%, 95%)" />
              <stop offset="50%" stopColor="hsl(45, 80%, 85%)" />
              <stop offset="100%" stopColor="hsl(45, 60%, 70%)" />
            </radialGradient>
            <radialGradient id="moonShadow" cx="60%" cy="60%" r="50%">
              <stop offset="0%" stopColor="hsl(240, 20%, 25%)" />
              <stop offset="100%" stopColor="hsl(240, 30%, 15%)" />
            </radialGradient>
            {/* 月球表面紋理 */}
            <filter id="moonTexture">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
              <feDiffuseLighting in="noise" lightingColor="white" surfaceScale="1" result="light">
                <feDistantLight azimuth="45" elevation="60" />
              </feDiffuseLighting>
              <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />
            </filter>
          </defs>
          
          {/* 月亮亮面 */}
          <motion.circle
            cx={cx}
            cy={cy}
            r={r}
            fill="url(#moonGlow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* 月亮陰暗面遮罩 */}
          {shadowPath && (
            <motion.path
              d={shadowPath}
              fill="url(#moonShadow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              transition={{ duration: 0.8 }}
            />
          )}
          
          {/* 月球紋理點綴 */}
          <circle cx={cx - r * 0.3} cy={cy - r * 0.2} r={r * 0.08} fill="hsl(45, 40%, 75%)" opacity="0.4" />
          <circle cx={cx + r * 0.2} cy={cy + r * 0.3} r={r * 0.12} fill="hsl(45, 40%, 70%)" opacity="0.3" />
          <circle cx={cx - r * 0.1} cy={cy + r * 0.4} r={r * 0.06} fill="hsl(45, 40%, 72%)" opacity="0.35" />
        </svg>
        
        {/* 環繞星光（高 clarity 時顯示更多） */}
        {clarity > 30 && (
          <>
            {[...Array(Math.floor(clarity / 20))].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-amber-200 rounded-full"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </>
        )}
      </div>
      
      {/* 標籤與數值 */}
      {showLabel && (
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2 mb-1">
            <Moon className={`w-4 h-4 ${clarity >= 0 ? 'text-amber-400' : 'text-slate-400'}`} />
            <span className={`text-lg font-semibold ${
              clarity >= 50 ? 'text-amber-300' :
              clarity >= 0 ? 'text-amber-400/80' :
              clarity >= -50 ? 'text-slate-400' :
              'text-slate-500'
            }`}>
              {phase.name}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">{phase.desc}</p>
          
          {/* 明暗數值比例 */}
          {total > 0 && (
            <div className="mt-3 flex items-center justify-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-amber-400/80">明 {bright}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-slate-500" />
                <span className="text-slate-400">暗 {dark}</span>
              </div>
            </div>
          )}
          
          {/* 月明指數 */}
          <div className="mt-2">
            <span className={`text-sm font-medium ${
              clarity >= 0 ? 'text-amber-400' : 'text-slate-400'
            }`}>
              月明指數：{clarity > 0 ? '+' : ''}{clarity}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MoonPhaseIndicator;
