'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import WelcomeText from './WelcomeText';
import AnimatedHeading from './AnimatedHeading';
import '@/styles/hero/hero.css';

export default function HeroSection() {
  return (
    <section className="zscore-hero-section flex flex-col items-center min-h-[calc(100vh-120px)] px-4 md:px-6 text-center pt-32 md:pt-32">
      <div className="max-w-4xl mx-auto space-y-6">
        <WelcomeText />
        <AnimatedHeading />
      </div>

      <div className="text-sm md:text-base text-primary font-medium max-w-4xl mx-auto mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Eigen AVS for reputation, powered by AI
        </motion.div>
      </div>
    </section>
  );
}
