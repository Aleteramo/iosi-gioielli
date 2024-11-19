'use client';

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedIntro = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Benvenuti nel mondo di IO Sì',
        'Dove l\'eleganza incontra la sostenibilità',
        'Diamanti lab grown, creazioni uniche',
        'IO Sì, il futuro del lusso sostenibile'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="/videos/diamonds.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
          <span className="iosi-underline">IO Sì</span>
        </h1>
        <div className="text-xl md:text-2xl lg:text-3xl text-white font-light">
          <span ref={el} />
        </div>
      </div>
    </div>
  );
};

export default TypedIntro;