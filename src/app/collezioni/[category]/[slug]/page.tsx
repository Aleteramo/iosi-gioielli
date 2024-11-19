import ProductPageClient from './ProductPage';
import { Metadata } from 'next';
import { getProductsSync, getProductBySlugSync } from '@/lib/products';

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export const dynamic = 'error';
export const dynamicParams = false;

export function generateMetadata({ params }: Props): Metadata {
  const productName = params.slug.split('-').join(' ');
  return {
    title: `${productName} | IO Sì Gioielli`,
    description: `Scopri ${productName} nella nostra collezione di ${params.category}. Gioielli sostenibili con diamanti lab grown, made in Italy.`,
  };
}

export function generateStaticParams() {
  const products = getProductsSync();
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlugSync(params.slug);
  return <ProductPageClient product={product} />;
}
