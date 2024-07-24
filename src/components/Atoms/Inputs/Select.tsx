import * as React from "react";
import { Select as FluentSelect, useId } from "@fluentui/react-components";
import type { SelectProps } from "@fluentui/react-components";

type Option = 
{
  value: string;
  label: string;
};

interface SelectComponentProps extends SelectProps 
{
  options: Option[];
  label: string;
}

export const Select = (props: SelectComponentProps) => 
{
  const selectId = useId();
  const { options, defaultValue, label, ...restProps } = props;
  const validDefaultValue = options.some(option => option.value === defaultValue) ? defaultValue : options[0]?.value;

  return (
    <div className="flex flex-col items-start">
      <label className="px-40 block text-gray-700" htmlFor={selectId}>{label}</label>

      <FluentSelect
        className="w-full border rounded-md text-gray-700 hover:outline-none hover:ring-2 hover:ring-blue-500"
        id={selectId}
        defaultValue={validDefaultValue}
        {...restProps}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </FluentSelect>
    </div>
  );
};
