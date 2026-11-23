import React, { useState } from 'react';
import ScanlineOverlay from './components/common/ScanlineOverlay';
import BackgroundGlows from './components/common/BackgroundGlows';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CommandPalette from './components/common/CommandPalette';
import HeroSection from './components/hero/HeroSection';
import WorksSection from './components/works/WorksSection';
import AboutSection from './components/about/AboutSection';
import ContactSection from './components/contact/ContactSection';
import { useActiveSection } from './hooks/useActiveSection';

export default function App() {
  const activeSection = useActiveSection(['hero', 'works', 'about', 'contact'], 120);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [activeArtworkId, setActiveArtworkId] = useState(null);

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative selection:bg-primary-container selection:text-on-primary">
      {/* Scanline CRT overlay effect */}
      <ScanlineOverlay />

      {/* Cyberpunk ambient color blooms */}
      <BackgroundGlows />

      {/* Fixed HUD Navigation Header */}
      <Header 
        activeSection={activeSection} 
        onOpenCommandPalette={() => setCommandPaletteOpen(true)} 
      />

      {/* Main Single-Page Content */}
      <main className="w-full pt-20 bg-transparent relative z-10 min-h-screen">
        <HeroSection 
          onOpenCommandPalette={() => setCommandPaletteOpen(true)} 
        />
        
        <WorksSection 
          activeArtworkId={activeArtworkId} 
          setActiveArtworkId={setActiveArtworkId} 
        />
        
        <AboutSection />
        
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Dispatcher (⌘K / Ctrl+K) */}
      <CommandPalette 
        isOpen={commandPaletteOpen} 
        onClose={setCommandPaletteOpen} 
        onSelectArtwork={(id) => setActiveArtworkId(id)}
      />
    </div>
  );
}
