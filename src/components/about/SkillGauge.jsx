import React from 'react';
import { Brush, UserCheck, Globe, Layers } from 'lucide-react';
import { DISCIPLINES } from '../../data/skills';

export default function SkillGauge() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'brush': return <Brush className="w-4 h-4 text-primary-container" />;
      case 'accessibility_new': return <UserCheck className="w-4 h-4 text-secondary-fixed-dim" />;
      case 'public': return <Globe className="w-4 h-4 text-secondary-fixed-dim" />;
      default: return <Layers className="w-4 h-4 text-primary-container" />;
    }
  };

  return (
    <div className="flex flex-col gap-3 font-mono">
      {DISCIPLINES.map((skill, idx) => (
        <div
          key={idx}
          className="bg-surface-container p-4 rounded-lg flex flex-col gap-2 group hover:bg-surface-container-high transition-colors border border-outline-variant/20"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {getIcon(skill.icon)}
              <span className="font-headline text-sm sm:text-base text-on-surface font-semibold">
                {skill.name}
              </span>
              <span className="hidden sm:inline text-[10px] text-secondary-fixed-dim px-2 py-0.5 bg-secondary-container/20 rounded">
                {skill.subtitle}
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className={`text-[10px] font-bold uppercase ${
                skill.accentColor === 'cyan' ? 'text-primary-container' : 'text-secondary-fixed-dim'
              }`}>
                [{skill.status}]
              </span>
              <span className="text-sm sm:text-base text-primary font-bold">
                {skill.level}%
              </span>
            </div>
          </div>

          {/* 16 Segment Block Gauge */}
          <div className="grid grid-cols-16 gap-1 w-full mt-1">
            {Array.from({ length: skill.totalTicks }).map((_, tickIdx) => {
              const isFilled = tickIdx < skill.filledTicks;
              let fillClass = 'bg-surface-container-highest';
              if (isFilled) {
                fillClass = skill.accentColor === 'cyan'
                  ? 'bg-primary-container shadow-[0_0_6px_#00f5ff]'
                  : 'bg-secondary-fixed-dim shadow-[0_0_6px_#e0b6ff]';
              }
              return (
                <div
                  key={tickIdx}
                  className={`h-2 rounded-xs ${fillClass} transition-all duration-300`}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
