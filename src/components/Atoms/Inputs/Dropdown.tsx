import React, { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md';

interface Item {
  label: string | React.ReactElement;
  link?: string;
  onClick?: (ev: any) => void;
}

interface DropdownProps {
  label: string | React.ReactElement;
  list?: Item[];
  deployOnHover?: boolean;
  outlined?: boolean;
}

export const Dropdown = ({ label, list, deployOnHover = true, outlined = false }: DropdownProps) => {
  const [dropped, setDrop] = useState(false);

  return (
    <div
      onMouseEnter={() => deployOnHover && setDrop(true)}
      onMouseLeave={() => setDrop(false)}
      className='relative'
    >
      <p
        onClick={() => setDrop(!dropped)}
        className={`${outlined ? 'border-[1px]' : ''} bg-white hover:bg-gray-100 cursor-pointer border-gray-500 rounded px-3 py-2 flex justify-between`}
      >
        <span className='self-center'>
          {label}
        </span>
        <MdArrowDropDown className='text-2xl self-center' />
      </p>
      {dropped && (
        <ul className='shadow absolute mt-1 w-full bg-white border border-gray-200'>
          {list && list.map((item, i) => (
            <li
              key={i}
              className={`${i < list.length - 1 ? 'border-b-[1px]' : ''} px-2 py-2 cursor-pointer text-sm hover:bg-gray-100`}
              onClick={(ev) => item.onClick && item.onClick(ev)}
            >
              {item.link ? (
                <a href={item.link}>{item.label}</a>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
