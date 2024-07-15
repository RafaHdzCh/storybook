import React from "react";
import Button from "./Button";
import Center from "../Center/Center";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: "Form/Button",
  component: Button,
  parameters: 
  {
    viewport: 
    {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [(Story) => <Center><Story /></Center>],
  argTypes: 
  {
    primary: { control: 'boolean' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    size: 
    {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
    onMouseOver: { action: "over"}
  },
};

const Template = (args) => <Button {...args} />;

export const GenericButton = Template.bind({});
GenericButton.args = {
  primary: true,
  disabled: false,
  label: 'Button',
  size: 'medium',
};
