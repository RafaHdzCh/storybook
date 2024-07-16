import React from "react";

const baseInput = "border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500";

export default function Input({ placeholder }) 
{
  return (
    <input
      className={`${baseInput}`}
      type="text"
      placeholder={placeholder}
    />
  );
}