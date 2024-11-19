'use client';

import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  fill = true,
  priority = false,
  quality = 85,
  sizes = '100vw'
}) => {
  // Gestione delle immagini mancanti
  const fallbackImage = '/images/placeholder.jpg';
  const [imgSrc, setImgSrc] = React.useState(src);
  const [isError, setIsError] = React.useState(false);

  // Gestisci i percorsi delle immagini
  const imageSrc = imgSrc.startsWith('/') ? imgSrc : `/${imgSrc}`;

  const handleError = () => {
    if (!isError) {
      setIsError(true);
      setImgSrc(fallbackImage);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Image
        src={imageSrc}
        alt={alt}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={sizes}
        className="object-cover"
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
};

export default OptimizedImage;
