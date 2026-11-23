import React, { useState } from 'react';
import { Camera, Layers, Palette, Eye } from 'lucide-react';
import LayerInspectionModal from './LayerInspectionModal';

export default function HeroViewport() {
  const [inspectModalOpen, setInspectModalOpen] = useState(false);

  return (
    <>
      <div className="lg:col-span-5 flex flex-col gap-3 relative">
        {/* Artwork Terminal Card Frame */}
        <div className="relative bg-surface-container-low rounded-xl overflow-hidden shadow-2xl p-2 group border border-outline-variant/30">
          {/* Viewport Header HUD Bar */}
          <div className="flex items-center justify-between px-3 py-2 bg-surface-container-lowest/90 rounded-t-lg mb-2 border-b border-surface-container-high font-mono">
            <div className="flex items-center gap-2 text-xs text-on-surface-variant">
              <Camera className="w-4 h-4 text-primary-container" />
              <span>VIEWPORT // PRIMARY_CANVAS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary-fixed text-[10px]">
                8K MASTER
              </span>
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_6px_#00f5ff]" />
            </div>
          </div>

          {/* Master Illustration Frame with Overlay Elements */}
          <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-lg overflow-hidden bg-surface-container-lowest">
            {/* Hero Art Image */}
            <img
              alt="Cyberpunk Metropolis Neo-Tokyo Sprawl"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxI7J3ji9VyiEXBSLKMQkOw4lpdVulApxDYsJhzRLOLvqkVbWisw1fUVtOkogVrWhH0YciTNf2MSchwf0ayuKgVEJEmAWWlGelB7rMeefmGOfrJd4z-2A9k2nO7PvAY37fmbNmNaDBLAVOHasGrxhHboWTZ2amUFBf7QMJQLVEzvo12CXGDaUp9OJE-sup64f-FKVxxzGnPwPn39tboc5BWHjU6XpG7uJ2cDX0h5rK"
            />

            {/* Tactical Corner Bracket Markers */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary-container pointer-events-none opacity-80" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-primary-container pointer-events-none opacity-80" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-primary-container pointer-events-none opacity-80" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-primary-container pointer-events-none opacity-80" />

            {/* Floating Cybernetic Micro HUD Badges on Top of Art */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5 pointer-events-none font-mono">
              <div className="px-2.5 py-1 bg-surface-container-lowest/85 backdrop-blur-md rounded text-xs text-primary flex items-center gap-1.5 shadow-md border border-primary-container/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                <span>NEO-TOKYO // SECTOR 09</span>
              </div>
              <div className="px-2 py-0.5 bg-surface-container-lowest/70 backdrop-blur-md rounded text-[10px] text-secondary-fixed flex items-center gap-1 border border-secondary/20">
                <span>ERGO PROXY TRIBUTE</span>
              </div>
            </div>

            {/* Interactive Layer Inspection / Metadata Pill (Bottom Over Art) */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 p-3 bg-surface-container-lowest/90 backdrop-blur-lg rounded-lg shadow-xl border border-primary-container/20">
              <div className="flex flex-col min-w-0 font-mono">
                <span className="text-xs text-primary font-bold truncate">NEO_METROPOLIS_FINAL.PSD</span>
                <span className="text-[10px] text-outline truncate">LAYER DEPTH: 142 PASSES • OCCLUSION MAP</span>
              </div>
              <button
                onClick={() => setInspectModalOpen(true)}
                className="px-3 py-1.5 bg-surface-container-high hover:bg-primary-container hover:text-on-primary text-primary-fixed-dim rounded font-mono text-xs flex items-center gap-1.5 transition-colors duration-200 shrink-0 border border-primary-container/30 cursor-pointer shadow-sm"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline font-bold">INSPECT</span>
              </button>
            </div>
          </div>

          {/* Viewport Telemetry Footer Bar */}
          <div className="flex items-center justify-between px-3 pt-2 text-outline font-mono text-[11px]">
            <span className="flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-primary" />
              <span>CIE LAB / DCI-P3 99%</span>
            </span>
            <span className="text-primary-fixed-dim">FPS: 60 SYNCED</span>
          </div>
        </div>
      </div>

      <LayerInspectionModal
        isOpen={inspectModalOpen}
        onClose={() => setInspectModalOpen(false)}
      />
    </>
  );
}
