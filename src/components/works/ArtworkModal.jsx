import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, X, ZoomIn, ZoomOut, BrainCircuit, 
  Wrench, CheckCircle2, Send, Cpu 
} from 'lucide-react';
import { ARTWORKS } from '../../data/artworks';

export default function ArtworkModal({ artworkId, onClose, onSelectArtwork }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const artworkIndex = ARTWORKS.findIndex(a => a.id === artworkId);
  const artwork = artworkIndex !== -1 ? ARTWORKS[artworkIndex] : null;

  useEffect(() => {
    setIsZoomed(false); // Reset zoom on artwork change
  }, [artworkId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!artwork) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [artworkIndex, onClose]);

  if (!artwork) return null;

  const handlePrev = () => {
    const prevIndex = (artworkIndex - 1 + ARTWORKS.length) % ARTWORKS.length;
    onSelectArtwork(ARTWORKS[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (artworkIndex + 1) % ARTWORKS.length;
    onSelectArtwork(ARTWORKS[nextIndex].id);
  };

  const handleCommissionClick = () => {
    onClose();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const topOffset = contactElem.offsetTop - 70;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-surface-container-lowest/90 backdrop-blur-2xl"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-6xl max-h-[92vh] flex flex-col bg-surface-container rounded-xl shadow-[0_0_50px_rgba(0,245,255,0.2)] overflow-hidden border border-primary-container/30 relative">
        {/* Modal Navigation Bar */}
        <div className="px-6 py-3.5 bg-surface-container-high border-b border-surface-container-highest flex items-center justify-between font-mono">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#00f5ff]" />
              <span className="text-xs sm:text-sm text-primary font-bold tracking-wider">
                {artwork.projectId}
              </span>
            </div>
            <span className="text-outline-variant text-xs hidden sm:inline">|</span>
            <span className="text-xs text-on-surface-variant hidden sm:inline">
              CLASSIFICATION: ARCHIVAL_TIER_A
            </span>
          </div>

          {/* Controls: Prev, Next, Close */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-1.5 bg-surface-container hover:bg-primary-container hover:text-on-primary text-primary rounded transition-all cursor-pointer"
              title="Previous Artwork (Left Arrow)"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-outline font-mono px-1">
              {artworkIndex + 1} / {ARTWORKS.length}
            </span>
            <button
              onClick={handleNext}
              className="p-1.5 bg-surface-container hover:bg-primary-container hover:text-on-primary text-primary rounded transition-all cursor-pointer"
              title="Next Artwork (Right Arrow)"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 ml-2 bg-surface-container hover:bg-error hover:text-on-error text-primary rounded transition-all cursor-pointer"
              title="Close Preview (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Two-Column Responsive Layout */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left: High-Res Canvas Viewport */}
          <div className="lg:col-span-7 bg-surface-container-lowest flex flex-col justify-center items-center p-4 sm:p-6 relative min-h-[360px] lg:min-h-[540px] border-b lg:border-b-0 lg:border-r border-surface-container-high">
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <img
                alt={artwork.title}
                className={`max-h-[480px] w-auto object-contain rounded shadow-2xl transition-transform duration-300 ${
                  isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                }`}
                src={artwork.image}
                onClick={() => setIsZoomed(!isZoomed)}
              />

              {/* Zoom Trigger Button */}
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="absolute bottom-3 right-3 px-3 py-1.5 bg-surface-container-lowest/85 backdrop-blur-md hover:bg-primary-container hover:text-on-primary text-primary rounded font-mono text-xs shadow-md transition-all flex items-center gap-1.5 border border-primary-container/20 cursor-pointer"
              >
                {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                <span>{isZoomed ? 'ZOOM 100%' : 'ZOOM 150%'}</span>
              </button>
            </div>

            {/* Bottom Status Bar */}
            <div className="w-full flex items-center justify-between pt-3 font-mono text-[11px] text-outline border-t border-surface-container-high/60 mt-auto">
              <span>ENGINE: HIGH_PASS // 16-BIT COLORSPACE</span>
              <span className="text-primary-fixed-dim">{artwork.aspect}</span>
            </div>
          </div>

          {/* Right: Technical Breakdown & Chinese Creative Concept */}
          <div className="lg:col-span-5 p-6 flex flex-col gap-6 bg-surface-container-low overflow-y-auto">
            {/* Header Titles */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 font-mono">
                <span className="px-2.5 py-0.5 bg-secondary-container text-on-secondary-container text-xs rounded font-bold">
                  {artwork.categoryLabel}
                </span>
                <span className="text-xs text-on-surface-variant">YEAR: {artwork.year}</span>
              </div>
              <h3 className="font-headline text-2xl text-primary font-bold tracking-tight">
                {artwork.title}
              </h3>
              <p className="font-mono text-xs text-primary-fixed-dim font-medium">
                {artwork.subtitle}
              </p>
            </div>

            {/* 創作理念 (Creation Concept) */}
            <div className="flex flex-col gap-2 p-4 bg-surface-container rounded-lg border border-outline-variant/30 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold">
                <BrainCircuit className="w-4 h-4 text-primary-container" />
                <span>創作理念 (CREATION CONCEPT)</span>
              </div>
              <p className="font-body text-sm text-on-surface leading-relaxed">
                {artwork.concept}
              </p>
            </div>

            {/* 設計概念 & 使用工具 */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-secondary uppercase font-bold tracking-wider">
                設計概念 & 使用工具 (DESIGN SPEC & TOOLS)
              </span>
              <div className="grid grid-cols-2 gap-3 font-mono">
                <div className="p-3 bg-surface-container rounded border border-outline-variant/20">
                  <span className="text-[10px] text-on-surface-variant block">CORE PIPELINE</span>
                  <span className="text-xs text-primary font-bold">{artwork.tools}</span>
                </div>
                <div className="p-3 bg-surface-container rounded border border-outline-variant/20">
                  <span className="text-[10px] text-on-surface-variant block">BRUSH SYSTEM</span>
                  <span className="text-xs text-primary font-bold">{artwork.brushes}</span>
                </div>
              </div>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                {artwork.designDesc}
              </p>
            </div>

            {/* 創作過程 (Workflow Stages) */}
            {artwork.workflow && (
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs text-primary-fixed-dim uppercase font-bold tracking-wider">
                  創作過程 (WORKFLOW PIPELINE)
                </span>
                <div className="flex flex-col gap-2 font-mono">
                  {artwork.workflow.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2.5 bg-surface-container rounded border border-outline-variant/20">
                      <span className="text-xs text-primary-container font-bold px-1.5 py-0.5 bg-surface-container-high rounded shrink-0">
                        {item.step}
                      </span>
                      <div className="flex flex-col flex-1">
                        <span className="text-xs text-primary font-bold">{item.title}</span>
                        <span className="font-body text-xs text-on-surface-variant mt-0.5">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-surface-container-high mt-auto font-mono">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 bg-surface-container-high hover:bg-surface-bright text-primary text-xs rounded text-center transition-all cursor-pointer"
              >
                CLOSE ARCHIVE
              </button>
              <button
                onClick={handleCommissionClick}
                className="hud-bracket flex-1 py-2.5 bg-primary-container hover:bg-primary-fixed text-on-primary text-xs rounded text-center transition-all font-bold shadow-[0_0_15px_rgba(0,245,255,0.4)] cursor-pointer"
              >
                COMMISSION SIMILAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
