import React, { useState, useEffect } from 'react'
import { MdMenu } from 'react-icons/md'

interface SidebarProps {
  actived?: boolean;
  children?: React.ReactElement;
  onDimiss?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ actived, children, onDimiss }) => {
  const [sidebar, toggle] = useState<boolean>()

  useEffect(() => {
    toggle(actived)
  }, [actived])

  return (
    <div className='w-screen z-30 h-screen fixed top-0 left-0'>
      <div onClick={() => { toggle(false); onDimiss && onDimiss() }} style={{ opacity: sidebar ? '100%' : '0%' }} className=' transition ease-out duration-300 h-full w-full bg-gray-700/40' />
      <div style={{ transform: sidebar ? 'translateX(0)' : 'translateX(-340px)' }} className='transition ease-out duration-300 z-10 w-[300px] bg-white z-depth-2 h-full fixed top-0 left-0'>
        <div onClick={() => { toggle(false); onDimiss && onDimiss() }} className='cursor-pointer flex space-x-2 mt-2 ml-2'>
          <MdMenu className='self-center text-2xl' />
          <p className='self-center text-xl font-bold'>Menú</p>
        </div>
        <img className='px-4 py-6' src="https://eduscore.net/static/media/logo_eduscore.76b56a4c.png" alt="" />
        <hr className='border-[1px] border-gray-100' />
        {children}
      </div>
    </div>
  )
}
