import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  bgHover?: string;
  textColor?: string;
  textHover?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shadow: boolean;
  disabled?: boolean;
  outlined?: boolean;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FloatingButton: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  bgColor = 'bg-yellow-500',
  bgHover = 'hover:bg-yellow-600',
  textColor = 'text-yellow-500',
  textHover = 'hover:text-yellow-600',
  shadow = true,
  outlined = false,
  disabled = false,
  onClick,
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6 text-xl',
    md: 'w-8 h-8 text-2xl',
    lg: 'w-10 h-10 text-3xl',
    xl: 'w-12 h-12 text-4xl',
  };

  const disabledClasses = `
    cursor-not-allowed text-gray-400 bg-gray-100 hover:bg-gray-200 border-gray-200
  `;

  const outlinedClasses = `
    ${outlined ? 'bg-white border-2 border-yellow-500' : ''}
    ${outlined ? 'hover:bg-yellow-100 hover:border-yellow-600' : ''}
  `;

  const baseClasses = `
    ${sizeClasses[size]} 
    ${disabled ? disabledClasses : `${bgColor} ${bgHover}`}
    ${disabled ? 'text-gray-400' : `${textColor} ${textHover}`}
    ${shadow ? 'shadow-md' : ''} 
    ${outlined && !disabled ? outlinedClasses : ''}
    rounded-full 
    transition-all 
    duration-200 
    ease-in-out 
    flex 
    items-center 
    justify-center
  `;

  return (
    <button
      onClick={(ev) => (onClick && !disabled) && onClick(ev)}
      className={baseClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
