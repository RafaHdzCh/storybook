import React, { useState } from 'react';

export interface SliderProps 
{
  min: number;
  max: number;
  step?: number;
  value: number;
  handleColor: string;
  trackColor: string;
  trackActiveColor: string;
  onChange: (value: number) => void;
  sizeInPixels?: number;
}

export const Slider: React.FC<SliderProps> = (
  { 
    min, 
    max, 
    step = 1, 
    value, 
    handleColor,
    trackColor,
    trackActiveColor,
    onChange, 
    sizeInPixels = 200 
  }) => 
{
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setInternalValue(newValue);
    if (typeof onChange === 'function') {
      onChange(newValue);
    } else {
      console.error('onChange prop is not a function');
    }
  };

  return (
    <div style={{ width: `${sizeInPixels}px`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={internalValue}
        onChange={handleChange}
        style={{
          width: '100%',
          background: `linear-gradient(to right, ${trackActiveColor} 0%, ${trackActiveColor} ${((internalValue - min) / (max - min)) * 100}%, ${trackColor} ${((internalValue - min) / (max - min)) * 100}%, ${trackColor} 100%)`,
          appearance: 'none',
          height: '8px',
          borderRadius: '5px',
          outline: 'none',
        }}
        className="custom-slider"
      />
      <div>{internalValue}</div>
      <style jsx>{`
        .custom-slider::-webkit-slider-thumb 
        {
          -webkit-appearance: none;
          background: ${handleColor};
          width: 20px;
          height: 20px;
          border-radius: 50%;
          cursor: pointer;
        }

        .custom-slider::-moz-range-thumb 
        {
          background: ${handleColor};
          width: 20px;
          height: 20px;
          border-radius: 50%;
          cursor: pointer;
        }

        .custom-slider::-ms-thumb 
        {
          background: ${handleColor};
          width: 20px;
          height: 20px;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
