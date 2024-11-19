'use client';

import { useState } from 'react';
import type { Product } from '@/types/product';
import Image from 'next/image';
import MaterialInfo from '@/components/ui/MaterialInfo';

interface Props {
  product: Product;
}

export default function ProductContent({ product }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {product.images.map((image, index) => (
            <button
              key={image}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-square w-full overflow-hidden rounded-lg border-2 
                ${selectedImage === index ? 'border-golden' : 'border-transparent'}`}
            >
              <Image
                src={image}
                alt={`${product.name} - Vista ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 12vw"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-cormorant text-golden capitalize">{product.name}</h1>
          <p className="mt-2 text-lg text-gray-300">{product.description}</p>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <h2 className="text-2xl font-cormorant text-golden mb-4">Dettagli</h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-gray-400">Categoria</dt>
              <dd className="text-white capitalize">{product.category}</dd>
            </div>
            {product.materials && (
              <div>
                <dt className="text-gray-400">Materiali</dt>
                <dd className="text-white">
                  <MaterialInfo 
                    metal={product.materials.metal}
                    purity={product.materials.purity}
                  />
                </dd>
              </div>
            )}
            {product.diamond && (
              <>
                <div>
                  <dt className="text-gray-400">Diamante</dt>
                  <dd className="text-white">
                    {product.diamond.carat} carati - {product.diamond.color} - {product.diamond.clarity}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-400">Certificazione</dt>
                  <dd className="text-white">{product.diamond.certification}</dd>
                </div>
              </>
            )}
          </dl>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <h2 className="text-2xl font-cormorant text-golden mb-4">Prezzo</h2>
          <p className="text-3xl text-white">€{product.price.toLocaleString('it-IT')}</p>
        </div>

        <button
          className="w-full bg-golden text-black py-3 px-8 rounded-lg font-medium hover:bg-golden/90 
            transition-colors duration-200"
        >
          Contattaci per questo gioiello
        </button>
      </div>
    </div>
  );
}
