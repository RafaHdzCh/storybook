import { Field } from "@fluentui/react-components";
import * as React from "react";

const styles = `
  mt-20
  mb-0
`;

type ProgressBarProps = {
  className?: string;
  shape: 'rounded' | 'square';
  thickness: 'small' | 'large';
  value: number;
};

export const ProgressBar = ({ className, shape, thickness, value }: ProgressBarProps) => {
  const containerClasses = `
    ${className || ''}
    ${shape === 'rounded' ? 'rounded-full' : ''}
    bg-blue-500
    ${thickness === 'small' ? 'h-2' : 'h-4'}
    relative
    overflow-hidden
  `;

  const progressWidth = `${value}%`;

  return (
    <div className={containerClasses}>
      <div className="absolute top-0 left-0 bg-white" style={{ width: progressWidth }} />
    </div>
  );
};

export const Shape = () => {
  const [progressValue, setProgressValue] = React.useState(50); // Valor inicial

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setProgressValue(newValue);
  };

  return (
    <div>
      <Field validationMessage="Rounded ProgressBar" validationState="none">
        <ProgressBar className={styles} shape="rounded" thickness="large" value={progressValue} />
      </Field>
      <input
        type="range"
        min="0"
        max="100"
        value={progressValue}
        onChange={handleSliderChange}
        style={{ width: '200px', marginTop: '10px' }}
      />
      <p>Valor: {progressValue}</p>
    </div>
  );
};
