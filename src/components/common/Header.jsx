import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu } from 'lucide-react';
import { PROFILE } from '../../data/profile';

export default function Header({ activeSection, onOpenCommandPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: '01. HERO' },
    { id: 'works', label: '02. WORKS' },
    { id: 'about', label: '03. ABOUT' },
    { id: 'contact', label: '04. CONTACT' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop - 70;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_16px_rgba(0,245,255,0.08)] border-b border-primary-container/10' 
          : 'bg-surface-container-lowest/70 backdrop-blur-md'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-16 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img
            alt="Cyberpunk Portfolio Emblem Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src={PROFILE.logo}
          />
          <div className="flex flex-col">
            <span className="font-headline text-lg sm:text-xl text-primary tracking-tight font-bold group-hover:text-primary-container transition-colors">
              CYBERPUNK <span className="text-secondary">//</span> PORTFOLIO
            </span>
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
              2D DIGITAL ARTIST
            </span>
          </div>
        </a>

        {/* Desktop Navigation & Status */}
        <div className="flex items-center gap-6">
          <nav className="hidden xl:flex items-center gap-2 bg-surface-container-low/70 px-2 py-1.5 rounded-sm border border-outline-variant/30">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-3 py-1 rounded-xs font-mono text-xs tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-surface-container-high text-primary-fixed shadow-[0_0_12px_rgba(0,245,255,0.35)] font-bold'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* System Online Status */}
          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 bg-surface-container-high/60 rounded-sm border border-primary-container/20">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_6px_#00f5ff]" />
            <span className="font-mono text-[10px] text-primary tracking-widest font-semibold">
              SYSTEM: ONLINE
            </span>
          </div>

          {/* Terminal Command Palette Trigger Button */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-high hover:bg-surface-bright text-primary-container hover:text-primary rounded-sm font-mono text-xs transition-colors border border-primary-container/30"
            title="Open Command Palette (Ctrl+K / ⌘K)"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold">⌘K</span>
          </button>
        </div>

        {/* Right Info & Profile */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end font-mono">
            <span className="text-[10px] text-primary-fixed-dim tracking-wider">SEC_ZONE // 09</span>
            <span className="text-xs text-on-surface tracking-wider font-bold">NEO-SEOUL // 2088</span>
          </div>

          <a 
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="p-0.5 rounded-full bg-surface-container-high transition-transform hover:scale-105 focus:outline-none"
            title="Leo 'Cyberpulse' Chen Profile"
          >
            <img
              alt="Profile Avatar"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-primary-container ring-offset-2 ring-offset-surface-container-lowest"
              src={PROFILE.avatar}
            />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-on-surface hover:text-primary focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest/98 border-b border-primary-container/20 px-6 py-4 flex flex-col gap-3 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-surface-container-high">
            <span className="font-mono text-xs text-primary-fixed-dim">NAVIGATION TERMINAL</span>
            <span className="font-mono text-[10px] text-primary flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping" />
              ONLINE
            </span>
          </div>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`py-2 px-3 rounded font-mono text-sm tracking-wider flex items-center justify-between ${
                  isActive
                    ? 'bg-surface-container-high text-primary-container font-bold shadow-[0_0_10px_rgba(0,245,255,0.2)]'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-xs text-primary-container font-mono">ACTIVE</span>}
              </a>
            );
          })}
          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="w-full py-2 bg-surface-container-high text-primary font-mono text-xs rounded flex items-center justify-center gap-2 border border-primary-container/30"
            >
              <Terminal className="w-4 h-4 text-primary-container" />
              <span>TERMINAL COMMAND PALETTE (⌘K)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
