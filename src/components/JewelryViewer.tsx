'use client';

import React, { useState } from 'react';

interface JewelryViewerProps {
  imagePath: string | { src: string };
  width?: number;
  height?: number;
  alt?: string;
}

const JewelryViewer: React.FC<JewelryViewerProps> = ({
  imagePath,
  width = 800,
  height = 600,
  alt = 'Jewelry preview'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Gestisce sia stringhe che oggetti immagine importati
  const imgSrc = typeof imagePath === 'string' ? imagePath : imagePath.src;

  // Assicuriamoci che il percorso inizi con uno slash
  const fullImagePath = imgSrc.startsWith('/') ? imgSrc : `/${imgSrc}`;

  return (
    <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center text-red-500">
          Errore nel caricamento dell'immagine
        </div>
      )}
      <img
        src={fullImagePath}
        alt={alt}
        className="absolute inset-0 w-full h-full object-contain"
        loading="eager"
        onLoad={() => {
          setIsLoading(false);
          console.log('Immagine caricata:', fullImagePath);
        }}
        onError={(e) => {
          setIsLoading(false);
          setHasError(true);
          console.error('Errore nel caricamento dell\'immagine:', fullImagePath, e);
        }}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </div>
  );
};

export default JewelryViewer;
