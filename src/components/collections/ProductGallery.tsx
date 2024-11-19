'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    const newIndex = (currentImage + newDirection + images.length) % images.length;
    setCurrentImage(newIndex);
  };

  return (
    <div className="relative aspect-square">
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={currentImage}>
          <motion.div
            key={currentImage}
            custom={currentImage}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className={`absolute inset-0 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <Image
              src={images[currentImage]}
              alt={`${name} - Immagine ${currentImage + 1}`}
              fill
              className={`object-cover transition-transform duration-500 ${
                isZoomed ? 'scale-150' : 'scale-100'
              }`}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Controlli navigazione */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors z-10"
          onClick={() => paginate(-1)}
        >
          ←
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors z-10"
          onClick={() => paginate(1)}
        >
          →
        </button>

        {/* Thumbnails */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImage ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
