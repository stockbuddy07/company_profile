'use client';

import { motion } from 'framer-motion';

export default function WelcomeText() {
  return (
    <div className="inline-block">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="text-cta font-medium text-sm bg-background px-4 py-2 rounded-full">
          Welcome to zScore
        </span>
      </motion.div>
    </div>
  );
}
