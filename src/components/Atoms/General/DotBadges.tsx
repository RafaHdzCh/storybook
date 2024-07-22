import React from 'react'

export interface DotBadgesProps {
    label: string;
    color?: string;
}

export const DotBadges = ( {label, color}:DotBadgesProps ) => 
{
  return (
    <div className='flex space-x-2'>
        <div 
          style={{backgroundColor: color}} 
          className='self-center w-3 h-3 rounded-full'
        >
        </div>
        <p className='self-center'>
            {label}
        </p>
    </div>
  )
}
