import React, { useState } from 'react';
import TopTelemetryStrip from './TopTelemetryStrip';
import CategoryFilter from './CategoryFilter';
import ArtworkCard from './ArtworkCard';
import ArtworkModal from './ArtworkModal';
import DataStreamMetricBar from './DataStreamMetricBar';
import { ARTWORKS } from '../../data/artworks';

export default function WorksSection({ activeArtworkId, setActiveArtworkId }) {
  const [currentFilter, setCurrentFilter] = useState('all');

  const filteredArtworks = currentFilter === 'all'
    ? ARTWORKS
    : ARTWORKS.filter(item => item.category === currentFilter);

  return (
    <section id="works" className="w-full relative">
      {/* Top Ambient Telemetry Strip */}
      <TopTelemetryStrip />

      {/* Main Showcase Container */}
      <div className="w-full px-4 sm:px-8 lg:px-16 py-12 relative">
        {/* Header Block with Cyberpunk Angular Accents */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-surface-container-high">
          <div className="flex flex-col gap-2 max-w-3xl">
            <div className="flex items-center gap-3 font-mono">
              <span className="px-2.5 py-0.5 bg-surface-container-high text-primary-container text-xs tracking-widest hud-bracket border border-primary-container/30">
                FILE_SYS // 02
              </span>
              <span className="text-xs text-outline tracking-wider">
                SEC_CLASS: LEVEL_9_CLEARANCE
              </span>
              <span className="w-12 h-px bg-outline-variant hidden sm:inline-block" />
            </div>

            <h1 className="font-headline text-3xl sm:text-4xl text-primary tracking-tight font-bold">
              02 // FEATURED WORKS
            </h1>

            <p className="font-mono text-xs text-on-surface-variant tracking-wider uppercase">
              ARCHIVED DIGITAL ARTIFACTS & 2D ILLUSTRATIONS
            </p>
          </div>

          {/* Quick Telemetry Diagnostic Gauge */}
          <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/30 shadow-md flex items-center gap-4 self-start lg:self-auto font-mono">
            <div className="flex flex-col text-right">
              <span className="text-[10px] text-on-surface-variant uppercase">COMMISSION LOAD</span>
              <span className="text-xs sm:text-sm text-primary tracking-wider font-bold">85% ENGAGED</span>
            </div>
            <div className="flex gap-1 h-5 items-center">
              <span className="w-1.5 h-4 bg-primary-container rounded-xs" />
              <span className="w-1.5 h-4 bg-primary-container rounded-xs" />
              <span className="w-1.5 h-4 bg-primary-container rounded-xs" />
              <span className="w-1.5 h-4 bg-primary-container rounded-xs" />
              <span className="w-1.5 h-4 bg-primary-container rounded-xs" />
              <span className="w-1.5 h-4 bg-primary-container rounded-xs" />
              <span className="w-1.5 h-4 bg-secondary rounded-xs" />
              <span className="w-1.5 h-4 bg-secondary rounded-xs" />
              <span className="w-1.5 h-4 bg-surface-container-highest rounded-xs" />
              <span className="w-1.5 h-4 bg-surface-container-highest rounded-xs" />
            </div>
          </div>
        </div>

        {/* Category Filter Ribbon */}
        <CategoryFilter
          currentFilter={currentFilter}
          onSelectFilter={setCurrentFilter}
        />

        {/* Artwork Grid Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          {filteredArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              onOpenModal={(id) => setActiveArtworkId(id)}
            />
          ))}
        </div>

        {/* Bottom Data Stream Metric Bar */}
        <DataStreamMetricBar />
      </div>

      {/* Interactive Detail Modal */}
      {activeArtworkId && (
        <ArtworkModal
          artworkId={activeArtworkId}
          onClose={() => setActiveArtworkId(null)}
          onSelectArtwork={(id) => setActiveArtworkId(id)}
        />
      )}
    </section>
  );
}
