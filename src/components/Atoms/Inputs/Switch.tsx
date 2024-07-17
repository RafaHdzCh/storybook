import React, { useState, useEffect } from 'react';

interface SwitchOption {
    label: string;
    value: string | number;
}

interface SwitchProps {
    options: SwitchOption[];
    onChange?: (selectedValue: string | number) => void;
    selectedValue?: string | number;
    disabled?: boolean;
}

export const Switch = ({ options, onChange, selectedValue, disabled }: SwitchProps) => {
    const [selected, setSelected] = useState<string | number | undefined>(selectedValue);

    useEffect(() => {
        setSelected(selectedValue);
    }, [selectedValue]);

    const handleInputChange = (value: string | number) => {
        setSelected(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className="switch">
            {options.map(option => (
                <label key={option.value} className='text-gray-400 p-2'>
                    <input
                        className='mx-1'
                        value={option.value}
                        disabled={disabled}
                        onChange={() => handleInputChange(option.value)}
                        type="radio"
                        checked={selected === option.value}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
};
