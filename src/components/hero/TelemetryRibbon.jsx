import React from 'react';
import { Crosshair, Cpu, Radio } from 'lucide-react';

export default function TelemetryRibbon() {
  return (
    <div className="w-full flex flex-wrap items-center justify-between gap-3 py-2 px-4 bg-surface-container-lowest/80 backdrop-blur-md rounded border border-outline-variant/30 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />
          <span className="font-mono text-xs text-primary tracking-widest font-bold">
            INTERFACE // 01 HERO
          </span>
        </div>
        <span className="hidden sm:inline-block font-mono text-xs text-outline">|</span>
        <span className="font-mono text-xs text-on-surface-variant flex items-center gap-1.5">
          <Crosshair className="w-3.5 h-3.5 text-primary-fixed-dim" />
          LAT: 35.6762° N // LNG: 139.6503° E
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-1.5 font-mono text-xs text-secondary">
          <Cpu className="w-3.5 h-3.5" />
          <span>NEURAL_LINK: STABLE [99.8%]</span>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 bg-surface-container-high rounded font-mono text-xs text-primary-fixed-dim tracking-wider">
          <Radio className="w-3 h-3 text-primary-container" />
          <span>FREQ: 434.92 MHz</span>
        </div>
      </div>
    </div>
  );
}
