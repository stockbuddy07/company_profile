'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ShinyButton } from '@/components/ui/shiny-button';

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
    image: '/images/products/smartpg-ayush.png',
  },
  {
    id: 3,
    badge: 'Invento',
    title: 'Stay ahead with real-time stock tracking and smart ordering.!!',
    description: 'The process of tracking and controlling stock to ensure the right products are available when needed, while minimizing costs. ',
    bgColor: '#f4f1fb',
    textColor: '#9B61FF',
    image: '/images/products/invento-ayush.jpg',
    hasLearnMore: true,
  },
  {
    id: 4,
    badge: 'Vintage Hub E-Commerce',
    title: 'Storefront with categories and products & Deployment Ready !!',
    description: 'Ecommerce Platform for a Local Shop Handling Whole Business online !',
    bgColor: '#FBE9E7',
    textColor: '#D32F2F',
    image: '/images/products/vintage-ayush.png',
    hasLearnMore: true,
    link: 'https://aeom.financex',
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
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-primary mb-8 leading-tight"
          >
            Products Powered by
            <br />
            <span className="text-cta">NoBuddy</span>
          </motion.h2>

          {/* Scroll Up Button */}
          <div className="mb-10">
            <motion.button
              initial={{ "--x": "100%", scale: 0.8 }}
              animate={{ "--x": "-100%", scale: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                  type: "spring",
                  stiffness: 200,
                  damping: 5,
                  mass: 0.5,
                },
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="relative rounded-lg px-16 py-8 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)] overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-[url('/images/trust-proof/urvashi.avif')] bg-center bg-no-repeat opacity-20"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <span
                className="relative block size-full text-xl uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)] z-10"
                style={{
                  maskImage:
                    "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
                }}
              >
                Scroll Up
              </span>
              <span
                style={{
                  mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
                  maskComposite: "exclude",
                }}
                className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
              ></span>
            </motion.button>
          </div>
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
            className="text-4xl font-semibold text-primary mb-8 leading-tight"
          >
            Products Powered by
            <br />
            <span className="text-cta">AEOM</span>
          </motion.h2>

          {/* Scroll Up Button */}
          <div className="mb-8">
            <ShinyButton className="px-16 py-8 text-xl" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>Scroll Up</ShinyButton>
          </div>
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
                <div className={`relative aspect-[4/3] ${card.id === 2 ? "max-w-lg" : "max-w-md"} mx-auto rounded-3xl shadow-2xl`}>
                  <Image
                    src={card.image}
                    alt={`${card.badge} product illustration`}
                    fill
                    className={card.id === 2 ? "object-cover" : "object-contain"}
                  />
                </div>
                </div>

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
            </motion.div>
          ))}
        </div>
      </div>

     
    </section>
  );
}
