'use client';

import HeroSection from '@/components/hero/HeroSection';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import '@/styles/hero/hero.css';

export default function HeroMain() {
  const [lottieData, setLottieData] = useState(null);

  useEffect(() => {
    fetch('/images/animations/TreeOfLifeGlow.json')
      .then((response) => response.json())
      .then((data) => setLottieData(data))
      .catch((error) => console.error('Error loading Lottie animation:', error));
  }, []);

  return (
    <main className="min-h-[100vh] relative overflow-hidden flex flex-col -mt-20 md:-mt-[84px]">
      {/* Small screens: two background images, no Lottie */}
      <div className="md:hidden absolute inset-0 w-full h-full z-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero/hero-background-1.png')" }}
        />
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero/hero-background.png')" }}
        />
      </div>
      {/* Medium and up: background-1 and Lottie, perfectly overlapped */}
      <div className="hidden md:block absolute inset-0 w-full h-full z-0">
        {/* Background image with proper cover and center alignment */}
        <div
          className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/hero-background-2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {lottieData && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: 'easeOut',
            }}
            className="absolute inset-x-0 bottom-0 w-full z-0 pointer-events-none bg-bottom"
          >
            <Lottie
              animationData={lottieData}
              loop
              autoplay
              className="w-full h-full"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
          </motion.div>
        )}
      </div>

      <div className="relative z-10 flex-1 flex-col">
        <HeroSection />
        <div className="bottom-12 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <a href="https://app.myzscore.ai/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-cta hover:bg-cta/95 text-white md:p-6 p-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
              >
                Launch App
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
