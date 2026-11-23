import React from 'react';
import { ShieldCheck, Monitor, Zap } from 'lucide-react';

export default function TopTelemetryStrip() {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 py-3 flex flex-wrap items-center justify-between gap-3 bg-surface-container-lowest border-y border-surface-container-high font-mono text-xs">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping" />
          <span className="text-primary tracking-widest font-bold">
            DATASTREAM: SECURE // 256-BIT SYNC
          </span>
        </div>
        <span className="text-outline-variant">/</span>
        <span className="text-on-surface-variant">ARCHIVE_INDEX: v4.81</span>
        <span className="text-outline-variant hidden sm:inline">/</span>
        <span className="text-secondary hidden sm:inline">
          ACTIVE_RENDER: NEURAL_BUFFER_LOADED
        </span>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1.5 text-on-surface-variant">
          <span>GPU_ACCEL:</span>
          <span className="text-primary font-bold">100% TACTICAL</span>
        </div>
        <div className="hidden md:flex items-center gap-1.5 text-on-surface-variant">
          <Monitor className="w-3.5 h-3.5 text-primary-fixed-dim" />
          <span>VIEWPORT:</span>
          <span className="text-primary-fixed-dim">UHD 3840×2160</span>
        </div>
      </div>
    </div>
  );
}
