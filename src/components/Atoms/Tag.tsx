import * as React from 'react'

export interface TagProps 
{
  label: string;
}

export const Tag = ({ label }: TagProps) => 
{
  const style = `
  bg-rose-400 
  max-w-max 
  text-white 
  p-1 
  px-1.5 
  text-[12px] 
  font-bold`;

  return (
    <div className={style}>{label }</div>
  )
}
