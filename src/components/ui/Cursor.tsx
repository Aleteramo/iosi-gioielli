'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CURSOR_SIZE = 40;
const SCALE_HOVER = 1.3;

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.style.cursor = 'none';
    
    let rafId: number;
    
    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (cursorRef.current) {
          const x = e.clientX - CURSOR_SIZE / 2;
          const y = e.clientY - CURSOR_SIZE / 2;
          setPosition({ x, y });
        }
      });
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      setPosition({ x: -100, y: -100 });
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };
    
    const addHoverEvents = () => {
      const interactiveElements = document.querySelectorAll<HTMLElement>('a, button, [role="button"], input');
      const handleEnter = () => setIsHovered(true);
      const handleLeave = () => setIsHovered(false);

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleEnter);
        el.addEventListener('mouseleave', handleLeave);
        el.style.cursor = 'none';
      });

      return () => {
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleEnter);
          el.removeEventListener('mouseleave', handleLeave);
          el.style.cursor = '';
        });
      };
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const cleanupHover = addHoverEvents();

    return () => {
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
      cleanupHover();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={cursorRef}
      className="fixed pointer-events-none z-[1002]"
      animate={{
        scale: isHovered ? SCALE_HOVER : 1,
        rotate: isHovered ? 180 : 45,
        x: position.x,
        y: position.y,
      }}
      initial={false}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      style={{
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
      }}
    >
      {/* Diamond structure */}
      <div className="relative w-full h-full">
        {/* Outer glow */}
        <div 
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(50% 5%, 95% 50%, 50% 95%, 5% 50%)',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
          }}
        />

        {/* Base diamond border */}
        <div 
          className="absolute inset-0 border-2 border-white"
          style={{
            clipPath: 'polygon(50% 5%, 95% 50%, 50% 95%, 5% 50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
          }}
        />

        {/* Main facets with gradients */}
        <div 
          className="absolute inset-[2px]"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.2))',
            clipPath: 'polygon(50% 5%, 95% 50%, 50% 95%, 5% 50%)',
          }}
        />

        {/* Additional facets */}
        <div 
          className="absolute inset-[4px]"
          style={{
            background: 'linear-gradient(-45deg, transparent, rgba(255,255,255,0.8), transparent)',
            clipPath: 'polygon(50% 5%, 95% 50%, 50% 95%, 5% 50%)',
          }}
        />

        {/* Center shine */}
        <div 
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{
            boxShadow: '0 0 5px rgba(255,255,255,0.8)',
          }}
        />

        {/* Additional highlights */}
        <div 
          className="absolute w-full h-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)',
            mixBlendMode: 'overlay',
          }}
        />
      </div>
    </motion.div>
  );
};

export default Cursor;