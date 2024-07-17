import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Default } from "../../../components/Atoms/Inputs/DatePicker"

export default {
  title: 'Atoms/Inputs/DatePicker',
  component: Default
} as Meta;

const Template: StoryFn<typeof Default> = (args) => <Default {...args} />;


export const DefaultDatePicker = Template.bind({});
DefaultDatePicker.args = {};

export const DisabledDatePicker = Template.bind({});
DisabledDatePicker.args = {
  disabled: true,
};
