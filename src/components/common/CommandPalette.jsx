import React, { useState, useEffect } from 'react';
import { Terminal, Search, ArrowRight, X, Sparkles, FolderGit2, User, Mail, ShieldAlert } from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, onSelectArtwork }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(!isOpen);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commands = [
    { id: 'sec-hero', category: 'NAVIGATION', label: 'Jump to // 01 HERO SECTION', action: () => scrollToSection('hero') },
    { id: 'sec-works', category: 'NAVIGATION', label: 'Jump to // 02 FEATURED WORKS', action: () => scrollToSection('works') },
    { id: 'sec-about', category: 'NAVIGATION', label: 'Jump to // 03 CREATOR DOSSIER', action: () => scrollToSection('about') },
    { id: 'sec-contact', category: 'NAVIGATION', label: 'Jump to // 04 COMMS TERMINAL', action: () => scrollToSection('contact') },
    { id: 'art-kae', category: 'PROJECT ARCHIVE', label: 'Open Project // Kae - Cyber Samurai', action: () => { onClose(false); onSelectArtwork('kae'); } },
    { id: 'art-cityscape', category: 'PROJECT ARCHIVE', label: 'Open Project // Neo Metropolis District 9', action: () => { onClose(false); onSelectArtwork('cityscape'); } },
    { id: 'art-ghost', category: 'PROJECT ARCHIVE', label: 'Open Project // Ghost Protocol Neural Link', action: () => { onClose(false); onSelectArtwork('ghost'); } },
    { id: 'art-sector-zero', category: 'PROJECT ARCHIVE', label: 'Open Project // Sector Zero Mecha Typography', action: () => { onClose(false); onSelectArtwork('sector-zero'); } },
  ];

  const filtered = commands.filter(c => 
    c.label.toLowerCase().includes(query.toLowerCase()) || 
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  const scrollToSection = (id) => {
    onClose(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop - 70;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-surface-container-lowest/80 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-surface-container border border-primary-container/40 rounded-lg shadow-[0_0_40px_rgba(0,245,255,0.25)] overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-surface-container-high border-b border-surface-container-highest">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-primary-container animate-pulse" />
            <span className="font-mono text-xs text-primary font-bold tracking-wider">
              CYBER_TERMINAL // COMMAND DISPATCHER v2099
            </span>
          </div>
          <button 
            onClick={() => onClose(false)}
            className="text-on-surface-variant hover:text-primary transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Input */}
        <div className="flex items-center px-4 py-3 bg-surface-container-low border-b border-surface-container-high">
          <span className="font-mono text-sm text-primary-container mr-2">&gt;</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump target (e.g. works, kae, dossier)..."
            className="w-full bg-transparent text-primary font-mono text-sm outline-none placeholder:text-outline-variant"
            autoFocus
          />
          <kbd className="px-2 py-0.5 bg-surface-container text-primary-fixed-dim text-[10px] font-mono rounded border border-outline-variant">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-surface-container-high/40">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full text-left px-3 py-2.5 rounded hover:bg-surface-container-high hover:text-primary transition-colors flex items-center justify-between group"
              >
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-primary-container tracking-wider font-semibold">
                    [{item.category}]
                  </span>
                  <span className="font-mono text-xs text-on-surface group-hover:text-primary">
                    {item.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-outline group-hover:text-primary-container transition-transform group-hover:translate-x-1" />
              </button>
            ))
          ) : (
            <div className="p-6 text-center font-mono text-xs text-on-surface-variant">
              NO MATCHING COMMANDS FOUND IN NEURAL BUFFER.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-surface-container-lowest/90 border-t border-surface-container-high flex items-center justify-between font-mono text-[10px] text-outline">
          <span>NAVIGATION: [CLICK / ESC TO CLOSE]</span>
          <span className="text-primary-fixed-dim">STATUS: READY</span>
        </div>
      </div>
    </div>
  );
}
