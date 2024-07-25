import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

interface Option 
{
  value: string;
  label: string;
}

interface DropdownProps 
{
  label: string | React.ReactElement;
  options?: Option[];
  deployOnHover?: boolean;
  outlined?: boolean;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
}

export const Dropdown = (
  { 
    label, 
    options, 
    deployOnHover = true, 
    outlined = false,
    bgColor = "#cffafe",
    textColor = "#0369a1",
    hoverBgColor = "#bae6fd",
    hoverTextColor = "#075985",

  }: DropdownProps) => 
{
  const [dropped, setDrop] = useState(false);
  const [hover, SetHover] = useState(false);


  const normalStyle =
  {
    backgroundColor: bgColor,
    color: textColor,
  };
  const hoverStyle =
  {
    backgroundColor: hoverBgColor,
    color: hoverTextColor,
  };

  return (
    <div
      onMouseEnter={() => {SetHover(true); setDrop(true)}}
      onMouseLeave={() => {SetHover(false); setDrop(false)}}
      className='relative'
    >
      <p
        onClick={() => setDrop(!dropped)}
        className={`${outlined ? 'border-[1px]' : ''} bg-white hover:bg-gray-100 cursor-pointer border-gray-500 rounded px-3 py-2 flex justify-between`}
        style={hover ? hoverStyle : normalStyle}
      >
        <span className='self-center'>
          {label}
        </span>
        <MdArrowDropDown className='text-2xl self-center' />
      </p>
      {dropped && options && (
        <ul className='shadow absolute mt-1 w-full bg-white border border-gray-200'>
          {options.map((option, i) => (
            <li
              key={i}
              className={`${i < options.length - 1 ? 'border-b-[1px]' : ''} px-2 py-2 cursor-pointer text-sm hover:bg-gray-100`}
            >
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
