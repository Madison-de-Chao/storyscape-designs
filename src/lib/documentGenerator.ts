 import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, Table, TableRow, TableCell, WidthType, ShadingType } from 'docx';
 import { saveAs } from 'file-saver';
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
 
 // ============ PDF Generator ============
 export async function generatePDF(): Promise<void> {
   // Create a temporary container for PDF content
   const container = document.createElement('div');
   container.style.cssText = `
     position: fixed;
     left: -9999px;
     top: 0;
     width: 800px;
     padding: 40px;
     background: white;
     color: #1a1a1a;
     font-family: 'Noto Serif TC', serif;
   `;
   
   container.innerHTML = `
     <div style="text-align: center; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 2px solid #d4a574;">
       <h1 style="font-size: 32px; margin: 0; color: #8b6914;">弧度歸零</h1>
       <p style="font-size: 14px; color: #666; margin: 8px 0;">Arc to Zero</p>
       <p style="font-size: 18px; color: #333; margin-top: 16px;">系統文檔</p>
       <p style="font-size: 12px; color: #999; margin-top: 8px;">版本 ${documentData.version} | ${documentData.date}</p>
     </div>
     
     <div style="margin-bottom: 30px;">
       <h2 style="font-size: 20px; color: #8b6914; border-left: 4px solid #d4a574; padding-left: 12px;">一、公開頁面內容</h2>
       ${documentData.publicPages.map(page => `
         <div style="margin: 20px 0; padding: 16px; background: #f9f7f4; border-radius: 8px;">
           <h3 style="font-size: 16px; color: #333; margin: 0 0 8px 0;">${page.name}</h3>
           <p style="font-size: 12px; color: #666; margin: 0;">路徑：${page.path}</p>
           ${page.path === '/' ? `
             <div style="margin-top: 12px; padding: 12px; background: white; border-radius: 4px;">
               <p style="font-size: 14px; color: #8b6914; margin: 0;">${page.content.hero?.tagline}</p>
               <p style="font-size: 12px; color: #666; margin: 8px 0 0 0;">${page.content.hero?.description}</p>
             </div>
           ` : ''}
         </div>
       `).join('')}
     </div>
     
     <div style="margin-bottom: 30px;">
       <h2 style="font-size: 20px; color: #8b6914; border-left: 4px solid #d4a574; padding-left: 12px;">二、會員系統</h2>
       <p style="font-size: 14px; color: #333; margin: 16px 0;">${documentData.membership.description}</p>
       <ul style="font-size: 12px; color: #666; padding-left: 20px;">
         ${documentData.membership.features.map(f => `<li style="margin: 4px 0;">${f}</li>`).join('')}
       </ul>
     </div>
     
     <div style="margin-bottom: 30px;">
       <h2 style="font-size: 20px; color: #8b6914; border-left: 4px solid #d4a574; padding-left: 12px;">三、路由對照表</h2>
       <table style="width: 100%; border-collapse: collapse; font-size: 12px; margin-top: 16px;">
         <thead>
           <tr style="background: #f0ebe3;">
             <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">路徑</th>
             <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">頁面</th>
             <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">組件</th>
           </tr>
         </thead>
         <tbody>
           ${documentData.routes.public.map(r => `
             <tr>
               <td style="padding: 8px; border: 1px solid #ddd; color: #8b6914;">${r.path}</td>
               <td style="padding: 8px; border: 1px solid #ddd;">${r.page}</td>
               <td style="padding: 8px; border: 1px solid #ddd; font-family: monospace; font-size: 11px;">${r.component}</td>
             </tr>
           `).join('')}
         </tbody>
       </table>
     </div>
     
     <div style="margin-bottom: 30px;">
       <h2 style="font-size: 20px; color: #8b6914; border-left: 4px solid #d4a574; padding-left: 12px;">四、技術架構</h2>
       <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px;">
         ${Object.entries(documentData.architecture.techStack).map(([category, items]) => `
           <div style="padding: 12px; background: #f9f7f4; border-radius: 4px;">
             <p style="font-size: 12px; color: #8b6914; margin: 0 0 4px 0; font-weight: bold;">${category}</p>
             <p style="font-size: 11px; color: #666; margin: 0;">${(items as string[]).join(' • ')}</p>
           </div>
         `).join('')}
       </div>
     </div>
     
     <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd;">
       <p style="font-size: 11px; color: #999;">© 2025 弧度歸零 Arc to Zero. All rights reserved.</p>
     </div>
   `;
   
   document.body.appendChild(container);
   
   try {
     const canvas = await html2canvas(container, {
       scale: 2,
       useCORS: true,
       logging: false
     });
     
     // Convert to PDF using jsPDF-like approach (simplified blob download)
     canvas.toBlob((blob) => {
       if (blob) {
         // For now, download as PNG (a proper PDF would require jsPDF)
         saveAs(blob, `弧度歸零_系統文檔_${documentData.date.replace(/\//g, '-')}.png`);
       }
     }, 'image/png', 1.0);
   } finally {
     document.body.removeChild(container);
   }
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