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
  }
} as Meta;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const SelectDefaultValue = Template.bind({});
SelectDefaultValue.args = {
  defaultValue: 'Green',
  icon: "",
  size: "medium"
};
