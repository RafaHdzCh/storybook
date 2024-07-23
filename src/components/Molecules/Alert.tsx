import React from 'react'
import { MdWarningAmber, MdDoneOutline, MdErrorOutline, MdOutlineDangerous } from 'react-icons/md'

interface AlertProps {
  title: string;
  type: 'success' | 'warning' | 'danger' | 'info';
  text: string | Iterable<React.ReactNode>;
}

export const Alert = ({ type, text, title }: AlertProps) => {

  let color
  let icon

  switch (type) {
    case 'success':
      color = 'text-emerald-700 bg-emerald-100 border-emerald-400'
      icon = <MdDoneOutline />
      break;

    case 'warning':
      color = 'text-amber-700 bg-amber-100 border-amber-400'
      icon = <MdWarningAmber />
      break;

    case 'danger':
      color = 'text-rose-700 bg-rose-100 border-rose-400'
      icon = <MdOutlineDangerous />
      break;

    case 'info':
      color = 'text-sky-700 bg-sky-200/60 border-sky-400'
      icon = <MdErrorOutline />
      break;
  
    default:
      break;
  }

  return (
    <div className={color + ' border-[1px] p-4 rounded-lg flex space-x-3'}>
      <div className='text-2xl mt-0.5'>
        {icon}
      </div>
      <div>
        <p className='text-xl font-bold'>
          {title}
        </p>
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}
