import React from 'react';
import PropTypes from 'prop-types';
import ScrollSection from './ScrollSection';
import { motion } from 'framer-motion';
import { 
  SiN8N, 
  SiOpenai, 
  SiPython, 
  SiGmail,
  SiAirtable
} from 'react-icons/si';
import { FaSlack } from "react-icons/fa";

// Custom SVG components for tools without react-icons
const OpenRouterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 17l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const SerperIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 12h8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

const TOOLS = [
  { icon: <SiN8N size={32} />, name: 'n8n', color: 'text-[#00e991]' },
  { icon: <SiOpenai size={32} />, name: 'OpenAI', color: 'text-[#10a37f]' },
  { icon: <OpenRouterIcon />, name: 'OpenRouter', color: 'text-indigo-500' },
  { icon: <SerperIcon />, name: 'Serper', color: 'text-blue-500' },
  { icon: <SiAirtable size={32} />, name: 'Airtable', color: 'text-[#2d7ff9]' },
  { icon: <SiPython size={32} />, name: 'Python', color: 'text-[#3776ab]' },
  { icon: <SiGmail size={32} />, name: 'Gmail', color: 'text-[#ea4335]' },
  { icon: <FaSlack size={32} />, name: 'Slack', color: 'text-[#ea3555]' }
];

export default function ToolsUsed() {
  return (
    <ScrollSection id="tools" className="bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Toolstack
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg">
            Technologies powering your automation solutions
          </p>
        </motion.div>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 md:gap-6 max-w-6xl mx-auto">
          {TOOLS.map((t, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
                type: "spring",
                damping: 12
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="group h-full flex flex-col items-center p-4 md:p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:border-indigo-100 hover:bg-gray-50">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4 ${t.color} bg-gradient-to-br from-white to-gray-50 group-hover:scale-110 transition-transform duration-300`}>
                  {t.icon}
                </div>
                <h3 className="text-sm md:text-base font-medium text-gray-900 group-hover:text-indigo-700 transition-colors">
                  {t.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}

ToolsUsed.propTypes = {};