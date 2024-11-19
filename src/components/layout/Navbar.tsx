'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Collezioni', path: '/collezioni' },
  { name: 'Su di Noi', path: '/su-di-noi' },
  { name: 'Lab Grown', path: '/lab-grown' },
  { name: 'Contatti', path: '/contatti' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
  }`;

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-50">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-cormorant text-base tracking-wider transition-all duration-300 
                  ${pathname === item.path 
                    ? 'text-golden font-medium' 
                    : 'text-white hover:text-golden'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 w-8 h-8 flex flex-col justify-center items-center"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45' : 'translate-y-1'
              }`}
            />
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed inset-0 bg-black/95 backdrop-blur-lg md:hidden"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-cormorant text-2xl tracking-wider transition-all duration-300 
                        ${pathname === item.path 
                          ? 'text-golden font-medium' 
                          : 'text-white hover:text-golden'
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
