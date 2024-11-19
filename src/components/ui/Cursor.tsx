'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CURSOR_SIZE = 35;
const SCALE_HOVER = 1.8;

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Detect Safari
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafariBrowser);

    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const x = e.clientX - CURSOR_SIZE / 2;
        const y = e.clientY - CURSOR_SIZE / 2;
        
        if (isSafariBrowser) {
          // Direct style manipulation for Safari
          cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        } else {
          // State update for other browsers
          setPosition({ x, y });
        }
      }
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseDown = () => setIsHovered(true);
    const onMouseUp = () => setIsHovered(false);

    const addHoverEvents = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
      const handleEnter = () => setIsHovered(true);
      const handleLeave = () => setIsHovered(false);

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleEnter);
        el.addEventListener('mouseleave', handleLeave);
      });

      return () => {
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleEnter);
          el.removeEventListener('mouseleave', handleLeave);
        });
      };
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    
    const cleanupHover = addHoverEvents();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      cleanupHover();
    };
  }, []);

  const cursorStyles = {
    width: CURSOR_SIZE,
    height: CURSOR_SIZE,
    ...(isSafari ? {
      transform: 'translate3d(0, 0, 0)',
      willChange: 'transform',
      backfaceVisibility: 'hidden' as const,
    } : {})
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={cursorRef}
          className="fixed pointer-events-none z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: isHovered ? SCALE_HOVER : 1,
            ...(isSafari ? {} : { x: position.x, y: position.y }),
          }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
            mass: 0.5
          }}
          style={cursorStyles}
        >
          {/* Main cursor circle */}
          <div 
            className="w-full h-full rounded-full border-2 border-golden bg-golden/10"
            style={{
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)',
            }}
          />
          
          {/* Center dot */}
          <div 
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-golden rounded-full -translate-x-1/2 -translate-y-1/2"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cursor;