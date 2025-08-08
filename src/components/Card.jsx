import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function Card({ children }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired
};
