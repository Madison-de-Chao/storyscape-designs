import { motion } from 'framer-motion';

interface LazyLoadingFallbackProps {
  fullScreen?: boolean;
}

const LazyLoadingFallback = ({ fullScreen = false }: LazyLoadingFallbackProps) => {
  if (fullScreen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
        />
      </motion.div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full"
      />
    </div>
  );
};

export default LazyLoadingFallback;
