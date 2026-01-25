import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Play, 
  ExternalLink, 
  UserPlus, 
  LogIn, 
  Sparkles,
  BookOpen,
  Heart,
  Star,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMemberStore } from '@/stores/memberStore';

// Import cover images
import yi1Cover from '@/assets/covers/yi1-cover.png';
import yi2Cover from '@/assets/covers/yi2-cover.png';

const Landing = () => {
  const navigate = useNavigate();
  const { isAuthenticated, member } = useMemberStore();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnterGame = () => {
    navigate('/game');
  };

  // Mask email for privacy display (e.g., momo****@gmail.com)
  const maskEmail = (email: string) => {
    const [localPart, domain] = email.split('@');
    if (!domain) return email;
    const visibleChars = Math.min(4, localPart.length);
    const masked = localPart.slice(0, visibleChars) + '****';
    return `${masked}@${domain}`;
  };

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: '互動式敘事',
      description: '用選擇推進故事，也用選擇照見自己。每一次回應，都會留下痕跡。'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: '療癒主題',
      description: '聚焦完美主義、自我否定、受害者濾鏡、自我接納等核心議題，讓你能「看見 → 理解 → 轉向」。'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: '精美視覺',
      description: '每個場景皆以沉浸式體驗設計，強化情緒與意象的臨場感。'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: '多結局設計',
      description: '你的每一個選擇都會影響走向；重玩能解鎖隱藏線索與不同視角。'
    }
  ];

  const announcements = [
    {
      date: '2025-01-25',
      title: '公開測試開始',
      content: '《弧度歸零》第一章正式開放公測，歡迎所有會員免費體驗。'
    },
    {
      date: '2025-01-20',
      title: '會員系統上線',
      content: '主站會員系統已整合完成，使用主站帳號即可登入遊玩。'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-900/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo / Title */}
            <h1 
              className="text-5xl sm:text-7xl font-bold mb-4 tracking-wider"
              style={{ fontFamily: "'Noto Serif TC', serif" }}
            >
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                弧度歸零
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-stone-400 mb-2">Arc to Zero</p>
            
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl text-stone-300 mb-2 font-light"
              style={{ fontFamily: "'Noto Serif TC', serif" }}
            >
              完整不是沒有缺口，完整是不再害怕缺口。
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm sm:text-base text-stone-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              這是一段互動式的自我探索旅程：你會看見自己的模式，學會與不完美共處，並把選擇權拿回來。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={handleEnterGame}
                size="lg"
                className="
                  px-8 py-6 text-lg
                  bg-gradient-to-r from-amber-600 to-amber-700 
                  hover:from-amber-500 hover:to-amber-600
                  text-white font-medium
                  shadow-lg shadow-amber-500/25
                  transition-all
                "
              >
                <Play className="w-5 h-5 mr-2" />
                {isAuthenticated() ? '進入遊戲' : '開始體驗'}
              </Button>

              {!isAuthenticated() && (
                <div className="flex gap-3">
                  <a
                    href="https://member.momo-chao.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-stone-600 hover:border-amber-500/50 text-stone-300 hover:text-amber-400 transition-colors"
                  >
                    <UserPlus className="w-4 h-4" />
                    註冊帳號
                  </a>
                  <a
                    href="https://member.momo-chao.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-stone-600 hover:border-amber-500/50 text-stone-300 hover:text-amber-400 transition-colors"
                  >
                    <LogIn className="w-4 h-4" />
                    會員登入
                  </a>
                </div>
              )}
            </motion.div>

            {/* Member Status */}
            {isAuthenticated() && member && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-4 text-sm text-stone-500"
              >
                已登入：{maskEmail(member.email)}
              </motion.p>
            )}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 text-stone-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Game Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "'Noto Serif TC', serif" }}
          >
            遊戲預覽
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Part 1 Cover */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-stone-700/50 shadow-2xl">
                <img 
                  src={yi1Cover} 
                  alt="弧度歸零 第一章" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs text-stone-500 mb-1">弧度歸零｜第一章</p>
                  <h3 className="text-xl font-bold mb-2">破碎與重生</h3>
                  <p className="text-sm text-stone-400 leading-relaxed">探索內心的缺口，學習與不完美共處，建立「看見自己」的第一條路徑。</p>
                  <span className="inline-block mt-3 px-3 py-1 text-xs bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                    開放遊玩
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Part 2 Cover */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-stone-700/50 shadow-2xl">
                <img 
                  src={yi2Cover} 
                  alt="弧度歸零 第二章" 
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-[50%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs text-stone-500 mb-1">弧度歸零｜第二章</p>
                  <h3 className="text-xl font-bold mb-2">療癒之路</h3>
                  <p className="text-sm text-stone-400 leading-relaxed">延續第一章的旅程，深化自我理解與修復，開始練習新的選擇方式。</p>
                  <span className="inline-block mt-3 px-3 py-1 text-xs bg-stone-500/20 text-stone-400 rounded-full border border-stone-500/30">
                    製作中
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-stone-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "'Noto Serif TC', serif" }}
          >
            遊戲特色
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-stone-800/50 border border-stone-700/50 hover:border-amber-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-stone-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: "'Noto Serif TC', serif" }}
          >
            最新公告
          </motion.h2>

          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <motion.div
                key={announcement.date}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-stone-800/50 border border-stone-700/50"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs text-stone-500 whitespace-nowrap pt-1">
                    {announcement.date}
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">{announcement.title}</h3>
                    <p className="text-sm text-stone-400">{announcement.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 bg-gradient-to-t from-stone-950 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ fontFamily: "'Noto Serif TC', serif" }}
            >
              準備好開始你的旅程了嗎？
            </h2>
            <p className="text-stone-400 mb-8">
              免費註冊即可體驗完整遊戲內容。
            </p>
            <Button
              onClick={handleEnterGame}
              size="lg"
              className="
                px-10 py-6 text-lg
                bg-gradient-to-r from-amber-600 to-amber-700 
                hover:from-amber-500 hover:to-amber-600
                text-white font-medium
                shadow-lg shadow-amber-500/25
              "
            >
              <Play className="w-5 h-5 mr-2" />
              立即開始
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-stone-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-500">
          <p>© 2025 弧度歸零 Arc to Zero. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="hover:text-stone-300 transition-colors"
            >
              隱私政策
            </Link>
            <Link
              to="/terms"
              className="hover:text-stone-300 transition-colors"
            >
              使用條款
            </Link>
            <a
              href="https://member.momo-chao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-300 transition-colors flex items-center gap-1"
            >
              主站
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
