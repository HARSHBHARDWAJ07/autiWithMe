import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { to: 'home', label: 'Home' },
  { to: 'solutions', label: 'Solutions' },
  { to: 'benefits', label: 'Benefits' },
  { to: 'process', label: 'Our Process' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const sections = LINKS.map((l) => document.getElementById(l.to));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.6, rootMargin: '-100px 0px 0px 0px' }
    );
    
    window.addEventListener('scroll', handleScroll);
    sections.forEach((sec) => sec && observer.observe(sec));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((sec) => sec && observer.unobserve(sec));
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full bg-white z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-8 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold text-gray-900"
            whileHover={{ scale: 1.05 }}
          >
            AutoWithMe
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    offset={-80}
                    duration={500}
                    className={`relative cursor-pointer px-1 py-2 text-gray-700 transition-colors hover:text-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded ${
                      active === link.to 
                        ? 'text-teal-600 font-medium' 
                        : ''
                    }`}
                    activeClass="text-teal-600"
                  >
                    {link.label}
                    {active === link.to && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600"
                        layoutId="navIndicator"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 text-white rounded-xl px-5 py-2.5 font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
            >
              Book Free Call
            </motion.a>
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <ul className="px-4 py-6 space-y-4 border-t border-gray-100">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    offset={-80}
                    duration={500}
                    onClick={() => setOpen(false)}
                    className={`block py-3 px-4 rounded-lg transition-colors ${
                      active === link.to
                        ? 'bg-teal-50 text-teal-600 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    activeClass="text-teal-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block"
                >
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-teal-600 text-white rounded-xl px-5 py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  >
                    Book Free Automation Call
                  </motion.button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

Navbar.propTypes = {};