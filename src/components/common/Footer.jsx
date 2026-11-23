import React from 'react';
import { ArrowUp, Terminal, Shield } from 'lucide-react';
import { PROFILE } from '../../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full relative z-20 bg-surface-container-lowest/95 backdrop-blur-md pt-10 pb-8 border-t border-outline-variant/20">
      <div className="w-full px-4 sm:px-8 lg:px-16 flex flex-col gap-6">
        {/* Top Tier */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center lg:text-left">
            <span className="font-headline text-lg sm:text-xl text-on-surface font-bold tracking-tight">
              CYBERCORE SYSTEMS // RUNTIME 4.8.1
            </span>
            <span className="font-mono text-xs text-on-surface-variant mt-1 tracking-wider">
              TACTICAL VISUAL DEV • KEYFRAME ILLUSTRATION • ENVIRONMENT DESIGN
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-on-surface-variant">
            <a 
              className="hover:text-primary-container hover:underline transition-colors px-1" 
              href={PROFILE.artstation} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              &lt;ARTSTATION&gt;
            </a>
            <a 
              className="hover:text-primary-container hover:underline transition-colors px-1" 
              href={PROFILE.behance} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              &lt;BEHANCE&gt;
            </a>
            <a 
              className="hover:text-primary-container hover:underline transition-colors px-1" 
              href={PROFILE.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              &lt;INSTAGRAM&gt;
            </a>
            <a 
              className="hover:text-primary-container hover:underline transition-colors px-1" 
              href={PROFILE.github} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              &lt;GITHUB&gt;
            </a>
          </div>

          {/* Top Return Button */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2 bg-surface-container-high hover:bg-primary-container hover:text-on-primary text-primary font-mono text-xs rounded transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]"
          >
            <ArrowUp className="w-4 h-4" />
            <span>TOP // RETURN</span>
          </button>
        </div>

        {/* Bottom Tier Technical Coordinates */}
        <div className="pt-4 border-t border-surface-container-high flex flex-col md:flex-row items-center justify-between font-mono text-xs text-outline gap-3 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span>LAT: 37.5665° N</span>
            <span className="hidden sm:inline">|</span>
            <span>LON: 126.9780° E</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-primary-fixed-dim">MEM: 128TB OPTICAL</span>
          </div>
          <div>
            <span>© 2088 CYBERPUNK CREATIVE PORTFOLIO. ALL NEURAL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
