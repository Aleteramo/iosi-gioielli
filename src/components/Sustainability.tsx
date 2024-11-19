'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Sustainability = () => {
  const environmentalImpacts = [
    {
      title: "Zero Estrazione Mineraria",
      description: "I nostri diamanti sono creati in laboratorio, eliminando completamente l'impatto ambientale dell'estrazione mineraria.",
      icon: "/images/sustainability/no-mining.png"
    },
    {
      title: "Energia Rinnovabile",
      description: "Utilizziamo energia 100% rinnovabile nel processo di creazione dei nostri diamanti lab grown.",
      icon: "/images/sustainability/renewable.png"
    },
    {
      title: "Riduzione CO2",
      description: "La produzione di diamanti lab grown emette il 95% in meno di CO2 rispetto all'estrazione tradizionale.",
      icon: "/images/sustainability/co2.png"
    }
  ];

  const sustainabilityStats = [
    { value: "100%", label: "Energia Rinnovabile" },
    { value: "95%", label: "Riduzione CO2" },
    { value: "0", label: "Impatto Minerario" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-cormorant mb-6">Il Nostro Impegno per l'Ambiente</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Crediamo che il lusso debba essere sostenibile. I nostri diamanti lab grown rappresentano 
            il futuro dell'industria gioielliera, combinando bellezza e responsabilità ambientale.
          </p>
        </motion.div>

        {/* Statistiche Sostenibilità */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {sustainabilityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-5xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Impatti Ambientali */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {environmentalImpacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
            >
              <div className="relative h-16 mb-6">
                <Image
                  src={impact.icon}
                  alt={impact.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-medium mb-4">{impact.title}</h3>
              <p className="text-gray-300">{impact.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-gray-300 mb-8">
            Scopri come i nostri diamanti lab grown stanno rivoluzionando l'industria del lusso sostenibile
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-colors"
          >
            Scopri la Nostra Storia
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Sustainability;
