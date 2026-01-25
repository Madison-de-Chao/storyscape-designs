import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
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
              <FileText className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h1 
                className="text-3xl font-bold"
                style={{ fontFamily: "'Noto Serif TC', serif" }}
              >
                使用條款
              </h1>
              <p className="text-sm text-stone-500">最後更新：2025 年 1 月 25 日</p>
            </div>
          </div>

          {/* Terms Content */}
          <div className="prose prose-invert prose-stone max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">1. 服務說明</h2>
              <p className="text-stone-400 leading-relaxed">
                《弧度歸零》（以下簡稱「本遊戲」）是一款互動式敘事遊戲，由本站開發並營運。本使用條款規範您使用本遊戲的權利與義務。使用本遊戲即表示您同意遵守本條款。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">2. 會員資格</h2>
              <p className="text-stone-400 leading-relaxed">
                使用本遊戲需要透過主站（member.momo-chao.com）註冊會員帳號。您同意：
              </p>
              <ul className="list-disc list-inside text-stone-400 space-y-2 mt-3">
                <li>提供真實、準確的註冊資訊</li>
                <li>妥善保管您的帳號密碼</li>
                <li>對使用您帳號進行的所有活動負責</li>
                <li>不與他人共享帳號</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">3. 智慧財產權</h2>
              <p className="text-stone-400 leading-relaxed">
                本遊戲的所有內容，包括但不限於：
              </p>
              <ul className="list-disc list-inside text-stone-400 space-y-2 mt-3">
                <li>遊戲劇本、對話、故事情節</li>
                <li>角色設計、美術素材、音樂音效</li>
                <li>程式碼、介面設計</li>
                <li>商標、標誌</li>
              </ul>
              <p className="text-stone-400 leading-relaxed mt-3">
                均為本站或其授權方所有，受著作權法及其他智慧財產權法律保護。未經書面授權，您不得複製、修改、散布或以任何方式使用這些內容。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">4. 使用規範</h2>
              <p className="text-stone-400 leading-relaxed">
                使用本遊戲時，您同意不會：
              </p>
              <ul className="list-disc list-inside text-stone-400 space-y-2 mt-3">
                <li>使用任何自動化工具或腳本</li>
                <li>嘗試破解、反編譯或逆向工程本遊戲</li>
                <li>干擾或破壞遊戲伺服器或網路</li>
                <li>利用漏洞或錯誤獲取不當利益</li>
                <li>散布遊戲內容的未授權副本</li>
                <li>進行任何違法或損害他人權益的行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">5. 服務變更與終止</h2>
              <p className="text-stone-400 leading-relaxed">
                我們保留以下權利：
              </p>
              <ul className="list-disc list-inside text-stone-400 space-y-2 mt-3">
                <li>隨時修改、更新或終止本遊戲的任何部分</li>
                <li>暫停或終止違反本條款的使用者帳號</li>
                <li>因維護或其他原因暫停服務</li>
              </ul>
              <p className="text-stone-400 leading-relaxed mt-3">
                我們會盡量提前通知重大變更，但不保證在所有情況下都能做到。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">6. 免責聲明</h2>
              <p className="text-stone-400 leading-relaxed">
                本遊戲按「現狀」提供。我們不保證：
              </p>
              <ul className="list-disc list-inside text-stone-400 space-y-2 mt-3">
                <li>服務不會中斷或無錯誤</li>
                <li>遊戲內容符合您的特定需求</li>
                <li>存檔資料不會丟失</li>
              </ul>
              <p className="text-stone-400 leading-relaxed mt-3">
                在法律允許的最大範圍內，我們不對因使用本遊戲而產生的任何直接、間接、附帶或後果性損害負責。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">7. 遊戲內容聲明</h2>
              <p className="text-stone-400 leading-relaxed">
                本遊戲包含探索內心情緒與自我成長的主題。遊戲內容僅供娛樂與自我反思之用，不構成專業心理諮詢或治療建議。如您有心理健康方面的需求，請尋求專業協助。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">8. 條款修改</h2>
              <p className="text-stone-400 leading-relaxed">
                我們可能不定期修改本使用條款。修改後的條款將在本頁面公布，並標註更新日期。繼續使用本遊戲即表示您接受修改後的條款。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">9. 準據法</h2>
              <p className="text-stone-400 leading-relaxed">
                本條款受中華民國法律管轄。如發生爭議，雙方同意以臺灣臺北地方法院為第一審管轄法院。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-stone-200 mb-4">10. 聯繫我們</h2>
              <p className="text-stone-400 leading-relaxed">
                如果您對本使用條款有任何疑問，請透過主站（
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

export default Terms;
