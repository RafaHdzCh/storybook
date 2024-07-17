import React, { useState } from 'react'

interface ButtonProps {
  children: string;
  bgColor?: string;
  bgHover?: string;
  textColor?: string;
  textHover?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  icon?: any;
  style?: any;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  weight?: number;
  outlined?: boolean;
  onClick?: (ev: any) => void;
}

export const Button = ({ style, children, outlined, bgColor = 'rgb(245, 158, 11)', bgHover, weight = 500, className, size = 'sm', icon, loading, disabled, textColor = 'white', textHover = 'white', onClick }: ButtonProps) => {
  const [hoverStyle, setHoverSyle] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setHoverSyle(true)
  }

  const handleMouseLeave = () => {
    setHoverSyle(false)
  }

  let fontSize
  let lineHeight
  let padding = {}

  switch (size) {
    case 'xs':
      fontSize = '12px'
      lineHeight = '16px'
      padding = {
        paddingLeft: '1rem',
        paddingRight: '1rem'
      }
      break

    case 'sm':
      padding = {
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem'
      }
      fontSize = '14px'
      lineHeight = '18px'
      break

    case 'md':
      padding = {
        paddingLeft: '1.50rem',
        paddingRight: '1.50rem'
      }
      fontSize = '16px'
      lineHeight = '24px'
      break

    case 'lg':
      padding = {
        paddingLeft: '2rem',
        paddingRight: '2rem'
      }
      fontSize = '18px'
      lineHeight = '28px'
      break

    case 'xl':
      padding = {
        paddingLeft: '2rem',
        paddingRight: '2rem'
      }
      fontSize = '20px'
      lineHeight = '28px'
      break

    default:
      break
  }

  let styles = {
    ...padding,
    color: hoverStyle ? textHover : textColor,
    backgroundColor: hoverStyle ? (bgHover ?? bgColor) : bgColor,
    fontWeight: weight,
    fontSize,
    lineHeight,
    border: ''
  }

  let disabledStyles = {
    ...padding,
    color: 'rgb(156 163 175)',
    backgroundColor: 'rgb(209 213 219)',
    fontWeight: weight,
    fontSize,
    lineHeight,
    border: ''
  }

  if (outlined) {
    styles = {
      ...padding,
      color: hoverStyle ? textHover : textColor,
      backgroundColor: hoverStyle ? 'rgba(102, 102, 102, 0.08)' : 'transparent',
      fontWeight: weight,
      fontSize,
      lineHeight,
      border: '2px solid ' + (hoverStyle ? bgHover : bgColor)
    }
    disabledStyles = {
      ...padding,
      color: 'rgb(156 163 175)',
      backgroundColor: 'rgba(199, 199, 199, 0.4)',
      fontWeight: weight,
      fontSize,
      lineHeight,
      border: '2px solid rgb(209 213 219)'
    }
  }

  return (
    <button
    style={!(disabled || loading) ? { ...styles, ...style } : { ...disabledStyles, ...style }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className={`
    ${className} 
    button
    z-depth-1
    montserrat
    ${(disabled || loading) && ' cursor-not-allowed bg-gray-300 hover:bg-gray-300 text-gray-400 hover:text-gray-400'}
    `}
    onClick={(ev: any) => onClick && onClick(ev)}
    disabled={(disabled || loading)}>
        {
        loading
          ? <div className='spinner-xs mr-0.5 -ml-3'></div>
          : icon && <span className='self-center'>{icon}</span>
        }
        <span className='self-center'>{children}</span>
    </button>
  )
}
