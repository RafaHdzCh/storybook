import React, { useRef, useState } from 'react'

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'number';
  value?: string;
  disabled?: boolean;
  readonly?: boolean;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({
  label,
  placeholder,
  type = 'text',
  value: propValue,
  disabled = false,
  readonly = false,
  onChange,
  maxLength,
}: InputProps) => {
  const [value, setValue] = useState<string | undefined>(propValue);
  const input = useRef<HTMLInputElement | null>(null);
  const handleOpenFileInput = () => input?.current?.focus();
  const disabledStyle = "bg-neutral-200 text-neutral-500 cursor-not-allowed";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className='w-full'>
      {label && (
        <label
          className='mb-1 block text-lg'
          onClick={handleOpenFileInput}
        >
          {label}
        </label>
      )}
      <input
        ref={input}
        onChange={handleChange}
        disabled={disabled}
        readOnly={readonly}
        type={type}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
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
  );
}
