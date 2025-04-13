import React from 'react';
import { SparklesIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Switch = ({
  variant = 'danger',
  size = 'md',
  label = 'switch',
  radius = 'full',
  checked = false,
  onChange,
  name,
  id,
  disabled = false,
  loading = false,
  onIcon = <CheckIcon />,
  offIcon = <XMarkIcon />,
}) => {
  const baseTrackStyles = `relative flex items-center inline-flex flex-shrink-0  transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${disabled ? '' : 'cursor-pointer'}`;
  const baseThumbStyles = 'absolute bg-white  duration-400 ease-in-out';

  const variantStyles = {
    primary: `bg-gray-300 ${checked && 'bg-primary'} ${
      !checked && !disabled && !loading ? 'hover:bg-primary-dark' : ''
    }`,
    secondary: `bg-gray-300 ${checked && 'bg-secondary'} ${
      !checked && !disabled && !loading ? 'hover:bg-secondary-dark' : ''
    }`,
    info: `bg-gray-300 ${checked && 'bg-info'} ${
      !checked && !disabled && !loading ? 'hover:bg-info-dark' : ''
    }`,
    success: `bg-gray-300 ${checked && 'bg-success'} ${
      !checked && !disabled && !loading ? 'hover:bg-success-dark' : ''
    }`,
    warning: `bg-gray-300 ${checked && 'bg-warning'} ${
      !checked && !disabled && !loading ? 'hover:bg-warning-dark' : ''
    }`,
    danger: `bg-gray-300 ${checked && 'bg-danger!'} ${
      !checked && !disabled && !loading ? 'hover:bg-danger-dark' : ''
    }`,
    disabled: 'bg-gray-400 cursor-not-allowed',
  };

  const thumbVariantStyles = {
    primary: `text-gray-300 ${checked && 'text-primary'} ${
      !checked && !disabled && !loading ? 'hover:text-primary-dark' : ''
    }`,
    secondary: `text-gray-300 ${checked && 'text-secondary'} ${
      !checked && !disabled && !loading ? 'hover:text-secondary-dark' : ''
    }`,
    info: `text-gray-300 ${checked && 'text-info'} ${
      !checked && !disabled && !loading ? 'hover:text-info-dark' : ''
    }`,
    success: `text-gray-300 ${checked && 'text-success'} ${
      !checked && !disabled && !loading ? 'hover:text-success-dark' : ''
    }`,
    warning: `text-gray-300 ${checked && 'text-warning'} ${
      !checked && !disabled && !loading ? 'hover:text-warning-dark' : ''
    }`,
    danger: `text-gray-300 ${checked && 'text-danger!'} ${
      !checked && !disabled && !loading ? 'hover:text-danger-dark' : ''
    }`,
    disabled: 'text-gray-400 cursor-not-allowed',
  };

  const sizeStyles = {
    xs: 'h-4 w-8',
    sm: 'h-6 w-12',
    md: 'h-8 w-16',
    lg: 'h-9 w-18',
    xl: 'h-10 w-20',
  };

  const thumbSizeStyles = {
    xs: `h-3 w-3 left-0.5  ${checked && 'left-[calc(100%-0.875rem)]'} `,
    sm: `h-4 w-4 left-1  ${checked && 'left-[calc(100%-1.25rem)]'}`,
    md: `h-5 w-5 left-1.5 ${checked && 'left-[calc(100%-1.65rem)]'}`,
    lg: `h-6 w-6 left-1.5 ${checked && 'left-[calc(100%-1.875rem)]'}`,
    xl: `h-7 w-7 left-1.5 ${checked && 'left-[calc(100%-2.125rem)]'}`,
  };

  const labelStyles = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };
  const iconSizeStyles = {
    xs: 'h-1.5 w-1.5',
    sm: 'h-2 w-2',
    md: 'h-2.5 w-2.5',
    lg: 'h-3 w-3',
    xl: 'h-3.5 w-3.5',
  };

  const loadingIconStyles = {
    xs: 'h-2 w-2',
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
    xl: 'h-6 w-6',
  };
  const borderRadiusStype = {
    none: '',
    xs: 'rounded-xs',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  const trackClasses = `${baseTrackStyles} ${variantStyles[disabled || loading ? 'disabled' : variant]} ${sizeStyles[size]} ${(disabled || loading) && 'opacity-70'} ${loading && 'pointer-events-none'} ${borderRadiusStype[radius]} `;

  const thumbClasses = `${baseThumbStyles} ${thumbSizeStyles[size]} ${borderRadiusStype[radius]} ${thumbVariantStyles[disabled || loading ? 'disabled' : variant]} `;

  const labelClasses = ` ml-2 select-none ${labelStyles[size]} ${(disabled || loading) && 'text-gray-400'}`;
  const handleChange = onChange || (() => {});
  return (
    <div className="inline-flex items-center justify-center gap-2">
      {label && (
        <div className={labelClasses} aria-hidden={loading}>
          {label}
        </div>
      )}
      <label className="relative flex items-center justify-center" htmlFor={id}>
        <input
          type="checkbox"
          className="sr-only"
          checked={onChange ? checked : undefined}
          defaultChecked={!onChange ? checked : undefined}
          onChange={handleChange}
          disabled={disabled || loading}
          aria-label={label || 'Switch'}
          aria-checked={checked}
          name={name}
          id={id}
        />
        <div className={trackClasses}>
          {loading ? (
            <span
              className={`${loadingIconStyles[size]} absolute inset-0 top-1/2 left-1/2 inline-flex -translate-1/2 animate-spin items-center justify-center`}
            >
              <SparklesIcon className="text-white" />
            </span>
          ) : offIcon || onIcon ? (
            <span className={thumbClasses}>
              <span className={`${iconSizeStyles[size]} duration-400`}>
                {checked ? onIcon : offIcon}
              </span>
            </span>
          ) : (
            <span className={thumbClasses} />
          )}
        </div>
      </label>
    </div>
  );
};
export default Switch;

// const Switch = ({
//   variant = 'primary',
//   size = 'md',
//   radius = 'full',
//   icon,
// }) => {
//   const baseStyle = 'relative bg-gray-300 dark:bg-body-dark duration-300';
//   const afterStyle =
//     'after:absolute after:bg-white dark:after:bg-black after:top-1/2 after:flex after:-translate-y-1/2 after:items-center after:justify-center after:duration-300';
//   const varientStyle = {
//     base: 'bg-body-light text-body-dark dark:text-body-light dark:bg-body-dark hover:bg-gray-300 dark:hover:bg-gray-700',
//     primary: 'border border-primary peer-checked:bg-primary',
//     secondary: 'bg-secondary text-body-dark hover:bg-secondary-dark',
//     info: 'bg-info text-body-dark hover:bg-info-dark',
//     success:
//       'bg-success text-body-dark hover:bg-success-dark hover:text-body-light',
//     warning: 'bg-warning text-body-dark hover:bg-warning-dark',
//     danger: 'bg-danger text-body-light hover:bg-danger-dark',
//     disabled: 'bg-disable text-body-dark cursor-not-allowed',
//   };
//   const varientCircleStyle = {
//     base: 'peer-checked:after:bg-body-light dark:peer-checked:after:bg-body-dark',
//     primary: 'peer-checked:after:bg-body-light',
//     secondary: 'peer-checked:after:bg-body-light',
//     info: 'peer-checked:after:bg-body-light',
//     success: 'peer-checked:after:bg-body-light',
//     warning: 'peer-checked:after:bg-body-light',
//     danger: 'peer-checked:after:bg-body-light',
//     disabled: 'bg-disable cursor-not-allowed',
//   };
//   const switchSizeStyle = {
//     xs: 'h-4 w-8',
//     sm: 'h-6 w-12',
//     md: 'h-8 w-16',
//     lg: 'h-9 w-18',
//     xl: 'h-10 w-20',
//   };
//   const switchCircleSizeStyle = {
//     xs: 'h-3 w-3 left-0.5  left-[calc(100%-0.875rem)] ',
//     sm: 'h-4 w-4 left-1  left-[calc(100%-1.25rem)]',
//     md: 'h-5 w-5 left-1.5  left-[calc(100%-1.65rem)]',
//     lg: 'h-6 w-6 left-1.5  left-[calc(100%-1.875rem)]',
//     xl: 'h-7 w-7 left-1.5  left-[calc(100%-2.125rem)]',
//   };
//   const afterswitchCircleSizeStyle = {
//     xs: 'after:h-3 after:w-3 after:left-0.5  peer-checked:after:left-[calc(100%-0.875rem)] ',
//     sm: 'after:h-4 after:w-4 after:left-1  peer-checked:after:left-[calc(100%-1.25rem)]',
//     md: 'after:h-5 after:w-5 after:left-1.5  peer-checked:after:left-[calc(100%-1.65rem)]',
//     lg: 'after:h-6 after:w-6 after:left-1.5  peer-checked:after:left-[calc(100%-1.875rem)]',
//     xl: 'after:h-7 after:w-7 after:left-1.5  peer-checked:after:left-[calc(100%-2.125rem)]',
//   };
//   const borderRadiusStype = {
//     none: '',
//     xs: 'rounded-xs',
//     sm: 'rounded-sm',
//     md: 'rounded-md',
//     lg: 'rounded-lg',
//     xl: 'rounded-xl',
//     full: 'rounded-full',
//   };
//   const borderCircleRadiusStype = {
//     none: '',
//     xs: 'after:rounded-xs',
//     sm: 'after:rounded-sm',
//     md: 'after:rounded-md',
//     lg: 'after:rounded-lg',
//     xl: 'after:rounded-xl',
//     full: 'after:rounded-full',
//   };
//   //   const iconStyle = {
//   //     xs: 'icon-xs',
//   //     sm: 'icon-sm',
//   //     md: 'icon-md',
//   //     lg: 'icon-lg',
//   //     xl: 'icon-xl',
//   //   };
//   //   const iconGapLeftStyle = {
//   //     xs: 'mr-2',
//   //     sm: 'mr-2.5',
//   //     md: 'mr-3',
//   //     lg: 'mr-3.5',
//   //     xl: 'mr-4',
//   //   };
//   //   const iconGapRightStyle = {
//   //     xs: 'ml-2',
//   //     sm: 'ml-2.5',
//   //     md: 'ml-3',
//   //     lg: 'ml-3.5',
//   //     xl: 'ml-4',
//   //   };
//   return (
//     <label htmlFor="ah-checkbox">
//       <input
//         type="checkbox"
//         name=""
//         id="ah-checkbox"
//         className="peer ah-strick-checkbox hidden"
//       />
//       {!icon ? (
//         <div
//           className={`${baseStyle} ${afterStyle} ${switchSizeStyle[size]} ${borderRadiusStype[radius]} ${afterswitchCircleSizeStyle[size]} ${borderCircleRadiusStype[radius]} ${varientStyle[variant]} ${varientCircleStyle[variant]}`}
//         ></div>
//       ) : (
//         <div
//           className={`${baseStyle} ${switchSizeStyle[size]} ${borderRadiusStype[radius]} ${varientStyle[variant]} `}
//         >
//           <div
//             className={`${switchCircleSizeStyle[size]} ${varientCircleStyle[variant]}`}
//           ></div>
//         </div>
//       )}
//     </label>
//   );
// };

// export default Switch;

// const Switch = () => {
//     const [checked, setChecked] = useState(false);
//     return (
//       <div className="flex h-screen w-full items-center justify-center">
//         <div className="m-4">
//           <label className="group">
//             <input
//               type="checkbox"
//               className="peer hidden"
//               onChange={(e) => setChecked(e.target.checked)}
//             />
//             <div className="relative flex h-8 w-24 cursor-pointer items-center justify-center rounded-full bg-gray-600 duration-400 ease-in-out peer-checked:bg-green-400 peer-checked:text-white">
//               <div
//                 className={`absolute flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-400 shadow duration-400 ease-in-out ${checked ? 'left-[calc(100%-1.5rem)] bg-black text-green-400' : 'left-1'}`}
//               >
//                 <svg
//                   className={`absolute top-1/2 left-1/2 h-auto w-2 -translate-1/2 duration-400 ${checked && 'scale-0'}`}
//                   xmlSpace="preserve"
//                   viewBox="0 0 365.696 365.696"
//                   y="0"
//                   x="0"
//                   height="6"
//                   width="6"
//                   xmlnsXlink="http://www.w3.org/1999/xlink"
//                   version="1.1"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g>
//                     <path
//                       data-original="#000000"
//                       fill="currentColor"
//                       d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
//                     ></path>
//                   </g>
//                 </svg>
//                 <svg
//                   className={`absolute top-1/2 left-1/2 h-auto w-2.5 -translate-1/2 duration-400 ${checked ? 'scale-100' : 'scale-0'}`}
//                   xmlSpace="preserve"
//                   viewBox="0 0 24 24"
//                   y="0"
//                   x="0"
//                   height="10"
//                   width="10"
//                   xmlnsXlink="http://www.w3.org/1999/xlink"
//                   version="1.1"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <g>
//                     <path
//                       className=""
//                       data-original="#000000"
//                       fill="currentColor"
//                       d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
//                     ></path>
//                   </g>
//                 </svg>
//               </div>
//             </div>
//           </label>

//           {/* <label className="relative inline-flex cursor-pointer items-center">
//               <input type="checkbox" className="peer sr-only" value="" />
//               <div className="group peer h-10 w-20 rounded-full bg-white ring-2 ring-red-500 duration-300 peer-checked:ring-green-500 after:absolute after:top-1/2 after:left-1 after:flex after:h-6 after:w-6 after:-translate-y-1/2 after:items-center after:justify-center after:rounded-full after:bg-red-500 after:duration-300 peer-checked:after:left-[calc(100%-1.25rem)] peer-checked:after:bg-green-500 peer-hover:after:scale-95"></div>
//             </label> */}
//         </div>
//       </div>
//     );
//   };
