import { motion } from 'framer-motion';
import { Moon, Sparkles, Cloud, Sun } from 'lucide-react';

interface MoonEndingRemarksProps {
  clarity: number; // -100 到 100
  className?: string;
}

/**
 * 根據月明程度生成個人化結語
 */
const getMoonRemarks = (clarity: number): {
  title: string;
  quote: string;
  author: string;
  reflection: string;
  icon: 'full' | 'half' | 'crescent' | 'new';
  color: string;
} => {
  if (clarity >= 80) {
    return {
      title: '皓月當空',
      quote: '「心如明鏡臺，時時勤拂拭。」',
      author: '神秀',
      reflection: '你的內心如同滿月般清澈通透。在每一個選擇的岔口，你都選擇了面對、接納與成長。這份清明，是你給自己最好的禮物。',
      icon: 'full',
      color: 'text-amber-300',
    };
  }
  
  if (clarity >= 50) {
    return {
      title: '月華如練',
      quote: '「但願人長久，千里共嬋娟。」',
      author: '蘇軾',
      reflection: '你的選擇傾向光明，像盈凸的月亮，雖非完美無缺，卻已足夠照亮前路。記住，不必追求完美，接受不完美本身就是一種完整。',
      icon: 'full',
      color: 'text-amber-400',
    };
  }
  
  if (clarity >= 20) {
    return {
      title: '月上柳梢',
      quote: '「人有悲歡離合，月有陰晴圓缺。」',
      author: '蘇軾',
      reflection: '你在光與影之間保持著微妙的平衡，稍微傾向光明的那一側。這是一種難得的覺察——你既不逃避陰暗，也不沉溺其中。',
      icon: 'half',
      color: 'text-yellow-400',
    };
  }
  
  if (clarity >= -20) {
    return {
      title: '月影朦朧',
      quote: '「吾心似秋月，碧潭清皎潔。」',
      author: '寒山',
      reflection: '你的內心如同半月，明暗交織。這不是缺陷，而是完整的人性。承認自己的複雜，接納內心的矛盾——這本身就是一種成長。',
      icon: 'half',
      color: 'text-slate-300',
    };
  }
  
  if (clarity >= -50) {
    return {
      title: '月掩雲間',
      quote: '「不識廬山真面目，只緣身在此山中。」',
      author: '蘇軾',
      reflection: '你選擇了較多迴避或晦澀的路徑。這或許是自我保護，或許是還未準備好面對。沒關係，每個人都有自己的節奏。當你準備好的時候，月亮依然會在那裡。',
      icon: 'crescent',
      color: 'text-slate-400',
    };
  }
  
  if (clarity >= -80) {
    return {
      title: '殘月如鉤',
      quote: '「別有幽愁暗恨生，此時無聲勝有聲。」',
      author: '白居易',
      reflection: '你的選擇大多傾向迴避與隱藏。也許此刻的你還不想被看見，這是可以理解的。但記住，陰影存在的意義，是為了讓我們更珍惜光明。',
      icon: 'crescent',
      color: 'text-slate-500',
    };
  }
  
  return {
    title: '晦暗新月',
    quote: '「沉舟側畔千帆過，病樹前頭萬木春。」',
    author: '劉禹錫',
    reflection: '你選擇深藏自己，如同新月隱於夜空。這不是終點，而是新的開始——新月之後，便是漸盈的月華。當你準備好的時候，光明會再次升起。',
    icon: 'new',
    color: 'text-slate-600',
  };
};

const MoonEndingRemarks = ({ clarity, className = '' }: MoonEndingRemarksProps) => {
  const remarks = getMoonRemarks(clarity);
  
  const renderIcon = () => {
    switch (remarks.icon) {
      case 'full':
        return (
          <div className="relative">
            <Sun className="w-8 h-8 text-amber-400 absolute -top-1 -right-1 opacity-30" />
            <Moon className="w-10 h-10 text-amber-300 fill-amber-300/80" />
          </div>
        );
      case 'half':
        return <Moon className="w-10 h-10 text-slate-300 fill-slate-300/50" />;
      case 'crescent':
        return <Moon className="w-10 h-10 text-slate-400" />;
      case 'new':
        return (
          <div className="relative">
            <Cloud className="w-8 h-8 text-slate-600 absolute -top-1 -right-1" />
            <Moon className="w-10 h-10 text-slate-600" />
          </div>
        );
    }
  };
  
  return (
    <motion.div
      className={`p-6 rounded-xl bg-gradient-to-b from-surface/60 to-surface/30 border border-border/30 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {/* 標題區域 */}
      <div className="flex items-center justify-center gap-3 mb-4">
        {renderIcon()}
        <div className="text-center">
          <h3 className={`text-xl font-serif-tc font-semibold ${remarks.color}`}>
            {remarks.title}
          </h3>
          <div className="flex items-center justify-center gap-1 mt-1">
            <Sparkles className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">月明結語</span>
            <Sparkles className="w-3 h-3 text-muted-foreground" />
          </div>
        </div>
      </div>
      
      {/* 引用 */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <p className={`text-lg font-serif-tc italic ${remarks.color}`}>
          {remarks.quote}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          —— {remarks.author}
        </p>
      </motion.div>
      
      {/* 個人化反思 */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        {/* 裝飾線 */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <p className="text-sm text-foreground/80 leading-relaxed pt-4 text-center">
          {remarks.reflection}
        </p>
      </motion.div>
      
      {/* 月明指數顯示 */}
      <motion.div
        className="mt-4 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <div className={`px-4 py-1.5 rounded-full bg-surface/50 border border-border/50 text-sm ${remarks.color}`}>
          月明指數：{clarity > 0 ? '+' : ''}{clarity}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MoonEndingRemarks;
