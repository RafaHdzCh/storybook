import React from 'react'

interface ColorPaletteProps {
  primary: string;
  secondary: string;
  background: string;
  primaryText: string;
  complementary: string;
  secondaryText: string;
}

export const ColorPalette:React.FC<ColorPaletteProps> = ({ primary, secondary, primaryText, complementary, background, secondaryText }) => {
  return (
    <div style={{ backgroundColor: background }} className='relative h-[200px] w-[150px] overflow-hidden rounded-md shadow-md'>
      <div style={{ backgroundColor: secondary }} className='w-full shadow'>
        <p style={{ color: secondaryText }} className='pl-2 py-0.5 font-medium text-xs text-white'>Logo</p>
      </div>
      <div className='h-[125px] overflow-hidden'>
        <div className='px-2.5 mx-auto mt-2.5'>
          <div style={{ borderColor: complementary, backgroundColor: primary }} className='px-2 py-1 border-l-[3px] shadow w-full rounded-sm'>
            <div style={{ backgroundColor: primaryText, opacity: '40%' }} className='w-11/12 h-1 my-1 rounded-full' />
            <div style={{ backgroundColor: primaryText, opacity: '40%' }} className='w-7/12 h-1 my-1 rounded-full' />
            <div style={{ backgroundColor: primaryText, opacity: '40%' }} className='w-4/12 h-1 my-1 rounded-full' />
            <div style={{ backgroundColor: primaryText, opacity: '40%' }} className='w-8/12 h-1 my-1 rounded-full' />
          </div>
        </div>
        <div className='px-2.5 mx-auto mt-2.5'>
          <div style={{ borderColor: complementary, backgroundColor: primary }} className='px-2 py-1 border-l-[3px] shadow w-full rounded-sm'>
            <div style={{ backgroundColor: primaryText, opacity: '40%' }} className='w-10/12 h-1 my-1 rounded-full' />
            <div style={{ backgroundColor: primaryText, opacity: '40%' }} className='w-5/12 h-1 my-1 rounded-full' />
            <div style={{ backgroundColor: primaryText, opacity: '40%' }} className='w-8/12 h-1 my-1 rounded-full' />
            <div style={{ backgroundColor: primaryText, opacity: '40%' }} className='w-3/12 h-1 my-1 rounded-full' />
          </div>
        </div>
      </div>
      <div style={{ color: secondaryText, backgroundColor: secondary }} className='h-4 text-[8px] flex justify-end z-10 absolute bottom-0 w-full'>
        <p className='self-center px-2 pt-0.5'>
          ©Copyright 2022
        </p>
      </div>
      <div style={{ backgroundColor: secondary, opacity: '80%' }} className='shadow container mx-auto h-12 w-full'>
        <div className='grid grid-cols-2'>
          <div className='mt-1.5 ml-3'>
            <div style={{ backgroundColor: secondaryText, opacity: '60%' }} className='w-9/12 h-1 my-1 rounded-full' />
            <div style={{ backgroundColor: secondaryText, opacity: '60%' }} className='w-5/12 h-1 my-1 rounded-full' />
            <div style={{ backgroundColor: secondaryText, opacity: '60%' }} className='w-8/12 h-1 my-1 rounded-full' />
          </div>
          <div className='mt-2.5'>
            <div style={{ backgroundColor: secondaryText, opacity: '60%' }} className='w-8/12 h-1 my-1 rounded-full' />
            <div style={{ backgroundColor: secondaryText, opacity: '60%' }} className='w-6/12 h-1 my-1 rounded-full' />
          </div>
        </div>
      </div>
    </div>
  )
}
