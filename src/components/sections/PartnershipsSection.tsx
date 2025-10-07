'use client';

import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import LogoLoop from '../LogoLoop';

const PartnershipsSection = memo(() => {
  const logos = [
    { src: '/images/svg/docker-logo-svgrepo-com.svg', alt: 'Docker' },
  { src: '/images/svg/android-logo-svgrepo-com.svg', alt: 'Android' },
  { src: '/images/svg/angular-icon-logo-svgrepo-com.svg', alt: 'Angular' },
  { src: '/images/svg/apple-black-logo-svgrepo-com.svg', alt: 'Apple' },
  { src: '/images/svg/c-logo-svgrepo-com.svg', alt: 'C' },
  { src: '/images/svg/microsoft-azure-logo-svgrepo-com.svg', alt: 'Microsoft Azure' },
  { src: '/images/svg/css3-logo-svgrepo-com.svg', alt: 'CSS3' },
  { src: '/images/svg/docker-logo-svgrepo-com.svg', alt: 'Docker' },
  { src: '/images/svg/figma-1-logo-svgrepo-com.svg', alt: 'Figma' },
  { src: '/images/svg/flutter-svgrepo-com.svg', alt: 'Flutter' },
  { src: '/images/svg/git-icon-logo-svgrepo-com.svg', alt: 'Git' },
  { src: '/images/svg/google-1-1-logo-svgrepo-com.svg', alt: 'Google' },
  { src: '/images/svg/google-analytics-3-logo-svgrepo-com.svg', alt: 'Google Analytics' },
  { src: '/images/svg/google-drive-logo-svgrepo-com.svg', alt: 'Google Drive' },
  { src: '/images/svg/css-3-logo-svgrepo-com.svg', alt: 'CSS3' },
  { src: '/images/svg/google-play-logo-svgrepo-com.svg', alt: 'Google Play' },
  { src: '/images/svg/google-play-store-logo-svgrepo-com.svg', alt: 'Google Play Store' },
  { src: '/images/svg/html-5-logo-svgrepo-com.svg', alt: 'HTML5' },
  { src: '/images/svg/java-4-logo-svgrepo-com.svg', alt: 'Java' },
  { src: '/images/svg/javascript-logo-svgrepo-com.svg', alt: 'JavaScript' },
  { src: '/images/svg/kotlin-1-logo-svgrepo-com.svg', alt: 'Kotlin' },
  { src: '/images/svg/docker-logo-svgrepo-com.svg', alt: 'Docker' },
  { src: '/images/svg/laravel-1-logo-svgrepo-com.svg', alt: 'Laravel' },
  { src: '/images/svg/microsoft-azure-2-logo-svgrepo-com.svg', alt: 'Microsoft Azure' },
  { src: '/images/svg/microsoft-sql-server-logo-svgrepo-com.svg', alt: 'Microsoft SQL Server' },
  { src: '/images/svg/mongodb-logo-svgrepo-com.svg', alt: 'MongoDB' },
  { src: '/images/svg/mysql-logo-svgrepo-com.svg', alt: 'MySQL' },
  { src: '/images/svg/nodejs-icon-logo-svgrepo-com.svg', alt: 'Node.js' },
  { src: '/images/svg/nodejs-logo-svgrepo-com.svg', alt: 'Node.js' },
  { src: '/images/svg/oracle-2-logo-svgrepo-com.svg', alt: 'Oracle' },
  { src: '/images/svg/oracle-6-logo-svgrepo-com.svg', alt: 'Oracle' },
  { src: '/images/svg/paypal-icon-logo-svgrepo-com.svg', alt: 'PayPal' },
  { src: '/images/svg/paypal-logo-svgrepo-com.svg', alt: 'PayPal' },
  { src: '/images/svg/php-1-logo-svgrepo-com.svg', alt: 'PHP' },
  { src: '/images/svg/postgresql-logo-svgrepo-com.svg', alt: 'PostgreSQL' },
  { src: '/images/svg/react-logo-svgrepo-com.svg', alt: 'React' },
  { src: '/images/svg/typescript-logo-svgrepo-com.svg', alt: 'TypeScript' },
  { src: '/images/svg/visual-studio-code-logo-svgrepo-com.svg', alt: 'VS Code' },
  { src: '/images/svg/firebase-1-logo-svgrepo-com.svg', alt: 'Firebase' },
];

  // Fisher-Yates shuffle
  const shuffle = (arr: typeof logos) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // Create three different randomized orders so rows don't look identical
  const shuffledRow1 = useMemo(() => shuffle(logos), []);
  const shuffledRow2 = useMemo(() => shuffle(logos), []);
  const shuffledRow3 = useMemo(() => shuffle(logos), []);


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
          logos={shuffledRow1}
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
          logos={shuffledRow2}
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
          logos={shuffledRow3}
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
