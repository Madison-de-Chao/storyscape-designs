import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles, Star, Trophy } from 'lucide-react';

interface ArcCompleteCelebrationProps {
  isVisible: boolean;
  onComplete?: () => void;
}

/**
 * 360° 弧度完成慶祝動畫
 * 當玩家完成所有課程達到 360° 時觸發
 */
const ArcCompleteCelebration = ({ isVisible, onComplete }: ArcCompleteCelebrationProps) => {
  const [phase, setPhase] = useState<'burst' | 'display' | 'fade'>('burst');
  
  useEffect(() => {
    if (!isVisible) {
      setPhase('burst');
      return;
    }
    
    // Phase 1: 爆發 (0-1s)
    setPhase('burst');
    
    // Phase 2: 展示 (1-4s)
    const displayTimer = setTimeout(() => setPhase('display'), 1000);
    
    // Phase 3: 淡出 (4s+)
    const fadeTimer = setTimeout(() => setPhase('fade'), 4000);
    
    // 完成回調 (5s)
    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 5000);
    
    return () => {
      clearTimeout(displayTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [isVisible, onComplete]);
  
  // 生成圓周上的粒子
  const generateCircleParticles = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * 360;
      const radians = (angle * Math.PI) / 180;
      const radius = 120;
      const x = Math.cos(radians) * radius;
      const y = Math.sin(radians) * radius;
      return { x, y, angle, delay: i * 0.02 };
    });
  };
  
  const circleParticles = generateCircleParticles(36);
  
  // 生成爆發光線
  const generateRays = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      angle: (i / count) * 360,
      delay: i * 0.03,
      length: 100 + Math.random() * 100,
    }));
  };
  
  const rays = generateRays(24);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 背景遮罩 */}
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'fade' ? 0 : 0.6 }}
            transition={{ duration: 0.8 }}
          />
          
          {/* 中心圓環光芒 */}
          <motion.div
            className="absolute"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: phase === 'burst' ? [0, 1.5, 1] : 1, 
              rotate: 0,
              opacity: phase === 'fade' ? 0 : 1,
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            {/* 完整圓環 */}
            <svg width="280" height="280" viewBox="0 0 280 280" className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <defs>
                <linearGradient id="arcGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(45, 100%, 70%)" />
                  <stop offset="50%" stopColor="hsl(38, 100%, 60%)" />
                  <stop offset="100%" stopColor="hsl(45, 100%, 70%)" />
                </linearGradient>
                <filter id="arcGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              
              {/* 圓環本體 */}
              <motion.circle
                cx="140"
                cy="140"
                r="100"
                fill="none"
                stroke="url(#arcGold)"
                strokeWidth="6"
                strokeLinecap="round"
                filter="url(#arcGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
              
              {/* 內圈裝飾 */}
              <motion.circle
                cx="140"
                cy="140"
                r="85"
                fill="none"
                stroke="hsl(45, 80%, 80%)"
                strokeWidth="1"
                strokeDasharray="4 8"
                opacity={0.5}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </svg>
            
            {/* 中心光點 */}
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-16 h-16 rounded-full"
              style={{
                background: 'radial-gradient(circle, hsl(45, 100%, 90%) 0%, hsl(45, 100%, 70%) 40%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
          
          {/* 圓周粒子 */}
          {phase !== 'fade' && circleParticles.map((particle, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full bg-amber-400"
              style={{
                boxShadow: '0 0 10px hsl(45, 100%, 70%), 0 0 20px hsl(45, 100%, 60%)',
              }}
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 0, 
                opacity: 0 
              }}
              animate={{ 
                x: particle.x, 
                y: particle.y, 
                scale: [0, 1.5, 1], 
                opacity: [0, 1, 0.8] 
              }}
              transition={{ 
                duration: 0.8, 
                delay: particle.delay,
                ease: 'easeOut',
              }}
            />
          ))}
          
          {/* 爆發光線 */}
          {phase === 'burst' && rays.map((ray, i) => (
            <motion.div
              key={`ray-${i}`}
              className="absolute w-1 origin-bottom"
              style={{
                height: ray.length,
                background: 'linear-gradient(to top, hsl(45, 100%, 70%), transparent)',
                rotate: `${ray.angle}deg`,
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: [0, 1, 0], opacity: [0, 0.8, 0] }}
              transition={{
                duration: 0.8,
                delay: ray.delay,
                ease: 'easeOut',
              }}
            />
          ))}
          
          {/* 文字區域 */}
          <motion.div
            className="absolute flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: phase === 'fade' ? 0 : phase === 'display' ? 1 : 0, 
              y: phase === 'display' ? 0 : 30 
            }}
            transition={{ duration: 0.6 }}
            style={{ top: '60%' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Trophy className="w-6 h-6 text-amber-400" />
              <span className="text-3xl font-serif-tc font-bold text-amber-300">
                360°
              </span>
              <Trophy className="w-6 h-6 text-amber-400" />
            </div>
            
            <motion.h2
              className="text-2xl font-serif-tc font-semibold text-foreground mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              弧度圓滿
            </motion.h2>
            
            <motion.p
              className="text-muted-foreground text-center max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              你已完成了從破碎到完整的旅程
            </motion.p>
          </motion.div>
          
          {/* 飄散星星 */}
          {phase !== 'fade' && [...Array(20)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute"
              initial={{ 
                x: (Math.random() - 0.5) * 100, 
                y: (Math.random() - 0.5) * 100,
                opacity: 0,
                scale: 0,
              }}
              animate={{ 
                x: (Math.random() - 0.5) * 400, 
                y: -200 - Math.random() * 200,
                opacity: [0, 1, 0],
                scale: [0, 1, 0.5],
              }}
              transition={{ 
                duration: 2 + Math.random() * 2, 
                delay: 0.5 + i * 0.1,
                ease: 'easeOut',
              }}
            >
              {i % 3 === 0 ? (
                <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
              ) : i % 3 === 1 ? (
                <Sparkles className="w-3 h-3 text-amber-400" />
              ) : (
                <div className="w-2 h-2 rounded-full bg-amber-300" />
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArcCompleteCelebration;
