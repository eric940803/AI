import React from 'react';
import { History } from 'lucide-react';
import { TIMELINE } from '../../data/timeline';

export default function CareerTimeline() {
  return (
    <div className="bg-surface-container-low/90 backdrop-blur-xl rounded-xl p-4 sm:p-6 shadow-xl flex flex-col gap-4 border border-outline-variant/30">
      <div className="flex items-center justify-between font-mono">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-secondary" />
          <span className="text-xs sm:text-sm text-primary tracking-wide font-bold">
            CAREER TIMELINE // 創作歷程
          </span>
        </div>
        <span className="text-[10px] text-outline">CHRONO-LOG</span>
      </div>

      {/* Vertical Timeline Items */}
      <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-highest">
        {TIMELINE.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Glowing Dot */}
            <span className={`absolute -left-6 top-2 w-3.5 h-3.5 rounded-full ${item.dotColor}`} />

            <div className="bg-surface-container p-3 rounded-lg border border-outline-variant/20 group-hover:border-primary-container/40 transition-colors">
              <div className="flex items-center justify-between font-mono">
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${item.badgeColor}`}>
                  {item.period}
                </span>
                <span className="text-[10px] text-primary-container uppercase tracking-wider font-semibold">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-headline text-base text-on-surface font-semibold mt-1">
                {item.role}
              </h3>
              <p className="font-body text-xs text-on-surface-variant mt-0.5">
                {item.studio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
