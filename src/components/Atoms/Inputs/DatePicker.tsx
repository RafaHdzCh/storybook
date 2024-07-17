import { DatePicker, DatePickerProps } from "@fluentui/react-datepicker-compat";
import { Field } from "@fluentui/react-components";
import * as React from "react";

export const Default = (props: Partial<DatePickerProps>) => {
  return (
    <Field label="Select a date">
      <DatePicker
        className="max-w-[300px]"
        placeholder="Select a date..."
        {...props}
      />
    </Field>
  );
};