'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: 'Collections',
      links: [
        { name: 'New Arrivals', href: '/collections/new' },
        { name: 'Lab Grown Diamonds', href: '/collections/lab-grown' },
        { name: 'Rings', href: '/collections/rings' },
        { name: 'Necklaces', href: '/collections/necklaces' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Craftsmanship', href: '/craftsmanship' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Shipping', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
      ],
    },
  ];

  return (
    <footer className="bg-dark-gray text-light py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Logo />
            <p className="text-light/60 font-code text-sm">
              // Redefining luxury with sustainable lab-grown diamonds and Italian craftsmanship
            </p>
            <div className="flex space-x-4">
              {['instagram', 'facebook', 'twitter'].map((social) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com/iosigioielli`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-light/20 flex items-center justify-center hover:border-accent transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social} text-light/60 hover:text-accent`} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="font-code text-accent text-sm">// {section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-light/60 hover:text-accent transition-colors duration-300 font-code text-sm"
                    >
                      {`> ${link.name}`}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-light/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-light/40 font-code text-sm">
              &copy; {new Date().getFullYear()} IO Sì. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-light/40 hover:text-accent text-sm font-code">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-light/40 hover:text-accent text-sm font-code">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
