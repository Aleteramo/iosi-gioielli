'use client';

import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="relative inline-block">
      <span className="text-white font-cormorant text-2xl tracking-wider">
        IO <span className="font-light">Sì</span>
      </span>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 transform origin-left transition-transform duration-300 hover:scale-x-110"></div>
    </div>
  );
};

export default Logo;
