import React from 'react';

export interface AvatarProps 
{
  src: string; 
  size?: number; 
  shape?: 'circle' | 'square';
}

export const Avatar: React.FC<AvatarProps> = (
  {
    src,
    size = 50, //px
    shape = 'circle', 
  }) => 
{
  const borderRadius = shape === 'circle' ? '50%' : '0';

  const style = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: borderRadius,
    objectFit: 'cover' as 'cover', 
    overflow: 'hidden' as 'hidden', 
  };

  return (
    <div
      style={{
        width: style.width,
        height: style.height,
        borderRadius: style.borderRadius,
        overflow: style.overflow,
      }}
    >
      <img src={src} alt="Avatar" style={style} />
    </div>
  );
};