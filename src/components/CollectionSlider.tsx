'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="w-full aspect-[16/9] rounded-lg overflow-hidden"
    >
      {collections.map((collection) => (
        <SwiperSlide key={collection.id}>
          <div className="relative w-full h-full">
            <img
              src={typeof collection.image === 'string' ? collection.image : collection.image.src}
              alt={collection.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-8">
              <h3 className="text-3xl font-cormorant text-white mb-2">
                {collection.name}
              </h3>
              <p className="text-lg text-white/90">
                {collection.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CollectionSlider;
