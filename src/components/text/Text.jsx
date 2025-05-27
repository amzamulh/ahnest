import PropTypes from 'prop-types';
import {
  fontWeightStyle,
  textLineHeigthStyle,
  textStyles,
  variantTextStyles,
} from '../styles/baseStyles';
import { getValidStyle } from '../styles/validatedStyles';
import clsx from 'clsx';

const ElementMap = {
  p: 'p',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  span: 'span',
  label: 'label',
  strong: 'strong',
  small: 'small',
  div: 'div',
};

const Text = ({
  textType = 'p',
  className = '',
  variant = 'base',
  size,
  fontWeight = 'normal',
  lineHeight = 'base',
  children,
  ...props
}) => {
  const validLineHeight = getValidStyle(
    lineHeight,
    textLineHeigthStyle,
    'Line Height',
  );
  const validVariantText = getValidStyle(variant, variantTextStyles, 'Color');
  const validTestSize = getValidStyle(size, textStyles, 'Text Size');
  const validFontWeight = getValidStyle(
    fontWeight,
    fontWeightStyle,
    'Font Weight',
  );
  const validElementType = getValidStyle(textType, ElementMap, 'Element Type')
    .trim()
    .toLowerCase();
  const Element = validElementType || 'span';

  return (
    <Element
      className={clsx(
        validLineHeight,
        validVariantText,
        validTestSize,
        validFontWeight,
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

Text.propTypes = {
  textType: PropTypes.oneOf(Object.keys(ElementMap)),
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(variantTextStyles)),
  size: PropTypes.oneOf(Object.keys(textLineHeigthStyle)),
  fontWeight: PropTypes.oneOf(Object.keys(fontWeightStyle)),
  children: PropTypes.node,
};

export default Text;
