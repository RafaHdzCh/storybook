import React, { useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  bgHover?: string;
  textColor?: string;
  textHover?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  className?: string;
  outlined?: boolean;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FloatingButton: React.FC<ButtonProps> = ({
  children,
  outlined,
  bgColor = 'bg-yellow-400',
  bgHover = 'hover:bg-yellow-500',
  textColor = 'text-white',
  textHover = 'hover:text-white',
  size = 'md',
  disabled = false,
  className = '',
  onClick,
}) => {
  const [hoverStyle, setHoverStyle] = useState(false);

  const handleMouseEnter = () => 
  {
    setHoverStyle(true);
  };

  const handleMouseLeave = () => 
  {
    setHoverStyle(false);
  };

  let fontSize;
  switch (size) 
  {
    case 'sm':
      fontSize = 'text-xs';
      break;
    case 'md':
      fontSize = 'text-base';
      break;
    case 'lg':
      fontSize = 'text-lg';
      break;
    case 'xl':
      fontSize = 'text-xl';
      break;
    default:
      fontSize = 'text-base';
      break;
  }

  const buttonStyles = `
    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
    ${fontSize}
    ${outlined ? 'border-2' : 'border-0'}
    ${outlined ? (hoverStyle ? `border-${bgHover.split(':')[1]} ${bgHover}` : `border-${bgColor.split(':')[1]} ${bgColor}`) : `${bgColor} ${bgHover}`}
    ${hoverStyle ? `${textHover}` : `${textColor}`}
    ${disabled ? 'bg-gray-300' : ''}
    ${disabled ? 'text-gray-400' : ''}
    ${disabled ? 'hover:bg-gray-300' : ''}
    ${disabled ? 'hover:text-gray-400' : ''}
    ${className}
  `;

  return (
    <button
      onClick={(ev) => (onClick && !disabled) && onClick(ev)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`floating-button z-depth-1 ${buttonStyles}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
