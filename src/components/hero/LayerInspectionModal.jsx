import React from 'react';
import { X, Layers, Cpu, CheckCircle2, Sliders, Eye } from 'lucide-react';

export default function LayerInspectionModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const passes = [
    { name: "Layer 00: Base Silhouette & 3D Blockout", type: "GEOMETRY", depth: "100%", active: true },
    { name: "Layer 01: Linework & Precision Vector Guides", type: "VECTORS", depth: "95%", active: true },
    { name: "Layer 02: Ambient Occlusion & Global Shadow Map", type: "LIGHTING", depth: "80%", active: true },
    { name: "Layer 03: Local Diffuse Color & Material Texture", type: "SURFACE", depth: "100%", active: true },
    { name: "Layer 04: Wet Surface Reflections & Fresnel Glaze", type: "SPECULAR", depth: "90%", active: true },
    { name: "Layer 05: Hologram Projections & Neon Emitters", type: "ILLUMINATION", depth: "100%", active: true },
    { name: "Layer 06: Raindrop Streaks & Atmospheric Fog", type: "VOLUME", depth: "85%", active: true },
    { name: "Layer 07: Chromatic Aberration & Lens Bloom FX", type: "POST_PROCESS", depth: "75%", active: true },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/85 backdrop-blur-xl">
      <div className="w-full max-w-2xl bg-surface-container border border-primary-container/40 rounded-xl shadow-[0_0_50px_rgba(0,245,255,0.25)] overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-surface-container-high border-b border-surface-container-highest flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-primary-container/20 text-primary-container rounded">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono text-sm text-primary font-bold tracking-wider">
                LAYER PASS TELEMETRY // NEO_METROPOLIS_FINAL.PSD
              </h3>
              <p className="font-mono text-[10px] text-on-surface-variant">
                142 ACTIVE RENDER PASSES • 16-BIT LINEAR COLOR PROFILE
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-on-surface-variant hover:text-primary transition-colors rounded hover:bg-surface-container"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
          {/* Diagnostic overview chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
            <div className="p-2.5 bg-surface-container-low rounded border border-outline-variant/30 flex flex-col">
              <span className="text-outline">TOTAL LAYERS</span>
              <span className="text-primary font-bold text-sm">142 PASSES</span>
            </div>
            <div className="p-2.5 bg-surface-container-low rounded border border-outline-variant/30 flex flex-col">
              <span className="text-outline">COLOR PROFILE</span>
              <span className="text-secondary font-bold text-sm">DCI-P3 99%</span>
            </div>
            <div className="p-2.5 bg-surface-container-low rounded border border-outline-variant/30 flex flex-col">
              <span className="text-outline">BIT DEPTH</span>
              <span className="text-primary-container font-bold text-sm">16-BIT / EXR</span>
            </div>
            <div className="p-2.5 bg-surface-container-low rounded border border-outline-variant/30 flex flex-col">
              <span className="text-outline">COMPOSITE TIME</span>
              <span className="text-secondary-fixed font-bold text-sm">56 HOURS</span>
            </div>
          </div>

          {/* Pass List */}
          <div className="flex flex-col gap-2 mt-2">
            <span className="font-mono text-xs text-primary font-semibold tracking-wider">
              PRIMARY PIPELINE BREAKDOWN:
            </span>
            <div className="flex flex-col divide-y divide-surface-container-high border border-surface-container-high rounded-lg overflow-hidden">
              {passes.map((pass, idx) => (
                <div key={idx} className="p-3 bg-surface-container-low flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" />
                    <span className="text-on-surface">{pass.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-surface-container-high text-primary-fixed-dim text-[10px] rounded">
                      {pass.type}
                    </span>
                    <span className="text-outline text-[11px] hidden sm:inline">{pass.depth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-surface-container-lowest border-t border-surface-container-high flex items-center justify-between font-mono text-xs">
          <span className="text-outline">STATUS: PIPELINE CERTIFIED</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-primary-container hover:bg-primary-fixed text-on-primary font-bold rounded transition-colors"
          >
            CLOSE TELEMETRY
          </button>
        </div>
      </div>
    </div>
  );
}
