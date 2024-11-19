'use client';

import React from 'react';

const CircleLoader = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-40 h-40">
        {/* Sfondo sfumato */}
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-red-900/20 via-red-950/10 to-transparent animate-pulse"></div>
        
        {/* Cerchio principale */}
        <div className="absolute inset-0 rounded-full border border-red-800/30 animate-spin-slow"></div>
        
        {/* Arco luminoso */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-red-600/40 animate-spin" 
             style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 30%)' }}></div>
        
        {/* Punto luminoso */}
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-red-500 rounded-full animate-pulse"
             style={{ transform: 'translateX(-50%)' }}></div>
      </div>
    </div>
  );
};

export default CircleLoader;
