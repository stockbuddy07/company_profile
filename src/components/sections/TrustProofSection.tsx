'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

/**
 * TrustProofSection Component
 *
 * HORIZONTAL SCROLLING SYSTEM EXPLANATION:
 *
 * This component implements a center-to-center horizontal scrolling system for desktop screens.
 *
 * HOW IT WORKS:
 * 1. Cards are arranged horizontally with fixed dimensions (384px width + 32px gap)
 * 2. The first card starts centered in the viewport
 * 3. As user scrolls vertically, cards move horizontally from right to left
 * 4. The last card ends centered in the viewport
 * 5. After the last card is centered, normal vertical scrolling resumes
 *
 * DYNAMIC CALCULATION:
 * - The system automatically calculates scroll offsets based on the number of cards
 * - Card dimensions: 384px width (w-96) + 32px gap (gap-8)
 * - Total width = (number of cards × card width) + ((number of cards - 1) × gap)
 * - First card offset: 0 (starts centered)
 * - Last card offset: -(total width - card width) (ends centered)
 *
 * ADDING/REMOVING CARDS:
 * Simply add or remove items from the trustProofCards array below.
 * The system will automatically recalculate all offsets and work correctly.
 *
 * MOBILE BEHAVIOR:
 * On mobile devices, cards display in a simple vertical stack without horizontal scrolling.
 */

const trustProofCards = [
  {
    id: 1,
    number: '01',
    title: 'But Bot Farms Take 90% of the Pool, and you Only Get $3',
    description: 'You farm an airdrop for 5 months straight',
    bgColor: 'bg-[#f4f1fb]',
    textColor: 'text-cta',
    numberBg: 'bg-purple-200',
    image: '/images/trust-proof/benifits5.avif',
  },
  {
    id: 2,
    number: '02',
    title: 'But the Founder is a Serial Rug-Puller, and you Lose Everything',
    description: 'You invest in a token, that is promised to make 1000x',
    bgColor: 'bg-[#ffecfe]',
    textColor: 'text-[#c929cb]',
    numberBg: 'bg-pink-200',
    image: '/images/trust-proof/benifits7.avif',
  },
  {
    id: 3,
    number: '03',
    title: 'But you Get no Benefits for this, and Still Pay the 1% Fee',
    description: 'You use a DEX for 8 months EVERY single day',

    bgColor: 'bg-[#f6f7fc]',
    textColor: 'text-[#4fa1ce]',
    numberBg: 'bg-blue-200',
    image: '/images/trust-proof/benifits6.avif',
  },
  {
    id: 4,
    number: '04',
    title: "Even Though you've Never Defaulted on your Aave Position",
    description: "You're depositing 150% collateral",
    bgColor: 'bg-[#f0f9f7]',
    textColor: 'text-[#00aa8b]',
    numberBg: 'bg-green-200',
    image: '/images/trust-proof/benifits9.avif',
  },
  {
    id: 5,
    number: '05',
    title: 'But Have the Same Funding Rates, as the DEGEN who YOLOs Every Single Time',
    description: 'You never got liquidated in a perpetual DEX, and always play safe',
    bgColor: 'bg-[#f9f9f9]',
    textColor: 'text-[#666666]',
    numberBg: 'bg-teal-200',
    image: '/images/trust-proof/benifits8.avif',
  },
  // {
  //   id: 6,
  //   number: '06',
  //   title: 'But Have the Same Funding Rates, as the DEGEN who YOLOs Every Single Time',
  //   description: 'You never got liquidated in a perpetual DEX, and always play safe',
  //   bgColor: 'bg-[#f9f9f9]',
  //   textColor: 'text-[#666666]',
  //   numberBg: 'bg-teal-200',
  //   image: '/images/trust-proof/benifits8.avif',
  // },
];

export default function TrustProofSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // ===== HORIZONTAL SCROLLING CALCULATIONS =====
  // These calculations ensure center-to-center scrolling regardless of card count

  // Card dimensions (must match Tailwind classes: w-96 = 384px, gap-8 = 32px)
  const cardWidth = 384; // w-96 in Tailwind
  const cardGap = 32; // gap-8 in Tailwind

  // Calculate total width of all cards including gaps
  // Formula: (number of cards × card width) + ((number of cards - 1) × gap)
  const totalCardsWidth =
    trustProofCards.length * cardWidth + (trustProofCards.length - 1) * cardGap;

  // SCROLL OFFSETS:
  // With justify-center, the container is centered, so we need to adjust for that

  // To center the first card: move container left by (total width - card width) / 2
  const firstCardCenterOffset = -(totalCardsWidth - cardWidth) / 2;

  // To center the last card: move container left by (total width - card width) / 2 + (total width - card width)
  const lastCardCenterOffset = -(totalCardsWidth - cardWidth) / 2 - (totalCardsWidth - cardWidth);

  // Simplified: lastCardCenterOffset = -(totalCardsWidth - cardWidth) * 1.5
  const lastCardCenterOffsetSimplified = -(totalCardsWidth - cardWidth) * 1.5;

  // Example with 5 cards:
  // Total width = (5 × 384) + (4 × 32) = 1920 + 128 = 2048px
  // First card offset = -(2048 - 384) / 2 = -832px (centers first card)
  // Last card offset = -(2048 - 384) × 1.5 = -2496px (centers last card)

  // Transform scroll progress to horizontal movement (center to center)
  // Start with first card centered, end with last card centered
  const x = useTransform(scrollYProgress, [0, 1], ['55%', '-55%']);
  // const x = useTransform(scrollYProgress, [0, 1], [firstCardCenterOffset, lastCardCenterOffsetSimplified]);

  // Control when the section becomes sticky
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={sectionRef} id="reputation" className="relative h-full md:h-[600vh] bg-white">
      {/* Mobile: Simple vertical scroll */}
      <div className="md:hidden py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium mb-6">
                Trust Proof
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:text-5xl text-4xl font-semibold mb-4 leading-tight"
            >
              <span className="text-cta">Bots & Scammers</span>
              <br />
              <span className="text-primary">are Always Ahead of You</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base text-primary font-normal max-w-2xl mx-auto"
            >
              That's why it needs to be easy to prove that you can be trusted
            </motion.p>
          </div>

          {/* Mobile Cards - Vertical Stack */}
          <div className="space-y-8">
            {trustProofCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`${card.bgColor} rounded-3xl px-6 pt-6 w-full h-auto flex flex-col relative overflow-hidden`}
              >
                {/* Number badge */}
                <div
                  className={`bg-background w-10 h-10 rounded-full flex items-center justify-center text-base font-bold ${card.textColor} mb-6`}
                >
                  {card.number}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col mb-6">
                  <h3 className={`${card.textColor} text-2xl font-semibold mb-4`}>{card.title}</h3>
                  <p className={`${card.textColor} text-base leading-relaxed`}>
                    {card.description}
                  </p>
                </div>

                {/* Image */}
                <div className="relative w-full h-56 rounded-2xl overflow-hidden">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Horizontal scrolling cards */}
      <div className="hidden md:flex sticky top-0 h-screen items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium mb-6">
                Trust Proof
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:text-5xl text-4xl font-semibold mb-4 leading-tight"
            >
              <span className="text-cta">Bots & Scammers</span>
              <br />
              <span className="text-primary">are Always Ahead of You</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base text-primary font-normal max-w-3xl mx-auto"
            >
              That's why it needs to be easy to prove that you can be trusted
            </motion.p>
          </div>

          {/* Horizontal scrolling cards */}
          <div className="relative flex justify-center">
            <motion.div style={{ x }} className="flex gap-8 w-max">
              {trustProofCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${card.bgColor} rounded-4xl px-6 pt-6 w-96 h-[530px] flex flex-col relative overflow-hidden`}
                >
                  {/* Number badge */}
                  <div
                    className={`bg-background w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold ${card.textColor} mb-4`}
                  >
                    {card.number}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col mb-4">
                    <h3 className={`${card.textColor} text-3xl font-semibold mb-4`}>
                      {card.title}
                    </h3>
                    <p className={`${card.textColor} text-base font-medium`}>{card.description}</p>
                  </div>

                  {/* Image */}
                  <div className="absolute bottom-0 left-0 w-full h-80 justify-end rounded-2xl overflow-x-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
