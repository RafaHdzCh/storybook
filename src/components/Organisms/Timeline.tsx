import React from 'react'
import moment from 'moment'

interface dates {
  date: Date;
  description: string;
}

interface TimelinePros {
  dates: dates[];
  order: 'asc' | 'desc'
}

export const Timeline: React.FC<TimelinePros> = ({ dates, order }) => {
  return (
    <div>
      {
        dates.sort((a: any, b: any) => {
          if (order === 'asc') {
            return b.date - a.date
          } else {
            return a.date - b.date
          }
        }).map((date) => <div className='relative pb-6 h-full border-l-2 border-dotted border-purple-400'>
          <div className='h-4 w-4 absolute inset-y-0 -left-[9px] border-[2px] bg-white border-purple-400 rounded-full' />
          <p className='ml-8 mb-2 text-xs text-purple-600'>
            {
              moment(date.date).isSame(new Date(), 'day')
                ? moment(new Date(date.date), 'HH:mm').format('HH:mm')
                : moment(date.date).isSame(new Date(), 'year')
                  ? moment(new Date(date.date), 'DD MMMM HH:mm').format('DD MMMM HH:mm')
                  : moment(new Date(date.date), 'DD MMMM YYYY HH:mm').format('DD MMMM YYYY HH:mm')
            }
          </p>
          <div className='ml-8 bg-slate-100 shadow-md text-sm p-4 rounded-md'>
            <p className=''>
              {date.description}
            </p>
          </div>
          <hr className='border-b-[1px] rounded-full border-dashed border-purple-200 mt-8 ml-8' />
        </div>)
      }
    </div>
  )
}
