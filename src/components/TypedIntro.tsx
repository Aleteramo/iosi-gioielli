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
    <div className="relative min-h-screen flex items-center justify-center bg-black -mt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="/videos/dimanatisfondo.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 opacity-0 animate-fade-in">
          <span className="inline-block relative main-title">
            <span className="text-white">IO Sì</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-100" />
          </span>
        </h1>
        <div className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light">
          <span ref={el} />
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .main-title:hover .bg-red-600 {
          transform: scaleX(1);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default TypedIntro;