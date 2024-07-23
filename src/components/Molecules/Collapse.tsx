import React, { useState, useEffect, useRef } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

interface CollapseProps {
    label: string;
    children: any;
    color: string;
}

export const Collapse = ( {label, children, color}: CollapseProps) => {

  const [collapseState, toggleCollapse] = useState(false)
  const [collapseHeight, changeHeight] = useState<number>()
  const collapse = useRef<HTMLDivElement | any>()

  useEffect(() => {
    changeHeight(collapse.current.children[0].offsetHeight)
  }, [])

  return (
    <div className='shadow-md rounded-b'>
      <div 
      onClick={() => toggleCollapse(!collapseState)} 
      style={{backgroundColor: color}} 
      className={`flex cursor-pointer justify-between rounded relative z-10 shadow px-4 py-3`}>
          <h1 className='text-xl text-gray-800'>
              {label}
          </h1>
          <MdArrowForwardIos className={`${collapseState ? '-rotate-90' : 'rotate-90'} ease-out text-gray-800 duration-100 self-center text-xl`} />
      </div>
      <div 
      ref={collapse} 
      style={ {height: collapseState ? collapseHeight + 'px'  : '0px'} } 
      className={`h-full ease-out duration-200 transition-[height] overflow-hidden`}>
          <div className='p-4 bg-gray-100'>
              {children}
          </div>
      </div>
    </div>
  )
}
