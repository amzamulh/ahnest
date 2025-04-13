import React from 'react';

const Button = ({
  label,
  variant = 'primary',
  size = 'md',
  radius = 'md',
  onClick,
  icon,
  iconPosition = 'right',
  disabled = false,
  name,
  value,
}) => {
  const baseClasses =
    'font-raleway inline-flex items-center justify-center font-medium transition-colors focus:outline-none';
  const varientStyle = {
    base: 'bg-body-light text-body-dark dark:text-body-light dark:bg-body-dark hover:bg-gray-300 dark:hover:bg-gray-700',
    primary: 'bg-primary text-body-light hover:bg-primary-dark',
    secondary: 'bg-secondary text-body-dark hover:bg-secondary-dark',
    info: 'bg-info text-body-dark hover:bg-info-dark',
    success:
      'bg-success text-body-dark hover:bg-success-dark hover:text-body-light',
    warning: 'bg-warning text-body-dark hover:bg-warning-dark',
    danger: 'bg-danger text-body-light hover:bg-danger-dark',
    disabled: 'bg-disable text-body-dark cursor-not-allowed',
  };
  const sizeStyle = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-6 py-2.5 text-lg',
    xl: 'px-8 py-3 text-xl',
  };
  const borderRadiusStype = {
    xs: 'rounded-xs',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };
  const iconStyle = {
    xs: 'icon-xs',
    sm: 'icon-sm',
    md: 'icon-md',
    lg: 'icon-lg',
    xl: 'icon-xl',
  };
  const iconGapLeftStyle = {
    xs: 'mr-2',
    sm: 'mr-2.5',
    md: 'mr-3',
    lg: 'mr-3.5',
    xl: 'mr-4',
  };
  const iconGapRightStyle = {
    xs: 'ml-2',
    sm: 'ml-2.5',
    md: 'ml-3',
    lg: 'ml-3.5',
    xl: 'ml-4',
  };
  return (
    <button
      className={`${baseClasses} ${varientStyle[disabled ? 'disabled' : variant]} ${disabled ? '' : 'cursor-pointer'} ${sizeStyle[size]} ${borderRadiusStype[radius]} `}
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
      name={name}
      value={value}
    >
      {icon && iconPosition === 'left' && (
        <span className={`${iconStyle[size]} ${iconGapLeftStyle[size]}`}>
          {icon}
        </span>
      )}
      {label}
      {icon && iconPosition === 'right' && (
        <span className={`${iconStyle[size]} ${iconGapRightStyle[size]}`}>
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
