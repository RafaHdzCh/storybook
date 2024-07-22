import React, { useState } from 'react';
import { PulseLoader } from 'react-spinners';

interface ButtonProps {
  label: string;
  bgColor?: string;
  bgHover?: string;
  textColor?: string;
  textHover?: string;
  outlineColor?: string;
  outlineHover?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  icon?: any;
  shadow?: boolean;
  loading?: boolean;
  disabled?: boolean;
  weight?: 'font-thin' | 'font-light' | 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold' | 'font-extrabold' | 'font-black';
  outlined?: boolean;
  onClick?: (ev: any) => void;
}

const sizeClasses = {
  xs: 'px-4 text-xs',
  sm: 'px-5 text-sm',
  md: 'px-6 text-base',
  lg: 'px-8 text-lg',
  xl: 'px-8 text-xl',
};

export const Button: React.FC<ButtonProps> = ({
  label: children,
  size = 'sm',
  weight = 'font-medium',
  bgColor = '#eab308',
  bgHover = '#d97706',
  textColor = '#fefce8',
  textHover = '#fef08a',
  outlineColor = '#eab308',
  outlineHover = '#d97706', 
  outlined = false,
  loading = false,
  disabled = false,
  shadow = true,
  icon,
  onClick,
}: ButtonProps) => {
  const [hovered, SetHovered] = useState(false);

  const HandleMouseEnter = () => 
  {
    SetHovered(true);
  };

  const HandleMouseLeave = () => 
  {
    SetHovered(false);
  };

  const baseClasses = `
    ${sizeClasses[size]}
    ${weight}
    ${shadow ? 'shadow-md' : ''}
    ${outlined ? 'border-2' : ''}
    ${disabled || loading ? 'cursor-not-allowed' : ''}
    rounded
    transition-all
    duration-200
    ease-in-out
    flex
    items-center
    justify-center
  `;

  const styles = {
    backgroundColor: disabled || loading ? '#e5e7eb' : (hovered ? bgHover : bgColor),
    color: disabled || loading ? '#4b5563' : (hovered ? textHover : textColor),
    borderColor: disabled || loading ? '#4b5563' : (hovered ? outlineHover : outlineColor),
  };

  return (
    <button
      className={baseClasses}
      style={styles}
      onMouseEnter={HandleMouseEnter}
      onMouseLeave={HandleMouseLeave}
      onClick={(ev: any) => !disabled && !loading && onClick && onClick(ev)}
      disabled={disabled || loading}
    >
       {loading ? <PulseLoader className='mr-4' size={5} color='#4b5563'/> : icon && <span className={`mr-2}`}>{icon}</span>}
      <span className='py-1'>{children}</span>
    </button>
  );
};
