 import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, WidthType, ShadingType } from 'docx';
 import { saveAs } from 'file-saver';
 import jsPDF from 'jspdf';
 import html2canvas from 'html2canvas';
 
 // ============ Document Data ============
 const documentData = {
   title: '弧度歸零 Arc to Zero',
   subtitle: '系統文檔',
   version: 'v1.0',
   date: new Date().toLocaleDateString('zh-TW'),
   
   publicPages: [
     {
       path: '/',
       name: '首頁 (Landing Page)',
       content: {
         hero: {
           title: '弧度歸零',
           subtitle: 'Arc to Zero',
           tagline: '完整不是沒有缺口，完整是不再害怕缺口。',
           description: '這是一段互動式的自我探索旅程：你會看見自己的模式，學會與不完美共處，並把選擇權拿回來。'
         },
         chapters: [
           { name: '第一章：破碎與重生', description: '探索內心的缺口，學習與不完美共處，建立「看見自己」的第一條路徑。', status: '開放遊玩' },
           { name: '第二章：療癒之路', description: '延續第一章的旅程，深化自我理解與修復，開始練習新的選擇方式。', status: '製作中' }
         ],
         features: [
           { title: '互動式敘事', description: '你會做出選擇，但我們不賣「分歧結局」；我們賣的是「分歧視角」。' },
           { title: '完整性哲學體驗', description: '完整不是沒有缺口，而是能不再害怕缺口。' },
           { title: '療癒主題', description: '聚焦完美主義、自我否定、自我接納等議題。' },
           { title: '精美視覺', description: '每個場景皆以沉浸式氛圍設計。' }
         ]
       }
     },
     {
       path: '/game',
       name: '遊戲頁面',
       content: {
         description: '互動式敘事遊戲主體，需要會員驗證才能存取',
         features: ['場景圖片展示', '對話框與選項', '弧度/陰影值追蹤', '存檔系統', '成就系統', '藝廊功能']
       }
     },
     {
       path: '/privacy',
       name: '隱私政策',
       content: {
         lastUpdate: '2025年1月25日',
         sections: [
           '資料收集：帳號資訊、遊戲進度、使用數據',
           '資料使用目的：提供服務、驗證身份、儲存進度、優化體驗',
           '資料保護：HTTPS加密、安全存儲、定期審查',
           '第三方服務：主站會員系統、雲端託管服務',
           '您的權利：查詢、更正、刪除、撤回同意'
         ]
       }
     },
     {
       path: '/terms',
       name: '使用條款',
       content: {
         lastUpdate: '2025年1月25日',
         sections: [
           '服務說明：互動式敘事遊戲',
           '會員資格：需提供真實資訊、妥善保管帳號',
           '智慧財產權：所有內容受法律保護',
           '使用規範：禁止自動化工具、破解、干擾服務',
           '準據法：中華民國法律'
         ]
       }
     }
   ],
   
   membership: {
     description: '透過主站 API 進行會員身份驗證的完整系統',
     features: [
       '支援登入/註冊雙模式',
       '會話有效期限 7 天',
       '本地持久化存儲',
       '錯誤訊息即時反饋',
       '安全登出機制'
     ],
     dataStructure: `interface MemberInfo {
   email: string;
   hasAccess: boolean;
   entitlement?: { status: string; expiresAt: string; };
   verifiedAt: number;
 }`
   },
   
   routes: {
     public: [
       { path: '/', page: '首頁', component: 'Landing.tsx' },
       { path: '/game', page: '遊戲', component: 'Game.tsx' },
       { path: '/privacy', page: '隱私政策', component: 'Privacy.tsx' },
       { path: '/terms', page: '使用條款', component: 'Terms.tsx' },
       { path: '/docs', page: '系統文檔', component: 'Documentation.tsx' }
     ],
     admin: [
       { path: '/admin', page: '管理儀表板', permission: 'Admin' },
       { path: '/admin/users', page: '會員管理', permission: 'Admin' },
       { path: '/admin/analytics', page: '數據分析', permission: 'Admin' },
       { path: '/admin/content', page: '內容管理', permission: 'Admin' },
       { path: '/admin/settings', page: '系統設定', permission: 'Super Admin' }
     ],
     api: [
       { endpoint: '/check-entitlement', method: 'POST', description: '驗證會員權限' }
     ]
   },
   
   architecture: {
     techStack: {
       frontend: ['React 18', 'TypeScript', 'Vite'],
       styling: ['Tailwind CSS', 'Framer Motion', 'shadcn/ui'],
       state: ['Zustand', 'TanStack Query', 'React Hook Form'],
       backend: ['Lovable Cloud', 'Edge Functions', 'PostgreSQL']
     },
     hooks: [
       { name: 'useProgressiveImage', desc: '漸進式圖片載入' },
       { name: 'usePreloadNextScene', desc: '預載下一場景' },
       { name: 'useAudio', desc: '音效控制' },
       { name: 'useHapticFeedback', desc: '震動回饋' },
       { name: 'useAchievements', desc: '成就系統' },
       { name: 'useTypewriter', desc: '打字機效果' }
     ]
   }
 };
 
 // ============ PDF Generator (HTML2Canvas based for Chinese support) ============
 export async function generatePDF(): Promise<void> {
   // Create a hidden container for PDF content
   const container = document.createElement('div');
   container.id = 'pdf-render-container';
   container.style.cssText = `
     position: absolute;
     left: -9999px;
     top: 0;
     width: 794px;
     background: #FDFBF8;
     font-family: 'Noto Serif TC', 'Microsoft JhengHei', sans-serif;
     padding: 0;
   `;
   document.body.appendChild(container);
 
   // Build HTML content
   container.innerHTML = buildPDFContent();
 
   try {
     // Render to canvas with high quality
     const canvas = await html2canvas(container, {
       scale: 2,
       useCORS: true,
       logging: false,
       backgroundColor: '#FDFBF8',
       windowWidth: 794,
     });
 
     // Create PDF
     const pdf = new jsPDF('p', 'mm', 'a4');
     const pageWidth = 210;
     const pageHeight = 297;
     const imgWidth = pageWidth;
     const imgHeight = (canvas.height * imgWidth) / canvas.width;
     
     const imgData = canvas.toDataURL('image/png');
     
     let heightLeft = imgHeight;
     let position = 0;
     
     // First page
     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
     heightLeft -= pageHeight;
     
     // Add more pages if needed
     while (heightLeft > 0) {
       position = heightLeft - imgHeight;
       pdf.addPage();
       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
       heightLeft -= pageHeight;
     }
     
     pdf.save(`弧度歸零_系統文檔_${documentData.date.replace(/\//g, '-')}.pdf`);
   } finally {
     // Cleanup
     document.body.removeChild(container);
   }
 }
 
 // Build beautiful PDF HTML content
 function buildPDFContent(): string {
   const styles = `
     <style>
       * { box-sizing: border-box; margin: 0; padding: 0; }
       .pdf-page { 
         width: 794px; 
         min-height: 1123px; 
         padding: 60px; 
         background: linear-gradient(180deg, #FDFBF8 0%, #F9F7F4 100%);
         page-break-after: always;
       }
       .cover-page {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         text-align: center;
         min-height: 1123px;
         background: linear-gradient(135deg, #FDFBF8 0%, #F5F0E8 50%, #EDE5D8 100%);
         position: relative;
         overflow: hidden;
       }
       .cover-page::before {
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         right: 0;
         height: 8px;
         background: linear-gradient(90deg, #8B6914 0%, #D4A84B 50%, #8B6914 100%);
       }
       .cover-page::after {
         content: '';
         position: absolute;
         bottom: 0;
         left: 0;
         right: 0;
         height: 8px;
         background: linear-gradient(90deg, #8B6914 0%, #D4A84B 50%, #8B6914 100%);
       }
       .cover-decoration {
         width: 120px;
         height: 2px;
         background: linear-gradient(90deg, transparent, #8B6914, transparent);
         margin: 30px 0;
       }
       .cover-title {
         font-size: 56px;
         font-weight: 700;
         color: #8B6914;
         letter-spacing: 8px;
         margin-bottom: 10px;
         text-shadow: 2px 2px 4px rgba(139, 105, 20, 0.1);
       }
       .cover-subtitle {
         font-size: 24px;
         color: #666;
         letter-spacing: 4px;
         margin-bottom: 20px;
       }
       .cover-tagline {
         font-size: 18px;
         color: #888;
         font-style: italic;
         max-width: 500px;
         line-height: 1.8;
       }
       .cover-version {
         position: absolute;
         bottom: 80px;
         font-size: 14px;
         color: #999;
       }
       .section-header {
         display: flex;
         align-items: center;
         gap: 15px;
         margin-bottom: 30px;
         padding-bottom: 15px;
         border-bottom: 3px solid #8B6914;
       }
       .section-number {
         width: 50px;
         height: 50px;
         background: linear-gradient(135deg, #8B6914 0%, #D4A84B 100%);
         color: white;
         font-size: 24px;
         font-weight: 700;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 10px;
       }
       .section-title {
         font-size: 28px;
         font-weight: 700;
         color: #333;
       }
       .content-card {
         background: white;
         border-radius: 12px;
         padding: 25px;
         margin-bottom: 20px;
         box-shadow: 0 4px 20px rgba(0,0,0,0.05);
         border: 1px solid #E8E4DC;
       }
       .card-title {
         font-size: 18px;
         font-weight: 600;
         color: #8B6914;
         margin-bottom: 15px;
         display: flex;
         align-items: center;
         gap: 10px;
       }
       .card-title::before {
         content: '';
         width: 4px;
         height: 20px;
         background: #8B6914;
         border-radius: 2px;
       }
       .card-path {
         font-size: 13px;
         color: #8B6914;
         background: #FDF8E8;
         padding: 4px 12px;
         border-radius: 20px;
         display: inline-block;
         margin-bottom: 12px;
       }
       .card-content {
         font-size: 14px;
         color: #555;
         line-height: 1.8;
       }
       .feature-grid {
         display: grid;
         grid-template-columns: 1fr 1fr;
         gap: 15px;
         margin-top: 15px;
       }
       .feature-item {
         background: #F9F7F4;
         padding: 15px;
         border-radius: 8px;
         border-left: 3px solid #8B6914;
       }
       .feature-name {
         font-weight: 600;
         color: #333;
         margin-bottom: 5px;
       }
       .feature-desc {
         font-size: 13px;
         color: #666;
       }
       .route-table {
         width: 100%;
         border-collapse: collapse;
         margin-top: 15px;
       }
       .route-table th {
         background: linear-gradient(135deg, #8B6914 0%, #A67C1A 100%);
         color: white;
         padding: 12px 15px;
         text-align: left;
         font-size: 14px;
       }
       .route-table td {
         padding: 12px 15px;
         border-bottom: 1px solid #E8E4DC;
         font-size: 13px;
       }
       .route-table tr:nth-child(even) {
         background: #F9F7F4;
       }
       .route-path {
         color: #8B6914;
         font-family: 'Courier New', monospace;
         font-weight: 600;
       }
       .tech-grid {
         display: grid;
         grid-template-columns: 1fr 1fr;
         gap: 20px;
       }
       .tech-card {
         background: linear-gradient(135deg, #FDF8E8 0%, #F9F4E4 100%);
         padding: 20px;
         border-radius: 12px;
         border: 1px solid #E8DCC8;
       }
       .tech-category {
         font-size: 14px;
         font-weight: 700;
         color: #8B6914;
         margin-bottom: 10px;
         text-transform: uppercase;
         letter-spacing: 1px;
       }
       .tech-items {
         display: flex;
         flex-wrap: wrap;
         gap: 8px;
       }
       .tech-item {
         background: white;
         padding: 6px 12px;
         border-radius: 20px;
         font-size: 12px;
         color: #555;
         border: 1px solid #E8E4DC;
       }
       .hook-list {
         margin-top: 20px;
       }
       .hook-item {
         display: flex;
         padding: 12px 0;
         border-bottom: 1px dashed #E8E4DC;
       }
       .hook-name {
         width: 200px;
         font-family: 'Courier New', monospace;
         color: #8B6914;
         font-weight: 600;
         font-size: 13px;
       }
       .hook-desc {
         flex: 1;
         color: #666;
         font-size: 13px;
       }
       .code-block {
         background: #2D2D2D;
         color: #E0E0E0;
         padding: 20px;
         border-radius: 8px;
         font-family: 'Courier New', monospace;
         font-size: 12px;
         line-height: 1.6;
         overflow-x: auto;
         margin-top: 15px;
       }
       .code-keyword { color: #C792EA; }
       .code-type { color: #FFCB6B; }
       .code-string { color: #C3E88D; }
       .list-item {
         display: flex;
         align-items: flex-start;
         gap: 10px;
         padding: 8px 0;
       }
       .list-bullet {
         width: 8px;
         height: 8px;
         background: #8B6914;
         border-radius: 50%;
         margin-top: 6px;
         flex-shrink: 0;
       }
       .footer {
         text-align: center;
         padding: 40px 0 20px;
         color: #999;
         font-size: 12px;
         border-top: 1px solid #E8E4DC;
         margin-top: 40px;
       }
       .toc-page { padding: 60px; }
       .toc-title {
         font-size: 32px;
         color: #8B6914;
         margin-bottom: 40px;
         padding-bottom: 15px;
         border-bottom: 3px solid #8B6914;
       }
       .toc-item {
         display: flex;
         align-items: center;
         padding: 15px 0;
         border-bottom: 1px dashed #E8E4DC;
       }
       .toc-number {
         width: 40px;
         height: 40px;
         background: #FDF8E8;
         color: #8B6914;
         font-weight: 700;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 8px;
         margin-right: 20px;
       }
       .toc-text {
         flex: 1;
         font-size: 16px;
         color: #333;
       }
       .toc-page-num {
         color: #8B6914;
         font-weight: 600;
       }
     </style>
   `;
 
   // Cover Page
   const coverPage = `
     <div class="cover-page">
       <div class="cover-title">弧度歸零</div>
       <div class="cover-subtitle">Arc to Zero</div>
       <div class="cover-decoration"></div>
       <div class="cover-tagline">
         完整不是沒有缺口<br/>
         完整是不再害怕缺口
       </div>
       <div class="cover-decoration"></div>
       <div style="margin-top: 40px; font-size: 20px; color: #8B6914; font-weight: 600;">
         系統文檔
       </div>
       <div class="cover-version">
         版本 ${documentData.version} | ${documentData.date}
       </div>
     </div>
   `;
 
   // Table of Contents
   const tocPage = `
     <div class="pdf-page toc-page">
       <div class="toc-title">目錄 Contents</div>
       ${[
         { num: '1', title: '公開頁面總覽', en: 'Public Pages Overview' },
         { num: '2', title: '會員系統', en: 'Membership System' },
         { num: '3', title: '路由對照表', en: 'Route Reference' },
         { num: '4', title: '技術架構', en: 'Technical Architecture' },
       ].map(item => `
         <div class="toc-item">
           <div class="toc-number">${item.num}</div>
           <div class="toc-text">${item.title} <span style="color: #999; font-size: 14px;">${item.en}</span></div>
         </div>
       `).join('')}
     </div>
   `;
 
   // Section 1: Public Pages
   const section1 = `
     <div class="pdf-page">
       <div class="section-header">
         <div class="section-number">1</div>
         <div class="section-title">公開頁面總覽</div>
       </div>
       
       ${documentData.publicPages.map(page => `
         <div class="content-card">
           <div class="card-title">${page.name}</div>
           <div class="card-path">路徑：${page.path}</div>
           ${page.content.hero ? `
             <div class="card-content">
               <div style="margin-bottom: 10px;"><strong>主標題：</strong>${page.content.hero.title}</div>
               <div style="margin-bottom: 10px;"><strong>副標題：</strong>${page.content.hero.subtitle}</div>
               <div style="margin-bottom: 10px;"><strong>標語：</strong>${page.content.hero.tagline}</div>
               <div><strong>描述：</strong>${page.content.hero.description}</div>
             </div>
           ` : ''}
           ${page.content.features ? `
             <div class="feature-grid">
               ${(page.content.features as string[]).map((f: string) => `
                 <div class="feature-item">
                   <div class="feature-desc">• ${f}</div>
                 </div>
               `).join('')}
             </div>
           ` : ''}
           ${page.content.sections ? `
             <div class="card-content" style="margin-top: 10px;">
               ${(page.content.sections as string[]).map((s: string) => `
                 <div class="list-item">
                   <div class="list-bullet"></div>
                   <div>${s}</div>
                 </div>
               `).join('')}
             </div>
           ` : ''}
         </div>
       `).join('')}
     </div>
   `;
 
   // Section 2: Membership
   const section2 = `
     <div class="pdf-page">
       <div class="section-header">
         <div class="section-number">2</div>
         <div class="section-title">會員系統</div>
       </div>
       
       <div class="content-card">
         <div class="card-title">系統說明</div>
         <div class="card-content">${documentData.membership.description}</div>
       </div>
       
       <div class="content-card">
         <div class="card-title">核心功能</div>
         <div class="card-content">
           ${documentData.membership.features.map(f => `
             <div class="list-item">
               <div class="list-bullet"></div>
               <div>${f}</div>
             </div>
           `).join('')}
         </div>
       </div>
       
       <div class="content-card">
         <div class="card-title">資料結構</div>
         <div class="code-block">
           <span class="code-keyword">interface</span> <span class="code-type">MemberInfo</span> {<br/>
           &nbsp;&nbsp;email: <span class="code-type">string</span>;<br/>
           &nbsp;&nbsp;hasAccess: <span class="code-type">boolean</span>;<br/>
           &nbsp;&nbsp;entitlement?: {<br/>
           &nbsp;&nbsp;&nbsp;&nbsp;status: <span class="code-type">string</span>;<br/>
           &nbsp;&nbsp;&nbsp;&nbsp;expiresAt: <span class="code-type">string</span>;<br/>
           &nbsp;&nbsp;};<br/>
           &nbsp;&nbsp;verifiedAt: <span class="code-type">number</span>;<br/>
           }
         </div>
       </div>
     </div>
   `;
 
   // Section 3: Routes
   const section3 = `
     <div class="pdf-page">
       <div class="section-header">
         <div class="section-number">3</div>
         <div class="section-title">路由對照表</div>
       </div>
       
       <div class="content-card">
         <div class="card-title">公開路由</div>
         <table class="route-table">
           <thead>
             <tr>
               <th style="width: 120px;">路徑</th>
               <th style="width: 150px;">頁面名稱</th>
               <th>元件</th>
             </tr>
           </thead>
           <tbody>
             ${documentData.routes.public.map(r => `
               <tr>
                 <td class="route-path">${r.path}</td>
                 <td>${r.page}</td>
                 <td style="font-family: 'Courier New', monospace; font-size: 12px;">${r.component}</td>
               </tr>
             `).join('')}
           </tbody>
         </table>
       </div>
       
       <div class="content-card">
         <div class="card-title">管理後台路由（規劃中）</div>
         <table class="route-table">
           <thead>
             <tr>
               <th style="width: 150px;">路徑</th>
               <th style="width: 150px;">頁面名稱</th>
               <th>權限</th>
             </tr>
           </thead>
           <tbody>
             ${documentData.routes.admin.map(r => `
               <tr>
                 <td class="route-path">${r.path}</td>
                 <td>${r.page}</td>
                 <td>${r.permission}</td>
               </tr>
             `).join('')}
           </tbody>
         </table>
       </div>
       
       <div class="content-card">
         <div class="card-title">API 端點</div>
         ${documentData.routes.api.map(api => `
           <div style="background: #F9F7F4; padding: 15px; border-radius: 8px; margin-top: 10px;">
             <span style="background: #4CAF50; color: white; padding: 3px 10px; border-radius: 4px; font-size: 12px; font-weight: 600;">${api.method}</span>
             <span style="color: #8B6914; font-family: 'Courier New', monospace; font-weight: 600; margin-left: 10px;">${api.endpoint}</span>
             <div style="color: #666; font-size: 13px; margin-top: 8px;">${api.description}</div>
           </div>
         `).join('')}
       </div>
     </div>
   `;
 
   // Section 4: Architecture
   const section4 = `
     <div class="pdf-page">
       <div class="section-header">
         <div class="section-number">4</div>
         <div class="section-title">技術架構</div>
       </div>
       
       <div class="content-card">
         <div class="card-title">技術堆疊</div>
         <div class="tech-grid">
           ${Object.entries(documentData.architecture.techStack).map(([category, items]) => `
             <div class="tech-card">
               <div class="tech-category">${category}</div>
               <div class="tech-items">
                 ${(items as string[]).map(item => `
                   <span class="tech-item">${item}</span>
                 `).join('')}
               </div>
             </div>
           `).join('')}
         </div>
       </div>
       
       <div class="content-card">
         <div class="card-title">核心 Hooks</div>
         <div class="hook-list">
           ${documentData.architecture.hooks.map(hook => `
             <div class="hook-item">
               <div class="hook-name">${hook.name}</div>
               <div class="hook-desc">${hook.desc}</div>
             </div>
           `).join('')}
         </div>
       </div>
       
       <div class="footer">
         <div>© 2025 弧度歸零 Arc to Zero. 版權所有</div>
         <div style="margin-top: 5px;">本文檔僅供參考使用</div>
       </div>
     </div>
   `;
 
   return `
     <!DOCTYPE html>
     <html>
     <head>
       <meta charset="UTF-8">
       ${styles}
     </head>
     <body>
       ${coverPage}
       ${tocPage}
       ${section1}
       ${section2}
       ${section3}
       ${section4}
     </body>
     </html>
   `;
 }
 
 // ============ Word Generator ============
 export async function generateWord(): Promise<void> {
   const doc = new Document({
     styles: {
       default: {
         heading1: {
           run: { size: 48, bold: true, color: '8B6914' },
           paragraph: { spacing: { before: 400, after: 200 } }
         },
         heading2: {
           run: { size: 32, bold: true, color: '8B6914' },
           paragraph: { spacing: { before: 300, after: 150 } }
         },
         heading3: {
           run: { size: 24, bold: true, color: '333333' },
           paragraph: { spacing: { before: 200, after: 100 } }
         }
       }
     },
     sections: [{
       properties: {},
       children: [
         // Title
         new Paragraph({
           children: [
             new TextRun({ text: '弧度歸零', size: 72, bold: true, color: '8B6914' })
           ],
           alignment: AlignmentType.CENTER,
           spacing: { after: 100 }
         }),
         new Paragraph({
           children: [
             new TextRun({ text: 'Arc to Zero', size: 28, color: '666666' })
           ],
           alignment: AlignmentType.CENTER,
           spacing: { after: 200 }
         }),
         new Paragraph({
           children: [
             new TextRun({ text: '系統文檔', size: 36, bold: true })
           ],
           alignment: AlignmentType.CENTER,
           spacing: { after: 100 }
         }),
         new Paragraph({
           children: [
             new TextRun({ text: `版本 ${documentData.version} | ${documentData.date}`, size: 20, color: '999999' })
           ],
           alignment: AlignmentType.CENTER,
           spacing: { after: 600 }
         }),
         
         // Section 1: Public Pages
         new Paragraph({
           text: '一、公開頁面內容',
           heading: HeadingLevel.HEADING_1
         }),
         ...documentData.publicPages.flatMap(page => [
           new Paragraph({
             text: page.name,
             heading: HeadingLevel.HEADING_2
           }),
           new Paragraph({
             children: [
               new TextRun({ text: '路徑：', bold: true }),
               new TextRun({ text: page.path, color: '8B6914' })
             ],
             spacing: { after: 100 }
           }),
           ...(page.content.hero ? [
             new Paragraph({
               children: [
                 new TextRun({ text: page.content.hero.tagline, italics: true, size: 24 })
               ],
               spacing: { before: 100, after: 100 }
             }),
             new Paragraph({
               text: page.content.hero.description,
               spacing: { after: 200 }
             })
           ] : [])
         ]),
         
         // Section 2: Membership
         new Paragraph({
           text: '二、會員系統功能',
           heading: HeadingLevel.HEADING_1
         }),
         new Paragraph({
           text: documentData.membership.description,
           spacing: { after: 150 }
         }),
         ...documentData.membership.features.map(f => 
           new Paragraph({
             children: [new TextRun({ text: `• ${f}` })],
             spacing: { after: 50 }
           })
         ),
         
         // Section 3: Routes
         new Paragraph({
           text: '三、路由對照表',
           heading: HeadingLevel.HEADING_1
         }),
         new Paragraph({
           text: '公開路由',
           heading: HeadingLevel.HEADING_2
         }),
         new Table({
           width: { size: 100, type: WidthType.PERCENTAGE },
           rows: [
             new TableRow({
               children: [
                 new TableCell({ children: [new Paragraph({ text: '路徑', alignment: AlignmentType.CENTER })], shading: { type: ShadingType.SOLID, color: 'F0EBE3' } }),
                 new TableCell({ children: [new Paragraph({ text: '頁面', alignment: AlignmentType.CENTER })], shading: { type: ShadingType.SOLID, color: 'F0EBE3' } }),
                 new TableCell({ children: [new Paragraph({ text: '組件', alignment: AlignmentType.CENTER })], shading: { type: ShadingType.SOLID, color: 'F0EBE3' } })
               ]
             }),
             ...documentData.routes.public.map(r => 
               new TableRow({
                 children: [
                   new TableCell({ children: [new Paragraph({ text: r.path })] }),
                   new TableCell({ children: [new Paragraph({ text: r.page })] }),
                   new TableCell({ children: [new Paragraph({ text: r.component })] })
                 ]
               })
             )
           ]
         }),
         
         // Section 4: Architecture
         new Paragraph({
           text: '四、技術架構',
           heading: HeadingLevel.HEADING_1
         }),
         ...Object.entries(documentData.architecture.techStack).flatMap(([category, items]) => [
           new Paragraph({
             children: [
               new TextRun({ text: `${category}: `, bold: true, color: '8B6914' }),
               new TextRun({ text: (items as string[]).join(' • ') })
             ],
             spacing: { after: 100 }
           })
         ]),
         
         // Footer
         new Paragraph({
           children: [
             new TextRun({ text: '© 2025 弧度歸零 Arc to Zero. All rights reserved.', size: 18, color: '999999' })
           ],
           alignment: AlignmentType.CENTER,
           spacing: { before: 600 }
         })
       ]
     }]
   });
   
   const blob = await Packer.toBlob(doc);
   saveAs(blob, `弧度歸零_系統文檔_${documentData.date.replace(/\//g, '-')}.docx`);
 }
 
 // ============ Whitepaper Generator ============
 export async function generateWhitepaper(): Promise<void> {
   const doc = new Document({
     styles: {
       default: {
         heading1: {
           run: { size: 48, bold: true, color: '8B6914' },
           paragraph: { spacing: { before: 500, after: 300 } }
         },
         heading2: {
           run: { size: 36, bold: true, color: '8B6914' },
           paragraph: { spacing: { before: 400, after: 200 } }
         },
         heading3: {
           run: { size: 28, bold: true, color: '333333' },
           paragraph: { spacing: { before: 300, after: 150 } }
         }
       }
     },
     sections: [{
       properties: {},
       children: [
         // Cover Page
         new Paragraph({ text: '', spacing: { after: 1200 } }),
         new Paragraph({
           children: [new TextRun({ text: '弧度歸零', size: 96, bold: true, color: '8B6914' })],
           alignment: AlignmentType.CENTER
         }),
         new Paragraph({
           children: [new TextRun({ text: 'Arc to Zero', size: 36, color: '666666' })],
           alignment: AlignmentType.CENTER,
           spacing: { after: 400 }
         }),
         new Paragraph({
           children: [new TextRun({ text: '系統白皮書', size: 56, bold: true })],
           alignment: AlignmentType.CENTER,
           spacing: { after: 200 }
         }),
         new Paragraph({
           children: [new TextRun({ text: 'System Whitepaper', size: 28, color: '999999' })],
           alignment: AlignmentType.CENTER,
           spacing: { after: 800 }
         }),
         new Paragraph({
           children: [new TextRun({ text: '完整不是沒有缺口，完整是不再害怕缺口。', size: 28, italics: true, color: '666666' })],
           alignment: AlignmentType.CENTER,
           spacing: { after: 1200 }
         }),
         new Paragraph({
           children: [new TextRun({ text: `版本 ${documentData.version}`, size: 24 })],
           alignment: AlignmentType.CENTER
         }),
         new Paragraph({
           children: [new TextRun({ text: documentData.date, size: 24 })],
           alignment: AlignmentType.CENTER,
           spacing: { after: 600 }
         }),
         
         // TOC
         new Paragraph({ text: '目錄', heading: HeadingLevel.HEADING_1 }),
         ...[
           '1. 產品概述',
           '2. 核心理念',
           '3. 功能架構',
           '4. 技術規格',
           '5. 會員系統',
           '6. 路由結構',
           '7. 資料模型',
           '8. 效能優化',
           '9. 未來規劃'
         ].map(item => new Paragraph({ text: item, spacing: { after: 100 } })),
         
         // Section 1: Overview
         new Paragraph({ text: '1. 產品概述', heading: HeadingLevel.HEADING_1 }),
         new Paragraph({
           text: '《弧度歸零》是一款互動式心理療癒視覺小說遊戲，以「完整性哲學」為核心理念，引導玩家透過敘事互動探索自我、面對內在缺口、學習與不完美共處。',
           spacing: { after: 200 }
         }),
         new Paragraph({
           children: [new TextRun({ text: '產品定位', bold: true, size: 28 })],
           spacing: { before: 200, after: 100 }
         }),
         ...['互動式敘事遊戲', '心理療癒內容', '自我探索工具', '完整性哲學實踐'].map(item =>
           new Paragraph({ children: [new TextRun({ text: `• ${item}` })], spacing: { after: 50 } })
         ),
         
         // Section 2: Philosophy
         new Paragraph({ text: '2. 核心理念', heading: HeadingLevel.HEADING_1 }),
         new Paragraph({
           children: [new TextRun({ text: '完整性哲學', bold: true, size: 28 })],
           spacing: { after: 100 }
         }),
         new Paragraph({
           text: '我們相信，完整不是沒有缺口，而是不再害怕缺口。遊戲透過互動敘事，讓玩家在安全的情境中練習：看見、承認、整合、再選一次。',
           spacing: { after: 200 }
         }),
         new Paragraph({
           children: [new TextRun({ text: '設計原則', bold: true, size: 28 })],
           spacing: { after: 100 }
         }),
         ...['不賣分歧結局，賣分歧視角', '誠實面對，而非追求最佳解', '每次重玩是練習，不是刷分'].map(item =>
           new Paragraph({ children: [new TextRun({ text: `• ${item}` })], spacing: { after: 50 } })
         ),
         
         // Section 3: Features
         new Paragraph({ text: '3. 功能架構', heading: HeadingLevel.HEADING_1 }),
         ...documentData.publicPages[0].content.features!.map(f => new Paragraph({
           children: [
             new TextRun({ text: `${f.title}：`, bold: true }),
             new TextRun({ text: f.description })
           ],
           spacing: { after: 100 }
         })),
         
         // Section 4: Tech Stack
         new Paragraph({ text: '4. 技術規格', heading: HeadingLevel.HEADING_1 }),
         ...Object.entries(documentData.architecture.techStack).flatMap(([category, items]) => [
           new Paragraph({
             children: [new TextRun({ text: category, bold: true, size: 28, color: '8B6914' })],
             spacing: { before: 150, after: 50 }
           }),
           new Paragraph({
             text: (items as string[]).join(' • '),
             spacing: { after: 100 }
           })
         ]),
         
         // Section 5: Membership
         new Paragraph({ text: '5. 會員系統', heading: HeadingLevel.HEADING_1 }),
         new Paragraph({ text: documentData.membership.description, spacing: { after: 150 } }),
         new Paragraph({
           children: [new TextRun({ text: '核心功能', bold: true, size: 28 })],
           spacing: { after: 100 }
         }),
         ...documentData.membership.features.map(f =>
           new Paragraph({ children: [new TextRun({ text: `• ${f}` })], spacing: { after: 50 } })
         ),
         
         // Section 6: Routes
         new Paragraph({ text: '6. 路由結構', heading: HeadingLevel.HEADING_1 }),
         new Table({
           width: { size: 100, type: WidthType.PERCENTAGE },
           rows: [
             new TableRow({
               children: [
                 new TableCell({ children: [new Paragraph({ text: '路徑' })], shading: { type: ShadingType.SOLID, color: 'F0EBE3' } }),
                 new TableCell({ children: [new Paragraph({ text: '頁面' })], shading: { type: ShadingType.SOLID, color: 'F0EBE3' } }),
                 new TableCell({ children: [new Paragraph({ text: '說明' })], shading: { type: ShadingType.SOLID, color: 'F0EBE3' } })
               ]
             }),
             ...documentData.routes.public.map(r =>
               new TableRow({
                 children: [
                   new TableCell({ children: [new Paragraph({ text: r.path })] }),
                   new TableCell({ children: [new Paragraph({ text: r.page })] }),
                   new TableCell({ children: [new Paragraph({ text: r.component })] })
                 ]
               })
             )
           ]
         }),
         
         // Section 7: Data Model
         new Paragraph({ text: '7. 資料模型', heading: HeadingLevel.HEADING_1 }),
         new Paragraph({
           children: [new TextRun({ text: '會員資料結構', bold: true, size: 28 })],
           spacing: { after: 100 }
         }),
         new Paragraph({
           children: [new TextRun({ text: documentData.membership.dataStructure, font: 'Courier New', size: 20 })],
           spacing: { after: 200 }
         }),
         
         // Section 8: Performance
         new Paragraph({ text: '8. 效能優化', heading: HeadingLevel.HEADING_1 }),
         ...['漸進式圖片載入 (Blur-up)', '動態縮圖快取', '場景預載機制', 'XHR 進度追蹤', '觸覺回饋支援'].map(item =>
           new Paragraph({ children: [new TextRun({ text: `• ${item}` })], spacing: { after: 50 } })
         ),
         
         // Section 9: Future
         new Paragraph({ text: '9. 未來規劃', heading: HeadingLevel.HEADING_1 }),
         ...['第二章內容開發', '管理後台系統', 'IndexedDB 持久化快取', '多語言支援', '社群功能整合'].map(item =>
           new Paragraph({ children: [new TextRun({ text: `• ${item}` })], spacing: { after: 50 } })
         ),
         
         // Footer
         new Paragraph({ text: '', spacing: { after: 600 } }),
         new Paragraph({
           children: [new TextRun({ text: '© 2025 弧度歸零 Arc to Zero. All rights reserved.', size: 20, color: '999999' })],
           alignment: AlignmentType.CENTER
         }),
         new Paragraph({
           children: [new TextRun({ text: '本文件為系統白皮書，僅供內部參考使用', size: 18, color: '999999' })],
           alignment: AlignmentType.CENTER
         })
       ]
     }]
   });
   
   const blob = await Packer.toBlob(doc);
   saveAs(blob, `弧度歸零_系統白皮書_${documentData.date.replace(/\//g, '-')}.docx`);
 }