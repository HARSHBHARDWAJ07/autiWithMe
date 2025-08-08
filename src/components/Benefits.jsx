import React from 'react';
import PropTypes from 'prop-types';
import ScrollSection from './ScrollSection';
import { motion } from 'framer-motion';

const DATA = [
  { title: 'Save 20+ Hours Weekly', desc: 'Automate repetitive tasks so your team focuses on growth, not grunt work.' },
  { title: 'Scale Without Hiring', desc: 'Replace manual workflows with smart systems. Get more done without expanding your team.' },
  { title: 'Eliminate Bottlenecks', desc: 'Keep operations moving with automations. No delays from repetitive tasks.' },
  { title: 'Improve Client Experience', desc: 'Respond faster and deliver a smoother journey from lead to close.' }
];

const BenefitCard = ({ title, desc, index }) => (
<motion.div
  className="h-full"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.6, delay: index * 0.15 }}
  whileTap={{ scale: 0.98 }}
>
  <div
    className="h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-6 lg:transition duration-300 flex flex-col shadow-lg
               lg:hover:border-teal-400/50 lg:hover:shadow-xl lg:hover:shadow-teal-500/10
               lg:hover:scale-[1.02] lg:hover:-translate-y-0.5
               group"
  >
    <div className="flex items-start flex-grow">
      <div className="flex-shrink-0 mt-0.5">
        <div
          className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center lg:transition-colors duration-300
                     lg:group-hover:bg-teal-500/40"
        >
          <div
            className="w-2 h-2 rounded-full bg-teal-500 lg:transition-all duration-300
                       lg:group-hover:scale-125"
          ></div>
        </div>
      </div>
      <div className="ml-4">
        <h3
          className="text-xl font-bold text-teal-400 mb-3 lg:transition-colors duration-300
                     lg:group-hover:text-teal-300"
        >
          {title}
        </h3>
        <p
          className="text-gray-400 text-base leading-relaxed lg:transition-colors duration-300
                     lg:group-hover:text-gray-300"
        >
          {desc}
        </p>
      </div>
    </div>
  </div>
</motion.div>

);

BenefitCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default function Benefits() {
  return (
    <ScrollSection id="benefits" className="bg-gradient-to-b from-gray-900 to-gray-950 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3  bg-clip-text "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Unlock Operational Efficiency
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-xl mx-auto text-base md:text-lg lg:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transform your workflow with intelligent automation
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {DATA.map((b, i) => (
            <BenefitCard 
              key={i} 
              title={b.title} 
              desc={b.desc} 
              index={i} 
            />
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}

Benefits.propTypes = {};