import React from 'react'

interface sectionProps {
    title: string;
    children: any;
    className?: string;
    bgColor: string;
    textColor: string;
}

export const Section = ( { title, children, className, bgColor = "#f3f4f6", textColor = "#404040" }: sectionProps) => 
{
  const sectionStyles = 
  {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <div style={sectionStyles} className={className + 'shadow-md p-6 -mx-8 sm:mx-0 rounded-none sm:rounded-md'}>
        <h1 className='text-xl font-bold antialiased mb-3'>
          {title}
        </h1>

        <hr className='border-gray-300 mb-3' />
        <React.Fragment>
          {children}
        </React.Fragment>
    </div>
  )
}
