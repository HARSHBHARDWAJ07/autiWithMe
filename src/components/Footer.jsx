import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();


  const socials = [
    { icon: <FaTwitter size={18} />, label: 'Twitter', url: 'https://x.com/_Pratham_verma_' },
    { icon: <FaLinkedinIn size={18} />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/pratham-verma-33095027a/' },
    { icon: <FaGithub size={18} />, label: 'GitHub', url: 'https://github.com/Prathamverma1' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
    

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Main Footer Content */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div 
            className="text-2xl font-bold text-white mb-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            AutoWithMe
          </motion.div>
          
          <p className="text-gray-500 max-w-md text-center mb-8">
            Intelligent automation solutions for growth-focused teams
          </p>
          
          <div className="flex space-x-5 mb-8">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                aria-label={social.label}
                title={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-teal-600 transition-colors duration-300 inline-flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Copyright */}
      <motion.div 
        className="py-6 text-center text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500">
            © {currentYear} AutoWithMe. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
