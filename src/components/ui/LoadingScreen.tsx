'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo';

const LOADING_DURATION = 3500; // Increased duration
const MESSAGE_INTERVAL = 1200; // Slower message rotation

const messages = [
  "Preparando un'esperienza unica",
  "Creando momenti preziosi",
  "L'eleganza sta arrivando",
] as const;

const variants = {
  container: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 1, ease: "easeInOut" }
    }
  },
  logo: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      }
    }
  },
  glow: {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }
    }
  },
  progressBar: {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
      }
    }
  },
  message: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
      }
    }
  },
  text: {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  }
};

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  const rotateMessage = useCallback(() => {
    setMessageIndex(prev => (prev + 1) % messages.length);
  }, []);

  useEffect(() => {
    const messageInterval = setInterval(rotateMessage, MESSAGE_INTERVAL);
    const timer = setTimeout(() => setIsLoading(false), LOADING_DURATION);

    return () => {
      clearTimeout(timer);
      clearInterval(messageInterval);
    };
  }, [rotateMessage]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 gap-24"
          variants={variants.container}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Logo Container */}
          <div className="relative w-80 h-80">
            <motion.div
              className="absolute inset-0 -m-12 bg-gradient-to-r from-golden/20 via-white/20 to-golden/20 rounded-lg blur-xl"
              variants={variants.glow}
              animate="animate"
            />
            
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              variants={variants.logo}
              initial="hidden"
              animate="visible"
            >
              <Logo />
            </motion.div>
          </div>

          {/* Progress Bar Container */}
          <div className="relative w-96 h-1.5">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-golden/50 via-golden to-golden/50 rounded-full"
              variants={variants.progressBar}
              initial="hidden"
              animate="visible"
            />
          </div>

          {/* Message Container */}
          <motion.div
            className="flex flex-col items-center space-y-6"
            variants={variants.message}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              key={messages[messageIndex]}
              variants={variants.text}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-gray-300 font-light text-2xl italic tracking-wide"
            >
              {messages[messageIndex]}
            </motion.p>
            <p className="text-white font-cormorant text-3xl tracking-widest">
              IO Sì Gioielli
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;