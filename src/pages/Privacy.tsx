import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-100">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-stone-950/80 backdrop-blur-sm border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">返回首頁</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h1 
                className="text-3xl font-bold"
                style={{ fontFamily: "'Noto Serif TC', serif" }}
              >
                隱私政策
              </h1>
              <p className="text-sm text-stone-500">最後更新：2025 年 1 月 25 日</p>
            </div>
          </div>

          {/* Policy Content */}
          <div className="prose prose-invert prose-stone max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">1. 資料收集</h2>
              <p className="text-stone-400 leading-relaxed">
                《弧度歸零》（以下簡稱「本遊戲」）在您使用服務時，可能收集以下資訊：
              </p>
              <ul className="list-disc list-inside text-stone-400 space-y-2 mt-3">
                <li>帳號資訊：電子郵件地址（用於會員驗證）</li>
                <li>遊戲進度：您的存檔資料、選擇記錄</li>
                <li>使用數據：遊戲時長、功能使用情況</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">2. 資料使用目的</h2>
              <p className="text-stone-400 leading-relaxed">
                我們收集的資料僅用於以下目的：
              </p>
              <ul className="list-disc list-inside text-stone-400 space-y-2 mt-3">
                <li>提供並改善遊戲服務</li>
                <li>驗證會員身份與權限</li>
                <li>儲存您的遊戲進度</li>
                <li>分析使用情況以優化體驗</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">3. 資料保護</h2>
              <p className="text-stone-400 leading-relaxed">
                我們採取適當的技術與組織措施保護您的個人資料，包括：
              </p>
              <ul className="list-disc list-inside text-stone-400 space-y-2 mt-3">
                <li>資料傳輸加密（HTTPS）</li>
                <li>安全的資料庫存儲</li>
                <li>定期安全審查</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">4. 第三方服務</h2>
              <p className="text-stone-400 leading-relaxed">
                本遊戲使用以下第三方服務：
              </p>
              <ul className="list-disc list-inside text-stone-400 space-y-2 mt-3">
                <li>主站會員系統（member.momo-chao.com）：用於帳號驗證</li>
                <li>雲端託管服務：用於遊戲部署與資料存儲</li>
              </ul>
              <p className="text-stone-400 leading-relaxed mt-3">
                這些第三方服務可能有其自己的隱私政策，建議您查閱相關條款。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">5. Cookie 與本地存儲</h2>
              <p className="text-stone-400 leading-relaxed">
                本遊戲使用瀏覽器本地存儲（Local Storage）來：
              </p>
              <ul className="list-disc list-inside text-stone-400 space-y-2 mt-3">
                <li>保存您的遊戲進度與設定</li>
                <li>記住您的登入狀態</li>
                <li>改善遊戲體驗</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">6. 您的權利</h2>
              <p className="text-stone-400 leading-relaxed">
                您有權：
              </p>
              <ul className="list-disc list-inside text-stone-400 space-y-2 mt-3">
                <li>查詢我們持有的您的個人資料</li>
                <li>要求更正不正確的資料</li>
                <li>要求刪除您的資料</li>
                <li>撤回同意</li>
              </ul>
              <p className="text-stone-400 leading-relaxed mt-3">
                如需行使上述權利，請透過主站聯繫我們。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">7. 政策更新</h2>
              <p className="text-stone-400 leading-relaxed">
                我們可能不定期更新本隱私政策。更新後的政策將在本頁面公布，並標註更新日期。建議您定期查閱以了解最新資訊。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">8. 聯繫我們</h2>
              <p className="text-stone-400 leading-relaxed">
                如果您對本隱私政策有任何疑問，請透過主站（
                <a 
                  href="https://member.momo-chao.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                >
                  member.momo-chao.com
                </a>
                ）與我們聯繫。
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-stone-800">
        <div className="max-w-4xl mx-auto text-center text-sm text-stone-500">
          <p>© 2025 弧度歸零 Arc to Zero. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
