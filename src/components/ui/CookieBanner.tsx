'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CookiePreferences } from '@/hooks/useCookieConsent';
import Link from 'next/link';
import CookiePolicyContent from './CookiePolicyContent';

interface CookieBannerProps {
  onAccept: (preferences: CookiePreferences) => void;
  onPolicyVisibilityChange?: (isVisible: boolean) => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onPolicyVisibilityChange }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  // Blocca lo scroll quando il modale dei dettagli è aperto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    };
  }, []);

  // Informa il parent component quando la policy è visibile
  useEffect(() => {
    if (onPolicyVisibilityChange) {
      onPolicyVisibilityChange(showPolicy);
    }
  }, [showPolicy, onPolicyVisibilityChange]);

  const handleAccept = () => {
    onAccept(preferences);
  };

  const handleReject = () => {
    onAccept({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Overlay per bloccare l'interazione */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[998]" />
      
      {/* Banner principale */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-black/95 text-white shadow-lg z-[999]"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-sm text-center sm:text-left">
              Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. 
              <button
                onClick={() => setShowDetails(true)}
                className="text-white underline hover:text-white/80 ml-1"
              >
                Maggiori informazioni
              </button>
            </div>
            <div className="flex flex-row gap-3">
              <button
                onClick={handleReject}
                className="px-4 py-1.5 text-sm font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                Rifiuta
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-1.5 text-sm font-medium bg-white text-black hover:bg-white/90 rounded-lg transition-colors"
              >
                Accetta
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modale dettagli */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1000] overflow-hidden"
            onClick={() => setShowDetails(false)}
          >
            {/* Contenuto del modale */}
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              className="absolute bottom-0 left-0 right-0 bg-black p-6 rounded-t-2xl max-h-[80vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium">Impostazioni Cookie</h2>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="text-white/60 hover:text-white"
                  >
                    <span className="sr-only">Chiudi</span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Opzioni Cookie */}
                <div className="space-y-4">
                  {/* Cookie necessari */}
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div>
                      <h3 className="font-medium">Cookie necessari</h3>
                      <p className="text-sm text-white/60">
                        Questi cookie sono essenziali per il funzionamento del sito.
                      </p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="sr-only"
                      />
                      <div className="w-10 h-6 bg-white/20 rounded-full shadow-inner"></div>
                      <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                    </div>
                  </div>

                  {/* Cookie analytics */}
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div>
                      <h3 className="font-medium">Cookie analytics</h3>
                      <p className="text-sm text-white/60">
                        Ci aiutano a capire come gli utenti interagiscono con il sito.
                      </p>
                    </div>
                    <button
                      onClick={() => handleToggle('analytics')}
                      className={`relative w-10 h-6 transition-colors duration-200 ease-in-out rounded-full ${
                        preferences.analytics ? 'bg-white' : 'bg-white/20'
                      }`}
                    >
                      <span className="sr-only">Abilita cookie analytics</span>
                      <div
                        className={`absolute left-1 top-1 w-4 h-4 transition-transform duration-200 ease-in-out rounded-full ${
                          preferences.analytics ? 'translate-x-4 bg-black' : 'translate-x-0 bg-white'
                        }`}
                      ></div>
                    </button>
                  </div>

                  {/* Cookie marketing */}
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div>
                      <h3 className="font-medium">Cookie marketing</h3>
                      <p className="text-sm text-white/60">
                        Utilizzati per mostrarti annunci pertinenti sui nostri prodotti.
                      </p>
                    </div>
                    <button
                      onClick={() => handleToggle('marketing')}
                      className={`relative w-10 h-6 transition-colors duration-200 ease-in-out rounded-full ${
                        preferences.marketing ? 'bg-white' : 'bg-white/20'
                      }`}
                    >
                      <span className="sr-only">Abilita cookie marketing</span>
                      <div
                        className={`absolute left-1 top-1 w-4 h-4 transition-transform duration-200 ease-in-out rounded-full ${
                          preferences.marketing ? 'translate-x-4 bg-black' : 'translate-x-0 bg-white'
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>

                {/* Footer con pulsanti */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => setShowPolicy(true)}
                    className="text-sm text-white/60 hover:text-white underline"
                  >
                    Cookie Policy
                  </button>
                  <div className="flex gap-3">
                    <button
                      onClick={handleReject}
                      className="px-4 py-1.5 text-sm font-medium text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      Rifiuta tutto
                    </button>
                    <button
                      onClick={handleAccept}
                      className="px-4 py-1.5 text-sm font-medium bg-white text-black hover:bg-white/90 rounded-lg transition-colors"
                    >
                      Accetta selezionati
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Policy Modale */}
      <AnimatePresence>
        {showPolicy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1001] overflow-y-auto"
          >
            <div className="min-h-screen px-4 py-8">
              <div className="max-w-3xl mx-auto bg-black rounded-2xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-medium">Cookie Policy</h2>
                  <button
                    onClick={() => setShowPolicy(false)}
                    className="text-white/60 hover:text-white"
                  >
                    <span className="sr-only">Chiudi</span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <CookiePolicyContent />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieBanner;
