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
      className="border border-black shadow-md"
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
  const [dateRange, setDateRange] = useState<[Date | undefined, Date | undefined]>([undefined, undefined]);

  const handleDateChange = (update: [Date | null, Date | null] | null) => 
  {
    if (update) 
    {
      const [start, end] = update;
      setDateRange([start ?? undefined, end ?? undefined]);
    }
  };

  const [startDate, endDate] = dateRange;

  return (
    <ReactDatePicker
      closeOnScroll={true}
      selectsRange
      selected={startDate}
      startDate={startDate}
      endDate={endDate}
      className="border border-black shadow-md"
      onChange={handleDateChange}
      isClearable
    />
  );
}