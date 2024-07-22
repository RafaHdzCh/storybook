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
    <React.Fragment>
      <label className="block text-gray-700" htmlFor={selectId}>{label}</label>

      <FluentSelect
        className="bg-gray-100 border border-gray-800 w-full my-4 mr-80"
        id={selectId}
        defaultValue={validDefaultValue}
        {...restProps}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </FluentSelect>
    </React.Fragment>
  );
};
