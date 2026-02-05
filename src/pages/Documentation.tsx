 import { useState } from 'react';
 import { motion } from 'framer-motion';
 import { 
   ArrowLeft, 
   Download, 
   FileText, 
   Users, 
   Route, 
   Database, 
   Share2,
   BookOpen,
   ChevronDown,
   ChevronRight,
   ExternalLink,
   Shield,
   Layers,
   Code,
   Palette,
   FileCode
 } from 'lucide-react';
 import { Link } from 'react-router-dom';
 import { Button } from '@/components/ui/button';
 import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
 import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
 import { generatePDF, generateWord, generateWhitepaper } from '@/lib/documentGenerator';
 
 const Documentation = () => {
   const [isGenerating, setIsGenerating] = useState<string | null>(null);
 
   const handleDownload = async (type: 'pdf' | 'word' | 'whitepaper') => {
     setIsGenerating(type);
     try {
       if (type === 'pdf') {
         await generatePDF();
       } else if (type === 'word') {
         await generateWord();
       } else {
         await generateWhitepaper();
       }
     } catch (error) {
       console.error('Download failed:', error);
     }
     setIsGenerating(null);
   };
 
   return (
     <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-100">
       {/* Header */}
       <header className="sticky top-0 z-20 bg-stone-950/80 backdrop-blur-sm border-b border-stone-800">
         <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
           <Link 
             to="/" 
             className="flex items-center gap-2 text-stone-400 hover:text-amber-400 transition-colors"
           >
             <ArrowLeft className="w-4 h-4" />
             <span className="text-sm">返回首頁</span>
           </Link>
           
           {/* Download Buttons */}
           <div className="flex items-center gap-2">
             <Button
               variant="outline"
               size="sm"
               onClick={() => handleDownload('pdf')}
               disabled={!!isGenerating}
               className="border-stone-700 text-stone-300 hover:text-amber-400 hover:border-amber-500/50"
             >
               <Download className="w-4 h-4 mr-1" />
               {isGenerating === 'pdf' ? '生成中...' : 'PDF'}
             </Button>
             <Button
               variant="outline"
               size="sm"
               onClick={() => handleDownload('word')}
               disabled={!!isGenerating}
               className="border-stone-700 text-stone-300 hover:text-amber-400 hover:border-amber-500/50"
             >
               <FileText className="w-4 h-4 mr-1" />
               {isGenerating === 'word' ? '生成中...' : 'Word'}
             </Button>
             <Button
               size="sm"
               onClick={() => handleDownload('whitepaper')}
               disabled={!!isGenerating}
               className="bg-amber-600 hover:bg-amber-500 text-white"
             >
               <BookOpen className="w-4 h-4 mr-1" />
               {isGenerating === 'whitepaper' ? '生成中...' : '系統白皮書'}
             </Button>
           </div>
         </div>
       </header>
 
       {/* Main Content */}
       <main className="max-w-6xl mx-auto px-4 py-8">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
         >
           {/* Title */}
           <div className="flex items-center gap-3 mb-8">
             <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center border border-amber-500/30">
               <FileCode className="w-7 h-7 text-amber-400" />
             </div>
             <div>
               <h1 
                 className="text-3xl font-bold"
                 style={{ fontFamily: "'Noto Serif TC', serif" }}
               >
                 系統文檔中心
               </h1>
               <p className="text-sm text-stone-500">弧度歸零 Arc to Zero - 完整技術與功能文檔</p>
             </div>
           </div>
 
           {/* Tabs Navigation */}
           <Tabs defaultValue="public-pages" className="space-y-6">
             <TabsList className="bg-stone-800/50 border border-stone-700/50 p-1 flex-wrap h-auto gap-1">
               <TabsTrigger value="public-pages" className="data-[state=active]:bg-amber-600/20 data-[state=active]:text-amber-400">
                 <Layers className="w-4 h-4 mr-1.5" />
                 公開頁面
               </TabsTrigger>
               <TabsTrigger value="membership" className="data-[state=active]:bg-amber-600/20 data-[state=active]:text-amber-400">
                 <Users className="w-4 h-4 mr-1.5" />
                 會員系統
               </TabsTrigger>
               <TabsTrigger value="routes" className="data-[state=active]:bg-amber-600/20 data-[state=active]:text-amber-400">
                 <Route className="w-4 h-4 mr-1.5" />
                 路由對照
               </TabsTrigger>
               <TabsTrigger value="sharing" className="data-[state=active]:bg-amber-600/20 data-[state=active]:text-amber-400">
                 <Share2 className="w-4 h-4 mr-1.5" />
                 文件分享
               </TabsTrigger>
               <TabsTrigger value="architecture" className="data-[state=active]:bg-amber-600/20 data-[state=active]:text-amber-400">
                 <Database className="w-4 h-4 mr-1.5" />
                 技術架構
               </TabsTrigger>
             </TabsList>
 
             {/* Tab Contents */}
             <TabsContent value="public-pages" className="space-y-6">
               <PublicPagesContent />
             </TabsContent>
 
             <TabsContent value="membership" className="space-y-6">
               <MembershipContent />
             </TabsContent>
 
             <TabsContent value="routes" className="space-y-6">
               <RoutesContent />
             </TabsContent>
 
             <TabsContent value="sharing" className="space-y-6">
               <SharingContent />
             </TabsContent>
 
             <TabsContent value="architecture" className="space-y-6">
               <ArchitectureContent />
             </TabsContent>
           </Tabs>
         </motion.div>
       </main>
 
       {/* Footer */}
       <footer className="py-8 px-4 border-t border-stone-800 mt-12">
         <div className="max-w-6xl mx-auto text-center text-sm text-stone-500">
           <p>© 2025 弧度歸零 Arc to Zero. 系統文檔 v1.0</p>
         </div>
       </footer>
     </div>
   );
 };
 
 // ============ Public Pages Content ============
 const PublicPagesContent = () => (
   <div className="space-y-6">
     <SectionCard
       icon={<Palette className="w-5 h-5" />}
       title="公開頁面內容總覽"
       description="完整收錄各頁面呈現的標題、描述、表格、引言等實際文字內容"
     >
       <Accordion type="multiple" className="w-full">
         {/* Landing Page */}
         <AccordionItem value="landing" className="border-stone-700/50">
           <AccordionTrigger className="text-stone-200 hover:text-amber-400">
             首頁 (Landing Page) - /
           </AccordionTrigger>
           <AccordionContent className="text-stone-400 space-y-4">
             <div className="space-y-3 p-4 bg-stone-800/30 rounded-lg">
               <h4 className="font-medium text-stone-200">Hero 區塊</h4>
               <div className="space-y-2 text-sm">
                 <p><span className="text-amber-400">主標題：</span>弧度歸零</p>
                 <p><span className="text-amber-400">副標題：</span>Arc to Zero</p>
                 <p><span className="text-amber-400">標語：</span>完整不是沒有缺口，完整是不再害怕缺口。</p>
                 <p><span className="text-amber-400">描述：</span>這是一段互動式的自我探索旅程：你會看見自己的模式，學會與不完美共處，並把選擇權拿回來。</p>
               </div>
             </div>
             
             <div className="space-y-3 p-4 bg-stone-800/30 rounded-lg">
               <h4 className="font-medium text-stone-200">遊戲預覽區塊</h4>
               <div className="space-y-2 text-sm">
                 <div className="border-l-2 border-amber-500/50 pl-3">
                   <p className="text-stone-200">第一章：破碎與重生</p>
                   <p>探索內心的缺口，學習與不完美共處，建立「看見自己」的第一條路徑。</p>
                   <p className="text-emerald-400 text-xs mt-1">狀態：開放遊玩</p>
                 </div>
                 <div className="border-l-2 border-stone-500/50 pl-3">
                   <p className="text-stone-200">第二章：療癒之路</p>
                   <p>延續第一章的旅程，深化自我理解與修復，開始練習新的選擇方式。</p>
                   <p className="text-stone-500 text-xs mt-1">狀態：製作中</p>
                 </div>
               </div>
             </div>
 
             <div className="space-y-3 p-4 bg-stone-800/30 rounded-lg">
               <h4 className="font-medium text-stone-200">遊戲特色</h4>
               <div className="grid sm:grid-cols-2 gap-3 text-sm">
                 <div className="p-3 bg-stone-900/50 rounded-lg">
                   <p className="text-amber-400 font-medium">互動式敘事</p>
                   <p className="text-xs mt-1">你會做出選擇，但我們不賣「分歧結局」；我們賣的是「分歧視角」。</p>
                 </div>
                 <div className="p-3 bg-stone-900/50 rounded-lg">
                   <p className="text-amber-400 font-medium">完整性哲學體驗</p>
                   <p className="text-xs mt-1">完整不是沒有缺口，而是能不再害怕缺口。</p>
                 </div>
                 <div className="p-3 bg-stone-900/50 rounded-lg">
                   <p className="text-amber-400 font-medium">療癒主題</p>
                   <p className="text-xs mt-1">聚焦完美主義、自我否定、自我接納等議題。</p>
                 </div>
                 <div className="p-3 bg-stone-900/50 rounded-lg">
                   <p className="text-amber-400 font-medium">精美視覺</p>
                   <p className="text-xs mt-1">每個場景皆以沉浸式氛圍設計。</p>
                 </div>
               </div>
             </div>
 
             <div className="space-y-3 p-4 bg-stone-800/30 rounded-lg">
               <h4 className="font-medium text-stone-200">完整性哲學說明</h4>
               <ul className="text-sm space-y-2 list-disc list-inside">
                 <li>因為你不是在「看故事」，你是在「用回應照見自己」。</li>
                 <li>因為你不需要完美選擇；你只需要誠實面對當下的反應。</li>
                 <li>因為每次重玩不是為了刷分，而是為了練習：不逃避缺口，也不被缺口吞沒。</li>
               </ul>
             </div>
 
             <div className="space-y-3 p-4 bg-stone-800/30 rounded-lg">
               <h4 className="font-medium text-stone-200">建議玩法</h4>
               <ul className="text-sm space-y-2">
                 <li className="flex gap-2">
                   <span className="text-amber-400">1.</span>
                   <span>第一次：快速通關，憑直覺選擇，不追求「最佳解」。</span>
                 </li>
                 <li className="flex gap-2">
                   <span className="text-amber-400">2.</span>
                   <span>第二次：慢慢重玩，留意每個選項觸發的情緒波動。</span>
                 </li>
                 <li className="flex gap-2">
                   <span className="text-amber-400">3.</span>
                   <span>隨時回顧：用「對話歷史」功能，回顧你的選擇軌跡。</span>
                 </li>
               </ul>
             </div>
 
             <div className="space-y-3 p-4 bg-stone-800/30 rounded-lg">
               <h4 className="font-medium text-stone-200">公告區塊</h4>
               <div className="space-y-2 text-sm">
                 <div className="flex gap-3 items-start">
                   <span className="text-xs text-stone-500 shrink-0">2025-01-25</span>
                   <div>
                     <p className="text-stone-200">公開測試開始</p>
                     <p className="text-xs">《弧度歸零》第一章正式開放公測，歡迎所有會員免費體驗。</p>
                   </div>
                 </div>
                 <div className="flex gap-3 items-start">
                   <span className="text-xs text-stone-500 shrink-0">2025-01-20</span>
                   <div>
                     <p className="text-stone-200">會員系統上線</p>
                     <p className="text-xs">主站會員系統已整合完成，使用主站帳號即可登入遊玩。</p>
                   </div>
                 </div>
               </div>
             </div>
           </AccordionContent>
         </AccordionItem>
 
         {/* Privacy Page */}
         <AccordionItem value="privacy" className="border-stone-700/50">
           <AccordionTrigger className="text-stone-200 hover:text-amber-400">
             隱私政策頁 - /privacy
           </AccordionTrigger>
           <AccordionContent className="text-stone-400 space-y-4">
             <div className="p-4 bg-stone-800/30 rounded-lg">
               <p className="text-xs text-stone-500 mb-2">最後更新：2025 年 1 月 25 日</p>
               <div className="space-y-4 text-sm">
                 <Section title="1. 資料收集">
                   <ul className="list-disc list-inside space-y-1">
                     <li>帳號資訊：電子郵件地址（用於會員驗證）</li>
                     <li>遊戲進度：您的存檔資料、選擇記錄</li>
                     <li>使用數據：遊戲時長、功能使用情況</li>
                   </ul>
                 </Section>
                 <Section title="2. 資料使用目的">
                   <ul className="list-disc list-inside space-y-1">
                     <li>提供並改善遊戲服務</li>
                     <li>驗證會員身份與權限</li>
                     <li>儲存您的遊戲進度</li>
                     <li>分析使用情況以優化體驗</li>
                   </ul>
                 </Section>
                 <Section title="3. 資料保護">
                   <ul className="list-disc list-inside space-y-1">
                     <li>資料傳輸加密（HTTPS）</li>
                     <li>安全的資料庫存儲</li>
                     <li>定期安全審查</li>
                   </ul>
                 </Section>
                 <Section title="4. 第三方服務">
                   <ul className="list-disc list-inside space-y-1">
                     <li>主站會員系統（member.momo-chao.com）：用於帳號驗證</li>
                     <li>雲端託管服務：用於遊戲部署與資料存儲</li>
                   </ul>
                 </Section>
                 <Section title="5. Cookie 與本地存儲">
                   <ul className="list-disc list-inside space-y-1">
                     <li>保存您的遊戲進度與設定</li>
                     <li>記住您的登入狀態</li>
                     <li>改善遊戲體驗</li>
                   </ul>
                 </Section>
                 <Section title="6. 您的權利">
                   <ul className="list-disc list-inside space-y-1">
                     <li>查詢我們持有的您的個人資料</li>
                     <li>要求更正不正確的資料</li>
                     <li>要求刪除您的資料</li>
                     <li>撤回同意</li>
                   </ul>
                 </Section>
               </div>
             </div>
           </AccordionContent>
         </AccordionItem>
 
         {/* Terms Page */}
         <AccordionItem value="terms" className="border-stone-700/50">
           <AccordionTrigger className="text-stone-200 hover:text-amber-400">
             使用條款頁 - /terms
           </AccordionTrigger>
           <AccordionContent className="text-stone-400 space-y-4">
             <div className="p-4 bg-stone-800/30 rounded-lg">
               <p className="text-xs text-stone-500 mb-2">最後更新：2025 年 1 月 25 日</p>
               <div className="space-y-4 text-sm">
                 <Section title="1. 服務說明">
                   <p>《弧度歸零》是一款互動式敘事遊戲，由本站開發並營運。本使用條款規範您使用本遊戲的權利與義務。</p>
                 </Section>
                 <Section title="2. 會員資格">
                   <ul className="list-disc list-inside space-y-1">
                     <li>提供真實、準確的註冊資訊</li>
                     <li>妥善保管您的帳號密碼</li>
                     <li>對使用您帳號進行的所有活動負責</li>
                     <li>不與他人共享帳號</li>
                   </ul>
                 </Section>
                 <Section title="3. 智慧財產權">
                   <p>本遊戲的所有內容均受著作權法及其他智慧財產權法律保護，包括：遊戲劇本、對話、故事情節、角色設計、美術素材、音樂音效、程式碼、介面設計、商標、標誌。</p>
                 </Section>
                 <Section title="4. 使用規範">
                   <ul className="list-disc list-inside space-y-1">
                     <li>禁止使用任何自動化工具或腳本</li>
                     <li>禁止嘗試破解、反編譯或逆向工程</li>
                     <li>禁止干擾或破壞遊戲伺服器或網路</li>
                     <li>禁止利用漏洞或錯誤獲取不當利益</li>
                   </ul>
                 </Section>
                 <Section title="7. 遊戲內容聲明">
                   <p>本遊戲包含探索內心情緒與自我成長的主題。遊戲內容僅供娛樂與自我反思之用，不構成專業心理諮詢或治療建議。</p>
                 </Section>
                 <Section title="9. 準據法">
                   <p>本條款受中華民國法律管轄。如發生爭議，雙方同意以臺灣臺北地方法院為第一審管轄法院。</p>
                 </Section>
               </div>
             </div>
           </AccordionContent>
         </AccordionItem>
 
         {/* Game Page */}
         <AccordionItem value="game" className="border-stone-700/50">
           <AccordionTrigger className="text-stone-200 hover:text-amber-400">
             遊戲頁面 - /game
           </AccordionTrigger>
           <AccordionContent className="text-stone-400 space-y-4">
             <div className="p-4 bg-stone-800/30 rounded-lg space-y-4 text-sm">
               <Section title="標題畫面元素">
                 <ul className="list-disc list-inside space-y-1">
                   <li>弧度符號動畫 - 半圓弧代表180度起始狀態</li>
                   <li>標題：弧度歸零 / ARC ZERO</li>
                   <li>標語：完整不是沒有缺口，完整是不再害怕缺口</li>
                   <li>繼續遊戲按鈕（顯示最近存檔章節）</li>
                   <li>第一章：壹 - 封面入口</li>
                   <li>第二章：伊 - 製作中狀態</li>
                 </ul>
               </Section>
               <Section title="功能按鈕">
                 <ul className="list-disc list-inside space-y-1">
                   <li>成就總覽 - 顯示解鎖/總數</li>
                   <li>藝廊 - 已解鎖圖片數量</li>
                   <li>AI 音效實驗室</li>
                   <li>AI 音樂生成器</li>
                 </ul>
               </Section>
               <Section title="遊戲內介面">
                 <ul className="list-disc list-inside space-y-1">
                   <li>場景圖片 - 漸進式載入與blur-up效果</li>
                   <li>對話框 - 打字機效果文字顯示</li>
                   <li>選項按鈕 - 分支選擇</li>
                   <li>弧度指示器 - 當前弧度值</li>
                   <li>月相指示器 - 陰影值視覺化</li>
                   <li>進度HUD - 章節進度</li>
                   <li>對話歷史 - 可回顧的對話記錄</li>
                 </ul>
               </Section>
             </div>
           </AccordionContent>
         </AccordionItem>
       </Accordion>
     </SectionCard>
   </div>
 );
 
 // ============ Membership Content ============
 const MembershipContent = () => (
   <div className="space-y-6">
     <SectionCard
       icon={<Users className="w-5 h-5" />}
       title="會員系統功能說明"
       description="完整的會員驗證、權限管理與狀態追蹤系統"
     >
       <div className="space-y-6">
         <div className="grid md:grid-cols-2 gap-4">
           <FeatureCard
             title="會員驗證機制"
             items={[
               '透過主站 API 進行會員身份驗證',
               '支援登入/註冊雙模式切換',
               '電子郵件格式驗證',
               '錯誤訊息即時反饋',
               '載入狀態動畫顯示'
             ]}
           />
           <FeatureCard
             title="會話管理"
             items={[
               '會話有效期限：7 天',
               '自動會話過期檢測',
               '本地持久化存儲 (Zustand + persist)',
               '跨頁面狀態同步',
               '安全登出機制'
             ]}
           />
         </div>
 
         <div className="p-4 bg-stone-800/30 rounded-lg">
           <h4 className="font-medium text-stone-200 mb-3">MemberGate 組件流程</h4>
           <div className="flex flex-wrap gap-2 items-center text-xs">
             <span className="px-2 py-1 bg-stone-700 rounded">訪問 /game</span>
             <ChevronRight className="w-4 h-4 text-stone-500" />
             <span className="px-2 py-1 bg-stone-700 rounded">檢查會話</span>
             <ChevronRight className="w-4 h-4 text-stone-500" />
             <span className="px-2 py-1 bg-amber-600/20 text-amber-400 rounded">未登入：顯示登入表單</span>
             <ChevronRight className="w-4 h-4 text-stone-500" />
             <span className="px-2 py-1 bg-stone-700 rounded">驗證 Email</span>
             <ChevronRight className="w-4 h-4 text-stone-500" />
             <span className="px-2 py-1 bg-emerald-600/20 text-emerald-400 rounded">成功：歡迎動畫</span>
             <ChevronRight className="w-4 h-4 text-stone-500" />
             <span className="px-2 py-1 bg-stone-700 rounded">進入遊戲</span>
           </div>
         </div>
 
         <div className="p-4 bg-stone-800/30 rounded-lg">
           <h4 className="font-medium text-stone-200 mb-3">會員狀態資料結構</h4>
           <pre className="text-xs bg-stone-900/50 p-3 rounded-lg overflow-x-auto">
 {`interface MemberInfo {
   email: string;           // 會員電子郵件
   hasAccess: boolean;      // 是否有存取權限
   entitlement?: {
     status: string;        // 權限狀態
     expiresAt: string;     // 過期時間
   };
   verifiedAt: number;      // 驗證時間戳
 }`}
           </pre>
         </div>
 
         <div className="grid md:grid-cols-2 gap-4">
           <div className="p-4 bg-stone-800/30 rounded-lg">
             <h4 className="font-medium text-stone-200 mb-2">錯誤處理</h4>
             <ul className="text-sm text-stone-400 space-y-1">
               <li>• user_not_found: 此信箱尚未註冊主站帳號</li>
               <li>• invalid_email: 請輸入有效的電子信箱</li>
               <li>• rate_limit_exceeded: 請求過於頻繁</li>
               <li>• network_error: 網路連線錯誤</li>
             </ul>
           </div>
           <div className="p-4 bg-stone-800/30 rounded-lg">
             <h4 className="font-medium text-stone-200 mb-2">MemberStatusBadge</h4>
             <ul className="text-sm text-stone-400 space-y-1">
               <li>• 固定於畫面左上角</li>
               <li>• 顯示已遮蔽的 Email</li>
               <li>• 動畫確認登出對話框</li>
               <li>• 防止誤觸設計</li>
             </ul>
           </div>
         </div>
       </div>
     </SectionCard>
   </div>
 );
 
 // ============ Routes Content ============
 const RoutesContent = () => (
   <div className="space-y-6">
     <SectionCard
       icon={<Route className="w-5 h-5" />}
       title="完整路由對照表"
       description="前端路由與管理後台完整路由清單"
     >
       <div className="space-y-6">
         <div className="p-4 bg-stone-800/30 rounded-lg">
           <h4 className="font-medium text-stone-200 mb-4">公開路由</h4>
           <div className="overflow-x-auto">
             <table className="w-full text-sm">
               <thead>
                 <tr className="border-b border-stone-700">
                   <th className="text-left py-2 px-3 text-stone-300">路徑</th>
                   <th className="text-left py-2 px-3 text-stone-300">頁面</th>
                   <th className="text-left py-2 px-3 text-stone-300">組件</th>
                   <th className="text-left py-2 px-3 text-stone-300">說明</th>
                 </tr>
               </thead>
               <tbody className="text-stone-400">
                 <tr className="border-b border-stone-800">
                   <td className="py-2 px-3 font-mono text-amber-400">/</td>
                   <td className="py-2 px-3">首頁</td>
                   <td className="py-2 px-3 font-mono text-xs">Landing.tsx</td>
                   <td className="py-2 px-3">網站入口、遊戲介紹</td>
                 </tr>
                 <tr className="border-b border-stone-800">
                   <td className="py-2 px-3 font-mono text-amber-400">/game</td>
                   <td className="py-2 px-3">遊戲</td>
                   <td className="py-2 px-3 font-mono text-xs">Game.tsx</td>
                   <td className="py-2 px-3">需會員驗證，遊戲主體</td>
                 </tr>
                 <tr className="border-b border-stone-800">
                   <td className="py-2 px-3 font-mono text-amber-400">/privacy</td>
                   <td className="py-2 px-3">隱私政策</td>
                   <td className="py-2 px-3 font-mono text-xs">Privacy.tsx</td>
                   <td className="py-2 px-3">隱私權政策說明</td>
                 </tr>
                 <tr className="border-b border-stone-800">
                   <td className="py-2 px-3 font-mono text-amber-400">/terms</td>
                   <td className="py-2 px-3">使用條款</td>
                   <td className="py-2 px-3 font-mono text-xs">Terms.tsx</td>
                   <td className="py-2 px-3">服務條款說明</td>
                 </tr>
                 <tr className="border-b border-stone-800">
                   <td className="py-2 px-3 font-mono text-amber-400">/docs</td>
                   <td className="py-2 px-3">系統文檔</td>
                   <td className="py-2 px-3 font-mono text-xs">Documentation.tsx</td>
                   <td className="py-2 px-3">技術與功能文檔中心</td>
                 </tr>
                 <tr>
                   <td className="py-2 px-3 font-mono text-stone-500">/*</td>
                   <td className="py-2 px-3">404</td>
                   <td className="py-2 px-3 font-mono text-xs">NotFound.tsx</td>
                   <td className="py-2 px-3">錯誤頁面</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
 
         <div className="p-4 bg-stone-800/30 rounded-lg">
           <h4 className="font-medium text-stone-200 mb-4">管理後台路由 (規劃中)</h4>
           <div className="overflow-x-auto">
             <table className="w-full text-sm">
               <thead>
                 <tr className="border-b border-stone-700">
                   <th className="text-left py-2 px-3 text-stone-300">路徑</th>
                   <th className="text-left py-2 px-3 text-stone-300">功能</th>
                   <th className="text-left py-2 px-3 text-stone-300">權限</th>
                 </tr>
               </thead>
               <tbody className="text-stone-400">
                 <tr className="border-b border-stone-800">
                   <td className="py-2 px-3 font-mono text-stone-500">/admin</td>
                   <td className="py-2 px-3">管理儀表板</td>
                   <td className="py-2 px-3 text-xs">Admin</td>
                 </tr>
                 <tr className="border-b border-stone-800">
                   <td className="py-2 px-3 font-mono text-stone-500">/admin/users</td>
                   <td className="py-2 px-3">會員管理</td>
                   <td className="py-2 px-3 text-xs">Admin</td>
                 </tr>
                 <tr className="border-b border-stone-800">
                   <td className="py-2 px-3 font-mono text-stone-500">/admin/analytics</td>
                   <td className="py-2 px-3">數據分析</td>
                   <td className="py-2 px-3 text-xs">Admin</td>
                 </tr>
                 <tr className="border-b border-stone-800">
                   <td className="py-2 px-3 font-mono text-stone-500">/admin/content</td>
                   <td className="py-2 px-3">內容管理</td>
                   <td className="py-2 px-3 text-xs">Admin</td>
                 </tr>
                 <tr>
                   <td className="py-2 px-3 font-mono text-stone-500">/admin/settings</td>
                   <td className="py-2 px-3">系統設定</td>
                   <td className="py-2 px-3 text-xs">Super Admin</td>
                 </tr>
               </tbody>
             </table>
           </div>
           <p className="text-xs text-stone-500 mt-3">* 管理後台功能尚在規劃階段</p>
         </div>
 
         <div className="p-4 bg-stone-800/30 rounded-lg">
           <h4 className="font-medium text-stone-200 mb-4">API 端點 (Edge Functions)</h4>
           <div className="overflow-x-auto">
             <table className="w-full text-sm">
               <thead>
                 <tr className="border-b border-stone-700">
                   <th className="text-left py-2 px-3 text-stone-300">端點</th>
                   <th className="text-left py-2 px-3 text-stone-300">方法</th>
                   <th className="text-left py-2 px-3 text-stone-300">說明</th>
                 </tr>
               </thead>
               <tbody className="text-stone-400">
                 <tr className="border-b border-stone-800">
                   <td className="py-2 px-3 font-mono text-emerald-400">/check-entitlement</td>
                   <td className="py-2 px-3">POST</td>
                   <td className="py-2 px-3">驗證會員權限</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
       </div>
     </SectionCard>
   </div>
 );
 
 // ============ Sharing Content ============
 const SharingContent = () => (
   <div className="space-y-6">
     <SectionCard
       icon={<Share2 className="w-5 h-5" />}
       title="文件分享系統"
       description="支援多種格式的文件下載與分享功能"
     >
       <div className="space-y-6">
         <div className="grid md:grid-cols-3 gap-4">
           <div className="p-4 bg-stone-800/30 rounded-lg text-center">
             <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-red-500/20 flex items-center justify-center">
               <FileText className="w-6 h-6 text-red-400" />
             </div>
             <h4 className="font-medium text-stone-200 mb-1">PDF 格式</h4>
             <p className="text-xs text-stone-400">適合列印與閱讀</p>
             <ul className="text-xs text-stone-500 mt-2 space-y-1">
               <li>• 高品質排版</li>
               <li>• 跨平台相容</li>
               <li>• 保留格式樣式</li>
             </ul>
           </div>
           <div className="p-4 bg-stone-800/30 rounded-lg text-center">
             <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-500/20 flex items-center justify-center">
               <FileText className="w-6 h-6 text-blue-400" />
             </div>
             <h4 className="font-medium text-stone-200 mb-1">Word 格式</h4>
             <p className="text-xs text-stone-400">適合編輯與修改</p>
             <ul className="text-xs text-stone-500 mt-2 space-y-1">
               <li>• .docx 格式</li>
               <li>• 可編輯內容</li>
               <li>• 標題層級結構</li>
             </ul>
           </div>
           <div className="p-4 bg-stone-800/30 rounded-lg text-center">
             <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-amber-500/20 flex items-center justify-center">
               <BookOpen className="w-6 h-6 text-amber-400" />
             </div>
             <h4 className="font-medium text-stone-200 mb-1">系統白皮書</h4>
             <p className="text-xs text-stone-400">完整技術文檔</p>
             <ul className="text-xs text-stone-500 mt-2 space-y-1">
               <li>• 專業排版設計</li>
               <li>• 架構圖表</li>
               <li>• 技術規格說明</li>
             </ul>
           </div>
         </div>
 
         <div className="p-4 bg-stone-800/30 rounded-lg">
           <h4 className="font-medium text-stone-200 mb-3">文件生成功能</h4>
           <ul className="text-sm text-stone-400 space-y-2">
             <li className="flex items-start gap-2">
               <span className="text-emerald-400">✓</span>
               <span>使用 html2canvas 進行 PDF 渲染，保留完整視覺樣式</span>
             </li>
             <li className="flex items-start gap-2">
               <span className="text-emerald-400">✓</span>
               <span>使用 docx 套件生成 Word 文件，支援標題、段落、表格</span>
             </li>
             <li className="flex items-start gap-2">
               <span className="text-emerald-400">✓</span>
               <span>白皮書包含封面、目錄、詳細技術說明</span>
             </li>
             <li className="flex items-start gap-2">
               <span className="text-emerald-400">✓</span>
               <span>自動生成日期與版本標記</span>
             </li>
           </ul>
         </div>
       </div>
     </SectionCard>
   </div>
 );
 
 // ============ Architecture Content ============
 const ArchitectureContent = () => (
   <div className="space-y-6">
     <SectionCard
       icon={<Database className="w-5 h-5" />}
       title="技術架構與資料表結構"
       description="完整的系統架構、技術棧與資料模型說明"
     >
       <div className="space-y-6">
         <div className="p-4 bg-stone-800/30 rounded-lg">
           <h4 className="font-medium text-stone-200 mb-4">技術棧</h4>
           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
             <TechBadge category="Frontend" items={['React 18', 'TypeScript', 'Vite']} />
             <TechBadge category="Styling" items={['Tailwind CSS', 'Framer Motion', 'shadcn/ui']} />
             <TechBadge category="State" items={['Zustand', 'TanStack Query', 'React Hook Form']} />
             <TechBadge category="Backend" items={['Lovable Cloud', 'Edge Functions', 'PostgreSQL']} />
           </div>
         </div>
 
         <div className="p-4 bg-stone-800/30 rounded-lg">
           <h4 className="font-medium text-stone-200 mb-4">前端架構</h4>
           <pre className="text-xs bg-stone-900/50 p-3 rounded-lg overflow-x-auto text-stone-400">
 {`src/
 ├── assets/          # 靜態資源 (圖片、影片、音效)
 ├── components/
 │   ├── game/        # 遊戲相關組件 (37+ 個)
 │   ├── member/      # 會員系統組件
 │   └── ui/          # UI 基礎組件 (shadcn/ui)
 ├── hooks/           # 自訂 Hooks (12+ 個)
 ├── integrations/    # 外部服務整合
 ├── lib/             # 工具函式
 ├── pages/           # 頁面組件
 └── stores/          # Zustand 狀態管理`}
           </pre>
         </div>
 
         <div className="p-4 bg-stone-800/30 rounded-lg">
           <h4 className="font-medium text-stone-200 mb-4">狀態管理架構</h4>
           <div className="grid md:grid-cols-2 gap-4">
             <div className="p-3 bg-stone-900/50 rounded-lg">
               <h5 className="text-amber-400 font-medium mb-2">gameStore</h5>
               <ul className="text-xs text-stone-400 space-y-1">
                 <li>• 遊戲進度 (yiProgress, yiPart2Progress)</li>
                 <li>• 弧度值與陰影值追蹤</li>
                 <li>• 存檔系統 (多槽位)</li>
                 <li>• 對話歷史記錄</li>
                 <li>• 已解鎖圖片與成就</li>
               </ul>
             </div>
             <div className="p-3 bg-stone-900/50 rounded-lg">
               <h5 className="text-amber-400 font-medium mb-2">memberStore</h5>
               <ul className="text-xs text-stone-400 space-y-1">
                 <li>• 會員資訊 (email, hasAccess)</li>
                 <li>• 驗證狀態 (isVerifying)</li>
                 <li>• 錯誤處理</li>
                 <li>• 會話過期檢測</li>
                 <li>• 持久化存儲</li>
               </ul>
             </div>
           </div>
         </div>
 
         <div className="p-4 bg-stone-800/30 rounded-lg">
           <h4 className="font-medium text-stone-200 mb-4">核心 Hooks</h4>
           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
             <HookCard name="useProgressiveImage" desc="漸進式圖片載入 + blur-up 效果" />
             <HookCard name="usePreloadNextScene" desc="預載下一場景資源" />
             <HookCard name="useAudio" desc="背景音樂與音效控制" />
             <HookCard name="useHapticFeedback" desc="行動裝置震動回饋" />
             <HookCard name="useAchievements" desc="成就系統管理" />
             <HookCard name="useTypewriter" desc="打字機文字效果" />
             <HookCard name="useShareImage" desc="分享圖片生成" />
             <HookCard name="useCookieConsent" desc="Cookie 同意管理" />
             <HookCard name="useMobile" desc="行動裝置檢測" />
           </div>
         </div>
 
         <div className="p-4 bg-stone-800/30 rounded-lg">
           <h4 className="font-medium text-stone-200 mb-4">資料模型 (本地存儲)</h4>
           <pre className="text-xs bg-stone-900/50 p-3 rounded-lg overflow-x-auto text-stone-400">
 {`// 遊戲進度
 interface YiProgress {
   currentNodeId: string;
   arcValue: number;          // 弧度值 (0-180)
   shadowValue: number;       // 陰影值 (0-100)
   hasStarted: boolean;
   hasCompleted: boolean;
   dialogueHistory: DialogueEntry[];
   unlockedImages: string[];
   unlockedAchievements: string[];
 }
 
 // 存檔槽
 interface SaveSlot {
   id: string;
   savedAt: number;
   currentNodeId: string;
   currentChapterTitle: string;
   arcValue: number;
   shadowValue: number;
   thumbnail?: string;
 }
 
 // 對話記錄
 interface DialogueEntry {
   nodeId: string;
   speaker: string;
   text: string;
   timestamp: number;
   choiceMade?: string;
 }`}
           </pre>
         </div>
 
         <div className="p-4 bg-stone-800/30 rounded-lg">
           <h4 className="font-medium text-stone-200 mb-4">效能優化技術</h4>
           <div className="grid sm:grid-cols-2 gap-3">
             <div className="p-3 bg-stone-900/50 rounded-lg">
               <h5 className="text-emerald-400 font-medium mb-2">圖片載入</h5>
               <ul className="text-xs text-stone-400 space-y-1">
                 <li>• 動態縮圖生成 (32px base64)</li>
                 <li>• Blur-up 漸進式載入</li>
                 <li>• 縮圖快取 (Memory Cache)</li>
                 <li>• 預載下一場景圖片</li>
                 <li>• XHR 進度追蹤</li>
               </ul>
             </div>
             <div className="p-3 bg-stone-900/50 rounded-lg">
               <h5 className="text-emerald-400 font-medium mb-2">使用者體驗</h5>
               <ul className="text-xs text-stone-400 space-y-1">
                 <li>• 觸覺回饋 (Haptic)</li>
                 <li>• 場景轉場動畫</li>
                 <li>• 打字機文字效果</li>
                 <li>• 粒子背景效果</li>
                 <li>• 響應式設計</li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </SectionCard>
   </div>
 );
 
 // ============ Helper Components ============
 const SectionCard = ({ 
   icon, 
   title, 
   description, 
   children 
 }: { 
   icon: React.ReactNode; 
   title: string; 
   description: string;
   children: React.ReactNode;
 }) => (
   <div className="bg-stone-900/50 border border-stone-700/50 rounded-xl p-6">
     <div className="flex items-center gap-3 mb-4">
       <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
         {icon}
       </div>
       <div>
         <h3 className="text-lg font-semibold text-stone-100">{title}</h3>
         <p className="text-sm text-stone-500">{description}</p>
       </div>
     </div>
     {children}
   </div>
 );
 
 const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
   <div>
     <h5 className="text-stone-200 font-medium mb-1">{title}</h5>
     <div className="text-stone-400">{children}</div>
   </div>
 );
 
 const FeatureCard = ({ title, items }: { title: string; items: string[] }) => (
   <div className="p-4 bg-stone-800/30 rounded-lg">
     <h4 className="font-medium text-stone-200 mb-2">{title}</h4>
     <ul className="text-sm text-stone-400 space-y-1">
       {items.map((item, i) => (
         <li key={i}>• {item}</li>
       ))}
     </ul>
   </div>
 );
 
 const TechBadge = ({ category, items }: { category: string; items: string[] }) => (
   <div className="p-3 bg-stone-900/50 rounded-lg">
     <p className="text-xs text-amber-400 font-medium mb-1">{category}</p>
     <p className="text-xs text-stone-400">{items.join(' • ')}</p>
   </div>
 );
 
 const HookCard = ({ name, desc }: { name: string; desc: string }) => (
   <div className="p-2 bg-stone-900/50 rounded-lg">
     <p className="font-mono text-amber-400">{name}</p>
     <p className="text-stone-500 mt-0.5">{desc}</p>
   </div>
 );
 
 export default Documentation;