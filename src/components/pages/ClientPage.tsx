'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../Logo';
import CircleLoader from '../ui/CircleLoader';

const TypedIntro = dynamic(() => import('../TypedIntro'), {
  ssr: false,
  loading: () => <div className="h-screen bg-black" />
});

const ProductCard = dynamic(() => import('../ProductCard'), {
  ssr: false,
  loading: () => <div className="h-64 bg-zinc-900 rounded-lg animate-pulse" />
});

const CollectionSlider = dynamic(() => import('../CollectionSlider'), {
  ssr: false,
  loading: () => <div className="h-96 bg-zinc-900 rounded-lg animate-pulse" />
});

const collections = [
  {
    id: 1,
    name: 'Collezione Noir',
    description: 'Un viaggio nell\'oscurità più preziosa, dove ogni diamante racconta una storia segreta',
    image: '/images/IMG_1898.jpg'
  },
  {
    id: 2,
    name: 'Collezione Mystique',
    description: 'La perfezione si nasconde nell\'ombra, rivelando la sua bellezza solo agli occhi più attenti',
    image: '/images/IMG_1899.jpg'
  },
  {
    id: 3,
    name: 'Collezione Shadow',
    description: 'Quando l\'eleganza incontra il mistero, nascono creazioni che sfidano il tempo',
    image: '/images/IMG_1900.jpg'
  }
];

const navigationCards = [
  {
    href: "/collezioni",
    title: "Collezioni →",
    description: "Esplora il nostro universo di creazioni misteriose"
  },
  {
    href: "/su-di-noi",
    title: "Essenza →",
    description: "Scopri il segreto dietro ogni nostra creazione"
  },
  {
    href: "/contatti",
    title: "Contatti →",
    description: "Inizia il tuo viaggio nel mondo IO Sì"
  },
  {
    href: "/journal",
    title: "Journal →",
    description: "Storie dall'ombra del lusso contemporaneo"
  }
];

export default function ClientPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="flex flex-col min-h-screen">
        {/* Header with Logo */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/80 to-transparent">
          <div className="flex justify-center py-8">
            <Logo />
          </div>
        </header>

        {/* Hero Section with TypedIntro */}
        <section className="flex-grow">
          <TypedIntro />
        </section>

        {/* Collections Slider */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-cormorant text-golden text-center mb-12" data-aos="fade-up">
              Le Nostre Collezioni
            </h2>
            <div data-aos="fade-up" data-aos-delay="200">
              <CollectionSlider collections={collections} />
            </div>
          </div>
        </section>

        {/* Navigation Cards Section */}
        <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-12">
              <CircleLoader />
            </div>
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {navigationCards.map(card => (
                <ProductCard
                  key={card.href}
                  href={card.href}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
