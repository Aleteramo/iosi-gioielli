'use client';

import React from 'react';
import CookieBanner from './CookieBanner';
import { CookiePreferences } from '@/hooks/useCookieConsent';

interface CookieOverlayProps {
  onAccept: (preferences: CookiePreferences) => void;
}

const CookieOverlay: React.FC<CookieOverlayProps> = ({ onAccept }) => {
  return (
    <div 
      className="fixed inset-0 z-[9999] bg-transparent"
      style={{ pointerEvents: 'all' }}
    >
      {/* Overlay che blocca i click */}
      <div 
        className="absolute inset-0" 
        style={{ pointerEvents: 'all' }}
        onClick={(e) => e.preventDefault()}
      />
      
      {/* Banner dei cookie */}
      <div className="relative">
        <CookieBanner onAccept={onAccept} />
      </div>
    </div>
  );
};

export default CookieOverlay;
