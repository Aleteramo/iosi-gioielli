'use client';

import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import Link from 'next/link';

interface ProductCardProps {
  href: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ href, title, description }) => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
        scale: 1.05,
      });
    }
    return () => {
      if (tiltRef.current) {
        (tiltRef.current as any)?.vanillaTilt?.destroy();
      }
    };
  }, []);

  return (
    <Link href={href}>
      <div ref={tiltRef} className="product-card rounded-xl p-6 h-full">
        <h2 className={`mb-4 text-2xl ${title.includes('IO Sì') ? 'iosi-underline' : ''}`}>
          {title}
        </h2>
        <p className="m-0">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
