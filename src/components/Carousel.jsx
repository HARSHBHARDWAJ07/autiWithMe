import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

export default function Carousel({ items }) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          {items[index]}
        </motion.div>
      </AnimatePresence>
      <button className="absolute top-1/2 left-4" onClick={prev} aria-label="Previous">
        <IoMdArrowBack size={24} />
      </button>
      <button className="absolute top-1/2 right-4" onClick={next} aria-label="Next">
        <IoMdArrowForward size={24} />
      </button>
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired
};
