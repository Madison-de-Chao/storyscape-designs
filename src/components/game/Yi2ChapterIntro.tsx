import { motion, AnimatePresence } from 'framer-motion';
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { getChapterTheme, themeToHSL, themeToGlow } from '@/utils/chapterThemes';
import { usePerformanceStore } from '@/stores/performanceStore';

/**
 * 第二部各章獨特的開場動畫效果
 * 每章根據敘事主題使用不同的視覺風格
 */

type IntroStyle =
  | 'digital-wake'      // 第零章：鬧鐘 + 數位噪訊醒來
  | 'file-delete'       // 第一章：檔案刪除動畫
  | 'memory-gap'        // 第二章：記憶斷片（閃白 + 碎片）
  | 'mirror-crack'      // 第三章：鏡子碎裂
  | 'hotpot-steam'      // 第四章：火鍋蒸氣模糊
  | 'hollywood-curtain' // 第五章：好萊塢金幕拉開
  | 'cliff-dream'       // 第六章：懸崖夢境
  | 'search-screen'     // 第七章：螢幕搜尋滾動
  | 'mirror-dialogue'   // 第八章：鏡中對話
  | 'cherry-filter'     // 第九章：櫻花篩選
  | 'spotlight-stage'   // 第十章：舞台聚光燈
  | 'echo-ripple'       // 第十一章：回聲波紋
  | 'zero-countdown'    // 第十二章：歸零倒數
  | 'default';          // 預設淡入

interface Yi2ChapterIntroProps {
  chapterKey: string;
  title: string;
  subtitle: string;
  quote?: string;
  style: IntroStyle;
  onComplete: () => void;
}

// 章節 key → 動畫風格映射
export const yi2IntroStyles: Record<string, IntroStyle> = {
  'yi2-preface': 'default',
  'yi2-ch0': 'digital-wake',
  'yi2-ch1': 'file-delete',
  'yi2-ch2': 'memory-gap',
  'yi2-ch3': 'mirror-crack',
  'yi2-ch4': 'hotpot-steam',
  'yi2-ch5': 'hollywood-curtain',
  'yi2-ch6': 'cliff-dream',
  'yi2-ch7': 'search-screen',
  'yi2-ch8': 'mirror-dialogue',
  'yi2-ch9': 'cherry-filter',
  'yi2-ch10': 'spotlight-stage',
  'yi2-ch11': 'echo-ripple',
  'yi2-ch12': 'zero-countdown',
};

// ── 專屬動畫子組件 ──

/** 數位噪訊醒來（第零章） */
const DigitalWakeEffect = ({ color }: { color: string }) => (
  <>
    {/* 掃描線 */}
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${color} 2px, ${color} 3px)`,
      }}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.05, 0.2, 0] }}
      transition={{ duration: 2, times: [0, 0.3, 0.6, 1] }}
    />
    {/* 鬧鐘數字閃爍 */}
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
const FileDeleteEffect = ({ color }: { color: string }) => (
  <>
    {/* 假檔案列表 */}
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
    {/* 刪除進度條 */}
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
const MemoryGapEffect = ({ color }: { color: string }) => (
  <>
    {/* 隨機閃白 */}
    <motion.div
      className="absolute inset-0"
      style={{ backgroundColor: 'white' }}
      animate={{ opacity: [0, 0.8, 0, 0, 0.5, 0, 0] }}
      transition={{ duration: 3, times: [0, 0.05, 0.1, 0.4, 0.42, 0.47, 1] }}
    />
    {/* 碎片文字 */}
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
const MirrorCrackEffect = forwardRef<HTMLDivElement, { color: string }>(({ color }, _ref) => (
  <>
    {/* 裂痕線條 */}
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
    {/* 碎裂衝擊波 */}
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
const HotpotSteamEffect = ({ color }: { color: string }) => (
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
const HollywoodCurtainEffect = ({ color }: { color: string }) => (
  <>
    {/* 左幕 */}
    <motion.div
      className="absolute top-0 left-0 bottom-0 w-1/2 z-10"
      style={{
        background: `linear-gradient(90deg, hsl(45 80% 15%) 0%, ${color} 100%)`,
      }}
      initial={{ x: 0 }}
      animate={{ x: '-100%' }}
      transition={{ duration: 1.5, delay: 1, ease: [0.33, 0, 0.2, 1] }}
    />
    {/* 右幕 */}
    <motion.div
      className="absolute top-0 right-0 bottom-0 w-1/2 z-10"
      style={{
        background: `linear-gradient(-90deg, hsl(45 80% 15%) 0%, ${color} 100%)`,
      }}
      initial={{ x: 0 }}
      animate={{ x: '100%' }}
      transition={{ duration: 1.5, delay: 1, ease: [0.33, 0, 0.2, 1] }}
    />
    {/* 聚光燈 */}
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
const CliffDreamEffect = ({ color }: { color: string }) => (
  <>
    {/* 星空 */}
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
    {/* 懸崖邊緣線 */}
    <motion.div
      className="absolute bottom-[30%] left-0 right-0 h-[2px]"
      style={{
        background: `linear-gradient(90deg, transparent 10%, ${color} 50%, transparent 90%)`,
      }}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 0.6, scaleX: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
    {/* 四個人影剪影 */}
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
const SearchScreenEffect = ({ color }: { color: string }) => (
  <>
    {/* 搜尋框 */}
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
    {/* 搜尋結果滾動 */}
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
const MirrorDialogueEffect = ({ color }: { color: string }) => (
  <>
    {/* 中央分割線（鏡面） */}
    <motion.div
      className="absolute top-0 bottom-0 left-1/2 w-[1px]"
      style={{ backgroundColor: color }}
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 0.5 }}
      transition={{ duration: 1 }}
    />
    {/* 左側：林壹 */}
    <motion.div
      className="absolute left-[20%] top-1/2 -translate-y-1/2 font-serif-tc text-base sm:text-lg"
      style={{ color: 'hsl(0 0% 70%)' }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 0.8, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      林壹
    </motion.div>
    {/* 右側：伊（鏡像） */}
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
const CherryFilterEffect = ({ color }: { color: string }) => (
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
const SpotlightStageEffect = ({ color }: { color: string }) => (
  <>
    {/* 黑暗到聚光 */}
    <motion.div
      className="absolute inset-0"
      style={{ backgroundColor: 'black' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 1.5 }}
    />
    {/* 圓形聚光燈 */}
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
    {/* 小女孩文字 */}
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
const EchoRippleEffect = ({ color }: { color: string }) => (
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
const ZeroCountdownEffect = ({ color }: { color: string }) => {
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
      {/* 歸零時的光芒擴散 */}
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

// ── 效果選擇器 ──

const EffectRenderer = forwardRef<HTMLDivElement, { style: IntroStyle; color: string }>(({ style, color }, _ref) => {
  switch (style) {
    case 'digital-wake': return <DigitalWakeEffect color={color} />;
    case 'file-delete': return <FileDeleteEffect color={color} />;
    case 'memory-gap': return <MemoryGapEffect color={color} />;
    case 'mirror-crack': return <MirrorCrackEffect color={color} />;
    case 'hotpot-steam': return <HotpotSteamEffect color={color} />;
    case 'hollywood-curtain': return <HollywoodCurtainEffect color={color} />;
    case 'cliff-dream': return <CliffDreamEffect color={color} />;
    case 'search-screen': return <SearchScreenEffect color={color} />;
    case 'mirror-dialogue': return <MirrorDialogueEffect color={color} />;
    case 'cherry-filter': return <CherryFilterEffect color={color} />;
    case 'spotlight-stage': return <SpotlightStageEffect color={color} />;
    case 'echo-ripple': return <EchoRippleEffect color={color} />;
    case 'zero-countdown': return <ZeroCountdownEffect color={color} />;
    default: return null;
  }
});
EffectRenderer.displayName = 'EffectRenderer';

// ── 主組件 ──

const Yi2ChapterIntro = ({
  chapterKey,
  title,
  subtitle,
  quote,
  style,
  onComplete,
}: Yi2ChapterIntroProps) => {
  const theme = getChapterTheme(chapterKey);
  const color = themeToHSL(theme);
  const glow = themeToGlow(theme, 0.8);
  const shouldSimplify = usePerformanceStore((s) => s.shouldSimplifyAnimations());

  // 使用 ref 穩定回調，防止父組件重渲染時重置計時器
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const completedRef = useRef(false);

  const forceComplete = useCallback(() => {
    if (!completedRef.current) {
      completedRef.current = true;
      onCompleteRef.current();
    }
  }, []);

  // 自動結束計時 - forceComplete 穩定不變，計時器不會被重置
  useEffect(() => {
    completedRef.current = false;
    const timer = setTimeout(forceComplete, 4500);
    const safety = setTimeout(forceComplete, 7000);
    return () => { clearTimeout(timer); clearTimeout(safety); };
  }, [forceComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={forceComplete}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: `linear-gradient(180deg, hsl(${theme.hue} ${theme.saturation * 0.3}% 4%) 0%, hsl(${theme.hue} ${theme.saturation * 0.4}% 8%) 50%, hsl(${theme.hue} ${theme.saturation * 0.3}% 4%) 100%)`,
      }}
    >
      {/* 章節專屬動畫效果 */}
      {!shouldSimplify && <EffectRenderer style={style} color={color} />}

      {/* 標題區（居中，在效果之上） */}
      <div className="relative z-20 text-center px-6">
        {/* 上方裝飾線 */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="h-[1px] w-12 sm:w-20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ background: `linear-gradient(90deg, transparent, ${color})`, transformOrigin: 'right' }}
          />
          <motion.div
            className="w-2 h-2 rotate-45"
            style={{ background: color, boxShadow: `0 0 10px ${color}` }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
          <motion.div
            className="h-[1px] w-12 sm:w-20"
            style={{ background: `linear-gradient(90deg, ${color}, transparent)`, transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </motion.div>

        {/* 章節標題 */}
        <motion.h1
          className="font-serif-tc text-2xl sm:text-4xl md:text-5xl tracking-[0.2em]"
          style={{
            color: glow,
            textShadow: `0 0 40px ${themeToHSL(theme, 0.5)}, 0 4px 20px hsl(0 0% 0% / 0.8)`,
          }}
          initial={{ opacity: 0, y: 20, letterSpacing: '0.4em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.2em' }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {title}
        </motion.h1>

        {/* 副標題 */}
        {subtitle && (
          <motion.h2
            className="font-serif-tc text-lg sm:text-2xl mt-3 tracking-[0.1em]"
            style={{
              color: themeToGlow(theme, 0.7),
              textShadow: `0 0 20px ${themeToHSL(theme, 0.3)}`,
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {subtitle}
          </motion.h2>
        )}

        {/* 金句 */}
        {quote && (
          <motion.p
            className="font-serif-tc text-sm sm:text-base md:text-lg mt-8 max-w-lg mx-auto italic leading-relaxed"
            style={{ color: 'hsl(45 20% 75%)', textShadow: `0 0 20px ${themeToHSL(theme, 0.2)}` }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            「{quote}」
          </motion.p>
        )}

        {/* 下方裝飾線 */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="h-[1px] w-8 sm:w-14" style={{ background: `linear-gradient(90deg, transparent, ${themeToHSL(theme, 0.5)})` }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: themeToHSL(theme, 0.5) }} />
          <div className="h-[1px] w-8 sm:w-14" style={{ background: `linear-gradient(90deg, ${themeToHSL(theme, 0.5)}, transparent)` }} />
        </motion.div>
      </div>

      {/* 底部漸層 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: `linear-gradient(to top, hsl(${theme.hue} ${theme.saturation * 0.3}% 4%) 0%, transparent 100%)`,
        }}
      />
    </motion.div>
  );
};

export default Yi2ChapterIntro;
