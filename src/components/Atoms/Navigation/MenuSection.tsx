import React, { useEffect, useState, useRef } from 'react'
import { MdFolderOpen, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { MenuLink } from './MenuLink'

interface MenuLinkInterface {
  label :string;
  link: string;
}

interface MenuProps {
  label: string;
  links?: MenuLinkInterface[];
  collapsed?: boolean;
}

export const MenuSection = ({ label, links, collapsed }:MenuProps) => {
  const [collapse, toggleCollapse] = useState(collapsed ?? false)
  const [collapseHeight, changeHeight] = useState<number>()

  const collapseRef = useRef<HTMLDivElement | any>()

  useEffect(() => {
    changeHeight(collapseRef.current.children[0].offsetHeight)
    toggleCollapse(collapsed ?? false)
  }, [collapsed])

  return (
    <div>
      <a onClick={() => toggleCollapse(!collapse)} className='text-lg cursor-pointer hover:bg-gray-100 flex justify-between font-bold px-6 py-3'>
        <div className='flex space-x-2'>
          <MdFolderOpen className='self-center text-xl' />
          <p className='antialiased self-center relative top-[1px]'>
            {label}
          </p>
        </div>
        {
          links &&
          <MdOutlineKeyboardArrowRight className={`${collapse && '-rotate-180'} ease-out duration-300 self-center text-xl`} />
        }
      </a>
      <div ref={collapseRef} style={ { height: collapse ? collapseHeight + 'px' : '0px' } } className='h-full ease-out duration-300 transition-[height] overflow-hidden'>
        <div>
        {
          links &&
          links.map((link: MenuLinkInterface) => <MenuLink link={link.link}>{link.label}</MenuLink>)
        }
        </div>
      </div>
    </div>
  )
}
