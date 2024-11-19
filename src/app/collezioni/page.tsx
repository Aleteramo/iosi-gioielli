'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

// Mock data - In produzione questo verrebbe da un CMS o API
const collections: Collection[] = [
  {
    id: '1',
    name: 'Diana',
    description: 'Una collezione che celebra l\'eleganza moderna e sostenibile',
    image: '/images/diana.jpg',
    slug: 'diana'
  },
  {
    id: '2',
    name: 'Aurora',
    description: 'Gioielli che catturano la luce del primo mattino',
    image: '/images/aurora.jpg',
    slug: 'aurora'
  },
  {
    id: '3',
    name: 'Nova',
    description: 'Design audace per la donna contemporanea',
    image: '/images/nova.jpg',
    slug: 'nova'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-dark pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-cormorant mb-4">Collezioni</h1>
          <p className="text-light/60 font-code">
            // Esplora le nostre collezioni di gioielli sostenibili
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              variants={itemVariants}
              className="group relative h-[400px] overflow-hidden rounded-lg"
            >
              <Link href={`/collezioni/${collection.slug}`} className="block h-full">
                <div className="relative h-full">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h2 className="text-4xl font-cormorant mb-3">{collection.name}</h2>
                    <p className="text-light/80 font-code text-sm mb-4">{collection.description}</p>
                    <span className="text-accent font-code text-sm inline-block">
                      {'>'} scopri_collezione()
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
