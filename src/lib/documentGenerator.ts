 import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Table, TableRow, TableCell, WidthType, ShadingType } from 'docx';
 import { saveAs } from 'file-saver';
 import jsPDF from 'jspdf';
 
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
 
 // ============ PDF Generator ============
 export async function generatePDF(): Promise<void> {
   const pdf = new jsPDF('p', 'mm', 'a4');
   const pageWidth = 210;
   const pageHeight = 297;
   const margin = 20;
   const contentWidth = pageWidth - margin * 2;
   let y = margin;
   
   // Colors
   const gold = [139, 105, 20] as const;
   const darkGray = [51, 51, 51] as const;
   const lightGray = [102, 102, 102] as const;
   const bgBeige = [249, 247, 244] as const;
   
   // Helper functions
   const addNewPageIfNeeded = (requiredHeight: number) => {
     if (y + requiredHeight > pageHeight - margin) {
       pdf.addPage();
       y = margin;
       return true;
     }
     return false;
   };
   
   const drawLine = (x1: number, y1: number, x2: number, color: readonly [number, number, number] = gold) => {
     pdf.setDrawColor(...color);
     pdf.setLineWidth(0.5);
     pdf.line(x1, y1, x2, y1);
   };
   
   // ===== COVER PAGE =====
   // Background gradient effect (simplified with rectangle)
   pdf.setFillColor(252, 250, 248);
   pdf.rect(0, 0, pageWidth, pageHeight, 'F');
   
   // Decorative top border
   pdf.setFillColor(...gold);
   pdf.rect(0, 0, pageWidth, 3, 'F');
   
   // Title
   y = 80;
   pdf.setFont('helvetica', 'bold');
   pdf.setFontSize(42);
   pdf.setTextColor(...gold);
   pdf.text('Arc to Zero', pageWidth / 2, y, { align: 'center' });
   
   y += 15;
   pdf.setFontSize(18);
   pdf.setTextColor(...darkGray);
   pdf.text('System Documentation', pageWidth / 2, y, { align: 'center' });
   
   // Decorative line
   y += 15;
   drawLine(margin + 40, y, pageWidth - margin - 40, gold);
   
   // Tagline
   y += 20;
   pdf.setFont('helvetica', 'italic');
   pdf.setFontSize(12);
   pdf.setTextColor(...lightGray);
   pdf.text('Wholeness is not the absence of cracks,', pageWidth / 2, y, { align: 'center' });
   y += 6;
   pdf.text('but no longer fearing them.', pageWidth / 2, y, { align: 'center' });
   
   // Version info
   y = pageHeight - 50;
   pdf.setFont('helvetica', 'normal');
   pdf.setFontSize(10);
   pdf.setTextColor(...lightGray);
   pdf.text(`Version ${documentData.version}`, pageWidth / 2, y, { align: 'center' });
   y += 6;
   pdf.text(documentData.date, pageWidth / 2, y, { align: 'center' });
   
   // Footer line
   y = pageHeight - 20;
   drawLine(margin + 30, y, pageWidth - margin - 30, [200, 195, 190]);
   y += 8;
   pdf.setFontSize(8);
   pdf.text('Arc to Zero - Interactive Narrative Experience', pageWidth / 2, y, { align: 'center' });
   
   // ===== TABLE OF CONTENTS =====
   pdf.addPage();
   y = margin;
   
   // Section header
   pdf.setFont('helvetica', 'bold');
   pdf.setFontSize(24);
   pdf.setTextColor(...gold);
   pdf.text('Table of Contents', margin, y);
   y += 5;
   drawLine(margin, y, margin + 60, gold);
   y += 15;
   
   const tocItems = [
     { num: '1', title: 'Public Pages Overview', page: '3' },
     { num: '2', title: 'Membership System', page: '4' },
     { num: '3', title: 'Route Reference', page: '5' },
     { num: '4', title: 'Technical Architecture', page: '6' },
     { num: '5', title: 'Data Models', page: '7' }
   ];
   
   pdf.setFont('helvetica', 'normal');
   pdf.setFontSize(12);
   tocItems.forEach(item => {
     pdf.setTextColor(...gold);
     pdf.text(item.num + '.', margin, y);
     pdf.setTextColor(...darkGray);
     pdf.text(item.title, margin + 10, y);
     
     // Dotted line
     const titleWidth = pdf.getTextWidth(item.title);
     const dotsStart = margin + 12 + titleWidth;
     const dotsEnd = pageWidth - margin - 15;
     pdf.setTextColor(...lightGray);
     let dotX = dotsStart;
     while (dotX < dotsEnd) {
       pdf.text('.', dotX, y);
       dotX += 2;
     }
     pdf.text(item.page, pageWidth - margin, y, { align: 'right' });
     y += 10;
   });
   
   // ===== SECTION 1: PUBLIC PAGES =====
   pdf.addPage();
   y = margin;
   
   // Section header
   pdf.setFillColor(...gold);
   pdf.rect(margin - 5, y - 5, 4, 14, 'F');
   pdf.setFont('helvetica', 'bold');
   pdf.setFontSize(20);
   pdf.setTextColor(...gold);
   pdf.text('1. Public Pages Overview', margin + 5, y + 5);
   y += 20;
   
   documentData.publicPages.forEach(page => {
     addNewPageIfNeeded(40);
     
     // Page card
     pdf.setFillColor(...bgBeige);
     pdf.roundedRect(margin, y, contentWidth, 30, 3, 3, 'F');
     
     pdf.setFont('helvetica', 'bold');
     pdf.setFontSize(12);
     pdf.setTextColor(...darkGray);
     pdf.text(page.name, margin + 5, y + 8);
     
     pdf.setFont('helvetica', 'normal');
     pdf.setFontSize(9);
     pdf.setTextColor(...gold);
     pdf.text(`Path: ${page.path}`, margin + 5, y + 16);
     
     if (page.content.hero) {
       pdf.setTextColor(...lightGray);
       pdf.setFontSize(8);
       const tagline = pdf.splitTextToSize(page.content.hero.tagline, contentWidth - 10);
       pdf.text(tagline, margin + 5, y + 24);
     }
     
     y += 38;
   });
   
   // ===== SECTION 2: MEMBERSHIP =====
   pdf.addPage();
   y = margin;
   
   pdf.setFillColor(...gold);
   pdf.rect(margin - 5, y - 5, 4, 14, 'F');
   pdf.setFont('helvetica', 'bold');
   pdf.setFontSize(20);
   pdf.setTextColor(...gold);
   pdf.text('2. Membership System', margin + 5, y + 5);
   y += 20;
   
   pdf.setFont('helvetica', 'normal');
   pdf.setFontSize(11);
   pdf.setTextColor(...darkGray);
   const descLines = pdf.splitTextToSize(documentData.membership.description, contentWidth);
   pdf.text(descLines, margin, y);
   y += descLines.length * 6 + 10;
   
   // Features box
   pdf.setFillColor(...bgBeige);
   const featuresHeight = documentData.membership.features.length * 8 + 15;
   pdf.roundedRect(margin, y, contentWidth, featuresHeight, 3, 3, 'F');
   
   pdf.setFont('helvetica', 'bold');
   pdf.setFontSize(11);
   pdf.setTextColor(...gold);
   pdf.text('Core Features', margin + 5, y + 8);
   
   y += 15;
   pdf.setFont('helvetica', 'normal');
   pdf.setFontSize(10);
   pdf.setTextColor(...darkGray);
   documentData.membership.features.forEach(feature => {
     pdf.text(`• ${feature}`, margin + 8, y);
     y += 7;
   });
   y += 15;
   
   // Data structure
   addNewPageIfNeeded(60);
   pdf.setFont('helvetica', 'bold');
   pdf.setFontSize(11);
   pdf.setTextColor(...gold);
   pdf.text('Data Structure', margin, y);
   y += 8;
   
   pdf.setFillColor(245, 245, 245);
   pdf.roundedRect(margin, y, contentWidth, 45, 2, 2, 'F');
   pdf.setFont('courier', 'normal');
   pdf.setFontSize(8);
   pdf.setTextColor(...darkGray);
   const codeLines = documentData.membership.dataStructure.split('\n');
   codeLines.forEach((line, i) => {
     pdf.text(line, margin + 5, y + 8 + i * 5);
   });
   
   // ===== SECTION 3: ROUTES =====
   pdf.addPage();
   y = margin;
   
   pdf.setFillColor(...gold);
   pdf.rect(margin - 5, y - 5, 4, 14, 'F');
   pdf.setFont('helvetica', 'bold');
   pdf.setFontSize(20);
   pdf.setTextColor(...gold);
   pdf.text('3. Route Reference', margin + 5, y + 5);
   y += 25;
   
   // Table header
   pdf.setFillColor(240, 235, 227);
   pdf.rect(margin, y, contentWidth, 10, 'F');
   pdf.setFont('helvetica', 'bold');
   pdf.setFontSize(9);
   pdf.setTextColor(...darkGray);
   pdf.text('Path', margin + 5, y + 7);
   pdf.text('Page', margin + 60, y + 7);
   pdf.text('Component', margin + 110, y + 7);
   y += 12;
   
   // Table rows
   pdf.setFont('helvetica', 'normal');
   documentData.routes.public.forEach((route, i) => {
     if (i % 2 === 0) {
       pdf.setFillColor(252, 250, 248);
       pdf.rect(margin, y - 4, contentWidth, 8, 'F');
     }
     pdf.setTextColor(...gold);
     pdf.text(route.path, margin + 5, y);
     pdf.setTextColor(...darkGray);
     pdf.text(route.page, margin + 60, y);
     pdf.setFont('courier', 'normal');
     pdf.setFontSize(8);
     pdf.text(route.component, margin + 110, y);
     pdf.setFont('helvetica', 'normal');
     pdf.setFontSize(9);
     y += 8;
   });
   
   // API Endpoints
   y += 15;
   pdf.setFont('helvetica', 'bold');
   pdf.setFontSize(14);
   pdf.setTextColor(...gold);
   pdf.text('API Endpoints', margin, y);
   y += 10;
   
   documentData.routes.api.forEach(api => {
     pdf.setFillColor(...bgBeige);
     pdf.roundedRect(margin, y, contentWidth, 15, 2, 2, 'F');
     pdf.setFont('courier', 'bold');
     pdf.setFontSize(9);
     pdf.setTextColor(46, 125, 50);
     pdf.text(api.method, margin + 5, y + 6);
     pdf.setTextColor(...gold);
     pdf.text(api.endpoint, margin + 30, y + 6);
     pdf.setFont('helvetica', 'normal');
     pdf.setTextColor(...lightGray);
     pdf.text(api.description, margin + 5, y + 12);
     y += 20;
   });
   
   // ===== SECTION 4: ARCHITECTURE =====
   pdf.addPage();
   y = margin;
   
   pdf.setFillColor(...gold);
   pdf.rect(margin - 5, y - 5, 4, 14, 'F');
   pdf.setFont('helvetica', 'bold');
   pdf.setFontSize(20);
   pdf.setTextColor(...gold);
   pdf.text('4. Technical Architecture', margin + 5, y + 5);
   y += 25;
   
   // Tech stack grid
   const stackEntries = Object.entries(documentData.architecture.techStack);
   const colWidth = (contentWidth - 10) / 2;
   
   stackEntries.forEach((entry, i) => {
     const [category, items] = entry;
     const col = i % 2;
     const x = margin + col * (colWidth + 10);
     
     if (col === 0 && i > 0) y += 25;
     
     pdf.setFillColor(...bgBeige);
     pdf.roundedRect(x, y, colWidth, 20, 2, 2, 'F');
     
     pdf.setFont('helvetica', 'bold');
     pdf.setFontSize(10);
     pdf.setTextColor(...gold);
     pdf.text(category.charAt(0).toUpperCase() + category.slice(1), x + 5, y + 7);
     
     pdf.setFont('helvetica', 'normal');
     pdf.setFontSize(8);
     pdf.setTextColor(...darkGray);
     pdf.text((items as string[]).join(' • '), x + 5, y + 14);
   });
   
   y += 40;
   
   // Hooks section
   pdf.setFont('helvetica', 'bold');
   pdf.setFontSize(14);
   pdf.setTextColor(...gold);
   pdf.text('Core Hooks', margin, y);
   y += 10;
   
   documentData.architecture.hooks.forEach((hook, i) => {
     if (i % 2 === 0) {
       pdf.setFillColor(252, 250, 248);
       pdf.rect(margin, y - 4, contentWidth, 8, 'F');
     }
     pdf.setFont('courier', 'normal');
     pdf.setFontSize(9);
     pdf.setTextColor(...gold);
     pdf.text(hook.name, margin + 5, y);
     pdf.setFont('helvetica', 'normal');
     pdf.setTextColor(...lightGray);
     pdf.text(hook.desc, margin + 70, y);
     y += 8;
   });
   
   // ===== FOOTER ON LAST PAGE =====
   y = pageHeight - 25;
   drawLine(margin, y, pageWidth - margin, [200, 195, 190]);
   y += 10;
   pdf.setFont('helvetica', 'normal');
   pdf.setFontSize(8);
   pdf.setTextColor(...lightGray);
   pdf.text('© 2025 Arc to Zero. All rights reserved.', pageWidth / 2, y, { align: 'center' });
   y += 5;
   pdf.text('This document is for reference purposes only.', pageWidth / 2, y, { align: 'center' });
   
   // Save
   pdf.save(`ArcToZero_Documentation_${documentData.date.replace(/\//g, '-')}.pdf`);
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