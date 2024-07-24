import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps 
{
  children?: React.ReactNode; 
}

export const DatePickerComponent: React.FC<DatePickerProps> = ({ children }) => 
{
  return <React.Fragment>{children}</React.Fragment>;
};

export function DayPicker() 
{
  const [startDate, SetStartDate] = useState<Date>(new Date());

  return (
    <ReactDatePicker
      closeOnScroll={true}
      selected={startDate}
      className="red-border"
      onChange={(date: Date | null) => 
      {
        if (date) 
        {
          SetStartDate(date);
        }
      }}
    />
  );
}

export function RangePicker() {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const onChange = (dates: [Date | null, Date | null] | null) => {
    if (dates) {
      const [start, end] = dates;
      setStartDate(start ?? undefined);
      setEndDate(end ?? undefined);
    }
  };

  return (
    <ReactDatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    />
  );
}