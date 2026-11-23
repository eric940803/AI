import React from 'react';

export default function CommissionBeacon() {
  return (
    <div className="bg-surface-container-low/85 backdrop-blur-xl p-5 rounded-xl shadow-xl relative overflow-hidden border border-outline-variant/30">
      <div className="flex items-center justify-between mb-3 font-mono">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-container" />
          </span>
          <span className="text-xs text-primary tracking-wider font-bold">
            COMMISSION STATUS
          </span>
        </div>
        <span className="text-[10px] bg-surface-container-high px-2 py-0.5 text-secondary rounded border border-secondary/30">
          Q3 / Q4 2024 ACTIVE
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <div className="font-headline text-base sm:text-lg text-on-surface font-semibold">
          OPEN FOR CONCEPT ART & KEYFRAMES
        </div>
        <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          接案狀態開啟中：承接遊戲角色原畫、賽博龐克場景概念美術、影視分鏡與專輯視覺包裝。
        </p>
      </div>

      {/* Capacity Segmented HUD Meter */}
      <div className="mt-4 pt-3 bg-surface-container-lowest/60 p-3 rounded border border-outline-variant/20 font-mono">
        <div className="flex justify-between items-center text-xs mb-2">
          <span className="text-outline text-[11px]">NEURAL BANDWIDTH // 接案載荷</span>
          <span className="text-primary font-bold">4 / 6 SLOTS RESERVED</span>
        </div>
        <div className="grid grid-cols-6 gap-1.5 h-2">
          <div className="bg-primary-container rounded-xs shadow-[0_0_8px_rgba(0,245,255,0.6)]" />
          <div className="bg-primary-container rounded-xs shadow-[0_0_8px_rgba(0,245,255,0.6)]" />
          <div className="bg-primary-container rounded-xs shadow-[0_0_8px_rgba(0,245,255,0.6)]" />
          <div className="bg-primary-container rounded-xs shadow-[0_0_8px_rgba(0,245,255,0.6)]" />
          <div className="bg-surface-container-highest rounded-xs" />
          <div className="bg-surface-container-highest rounded-xs" />
        </div>
      </div>
    </div>
  );
}
