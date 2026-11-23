import React from 'react';
import { MapPin, Zap, Terminal, Activity } from 'lucide-react';
import { PROFILE } from '../../data/profile';

export default function ArtistIdCard() {
  return (
    <div className="relative bg-surface-container-low/90 backdrop-blur-xl rounded-xl p-4 sm:p-6 shadow-xl overflow-hidden group border border-outline-variant/30">
      {/* Corner Tech Accent Decals */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary-container/20 to-transparent pointer-events-none" />
      <div className="absolute top-2 right-3 text-primary-fixed-dim font-mono text-xs opacity-70">
        ID: {PROFILE.id}
      </div>

      {/* Avatar + Tactical Overlays */}
      <div className="relative w-full aspect-square max-h-[360px] rounded-lg overflow-hidden bg-surface-container-lowest">
        <img
          alt={PROFILE.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          src={PROFILE.avatar}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent pointer-events-none" />

        {/* Live Status Watermark Inside Art */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px]">
          <span className="px-2.5 py-0.5 bg-surface-container-lowest/90 backdrop-blur-md rounded text-primary-container flex items-center gap-1.5 border border-primary-container/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse shadow-[0_0_6px_#00f5ff]" />
            ACTIVE BIOMETRICS
          </span>
          <span className="px-2.5 py-0.5 bg-surface-container-lowest/90 backdrop-blur-md rounded text-secondary-fixed-dim border border-secondary/20">
            SYNAPSE V4.2
          </span>
        </div>
      </div>

      {/* Dossier Metadata Stack */}
      <div className="flex flex-col mt-4 gap-2 font-mono">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-secondary uppercase tracking-widest">[ CODENAME_ALIAS ]</span>
          <span className="text-[10px] text-outline">{PROFILE.class}</span>
        </div>

        <div className="flex flex-col">
          <h2 className="font-headline text-2xl text-primary font-bold tracking-tight">
            LEO <span className="text-primary-container">‘CYBERPULSE’</span> CHEN
          </h2>
          <span className="text-xs text-secondary-fixed-dim font-semibold mt-0.5 tracking-wider">
            {PROFILE.title}
          </span>
        </div>

        {/* Spec Grid Badges */}
        <div className="grid grid-cols-2 gap-3 pt-2 mt-1">
          <div className="bg-surface-container p-3 rounded-lg flex flex-col border border-outline-variant/20">
            <span className="text-[10px] text-outline uppercase">SECTOR HQ</span>
            <span className="font-body text-xs sm:text-sm text-on-surface font-semibold flex items-center gap-1.5 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-primary-container shrink-0" />
              <span>{PROFILE.location}</span>
            </span>
          </div>

          <div className="bg-surface-container p-3 rounded-lg flex flex-col border border-outline-variant/20">
            <span className="text-[10px] text-outline uppercase">EXPERIENCE</span>
            <span className="font-body text-xs sm:text-sm text-on-surface font-semibold flex items-center gap-1.5 mt-0.5">
              <Zap className="w-3.5 h-3.5 text-secondary-fixed-dim shrink-0" />
              <span>{PROFILE.experience}</span>
            </span>
          </div>
        </div>

        {/* Philosophy Statement Block */}
        <div className="bg-surface-container-high/60 backdrop-blur-sm rounded-lg p-4 mt-2 border border-outline-variant/30 relative">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-4 h-4 text-primary-container" />
            <span className="text-xs text-primary-container uppercase tracking-wider font-bold">
              CREATIVE PHILOSOPHY // 創作理念
            </span>
          </div>
          <p className="font-body text-sm text-on-surface leading-relaxed">
            {PROFILE.philosophyZh}
          </p>
          <p className="font-body text-xs text-on-surface-variant mt-2 leading-relaxed">
            {PROFILE.philosophyEn}
          </p>
        </div>
      </div>
    </div>
  );
}
