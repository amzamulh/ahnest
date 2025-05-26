import PropTypes from 'prop-types';

const Layout = ({ className, children, hasSider = false, ...props }) => {
  return (
    <div
      className={`flex flex-auto ${className} ${hasSider ? '!flex-row' : 'flex-col'}`}
      {...props}
    >
      {children}
    </div>
  );
};
Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  hasSider: PropTypes.bool,
};

export default Layout;
