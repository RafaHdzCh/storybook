import React, { useRef } from 'react'

interface InputProps {
    label?: string;
    placeholder?: string;
    type?: 'text' | 'number';
    value?: string;
    disabled?: boolean;
    readonly?: boolean;
    className?: string;
    onChange?: (event: any) => void;
}

export const TextInput = ({ label, placeholder, value, className, type = 'text', onChange, disabled = false, readonly = false }: InputProps) => {
  const input = useRef<HTMLInputElement | any>()

  const handleOpenFileInput = () => {
    input?.current?.focus()
  }

  return (
    <div className='w-full'>
        <label className='mb-1 block text-lg' onClick={handleOpenFileInput}>{label}</label>
        <input ref={input}
        onChange={onChange && onChange}
        className={`
        inputStyle
        rounded-lg 
        w-full 
        border-[1px] 
        border-gray-400/70
        py-2 px-3
        ease-out transition-all duration-100
        ${className} `}
        disabled={disabled}
        readOnly={readonly}
        value={value}
        type={type} placeholder={placeholder}/>
    </div>
  )
}
