import React from 'react';
import { Terminal, DownloadCloud } from 'lucide-react';

export default function DataStreamMetricBar() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const topOffset = contactElem.offsetTop - 70;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-12 p-4 sm:p-6 bg-surface-container-low rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 border border-outline-variant/30 shadow-md font-mono">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary-container shrink-0 border border-primary-container/20">
          <Terminal className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm text-primary font-bold">
            TERMINAL FEED: TRANSMISSION READY
          </span>
          <span className="text-[11px] text-on-surface-variant">
            FULL 4K SOURCE TIFFS & LAYERED PSDs AVAILABLE FOR INDUSTRY CLIENTS
          </span>
        </div>
      </div>

      <div className="w-full md:w-auto">
        <button
          onClick={scrollToContact}
          className="hud-bracket w-full md:w-auto px-6 py-2.5 bg-surface-container-high hover:bg-primary-container hover:text-on-primary text-primary text-xs rounded text-center transition-all border border-primary-container/30 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]"
        >
          REQUEST CLIENT ARCHIVE ACCESS
        </button>
      </div>
    </div>
  );
}
