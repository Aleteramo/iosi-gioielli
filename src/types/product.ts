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
