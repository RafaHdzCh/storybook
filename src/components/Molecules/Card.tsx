import React from 'react'

interface CardProps {
    title: string;
    children: any;
    titleTextColor: string,
    titleBgColor: string,
    containerTextColor: string,
    containerBgColor: string;
}

export const Card = ( 
  { 
    title, 
    children, 
    titleTextColor, 
    titleBgColor, 
    containerTextColor, 
    containerBgColor 
  }:CardProps ) => 
  {
    
  const titleContainerStyles = 
  {
    backgroundColor: titleBgColor,
    color: titleTextColor,
  };

  const childrenContainerStyles = 
  {
    backgroundColor: containerBgColor,
    color: containerTextColor,
  };
  return (
    <div className='w-full border rounded-md shadow-sm '>
        <div style={titleContainerStyles} className='text-lg flex justify-center text-center p-3 px-6 leading-6 grow'>
            <h1 className='self-center antialiased'>{title}</h1>
        </div>
        <section style={childrenContainerStyles} className='p-3 px-6'>
            {children}
        </section>
    </div>
  )
}
