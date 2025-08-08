import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { LuClock4, LuWorkflow } from "react-icons/lu";
import { TiChartLineOutline } from "react-icons/ti";
import ScrollSection from './ScrollSection';
import PropTypes from 'prop-types';

const ITEMS = [
  {
    icon: <LuWorkflow className="text-teal-500" size={28} />,
    title: 'Workflow Automation',
    desc: 'Skip manual work. Automate tasks with custom N8N workflows tailored to your business.',
    cta: 'Automate Now'
  },
  {
    icon: <LuClock4 className="text-teal-500" size={28} />,
    title: 'Workflow Optimization',
    desc: 'Streamline processes with smart automations for smoother, faster operations.',
    cta: 'Optimize Workflow'
  },
  {
    icon: <TiChartLineOutline className="text-teal-500" size={28} />,
    title: 'Lead Management',
    desc: 'Automate lead scoring to focus on high-quality prospects only.',
    cta: 'Qualify Leads'
  }
];

export default function Features() {
  return (
    <ScrollSection id="solutions" className="bg-gray-900 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Streamline Your Operations
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mb-5" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Custom automation solutions for maximum efficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileTap={{ scale: 1 }}
            >
              <div className="h-full flex flex-col bg-gray-800 rounded-xl border border-gray-700 p-6 transition-md duration-300 group-hover:border-teal-500 max-md:group-hover:border-gray-700 group-hover:shadow-xl max-md:group-hover:shadow-none">
                <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5 md:group-hover:bg-teal-500/20 max-md:group-hover:bg-teal-500/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 lg:group-hover:text-teal-400 max-md:group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-6 text-base flex-grow">{item.desc}</p>
                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                   className="w-full py-3 text-base lg:group-hover:bg-teal-500 lg:group-hover:border-teal-500 lg:group-hover:text-white max-md:bg-transparent max-md:border-gray-300 max-md:text-gray-300 lg:transition-colors"
                  >
                    {item.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Seamless integration with your existing systems
          </p>
        </motion.div>
      </div>
    </ScrollSection>
  );
}

Features.propTypes = {};