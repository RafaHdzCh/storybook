import React from 'react'

export interface BadgesProps {
    type: 'warning' | 'info' | 'fail' | 'success',
    label: string;
}

export const Badges = ( {type, label}: BadgesProps) => {

  let defaultStyles = {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    maxWidth: 'min-content',
    fontWeight: 700
  }

  let styles

  switch (type) {
    case 'success':
        styles = {
            ...defaultStyles,
            backgroundColor: 'rgb(187 247 208)',
            color: 'rgb(22 101 52)'
        }
        break;
  
    case 'info':
        styles = {
            ...defaultStyles,
            backgroundColor: 'rgb(186 230 253)',
            color: 'rgb(7 89 133)'
        }
        break;
  
    case 'warning':
        styles = {
            ...defaultStyles,
            backgroundColor: 'rgb(254 215 170)',
            color: 'rgb(154 52 18)'
        }
        break;
  
    case 'fail':
        styles = {
            ...defaultStyles,
            backgroundColor: 'rgb(254 202 202)',
            color: 'rgb(153 27 27)'
        }
        break;
  
    default:
        break;
  }

  return (
    <div style={styles} className='rounded-full'>
        {label}
    </div>
  )
}
