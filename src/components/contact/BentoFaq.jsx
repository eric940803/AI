import React from 'react';
import { PenTool, FileCheck, Layers } from 'lucide-react';

export default function BentoFaq() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-6 border-t border-surface-container-high">
      {/* Bento 1 */}
      <div className="bg-surface-container-low/70 p-5 rounded-xl flex flex-col gap-2 shadow-md border border-outline-variant/30">
        <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold">
          <PenTool className="w-4 h-4 text-primary-container" />
          <span>WORKFLOW TIMELINE</span>
        </div>
        <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          標準單幅概念設計週期約為 5 - 10 個工作天，包含草圖（Thumbnails）、光影打光（Lighting Keys）與最終上色拋光階段。
        </p>
      </div>

      {/* Bento 2 */}
      <div className="bg-surface-container-low/70 p-5 rounded-xl flex flex-col gap-2 shadow-md border border-outline-variant/30">
        <div className="flex items-center gap-2 text-secondary font-mono text-xs font-bold">
          <FileCheck className="w-4 h-4 text-secondary-fixed-dim" />
          <span>RIGHTS & LICENSING</span>
        </div>
        <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          支援商業買斷（Full Buyout）、專案專屬授權（Exclusive Project Usage）與非獨家授權合約，提供清晰雙方協議文本。
        </p>
      </div>

      {/* Bento 3 */}
      <div className="bg-surface-container-low/70 p-5 rounded-xl flex flex-col gap-2 shadow-md border border-outline-variant/30">
        <div className="flex items-center gap-2 text-primary-fixed-dim font-mono text-xs font-bold">
          <Layers className="w-4 h-4 text-primary-container" />
          <span>DELIVERABLE ASSETS</span>
        </div>
        <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          交付分層 PSD 檔、高解析度 8K/4K TIFF 印刷檔、以及包含色彩打光圖層的專案拆解展示包。
        </p>
      </div>
    </div>
  );
}
