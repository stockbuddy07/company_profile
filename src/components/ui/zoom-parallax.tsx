'use client';

import React, { useState, useEffect, ReactNode } from 'react';

interface ZoomParallaxProps {
  children: ReactNode;
  zoomSpeed?: number;
}

export function ZoomParallax({ children, zoomSpeed = 0.01 }: ZoomParallaxProps) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setZoom(1 + scrollY * zoomSpeed);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [zoomSpeed]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div
        style={{
          transform: `scale(${zoom})`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  );
}
