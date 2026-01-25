import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const COOKIE_CONSENT_KEY = 'cookie-consent-accepted';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (hasConsent === null) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-stone-900/95 backdrop-blur-md border border-stone-700/50 rounded-xl shadow-2xl p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Icon */}
              <div className="hidden sm:flex w-10 h-10 rounded-lg bg-amber-500/20 items-center justify-center text-amber-400 shrink-0">
                <Cookie className="w-5 h-5" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-sm font-medium text-stone-100 mb-1">
                  Cookie 使用聲明
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                  我們使用 Cookie 來提升您的瀏覽體驗、分析網站流量並記住您的偏好設定。繼續使用本網站即表示您同意我們的{' '}
                  <Link 
                    to="/privacy" 
                    className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                  >
                    隱私政策
                  </Link>
                  。
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDecline}
                  className="flex-1 sm:flex-none text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                >
                  拒絕
                </Button>
                <Button
                  size="sm"
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none bg-amber-600 hover:bg-amber-500 text-white"
                >
                  接受
                </Button>
              </div>

              {/* Close button for mobile */}
              <button
                onClick={handleDecline}
                className="absolute top-2 right-2 sm:hidden p-1 text-stone-500 hover:text-stone-300"
                aria-label="關閉"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
