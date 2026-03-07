import { motion } from 'framer-motion';
import { forwardRef, useEffect, useState } from 'react';

/** 數位噪訊醒來（第零章） */
export const DigitalWakeEffect = ({ color }: { color: string }) => (
  <>
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${color} 2px, ${color} 3px)`,
      }}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.05, 0.2, 0] }}
      transition={{ duration: 2, times: [0, 0.3, 0.6, 1] }}
    />
    <motion.div
      className="absolute top-[15%] left-1/2 -translate-x-1/2 font-mono text-4xl sm:text-6xl"
      style={{ color, textShadow: `0 0 20px ${color}` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0, 1, 0.8, 0] }}
      transition={{ duration: 2.5, times: [0, 0.1, 0.15, 0.2, 0.6, 1] }}
    >
      06:30
    </motion.div>
  </>
);

/** 檔案刪除動畫（第一章） */
export const FileDeleteEffect = ({ color }: { color: string }) => (
  <>
    {['夢想.docx', '自信.txt', '快樂.jpg', '未來.psd'].map((name, i) => (
      <motion.div
        key={name}
        className="absolute left-1/2 -translate-x-1/2 px-4 py-2 rounded font-mono text-sm sm:text-base"
        style={{
          top: `${25 + i * 10}%`,
          color,
          border: `1px solid ${color}`,
          backgroundColor: 'hsl(0 0% 5% / 0.8)',
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: [0, 1, 1, 0],
          x: [-20, 0, 0, 60],
          scale: [1, 1, 1, 0.5],
        }}
        transition={{
          duration: 2,
          delay: 0.3 + i * 0.25,
          times: [0, 0.2, 0.6, 1],
        }}
      >
        📄 {name}
      </motion.div>
    ))}
    <motion.div
      className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-48 h-1 rounded-full overflow-hidden"
      style={{ backgroundColor: 'hsl(0 0% 20%)' }}
    >
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
      />
    </motion.div>
  </>
);

/** 記憶斷片（第二章） */
export const MemoryGapEffect = ({ color }: { color: string }) => (
  <>
    <motion.div
      className="absolute inset-0"
      style={{ backgroundColor: 'white' }}
      animate={{ opacity: [0, 0.8, 0, 0, 0.5, 0, 0] }}
      transition={{ duration: 3, times: [0, 0.05, 0.1, 0.4, 0.42, 0.47, 1] }}
    />
    {['⋯⋯', '我說了什麼？', '⋯⋯', '想不起來'].map((t, i) => (
      <motion.span
        key={i}
        className="absolute font-serif-tc text-lg sm:text-xl"
        style={{
          color,
          left: `${20 + Math.random() * 60}%`,
          top: `${20 + i * 18}%`,
        }}
        initial={{ opacity: 0, rotate: -5 + Math.random() * 10 }}
        animate={{ opacity: [0, 0.8, 0], y: [10, 0, -10] }}
        transition={{ duration: 1.5, delay: 0.8 + i * 0.4 }}
      >
        {t}
      </motion.span>
    ))}
  </>
);

/** 鏡子碎裂（第三章） */
export const MirrorCrackEffect = forwardRef<HTMLDivElement, { color: string }>(({ color }, _ref) => (
  <>
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
      {[
        'M 50 50 L 20 10', 'M 50 50 L 80 15', 'M 50 50 L 10 60',
        'M 50 50 L 90 70', 'M 50 50 L 50 5', 'M 50 50 L 35 90',
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth="0.3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.8, 0.4] }}
          transition={{ duration: 0.8, delay: 1 + i * 0.1 }}
        />
      ))}
    </svg>
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
      style={{ backgroundColor: color }}
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: [0, 30], opacity: [1, 0] }}
      transition={{ duration: 1.2, delay: 0.8 }}
    />
  </>
));
MirrorCrackEffect.displayName = 'MirrorCrackEffect';

/** 火鍋蒸氣（第四章） */
export const HotpotSteamEffect = ({ color }: { color: string }) => (
  <>
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          left: `${15 + i * 10}%`,
          bottom: '10%',
          width: 40 + Math.random() * 30,
          height: 40 + Math.random() * 30,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: 'blur(15px)',
        }}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 0.4, 0], y: [0, -200, -400] }}
        transition={{
          duration: 3 + Math.random(),
          delay: i * 0.3,
          ease: 'easeOut',
        }}
      />
    ))}
  </>
);

/** 好萊塢金幕（第五章） */
export const HollywoodCurtainEffect = ({ color }: { color: string }) => (
  <>
    <motion.div
      className="absolute top-0 left-0 bottom-0 w-1/2 z-10"
      style={{
        background: `linear-gradient(90deg, hsl(45 80% 15%) 0%, ${color} 100%)`,
      }}
      initial={{ x: 0 }}
      animate={{ x: '-100%' }}
      transition={{ duration: 1.5, delay: 1, ease: [0.33, 0, 0.2, 1] }}
    />
    <motion.div
      className="absolute top-0 right-0 bottom-0 w-1/2 z-10"
      style={{
        background: `linear-gradient(-90deg, hsl(45 80% 15%) 0%, ${color} 100%)`,
      }}
      initial={{ x: 0 }}
      animate={{ x: '100%' }}
      transition={{ duration: 1.5, delay: 1, ease: [0.33, 0, 0.2, 1] }}
    />
    <motion.div
      className="absolute inset-0 z-[9]"
      style={{
        background: `radial-gradient(ellipse at 50% 40%, ${color} 0%, transparent 50%)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.6, 0.3] }}
      transition={{ duration: 2, delay: 0.5 }}
    />
  </>
);

/** 懸崖夢境（第六章） */
export const CliffDreamEffect = ({ color }: { color: string }) => (
  <>
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 60}%`,
          backgroundColor: 'hsl(0 0% 90%)',
        }}
        animate={{ opacity: [0, 0.8, 0] }}
        transition={{
          duration: 2 + Math.random() * 2,
          delay: Math.random() * 2,
          repeat: 1,
        }}
      />
    ))}
    <motion.div
      className="absolute bottom-[30%] left-0 right-0 h-[2px]"
      style={{
        background: `linear-gradient(90deg, transparent 10%, ${color} 50%, transparent 90%)`,
      }}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 0.6, scaleX: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
    {['梵谷', '屈原', '項羽', '夢露'].map((name, i) => (
      <motion.div
        key={name}
        className="absolute font-serif-tc text-xs sm:text-sm"
        style={{
          bottom: '32%',
          left: `${25 + i * 15}%`,
          color,
          opacity: 0.7,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 0.7, 0.5], y: [20, 0, 0] }}
        transition={{ duration: 1, delay: 1.5 + i * 0.2 }}
      >
        {name}
      </motion.div>
    ))}
  </>
);

/** 螢幕搜尋（第七章） */
export const SearchScreenEffect = ({ color }: { color: string }) => (
  <>
    <motion.div
      className="absolute top-[20%] left-1/2 -translate-x-1/2 w-64 sm:w-80 h-10 rounded-full border px-4 flex items-center gap-2 font-mono text-sm"
      style={{ borderColor: color, color }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <span>🔍</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        被打了，然後呢？
      </motion.span>
    </motion.div>
    {['金卡戴珊', '安海瑟薇', '芭黎絲希爾頓'].map((name, i) => (
      <motion.div
        key={name}
        className="absolute left-1/2 -translate-x-1/2 w-60 sm:w-72 px-3 py-2 rounded text-sm font-serif-tc"
        style={{
          top: `${38 + i * 12}%`,
          color,
          border: `1px solid ${color}`,
          backgroundColor: 'hsl(0 0% 5% / 0.6)',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: [0, 1, 0.8], y: [30, 0, 0] }}
        transition={{ duration: 0.8, delay: 1.2 + i * 0.3 }}
      >
        {name}
      </motion.div>
    ))}
  </>
);

/** 鏡中對話（第八章） */
export const MirrorDialogueEffect = ({ color }: { color: string }) => (
  <>
    <motion.div
      className="absolute top-0 bottom-0 left-1/2 w-[1px]"
      style={{ backgroundColor: color }}
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 0.5 }}
      transition={{ duration: 1 }}
    />
    <motion.div
      className="absolute left-[20%] top-1/2 -translate-y-1/2 font-serif-tc text-base sm:text-lg"
      style={{ color: 'hsl(0 0% 70%)' }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 0.8, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      林壹
    </motion.div>
    <motion.div
      className="absolute right-[20%] top-1/2 -translate-y-1/2 font-serif-tc text-base sm:text-lg"
      style={{ color, transform: 'scaleX(-1)' }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 0.8, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      伊
    </motion.div>
  </>
);

/** 櫻花篩選（第九章） */
export const CherryFilterEffect = ({ color }: { color: string }) => (
  <>
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        }}
        initial={{ y: '-10%', opacity: 0, rotate: 0 }}
        animate={{
          y: '110%',
          opacity: [0, 0.7, 0.7, 0],
          rotate: 360,
          x: [0, 20 * (Math.random() > 0.5 ? 1 : -1), 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          delay: Math.random() * 2,
          ease: 'easeIn',
        }}
      />
    ))}
  </>
);

/** 舞台聚光燈（第十章） */
export const SpotlightStageEffect = ({ color }: { color: string }) => (
  <>
    <motion.div
      className="absolute inset-0"
      style={{ backgroundColor: 'black' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 1.5 }}
    />
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      initial={{ width: 0, height: 0, opacity: 0 }}
      animate={{ width: 300, height: 400, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
    >
      <div
        className="w-full h-full rounded-[50%]"
        style={{
          background: `radial-gradient(ellipse at center, ${color} 0%, transparent 70%)`,
          filter: 'blur(30px)',
        }}
      />
    </motion.div>
    <motion.div
      className="absolute left-1/2 top-[55%] -translate-x-1/2 font-serif-tc text-sm"
      style={{ color: 'hsl(0 0% 80%)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.8, 0.6] }}
      transition={{ duration: 1, delay: 2 }}
    >
      一個小女孩在聚光燈下跳舞
    </motion.div>
  </>
);

/** 回聲波紋（第十一章） */
export const EchoRippleEffect = ({ color }: { color: string }) => (
  <>
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ borderColor: color }}
        initial={{ width: 20, height: 20, opacity: 0.8 }}
        animate={{
          width: [20, 400 + i * 100],
          height: [20, 400 + i * 100],
          opacity: [0.8, 0],
        }}
        transition={{
          duration: 2.5,
          delay: 0.5 + i * 0.4,
          ease: 'easeOut',
        }}
      />
    ))}
  </>
);

/** 歸零倒數（第十二章） */
export const ZeroCountdownEffect = ({ color }: { color: string }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        if (c <= 0) {
          clearInterval(interval);
          return 0;
        }
        return c - 1;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-7xl sm:text-9xl font-bold"
        style={{ color, textShadow: `0 0 40px ${color}` }}
        key={count}
        initial={{ scale: 2, opacity: 0 }}
        animate={{ scale: 1, opacity: count === 0 ? [1, 0] : 1 }}
        transition={{ duration: 0.5 }}
      >
        {count === 0 ? '零' : count}
      </motion.div>
      {count === 0 && (
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: [1, 50], opacity: [1, 0] }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      )}
    </>
  );
};
