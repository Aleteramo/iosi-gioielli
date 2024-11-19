'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from '../ui/Cursor';
import { useLoadingContext } from '@/contexts/LoadingContext';
import LoadingScreen from '@/components/ui/LoadingScreen';
import CookieBanner from '../ui/CookieBanner';
import { useCookieConsent } from '@/hooks/useCookieConsent';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isLoading } = useLoadingContext();
  const { cookieConsent, isFirstVisit, saveConsent } = useCookieConsent();

  return (
    <div className="min-h-screen flex flex-col">
      <Cursor />
      {isLoading && <LoadingScreen />}
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {isFirstVisit && !cookieConsent && <CookieBanner onAccept={saveConsent} />}
    </div>
  );
};

export default MainLayout;
