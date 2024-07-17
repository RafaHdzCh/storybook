import React from "react";
import { DatePicker, DatePickerProps } from "@fluentui/react-datepicker-compat";
import { Field } from "@fluentui/react-components";

interface DefaultProps extends Partial<DatePickerProps> {}

export const Default: React.FC<DefaultProps> = (props) => {
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
