import React from 'react';

export default function BackgroundGlows() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      {/* Top Left Neon Cyan Bloom */}
      <div className="absolute -top-24 left-1/4 w-[32rem] h-[32rem] bg-primary-container/10 blur-[140px] rounded-full" />
      
      {/* Center Right Electric Purple Bloom */}
      <div className="absolute top-1/3 -right-24 w-[36rem] h-[36rem] bg-secondary-container/20 blur-[160px] rounded-full" />
      
      {/* Lower Left Neon Pink Accent */}
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-neon-pink/10 blur-[130px] rounded-full" />
      
      {/* Bottom Center Subtle Cyan Mist */}
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-primary-container/8 blur-[150px] rounded-full" />
    </div>
  );
}
