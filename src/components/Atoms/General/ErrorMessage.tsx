import React from 'react';
import { Button } from '../Inputs/Button';
import { ButtonVariants } from "../../../stories/Atoms/Inputs/Button.stories";

export interface ErrorMessageProps 
{
  title: string,
  message: string;
  buttonLabel: string;

  bgColor: string;
  bgModalColor: string;
  titleColor: string;
  textColor: string;
}



export const ErrorMessage: React.FC<ErrorMessageProps> = (
  { 
    title,
    message, 
    buttonLabel,
    bgColor,
    bgModalColor,
    titleColor,
    textColor,
  }) => 
{
  const pageStyle = {backgroundColor: bgColor};
  const modalStyle = {backgroundColor: bgModalColor};
  const titleStyle = {color: titleColor};
  const textStyle = {color: textColor};

  return (
    <div style={pageStyle} className="flex items-center justify-center h-screen w-screen">
      <div style={modalStyle} className="text-center p-4 shadow-md rounded-lg border">

        <h1 style={titleStyle} className="text-2xl font-bold">{title}</h1>

        <p style={textStyle} className="py-4">{message}</p>

        <div className='flex items-center justify-center'>
          <Button {...ButtonVariants.primary} label={buttonLabel} />
        </div>

      </div>
    </div>
  );
};