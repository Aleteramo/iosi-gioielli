'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from '../ui/Cursor';
import LoadingScreen from '../ui/LoadingScreen';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <LoadingScreen />
      <Cursor />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
