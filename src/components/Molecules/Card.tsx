import React from 'react'

interface CardProps {
    title: string;
    children: any;
}

export const Card = ( { title, children }:CardProps ) => {
  return (
    <div className='w-full border border-gray-200 rounded-md shadow-sm '>
        <div className='bg-gray-100 text-lg flex justify-center text-center p-3 px-6 leading-6 grow'>
            <h1 className='self-center antialiased'>{title}</h1>
        </div>
        <section className='p-3 px-6 mt-2'>
            {children}
        </section>
    </div>
  )
}
