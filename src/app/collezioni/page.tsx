import ProductGrid from '@/components/collections/ProductGrid';
import { getProductsSync } from '@/lib/products';

export default function CollectionsPage() {
  const products = getProductsSync();

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-cormorant text-golden text-center mb-12">
          Le Nostre Collezioni
        </h1>
        <div className="max-w-prose mx-auto text-center mb-16">
          <p className="text-lg text-gray-300">
            Scopri la nostra collezione di gioielli con diamanti lab grown.
            Ogni pezzo racconta una storia di sostenibilità e bellezza italiana.
          </p>
        </div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
