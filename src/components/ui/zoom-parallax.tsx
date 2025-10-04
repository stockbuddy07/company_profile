'use client';

import React from 'react';

interface Image {
  src: string;
  alt: string;
}

interface ZoomParallaxProps {
  images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: index }}
        />
      ))}
    </div>
  );
}
