import React from 'react'

interface PageLoaderProps {
  enabled: boolean;
}

export const PageLoader = ({ enabled }:PageLoaderProps) => {
  return (
    <div style={{ visibility: enabled ? 'visible' : 'hidden' }}>
    {
      enabled &&
      <div className='fixed top-0 left-0 h-screen w-screen grid z-[99]'>
        <img className='place-self-center z-10' src="https://admin.eduscore.net/public/img/logoloader.gif" alt="" />
        <div className='z-0 w-full h-full absolute bg-gray-600/10 blur-[2px]'>

        </div>
      </div>
    }
    </div>
  )
}
