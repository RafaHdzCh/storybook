import React from 'react'

interface NavbarProps {
  style?: 'color' | 'transparent' | 'blurred';
  position: 'static' | 'fixed'
  backgroundColor?: string;
  children: React.ReactElement
}

export const Navbar: React.FC<NavbarProps> = ({ backgroundColor, position = 'static', style = 'color', children }) => {
  
  let color

  if(style === 'transparent') {
    color = 'transparent'
  } else if(style !== 'blurred') {
    color = backgroundColor
  }
  
  return (
    <nav style={{ position, backgroundColor: color, backdropFilter: style === 'blurred' ? 'blur(2px)' : '' }} className={`w-screen ${ style === 'color' && 'z-depth-1'}`}>
      <div className='container m-auto'>
        {children}
      </div>
    </nav>
  )
}
