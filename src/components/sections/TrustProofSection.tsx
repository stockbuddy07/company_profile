'use client';

import { motion, useScroll, useTransform, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

const trustProofCards = [
  { id: 1, number: '01', title: 'AI-Enhanced Strategy & Workflow', description: 'We leverage AI for intelligent planning, code optimization, and efficient workflows, delivering superior results faster.', bgColor: 'bg-[#f4f1fb]', textColor: 'text-cta', image: '/images/trust-proof/ai.avif' },
  { id: 2, number: '02', title: 'Intuitive User-Centric Design (UI/UX)', description: 'Our design process focuses on creating beautiful, intuitive, and memorable experiences that keep your users engaged.', bgColor: 'bg-[#ffecfe]', textColor: 'text-[#c929cb]', image: '/images/trust-proof/ayush.png' },
  { id: 3, number: '03', title: 'Pixel-Perfect Frontend Development', description: 'We bring designs to life with clean, responsive, and high-performance code that looks stunning on any device.', bgColor: 'bg-[#f6f7fc]', textColor: 'text-[#4fa1ce]', image: '/images/trust-proof/premal.avif' },
  { id: 4, number: '04', title: 'Robust & Scalable Backend Systems', description: 'Building the secure and powerful server-side architecture your application needs to handle growth and succeed.', bgColor: 'bg-[#f0f9f7]', textColor: 'text-[#00aa8b]', image: '/images/trust-proof/urvashi.avif' },
  { id: 5, number: '05', title: 'Complete Web & Mobile Solutions', description: 'From web apps to iOS & Flutter, our full-stack and mobile experts build cohesive, end-to-end digital products.', bgColor: 'bg-[#fdf8e9]', textColor: 'text-[#f5a623]', image: '/images/trust-proof/benifits8.avif' },
  { id: 6, number: '06', title: 'Agile Process & On-Time Delivery', description: 'We use an agile methodology with clear milestones, regular updates, and rigorous testing to deliver your project on schedule and to the highest standard.', bgColor: 'bg-[#f9f9f9]', textColor: 'text-[#666666]', image: '/images/trust-proof/devang.avif' },
];

// Mobile Card Component (odd/even slide animation)
function MobileTrustCard({ card, index }: { card: typeof trustProofCards[number]; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.25 });

  useEffect(() => {
    controls.start(inView ? 'visible' : 'hidden');
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -120 : 120, y: -120, transition: { type: 'spring', stiffness: 60, damping: 16, mass: 0.8 } },
    visible: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 60, damping: 16, mass: 0.8, delay: index * 0.06 } },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={`${card.bgColor} rounded-3xl px-6 pt-6 w-full h-auto flex flex-col relative overflow-hidden shadow-lg`}>
      <div className={`bg-background w-10 h-10 rounded-full flex items-center justify-center text-base font-bold ${card.textColor} mb-6`}>{card.number}</div>
      <div className="flex-1 flex flex-col mb-6">
        <h3 className={`${card.textColor} text-2xl font-semibold mb-4`}>{card.title}</h3>
        <p className={`${card.textColor} text-base leading-relaxed`}>{card.description}</p>
      </div>
      <div className="relative w-full h-72 rounded-2xl overflow-hidden">
        <Image src={card.image} alt={card.title} fill className="object-contain object-center" />
      </div>
    </motion.div>
  );
}

export default function TrustProofSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  // Horizontal scroll for desktop
  const x = useTransform(scrollYProgress, [0, 1], ['55%', '-55%']);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={sectionRef} id="reputation" className="relative h-full md:h-[600vh] bg-white">
      {/* Mobile View */}
      <div className="md:hidden py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-block">
              <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium mb-6">Trust Proof</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="md:text-5xl text-4xl font-semibold mb-4 leading-tight">
              <span className="text-cta">Solutions For Every Work</span><br />
              <span className="text-primary">We Are Always Ahead of You</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-sm md:text-base text-primary font-normal max-w-2xl mx-auto">
              That's why it needs to be easy to prove that you can be trusted
            </motion.p>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-8">
            {trustProofCards.map((card, index) => (
              <MobileTrustCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex sticky top-0 h-screen items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-block">
              <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium mb-6">Trust Proof</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="md:text-5xl text-4xl font-semibold mb-4 leading-tight">
              <span className="text-cta">Solutions For Every Work</span><br />
              <span className="text-primary">We Are Always Ahead of You</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-sm md:text-base text-primary font-normal max-w-3xl mx-auto">
              That's why it needs to be easy to prove that you can be trusted
            </motion.p>
          </div>

          {/* Desktop Horizontal Cards */}
          <div className="relative flex justify-center">
            <motion.div style={{ x }} className="flex gap-8 w-max">
              {trustProofCards.map((card) => (
                <motion.div key={card.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: card.id * 0.1 }} className={`${card.bgColor} rounded-4xl px-6 pt-6 w-96 h-[530px] flex flex-col relative overflow-hidden`}>
                  <div className={`bg-background w-12 h-12 rounded-full flex items-center justify-center text-base font-semibold ${card.textColor} mb-4`}>{card.number}</div>
                  <div className="flex flex-col mb-4">
                    <h3 className={`${card.textColor} text-3xl font-semibold mb-4`}>{card.title}</h3>
                    <p className={`${card.textColor} text-base font-medium`}>{card.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-80 justify-end rounded-2xl overflow-visible">
                    <Image src={card.image} alt={card.title} fill className="object-cover object-top" />
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
