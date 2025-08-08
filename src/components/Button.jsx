import React from 'react';
import PropTypes from 'prop-types';

const VARIANTS = {
  filled:
    'bg-teal-600 text-white hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors',
  outline:
    'border border-teal-600 text-teal-600 hover:bg-teal-600/10 hover:border-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors',
  ghost:
    'text-teal-500 hover:text-teal-400 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors',
};

export default function Button({
  variant,
  children,
  onClick,
  to,
  className = '',
}) {
  // Always fallback to Calendly if no 'to' is given
  const href = to || 'https://calendly.com/vermapratham459/30min';

  const baseClasses = `inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold focus:outline-none ${VARIANTS[variant]} ${className}`;

  const handleClick = (e) => {
    if (onClick) onClick(e);
    // analytics can be added here if needed
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={baseClasses}
    >
      {children}
    </a>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['filled', 'outline', 'ghost']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: 'filled',
  onClick: () => {},
  to: null,
  className: '',
};
