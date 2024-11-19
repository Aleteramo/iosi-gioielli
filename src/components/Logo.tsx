'use client';

import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="relative inline-block">
      <div className="text-4xl font-cormorant tracking-wider">
        IO <span className="font-light">Sì</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent transform origin-left transition-transform duration-300 hover:scale-x-110"></div>
    </div>
  );
};

export default Logo;
