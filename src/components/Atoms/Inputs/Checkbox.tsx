import React, { useState, useEffect } from 'react'

interface CheckboxProps {
    label?: string;
    checked?: boolean;
    onClick?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ label, checked = false, onClick }: CheckboxProps) => {

    const [check, setChecked] = useState<boolean>()

    useEffect(() => {
      setChecked(checked)
    }, [checked])
  
  return (
    <div className='flex w-full relative'>
        <label className='flex'>

            <input
                onChange={ev => {
                    onClick && onClick(ev);
                    setChecked(!check)
                }
                }
                type='checkbox'
                className='self-center filled-in mt-2 sm:mt-0'
                checked={check}
            />

            <span className='w-full after:border-2 dark:after:border-2 dark:after:border-darkmode-400 after:border-[#5a5a5a] text-gray-500 dark:text-darkmode-300 cursor-pointer pl-4 self-center grow mt-2 sm:mt-0'>
                { label }
            </span>
        </label>

    </div>
  )
}
