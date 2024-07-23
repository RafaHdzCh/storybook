import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import DatePicker from "../../../components/Atoms/Inputs/DatePicker"

export default {
  title: 'Atoms/Inputs/DatePicker',
  component: DatePicker
} as Meta;

const Template: StoryFn<typeof DatePicker> = (args) => <DatePicker />;


export const DayPicker = Template.bind({});
DayPicker.args = 
{

};
