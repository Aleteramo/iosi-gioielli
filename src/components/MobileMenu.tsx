'use client'

import { useState } from 'react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4">
          <nav className="space-y-4">
            <a
              href="/collezioni"
              className="block text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Collezioni
            </a>
            <a
              href="/diamanti"
              className="block text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Diamanti
            </a>
            <a
              href="/sostenibilita"
              className="block text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sostenibilità
            </a>
            <a
              href="/about"
              className="block text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Chi Siamo
            </a>
            <a
              href="/contatti"
              className="block text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contatti
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
