import React from 'react';
import AboutHeader from './AboutHeader';
import ArtistIdCard from './ArtistIdCard';
import CareerTimeline from './CareerTimeline';
import SkillGauge from './SkillGauge';
import DonutGauge from './DonutGauge';
import SoftwareMatrix from './SoftwareMatrix';
import DossierDownloadBar from './DossierDownloadBar';
import { Sliders } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="w-full relative px-4 sm:px-8 lg:px-16 py-12">
      {/* Header Block */}
      <AboutHeader />

      {/* Main Asymmetric Split Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start pt-8">
        {/* Left Column: ID Card & Career Timeline (xl:col-span-5) */}
        <div className="xl:col-span-5 flex flex-col gap-8">
          <ArtistIdCard />
          <CareerTimeline />
        </div>

        {/* Right Column: Skills, Gauges & Software Metrics (xl:col-span-7) */}
        <div className="xl:col-span-7 flex flex-col gap-8">
          {/* Core Disciplines Telemetry Panel */}
          <div className="bg-surface-container-low/90 backdrop-blur-xl rounded-xl p-4 sm:p-6 shadow-xl flex flex-col gap-6 relative overflow-hidden border border-outline-variant/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono">
              <div>
                <div className="flex items-center gap-2 text-primary-container text-xs">
                  <Sliders className="w-4 h-4" />
                  <span className="uppercase tracking-widest font-bold">TACTICAL ATTRIBUTES</span>
                </div>
                <h3 className="font-headline text-xl text-primary font-bold mt-1">
                  Artistic & Visual Specialization
                </h3>
              </div>
              <span className="text-[11px] px-3 py-1 bg-surface-container rounded text-outline self-start sm:self-auto border border-outline-variant/20">
                REFRESH_RATE: 120Hz
              </span>
            </div>

            {/* Segmented Skill Level Meters */}
            <SkillGauge />

            {/* Inline Technical SVG Radar / Donut Visualization */}
            <DonutGauge />
          </div>

          {/* Software Proficiency & Hardware Engines */}
          <SoftwareMatrix />

          {/* Action Bar: Download PDF Dossier & Quick Contact */}
          <DossierDownloadBar />
        </div>
      </div>
    </section>
  );
}
