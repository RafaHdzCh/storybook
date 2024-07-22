import React, { useState } from 'react';

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
  borderColor?: string;
  borderHover?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FloatingButton: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  bgColor = '#eab308',
  bgHover = '#d97706',
  textColor = '#fefce8',
  textHover = '#fef08a',
  borderColor = '#eab308',
  borderHover = '#d97706', 
  shadow = true,
  outlined = false,
  disabled = false,
  onClick,
}) => 
{
  const [hovered, SetHovered] = useState(false);

  const HandleMouseEnter = () => 
  {
    SetHovered(true);
  };

  const HandleMouseLeave = () => 
  {
    SetHovered(false);
  };

  const sizeClasses = {
    sm: 'w-6 h-6 text-xl',
    md: 'w-8 h-8 text-2xl',
    lg: 'w-10 h-10 text-3xl',
    xl: 'w-12 h-12 text-4xl',
  };

  const disabledClasses = `
    cursor-not-allowed 
    text-[#4b5563] 
    bg-[#e5e7eb] 
    hover:bg-[#d1d5db] 
    border-[#e5e7eb]
  `;

  const outlinedClasses = `
    ${outlined ? `bg-[${bgColor}}]  border-[${borderColor}]` : ''}
    ${outlined ? `hover:bg-[${bgHover}] hover:border-[${borderHover}]` : ''}
  `;

  const baseClasses = `
    ${sizeClasses[size]} 
    ${shadow ? 'shadow-md' : ''} 
    ${outlined ? "border-2": ''}
    ${disabled  ? 'cursor-not-allowed' : ''}
    rounded-full 
    transition-all 
    duration-200 
    ease-in-out 
    flex 
    items-center 
    justify-center
  `;

  const styles = {
    backgroundColor: disabled ? '#e5e7eb' : (hovered ? bgHover : bgColor),
    color: disabled ? '#4b5563' : (hovered ? textHover : textColor),
    borderColor: disabled ? '#4b5563' : (hovered ? borderHover : borderColor),
  };

  return (
    <button
      onClick={(ev) => (onClick && !disabled) && onClick(ev)}
      className={baseClasses}
      disabled={disabled}
      onMouseEnter={HandleMouseEnter}
      onMouseLeave={HandleMouseLeave}
      style={styles}
    >
      {children}
    </button>
  );
};
