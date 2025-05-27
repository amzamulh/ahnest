import clsx from 'clsx';
import Text from '../text/Text';
import PropTypes from 'prop-types';
import { getValidStyle } from '../styles/validatedStyles';
import { gapStyles, iconStyles } from '../styles/baseStyles';

const Icon = ({
  iconName,
  size = 'md',
  variant = 'disabled',
  iconPosition,
  gap,
  inline = false,
  children,
}) => {
  const position = iconPosition in gapStyles ? iconPosition : '';
  const sizeKey = size in iconStyles ? size : 'md';
  const gapKey = gap || sizeKey;
  const gapClass = position ? gapStyles[position][gapKey] : '';
  const iconStyle = getValidStyle(
    size,
    iconStyles,
    'Icon Size- Height and Width',
  );
  const baseStyle = clsx(gapClass, inline ? 'inline-flex' : 'block');

  return (
    <Text
      textType="span"
      variant={variant}
      className={clsx(baseStyle, iconStyle)}
    >
      {!iconName ? children : iconName}
    </Text>
  );
};
Icon.propTypes = {
  iconName: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  variant: PropTypes.oneOf([
    'base',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'danger',
    'disabled',
  ]),
  iconPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  gap: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  inline: PropTypes.bool,
  children: PropTypes.node,
};

export default Icon;
