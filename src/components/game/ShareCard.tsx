import { forwardRef } from 'react';
import { Sparkles, Palette, GitBranch, BookOpen } from 'lucide-react';

interface ShareCardProps {
  gameName: string;
  endingTitle: string;
  endingColor: string;
  arcValue: number;
  colorsCollected: string[];
  totalNodesRead: number;
  totalChoices: number;
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

// 根據結局類型獲取顏色
const getEndingGradient = (title: string) => {
  switch (title) {
    case '圓滿弧度':
      return 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)';
    case '和解弧度':
      return 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)';
    case '探索弧度':
      return 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)';
    default:
      return 'linear-gradient(135deg, #9ca3af 0%, #6b7280 50%, #4b5563 100%)';
  }
};

const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(
  ({ gameName, endingTitle, endingColor, arcValue, colorsCollected, totalNodesRead, totalChoices }, ref) => {
    const endingGradient = getEndingGradient(endingTitle);
    
    return (
      <div
        ref={ref}
        style={{
          width: '600px',
          height: '800px',
          background: 'linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)',
          fontFamily: '"Noto Serif TC", serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* 背景裝飾 - 弧形光暈 */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            height: '500px',
            background: `radial-gradient(circle, ${endingColor === 'text-amber-400' ? 'rgba(251, 191, 36, 0.15)' : endingColor === 'text-emerald-400' ? 'rgba(16, 185, 129, 0.15)' : endingColor === 'text-blue-400' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(156, 163, 175, 0.15)'} 0%, transparent 70%)`,
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
            stroke="url(#arcGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
        </svg>

        {/* 浮動粒子裝飾 */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${3 + (i % 3) * 2}px`,
              height: `${3 + (i % 3) * 2}px`,
              background: 'rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              left: `${10 + (i * 7)}%`,
              top: `${15 + (i % 5) * 15}%`,
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.3)',
            }}
          />
        ))}

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
              color: 'rgba(255, 255, 255, 0.5)',
              marginBottom: '8px',
            }}
          >
            互動故事遊戲
          </div>
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 700,
              background: 'linear-gradient(180deg, #ffffff 0%, #a0a0a0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0,
              letterSpacing: '4px',
            }}
          >
            {gameName}
          </h1>
        </div>

        {/* 結局類型標籤 */}
        <div
          style={{
            marginTop: '40px',
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
            marginTop: '50px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
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
                width: `${(arcValue / 180) * 100}%`,
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
              color: 'rgba(255, 255, 255, 0.4)',
            }}
          >
            <span>0°</span>
            <span>180°</span>
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
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <BookOpen style={{ width: '24px', height: '24px', color: '#60a5fa', margin: '0 auto 8px' }} />
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'white' }}>{totalNodesRead}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>閱讀節點</div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <GitBranch style={{ width: '24px', height: '24px', color: '#34d399', margin: '0 auto 8px' }} />
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'white' }}>{totalChoices}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>關鍵抉擇</div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <Palette style={{ width: '24px', height: '24px', color: '#a78bfa', margin: '0 auto 8px' }} />
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'white' }}>{colorsCollected.length}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}>收集顏色</div>
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
              color: 'rgba(255, 255, 255, 0.4)',
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
            borderLeft: '2px solid rgba(255, 255, 255, 0.2)',
            borderTop: '2px solid rgba(255, 255, 255, 0.2)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRight: '2px solid rgba(255, 255, 255, 0.2)',
            borderTop: '2px solid rgba(255, 255, 255, 0.2)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            width: '40px',
            height: '40px',
            borderLeft: '2px solid rgba(255, 255, 255, 0.2)',
            borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRight: '2px solid rgba(255, 255, 255, 0.2)',
            borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
          }}
        />
      </div>
    );
  }
);

ShareCard.displayName = 'ShareCard';

export default ShareCard;
