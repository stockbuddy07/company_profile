'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const marqueeTexts = [
  'FOR LENDING PROTOCOLS',
  'FOR DEXES',
  'FOR PERPETUAL DEXES',
  'FOR AIRDROP CAMPAIGNS',
  'FOR NFT MINTS',
  'FOR CREDIT PROTOCOLS',
  'FOR STAKING PROTOCOLS',
  'FOR DEFI PROTOCOLS',
  'FOR GOVERNANCE',
  'FOR LIQUIDITY POOLS',
];

const marqueeTime = 15;

export default function GetInTouchSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <section
        ref={sectionRef}
        className="relative w-full h-[700px] md:h-[860px] bg-[#02c3a0] overflow-hidden flex items-center justify-center"
      >
        {/* Marquee Background Lines - Covering whole page */}
        <div className="absolute inset-0 w-full h-full">
          {/* Row 1 - Top */}
          <div className="absolute top-0 left-0 w-full h-20 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: ['-100%', '0%'],
              }}
              transition={{
                duration: marqueeTime,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map(
                (text, index) => (
                  <span
                    key={index}
                    className="mx-2 text-[#9de2d0] font-semibold text-3xl md:text-5xl"
                  >
                    {text} •
                  </span>
                ),
              )}
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="absolute top-20 left-0 w-full h-20 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: marqueeTime,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map(
                (text, index) => (
                  <span
                    key={index}
                    className="mx-2 text-[#9de2d0] font-semibold text-3xl md:text-5xl"
                  >
                    {text} •
                  </span>
                ),
              )}
            </motion.div>
          </div>

          {/* Row 3 */}
          <div className="absolute top-40 left-0 w-full h-20 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: ['-100%', '0%'],
              }}
              transition={{
                duration: marqueeTime,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map(
                (text, index) => (
                  <span
                    key={index}
                    className="mx-2 text-[#9de2d0] font-semibold text-3xl md:text-5xl"
                  >
                    {text} •
                  </span>
                ),
              )}
            </motion.div>
          </div>

          {/* Row 4 */}
          <div className="absolute top-60 left-0 w-full h-20 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: marqueeTime,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map(
                (text, index) => (
                  <span
                    key={index}
                    className="mx-2 text-[#9de2d0] font-semibold text-3xl md:text-5xl"
                  >
                    {text} •
                  </span>
                ),
              )}
            </motion.div>
          </div>

          {/* Row 5 */}
          <div className="absolute top-80 left-0 w-full h-20 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: ['-100%', '0%'],
              }}
              transition={{
                duration: marqueeTime,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map(
                (text, index) => (
                  <span
                    key={index}
                    className="mx-2 text-[#9de2d0] font-semibold text-3xl md:text-5xl"
                  >
                    {text} •
                  </span>
                ),
              )}
            </motion.div>
          </div>

          {/* Row 6 */}
          <div className="absolute top-[400px] left-0 w-full h-20 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: marqueeTime,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map(
                (text, index) => (
                  <span
                    key={index}
                    className="mx-2 text-[#9de2d0] font-semibold text-3xl md:text-5xl"
                  >
                    {text} •
                  </span>
                ),
              )}
            </motion.div>
          </div>

          {/* Row 7 */}
          <div className="absolute top-[480px] left-0 w-full h-20 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: ['-100%', '0%'],
              }}
              transition={{
                duration: marqueeTime,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map(
                (text, index) => (
                  <span
                    key={index}
                    className="mx-2 text-[#9de2d0] font-semibold text-3xl md:text-5xl"
                  >
                    {text} •
                  </span>
                ),
              )}
            </motion.div>
          </div>

          {/* Row 8 */}
          <div className="absolute top-[560px] left-0 w-full h-20 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: marqueeTime,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map(
                (text, index) => (
                  <span
                    key={index}
                    className="mx-2 text-[#9de2d0] font-semibold text-3xl md:text-5xl"
                  >
                    {text} •
                  </span>
                ),
              )}
            </motion.div>
          </div>

          {/* Row 9 */}
          <div className="absolute top-[640px] left-0 w-full h-20 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: ['-100%', '0%'],
              }}
              transition={{
                duration: marqueeTime,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map(
                (text, index) => (
                  <span
                    key={index}
                    className="mx-2 text-[#9de2d0] font-semibold text-3xl md:text-5xl"
                  >
                    {text} •
                  </span>
                ),
              )}
            </motion.div>
          </div>

          {/* Row 10 */}
          <div className="absolute top-[720px] left-0 w-full h-20 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: marqueeTime,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map(
                (text, index) => (
                  <span
                    key={index}
                    className="mx-2 text-[#9de2d0] font-semibold text-3xl md:text-5xl"
                  >
                    {text} •
                  </span>
                ),
              )}
            </motion.div>
          </div>
        </div>

        {/* Row 11 */}
        <div className="absolute top-[800px] left-0 w-full h-20 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ['-100%', '0%'],
            }}
            transition={{
              duration: marqueeTime,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map(
              (text, index) => (
                <span
                  key={index}
                  className="mx-2 text-[#9de2d0] font-semibold text-3xl md:text-5xl"
                >
                  {text} •
                </span>
              ),
            )}
          </motion.div>
        </div>

        {/* Row 12
         <div className="absolute top-[880px] left-0 w-full h-20 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              duration: marqueeTime,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map((text, index) => (
              <span key={index} className="mx-2 text-[#9de2d0] font-semibold text-3xl md:text-5xl">
                {text}{' '}{' '}•
              </span>
            ))}
          </motion.div>
        </div> */}

        {/* Get in Touch Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://discord.com/invite/XkYjDGVwJQ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#00aa8b] z-10 px-12 py-6 rounded-full text-xl md:text-3xl font-semibold shadow-lg hover:shadow-xl hover:bg-[#00aa8b] hover:text-white"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
