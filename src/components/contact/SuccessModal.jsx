import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export default function SuccessModal({ isOpen, packetHash, onReset }) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-surface-container-lowest/95 backdrop-blur-2xl rounded-xl flex flex-col items-center justify-center p-6 text-center z-30 font-mono border border-primary-container/40">
      <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container mb-4 shadow-[0_0_25px_rgba(0,245,255,0.5)] border border-primary-container/30">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <span className="text-xs text-secondary font-bold tracking-widest uppercase">
        [SIGNAL ENCRYPTED & DELIVERED]
      </span>

      <h2 className="font-headline text-2xl text-primary font-bold mt-1 mb-2">
        訊號已成功傳輸
      </h2>

      <p className="font-body text-sm text-on-surface-variant max-w-md mb-6 leading-relaxed">
        感謝您的聯絡！您的提案數據包已安全投遞至藝術家控制台，我們將在 24 小時內回覆至您的中繼信箱。
      </p>

      <div className="bg-surface-container-high/80 px-4 py-2 rounded text-xs text-primary mb-6 border border-primary-container/20">
        PACKET_HASH: <span className="font-bold text-primary-container">{packetHash}</span>
      </div>

      <button
        onClick={onReset}
        className="hud-bracket px-6 py-2.5 bg-surface-container-highest hover:bg-primary-container hover:text-on-primary text-on-surface text-xs rounded transition-all cursor-pointer font-bold border border-primary-container/30"
      >
        &lt; 建立新傳輸連線 / RESET &gt;
      </button>
    </div>
  );
}
