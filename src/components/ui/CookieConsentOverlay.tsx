'use client';

import React, { useState } from 'react';
import CookieBanner from './CookieBanner';
import { CookiePreferences } from '@/hooks/useCookieConsent';

interface CookieConsentOverlayProps {
  onAccept: (preferences: CookiePreferences) => void;
}

const CookieConsentOverlay: React.FC<CookieConsentOverlayProps> = ({ onAccept }) => {
  const [isPolicyVisible, setIsPolicyVisible] = useState(false);

  return (
    <div className="fixed inset-0 z-[9999] bg-black/50">
      {/* Overlay che blocca TUTTE le interazioni */}
      {!isPolicyVisible && (
        <div 
          className="absolute inset-0"
          style={{ pointerEvents: 'all' }}
          onClick={(e) => e.stopPropagation()}
          onScroll={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
          onWheel={(e) => e.preventDefault()}
        />
      )}
      
      {/* Banner dei cookie (l'unica cosa cliccabile) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-auto">
        <CookieBanner 
          onAccept={onAccept}
          onPolicyVisibilityChange={setIsPolicyVisible}
        />
      </div>
    </div>
  );
};

export default CookieConsentOverlay;
