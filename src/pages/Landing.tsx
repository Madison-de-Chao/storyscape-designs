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

// Import logos
import yuanyiLogo from '@/assets/logos/yuanyi-universe.png';
import rainbowLogo from '@/assets/logos/rainbow-sanctuary.png';
import maisonLogo from '@/assets/logos/maison-de-chao.png';

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
      description: '你會做出選擇，但我們不賣「分歧結局」；我們賣的是「分歧視角」。同一段旅程，因為你的回應不同，你看見的自己也不同。'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: '完整性哲學體驗',
      description: '完整不是沒有缺口，而是能不再害怕缺口。遊戲用故事與互動，讓你在安全的情境裡練習：看見、承認、整合、再選一次。'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: '療癒主題',
      description: '聚焦完美主義、自我否定、自我接納等議題。你不是來被評分的，你是來把選擇權拿回來的。'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: '精美視覺',
      description: '每個場景皆以沉浸式氛圍設計，讓情緒與意象更具體、更可感。'
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
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={rainbowLogo} 
              alt="虹靈御所" 
              className="h-10 sm:h-12 w-auto"
            />
          </Link>
          <div className="flex items-center gap-3">
            {!isAuthenticated() && (
              <>
                <a
                  href="https://member.momo-chao.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-stone-400 hover:text-amber-400 transition-colors"
                >
                  登入
                </a>
                <a
                  href="https://member.momo-chao.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-amber-600/20 text-amber-400 hover:bg-amber-600/30 transition-colors"
                >
                  註冊
                </a>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
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
            {/* Yuanyi Universe Logo */}
            <motion.img
              src={yuanyiLogo}
              alt="元壹宇宙 Yuanyi Universe"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="h-16 sm:h-20 w-auto mx-auto mb-6"
            />

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

          <div className="grid sm:grid-cols-2 gap-6">
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
                <p className="text-sm text-stone-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-8"
            style={{ fontFamily: "'Noto Serif TC', serif" }}
          >
            為什麼這是體驗完整性哲學最有趣的方法？
          </motion.h2>

          <div className="space-y-4 mb-12">
            {[
              '因為你不是在「看故事」，你是在「用回應照見自己」。',
              '因為你不需要完美選擇；你只需要誠實面對當下的反應。',
              '因為每次重玩不是為了刷分，而是為了練習：不逃避缺口，也不被缺口吞沒。'
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-stone-800/30 border border-stone-700/30"
              >
                <span className="text-amber-400 font-bold shrink-0">•</span>
                <p className="text-stone-300 leading-relaxed">{reason}</p>
              </motion.div>
            ))}
          </div>

          {/* Suggested Gameplay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-gradient-to-br from-amber-900/20 to-stone-900/50 border border-amber-500/20"
          >
            <h3 
              className="text-xl font-semibold mb-4 text-amber-400"
              style={{ fontFamily: "'Noto Serif TC', serif" }}
            >
              建議玩法
            </h3>
            <div className="space-y-3">
              {[
                { round: '第一次', tip: '照直覺玩，不求正確。' },
                { round: '第二次', tip: '挑一個你最常逃避的瞬間，改成「不一樣的回應」。' },
                { round: '第三次', tip: '比較兩次的差別——你害怕的是什麼？你想守住的是什麼？' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-xs font-medium text-amber-500 bg-amber-500/10 px-2 py-1 rounded shrink-0">
                    {item.round}
                  </span>
                  <p className="text-sm text-stone-300">{item.tip}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
      <footer className="py-12 px-4 border-t border-stone-800">
        <div className="max-w-6xl mx-auto">
          {/* Partner Section */}
          <div className="flex flex-col items-center mb-8">
            <p className="text-xs text-stone-500 mb-3">合作夥伴</p>
            <a 
              href="https://member.momo-chao.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <img 
                src={maisonLogo} 
                alt="MAISON DE CHAO 超烜創意" 
                className="h-16 sm:h-20 w-auto"
              />
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-500 pt-6 border-t border-stone-800/50">
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
        </div>
      </footer>
    </div>
  );
};

export default Landing;
