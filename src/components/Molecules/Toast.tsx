import React, { useState, useEffect, useRef } from 'react'
import { MdDoneAll, MdOutlineCancel, MdErrorOutline } from 'react-icons/md'

interface ToastProps {
  type: 'success' | 'warning' | 'danger'
  text: string;
  timeout: number;
  responsive: 'desktop' | 'mobile';
}

export const Toast: React.FC<ToastProps> = ({ responsive = 'desktop', type, text, timeout }) => {
  const [toast, toggleToast] = useState(false)
  const toastRef = useRef<any>()
  useEffect(() => {
    setTimeout(() => {
      toggleToast(true)
    }, 100)
    setTimeout(() => {
      toggleToast(false)
    }, timeout)
  }, [timeout])

  let styles
  let icon
  switch (type) {
    case 'success':
      styles = 'bg-emerald-500'
      icon = <MdDoneAll className='self-center text-2xl' />
    break;
    
    case 'warning':
      styles = 'bg-orange-500'
      icon = <MdErrorOutline className='self-center text-2xl' />
    break;
    
    case 'danger':
      styles = 'bg-rose-500'
      icon = <MdOutlineCancel className='self-center text-2xl' />
    break;
  
    default:
    break;
  }

  return (
    <div>
      {
        responsive === 'desktop' &&
        <div style={{ visibility: toast ? 'visible' : 'hidden' }} className='transition-all ease-out duration-500 fixed top-[20%] right-[10%]'>
          <div style={{ opacity: toast ? '100%' : '0%', transform: !toast ? 'translateY(150px)' : 'translateY(0px)' }} className={styles + ' sticky transition-all ease-out duration-300 max-w-[400px] flex space-x-4 p-5 z-depth-2 rounded-[2px] text-white'}>
            {icon}
            <p className='montserrat self-center max-w-[300px]'>{text}</p>
          </div>
        </div>
      }
      {
        responsive === 'mobile' &&
        <div style={{ visibility: toast ? 'visible' : 'hidden' }} className='transition-all ease-out duration-500 w-screen -ml-4 z-10 bottom-0 fixed'>
          <div ref={toastRef} style={{ transform: !toast ? 'translateY(400px)' : 'translateY(0px)' }} className={styles + ` z-depth-2 p-5 rounded-[2px] flex space-x-4 text-white sticky transition-all ease-out duration-300`}>
            {icon}
            <p className='montserrat self-center max-w-screen'>{text}</p>
          </div>
        </div>
      }
    </div>
  )
}
