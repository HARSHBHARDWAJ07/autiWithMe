import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import heroMobile from '../assets/hero-mobile.png';
import heroDesktop from '../assets/hero-desktop.png';

// Updated Button component with dark theme variants
const Button = ({ variant, children, onClick, to }) => {
  const VARIANTS = {
    filled: 'bg-teal-500 text-white hover:bg-teal-600 focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900',
    outline: 'border border-teal-500 text-teal-500 hover:bg-teal-900/40 focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900',
    ghost: 'text-teal-500 hover:text-teal-400 focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900'
  };

  const baseClasses = 'rounded-xl px-6 py-3 font-semibold transition-all duration-300 focus:outline-none';

  return to ? (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="inline-block"
    >
      <motion.button
        className={`${baseClasses} ${VARIANTS[variant]}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        {children}
      </motion.button>
    </a>
  ) : (
    <motion.button
      className={`${baseClasses} ${VARIANTS[variant]}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['filled', 'outline', 'ghost']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string
};

Button.defaultProps = {
  variant: 'filled',
  onClick: () => {},
  to: null
};

// Updated Hero component with dark theme
const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="pt-16 md:pt-24 bg-gray-900 text-gray-100 flex items-center border rounded-3xl min-h-[110vh] md:min-h-[90vh]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 space-y-5 md:space-y-7 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Automate repetitive work.<br />
              <span className="bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text">
                Focus on Growth
              </span>
            </motion.h1>

            <motion.ul
              className="list-disc text-xl text-gray-500 max-w-lg mx-auto md:mx-0 space-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <li>Save 5-10 hours/week with custom AI workflows</li>
              <li>Built for small teams &amp; solopreneurs who want to scale</li>
            </motion.ul>

            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="pt-4"
            >
              <Button
                variant="outline"
                className="w-full group-hover:bg-teal-500 group-hover:border-teal-500 group-hover:text-white transition-colors"
                to="https://calendly.com/vermapratham459/30min"
              >
                Book Your Free Automation Call
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-teal-700/20 rounded-2xl transform rotate-3"></div>
              <picture>
                <source media="(min-width:768px)" srcSet={heroDesktop} />
                <img
                  src={heroMobile}
                  alt="AI workflow automation interface"
                  className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
                  loading="eager"
                />
              </picture>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
