'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLoadingContext } from '@/contexts/LoadingContext';

const Essenza = () => {
  const essencePoints = [
    {
      title: "Innovazione",
      description: "La fusione perfetta tra tecnologia all'avanguardia e tradizione artigianale italiana",
      image: "/images/essence/innovation.jpg"
    },
    {
      title: "Sostenibilità",
      description: "Un impegno concreto per un lusso consapevole e rispettoso dell'ambiente",
      image: "/images/essence/sustainability.jpg"
    },
    {
      title: "Eleganza",
      description: "Design contemporaneo che celebra la bellezza senza tempo dei diamanti",
      image: "/images/essence/elegance.jpg"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const router = useRouter();
  const { setIsLoading } = useLoadingContext();

  const handleVisitClick = async () => {
    setIsLoading(true);
    await router.push('/contatti');
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="font-cormorant text-base tracking-widest mb-4 text-golden">ESSENZA</h2>
          <p className="text-3xl font-light max-w-3xl mx-auto">
            La nostra essenza risiede nella ricerca dell'eccellenza, 
            nell'innovazione sostenibile e nella bellezza senza compromessi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {essencePoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-80 mb-8 overflow-hidden">
                <Image
                  src={point.image}
                  alt={point.title}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0" />
              </div>
              <h3 className="text-2xl font-cormorant mb-4">{point.title}</h3>
              <p className="text-gray-300 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          className="mt-20 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-300 italic mb-12">
              "Ogni diamante lab grown racconta una storia di innovazione, 
              sostenibilità e bellezza senza tempo. Questa è la nostra essenza."
            </p>
            <div className="h-[1px] w-24 bg-golden mx-auto" />
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            {...fadeInUp}
            className="relative h-[600px]"
          >
            <Image
              src="/images/essence/atelier.jpg"
              alt="Il nostro atelier"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            {...fadeInUp}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-cormorant mb-6">Il Nostro Atelier</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Nel cuore del nostro atelier, la tradizione orafa italiana si fonde con 
              l'innovazione dei diamanti lab grown. Ogni pezzo è creato con passione, 
              precisione e rispetto per l'ambiente, incarnando la nostra visione di 
              un lusso contemporaneo e sostenibile.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="self-start px-8 py-3 border border-golden text-golden hover:bg-golden/10 transition-colors"
              onClick={handleVisitClick}
            >
              Prenota una Visita
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Essenza;
