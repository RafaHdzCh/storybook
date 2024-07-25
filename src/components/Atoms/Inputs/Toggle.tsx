import React, { useState } from 'react';

export interface ToggleProps 
{
  onToggle?: (isChecked: boolean) => void;
  defaultChecked?: boolean;
  size?: 'small' | 'medium' | 'large';
  handleColor: string;
  bgColor: string;
  bgActiveColor : string;
}

export const Toggle: React.FC<ToggleProps> = (
  {
    onToggle,
    defaultChecked = false,
    size = 'medium',
    handleColor,
    bgColor,
    bgActiveColor,
  }) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

  const handleChange = () => 
  {
    setIsChecked(!isChecked);
    if (onToggle) 
    {
      onToggle(!isChecked);
    }
  };

  const sizeClasses = 
  {
    small: 'w-8 h-4',
    medium: 'w-12 h-6',
    large: 'w-16 h-8',
  };

  const bgStyle = 
  {
    backgroundColor: isChecked ? bgActiveColor : bgColor,
  }

  const handleStyle = 
  {
    backgroundColor: handleColor,
    transform: isChecked ? 'translateX(calc(100% - 2px))' : 'translateX(2px)',
  };


  return (
    <div
      className={`relative inline-flex items-center cursor-pointer ${sizeClasses[size]}`}
      onClick={handleChange}
    >
      <span
        style={bgStyle}
        className="block w-full h-full rounded-full transition-all duration-300"
      />
      <span
        style={handleStyle}
        className="absolute top-0 left-0 flex items-center justify-center w-1/2 h-full rounded-full transition-transform duration-300"
      />
    </div>
  );
};

export default Toggle;
