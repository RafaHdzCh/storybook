import React, { useState } from 'react';

interface SortProps 
{
  columns: string[];
  onSortChange: (sortBy: string, direction: 'asc' | 'desc') => void;
}

export const Sort: React.FC<SortProps> = ({ columns, onSortChange }) => 
{
  const [sortBy, setSortBy] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSortChange = (column: string) => 
  {
    const newDirection = sortBy === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortBy(column);
    setSortDirection(newDirection);
    onSortChange(column, newDirection);
  };

  return (
    <div className="flex">
      {
        columns.map((column) => (
        <button
          key={column}
          onClick={() => handleSortChange(column)}
          className="p-2 m-1 border border-gray-300 rounded hover:bg-gray-200"
        >
          Sort by {column} {sortBy === column ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
        </button>
      ))}
    </div>
  );
};
