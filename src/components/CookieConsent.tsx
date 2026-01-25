import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie, X, Settings, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { 
  COOKIE_CONSENT_KEY, 
  CookiePreferences, 
  dispatchConsentUpdate 
} from '@/hooks/useCookieConsent';

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (savedConsent === null) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    dispatchConsentUpdate(); // Notify other components
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    savePreferences({ necessary: true, analytics: true, marketing: true });
  };

  const handleDeclineAll = () => {
    savePreferences({ necessary: true, analytics: false, marketing: false });
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const cookieTypes = [
    {
      id: 'necessary',
      label: '必要 Cookie',
      description: '網站運作所必需，無法關閉。包含登入狀態、偏好設定等。',
      disabled: true,
    },
    {
      id: 'analytics',
      label: '分析 Cookie',
      description: '幫助我們了解訪客如何使用網站，以改善使用體驗。',
      disabled: false,
    },
    {
      id: 'marketing',
      label: '行銷 Cookie',
      description: '用於追蹤訪客行為以提供相關廣告與行銷內容。',
      disabled: false,
    },
  ] as const;

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
          <div className="max-w-4xl mx-auto bg-stone-900 border border-stone-700/50 rounded-xl shadow-2xl overflow-hidden">
            {/* Main Banner */}
            <div className="p-4 sm:p-6">
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
                    我們使用 Cookie 來提升您的瀏覽體驗。您可以自訂偏好設定，或查看我們的{' '}
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
                    onClick={() => setShowSettings(!showSettings)}
                    className="text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                  >
                    <Settings className="w-4 h-4 mr-1" />
                    設定
                    <ChevronDown 
                      className={`w-3 h-3 ml-1 transition-transform ${showSettings ? 'rotate-180' : ''}`} 
                    />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleDeclineAll}
                    className="text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                  >
                    僅必要
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleAcceptAll}
                    className="bg-amber-600 hover:bg-amber-500 text-white"
                  >
                    全部接受
                  </Button>
                </div>

                {/* Close button for mobile */}
                <button
                  onClick={handleDeclineAll}
                  className="absolute top-2 right-2 sm:hidden p-1 text-stone-500 hover:text-stone-300"
                  aria-label="關閉"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Settings Panel */}
            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 border-t border-stone-700/50">
                    <div className="pt-4 space-y-4">
                      {cookieTypes.map((cookie) => (
                        <div 
                          key={cookie.id}
                          className="flex items-start gap-3 p-3 rounded-lg bg-stone-800/50 border border-stone-700/30"
                        >
                          <Checkbox
                            id={cookie.id}
                            checked={preferences[cookie.id]}
                            disabled={cookie.disabled}
                            onCheckedChange={(checked) => 
                              setPreferences(prev => ({ 
                                ...prev, 
                                [cookie.id]: checked === true 
                              }))
                            }
                            className="mt-0.5 border-stone-600 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
                          />
                          <div className="flex-1">
                            <Label 
                              htmlFor={cookie.id}
                              className={`text-sm font-medium cursor-pointer ${
                                cookie.disabled ? 'text-stone-400' : 'text-stone-200'
                              }`}
                            >
                              {cookie.label}
                              {cookie.disabled && (
                                <span className="ml-2 text-xs text-stone-500">（必要）</span>
                              )}
                            </Label>
                            <p className="text-xs text-stone-500 mt-0.5">
                              {cookie.description}
                            </p>
                          </div>
                        </div>
                      ))}

                      <div className="flex justify-end pt-2">
                        <Button
                          size="sm"
                          onClick={handleSavePreferences}
                          className="bg-amber-600 hover:bg-amber-500 text-white"
                        >
                          儲存偏好設定
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
