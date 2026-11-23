import React from 'react';

export default function ContactHeader() {
  return (
    <div className="flex flex-col gap-4 mb-8">
      {/* Cyber Grid Subtle Line Markers & Decorative Coordinates */}
      <div className="flex items-center justify-between font-mono text-xs text-outline-variant pb-2 border-b border-surface-container-high">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-primary-container shadow-[0_0_6px_#00f5ff]" />
          <span className="text-primary font-bold">SYS_COMM_CH // PORT 443_SECURE</span>
          <span className="text-surface-variant">//</span>
          <span className="text-on-surface-variant">FREQ: 89.4 MHz</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>LOC: SECTOR_09 // RAIN_ALLEY</span>
          <span className="text-primary-fixed-dim">SIGNAL: 99.8% LOSSLESS</span>
        </div>
      </div>

      {/* Section Title Unit */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 font-mono">
          <span className="px-2.5 py-0.5 bg-surface-container-high text-primary-fixed text-xs rounded hud-bracket border border-primary-container/30">
            04 // TERMINAL
          </span>
          <span className="text-xs text-secondary tracking-widest font-bold">
            [UPLINK READY]
          </span>
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl text-primary tracking-tight font-bold">
          TRANSMISSION TERMINAL
        </h1>
        <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
          ESTABLISH NEURAL LINK & COMMISSION COMMUNICATOR // 建立神經網絡通訊通道，開展賽博龐克視覺概念與商業插畫委託。
        </p>
      </div>
    </div>
  );
}
