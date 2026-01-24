import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Compass, Eye, Book, Star, Sparkles, Zap, Flame, Heart, Shield, Lock } from 'lucide-react';
import { useAchievements } from '@/hooks/useAchievements';

interface AchievementsOverviewProps {
  isOpen: boolean;
  onClose: () => void;
}

// 圖標映射
const iconMap: Record<string, React.ElementType> = {
  compass: Compass,
  eye: Eye,
  book: Book,
  star: Star,
  trophy: Trophy,
  sparkles: Sparkles,
  zap: Zap,
  flame: Flame,
  heart: Heart,
  shield: Shield,
};

// 稀有度配色
const rarityStyles: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  common: { 
    bg: 'bg-muted/20', 
    border: 'border-muted-foreground/30', 
    text: 'text-muted-foreground',
    glow: ''
  },
  rare: { 
    bg: 'bg-blue-500/10', 
    border: 'border-blue-400/40', 
    text: 'text-blue-400',
    glow: 'shadow-blue-500/20'
  },
  epic: { 
    bg: 'bg-purple-500/10', 
    border: 'border-purple-400/40', 
    text: 'text-purple-400',
    glow: 'shadow-purple-500/30'
  },
  legendary: { 
    bg: 'bg-amber-500/10', 
    border: 'border-amber-400/50', 
    text: 'text-amber-400',
    glow: 'shadow-amber-500/40'
  },
};

// 稀有度標籤
const rarityLabels: Record<string, string> = {
  common: '普通',
  rare: '稀有',
  epic: '史詩',
  legendary: '傳說',
};

// 成就分類
const categories = [
  { id: 'progress', name: '進度', description: '探索故事的足跡' },
  { id: 'arc', name: '弧度', description: '弧度歸零之路' },
  { id: 'shadow', name: '陰影', description: '與陰影共舞' },
  { id: 'chapter', name: '章節', description: '歷史人物的相遇' },
];

// 成就分類映射
const achievementCategories: Record<string, string> = {
  first_choice: 'progress',
  five_choices: 'progress',
  ten_choices: 'progress',
  twenty_choices: 'progress',
  all_choices: 'progress',
  arc_rising: 'arc',
  arc_100: 'arc',
  arc_50: 'arc',
  arc_zero: 'arc',
  shadow_embrace: 'shadow',
  shadow_deep: 'shadow',
  shadow_master: 'shadow',
  meet_sushi: 'chapter',
  meet_wangyangming: 'chapter',
  meet_libai: 'chapter',
  meet_yi: 'chapter',
  complete_journey: 'chapter',
};

const AchievementsOverview = ({ isOpen, onClose }: AchievementsOverviewProps) => {
  const { achievements, unlockedIds, unlockedCount, totalCount } = useAchievements();
  const progressPercent = Math.round((unlockedCount / totalCount) * 100);

  // 按分類分組成就
  const groupedAchievements = categories.map(cat => ({
    ...cat,
    achievements: achievements.filter(a => achievementCategories[a.id] === cat.id),
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[85vh] overflow-hidden bg-card/95 backdrop-blur-sm border border-border/50 rounded-2xl shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            {/* 頂部裝飾 */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-60" />

            {/* 關閉按鈕 */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 標題區 */}
            <div className="p-6 pb-4 border-b border-border/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif-tc font-bold text-foreground">成就總覽</h2>
                  <p className="text-sm text-muted-foreground">探索、收集、成長</p>
                </div>
              </div>

              {/* 總進度條 */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">總進度</span>
                  <span className="text-primary font-medium">{unlockedCount} / {totalCount} ({progressPercent}%)</span>
                </div>
                <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>

            {/* 成就列表 */}
            <div className="overflow-y-auto max-h-[calc(85vh-180px)] p-6 space-y-6">
              {groupedAchievements.map((category, catIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  {/* 分類標題 */}
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-lg font-bold text-foreground">{category.name}</h3>
                    <span className="text-xs text-muted-foreground">— {category.description}</span>
                    <span className="ml-auto text-xs text-primary">
                      {category.achievements.filter(a => unlockedIds.includes(a.id)).length} / {category.achievements.length}
                    </span>
                  </div>

                  {/* 成就網格 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.achievements.map((achievement, index) => {
                      const isUnlocked = unlockedIds.includes(achievement.id);
                      const Icon = iconMap[achievement.icon] || Star;
                      const style = rarityStyles[achievement.rarity];

                      return (
                        <motion.div
                          key={achievement.id}
                          className={`
                            relative p-4 rounded-xl border transition-all duration-300
                            ${isUnlocked 
                              ? `${style.bg} ${style.border} shadow-lg ${style.glow}` 
                              : 'bg-muted/10 border-muted/20 opacity-60'
                            }
                          `}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                          whileHover={isUnlocked ? { scale: 1.02 } : {}}
                        >
                          <div className="flex items-start gap-3">
                            {/* 圖標 */}
                            <div className={`
                              p-2 rounded-lg shrink-0
                              ${isUnlocked ? style.bg : 'bg-muted/20'}
                            `}>
                              {isUnlocked ? (
                                <Icon className={`w-5 h-5 ${style.text}`} />
                              ) : (
                                <Lock className="w-5 h-5 text-muted-foreground/50" />
                              )}
                            </div>

                            {/* 內容 */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className={`font-bold truncate ${isUnlocked ? 'text-foreground' : 'text-muted-foreground'}`}>
                                  {isUnlocked ? achievement.title : '???'}
                                </h4>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded ${style.bg} ${style.text}`}>
                                  {rarityLabels[achievement.rarity]}
                                </span>
                              </div>
                              <p className={`text-xs ${isUnlocked ? 'text-muted-foreground' : 'text-muted-foreground/50'}`}>
                                {achievement.description}
                              </p>
                            </div>
                          </div>

                          {/* 已解鎖標記 */}
                          {isUnlocked && (
                            <div className="absolute top-2 right-2">
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"
                              >
                                <span className="text-green-400 text-xs">✓</span>
                              </motion.div>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 底部提示 */}
            <div className="p-4 border-t border-border/30 text-center">
              <p className="text-xs text-muted-foreground">
                繼續探索故事，解鎖更多成就
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementsOverview;
