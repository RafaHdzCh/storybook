import React from 'react';
import { BarLoader } from 'react-spinners';

type BarLoaderProps = React.ComponentProps<typeof BarLoader>;

interface LoadingBarProps extends BarLoaderProps 
{
  rounded: boolean,
}

export const LoadingBar: React.FC<LoadingBarProps> = (
  {
    color = '#36d7b7',
    width = 100,
    height = 4,
    rounded = false,
  }) => 
{return <BarLoader className={rounded ? "rounded-full" : ""} color={color} width={width} height={height}/>};