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
    <Link href={href} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <div ref={tiltRef} className="w-full">
        <h2 className="mb-3 text-2xl font-semibold">
          {title}
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
