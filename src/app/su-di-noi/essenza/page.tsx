'use client';

import React from 'react';
import Essenza from '@/components/Essenza';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useLoadingContext } from '@/contexts/LoadingContext';

const EssenzaPage = () => {
  const router = useRouter();
  const { setIsLoading } = useLoadingContext();

  const handleCollectionClick = async () => {
    setIsLoading(true);
    await router.push('/collezioni');
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white pt-32"
    >
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-cormorant text-4xl md:text-6xl mb-6"
          >
            La Nostra Essenza
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Un viaggio attraverso i valori e la filosofia che guidano IO Sì Gioielli 
            nella creazione di gioielli unici e sostenibili
          </motion.p>
        </div>
      </section>

      {/* Essenza Component */}
      <Essenza />

      {/* Additional Content */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-cormorant text-3xl mb-8"
          >
            Il Nostro Impegno
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Ogni giorno lavoriamo per portare innovazione nel mondo della gioielleria, 
            mantenendo viva la tradizione artigianale italiana e rispettando l'ambiente. 
            Questo è il nostro modo di creare bellezza.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-golden text-golden hover:bg-golden/10 transition-colors"
            onClick={handleCollectionClick}
          >
            Scopri le Nostre Collezioni
          </motion.button>
        </div>
      </section>
    </motion.main>
  );
};

export default EssenzaPage;
