import React from 'react';
import { Cpu, PenTool } from 'lucide-react';
import { SOFTWARE_MATRIX, ADDITIONAL_TOOLS } from '../../data/skills';

export default function SoftwareMatrix() {
  return (
    <div className="bg-surface-container-low/90 backdrop-blur-xl rounded-xl p-4 sm:p-6 shadow-xl flex flex-col gap-4 border border-outline-variant/30 font-mono">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-primary-container" />
          <span className="text-xs sm:text-sm text-primary tracking-wide font-bold">
            CORE SOFTWARE PRODUCTION MATRIX
          </span>
        </div>
        <span className="text-[10px] text-secondary-fixed-dim uppercase">[64-BIT DUAL-ACCEL]</span>
      </div>

      {/* Software 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {SOFTWARE_MATRIX.map((item, idx) => (
          <div
            key={idx}
            className="bg-surface-container p-4 rounded-lg flex flex-col justify-between hover:bg-surface-container-high transition-all border border-outline-variant/20"
          >
            <div className="flex items-center justify-between">
              <div className={`w-10 h-10 rounded ${item.colorBg} ${item.colorText} font-bold font-mono flex items-center justify-center text-lg shadow-sm border border-outline-variant/30`}>
                {item.abbr}
              </div>
              <span className="font-headline text-lg sm:text-xl text-primary font-bold">
                {item.percentage}%
              </span>
            </div>

            <div className="mt-4 flex flex-col">
              <span className="font-headline text-sm sm:text-base text-on-surface font-semibold">
                {item.name}
              </span>
              <span className="text-[10px] text-outline mt-0.5">{item.tag}</span>

              {/* Progress bar */}
              <div className="w-full bg-surface-container-highest h-1 rounded-full mt-3 overflow-hidden">
                <div
                  className={`h-full ${item.barColor} transition-all duration-500`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Pipeline Chips */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-surface-container-high text-xs">
        <span className="text-[10px] text-outline mr-1">ADDITIONAL PIPELINE:</span>
        {ADDITIONAL_TOOLS.map((tool, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 bg-surface-container rounded text-[11px] text-on-surface-variant hover:text-primary transition-colors cursor-default border border-outline-variant/20"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
