'use client';

import type { Product } from '@/types/product';
import ProductContent from '@/components/collections/ProductContent';

interface ProductPageProps {
  product: Product;
}

export default function ProductPageClient({ product }: ProductPageProps) {
  const productName = product.name;

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-cormorant text-golden mb-8 capitalize">
          {productName}
        </h1>
        <div className="text-lg mb-4 text-gray-300">
          Categoria: <span className="capitalize">{product.category}</span>
        </div>
        <ProductContent product={product} />
      </div>
    </div>
  );
}
