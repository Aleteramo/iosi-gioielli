'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TrustSignals from '@/components/TrustSignals';
import Sustainability from '@/components/Sustainability';
import DiamondComparison from '@/components/DiamondComparison';
import { useRouter } from 'next/navigation';
import { useLoadingContext } from '@/contexts/LoadingContext';

const LabGrownPage = () => {
  const router = useRouter();
  const { setIsLoading } = useLoadingContext();

  const features = [
    {
      title: "Identici ai Diamanti Naturali",
      description: "I diamanti lab grown sono chimicamente, fisicamente e otticamente identici ai diamanti estratti. Sono veri diamanti, creati in laboratorio replicando il processo naturale.",
      icon: "💎"
    },
    {
      title: "Certificazione Garantita",
      description: "Ogni nostro diamante è certificato da laboratori internazionali indipendenti, garantendo le stesse caratteristiche di purezza, colore e taglio dei diamanti naturali.",
      icon: "📜"
    },
    {
      title: "Sostenibilità Ambientale",
      description: "La creazione in laboratorio riduce drasticamente l'impatto ambientale, eliminando l'estrazione mineraria e riducendo le emissioni di CO2.",
      icon: "🌱"
    },
    {
      title: "Tracciabilità Completa",
      description: "Conosciamo l'origine precisa di ogni diamante, garantendo una filiera etica e trasparente dal laboratorio al gioiello finale.",
      icon: "🔍"
    }
  ];

  const comparisons = [
    {
      aspect: "Composizione",
      labGrown: "100% carbonio cristallizzato",
      natural: "100% carbonio cristallizzato",
      identical: true
    },
    {
      aspect: "Durezza (Scala Mohs)",
      labGrown: "10",
      natural: "10",
      identical: true
    },
    {
      aspect: "Brillantezza",
      labGrown: "Identica",
      natural: "Identica",
      identical: true
    },
    {
      aspect: "Certificazione",
      labGrown: "IGI, GCAL",
      natural: "GIA, IGI",
      identical: true
    },
    {
      aspect: "Impatto Ambientale",
      labGrown: "Minimo",
      natural: "Significativo",
      identical: false
    },
    {
      aspect: "Prezzo",
      labGrown: "30-40% più accessibile",
      natural: "Più elevato",
      identical: false
    }
  ];

  const handleCollectionClick = async () => {
    setIsLoading(true);
    await router.push('/collezioni');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lab-grown-hero.jpg"
            alt="Lab Grown Diamonds"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-cormorant mb-6"
          >
            Il Futuro dei Diamanti è Qui
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            Diamanti etici e sostenibili, identici a quelli naturali in ogni aspetto
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-cormorant text-center mb-16">Perché Scegliere i Diamanti Lab Grown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-cormorant mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sezione Sostenibilità */}
      <Sustainability />

      {/* Confronto Diamanti */}
      <DiamondComparison />

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-cormorant text-center mb-16">Confronto Dettagliato</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-left">Caratteristica</th>
                  <th className="py-4 px-6 text-left">Lab Grown</th>
                  <th className="py-4 px-6 text-left">Naturale</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comp) => (
                  <tr key={comp.aspect} className="border-b border-white/10">
                    <td className="py-4 px-6 font-medium">{comp.aspect}</td>
                    <td className="py-4 px-6">
                      <span className={comp.identical ? "text-green-400" : ""}>
                        {comp.labGrown}
                      </span>
                    </td>
                    <td className="py-4 px-6">{comp.natural}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-cormorant mb-6">Scopri la Nostra Collezione</h2>
          <p className="text-xl text-gray-300 mb-8">
            Esplora i nostri gioielli con diamanti lab grown e fai una scelta consapevole per il futuro
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
            onClick={handleCollectionClick}
          >
            Vedi la Collezione
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default LabGrownPage;
