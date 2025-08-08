import React from 'react';
import PropTypes from 'prop-types';
import ScrollSection from './ScrollSection';
import Carousel from './Carousel';
import Card from './Card';
import testimonial1 from '../assets/testimonial1.png';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const cards = [
    <Card key="t1" className="bg-gray-800 border border-gray-700 rounded-2xl p-8 h-full">
      <div className="flex items-center mb-6">
        <div className="relative">
          <img 
            src={testimonial1} 
            alt="Ally Fekaiki" 
            className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-teal-500" 
            loading="lazy" 
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div>
          <p className="font-bold text-white">Ally Fekaiki</p>
          <p className="text-sm text-gray-400">CEO - Soho, New York</p>
        </div>
      </div>
      <div className="relative">
        <svg 
          className="absolute -top-6 -left-2 text-teal-500 opacity-20" 
          width="40" 
          height="40" 
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
        </svg>
        <p className="text-gray-300 italic pl-6">"AutoWithMe transformed our lead process. We saved countless hours and grew faster than expected."</p>
      </div>
      <div className="mt-6 flex text-teal-400">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className="w-5 h-5 fill-current mr-1" 
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    </Card>
  ];

  return (
    <ScrollSection id="testimonials" className="bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Driving Business Transformation
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Trusted by forward-thinking teams to scale efficiently
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <Carousel items={cards} />
        </motion.div>
        
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-gray-500 max-w-3xl mx-auto">
            Average client results: 45% time savings, 30% lead conversion increase
          </p>
        </motion.div>
      </div>
    </ScrollSection>
  );
}

Testimonials.propTypes = {};