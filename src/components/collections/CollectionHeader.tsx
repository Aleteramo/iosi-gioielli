'use client';

import { useEffect } from 'react';

interface CollectionHeaderProps {
  title: string;
  description: string;
  imagePath: string;
}

export default function CollectionHeader({ title, description, imagePath }: CollectionHeaderProps) {
  useEffect(() => {
    const header = document.querySelector('.collection-header');
    const content = document.querySelector('.collection-content');
    
    if (header && content) {
      header.classList.add('opacity-100', 'scale-100');
      content.classList.add('opacity-100', 'translate-y-0');
    }
  }, []);

  return (
    <div className="relative h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div 
          className="collection-header absolute inset-0 bg-cover bg-center opacity-0 scale-110 transition-all duration-1200 ease-out"
          style={{ 
            backgroundImage: `url('${imagePath}')`
          }}
        />
      </div>
      <div 
        className="collection-content relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4 opacity-0 translate-y-5 transition-all duration-800 ease-out delay-300"
      >
        <h1 className="font-cormorant text-5xl md:text-7xl mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl font-light">
          {description}
        </p>
      </div>
    </div>
  );
}
