import * as React from "react";
import { LoaderSizeProps } from "react-spinners/helpers/props";
import RSPulseLoader from "react-spinners/PulseLoader";

type SizeClass = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type SpinnerProps = Partial<LoaderSizeProps> & {
  size?: SizeClass | number;
};

const sizeClasses: Record<SizeClass, number> = {
  xs: 5,
  sm: 10,
  md: 15,
  lg: 20,
  xl: 25,
  xxl: 30,
};

export const PulseLoader: React.FC<SpinnerProps> = ({
  size = 'md',
  color = '#36d7b7',
  speedMultiplier = 1,
  ...props
}) => {
  const actualSize = typeof size === 'string' ? sizeClasses[size] : size;
  return (
    <RSPulseLoader 
      size={actualSize}
      color={color}
      speedMultiplier={speedMultiplier}
      {...props}
    />
  );
};