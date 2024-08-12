import * as React from "react";

interface FilterProps {
  columns: string[];
  onFilterChange: (filterText: string) => void;
}

export const Filter: React.FC<FilterProps> = ({ columns, onFilterChange }) => {
  const [filterText, setFilterText] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setFilterText(text);
    onFilterChange(text);
  };

  return (
    <div className="flex-grow mb-4">
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleChange}
        className="px-3 py-2 border rounded w-full"
      />
    </div>
  );
};
