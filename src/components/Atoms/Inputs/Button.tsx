import React, { useState } from 'react';
import {PulseLoader} from '../../../components/Atoms/Navigation/PulseLoader';

interface ButtonProps {
  label?: string;
  children?: React.ReactNode;
  bgColor?: string;
  bgHover?: string;
  textColor?: string;
  textHover?: string;
  borderColor?: string;
  borderHover?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'floating';
  icon?: React.ReactNode;
  shadow?: boolean;
  loading?: boolean;
  disabled?: boolean;
  weight?: 'font-thin' | 'font-light' | 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold' | 'font-extrabold' | 'font-black';
  outlined?: boolean;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const sizeClasses = {
  xs: 'px-4 text-xs',
  sm: 'px-5 text-sm',
  md: 'px-6 text-base',
  lg: 'px-8 text-lg',
  xl: 'px-8 text-xl',
  floating: 'w-8 h-8 text-2xl rounded-full' // Added for floating button
};

export const Button: React.FC<ButtonProps> = ({
  label,
  children,
  size = 'sm',
  weight = 'font-medium',
  bgColor = '#eab308',
  bgHover = '#d97706',
  textColor = '#fefce8',
  textHover = '#fef08a',
  borderColor = '#eab308',
  borderHover = '#d97706',
  outlined = false,
  loading = false,
  disabled = false,
  shadow = true,
  icon,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const baseClasses = `
    ${sizeClasses[size]}
    ${weight}
    ${shadow ? 'shadow-md' : ''}
    ${outlined ? 'border-2' : ''}
    ${disabled || loading ? 'cursor-not-allowed bg-neutral-200 text-neutral-500 border-neutral-500' : ''}
    rounded
    transition-all
    duration-200
    ease-in-out
    flex
    items-center
    justify-center
  `;

  const styles = {
    color: hovered ? textHover : textColor,
    backgroundColor: hovered ? bgHover : bgColor,
    borderColor: hovered ? borderHover : borderColor,
  };

  return (
    <button
      className={baseClasses}
      style={disabled ? {} : styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(ev) => !disabled && !loading && onClick && onClick(ev)}
      disabled={disabled || loading}
    >
      {loading ? <PulseLoader className='mr-4' size="xs" color='#4b5563'/> : icon && <span className={`mr-2`}>{icon}</span>}
      <span className='py-1'>{label || children}</span>
    </button>
  );
};
