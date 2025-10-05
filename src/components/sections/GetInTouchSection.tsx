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
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-lg w-full p-8 relative shadow-lg">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold"
                aria-label="Close form"
              >
                &times;
              </button>
              <div className="mb-6 text-center">
                <span className="inline-block  text-white bg-indigo-200  bg-purple-600 rounded-full px-4 py-1 text-sm font-semibold mb-2">
                  Contact Us
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Let’s Get In Touch.</h2>
                <p className="text-gray-600">
                  Or just reach out manually to us at{' '}
                  <a href="stockbuddy07@gmail.com" className="text-indigo-600 hover:underline">
                    stockbuddy07@gmail.com
                  </a>
                </p>
              </div>
              <form action="https://formspree.io/f/xdkwdady" method="POST" className="space-y-6">
                <label className="block text-gray-700 font-semibold">
                  Full Name
                  <div className="relative mt-1">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5.121 17.804A9 9 0 1118.88 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </label>
                <label className="block text-gray-700 font-semibold">
                  Email Address
                  <div className="relative mt-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 12H8m0 0l4-4m-4 4l4 4"
                        />
                      </svg>
                    </div>
                  </div>
                </label>
                <label className="block text-gray-700 font-semibold">
                  Message
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-gray-300 p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
                  ></textarea>
                </label>
                <style>
                  {`
                    @keyframes roamingGradient {
                      0% {
                        background-position: 0% 50%;
                      }
                      50% {
                        background-position: 100% 50%;
                      }
                      100% {
                        background-position: 0% 50%;
                      }
                    }
                  `}
                </style>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 12px rgba(139, 92, 246, 0.7)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg transition flex items-center justify-center space-x-2"
                  style={{
                    background: 'linear-gradient(270deg, #8b5cf6, #a78bfa, #8b5cf6)',
                    backgroundSize: '600% 600%',
                    animation: 'roamingGradient 8s ease infinite',
                  }}
                >
                  <span>Submit Form</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </motion.button>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
