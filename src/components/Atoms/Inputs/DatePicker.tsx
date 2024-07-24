import { getDay } from "date-fns";
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
      placeholderText="Select a range..."
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

export function DayPickerWithTime() 
{
  const [startDate, SetStartDate] = useState<Date>(new Date());

  return (
    <ReactDatePicker
      closeOnScroll={true}
      selected={startDate}
      className="border border-black shadow-md"
      placeholderText="Select a date..."
      timeInputLabel="Time:"
      dateFormat="MM/dd/yyyy h:mm aa"
      showTimeInput
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
      placeholderText="Select a range"
      onChange={handleDateChange}
      isClearable
    />
  );
}

export function WeekdayPicker() 
{
  const [startDate, setStartDate] = useState<Date | null>(null);

  const isWeekday = (date: Date) => 
  {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  return (
    <ReactDatePicker
      selected={startDate}
      className="border border-black shadow-md"
      filterDate={isWeekday}
      placeholderText="Select a weekday"
      onChange={(date: Date | null) => 
      {
        if (date) {
          setStartDate(date);
        }
      }}
    />
  );
}

export function TimePicker() 
{
  const [startDate, SetStartDate] = useState<Date>(new Date());

  return (
    <ReactDatePicker
      closeOnScroll={true}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
      selected={startDate}
      className="border border-black shadow-md"
      placeholderText="Select a range..."
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