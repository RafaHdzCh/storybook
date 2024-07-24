import React, { useState, useEffect, useRef } from 'react'
import { Button } from '../../../components/Atoms/Inputs/Button'
import { ButtonVariants } from '../../../stories/Atoms/Inputs/Button.stories';

interface TooltipProps {
    text: string;
    orientation: 'top' | 'left' | 'right' | 'bottom';
    buttonLabel: string;
}

export const Tooltip = (
  { 
    text, 
    orientation = 'top',
    buttonLabel = "Hover me"
  }: TooltipProps) => 
{
  const [tooltipState, toggleTooltip] = useState(false)
  const [height, changeHeight] = useState<number>()
  const [childrenHeight, changeChildrenHeight] = useState<number>()

  const tooltipRef = useRef<any>()
  const childrenRef = useRef<any>()

  useEffect(() => {
    changeHeight(tooltipRef.current.children[0].offsetHeight + 10);
    if (tooltipRef.current.children[0].offsetWidth > childrenRef.current.offsetWidth) {
      changeChildrenHeight(-Math.floor((tooltipRef.current.children[0].offsetWidth - childrenRef.current.offsetWidth) / 2));
    } else {
      changeChildrenHeight(Math.floor((childrenRef.current.offsetWidth - tooltipRef.current.children[0].offsetWidth) / 2));
    }
  }, []);

  let styles = {}
  const popUpStyle = `
    ${tooltipState ? 'visible opacity-100' : 'opacity-0 invisible'} 
    absolute 
    poppins 
    text-[13px] 
    z-depth-1 
    text-white 
    bg-gray-700 
    px-2 
    py-2 
    max-w-[250px] 
    transition-[all] 
    ease-out 
    duration-200 
    delay-100 
    rounded
    `

  const center = Math.floor((childrenRef?.current?.offsetHeight - tooltipRef?.current?.children[0]?.offsetHeight) / 2)

  switch (orientation) 
  {
    case 'top':
      styles = { top: '-' + height + 'px', left: childrenHeight + 'px' }
      break
    case 'left':
      styles = { left: '-' + (tooltipRef?.current?.children[0]?.offsetWidth + 10) + 'px', top: center }
      break
    case 'right':
      styles = { left: (childrenRef?.current?.offsetWidth + 10) + 'px', top: center }
      break
    case 'bottom':
      styles = { bottom: '-' + height + 'px', left: childrenHeight + 'px' }
      break
    default:
      styles = { top: '-' + height + 'px', left: childrenHeight + 'px' }
      break
  }

  return (
    <div ref={tooltipRef} className='relative'>
    {
      <span style={styles} className={popUpStyle}>
        {text}
      </span>
    }
    <div 
      onMouseEnter={() => toggleTooltip(true)} 
      onMouseLeave={() => toggleTooltip(false)} 
      ref={childrenRef} 
      className='max-w-max'
    >
      <Button {...ButtonVariants.info} label={buttonLabel}/>
    </div>
  </div>
  )
}
