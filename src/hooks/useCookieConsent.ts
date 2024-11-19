'use client';

import { useState, useEffect } from 'react';

export interface CookiePreferences {
  necessary: boolean;  // Cookie tecnici (sempre true)
  analytics: boolean;  // Google Analytics
  marketing: boolean;  // Cookie di marketing/pubblicità
}

interface CookieConsentData {
  preferences: CookiePreferences;
  timestamp: string;
  consentId: string;
  userAgent: string;
  lastUpdated: string;
  consentVersion: string;
  consentType: 'full' | 'partial' | 'rejected';
}

// Chiavi localStorage
const COOKIE_CONSENT_KEY = 'cookie-consent';
const FIRST_VISIT_KEY = 'first-visit';
const CONSENT_VERSION = '1.0.0'; // Incrementare quando si fanno modifiche significative

// Impostazioni predefinite conformi al GDPR
const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,     // Sempre attivo
  analytics: false,    // Opt-in richiesto
  marketing: false,    // Opt-in richiesto
};

// Genera un ID univoco per il consenso
const generateConsentId = () => {
  return 'consent_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
};

// Determina il tipo di consenso
const determineConsentType = (preferences: CookiePreferences): 'full' | 'partial' | 'rejected' => {
  if (preferences.analytics && preferences.marketing) return 'full';
  if (!preferences.analytics && !preferences.marketing) return 'rejected';
  return 'partial';
};

export const useCookieConsent = () => {
  const [cookieConsent, setCookieConsent] = useState<CookiePreferences | null>(null);
  const [consentData, setConsentData] = useState<CookieConsentData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    try {
      // Controlla se è la prima visita
      const firstVisit = localStorage.getItem(FIRST_VISIT_KEY);
      
      if (firstVisit) {
        // Se non è la prima visita, controlla se ci sono preferenze salvate
        const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (savedConsent) {
          const parsedConsent = JSON.parse(savedConsent);
          setCookieConsent({
            ...parsedConsent.preferences,
            necessary: true, // Forza sempre true
          });
          setConsentData(parsedConsent);
          setIsFirstVisit(false);
        } else {
          setCookieConsent(null);
          setIsFirstVisit(true);
        }
      } else {
        setIsFirstVisit(true);
        setCookieConsent(null);
      }
    } catch (error) {
      console.error('Errore nel caricamento delle preferenze cookie:', error);
      setCookieConsent(DEFAULT_PREFERENCES);
      setIsFirstVisit(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Blocca lo scroll solo se è la prima visita e non c'è consenso
    if (!isLoading && isFirstVisit && !cookieConsent) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.addEventListener('wheel', preventDefault, { passive: false });
      document.addEventListener('touchmove', preventDefault, { passive: false });
      document.addEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.removeEventListener('wheel', preventDefault);
      document.removeEventListener('touchmove', preventDefault);
      document.removeEventListener('keydown', preventDefaultForScrollKeys);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.removeEventListener('wheel', preventDefault);
      document.removeEventListener('touchmove', preventDefault);
      document.removeEventListener('keydown', preventDefaultForScrollKeys);
    };
  }, [isLoading, isFirstVisit, cookieConsent]);

  const saveConsent = (preferences: CookiePreferences) => {
    // Assicurati che i cookie necessari siano sempre attivi
    const finalPreferences = {
      ...preferences,
      necessary: true,
    };

    // Crea l'oggetto dei dati del consenso
    const newConsentData: CookieConsentData = {
      preferences: finalPreferences,
      timestamp: new Date().toISOString(),
      consentId: generateConsentId(),
      userAgent: navigator.userAgent,
      lastUpdated: new Date().toISOString(),
      consentVersion: CONSENT_VERSION,
      consentType: determineConsentType(finalPreferences)
    };

    // Salva le preferenze
    setCookieConsent(finalPreferences);
    setConsentData(newConsentData);
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsentData));
    localStorage.setItem(FIRST_VISIT_KEY, 'true');
    setIsFirstVisit(false);

    // Log del consenso (puoi implementare qui la chiamata al tuo backend)
    console.log('Cookie consent logged:', {
      ...newConsentData,
      action: 'consent_updated'
    });

    // Applica le preferenze
    if (finalPreferences.analytics) {
      // Inizializza Google Analytics
      console.log('Initializing Google Analytics...');
    }

    if (finalPreferences.marketing) {
      // Inizializza i cookie di marketing
      console.log('Initializing marketing cookies...');
    }
  };

  return {
    cookieConsent,
    consentData,
    isLoading,
    isFirstVisit,
    saveConsent
  };
};

// Utility functions per prevenire lo scroll
function preventDefault(e: Event) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e: KeyboardEvent) {
  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  if (keys[e.keyCode as keyof typeof keys]) {
    preventDefault(e);
    return false;
  }
}

export default useCookieConsent;
