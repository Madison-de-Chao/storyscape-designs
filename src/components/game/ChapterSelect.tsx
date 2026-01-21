import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, BookOpen, User } from 'lucide-react';
import { useGameStore } from '@/stores/gameStore';

interface ChapterInfo {
  id: string;
  startNodeId: string;
  title: string;
  subtitle: string;
  character?: string;
  unlocked: boolean;
}

// 已實作的章節及其起始節點
const implementedChapters: ChapterInfo[] = [
  {
    id: 'preface',
    startNodeId: 'preface-1',
    title: '作者序',
    subtitle: '致那個等待被擁抱的你',
    unlocked: true,
  },
  {
    id: 'prologue',
    startNodeId: 'yi1-prologue-1',
    title: '序章',
    subtitle: '未完成的檔案',
    unlocked: true,
  },
  {
    id: 'chapter-1',
    startNodeId: 'yi1-chapter-1-intro-1',
    title: '第一章',
    subtitle: '刪除',
    unlocked: true,
  },
  {
    id: 'chapter-2',
    startNodeId: 'yi1-chapter-2-intro-1',
    title: '第二章',
    subtitle: '渡口',
    unlocked: true,
  },
  {
    id: 'chapter-3',
    startNodeId: 'yi1-chapter-3-intro-1',
    title: '第三章',
    subtitle: '真相',
    character: '王陽明',
    unlocked: true,
  },
  {
    id: 'chapter-4',
    startNodeId: 'yi1-chapter-4-intro-1',
    title: '第四章',
    subtitle: '命樹',
    character: '蘇軾',
    unlocked: true,
  },
  {
    id: 'chapter-5',
    startNodeId: 'yi1-chapter-5-intro-1',
    title: '第五章',
    subtitle: '也無風雨',
    character: '蘇軾',
    unlocked: true,
  },
  {
    id: 'chapter-6',
    startNodeId: 'yi1-chapter-6-intro-1',
    title: '第六章',
    subtitle: '吾性自足',
    character: '王陽明',
    unlocked: true,
  },
  {
    id: 'chapter-7',
    startNodeId: 'chapter7-1',
    title: '第七章',
    subtitle: '誰定的規矩',
    character: '武則天',
    unlocked: true,
  },
  {
    id: 'chapter-8',
    startNodeId: 'chapter8-1',
    title: '第八章',
    subtitle: '筆比命長',
    character: '司馬遷',
    unlocked: true,
  },
  {
    id: 'chapter-9',
    startNodeId: 'chapter9-1',
    title: '第九章',
    subtitle: '天生我材',
    character: '李白',
    unlocked: true,
  },
  {
    id: 'chapter-10',
    startNodeId: 'chapter10-1',
    title: '第十章',
    subtitle: '心靈之眼',
    character: '海倫凱勒',
    unlocked: true,
  },
  {
    id: 'chapter-11',
    startNodeId: 'chapter11-1',
    title: '第十一章',
    subtitle: '毒藥',
    character: '曼德拉',
    unlocked: true,
  },
  // 未實作的章節（鎖定）
  {
    id: 'chapter-12',
    startNodeId: '',
    title: '第十二章',
    subtitle: '星夜',
    character: '梵谷',
    unlocked: false,
  },
  {
    id: 'chapter-13',
    startNodeId: '',
    title: '第十三章',
    subtitle: '解放',
    character: '林肯',
    unlocked: false,
  },
  {
    id: 'chapter-14',
    startNodeId: '',
    title: '第十四章',
    subtitle: '連結點',
    character: '賈伯斯',
    unlocked: false,
  },
  {
    id: 'chapter-15',
    startNodeId: '',
    title: '終章',
    subtitle: '歸零',
    unlocked: false,
  },
];

interface ChapterSelectProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChapterSelect = ({ isOpen, onClose }: ChapterSelectProps) => {
  const { setCurrentNode, startGame, getChapterProgress } = useGameStore();

  const handleSelectChapter = (chapter: ChapterInfo) => {
    if (!chapter.unlocked) return;
    startGame('yi');
    setCurrentNode(chapter.startNodeId);
    onClose();
  };

  const getChapterId = (chapter: ChapterInfo): string => {
    if (chapter.id === 'preface') return 'preface';
    if (chapter.id === 'prologue') return 'prologue';
    return chapter.id;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* 章節選擇面板 */}
          <motion.div
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                       md:w-[600px] md:max-h-[80vh] z-50
                       bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* 標題區 */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-xl font-serif-tc font-bold text-foreground">章節選擇</h2>
                <p className="text-sm text-muted-foreground mt-1">弧度歸零：壹</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* 章節列表 */}
            <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(80vh-100px)]">
              <div className="grid gap-3">
                {implementedChapters.map((chapter, index) => (
                  <motion.button
                    key={chapter.id}
                    onClick={() => handleSelectChapter(chapter)}
                    disabled={!chapter.unlocked}
                    className={`
                      relative w-full text-left p-4 rounded-xl border
                      transition-all duration-300
                      ${chapter.unlocked 
                        ? 'bg-card hover:bg-muted/50 border-border hover:border-primary/50 cursor-pointer' 
                        : 'bg-muted/30 border-border/50 cursor-not-allowed opacity-60'
                      }
                    `}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={chapter.unlocked ? { x: 4 } : {}}
                  >
                    <div className="flex items-start gap-4">
                      {/* 章節圖標 */}
                      <div className={`
                        flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center
                        ${chapter.unlocked 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-muted text-muted-foreground'
                        }
                      `}>
                        {chapter.unlocked ? (
                          <BookOpen className="w-5 h-5" />
                        ) : (
                          <Lock className="w-5 h-5" />
                        )}
                      </div>

                      {/* 章節信息 */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className={`
                            font-serif-tc font-medium
                            ${chapter.unlocked ? 'text-foreground' : 'text-muted-foreground'}
                          `}>
                            {chapter.title}
                          </h3>
                          {chapter.character && (
                            <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 
                                           rounded-full bg-primary/10 text-primary">
                              <User className="w-3 h-3" />
                              {chapter.character}
                            </span>
                          )}
                        </div>
                        <p className={`
                          text-sm mt-1
                          ${chapter.unlocked ? 'text-muted-foreground' : 'text-muted-foreground/50'}
                        `}>
                          {chapter.subtitle}
                        </p>
                      </div>

                      {/* 箭頭 */}
                      {chapter.unlocked && (
                        <motion.div
                          className="text-primary/50"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          ›
                        </motion.div>
                      )}
                    </div>

                    {/* 進度條 */}
                    {chapter.unlocked && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                          <span>閱讀進度</span>
                          <span>{getChapterProgress(getChapterId(chapter))}%</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-primary rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${getChapterProgress(getChapterId(chapter))}%` }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                          />
                        </div>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* 提示 */}
              <p className="text-center text-xs text-muted-foreground mt-6">
                更多章節將在未來更新中解鎖
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ChapterSelect;
