import * as React from "react";

interface SortProps {
  columns: string[];
  onSortChange: (sortBy: string, direction: 'asc' | 'desc') => void;
}

export const Sort: React.FC<SortProps> = ({ columns, onSortChange }) => {
  const [sortBy, setSortBy] = React.useState<string>('');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');

  const handleSortChange = (column: string) => {
    const direction = sortBy === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortBy(column);
    setSortDirection(direction);
    onSortChange(column, direction);
  };

  return (
    <div className="text-right mb-4">
      {columns.map((column) => (
        <button
          key={column}
          onClick={() => handleSortChange(column)}
          className="px-2 py-1 mx-1 border rounded bg-gray-200 hover:bg-gray-300"
        >
          {column} {sortBy === column ? (sortDirection === 'asc' ? '🔼' : '🔽') : ''}
        </button>
      ))}
    </div>
  );
};
