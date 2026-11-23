import React from 'react';
import { Zap, Terminal, ArrowRight, Sparkles } from 'lucide-react';
import { PROFILE } from '../../data/profile';

export default function HeroBio({ onOpenCommandPalette }) {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop - 70;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:col-span-7 flex flex-col gap-6 z-10">
      {/* Status Overline Badge */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="px-3 py-1 bg-surface-container-high text-primary font-mono text-xs rounded flex items-center gap-2 border border-primary-container/20">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
          <span className="font-bold">CYBERPUNK 2D CONCEPT SPEC</span>
        </div>
        <div className="px-3 py-1 bg-secondary-container/40 text-secondary-fixed font-mono text-xs rounded border border-secondary/30">
          SYS.VER.2099 // CORE
        </div>
      </div>

      {/* Main Display Title with Glitch/Luminescence Aesthetic */}
      <div className="relative group cursor-default">
        <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-primary font-bold tracking-tight uppercase leading-tight select-none drop-shadow-[0_0_25px_rgba(0,245,255,0.35)]">
          WELCOME TO MY <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-secondary to-tertiary-fixed">
            DIGITAL WORLD.
          </span>
        </h1>
        <div className="font-headline text-lg sm:text-2xl text-secondary-fixed-dim font-bold tracking-widest mt-2 flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary-container fill-primary-container" />
          <span>{PROFILE.heroSubtitle}</span>
        </div>
      </div>

      {/* Multilingual Editorial Bio */}
      <p className="font-body text-base lg:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
        {PROFILE.bioZh} {PROFILE.bioEn}
      </p>

      {/* Dynamic Micro Gauges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-2 max-w-lg font-mono">
        {/* Gauge 1 */}
        <div className="flex flex-col gap-1.5 p-3 bg-surface-container-low/90 rounded border border-outline-variant/30 backdrop-blur-sm shadow-sm">
          <span className="text-[10px] text-outline-variant uppercase">GPU RENDER LOAD</span>
          <div className="flex gap-1">
            <span className="w-2.5 h-1.5 rounded-xs bg-primary-container" />
            <span className="w-2.5 h-1.5 rounded-xs bg-primary-container" />
            <span className="w-2.5 h-1.5 rounded-xs bg-primary-container" />
            <span className="w-2.5 h-1.5 rounded-xs bg-primary-container" />
            <span className="w-2.5 h-1.5 rounded-xs bg-surface-container-highest" />
          </div>
          <span className="text-xs text-primary font-bold">84% CALIBRATED</span>
        </div>

        {/* Gauge 2 */}
        <div className="flex flex-col gap-1.5 p-3 bg-surface-container-low/90 rounded border border-outline-variant/30 backdrop-blur-sm shadow-sm">
          <span className="text-[10px] text-outline-variant uppercase">KEYFRAME BUFFER</span>
          <div className="flex gap-1">
            <span className="w-2.5 h-1.5 rounded-xs bg-secondary" />
            <span className="w-2.5 h-1.5 rounded-xs bg-secondary" />
            <span className="w-2.5 h-1.5 rounded-xs bg-secondary" />
            <span className="w-2.5 h-1.5 rounded-xs bg-secondary" />
            <span className="w-2.5 h-1.5 rounded-xs bg-secondary" />
          </div>
          <span className="text-xs text-secondary-fixed font-bold">128-BIT EXR</span>
        </div>

        {/* Gauge 3 */}
        <div className="flex flex-col gap-1.5 p-3 bg-surface-container-low/90 rounded border border-outline-variant/30 backdrop-blur-sm shadow-sm">
          <span className="text-[10px] text-outline-variant uppercase">CANVAS PROTOCOL</span>
          <div className="flex gap-1">
            <span className="w-2.5 h-1.5 rounded-xs bg-tertiary-fixed-dim" />
            <span className="w-2.5 h-1.5 rounded-xs bg-tertiary-fixed-dim" />
            <span className="w-2.5 h-1.5 rounded-xs bg-tertiary-fixed-dim" />
            <span className="w-2.5 h-1.5 rounded-xs bg-surface-container-highest" />
            <span className="w-2.5 h-1.5 rounded-xs bg-surface-container-highest" />
          </div>
          <span className="text-xs text-tertiary-fixed font-bold">ACTIVE SYNC</span>
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-1">
        {/* Primary CTA */}
        <button
          onClick={() => scrollTo('works')}
          className="hud-bracket group relative px-6 py-3.5 bg-primary-container hover:bg-primary-fixed text-on-primary font-mono text-xs font-bold rounded flex items-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(0,245,255,0.45)] hover:shadow-[0_0_30px_rgba(0,245,255,0.8)] active:scale-95 cursor-pointer"
        >
          <Zap className="w-4 h-4 fill-current transition-transform group-hover:rotate-45" />
          <span>EXPLORE MY WORKS ⚡</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Secondary CTA */}
        <button
          onClick={() => scrollTo('contact')}
          className="hud-bracket px-6 py-3.5 bg-surface-container-high hover:bg-surface-bright text-secondary hover:text-secondary-fixed font-mono text-xs font-bold rounded flex items-center gap-2 transition-all duration-300 border border-secondary/40 shadow-sm hover:shadow-[0_0_18px_rgba(224,182,255,0.25)] active:scale-95 cursor-pointer"
        >
          <Terminal className="w-4 h-4 text-secondary" />
          <span>CONTACT ME 📡</span>
        </button>

        {/* Command shortcut hint */}
        <button
          onClick={onOpenCommandPalette}
          className="hidden sm:flex items-center gap-2 text-outline font-mono text-xs hover:text-primary transition-colors pl-2"
        >
          <span>PRESS</span>
          <kbd className="px-2 py-0.5 bg-surface-container-high text-primary rounded text-xs font-mono border border-primary-container/30">
            ⌘K
          </kbd>
          <span>FOR COMMANDS</span>
        </button>
      </div>

      {/* Telemetry Stats Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 mt-2 border-t border-surface-container-high font-mono">
        <div className="flex flex-col p-3 bg-surface-container-lowest/60 rounded border border-outline-variant/20">
          <div className="flex items-baseline gap-1">
            <span className="font-headline text-3xl text-primary font-bold">
              {PROFILE.stats.archivedPieces}
            </span>
          </div>
          <span className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-1">
            CONCEPT PIECES ARCHIVED
          </span>
        </div>

        <div className="flex flex-col p-3 bg-surface-container-lowest/60 rounded border border-outline-variant/20">
          <div className="flex items-baseline gap-1">
            <span className="font-headline text-3xl text-secondary-fixed font-bold">
              {PROFILE.stats.yearsMastery}
            </span>
          </div>
          <span className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-1">
            YEARS 2D SCI-FI MASTERY
          </span>
        </div>

        <div className="flex flex-col p-3 bg-surface-container-lowest/60 rounded border border-outline-variant/20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#00f5ff]" />
            <span className="font-headline text-2xl text-primary font-bold tracking-tight">
              {PROFILE.stats.slotsStatus}
            </span>
          </div>
          <span className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-1">
            COMMISSION & STUDIO SLOTS
          </span>
        </div>
      </div>
    </div>
  );
}
