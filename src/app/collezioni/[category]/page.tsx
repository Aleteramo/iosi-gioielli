import CategoryPageClient from './CategoryPage';
import { Metadata } from 'next';
import { getAllCategoriesSync, getProductsByCategorySync } from '@/lib/products';

interface Props {
  params: {
    category: string;
  };
}

export const dynamic = 'error';
export const dynamicParams = false;

export function generateMetadata({ params }: Props): Metadata {
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1);
  return {
    title: `${categoryName} | IO Sì Gioielli`,
    description: `Scopri la nostra collezione di ${params.category} con diamanti lab grown. Gioielli sostenibili made in Italy.`,
  };
}

export function generateStaticParams() {
  const categories = getAllCategoriesSync();
  return categories.map((category) => ({
    category,
  }));
}

export default function CategoryPage({ params }: Props) {
  const products = getProductsByCategorySync(params.category);
  return <CategoryPageClient category={params.category} products={products} />;
}
