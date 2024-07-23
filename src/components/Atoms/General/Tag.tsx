import * as React from 'react'

export interface TagProps 
{
  label: string;
  bgColor: string;
  textColor: string;
}

export const Tag = ({ label, bgColor, textColor }: TagProps) => 
{
  const style = `
  max-w-max 
  p-1 
  px-1.5 
  text-[12px] 
  font-bold`;

  return (
  <div style={{backgroundColor: bgColor, color: textColor} } className={style}>
    {label}
  </div>
  )
}
