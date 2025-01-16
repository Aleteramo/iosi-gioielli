'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

export default function ContattiPage() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: searchParams.get('product') || '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    // Add actual form submission, validation, and feedback
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-24">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-cormorant text-golden mb-4">
            Contattaci
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hai domande su un gioiello? Vuoi un&apos;assistenza personalizzata? 
            Compila il modulo qui sotto e ti risponderemo al più presto.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto bg-zinc-900 p-8 rounded-xl shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-black/30 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-golden transition-colors"
                placeholder="Il tuo nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-black/30 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-golden transition-colors"
                placeholder="la tua email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                Telefono (Opzionale)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-black/30 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-golden transition-colors"
                placeholder="il tuo numero di telefono"
              />
            </div>

            <div>
              <label htmlFor="product" className="block text-sm text-gray-400 mb-2">
                Gioiello di Interesse
              </label>
              <input
                type="text"
                id="product"
                name="product"
                value={formData.product}
                onChange={handleInputChange}
                className="w-full bg-black/30 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-golden transition-colors"
                placeholder="Nome del gioiello (se applicabile)"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full bg-black/30 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-golden transition-colors"
                placeholder="Scrivi qui il tuo messaggio..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-golden text-black py-3 px-8 rounded-lg font-medium 
                hover:bg-golden/90 transition-colors duration-200 uppercase tracking-wider"
            >
              Invia Richiesta
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 space-y-4"
        >
          <h2 className="text-2xl font-cormorant text-golden">
            Altre Modalità di Contatto
          </h2>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <p className="text-gray-300">Email</p>
              <a 
                href="mailto:sales@gemmaeuropa.com" 
                className="text-white hover:text-golden transition-colors"
              >
                sales@gemmaeuropa.com
              </a>
            </div>
            <div>
              <p className="text-gray-300">Telefono</p>
              <a 
                href="tel:+390123456789" 
                className="text-white hover:text-golden transition-colors"
              >
                +0223185211
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}