'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const reputationCards = [
  {
    id: 1,
    badge: 'zScore is a public good',
    title: 'Protected by the crypto-economic security of Eigen Layer',
    bgColor: 'bg-[#f4f1fb]',
    textColor: 'text-cta',
    badgeBg: 'bg-cta/10',
    image: '/images/decantralised-reputation/benifits3.avif',
  },
  {
    id: 2,
    badge: 'A behavior-centric AI neural network',
    title: 'So it self-learns and improves over time in perpetuity',
    bgColor: 'bg-[#f0f9f7]',
    textColor: 'text-[#00aa8b]',
    badgeBg: 'bg-[#00aa8b]/10',
    image: '/images/decantralised-reputation/benifits1.avif',
  },
  {
    id: 3,
    badge: 'zkTLS verification of real world reputation',
    title: 'So you can bring your off-chain reputation onchain without KYC',
    bgColor: 'bg-[#f6f7fc]',
    textColor: 'text-[#4fa1ce]',
    badgeBg: 'bg-[#666666]/10',
    image: '/images/decantralised-reputation/benifits2.avif',
  },
];

export default function DecentralisedReputationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="solution"
      className="relative bg-white max-w-8xl mx-auto px-4 py-24"
    >
      {/* Desktop: Sticky layout */}
      <div className="hidden md:block">
        <div className="flex gap-12 relative">
          {/* Left Side - Sticky */}
          <div className="sticky top-40 w-1/2 flex justify-center self-start">
            <div className="w-full">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium">
                  Decentralized reputation that actually works
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-semibold text-primary mb-6 leading-tight"
              >
                With zScore Everyone Makes More Money Onchain.
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base text-primary font-medium leading-relaxed"
              >
                Unless you are a scammer or own a bot farm.
              </motion.p>
            </div>
          </div>

          {/* Right Side - Scrolling Cards */}
          <div className="w-1/2 flex flex-col">
            <div className="space-y-8">
              {reputationCards.map((card, index) => {
                return (
                  <motion.div
                    key={card.id}
                    initial={{
                      opacity: 0,
                      y: 50,
                      scale: 0.7,
                      rotate: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                      ease: 'easeOut',
                    }}
                    className={`${card.bgColor} rounded-3xl py-6 px-6 lg:px-8 flex gap-8 min-h-[280px]`}
                  >
                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      {/* Badge */}
                      <div
                        className={`bg-background inline-block px-4 py-2 rounded-full text-sm font-medium ${card.textColor} mb-16 w-fit`}
                      >
                        {card.badge}
                      </div>

                      {/* Title */}
                      <h3 className={`${card.textColor} text-3xl font-semibold`}>{card.title}</h3>
                    </div>

                    {/* Image */}
                    <div className="relative w-40 h-40 flex-shrink-0">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover rounded-2xl"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Simple vertical layout */}
      <div className="md:hidden">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium">
            Decentralized reputation that actually works
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-semibold text-primary mb-6 leading-tight text-center"
        >
          With zScore Everyone Makes More Money Onchain.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-primary font-medium text-center mb-12"
        >
          Unless you are a scammer or own a bot farm.
        </motion.p>

        {/* Mobile Cards */}
        <div className="space-y-6">
          {reputationCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${card.bgColor} rounded-3xl py-6 px-4 flex flex-col gap-4`}
            >
              {/* Badge */}
              <div
                className={`bg-background inline-block px-4 py-2 rounded-full text-sm font-medium ${card.textColor} mb-4 w-fit`}
              >
                {card.badge}
              </div>

              {/* Title */}
              <h3 className={`${card.textColor} text-xl font-semibold leading-tight mb-4`}>
                {card.title}
              </h3>

              {/* Image */}
              <div className="relative w-full h-52">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
