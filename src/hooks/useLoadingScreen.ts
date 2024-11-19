'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Pagine che richiedono il loading screen
const LOADING_ROUTES = [
  '/collezioni',    // Collezioni
  '/collections/new'   // Nuovi arrivi
];

// Pagine che richiedono il loading screen solo alla prima visita
const FIRST_VISIT_ROUTES = [
  '/'  // Homepage
];

// Chiave per il localStorage
const VISITED_HOME_KEY = 'visited_home';

export const useLoadingScreen = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [visitedHome, setVisitedHome] = useState(() => {
    // Controlla se abbiamo già visitato la home
    if (typeof window !== 'undefined') {
      return localStorage.getItem(VISITED_HOME_KEY) === 'true';
    }
    return false;
  });
  const pathname = usePathname();

  useEffect(() => {
    // Mostra il loading screen per le route specificate
    if (LOADING_ROUTES.includes(pathname)) {
      setShowLoading(true);
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
    
    // Per la homepage, mostra il loading screen solo alla prima visita
    if (FIRST_VISIT_ROUTES.includes(pathname) && !visitedHome) {
      setShowLoading(true);
      setVisitedHome(true);
      // Salva lo stato nel localStorage
      localStorage.setItem(VISITED_HOME_KEY, 'true');
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [pathname, visitedHome]);

  return showLoading;
};
