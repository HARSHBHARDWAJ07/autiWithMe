import React from 'react';
import PropTypes from 'prop-types';
import ScrollSection from './ScrollSection';
import Button from './Button';
import { motion } from 'framer-motion';

export default function CTAForm() {
  return (
    <ScrollSection id="contact" className="py-16 md:py-28 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-8 md:p-16 text-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Enhanced decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-teal-500/40 blur-[100px]"></div>
            <div className="absolute bottom-10 right-1/4 w-40 h-40 rounded-full bg-indigo-500/40 blur-[100px]"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's Build Your First Automation Together
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Book a free strategy session and discover how automation can transform your workflow
            </motion.p>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileTap={{ scale: 1 }}
            >
              <Button 
                variant="filled" 
                className="px-8 py-4 text-lg font-medium max-md:hover:transform-none"
              >
                Start Your Automation Journey
              </Button>
            </motion.div>
            
            <motion.div
              className="mt-14 flex flex-wrap justify-center gap-6 text-gray-400 text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
                <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>No commitment</span>
              </div>
              <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
                <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>30-minute session</span>
              </div>
              <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
                <svg className="w-5 h-5 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Actionable strategy</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </ScrollSection>
  );
}

CTAForm.propTypes = {};