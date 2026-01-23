import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, BookOpen, Sparkles, Quote, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { yi1JourneyPhases, journeySummary, type JourneyPhase } from '@/data/journeyReflections';

interface JourneyReflectionProps {
  isOpen: boolean;
  onClose: () => void;
}

const JourneyReflection = ({ isOpen, onClose }: JourneyReflectionProps) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  const phases = yi1JourneyPhases;
  const phase = phases[currentPhase];

  const handlePrevPhase = () => {
    setCurrentPhase((prev) => Math.max(0, prev - 1));
    setExpandedChapter(null);
  };

  const handleNextPhase = () => {
    setCurrentPhase((prev) => Math.min(phases.length, prev + 1)); // +1 for summary page
    setExpandedChapter(null);
  };

  const isSummaryPage = currentPhase === phases.length;

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden bg-gradient-to-b from-surface-dark via-background to-surface-dark border border-primary/20 rounded-2xl shadow-2xl"
      >
        {/* 背景裝飾 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        </div>

        {/* 關閉按鈕 */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* 標題區域 */}
        <div className="relative p-6 pb-4 text-center border-b border-border/30">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-14 h-14 mb-3 rounded-full bg-gradient-to-br from-primary/30 to-accent/30"
          >
            <BookOpen className="w-7 h-7 text-primary" />
          </motion.div>
          <h2 className="text-xl font-serif-tc font-bold text-foreground mb-1">
            心路歷程
          </h2>
          <p className="text-sm text-muted-foreground">
            《弧度歸零》第一部：從破碎到完整的英雄之旅
          </p>
        </div>

        {/* 進度指示器 */}
        <div className="relative px-6 pt-4">
          <div className="flex items-center justify-center gap-2">
            {phases.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentPhase(idx);
                  setExpandedChapter(null);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentPhase
                    ? 'bg-primary w-6'
                    : idx < currentPhase
                    ? 'bg-primary/60'
                    : 'bg-muted/40'
                }`}
              />
            ))}
            {/* 總結頁面指示器 */}
            <button
              onClick={() => {
                setCurrentPhase(phases.length);
                setExpandedChapter(null);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isSummaryPage ? 'bg-amber-400 w-6' : 'bg-muted/40'
              }`}
            />
          </div>
          <p className="text-center text-xs text-muted-foreground mt-2">
            {isSummaryPage ? '總結' : `${currentPhase + 1} / ${phases.length}`}
          </p>
        </div>

        {/* 內容區域 */}
        <div className="relative px-6 py-4 overflow-y-auto max-h-[calc(85vh-200px)]">
          <AnimatePresence mode="wait">
            {isSummaryPage ? (
              <motion.div
                key="summary"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* 完成圖片 */}
                {journeySummary.completeImage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="rounded-xl overflow-hidden border border-primary/20 shadow-lg"
                  >
                    <img
                      src={journeySummary.completeImage}
                      alt="旅程完成"
                      className="w-full h-auto"
                    />
                  </motion.div>
                )}

                {/* 總結標題 */}
                <div className="text-center py-4">
                  <Sparkles className="w-10 h-10 mx-auto mb-4 text-amber-400" />
                  <h3 className="text-2xl font-serif-tc font-bold text-amber-400 mb-3">
                    {journeySummary.title}
                  </h3>
                  <p className="text-xl font-medium text-foreground">
                    {journeySummary.content}
                  </p>
                </div>

                {/* 結語 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
                >
                  <p className="text-foreground/90 leading-relaxed text-center">
                    {journeySummary.epilogue}
                  </p>
                </motion.div>

                {/* 回家標語 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center py-4"
                >
                  <p className="text-lg text-primary font-serif-tc">
                    「歡迎回家。」
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* 階段標題 */}
                <div className="mb-6">
                  <h3 className="text-lg font-serif-tc font-bold text-primary mb-2">
                    {phase.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* 章節卡片 */}
                {phase.chapters.map((chapter, idx) => (
                  <motion.div
                    key={chapter.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                      expandedChapter === chapter.id
                        ? 'border-primary/50 bg-surface/80'
                        : 'border-border/30 bg-surface/40 hover:border-primary/30'
                    }`}
                  >
                    <button
                      onClick={() =>
                        setExpandedChapter(
                          expandedChapter === chapter.id ? null : chapter.id
                        )
                      }
                      className="w-full p-4 text-left flex items-start gap-3"
                    >
                      {/* 導師/主題圖標 */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        {chapter.mentor ? (
                          <User className="w-5 h-5 text-primary" />
                        ) : (
                          <Sparkles className="w-5 h-5 text-primary" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-muted-foreground">
                            {chapter.chapter}
                          </span>
                          {chapter.mentor && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                              {chapter.mentor}
                            </span>
                          )}
                        </div>
                        <h4 className="font-medium text-foreground">
                          {chapter.title}
                        </h4>
                        <p className="text-xs text-accent mt-0.5">
                          主題：{chapter.theme}
                        </p>
                      </div>

                      <ChevronRight
                        className={`w-5 h-5 text-muted-foreground transition-transform ${
                          expandedChapter === chapter.id ? 'rotate-90' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {expandedChapter === chapter.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 pt-2 border-t border-border/20">
                            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                              {chapter.lesson}
                            </p>
                            {chapter.quote && (
                              <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
                                <Quote className="w-4 h-4 text-primary/60 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-primary/80 italic">
                                  {chapter.quote}
                                </p>
                              </div>
                            )}
                            {chapter.graduationImage && (
                              <div className="mt-3">
                                <img
                                  src={chapter.graduationImage}
                                  alt={`${chapter.title} 畢業圖`}
                                  className="w-full rounded-lg border border-border/30"
                                />
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 導航按鈕 */}
        <div className="relative px-6 py-4 border-t border-border/30 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={handlePrevPhase}
            disabled={currentPhase === 0}
            className="text-muted-foreground hover:text-foreground disabled:opacity-30"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            上一階段
          </Button>

          <Button
            variant="ghost"
            onClick={handleNextPhase}
            disabled={isSummaryPage}
            className="text-muted-foreground hover:text-foreground disabled:opacity-30"
          >
            {currentPhase === phases.length - 1 ? '總結' : '下一階段'}
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default JourneyReflection;
