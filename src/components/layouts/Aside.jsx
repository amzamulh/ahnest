import React from 'react';
import PropTypes from 'prop-types';
const Aside = ({ children, ...props }) => {
  return <aside {...props}>{children}</aside>;
};

Aside.propTypes = {
  children: PropTypes.node,
};

export default Aside;
