'use client';

import type { Product } from '@/types/product';
import ProductGrid from '@/components/collections/ProductGrid';

interface CategoryPageProps {
  category: string;
  products: Product[];
}

export default function CategoryPageClient({ category, products }: CategoryPageProps) {
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-cormorant text-golden mb-8 capitalize">
          {categoryName}
        </h1>
        <div className="max-w-prose mx-auto text-center mb-16">
          <p className="text-lg text-gray-300">
            Scopri la nostra collezione di {category} con diamanti lab grown.
            Ogni pezzo è realizzato artigianalmente in Italia, unendo tradizione e innovazione.
          </p>
        </div>
        {products.length > 0 && <ProductGrid products={products} />}
      </div>
    </div>
  );
}
