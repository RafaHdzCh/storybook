import * as React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { DatePicker, DatePickerProps } from '@fluentui/react-datepicker-compat';
import { Field } from '@fluentui/react-components';

export default {
  title: 'Atoms/Inputs/DatePicker',
  component: DatePicker,
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ]
} as Meta;

const Template: StoryFn<DatePickerProps> = (args) => {
  return (
    <Field label="Select a date">
      <DatePicker className="max-w-[300px]" placeholder="Select a date..." {...args} />
    </Field>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};