'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const textLines = [
    'Great projects are built on trust.',
    'We are the partner',
    'you can rely on.',
];

export default function OnChainTrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Adjust opacity to remain visible till 70% scroll on mobile and tablet
  const adjustedOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <section className="relative bg-white flex items-center justify-center">
      {/* Sticky container */}
      <div className="h-screen flex items-center justify-center">
        <motion.div className="text-center max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" style={{ opacity: adjustedOpacity }} ref={sectionRef}>
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium">
              NoBuddy
            </span>
          </div>

          {/* Text Lines with Gradient */}
          <div className="space-y-0">
            {textLines.map((line, index) => (
              <motion.h2
                key={index}
                className="text-4xl md:text-4xl lg:text-7xl font-bold leading-snug text-cta"
              >
                {line}
              </motion.h2>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
