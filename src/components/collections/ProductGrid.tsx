'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLoadingContext } from '@/contexts/LoadingContext';
import type { Product } from '@/lib/products';

interface ProductGridProps {
  products: Product[];
}

const formatPrice = (price: number, locale: string = 'it-IT') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

export default function ProductGrid({ products }: ProductGridProps) {
  const { setIsLoading } = useLoadingContext();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {products.map((product) => (
        <motion.div
          key={product.id}
          variants={item}
          onHoverStart={() => setHoveredId(product.id)}
          onHoverEnd={() => setHoveredId(null)}
          className="group relative"
        >
          <Link
            href={`/collezioni/${product.category}/${product.slug}`}
            onClick={() => setIsLoading(true)}
            className="block"
          >
            <div className="relative aspect-square overflow-hidden bg-black rounded-lg">
              {/* Background Image with Blur Effect */}
              <div 
                className="absolute inset-0 blur-xl scale-110 opacity-70 transition-all duration-700"
                style={{
                  backgroundImage: `url(${product.images[0]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              {/* Main Image */}
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${product.images[0]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredId === product.id ? 1 : 0,
                    y: hoveredId === product.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-cormorant text-2xl text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="font-light text-white/90 text-lg">
                    {formatPrice(product.price)}
                  </p>
                  {product.diamond && (
                    <p className="font-light text-white/70 text-sm mt-1">
                      Diamante lab grown {product.diamond.carat} ct
                    </p>
                  )}
                  <p className="font-light text-white/70 text-sm mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  {/* View Details Button */}
                  <motion.div 
                    className="mt-4 inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-golden border border-golden px-4 py-2 rounded-full text-sm hover:bg-golden hover:text-black transition-colors duration-300">
                      Scopri di più →
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </Link>
          
          {/* Quick View Button */}
          <motion.button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Quick view"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  );
}