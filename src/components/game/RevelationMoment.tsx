import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface RevelationMomentProps {
  text: string;
  subtitle?: string;
  onComplete: () => void;
  duration?: number;
  theme?: 'golden' | 'silver' | 'aurora' | 'celestial';
}

const themeStyles = {
  golden: {
    primary: 'hsl(45, 90%, 55%)',
    secondary: 'hsl(38, 85%, 45%)',
    glow: 'rgba(255, 215, 100, 0.6)',
    text: 'text-amber-100',
    rays: 'hsl(45, 100%, 70%)',
  },
  silver: {
    primary: 'hsl(220, 20%, 85%)',
    secondary: 'hsl(220, 30%, 70%)',
    glow: 'rgba(200, 210, 230, 0.5)',
    text: 'text-slate-100',
    rays: 'hsl(220, 40%, 90%)',
  },
  aurora: {
    primary: 'hsl(160, 80%, 55%)',
    secondary: 'hsl(280, 70%, 60%)',
    glow: 'rgba(100, 255, 200, 0.5)',
    text: 'text-emerald-100',
    rays: 'hsl(180, 80%, 70%)',
  },
  celestial: {
    primary: 'hsl(260, 80%, 70%)',
    secondary: 'hsl(200, 90%, 60%)',
    glow: 'rgba(180, 150, 255, 0.5)',
    text: 'text-purple-100',
    rays: 'hsl(240, 90%, 80%)',
  },
};

export const RevelationMoment = ({ 
  text, 
  subtitle,
  onComplete, 
  duration = 5000,
  theme = 'golden'
}: RevelationMomentProps) => {
  const [phase, setPhase] = useState<'burst' | 'display' | 'fade'>('burst');
  const style = themeStyles[theme];

  useEffect(() => {
    // 爆發階段完成後進入展示階段
    const burstTimer = setTimeout(() => setPhase('display'), 1200);
    
    // 展示後進入淡出階段
    const displayTimer = setTimeout(() => setPhase('fade'), duration - 1000);
    
    // 完全結束
    const exitTimer = setTimeout(onComplete, duration);

    return () => {
      clearTimeout(burstTimer);
      clearTimeout(displayTimer);
      clearTimeout(exitTimer);
    };
  }, [duration, onComplete]);

  // 產生光芒射線
  const rays = Array.from({ length: 24 }, (_, i) => ({
    angle: (i * 360) / 24,
    delay: i * 0.03,
    length: 100 + Math.random() * 50,
  }));

  // 產生擴散粒子
  const particles = Array.from({ length: 40 }, (_, i) => ({
    angle: (i * 360) / 40 + Math.random() * 20,
    distance: 150 + Math.random() * 200,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 0.5,
  }));

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
        onClick={onComplete}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'radial-gradient(ellipse at center, hsl(222 50% 8%) 0%, hsl(222 50% 3%) 100%)'
        }}
      >
        {/* 中央光源核心 */}
        <motion.div
          className="absolute w-[600px] h-[600px]"
          style={{
            background: `radial-gradient(circle, ${style.glow} 0%, transparent 60%)`,
            filter: 'blur(30px)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: phase === 'burst' ? [0, 2, 1.5] : phase === 'fade' ? 2.5 : 1.5, 
            opacity: phase === 'fade' ? 0 : [0, 1, 0.8]
          }}
          transition={{ 
            duration: phase === 'burst' ? 1.2 : 1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        />

        {/* 內部強光核心 */}
        <motion.div
          className="absolute w-20 h-20 rounded-full"
          style={{
            background: `radial-gradient(circle, white 0%, ${style.primary} 50%, transparent 100%)`,
            boxShadow: `0 0 60px 30px ${style.glow}, 0 0 120px 60px ${style.glow}`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: phase === 'burst' ? [0, 3, 1] : phase === 'fade' ? 0 : 1,
            opacity: phase === 'fade' ? 0 : [0, 1, 0.9],
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        />

        {/* 光芒射線 */}
        {rays.map((ray, i) => (
          <motion.div
            key={i}
            className="absolute origin-bottom"
            style={{
              width: '2px',
              height: `${ray.length}%`,
              background: `linear-gradient(to top, ${style.rays}, transparent)`,
              transform: `rotate(${ray.angle}deg)`,
              transformOrigin: 'bottom center',
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{
              scaleY: phase === 'burst' ? [0, 1.5, 0.8] : phase === 'fade' ? 0 : 0.8,
              opacity: phase === 'fade' ? 0 : [0, 0.8, 0.4],
            }}
            transition={{
              duration: 1,
              delay: ray.delay,
              ease: "easeOut",
            }}
          />
        ))}

        {/* 擴散粒子 */}
        {particles.map((particle, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              background: style.primary,
              boxShadow: `0 0 ${particle.size * 2}px ${style.glow}`,
            }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: Math.cos(particle.angle * Math.PI / 180) * particle.distance,
              y: Math.sin(particle.angle * Math.PI / 180) * particle.distance,
              opacity: phase === 'fade' ? 0 : [0, 1, 0],
              scale: phase === 'fade' ? 0 : [0, 1.5, 0],
            }}
            transition={{
              duration: 2,
              delay: particle.delay,
              ease: "easeOut",
            }}
          />
        ))}

        {/* 脈衝波紋 */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={`ring-${ring}`}
            className="absolute rounded-full border"
            style={{
              borderColor: style.primary,
              borderWidth: '1px',
            }}
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: phase !== 'burst' ? ['0%', '150%'] : '0%',
              height: phase !== 'burst' ? ['0%', '150%'] : '0%',
              opacity: phase === 'fade' ? 0 : [0.8, 0],
            }}
            transition={{
              duration: 2,
              delay: ring * 0.4,
              repeat: phase === 'display' ? Infinity : 0,
              repeatDelay: 1,
              ease: "easeOut",
            }}
          />
        ))}

        {/* 主文字 */}
        <motion.div
          className="relative z-10 text-center px-8"
          initial={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
          animate={{ 
            opacity: phase === 'fade' ? 0 : phase === 'display' ? 1 : 0,
            scale: phase === 'fade' ? 1.2 : phase === 'display' ? 1 : 0.5,
            filter: phase === 'display' ? 'blur(0px)' : 'blur(10px)',
          }}
          transition={{ 
            duration: 0.8,
            delay: phase === 'burst' ? 0.8 : 0,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <h2 
            className={`text-4xl md:text-6xl lg:text-7xl font-serif-tc ${style.text} tracking-[0.2em] leading-relaxed`}
            style={{
              textShadow: `
                0 0 20px ${style.glow},
                0 0 40px ${style.glow},
                0 0 80px ${style.glow},
                0 2px 4px rgba(0,0,0,0.5)
              `
            }}
          >
            {text}
          </h2>
          
          {subtitle && (
            <motion.p
              className="mt-6 text-lg md:text-xl text-muted-foreground/80 font-sans-tc tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: phase === 'display' ? 1 : 0,
                y: phase === 'display' ? 0 : 20,
              }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* 四角光芒裝飾 */}
        {['top-8 left-8', 'top-8 right-8', 'bottom-8 left-8', 'bottom-8 right-8'].map((position, i) => (
          <motion.div
            key={`corner-${i}`}
            className={`absolute ${position} w-24 h-24`}
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'display' ? 0.6 : 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
          >
            <motion.div
              className="w-full h-full"
              style={{
                background: `radial-gradient(circle at ${i % 2 === 0 ? '0% 0%' : '100% 0%'}, ${style.glow} 0%, transparent 70%)`,
              }}
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          </motion.div>
        ))}

        {/* 點擊繼續提示 */}
        <motion.div
          className="absolute bottom-6 text-sm text-muted-foreground/50 font-sans-tc"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'display' ? 1 : 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          點擊任意處繼續
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RevelationMoment;
