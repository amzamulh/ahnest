import PropTypes from 'prop-types';

const MainContent = ({ className, children, ...props }) => {
  return (
    <main className={`w-full p-4 ${className}`} {...props}>
      {children}
    </main>
  );
};
MainContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default MainContent;
