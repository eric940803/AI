import React, { useState } from 'react';
import { FileText, Download, Check, Send } from 'lucide-react';

export default function DossierDownloadBar() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    setDownloaded(true);
    // Create a mock download trigger of a text spec file representing the dossier
    const blob = new Blob([
      "LEO 'CYBERPULSE' CHEN // 2D CONCEPT ARTIST DOSSIER & CV (2088 REVISED)\n" +
      "====================================================================\n" +
      "Role: Senior 2D Concept Artist & Keyframe Illustrator\n" +
      "Sector: Taipei / Neo-East // Security Clearance Level 9\n" +
      "Software: Photoshop (95%), Illustrator (88%), Procreate (90%), Blender 3D, Clip Studio\n" +
      "Contact: artist.cyberpulse@matrix.io\n" +
      "Portfolio: All rights reserved © 2088 Cybercore Systems.\n"
    ], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CYBERPULSE_LEO_CHEN_DOSSIER_2088.txt';
    a.click();
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloaded(false);
    }, 3000);
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const topOffset = contactElem.offsetTop - 70;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container p-4 sm:p-6 rounded-xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-outline-variant/30 font-mono">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.4)] shrink-0">
          <FileText className="w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <span className="font-headline text-base sm:text-lg text-primary font-bold">
            DIGITAL ARTIST DOSSIER // RESUME
          </span>
          <span className="text-[10px] sm:text-xs text-on-surface-variant">
            PDF & TEXT SPEC (2088 REVISED EDITION) • HIGH-RES PORTFOLIO SPEC (48 MB)
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto">
        <button
          onClick={handleDownload}
          className="hud-bracket w-full sm:w-auto px-6 py-2.5 bg-primary-container hover:bg-primary-fixed text-on-primary text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all font-bold cursor-pointer"
        >
          {downloaded ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
          <span>{downloaded ? 'DOSSIER GENERATED!' : 'DOWNLOAD DOSSIER'}</span>
        </button>

        <button
          onClick={scrollToContact}
          className="hud-bracket px-4 py-2.5 bg-surface-container-highest hover:bg-secondary-container text-primary hover:text-secondary-fixed text-xs uppercase flex items-center justify-center transition-all border border-outline-variant/40 cursor-pointer"
          title="Direct Message"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
