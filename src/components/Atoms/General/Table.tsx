import * as React from "react";
import { Sort } from "./Sort";

interface TableProps {
  headers: string[];
  rows: string[][];
  bgHeaderColor: string;
  bgDarkColor: string;
  bgLightColor: string;
  textHeaderColor: string;
  textRowColor: string;
}

export const Table: React.FC<TableProps> = (
  {
    headers,
    rows,
    bgHeaderColor,
    bgDarkColor,
    bgLightColor,
    textHeaderColor,
    textRowColor,
  }) => 
{
  const [sortedRows, SetSortedRows] = React.useState<string[][]>(rows);
  const [sortBy, SetSortBy] = React.useState<string>('');
  const [sortDirection, SetSortDirection] = React.useState<'asc' | 'desc'>('asc');

  React.useEffect(() => 
  {
    if (sortBy) {
      const sorted = [...rows].sort((a, b) => 
      {
        const index = headers.indexOf(sortBy);
        if (index === -1) return 0;

        const aValue = a[index];
        const bValue = b[index];

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
      SetSortedRows(sorted);
    }
  }, [sortBy, sortDirection, rows, headers]);

  const HandleSortChange = (sortBy: string, direction: 'asc' | 'desc') => 
  {
    SetSortBy(sortBy);
    SetSortDirection(direction);
  };

  return (
    <div>
      <Sort columns={headers} onSortChange={HandleSortChange} />
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="border border-gray-300 p-2"
                style={{ color: textHeaderColor, backgroundColor: bgHeaderColor }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody style={{ color: textRowColor }}>
          {sortedRows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              style={rowIndex % 2 === 0 ? { backgroundColor: bgLightColor } : {}}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border border-gray-300 p-2"
                  style={rowIndex % 2 !== 0 ? { backgroundColor: bgDarkColor } : {}}
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
