import React, { useState, useEffect } from 'react';
import { Button } from '../Atoms/Inputs/Button';
import { MdWarningAmber, MdOutlineCheck, MdOutlineCancel } from 'react-icons/md';
import { ButtonVariants } from '../../stories/Atoms/Inputs/Button.stories';

interface SweetAlertProps {
  show: boolean;
  type: 'success' | 'warning' | 'danger';
  label: string;
  text: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const SweetAlert: React.FC<SweetAlertProps> = ({ show, type, onConfirm, onCancel, label, text }) => {
  const [modal, toggleModal] = useState<boolean>(show);

  useEffect(() => {
    toggleModal(show);
  }, [show]);

  let icon;
  let confirmButtonProps = ButtonVariants.secondary;

  switch (type) {
    case 'success':
      icon = <MdOutlineCheck className='text-[90px] text-emerald-500' />;
      confirmButtonProps = ButtonVariants.success;
      break;
    case 'warning':
      icon = <MdWarningAmber className='text-[90px] text-orange-500' />;
      confirmButtonProps = ButtonVariants.warning;
      break;
    case 'danger':
      icon = <MdOutlineCancel className='text-[90px] text-rose-500' />;
      confirmButtonProps = ButtonVariants.danger;
      break;
    default:
      break;
  }

  const onConfirmHandler = () => {
    toggleModal(false);
    onConfirm && onConfirm();
  };

  const onCancelHandler = () => {
    toggleModal(false);
    onCancel && onCancel();
  };

  return (
    <div style={{ visibility: modal ? 'visible' : 'hidden' }} className='h-screen w-screen fixed top-0 left-0 z-10'>
      <div style={{ opacity: modal ? '25%' : '0%' }} className='transition-all ease-out duration-200 h-full absolute top-0 left-0 w-full bg-gray-700'></div>
      <div className='h-full w-full grid place-content-center'>
        <div style={{ transform: modal ? 'scale(1)' : 'scale(.01)' }} className='transition-all ease-out duration-200 py-4 px-8 text-center z-20 rounded max-w-[800px] m-auto bg-white z-depth-2'>
          <div className='flex justify-center mb-4'>
            {icon}
          </div>
          <h1 className='font-medium text-3xl py-2'>{label}</h1>
          <p className='text-xl py-2'>{text}</p>
          <div className='flex justify-center space-x-8 py-4'>
            <Button {...confirmButtonProps} label="Continue" onClick={onConfirmHandler} />
            <Button {...ButtonVariants.secondary} label="Cancel" onClick={onCancelHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};
