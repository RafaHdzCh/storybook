import React, { useState } from 'react'

interface ButtonProps {
  Text: string;
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
  xl: 'px-8 text-xl'
}

export const Button = (
  { Text: children, 
    outlined,
    bgColor, 
    bgHover, 
    weight, 
    size, 
    icon, 
    loading, 
    disabled, 
    shadow, 
    textColor, 
    textHover, 
    onClick }: ButtonProps) => 
  {
  const [hoverStyle, SetHoverSyle] = useState<boolean>(false)

  const HandleMouseEnter = () => 
  {
    SetHoverSyle(true)
  }

  const HandleMouseLeave = () => 
  {
    SetHoverSyle(false)
  }

  const styles = `
    
    ${size ? `${sizeClasses[size]}` : `${sizeClasses["sm"]}`}
    ${weight ? `${weight}` : 'font-medium'}
    ${textColor ? `${textColor}` : 'text-gray-950'}
    ${textHover ? `${textHover}` : 'text-gray-950'}
    ${bgColor ? `${bgColor}` : "'bg-yellow-500'"}
    ${hoverStyle ? `${bgHover}` : "'bg-yellow-500'"}
    ${outlined ? "border-2 border-gray-950" : "border-none"}
    ${disabled || loading ? 'cursor-not-allowed text-gray-50 bg-gray-200 hover:text-gray-50' : ''}
    ${shadow ? 'shadow-md' : ''}
    rounded
    transition-all
    duration-200
    ease-in-out
    flex
    items-center
    justify-center
  `

  return (
    <button
      className={styles}
      onMouseEnter={HandleMouseEnter}
      onMouseLeave={HandleMouseLeave}
      onClick={(ev: any) => !disabled && !loading && onClick && onClick(ev)}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className='spinner-xs mr-2'></div>
      ) : (
        icon && <span className='mr-2'>{icon}</span>
      )}
      <span>{children}</span>
    </button>
  )
}