'use client';

import { motion } from 'framer-motion';

interface DiamondSpecsProps {
  diamond: {
    carat: number;
    color: string;
    clarity: string;
    cut: string;
    certification: string;
  };
}

export default function DiamondSpecs({ diamond }: DiamondSpecsProps) {
  const specs = [
    { label: 'Carati', value: diamond.carat },
    { label: 'Colore', value: diamond.color },
    { label: 'Purezza', value: diamond.clarity },
    { label: 'Taglio', value: diamond.cut },
    { label: 'Certificato', value: diamond.certification },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-neutral-50 p-6 rounded-lg">
      <h3 className="font-cormorant text-xl mb-4">
        Specifiche del Diamante
      </h3>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-5 gap-4"
      >
        {specs.map(({ label, value }) => (
          <motion.div
            key={label}
            variants={item}
            className="text-center"
          >
            <div className="text-sm text-gray-500 mb-1">{label}</div>
            <div className="font-medium">{value}</div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={item}
        className="mt-4 text-sm text-gray-500 text-center"
      >
        Ogni diamante è certificato IGI e presenta un numero di serie unico 
        inciso al laser, garantendone l'autenticità e la tracciabilità.
      </motion.div>
    </div>
  );
}
