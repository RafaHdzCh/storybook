import { getDay, setHours, setMinutes } from "date-fns";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  children?: React.ReactNode; 
}

const datePickerClassname = "w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500";

export const DatePickerComponent: React.FC<DatePickerProps> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export function DayPicker() {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <ReactDatePicker
      selected={startDate} 
      closeOnScroll={true}
      className={datePickerClassname}
      placeholderText="Select a day..."
      onChange={(date: Date | null) => {
        if (date) {
          setStartDate(date);
        }
      }}
    />
  );
}

export function DayPickerWithTime() {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <ReactDatePicker
      selected={startDate} 
      closeOnScroll={true}
      className={datePickerClassname}
      placeholderText="Select a date..."
      timeInputLabel="Time:"
      dateFormat="MM/dd/yyyy h:mm aa"
      showTimeInput
      onChange={(date: Date | null) => {
        if (date) {
          setStartDate(date);
        }
      }}
    />
  );
}

export function DayPickerWithSpecificTime() {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <ReactDatePicker
      selected={startDate}
      closeOnScroll={true}
      className={datePickerClassname}
      placeholderText="Select a date..."
      timeInputLabel="Time:"
      minTime={setHours(setMinutes(new Date(), 0), 17)}
      maxTime={setHours(setMinutes(new Date(), 30), 20)}
      dateFormat="MM/dd/yyyy h:mm aa"
      showTimeSelect
      onChange={(date: Date | null) => {
        if (date) {
          setStartDate(date);
        }
      }}
    />
  );
}

export function RangePicker() {
  const [dateRange, setDateRange] = useState<[Date | undefined, Date | undefined]>([undefined, undefined]);

  const handleDateChange = (update: [Date | null, Date | null] | null) => {
    if (update) {
      const [start, end] = update;
      setDateRange([start ?? undefined, end ?? undefined]);
    }
  };

  const [startDate, endDate] = dateRange;

  return (
    <ReactDatePicker
      selectsRange
      startDate={startDate}
      endDate={endDate}
      selected={startDate}
      closeOnScroll={true}
      className={datePickerClassname}
      placeholderText="Select a range"
      onChange={handleDateChange}
      isClearable
    />
  );
}

export function WeekdayPicker() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const isWeekday = (date: Date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  return (
    <ReactDatePicker
      selected={startDate}
      className={datePickerClassname}
      filterDate={isWeekday}
      placeholderText="Select a weekday"
      onChange={(date: Date | null) => {
        if (date) {
          setStartDate(date);
        }
      }}
    />
  );
}

export function TimePicker() {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <ReactDatePicker
      selected={startDate}
      closeOnScroll={true}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
      className={datePickerClassname}
      placeholderText="Select a time..."
      onChange={(date: Date | null) => {
        if (date) {
          setStartDate(date);
        }
      }}
    />
  );
}
