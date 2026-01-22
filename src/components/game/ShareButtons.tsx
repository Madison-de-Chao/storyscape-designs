import { motion } from 'framer-motion';
import { Download, Share2, Copy, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ShareButtonsProps {
  onDownload: () => void;
  onCopy: () => void;
  onNativeShare: () => void;
  onTwitterShare: () => void;
  onFacebookShare: () => void;
  onLineShare: () => void;
  isGenerating: boolean;
  supportsNativeShare: boolean;
}

const ShareButtons = ({
  onDownload,
  onCopy,
  onNativeShare,
  onTwitterShare,
  onFacebookShare,
  onLineShare,
  isGenerating,
  supportsNativeShare,
}: ShareButtonsProps) => {
  const buttonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: 1.1 + i * 0.08, type: 'spring' as const, stiffness: 300 },
    }),
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const buttons = [
    { icon: Download, label: '下載圖片', onClick: onDownload, color: 'text-emerald-400 hover:bg-emerald-500/20' },
    { icon: Copy, label: '複製圖片', onClick: onCopy, color: 'text-blue-400 hover:bg-blue-500/20' },
    ...(supportsNativeShare ? [{ icon: Share2, label: '分享', onClick: onNativeShare, color: 'text-purple-400 hover:bg-purple-500/20' }] : []),
    { icon: Twitter, label: '分享到 Twitter', onClick: onTwitterShare, color: 'text-sky-400 hover:bg-sky-500/20' },
    { icon: Facebook, label: '分享到 Facebook', onClick: onFacebookShare, color: 'text-blue-500 hover:bg-blue-600/20' },
    { icon: MessageCircle, label: '分享到 LINE', onClick: onLineShare, color: 'text-green-400 hover:bg-green-500/20' },
  ];

  return (
    <TooltipProvider delayDuration={300}>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-wrap items-center justify-center gap-2 mx-6 mt-4 p-4 rounded-xl bg-surface/50 border border-border/30"
      >
        <span className="w-full text-center text-sm text-muted-foreground mb-2 flex items-center justify-center gap-2">
          <Share2 className="w-4 h-4" />
          分享你的結局
        </span>
        
        <div className="flex flex-wrap justify-center gap-2">
          {buttons.map((btn, index) => (
            <Tooltip key={btn.label}>
              <TooltipTrigger asChild>
                <motion.div
                  custom={index}
                  variants={buttonVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={btn.onClick}
                    disabled={isGenerating}
                    className={`w-10 h-10 rounded-full border border-border/30 ${btn.color} transition-colors`}
                  >
                    <btn.icon className="w-5 h-5" />
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-surface border-border/50">
                <p>{btn.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        {isGenerating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full text-center text-xs text-muted-foreground mt-2"
          >
            正在生成分享圖片...
          </motion.div>
        )}
      </motion.div>
    </TooltipProvider>
  );
};

export default ShareButtons;
