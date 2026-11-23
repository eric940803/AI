import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { CATEGORIES } from '../../data/artworks';

export default function CategoryFilter({ currentFilter, onSelectFilter }) {
  return (
    <div className="w-full flex flex-wrap items-center gap-2 py-4">
      {CATEGORIES.map((cat) => {
        const isActive = currentFilter === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectFilter(cat.id)}
            className={`group px-4 py-2 rounded font-mono text-xs transition-all flex items-center gap-2 border cursor-pointer ${
              isActive
                ? 'bg-surface-container-high text-primary-fixed border-primary-container shadow-[0_0_12px_rgba(0,245,255,0.35)] font-bold'
                : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-primary border-outline-variant/30'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isActive
                  ? 'bg-primary-container shadow-[0_0_6px_#00f5ff]'
                  : 'bg-outline-variant group-hover:bg-primary-container'
              }`}
            />
            <span>{cat.label}</span>
            <span className={`text-[10px] ${isActive ? 'text-primary' : 'text-outline'}`}>
              [{cat.count}]
            </span>
          </button>
        );
      })}

      <div className="ml-auto hidden xl:flex items-center gap-2 text-on-surface-variant font-mono text-xs">
        <SlidersHorizontal className="w-3.5 h-3.5 text-primary-container" />
        <span>RENDER_MATRIX: CYBER_SYNTHETIC // ACTIVE</span>
      </div>
    </div>
  );
}
