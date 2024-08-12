import * as React from "react";

interface TableProps 
{
  headers: string[];
  rows: string[][];
  bgHeaderColor: string,
  bgDarkColor: string, 
  bgLightColor: string, 
  textHeaderColor: string, 
  textRowColor: string 
}

export const Table: React.FC<TableProps> = (
  { 
    headers, 
    rows, 
    bgHeaderColor, 
    bgDarkColor, 
    bgLightColor, 
    textHeaderColor, 
    textRowColor 
  }) => 
{
  return (
    <div>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            {
              headers.map((header, index) => (
                <th 
                  key={index} 
                  className="border border-gray-300 p-2"
                  style={{color: textHeaderColor, backgroundColor: bgHeaderColor}}
                >
                  {header}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody style={{color: textRowColor}}>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              style={rowIndex % 2 === 0 ? {backgroundColor: bgLightColor} : {}}
            >
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className="border border-gray-300 p-2"
                  style={rowIndex % 2 !== 0 ? {backgroundColor: bgDarkColor} : {}}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
