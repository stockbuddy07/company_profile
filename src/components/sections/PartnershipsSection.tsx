'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function PartnershipsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const marqueeTime = 30;

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="px-0">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium">
              Believe Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold text-primary mb-10"
          >
            Partnerships <br />
            and
            <span className="text-cta"> Integrations</span>
          </motion.h2>
        </div>

        {/* Partners Marquee */}
        <div className="relative">
          {/* First Row - Left to Right */}
          <div className="mb-10 md:mb-12 overflow-hidden">
            <motion.div
              className="flex items-center space-x-8"
              animate={{
                x: ['-100%', '0%'],
              }}
              transition={{
                duration: marqueeTime,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* Duplicate the image multiple times for seamless loop */}
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src="/images/partners/partners.png"
                    alt="Partners and Integrations"
                    width={1200}
                    height={120}
                    className="h-12 md:h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="mb-10 md:mb-12 overflow-hidden">
            <motion.div
              className="flex items-center space-x-8"
              animate={{
                x: ['0%', '-100%'],
              }}
              transition={{
                duration: marqueeTime,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* Duplicate the image multiple times for seamless loop */}
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src="/images/partners/partners.png"
                    alt="Partners and Integrations"
                    width={1200}
                    height={120}
                    className="h-12 md:h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Third Row - Left to Right */}
          <div className="mb-10 md:mb-12 overflow-hidden">
            <motion.div
              className="flex items-center space-x-8"
              animate={{
                x: ['-100%', '0%'],
              }}
              transition={{
                duration: marqueeTime,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* Duplicate the image multiple times for seamless loop */}
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src="/images/partners/partners.png"
                    alt="Partners and Integrations"
                    width={1200}
                    height={120}
                    className="h-12 md:h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
