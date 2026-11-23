import React from 'react';
import { Cpu } from 'lucide-react';

export default function AboutHeader() {
  return (
    <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-4 pt-4 pb-8 border-b border-surface-container-high">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 text-primary-fixed-dim font-mono text-xs">
          <span className="w-2 h-2 bg-primary-container inline-block shadow-[0_0_8px_#00f5ff]" />
          <span className="uppercase tracking-widest text-primary-container font-bold">
            DATABASE RECORD: SEC_03 // AUTHORIZED ACCESS
          </span>
        </div>
        <div className="flex items-baseline gap-3 mt-1">
          <span className="font-headline text-3xl sm:text-4xl lg:text-5xl text-primary tracking-tighter font-bold">
            03 // CREATOR DOSSIER
          </span>
        </div>
        <p className="font-headline text-lg sm:text-xl text-on-surface-variant font-medium mt-1">
          ABOUT ME & NEURAL CAPABILITIES
        </p>
      </div>

      {/* Telemetry Status Box */}
      <div className="flex items-center gap-4 self-start md:self-auto bg-surface-container-low/80 backdrop-blur-md px-4 py-2.5 rounded-lg border border-outline-variant/30 shadow-sm font-mono text-xs">
        <div className="flex flex-col text-right">
          <span className="text-[10px] text-outline">SYS_DIAGNOSTICS</span>
          <span className="text-primary-fixed tracking-wider font-bold">NEURAL LINK: 99.8%</span>
        </div>
        <div className="h-8 w-px bg-surface-container-highest" />
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-6 bg-primary-container rounded-sm shadow-[0_0_6px_#00f5ff]" />
          <span className="w-1.5 h-6 bg-primary-container rounded-sm shadow-[0_0_6px_#00f5ff]" />
          <span className="w-1.5 h-6 bg-primary-container rounded-sm shadow-[0_0_6px_#00f5ff]" />
          <span className="w-1.5 h-6 bg-secondary-fixed-dim rounded-sm" />
          <span className="w-1.5 h-6 bg-surface-container-highest rounded-sm" />
        </div>
      </div>
    </div>
  );
}
