import React, { useEffect, useState } from 'react'
import { Section } from './Section'
import { MdClear } from 'react-icons/md'

interface ModalProps 
{
  title: string;
  children: React.ReactNode;
  toggle: boolean;
  width?: string;
  bgColor: string;
  textColor: string;
  onDimiss?: () => void
}

export const Modal = (
  { 
    title,
    children, 
    toggle, 
    width, 
    onDimiss, 
    bgColor = "#ecfccb", 
    textColor = "#4d7c0f" 
  }: ModalProps) => 
{
  const [modal, toggleModal] = useState<boolean>(toggle ?? false)

  useEffect(() => 
  {
    toggleModal(toggle ?? false);

    document.addEventListener('keydown', (ev) => 
    {
      if (ev.key === 'Escape') 
      {
        toggleModal(false);
        onDimiss && onDimiss();
      }
    })
  }, [onDimiss, toggle]);

  const modalClassnames = `
  ${modal ? 'visible' : 'invisible'} 
  fixed transition-[visible] 
  duration-300 
  ease-out grid 
  w-screen 
  bg-gray-800/30 
  overflow-y-scroll 
  min-h-screen 
  top-0 
  left-0 
  h-full 
  z-30
  `;

  const containerClassnames = `
  ${!modal && '-translate-y-[400px]'} 
  ${modal ? 'opacity-100' : 'opacity-0'} 
  transition-all 
  ease-in-out 
  duration-500 
  container 
  relative 
  z-10 
  mx-auto 
  place-self-center
  `;

  const titleStyles = 
  {
    color: textColor,
    maxWidth: width
  }

  return (
    <div className={modalClassnames}>
      <div 
        style={ { opacity: modal ? '100%' : '0%' } } 
        className=' w-full h-full absolute' 
        onClick={() => { toggleModal(false); onDimiss && onDimiss() }} 
      />
      <div 
        style={ titleStyles } 
        className= {containerClassnames}>
        <Section bgColor={bgColor} textColor={textColor} title={title}>
          <MdClear 
            onClick={() => { toggleModal(false); onDimiss && onDimiss() }} 
            className='absolute text-lg cursor-pointer hover:text-gray-800 top-0 right-0 m-2' 
          />
          <div>
            {children}
          </div>
        </Section>
      </div>
    </div>
  )
}
