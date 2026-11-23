import React from 'react';

export default function RainAlleyPlate() {
  return (
    <div className="relative w-full h-44 rounded-xl overflow-hidden shadow-lg group border border-outline-variant/30">
      <img
        alt="Neo Tokyo Rain District"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1vN0kxa5o57S15KuUM7jW3YicuhJ7tbg2L8j0XyoqR3_JxSwLZAiJWSA05gQ2KmRdnBo0MKTwdyjqUP2G3U-UhNkNeUJwbg-y2Yzqyq6SqYZKDLZqA01ZiUUmLzRBJcRAOttwlquo0eWO5iZImkvR406mdjh8mlaem_pO--Y7N9CjNRo-thYJYfWMcz-dq6RCa32nEgtSMzxDDCAuEBcmGZ90pgDc__ktAkGYbfz1"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent" />
      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between font-mono text-xs">
        <div>
          <span className="text-secondary font-bold block text-[11px]">GEO_LOCATION: DISTRICT 09</span>
          <span className="text-on-surface-variant text-[10px]">LAT 35.6762° N // LON 139.6503° E</span>
        </div>
        <span className="px-2 py-0.5 bg-surface-container-highest/85 backdrop-blur-md text-primary-fixed rounded text-[10px] border border-primary-container/20">
          雨夜街道視覺
        </span>
      </div>
    </div>
  );
}
