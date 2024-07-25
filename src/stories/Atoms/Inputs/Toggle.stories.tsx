import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {Toggle, ToggleProps} from '../../../components/Atoms/Inputs/Toggle';

export default {
  title: "Atoms/Inputs/Toggle",
  component: Toggle
} as Meta<typeof Toggle>;

const Template: StoryFn<ToggleProps> = (args) => <Toggle {...args} />;

export const DefaultToggle = Template.bind({});
DefaultToggle.args = 
{
  size: "medium",
  handleColor: "#84cc16",
  bgColor: "#e5e5e5",
  bgActiveColor : "#d9f99d",
  defaultChecked: false,
};
