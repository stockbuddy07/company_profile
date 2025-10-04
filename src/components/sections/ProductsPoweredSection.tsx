'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const productCards = [
  {
    id: 1,
    badge: 'Blinkers.co.in',
    title: "Digital showcase for an eye care professional",
    description:
      'Designed and launched a digital showcase for an eye care professional, featuring a browsable catalogue of 200+ eyewear products in real-time',
    bgColor: '#f6f7fc',
    textColor: '#4fa1ce',
    image: '/images/products/blinkers1.png',
  },
  {
    id: 2,
    badge: 'aPass',
    title: 'Whitelabel NoBuddy as a service user-retention solution for protocols',
    description:
      'Custom aSAAS APIs for protocols to identify & reward loyal users, that allows protocols provide better LTV, borrow rates, swap fees to loyal users',
    bgColor: '#ffecfe',
    textColor: '#c929cb',
    image: '/images/products/product2.avif',
  },
  {
    id: 3,
    badge: 'NoBuddy',
    title: 'Take loans, farm yield, build your NoBuddy to maximize leverage',
    description: 'Credit backed money market dApp with reputation based leverage',
    bgColor: '#f4f1fb',
    textColor: '#9B61FF',
    image: '/images/products/product3.avif',
    hasLearnMore: true,
  },
];

export default function ProductsPoweredSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative bg-white max-w-8xl mx-auto px-4 py-24"
    >
      {/* Desktop: Sticky scroll animation */}
      <div className="hidden md:block relative">
        {/* Sticky Header Section */}
        <motion.div
          // style={{ y: headerY, opacity: headerOpacity }}
          className="sticky top-10 z-0 text-center mb-24 opacity-100 pb-48"
        >
          {/* Badge */}
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium">
              Products
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-primary mb-16 leading-tight"
          >
            Products Powered by
            <br />
            <span className="text-cta">NoBuddy</span>
          </motion.h2>

          {/* Flow Diagram Image */}
          <motion.div
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-4xl mx-auto"
          >
            <Image
              src="/images/products/product.png"
              alt="Products Powered by NoBuddy Flow Diagram"
              width={1000}
              height={700}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Animated Cards Section */}
        <motion.div
          // style={{ y: cardsY, opacity: cardsOpacity }}
          className="space-y-48 z-20 pb-72"
        >
          {productCards.map((card) => (
            <motion.div
              key={card.id}
              // initial={{ opacity: 0, y: 50 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div
                className="rounded-4xl md:py-8 md:px-8 flex gap-8 md:gap-12 h-full max-w-4xl mx-auto rotate-3"
                style={{ backgroundColor: card.bgColor }}
              >
                {/* Content */}
                <div className="flex-1 space-y-8">
                  {/* Badge */}
                  <div className="inline-block">
                    <span
                      className="px-4 py-2 rounded-full text-sm font-medium bg-white"
                      style={{ color: card.textColor }}
                    >
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight"
                    style={{ color: card.textColor }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base font-medium" style={{ color: card.textColor }}>
                    {card.description}
                  </p>

                  {/* Learn More Button for ZERU */}
                  {card.hasLearnMore && (
                    <div>
                      <a
                        className="mt-6 px-8 py-3 rounded-full font-medium transition-all duration-300"
                        style={{
                          backgroundColor: card.textColor,
                          color: 'white',
                        }}
                        href="https://aeom.finance"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </a>
                    </div>
                  )}
                </div>

                {/* Image */}
                <div className="flex-shrink-0 w-1/2">
                  <div className="relative aspect-square rounded-3xl shadow-2xl">
                    <Image
                      src={card.image}
                      alt={`${card.badge} product illustration`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile: Simple vertical layout */}
      <div className="md:hidden">
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium">
              Products
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-semibold text-primary mb-16 leading-tight"
          >
            Products Powered by
            <br />
            <span className="text-cta">AEOM</span>
          </motion.h2>

          {/* Flow Diagram Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-4xl mx-auto"
          >
            <Image
              src="/images/products/product.png"
              alt="Products Powered by AEOM Flow Diagram"
              width={1000}
              height={700}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Mobile Cards */}
        <div className="space-y-8">
          {productCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div
                className="rounded-4xl py-6 px-4 flex flex-col gap-6 h-full max-w-4xl mx-auto"
                style={{ backgroundColor: card.bgColor }}
              >
                {/* Badge */}
                <div className="inline-block">
                  <span
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white"
                    style={{ color: card.textColor }}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-semibold leading-tight"
                  style={{ color: card.textColor }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-medium" style={{ color: card.textColor }}>
                  {card.description}
                </p>

                {/* Image */}
                <div className="flex-shrink-0 w-full">
                  <div className="relative aspect-square max-w-md mx-auto rounded-3xl shadow-2xl">
                    <Image
                      src={card.image}
                      alt={`${card.badge} product illustration`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Learn More Button for ZERU */}
                {card.hasLearnMore && (
                  <div>
                    <a
                      className="mt-6 px-8 py-3 rounded-full font-medium transition-all duration-300"
                      style={{
                        backgroundColor: card.textColor,
                        color: 'white',
                      }}
                      href="https://aeom.finance"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
