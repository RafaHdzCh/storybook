import React from 'react'

interface MenuProps {
  children: string;
  link: string;
}

export const MenuLink = ( { children, link }:MenuProps ) => {
  return (
    <a href={link} className='block antialiased pl-14 pr-6 py-1.5 hover:bg-gray-100 transition-colors'>{children}</a>
  )
}
