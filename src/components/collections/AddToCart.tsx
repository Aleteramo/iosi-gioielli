'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface AddToCartProps {
  product: {
    id: string;
    name: string;
    price: number;
    sizes: string[];
  };
}

export default function AddToCart({ product }: AddToCartProps) {
  const [selectedSize, setSelectedSize] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    if (!selectedSize) return;
    
    setIsAdding(true);
    // Qui andrà la logica di aggiunta al carrello
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsAdding(false);
  };

  return (
    <div className="space-y-6">
      {/* Selezione Taglia */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Seleziona la Misura
        </label>
        <div className="grid grid-cols-5 gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`
                py-2 text-center rounded-lg border transition-colors
                ${
                  selectedSize === size
                    ? 'border-accent text-accent'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }
              `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Pulsante Aggiungi al Carrello */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleAddToCart}
        disabled={!selectedSize || isAdding}
        className={`
          w-full py-4 px-6 rounded-lg text-white font-medium
          transition-colors duration-300 relative overflow-hidden
          ${
            !selectedSize
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-accent hover:bg-accent/90'
          }
        `}
      >
        <span className={isAdding ? 'opacity-0' : 'opacity-100'}>
          Aggiungi al Carrello - €{product.price.toLocaleString()}
        </span>
        {isAdding && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
          </div>
        )}
      </motion.button>

      {/* Informazioni Aggiuntive */}
      <div className="text-sm text-gray-500 space-y-2">
        <p className="flex items-center">
          <span className="text-accent mr-2">✓</span>
          Spedizione gratuita assicurata
        </p>
        <p className="flex items-center">
          <span className="text-accent mr-2">✓</span>
          Consegna in 2-4 giorni lavorativi
        </p>
        <p className="flex items-center">
          <span className="text-accent mr-2">✓</span>
          Reso gratuito entro 14 giorni
        </p>
      </div>
    </div>
  );
}
