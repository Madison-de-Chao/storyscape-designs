import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, Clock, Trash2, Download, ChevronRight } from 'lucide-react';
import { useGameStore, SaveSlot } from '@/stores/gameStore';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface SaveLoadPanelProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'save' | 'load';
  currentChapterTitle?: string;
}

const SaveLoadPanel: React.FC<SaveLoadPanelProps> = ({
  isOpen,
  onClose,
  mode,
  currentChapterTitle = '未知章節',
}) => {
  const { getSaveSlots, saveGame, loadGame, deleteSave } = useGameStore();
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [loadConfirmId, setLoadConfirmId] = useState<string | null>(null);
  
  const slots = getSaveSlots();
  const autoSaves = slots.filter(s => s.isAutoSave).sort((a, b) => b.savedAt - a.savedAt);
  const manualSaves = slots.filter(s => !s.isAutoSave).sort((a, b) => b.savedAt - a.savedAt);

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - timestamp;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return '剛才';
    if (diffMins < 60) return `${diffMins} 分鐘前`;
    if (diffHours < 24) return `${diffHours} 小時前`;
    if (diffDays < 7) return `${diffDays} 天前`;
    
    return date.toLocaleDateString('zh-TW', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleSave = () => {
    const name = `手動存檔 ${manualSaves.length + 1}`;
    saveGame(name, currentChapterTitle, false);
  };

  const handleLoad = (slotId: string) => {
    const success = loadGame(slotId);
    if (success) {
      onClose();
    }
  };

  const handleDelete = (slotId: string) => {
    deleteSave(slotId);
    setDeleteConfirmId(null);
  };

  const renderSlot = (slot: SaveSlot) => (
    <motion.div
      key={slot.id}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className={`
        relative p-3 sm:p-4 rounded-lg border transition-all duration-200
        ${slot.isAutoSave 
          ? 'bg-amber-950/30 border-amber-800/40' 
          : 'bg-stone-900/50 border-stone-700/50'
        }
        hover:border-stone-500/70 hover:bg-stone-800/50 active:bg-stone-700/50
        group touch-manipulation
      `}
    >
      <div className="flex items-start justify-between gap-2 sm:gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
            {slot.isAutoSave ? (
              <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded bg-amber-700/50 text-amber-200">
                自動
              </span>
            ) : (
              <Save className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-stone-400" />
            )}
            <span className="text-xs sm:text-sm font-medium text-stone-200 truncate">
              {slot.name}
            </span>
          </div>
          
          <p className="text-[10px] sm:text-xs text-stone-400 mb-1.5 sm:mb-2 truncate">
            {slot.currentChapterTitle}
          </p>
          
          <div className="flex items-center gap-1 text-[10px] sm:text-xs text-stone-500">
            <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span>{formatTime(slot.savedAt)}</span>
          </div>
        </div>
        
        {/* 手機：始終顯示操作按鈕 */}
        <div className="flex items-center gap-1 sm:gap-1.5 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
          {mode === 'load' && (
            <Button
              size="sm"
              variant="ghost"
              className="h-7 sm:h-8 px-2 sm:px-3 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/30 active:bg-emerald-800/40"
              onClick={() => setLoadConfirmId(slot.id)}
            >
              <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 sm:mr-1" />
              <span className="hidden sm:inline">讀取</span>
            </Button>
          )}
          <Button
            size="sm"
            variant="ghost"
            className="h-7 w-7 sm:h-8 sm:w-8 p-0 text-red-400 hover:text-red-300 hover:bg-red-900/30 active:bg-red-800/40"
            onClick={() => setDeleteConfirmId(slot.id)}
          >
            <Trash2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </Button>
        </div>
      </div>
      
      {/* 進度條 */}
      <div className="mt-2 sm:mt-3 h-1 bg-stone-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all"
          style={{ width: `${Math.min(100, (slot.progress.arcValue / 180) * 100)}%` }}
        />
      </div>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 50 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full sm:max-w-lg bg-gradient-to-b from-stone-900 to-stone-950 rounded-t-2xl sm:rounded-2xl border-t sm:border border-stone-700/50 shadow-2xl overflow-hidden max-h-[85vh] sm:max-h-none"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-stone-800">
              <h2 className="text-base sm:text-lg font-medium text-stone-100 flex items-center gap-2">
                {mode === 'save' ? (
                  <>
                    <Save className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                    存檔
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                    讀取進度
                  </>
                )}
              </h2>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-200 hover:bg-stone-800 active:bg-stone-700 transition-colors touch-manipulation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <ScrollArea className="h-[60vh] sm:h-[60vh] max-h-[400px] sm:max-h-[500px]">
              <div className="p-4 space-y-6">
                {/* 新存檔按鈕（僅在存檔模式） */}
                {mode === 'save' && (
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={handleSave}
                    className="w-full p-4 rounded-lg border-2 border-dashed border-stone-600 hover:border-amber-500/60 bg-stone-900/30 hover:bg-amber-900/20 transition-all group"
                  >
                    <div className="flex items-center justify-center gap-2 text-stone-400 group-hover:text-amber-300">
                      <Save className="w-5 h-5" />
                      <span>建立新存檔</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="mt-1 text-xs text-stone-500">
                      當前位置：{currentChapterTitle}
                    </p>
                  </motion.button>
                )}

                {/* 自動存檔區 */}
                {autoSaves.length > 0 && (
                  <div>
                    <h3 className="text-xs font-medium text-amber-400/80 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      自動存檔
                    </h3>
                    <div className="space-y-2">
                      {autoSaves.map(renderSlot)}
                    </div>
                  </div>
                )}

                {/* 手動存檔區 */}
                {manualSaves.length > 0 && (
                  <div>
                    <h3 className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Save className="w-3.5 h-3.5" />
                      手動存檔
                    </h3>
                    <div className="space-y-2">
                      {manualSaves.map(renderSlot)}
                    </div>
                  </div>
                )}

                {/* 無存檔提示 */}
                {slots.length === 0 && (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-800/50 flex items-center justify-center">
                      <Save className="w-8 h-8 text-stone-600" />
                    </div>
                    <p className="text-stone-500">尚無存檔記錄</p>
                    <p className="text-xs text-stone-600 mt-1">
                      遊戲會在遇到選項時自動存檔
                    </p>
                  </div>
                )}
              </div>
            </ScrollArea>
          </motion.div>

          {/* 刪除確認對話框 */}
          <AlertDialog open={!!deleteConfirmId} onOpenChange={() => setDeleteConfirmId(null)}>
            <AlertDialogContent className="bg-stone-900 border-stone-700">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-stone-100">確定刪除此存檔？</AlertDialogTitle>
                <AlertDialogDescription className="text-stone-400">
                  此操作無法復原，存檔將永久刪除。
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-stone-800 border-stone-700 text-stone-300 hover:bg-stone-700">
                  取消
                </AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => deleteConfirmId && handleDelete(deleteConfirmId)}
                >
                  刪除
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* 讀檔確認對話框 */}
          <AlertDialog open={!!loadConfirmId} onOpenChange={() => setLoadConfirmId(null)}>
            <AlertDialogContent className="bg-stone-900 border-stone-700">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-stone-100">確定讀取此存檔？</AlertDialogTitle>
                <AlertDialogDescription className="text-stone-400">
                  目前的遊戲進度將被覆蓋，是否繼續？
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-stone-800 border-stone-700 text-stone-300 hover:bg-stone-700">
                  取消
                </AlertDialogCancel>
                <AlertDialogAction
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => loadConfirmId && handleLoad(loadConfirmId)}
                >
                  確定讀取
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SaveLoadPanel;
