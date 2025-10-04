'use client';

import { motion } from 'framer-motion';

export default function AnimatedHeading() {
  const text = 'Now, You Have True Reputation Onchain, Without KYC';
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="md:text-5xl text-4xl font-semibold text-primary leading-tight">
      <motion.div variants={container} initial="hidden" animate="visible">
        {words.map((word, index) => (
          <span key={index} className="inline-block mr-2 sm:mr-3">
            <motion.span variants={child}>{word}</motion.span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
