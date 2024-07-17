import React from 'react'

export interface BadgesProps {
    type: 'warning' | 'info' | 'fail' | 'success',
    label: string;
}

export const Badges = ( {type, label}: BadgesProps) => {

  const defaultStyles = `
  px-8 py-2
  max-w-min
  font-bold
  rounded-full
`;

  let styles;

  switch (type) {
    case 'success':
        styles = `${defaultStyles} bg-green-200 text-green-800`
        break;
    case 'info':
        styles = `${defaultStyles} bg-blue-200 text-blue-800`
        break;
  
    case 'warning':
        styles = `${defaultStyles} bg-yellow-200 text-yellow-800`
        break;
  
    case 'fail':
        styles = `${defaultStyles} bg-red-200 text-red-800`
        break;
  
    default:
        break;
  }

  return (
    <div className={styles}>
        {label}
    </div>
  )
}
