import React, { useRef } from 'react'

interface InputProps 
{
  label?: string;
  placeholder?: string;
  type?: 'text' | 'number';
  value?: string;
  disabled?: boolean;
  readonly?: boolean;
  onChange?: (event: any) => void;
}

export const TextInput = (
  { 
    label,
    placeholder, 
    type = 'text', 
    value,
    disabled = false, 
    readonly = false, 
    onChange, 
  }: InputProps) => 
{
  const input = useRef<HTMLInputElement | any>()
  const handleOpenFileInput = () => input?.current?.focus()
  const disabledStyle = "bg-neutral-200 text-neutral-500 cursor-not-allowed"

  return (
    <div className='w-full'>
      <label 
        className='mb-1 block text-lg' 
        onClick={handleOpenFileInput}
      >
        {label}
      </label>
      <input 
        ref={input}
        onChange={onChange && onChange}
        disabled={disabled}
        readOnly={readonly}
        type={type} 
        placeholder={placeholder}
        value={value}
        className=
        {`
          inputStyle
          rounded-lg 
          w-full 
          border-[1px] 
          border-gray-400/70
          py-2 px-3
          ease-out 
          transition-all 
          duration-100
          ${disabled ? disabledStyle : ""}
        `}
      />
    </div>
  )
}
