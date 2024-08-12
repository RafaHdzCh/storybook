// src/components/Atoms/General/Table.tsx
import * as React from "react";
import { Sort } from "./Sort";
import { Filter } from "./Filter";

interface TableProps {
  headers: string[];
  rows: string[][];
  bgHeaderColor: string;
  bgDarkColor: string;
  bgLightColor: string;
  textHeaderColor: string;
  textRowColor: string;
}

export const Table: React.FC<TableProps> = ({
  headers,
  rows,
  bgHeaderColor,
  bgDarkColor,
  bgLightColor,
  textHeaderColor,
  textRowColor,
}) => {
  const [sortedRows, setSortedRows] = React.useState<string[][]>(rows);
  const [filteredRows, setFilteredRows] = React.useState<string[][]>(rows);
  const [sortBy, setSortBy] = React.useState<string>('');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');
  const [filterText, setFilterText] = React.useState<string>('');

  React.useEffect(() => 
  {
    let filtered = rows;
    if (filterText) {
      filtered = rows.filter(row => 
        row.some(cell => cell.toLowerCase().includes(filterText.toLowerCase()))
      );
    }
    setFilteredRows(filtered);
  }, [filterText, rows]);

  React.useEffect(() => 
  {
    if (sortBy) 
    {
      const sorted = [...filteredRows].sort((a, b) => 
      {
        const index = headers.indexOf(sortBy);
        if (index === -1) return 0;

        const aValue = a[index];
        const bValue = b[index];

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
      setSortedRows(sorted);
    } 
    else 
    {
      setSortedRows(filteredRows);
    }
  }, [sortBy, sortDirection, filteredRows, headers]);

  const handleSortChange = (sortBy: string, direction: 'asc' | 'desc') => {
    setSortBy(sortBy);
    setSortDirection(direction);
  };

  const handleFilterChange = (filterText: string) => {
    setFilterText(filterText);
  };

  const hasNoResults = sortedRows.length === 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Filter columns={headers} onFilterChange={handleFilterChange} />
        <Sort columns={headers} onSortChange={handleSortChange} />
      </div>
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
          {hasNoResults ? (
            <tr>
              <td colSpan={headers.length} className="text-center py-4 border border-gray-300">
                <div className="bg-gray-100 p-4 rounded text-gray-600">
                  No results available
                </div>
              </td>
            </tr>
          ) : (
            sortedRows.map((row, rowIndex) => (
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
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
