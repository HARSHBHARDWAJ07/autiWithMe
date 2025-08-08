import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ScrollSection({ id, children }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-6"
    >
      {children}
    </motion.section>
  );
}

ScrollSection.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
