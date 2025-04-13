import { SparklesIcon } from '@heroicons/react/24/solid';

const Checkbox = ({
  variant = 'primary',
  size = 'md',
  label = 'Checkbox',
  checked = false,
  onChange,
  disabled = false,
  loading = false,
  id = 'checkbox',
  labelPosition = 'right',
  name,
}) => {
  const baseStyles =
    'appearance-none border-2 transition-colors focus:outline-none cursor-pointer';

  const variantStyles = {
    primary:
      'border-primary checked:bg-primary checked:text-white checked:border-primary hover:border-primary focus:ring-primary',
    secondary:
      'border-secondary-600 checked:bg-secondary-600 checked:border-secondary-600 hover:border-secondary-700 focus:ring-secondary-500',
    info: 'border-info-600 checked:bg-info-600 checked:border-info-600 hover:border-info-700 focus:ring-info-500',
    success:
      'border-success-600 checked:bg-success-600 checked:border-success-600 hover:border-success-700 focus:ring-success-500',
    warning:
      'border-warning-600 checked:bg-warning-600 checked:border-warning-600 hover:border-warning-700 focus:ring-warning-500',
    danger:
      'border-danger-600 checked:bg-danger-600 checked:border-danger-600 hover:border-danger-700 focus:ring-danger-500',
    disabled: 'border-gray-400 checked:bg-gray-400 cursor-not-allowed',
  };

  const sizeStyles = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-7 w-7',
  };

  const labelStyles = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const loadingIconStyles = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-7 w-7',
  };

  const checkboxClasses = `${baseStyles} ${variantStyles[disabled || loading ? 'disabled' : variant]}
    ${sizeStyles[size]} ${(disabled || loading) && 'pointer-events-none opacity-70'}`;

  const labelClasses = `select-none ${labelStyles[size]} ${(disabled || loading) && 'text-gray-400'}`;

  return (
    <div className="inline-flex items-center justify-center gap-2">
      {label && labelPosition === 'left' && (
        <label
          htmlFor={id}
          className={`${labelClasses} cursor-pointer`}
          aria-hidden={loading}
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          className={checkboxClasses}
          checked={checked}
          onChange={onChange}
          disabled={disabled || loading}
          aria-label={label || 'Checkbox'}
          aria-checked={checked}
          id={id}
          name={name}
        />
        {loading && (
          <span
            className={` ${loadingIconStyles[size]} 'absolute justify-center' inset-0 flex animate-spin items-center`}
          >
            <SparklesIcon className="text-white" />
          </span>
        )}
        {checked && !loading && (
          <svg
            className={`text-white' pointer-events-none absolute inset-0 ${sizeStyles[size]}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      {label && labelPosition === 'right' && (
        <label
          htmlFor={id}
          className={`${labelClasses} cursor-pointer`}
          aria-hidden={loading}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
