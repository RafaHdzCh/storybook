import React from "react";
import { DayPicker, RangePicker, DayPickerWithTime, WeekdayPicker,TimePicker, DayPickerWithSpecificTime } from "../../../components/Atoms/Inputs/DatePicker";

export default 
{
  title: 'Atoms/Inputs/DatePicker',
  component: DayPicker,
};

export const DefaultDayPicker = () => <DayPicker />;
export const DefaultTimePicker = () => <TimePicker />;
export const DefaultDayPickerWithTime = () => <DayPickerWithTime />;
export const DefaultDayPickerWithSpecificTime = () => <DayPickerWithSpecificTime />;
export const DefaultWeekDayPicker = () => <WeekdayPicker />;
export const DefaultRangePicker = () => <RangePicker />;