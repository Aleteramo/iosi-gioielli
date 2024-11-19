'use client';

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedIntro = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Quando un gioiello è bellezza e rispetto',
        'Diamanti sostenibili del futuro',
        'Eccellenza artigianale Made in Italy'
      ],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 3000,
      startDelay: 800,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center relative bg-black">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/images/IMG_1898.jpg')] bg-cover bg-center opacity-10"
          style={{ 
            filter: 'contrast(120%) brightness(50%)',
            mixBlendMode: 'luminosity'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-16">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-cormorant font-light mb-12 text-white">
          IO Sì Gioielli
        </h1>
        <div className="h-[100px] flex items-center justify-center mb-12">
          <span 
            ref={el}
            className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light tracking-wider"
          ></span>
        </div>
        <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto tracking-wide font-light">
          Creiamo gioielli che raccontano storie di bellezza sostenibile, 
          unendo l'eccellenza artigianale italiana con i diamanti del futuro.
        </p>
      </div>
    </div>
  );
};

export default TypedIntro;