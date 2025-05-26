import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ className, children, ...props }) => {
  return (
    <footer className={`bg-black p-4 text-white ${className}`} {...props}>
      {children}
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
export default Footer;
