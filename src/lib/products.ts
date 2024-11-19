export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  slug: string;
  diamond?: {
    carat: number;
    color: string;
    clarity: string;
    cut: string;
    certification: string;
  };
  features?: string[];
  sizes?: string[];
  materials?: {
    metal: string;
    purity: string;
  };
  details?: {
    weight?: number;
    dimensions?: string;
    style?: string;
    collection?: string;
  };
}

// Mock data per il nostro e-commerce di gioielli
const products: Product[] = [
  {
    id: '1',
    name: 'Anello Solitario Luna',
    description: 'Elegante anello solitario con diamante lab grown da 1 carato, montato su oro bianco 18kt. Un simbolo di amore sostenibile che unisce design contemporaneo e tradizione artigianale italiana.',
    price: 2500,
    images: [
      '/images/rings/solitario-luna-1.jpg',
      '/images/rings/solitario-luna-2.jpg',
      '/images/rings/solitario-luna-3.jpg',
    ],
    category: 'anelli',
    slug: 'anello-solitario-luna',
    diamond: {
      carat: 1.0,
      color: 'F',
      clarity: 'VS1',
      cut: 'Excellent',
      certification: 'IGI',
    },
    features: [
      'Diamante lab grown certificato IGI',
      'Oro bianco 18kt certificato',
      'Lavorazione artigianale italiana',
      'Design esclusivo IO Sì',
    ],
    sizes: ['11', '12', '13', '14', '15', '16', '17'],
    materials: {
      metal: 'Oro Bianco',
      purity: '18kt',
    },
    details: {
      style: 'Contemporaneo',
      collection: 'Luna',
    },
  },
  {
    id: '2',
    name: 'Collana Stella Cadente',
    description: 'Raffinata collana in oro rosa 18kt con diamante lab grown pendente. Un gioiello che cattura la magia di una stella cadente in un design moderno ed elegante.',
    price: 1800,
    images: [
      '/images/necklaces/stella-cadente-1.jpg',
      '/images/necklaces/stella-cadente-2.jpg',
    ],
    category: 'collane',
    slug: 'collana-stella-cadente',
    diamond: {
      carat: 0.5,
      color: 'E',
      clarity: 'VS2',
      cut: 'Excellent',
      certification: 'IGI',
    },
    features: [
      'Diamante lab grown certificato IGI',
      'Oro rosa 18kt certificato',
      'Catena regolabile',
      'Design minimal chic',
    ],
    materials: {
      metal: 'Oro Rosa',
      purity: '18kt',
    },
    details: {
      style: 'Minimal',
      collection: 'Stelle',
    },
  },
  {
    id: '3',
    name: 'Orecchini Aurora',
    description: 'Eleganti orecchini a lobo con diamanti lab grown, ispirati alle luci dell\'aurora boreale. Un accessorio raffinato che illumina ogni outfit.',
    price: 2200,
    images: [
      '/images/earrings/aurora-1.jpg',
      '/images/earrings/aurora-2.jpg',
    ],
    category: 'orecchini',
    slug: 'orecchini-aurora',
    diamond: {
      carat: 0.75,
      color: 'F',
      clarity: 'VVS1',
      cut: 'Excellent',
      certification: 'IGI',
    },
    features: [
      'Diamanti lab grown certificati IGI',
      'Oro bianco 18kt certificato',
      'Design simmetrico',
      'Chiusura sicura a farfalla',
    ],
    materials: {
      metal: 'Oro Bianco',
      purity: '18kt',
    },
    details: {
      style: 'Classico',
      collection: 'Aurora',
    },
  },
];

export async function getProducts(): Promise<Product[]> {
  // In futuro, questa funzione recupererà i dati dal CMS
  return products;
}

export function getProductsSync(): Product[] {
  return products;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product = products.find(p => p.slug === slug);
  return product || null;
}

export function getProductBySlugSync(slug: string): Product | null {
  const product = products.find(p => p.slug === slug);
  return product || null;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return products.filter(p => p.category === category);
}

export function getProductsByCategorySync(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export async function getAllCategories(): Promise<string[]> {
  const categories = new Set(products.map(p => p.category));
  return Array.from(categories);
}

export function getAllCategoriesSync(): string[] {
  const categories = new Set(products.map(p => p.category));
  return Array.from(categories);
}

export async function getRelatedProducts(currentProduct: Product, limit: number = 3): Promise<Product[]> {
  return products
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, limit);
}

export function getRelatedProductsSync(currentProduct: Product, limit: number = 3): Product[] {
  return products
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, limit);
}

export async function searchProducts(query: string): Promise<Product[]> {
  const searchTerm = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(searchTerm) ||
    p.description.toLowerCase().includes(searchTerm) ||
    p.features?.some(f => f.toLowerCase().includes(searchTerm))
  );
}

export function searchProductsSync(query: string): Product[] {
  const searchTerm = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(searchTerm) ||
    p.description.toLowerCase().includes(searchTerm) ||
    p.features?.some(f => f.toLowerCase().includes(searchTerm))
  );
}
