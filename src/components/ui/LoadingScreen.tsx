'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo';
import CookieConsentOverlay from './CookieConsentOverlay';
import useCookieConsent from '@/hooks/useCookieConsent';

const LOADING_DURATION = 3500;
const MESSAGE_INTERVAL = 1200;

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
  const { cookieConsent, isLoading: cookieLoading, isFirstVisit, saveConsent } = useCookieConsent();

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

  // Funzione per resettare il localStorage
  const resetLocalStorage = () => {
    localStorage.removeItem('first-visit');
    localStorage.removeItem('cookie-consent');
    window.location.reload();
  };

  // Se stiamo ancora caricando le preferenze dei cookie, mostra uno stato di loading
  if (cookieLoading) {
    return null;
  }

  return (
    <>
      {/* Pulsante temporaneo per il reset - solo in development */}
      {process.env.NODE_ENV === 'development' && (
        <button
          onClick={resetLocalStorage}
          className="fixed top-4 right-4 z-50 bg-red-500 text-white px-4 py-2 rounded"
        >
          Reset Cookie Consent
        </button>
      )}
      
      {isFirstVisit && !cookieConsent && <CookieConsentOverlay onAccept={saveConsent} />}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-black flex flex-col items-center justify-center z-40 overflow-hidden"
            variants={variants.container}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Logo e Messaggi Container */}
            <div className="flex flex-col items-center justify-center gap-12 mb-8">
              {/* Logo con Glow Effect */}
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-full blur-xl"
                  variants={variants.glow}
                  animate="animate"
                />
                <motion.div variants={variants.logo}>
                  <Logo />
                </motion.div>
              </div>

              {/* Messaggi Rotanti */}
              <motion.div
                className="h-8 overflow-hidden text-white/80"
                variants={variants.message}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={messageIndex}
                    variants={variants.text}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-lg text-center"
                  >
                    {messages[messageIndex]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Progress Bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-white/20 w-full origin-left"
              variants={variants.progressBar}
              initial="hidden"
              animate="visible"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LoadingScreen;