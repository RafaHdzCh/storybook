import React from 'react'

interface ProfileImageProps {
    image: string;
    label?: string;
    size?: string;
    labelSize?: string;
}

export const ProfileImage = ( {image, label, size, labelSize}:ProfileImageProps) => {
  return (
    <div style={{maxWidth: 'max-content'}} className='m-1'>
        <img className='rounded-full z-depth-1' src={image} width={size} height='auto' alt="ProfilePic"/>
        {
          label &&
          <p style={ {fontSize: labelSize} } className='pt-2 text-center pt-sans'>{label}</p>
        }
    </div>
  )
}
