'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const textLines = [
  'Absolutely All Good Actors: you,',
  'other users, Projects - Only Lose',
  'Because you Have no Onchain',
  'Way to Prove that you Can be',
  'Trusted',
];

export default function OnChainTrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section className="relative bg-white flex items-center justify-center">
      {/* Sticky container */}
      <div className="h-screen flex items-center justify-center">
        <motion.div className="text-center max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium">
              On-Chain Trust
            </span>
          </div>

          {/* Text Lines with Gradient */}
          <div className="space-y-2">
            {textLines.map((line, index) => {
              // Each line starts from bottom and moves up
              const lineStart = index * 0.05; // Stagger each line slightly, start earlier

              // Opacity: starts appearing earlier, fades out completely
              const lineOpacity = useTransform(
                scrollYProgress,
                [lineStart - 0.1, lineStart + 0.05, lineStart + 0.25, lineStart + 0.45],
                [0, 1, 1, 0],
              );

              return (
                <motion.h2
                  key={index}
                  ref={sectionRef}
                  style={{ opacity: lineOpacity }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-cta"
                >
                  {line}
                </motion.h2>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
