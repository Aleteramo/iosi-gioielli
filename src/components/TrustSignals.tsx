'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TrustSignals = () => {
  const certifications = [
    {
      name: "IGI Certified",
      logo: "/images/certifications/igi.png",
      description: "International Gemological Institute - Leader mondiale nella certificazione di diamanti lab grown"
    },
    {
      name: "GCAL Certified",
      logo: "/images/certifications/gcal.png",
      description: "Gem Certification & Assurance Lab - Garanzia di qualità e autenticità"
    },
    {
      name: "Sustainable",
      logo: "/images/certifications/sustainable.png",
      description: "Processo produttivo sostenibile e a basso impatto ambientale"
    }
  ];

  const reviews = [
    {
      text: "La qualità dei diamanti lab grown è incredibile, identica ai naturali ma con un prezzo più accessibile.",
      author: "Maria C.",
      rating: 5
    },
    {
      text: "Ho apprezzato molto la trasparenza e la professionalità nel spiegare ogni dettaglio dei diamanti lab grown.",
      author: "Luca R.",
      rating: 5
    },
    {
      text: "Bellissimo sapere che il mio anello non ha avuto impatto ambientale. La qualità è eccezionale!",
      author: "Sofia M.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Certificazioni */}
        <div className="mb-20">
          <h2 className="text-4xl font-cormorant text-center mb-16">Le Nostre Certificazioni</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-2xl text-center backdrop-blur-sm"
              >
                <div className="relative h-24 mb-6">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-medium mb-4">{cert.name}</h3>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recensioni */}
        <div>
          <h2 className="text-4xl font-cormorant text-center mb-16">Cosa Dicono i Nostri Clienti</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                <p className="font-medium">{review.author}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            Richiedi una Consulenza Gratuita
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
