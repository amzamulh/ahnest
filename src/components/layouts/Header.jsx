import PropTypes from 'prop-types';
const Header = ({ className = '', children, ...props }) => {
  return (
    <header className={`bg-gray-500 p-4 text-white ${className}`} {...props}>
      {children}
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
