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
    image: '/images/products/blinkers-premal.png',
    hasLearnMore: true,
    link: 'https://blinkers.co.in',
  },
  {
    id: 2,
    badge: 'StayMate PG App',
    title: 'StayMate PG App, a mobile solution to streamline paying guest management',
    description:
      'Engineered a cross-platform mobile app to streamline PG management, architecting a Firebase backend to support real-time data sync for 500+ simulated users.',
    bgColor: '#ffecfe',
    textColor: '#c929cb',
    image: '/images/products/smartpg-team.png',
    hasLearnMore: true,
    link: '',
  },
  {
    id: 3,
    badge: 'Digital Posters',
    title: 'Digital Posters, a mobile platform for effortless poster creation and sharing',
    description:
      ' Developed a cross-platform app enabling users to design, schedule, and publish digital posters, architected with a scalable backend to support real-time collaboration for 500+ users.',
  // New light-friendly palette for id 3 (distinct from other cards)
  bgColor: '#eefaf6',
  textColor: '#0f766e',
    image: '/images/products/digital_poster--team.png',
    hasLearnMore: true,
    link: '',
  },
  {
    id: 4,
    badge: 'Invento',
    title: 'Stay ahead with real-time stock tracking and smart ordering.!!',
    description: 'The process of tracking and controlling stock to ensure the right products are available when needed, while minimizing costs. ',
    bgColor: '#f4f1fb',
    textColor: '#9B61FF',
    image: '/images/products/invento-ayush.jpg',
    hasLearnMore: true,
    link: '',
  },
  {
    id: 5,
    badge: 'Vintage Hub E-Commerce',
    title: 'Storefront with categories and products & Deployment Ready !!',
    description: 'Ecommerce Platform for a Local Shop Handling Whole Business online !',
    bgColor: '#FBE9E7',
    textColor: '#D32F2F',
    image: '/images/products/vintage-ayush.jpg',
    hasLearnMore: true,
    link: '',
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
        </motion.div>

        {/* Animated Cards Section */}
        <motion.div
          // style={{ y: cardsY, opacity: cardsOpacity }}
          className="space-y-24 z-20 pb-72"
        >
          {productCards.map((card) => (
            <motion.div
              key={card.id}
              // initial={{ opacity: 0, y: 50 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative -mt-12"
            >
              <div
                className="rounded-4xl md:py-8 md:px-8 flex gap-8 md:gap-12 h-full max-w-6xl mx-auto rotate-3"
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

                  {/* Learn More Button for NoBuddy */}
                  {card.hasLearnMore && (
                    <div>
                      <a
                        className="mt-6 px-8 py-3 rounded-full font-medium transition-all duration-300"
                        style={{
                          backgroundColor: card.textColor,
                          color: 'white',
                        }}
                        href={card.link}
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
                  <div className="relative aspect-[4/3] rounded-3xl shadow-2xl">
                    <Image
                      src={card.image}
                      alt={`${card.badge} product illustration`}
                      fill
                      className="object-contain"
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
            <span className="text-cta">NoBuddy</span>
          </motion.h2>
        </div>

        {/* Mobile Cards */}
        <div className="space-y-8">
          {productCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative -mt-12"
            >
              <div
                className="rounded-4xl py-6 px-4 flex flex-col gap-6 h-full max-w-6xl mx-auto"
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
                <div className={`relative aspect-[4/3] ${card.id === 2 ? "max-w-lg" : "max-w-md"} mx-auto rounded-3xl shadow-2xl overflow-hidden`}>
                  <Image
                    src={card.image}
                    alt={`${card.badge} product illustration`}
                    fill
                    className={card.id === 2 ? "object-cover" : "object-contain"}
                  />
                </div>
                </div>

                {/* Learn More Button for NoBudd */}
                {card.hasLearnMore && (
                  <div className="flex justify-center">
                    <a
                      className="mt-2 mb-2 px-8 py-3 rounded-full font-medium transition-all duration-300"
                      style={{
                        backgroundColor: card.textColor,
                        color: 'white',
                      }}
                      href={card.link}
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
