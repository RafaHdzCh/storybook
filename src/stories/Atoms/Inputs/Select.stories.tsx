import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Select } from "../../../components/Atoms/Inputs/Select";

export default {
  title: 'Atoms/Inputs/Select',
  component: Select,
  parameters: 
  {
    layout: 'centered',
  },
  argTypes:
  {
    as: { table: { disable: true } },
    root: { table: { disable: true } },
    icon: { table: { disable: true } },
    select: { table: { disable: true } },
    appearance: { table: { disable: true } },
    options: { control: { type: 'object' } },
    label: { control: { type: 'text' } }, 
  }
} as Meta;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const SelectDefaultValue = Template.bind({});
SelectDefaultValue.args = {
  label: 'Select a color', 
  defaultValue: 'Dog',
  options: [
    { value: 'Dog', label: 'Dog' },
    { value: 'Green', label: 'Green' },
    { value: 'Blue', label: 'Blue' },
  ],
  icon: "",
  size: "medium"
};
