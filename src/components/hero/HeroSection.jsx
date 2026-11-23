import React from 'react';
import TelemetryRibbon from './TelemetryRibbon';
import HeroBio from './HeroBio';
import HeroViewport from './HeroViewport';

export default function HeroSection({ onOpenCommandPalette }) {
  return (
    <section id="hero" className="w-full px-4 sm:px-8 lg:px-16 pt-6 pb-12 flex flex-col gap-6 relative">
      {/* Top System Telemetry Ribbon */}
      <TelemetryRibbon />

      {/* Main Hero Asymmetric Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
        {/* Left Column: Bio, CTAs & Telemetry Stats */}
        <HeroBio onOpenCommandPalette={onOpenCommandPalette} />

        {/* Right Column: Master Illustration Viewport */}
        <HeroViewport />
      </div>
    </section>
  );
}
