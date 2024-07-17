import React, { useState, useEffect } from 'react';

interface RadioProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onClick?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  group: string;
}

export const Radio: React.FC<RadioProps> = ({ label, checked = false, defaultChecked = false, onClick, group }: RadioProps) => {
  const [check, SetCheck] = useState<boolean>(false);

  useEffect(() => 
  {
    SetCheck(checked || defaultChecked || false);
  }, [checked, defaultChecked]);

  const HandleChange = (ev: React.ChangeEvent<HTMLInputElement>) => 
  {
    SetCheck(ev.target.checked);
    onClick && onClick(ev);
  };

  return (
    <div className='flex space-x-2 w-full relative'>
      <label className='flex'>
        <input
          name={group}
          onChange={HandleChange}
          type='radio'
          className='self-center filled-in mt-2 sm:mt-0'
          checked={check}
        />
        <span className='w-full before:border-2 dark:before:border-2 dark:before:border-darkmode-400 before:border-[#5a5a5a] text-gray-500 dark:text-darkmode-300 cursor-pointer pl-4 self-center grow mt-2 sm:mt-0'>
          {label}
        </span>
      </label>
    </div>
  );
};
