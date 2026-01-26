import { Link } from "react-router-dom";
import { useState } from "react";
import { Instagram, Youtube, Facebook, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import logoMaisonDeChao from "@/assets/logos/maison-de-chao.png";
import logoHongling from "@/assets/logos/rainbow-sanctuary.png";

const currentYear = new Date().getFullYear();

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/momo_chao_/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/momochao.tw", label: "Facebook" },
  { icon: Youtube, href: "https://www.youtube.com/@momochao", label: "YouTube" },
];

const footerLinks = {
  explore: [
    { label: "命理報告", href: "/reports" },
    { label: "超烜遊戲", href: "/games" },
    { label: "元壹筆記", href: "/notes-public" },
    { label: "元壹宇宙", href: "/universe" },
  ],
  external: [
    { label: "元壹宇宙", href: "https://www.yyuniverse.com/", external: true },
    { label: "默默超思維訓練系統", href: "https://mmclogic.com/", external: true },
    { label: "元壹占卜系統", href: "https://mirror.yyuniverse.com/", external: true },
    { label: "四時八字人生兵法", href: "https://bazi.rainbow-sanctuary.com/", external: true },
  ],
  about: [
    { label: "關於默默超", href: "/about" },
    { label: "隱私政策", href: "/privacy" },
    { label: "使用條款", href: "/terms" },
  ],
};

const PublicFooter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("請輸入電子郵件地址");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("請輸入有效的電子郵件地址");
      return;
    }
    
    setIsSubscribing(true);
    
    try {
      const response = await fetch('https://yrdtgwoxxjksesynrjss.supabase.co/functions/v1/newsletter-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          source: 'arctozero',
          metadata: { campaign: 'footer' }
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '訂閱失敗');
      }

      toast.success("訂閱成功！感謝您的支持");
      setEmail("");
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error(error instanceof Error ? error.message : "訂閱失敗，請稍後再試");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-stone-950 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand with Logos */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <a href="https://member.momo-chao.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src={logoMaisonDeChao} 
                  alt="MAISON DE CHAO" 
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
              <span className="text-stone-600">×</span>
              <Link to="/">
                <img 
                  src={logoHongling} 
                  alt="虹靈御所" 
                  className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed mb-4">
              鏡子非劇本，真實即命運。
              <br />
              我們不預測未來，只幫你看清現在。
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-stone-800/50 flex items-center justify-center text-stone-400 hover:bg-amber-500/20 hover:text-amber-400 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-sm font-semibold text-stone-200 mb-4">探索</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="text-sm font-semibold text-stone-200 mb-4">生態系統</h4>
            <ul className="space-y-2">
              {footerLinks.external.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-stone-200 mb-4">訂閱電子報</h4>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-stone-800/50 border-stone-700 text-stone-100 placeholder:text-stone-500 h-10 flex-1"
              />
              <Button 
                type="submit" 
                size="icon"
                disabled={isSubscribing}
                className="h-10 w-10 bg-amber-600 hover:bg-amber-500 shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            © {currentYear} 超烜創意 / 虹靈御所
          </p>

          <div className="flex items-center gap-4 text-xs text-stone-500">
            <Link to="/privacy" className="hover:text-stone-300 transition-colors">
              隱私政策
            </Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-stone-300 transition-colors">
              使用條款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
