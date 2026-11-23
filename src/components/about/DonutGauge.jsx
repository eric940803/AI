import React from 'react';
import { RADAR_METRICS } from '../../data/skills';

export default function DonutGauge() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-mono">
      {RADAR_METRICS.map((metric, idx) => {
        // Circumference calculation for r=15.9155 is ~100
        const strokeDasharray = `${metric.percentage}, ${100 - metric.percentage}`;
        return (
          <div
            key={idx}
            className="bg-surface-container p-4 rounded-lg flex items-center gap-4 border border-outline-variant/20"
          >
            <svg className="w-16 h-16 shrink-0" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                fill="none"
                r="15.9155"
                stroke="#2a2930"
                strokeWidth="3"
              />
              <circle
                cx="18"
                cy="18"
                fill="none"
                r="15.9155"
                stroke={metric.color}
                strokeDasharray={strokeDasharray}
                strokeLinecap="round"
                strokeWidth="3"
              />
              <text
                className="font-headline font-bold text-center"
                fill="#e9feff"
                fontSize="8"
                textAnchor="middle"
                x="18"
                y="21"
              >
                {metric.percentage}%
              </text>
            </svg>
            <div className="flex flex-col">
              <span className="text-[10px] text-outline uppercase">{metric.label}</span>
              <span className="font-headline text-sm sm:text-base text-on-surface font-semibold">
                {metric.title}
              </span>
              <span className="font-body text-xs text-on-surface-variant mt-0.5">
                {metric.desc}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
