'use client';

import React, { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import OptimizedImage from './ui/OptimizedImage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface Collection {
  id: number;
  name: string;
  description: string;
  image: string | { src: string };
}

interface CollectionSliderProps {
  collections: Collection[];
}

const CollectionSlider: React.FC<CollectionSliderProps> = ({ collections }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback(() => {
    if (swiper) {
      setActiveIndex(swiper.realIndex);
    }
  }, [swiper]);

  const getImageSrc = (image: string | { src: string }): string => {
    return typeof image === 'string' ? image : image.src;
  };

  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        speed={1000}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} ${
              index === activeIndex ? 'bg-golden' : 'bg-white/50'
            } w-2 h-2 rounded-full transition-all duration-300"></span>`;
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        className="w-full aspect-[16/9] rounded-xl overflow-hidden"
      >
        {collections.map((collection) => (
          <SwiperSlide key={collection.id} className="relative w-full h-full">
            <div className="relative w-full h-full">
              {/* Image Container */}
              <div className="absolute inset-0 w-full h-full">
                <OptimizedImage
                  src={getImageSrc(collection.image)}
                  alt={collection.name}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  className="w-full h-full"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                {/* Content Container */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-3xl md:text-4xl font-cormorant text-golden mb-4 tracking-wide">
                    {collection.name}
                  </h3>
                  <p className="text-lg text-white/90 max-w-2xl font-light leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button 
        className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default CollectionSlider;