import { forwardRef } from 'react';
import { Sparkles, Palette, GitBranch, BookOpen, Moon } from 'lucide-react';

interface ShareCardProps {
  gameName: string;
  endingTitle: string;
  endingColor: string;
  arcValue: number;
  colorsCollected: string[];
  totalNodesRead: number;
  totalChoices: number;
  moonBrightValue?: number;
  moonDarkValue?: number;
}

// 收集顏色的展示配置
const colorConfig: Record<string, { name: string; bg: string }> = {
  amber: { name: '琥珀', bg: '#f59e0b' },
  emerald: { name: '翠綠', bg: '#10b981' },
  violet: { name: '紫羅蘭', bg: '#8b5cf6' },
  rose: { name: '玫瑰', bg: '#f43f5e' },
  cyan: { name: '青碧', bg: '#06b6d4' },
  gold: { name: '金黃', bg: '#eab308' },
  crimson: { name: '緋紅', bg: '#dc2626' },
  azure: { name: '蔚藍', bg: '#3b82f6' },
};

// 根據月明程度獲取主題配置
const getMoonTheme = (moonBrightValue: number, moonDarkValue: number) => {
  const total = moonBrightValue + moonDarkValue;
  const clarity = total > 0 ? moonBrightValue / total : 0.5;

  if (clarity >= 0.85) {
    return {
      name: '皓月當空',
      bgGradient: 'linear-gradient(180deg, #0a1628 0%, #1a3a5c 30%, #0d2847 70%, #061222 100%)',
      accentColor: '#f4f4f5',
      glowColor: 'rgba(244, 244, 245, 0.3)',
      moonPhase: 1,
      starOpacity: 0.9,
    };
  } else if (clarity >= 0.7) {
    return {
      name: '盈凸之月',
      bgGradient: 'linear-gradient(180deg, #0c1a2e 0%, #1e3a5f 30%, #142d4c 70%, #081524 100%)',
      accentColor: '#e2e8f0',
      glowColor: 'rgba(226, 232, 240, 0.25)',
      moonPhase: 0.85,
      starOpacity: 0.75,
    };
  } else if (clarity >= 0.55) {
    return {
      name: '上弦之月',
      bgGradient: 'linear-gradient(180deg, #0f1729 0%, #1a2744 30%, #141e33 70%, #0a0f1a 100%)',
      accentColor: '#cbd5e1',
      glowColor: 'rgba(203, 213, 225, 0.2)',
      moonPhase: 0.5,
      starOpacity: 0.6,
    };
  } else if (clarity >= 0.4) {
    return {
      name: '朦朧弦月',
      bgGradient: 'linear-gradient(180deg, #0d1117 0%, #151d2b 30%, #111827 70%, #0a0a0f 100%)',
      accentColor: '#94a3b8',
      glowColor: 'rgba(148, 163, 184, 0.15)',
      moonPhase: 0.35,
      starOpacity: 0.45,
    };
  } else if (clarity >= 0.25) {
    return {
      name: '眉月微光',
      bgGradient: 'linear-gradient(180deg, #0a0a0f 0%, #111318 30%, #0d0f14 70%, #050507 100%)',
      accentColor: '#64748b',
      glowColor: 'rgba(100, 116, 139, 0.1)',
      moonPhase: 0.2,
      starOpacity: 0.3,
    };
  } else if (clarity >= 0.1) {
    return {
      name: '殘月如鉤',
      bgGradient: 'linear-gradient(180deg, #050507 0%, #0a0b0e 30%, #070809 70%, #020203 100%)',
      accentColor: '#475569',
      glowColor: 'rgba(71, 85, 105, 0.08)',
      moonPhase: 0.1,
      starOpacity: 0.2,
    };
  } else {
    return {
      name: '晦暗新月',
      bgGradient: 'linear-gradient(180deg, #020203 0%, #050507 30%, #030304 70%, #000000 100%)',
      accentColor: '#334155',
      glowColor: 'rgba(51, 65, 85, 0.05)',
      moonPhase: 0,
      starOpacity: 0.1,
    };
  }
};

// 根據結局類型獲取顏色
const getEndingGradient = (title: string) => {
  switch (title) {
    case '圓滿弧度':
      return 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)';
    case '和解弧度':
      return 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)';
    case '探索弧度':
      return 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)';
    case '啟程弧度':
      return 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #0891b2 100%)';
    default:
      return 'linear-gradient(135deg, #9ca3af 0%, #6b7280 50%, #4b5563 100%)';
  }
};

// Generate stars based on opacity
const generateStars = (count: number, opacity: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const size = 1 + Math.random() * 2;
    stars.push({
      left: `${5 + Math.random() * 90}%`,
      top: `${5 + Math.random() * 40}%`,
      size,
      opacity: opacity * (0.3 + Math.random() * 0.7),
      delay: Math.random() * 2,
    });
  }
  return stars;
};

const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(
  ({ gameName, endingTitle, endingColor, arcValue, colorsCollected, totalNodesRead, totalChoices, moonBrightValue = 0, moonDarkValue = 0 }, ref) => {
    const endingGradient = getEndingGradient(endingTitle);
    const moonTheme = getMoonTheme(moonBrightValue, moonDarkValue);
    const stars = generateStars(30, moonTheme.starOpacity);
    
    return (
      <div
        ref={ref}
        style={{
          width: '600px',
          height: '800px',
          background: moonTheme.bgGradient,
          fontFamily: '"Noto Serif TC", serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* 星空背景 */}
        {stars.map((star, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${star.size}px`,
              height: `${star.size}px`,
              background: moonTheme.accentColor,
              borderRadius: '50%',
              left: star.left,
              top: star.top,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px ${moonTheme.accentColor}`,
            }}
          />
        ))}

        {/* 月亮視覺化 - 右上角 */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '40px',
            width: '100px',
            height: '100px',
          }}
        >
          {/* 月暈光環 */}
          <div
            style={{
              position: 'absolute',
              inset: '-20px',
              background: `radial-gradient(circle, ${moonTheme.glowColor} 0%, transparent 70%)`,
              borderRadius: '50%',
            }}
          />
          {/* 月球基底 */}
          <svg width="100" height="100" viewBox="0 0 100 100">
            <defs>
              <radialGradient id="moonSurface" cx="40%" cy="40%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </radialGradient>
              <clipPath id="moonClip">
                <circle cx="50" cy="50" r="45" />
              </clipPath>
            </defs>
            {/* 月球本體 */}
            <circle cx="50" cy="50" r="45" fill="url(#moonSurface)" opacity={moonTheme.moonPhase > 0 ? 1 : 0.2} />
            {/* 陰影遮罩 - 根據月相調整 */}
            {moonTheme.moonPhase < 1 && (
              <ellipse
                cx={50 + (1 - moonTheme.moonPhase) * 50}
                cy="50"
                rx={45 * (1 - moonTheme.moonPhase * 0.8)}
                ry="45"
                fill="#0a0a0f"
                clipPath="url(#moonClip)"
                opacity={0.95}
              />
            )}
          </svg>
        </div>

        {/* 背景裝飾 - 弧形光暈 */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            height: '500px',
            background: `radial-gradient(circle, ${moonTheme.glowColor} 0%, transparent 70%)`,
            borderRadius: '50%',
          }}
        />

        {/* 裝飾性弧線 */}
        <svg
          style={{
            position: 'absolute',
            top: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            height: '300px',
            opacity: 0.3,
          }}
          viewBox="0 0 500 300"
        >
          <path
            d="M 50 250 Q 250 50 450 250"
            fill="none"
            stroke={`url(#arcGradient-${moonTheme.name})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id={`arcGradient-${moonTheme.name}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={moonTheme.glowColor.replace('0.', '0.1')} />
              <stop offset="50%" stopColor={moonTheme.accentColor} />
              <stop offset="100%" stopColor={moonTheme.glowColor.replace('0.', '0.1')} />
            </linearGradient>
          </defs>
        </svg>

        {/* 遊戲標題 */}
        <div
          style={{
            paddingTop: '50px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: '14px',
              letterSpacing: '8px',
              color: moonTheme.accentColor,
              opacity: 0.6,
              marginBottom: '8px',
            }}
          >
            互動故事遊戲
          </div>
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 700,
              background: `linear-gradient(180deg, ${moonTheme.accentColor} 0%, ${moonTheme.glowColor.replace(/[\d.]+\)$/, '0.7)')} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0,
              letterSpacing: '4px',
            }}
          >
            {gameName}
          </h1>
        </div>

        {/* 月明程度標籤 */}
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: `1px solid ${moonTheme.accentColor}40`,
              padding: '8px 20px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Moon style={{ width: '16px', height: '16px', color: moonTheme.accentColor }} />
            <span
              style={{
                fontSize: '14px',
                color: moonTheme.accentColor,
                letterSpacing: '2px',
              }}
            >
              {moonTheme.name}
            </span>
          </div>
        </div>

        {/* 結局類型標籤 */}
        <div
          style={{
            marginTop: '24px',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              background: endingGradient,
              padding: '12px 32px',
              borderRadius: '30px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Sparkles style={{ width: '20px', height: '20px', color: 'white' }} />
            <span
              style={{
                fontSize: '20px',
                fontWeight: 600,
                color: 'white',
                letterSpacing: '2px',
              }}
            >
              {endingTitle}
            </span>
          </div>
        </div>

        {/* 弧度值展示 */}
        <div
          style={{
            marginTop: '40px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: '14px',
              color: moonTheme.accentColor,
              opacity: 0.6,
              marginBottom: '12px',
              letterSpacing: '4px',
            }}
          >
            最終弧度
          </div>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              background: endingGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
            }}
          >
            {arcValue}°
          </div>
          
          {/* 弧度進度條 */}
          <div
            style={{
              margin: '20px auto 0',
              width: '300px',
              height: '8px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${(arcValue / 360) * 100}%`,
                height: '100%',
                background: endingGradient,
                borderRadius: '4px',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '300px',
              margin: '8px auto 0',
              fontSize: '12px',
              color: moonTheme.accentColor,
              opacity: 0.5,
            }}
          >
            <span>0°</span>
            <span>360°</span>
          </div>
        </div>

        {/* 統計數據網格 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            margin: '40px 40px 0',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${moonTheme.accentColor}20`,
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <BookOpen style={{ width: '24px', height: '24px', color: '#60a5fa', margin: '0 auto 8px' }} />
            <div style={{ fontSize: '28px', fontWeight: 700, color: moonTheme.accentColor }}>{totalNodesRead}</div>
            <div style={{ fontSize: '12px', color: moonTheme.accentColor, opacity: 0.5 }}>閱讀節點</div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${moonTheme.accentColor}20`,
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <GitBranch style={{ width: '24px', height: '24px', color: '#34d399', margin: '0 auto 8px' }} />
            <div style={{ fontSize: '28px', fontWeight: 700, color: moonTheme.accentColor }}>{totalChoices}</div>
            <div style={{ fontSize: '12px', color: moonTheme.accentColor, opacity: 0.5 }}>關鍵抉擇</div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${moonTheme.accentColor}20`,
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <Palette style={{ width: '24px', height: '24px', color: '#a78bfa', margin: '0 auto 8px' }} />
            <div style={{ fontSize: '28px', fontWeight: 700, color: moonTheme.accentColor }}>{colorsCollected.length}</div>
            <div style={{ fontSize: '12px', color: moonTheme.accentColor, opacity: 0.5 }}>收集顏色</div>
          </div>
        </div>

        {/* 收集的顏色展示 */}
        {colorsCollected.length > 0 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              margin: '30px 40px 0',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {colorsCollected.slice(0, 8).map((color) => {
              const config = colorConfig[color] || { name: color, bg: '#6b7280' };
              return (
                <div
                  key={color}
                  style={{
                    background: config.bg,
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'white',
                    boxShadow: `0 2px 10px ${config.bg}50`,
                  }}
                >
                  {config.name}
                </div>
              );
            })}
          </div>
        )}

        {/* 底部裝飾與水印 */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '120px',
            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.5) 100%)',
          }}
        />
        
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '0',
            right: '0',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: '12px',
              color: moonTheme.accentColor,
              opacity: 0.4,
              letterSpacing: '2px',
            }}
          >
            arctozero.lovable.app
          </div>
        </div>

        {/* 角落裝飾 */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '40px',
            height: '40px',
            borderLeft: `2px solid ${moonTheme.accentColor}30`,
            borderTop: `2px solid ${moonTheme.accentColor}30`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            width: '40px',
            height: '40px',
            borderLeft: `2px solid ${moonTheme.accentColor}30`,
            borderBottom: `2px solid ${moonTheme.accentColor}30`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRight: `2px solid ${moonTheme.accentColor}30`,
            borderBottom: `2px solid ${moonTheme.accentColor}30`,
          }}
        />
      </div>
    );
  }
);

ShareCard.displayName = 'ShareCard';

export default ShareCard;
