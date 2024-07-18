import { Select as Selector, useId, SelectProps } from "@fluentui/react-components";
import * as React from "react";

export const SelectOption = (props: SelectProps) => 
{
  const selectId = useId();
  
  return (
    <div className="max-w-sm mx-auto p-4">
      <Selector id={selectId} {...props} />
    </div>
  );
};