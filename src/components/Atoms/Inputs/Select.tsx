import * as React from "react";
import { Select as FluentSelect, useId } from "@fluentui/react-components";
import type { SelectProps } from "@fluentui/react-components";

export const Select = (props: SelectProps) => 
{
  const selectId = useId();

  return (
    <React.Fragment>
      <label className="block text-gray-700" htmlFor={selectId}>Select a color...</label>

        <FluentSelect
          className="bg-gray-100 border border-gray-800 w-full my-4 mr-80"
          id={selectId}
          {...props}
        >
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
        </FluentSelect>
    </React.Fragment>
  );
};
