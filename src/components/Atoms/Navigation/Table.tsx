import React from 'react'

interface RowProps {
    children: any;
}

interface TableProps {
    children: any;
}

export const Row = ( { children }: RowProps) => {
  return <tr className=''>{children}</tr>
}

export const Table = ( { children }: TableProps) => {
  return (
    <table className='w-full'>
        {children}
    </table>
  )
}
