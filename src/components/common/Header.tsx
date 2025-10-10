'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Mobile menu items
  const items = [
    { label: 'Home', href: '#home' },
    { label: 'Solution', href: '#reputation' },
    { label: 'Team', href: '#solution' },
    { label: 'Projects', href: '#products' },
    { label: 'Contact', href: '#get-in-touch' },
  ];
  


  // Menu open/close animation
  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -30, scaleY: 0.8, originY: 0 },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        duration: 0.45,
        ease: [0.68, -0.55, 0.27, 1.55],
        when: 'beforeChildren',
        staggerChildren: 0.12,
      } as Transition,
    },
    exit: {
      opacity: 0,
      y: -20,
      scaleY: 0.9,
      transition: { duration: 0.3, ease: 'easeInOut' } as Transition,
    },
  };

  // Item entry animation
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 18 } as Transition,
    },
  };

  return (
    <header
      className="zscore-main-header w-full sticky top-0 pt-2 md:pt-3 z-50 px-2 bg-transparent"
      style={{ zIndex: 9999 }}
    >
      {/* Desktop Header */}
      <div
        className={`hidden md:grid zscore-header-container max-w-7xl mx-auto items-center bg-white shadow-lg p-3 rounded-5xl`}
        style={{ gridTemplateColumns: '1fr auto 1fr' }}
      >
        {/* Left - Logo */}
        <div className="flex justify-start">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="/images/logos/logo.avif"
              alt="Logo"
              className="h-10 md:h-14 w-auto object-contain max-w-[180px] cursor-pointer"
            />
          </a>
        </div>

        {/* Center - Navigation */}
        <div className="flex justify-center">
          <Navigation />
        </div>

        {/* Right - Social + Button */}
        <div className="flex justify-end items-center gap-6">
          <div className="hidden sm:flex">
            <SocialLinks />
          </div>
          <Button
            className="hidden md:block bg-cta hover:bg-cta/90 text-white py-3 px-6 rounded-3xl font-medium"
            onClick={() => {
              const element = document.getElementById('get-in-touch');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Mobile Header */}
      <div
        className={`flex md:hidden zscore-header-container max-w-7xl mx-auto items-center justify-between 
                    transition-all duration-500 ease-in-out shadow-md px-3 py-2 border border-white/20 backdrop-blur-md
                    ${menuOpen
                      ? 'bg-white rounded-t-3xl border-b-0 shadow-lg'
                      : 'bg-gradient-to-b from-white to-white/95 rounded-4xl'
                    }`}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src="/images/logos/logo.avif"
            alt="Logo"
            className="h-10 w-auto object-contain max-w-[160px] cursor-pointer"
          />
        </a>

        <button
          className={`block md:hidden text-xl font-bold px-4 py-2 rounded-3xl transition-all duration-300 ${
            menuOpen ? 'text-blue-600' : 'text-cta'
          }`}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Animated Vertical Bubble Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-20 bg-black/30 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
              aria-hidden
            />

            {/* Floating menu header - same background as dropdown */}
            <div
              className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[92%] max-w-3xl 
                        px-5 py-3 rounded-t-3xl border border-white/20 bg-white backdrop-blur-md
                        flex items-center justify-between shadow-lg"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-label="Menu header"
            >
              <div className="flex items-center gap-3">
                <img
                  src="/images/logos/logo.avif"
                  alt="Logo"
                  className="h-8 w-auto object-contain drop-shadow-md"
                />
               
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 text-lg font-semibold px-4 py-1 rounded-md hover:text-blue-600 transition-all"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            {/* Animated dropdown menu */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute left-0 right-0 z-40 mx-auto w-[92%] max-w-3xl 
                        bg-white rounded-b-3xl shadow-lg pt-6 pb-6 flex flex-col items-center px-4 
                        border-t border-white/20"
              style={{ top: 'calc(4rem + 2px)' }} // aligns just below header
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center gap-3 w-full mb-4">
                {items.map((item) => (
                  <motion.a
                    key={item.label}
                    variants={itemVariants}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="w-11/12 py-2 text-center rounded-2xl font-semibold text-base shadow-sm font-sans bg-white border border-gray-300 transition-all duration-200"
                    whileHover={{
                      scale: 1.06,
                      backgroundColor: '#3b82f6',
                      color: '#ffffff',
                      boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
                      borderColor: '#3b82f6',
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <Button
                className="w-9/12 bg-cta hover:bg-cta/90 text-white text-base py-2 rounded-2xl font-medium mb-3"
                onClick={() => {
                  setMenuOpen(false);
                  const element = document.getElementById('get-in-touch');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get in Touch
              </Button>

              <div className="flex justify-center mt-2 mb-2">
                <SocialLinks />
              </div>
            </motion.div>


          </>
        )}
      </AnimatePresence>

    </header>
  );
}
