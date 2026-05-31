import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { usePerformanceStore } from '@/stores/performanceStore';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface ParticleBackgroundProps {
  arcValue?: number; // 0-180，影響粒子顏色和密度
}

const ParticleBackground = ({ arcValue = 180 }: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const lastFrameTimeRef = useRef(0);
  const arcValueRef = useRef(arcValue);
  const isLowPerf = usePerformanceStore((state) => state.shouldSimplifyAnimations());

  // arcValue 透過 ref 即時讀取，避免每次變動都重啟動畫迴圈
  useEffect(() => {
    arcValueRef.current = arcValue;
  }, [arcValue]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 低性能設備：降低 Canvas 解析度
    const pixelRatio = isLowPerf ? 1 : Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(pixelRatio, pixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 初始化粒子（以目前 arcValue 推算密度，後續不重建）
    const baseCount = isLowPerf ? 10 : 30;
    const particleCount = Math.floor(baseCount + (180 - arcValueRef.current) / (isLowPerf ? 10 : 3));
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3 - 0.1,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    // 低性能設備：降低幀率到 15fps，正常設備 30fps
    const targetFPS = isLowPerf ? 15 : 30;
    const frameInterval = 1000 / targetFPS;

    const animate = () => {
      const now = performance.now();
      if (now - lastFrameTimeRef.current < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTimeRef.current = now;

      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      // 即時讀取最新 arcValue 計算顏色
      const currentArc = arcValueRef.current;
      const progress = 1 - currentArc / 180;
      const hue = 220 - progress * 180;
      const saturation = 30 + progress * 50;
      const lightness = 40 + progress * 30;

      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${particle.opacity})`;
        ctx.fill();

        if (!isLowPerf) {
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 4
          );
          gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, ${particle.opacity * 0.3})`);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isLowPerf]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        contain: 'strict',
        willChange: 'auto', // 避免過度使用 GPU 層
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  );
};

export default ParticleBackground;
