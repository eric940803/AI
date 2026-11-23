import React from 'react';
import { Eye, ArrowRight, ExternalLink } from 'lucide-react';

export default function ArtworkCard({ artwork, onOpenModal }) {
  return (
    <article 
      className={`${artwork.span || 'col-span-12 lg:col-span-6'} flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-xl hover:shadow-[0_0_24px_rgba(0,245,255,0.22)] transition-all duration-300 group relative border border-outline-variant/30`}
    >
      {/* Visual Frame */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] overflow-hidden bg-surface-container-lowest">
        <img
          alt={artwork.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          src={artwork.image}
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent pointer-events-none" />

        {/* Top Tag Bar inside visual */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none font-mono">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-surface-container-lowest/85 backdrop-blur-md text-primary-fixed text-xs rounded uppercase tracking-wider border border-primary-container/20">
              {artwork.projectId.replace('PROJECT_DATA', 'FEATURE')}
            </span>
            <span className="px-2.5 py-1 bg-surface-container-lowest/85 backdrop-blur-md text-secondary text-xs rounded uppercase tracking-wider border border-secondary/20">
              YEAR: {artwork.year}
            </span>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 bg-surface-container-lowest/85 backdrop-blur-md rounded text-primary-container text-xs border border-primary-container/20">
            <Eye className="w-3.5 h-3.5" />
            <span>{artwork.views}</span>
          </div>
        </div>

        {/* Bottom Floating Specs Tag */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 pointer-events-none font-mono">
          {artwork.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-surface-container-high/90 backdrop-blur-sm text-primary text-[11px] rounded tracking-wider border border-outline-variant/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Telemetry & Action Body */}
      <div className="p-6 flex flex-col justify-between flex-1 gap-4 bg-surface-container">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-secondary font-mono text-xs uppercase tracking-widest font-semibold">
              <span>{artwork.categoryLabel}</span>
              <span>•</span>
              <span className="text-on-surface-variant">{artwork.subBadge}</span>
            </div>
            <div className="flex sm:flex-col sm:items-end font-mono text-xs gap-2 sm:gap-0">
              <span className="text-outline text-[10px]">PIPELINE TOOLS</span>
              <span className="text-primary tracking-wider">{artwork.tools}</span>
            </div>
          </div>

          <h2 className="font-headline text-xl lg:text-2xl text-primary font-bold tracking-tight">
            {artwork.title}
          </h2>

          <p className="font-body text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
            {artwork.summary}
          </p>
        </div>

        {/* Footer specs & Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-surface-container-high">
          <div className="flex items-center gap-3 font-mono text-xs text-outline">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_4px_#00f5ff]" />
              <span>RES: {artwork.resolution}</span>
            </span>
            <span>LAYERS: {artwork.layers}</span>
            <span>TIME: {artwork.time}</span>
          </div>

          <button
            onClick={() => onOpenModal(artwork.id)}
            className="hud-bracket px-4 py-2 bg-primary-container hover:bg-primary-fixed text-on-primary font-mono text-xs font-bold rounded flex items-center justify-center gap-2 transition-all shadow-[0_0_16px_rgba(0,245,255,0.35)] hover:shadow-[0_0_24px_rgba(0,245,255,0.7)] cursor-pointer"
          >
            <span>VIEW PROJECT // SPEC</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
