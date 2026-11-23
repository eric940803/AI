import React from 'react';

export default function ScanlineOverlay() {
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-40 scanline-fx opacity-70"
      aria-hidden="true"
    />
  );
}
