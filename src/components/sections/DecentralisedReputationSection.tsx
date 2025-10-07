'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// ==================================================================
// == EDIT YOUR TEAM MEMBER INFORMATION AND PICTURES HERE ==
// ==================================================================

const teamMemberData = [
     {
    id: 1,
    name: ' Ayush Gajjar',
    position: 'Director of Technology & Strategy',
    profilePic: '/images/team/ayush.jpg',
    description: 'As Director of Technology & Strategy, Ayush architects the path from idea to polished application, ensuring a seamless, strategic, and precise execution.',
    socials: [
      { name: 'Instagram', url: 'https://instagram.com/ayushgajjar.exe' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ayushgajjar123' },
      { name: 'GitHub', url: 'https://github.com/ayush101x' },
    ],
  bgColor: 'bg-[#f0f9f7]',
    textColor: 'text-[#00aa8b]',
 
  },
  {
    id: 2,  
    name: 'Premal Ariwala',
    position: 'Pixel-Perfect Frontend Development',
    profilePic: '/images/team/premal.jpg',
    description: 'Premal specializes in building fast, responsive, and scalable front-end applications with a focus on clean code and performance.',
    socials: [
      { name: 'Instagram', url: 'https://instagram.com/premal6114' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/premal-ariwala' },
      { name: 'GitHub', url: 'https://github.com/Premal-hub' },
    ],
      bgColor: 'bg-[#fef8f0]',
    textColor: 'text-[#f57c00]',
  },
  {
    id: 3,
    name: 'Urvashiba Rana',
    position: 'Robust & Scalable Backend Systems',
    profilePic: '/images/team/urvashi.jpg',
    description: 'Urvashiba architects robust server-side systems and ensures seamless deployment, focusing on security and scalability.',
    socials: [
      { name: 'Instagram', url: 'https://instagram.com/ranaba_04' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/urvashibarana04' },
      { name: 'GitHub', url: 'https://github.com/urvashibarana' },
    ],
    bgColor: 'bg-[#e8f4fd]',
    textColor: 'text-[#2196f3]',
  },
   {
    id: 4,
    name: 'Shubham Sharma',
    position: 'Complete Web & Mobile Solutions',
    profilePic: '/images/team/shubham.jpg',
    description: 'Shubham delivers end-to-end solutions, seamlessly connecting front-end experiences with powerful back-end and mobile platforms.',
    socials: [
      { name: 'Instagram', url: 'https://instagram.com/sharma.shubham.09' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shubham-sharma-5793122b0/' },
      { name: 'GitHub', url: 'https://github.com/ssharma292003' },
    ],
    bgColor: 'bg-[#fff3e0]',
    textColor: 'text-[#ff9800]',
  },
  {
    id: 5,
    name: 'Devang Kheni',
    position: 'Intuitive User-Centric Design (UI/UX)',
    profilePic: '/images/team/ddevang.jpg', 
    description: 'Devang is passionate about creating intuitive, user-centric designs that bridge the gap between user needs and business goals.',
    socials: [
      { name: 'Instagram', url: 'https://instagram.com/_devang_kheni_' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ayushgajjar123' },
      { name: 'GitHub', url: 'https://github.com/ayush101x' },
    ],
    bgColor: 'bg-[#f3e5f5]',
    textColor: 'text-[#9c27b0]',
  },

];

// --- HELPER COMPONENT FOR SOCIAL ICONS ---
type SocialIconProps = {
  name: 'GitHub' | 'LinkedIn' | 'Instagram';
  className?: string;
};

const SocialIcon = ({ name, className = 'w-6 h-6' }: SocialIconProps) => {
  const icons = {
    GitHub: (
      <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    LinkedIn: (
      <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
    Instagram: (
      <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <title>Instagram</title>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  };
  return icons[name] || null;
};


export default function DecentralisedReputationSection() {
  const sectionRef = useRef(null);

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
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
                <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium">Our Team</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl md:text-5xl font-semibold text-primary mb-6 leading-tight">
                Partners of NoBuddy
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl text-primary font-semibold leading-relaxed ">
                An exclusive partnership with a dedicated team of experts, committed to your project's success.
              </motion.p>
            </div>
          </div>

          {/* Right Side - Scrolling Cards */}
          <div className="w-1/2 flex flex-col">
            <div className="space-y-8">
              {teamMemberData.map((member) => {
                return (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 50, scale: 0.7, rotate: 12 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    className={`${member.bgColor} rounded-3xl p-10 flex flex-col items-center text-center min-h-[480px]`}
                  >
                    {/* UPDATED: Increased image container size for desktop */}
                    <div className="relative w-40 h-40 mb-6">
                      <Image
                        src={member.profilePic}
                        alt={`${member.name} profile picture`}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    
                    <h3 className={`${member.textColor} text-3xl font-semibold mb-2`}>{member.name}</h3>
                    <p className={`${member.textColor} text-base font-semibold opacity-80 mb-5`}>{member.position}</p>
                    <p className={`${member.textColor} text-lg font-medium opacity-90 mb-6 flex-grow`}>
                      {member.description}
                    </p>

                    <div className="flex gap-5 mt-auto">
                      {member.socials.map((social) => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`${member.textColor} transition-opacity hover:opacity-70`}>
                          <SocialIcon name={social.name as 'GitHub' | 'LinkedIn' | 'Instagram'} className="w-7 h-7" />
                        </a>
                      ))}
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8 text-center">
          <span className="inline-block px-4 py-2 bg-cta/10 text-cta rounded-full text-sm font-medium">Our Team</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl font-semibold text-primary mb-6 leading-tight text-center">
          Partners of NoBuddy
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-base text-primary font-medium text-center mb-12">
          An exclusive partnership with a dedicated team of experts, committed to your project's success.
        </motion.p>

        <div className="space-y-6">
          {teamMemberData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${member.bgColor} rounded-3xl p-6 flex flex-col items-center text-center`}
            >
              {/* UPDATED: Increased image container size for mobile */}
              <div className="relative w-32 h-32 mb-4">
                  <Image src={member.profilePic} alt={member.name} fill className="object-cover rounded-full" />
              </div>
              <h3 className={`${member.textColor} text-2xl font-semibold mb-1`}>{member.name}</h3>
              <p className={`${member.textColor} text-sm font-semibold opacity-80 mb-4`}>{member.position}</p>
              <p className={`${member.textColor} text-base opacity-90 mb-5 flex-grow`}>
                {member.description}
              </p>
              <div className="flex gap-5 mt-auto">
                  {member.socials.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`${member.textColor} transition-opacity hover:opacity-70`}>
                      <SocialIcon name={social.name as 'GitHub' | 'LinkedIn' | 'Instagram'} className="w-6 h-6" />
                  </a>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

