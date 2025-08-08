import React, { useEffect, useState } from 'react';
import { IoMdArrowUp } from 'react-icons/io';

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return visible ? (
    <button
      onClick={scrollTop}
      className="fixed bottom-8 right-8 bg-primary text-white rounded-full p-3 shadow-lg hover:shadow-xl"
      aria-label="Scroll to top"
    >
      <IoMdArrowUp size={20} />
    </button>
  ) : null;
}
