import React, { useState } from 'react';
import { Mail, Copy, Check, Palette, Sparkles, Camera, MessageSquare, Lock } from 'lucide-react';
import { PROFILE } from '../../data/profile';

export default function CommsDirectory() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-surface-container-low/80 backdrop-blur-xl p-5 rounded-xl shadow-xl flex flex-col gap-4 border border-outline-variant/30 font-mono">
      <div className="flex items-center justify-between pb-1 border-b border-surface-container-high">
        <span className="text-xs text-on-surface tracking-wider font-bold flex items-center gap-2">
          <Mail className="w-4 h-4 text-primary-container" />
          <span>DIRECT COMMS CHANNELS</span>
        </span>
        <span className="text-[10px] text-outline">ENC_KEY: AES-256</span>
      </div>

      {/* Email Direct Copy Entry */}
      <div className="bg-surface-container p-3 rounded flex items-center justify-between hover:bg-surface-container-high transition-all border border-outline-variant/20">
        <div className="flex items-center gap-3 min-w-0">
          <div className="p-2 rounded bg-surface-container-highest text-primary-container flex items-center justify-center shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] text-outline">PRIMARY TRANSMISSION</span>
            <span className="text-xs sm:text-sm text-on-surface font-bold truncate">
              {PROFILE.email}
            </span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className={`px-3 py-1.5 rounded text-xs transition-all flex items-center gap-1.5 cursor-pointer font-bold shrink-0 ${
            copied
              ? 'bg-primary-container text-on-primary shadow-[0_0_12px_rgba(0,245,255,0.6)]'
              : 'bg-surface-container-high hover:bg-primary-container hover:text-on-primary text-primary border border-primary-container/30'
          }`}
          title="Copy email to clipboard"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'COPIED!' : 'COPY'}</span>
        </button>
      </div>

      {/* Social Matrix Grid */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        {/* Artstation */}
        <a
          className="bg-surface-container p-3 rounded flex items-center gap-2.5 hover:bg-surface-container-high transition-all group border border-outline-variant/20"
          href={PROFILE.artstation}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Palette className="w-4 h-4 text-secondary group-hover:text-primary-container transition-colors shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] text-outline">ARTSTATION</span>
            <span className="font-body text-xs text-on-surface truncate font-semibold">/cyberpulse_art</span>
          </div>
        </a>

        {/* Behance */}
        <a
          className="bg-surface-container p-3 rounded flex items-center gap-2.5 hover:bg-surface-container-high transition-all group border border-outline-variant/20"
          href={PROFILE.behance}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Sparkles className="w-4 h-4 text-secondary group-hover:text-primary-container transition-colors shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] text-outline">BEHANCE</span>
            <span className="font-body text-xs text-on-surface truncate font-semibold">/cyberpulse</span>
          </div>
        </a>

        {/* Instagram */}
        <a
          className="bg-surface-container p-3 rounded flex items-center gap-2.5 hover:bg-surface-container-high transition-all group border border-outline-variant/20"
          href={PROFILE.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Camera className="w-4 h-4 text-secondary group-hover:text-primary-container transition-colors shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] text-outline">INSTAGRAM</span>
            <span className="font-body text-xs text-on-surface truncate font-semibold">@cyberpulse.2d</span>
          </div>
        </a>

        {/* Discord */}
        <div className="bg-surface-container p-3 rounded flex items-center gap-2.5 hover:bg-surface-container-high transition-all group border border-outline-variant/20 cursor-default">
          <MessageSquare className="w-4 h-4 text-secondary group-hover:text-primary-container transition-colors shrink-0" />
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] text-outline">DISCORD NODE</span>
            <span className="font-body text-xs text-on-surface truncate font-semibold">{PROFILE.discord}</span>
          </div>
        </div>
      </div>

      {/* Encrypted Guarantee Banner */}
      <div className="p-3 bg-surface-container-high/60 rounded flex items-start gap-2.5 border border-outline-variant/20">
        <Lock className="w-4 h-4 text-primary-container mt-0.5 shrink-0" />
        <p className="font-body text-xs text-on-surface-variant leading-relaxed">
          所有商業委託與合作提案將於 <span className="text-primary font-semibold">24 小時內</span> 回覆加密郵件。緊急專案請直接備註專案 DEADLINE。
        </p>
      </div>
    </div>
  );
}
