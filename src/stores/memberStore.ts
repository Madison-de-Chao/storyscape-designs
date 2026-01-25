import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '@/integrations/supabase/client';

export interface MemberInfo {
  email: string;
  hasAccess: boolean;
  entitlement?: {
    status: string;
    expiresAt: string;
  };
  verifiedAt: number;
}

interface MemberState {
  // Member info
  member: MemberInfo | null;
  isVerifying: boolean;
  error: string | null;
  
  // Actions
  verifyMembership: (email: string) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
  
  // Getters
  isAuthenticated: () => boolean;
  getMemberEmail: () => string | null;
}

// Session validity: 7 days
const SESSION_VALIDITY_MS = 7 * 24 * 60 * 60 * 1000;

export const useMemberStore = create<MemberState>()(
  persist(
    (set, get) => ({
      member: null,
      isVerifying: false,
      error: null,

      verifyMembership: async (email: string) => {
        set({ isVerifying: true, error: null });

        try {
          const { data, error } = await supabase.functions.invoke('check-entitlement', {
            body: { email: email.trim().toLowerCase() },
          });

          if (error) {
            console.error('Entitlement check error:', error);
            set({ 
              isVerifying: false, 
              error: '驗證服務暫時無法使用，請稍後再試' 
            });
            return false;
          }

          if (data.error) {
            let errorMessage = '驗證失敗';
            
            switch (data.error) {
              case 'user_not_found':
                errorMessage = '此信箱尚未註冊主站帳號';
                break;
              case 'invalid_email':
                errorMessage = '請輸入有效的電子信箱';
                break;
              case 'rate_limit_exceeded':
                errorMessage = `請求過於頻繁，請 ${data.retryAfter || 60} 秒後再試`;
                break;
              default:
                errorMessage = data.error_description || '驗證時發生錯誤';
            }
            
            set({ isVerifying: false, error: errorMessage });
            return false;
          }

          if (data.hasAccess) {
            set({
              member: {
                email: email.trim().toLowerCase(),
                hasAccess: true,
                entitlement: data.entitlement,
                verifiedAt: Date.now(),
              },
              isVerifying: false,
              error: null,
            });
            return true;
          } else {
            set({ 
              isVerifying: false, 
              error: '您尚未擁有此遊戲的存取權限，請先至主站購買' 
            });
            return false;
          }

        } catch (err) {
          console.error('Membership verification error:', err);
          set({ 
            isVerifying: false, 
            error: '網路連線錯誤，請檢查您的網路狀態' 
          });
          return false;
        }
      },

      logout: () => {
        set({ member: null, error: null });
      },

      clearError: () => {
        set({ error: null });
      },

      isAuthenticated: () => {
        const { member } = get();
        if (!member) return false;
        
        // Check if session is still valid
        const sessionAge = Date.now() - member.verifiedAt;
        if (sessionAge > SESSION_VALIDITY_MS) {
          // Session expired, clear it
          set({ member: null });
          return false;
        }
        
        return member.hasAccess;
      },

      getMemberEmail: () => {
        const { member } = get();
        return member?.email || null;
      },
    }),
    {
      name: 'arctozero-member',
      partialize: (state) => ({ member: state.member }),
    }
  )
);

export default useMemberStore;
