import * as React from "react";
import { LoaderSizeProps } from "react-spinners/helpers/props";
import MoonLoader from "react-spinners/MoonLoader";

type SizeClass = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type SpinnerProps = Partial<LoaderSizeProps> & {
  size?: SizeClass | number;
};

const sizeClasses: Record<SizeClass, number> = {
  xs: 15,
  sm: 20,
  md: 35,
  lg: 50,
  xl: 65,
  xxl: 80,
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = '#36d7b7',
  speedMultiplier = 1,
  ...props
}) => {
  const actualSize = typeof size === 'string' ? sizeClasses[size] : size;
  return (
    <MoonLoader
      size={actualSize}
      color={color}
      speedMultiplier={speedMultiplier}
      {...props}
    />
  );
};
