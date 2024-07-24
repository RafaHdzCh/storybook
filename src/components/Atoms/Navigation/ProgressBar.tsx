import React from 'react';

interface ProgressBarProps {
  progress: number; // Valor de progreso entre 0 y 100
  color?: string;
  width?: number | string;
  height?: number;
  rounded?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color = '#36d7b7',
  width = '100%',
  height = 4,
  rounded = false,
}) => {
  return (
    <div className="relative w-full bg-gray-200" style={{ width, height }}>
      <div
        className={`absolute top-0 left-0 h-full ${rounded ? 'rounded-full' : ''}`}
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
    </div>
  );
};
