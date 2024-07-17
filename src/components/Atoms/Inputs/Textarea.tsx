import React, { useRef, useState, useEffect } from 'react';

interface TextareaProps {
  text?: string;
  rows?: number;
  charactersLimit?: number;
  charactersCounter?: boolean;
  placeholder?: string;
  onChange?: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({
  text = '',
  rows = 3,
  placeholder,
  onChange,
  charactersLimit,
  charactersCounter,
}: TextareaProps) => {
  const [counter, setCounter] = useState<number>(text.length);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setCounter(text.length);
  }, [text]);

  const handleChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(ev);
    }
    setCounter(ev.target.value.length);
  };

  return (
    <div className="w-full">
      <textarea
        defaultValue={text}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={charactersLimit}
        ref={textareaRef}
        className="p-4 textarea inputStyle w-full"
        rows={rows}
      />
      <div className="text-sm pt-sans ease-out duration-100 text-right">
        {charactersLimit ? (
          <p>{counter}/{charactersLimit}</p>
        ) : (
          charactersCounter && <p>{counter} Characters</p>
        )}
      </div>
    </div>
  );
};
