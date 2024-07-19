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

  const baseClasses = `
    ${sizeClasses[size]}
    ${weight}
    ${shadow ? 'shadow-md' : ''}
    rounded
    transition-all
    duration-200
    ease-in-out
    flex
    items-center
    justify-center
  `;

  const disabledClasses = `
    cursor-not-allowed text-gray-600 bg-gray-200 border-gray-600
  `;

  const outlinedClasses = `
    bg-white border-2 border-yellow-500 text-yellow-500
    ${hovered ? 'hover:bg-yellow-100 hover:border-yellow-600 hover:text-yellow-600' : ''}
  `;

  const enabledClasses = `
    ${bgColor} ${hovered ? bgHover : ''}
    ${textColor} ${hovered ? textHover : ''}
  `;

  const buttonClasses = [
    baseClasses,
    disabled ? disabledClasses : (outlined ? outlinedClasses : enabledClasses),
  ];

  return (
    <button
      className={buttonClasses.filter((cls) => cls !== '').join(' ')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(ev: any) => !disabled && !loading && onClick && onClick(ev)}
      disabled={disabled || loading}
    >
      {loading ? <div className='spinner-xs mr-2'></div> : icon && <span className={`mr-2 ${disabled ? 'text-gray-600' : ''}`}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
