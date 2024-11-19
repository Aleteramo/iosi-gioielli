'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useLoadingContext } from '@/contexts/LoadingContext';

const DiamondComparison = () => {
  const comparisonPoints = [
    {
      category: "Qualità",
      labGrown: "Identica ai diamanti naturali",
      natural: "Identica ai diamanti lab grown",
      equal: true
    },
    {
      category: "Composizione Chimica",
      labGrown: "100% carbonio cristallizzato",
      natural: "100% carbonio cristallizzato",
      equal: true
    },
    {
      category: "Certificazione",
      labGrown: "Certificati IGI e GCAL",
      natural: "Certificati GIA e IGI",
      equal: true
    },
    {
      category: "Prezzo",
      labGrown: "40-50% più conveniente",
      natural: "Prezzo significativamente più alto",
      equal: false,
      advantage: "lab"
    },
    {
      category: "Impatto Ambientale",
      labGrown: "Minimo impatto ambientale",
      natural: "Estrazione mineraria intensiva",
      equal: false,
      advantage: "lab"
    },
    {
      category: "Tracciabilità",
      labGrown: "100% tracciabile",
      natural: "Difficile da tracciare",
      equal: false,
      advantage: "lab"
    }
  ];

  const router = useRouter();
  const { setIsLoading } = useLoadingContext();

  const handleCollectionClick = async () => {
    setIsLoading(true);
    await router.push('/collezioni');
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-cormorant mb-6">Confronto Diamanti</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scopri le differenze e le similitudini tra i diamanti lab grown e i diamanti naturali
          </p>
        </motion.div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-6 py-4 font-medium">Caratteristica</th>
                <th className="px-6 py-4 font-medium text-emerald-400">Diamanti Lab Grown</th>
                <th className="px-6 py-4 font-medium">Diamanti Naturali</th>
              </tr>
            </thead>
            <tbody>
              {comparisonPoints.map((point, index) => (
                <motion.tr
                  key={point.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-gray-800"
                >
                  <td className="px-6 py-4 font-medium">{point.category}</td>
                  <td className={`px-6 py-4 ${point.advantage === 'lab' ? 'text-emerald-400' : ''}`}>
                    {point.labGrown}
                    {point.advantage === 'lab' && (
                      <span className="ml-2 text-emerald-400">✓</span>
                    )}
                  </td>
                  <td className={`px-6 py-4 ${point.advantage === 'natural' ? 'text-emerald-400' : ''}`}>
                    {point.natural}
                    {point.advantage === 'natural' && (
                      <span className="ml-2 text-emerald-400">✓</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-8">
            I diamanti lab grown offrono la stessa qualità e bellezza dei diamanti naturali, 
            con vantaggi significativi in termini di sostenibilità e convenienza.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors"
            onClick={handleCollectionClick}
          >
            Scopri la Nostra Collezione
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DiamondComparison;
