'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

const navigationItems = [
  { name: 'Reputation', href: '#reputation' },
  { name: 'Solution', href: '#solution' },
  { name: 'Products', href: '#products' },
  { name: 'Docs', href: 'https://docs.myzscore.ai/' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="zscore-main-header w-full sticky top-0 pt-2 md:pt-3 z-50 px-2 bg-transparent">
      {/* Desktop Header */}
      <div
        className={`hidden md:grid zscore-header-container max-w-7xl mx-auto items-center bg-white shadow-lg p-3 rounded-5xl`}
        style={{ gridTemplateColumns: '1fr auto 1fr' }}
      >
        {/* Left section - Logo */}
        <div className="flex justify-start">
          <img src="/images/logos/logo.avif" alt="Logo" className="w-fit h-12" />
        </div>

        {/* Center section - Navigation */}
        <div className="flex justify-center">
          <Navigation />
        </div>

        {/* Right section - Social links and button */}
        <div className="flex justify-end items-center gap-6">
          <div className="hidden sm:flex">
            <SocialLinks />
          </div>
          <a href="https://discord.com/invite/XkYjDGVwJQ" target="_blank" rel="noopener noreferrer">
            <Button
              className="hidden md:block bg-cta hover:bg-cta/90 text-white text-sm md:text-base py-4 px-4 md:py-3 md:px-6 rounded-3xl font-medium"
              variant={'default'}
            >
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
      {/* Mobile Header */}
      <div
        className={`flex md:hidden zscore-header-container max-w-7xl mx-auto items-center justify-between bg-white shadow-lg p-2 ${
          !menuOpen ? 'rounded-4xl' : 'rounded-t-4xl'
        }`}
      >
        <img src="/images/logos/logo.avif" alt="Logo" className="w-fit h-12" />
        <div className="">
          {/* Mobile Menu/Close text button */}
          <button
            className="block md:hidden text-cta text-xl font-bold bg-transparent border-none outline-none px-4 py-2 rounded-3xl"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="zscore-mobile-menu absolute left-0 right-0 max-w-7xl bg-white border rounded-b-4xl md:rounded-b-5xl shadow-lg z-50 mx-2 px-6 pt-6 pb-4 flex flex-col items-center"
            style={{ top: '100%' }}
          >
            <nav className="flex flex-col items-start w-full gap-2 mb-5">
              {/* Mobile nav links with less gap */}
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.name !== 'Docs' ? '_self' : '_blank'}
                  className="text-2xl font-semibold text-primary hover:text-cta transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <a
              href="https://discord.com/invite/XkYjDGVwJQ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full bg-cta hover:bg-cta/90 text-white text-lg py-2 px-4 rounded-3xl font-medium mb-4">
                Get in Touch
              </Button>
            </a>
            <div className="flex items-center justify-center w-full mt-2 mb-1">
              {/* Use SocialLinks as-is for mobile, but always show on mobile menu */}
              <div className="flex gap-6">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
