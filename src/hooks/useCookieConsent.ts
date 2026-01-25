import { useState, useEffect, useCallback } from 'react';

export const COOKIE_CONSENT_KEY = 'cookie-consent';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

/**
 * Hook to read and react to user's cookie consent preferences.
 * 
 * @example
 * ```tsx
 * const { preferences, hasConsented, isAllowed } = useCookieConsent();
 * 
 * useEffect(() => {
 *   if (isAllowed('analytics')) {
 *     // Load Google Analytics or other analytics scripts
 *   }
 * }, [isAllowed]);
 * ```
 */
export const useCookieConsent = () => {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [hasConsented, setHasConsented] = useState(false);

  // Load preferences from localStorage
  const loadPreferences = useCallback(() => {
    const saved = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as CookiePreferences;
        setPreferences(parsed);
        setHasConsented(true);
      } catch {
        setPreferences(null);
        setHasConsented(false);
      }
    } else {
      setPreferences(null);
      setHasConsented(false);
    }
  }, []);

  useEffect(() => {
    loadPreferences();

    // Listen for storage changes (e.g., from other tabs or consent banner)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === COOKIE_CONSENT_KEY) {
        loadPreferences();
      }
    };

    // Custom event for same-tab updates
    const handleConsentUpdate = () => {
      loadPreferences();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cookie-consent-update', handleConsentUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cookie-consent-update', handleConsentUpdate);
    };
  }, [loadPreferences]);

  /**
   * Check if a specific cookie type is allowed
   */
  const isAllowed = useCallback(
    (type: keyof CookiePreferences): boolean => {
      if (type === 'necessary') return true; // Always allowed
      return preferences?.[type] ?? false;
    },
    [preferences]
  );

  /**
   * Get all current preferences (with defaults if not set)
   */
  const getPreferences = useCallback((): CookiePreferences => {
    return preferences ?? defaultPreferences;
  }, [preferences]);

  /**
   * Reset consent (useful for testing or settings page)
   */
  const resetConsent = useCallback(() => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    window.dispatchEvent(new Event('cookie-consent-update'));
  }, []);

  return {
    /** Current cookie preferences, null if not yet consented */
    preferences,
    /** Whether the user has made a consent choice */
    hasConsented,
    /** Check if a specific cookie type is allowed */
    isAllowed,
    /** Get preferences with defaults */
    getPreferences,
    /** Reset consent to show banner again */
    resetConsent,
  };
};

/**
 * Utility function to dispatch consent update event
 * Call this after saving preferences to notify all hooks
 */
export const dispatchConsentUpdate = () => {
  window.dispatchEvent(new Event('cookie-consent-update'));
};

export default useCookieConsent;
