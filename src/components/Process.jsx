import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollSection from './ScrollSection';
import Button from './Button';
import { motion } from 'framer-motion';

const STEPS = [
  {
    title: 'Discovery & Mapping',
    desc: 'Free strategy call to understand workflow, goals, and pain points. Map out automation opportunities.'
  },
  {
    title: 'Build & Test',
    desc: 'Design custom N8N workflow — fully tailored, rigorously tested for reliability.'
  },
  {
    title: 'Deliver & Maintain',
    desc: 'Go live in 15 days with 1 month free maintenance for tweaks and optimization.'
  }
];

export default function Process() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <ScrollSection id="process" className="bg-gray-900 py-10 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Streamlined Implementation
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            Our proven process ensures seamless automation integration
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {STEPS.map((s, i) => (
              <motion.div
                key={i}
                className="relative z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileTap={{ scale: isMobile ? 0.98 : 1 }}
              >
                <motion.div
                  className="h-full w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700/50 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={isMobile ? {} : { y: -8 }}
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-teal-500 text-white text-xl font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
         
        </motion.div>
      </div>
    </ScrollSection>
  );
}

Process.propTypes = {
  // No props currently, kept for scalability
};
