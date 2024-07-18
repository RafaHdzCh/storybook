import React, { useState } from 'react';

interface ButtonProps {
  label: string;
  bgColor?: string;
  bgHover?: string;
  textColor?: string;
  textHover?: string;
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
  bgColor = 'bg-yellow-500',
  bgHover = 'bg-yellow-600', 
  textColor = 'text-yellow-50',
  textHover = 'text-yellow-200',
  outlined = false,
  loading = false,
  disabled = false,
  shadow = true,
  icon,
  onClick,
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonClasses = [
    sizeClasses[size],
    weight,
    bgColor,
    hovered ? bgHover : '',
    textColor,
    hovered ? textHover : '',
    outlined ? 'border-2 border-gray-950' : 'border-none',
    disabled || loading ? 'cursor-not-allowed text-gray-50 bg-gray-200 hover:text-gray-50' : '',
    shadow ? 'shadow-md' : '',
    'rounded',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'flex',
    'items-center',
    'justify-center',
  ];

  return (
    <button
      className={buttonClasses.filter((cls) => cls !== '').join(' ')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(ev: any) => !disabled && !loading && onClick && onClick(ev)}
      disabled={disabled || loading}
    >
      {loading ? <div className='spinner-xs mr-2'></div> : icon && <span className='mr-2'>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
