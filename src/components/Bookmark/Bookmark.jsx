import {
  BookmarkIcon as BookmarkOutline,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkFill } from '@heroicons/react/24/solid';

const Bookmark = ({
  variant = 'primary',
  size = 'md',
  label = 'Book Mark',
  labelPosition = 'right',
  active = false,
  onToggle,
  disabled = false,
  loading = false,
}) => {
  const baseStyles =
    'inline-flex items-center font-medium uppercase justify-center border p-2 gap-2 transition-colors cursor-pointer';

  const variantStyles = {
    primary: `text-primary hover:text-primary-dark focus:ring-primary ${
      active && !disabled && !loading ? 'text-primary' : 'text-gray-400'
    }`,
    secondary: `text-secondary hover:text-secondary focus:ring-secondary ${
      active && !disabled && !loading ? 'text-secondary' : 'text-gray-400'
    }`,
    info: `text-info hover:text-info focus:ring-info ${
      active && !disabled && !loading ? 'text-info' : 'text-gray-400'
    }`,
    success: `text-success hover:text-success focus:ring-success ${
      active && !disabled && !loading ? 'text-success' : 'text-gray-400'
    }`,
    warning: `text-warning hover:text-warning focus:ring-warning ${
      active && !disabled && !loading ? 'text-warning' : 'text-gray-400'
    }`,
    danger: `text-danger hover:text-danger focus:ring-danger ${
      active && !disabled && !loading ? 'text-danger' : 'text-gray-400'
    }`,
    disabled: 'text-gray-400 cursor-not-allowed',
  };

  const sizeStyles = {
    xs: 'h-4 w-4',
    sm: 'h-5 w-5',
    md: 'h-6 w-6',
    lg: 'h-7 w-7',
    xl: 'h-8 w-8',
  };

  const labelStyles = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const loadingIconStyles = {
    xs: 'h-4 w-4',
    sm: 'h-5 w-5',
    md: 'h-6 w-6',
    lg: 'h-7 w-7',
    xl: 'h-8 w-8',
  };

  const bookmarkClasses = ` ${baseStyles} ${variantStyles[disabled || loading ? 'disabled' : variant]} ${(disabled || loading) && 'pointer-events-none opacity-70'} duration-400 `;

  const labelClasses = `select-none ${labelStyles[size]} ${(disabled || loading) && 'text-gray-400'}`;

  return (
    <div className="inline-flex items-center">
      <button
        className={bookmarkClasses}
        onClick={onToggle}
        disabled={disabled || loading}
        aria-label={label || (active ? 'Remove bookmark' : 'Add bookmark')}
        aria-pressed={active}
      >
        {label && labelPosition === 'left' && (
          <span className={labelClasses} aria-hidden={loading}>
            {label}
          </span>
        )}
        <span className={`${sizeStyles[size]}`}>
          {loading ? (
            <SparklesIcon
              className={`${(loadingIconStyles[size], 'animate-spin')}`}
            />
          ) : active ? (
            <BookmarkFill className={sizeStyles[size]} />
          ) : (
            <BookmarkOutline className={sizeStyles[size]} />
          )}
        </span>
        {label && labelPosition === 'right' && (
          <span className={labelClasses} aria-hidden={loading}>
            {label}
          </span>
        )}
      </button>
    </div>
  );
};

export default Bookmark;
