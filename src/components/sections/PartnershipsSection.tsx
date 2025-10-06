'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import LogoLoop from '../LogoLoop';

const PartnershipsSection = memo(() => {
  const logos = [
    { src: '/images/svg/html-5-logo-svgrepo-com.svg', alt: 'HTML' },
    { src: '/images/svg/css3-logo-svgrepo-com.svg', alt: 'CSS' },
    { src: '/images/svg/javascript-logo-svgrepo-com.svg', alt: 'JavaScript' },
    { src: '/images/svg/react-logo-svgrepo-com.svg', alt: 'React' },
    { src: '/images/svg/nodejs-logo-svgrepo-com.svg', alt: 'Node.js' },
    { src: '/images/svg/mongodb-logo-svgrepo-com.svg', alt: 'MongoDB' },
    { src: '/images/svg/git-icon-logo-svgrepo-com.svg', alt: 'Git' },
    { src: '/images/svg/typescript-logo-svgrepo-com.svg', alt: 'TypeScript' },
    { src: '/images/svg/firebase-1-logo-svgrepo-com.svg', alt: 'Firebase' },
    { src: '/images/svg/docker-logo-svgrepo-com.svg', alt: 'Docker' },
  ];

  return (
    <section className="relative bg-white py-16 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium">
            Believe Us
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-semibold text-primary"
        >
          Skills <br />
          and <span className="text-cta">Technologies</span>
        </motion.h2>
      </div>

      {/* Scrolling Logos Section */}
      <div className="w-full max-w-7xl space-y-10">
        {/* First Row - Left to Right */}
        <LogoLoop
          logos={logos}
          direction="left"
          speed={80}       // Slightly slower for smoothness
          logoHeight={60}
          gap={60}
          fadeOut
          fadeOutColor="#ffffff"
          scaleOnHover={false} // Disable scale-on-hover to reduce GPU load
        />

        {/* Second Row - Right to Left */}
        <LogoLoop
          logos={logos}
          direction="right"
          speed={100}     // Different speed for variation
          logoHeight={60}
          gap={60}
          fadeOut
          fadeOutColor="#ffffff"
          scaleOnHover={false}
        />

        {/* Third Row - Left to Right */}
        <LogoLoop
          logos={logos}
          direction="left"
          speed={90}
          logoHeight={60}
          gap={60}
          fadeOut
          fadeOutColor="#ffffff"
          scaleOnHover={false}
        />
      </div>
    </section>
  );
});

export default PartnershipsSection;
