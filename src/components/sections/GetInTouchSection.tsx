'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const marqueeTexts = [ 
  'FOR FREELANCER GROUPS',
  'FOR AI-POWERED SOLUTIONS',
  'FOR RAPID PROTOTYPING',
  'FOR TOP-TIER PROJECTS',
  'FOR UI/UX DESIGNERS',
  'FOR SMART CONTRACT DEVELOPERS',
  'FOR DIGITAL MARKETING PROJECTS',
  'FOR FULL-STACK TEAMS',
  'FOR FLUTTER APP',
  'FOR WEBSITE DEVELOPER',
];

const marqueeTime = 15;

export default function GetInTouchSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);

  return (
    
    <div id="get-in-touch" className="min-h-screen flex items-center justify-center">
      <section
        ref={sectionRef}
        className="relative w-full h-[700px] md:h-[860px] bg-[#02c3a0] overflow-hidden flex items-center justify-center mt-0"
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

        {/* Get in Touch Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="bg-white text-[#00aa8b] z-10 px-12 py-6 rounded-full text-xl md:text-3xl font-semibold shadow-lg hover:shadow-xl hover:bg-[#00aa8b] hover:text-white"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Form Modal */}
      {showForm && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={(e) => {
              // Close modal only if user clicks on backdrop, not inside the form
              if (e.target === e.currentTarget) {
                setShowForm(false);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl w-full max-w-md md:max-w-lg p-6 md:p-8 relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                aria-label="Close form"
              >
                &times;
              </button>

              {/* Header */}
              <div className="mb-4 text-center">
                <span className="inline-block text-white bg-indigo-400 rounded-full px-4 py-1 text-sm font-semibold mb-2">
                  Contact Us
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">
                  Let’s Get In Touch.
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Or reach out manually at{' '}
                  <a
                    href="mailto:stockbuddy07@gmail.com"
                    className="text-indigo-600 hover:underline"
                  >
                    stockbuddy07@gmail.com
                  </a>
                </p>
              </div>

              {/* Form */}
              <form
                action="https://formspree.io/f/xdkwdady"
                method="POST"
                className="space-y-4"
              >
                <label className="block text-gray-700 font-semibold text-sm md:text-base">
                  Full Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </label>

                <label className="block text-gray-700 font-semibold text-sm md:text-base">
                  Email Address
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </label>

                <label className="block text-gray-700 font-semibold text-sm md:text-base">
                  Message
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows={3}
                    required
                    className="w-full rounded-lg border border-gray-300 p-3 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
                  ></textarea>
                </label>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-white font-semibold py-2.5 md:py-3 rounded-full shadow-md hover:shadow-lg transition"
                  style={{
                    background:
                      'linear-gradient(270deg, #8b5cf6, #a78bfa, #8b5cf6)',
                    backgroundSize: '600% 600%',
                    animation: 'roamingGradient 8s ease infinite',
                  }}
                >
                  Submit Form
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}


      </section>
    </div>
  );
}
