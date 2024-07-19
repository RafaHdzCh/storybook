import React from 'react'

interface sectionProps {
    title: string;
    children: any;
    className?: string;
}

export const Section = ( { title, children, className }: sectionProps) => {
  return (
    <div className={className + ' bg-white shadow-md p-6 -mx-8 sm:mx-0 rounded-none sm:rounded-md'}>
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
