'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navigationItems = [
  { name: 'Collezioni', path: '/collezioni' },
  { name: 'Essenza', path: '/su-di-noi/essenza' },
  { name: 'Lab Grown', path: '/lab-grown' },
  { name: 'Contact', path: '/contatti' },
] as const;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const scrollThreshold = window.innerHeight * 0.1;
    setIsScrolled(window.scrollY > scrollThreshold);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-black shadow-2xl py-4' 
          : 'bg-gradient-to-b from-black via-black/95 to-black/90 py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo a sinistra con barra rossa fissa */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative z-[101]"
          >
            <Link 
              href="/"
              className="relative group block"
            >
              <span className="text-white font-cormorant text-2xl tracking-wider">IO Sì</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-100" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12 relative z-[101]">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="group relative overflow-hidden py-2"
              >
                <span
                  className={`font-cormorant text-base tracking-widest transition-colors duration-500
                    ${pathname === item.path ? 'text-golden' : 'text-white group-hover:text-golden'}`}
                >
                  {item.name}
                </span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform transition-transform duration-300
                    ${pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-[101] w-10 h-10 flex flex-col justify-center items-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 2 : -4,
              }}
              className="w-6 h-0.5 bg-golden block transition-all duration-300"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -2 : 4,
              }}
              className="w-6 h-0.5 bg-golden block transition-all duration-300"
            />
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 bg-black/95 backdrop-blur-md md:hidden z-[100] flex items-center justify-center"
              >
                <div className="flex flex-col items-center justify-center space-y-8">
                  {navigationItems.map((item, i) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`font-cormorant text-3xl tracking-widest transition-colors duration-500
                          ${pathname === item.path 
                            ? 'text-golden' 
                            : 'text-white hover:text-golden'
                          }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;