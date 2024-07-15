import React from "react";

export default function Center({children})
{
  return(
    <div className="flex justify-center items-center w-full h-screen">
      {children}
    </div>
  )
}